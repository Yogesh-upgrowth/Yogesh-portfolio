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
  /**
   * Required blocks, in the order 01 SectionB gives. prompts/research.md rule 7
   * asks the researcher to report block_coverage against exactly these names,
   * and G01 fails a page whose research object leaves one uncovered. That is
   * the check that stops six facts all supporting the same section.
   */
  requiredBlocks?: readonly string[];
  /** 01 SectionB "must not". The G19 judge receives this list verbatim. */
  mustNot?: readonly string[];
  /** Extra uniqueness ceilings beyond sibling/parent, per 01 SectionB. */
  uniquenessNotes?: string;
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
    requiredBlocks: [
      "editorial_intro",
      "start_here_cards",
      "filterable_index",
      "recently_verified",
      "cta_band",
    ],
    mustNot: [
      "auto-dumped lists with no curation",
      "keyword-stuffed intros",
      "more than one CTA",
    ],
  },
  service: {
    words: [900, 1500], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB], parent: 0.45, sibling: 0.45,
    requiredBlocks: [
      "answer_box",
      "who_this_is_for",
      "first_six_weeks",
      "deliverables",
      "method",
      "proof",
      "pricing_anchors",
      "industry_variants",
      "tools_and_templates",
      "faq",
      "cta",
    ],
    mustNot: [
      "explaining the concept beyond 120 words",
      "generic benefits lists",
      "testimonials that are not real and permissioned",
    ],
  },
  "service-industry": {
    words: [800, 1300], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB], parent: 0.45, sibling: 0.5,
    requiredBlocks: [
      "answer_box",
      "whats_different_about_industry",
      "named_apps",
      "how_the_engagement_changes",
      "benchmark_card",
      "pricing_anchors",
      "faq",
      "cta",
    ],
    mustNot: [
      "repeating the parent service description beyond 120 words",
      "reusing the same three example apps across two services for one industry",
      "generic industry overview",
    ],
  },
  "hire-city": {
    words: [600, 900], section: [120, 400],
    requiredSchema: ["Service", ...PERSON_CRUMB],
    requiredBlocks: [
      "answer_box",
      "how_working_together_looks",
      "city_scene",
      "services_by_stage",
      "case_studies",
      "faq",
      "cta",
    ],
    mustNot: [
      "claiming an office or address in the city",
      "saying the practice is located in the city",
      "an identical body with the city name swapped",
      "more than 2 paragraphs about the city itself",
    ],
  },
  "case-study": {
    words: [1000, 1800], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
    requiredBlocks: [
      "answer_box",
      "context",
      "problem_with_baseline",
      "interventions",
      "results",
      "what_didnt_work",
      "what_id_do_differently",
      "applicability",
      "related",
      "cta",
    ],
    mustNot: [
      "a number without a permission tag",
      "numbers not in the experience library",
      "a multiple claim without a timeframe",
      "invented methodology detail",
    ],
  },
  teardown: {
    words: [1200, 2000], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB],
    notAffiliated: true, yearTokenAllowed: true,
    requiredBlocks: [
      "answer_box",
      "what_the_app_is",
      "lens_body",
      "what_id_steal",
      "where_its_fragile",
      "india_vs_global",
      "faq",
      "sources",
      "not_affiliated",
      "related",
    ],
    mustNot: [
      "restating the app description beyond 80 words",
      "repeating the same what-I-would-steal tactics across lenses",
      "unverified revenue claims without a dated source",
      "screenshot dumps",
      "more than 3 annotated screenshots",
      "claims about internal metrics that are neither sourced nor labelled inference",
    ],
  },
  "benchmark-hub": {
    words: [1200, 1800], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB], yearTokenAllowed: true,
    requiredBlocks: [
      "answer_box",
      "definition",
      "benchmark_table_by_industry",
      "india_layer",
      "how_to_measure",
      "what_moves_it",
      "stage_adjustment",
      "tool_embed",
      "faq",
      "sources",
    ],
    mustNot: [
      "presenting averages of other data as our own data",
      "copying a source table wholesale",
      "inventing an India number",
    ],
  },
  benchmark: {
    words: [800, 1300], section: [120, 400],
    requiredSchema: ["Article", ...PERSON_CRUMB], yearTokenAllowed: true,
    requiredBlocks: [
      "answer_box",
      "the_numbers",
      "why_this_industry_differs",
      "india_layer",
      "what_good_looks_like",
      "if_youre_below_median",
      "related",
      "tool_embed",
      "faq",
      "sources",
    ],
    mustNot: [
      "repeating the hub definition and measurement sections beyond 80 words",
      "padding with generic industry description",
    ],
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
