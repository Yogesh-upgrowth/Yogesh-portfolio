# 04 — Authority and distribution

Pages don't rank or get cited on a domain nobody links to and an author nobody can find. This document is the other half of the plan. Owner: Yogesh, ~45 min/day + one half-day a month. Tooling: reuse the TripMojo n8n syndication and community-listening workflows with new sources.

## 1. Entity setup (Wave 0, one-time, ~1 day)

Goal: every engine resolves "Yogesh" + "pmyogesh" to one person with one description.

| Item | Spec |
|---|---|
| Canonical name and role line | One spelling of the full name everywhere [VERIFY the exact name you use publicly]. Role line = the positioning line from 00 §2, verbatim. |
| 40-word bio | Same text on `/about`, LinkedIn, X, Topmate, newsletter, Crunchbase, Product Hunt, podcast one-sheets. Contains: role line, two numbers (permission-tagged), TripMojo founder, Jaipur. |
| Headshot | Same image (and same crop) everywhere; also `Person.image` in schema. |
| `/about` | Person schema with `sameAs` to every profile below; timeline (CarDekho → CarInfo → Appy Pie → Loanwiser → TripMojo → consulting) [VERIFY order/dates]; "how I verify numbers on this site" section; press/podcast mentions as they accrue. |
| Profiles to align | LinkedIn (creator mode on; featured = 3 pages), X, Topmate, newsletter (Substack or equivalent), Crunchbase person, Product Hunt maker, Peerlist, Reddit (real name, no promo), YouTube (only if the teardown video loop in §3 starts), Clutch/GoodFirms consultant listing. |
| Google Business Profile | Only as a service-area business from Jaipur if you actually want local calls; never for the 26 other cities. |
| Newsletter | Weekly, "one teardown, one number, one decision". Signup is the secondary CTA on all MOFU pages. |

## 2. Per-publish distribution loop (every indexable batch)

`publish.ts` writes a kit to `reports/<batch_id>-distribution.md` per page: a LinkedIn post (120–180 words, the verdict + one number + the chart), an X thread (5 posts), a newsletter item (60 words), two community-answer drafts (question-shaped, page as reference, not a link drop), and a "notify the subject" email for teardowns/compares.

Weekly rhythm (Tue–Thu publish days):

| Day | Action (≤45 min) |
|---|---|
| Publish day | LinkedIn post for the best page of the batch (with the chart as image); X thread same day. |
| +1 | Newsletter item queued; 1 community answer where the question already exists (Reddit r/ProductManagement, r/SaaS, r/androiddev, r/iOSProgramming, r/startups, r/IndiaStartups, Indie Hackers, Hacker News for teardowns, LinkedIn groups, Peerlist, Substack Notes). Reference the page only when it answers the question better than the comment can. |
| +2 | Second community answer. Teardown subjects notified (founder/PM on LinkedIn or email): "I published a teardown of X's pricing; happy to correct anything." Many share it. |
| +7 | Check GSC first queries; if a page gets impressions for a question you didn't target, add that question to the FAQ in the next refresh. |

Automation (n8n, from TripMojo): RSS of `indexable` pages → drafts queue in a Notion database → you approve → LinkedIn/X post. Community listening: keyword alerts for "[app] pricing", "paywall", "trial to paid", "UPI autopay", "fractional CPO" on Reddit/HN/X → daily digest → you answer 2/week minimum per active hub.

Minimums: 3 LinkedIn posts/week, 2 community answers/week, 1 newsletter/week. Log in `data/distribution-log.csv` (date, page_id, channel, url).

## 3. Link acquisition — target +5 referring domains/month from Wave 2

Ranked by expected links per hour of effort.

