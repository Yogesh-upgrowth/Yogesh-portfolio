/**
 * pnpm research --batch <id> — one page, one subagent (03 §4, prompts/research.md).
 *
 * Fail-closed by construction: the subagent returns a ResearchObject, this
 * validates it, and anything short of 6 page-specific facts or 50% primary
 * sources is written with status "incomplete". draft.ts refuses those, so a
 * thin page is never drafted rather than being drafted and then caught.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { ResearchObject, type Fact } from "../lib/content/schemas";
import { inventory } from "../lib/content/inventory";
import { guardedFetch, requireEnv, runScript } from "../lib/net";

const RESEARCH = join(process.cwd(), "..", "seo", "research");
const PROMPT = join(process.cwd(), "..", "seo", "prompts", "research.md");
const ALLOWLIST = join(process.cwd(), "..", "seo", "config", "sources-allowlist.json");
const BLOCKLIST = join(process.cwd(), "..", "seo", "config", "blocked-domains.json");
const MODEL = "claude-opus-5";
const MIN_FACTS = 6;

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

function primaryDomains(): Set<string> {
  const doc = JSON.parse(readFileSync(ALLOWLIST, "utf8")) as { domains: string[] };
  return new Set(doc.domains);
}

function blockedPatterns(): { patterns: string[]; domains: string[] } {
  const doc = JSON.parse(readFileSync(BLOCKLIST, "utf8")) as
    { patterns: string[]; domains: string[] };
  return doc;
}

function isBlocked(domain: string, block: { patterns: string[]; domains: string[] }): boolean {
  if (block.domains.some((d) => domain === d || domain.endsWith(`.${d}`))) return true;
  return block.patterns.some((p) => {
    const rx = new RegExp("^" + p.split("*").map(escapeRx).join(".*") + "$", "i");
    return rx.test(domain);
  });
}

function escapeRx(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Marks the research object incomplete when it cannot support a page.
 * Returns the reasons so the report can say exactly what was missing.
 */
function assess(facts: Fact[]): string[] {
  const reasons: string[] = [];
  const primary = primaryDomains();
  const block = blockedPatterns();

  const blocked = facts.filter((f) => isBlocked(f.source_domain, block));
  if (blocked.length) {
    reasons.push(`${blocked.length} fact(s) cite blocked domains: ` +
      blocked.map((f) => f.source_domain).join(", "));
  }
  if (facts.length < MIN_FACTS) {
    reasons.push(`${facts.length} facts, need ${MIN_FACTS}`);
  }
  const primaryCount = facts.filter(
    (f) => f.primary || primary.has(f.source_domain) ||
      ["device_check", "own_data", "filing", "interview"].includes(f.method),
  ).length;
  if (facts.length && primaryCount / facts.length < 0.5) {
    reasons.push(`${primaryCount}/${facts.length} primary sources, need at least half`);
  }
  return reasons;
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
      model: MODEL,
      max_tokens: 8000,
      system,
      tools: [{ type: "web_search_20250305", name: "web_search", max_uses: 20 }],
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
    console.log("[research] no rows matched. Pass --ids or --batch.");
    return;
  }
  const { ANTHROPIC_API_KEY } = requireEnv("ANTHROPIC_API_KEY");
  const system = readFileSync(PROMPT, "utf8");
  mkdirSync(RESEARCH, { recursive: true });

  let complete = 0, incomplete = 0;
  for (const row of rows) {
    const out = join(RESEARCH, `${row.id}.json`);
    if (existsSync(out) && !process.argv.includes("--force")) {
      console.log(`[research] ${row.id} exists, skipping (use --force to redo)`);
      continue;
    }
    console.log(`[research] ${row.url}`);
    const user = JSON.stringify({
      page_id: row.id, url: row.url, archetype: row.archetype,
      primary_keyword: row.primary_keyword,
      secondary_keywords: row.secondary_keywords,
      entity_a: row.entity_a, entity_b: row.entity_b, geo: row.geo,
      notes: row.notes,
    }, null, 2);

    const text = await callModel(system, user, ANTHROPIC_API_KEY);
    const json = text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1);
    const parsed = ResearchObject.safeParse(JSON.parse(json));
    if (!parsed.success) {
      console.error(`[research] ${row.id}: subagent output failed validation:`);
      for (const i of parsed.error.issues.slice(0, 5)) {
        console.error(`    ${i.path.join(".")}: ${i.message}`);
      }
      continue;
    }
    const obj = parsed.data;
    const reasons = assess(obj.facts);
    obj.status = reasons.length ? "incomplete" : "complete";
    obj.incomplete_reasons = reasons;
    writeFileSync(out, JSON.stringify(obj, null, 2) + "\n", "utf8");
    if (reasons.length) {
      incomplete++;
      console.log(`    INCOMPLETE — ${reasons.join("; ")}`);
    } else {
      complete++;
      console.log(`    complete — ${obj.facts.length} facts`);
    }
  }
  console.log(`\n[research] ${complete} complete, ${incomplete} incomplete.`);
  console.log("[research] Incomplete objects are not drafted (CLAUDE.md §1.1).");
}

runScript("research", main);
