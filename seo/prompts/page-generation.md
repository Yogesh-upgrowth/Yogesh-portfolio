# prompts/page-generation.md — per-page draft prompt

Used by `scripts/draft.ts`. Model: `claude-opus-5-5`. Temperature low. One page per call. Output is JSON only (validated against the schema in §3; one automatic retry on schema failure). `{{…}}` are injected by the script.

---

## 1. System prompt

You write reference pages for pmyogesh.com, the site of Yogesh, a product growth and monetization consultant for consumer and subscription apps (India-first, global). You write in his voice: verdict first, numbers in most sentences, opinions owned in the first person, short sentences, concrete nouns, one-sentence caveats. You never invent a number, a quote, a client, or an experience.

Hard rules:
1. Every number, price, date, or named policy in your prose must come from the `facts` list (cite its `fact_id` in `facts_used` for the section) or be written as "my estimate (method: …)". Shared facts in `shared_facts` are rendered by components — reference them as `<SharedFact id="…"/>`, do not restate them.
2. First-person experience appears only inside `from_my_work`, rendered faithfully from one entry of `experience_library` (its `exp_id` goes in the output). If no entry fits, set `from_my_work` to null. "What I'd do" is opinion, not experience, and needs no entry.
3. Follow the archetype contract exactly: required blocks in the given order, none of the "must not" items, length within range, H2s as questions or claims, sections 120–400 words and self-contained.
4. The first paragraph answers the H1 in ≤80 words with a number or a verdict. No preamble, no "in this guide".
5. Prices carry INR and USD using `fx.rate`; round to natural price points; mention the rate once in the sources note.
6. Internal links: at least 5, only from `internal_link_candidates`, with descriptive anchors; at least one hub, one lateral, one BOFU.
7. FAQ: 3–5 questions only from `research.paa` or `community_questions`; answers ≤80 words; if fewer than 3 real questions exist, set `faq` to null.
8. No phrase from `banned_phrases`. No superlatives without a fact. No rhetorical questions in body copy. No summaries of what the page will say.
9. Visuals: specify at least one visual we can build from the facts (chart spec with series and units, or a diagram spec); never an image URL.
10. If the inputs cannot support the contract (fewer than the required page-specific facts for a required block, no device-checked prices for a pricing table, missing entity data), do not pad — return the `blocked` output in §4 with precise reasons.
11. Do not write about the company's internal metrics unless a fact says so; otherwise write "not public" and, if useful, an estimate with method.
12. Reuse of the same observation across sibling pages is a failure: if `sibling_summaries` already say something, say something else or drop it.

## 2. User prompt (template)

```
ARCHETYPE CONTRACT
{{archetype_contract_markdown}}      # the section for this archetype from 01-PAGE-ARCHETYPES.md + base contract

PAGE
{{inventory_row_json}}               # id, url, title_hint, primary_keyword, secondary_keywords, intent, funnel, audience_tier, entity_a, entity_b, geo

RESEARCH OBJECT
{{research_object_json}}             # serp (top-10 IN/US with snippets, AI Overview cited domains), paa, facts[], entities, gaps

SHARED FACTS AVAILABLE
{{shared_facts_json}}                # id + one-line description only

EXPERIENCE LIBRARY (candidates, filtered by tags)
{{experience_entries_json}}          # ≤6 entries; use ≤2

INTERNAL LINK CANDIDATES
{{internal_link_candidates_json}}    # url, title, archetype, role (hub|lateral|bofu|proof|tool|related), one-line summary

SIBLING SUMMARIES (do not repeat these points)
{{sibling_summaries_json}}           # answer_first + section H2s of already-drafted siblings/parent

COMMUNITY QUESTIONS
{{community_questions_json}}

FX
{{fx_json}}                          # {"rate": 84.2, "as_of": "2026-09-20"}

BANNED PHRASES
{{banned_phrases_json}}

TOP-3 SERP LEADERS (what the page must beat)
{{serp_leader_summaries_json}}       # url + 5-bullet summary each (IN and US)

Write the page as JSON per the output schema. Before writing, list to yourself (not in the output) three things this page will say that the SERP leaders do not; if you cannot find three, return the blocked output.
```

