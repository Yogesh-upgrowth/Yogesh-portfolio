/**
 * Gate tests. Each gate gets a page that should pass and one that should fail
 * for exactly the reason the gate exists — an untested gate is not a gate.
 */
import { describe, expect, it } from "vitest";
import type { PageMeta, Fact, ExperienceEntry } from "../lib/content/schemas";
import * as G from "../lib/gates";
import type { GateInput } from "../lib/gates";

const TODAY = "2026-09-28";
const RECENT = "2026-09-20";

function fact(n: number, over: Partial<Fact> = {}): Fact {
  return {
    fact_id: `f-test-${String(n).padStart(2, "0")}`,
    claim: `Test claim number ${n} recorded at ${1000 + n} units`,
    value: 1000 + n,
    source_url: `https://revenuecat.com/report/${n}`,
    source_title: `Source ${n}`,
    source_domain: "revenuecat.com",
    excerpt: "A short verbatim excerpt of no more than twenty five words taken from the source.",
    verified_on: RECENT,
    method: "fetched",
    primary: true,
    ...over,
  } as Fact;
}

const FACTS = Array.from({ length: 6 }, (_, k) => fact(k + 1));

const EXP: ExperienceEntry = {
  id: "exp-014", tags: ["paywall"], context: "Motor insurance line, 2021-22",
  claim: "Moving the quote before signup lifted completion.",
  numbers: [], permission: "public", can_name_company: true,
  timeframe: "2021-2022", source_session: "2026-10-02",
};

function meta(over: Partial<PageMeta> = {}): PageMeta {
  return {
    id: "gl-0001", url: "/glossary/arpu", archetype: "glossary", hub: "glossary",
    wave: 1, status: "drafted", indexable: false,
    title: "ARPU: What Average Revenue Per User Means",
    meta_description:
      "ARPU is average revenue per user over a period. Here is the formula, an Indian worked example in INR and USD, and the benchmark bands.",
    h1: "What is ARPU (average revenue per user)?",
    primary_keyword: "arpu", secondary_keywords: [],
    geo: "IN+US",
    facts_used: FACTS.map((f) => f.fact_id),
    experience_used: [],
    internal_links: [
      { url: "/glossary", anchor: "the glossary", role: "hub" },
      { url: "/benchmarks/arpu/fintech", anchor: "fintech ARPU bands", role: "lateral" },
      { url: "/glossary/arppu", anchor: "ARPPU", role: "lateral" },
      { url: "/tools/arpu-arppu-calculator", anchor: "the ARPU calculator", role: "tool" },
      { url: "/work-with-me", anchor: "a monetisation review", role: "bofu" },
    ],
    visuals: [{ type: "table", src: "/svg/arpu.svg",
      alt: "Table of ARPU bands by industry with the source and verification date for each row" }],
    cta: { primary: { label: "Get an arpu review for your app", href: "/work-with-me" } },
    schema_types: ["DefinedTerm", "Person", "BreadcrumbList"],
    unique_value_statement:
      "Carries Indian ARPU bands in INR alongside the global USD figures, which the ranking pages omit entirely.",
    verified_on: RECENT, refreshed_on: RECENT, changelog: [], not_affiliated: false,
    ...over,
  } as PageMeta;
}

/** A body that satisfies the glossary contract: 350-700 words, 60-250 per H2. */
const GOOD_BODY = `
ARPU is 1001 units of revenue divided by active users in the same window. Use it to compare cohorts, not companies.

## How is ARPU calculated?

${"Revenue over the window divided by the average active users in that window. ".repeat(8)}
The figure moves for two reasons and it is worth separating them early. ${"Mix changes and price changes pull in opposite directions here. ".repeat(4)}

## What counts as an active user?

${"Pick the denominator before the numerator, because the denominator decides the story. ".repeat(9)}

## How does ARPU differ from ARPPU?

${"ARPPU divides by paying users only, so it rises when conversion falls. ".repeat(9)}

## What are typical ARPU bands?

${"Bands differ by model and by market, and the Indian band sits below the global one. ".repeat(9)}
`.trim();

