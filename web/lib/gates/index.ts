/**
 * gates.ts — 02-QUALITY-GATES.md §2.
 *
 * Fail closed. A page passes only when every gate returns `pass`.
 *
 * G02, G18, G19 and G20 need things this environment does not have (live HTTP,
 * Lighthouse, DataForSEO SERPs, an LLM judge). They return `skipped` with the
 * reason rather than `pass`, so a skipped gate can never be mistaken for a
 * cleared one — `allPassed` treats any skip as not-done.
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { PageMeta, Fact, ExperienceEntry } from "../content/schemas";
import { contractFor, requiredLinkRoles, CROSS, UNDER_TOLERANCE, OVER_TOLERANCE } from "./contracts";
import {
  firstParagraph, sections, sentences, toProse, wordCount, words,
  fleschKincaidGrade, passiveShare,
} from "./prose";

export type GateStatus = "pass" | "fail" | "blocked" | "skipped";

export interface GateResult {
  id: string;
  name: string;
  status: GateStatus;
  detail: string;
  /** Observed value vs threshold, for the batch report. */
  observed?: string;
}

export interface GateInput {
  meta: PageMeta;
  body: string;
  facts: Fact[];
  /** fact_id -> number of pages using it, from data/facts/index.json. */
  factUsage: Map<string, number>;
  experience: Map<string, ExperienceEntry>;
  /** Every other page's meta, for corpus-wide uniqueness (G10). */
  corpus: PageMeta[];
  /** research.md rule 7: required block -> supporting fact_ids. Read by G01. */
  blockCoverage?: Record<string, string[]>;
  /** research.md output: every fetch and its status. Read by G02. */
  fetchLog?: { url: string; status: number; used: boolean; why: string }[];
  /** Funnel position from the inventory row — 01 §C4 link rules depend on it. */
  funnel?: string;
  /** Set when similarity_check.py has run (G04/G05). */
  similarity?: {
    max_sibling: number; max_parent: number; max_any: number; boilerplate_ratio: number;
  };
  config: GateConfig;
}

export interface GateConfig {
  bannedPhrases: string[];
  bannedOpeners: string[];
  /** config/blocked-domains.json — never a legitimate source (G02). */
  blockedDomains: string[];
  fxRate: number | null;
  fxAsOf: string | null;
  /** ISO date the gates are being run for — freshness is measured from here. */
  today: string;
}

const CONFIG_DIR = join(process.cwd(), "..", "seo", "config");

export function loadGateConfig(today = new Date().toISOString().slice(0, 10)): GateConfig {
  const banned = JSON.parse(readFileSync(join(CONFIG_DIR, "banned-phrases.json"), "utf8"));
  const fx = JSON.parse(readFileSync(join(CONFIG_DIR, "fx.json"), "utf8"));
  const blocked = JSON.parse(readFileSync(join(CONFIG_DIR, "blocked-domains.json"), "utf8"));
  return {
    bannedPhrases: banned.phrases,
    bannedOpeners: banned.banned_openers,
    blockedDomains: blocked.domains ?? [],
    fxRate: fx.rate ?? null,
    fxAsOf: fx.as_of ?? null,
    today,
  };
}

const ok = (id: string, name: string, detail: string, observed?: string): GateResult =>
  ({ id, name, status: "pass", detail, observed });
const bad = (id: string, name: string, detail: string, observed?: string): GateResult =>
  ({ id, name, status: "fail", detail, observed });
const skip = (id: string, name: string, detail: string): GateResult =>
  ({ id, name, status: "skipped", detail });

function daysBetween(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);
}

