/**
 * pnpm gates [--batch <id>] [--archetype <a>] [--wave <n>] [--stage research]
 *
 * Writes reports/<batch_id>.md and exits non-zero if any gate fails, so this is
 * usable as a CI step (02 §2). `--stage research` runs only G01-G03, which is
 * the pre-draft check.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { Fact, ExperienceEntry, ResearchObject } from "../lib/content/schemas";
import { loadAllPages, type LoadedPage } from "../lib/content/loader";
import {
  loadGateConfig, runGates, g01, g02, g03, summarise,
  type GateInput, type GateResult,
} from "../lib/gates";

const SEO = join(process.cwd(), "..", "seo");
const REPORTS = join(process.cwd(), "..", "reports");

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

function readJson<T>(p: string, fallback: T): T {
  return existsSync(p) ? (JSON.parse(readFileSync(p, "utf8")) as T) : fallback;
}

function loadFactUsage(): Map<string, number> {
  const idx = readJson<Record<string, string[]>>(join(SEO, "data", "facts", "index.json"), {});
  return new Map(Object.entries(idx).map(([id, pages]) => [id, pages.length]));
}

function loadExperience(): Map<string, ExperienceEntry> {
  const raw = readJson<unknown[]>(join(process.cwd(), "content", "experience.json"), []);
  const out = new Map<string, ExperienceEntry>();
  for (const e of raw) {
    const p = ExperienceEntry.safeParse(e);
    if (!p.success) {
      throw new Error(`[gates] content/experience.json has an invalid entry: ` +
        p.error.issues.map((i) => i.message).join("; "));
    }
    out.set(p.data.id, p.data);
  }
  return out;
}

function loadFacts(page: LoadedPage): Fact[] {
  const p = join(SEO, "research", `${page.meta.id}.json`);
  if (!existsSync(p)) return [];
  const parsed = ResearchObject.safeParse(JSON.parse(readFileSync(p, "utf8")));
  if (!parsed.success) {
    throw new Error(`[gates] research/${page.meta.id}.json is invalid: ` +
      parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "));
  }
  const want = new Set(page.meta.facts_used);
  return parsed.data.facts.filter((f) => want.has(f.fact_id));
}

function loadSimilarity(id: string): GateInput["similarity"] {
  const rep = readJson<{ pages?: Record<string, {
    max_sibling: [number, string | null]; max_parent: [number, string | null];
    max_any: [number, string | null]; boilerplate_ratio: number;
  }> }>(join(SEO, "data", "similarity", "report.json"), {});
  const row = rep.pages?.[id];
  if (!row) return undefined;
  return {
    max_sibling: row.max_sibling[0], max_parent: row.max_parent[0],
    max_any: row.max_any[0], boilerplate_ratio: row.boilerplate_ratio,
  };
}

function icon(s: GateResult["status"]): string {
  return { pass: "PASS", fail: "FAIL", blocked: "BLOCK", skipped: "skip" }[s];
}

function main(): number {
  const batch = arg("batch");
  const archetype = arg("archetype");
  const wave = arg("wave");
  const researchOnly = arg("stage") === "research";

  let pages = loadAllPages();
  if (batch) pages = pages.filter((p) => p.meta.batch_id === batch);
  if (archetype) pages = pages.filter((p) => p.meta.archetype === archetype);
  if (wave) pages = pages.filter((p) => p.meta.wave === Number(wave));

  if (!pages.length) {
    console.log("[gates] no pages matched. Nothing to check.");
    return 0;
  }

  const config = loadGateConfig();
  const factUsage = loadFactUsage();
  const experience = loadExperience();
  const corpus = loadAllPages().map((p) => p.meta);

  const lines: string[] = [];
  const id = batch ?? archetype ?? `wave-${wave ?? "all"}`;
  lines.push(`# Gate report — ${id}`, "", `Run ${config.today} · ${pages.length} page(s)`, "");

  let failed = 0;
  for (const page of pages) {
    const input: GateInput = {
      meta: page.meta, body: page.body, facts: loadFacts(page),
      factUsage, experience, corpus, similarity: loadSimilarity(page.meta.id), config,
    };
    const results = researchOnly ? [g01(input), g02(), g03(input)] : runGates(input);
    const s = summarise(results);
    const worst = results.some((r) => r.status === "blocked") ? "BLOCKED"
      : results.some((r) => r.status === "fail") ? "FAILED"
      : s.skipped ? "INCOMPLETE" : "READY";
    if (worst !== "READY") failed++;

    console.log(`${worst.padEnd(11)} ${page.meta.url}  ` +
      `(${s.pass} pass, ${s.fail} fail, ${s.blocked} blocked, ${s.skipped} skipped)`);

    lines.push(`## ${page.meta.url} — ${worst}`, "");
    lines.push("| Gate | Name | Status | Observed | Detail |", "|---|---|---|---|---|");
    for (const r of results) {
      lines.push(`| ${r.id} | ${r.name} | ${icon(r.status)} | ${r.observed ?? ""} | ${r.detail} |`);
    }
    lines.push("");
  }

  mkdirSync(REPORTS, { recursive: true });
  const out = join(REPORTS, `${id}.md`);
  writeFileSync(out, lines.join("\n"), "utf8");
  console.log(`\n[gates] report: ${out}`);
  console.log(`[gates] ${pages.length - failed}/${pages.length} page(s) ready`);
  return failed ? 1 : 0;
}

process.exit(main());
