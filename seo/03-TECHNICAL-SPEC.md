# 03 — Technical spec

For Claude Code. Build in this order: §2 layout → §3 content model → §4 pipeline → §5 SEO plumbing → §6 performance → §7 design system → §8 analytics. Wave 0 is done when 02 §4 "0 → 1" passes.

## 1. Stack

- **Framework:** current stable Next.js, App Router, TypeScript strict. Static generation for every content route (`generateStaticParams` from the content directory). No runtime DB. ISR only for `/tools/*` result-share URLs if needed (query-string state is preferred; no ISR by default).
- **Content:** MDX bodies + JSON meta on disk, validated with **zod** at build time (`lib/content/loader.ts`). No CMS. No Contentlayer.
- **Styling:** Tailwind with a token layer (§7). No component library; hand-written components.
- **Hosting:** Vercel (or any static host that supports `next build` output + edge redirects). Redirects live in `config/redirects.json` and are compiled into `next.config` at build.
- **Tooling:** pnpm; Biome or ESLint+Prettier; Vitest for `lib/formulas` and loaders; Playwright for the 5-template smoke suite; Lighthouse CI.
- **Models:** `claude-opus-5-5` for drafting and research synthesis; `claude-sonnet-5` for gate judges and bulk classification; escalate borderline judge results to Opus (02 §2 G20).
- **External APIs:** DataForSEO (keywords, SERP incl. AI Overview items), Google Search Console API (service account), GA4 Measurement Protocol (server events only), IndexNow, Bing Webmaster.
- **Secrets (`.env.local`, never committed):** `ANTHROPIC_API_KEY`, `DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD`, `GSC_SERVICE_ACCOUNT_JSON`, `GSC_PROPERTY=sc-domain:pmyogesh.com`, `INDEXNOW_KEY`, `GA4_MEASUREMENT_ID`, `GA4_API_SECRET`, `REVIEW_BASIC_AUTH` (dev only), optional `EMBEDDINGS_API_KEY`.

## 2. Repository layout

```
pmyogesh/
  CLAUDE.md                     # operating rules for Claude Code (copy from this package)
  DECISIONS.md                  # append-only decision log
  page-inventory.csv            # generated — never hand-edit
  seeds/                        # entities.json, curated.json
  config/                       # fx.json, banned-phrases.json, sources-allowlist.json, blocked-domains.json, redirects.json, sitemaps.json
  prompts/                      # page-generation.md, research.md, review-judge.md, experience-capture.md
  content/
    experience.json             # the experience library (02 §5)
    hubs/<hub>.json              # curated "start here" picks per hub
    <hub>/<slug>.json            # page meta (zod: PageMeta)
    <hub>/<slug>.mdx             # page body using components only
    services/<service>/<industry>.{json,mdx}   # nested archetypes mirror the URL
    teardowns/<app>/<lens>.{json,mdx}
    benchmarks/<metric>/<industry>.{json,mdx}
  research/<page_id>.json       # research objects (zod: ResearchObject)
  data/
    facts/index.json            # fact_id → pages using it (reuse cap)
    facts/shared.json           # cross-cutting facts rendered via <SharedFact id=…/>
    keywords.json               # DataForSEO output per inventory row
    link-plan.json              # inbound/outbound plan per page
    similarity/                 # minhash signatures, embeddings.jsonl, heatmaps
    pricing/<category>.json|csv # price-check CLI output (feeds /pricing-examples and the data study)
    sources/reports.json        # benchmark reports + expected next edition
    gsc/                        # weekly exports
    citations.csv               # monthly 25-prompt citation check
  reports/<batch_id>.md         # gate + review reports
  app/                          # Next.js App Router (explicit route folders per hub, no catch-all)
    (site)/services/[service]/page.tsx
    (site)/services/[service]/[industry]/page.tsx
    (site)/hire/[slug]/page.tsx
    (site)/teardowns/[app]/[lens]/page.tsx
    (site)/benchmarks/[metric]/page.tsx
    (site)/benchmarks/[metric]/[industry]/page.tsx
    (site)/tools/[tool]/page.tsx
    … one folder per archetype; hubs as <hub>/page.tsx
    (site)/about/page.tsx  (site)/work-with-me/page.tsx
    sitemap.xml/route.ts  sitemaps/[hub].xml/route.ts  llms.txt/route.ts
    admin/review/           # dev-only, excluded from production build
  components/                   # §7
  lib/
    content/{loader,schemas}.ts # zod schemas + loaders
    schema/*.ts                 # JSON-LD builders per archetype
    formulas/*.ts               # tool maths, unit-tested
    fx.ts                       # INR/USD from config/fx.json
    links.ts                    # inventory-aware link resolver (throws on unknown URL)
  scripts/                      # §4 (TypeScript via tsx; Python for build_inventory.py and similarity_check.py)
  tests/
  public/                       # robots.txt, indexnow key file, og/, fonts/
```