// ── G01 Research completeness ────────────────────────────────────────────────
export function g01(i: GateInput): GateResult {
  const N = "Research completeness";
  const specific = i.facts.filter((f) => (i.factUsage.get(f.fact_id) ?? 1) <= 3);
  if (i.facts.length < 6) {
    return { id: "G01", name: N, status: "blocked",
      detail: `${i.facts.length} facts; 6 page-specific are required. Never drafted.`,
      observed: `${i.facts.length}/6` };
  }
  if (specific.length < 6) {
    return { id: "G01", name: N, status: "blocked",
      detail: `${specific.length} of ${i.facts.length} facts are page-specific ` +
        "(used on ≤2 other pages). Shared facts do not count.",
      observed: `${specific.length}/6` };
  }
  const missing = i.facts.filter((f) => !f.source_url || !f.verified_on || !f.excerpt);
  if (missing.length) {
    return { id: "G01", name: N, status: "blocked",
      detail: `${missing.length} fact(s) missing source_url, verified_on or excerpt: ` +
        missing.slice(0, 3).map((f) => f.fact_id).join(", ") };
  }

  // Required-block coverage. prompts/research.md rule 7 has the researcher
  // report which fact_ids support each required block, and states that gates.ts
  // reads block_coverage for G01. Without this, six facts that all support one
  // section pass a check meant to prove the whole contract is evidenced.
  const contract = contractFor(i.meta.archetype);
  if (contract.requiredBlocks?.length) {
    if (!i.blockCoverage) {
      return { id: "G01", name: N, status: "blocked",
        detail: "research object has no block_coverage, so required-block support " +
          "cannot be checked (prompts/research.md rule 7)" };
    }
    const uncovered = contract.requiredBlocks.filter(
      (b) => !(i.blockCoverage![b]?.length),
    );
    if (uncovered.length) {
      return { id: "G01", name: N, status: "blocked",
        detail: `${uncovered.length} required block(s) have no supporting facts: ` +
          uncovered.slice(0, 5).join(", "),
        observed: `${contract.requiredBlocks.length - uncovered.length}/${contract.requiredBlocks.length} blocks` };
    }
  }
  return ok("G01", N, `${specific.length} page-specific sourced facts, all required blocks covered`,
    `${specific.length} facts`);
}

// ── G03 Number provenance ───────────────────────────────────────────────────
const ESTIMATE = /\bmy estimate\b/i;
const METHOD = /\b(?:method|because|based on|derived from|assuming)\b/i;

export function g03(i: GateInput): GateResult {
  const N = "Number provenance";
  const used = new Set(i.meta.facts_used);
  // Numbers are compared with thousands separators removed on both sides.
  // Without that, a fact carrying value 15000 does not match the prose's
  // "₹15,000", and the gate fails a figure it has the source for.
  const norm = (v: string) => v.replace(/[,\s]/g, "").replace(/\.$/, "");
  const factNumbers = new Set<string>();
  for (const f of i.facts) {
    for (const n of String(f.claim).match(/[\d][\d,.]*/g) ?? []) factNumbers.add(norm(n));
    if (f.value !== undefined) factNumbers.add(norm(String(f.value)));
  }
  // Illustrative examples are exempt (02 §2 G03), and they must be removed
  // BEFORE toProse: toProse strips component tags, so an exemption applied
  // after it has nothing left to match and silently never fires. That bug made
  // every worked example look like an unsourced number.
  const prose = toProse(
    i.body.replace(/<Example\b[^>]*\billustrative\b[^>]*>[\s\S]*?<\/Example>/g, " "),
  );

  /**
   * A currency conversion of a sourced figure is not an unsourced number.
   * G15 requires every price to carry INR and USD, so without this exemption
   * the two gates contradict each other: G15 demands the counterpart currency
   * and G03 rejects it for having no fact of its own.
   *
   * The conversion has to actually check out against the recorded rate, within
   * 3% for the rounding a page is allowed to do.
   */
  const fx = i.meta.fx_rate_used ?? i.config.fxRate;
  const converted = new Set<string>();
  if (fx) {
    for (const v of factNumbers) {
      const n = Number(v);
      if (!Number.isFinite(n) || n === 0) continue;
      for (const candidate of [n * fx, n / fx]) {
        // Every rounding a page might plausibly present.
        for (const r of [Math.round(candidate), Math.round(candidate / 10) * 10,
                         Math.round(candidate / 100) * 100, Number(candidate.toFixed(2))]) {
          if (Math.abs(r - candidate) / candidate <= 0.03) converted.add(String(r));
        }
      }
    }
  }

  /**
   * Numbers inside a FromMyWork block are sourced by the experience entry it
   * cites, not by a research fact. G12 already checks the block renders that
   * entry faithfully, so requiring a second source here would make the two
   * gates contradict: G12 says first-person numbers come from the library and
   * G03 would reject them for not being in `facts`.
   *
   * The exemption is per-number, not per-block: the figure has to actually
   * appear in the cited entry, so a block cannot smuggle in a number the entry
   * never contained.
   */
  const fromExperience = new Set<string>();
  for (const b of i.body.matchAll(/<FromMyWork\b[^>]*\bexp=["']([^"']+)["'][^>]*>([\s\S]*?)<\/FromMyWork>/g)) {
    const entry = i.experience.get(b[1] ?? "");
    if (!entry) continue;
    const inEntry = `${entry.claim} ${entry.quote ?? ""} ` +
      entry.numbers.map((n) => `${n.value ?? ""} ${n.from ?? ""} ${n.to ?? ""} ${n.window ?? ""}`).join(" ");
    for (const n of inEntry.match(/[\d][\d,.]*/g) ?? []) fromExperience.add(norm(n));
  }

  const offenders: string[] = [];
  for (const s of sentences(prose)) {
    if (ESTIMATE.test(s) && METHOD.test(s)) continue;
    const nums = s.match(/(?:₹|\$)\s?[\d][\d,.]*|[\d][\d,.]*\s?%|\b[\d][\d,.]{2,}\b/g) ?? [];
    for (const raw of nums) {
      const bare = norm(raw.replace(/[₹$%]/g, ""));
      if (factNumbers.has(bare)) continue;
      if (converted.has(bare)) continue;
      if (fromExperience.has(bare)) continue;
      offenders.push(raw.trim());
    }
  }
  if (!used.size && offenders.length) {
    return bad("G03", N, "facts_used is empty but the prose carries numbers");
  }
  if (offenders.length) {
    return bad("G03", N,
      `${offenders.length} number(s) in prose trace to no fact and are not labelled ` +
      `"my estimate" with a method: ${[...new Set(offenders)].slice(0, 6).join(", ")}`,
      `${offenders.length} unsourced`);
  }
  return ok("G03", N, "every number in prose maps to a fact or a labelled estimate");
}

