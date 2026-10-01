# Cutover — pointing production at the Next.js app

**The order matters more than anything else on this page. Publish first, then cut
over. Reversing the two loses the rankings the whole migration exists to move.**

Run `pnpm cutover:check` before touching the Vercel setting. It answers this in
one command and refuses to say "safe" until it is.

## What production serves today

`vercel.json` sets `buildCommand: npm run build:static` and
`outputDirectory: dist/public` — the legacy Vite site, 132 prerendered routes.
The Next.js app in `web/`, which holds all 98 new pages, is not built or served.
Merging content changes nothing visitors see. The `legacy-build` CI job guards
that legacy build, because it is what is live.

## Why the order is the whole risk

Every page ships `<meta name="robots" content="noindex,follow">` until
`pnpm publish` flips it — CLAUDE.md §1.3, enforced in `lib/schema/index.ts`.

The Next build also serves 127 redirects from the old URLs. So if the Root
Directory is switched while the pages are still noindex:

1. A ranking URL stops serving and 301s to its new home.
2. Google follows the redirect and finds `noindex`.
3. It drops the destination — and the old URL is already gone.

The redirects exist to carry equity across. In this order they discard it. As of
2026-10-01 that is **79 redirects pointing at 61 noindex pages**, measured by
`pnpm cutover:check`.

This is not recoverable by flipping the setting back quickly: the old URLs are
served by a different build, and re-earning dropped rankings takes months.

## The order

1. **Review the pages.** All 98 are `status: drafted`. `pnpm publish` refuses
   anything not `reviewed`.
2. **Clear the gate blocks.** 38 pages are blocked by G02 — 25 on the
   majority-primary rule, needing re-research. `pnpm publish` now re-runs the
   gates and refuses any page with a fail or block.
3. **Publish**: `pnpm publish --batch <id>`. This needs ≥3 inbound links per page
   and a human confirmation that no Google core or spam update is in its first 7
   days of rollout. That confirmation cannot be skipped by a flag, by design.
4. **Verify**: `pnpm cutover:check` reports safe, and `pnpm launch:check --base
   <url>` still reports 127/127 redirects and 64/64 link targets.
5. **Then** set Vercel → Settings → Build & Deployment → **Root Directory =
   `web`**, framework Next.js.

Step 5 is the only one that is not a repo change, and it is the irreversible one.

## Access note

The session that wrote this could not read or change the Vercel project: the API
lists the project (`prj_rKjxo6xETJrgK6mz4j06IZYV734G`, team
`team_EQJr36N4g8l8OhIk50cdFnyT`) but returns 403 on it — *"Not authorized:
Trying to access resource under scope `yogesh4`. You must re-authenticate to this
scope."* So step 5 is Yogesh's regardless. That is the safer arrangement: the
irreversible step sits with the person who can judge whether steps 1–4 are
genuinely done.

## Why this is not a CI gate

`pnpm cutover:check` exits non-zero today and should — nothing is published yet.
Wiring it into CI would make every build red for a state that is correct, and a
permanently red check is one people learn to ignore. It is a pre-cutover command,
and `web/tests/cutover.test.ts` keeps its logic honest.