Rule: the URL is the file path. `/services/app-monetization-strategy/fintech` ↔ `content/services/app-monetization-strategy/fintech.mdx`. Loader throws at build if a content file has no inventory row or the inventory row has no file (except status < `drafted`).

## 3. Content model (zod, `lib/content/schemas.ts`)

```ts
export const Fact = z.object({
  fact_id: z.string(),                 // "f-teardown-0172-03"
  claim: z.string().max(240),          // the fact in one sentence, with the number
  value: z.union([z.number(), z.string()]).optional(),
  unit: z.string().optional(),         // "INR/month", "%", "users"
  source_url: z.string().url(),
  source_title: z.string(),
  source_domain: z.string(),
  excerpt: z.string().max(200),        // ≤25 words, verbatim, for the Sources block
  published_on: z.string().optional(), // source date if known (ISO)
  verified_on: z.string(),             // ISO date we checked it
  method: z.enum(["fetched","device_check","filing","interview","own_data","user_reported"]),
  primary: z.boolean(),                // per config/sources-allowlist.json
  archive_url: z.string().url().optional(),
  device: z.object({ os: z.string(), region: z.string(), account_state: z.string() }).optional(), // for device_check
});

export const ResearchObject = z.object({
  page_id: z.string(), url: z.string(), archetype: z.string(),
  primary_keyword: z.string(), secondary_keywords: z.array(z.string()),
  serp: z.object({ in: z.array(SerpItem), us: z.array(SerpItem) }),   // top 10 each, with snippet, and ai_overview presence + cited domains
  paa: z.array(z.string()),                                            // real questions
  facts: z.array(Fact),                                                // ≥6 page-specific to pass G01
  entities: z.record(z.string()),                                      // app→SoftwareApplication data, industry, city…
  gaps: z.array(z.string()),                                           // what we looked for and could not verify
  status: z.enum(["complete","incomplete"]),
  incomplete_reasons: z.array(z.string()),
  researched_on: z.string(),
});

export const PageMeta = z.object({
  id: z.string(), url: z.string(), archetype: z.string(), hub: z.string(),
  wave: z.number().int().min(0).max(4), batch_id: z.string().optional(),
  status: z.enum(["inventory","researched","drafted","gated","reviewed","published","indexable","merged","retired","blocked"]),
  indexable: z.boolean().default(false),
  title: z.string().min(35).max(65), meta_description: z.string().min(110).max(155), h1: z.string(),
  primary_keyword: z.string(), secondary_keywords: z.array(z.string()),
  entity_a: z.string().optional(), entity_b: z.string().optional(), geo: z.enum(["IN","US","IN+US"]),
  facts_used: z.array(z.string()),                 // fact_ids
  experience_used: z.array(z.string()).max(2),     // exp_ids
  internal_links: z.array(z.object({ url: z.string(), anchor: z.string(), role: z.enum(["hub","lateral","bofu","proof","tool","related"]) })).min(5),
  visuals: z.array(z.object({ type: z.enum(["svg-chart","table","diagram","screenshot"]), src: z.string(), alt: z.string().min(40), caption: z.string().optional() })).min(1),
  faq: z.array(z.object({ q: z.string(), a: z.string().max(600) })).min(3).max(5).optional(),
  cta: z.object({ primary: z.object({ label: z.string(), href: z.string() }), secondary: z.object({ label: z.string(), href: z.string() }).optional() }),
  schema_types: z.array(z.string()),
  unique_value_statement: z.string().min(80),      // what this page has that the SERP leaders don't
  verified_on: z.string(), refreshed_on: z.string(), published_on: z.string().optional(),
  changelog: z.array(z.object({ date: z.string(), note: z.string() })).default([]),
  not_affiliated: z.boolean().default(false),
  fx_rate_used: z.number().optional(),
  judge: z.object({ unique_value: z.number().min(1).max(5), answerable: z.boolean(), intent_ok: z.boolean(), voice_ok: z.boolean() }).optional(),
});
```

MDX bodies use components only for structured blocks: `<AnswerBox>`, `<FactTable>`, `<PriceTable>`, `<FromMyWork exp="exp-014">`, `<WhatIdDo>`, `<DecisionTable>`, `<Calculator id="ltv-calculator">`, `<Figure src alt caption>`, `<FAQ>` (rendered from meta), `<Sources>` (rendered from `facts_used`), `<SharedFact id>`, `<Changelog>`. Prose between them is plain Markdown. No raw HTML.

