# Keyword & Ranking Strategy — pmyogesh.com

_Phase 0 output. Written 2026-09-21. SERP observations come from live searches;
note that the search tool used is US-geolocated, so India-specific SERPs should be
re-checked in Search Console once the site is indexed._

## The honest framing

"Rank #1 on Google" is only a useful goal once you name the query. Three different
things get called "product person searches", and they are not equally winnable:

| What you might mean | Winnable? | Worth it? |
|---|---|---|
| The literal query `product person` | No | **No** — definitional query, SERP is UX Collective / Medium / Forbes / Seedcamp. Nobody typing it is hiring. |
| Head terms like `product manager`, `product consultant` | No | Owned by Atlassian, ProductPlan, Aha!, Coursera, LinkedIn Jobs. A personal site does not displace these. |
| `Yogesh Yadav product manager`, `pmyogesh` | **Yes** | **Highest priority.** This is what a founder types after your LinkedIn DM. You do not currently own it. |

A search for `"pmyogesh" OR "Yogesh Yadav" product growth monetisation consultant`
returned nine unrelated people named Yogesh Yadav and not you. That is the #1 you
can actually get, and it converts.

## Tiered target list

### Tier 1 — Own your own entity (do first, highest ROI)

`pmyogesh` · `Yogesh Yadav product manager` · `Yogesh Yadav CarInfo` ·
`Yogesh Yadav product consultant`

There is no competition for these except name collisions. What was blocking you was
technical, not competitive: every page canonicalised to the homepage, and the
deployed schema pointed its `Organization.logo` and images at replit.com. Both are
fixed. Remaining work is off-site consistency — one LinkedIn URL everywhere, the
same name and job title on every profile, so Google can resolve one entity.

### Tier 2 — Case-study long-tail (your actual moat)

`insurance funnel optimisation case study` · `how to reduce CAC with ML segmentation` ·
`programmatic SEO case study` · `growth loop for repeat users` · `MVP in 7 days`

You have 30 case studies with real, specific numbers. Nobody else can write
"1200% insurance revenue growth in 12 months" with first-hand data. These are
low-volume, low-competition, and high-intent: the reader is a founder with the
same problem. This is where content already exists and simply needed to be
indexable.

### Tier 3 — Operator framework queries (beatable, real volume)

`north star metric examples` · `funnel drop-off analysis` · `how to reduce CAC` ·
`pricing strategy framework` · `activation metrics`

These SERPs are held by SaaS content-marketing blogs — UXCam, Quantum Metric,
Customer.io, Plane, Growth Gorilla — plus agencies. That is mid-tier competition,
not Coursera-tier. They rank with generic advice and no proprietary data. Your
advantage is that you can answer the same question and attach a real number and a
case-study link. `productgrowth.in` ranking for `north star metric` shows a niche
operator site can win these.

### Tier 4 — Hiring intent (low volume, highest value per visit)

`hire a product growth consultant` · `fintech product consultant India` ·
`monetisation consultant for startups` · `product growth consulting India`

Tens of searches a month, not thousands — but these are people with budget. `/contact`
now carries the service description, engagement model and FAQ needed to compete.
Competition is Toptal and Upwork category pages, which rank on domain strength, not
on being a better answer.

### Tier 5 — Deprioritise

`product manager salary India` · `product manager interview questions` ·
`how to become a product manager` · `product manager roadmap`

These SERPs are upGrad, Masai, GUVI, Scaler, BrainStation, Hirist — DA 70-90 course
sellers whose business model is ranking for these terms. They will outspend and
out-link a portfolio site indefinitely.

**This matters, because 18 of your 56 blog posts (32%) are in `PM Career` — your
largest category is aimed at your least winnable cluster.** Those posts are not
wasted: they demonstrate expertise and support the entity. But they should not be
where new writing effort goes.

## Where the content gaps are

Current distribution:

| Blog category | Posts | Cluster |
|---|---|---|
| PM Career | 18 | Tier 5 — saturated |
| AI & Product | 11 | Tier 3 |
| Growth & SEO | 8 | Tier 2/3 — **your moat, under-weighted** |
| Founder Notes | 8 | Tier 2 |
| Experiments | 8 | Tier 3 |
| Comparisons | 3 | Tier 2 |

| Case study category | Studies |
|---|---|
| Machine Learning | 8 |
| Growth | 8 |
| Product | 6 |
| SEO | 4 |
| Design | 4 |

The imbalance is the finding: the categories carrying proprietary data (Growth &
SEO, Comparisons) are the smallest, and the saturated category is the largest.

## Structural opportunity: topic hub pages

`/case-studies` filters by category in the browser only — the categories have no
URLs, so there are no indexable topic pages. Thirty case studies with strong data
all sit one click below a single index page.

Hub pages per topic (`/case-studies/growth`, `/case-studies/machine-learning`, …)
would each target a mid-tail term, give the case studies a second inbound link from
a topically-relevant parent, and create somewhere for Tier 3 posts to link into.
This is the highest-leverage new build because it uses content that already exists.

## Recommended order of work

1. **Ship the technical fixes** (done — see the commits on this branch) and submit
   `sitemap.xml` in Search Console. Nothing else matters until pages are indexable.
2. **Fix off-site entity consistency** — one LinkedIn URL, matching name/title
   across LinkedIn, X, GitHub, any guest posts.
3. **Build topic hub pages** over the existing case studies.
4. **Write Tier 3 posts that cite Tier 2 data** — the framework question answered
   with your number, linking to the case study that produced it.
5. **Leave Tier 5 alone.** Maintain what exists; do not add to it.

## What SEO cannot do here

Ranking for the terms in Tier 1, 2 and 4 is realistic within a few months of being
indexed. Tier 3 is a 6-12 month effort that depends on earning links, not just
publishing. No amount of on-page work ranks a personal site for `product manager`
or `product person` — and those rankings would not produce clients anyway.