// ── G04 / G05 Similarity and boilerplate ────────────────────────────────────
export function g04(i: GateInput): GateResult {
  const N = "Similarity";
  if (!i.similarity) {
    return skip("G04", N, "similarity_check.py has not run for this batch");
  }
  const c = contractFor(i.meta.archetype);
  const sib = c.sibling ?? 0.55, par = c.parent ?? 0.45, any = 0.6;
  const s = i.similarity;
  const fails: string[] = [];
  if (s.max_sibling > sib) fails.push(`sibling ${s.max_sibling.toFixed(2)} > ${sib}`);
  if (s.max_parent > par) fails.push(`parent ${s.max_parent.toFixed(2)} > ${par}`);
  if (s.max_any > any) fails.push(`any ${s.max_any.toFixed(2)} > ${any}`);
  const observed = `sib ${s.max_sibling.toFixed(2)} / par ${s.max_parent.toFixed(2)} / any ${s.max_any.toFixed(2)}`;
  return fails.length ? bad("G04", N, fails.join("; "), observed)
                      : ok("G04", N, "within thresholds", observed);
}

export function g05(i: GateInput): GateResult {
  const N = "Boilerplate ratio";
  if (!i.similarity) return skip("G05", N, "similarity_check.py has not run for this batch");
  const r = i.similarity.boilerplate_ratio;
  return r > 0.35
    ? bad("G05", N, `${(r * 100).toFixed(0)}% of sentences recur in ≥3 sibling pages (max 35%)`,
        `${(r * 100).toFixed(0)}%`)
    : ok("G05", N, "below 35%", `${(r * 100).toFixed(0)}%`);
}