function input(over: Partial<GateInput> = {}): GateInput {
  return {
    meta: meta(), body: GOOD_BODY, facts: FACTS,
    factUsage: new Map(FACTS.map((f) => [f.fact_id, 1])),
    experience: new Map([[EXP.id, EXP]]),
    corpus: [meta()],
    config: {
      bannedPhrases: ["leverage", "seamless", "in today's"],
      bannedOpeners: ["in today's", "when it comes to"],
      blockedDomains: ["startuptalky.com", "appinventiv.com"],
      fxRate: 88.2, fxAsOf: "2026-09-01", today: TODAY,
    },
    ...over,
  };
}

describe("G01 research completeness", () => {
  it("blocks a page with fewer than 6 facts", () => {
    const r = G.g01(input({ facts: FACTS.slice(0, 5) }));
    expect(r.status).toBe("blocked");
  });
  it("blocks when facts are not page-specific", () => {
    const usage = new Map(FACTS.map((f) => [f.fact_id, 9]));
    expect(G.g01(input({ factUsage: usage })).status).toBe("blocked");
  });
  it("passes with 6 page-specific sourced facts", () => {
    expect(G.g01(input()).status).toBe("pass");
  });
  it("blocks an archetype with required blocks when block_coverage is absent", () => {
    // prompts/research.md rule 7 — gates.ts reads block_coverage for G01.
    const m = meta({ archetype: "teardown", url: "/teardowns/duolingo/pricing" });
    const r = G.g01(input({ meta: m }));
    expect(r.status).toBe("blocked");
    expect(r.detail).toMatch(/block_coverage/);
  });
  it("blocks when a required block has no supporting facts", () => {
    const m = meta({ archetype: "teardown", url: "/teardowns/duolingo/pricing" });
    const coverage: Record<string, string[]> = {};
    for (const b of ["answer_box", "what_the_app_is", "lens_body", "what_id_steal",
                     "where_its_fragile", "india_vs_global", "faq", "sources",
                     "not_affiliated"]) coverage[b] = ["f-test-01"];
    // "related" deliberately left uncovered.
    const r = G.g01(input({ meta: m, blockCoverage: coverage }));
    expect(r.status).toBe("blocked");
    expect(r.detail).toMatch(/related/);
  });
  it("passes when every required block is covered", () => {
    const m = meta({ archetype: "teardown", url: "/teardowns/duolingo/pricing" });
    const coverage: Record<string, string[]> = {};
    for (const b of ["answer_box", "what_the_app_is", "lens_body", "what_id_steal",
                     "where_its_fragile", "india_vs_global", "faq", "sources",
                     "not_affiliated", "related"]) coverage[b] = ["f-test-01"];
    expect(G.g01(input({ meta: m, blockCoverage: coverage })).status).toBe("pass");
  });
});

describe("G02 source quality — runs offline from fetch_log", () => {
  const log = FACTS.map((f) => ({ url: f.source_url, status: 200, used: true, why: "cited" }));
  it("skips when the research object recorded no fetch_log", () => {
    expect(G.g02(input()).status).toBe("skipped");
  });
  it("passes when every source was observed at 200 and most are primary", () => {
    expect(G.g02(input({ fetchLog: log })).status).toBe("pass");
  });
  it("blocks a source that 404'd with no archive_url", () => {
    const bad = [...log];
    bad[0] = { ...bad[0]!, status: 404 };
    const r = G.g02(input({ fetchLog: bad }));
    expect(r.status).toBe("blocked");
    expect(r.detail).toMatch(/404/);
  });
  it("accepts a dead source that has an archived snapshot", () => {
    const facts = [...FACTS];
    facts[0] = { ...facts[0]!, archive_url: "https://web.archive.org/x" };
    const bad = [...log];
    bad[0] = { ...bad[0]!, status: 404 };
    expect(G.g02(input({ facts, fetchLog: bad })).status).toBe("pass");
  });
  it("blocks a fact citing a blocked domain", () => {
    const facts = [...FACTS];
    facts[0] = { ...facts[0]!, source_domain: "startuptalky.com" };
    const r = G.g02(input({ facts, fetchLog: log }));
    expect(r.status).toBe("blocked");
    expect(r.detail).toMatch(/blocked domains/);
  });
  it("blocks when fewer than half the sources are primary", () => {
    const facts = FACTS.map((f, k) => (k < 4 ? { ...f, primary: false, method: "user_reported" as const } : f));
    const r = G.g02(input({ facts, fetchLog: log }));
    expect(r.status).toBe("blocked");
    expect(r.detail).toMatch(/primary/);
  });
});