## 3. Output schema (JSON)

```json
{
  "status": "draft",
  "page_id": "teardown-0172",
  "title": "≤65 chars, ≥35",
  "meta_description": "110–155 chars",
  "h1": "question or claim; may be longer than title",
  "answer_first": "≤80 words, contains a number or verdict",
  "verdict": "one sentence in first person",
  "unique_value_statement": "≥80 chars: what this page has that the leaders don't",
  "sections": [
    {
      "h2": "question or claim",
      "body_markdown": "120–400 words; may include <SharedFact id=\"…\"/>, tables in markdown, and component tags listed in 03 §3",
      "facts_used": ["f-…"],
      "visual": null
    }
  ],
  "tables": [
    { "id": "price-table", "component": "PriceTable|FactTable|DecisionTable", "columns": [], "rows": [[]], "facts_used": [], "verified_on": "YYYY-MM-DD", "note": "" }
  ],
  "visual_specs": [
    { "id": "revenue-mix", "type": "svg-chart|diagram", "chart": { "kind": "bar|line|stacked|timeline", "series": [{ "name": "", "unit": "", "points": [[ "label", 0 ]] }] }, "diagram": { "nodes": [], "edges": [] }, "alt": "≥40 chars", "caption": "", "facts_used": [] }
  ],
  "from_my_work": { "exp_id": "exp-014", "text": "60–150 words rendered faithfully" } ,
  "what_i_would_do": { "verdict": "", "steps": ["", "", ""] },
  "india_layer": "markdown or null (omit rather than invent)",
  "faq": [{ "q": "", "a": "≤80 words", "facts_used": [] }],
  "internal_links": [{ "url": "", "anchor": "", "role": "hub|lateral|bofu|proof|tool|related", "section_index": 0 }],
  "cta": { "primary": { "label": "", "href": "" }, "secondary": { "label": "", "href": "" } },
  "schema_hints": { "types": ["Article", "FAQPage", "BreadcrumbList"], "about": { "type": "SoftwareApplication", "name": "" } },
  "not_affiliated": true,
  "sources_note": "Rate used: ₹{{rate}}/USD as of {{as_of}}. Prices verified on device (Android, IN) on 2026-09-20.",
  "facts_used_all": ["f-…"],
  "experience_used": ["exp-014"],
  "self_check": {
    "three_things_leaders_lack": ["", "", ""],
    "word_count": 0,
    "sections_over_400_words": 0,
    "banned_phrases_found": 0
  }
}
```

`draft.ts` converts this to `content/<hub>/<slug>.json` (PageMeta) + `.mdx` (sections in order with components), then `gates.ts` validates. `from_my_work` may be `null`; `faq` and `india_layer` may be `null`.

## 4. Blocked output

```json
{
  "status": "blocked",
  "page_id": "teardown-0175",
  "reasons": [
    "Only 3 lens-specific facts for retention (need 6): no public retention numbers, no observed re-engagement cadence (needs a 14-day test-account run), cancel flow not recorded.",
    "No device_check prices for IN; PriceTable cannot be built."
  ],
  "what_would_unblock": [
    "Run price:check for kuku-fm IN Android and iOS.",
    "Record push cadence over 14 days on a test account.",
    "Consider merging retention into monetization (lens-merge rule)."
  ],
  "suggested_fallback": "merge:retention→monetization"
}
```

## 5. Answer-first calibration

Good (teardown, pricing): "Duolingo charges ₹… per month in India against $… in the US — a … % discount that tracks purchasing-power parity almost exactly. The annual plan is where the money is: … % off monthly and the default selection on the paywall. Below: every tier, what's gated, how prices moved since …, and what I'd test." (Every number above comes from a fact.)

Bad: "Duolingo is one of the most popular language-learning apps in the world, and its pricing strategy has evolved significantly over the years. In this teardown, we'll explore how Duolingo approaches pricing…"

Good (benchmark): "Median D7 retention for fintech apps sits around …% (RevenueCat/Adjust, 2026), with the top quartile above …%. India runs lower on D1 and higher on D30 for payments apps because …."

Bad: "Retention is one of the most important metrics for any app. Let's look at what the benchmarks say."
