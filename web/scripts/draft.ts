/**
 * pnpm draft --batch <id> — research object to content files (03 §4).
 *
 * Refuses to draft a page whose research object is incomplete. That refusal is
 * the whole design: a page with five facts does not become a page with five
 * facts and padding, it becomes a page that was not written.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { PageMeta, ResearchObject } from "../lib/content/schemas";
import { inventory } from "../lib/content/inventory";
import { guardedFetch, requireEnv, runScript } from "../lib/net";

const RESEARCH = join(process.cwd(), "..", "seo", "research");
const CONTENT = join(process.cwd(), "content");
const PROMPT = join(process.cwd(), "..", "seo", "prompts", "page-generation.md");
const CONTRACTS = join(process.cwd(), "..", "seo", "01-PAGE-ARCHETYPES.md");
const MODEL = "claude-opus-5";

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function callModel(system: string, user: string, key: string): Promise<string> {
  const res = await guardedFetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL, max_tokens: 16000, system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!res.ok) throw new Error(`Anthropic API returned ${res.status}: ${await res.text()}`);
  const doc = (await res.json()) as { content: { type: string; text?: string }[] };
  return doc.content.filter((c) => c.type === "text").map((c) => c.text ?? "").join("");
}

async function main(): Promise<void> {
  const batch = arg("batch");
  const idsArg = arg("ids");
  const rows = inventory().filter((r) =>
    idsArg ? idsArg.split(",").includes(r.id) : batch ? r.notes.includes(batch) : false);
  if (!rows.length) {
    console.log("[draft] no rows matched. Pass --ids or --batch.");
    return;
  }
  if (rows.length > 25) {
    console.error(`[draft] ${rows.length} rows — batches are capped at 25 (CLAUDE.md §1.4).`);
    process.exit(1);
  }

  const { ANTHROPIC_API_KEY } = requireEnv("ANTHROPIC_API_KEY");
  const system = [readFileSync(PROMPT, "utf8"), "", "---", "",
    readFileSync(CONTRACTS, "utf8")].join("\n");
  const experiencePath = join(CONTENT, "experience.json");
  const experience = existsSync(experiencePath) ? readFileSync(experiencePath, "utf8") : "[]";

  let written = 0, blocked = 0;
  for (const row of rows) {
    const rf = join(RESEARCH, `${row.id}.json`);
    if (!existsSync(rf)) {
      console.log(`[draft] ${row.id}: no research object — run pnpm research first`);
      blocked++;
      continue;
    }
    const research = ResearchObject.safeParse(JSON.parse(readFileSync(rf, "utf8")));
    if (!research.success) {
      console.error(`[draft] ${row.id}: research object is invalid, skipped`);
      blocked++;
      continue;
    }
    if (research.data.status === "incomplete") {
      console.log(`[draft] ${row.id}: BLOCKED — ${research.data.incomplete_reasons.join("; ")}`);
      blocked++;
      continue;
    }

    const user = JSON.stringify({
      inventory_row: row,
      research: research.data,
      experience_library: JSON.parse(experience),
      batch_id: batch ?? null,
    }, null, 2);

    const text = await callModel(system, user, ANTHROPIC_API_KEY);
    const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const out = JSON.parse(json) as { meta: unknown; mdx?: string; blocked?: string[] };

    if (out.blocked?.length) {
      console.log(`[draft] ${row.id}: generator returned blocked — ${out.blocked.join("; ")}`);
      blocked++;
      continue;
    }
    const meta = PageMeta.safeParse(out.meta);
    if (!meta.success) {
      console.error(`[draft] ${row.id}: PageMeta invalid:`);
      for (const i of meta.error.issues.slice(0, 6)) {
        console.error(`    ${i.path.join(".")}: ${i.message}`);
      }
      blocked++;
      continue;
    }
    const base = join(CONTENT, `${row.url.replace(/^\//, "")}`);
    mkdirSync(dirname(base), { recursive: true });
    writeFileSync(`${base}.json`, JSON.stringify(meta.data, null, 2) + "\n", "utf8");
    writeFileSync(`${base}.mdx`, out.mdx ?? "", "utf8");
    written++;
    console.log(`[draft] wrote ${row.url}`);
  }

  console.log(`\n[draft] ${written} written, ${blocked} blocked.`);
  console.log("[draft] Next: pnpm links, then pnpm gates --batch " + (batch ?? "<id>"));
}

runScript("draft", main);