describe("G03 number provenance", () => {
  it("fails a number that traces to no fact", () => {
    const body = GOOD_BODY + "\n\nRetention sat at 43.7% across the cohort.";
    expect(G.g03(input({ body })).status).toBe("fail");
  });
  it("allows a labelled estimate with a method", () => {
    const body = GOOD_BODY + "\n\nMy estimate is 43.7% because the two disclosed cohorts bracket it.";
    expect(G.g03(input({ body })).status).toBe("pass");
  });
});

describe("G06 answer-first", () => {
  it("fails a banned opener", () => {
    const body = "In today's market ARPU is 1001 units per user.\n\n" + GOOD_BODY;
    expect(G.g06(input({ body })).status).toBe("fail");
  });
  it("fails an opening with no number or verdict", () => {
    const body = "ARPU is a metric that many teams talk about often.\n\n## A\n\nx";
    expect(G.g06(input({ body })).status).toBe("fail");
  });
  it("fails an opening over eighty words", () => {
    const body = "ARPU is 1001 " + "word ".repeat(90) + "\n\n## A\n\nx";
    expect(G.g06(input({ body })).status).toBe("fail");
  });
  it("passes a short opening with a number", () => {
    expect(G.g06(input()).status).toBe("pass");
  });
});

describe("G07 structure", () => {
  it("fails too few H2s", () => {
    const body = "ARPU is 1001 units.\n\n## Only one\n\n" + "word ".repeat(200);
    expect(G.g07(input({ body })).status).toBe("fail");
  });
  it("fails a page over the band ceiling with no tolerance", () => {
    const body = GOOD_BODY + "\n\n## Extra\n\n" + "word ".repeat(900);
    expect(G.g07(input({ body })).status).toBe("fail");
  });
  it("passes the glossary band", () => {
    expect(G.g07(input()).status).toBe("pass");
  });
});

describe("G08 link graph", () => {
  it("fails under five links", () => {
    const m = meta({ internal_links: meta().internal_links.slice(0, 4) as PageMeta["internal_links"] });
    expect(G.g08(input({ meta: m })).status).toBe("fail");
  });
  it("fails a non-descriptive anchor", () => {
    const links = [...meta().internal_links];
    links[1] = { url: "/glossary/arppu", anchor: "click here", role: "lateral" };
    expect(G.g08(input({ meta: meta({ internal_links: links }) })).status).toBe("fail");
  });
  it("passes a compliant link set", () => {
    expect(G.g08(input()).status).toBe("pass");
  });
});

describe("G09 structured data", () => {
  it("fails a banned type", () => {
    const m = meta({ schema_types: ["DefinedTerm", "Person", "BreadcrumbList", "AggregateRating"] });
    expect(G.g09(input({ meta: m })).status).toBe("fail");
  });
  it("fails FAQPage with no FAQ", () => {
    const m = meta({ schema_types: ["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"] });
    expect(G.g09(input({ meta: m })).status).toBe("fail");
  });
  it("passes the contract types", () => {
    expect(G.g09(input()).status).toBe("pass");
  });
});

describe("G10 title / meta / H1", () => {
  it("fails a duplicate title elsewhere in the corpus", () => {
    const other = meta({ url: "/glossary/arppu", id: "gl-0002" });
    expect(G.g10(input({ corpus: [meta(), other] })).status).toBe("fail");
  });
  it("fails a year token on a non-time-bound archetype", () => {
    const m = meta({ title: "ARPU in 2026: What Average Revenue Per User Means" });
    expect(G.g10(input({ meta: m })).status).toBe("fail");
  });
  it("passes a unique in-band title", () => {
    expect(G.g10(input()).status).toBe("pass");
  });
});