URL rules: lowercase, hyphens, no trailing slash, ≤4 segments, no dates or years in paths, self-referencing canonical, no indexable query strings (tool state is `?` params but canonical points to the bare URL). Merges and retirements go through `config/redirects.json` (301 for merge, 410 for retire).

## 4. Pipeline (`scripts/`)

Every script is idempotent, takes `--ids` / `--batch` / `--archetype` / `--wave` filters, writes to disk, and prints a one-screen summary. `pnpm` aliases in `package.json` (also listed in `CLAUDE.md`).

| Script | Input → output | Key rules |
|---|---|---|
| `build_inventory.py` (exists) | `seeds/*.json` → `page-inventory.csv`, `inventory-summary.md` | Never hand-edit the CSV. Re-run after any seed change; the script preserves `status`/`batch_id` columns if present. |
| `validate-keywords.ts` | inventory rows → `data/keywords.json` | DataForSEO: search volume IN + US, keyword difficulty, SERP features (AI Overview present? which domains cited?). Keep a row if `(vol_in + vol_us ≥ 30)` **or** `funnel = BOFU` **or** archetype ∈ {glossary, india, pricing-examples} (strategic zero-volume allowed). Flag `brand_dominated` when ≥7 of top-10 are the entity's own domains or global majors — for informational archetypes, mark `notes=hard-serp` (still build if the page's job is citation). Never drop a BOFU row for volume. Store the top-10 URLs per market for G20. Verify endpoint names against current DataForSEO docs before wiring. |
| `research.ts` | inventory row → `research/<page_id>.json` | Runs a Claude subagent with web search/fetch tools and `prompts/research.md`. Fail-closed: `status: incomplete` if <6 page-specific facts or <50% primary sources. Records archive snapshots (Wayback) for every source. Price facts require `device_check` recorded via `price:check` (below) — the agent may draft the price table only from that file. |
| `price:check` (CLI, `scripts/price-check.ts`) | `--app duolingo --region IN --os android` → appends to `data/pricing/<category>.json` | A human-in-the-loop form: prompts Yogesh (or a tester) for tier/price/period/trial seen on a real device, stamps date/OS/region/account state, writes CSV too. This is the only source of `device_check` facts. |
| `draft.ts` | research object + archetype contract + experience library + link candidates → draft JSON (`prompts/page-generation.md` schema) → `content/<hub>/<slug>.{json,mdx}` | Model `claude-opus-5-5`; JSON validated with zod; one automatic retry on schema failure; a `blocked` output (from the prompt) sets `status: blocked` and writes the reasons to the report. Never drafts a page whose research object is `incomplete`. |
| `link-plan.ts` | inventory + content → `data/link-plan.json` | Candidates by shared `entity_a`/`entity_b`/industry/metric/app; guarantees ≥3 inbound for every page before it can flip `indexable`; hubs link to all children; writes suggested anchors. |
| `gates.ts` | drafts → `reports/<batch_id>.md`, `status: gated` or `fail` | Implements G01–G20 (02 §2). Calls `similarity_check.py` (or a TS port) and the judge prompts. `--sample` mode for Wave 0. Exit code non-zero on any fail. |
| `review` (`app/admin/review`, dev-only) | gated pages → `status: reviewed` or `rejected(reason)` | Shows page preview, every fact with its source and excerpt, the `FromMyWork` text next to its `exp_id` entry, the judge answers, the similarity heatmap, and the 5 review questions. Random 20% sampling per batch from Wave 2 (seeded RNG, logged). Basic-auth, localhost only. |
| `publish.ts` | reviewed batch → `status: published` (still noindex) or `indexable` | Checks the Search Status Dashboard (prompts for manual confirmation "no rollout in first 7 days: y/n"), checks inbound ≥3, flips `indexable`, updates hub sitemap `lastmod`, pings IndexNow, submits Wave-1 URLs to GSC (quota-aware), writes the distribution kit (04 §2) to `reports/<batch_id>-distribution.md`. |
| `refresh.ts` | corpus → refreshed pages | Finds facts with `verified_on` > 90 days (price facts > 45), re-fetches, diffs, updates facts/tables, adds `changelog` entries, bumps `refreshed_on` only when content changed. Monthly 10% sweep; `--report <id>` mode when a benchmark report has a new edition. |
| `monitor.ts` | GSC + GA4 → `data/gsc/*.csv`, dashboard markdown | Weekly. Per archetype/hub: indexed %, impressions, clicks, AI impressions, pages with ≥1 click, leads by landing archetype. Emits the 02 §7 triggers. |
| `citations.ts` | 25 prompts → `data/citations.csv` | Monthly. Where an API exists, automate; else the script prints the prompt list and records manual results. |
| `similarity_check.py` (reference implementation in this package) | content dir → similarity matrix, boilerplate ratios | MinHash, 128 perms, 5-gram word shingles, components stripped. Port to TS if preferred; keep thresholds identical. |

