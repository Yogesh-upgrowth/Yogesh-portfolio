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

## Conflict 2 — RESOLVED 2026-09-28 — the moat numbers

> **Resolved.** Yogesh confirmed **3.8M → 45M+ MAU** is the correct framing.
> `shared/proof.ts` now carries `mau-scaled: 45M+`, sourced to
> `CASE_STUDY_METRICS["carinfo-45m-mau"]`. The `1.2M+ DAU` claim is retired,
> the seed slug is `carinfo-3-8m-to-45m-mau`, and `00-STRATEGY.md` §2 is
> updated. Unsourced claims in the proof database went 3 → 2.
> Still open: the **$60K MRR** figure for Appy Pie Connect has no source.

The original finding, kept as the record:

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

1. ~~**D1**~~ — **RESOLVED**: migrate to the plan's taxonomy. 127 redirects built
   and validated; `seo/migration-map.csv`.
2. ~~**D2**~~ — **RESOLVED**: 45M+ MAU. One part still open — the **$60K MRR**
   figure for Appy Pie Connect has no source and stays out of §2 until it does.
3. ~~**D3**~~ — **RESOLVED**: rewrite on Next.js. Built in `web/`.
4. **D4** — `config/fx.json` still has `rate: null` and `as_of: null`. G15 fails
   every priced page until an RBI reference rate and its date are set. This is
   one number and one date, and it is the last thing blocking priced pages.

Items 3 and 4 in `seo/README.md`'s "before Claude Code starts" list are also
outstanding and only you can do them: the experience-capture session
(≥30 entries in `content/experience.json`, the sole permitted source of
first-person claims), and confirming the four Wave-1 teardown apps — currently
duolingo, zomato, cred, kuku-fm in `seeds/entities.json`.

## D5 — the MDX body was never rendered (found 30 September 2026, fixed)

Every archetype route called `renderPage(url, null)`. The layouts, JSON-LD, FAQ,
sources block, changelog and CTA band all shipped; the article itself did not.
84 pages were building and passing their gates with no prose in the HTML, and
the gate runner could not see it because gates read the `.mdx` from disk rather
than the rendered page.

Three defects, all fixed:

1. No MDX renderer existed. `lib/render/body.tsx` now compiles each page's own
   `.mdx` inside `renderPage`, so no route can forget it, and the component map
   lives in one place.
2. `next-mdx-remote` v6 defaults `blockJS: true`, which strips every JSX
   expression attribute before compiling. A `<FactTable>` arrived with its
   quoted `id` and `caption` and **no rows**, silently — no warning, no error,
   just less than was passed. Turned off deliberately: these bodies are repo
   files reviewed in the diff, not MDX submitted by strangers.
   `blockDangerousJS` stays on.
3. `glossary-0700` closed a `FromMyWork` block mid-paragraph, which MDX rejects.
   It had never been compiled, so nothing had caught it.

Two related mislabels found while fixing this, both corrected:

- `Fact.method` had no honest value for a fact read through a search index,
  because direct egress to the source host is blocked here (§4). Ten facts on
  `glossary-0700` were labelled `fetched` with an empty `fetch_log`. A
  `search_index` value now exists and those ten carry it.
- `FactTable` rendered no anchor, so `meta.visuals[].src` pointed at a `#id`
  that did not exist on the page. `glossary-0700` declared
  `#trial-length-table` and had no table at all.

What this changes about the plan: page bodies now have to survive an MDX
compile, which the gates do not check. `seo/scripts/author.py` therefore
pre-flights every page in a batch against a Python port of the prose gates
(`seo/scripts/prose.py`) before writing, and `pnpm build` is the check that the
prose reaches a reader.

## D6 — one fabricated number, and three gate mis-parses (30 September 2026)

Writing the first twelve-page batch surfaced four defects, one mine and three in
the gates.

