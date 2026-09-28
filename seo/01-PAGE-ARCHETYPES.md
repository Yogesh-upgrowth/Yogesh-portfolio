# 01 — Page archetype contracts

A contract is what the generator must produce and what `gates.ts` enforces. If a page cannot meet its contract from real research, it is not written (status `blocked`), merged into a sibling, or dropped from the inventory. Never padded.

Read with: `00-STRATEGY.md` (why), `02-QUALITY-GATES.md` (thresholds), `03-TECHNICAL-SPEC.md` (content model, components), `prompts/page-generation.md` (the prompt that consumes these contracts).

---

## A. Base contract — every page

| # | Rule | Enforced by |
|---|---|---|
| B1 | **Answer first.** The first paragraph (≤80 words) answers the H1 directly with a number, a verdict, or a position. No preamble, no "in this article". | G06 |
| B2 | **Question-shaped H2s.** Each H2 is a question or a claim a reader would search ("How much does Duolingo charge in India?" / "Annual plans convert 2–3× worse at first paywall in India"). Each section is self-contained, 120–400 words, and can be lifted into an AI answer without the rest of the page. | G07 |
| B3 | **≥6 page-specific sourced facts.** A fact is a number, date, price, policy or observed behaviour with `fact_id`, `source_url`, `source_title`, `verified_on`, `method` (`fetched` / `device_check` / `filing` / `interview` / `own_data`). "Page-specific" = used on ≤2 other pages. Every number in the prose maps to a fact or is labelled "my estimate (method: …)". | G01, G03 |
| B4 | **Sources block.** Rendered at the end: numbered list of facts with source, date verified, and one-line excerpt (≤25 words). Visible "Last verified <date>" pill under the H1. | G02, G11 |
| B5 | **First person from the library only.** "From my work" (60–150 words) and "What I'd do" (verdict + 3 steps) blocks draw exclusively from `content/experience.json` entries by `exp_id`. No invented client stories, no "in our experience" without an entry. Pages with no matching entry omit "From my work" and keep "What I'd do" (opinion, not experience). | G12 |
| B6 | **FAQ, 3–5 real questions**, taken from `research.paa`, DataForSEO "people also ask", or community threads — not restatements of the H2s. Answers ≤80 words. FAQ is omitted entirely if fewer than 3 real questions exist. | G07, G09 |
| B7 | **One primary CTA, at most one secondary.** BOFU: book a call (above the fold allowed). MOFU: tool / template / newsletter mid-page + call at the end. TOFU: no CTA before the second H2. CTA copy names the page context ("Get a pricing review for your fintech app" not "Contact us"). | G16 |
| B8 | **≥5 contextual internal links** in body copy (nav/footer excluded): ≥1 up to the hub, ≥2 lateral within the archetype or to a related archetype, ≥1 to a BOFU page (service, service×industry, tool). Anchor text is descriptive; no "click here"; links resolve to inventory URLs. | G08 |
| B9 | **Author entity.** Author box (name, role line, 2 proof points, links) and `Person` JSON-LD on every page; `BreadcrumbList` on every non-hub page. | G09 |
| B10 | **INR + USD** for every price, fee or revenue figure; conversion from `config/fx.json` (rate + date), rounded to natural price points; the page states the rate once in the Sources block. | G15 |
| B11 | **≥1 own visual** (SVG chart, comparison table, annotated diagram) with descriptive alt text. No stock photos. No hot-linked images. Screenshots of third-party apps: ≤3 per page, cropped, annotated with our commentary, ≤120 KB. | G14, G17 |
| B12 | **Uniqueness.** Sibling similarity ≤0.55, parent ≤0.45, any page ≤0.60 (MinHash, 5-gram shingles, shared components stripped). Boilerplate ≤35%. Title, meta, H1 unique across the corpus. | G04, G05, G10 |
| B13 | **Length is the archetype range**, never a target. A page 20% under range with all required blocks passes; a page padded to hit range fails review. | G07 |
| B14 | **Style.** Zero banned phrases (`config/banned-phrases.json`). Numbers over adjectives. Opinions stated as opinions ("I'd price this at ₹149"). Short sentences. No hype, no "unlock", no rhetorical questions in body copy. | G13 |
| B15 | **Freshness.** All facts `verified_on` ≤90 days at publish; price facts ≤45 days. Refresh cadence per archetype below. | G11 |
| B16 | **Intent guard.** A page does not contain more than 120 words of another archetype's job (e.g., a service page does not explain "what is churn"; it links to `/glossary/churn`). | G19 |
| B17 | **Legal.** Third-party names used nominatively; "Not affiliated with <company>. Prices and features verified on <date>." line on teardowns, compare, pricing-examples. No logos larger than 24 px. No copying of app copy beyond short quoted fragments (≤15 words). | G17 |

