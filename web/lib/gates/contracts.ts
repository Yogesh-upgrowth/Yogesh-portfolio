/**
 * Per-archetype contracts — 01-PAGE-ARCHETYPES.md §B.
 *
 * Word ranges are ranges, never targets (B13): a page 20% under range with all
 * required blocks passes, a page padded to reach range fails review. That
 * asymmetry is encoded in `underTolerance` / `overTolerance` rather than left
 * to the caller.
 */
export interface ArchetypeContract {
  /** Inclusive word-count band from 01 §B. */
  words: readonly [number, number];
  /** H2 section band. Hubs and glossary run shorter sections (02 §2 G07). */
  section: readonly [number, number];
  /** JSON-LD types this archetype must emit (G09). */
  requiredSchema: readonly string[];
  /** Sibling/parent similarity ceilings where 01 overrides the defaults. */
  sibling?: number;
  parent?: number;
  /** G17: teardown, compare and pricing-examples must carry NotAffiliated. */
  notAffiliated?: true;
  /** Time-bound archetypes may carry a year token in the title (G10). */
  yearTokenAllowed?: true;
}

/** 02 §2 G07: 20% tolerance under the band, none over. */
export const UNDER_TOLERANCE = 0.2;
export const OVER_TOLERANCE = 0;

/** 02 §2 G04 defaults. Overridden per archetype above where 01 is stricter. */
export const SIMILARITY = { sibling: 0.55, parent: 0.45, any: 0.6, boilerplate: 0.35 } as const;

const PERSON_CRUMB = ["Person", "BreadcrumbList"] as const;

export const CONTRACTS: Record<string, ArchetypeContract> = {
  hub: {
    words: [300, 600], section: [60, 250],
    requiredSchema: ["CollectionPage", "ItemList"],
  },
  service: {
    words: [900, 1500], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB], parent: 0.45, sibling: 0.45,
  },
  "service-industry": {
    words: [800, 1300], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB], parent: 0.45, sibling: 0.5,
  },
  "hire-city": {
    words: [600, 900], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB],
  },
  "case-study": {
    words: [1000, 1800], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
  teardown: {
    words: [1200, 2000], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
    notAffiliated: true, yearTokenAllowed: true,
  },
  "benchmark-hub": {
    words: [1200, 1800], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB], yearTokenAllowed: true,
  },
  benchmark: {
    words: [800, 1300], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB], yearTokenAllowed: true,
  },
  tool: {
    words: [700, 1100], section: [120, 400],
    requiredSchema: ["WebApplication", ...PERSON_CRUMB],
  },
  playbook: {
    words: [1800, 3000], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
  glossary: {
    words: [350, 700], section: [60, 250],
    requiredSchema: ["DefinedTerm", ...PERSON_CRUMB],
  },
  compare: {
    words: [1000, 1600], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
    notAffiliated: true, yearTokenAllowed: true,
  },
  template: {
    words: [600, 1000], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
  india: {
    words: [1000, 1800], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
  "pricing-examples": {
    words: [900, 1400], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
    notAffiliated: true, yearTokenAllowed: true,
  },
  decision: {
    words: [1000, 1600], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
  growth: {
    words: [900, 1400], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
  },
};

export function contractFor(archetype: string): ArchetypeContract {
  const c = CONTRACTS[archetype];
  if (!c) {
    throw new Error(
      `[gates] no contract for archetype "${archetype}". ` +
        "Add it to web/lib/gates/contracts.ts and 01-PAGE-ARCHETYPES.md together.",
    );
  }
  return c;
}
