# pmyogesh.com — Organic growth plan: ~1,000 pages, 4 gated waves, 2 outcomes

Prepared 28 Sep 2026 · Owner: Yogesh · Executor: Claude Code (Opus 5.5) · Companion files: 01–04, CLAUDE.md, page-inventory.csv, seeds/, prompts/

## 0. The decision in one paragraph

Yes to ~1,000 pages. No to shipping them as one batch of templated text. pmyogesh.com has no measurable search footprint today (it does not surface for its own name), and the 2026 spam updates — March, June, August, and the one rolling since 24 Sep — demote exactly the pattern a naive 1,000-page launch produces: many templated/AI pages with little per-page differentiation, with site-wide (not page-level) consequences. Since May 2026 the same policy also decides whether a site is eligible to be cited in AI Overviews / AI Mode. So: 921 core pages across 15 archetypes that each do a distinct job, plus 96 conditional expansion pages, released in four gated waves over ~8 months, every page carrying page-specific data or analysis, passing automated gates and human review, noindex until it does. The site optimises for two outcomes only: (1) qualified consulting leads (calls booked), and (2) being the source that AI answers cite for app monetization, pricing, onboarding and retention questions — India-first, global.

## 1. 2026 search realities this plan is built around

| What is true in late Sep 2026 | Consequence for this plan |
|---|---|
| Two core updates (27 Mar–8 Apr; 21 May–2 Jun) and four spam updates (24 Mar; Jun; 18–21 Aug; 24 Sep, rolling ≤2 weeks). August case studies: programmatic/AI page sets with minimal differentiation lost visibility across 10K–1M+ queries; the damage was site-wide. | Per-page uniqueness thresholds, staged release, human review, noindex-by-default. Never launch a wave inside the first 7 days of a confirmed rollout. |
| May 2026: spam policies (scaled content abuse, inauthentic mentions) now govern eligibility for AI Overviews and AI Mode citations, not just blue links. | The same gates protect AI-citation eligibility. No "GEO tricks": no FAQ walls, no fabricated stats, no fake reviews. |
| I/O, 19 May 2026: AI Overviews and AI Mode merged into one flow; AI Mode ~1B monthly users; ads inside AI Overviews. 6 May: inline citations + hover source previews. | Every page opens with a direct answer (2–3 sentences with a number or a position) and is built from 150–400-word self-contained sections under question-shaped H2s. |
| Share of AI Overview citations coming from top-10 organic pages fell from ~76% (mid-2025) to ~38% (early 2026). | You can be cited without ranking #1. Depth, specificity, first-hand observation and clear entities matter as much as position. |
| Search Console has separate generative-AI performance reports (AI Overviews / AI Mode) since June 2026. | AI citations are a tracked KPI from Wave 1. |
| Publishers' Google referrals fell ~40% YoY (Chartbeat, Jul 2025 → Jul 2026). | Fewer clicks per impression is the baseline. Every page must either convert (CTA, tool, template) or earn links/citations. Traffic alone is not a goal. |
| First-hand experience and real-identity presence in communities (Reddit, LinkedIn, X) are being pulled into AI answers. | Author entity on every page; the distribution loop in 04 is part of the plan, not a nice-to-have. |

## 2. Positioning, audience, moat

Positioning line (use verbatim on service pages, About, LinkedIn): **Product growth and monetization consultant for consumer and subscription apps — India-first, global.**

Moat — why these pages can't be commoditised by content farms:
1. **Operator numbers, not theory.** CarInfo scale-up (3.8M → 45M+ MAU — confirmed 2026-09-28, sourced to the carinfo-45m-mau case study metrics; the earlier "~350K → 1.2M+ DAU" framing was wrong and is retired); motor-insurance line (~10 → 6,800+ policies/day, i.e. the 680× insurance revenue line in shared/proof.ts); Appy Pie Connect (~$60K MRR — [VERIFY: no source on the site, see AUDIT.md D2]); TripMojo (founder). These become first-person "From my work" blocks across playbooks, teardowns and decisions.
2. **India monetization depth** global sites don't have: UPI Autopay and e-mandate behaviour, Play/App Store billing in India, INR price points, hybrid ads+subscriptions for low-ARPU users, telecom bundling, festival seasonality.
3. **Opinions with numbers.** 64 apps × 4 lenses of teardowns, 24 category price maps, benchmarks with an India layer.