Batch protocol: `research → gates(G01–G03) → draft → gates → review → publish`, ≤25 pages, one archetype, then **stop and wait for Yogesh** (CLAUDE.md §3).

## 5. SEO plumbing

**Structured data (`lib/schema/`)** — sitewide: `WebSite`, `Organization` (pmyogesh), `Person` (Yogesh; `sameAs` → LinkedIn, X, Topmate, Substack/newsletter, Crunchbase, Product Hunt as verified; `jobTitle` = positioning line; `knowsAbout` list). Per archetype: exactly the types in 01. `BreadcrumbList` on every non-hub page. `FAQPage` emitted when FAQ exists (no rich result expected — it still clarifies Q/A structure for AI extraction). `Dataset` only where a CSV is downloadable with licence and method. `ImageObject` for our charts with `creator` → Person. No `Review`, `AggregateRating`, `HowTo`. `dateModified` = `refreshed_on`; `datePublished` = `published_on`.

**Sitemaps:** `/sitemap.xml` index → `/sitemaps/<hub>.xml` (14 files + `pages.xml` for about/work-with-me). Only `indexable: true` pages. `lastmod` = `refreshed_on` (real content changes only). ≤5,000 URLs per file. Regenerated at build; `publish.ts` triggers a deploy.

**robots.txt** (`public/robots.txt`):
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
# AI crawlers explicitly allowed
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot
User-agent: Applebot-Extended
User-agent: Amazonbot
User-agent: Bingbot
Allow: /
Sitemap: https://pmyogesh.com/sitemap.xml
```
Verify current user-agent tokens against each vendor's docs at Wave 0.

**Meta robots:** `noindex,follow` until `indexable`; then `index,follow,max-snippet:-1,max-image-preview:large`.

**llms.txt** (`/llms.txt`, generated): H1 + one-paragraph site summary + one H2 per hub with a one-line description and links to the hub and its 5–10 curated picks (from `content/hubs/*.json`). ≤300 lines. No page bodies, no templated bloat. Optional `/llms-full.txt` per hub later, only if a crawler is observed using it.

**IndexNow:** key file at `/public/<key>.txt`; `publish.ts` POSTs batches to `api.indexnow.org` (covers Bing/Yandex/others). Also register in Bing Webmaster Tools and import GSC.

**Canonicals, OG:** self canonical; OG image generated per page (`app/og/route.tsx`, Satori) — title + hub + "Last verified" + the page's headline number; ≤120 KB.

**Redirect registry** (`config/redirects.json`): every merged lens/city page → parent (301); retired → 410. Built into `next.config` `redirects()`.

## 6. Performance budgets (G18)

- Lab (Lighthouse CI, mobile, throttled): LCP ≤2.0 s, INP ≤200 ms, CLS ≤0.1, TBT ≤150 ms. Field: aim ≥90% "good" URLs in CrUX/GSC CWV report by Wave 2.
- JS ≤120 KB gzipped per page; tool pages ≤180 KB. Server components by default; client islands only for calculators, the INR/USD toggle, the filterable index (progressive: the list is server-rendered and the filter enhances it).
- Fonts: 2 families self-hosted (`public/fonts`), 2 weights each, WOFF2, subset to Latin + ₹, `font-display: swap`, preloaded. Third family (mono) only for number columns, loaded async.
- Images: SVG charts inline (no requests); OG images cached; screenshots as AVIF/WebP ≤120 KB via `next/image` with explicit dimensions (CLS).
- Third-party scripts: GA4 only, loaded after first interaction or 3 s idle; consent-gated (§8). No chat widgets, no Calendly script on load (booking opens in a new tab or loads on click).
- LCP element is the H1 or the answer paragraph — never an image. Reserve heights for tables/charts to avoid CLS.

## 7. Design system

Aesthetic: editorial reference, not SaaS landing page. Think a firm's research desk — dense numbers made readable, generous whitespace around them, one accent used for verdicts and CTAs only. Tables are first-class citizens. Dark and light via `prefers-color-scheme`.

**Tokens (`app/tokens.css`):**
- Type: display serif (e.g., Fraunces or Instrument Serif) for H1/H2 and verdict lines; text sans (e.g., Inter or Geist) for body; `tabular-nums` mono for number columns. Scale: 15/17/20/24/32/44 px; body line-height 1.6; measure 62–70 ch.
- Colour: paper `#FAFAF7` / ink `#101010`; dark: paper `#0F0F0E` / ink `#F1EFE8`; accent one hue (e.g., deep orange `#D9480F`) used only for verdicts, CTAs, "Last verified" pill; success/warn only in gate reports; borders at 8–12% ink.
- Spacing: 4-pt grid; section rhythm 48/72 px; tables 12 px cell padding, zebra at 3% ink.
- Radius 6 px; shadows none (borders instead); motion: none beyond 120 ms opacity.

**Components (`components/`):** `AnswerBox` (accent rule left, verdict serif, number highlighted) · `LastVerified` (pill: date + "how we verify" popover) · `FactTable` (source pill per row) · `SourcePill` (domain favicon-less, date) · `PriceTable` (INR/USD toggle, region tabs, `verified_on` per row) · `DecisionTable` · `CalculatorShell` (inputs left/results right on desktop, stacked on mobile; result card is shareable) · `FromMyWork` (quote-style block with context line and permission-aware company name) · `WhatIdDo` (numbered 3-step card) · `FAQ` (details/summary, no JS) · `CTABand` (archetype-aware copy) · `Breadcrumbs` · `RelatedGrid` (3 cards, why-this-link line) · `AuthorBox` · `NotAffiliated` · `Sources` (numbered, excerpt, verified date, archive link) · `Changelog` · `Figure` (SVG chart with `<figcaption>`; charts built with a small internal `lib/charts` producing static SVG at build).

Templates: one layout per archetype (17 total, most share `ReferenceLayout`; `ServiceLayout`, `ToolLayout`, `HubLayout`, `CaseStudyLayout` differ). Navigation exposes 5 hubs (Services, Teardowns, Benchmarks, Tools, Playbooks) + Work with me; the other hubs are reachable from footer and in-context links.

## 8. Analytics, tracking, reporting

- **GA4** (consent-gated; India DPDP-friendly: no identifiers before consent; basic consent mode). Events: `cta_click {archetype, page_id, position}`, `booking_open`, `lead_submitted {stage, band, problem}`, `tool_run {tool}`, `tool_result_share`, `template_download {slug, gated}`, `newsletter_signup {page_id}`, `source_click {domain}`, `fx_toggle`. Landing archetype captured as a user property on session start.
- **Booking:** Cal.com or Calendly link (new tab) with UTM = `page_id`; a 3-field qualification form on `/work-with-me` (stage, MAU/ARR band, problem) writes `lead_submitted`.
- **GSC:** domain property; weekly `searchanalytics.query` pulls by page + query, IN and US; generative-AI performance (AI Overviews / AI Mode) via the API's search-appearance filter if exposed, otherwise the scheduled bulk export to BigQuery, otherwise a manual weekly CSV export into `data/gsc/`. Coverage per hub sitemap; URL Inspection for Wave 1 (quota ~2,000/day per property — batch accordingly).
- **Rank tracking:** DataForSEO SERP (IN + US) weekly for 50 queries from `data/keywords.json` (`tracked: true`), storing position and whether an AI Overview appears and cites pmyogesh.com.
- **Citation check:** monthly, 25 prompts (`data/citation-prompts.json`) across Google AI Mode, ChatGPT, Perplexity, Gemini, Claude; record cited/not + which page.
- **Dashboard:** `monitor.ts` writes `reports/weekly-<date>.md`: KPIs from 00 §5 per archetype, wave-gate status, triggers fired.

## 9. Wave 0 checklist (done = 02 §4 "0 → 1")

1. Repo scaffold, tokens, 5 layouts, all components with Storybook-free demo route (`/admin/components`, dev-only).
2. Loader + zod schemas; 5 hand-written sample pages (one each: service, teardown, benchmark, tool, glossary) passing every gate.
3. `build_inventory.py` wired; `validate-keywords.ts` run on Wave 1 rows.
4. Structured data builders + Rich Results check on the 5 samples.
5. Sitemaps, robots, llms.txt, IndexNow key, OG generation, redirects registry.
6. GSC (domain property), Bing Webmaster, GA4 with consent, booking link with UTM.
7. `/about` and `/work-with-me` live with Person/Organization schema and the positioning line.
8. Experience library ≥30 entries (`prompts/experience-capture.md`).
9. Lighthouse CI green on all templates; Playwright smoke suite.
10. `DECISIONS.md` started; first entry = date, stack choices, anything deviating from this spec.
