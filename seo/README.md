# pmyogesh.com — 1,000-page organic growth package

Prepared 28 Sep 2026 for Yogesh. Executor: Claude Code (Opus 5.5).

## What's in the box

| Path | Purpose |
|---|---|
| `00-STRATEGY.md` | The decision, 2026 search realities, positioning, 15 core archetypes + 1 conditional, 4 gated waves, KPIs, exclusions, risks |
| `01-PAGE-ARCHETYPES.md` | Base contract + per-archetype contracts (required blocks, must-nots, sources, length, schema, uniqueness, links, CTA, refresh) |
| `02-QUALITY-GATES.md` | 20 automated gates, batch/wave gates, experience library, noindex-by-default, monitoring & rollback, refresh, voice guide |
| `03-TECHNICAL-SPEC.md` | Stack, repo layout, zod content model, pipeline scripts, schema/sitemaps/robots/llms.txt/IndexNow, performance budgets, design system, analytics |
| `04-AUTHORITY-AND-DISTRIBUTION.md` | Entity setup, per-publish loop, link acquisition, citation engineering, conversion loop, 90-day calendar |
| `CLAUDE.md` | Operating rules for Claude Code — copy to the repo root |
| `page-inventory.csv` · `inventory-summary.md` | 1,017 pages (921 core + 96 conditional) — generated, never hand-edited |
| `seeds/entities.json` · `seeds/curated.json` | Edit these to add/remove pages, then rerun the builder |
| `scripts/build_inventory.py` | Seeds → inventory |
| `scripts/similarity_check.py` | Reference implementation of gates G04/G05 (tested) |
| `prompts/page-generation.md` | Per-page draft prompt + output JSON schema + blocked output |
| `prompts/research.md` | Fail-closed research subagent prompt |
| `prompts/review-judge.md` | LLM judge for answer-first, claims, intent, voice, unique value |
| `prompts/experience-capture.md` | 2-hour session to seed `content/experience.json` (do this before Wave 1) |
| `config/*.json` | banned phrases, fx, source allow/block lists, sitemaps, redirects, 25 citation prompts |
| `DECISIONS.md` | Append-only decision log (starter) |

## Before Claude Code starts (you, ~1 day)

1. Read `00-STRATEGY.md` end to end. Change anything you disagree with in the seeds or the archetype contracts — not later.
2. Verify the `[VERIFY]` items: your public name and bio, the career timeline, and the case-study numbers (CarInfo, motor insurance, Appy Pie Connect, Loanwiser) and what you may disclose.
3. Run the experience-capture session (`prompts/experience-capture.md`) → ≥30 entries.
4. Set `config/fx.json` (rate + date). Get DataForSEO, GSC service account, GA4, IndexNow key ready.
5. Decide the 4 Wave-1 teardown apps (currently duolingo, zomato, cred, kuku-fm in `seeds/entities.json`).

## Kickoff prompt for Claude Code (paste as-is from the repo root)

```
Read, in this order: 00-STRATEGY.md, 01-PAGE-ARCHETYPES.md, 02-QUALITY-GATES.md, 03-TECHNICAL-SPEC.md, 04-AUTHORITY-AND-DISTRIBUTION.md, CLAUDE.md, every file in prompts/ and config/, page-inventory.csv (columns only, then row counts by archetype and wave), seeds/, and scripts/. Do not write code until you have read all of them.

Then:
1. Audit what exists: the current pmyogesh.com site and stack, GSC and GA4 access, the DataForSEO account, and the domain's redirects. Write the findings and any conflicts with 03-TECHNICAL-SPEC.md to DECISIONS.md and ask me only the questions a script can't answer.
2. Execute Wave 0 exactly as 03 §9 (scaffold, tokens, 5 layouts, components, zod loader, 5 hand-written sample pages that pass every gate, structured data, sitemaps, robots, llms.txt, IndexNow, OG images, redirects registry, GSC/GA4/booking wiring, /about and /work-with-me). Build validators (gates.ts, link-plan.ts, similarity) before generators (research.ts, draft.ts). Show me the 5 sample pages and the gate report before proceeding.
3. Run validate-keywords.ts on Wave-1 rows; report what it would drop and why. Drop nothing that is BOFU.
4. Generate Wave 1 in batches of ≤25 pages, one archetype per batch, in this order: 14 hubs (curated by hand with me), 12 services, 8 tools, 8 benchmark hubs, 8 India, 24 glossary, 17 playbooks, 16 teardowns (4 apps × 4 lenses), 8 case studies last (they need my numbers and permissions). For each batch: research → gates G01–G03 → draft → link plan → gates → STOP and open the review UI for me. Nothing flips to indexable without my review, and never during the first 7 days of a Google update rollout.
5. After each batch, give me a 10-line summary in chat and the report path. Log every non-trivial decision in DECISIONS.md.

Non-negotiables are in CLAUDE.md §1. If any instruction in this prompt conflicts with the documents, the documents win; tell me where.
```

## Order of operations, one line

Read docs → Wave 0 → 5 sample pages green → keywords → Wave 1 in batches of 25 with your review after each → measure the Wave-1 gate (≥80% indexed at 28 days) → Wave 2.
