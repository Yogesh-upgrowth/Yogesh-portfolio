# 02 — Quality gates

Principle: **fail closed.** A page moves forward only when a gate says yes. Nothing is published because a deadline arrived. The gates exist because the 2026 spam updates hit sites for the *pattern* of thin templated pages, site-wide — one bad batch can cost the whole domain.

## 1. Page lifecycle

```
inventory → researched → drafted → gated → reviewed → published (noindex) → indexable → monitored → refreshed | merged | retired
```

Each page carries `status`, `wave`, `batch_id`, `indexable`, `verified_on`, `refreshed_on` in its meta (03 §3). Transitions are made only by scripts (`research.ts`, `draft.ts`, `gates.ts`, the review UI, `publish.ts`, `refresh.ts`), never by hand-editing.

## 2. Page-level automated gates (`gates.ts`)

All gates run on every page, every time it changes. A page passes only if every gate is `pass`. Reports go to `reports/<batch_id>.md` with per-page results and the similarity heatmap.

| ID | Gate | Threshold | Implementation notes | On fail |
|---|---|---|---|---|
| G01 | Research completeness | ≥6 page-specific facts; each has `fact_id`, `source_url`, `source_title`, `excerpt` (≤25 words), `verified_on`, `method` | Page-specific = `fact_id` used on ≤2 other pages (`data/facts/index.json`). Shared facts in `data/facts/shared.json` don't count. | `blocked` — never drafted |
| G02 | Source quality | Every `source_url` returns 200 (or has an archived snapshot URL recorded); ≥50% of facts from primary sources; 0 sources on `config/blocked-domains.json` | Primary = `config/sources-allowlist.json` domains + filings + regulator + vendor's own site + `device_check`/`own_data`. Aggregators (Business of Apps, Statista summaries) count as secondary. | `blocked` |
| G03 | Number provenance | Every numeric token in body prose (currency, %, counts, dates that are claims) resolves to a `fact_id` in `facts_used` or sits inside a sentence containing "my estimate" + a method phrase | Regex over rendered prose; exclude formulas, worked examples flagged as illustrative (`<Example illustrative>`), and years in titles | `fail` |
| G04 | Similarity | Sibling ≤0.55 · parent ≤0.45 · any page ≤0.60 (MinHash Jaccard on 5-gram word shingles, 128 perms, after stripping shared components, nav, footer, FAQ scaffolding); embedding cosine ≤0.90 vs any page | Reference implementation: `scripts/similarity_check.py`. Sibling/parent defined per archetype in 01. Index in `data/similarity/`. | `fail` + heatmap |
| G05 | Boilerplate ratio | ≤35% | Share of normalised sentences that appear verbatim in ≥3 other pages of the same archetype, excluding components. | `fail` |
| G06 | Answer-first | First paragraph ≤80 words AND contains ≥1 number or verdict token (`pick`, `use`, `avoid`, `yes`, `no`, `should`, `₹`, `$`, `%`) AND no banned opener ("In today's", "When it comes to", "Have you ever", "Welcome") | Heuristic + LLM check (prompts/review-judge.md, Q1) | `fail` |
| G07 | Structure | Word count within archetype range (±20% tolerance under, 0% over); every H2 section 120–400 words (hub, glossary: 60–250); no section >450 words without an H3; H2 count 4–10; FAQ 3–5 or absent | Markdown AST | `fail` |
| G08 | Link graph | ≥5 contextual internal links; ≥1 hub; ≥1 BOFU; all targets exist in the inventory with status ≥ `published`; ≥3 planned inbound links (from `data/link-plan.json`) before `indexable` | `link-plan.ts` computes candidates by shared entities/industry/metric; hub pages are auto-inbound | `fail`; `indexable` blocked until inbound ≥3 |
| G09 | Structured data | JSON-LD parses; types match 01; `Person` + `BreadcrumbList` present (hubs: `CollectionPage`); `FAQPage` only when FAQ exists; no `Review`/`AggregateRating`; `dateModified` = `refreshed_on` | `schema-dts` typing + Google Rich Results test on 5 samples per archetype (manual, Wave 0) | `fail` |
| G10 | Title / meta / H1 | Title 35–65 chars, unique; meta 110–155, unique; H1 unique; primary keyword in title, H1 and first 100 words; keyword density ≤2.5%; no year token on non-time-bound archetypes | Corpus index | `fail` |
| G11 | Freshness | All `verified_on` ≤90 days at publish; price facts ≤45 days; `refreshed_on` ≥ latest `verified_on` | | `fail`; refresh job |
| G12 | Claims policy | First-person claims (`I`, `my client`, `we shipped`, `in my work`) only inside `FromMyWork` blocks referencing a valid `exp_id`; no superlatives (`best`, `#1`, `leading`) without a fact; no quotes attributed to named people unless `fact.method ∈ {interview, filing, fetched}` with the exact source; no statements about a company's internal metrics without a fact or an explicit "inference" label | Regex + LLM check (review-judge Q2) | `fail` |
| G13 | Style | 0 phrases from `config/banned-phrases.json`; Flesch–Kincaid grade ≤11 (TOFU/glossary) or ≤13 (others); passive voice ≤15% of sentences; average sentence length ≤22 words; no rhetorical questions in body (question marks allowed only in H2s and FAQ) | `textstat` or equivalent | `fail` |
| G14 | Visuals | ≥1 own visual with alt text ≥8 words; 0 external image URLs; screenshots ≤3, each ≤120 KB, each with an annotation caption | | `fail` |
| G15 | Currency | Every price/revenue figure has INR and USD; fx from `config/fx.json`; the Sources block states the rate and date once | Regex `₹|INR|\$|USD` adjacency | `fail` |
| G16 | CTA | Exactly 1 primary CTA; ≤1 secondary; TOFU pages: no CTA before the 2nd H2; CTA copy contains the page's entity or archetype context | | `fail` |
| G17 | Legal | Teardown/compare/pricing-examples: `NotAffiliated` present; third-party copy quoted ≤15 words per quote; logos ≤24 px; no full app-store description copied | | `fail` |
| G18 | Performance & a11y | Per template (Wave 0) and per tool page: lab LCP ≤2.0 s, INP ≤200 ms, CLS ≤0.1 (Lighthouse CI, mobile, slow 4G); JS ≤120 KB gz; axe: 0 critical/serious | CI on each template change; tools on every change | `fail` |
| G19 | Intent guard | ≤120 words of another archetype's job (definition on a service page; how-to on a glossary page; tactics list on a benchmark page) | LLM judge (review-judge Q3) with archetype "must not" list from 01 | `fail` |
| G20 | Unique value | LLM judge answers: (a) "What can a competent PM learn here that the top 3 organic results for the primary keyword do not say?" → ≥3 concrete items; (b) "Answer the H1 in ≤60 words using only this page" → a correct, specific answer; (c) unique-value score ≥4/5 | Judge sees the page + the top-3 SERP snippets/pages from DataForSEO (IN + US). Model: `claude-sonnet-5` for cost; escalate borderline (3/5) to `claude-opus-5-5`. | `fail` → rewrite with judge notes |

