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
import type { ResearchObject as ResearchObjectType, PageMeta } from "../lib/content/schemas";
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

/**
 * fact_id -> how many pages cite it, derived from the corpus being gated.
 *
 * This used to read seo/data/facts/index.json. That file was never generated, so
 * readJson returned {} on every run, every fact reported one use, and both
 * gates that depend on the count — gReuse's §C2 cap and G01's page-specific
 * filter — passed everything put in front of them. Eight facts had reached four
 * and five pages against a cap of three while the report said "Reuse caps PASS".
 *
 * Deriving it from the pages themselves removes the failure mode rather than
 * fixing one instance of it: there is no file to regenerate, so the count cannot
 * be stale, and a gate that depends on corpus-wide state now reads that state
 * directly. The index file is still written afterwards, as an artefact for the
 * review UI rather than as the gate's input.
 */
function deriveFactUsage(corpus: PageMeta[]): Map<string, number> {
  const out = new Map<string, number>();
  for (const meta of corpus) {
    for (const id of meta.facts_used) out.set(id, (out.get(id) ?? 0) + 1);
  }
  return out;
}

/** Write the usage index for the review UI. Never read back by the gates. */
function writeFactIndex(corpus: PageMeta[]): void {
  const idx: Record<string, string[]> = {};
  for (const meta of corpus) {
    for (const id of meta.facts_used) (idx[id] ??= []).push(meta.url);
  }
  const dir = join(SEO, "data", "facts");
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.json"), JSON.stringify(idx, null, 2) + "\n");
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

const researchCache = new Map<string, ResearchObjectType | null>();

function loadResearch(page: LoadedPage): ResearchObjectType | null {
  if (researchCache.has(page.meta.id)) return researchCache.get(page.meta.id)!;
  const p = join(SEO, "research", `${page.meta.id}.json`);
  if (!existsSync(p)) {
    researchCache.set(page.meta.id, null);
    return null;
  }
  const parsed = ResearchObject.safeParse(JSON.parse(readFileSync(p, "utf8")));
  if (!parsed.success) {
    throw new Error(`[gates] research/${page.meta.id}.json is invalid: ` +
      parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; "));
  }
  researchCache.set(page.meta.id, parsed.data);
  return parsed.data;
}

function loadFacts(page: LoadedPage): Fact[] {
  const research = loadResearch(page);
  if (!research) return [];
  const want = new Set(page.meta.facts_used);
  return research.facts.filter((f) => want.has(f.fact_id));
}

/**
 * Fact ids 02 §2 G01 exempts from the page-specific count and the §C2 reuse cap.
 *
 * Absent or unreadable means an empty set, which is the strict reading: no fact
 * is exempt. A missing registry must not quietly widen what the gates allow.
 */
function loadSharedFacts(): Set<string> {
  const p = join(process.cwd(), "..", "seo", "data", "facts", "shared.json");
  if (!existsSync(p)) return new Set();
  try {
    const raw = JSON.parse(readFileSync(p, "utf8")) as { shared?: { fact_id?: string }[] };
    return new Set((raw.shared ?? []).map((e) => e.fact_id).filter((x): x is string => !!x));
  } catch {
    return new Set();
  }
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

/** What gatePage needs that is the same for every page in a run. */
export interface GateContext {
  config: ReturnType<typeof loadGateConfig>;
  sharedFacts: Set<string>;
  experience: ReturnType<typeof loadExperience>;
  corpus: PageMeta[];
  factUsage: Map<string, number>;
  researchOnly?: boolean;
}

export type PageVerdict = "READY" | "INCOMPLETE" | "FAILED" | "BLOCKED";

/**
 * Run the gates for one page and reduce them to a single verdict.
 *
 * Exported because publish.ts needs the same answer this script prints. It used
 * to have no way to ask: gates.ts never writes meta.status, and publish.ts
 * checked status and inbound links only, so a page a gate had blocked could
 * still be flipped to indexable. Both callers now read one implementation.
 */
export function gatePage(
  page: LoadedPage,
  ctx: GateContext,
): { results: GateResult[]; worst: PageVerdict } {
  const input: GateInput = {
    meta: page.meta, body: page.body, facts: loadFacts(page),
    // 01 §C4's link rules depend on funnel position, which lives on the
    // inventory row rather than on the page.
    funnel: page.row.funnel,
    blockCoverage: loadResearch(page)?.block_coverage,
    fetchLog: loadResearch(page)?.fetch_log,
    factUsage: ctx.factUsage,
    sharedFacts: ctx.sharedFacts,
    experience: ctx.experience,
    corpus: ctx.corpus,
    similarity: loadSimilarity(page.meta.id),
    config: ctx.config,
  };
  const results = ctx.researchOnly
    ? [g01(input), g02(input), g03(input)]
    : runGates(input);
  const s = summarise(results);
  const worst: PageVerdict = results.some((r) => r.status === "blocked") ? "BLOCKED"
    : results.some((r) => r.status === "fail") ? "FAILED"
    : s.skipped ? "INCOMPLETE" : "READY";
  return { results, worst };
}

/** Build the run-wide context once. Exported alongside gatePage. */
export function gateContext(researchOnly = false): GateContext {
  // The whole corpus, not a filtered subset: a reuse cap is site-wide.
  const corpus = loadAllPages().map((p) => p.meta);
  return {
    config: loadGateConfig(),
    sharedFacts: loadSharedFacts(),
    experience: loadExperience(),
    corpus,
    factUsage: deriveFactUsage(corpus),
    researchOnly,
  };
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

  const { config, sharedFacts, experience, corpus, factUsage } =
    gateContext(researchOnly);
  writeFactIndex(corpus);

  const lines: string[] = [];
  const id = batch ?? archetype ?? `wave-${wave ?? "all"}`;
  lines.push(`# Gate report — ${id}`, "", `Run ${config.today} · ${pages.length} page(s)`, "");

  let failed = 0;
  for (const page of pages) {
    const { results, worst } = gatePage(page, {
      config, sharedFacts, experience, corpus, factUsage, researchOnly,
    });
    const s = summarise(results);
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

// Only when run directly. publish.ts imports gatePage from here, and an
// import that exits the process would take that caller down with it.
if (process.argv[1] && /gates\.ts$/.test(process.argv[1])) process.exit(main());
