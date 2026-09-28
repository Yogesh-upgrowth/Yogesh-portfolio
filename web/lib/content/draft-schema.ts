/**
 * DraftOutput — prompts/page-generation.md §3.
 *
 * This is what the generator returns. It is not PageMeta: draft.ts converts it,
 * assembling the MDX body from `sections` in order and deriving the meta. That
 * indirection is the point — the model reasons in sections, tables and visual
 * specs, and the conversion is where component tags and block order are applied
 * consistently rather than being the model's job to remember.
 */
import { z } from "zod";

export const VisualSpec = z.object({
  id: z.string(),
  type: z.enum(["svg-chart", "diagram"]),
  chart: z.object({
    kind: z.enum(["bar", "line", "stacked", "timeline"]),
    series: z.array(z.object({
      name: z.string(),
      unit: z.string(),
      points: z.array(z.tuple([z.string(), z.number()])),
    })),
  }).optional(),
  diagram: z.object({
    nodes: z.array(z.string()),
    edges: z.array(z.tuple([z.string(), z.string()])),
  }).optional(),
  alt: z.string().min(40),
  caption: z.string().optional(),
  facts_used: z.array(z.string()).default([]),
})
  // A visual that specifies neither cannot be built, and an empty figure is
  // worse than none: G14 counts it as an own visual that is not there.
  .refine((v) => v.chart !== undefined || v.diagram !== undefined, {
    message: "a visual spec needs either a chart or a diagram",
  });

export const DraftSection = z.object({
  h2: z.string().min(1),
  body_markdown: z.string().min(1),
  facts_used: z.array(z.string()).default([]),
  visual: z.string().nullable().default(null),
});

export const DraftTable = z.object({
  id: z.string(),
  component: z.enum(["PriceTable", "FactTable", "DecisionTable"]),
  columns: z.array(z.string()),
  rows: z.array(z.array(z.union([z.string(), z.number()]))),
  facts_used: z.array(z.string()).default([]),
  verified_on: z.string(),
  note: z.string().default(""),
});

export const DraftOk = z.object({
  status: z.literal("draft"),
  page_id: z.string(),
  title: z.string().min(35).max(65),
  meta_description: z.string().min(110).max(155),
  h1: z.string().min(1),
  answer_first: z.string().min(1),
  verdict: z.string().min(1),
  unique_value_statement: z.string().min(80),
  sections: z.array(DraftSection).min(1),
  tables: z.array(DraftTable).default([]),
  visual_specs: z.array(VisualSpec).default([]),
  from_my_work: z.object({ exp_id: z.string(), text: z.string() }).nullable().default(null),
  what_i_would_do: z.object({
    verdict: z.string(),
    steps: z.array(z.string()).min(1),
  }).nullable().default(null),
  india_layer: z.string().nullable().default(null),
  faq: z.array(z.object({
    q: z.string(), a: z.string().max(600), facts_used: z.array(z.string()).default([]),
  })).nullable().default(null),
  internal_links: z.array(z.object({
    url: z.string(), anchor: z.string(),
    role: z.enum(["hub", "lateral", "bofu", "proof", "tool", "related"]),
    section_index: z.number().int().min(0).default(0),
  })).min(5),
  cta: z.object({
    primary: z.object({ label: z.string(), href: z.string() }),
    secondary: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
  schema_hints: z.object({
    types: z.array(z.string()),
    about: z.object({ type: z.string(), name: z.string() }).optional(),
  }),
  not_affiliated: z.boolean().default(false),
  sources_note: z.string().default(""),
  facts_used_all: z.array(z.string()).default([]),
  experience_used: z.array(z.string()).max(2).default([]),
  self_check: z.object({
    three_things_leaders_lack: z.array(z.string()),
    word_count: z.number().int(),
    sections_over_400_words: z.number().int(),
    banned_phrases_found: z.number().int(),
  }),
})
  // The prompt requires three things the leaders lack, or a blocked return.
  // A draft that arrives with fewer has skipped its own instruction, and
  // accepting it would put a derivative page into review.
  .refine((d) => d.self_check.three_things_leaders_lack.filter((x) => x.trim()).length >= 3, {
    message: "self_check.three_things_leaders_lack needs 3 non-empty entries, " +
      "or the generator should have returned the blocked output",
  })
  .refine((d) => d.self_check.banned_phrases_found === 0, {
    message: "the generator reported banned phrases in its own output",
  })
  // from_my_work must declare its entry in experience_used, or G12 will fail
  // the page later for a mismatch the schema can catch now.
  .refine((d) => !d.from_my_work || d.experience_used.includes(d.from_my_work.exp_id), {
    message: "from_my_work cites an exp_id that is not in experience_used",
  });

/** prompts/page-generation.md §4. */
export const DraftBlocked = z.object({
  status: z.literal("blocked"),
  page_id: z.string(),
  reasons: z.array(z.string()).min(1),
  what_would_unblock: z.array(z.string()).default([]),
  suggested_fallback: z.string().nullable().default(null),
});

/**
 * A plain union rather than discriminatedUnion: DraftOk carries refinements, and
 * a refined schema is a ZodEffects, which discriminatedUnion does not accept.
 * The `status` literal still discriminates correctly at parse time.
 */
export const DraftOutput = z.union([DraftOk, DraftBlocked]);
export type DraftOk = z.infer<typeof DraftOk>;
export type DraftBlocked = z.infer<typeof DraftBlocked>;
export type DraftOutput = z.infer<typeof DraftOutput>;
