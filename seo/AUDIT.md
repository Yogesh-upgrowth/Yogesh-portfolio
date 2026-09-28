# Wave 0, step 1 — audit of what exists vs what the package assumes

Date: 2026-09-28 · Run against `dist/public/sitemap.xml` (132 live URLs) and
`seo/page-inventory.csv` (1,017 planned rows).

This is step 1 of the kickoff prompt in `seo/README.md`: audit what exists,
record conflicts with `03-TECHNICAL-SPEC.md`, and ask only the questions a
script cannot answer. Four conflicts need Yogesh's decision. Everything else
is already done or is mechanical once those four are settled.

---

## Conflict 1 — the existing site is invisible to the inventory

| | Count |
|---|---|
| Live URLs | 132 |
| Planned rows | 1,017 |
| Present in **both** | **3** (`/benchmarks`, `/benchmarks/arpu/gaming`, `/case-studies`) |
| Live but **not** in the inventory | **129** |

`CLAUDE.md` §1.6 says: *"Never create a page, slug, or link target that isn't a
row in page-inventory.csv."* Taken literally, 129 of the 132 pages now live are
illegal, and every internal link into them fails G08 (`all targets exist in the
inventory`). The inventory was written as though the domain were empty.

Breakdown of the 129, with the plan's nearest equivalent:

| Live | Pages | Plan's nearest home | Nature of the clash |
|---|---|---|---|
| `/blog/*` | 59 | none — no `/blog` archetype exists | Plan §6 explicitly excludes PM-career content. Roughly 15 of these are exactly that (`become-product-manager-india`, `pm-career-path-complete-guide`, `product-manager-interview-questions`, `building-pm-portfolio`, `pm-skills-gap-analysis`). The rest map loosely onto `/playbooks` (72 planned) and `/glossary` (100 planned). |
| `/case-study/*` | 30 | `/case-studies/[slug]`, 8 planned | Singular vs plural, and 30 existing vs 8 planned. Two URL spaces for one job. |
| `/benchmarks/*` | 21 | `/benchmarks/[metric]/[industry]`, 96 planned | **Same pattern — this one is additive, not a clash.** 21 live rows simply need adding to the seeds. |
| `/case-studies/*` | 5 | `/case-studies` hub | Live uses these as *category* pages (design, growth, ml, product, seo); the plan uses the same prefix for individual studies. Direct structural collision. |
| `/consulting/*` | 5 | `/services/[service]`, 12 planned | Same job, different prefix. These are the pages carrying the pricing set last week. |
| `/work/*` | 5 | none | Company stories (carinfo, knipex, loanwiser, upgrowth). No archetype covers them. |
| `/product-growth-score` | 1 | `/tools/[tool]`, 30 planned | Should almost certainly become `/tools/product-growth-score`. |
| `/about-yogesh-yadav` | 1 | `/about` | Spec §9.7 names `/about`. Live URL differs, and all 57 articles' author schema points at the live one. |
| `/contact` | 1 | `/work-with-me` | Spec replaces it. Note Upwork forbids linking to a page showing contact info (`copy/upwork.md`). |
| `/` | 1 | — | Not an inventory row. |

**Decision needed (D1).** Three options, in rising cost:

- **(a) Extend the seeds to cover what exists.** Add the 129 live URLs as rows
  in their real shape, keeping `/consulting/*`, `/case-study/*` and
  `/blog/*` where they are. Nothing 301s, no equity is spent, and the plan's
  URL taxonomy bends to the site. Cheapest and safest for what already ranks.
- **(b) Migrate to the plan's taxonomy.** `/consulting/*` → `/services/*`,
  `/case-study/*` → `/case-studies/*`, `/product-growth-score` →
  `/tools/*`, `/blog/*` → `/playbooks/*` and `/glossary/*`. Requires ~100
  301s in `config/redirects.json`, and every internal link, sitemap entry and
  `sameAs` rebuilt. Cleanest long-term structure, highest risk right now
  given a spam update has been rolling since 24 Sep.