1. **Citable assets.** Tools and benchmark hubs carry a "Cite this" block (one-line citation + embed snippet for the chart). Benchmarks and pricing-examples publish their tables as CSV under CC BY 4.0 with a method note — people link to data they can reuse.
2. **Quarterly data study.** "India subscription pricing index" from `data/pricing/*` (24 categories, ~200+ apps): median INR/USD price by category, annual discount, India/US ratio, quarter-over-quarter change. One page (`/pricing-examples/india-subscription-pricing-index-<quarter>`), one chart pack, a 300-word press note. Pitch list: Inc42, YourStory, Entrackr, ET Tech, Mint, Moneycontrol, The Ken, The Morning Context, Medianama (policy angle), Business of Apps, Mobile Dev Memo, RevenueCat and Adapty blogs (they cover pricing data), TechCrunch India desk (long shot). [VERIFY current editors/desks before pitching.] Second study in Q2: "Paywall timing in the top 64 apps" from the onboarding teardowns.
3. **Teardown subject notification** (§2). Track share rate; prioritise apps whose teams are active on LinkedIn/X.
4. **Podcasts, 2/month.** Product/growth/startup podcasts in India and globally; pitch is a teardown or the data study, not "my journey". Ask for the site link in show notes. Podcast transcripts get pulled into AI answers — say the site name out loud once.
5. **Guest posts, 1/month,** only on sites whose readers hire consultants or run apps (RevenueCat/Adapty/Superwall blogs, Mind the Product, Product Coalition, Lenny-adjacent newsletters via guest issues, Indian founder newsletters). Original angle each time; canonical stays on their site; one contextual link to a benchmark or tool.
6. **Quote requests:** Qwoted / Featured / Connectively (and Indian journalists' open calls on X). Answer with a number and a source; link back when they publish.
7. **Talks:** ProductTank (Bengaluru, Mumbai, Delhi, Jaipur if active), college and accelerator sessions (they link from event pages). Slides carry the URL.
8. **Directories and partner pages** (low effort, low value, still worth 1 hour): Clutch, GoodFirms, Topmate, Superpeer; RevenueCat/Adapty/Superwall partner or expert directories if they list independent consultants [VERIFY availability].
9. **Reciprocal expertise, not reciprocal links:** interview 1 founder per month for a teardown or an India page (their quote, with permission = an `interview` fact). They share; some link.

Never: paid links, link exchanges, PBNs, "resource page" spam, mass outreach templates, sponsored posts disguised as editorial.

## 4. Citation engineering that stays inside the policy

The May 2026 change made spam policy the gate for AI citations, so there is no trick layer — only being the clearest, most specific, most verifiable source.

- **Entity consistency** (§1) so the author is a resolvable person with a resolvable specialty.
- **Answer-first sections** (01 B1–B2): the 60-word answer the engine wants exists on the page, under the question it will be asked.
- **Unique numbers:** our own datasets (pricing maps, teardown observations recorded with device/date) are things no other site has; engines cite what only you have.
- **Quotable facts with dates:** every fact carries "verified <date>" and a source; engines and journalists both prefer dated claims.
- **Open data with a licence:** CSV downloads under CC BY 4.0 with a citation line.
- **Real-identity community presence:** answers on Reddit/HN/LinkedIn under your name that reference the pages when relevant; these threads are already being pulled into AI answers.
- **Spoken presence:** podcasts and talks (transcripts are indexed).
- **What we do not do:** FAQ walls, hidden text, "According to [our brand]" sentences seeded for engines, fake reviews, AI-generated "community" posts, mass-produced LinkedIn articles mirroring the pages, reciprocal citation rings.

## 5. Conversion loop

- **Newsletter:** weekly; each issue = one teardown, one number (from a benchmark or pricing map), one decision (from `/decisions`), one line about a service. Goal: 1,000 subscribers by month 6 (from template gates, tool result emails, page CTAs).
- **Lead magnets by archetype:** templates (12 gated), tool "email me this result", the quarterly pricing index PDF.
- **CTA copy rules** (01 B7): name the context; promise a concrete next step ("30-minute pricing review — you'll leave with 3 experiments").
- **Qualification:** the `/work-with-me` form asks stage, MAU/ARR band, and the problem; responses route to a 3-email follow-up (day 0: booking link + the most relevant case study; day 3: the matching benchmark page; day 10: the matching decision page).
- **Feedback into content:** every lead's landing archetype and stated problem is logged; monthly, the top 3 problems get a refresh of their pages and a new decision page if none exists.
- **Case-study pipeline:** every engagement ends with a 1-page results note and a permission request; approved ones become `/case-studies` pages (the 2 placeholders in the inventory wait for this).

## 6. 90-day calendar (from Wave 0 start)

| Weeks | Distribution and authority work |
|---|---|
| 1–2 | Entity setup (§1). Newsletter live with 1 issue. Experience-capture session. Podcast pitch list built (20 shows). |
| 3–6 | Wave-1 batches publish. Loop (§2) runs daily. Notify 4 teardown subjects. 2 podcast pitches/week. First quote-request answers. |
| 7–10 | First data-study collection pass (price checks for 8 categories). 1 guest post placed. First podcast recorded. Community answers ≥2/week. |
| 11–13 | Q1 pricing index published + pitched to 12 outlets. Talk at one ProductTank. Referring-domain review: if <10 new domains since week 3, double community and podcast effort before starting Wave 3. |

## 7. Measurement

Monthly: referring domains (new/lost), links by tactic (§3 numbers), newsletter subscribers and open rate, community answers posted and their upvotes, podcast episodes, press mentions, tracked-prompt citations (25), leads by landing archetype. Report lives in `reports/monthly-<date>.md` alongside the SEO KPIs from 00 §5. If referring domains are below +5/month for two consecutive months, the next wave is delayed and the effort moves to §3 items 2–4.
