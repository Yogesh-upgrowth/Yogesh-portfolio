import { describe, expect, it } from "vitest";
import { DraftOutput, DraftOk } from "../lib/content/draft-schema";
import { draftToMdx, draftToMeta } from "../lib/content/draft-convert";
import type { InventoryRow } from "../lib/content/inventory";

const row: InventoryRow = {
  id: "td-0172", wave: 1, hub: "teardowns", archetype: "teardown",
  url: "/teardowns/duolingo/pricing", title_hint: "Duolingo pricing",
  primary_keyword: "duolingo pricing india", secondary_keywords: [],
  intent: "informational", funnel: "TOFU/MOFU", audience_tier: "B",
  entity_a: "duolingo", entity_b: "pricing", geo: "IN+US",
  template_id: "teardown", notes: "",
};

function draft(over: Partial<DraftOk> = {}): unknown {
  return {
    status: "draft", page_id: "td-0172",
    title: "Duolingo Pricing in India: Every Tier and the Gap",
    meta_description:
      "Duolingo charges far less in India than in the US. Every tier, the annual discount, how prices moved, and what the gap implies for your own pricing.",
    h1: "What does Duolingo charge in India?",
    answer_first: "Duolingo charges 1699 a year in India against 83.88 in the US.",
    verdict: "I would anchor on the annual plan and treat monthly as a decoy.",
    unique_value_statement:
      "Carries device-checked Indian prices against the US list price with the dates of each check, which no ranking page does.",
    sections: [
      { h2: "What does it cost?", body_markdown: "Body one.", facts_used: ["f-1"], visual: "price-table" },
      { h2: "How has it moved?", body_markdown: "Body two.", facts_used: ["f-2"], visual: null },
    ],
    tables: [{
      id: "price-table", component: "PriceTable",
      columns: ["Tier", "INR", "USD"], rows: [["Annual", 1699, 83.88]],
      facts_used: ["f-1"], verified_on: "2026-09-20", note: "Verified on device",
    }],
    visual_specs: [],
    from_my_work: { exp_id: "exp-014", text: "We moved the quote before signup." },
    what_i_would_do: { verdict: "Default to annual.", steps: ["a", "b", "c"] },
    india_layer: "India runs lower on monthly.",
    faq: [{ q: "a?", a: "x", facts_used: [] }, { q: "b?", a: "y", facts_used: [] },
          { q: "c?", a: "z", facts_used: [] }],
    internal_links: [
      { url: "/teardowns", anchor: "teardowns", role: "hub", section_index: 0 },
      { url: "/teardowns/duolingo/monetization", anchor: "monetization", role: "lateral", section_index: 0 },
      { url: "/glossary/annual-plan", anchor: "annual plan", role: "lateral", section_index: 1 },
      { url: "/tools/ltv-calculator", anchor: "LTV calculator", role: "tool", section_index: 1 },
      { url: "/work-with-me", anchor: "a pricing review", role: "bofu", section_index: 1 },
    ],
    cta: { primary: { label: "Get a pricing review", href: "/work-with-me" } },
    schema_hints: { types: ["Article"] },
    not_affiliated: true, sources_note: "Rate used: 95.89/USD.",
    facts_used_all: ["f-1", "f-2"], experience_used: ["exp-014"],
    self_check: {
      three_things_leaders_lack: ["device-checked INR", "dated price history", "an owned verdict"],
      word_count: 1400, sections_over_400_words: 0, banned_phrases_found: 0,
    },
    ...over,
  };
}