- **(c) Run both.** New content under the plan's prefixes, existing content
  untouched. Cheapest today, but it produces two competing structures for the
  same topics, which is the cannibalisation the plan's intent guards exist to
  prevent. Not recommended.

My read: **(a)**, with one exception — fold `/product-growth-score` into
`/tools/` now, because it is a single URL with almost no equity to lose and the
plan needs 30 tool pages under that prefix. Leave the 59 `/blog` articles and
30 `/case-study` pages where they are and add them to the seeds.

---

## Conflict 2 — the moat numbers are the ones our own build cannot source

`00-STRATEGY.md` §2 builds the moat on four figures, marked
`[VERIFY before use]`:

| Plan's figure | Status in `shared/proof.ts` |
|---|---|
| CarInfo ~350K → **1.2M+ DAU** | present as `dau-scaled`, and registered **`unsourced`** |
| Motor insurance ~10 → **6,800+ policies/day** | present as `insurance-growth: 680×`, sourced to a case study |
| Appy Pie Connect **~$60K MRR** | **not in the proof database at all** |
| TripMojo (founder) | biographical, fine |

Two problems.

**First, the DAU figure has no recorded source.** `shared/proof.ts` marks
`dau-scaled` as `unsourced` — one of three claims deliberately flagged when the
proof database was built. The plan makes it the lead number of the whole moat,
and it would then propagate into "From my work" blocks across playbooks,
teardowns and decisions. Building 1,017 pages on an unsourced figure is the
precise failure G03 (number provenance) and G12 (claims policy) exist to stop.

**Second, the site currently tells two different scale stories.** The plan and
`proof.ts` say **1.2M+ DAU**. But `shared/services.ts`,
`client/src/data/caseStudies.ts`, `case-study-metrics.ts` and
`shared/seo-meta.ts` all say **3.8M → 45M+ MAU** — including page titles. These
are not arithmetically contradictory (1.2M DAU against 45M MAU is a ~2.7%
DAU/MAU ratio, low but possible), which is why `script/check-proof.ts` did not
catch it: it compares claims with matching labels, and "DAU Scaled To" never
matches MAU prose. It is still two stories, and a reader or a judge comparing
the teardown pages to the case studies will see it.

**Decision needed (D2).** Which framing is the true one, and what is the source
for it. Then one of the two gets removed everywhere. Until that is settled, no
page may carry either number, because G01 needs ≥6 sourced facts and this is
the fact every commercial page leans on.

**Also needed:** a source for the $60K MRR figure, or it comes out of §2.

---

## Conflict 3 — the stack in the spec is not the stack in this repo

| `03-TECHNICAL-SPEC.md` §1 | This repository |
|---|---|
| Next.js App Router, `generateStaticParams` | Vite 5 + React 18 + **wouter**, custom prerender in `script/build.ts` |
| MDX bodies + JSON meta, zod at build | TSX page components, typed data modules in `shared/` |
| pnpm | npm |
| Tailwind + token layer | Tailwind already present |
| Vercel | Vercel already configured (7 redirects, dual `vercel.json`) |

Tailwind and Vercel already match. The framework does not, and it is not a
small gap: §2's core rule is *"the URL is the file path"*, with the loader
throwing when a content file has no inventory row. wouter routes are declared
in `client/src/App.tsx`, so that rule has no equivalent here without building
one.

**Decision needed (D3).** Either:

- **Rewrite on Next.js** as specified. Correct against the spec, and the
  content-as-files model is genuinely better for 1,000 pages. But it discards
  a working build that currently scores Accessibility 100 / SEO 100, ships 132
  prerendered pages, and carries five passing validators
  (`check-proof`, `check-services`, `check-benchmarks`, `check-profiles`,
  `check-content-standard`).
- **Adapt the spec to Vite + wouter.** Keep the working build; implement the
  content model as typed modules under `shared/`, and add a generated route
  table so "the URL is the file path" becomes "the URL is an inventory row"
  enforced at build. Deviations logged in `DECISIONS.md` per CLAUDE.md §2.