Audience tiers → pages that serve them:
- **Tier A — buyers.** Founders/CEOs, CPOs, Heads of Growth/Product at seed → Series C consumer, fintech, edtech, D2C, subscription and AI apps (India, SEA, MENA, US). Served by /services, /hire, /case-studies, /tools, /decisions, /india.
- **Tier B — amplifiers.** PMs, growth PMs, designers, VC platform teams. Served by /teardowns, /playbooks, /benchmarks, /templates, /glossary, /compare. They share, link and refer.
- **Tier C — AI engines** (Google AI Mode/Overviews, ChatGPT, Perplexity, Gemini, Claude). Served by every page via structure + entity + sourced facts; measured via GSC AI reports and a monthly 25-prompt citation check.

Query classes to own (examples): "app monetization consultant", "pricing strategy consultant india", "fractional cpo india", "[app] monetization teardown", "how does [app] make money", "[industry] app retention benchmarks", "ltv calculator", "upi autopay subscription", "freemium vs free trial", "[category] app pricing".

## 3. Architecture: hubs → archetypes → counts

| # | URL pattern | Archetype | Pages | Job | Funnel |
|---|---|---|---|---|---|
| 1 | /services/[service] | Service | 12 | Convert | BOFU |
| 2 | /services/[service]/[industry] | Service × industry | 110 | Convert on long-tail | BOFU |
| 3 | /hire/[role]-[city] | Local hire | 27 | Convert on local queries | BOFU |
| 4 | /case-studies/[slug] | Case study | 8 | Proof | BOFU |
| 5 | /teardowns/[app]/[lens] | Teardown (monetization · pricing · onboarding · retention) | 256 | Reach, links, citations | TOFU/MOFU |
| 6 | /benchmarks/[metric], /benchmarks/[metric]/[industry] | Benchmark | 104 | Citations, links | MOFU |
| 7 | /tools/[tool] | Interactive calculator | 30 | Links, leads | MOFU |
| 8 | /playbooks/[slug] | Long-form guide | 72 | Authority, citations | TOFU/MOFU |
| 9 | /glossary/[term] | Definition + formula + benchmark + tool | 100 | Citations, internal-link glue | TOFU |
| 10 | /compare/[a]-vs-[b] | Stack comparison | 60 | Buyer-adjacent reach | MOFU |
| 11 | /templates/[slug] | Downloadable template | 36 | Email leads, links | MOFU |
| 12 | /india/[slug] | India monetization reference | 28 | Differentiation, citations | MOFU |
| 13 | /pricing-examples/[category] | Category price map (INR/USD) | 24 | Citations, links, data study feed | MOFU |
| 14 | /decisions/[slug] | "X vs Y — which should you pick" | 40 | Citations, leads | MOFU/BOFU |
| 15 | /services, /teardowns, … /work-with-me | Hubs | 14 | Crawl paths, link equity | — |
|   | **Core total** | | **921** | | |
| 16 | /growth/[problem]/[app-type] | Problem → tactics (conditional) | 96 | Long-tail | MOFU |
|   | **With expansion** | | **1,017** | | |

Intent guards (no cannibalisation): glossary = *what + formula*; benchmarks = *numbers by industry*; playbooks = *how, in depth*; growth = *tactics for one problem in one app type*; teardowns = *one app, one lens*; services × industry = *the engagement offer for that industry*; decisions = *pick between two options*. 01-PAGE-ARCHETYPES.md states, per archetype, what a page must not contain.

## 4. Waves and gates

