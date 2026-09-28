# Status — every requirement in the package, checked

Generated 2026-09-28. Updated after reading all four prompts/*.md files and the
full text of 01 and 04, which I had skimmed — see the "what reading the prompts
changed" section at the end. This is the answer to "is
everything good to go, or is anything pending".

Legend: **DONE** built and verified · **BLOCKED** needs something only Yogesh
has · **NEEDS NETWORK** built, cannot run in this container.

---

## 03-TECHNICAL-SPEC §9 — the Wave 0 checklist

| # | Item | State |
|---|---|---|
| 1 | Repo scaffold, tokens, 5 layouts, all components, `/admin/components` | **DONE** |
| 2 | Loader + zod schemas | **DONE** |
| 2 | 5 hand-written sample pages passing every gate | **BLOCKED** — needs sourced facts; see below |
| 3 | `build_inventory.py` wired | **DONE** — reproduces the CSV byte-for-byte |
| 3 | `validate-keywords.ts` run on Wave-1 rows | **NEEDS NETWORK** — DataForSEO |
| 4 | Structured data builders | **DONE** |
| 4 | Rich Results check on the 5 samples | **BLOCKED** — needs the samples |
| 5 | Sitemaps, robots, llms.txt, IndexNow key, OG generation, redirects registry | **DONE** |
| 6 | GA4 with consent; booking link with UTM | **DONE** |
| 6 | GSC domain property, Bing Webmaster | **BLOCKED** — account registration |
| 7 | `/about` and `/work-with-me` live with schema and the positioning line | **DONE** |
| 8 | Experience library ≥30 entries | **BLOCKED** — the capture session |
| 9 | Lighthouse CI config; Playwright smoke suite | **DONE** — 11 e2e passing |
| 10 | `DECISIONS.md` started | **DONE** — 15 entries |

## 02-QUALITY-GATES — the 20 gates

| Gates | State |
|---|---|
| G01, G03–G17 (16 gates) | **DONE** — 40 tests, one pass and one fail case each |
| G02 source quality | **DONE offline** — runs from the research object's `fetch_log`, per prompts/research.md; skips only when no log exists |
| G18 performance | **DONE as config** — `lighthouserc.json`; needs a built site to run |
| G19, G20 judges | **DONE as code** — all 7 questions in `lib/gates/judge.ts`; running them needs the Anthropic API |

Skipped gates return `skipped`, never `pass`, and `allPassed()` counts a skip as
not-done. A gate that cannot run is never mistakable for one that cleared.

## 03 §4 — the pipeline

Every script exists and runs. `pnpm` aliases match `CLAUDE.md` §3.

| Script | State |
|---|---|
| `build_inventory.py`, `similarity_check.py` | **DONE** |
| `build_migration.py`, `check_migration.py` | **DONE** — not in the package; D1 needed them |
| `gen-routes.ts`, `migrate-notes.ts` | **DONE** — not in the package; D1 and D3 needed them |
| `gates.ts`, `link-plan.ts` | **DONE** |
| `validate-keywords.ts`, `research.ts`, `draft.ts` | **NEEDS NETWORK** |
| `publish.ts`, `refresh.ts`, `monitor.ts` | **NEEDS NETWORK** |
| `citations.ts`, `price-check.ts` | **DONE** — both run offline |
| Review UI `/admin/review` | **DONE** — with seeded 20% sampling |

## 04-AUTHORITY-AND-DISTRIBUTION

| Section | State |
|---|---|
| §1 entity setup — schema, positioning line, `/about` | **DONE** |
| §1 — 40-word bio, headshot, profile alignment | **BLOCKED** — needs the headshot file and live profiles |
| §2 per-publish distribution kit | **DONE** — LinkedIn, X, newsletter, 2 community answers, notify-subject |
| §2 `distribution-log.csv` | **DONE** — created by `publish.ts` |
| §2 n8n automation | **BLOCKED** — needs the n8n instance and a Notion database |
| §3.1 "Cite this" block with CC BY 4.0 CSV | **DONE** — `components/CiteThis.tsx` |
| §5 qualification form (stage, band, problem) | **DONE** — `components/QualificationForm.tsx`, wired into `/work-with-me` |
| §3 link acquisition | **BLOCKED** — outreach is human |
| §4 citation engineering | **DONE** — `citations.ts`, 25 prompts x 5 surfaces |
| §5 conversion loop | **DONE** — `/work-with-me`, booking UTM, typed events |
| §6 90-day calendar, §7 measurement | **DONE as code** — `monitor.ts`; needs GSC |

---

## Everything still pending, and who owns it

### Yogesh — four items, none of which I can do

1. **`config/fx.json` has `rate: null`.** G15 fails every priced page until an
   RBI reference rate and its date are set. One number and one date. This is
   the smallest blocker and it gates the most pages.
2. **Experience library — 0 of 30 entries.** `prompts/experience-capture.md` is
   a 2-hour session. It is the only legal source of first-person claims under
   G12, so every "From my work" block on 1,071 pages depends on it.
3. **Appy Pie Connect ~$60K MRR has no source.** Marked `[VERIFY]` in
   `00-STRATEGY.md` §2; it cannot appear on a page under G01/G03.
4. **Accounts:** GSC domain property, Bing Webmaster, GA4 property, the booking
   link, and the headshot file.

### Network — built, cannot run here

`research.ts`, `draft.ts`, `validate-keywords.ts`, `publish.ts`, `refresh.ts`,
`monitor.ts`, and gates G02, G19, G20. Either widen Network access on the
environment, or run them locally: the code is finished and tested, only the
egress is missing.

### The one thing I deliberately did not do

**The 5 sample pages.** They are the Wave 0 → Wave 1 gate, and writing them
means writing ≥30 sourced facts. Without network I cannot fetch a source, and
inventing facts would put fabricated numbers into a system whose entire premise
is that every number traces to one — while making Wave 0 look finished. The
machine that writes them is built, tested and waiting on a key.

---

## What is verifiably true right now

- 1,071 inventory rows, regenerated from seeds, no duplicates
- 127 redirects, every target resolving, no chains, no loops
- All 132 previously-live URLs either an inventory row or a validated redirect
- 45 migrated articles at `/notes`, 82 pages prerendering
- Link plan: min 3 inbound per page, 0 starved
- Proof database: 0 contradictions, 2 unsourced claims (down from 3)
- 119 unit tests, 11 end-to-end, typecheck clean, both builds green


---

## What reading the prompts changed (2026-09-28, second pass)

I had vendored all 25 files but only fully read 00, 02, 03 and the configs. The
four `prompts/*.md` files were never opened, and I had written `research.ts`,
`draft.ts` and the judge stubs against them anyway. That produced five real
defects, now fixed:

1. **`ResearchObject` was missing `block_coverage` and `fetch_log`**, which
   `prompts/research.md` states outright that `gates.ts` reads for G01 and G02.
   G01 could not tell whether a required block had any supporting facts, and G02
   was a permanent skip when it could have run offline all along.
2. **`contracts.ts` had no required blocks and no "must not" lists**, so the
   contract 01 §B defines was enforced only as a word range.
3. **`draft.ts` asked the generator for a `PageMeta`.** §3 defines a richer
   `DraftOutput` that `draft.ts` converts — which is where block order, schema
   types and `not_affiliated` get applied consistently instead of per page.
4. **The blocked output was a bare string list**, not
   `reasons` / `what_would_unblock` / `suggested_fallback`.
5. **The judge was two bare stubs.** `review-judge.md` defines seven questions.
   Q7 (experience fidelity) is the only check that a first-person claim still
   matches its library entry; Q6 catches sibling repetition that similarity
   scoring misses once the wording differs. Both were absent.

Still not implemented from the package, and honestly flagged rather than
quietly dropped:

- **Lens-merge rule** (01 §B6): under 6 lens-specific facts means merging the
  lens into `monetization`, setting `notes=merged:<lens>` and registering a
  redirect. `draft.ts` surfaces `suggested_fallback: "merge:retention→monetization"`
  from the generator, but nothing acts on it automatically yet.
- **Quarterly data study** (04 §3.2) and the **press pitch list** — these are
  outreach, not code.
- **3-email follow-up sequence** (04 §5) — needs an email provider.
