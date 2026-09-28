import { describe, expect, it } from "vitest";
import type { PageMeta } from "../lib/content/schemas";
import { buildGraph, robotsValue } from "../lib/schema";
import { entity, personNode } from "../lib/schema/entity";

function meta(over: Partial<PageMeta> = {}): PageMeta {
  return {
    id: "gl-1", url: "/glossary/arpu", archetype: "glossary", hub: "glossary",
    wave: 1, status: "drafted", indexable: false,
    title: "ARPU: What Average Revenue Per User Means",
    meta_description:
      "ARPU is average revenue per user over a period. Here is the formula, an Indian worked example, and benchmark bands by industry.",
    h1: "What is ARPU?", primary_keyword: "arpu", secondary_keywords: [], geo: "IN+US",
    facts_used: [], experience_used: [],
    internal_links: [
      { url: "/glossary", anchor: "glossary", role: "hub" },
      { url: "/a", anchor: "a", role: "lateral" },
      { url: "/b", anchor: "b", role: "lateral" },
      { url: "/c", anchor: "c", role: "tool" },
      { url: "/work-with-me", anchor: "work with me", role: "bofu" },
    ],
    visuals: [{ type: "table", src: "/svg/arpu.svg",
      alt: "Table of ARPU bands by industry with the source and date on each row" }],
    cta: { primary: { label: "Get an arpu review", href: "/work-with-me" } },
    schema_types: ["DefinedTerm", "Person", "BreadcrumbList"],
    unique_value_statement:
      "Carries Indian ARPU bands in INR alongside global USD figures, which the ranking pages omit.",
    verified_on: "2026-09-20", refreshed_on: "2026-09-24", changelog: [], not_affiliated: false,
    ...over,
  } as PageMeta;
}

const types = (g: ReturnType<typeof buildGraph>) =>
  g["@graph"].map((n) => n["@type"] as string);

describe("robots meta — noindex by default (CLAUDE.md §1.3)", () => {
  it("is noindex,follow for a drafted page", () => {
    expect(robotsValue(meta())).toBe("noindex,follow");
  });
  it("stays noindex when indexable is true but status has not flipped", () => {
    expect(robotsValue(meta({ indexable: true, status: "reviewed" }))).toBe("noindex,follow");
  });
  it("only indexes when both the flag and the status agree", () => {
    const r = robotsValue(meta({ indexable: true, status: "indexable", published_on: "2026-09-25" }));
    expect(r).toContain("index,follow");
    expect(r).not.toContain("noindex");
  });
});

describe("buildGraph", () => {
  it("refuses banned types even if they reach it", () => {
    const m = { ...meta(), schema_types: ["DefinedTerm", "AggregateRating"] } as PageMeta;
    expect(() => buildGraph(m)).toThrow(/banned type/i);
  });
  it("refuses a type with no builder rather than silently dropping it", () => {
    const m = { ...meta(), schema_types: ["DefinedTerm", "Recipe"] } as PageMeta;
    expect(() => buildGraph(m)).toThrow(/no builder/);
  });
  it("adds BreadcrumbList on a non-hub page", () => {
    expect(types(buildGraph(meta()))).toContain("BreadcrumbList");
  });
  it("omits BreadcrumbList on a hub", () => {
    const m = meta({ archetype: "hub", url: "/glossary", hub: "glossary",
      schema_types: ["CollectionPage", "ItemList"] });
    expect(types(buildGraph(m, { items: [] }))).not.toContain("BreadcrumbList");
  });
  it("emits FAQPage only when a FAQ exists", () => {
    expect(types(buildGraph(meta()))).not.toContain("FAQPage");
    const withFaq = meta({
      faq: [{ q: "a?", a: "x" }, { q: "b?", a: "y" }, { q: "c?", a: "z" }],
      schema_types: ["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    });
    expect(types(buildGraph(withFaq))).toContain("FAQPage");
  });
  it("sets dateModified from refreshed_on and omits datePublished when unset", () => {
    const m = meta({ archetype: "teardown", url: "/teardowns/duolingo/pricing",
      schema_types: ["Article", "Person", "BreadcrumbList"] });
    const art = buildGraph(m)["@graph"].find((n) => n["@type"] === "Article")!;
    expect(art.dateModified).toBe("2026-09-24");
    expect(art.datePublished).toBeUndefined();
  });
  it("caps ItemList at 50 entries", () => {
    const items = Array.from({ length: 80 }, (_, i) => ({ url: `/x/${i}`, name: `x${i}` }));
    const m = meta({ archetype: "hub", url: "/glossary",
      schema_types: ["CollectionPage", "ItemList"] });
    const coll = buildGraph(m, { items })["@graph"].find((n) => n["@type"] === "CollectionPage")! as
      { mainEntity: { itemListElement: unknown[] } };
    expect(coll.mainEntity.itemListElement).toHaveLength(50);
  });
  it("names breadcrumb crumbs from the inventory when a title is available", () => {
    const g = buildGraph(meta(), { titleFor: (u) => (u === "/glossary" ? "Glossary" : undefined) });
    const bc = g["@graph"].find((n) => n["@type"] === "BreadcrumbList")! as
      { itemListElement: { name: string }[] };
    expect(bc.itemListElement.map((i) => i.name)).toEqual(["Home", "Glossary", "Arpu"]);
  });
});

describe("entity", () => {
  it("omits sameAs entirely while no profile is verified", () => {
    expect(entity().person.sameAs).toHaveLength(0);
    expect(personNode().sameAs).toBeUndefined();
  });
  it("carries the positioning line as jobTitle", () => {
    expect(personNode().jobTitle).toMatch(/India-first/);
  });
});
