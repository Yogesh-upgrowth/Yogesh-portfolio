import { describe, expect, it } from "vitest";
import type { PageMeta } from "../lib/content/schemas";
import { buildKit, communityAnswers, notifySubject } from "../lib/distribution";

function meta(over: Partial<PageMeta> = {}): PageMeta {
  return {
    id: "td-1", url: "/teardowns/duolingo/pricing", archetype: "teardown",
    hub: "teardowns", wave: 1, status: "reviewed", indexable: false,
    title: "Duolingo Pricing in India: What It Charges and Why",
    meta_description: "Duolingo charges far less in India than in the US. Here is what it charges, how the annual discount compares, and what the gap implies.",
    h1: "What does Duolingo charge in India?", primary_keyword: "duolingo pricing india",
    secondary_keywords: [], entity_a: "duolingo", geo: "IN+US",
    facts_used: [], experience_used: [], internal_links: [], visuals: [],
    cta: { primary: { label: "x", href: "/work-with-me" } },
    schema_types: ["Article"],
    unique_value_statement: "Carries device-checked Indian prices against the US list price, which no ranking page does.",
    verified_on: "2026-09-20", refreshed_on: "2026-09-20", changelog: [], not_affiliated: true,
    ...over,
  } as PageMeta;
}

const site = "https://pmyogesh.com";

describe("distribution kit — 04 §2", () => {
  it("notifies the subject for a teardown", () => {
    const n = notifySubject({ meta: meta(), site });
    expect(n).toContain("duolingo");
    expect(n).toContain("No ask attached.");
  });
  it("does not notify anyone for a glossary page", () => {
    expect(notifySubject({ meta: meta({ archetype: "glossary" }), site })).toBeNull();
  });
  it("tells the author to answer before linking", () => {
    const [a] = communityAnswers({ meta: meta(), site });
    expect(a).toMatch(/Answer the question in full/);
    expect(a).toMatch(/stand\s*\n?\s*.*alone/);
  });
  it("carries the 04 §3 warning against link drops", () => {
    const [a] = communityAnswers({ meta: meta(), site });
    expect(a).toContain("04 §3");
  });
  it("builds a kit with every channel", () => {
    const kit = buildKit([{ meta: meta(), site }], "w1-teardown-01");
    for (const s of ["### LinkedIn", "### X thread", "### Newsletter",
                     "### Community answers", "### Notify the subject"]) {
      expect(kit).toContain(s);
    }
  });
  it("states the weekly minimums so they are measurable", () => {
    const kit = buildKit([{ meta: meta(), site }], "w1-teardown-01");
    expect(kit).toContain("3 LinkedIn posts");
    expect(kit).toContain("distribution-log.csv");
  });
  it("uses the absolute URL so a pasted draft is not broken", () => {
    const kit = buildKit([{ meta: meta(), site }], "b");
    expect(kit).toContain("https://pmyogesh.com/teardowns/duolingo/pricing");
  });
});