// ── G06 Answer-first ────────────────────────────────────────────────────────
const VERDICT = /\b(?:pick|use|avoid|yes|no|should|don'?t|choose|skip)\b|[₹$%]|\d/i;

export function g06(i: GateInput): GateResult {
  const N = "Answer-first";
  const p = firstParagraph(i.body);
  const n = wordCount(p);
  if (!n) return bad("G06", N, "no opening paragraph found");
  if (n > 80) return bad("G06", N, `opening paragraph is ${n} words (max 80)`, `${n}/80`);
  if (!VERDICT.test(p)) {
    return bad("G06", N, "opening paragraph has no number and no verdict token", `${n} words`);
  }
  const low = p.toLowerCase();
  const opener = i.config.bannedOpeners.find((o) => low.startsWith(o.toLowerCase()));
  if (opener) return bad("G06", N, `banned opener: "${opener}"`);
  return ok("G06", N, `${n}-word opening with a number or verdict`, `${n}/80`);
}

// ── G07 Structure ───────────────────────────────────────────────────────────
export function g07(i: GateInput): GateResult {
  const N = "Structure";
  const c = contractFor(i.meta.archetype);
  const { sections: secs } = sections(i.body);
  const total = wordCount(toProse(i.body));
  const [lo, hi] = c.words;
  const floor = Math.floor(lo * (1 - UNDER_TOLERANCE));
  const ceil = Math.floor(hi * (1 + OVER_TOLERANCE));
  const fails: string[] = [];
  if (total < floor) fails.push(`${total} words, below the ${lo}–${hi} band even with tolerance (${floor})`);
  if (total > ceil) fails.push(`${total} words, above the ${hi} ceiling (no tolerance over)`);

  const h2 = secs.filter((s) => s.level === 2);
  if (h2.length < 4 || h2.length > 10) fails.push(`${h2.length} H2s (need 4–10)`);
  const [sLo, sHi] = c.section;
  for (const s of h2) {
    if (s.words < sLo || s.words > sHi) {
      fails.push(`H2 "${s.heading.slice(0, 40)}" is ${s.words} words (need ${sLo}–${sHi})`);
    }
    if (s.words > 450 && !secs.some((x) => x.level === 3)) {
      fails.push(`H2 "${s.heading.slice(0, 40)}" exceeds 450 words with no H3 break`);
    }
  }
  const faq = i.meta.faq?.length ?? 0;
  if (faq !== 0 && (faq < 3 || faq > 5)) fails.push(`${faq} FAQ entries (need 3–5, or none)`);

  const observed = `${total}w, ${h2.length} H2s`;
  return fails.length ? bad("G07", N, fails.slice(0, 4).join("; "), observed)
                      : ok("G07", N, `within the ${lo}–${hi} band`, observed);
}

// ── G08 Link graph ──────────────────────────────────────────────────────────
export function g08(i: GateInput): GateResult {
  const N = "Link graph";
  const links = i.meta.internal_links;
  const fails: string[] = [];
  if (links.length < 5) fails.push(`${links.length} internal links (need 5)`);
  if (!links.some((l) => l.role === "hub")) fails.push("no link up to a hub");

  // 01 §C4 is funnel-aware, and checking only for a BOFU link missed half of
  // it: a BOFU page owes proof and a reference instead, so the graph is not
  // one-way traffic into the hubs.
  const { roles, why } = requiredLinkRoles(i.funnel ?? "MOFU");
  for (const role of roles) {
    const has =
      role === "toolOrTemplate"
        ? links.some((l) => l.role === "tool" || /^\/templates\//.test(l.url))
        : role === "reference"
          ? links.some((l) => /^\/(benchmarks|teardowns)\//.test(l.url))
          : links.some((l) => l.role === role);
    if (!has) fails.push(`no ${role} link — ${why}`);
  }
  const generic = links.filter((l) => /^(click here|here|read more|this page|link)$/i.test(l.anchor.trim()));
  if (generic.length) fails.push(`${generic.length} non-descriptive anchor(s)`);
  const self = links.filter((l) => l.url === i.meta.url);
  if (self.length) fails.push("links to itself");
  const observed = `${links.length} outbound`;
  return fails.length ? bad("G08", N, fails.join("; "), observed)
                      : ok("G08", N, "5+ contextual links with hub and BOFU", observed);
}

/**
 * Reuse caps — 01 §C2 and §C3.
 *
 * Not one of the twenty numbered gates, but the rule that keeps a corpus from
 * becoming the same six facts rearranged 1,071 times. Reported alongside them
 * so a breach surfaces in the batch report rather than in a spam update.
 */
export function gReuse(i: GateInput): GateResult {
  const N = "Reuse caps";
  const fails: string[] = [];

  for (const id of i.meta.facts_used) {
    const uses = i.factUsage.get(id) ?? 1;
    if (uses > CROSS.FACT_REUSE_SITEWIDE) {
      fails.push(`fact ${id} is on ${uses} pages (cap ${CROSS.FACT_REUSE_SITEWIDE})`);
    }
    // Within one app's teardowns the cap is tighter, because four lenses of one
    // app leaning on the same fact is exactly the near-duplicate set §C2 exists
    // to prevent.
    if (i.meta.archetype === "teardown" && i.meta.entity_a) {
      const sameApp = i.corpus.filter(
        (p) => p.archetype === "teardown" && p.entity_a === i.meta.entity_a &&
          p.facts_used.includes(id),
      ).length;
      if (sameApp > CROSS.FACT_REUSE_PER_APP) {
        fails.push(
          `fact ${id} is on ${sameApp} lenses of ${i.meta.entity_a} ` +
            `(cap ${CROSS.FACT_REUSE_PER_APP})`,
        );
      }
    }
  }

  if (i.meta.experience_used.length > CROSS.EXPERIENCE_PER_PAGE) {
    fails.push(`${i.meta.experience_used.length} experience entries (cap ${CROSS.EXPERIENCE_PER_PAGE})`);
  }
  for (const id of i.meta.experience_used) {
    const uses = i.corpus.filter((p) => p.experience_used.includes(id)).length;
    if (uses > CROSS.EXPERIENCE_REUSE) {
      fails.push(`experience ${id} is on ${uses} pages (cap ${CROSS.EXPERIENCE_REUSE})`);
    }
  }
  return fails.length
    ? bad("CR", N, fails.slice(0, 4).join("; "), `${fails.length} breach(es)`)
    : ok("CR", N, "fact and experience reuse within the §C caps");
}

// ── G09 Structured data ─────────────────────────────────────────────────────
const BANNED_SCHEMA = ["Review", "AggregateRating", "HowTo"];

export function g09(i: GateInput): GateResult {
  const N = "Structured data";
  const c = contractFor(i.meta.archetype);
  const have = new Set(i.meta.schema_types);
  const fails: string[] = [];
  for (const t of c.requiredSchema) if (!have.has(t)) fails.push(`missing ${t}`);
  for (const t of BANNED_SCHEMA) if (have.has(t)) fails.push(`${t} is banned`);
  const hasFaq = (i.meta.faq?.length ?? 0) >= 3;
  if (hasFaq && !have.has("FAQPage")) fails.push("FAQ exists but FAQPage is not emitted");
  if (!hasFaq && have.has("FAQPage")) fails.push("FAQPage emitted with no FAQ");
  return fails.length ? bad("G09", N, fails.join("; "), [...have].join(", "))
                      : ok("G09", N, "types match the contract", [...have].join(", "));
}

// ── G10 Title / meta / H1 ───────────────────────────────────────────────────
export function g10(i: GateInput): GateResult {
  const N = "Title / meta / H1";
  const m = i.meta;
  const fails: string[] = [];
  if (m.title.length < 35 || m.title.length > 65) fails.push(`title ${m.title.length} chars (35–65)`);
  if (m.meta_description.length < 110 || m.meta_description.length > 155) {
    fails.push(`meta ${m.meta_description.length} chars (110–155)`);
  }
  const others = i.corpus.filter((p) => p.url !== m.url);
  if (others.some((p) => p.title === m.title)) fails.push("title is not unique");
  if (others.some((p) => p.meta_description === m.meta_description)) fails.push("meta is not unique");
  if (others.some((p) => p.h1 === m.h1)) fails.push("H1 is not unique");

  const kw = m.primary_keyword.toLowerCase();
  const first100 = words(toProse(i.body)).slice(0, 100).join(" ").toLowerCase();
  if (!m.title.toLowerCase().includes(kw)) fails.push("primary keyword not in title");
  if (!m.h1.toLowerCase().includes(kw)) fails.push("primary keyword not in H1");
  if (!first100.includes(kw)) fails.push("primary keyword not in the first 100 words");

  const all = words(toProse(i.body));
  const kwWords = kw.split(/\s+/).length;
  const hay = all.join(" ").toLowerCase();
  const hits = hay.split(kw).length - 1;
  const density = all.length ? (hits * kwWords) / all.length : 0;
  if (density > 0.025) fails.push(`keyword density ${(density * 100).toFixed(1)}% (max 2.5%)`);

  const c = contractFor(m.archetype);
  if (!c.yearTokenAllowed && /\b20\d\d\b/.test(m.title)) {
    fails.push("year token in the title of a non-time-bound archetype");
  }
  const observed = `t${m.title.length}/d${m.meta_description.length}, kw ${(density * 100).toFixed(1)}%`;
  return fails.length ? bad("G10", N, fails.slice(0, 4).join("; "), observed)
                      : ok("G10", N, "unique, in band, keyword placed", observed);
}

// ── G11 Freshness ───────────────────────────────────────────────────────────
const PRICE_UNIT = /(?:INR|USD|\/month|\/mo|\/year|per month|price)/i;

export function g11(i: GateInput): GateResult {
  const N = "Freshness";
  const fails: string[] = [];
  for (const f of i.facts) {
    const age = daysBetween(f.verified_on, i.config.today);
    const isPrice = PRICE_UNIT.test(f.unit ?? "") || PRICE_UNIT.test(f.claim);
    const limit = isPrice ? 45 : 90;
    if (age > limit) fails.push(`${f.fact_id} verified ${age}d ago (max ${limit})`);
  }
  if (i.meta.refreshed_on < i.meta.verified_on) fails.push("refreshed_on predates verified_on");
  const oldest = i.facts.length
    ? Math.max(...i.facts.map((f) => daysBetween(f.verified_on, i.config.today)))
    : 0;
  return fails.length ? bad("G11", N, fails.slice(0, 4).join("; "), `oldest ${oldest}d`)
                      : ok("G11", N, "all facts within their window", `oldest ${oldest}d`);
}

// ── G12 Claims policy ──────────────────────────────────────────────────────
const FIRST_PERSON = /\b(?:I|my client|we shipped|in my work|we built|we ran|our client)\b/;
const SUPERLATIVE = /\b(?:best|#1|number one|leading|world.?class|top.rated)\b/i;

export function g12(i: GateInput): GateResult {
  const N = "Claims policy";
  const fails: string[] = [];
  const prose = toProse(i.body);

  // First-person prose is only legal inside FromMyWork / WhatIdDo.
  const blocks = [...i.body.matchAll(/<(FromMyWork|WhatIdDo)\b[^>]*>([\s\S]*?)<\/\1>/g)];
  let outside = prose;
  for (const b of blocks) outside = outside.replace(toProse(b[0]), " ");
  if (FIRST_PERSON.test(outside)) {
    const m = FIRST_PERSON.exec(outside);
    fails.push(`first-person claim outside a FromMyWork block: "${m?.[0]}"`);
  }
  // Every FromMyWork must cite a real exp_id.
  for (const b of i.body.matchAll(/<FromMyWork\b[^>]*\bexp=["']([^"']+)["']/g)) {
    const id = b[1] ?? "";
    if (!i.experience.has(id)) fails.push(`FromMyWork cites unknown exp_id "${id}"`);
  }
  const declared = i.meta.experience_used;
  const cited = [...i.body.matchAll(/<FromMyWork\b[^>]*\bexp=["']([^"']+)["']/g)].map((m) => m[1]);
  for (const id of cited) if (!declared.includes(id!)) fails.push(`exp "${id}" used but not in experience_used`);

  // A superlative needs a fact behind it.
  if (SUPERLATIVE.test(prose) && !i.meta.facts_used.length) {
    fails.push(`superlative "${SUPERLATIVE.exec(prose)?.[0]}" with no supporting fact`);
  }
  return fails.length ? bad("G12", N, fails.slice(0, 4).join("; "))
                      : ok("G12", N, "first-person claims all trace to the experience library");
}

// ── G13 Style ───────────────────────────────────────────────────────────────
export function g13(i: GateInput): GateResult {
  const N = "Style";
  const prose = toProse(i.body);
  const low = prose.toLowerCase();
  const fails: string[] = [];

  const hits = i.config.bannedPhrases.filter((p) => low.includes(p.toLowerCase()));
  if (hits.length) fails.push(`banned phrase(s): ${hits.slice(0, 5).join(", ")}`);

  const tofu = ["glossary", "playbook", "teardown"].includes(i.meta.archetype);
  const gradeLimit = tofu ? 11 : 13;
  const grade = fleschKincaidGrade(prose);
  if (grade > gradeLimit) fails.push(`FK grade ${grade.toFixed(1)} (max ${gradeLimit})`);

  const passive = passiveShare(prose);
  if (passive > 0.15) fails.push(`passive voice ${(passive * 100).toFixed(0)}% (max 15%)`);

  const sents = sentences(prose);
  const avg = sents.length ? words(prose).length / sents.length : 0;
  if (avg > 22) fails.push(`average sentence ${avg.toFixed(1)} words (max 22)`);

  // Question marks belong in H2s and the FAQ, not body prose.
  const { sections: secs } = sections(i.body);
  const bodyQ = secs.reduce((n, s) => n + (s.text.match(/\?/g)?.length ?? 0), 0);
  if (bodyQ > 0) fails.push(`${bodyQ} rhetorical question(s) in body prose`);

  const observed = `FK ${grade.toFixed(1)}, passive ${(passive * 100).toFixed(0)}%, avg ${avg.toFixed(1)}w`;
  return fails.length ? bad("G13", N, fails.slice(0, 4).join("; "), observed)
                      : ok("G13", N, "within style limits", observed);
}

// ── G14 Visuals ─────────────────────────────────────────────────────────────
export function g14(i: GateInput): GateResult {
  const N = "Visuals";
  const v = i.meta.visuals;
  const fails: string[] = [];
  if (!v.length) fails.push("no own visual");
  const thin = v.filter((x) => wordCount(x.alt) < 8);
  if (thin.length) fails.push(`${thin.length} visual(s) with alt text under 8 words`);
  const external = v.filter((x) => /^https?:\/\//.test(x.src));
  if (external.length) fails.push(`${external.length} external image URL(s)`);
  const shots = v.filter((x) => x.type === "screenshot");
  if (shots.length > 3) fails.push(`${shots.length} screenshots (max 3)`);
  const uncaptioned = shots.filter((x) => !x.caption);
  if (uncaptioned.length) fails.push(`${uncaptioned.length} screenshot(s) without an annotation caption`);
  const observed = `${v.length} visuals, ${shots.length} screenshots`;
  return fails.length ? bad("G14", N, fails.join("; "), observed)
                      : ok("G14", N, "own visuals with descriptive alt text", observed);
}

// ── G15 Currency ────────────────────────────────────────────────────────────
export function g15(i: GateInput): GateResult {
  const N = "Currency";
  const prose = toProse(i.body);
  const hasMoney = /₹|\bINR\b|\$|\bUSD\b/.test(prose);
  if (!hasMoney) return ok("G15", N, "no monetary figures on the page");

  if (i.config.fxRate === null || i.config.fxAsOf === null) {
    return bad("G15", N,
      "config/fx.json has no rate or as_of, so no INR/USD pair can be stated (D4)");
  }
  const fails: string[] = [];
  // Every money mention should have its counterpart within the same sentence.
  for (const s of sentences(prose)) {
    const inr = /₹|\bINR\b/.test(s);
    const usd = /\$|\bUSD\b/.test(s);
    if (inr !== usd) {
      fails.push(`"${s.slice(0, 60).trim()}…" gives ${inr ? "INR" : "USD"} only`);
    }
  }
  if (i.meta.fx_rate_used === undefined) fails.push("fx_rate_used is not recorded in meta");
  return fails.length ? bad("G15", N, fails.slice(0, 3).join("; "), `${fails.length} unpaired`)
                      : ok("G15", N, "every figure carries INR and USD");
}

// ── G16 CTA ─────────────────────────────────────────────────────────────────
export function g16(i: GateInput): GateResult {
  const N = "CTA";
  const fails: string[] = [];
  const { sections: secs } = sections(i.body);
  const tofu = ["glossary", "playbook", "teardown", "compare"].includes(i.meta.archetype);
  const ctaIdx = i.body.search(/<CTABand\b/);
  if (tofu && ctaIdx !== -1) {
    const secondH2 = [...i.body.matchAll(/^##\s+/gm)][1]?.index ?? Infinity;
    if (ctaIdx < secondH2) fails.push("TOFU page places a CTA before the second H2");
  }
  const label = i.meta.cta.primary.label.toLowerCase();
  const ctx = [i.meta.entity_a, i.meta.entity_b, i.meta.archetype]
    .filter(Boolean).map((s) => s!.toLowerCase().replace(/-/g, " "));
  if (ctx.length && !ctx.some((c) => label.includes(c)) && label.length < 25) {
    fails.push(`CTA "${i.meta.cta.primary.label}" names no page context`);
  }
  void secs;
  return fails.length ? bad("G16", N, fails.join("; "))
                      : ok("G16", N, "one primary CTA, context-aware");
}

// ── G17 Legal ───────────────────────────────────────────────────────────────
export function g17(i: GateInput): GateResult {
  const N = "Legal";
  const c = contractFor(i.meta.archetype);
  const fails: string[] = [];
  if (c.notAffiliated) {
    if (!i.meta.not_affiliated) fails.push("not_affiliated is false on an archetype that requires it");
    if (!/<NotAffiliated\b/.test(i.body)) fails.push("NotAffiliated block is missing from the body");
  }
  for (const q of i.body.match(/"([^"]{1,400})"/g) ?? []) {
    const n = wordCount(q);
    if (n > 15) fails.push(`quoted fragment of ${n} words (max 15)`);
  }
  return fails.length ? bad("G17", N, fails.slice(0, 3).join("; "))
                      : ok("G17", N, "attribution and quote limits respected");
}

// ── Gates that need what this environment lacks ─────────────────────────────
/**
 * G02 — source quality.
 *
 * research.md records a fetch_log (url, status, used, why) and states that
 * gates.ts reads it for G02. When it is present this runs offline against what
 * the researcher actually observed, which is better evidence than a re-fetch
 * months later anyway. Without one, it skips rather than guessing.
 */
export function g02(i?: GateInput): GateResult {
  const N = "Source quality";
  if (!i || !i.fetchLog?.length) {
    return skip("G02", N,
      "no fetch_log on the research object; a live re-check needs outbound HTTP (AUDIT.md §4)");
  }
  const byUrl = new Map(i.fetchLog.map((f) => [f.url, f]));
  const fails: string[] = [];
  for (const f of i.facts) {
    const logged = byUrl.get(f.source_url);
    if (!logged) {
      fails.push(`${f.fact_id}: source not in fetch_log, so its status was never observed`);
    } else if (logged.status !== 200 && !f.archive_url) {
      fails.push(`${f.fact_id}: source returned ${logged.status} and has no archive_url`);
    }
  }
  const primary = i.facts.filter(
    (f) => f.primary || ["device_check", "own_data", "filing", "interview"].includes(f.method),
  ).length;
  if (i.facts.length && primary / i.facts.length < 0.5) {
    fails.push(`${primary}/${i.facts.length} primary sources, need at least half`);
  }
  const blocked = i.facts.filter((f) => i.config.blockedDomains.some(
    (d) => f.source_domain === d || f.source_domain.endsWith(`.${d}`)));
  if (blocked.length) {
    fails.push(`${blocked.length} fact(s) cite blocked domains: ` +
      blocked.map((f) => f.source_domain).join(", "));
  }
  const observed = `${primary}/${i.facts.length} primary`;
  return fails.length
    ? { id: "G02", name: N, status: "blocked", detail: fails.slice(0, 4).join("; "), observed }
    : ok("G02", N, "all sources observed 200 (or archived), majority primary", observed);
}
export function g18(): GateResult {
  return skip("G18", "Performance & a11y",
    "Lighthouse CI + axe against a built page — run locally via pnpm build");
}
export function g19(): GateResult {
  return skip("G19", "Intent guard", "LLM judge (prompts/review-judge.md Q3)");
}
export function g20(): GateResult {
  return skip("G20", "Unique value",
    "LLM judge plus top-3 SERP from DataForSEO (IN + US)");
}

export const ALL_GATES = [
  g01, g02, g03, g04, g05, g06, g07, g08, g09, g10,
  g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
] as const;

export function runGates(i: GateInput): GateResult[] {
  return [
    g01(i), g02(i), g03(i), g04(i), g05(i), g06(i), g07(i), g08(i), g09(i), g10(i),
    g11(i), g12(i), g13(i), g14(i), g15(i), g16(i), g17(i), g18(), g19(), g20(),
    gReuse(i),
  ];
}

/** A page is done only when every gate passed. A skip is not a pass. */
export function allPassed(rs: GateResult[]): boolean {
  return rs.every((r) => r.status === "pass");
}

export function summarise(rs: GateResult[]): Record<GateStatus, number> {
  const out: Record<GateStatus, number> = { pass: 0, fail: 0, blocked: 0, skipped: 0 };
  for (const r of rs) out[r.status]++;
  return out;
}

export { existsSync };