Gates G01–G03 run before drafting (on the research object); G04–G20 run on the draft. A draft that fails G04/G05 is regenerated once with the similarity report injected into the prompt; a second failure blocks the page and flags the archetype for a contract fix (the problem is usually the contract, not the page).

## 3. Batch gates

- A **batch** = ≤25 pages, one archetype, one wave, one `batch_id` (`w1-teardown-01`).
- The batch report lists per page: gate results, facts count and sources, similarity max (sibling/parent/any), unique-value statement, and the three judge answers. Plus a batch similarity heatmap.
- **Review protocol:**
  - Wave 1: Yogesh reviews 100% of pages.
  - Waves 2–4: random 20% sample (minimum 5 pages), selected by the script, not the author.
  - Per page, the review UI asks five questions (target ≤3 minutes/page): (1) Would I put my name on this? (2) Is every number defensible? (3) Is the "From my work" block true as written? (4) Is the verdict mine? (5) Would a buyer or a PM share this? Any "no" = reject with a reason code (`voice`, `fact`, `experience`, `verdict`, `thin`, `duplicate`, `design`).
  - If >10% of the sample is rejected (or any `fact`/`experience` rejection), the **whole batch** goes back to rework — including the unreviewed 80% — and the next batch of that archetype is not started until the reworked batch passes.
- Rejections with the same reason code on two consecutive batches of an archetype → stop, fix the contract or the prompt, log it in `DECISIONS.md`.
- Batch cadence: 15–40 pages/week published; publish Tue–Thu; no publishing in the first 7 days of a confirmed Google update rollout (check the Search Status Dashboard before every `publish.ts` run — the script prompts for a manual confirmation).

## 4. Wave gates (from 00 §4, with measurement)

| Wave → next | Gate | How measured |
|---|---|---|
| 0 → 1 | All validators green on 5 sample pages per Wave-1 archetype; CWV budgets pass in lab for every template; experience library ≥30 entries; GSC + GA4 + IndexNow live | `gates.ts --sample`, Lighthouse CI, `content/experience.json` count |
| 1 → 2 | ≥80% of Wave-1 URLs indexed within 28 days of sitemap submission; impressions up week over week for 3 consecutive weeks; 0 manual actions; 100% reviewed | GSC API (`urlInspection.index.inspect` for W1 URLs, quota-aware) + Performance report; Manual Actions report |
| 2 → 3 | ≥75% indexed; AI Overview/AI Mode impressions visible in GSC generative-AI report; ≥1 organic-attributed lead; sample review pass ≥90% | GSC + GA4 `calendly_open`/`lead_submitted` with landing archetype |
| 3 → 4 | ≥75% indexed; no Wave-2 archetype <50% indexed; `growth` only if benchmarks and services×industry ≥70% indexed and earning impressions | GSC coverage export by hub sitemap |