Shared components (see 03 §7): `AnswerBox`, `LastVerified`, `FactTable`, `SourcePill`, `FromMyWork`, `WhatIdDo`, `DecisionTable`, `PriceTable` (INR/USD toggle), `CalculatorShell`, `FAQ`, `CTABand`, `Breadcrumbs`, `RelatedGrid`, `AuthorBox`, `NotAffiliated`, `Sources`, `Changelog`.

Title patterns: keep `title_hint` from the inventory as the starting point; year token only when the data is time-bound (teardowns, benchmarks, pricing-examples, compare). Titles 35–65 chars, meta 110–155 chars, H1 may be longer and more specific than the title.

---

## B. Per-archetype contracts

Format for each: URL · job/intent · required blocks in order · must not · data inputs & preferred sources · length · schema · uniqueness · links · CTA · refresh.

### 1. `hub` (14) — `/services` `/hire` `/case-studies` `/teardowns` `/benchmarks` `/tools` `/playbooks` `/glossary` `/compare` `/templates` `/india` `/pricing-examples` `/decisions` `/work-with-me`

- **Job:** crawl path, link equity, orientation. Navigational intent.
- **Required:** editorial intro (80–150 words: what this section is for, how it's built, how often verified) → 3–6 hand-picked "start here" cards with one-line reasons → filterable index (by industry / metric / lens as relevant; server-rendered list, not JS-only) → "recently verified" strip → CTA band.
- **Must not:** auto-dumped lists with no curation; keyword-stuffed intros; more than one CTA.
- **Length:** 300–600 words + index.
- **Schema:** `CollectionPage` + `ItemList` (first 50 items) + `BreadcrumbList` (except `/`).
- **Links:** every hub links to its 2 nearest hubs and to `/work-with-me`.
- **Special:** `/work-with-me` is the conversion page: positioning line verbatim, 3 ways to engage (audit / sprint / fractional) with INR+USD ranges, process, who it's not for, 2 case-study cards, booking embed, FAQ. 700–1,000 words. Schema `Service` ×3 + `Person`.
- **Refresh:** "start here" picks reviewed monthly.

### 2. `service` (12) — `/services/[service]`

- **Job:** convert a buyer who already knows the problem. Transactional.
- **Required:** answer box (who it's for, what changes in 6–8 weeks, price range INR+USD, how to start) → "Who this is for / not for" (stage, MAU/ARR band, model) → "What happens in the first 6 weeks" (week-by-week table) → deliverables list (named artefacts) → method: 3 named frameworks with one-paragraph explanation each → proof: 2 case-study cards with numbers (permission-tagged) → pricing anchors (audit / sprint / retainer; INR + USD; what's included) → industry variants grid (links to the service×industry pages) → tools & templates strip → FAQ (buyer questions: duration, remote/in-person, NDA, equity, minimum stage, what you need from us) → CTA (book 30-min call) + secondary (download a relevant template).
- **Must not:** explain the concept (>120 words) — link to the playbook/glossary; list generic "benefits"; use testimonials that aren't real and permissioned.
- **Data:** service definition from `seeds/entities.json`; proof from case studies and experience library; 6 facts = market/benchmark numbers that justify the service (e.g., median trial-to-paid, share of revenue from annual plans) from RevenueCat State of Subscription Apps, Adjust/AppsFlyer, Amplitude/Mixpanel benchmark reports, Sensor Tower/AppMagic, Business of Apps (secondary), RedSeer/Bain/IAMAI for India.
- **Length:** 900–1,500.
- **Schema:** `Service` (provider → `Person`, `areaServed` IN + global, `offers` with price ranges as `PriceSpecification`) + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** ≤0.45 vs any other service page (structure is shared; content must differ in framework names, week plan, proof, facts).
- **Refresh:** quarterly; pricing anchors when changed.

### 3. `service-industry` (110) — `/services/[service]/[industry]`

- **Job:** convert on "[industry] app monetization/pricing/retention consultant" long-tail. Transactional.
- **Required:** answer box (the offer for this industry in 3 sentences with one industry number) → "What's different about [industry]" — ≥6 industry-specific facts: ARPU band, retention/churn norms, dominant monetization models, regulatory constraints (fintech: RBI e-mandate/recurring-payment rules, DPDP; healthtech: telemedicine guidelines; edtech: seasonality, refund norms; gaming: RMG tax/regulation; OTT: TRAI/pricing tiers), platform fee specifics → 3 named apps in the industry (from `industries[].example_apps`) with one line each on what they do well/badly (linking to teardowns where they exist) → "How the engagement changes for [industry]" (3–5 concrete adjustments to the parent service's 6-week plan) → benchmark card (embeds numbers from `/benchmarks/[metric]/[industry]` for the metric most tied to this service) → pricing anchors (inherited; state "same as parent" once) → FAQ (industry-specific: compliance, integrations, data) → CTA.
- **Must not:** repeat the parent service description beyond 120 words (link up); reuse the same 3 example apps across two services for the same industry without different observations; generic industry overview ("the fintech market is growing").
- **Data:** industry reports (RedSeer, Bain–Google e-Conomy, IAMAI–Kantar, Tracxn/Inc42 funding data), regulator pages (RBI, SEBI, IRDAI, TRAI, MeitY), platform policy pages (Google Play India billing, Apple), company filings/press for example apps, benchmark sources as above.
- **Length:** 800–1,300.
- **Schema:** `Service` (`about` → industry `Thing`), `FAQPage`, `BreadcrumbList`.
- **Uniqueness:** ≤0.45 vs parent service; ≤0.50 vs sibling industries of the same service; ≤0.50 vs the same industry under another service.
- **Links:** parent service, `/benchmarks/[metric]/[industry]`, ≥1 teardown of an example app, the relevant `/india/*` page if the industry has one, `/work-with-me`.
- **Refresh:** semi-annual; sooner if a regulation changes.

### 4. `hire-city` (27) — `/hire/[role]-[city]`

- **Job:** convert "product consultant bangalore" / "fractional cpo mumbai" style queries. Transactional, IN (+ Dubai, Singapore).
- **Required:** answer box (remote-first from Jaipur, in-person cadence available in [city], response time, typical engagement, price range) → "How working together looks from [city]" (cadence table: weekly onsite/remote, timezone, invoicing/GST or international invoicing, contracts) → "[city] product and startup scene" — ≥5 city-specific facts (funded startups count, notable consumer apps HQ'd there, dominant sectors, typical stage) with 2 named local apps and one observation each → which services fit which stage → 2 case-study cards → FAQ (Do you come onsite? Do you work with [city] seed startups? Do you invoice in INR/AED/SGD?) → CTA.
- **Must not:** claim an office or address in the city; "we are located in"; identical body with the city name swapped; more than 2 paragraphs about the city itself.
- **Data:** Tracxn / Inc42 / Crunchbase / NASSCOM / state startup mission pages / Dubai Chamber / EDB Singapore; company pages for named apps.
- **Length:** 600–900.
- **Schema:** `Service` with `areaServed` → `City`, provider `Person`. No `LocalBusiness` (no premises there).
- **Uniqueness:** ≤0.55 vs same role in another city; ≤0.50 vs another role in the same city. If a city cannot yield 5 facts and 2 named apps, **fallback**: drop the page, redirect to `/hire/[role]` (create as a single page with city sections) and note it in `DECISIONS.md`.
- **Refresh:** annual.

### 5. `case-study` (8) — `/case-studies/[slug]`

- **Job:** proof. Commercial.
- **Required:** answer box (company, stage, my role, dates, the headline number) → context (what the product was, team size, constraints) → the problem with baseline numbers → what we changed: 3–6 interventions, each with the reasoning and the hypothesis → results (numbers, timeframe, attribution honesty: what else was happening) → what didn't work → what I'd do differently → "If you're at a similar stage" applicability → related services and tools → CTA.
- **Must not:** any number without a `permission` tag (`public` / `client_approved` / `anonymised` / `founder_own`); numbers not in the experience library; "we 10×'d" without timeframe; inventing methodology detail Yogesh didn't confirm.
- **Data:** the experience library only (plus public sources for company context). Inventory notes flag which need verification and which are placeholders; placeholders are not built until Yogesh supplies numbers and permission.
- **Length:** 1,000–1,800.
- **Schema:** `Article` (`author` → `Person`, `about` → `Organization`), `BreadcrumbList`.
- **Uniqueness:** naturally distinct; still gated.
- **Refresh:** on request.

### 6. `teardown` (256) — `/teardowns/[app]/[lens]` · lenses: `monetization` `pricing` `onboarding` `retention`

- **Job:** reach, links, AI citations for "[app] monetization", "how does [app] make money", "[app] pricing india", "[app] onboarding flow". Informational.
- **Common blocks (all lenses):** answer box (the verdict on this lens in ≤80 words with one number) → 60–80-word "what [app] is" (only this much) → lens body (below) → "What I'd steal for your app" (3 tactics, each with the condition under which it works) → "Where it's fragile" (2–3 risks with evidence) → India vs US/global differences (prices, payment methods, plan mix, features — where applicable) → FAQ → Sources → `NotAffiliated` line → related: the other lenses of this app, 2 teardowns of same-industry apps, the benchmark page for the lens metric, the matching service×industry page.
- **Lens bodies:**
  - **monetization:** revenue streams table (stream, mechanics, share of revenue if known, evidence) → how the model changed over time (dated timeline, ≥3 dated events) → key numbers (revenue, paying users, ARPU, take rate — from filings/investor decks/press/Sensor Tower/AppMagic, each dated) → where monetization surfaces appear (own annotated flow diagram: entry points → paywall/ads/checkout) → platform economics (store fees, India billing route, UPI/cards mix if known).
  - **pricing:** `PriceTable` — every tier × billing period × region (IN, US; plus one more if relevant), trial length, intro offers, family/student plans, `verified_on` and device/region of check → price history (dated changes; ≥2 if they exist) → packaging logic (what's gated where, annual discount %, decoy/anchor analysis) → localisation (PPP ratio IN/US, rounding conventions, tax display) → discounts and promo patterns observed → "What I'd test" (3 experiments with expected direction).
  - **onboarding:** step table (step #, screen purpose, ask/permission, drop-off risk) from our own device run (date, device, region, account state) → time-to-value estimate with method → personalisation questions and how they're used → permission asks and timing → paywall placement in the flow (first-run vs later) → activation event guess with reasoning → "What I'd change" (3 changes, each with the hypothesis).
  - **retention:** loop map (habit / notification / streak / social / content — own diagram) → engagement mechanics with evidence (feature, trigger, reward) → re-engagement channels (push cadence observed over 14 days on a test account, email, WhatsApp/RCS in India) → churn mitigation (cancel flow steps, pause, win-back offers, dunning for involuntary churn) → retention numbers if public (filings, interviews) else labelled category benchmarks → "What I'd copy".
- **Lens-merge rule:** if research yields <6 lens-specific facts for a lens, do not build it. Merge its strongest material as one H2 inside the `monetization` page (or the strongest built lens), set the inventory row `notes=merged:<lens>`, and register a redirect from the unbuilt URL to the parent lens. A given `fact_id` may appear on at most 2 lens pages of the same app.
- **Must not:** restate the app description beyond 80 words; repeat the same "what I'd steal" across lenses; unverified revenue claims ("reportedly makes $X" without a dated source); screenshot dumps; more than 3 annotated screenshots; any claim about internal metrics that isn't sourced or clearly labelled as inference.
- **Data:** company filings and investor materials (10-K/annual reports, DRHPs, MCA filings for Indian companies via Tofler/Zauba/Entrackr reporting), founder interviews and podcasts (dated), app store listings and in-app price checks on a real device per region (record `device_check` with date, OS, region, account state), Sensor Tower / AppMagic / data.ai public posts, press (ET, Mint, Inc42, Entrackr, TechCrunch, The Information), community reports on Reddit/X (labelled `user_reported`).
- **Length:** 1,200–2,000.
- **Schema:** `Article` (`about` → `SoftwareApplication` with `name`, `operatingSystem`, `applicationCategory`), `FAQPage`, `BreadcrumbList`, `ImageObject` for our diagrams.
- **Uniqueness:** ≤0.55 across the 4 lenses of the same app; ≤0.50 vs the same lens of another app in the same industry.
- **Refresh:** pricing lens every 45 days (automated price re-check); other lenses quarterly; on any major pricing/model change → refresh within 14 days and add a `Changelog` entry.

### 7. `benchmark-hub` (8) — `/benchmarks/[metric]`

- **Job:** the reference page for "[metric] benchmarks by industry". Informational, citation magnet.
- **Required:** answer box (the overall median and top-quartile range with year and source count) → definition in ≤60 words linking to the glossary term → **benchmark table by industry** (12 rows: industry, median, top quartile, source(s), year; blank cells shown as "no reliable public data" rather than invented) → India layer (India-specific numbers where they exist; where they don't, say so and give the mechanism that shifts them: ARPU, payment success, device mix) → how to measure it correctly (definition traps, cohort vs snapshot, windows) → what moves it (5 levers with expected magnitude ranges from sources) → stage adjustment (pre-PMF / growth / scale) → tool embed (the matching calculator) → FAQ → Sources.
- **Must not:** present averages of other people's data as "our data"; copy a source's table wholesale; invent an India number.
- **Data (≥3 sources per metric):** RevenueCat State of Subscription Apps; Adjust and AppsFlyer benchmark reports; Amplitude / Mixpanel benchmark reports; Sensor Tower; ChartMogul / Paddle / OpenView (SaaS metrics); Business of Apps (secondary — cite the original where possible); RedSeer / Bain / IAMAI for India; company filings for named-company anchors.
- **Length:** 1,200–1,800.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`; add `Dataset` only when the table is downloadable as CSV with a stated licence and method.
- **Uniqueness:** ≤0.50 vs other benchmark hubs.
- **Refresh:** when a cited report publishes a new edition (tracked in `data/sources/reports.json`); at least semi-annual.

### 8. `benchmark` (96) — `/benchmarks/[metric]/[industry]`

- **Job:** "[industry] app retention benchmarks". Informational.
- **Required:** answer box (this industry's median/range with year) → the numbers (≥3 sources, table with source and year; sub-segments where known, e.g., fintech: payments vs lending vs investing) → why this industry differs (mechanism, 3 reasons with evidence) → India layer (numbers or an explicit "no public India figure; expect X because Y" labelled inference) → what good looks like at three stages → "If you're below median" — What I'd do (3 steps) → related: service×industry page, the playbook for this metric, 2 teardowns in this industry → tool embed → FAQ (2–4) → Sources.
- **Must not:** repeat the hub's definition and measurement sections (link up, ≤80 words); pad with generic industry description.
- **Length:** 800–1,300.
- **Schema:** as hub minus `Dataset`.
- **Uniqueness:** ≤0.45 vs the hub; ≤0.50 vs sibling industries; ≤0.50 vs the same industry under another metric.
- **Refresh:** semi-annual.

### 9. `tool` (30) — `/tools/[tool]`

- **Job:** links, leads, tool sessions. Transactional ("ltv calculator").
- **Required:** answer box (what the tool computes, in one sentence, plus the formula in words) → the calculator (server-rendered shell with sensible defaults in INR and USD, results update on input, shareable URL with state in the query string, copy/export result) → formula shown explicitly with variables → worked example with real-looking numbers (INR and USD) → how to read the result: interpretation bands tied to `/benchmarks/*` → "What to do if your number is …" (3 branches) → methodology and assumptions (what's excluded) → related tools (2) and the relevant playbook → CTA (email me the result — optional; book a call for BOFU-adjacent tools) → FAQ.
- **Must not:** gate the calculator behind email; require JS for the explanatory content; use external calculation libraries; produce results without units and currency.
- **Data:** formulas in `lib/formulas/*.ts` with unit tests; benchmark bands from the benchmark pages (imported, not retyped).
- **Length:** 700–1,100 prose + tool.
- **Schema:** `WebApplication` (`applicationCategory: BusinessApplication`, `offers` price 0, `operatingSystem: Web`) + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** ≤0.50 vs other tools.
- **Refresh:** benchmark bands with the benchmark pages; formulas versioned.

### 10. `playbook` (72) — `/playbooks/[slug]`

- **Job:** authority, AI citations for "how to" questions. Informational.
- **Required:** answer box (the approach in ≤80 words) → "In short" 5-bullet summary → who this is for / not for → the method: numbered steps with decision points (each step: what to do, how to measure, what number to expect, common failure) → numbers and examples (benchmark links; ≥3 teardown links as worked examples) → embedded template or tool → "From my work" → pitfalls (≥4, specific) → checklist (10–15 items, copyable) → FAQ → Sources.
- **Must not:** open with history/definitions; exceed 3,000 words; overlap >40% with any other playbook (topical distinctness comes from the inventory; the gate checks it).
- **Data:** benchmark sources; platform documentation (Play Billing, StoreKit, RevenueCat docs); named examples from teardowns; experience library.
- **Length:** 1,800–3,000.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList` (no `HowTo` — no rich result since 2023; structure the steps in HTML instead).
- **Uniqueness:** ≤0.40 vs any other playbook; ≤0.45 vs the related growth or decision page.
- **Refresh:** annual, or when a platform policy it relies on changes.

### 11. `glossary` (100) — `/glossary/[term]`

- **Job:** citation and internal-link glue. Informational ("what is arpu").
- **Required:** definition (40–60 words, answer-first) → formula with variables (and variants, e.g., ARPU vs ARPPU) → worked example (INR and USD) → benchmark snippet (one line pulled from `/benchmarks/[metric]` where the term maps to a metric; else omit) → why it matters / how it's misused (2 concrete misuse patterns) → related terms (≥3 links) → tool link if one exists → FAQ (2–3, only real ones).
- **Must not:** exceed 700 words; become a how-to (link to the playbook); duplicate the benchmark page's tables.
- **Data:** standard definitions (platform docs, RevenueCat/ChartMogul/Amplitude docs), one benchmark source.
- **Length:** 350–700.
- **Schema:** `DefinedTerm` (`inDefinedTermSet` → the glossary `DefinedTermSet` at `/glossary`) + `BreadcrumbList`; `FAQPage` only when a real FAQ exists.
- **Uniqueness:** ≤0.55 vs any other glossary page (structure is identical, so definitions, examples and misuse patterns must be specific).
- **Refresh:** annual.

### 12. `compare` (60) — `/compare/[a]-vs-[b]`

- **Job:** buyer-adjacent reach ("revenuecat vs adapty"). Commercial.
- **Required:** answer box: verdict with conditions ("Pick A if …; pick B if …") → comparison table (pricing tiers INR+USD with `verified_on`, free tier limits, platforms/SDKs, key features by job, India support: INR billing, GST invoices, UPI/Autopay support, data residency, local payment gateways; support/SLAs) → where each wins (3 each, with evidence) → migration notes (what breaks, data export, time) → what I've used (only from the experience library; otherwise "I evaluated X for a [context] in [year]" or nothing) → alternatives (2, linked if we have pages) → FAQ → Sources → `NotAffiliated`.
- **Must not:** affiliate links; invented hands-on claims; star ratings; "both are great" verdicts.
- **Data:** vendor pricing pages and docs (fetched and dated), changelogs, status pages, G2/Capterra (labelled `user_reported`), community threads.
- **Length:** 1,000–1,600.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`. No `Review` / `AggregateRating`.
- **Uniqueness:** ≤0.50 vs another compare page sharing one product.
- **Refresh:** pricing every 45 days (automated fetch + diff); rest semi-annual.

### 13. `template` (36) — `/templates/[slug]`

- **Job:** email leads, links. Transactional ("pricing experiment template").
- **Required:** answer box (what the template is for and when to use it) → the template itself rendered on the page (headings/fields/table — fully visible and indexable) → how to fill each field (one line per field) → a filled example with real-looking numbers (INR+USD) → common mistakes (3) → related playbook and tool → download block: Google Sheets / Notion / DOCX; **email-gated only where `gated: true`** in `seeds/curated.json` (12 of 36); ungated ones link directly → FAQ (2–3).
- **Must not:** hide the template body behind the gate; more than one gate on the page.
- **Length:** 600–1,000.
- **Schema:** `Article` + `DigitalDocument` (name, fileFormat, `isAccessibleForFree`) + `BreadcrumbList`.
- **Uniqueness:** ≤0.50 vs other templates.
- **Refresh:** annual.

### 14. `india` (28) — `/india/[slug]`

- **Job:** differentiation and citations for India monetization mechanics. Informational/MOFU.
- **Required:** answer box (the mechanism and the number that matters) → how it works (mandate limits, flows, rules with dates and circular references) → the numbers (adoption, limits, success rates, price points — ≥6 facts from NPCI, RBI, Google Play/Apple India policy pages, company blogs, IAMAI/RedSeer, ET/Mint) → what it does to conversion and churn (data where it exists; otherwise a labelled observation from the experience library) → implementation checklist (Play Billing / StoreKit / Razorpay / Cashfree / Juspay / PhonePe — as relevant) → price points and rounding conventions → pitfalls (≥3) → "From my work" → related: the matching benchmark India layer, service×industry, 2 teardowns of Indian apps → FAQ → Sources.
- **Must not:** generic "India is a mobile-first market" paragraphs; stale regulation (each rule carries its date and source).
- **Length:** 1,000–1,800.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** ≤0.50 vs other India pages.
- **Refresh:** quarterly (regulation and platform policy move).

### 15. `pricing-examples` (24) — `/pricing-examples/[category]`

- **Job:** citations, links, the feed for the quarterly data study. Informational ("meditation app pricing").
- **Required:** answer box (median monthly and annual price in INR and USD for the category, sample size, verification month) → **price map table**: ≥8 apps (≥3 India-headquartered or India-priced where they exist), tiers, monthly/annual, trial, intro offer, platform, region, `verified_on` → distribution stats (median, range, annual discount median, share with free tier) → packaging patterns (3–5 observed) → India vs US ratio and what explains it → "What I'd price a new entrant at" by stage (with reasoning) → method note (how collected: device, region, date; what's excluded) → CSV download (`data/pricing/<category>.csv`, CC BY 4.0) → FAQ → Sources → `NotAffiliated`.
- **Must not:** fewer than 8 apps (build later if under); prices without a device/region/date; mixing list prices with promo prices without labelling.
- **Data:** own device checks recorded via the price-check CLI into `data/pricing/<category>.json`; app store listings; vendor pages.
- **Length:** 900–1,400 + table.
- **Schema:** `Article` + `Dataset` (`distribution` → the CSV, `license`, `temporalCoverage`, `variableMeasured`) + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** naturally distinct; gated anyway.
- **Refresh:** 45-day automated re-check; quarterly narrative refresh feeding the data study (04 §3).

### 16. `decision` (40) — `/decisions/[slug]`

- **Job:** citations and leads for "X vs Y — which should I pick". Informational → BOFU.
- **Required:** answer box: the verdict with conditions ("Free trial if …; freemium if …") → decision table (criteria × options with the direction and magnitude) → the numbers behind it (≥6 facts from benchmarks/sources) → 3 real examples (linked teardowns; what they chose and what happened) → when to switch (signals and thresholds) → "From my work" → "What I'd do at your stage" (3 branches) → FAQ → Sources.
- **Must not:** end on "it depends"; equal-weight both options; repeat the playbook's method (link to it).
- **Length:** 1,000–1,600.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** ≤0.45 vs the related playbook; ≤0.50 vs other decisions.
- **Refresh:** annual.

### 17. `growth` (96, conditional, Wave 4) — `/growth/[problem]/[app-type]`

- **Job:** long-tail "improve day 7 retention meditation app". Only built if Wave-3 gates pass (00 §4).
- **Required:** answer box (what "good" is for this app type and the 2 tactics with the highest expected impact) → the problem defined with the metric and its benchmark for this app type (link the benchmark page) → tactics, 5–8, ranked: expected impact range, effort, prerequisite, an example app (teardown link) → measurement plan (metric, window, minimum sample) → sequencing (what first, what after) → "From my work" → FAQ → Sources.
- **Must not:** exceed 0.45 similarity with the related playbook or benchmark page; reuse the tactic list across app types without app-type-specific evidence (≥4 of the facts must be app-type specific).
- **Length:** 900–1,400.
- **Schema:** `Article` + `FAQPage` + `BreadcrumbList`.
- **Uniqueness:** ≤0.50 vs same problem in another app type; ≤0.50 vs another problem in the same app type.
- **Refresh:** annual.

---

## C. Cross-archetype rules

1. **One job per URL.** If two inventory rows would answer the same query, keep the BOFU one and merge the other (record in `DECISIONS.md`, add a redirect).
2. **Fact reuse cap.** A `fact_id` may appear on ≤3 pages site-wide (≤2 within one app's teardowns). Cross-cutting numbers (e.g., Play Store fee) live in `data/facts/shared.json` and are rendered via a component, not prose, so they don't count toward the 6 page-specific facts.
3. **Experience reuse cap.** An `exp_id` appears on ≤8 pages; a page uses ≤2 entries.
4. **Every MOFU/TOFU page links to at least one BOFU page and one tool or template.** Every BOFU page links to at least one proof page (case study) and one reference page (benchmark/teardown).
5. **Hubs are curated by hand** (picks live in `content/hubs/<hub>.json`), never auto-sorted by date only.
6. **Year tokens** appear in titles only for time-bound archetypes and are updated by the refresh job when content changes, never by find-and-replace.
7. **India layer everywhere prices or payments appear.** If there is nothing India-specific to say, say nothing rather than inventing.