describe("G11 freshness", () => {
  it("fails a stale fact", () => {
    const stale = [...FACTS.slice(0, 5), fact(6, { verified_on: "2026-01-01" })];
    expect(G.g11(input({ facts: stale })).status).toBe("fail");
  });
  it("fails a price fact older than 45 days", () => {
    const priced = [...FACTS.slice(0, 5),
      fact(6, { verified_on: "2026-07-01", unit: "INR/month" })];
    expect(G.g11(input({ facts: priced })).status).toBe("fail");
  });
  it("passes recent facts", () => {
    expect(G.g11(input()).status).toBe("pass");
  });
});

describe("G12 claims policy", () => {
  it("fails first person outside a FromMyWork block", () => {
    const body = GOOD_BODY + "\n\nI ran this play at a client and it worked.";
    expect(G.g12(input({ body })).status).toBe("fail");
  });
  it("fails a FromMyWork citing an unknown exp_id", () => {
    const body = GOOD_BODY + '\n\n<FromMyWork exp="exp-999">I saw this.</FromMyWork>';
    const m = meta({ experience_used: ["exp-999"] });
    expect(G.g12(input({ body, meta: m })).status).toBe("fail");
  });
  it("passes a FromMyWork citing a real entry", () => {
    const body = GOOD_BODY + '\n\n<FromMyWork exp="exp-014">I moved the quote first.</FromMyWork>';
    const m = meta({ experience_used: ["exp-014"] });
    expect(G.g12(input({ body, meta: m })).status).toBe("pass");
  });
});

describe("G13 style", () => {
  it("fails a banned phrase", () => {
    const body = GOOD_BODY.replace("Use it to compare", "Leverage it to compare");
    expect(G.g13(input({ body })).status).toBe("fail");
  });
  it("fails a rhetorical question in body prose", () => {
    const body = GOOD_BODY.replace("Mix changes and price changes pull in opposite directions here.",
      "But what does that really mean?");
    expect(G.g13(input({ body })).status).toBe("fail");
  });
  it("passes clean prose", () => {
    expect(G.g13(input()).status).toBe("pass");
  });
});

describe("G14 visuals", () => {
  it("fails a hot-linked image", () => {
    const m = meta({ visuals: [{ type: "table", src: "https://cdn.example.com/x.png",
      alt: "A table of ARPU bands by industry with sources and verification dates" }] });
    expect(G.g14(input({ meta: m })).status).toBe("fail");
  });
  it("fails thin alt text", () => {
    const m = meta({ visuals: [{ type: "table", src: "/a.svg", alt: "ARPU table by industry here" }] });
    expect(G.g14(input({ meta: m })).status).toBe("fail");
  });
  it("passes an own visual with real alt text", () => {
    expect(G.g14(input()).status).toBe("pass");
  });
});

describe("G15 currency", () => {
  it("passes when the page mentions no money", () => {
    expect(G.g15(input()).status).toBe("pass");
  });
  it("fails INR without USD in the same sentence", () => {
    const body = GOOD_BODY + "\n\nThe entry tier sits at 1001 and costs ₹149 per month.";
    const m = meta({ fx_rate_used: 88.2 });
    expect(G.g15(input({ body, meta: m })).status).toBe("fail");
  });
  it("fails when fx.json has no rate (D4)", () => {
    const body = GOOD_BODY + "\n\nThe tier is ₹149 ($1.70) per month.";
    const cfg = { ...input().config, fxRate: null, fxAsOf: null };
    expect(G.g15(input({ body, config: cfg })).status).toBe("fail");
  });
});

describe("G17 legal", () => {
  it("fails a teardown without NotAffiliated", () => {
    const m = meta({ archetype: "teardown", url: "/teardowns/duolingo/pricing",
      schema_types: ["Article", "Person", "BreadcrumbList"], not_affiliated: false });
    expect(G.g17(input({ meta: m })).status).toBe("fail");
  });
  it("fails an over-long quoted fragment", () => {
    const body = GOOD_BODY + '\n\n"' + "word ".repeat(20) + '"';
    expect(G.g17(input({ body })).status).toBe("fail");
  });
});