An archetype that misses its indexation floor at day 28 gets a 10-page sample audit (compare against ranking pages; fix contract) before any more pages of that archetype are produced.

## 5. Experience library (`content/experience.json`)

The only permitted source of first-person claims.

```json
{
  "id": "exp-014",
  "tags": ["paywall", "trial", "india", "fintech"],
  "context": "Motor-insurance line inside CarInfo, 2021–22",
  "claim": "Moving the quote step before signup lifted quote completion; signup after quote converted better than signup first.",
  "numbers": [{"metric": "policies/day", "from": "~10", "to": "6,800+", "window": "18 months"}],
  "permission": "public",
  "can_name_company": true,
  "timeframe": "2021-2022",
  "quote": "We stopped asking for a login before the price. That single change did more than the next ten experiments combined.",
  "source_session": "2026-10-02"
}
```

Rules: `permission ∈ {public, client_approved, anonymised, founder_own}`; `anonymised` entries never name the company or a metric precise enough to identify it; numbers are copied verbatim from the entry, never rounded or re-expressed by the generator; an entry appears on ≤8 pages; a page uses ≤2 entries; entries are added only through the capture session (`prompts/experience-capture.md`) or by Yogesh directly. Target: ≥30 entries before Wave 1, 80 by Wave 3. `gates.ts` fails any page whose `FromMyWork` text is not a faithful rendering of its `exp_id` (LLM check with the entry as ground truth).

## 6. Noindex-by-default

- New pages render with `<meta name="robots" content="noindex,follow">`, are excluded from sitemaps and from `llms.txt`, and are linked only from other noindex pages until `indexable: true`.
- `indexable` flips per **batch** after: all gates pass, review passed, inbound links ≥3 (G08), and the Search Status Dashboard shows no active core/spam rollout in its first 7 days.
- On flip: robots meta removed, page added to the hub sitemap with `lastmod`, IndexNow ping, GSC URL submission for Wave 1 only (quota), distribution kit generated (04 §2).
- Checkpoints at day 7 / 14 / 28: indexed status, impressions, first queries. Pages with `Crawled – currently not indexed` at day 28 → improvement pass (more specific facts, stronger inbound links) or merge.

## 7. Monitoring and rollback (`monitor.ts`, weekly)

Per archetype and per hub: indexed %, impressions, clicks, average position for tracked queries, AI Overviews/AI Mode impressions, pages with ≥1 click, leads by landing archetype.

| Trigger | Action |
|---|---|
| Manual action in GSC | Stop all publishing. Set every page of the affected pattern to `noindex`. Audit. Reconsideration only after fixes. |
| Archetype impressions −40% over 14 days (vs prior 14, not explained by seasonality or a known update) | Freeze the archetype: no new pages, no `indexable` flips. Sample audit of 10 pages vs current SERP leaders. Fix contract → rework → resubmit. |
| Site-wide impressions −25% over 14 days coinciding with a confirmed update | Freeze all publishing until the rollout ends + 7 days; audit the two youngest batches first. |
| Indexation <50% for an archetype at day 28 | No more pages of that archetype until a 10-page sample is improved and re-inspected. |
| Page with 0 impressions at day 90 and no inbound external links | Improve (new facts, stronger answer) or merge into the nearest page with a 301; retire only with a 410 and a `DECISIONS.md` entry. Never leave zombie pages. |
| Cited source goes 404 | Replace with an archived snapshot or a new source within the next refresh; if neither exists, remove the claim. |

## 8. Refresh policy (`refresh.ts`)

- Monthly: 10% of the indexable corpus (oldest `verified_on` first).
- Price facts: automated re-fetch every 45 days; diff → if changed, update the fact, the table, and add a `Changelog` entry; `refreshed_on` and `dateModified` change only when content changed.
- Report editions: `data/sources/reports.json` tracks each benchmark report and its expected next edition; a new edition triggers refresh of every page citing it.
- Regulation/platform policy pages (`/india/*`, relevant service×industry): quarterly review.
- Never bump `verified_on` without re-verifying; never change the year in a title without changing the content.

## 9. Voice guide (what "sounds like Yogesh" means to the judge)

Used by the LLM voice check (review-judge Q4) and by reviewers.

- Verdict first, evidence second, caveat last — and the caveat is one sentence.
- Numbers in every third sentence on average. Ranges over point estimates when the source gives a range.
- Opinions are owned: "I'd price this at ₹149/month", not "one could consider a lower price point".
- Concrete nouns: paywall, mandate, cohort, D7, annual plan, cancel flow. Not "strategy", "journey", "ecosystem".
- Sentences ≤22 words on average; paragraphs ≤4 sentences.
- Compare to something the reader knows ("Duolingo's annual discount is 50%; most Indian edtech apps offer 60–70%").
- No throat-clearing, no summaries of what the page will say, no "let's dive in".
- Admits limits plainly: "No public India figure exists; my estimate is X because Y."

Three calibration samples (good / borderline / bad) live in `prompts/review-judge.md`.