My read: **adapt**. The spec's substance — zod-validated content, gates before
generators, noindex-by-default, inventory as the single source of URLs — is all
framework-agnostic. Next.js buys `generateStaticParams` and MDX; this repo
already prerenders 132 pages and already has a validator habit. A rewrite
spends the first two weeks re-earning ground we hold, during an active spam
rollout. I'd revisit at Wave 2 if MDX authoring becomes the bottleneck.

**Everything built today was written to be stack-agnostic**, so this decision
is not yet blocking.

---

## Conflict 4 — the pipeline needs network this environment does not have

`03-TECHNICAL-SPEC.md` §4 assumes outbound HTTP. This container's egress is
restricted to package registries, GitHub and the Anthropic API; every other
host is refused at the proxy with `403 to CONNECT`. Verified on three separate
fresh containers across both environments.

| Script | Needs | Runnable here |
|---|---|---|
| `build_inventory.py` | disk only | **yes — verified today** |
| `similarity_check.py` (G04/G05) | disk only | **yes — verified today** |
| `gates.ts` G01, G03, G06–G17 | disk only | **yes — buildable** |
| `gates.ts` G02 (every `source_url` returns 200) | HTTP | no |
| `gates.ts` G19/G20 (judge + SERP) | Anthropic API + DataForSEO | judge yes, SERP no |
| `gates.ts` G18 (Lighthouse) | local Chromium | probably — Chromium is installed |
| `validate-keywords.ts` | DataForSEO | no |
| `research.ts` | web search/fetch + Wayback | no |
| `publish.ts` | IndexNow, GSC API | no |
| `monitor.ts` | GSC, GA4 | no |

This is why today's work is the validator layer and not the generators. It also
matches `CLAUDE.md` §2: *"Build validators before generators."* The research and
publish halves need either a widened network policy on this environment, or a
local run on your machine.

---

## What is done and verified today

- Package vendored to `seo/` (24 files: docs 00–04, configs, prompts, seeds, scripts).
- `seo/scripts/build_inventory.py` runs and **reproduces the shipped
  `page-inventory.csv` byte-for-byte** — the seeds are the real source.
- `seo/scripts/similarity_check.py` runs and **correctly fails** two synthetic
  sibling teardowns at sibling similarity 1.00 against the 0.55 threshold.
  The gate is real, not declarative.
- `DECISIONS.md` at repo root, seeded with the package's four planning entries
  plus today's findings.

## Deviation logged

`CLAUDE.md` was vendored to `seo/CLAUDE.source.md` rather than the repository
root. At root it would immediately govern the 132 existing pages, which fail
§1.6 (inventory-only URLs), §1.3 (noindex-by-default) and §1.1 (≥6 sourced
facts) — the audit above exists precisely because that reconciliation is
unresolved. It gets promoted to root once **D1** is decided.

## The four questions a script cannot answer

1. **D1** — extend the seeds to cover the 129 existing URLs, migrate them to the
   plan's taxonomy, or run both? (My read: extend, plus move
   `/product-growth-score` under `/tools/`.)
2. **D2** — is the CarInfo figure **1.2M+ DAU** or **45M+ MAU**, what is the
   source, and what is the source for $60K MRR at Appy Pie Connect?
3. **D3** — rewrite on Next.js, or adapt the spec to Vite + wouter?
   (My read: adapt.)
4. **D4** — `config/fx.json` has `rate: null` and `as_of: null`. G15 fails every
   page until an RBI reference rate and date are set. What rate?

Items 3 and 4 in `seo/README.md`'s "before Claude Code starts" list are also
outstanding and only you can do them: the experience-capture session
(≥30 entries in `content/experience.json`, the sole permitted source of
first-person claims), and confirming the four Wave-1 teardown apps — currently
duolingo, zomato, cred, kuku-fm in `seeds/entities.json`.
