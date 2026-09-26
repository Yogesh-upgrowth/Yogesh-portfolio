# Profile creation runbook — Tier 1

Ordered so the accounts that can go live today come first, and the ones that
need weeks of someone else's process are started early enough that their clock
runs while you do the rest.

Every platform below has a matching paste-ready file in `copy/`. Open it
alongside the signup form: headline at 70 and 120 characters, one-liner, bio,
skills, link slots, offers and rates are all pre-written to the bucket.

**URLs are deliberately absent.** No signup URL in `data/platforms.csv` has
been verified against the live site, and writing an unverified URL into a
runbook is how you end up on a phishing clone. Reach each platform from its
own homepage and record the real signup URL into the CSV as you go.

---

## Before you start — decide these once

These three decisions leak into every listing. Changing them later means
editing every profile by hand.

1. **Canonical NAP.** The exact name, address and phone string. It must be
   byte-identical across Clutch, GoodFirms and Google Business Profile or the
   citation signal is wasted. Decide whether you are publishing a street
   address at all before you touch GBP.
2. **Signup email.** You said `yogesh.productmanager@gmail.com`. Use it
   everywhere without exception — a split across two addresses makes account
   recovery and verification a mess two years from now.
3. **Password.** The one shared in chat is weak and would be reused across
   platforms that will hold your government ID and payout details. Generate a
   unique one per platform in a password manager.

---

## Group A — live in one sitting (~15 min each)

Email or phone OTP only. No review, no ID, no interview. Do all five today;
they are the ones that start earning links immediately.

| Platform | Copy file | Gate |
|---|---|---|
| Contra | `copy/contra.md` | OTP |
| Topmate | `copy/topmate.md` | OTP |
| Crunchbase | `copy/crunchbase.md` | OTP |
| LinkedIn Services Marketplace | `copy/linkedin-services.md` | OTP — already logged in |
| About.me | `copy/about-me.md` | Email |

Peerlist (`copy/peerlist.md`) belongs here too if signup is still open.

**After each one:** paste the live profile URL into `data/platforms.csv` under
`sample_public_profile_url`, then run `python3 tools/verify.py`. It records
the real HTTP status, the `rel` attribute on your outbound link, `meta robots`
and the canonical. Only a real fetch flips a row to `verified`. A profile that
turns out to be `nofollow` and `noindex` is not worth maintaining, and you
want to know that in week one rather than month six.

## Group B — start the clock now, finishes later

Submit these today because the waiting is someone else's, not yours.

| Platform | Copy file | What it actually needs |
|---|---|---|
| Upwork | `copy/upwork.md` | Government photo ID matched to a live selfie |
| Toptal | `copy/toptal.md` | 2–4 week screen: English, skills review, live test project |
| Braintrust | `copy/braintrust.md` | Application review |
| A.Team | `copy/ateam.md` | Application review |
| MarketerHire | `copy/marketerhire.md` | Application review |
| Growth Collective | `copy/growth-collective.md` | Application review |
| Flexing It | `copy/flexing-it.md` | Profile review |
| GrowthMentor | `copy/growthmentor.md` | Application review |

Upwork carries a link constraint worth reading before you submit: it permits
external portfolio links but forbids linking to a page that displays contact
information. `pmyogesh.com/contact` shows an email, so the profile links the
case study, not the root. The note is in `copy/upwork.md`.

## Group C — expert networks

`copy/glg.md`, `copy/alphasights.md`, `copy/guidepoint.md`.

Each bio closes with an explicit refusal to discuss confidential employer
information. **Do not edit that sentence out.** It is what gets you through
their compliance review, and its absence is what gets an application held.

These pay $300/hr for calls and are worth the compliance friction, but they
will not produce backlinks — profiles are behind a login. Treat them as
revenue, not SEO.

## Group D — directories, and the one with real teeth

| Platform | Copy file | Blocker |
|---|---|---|
| Clutch | `copy/clutch.md` | **Verifies by phoning your former clients** |
| GoodFirms | `copy/goodfirms.md` | Same review model |
| Google Business Profile | `copy/google-business-profile.md` | Video verification of the workspace |

Clutch is the one to think hard about. LoanWiser, CarInfo, KNIPEX and upGrowth
were employers, not clients — if Clutch calls them, they will say you were
staff. That is not a disqualification, but it is a different conversation than
the one Clutch's process expects, so go in knowing it. Clutch's own help centre
also states the profile's website link is not a follow link, so do it for the
entity signal and Leaders Matrix eligibility rather than for PageRank.

GBP takes categories, not free text. Primary: **Business consultant**. Set it
up as a service-area business.

---

## Fiverr — different shape

`copy/fiverr.md` is built around gig titles rather than a bio, because titles
are what Fiverr's search indexes. Five gigs are drafted, spanning writing and
product:

- Long-form SEO article — $99
- Programmatic SEO opportunity audit — $199
- Product requirements document — $99
- 48-hour growth teardown — $149
- n8n automation workflow — $99

Launch at the entry price for review velocity, raise to the core rate after
ten reviews, and never discount below entry. The rationale is in
`shared/marketplace-services.ts`.

---

## Two standing rules

**Widening stops at the marketplace boundary.** Content writing, PRDs and
automation appear on Fiverr, Upwork and Contra because marketplace search is
category-based — a profile only surfaces in categories it has a listing in, so
breadth there is free lead volume. None of it goes on pmyogesh.com, where
search rewards being unmistakably about one thing and added content-writing
pages would undo the topical focus the whole build rests on.

**Nothing goes in `shared/profiles.ts` until it is verified.** A profile only
reaches the site's `sameAs` output when it is live, public, fetched, and
confirmed indexable and followable. Listing an unverified profile in structured
data is a claim to Google you cannot back. The build fails if you try.
