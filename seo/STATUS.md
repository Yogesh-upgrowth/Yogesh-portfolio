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


---

## Launch readiness — full run, 2026-09-28

Everything green except one thing, and that one thing is a deploy blocker.

| Check | Result |
|---|---|
| Vite build (the live site) | pass — 132 URLs, all validators green |
| TypeScript | clean |
| Unit tests | **162 passing** |
| `build_inventory.py` | 1,071 rows |
| `build_migration.py` + `check_migration.py` | 127 redirects, every target resolves |
| `link-plan.ts` | min 3 inbound, 0 starved |
| `gen-routes.ts` | 30 routes; the 3 hand-authored ones survive a regenerate |
| `migrate-notes.ts` | 45/45 |
| Next build | 83 pages |
| Playwright | **13 passing** |
| Crawl of every built page | **54/54 return 200** |
| Every redirect fires | **127/127 return 301/308** |
| Lighthouse, 4 page types | **100 / 100 / 100 / 100** |
| **`launch:check`** | **FAIL — not safe to deploy** |

### The blocker

**79 of the 127 redirects land on a 404.** They fire correctly; their
destinations do not exist, because no Wave-1 content has been drafted.

| Destination | Dead | Was |
|---|---|---|
| `/case-studies/*` | 40 | 30 live case studies plus the category pages |
| `/benchmarks/*` | 20 | 21 live benchmark pages |
| `/playbooks/*` | 12 | 13 migrated blog posts |
| `/services/*` | 5 | the 5 live consulting pages |
| `/glossary/*`, `/tools/*` | 2 | |

Only the 48 pointing at `/notes` resolve, because those articles were actually
migrated.

**Deploying this build today would 301 seventy-nine currently-ranking URLs to
404s.** That is worse than not migrating: the old pages stop serving and the new
ones do not exist, so the equity goes nowhere rather than moving.

`pnpm launch:check` now enforces this. It walks every redirect to its final
destination and exits non-zero on any that is not 200. Nothing else in the
suite catches it — a build can typecheck, pass every gate and score 100 across
the board while still being unsafe to put live, because a redirect is only as
good as what it lands on.

### What makes it deployable

Draft and publish the 79 destination pages — which is Wave 1, and needs the four
outstanding items (experience library, the $60K MRR source, GSC/GA4 accounts,
and network for `research.ts`). Until then:

- **The live Vite site is unaffected and safe.** `vercel.json` still points at
  it, and its own build is green.
- **The Next build is safe to preview**, not to promote.
- Cut over only when `pnpm launch:check` passes.

---

## G02 ran for the first time — 41 pages are not publishable

Date: 2026-10-01

G02 (source quality) had skipped on all 98 pages for the life of the project. It
checks that every `source_url` was observed returning 200, and it reads that
observation from a `fetch_log` on the research object rather than re-fetching —
so the log has to be produced somewhere with outbound HTTP. The agent container
has none: the egress proxy answers 403 to CONNECT for every host that is not a
package registry.

`seo/scripts/verify_sources.py` plus `.github/workflows/source-check.yml` produce
the log on a GitHub runner, which does have open network, and commit it back so
G02 then runs offline everywhere.

It ran for real on 2026-10-01. **119 of the 130 cited sources returned 200.**
The 11 that did not fall into two groups that need opposite actions:

| | Count | Sources |
|---|---|---|
| **Gone** | 2 | `culta.ai/blog/arpu-benchmarks-2026` (404), `firstpagesage.com/reports/freemium-conversion-rate-benchmarks/` (404) |
| **Refused an automated client** | 9 | 6× `businessofapps.com` (405), `npci.org.in` (403), `bestmediainfo.com` (403), `leanexperiments.substack.com` (403) |

The nine are bot defences, not dead links — NPCI is India's payments regulator
and the pages serve fine in a browser. Only the two 404s need a replacement
source. `verify_sources.py` reports the two groups separately for that reason;
G02 itself does not distinguish them, so both block their pages until the facts
citing them carry an `archive_url`.

Gate verdicts with the real log in place:

| | Pages |
|---|---|
| Blocked by G02 | **41 of 98** |
| …for the majority-primary rule alone | 25 |
| …adding those citing a non-200 source | 16 |

An earlier note here said 25 blocked and none for reachability. That came from a
wiring test that injected 200 for every URL to prove the gate ran at all, and it
was wrong about reachability — the real run found 11 non-200. 25 is the
majority-primary count, not the total.

Four pages cite no primary source at all:

| Page | Primary |
|---|---|
| `/glossary/take-rate` | 0/6 |
| `/india` | 0/6 |
| `/services/app-monetization-strategy` | 0/6 |
| `/services/app-monetization-strategy/marketplaces` | 0/6 |

### Why this is a content problem, not a gate technicality

The domains these pages lean on are SEO content farms rather than data
publishers — `tfnmarkets.com`, `ecorpit.com`, `ladya.in`, `strataigize.com`,
`funnelfox.com`, `origami-marketplace.com`, `bestmediainfo.com`. A page about
India's app market citing `businessofapps` and `ecorpit` is the thin,
weakly-sourced content the brief exists to prevent. The fix is new research
against primary sources — RBI, TRAI, IAMAI, Redseer for `/india`; first-party
platform reports for the benchmark pages — not a reclassification of the facts
already there.

The existing classification is already principled and should not be loosened:
RevenueCat's own report data is flagged primary (54 facts) while figures it
quotes from elsewhere are not (7), and every aggregator is secondary. Flipping
flags to clear the gate would make the gate meaningless.

### What stops these shipping

`pnpm publish` now re-runs the gates and refuses any batch containing a page
with a failing or blocked gate. Before this it checked `status` and inbound
links only, and `pnpm gates` never writes `status` — so a page with a standing
G02 block could be marked reviewed by hand and flipped to indexable with the
block intact. It cannot now.

**These 41 pages need work before they are indexed.** The other 57 are
unaffected.