describe("DraftOutput — prompts/page-generation.md §3", () => {
  it("accepts a well-formed draft", () => {
    expect(DraftOutput.safeParse(draft()).success).toBe(true);
  });
  it("rejects a draft that found fewer than three things the leaders lack", () => {
    const d = draft({ self_check: {
      three_things_leaders_lack: ["only one"], word_count: 1400,
      sections_over_400_words: 0, banned_phrases_found: 0 } } as Partial<DraftOk>);
    expect(DraftOutput.safeParse(d).success).toBe(false);
  });
  it("rejects a draft that admits banned phrases in its own self check", () => {
    const d = draft({ self_check: {
      three_things_leaders_lack: ["a", "b", "c"], word_count: 1400,
      sections_over_400_words: 0, banned_phrases_found: 2 } } as Partial<DraftOk>);
    expect(DraftOutput.safeParse(d).success).toBe(false);
  });
  it("rejects from_my_work whose exp_id is not declared in experience_used", () => {
    const d = draft({ experience_used: [] } as Partial<DraftOk>);
    expect(DraftOutput.safeParse(d).success).toBe(false);
  });
  it("rejects fewer than five internal links", () => {
    const base = draft() as { internal_links: unknown[] };
    base.internal_links = base.internal_links.slice(0, 4);
    expect(DraftOutput.safeParse(base).success).toBe(false);
  });
  it("accepts the blocked output with its reasons", () => {
    const p = DraftOutput.safeParse({
      status: "blocked", page_id: "td-0175",
      reasons: ["Only 3 lens-specific facts for retention (need 6)."],
      what_would_unblock: ["Run price:check for kuku-fm IN Android."],
      suggested_fallback: "merge:retention→monetization",
    });
    expect(p.success).toBe(true);
  });
  it("rejects a blocked output with no reasons", () => {
    expect(DraftOutput.safeParse({ status: "blocked", page_id: "x", reasons: [] }).success)
      .toBe(false);
  });
});

describe("draftToMdx — block order from 01 §A", () => {
  const d = DraftOk.parse(draft());
  const mdx = draftToMdx(d);
  it("opens with the answer box, so G06 measures what the reader sees", () => {
    expect(mdx.startsWith("<AnswerBox>")).toBe(true);
  });
  it("renders sections in order", () => {
    expect(mdx.indexOf("What does it cost?")).toBeLessThan(mdx.indexOf("How has it moved?"));
  });
  it("places the bound table inside its section", () => {
    expect(mdx.indexOf("<PriceTable")).toBeGreaterThan(mdx.indexOf("What does it cost?"));
    expect(mdx.indexOf("<PriceTable")).toBeLessThan(mdx.indexOf("How has it moved?"));
  });
  it("puts FromMyWork and NotAffiliated after the body", () => {
    expect(mdx.indexOf("<FromMyWork")).toBeGreaterThan(mdx.indexOf("How has it moved?"));
    expect(mdx.indexOf("<NotAffiliated")).toBeGreaterThan(mdx.indexOf("<FromMyWork"));
  });
  it("carries the exp_id so G12 can check it against the library", () => {
    expect(mdx).toContain('exp="exp-014"');
  });
});

describe("draftToMeta", () => {
  const d = DraftOk.parse(draft());
  const meta = draftToMeta({ draft: d, row, today: "2026-09-28", fxRate: 95.89 });
  it("ships noindex regardless of what the generator said", () => {
    expect(meta.indexable).toBe(false);
    expect(meta.status).toBe("drafted");
  });
  it("takes schema types from the contract, not the generator's hints", () => {
    // schema_hints said ["Article"] only; the teardown contract also requires
    // Person and BreadcrumbList.
    expect(meta.schema_types).toContain("Person");
    expect(meta.schema_types).toContain("BreadcrumbList");
  });
  it("adds FAQPage because a real FAQ exists", () => {
    expect(meta.schema_types).toContain("FAQPage");
  });
  it("forces not_affiliated on an archetype that requires it", () => {
    const noFlag = DraftOk.parse(draft({ not_affiliated: false } as Partial<DraftOk>));
    expect(draftToMeta({ draft: noFlag, row, today: "2026-09-28" }).not_affiliated).toBe(true);
  });
  it("derives a visual from the table with alt text long enough for G14", () => {
    expect(meta.visuals.length).toBeGreaterThan(0);
    expect(meta.visuals[0]!.alt.length).toBeGreaterThanOrEqual(40);
  });
  it("records the fx rate used", () => {
    expect(meta.fx_rate_used).toBe(95.89);
  });
});
