/**
 * Content model — 03-TECHNICAL-SPEC §3.
 *
 * These schemas are the reason the pipeline can fail closed. A page that cannot
 * satisfy them is not a page yet, and the loader refuses to build it.
 */
import { z } from "zod";

/** A single sourced claim. G01 needs >= 6 of these per page, G03 traces every
 *  number in prose back to one. */
export const Fact = z.object({
  fact_id: z.string().min(3),
  claim: z.string().max(240),
  value: z.union([z.number(), z.string()]).optional(),
  unit: z.string().optional(),
  source_url: z.string().url(),
  source_title: z.string().min(1),
  source_domain: z.string().min(1),
  /** Verbatim, <= 25 words — enforced below rather than trusted. */
  excerpt: z
    .string()
    .max(200)
    .refine((s) => s.trim().split(/\s+/).length <= 25, {
      message: "excerpt must be 25 words or fewer (G02 renders it verbatim)",
    }),
  published_on: z.string().optional(),
  verified_on: z.string(),
  method: z.enum(["fetched", "device_check", "filing", "interview", "own_data", "user_reported"]),
  primary: z.boolean(),
  archive_url: z.string().url().optional(),
  device: z
    .object({ os: z.string(), region: z.string(), account_state: z.string() })
    .optional(),
})
  // A device_check fact without device metadata cannot be reproduced, which is
  // the whole point of recording it that way.
  .refine((f) => f.method !== "device_check" || f.device !== undefined, {
    message: "method 'device_check' requires device {os, region, account_state}",
  });
export type Fact = z.infer<typeof Fact>;

export const SerpItem = z.object({
  position: z.number().int().min(1),
  url: z.string(),
  title: z.string(),
  snippet: z.string().optional(),
  domain: z.string(),
});

export const ResearchObject = z.object({
  page_id: z.string(),
  url: z.string(),
  archetype: z.string(),
  primary_keyword: z.string(),
  secondary_keywords: z.array(z.string()),
  serp: z.object({
    in: z.array(SerpItem),
    us: z.array(SerpItem),
    ai_overview_present: z.boolean().default(false),
    ai_overview_domains: z.array(z.string()).default([]),
  }),
  paa: z.array(z.string()),
  facts: z.array(Fact),
  entities: z.record(z.string(), z.unknown()),
  gaps: z.array(z.string()),
  status: z.enum(["complete", "incomplete"]),
  incomplete_reasons: z.array(z.string()),
  researched_on: z.string(),
});
export type ResearchObject = z.infer<typeof ResearchObject>;

export const PAGE_STATUS = [
  "inventory", "researched", "drafted", "gated", "reviewed",
  "published", "indexable", "merged", "retired", "blocked",
] as const;

export const PageMeta = z.object({
  id: z.string(),
  url: z.string(),
  archetype: z.string(),
  hub: z.string(),
  wave: z.number().int().min(0).max(4),
  batch_id: z.string().optional(),
  status: z.enum(PAGE_STATUS),
  /** CLAUDE.md §1.3 — noindex by default. Only publish.ts flips this. */
  indexable: z.boolean().default(false),
  title: z.string().min(35).max(65),
  meta_description: z.string().min(110).max(155),
  h1: z.string().min(1),
  primary_keyword: z.string(),
  secondary_keywords: z.array(z.string()),
  entity_a: z.string().optional(),
  entity_b: z.string().optional(),
  geo: z.enum(["IN", "US", "IN+US"]),
  facts_used: z.array(z.string()),
  experience_used: z.array(z.string()).max(2),
  internal_links: z
    .array(
      z.object({
        url: z.string(),
        anchor: z.string(),
        role: z.enum(["hub", "lateral", "bofu", "proof", "tool", "related"]),
      }),
    )
    .min(5),
  visuals: z
    .array(
      z.object({
        type: z.enum(["svg-chart", "table", "diagram", "screenshot"]),
        src: z.string(),
        alt: z.string().min(40),
        caption: z.string().optional(),
      }),
    )
    .min(1),
  faq: z
    .array(z.object({ q: z.string(), a: z.string().max(600) }))
    .min(3)
    .max(5)
    .optional(),
  cta: z.object({
    primary: z.object({ label: z.string(), href: z.string() }),
    secondary: z.object({ label: z.string(), href: z.string() }).optional(),
  }),
  schema_types: z.array(z.string()),
  unique_value_statement: z.string().min(80),
  verified_on: z.string(),
  refreshed_on: z.string(),
  published_on: z.string().optional(),
  changelog: z.array(z.object({ date: z.string(), note: z.string() })).default([]),
  not_affiliated: z.boolean().default(false),
  fx_rate_used: z.number().optional(),
  judge: z
    .object({
      unique_value: z.number().min(1).max(5),
      answerable: z.boolean(),
      intent_ok: z.boolean(),
      voice_ok: z.boolean(),
    })
    .optional(),
})
  // G09 forbids these outright; catching it in the schema means a draft can
  // never reach the gate with them set.
  .refine((m) => !m.schema_types.some((t) => ["Review", "AggregateRating", "HowTo"].includes(t)), {
    message: "Review, AggregateRating and HowTo are banned (DECISIONS 2026-09-28)",
  })
  // G11: refreshed_on must not predate the newest verification.
  .refine((m) => m.refreshed_on >= m.verified_on, {
    message: "refreshed_on must be >= verified_on (G11)",
  })
  // An indexable page with no publish date is a bookkeeping error that would
  // emit a datePublished of undefined into JSON-LD.
  .refine((m) => !m.indexable || !!m.published_on, {
    message: "an indexable page needs published_on (G09 emits it as datePublished)",
  });
export type PageMeta = z.infer<typeof PageMeta>;

/** Experience library entry — 02 §5. The only permitted source of first-person
 *  claims (G12). */
export const ExperienceEntry = z.object({
  id: z.string().regex(/^exp-\d{3,}$/),
  tags: z.array(z.string()),
  context: z.string().min(1),
  claim: z.string().min(1),
  numbers: z
    .array(
      z.object({
        metric: z.string(),
        from: z.string().optional(),
        to: z.string().optional(),
        value: z.string().optional(),
        window: z.string().optional(),
      }),
    )
    .default([]),
  permission: z.enum(["public", "client_approved", "anonymised", "founder_own"]),
  can_name_company: z.boolean(),
  timeframe: z.string(),
  quote: z.string().optional(),
  source_session: z.string(),
})
  // An anonymised entry that names the company defeats its own purpose.
  .refine((e) => e.permission !== "anonymised" || e.can_name_company === false, {
    message: "an anonymised entry cannot set can_name_company: true (02 §5)",
  });
export type ExperienceEntry = z.infer<typeof ExperienceEntry>;
