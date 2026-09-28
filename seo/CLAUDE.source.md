# CLAUDE.md — operating rules for this repository

You are building and running the content system for pmyogesh.com (Yogesh's product growth and monetization consulting site). Read, in order, before doing anything: `00-STRATEGY.md`, `01-PAGE-ARCHETYPES.md`, `02-QUALITY-GATES.md`, `03-TECHNICAL-SPEC.md`, `04-AUTHORITY-AND-DISTRIBUTION.md`, `prompts/*.md`. `page-inventory.csv` is the only list of pages that exist.

## 1. Non-negotiables

1. **Fail closed.** A page with fewer than 6 page-specific sourced facts is not drafted. A draft that fails any gate is not published. A batch that fails review is reworked in full. Never "publish and fix later".
2. **No invented numbers, quotes, or experience.** Every number maps to a `fact_id` in a research object or is labelled "my estimate (method: …)". First-person claims come only from `content/experience.json` by `exp_id`, copied faithfully. If you can't source it, leave it out.
3. **Noindex by default.** New pages ship with `noindex,follow`, out of sitemaps and `llms.txt`. `indexable` flips per batch only after gates + review + ≥3 inbound links + no Google update in its first 7 days (`publish.ts` asks for confirmation; never bypass it).
4. **Batches ≤25 pages, one archetype, one wave. Stop after every batch** and wait for Yogesh's review. Wave 1 is reviewed 100%; later waves 20% sample with whole-batch rejection above 10% rejects.
5. **Uniqueness thresholds are hard:** sibling ≤0.55, parent ≤0.45, any page ≤0.60 (MinHash), boilerplate ≤35%. A second failure blocks the page and flags the archetype contract for a fix; do not tune the page around the threshold.
6. **URLs come only from the inventory.** Never create a page, slug, or link target that isn't a row in `page-inventory.csv`. To add pages, edit `seeds/*.json`, rerun `scripts/build_inventory.py`, and log it in `DECISIONS.md`. Never hand-edit the CSV.
7. **INR and USD on every price**, from `config/fx.json`. Zero phrases from `config/banned-phrases.json`. Answer-first opening on every page.
8. **Own visuals only.** SVG charts and diagrams we generate; ≤3 annotated screenshots per page; no stock or hot-linked images.
9. **Respect the contracts.** Required blocks in the order given in `01-PAGE-ARCHETYPES.md`; nothing from the "must not" list. If a contract can't be met for a page, follow its fallback (merge lens, drop city page, block placeholder case study) and log it.
10. **Never publish during the first 7 days of a confirmed core or spam update rollout.** Check the Google Search Status Dashboard before every `publish.ts` run.
11. **No hacks:** no doorway pages, no hidden text, no fake reviews or ratings schema, no affiliate links, no auto-translated variants, no keyword stuffing, no FAQ walls, no "According to pmyogesh" seeding.

## 2. Working style

- Use subagents for research (`prompts/research.md`) and for judge checks (`prompts/review-judge.md`); keep the main context for orchestration. One page per research subagent.
- Build validators before generators: `gates.ts` must run against the 5 Wave-0 samples before `draft.ts` runs on a batch.
- After every batch write `reports/<batch_id>.md` (gate results, similarity heatmap, facts and sources, judge answers, what was blocked and why) and a 10-line summary in chat for Yogesh.
- Append every non-trivial decision to `DECISIONS.md` (date, decision, why, what it changes). Deviations from `03-TECHNICAL-SPEC.md` need an entry.
- Commit per batch with the batch id in the message. Never commit `.env*`.
- Prefer boring, testable code. `lib/formulas` has unit tests before any tool page ships. Keep JS budgets (03 §6).
- Ask Yogesh only for what a script can't answer: permissions on numbers, experience-library entries, device price checks, whether a rollout is active, design taste calls on a new layout. Decide the rest and log it.
- When Yogesh rejects a page, fix the cause (contract, prompt, research), not just the page.

## 3. Batch procedure (every time)

```
pnpm inventory                 # seeds → page-inventory.csv (only if seeds changed)
pnpm keywords --wave 1         # DataForSEO validation, once per wave
pnpm research --batch w1-teardown-01
pnpm gates --batch w1-teardown-01 --stage research   # G01–G03
pnpm draft --batch w1-teardown-01
pnpm links                     # link plan, inbound ≥3
pnpm gates --batch w1-teardown-01                    # G04–G20
pnpm review                    # opens the dev-only review UI; STOP here and wait for Yogesh
pnpm publish --batch w1-teardown-01                  # only after review; asks about update rollouts
```

Then the distribution kit is in `reports/<batch_id>-distribution.md`. Weekly: `pnpm monitor`. Monthly: `pnpm refresh --sweep`, `pnpm citations`.

## 4. Definition of done

- **Page:** all gates pass; review passed; `unique_value_statement` is true; facts ≤90 days (prices ≤45); ≥5 outbound and ≥3 inbound internal links; schema valid; renders within performance budget; `NotAffiliated` where required.
- **Batch:** every page done or explicitly blocked/merged with a redirect; report written; committed; distribution kit generated.
- **Wave:** the gate in `00-STRATEGY.md` §4 is measured with GSC data and recorded in `DECISIONS.md` before the next wave starts.

## 5. Things you do not do

- Do not generate pages outside the current wave "to get ahead".
- Do not change thresholds, word ranges, or required blocks without a `DECISIONS.md` entry approved by Yogesh.
- Do not bump `verified_on`, `refreshed_on`, or title years without re-verifying and changing content.
- Do not add city, country, language, or "best tool for X" listicle pages.
- Do not use screenshots of other apps as the page's main visual.
- Do not write the "From my work" block when no `exp_id` matches — omit the block.