**Mine.** Three `FromMyWork` blocks said moving monetisation into embedded
in-app flows "cut effective CAC by roughly 60 to 70%". The library entry
(`exp-044`) says **25 to 30%**. I had written a number the entry does not
contain, in Yogesh's first-person voice, on three pages. G03's per-number
experience exemption caught it, which is the check working exactly as intended:
the exemption is per-number rather than per-block precisely so a block cannot
smuggle in a figure the entry never held. Every other `FromMyWork` paraphrase in
the batch was then re-checked against its entry and eight more were rewritten —
none had invented a number, but several had added claims the entry did not make
(`exp-019` "retained better than anyone acquired by advertising", `exp-054`
"never paid back inside the retention window", `exp-014` "contacted at a random
point"). Paraphrase drift in a first-person block is the same class of problem as
a wrong number, so they are now all written from the entry's own claim.

**Three mis-parses in G03**, all of which failed pages that were correctly
sourced:

1. Scale suffixes were not read. `$100K` matched as `$100`, `₹9.59 crore` as
   `9.59`. Both then failed against a fact carrying the figure in full. Fixed on
   both sides, including the Indian scale words, because G15 requires the rupee
   counterpart and nobody writes ₹9,58,90,000 in running prose.
2. Scale *words* in fact claims were not read either, so a claim saying "between
   1 million and 30 million dollars ARR" did not match a page's `$1M to $30M`.
3. The fx exemption covered research facts but not experience numbers, so
   converting `₹590` from an entry to `$6.15` — which G15 demands — read as
   unsourced. G12 sources the original; the conversion of it is sourced too.

Also found: `Fact.excerpt` is capped at 200 characters and 25 words, and
`PageMeta.meta_description` at 155. Both fail at load and take the whole gate run
down before any page is judged, so `author.py` now checks them itself, along with
G10's title and keyword rules.

Standing note for later batches: the gate's sentence splitter deliberately
refuses to break after a digit, and it will not break before a `##` heading. A
money sentence that ends on a number therefore merges with whatever follows, and
G15 reads the merged text as carrying one currency only. Do not end a sentence on
a figure.

## D7 — three more wiring gaps and a schema/contract contradiction (30 September 2026)

Found while building the first hubs.

1. **`renderPage` hardcoded `picks={[]}`.** 01 §5 says hub picks live in
   `content/hubs/<hub>.json` and are curated by hand, never auto-sorted. Nothing
   read that file, so every hub would have rendered its index with no start-here
   row. Now read, with an absent file treated as "not curated yet" rather than an
   error — a hub is useful before it is curated.

2. **`author.py` could not write a single-segment URL.** `/case-studies` is
   `content/case-studies.json`; the old path logic produced
   `content/case-studies/case-studies.json`, which loads as
   `/case-studies/case-studies` and fails the inventory check. The path helper is
   now the inverse of `loader.urlForFile` rather than an approximation of it.

3. **`PageMeta` rejected a link role its own contract requires.** `internal_links[].role`
   allowed hub, lateral, bofu, proof, tool and related. `requiredLinkRoles()` in
   gates/contracts.ts requires `reference` on every BOFU page (01 §C4: a BOFU page
   links to at least one case study and one benchmark or teardown). So a BOFU page
   that satisfied the contract failed to load at all. The contract is right and
   the enum was short; `reference` added.

4. **The pre-flight's word bands were hand-copied and had drifted.** `tool` was
   500–900 against the contract's 700–1100, `playbook` 1200–2200 against
   1800–3000, and case-study, teardown, benchmark-hub and india were all wrong
   too. A pre-flight that passes a page the gate will fail is worse than none, so
   `author.py` now parses the bands out of `web/lib/gates/contracts.ts`, and the
   link-role enum out of `schemas.ts`. It refuses to run if it cannot read either.

The pre-flight also grew G09's FAQPage rule and G16's CTA-context rule, both of
which had only been failing after a full gate run.

## D8 — five gate defects found by migrating the published case studies (30 September 2026)

The 30 case-study write-ups already exist on pmyogesh.com as React components. They
are Yogesh's own first-person account of his own work, so they were converted rather
than rewritten (`seo/scripts/migrate_case_studies.py`). Running them through the
gates found five implementation defects, all of which had been failing correct pages.

1. **G12 forbade what the case-study contract requires.** 01 §B5 restricts
   first-person prose to `FromMyWork` blocks; the case-study contract requires "my
   role" in the answer box and "what I'd do differently" as a section. Neither can
   live in a 60–150-word library block. A case study is by definition an account of
   Yogesh's own work, so the restriction has nothing to protect there. It is now
   skipped for that archetype, and replaced by a requirement that the page declare
   the experience entries it draws on — which G03's per-number exemption then
   enforces.

2. **`requiredBlocks` held 01's full section list, so G01 demanded a citation
   behind an opinion.** G01 fails a page whose `block_coverage` leaves a named block
   unsupported, and the case-study list included `what_id_do_differently`,
   `applicability` and `cta`. No source exists behind a lesson or a CTA band, and a
   gate that asks for one pushes an author toward inventing a fact. prompts/research.md
   rule 7 shows the intent — its example blocks are all evidence-bearing. Narrowed
   for hub, service, service-industry, hire-city and case-study; the full list is
   kept as `sectionsContract` and G07 remains what checks structure.

3. **G07 banded H3 sections as if they were H2s.** 02 §2 bands "every H2 section"
   and separately asks for an H3 break above 450 words, which only makes sense if an
   H3 belongs to its parent. `sections()` closes a section at any heading, so an H2
   whose body sits in H3 subsections counted as almost nothing. `h2Sections()` now
   folds H3s into their parent.

4. **G07 read a table-only section as empty.** `toProse` strips component tags,
   correctly for style gates and wrongly for a word count: a section whose body is a
   sourced FactTable measured 2 words and failed as thin. `tableText()` adds the cell
   text a reader actually sees.

5. **G17 counted JSX string props as quotations.** It scanned the raw body, so a
   FactTable with long row labels failed the 15-word quote limit for containing code.
   It now reads the prose.

Two smaller ones: G03 flagged bare four-digit years, which 02 already excludes in
titles and which are dates rather than claims; and `Fact.claim` caps at 240
characters, which the migration now trims on a word boundary.

**Three defects in the migration itself**, each found by a gate rather than by
reading the output:

- The parser read the files' own helper-component definitions as content, so two
  pages opened with the literal text `{from} → {to}`.
- Most of the writing lives in component *props* (`Phase` carries four actions and a
  result), which a children-only parser dropped entirely.
- Several sections hold their whole content in an inline `{[{…}].map()}` array. The
  parser captured the template and lost the data: one section rendered as
  `{l.title}` followed by `- →{p}`.

Numbers in these pages are Yogesh's own operating measurements with no third-party
source, so each becomes an `own_data` fact referencing the page it was published on.
749 facts across 30 pages. Inventing a research citation for an operator's own figure
would have been the worse failure.

## D9 — the currency pairing corrupted figures, and four more parser/gate mismatches

Fixing the last case-study failures surfaced a bug worse than the failures were.

**`pair_currencies` was splicing conversions into the middle of numbers and
words.** `"a ₹50L decision"` became `"a ₹5 (about $0.05)0L decision"` and
`"costs ₹3,200 less"` became `"costs ₹3,200 l (about $3.34 million)ess"`. Two
causes: a bare `l` was in the scale-suffix set, so the "l" of "less" parsed as
lakh and multiplied the figure by 100,000; and the trailing lookahead excluded
letters but not digits, so the engine backtracked to a single digit whenever the
suffix did not match. Both the magnitude and the text were wrong, on a page
quoting Yogesh's own figures.

**The style and currency passes ran after facts were extracted, not before.** So
the facts described the source text while the page showed the transformed text.
`₹50L` was a fact; the page said `₹50L (about $52,143)`; G03 found a figure with
nothing behind it. Reordered.

**G03 had the same backtracking bug as my regex**, from the same cause — no `L`
in its suffix set and a lookahead that excluded letters only. It read `₹50L` as
`₹5` and failed a page for a figure nobody had written. The extractor's number
regex and G03's are now aligned deliberately: when they disagree about where a
figure ends, one of them invents a problem the other cannot fix.

Also: the banned-phrase substitutions were hand-listed and missed inflections
(`elevate` matched `elevated`, `ecosystem` matched `ecosystems`, `seamless`
matched `seamlessly`), since G13 matches a banned phrase as a substring. They are
generated from the list now, and the migration re-checks against the list rather
than trusting its own substitutions.

Two more: `toProse` stopped at a `>` inside a quoted prop, so a FactTable row
reading `"Triggered >24 hours after"` leaked the whole table into the prose, where
G15 then read the cells as a sentence; and G03's fx exemption used a flat 3%
tolerance, which rejects a correct conversion of a small rupee amount because
rounding to two decimals is a 4% error on three cents.

**Result: all 66 content pages pass every runnable gate.** Only G02 (needs
egress), G19 and G20 (LLM judge) skip.