| Wave | Weeks | Pages | Contents | Gate to open the next wave |
|---|---|---|---|---|
| 0 | 1–2 | 14 hubs | Stack, content model, validators, schema, sitemaps, design system, author entity, GSC + GA4, experience library seeded | All validators green on 5 sample pages; CWV budgets pass in lab; experience library ≥30 entries |
| 1 | 2–6 | 115 | 12 services, 8 case studies, 17 playbooks, 8 tools, 16 teardowns (4 apps), 8 India, 8 benchmark hubs, 24 glossary, 14 hubs | ≥80% of Wave-1 URLs indexed within 28 days of submission; impressions up week over week; 0 manual actions; Yogesh reviewed 100% |
| 2 | 7–14 | 274 | 51 service×industry, 64 teardowns, 48 benchmarks, 12 tools, 23 playbooks, 40 glossary, 20 India, 16 templates | ≥75% indexed; AI Overview/AI Mode impressions visible in GSC; first organic-attributed lead; sample review pass rate ≥90% |
| 3 | 15–24 | 372 | 59 service×industry, 27 hire, 80 teardowns, 48 benchmarks, 10 tools, 20 playbooks, 36 glossary, 28 compare, 20 templates, 24 pricing-examples, 20 decisions | ≥75% indexed; no Wave-2 archetype below 50% indexation (fix before continuing) |
| 4 | 25–34 | 256 | 96 teardowns, 12 playbooks, 32 compare, 20 decisions, 96 growth — growth only if benchmarks and services×industry are ≥70% indexed and earning impressions | — |

Cadence: 15–40 pages/week. Publish Tue–Thu. From Wave 2, refresh 10% of the corpus every month (facts re-verified, `verified_on` bumped only when content changed). Check the Google Search Status Dashboard before every publish run.

## 5. KPIs (dashboard live from week 3)

Leading: indexed/submitted ratio by archetype · impressions by hub · AI Overviews + AI Mode impressions (GSC generative-AI report) · pages with ≥1 click · average position for 50 tracked queries (IN + US).
Lagging: calls booked (organic, by landing archetype) · template downloads → email list · tool sessions · referring domains (+5/month from Wave 2) · citations in AI Mode/ChatGPT/Perplexity/Gemini for 25 tracked prompts (monthly manual check).
12-month targets: 700+ indexed pages · 150K+ monthly impressions · 5–10 qualified organic leads/month · 25+ tracked prompts citing pmyogesh.com.

## 6. What we deliberately won't build

- City pages beyond the 27 listed; no state/country doorway sets.
- "Best [tool] for [industry]" affiliate listicles.
- PM-career content (interviews, résumés, "how to become a PM") — different audience, dilutes topical focus.
- Auto-translated Hindi variants (revisit at month 9 with real demand data from GSC).
- News/commentary inside programmatic hubs (a separate /notes blog is fine, not counted here).
- Any page whose research object has fewer than 6 page-specific, sourced facts.

## 7. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Low domain authority → slow indexation | Wave 1 is BOFU + link magnets; distribution loop from day 1 (04); hubs + breadcrumbs + contextual links; sitemap split by hub with real lastmod; GSC URL submission for Wave 1 |
| Teardown lenses overlap → near-duplicates | Similarity gate ≤0.55 between sibling lenses; merge lenses when an app lacks material for one |
| Benchmarks without proprietary data compete with their own sources | Synthesis of ≥3 sources + India layer + "what to do" + tool embed; one original data study per quarter from our own datasets (pricing-examples, teardowns) |
| Numbers in teardowns/pricing go stale | `verified_on` per fact; quarterly refresh job; visible "Last verified" pill |
| Yogesh's review becomes the bottleneck | 100% review only in Wave 1; then 20% sample with whole-batch rejection; review UI lists every claim with its source |
| Spam or core update mid-rollout | Steady cadence, never a dump; pause publishing during rollouts; archetype-level freeze + audit if impressions fall >40% |
| "Consultant site with 1,000 pages" looks odd to a buyer | Hubs are curated and designed like reference sections of a firm's site; service pages stay lean and link out; navigation exposes 5 hubs, not 15 |