describe("gates that cannot run here", () => {
  it("reports skipped, never pass", () => {
    for (const r of [G.g02(), G.g18(), G.g19(), G.g20()]) {
      expect(r.status).toBe("skipped");
    }
  });
  it("allPassed is false while any gate is skipped", () => {
    expect(G.allPassed(G.runGates(input()))).toBe(false);
  });
});

describe("01 §C cross-archetype rules", () => {
  it("fails a MOFU page with no tool or template link", () => {
    const links = meta().internal_links.filter((l) => l.role !== "tool");
    links.push({ url: "/glossary/ltv", anchor: "LTV", role: "lateral" });
    const r = G.g08(input({ meta: meta({ internal_links: links }), funnel: "MOFU" }));
    expect(r.status).toBe("fail");
    expect(r.detail).toMatch(/toolOrTemplate/);
  });
  it("accepts a templates link in place of a tool link", () => {
    const links = meta().internal_links.filter((l) => l.role !== "tool");
    links.push({ url: "/templates/pricing-experiment", anchor: "the template", role: "related" });
    expect(G.g08(input({ meta: meta({ internal_links: links }), funnel: "MOFU" })).status).toBe("pass");
  });
  it("asks a BOFU page for proof and a reference, not for a BOFU link", () => {
    // Checking only for a BOFU link missed half of §C4.
    const r = G.g08(input({ meta: meta(), funnel: "BOFU" }));
    expect(r.status).toBe("fail");
    expect(r.detail).toMatch(/proof/);
  });
  it("passes a BOFU page that links a case study and a benchmark", () => {
    const links = [
      { url: "/services", anchor: "services", role: "hub" as const },
      { url: "/case-studies/carinfo-3-8m-to-45m-mau", anchor: "the CarInfo case study", role: "proof" as const },
      { url: "/benchmarks/arpu/fintech", anchor: "fintech ARPU", role: "lateral" as const },
      { url: "/glossary/ltv", anchor: "LTV", role: "lateral" as const },
      { url: "/tools/ltv-calculator", anchor: "the calculator", role: "tool" as const },
    ];
    // Not the default /glossary/arpu URL: G08 also rejects a page that links
    // to itself, which is what made the first version of this test fail.
    const m = meta({ url: "/services/app-monetization-strategy", internal_links: links });
    expect(G.g08(input({ meta: m, funnel: "BOFU" })).status).toBe("pass");
  });
});

describe("reuse caps — 01 §C2 and §C3", () => {
  it("fails a fact used on more than three pages site-wide", () => {
    const usage = new Map(FACTS.map((f) => [f.fact_id, 1]));
    usage.set(FACTS[0]!.fact_id, 5);
    expect(G.gReuse(input({ factUsage: usage })).status).toBe("fail");
  });
  it("fails a fact on more than two lenses of the same app", () => {
    const m = meta({ archetype: "teardown", entity_a: "duolingo",
      url: "/teardowns/duolingo/pricing" });
    const corpus = ["monetization", "onboarding", "retention"].map((lens) =>
      meta({ archetype: "teardown", entity_a: "duolingo",
        url: `/teardowns/duolingo/${lens}`, facts_used: [FACTS[0]!.fact_id] }));
    const r = G.gReuse(input({ meta: m, corpus: [m, ...corpus] }));
    expect(r.status).toBe("fail");
    expect(r.detail).toMatch(/lenses of duolingo/);
  });
  it("fails an experience entry used on more than eight pages", () => {
    const m = meta({ experience_used: ["exp-014"] });
    const corpus = Array.from({ length: 9 }, (_, k) =>
      meta({ url: `/x/${k}`, experience_used: ["exp-014"] }));
    const r = G.gReuse(input({ meta: m, corpus }));
    expect(r.status).toBe("fail");
    expect(r.detail).toMatch(/exp-014/);
  });
  it("passes when everything is inside the caps", () => {
    expect(G.gReuse(input()).status).toBe("pass");
  });
});
