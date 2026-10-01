#!/usr/bin/env python3
"""Batch w1-hub-01 — the five hubs blocking launch, plus two orphaned redirect targets.

`pnpm launch:check` reported 79 of 127 redirects landing on pages that do not
exist, grouped under /case-studies (40), /benchmarks (20), /playbooks (12),
/services (5), /glossary/omtm and /tools/monetization-health-score. The hubs
themselves are the cheapest of those to build and unblock the most redirects, so
they come first.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402

BOA = ("https://www.businessofapps.com/data/india-app-market/",
       "India App Market Statistics", "businessofapps.com", "2026")
ST = ("https://sensortower.com/blog/india-mobile-market-q1-2026",
      "India Mobile App Market Q1 2026", "sensortower.com", "2026")
CT = ("https://www.conversionteam.com/ab-test-win-rate/",
      "A/B Test Win Rate: Benchmarks From 2,288 Audited Tests", "conversionteam.com", "2026")
AW = ("https://advertorialwizard.com/blog/ecommerce-ab-test-benchmarks-2026",
      "E-commerce A/B Test Benchmarks 2026", "advertorialwizard.com", "2026")

NEW = [
    fact("f-hub-01", "India's app market earned 3.8 billion dollars in 2024, up 15.1% on the year before",
         "3.8", "USD billion", BOA,
         "The Indian app market earned $3.8 billion revenue in 2024, a 15.1% increase on the year prior.",
         False),
    fact("f-hub-02", "India's app revenue passed 300 million dollars in the first quarter of 2026, up 33%, on 6.2 billion downloads with non-gaming apps at 72%",
         "300", "USD million", ST,
         "In Q1 2026 India's mobile app market revenue surpassed $300M, up 33% year-over-year, on 6.2 "
         "billion downloads, non-gaming apps at 72%."),
    fact("f-hub-03", "Indian in-app purchase spending passed 1 billion dollars in 2025 and is expected to reach 1.25 billion by the end of 2026",
         "1", "USD billion", BOA,
         "In-app purchase spending by Indians passed one billion dollars in 2025, expected to rise to "
         "$1.25 billion by the end of 2026.", False),
    fact("f-hub-04", "India has 783 million smartphone users, the second largest base in the world",
         "783", "million", BOA,
         "There were 783 million smartphone users in India, making it the second largest country for usage.",
         False),
    fact("f-hub-05", "The Broadband India Forum projects the app economy at around 12% of India's GDP by 2030",
         "12", "%", BOA,
         "The Broadband India Forum has predicted the app economy could be worth around 12 percent of "
         "India's GDP by 2030.", False),
    fact("f-hub-06", "Across 2,408 audited tests, 17.4% of A/B tests reached statistical significance with a winning variant",
         "17.4", "%", CT,
         "17.4% of A/B tests reached statistical significance with a winning variant across 2,408 tests."),
    fact("f-hub-07", "Across 90-plus European e-commerce brands, 36.3% of tests produced a statistically significant win",
         "36.3", "%", AW,
         "36.3% produced a statistically significant win across thousands of A/B tests on 90+ European "
         "e-commerce brands.", False),
    fact("f-hub-08", "Winning tests average an 8.4% lift with a 6.1% median", "6.1", "%", CT,
         "The average lift on winning tests is 8.4%, median 6.1%."),
    fact("f-hub-09", "Winning tests delivered a median 1.88% conversion uplift and 2.77% revenue per visitor uplift",
         "1.88", "%", AW,
         "Winners delivered a median +1.88% conversion rate uplift and +2.77% revenue per visitor uplift.",
         False),
    fact("f-hub-10", "Top-performing programmes run 3 to 5 times more tests than the median, producing 6 to 8 winners a quarter from 36 to 50 tests",
         "3-5", "x", AW,
         "Top-performing brands run 3-5x more tests per year than the median, with 6-8 winning tests per "
         "quarter out of 36-50 tests run.", False),
]

POOL = {**P1, **P2}
POOL.update({f["fact_id"]: f for f in NEW})

# ── Cap-relief research ──────────────────────────────────────────────────────
# Eight facts had reached four and five pages against §C2's cap of three. The
# breach was invisible because gates.ts read fact usage from
# seo/data/facts/index.json, a file that was never generated: readJson returned
# {}, every fact reported one use, and both gates that depend on the count
# passed everything. gates.ts now derives the count from the corpus.
#
# The pool had no headroom left to swap into — of 1,139 researched facts, four
# were under two uses — so these are new sources rather than reshuffled ones.
# Each replaces an over-cap fact on the page where that fact was least central.
ADJ = ("https://ppc.land/adjusts-2026-mobile-app-report-finance-sessions-up-21-gaming-cpi-jumps-30/",
       "Adjust's 2026 mobile app report: finance sessions up 21%, gaming CPI jumps 30%",
       "ppc.land", "2026")
APS = ("https://appstorys.com/blog-Retention-Rates-Mobile-Apps-By-Industry",
       "Retention rates for mobile apps by industry", "appstorys.com", "2026")
CFD = ("https://confidence.spotify.com/blog/ab-testing-bandwidth",
       "A/B test bandwidth: the currency of innovation", "confidence.spotify.com", "2026")
LEX = ("https://leanexperiments.substack.com/p/sample-size-calculation-for-ab-tests",
       "Sample size calculation for A/B tests", "leanexperiments.substack.com", "2026")
UTD = ("https://usetandem.ai/blog/onboarding-metrics-that-predict-revenue-activation",
       "Onboarding metrics that predict revenue activation", "usetandem.ai", "2026")
LRT = ("https://linkrunner.io/blog/install-to-first-revenue-payback-windows-2026",
       "Install-to-first-revenue timing: mobile app payback windows in 2026",
       "linkrunner.io", "2026")
LZW = ("https://www.lazyweb.com/research/how-do-tracked-apps-make-money-subscription-ads-transactions",
       "How do tracked apps actually make money?", "lazyweb.com", "2026")

FIX = [
    fact("f-fx-01", "Strategy game sessions average 37.51 minutes and grew 18%, while casual game sessions rose 15% to 25.92 minutes",
         "37.51", "minutes", ADJ,
         "Strategy game sessions averaged 37.51 minutes and grew 18%, while casual games rose 15% to 25.92 minutes."),
    fact("f-fx-02", "Finance app sessions grew 21% in 2026 while gaming cost per install jumped 30%",
         "21", "%", ADJ,
         "Adjust's 2026 report: finance sessions up 21%, gaming CPI jumps 30%.", False),
    fact("f-fx-03", "E-commerce and retail apps retain 3% to 6% by day 30, above the 2% median other sources report for the same category",
         "3-6", "%", APS,
         "By Day 30, e-commerce or retail apps retain 3-6%.", False),
    fact("f-fx-04", "More than 300 teams run over 10,000 experiments a year across 750 million users in 186 markets, and 42% get rolled back after a guardrail metric flags a regression",
         "42", "%", CFD,
         "300+ Spotify teams run 10,000+ experiments per year across 750 million users in 186 markets; 42% are rolled back after guardrail metrics flag a regression."),
    fact("f-fx-05", "At a 5% baseline, detecting a 50% relative lift needs about 1,700 visitors per variant, a 20% lift about 9,000 and a 10% lift about 36,000",
         "1700", "visitors", LEX,
         "A 5% baseline requires roughly 1,700 visitors per variant for a 50% relative lift, ~9,000 for 20% and ~36,000 for 10%."),
    fact("f-fx-06", "Across 464 companies the median onboarding tour completion is 29%, with the middle half between 15% and 55%",
         "29", "%", UTD,
         "Data from 464 companies shows median tour completion is 29% per company, with the middle half running 15% to 55%."),
    fact("f-fx-07", "Onboarding checklists of three to five steps complete at 67%, against 18% for checklists of ten steps or more",
         "67", "%", UTD,
         "3-5 step onboarding checklists complete at 67% vs 18% for 10+ step checklists.", False),
    fact("f-fx-08", "Among 686 tracked apps, subscriptions are the primary model for 418, or 61%, against advertising for 176, or 26%",
         "61", "%", LZW,
         "Among tracked apps, subscriptions account for 418 of 686 apps (61%), more than double advertising at 176/686 (26%).", False),
]
FIX += [
    fact("f-ih-01", "Across more than 145,000 installs the median time from install to first revenue is about 48 hours, with the 90th percentile near 14 days",
         "48", "hours", LRT,
         "Median time from install to first revenue is approximately 48 hours across over 145,000 installs; the 90th percentile stretched to roughly 14 days."),
    fact("f-ih-02", "About half of users who ever pay do so within two days of installing, and 90% within two weeks",
         "50", "%", LRT,
         "Roughly half of revenue-converting users do so within two days of install, and 90% convert within two weeks.", False),
]
POOL.update({f["fact_id"]: f for f in FIX})


# G09: FAQPage is required whenever a page carries three or more FAQ entries,
# hub or not, so a hub with an FAQ emits it alongside CollectionPage.
HUB_SCHEMA = ["CollectionPage", "ItemList", "FAQPage"]
# G16 wants the primary label to name the page's own subject, so each hub sets
# its own rather than sharing one generic band.
HUB_CTA = {"primary": {"label": "Get a growth and monetisation review", "href": "/work-with-me"},
           "secondary": {"label": "See the case studies", "href": "/case-studies"}}

# 01 §B1: a hub's blocks are the curation, so block_coverage names which facts
# stand behind each one rather than leaving the contract unevidenced.
def cover(intro, cards, index, verified, cta):
    return {"editorial_intro": intro, "start_here_cards": cards,
            "filterable_index": index, "recently_verified": verified, "cta_band": cta}


PAGES = [
  dict(
    id="hub-0003", url="/case-studies", archetype="hub", hub="case-studies", funnel="BOFU",
    title="Product Growth Case Studies with Numbers and Method",
    meta_description="Case studies from fintech, insurance and consumer apps, each with the numbers, the method and what did not work. Sourced, dated and decomposed.",
    h1="Product growth case studies", primary_keyword="product growth case studies",
    secondary_keywords=["product management case studies india", "growth case study with numbers"],
    entity_a="case-studies",
    facts=["f-hub-06", "f-hub-08", "f-hub-09", "f-unit-04", "f-unit-21", "f-unit-29"],
    experience=["exp-021"],
    links=L(("/case-studies/carinfo-3-8m-to-45m-mau", "the CarInfo growth case study", "proof"),
            ("/benchmarks/retention", "retention benchmarks", "reference"),
            ("/glossary", "the glossary", "hub"),
            ("/playbooks", "the playbooks", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "work with me", "bofu")),
    visuals=V("case-study-standard",
              "Six reference points that set the bar for a case study on this site: the share of A/B tests that produce a winner, the average and median lift on winners, median conversion and revenue uplift on winning tests, realised year-one lifetime value by app type, the compounded insurance revenue growth figure and India's paying OTT subscriber base, each row carrying its source and verification date",
              "What an honest outcome claim looks like against published ranges. Verified 30 September 2026."),
    faq=[
      dict(q="Are these case studies verifiable?",
           a="Each one names the metric, the period and the mechanism, and separates what was measured from what was inferred. Where a client has not given permission to be named, the context is anonymised and the figures are given as ranges."),
      dict(q="Why decompose the headline numbers?",
           a="Because a single multiple credits the last change with all of the growth. A 1200% revenue figure that compounds a larger base with a 457-times conversion improvement is two findings, and only one of them transfers to another product."),
      dict(q="What makes an outcome claim credible?",
           a="A stated counterfactual and a plausible size. Winning A/B tests deliver a median 6.1% lift, so a case study claiming a tripling from a copy change is describing something other than the copy change."),
    ],
    schema_types=HUB_SCHEMA,
    cta={"primary": {"label": "Get a case study of your own funnel", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    unique_value="Sets each case study against the published distribution of experiment outcomes, so a reader can judge whether a claimed result is large, ordinary or implausible — which no competing case-study index does.",
    block_coverage=cover(["f-hub-06", "f-hub-08"], ["f-unit-04", "f-unit-21"],
                         ["f-unit-29"], ["f-hub-09"], ["f-unit-21"]),
    body="""
<AnswerBox>
These are product growth case studies with the numbers attached, from fintech,
insurance and consumer apps in India. Each one names the metric, the period and
the mechanism. For scale, winning A/B tests deliver a median 6.1% lift. Any claim
far above that needs a structural explanation, not a better headline.
</AnswerBox>

<FactTable
  id="case-study-standard"
  caption="What an honest outcome claim looks like against published ranges"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["A/B tests producing a significant winner", "17.4% of 2,408 audited tests"], factId: "f-hub-06" },
    { cells: ["Lift on winning tests", "8.4% average, 6.1% median"], factId: "f-hub-08" },
    { cells: ["Median uplift on winners, conversion and revenue per visitor", "1.88% and 2.77%"], factId: "f-hub-09" },
    { cells: ["Year-one realised LTV, AI against non-AI apps", "$30.16 against $21.37 (about ₹2,892 against ₹2,049)"], factId: "f-unit-04" },
    { cells: ["Insurance revenue growth, decomposed", "1200%, compounding a larger base with a 457x conversion gain"], factId: "f-unit-21" },
    { cells: ["India OTT paying base", "119M paying of 601M users"], factId: "f-unit-29" },
  ]}
/>

## What these case studies cover

Consumer fintech, motor insurance attach, credit routing, marketplace supply and
content-led acquisition, mostly in India. Each one starts from a diagnosed
problem rather than a shipped feature, because the diagnosis is the transferable
part.

Every case study says what it measured, over what period, and which parts are
inference rather than observation. Where a client has not given permission to
appear by name, the context stays anonymous and the figures appear as ranges
rather than point estimates.

## Start here

Three cover the range. The CarInfo growth study has the largest scale and the
clearest decomposition. The motor insurance study is the one where the funnel had
several multiplicative leaks rather than one. The credit routing study is the one
where the model mattered less than the routing rule it fed.

If you want to know whether this work applies to your product, read the one
closest to your funnel shape rather than the one closest to your industry.

## How to read the index

Filter by outcome rather than by sector. A retention problem in insurance and a
retention problem in ed-tech share more mechanics than two insurance problems
with different shapes.

Each entry shows the primary metric moved and the period. Realised year-one
lifetime value differs by 41% between AI and non-AI apps, so the comparable set
is products with a similar monetisation shape, not a similar label.

## What recently verified means

Every number carries the date its source last got checked. Published figures go
back on a re-verification schedule. Figures from my own work stay fixed at the
period they describe, because that period does not move.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. The 1200% insurance
revenue growth compounds a larger user base with a 457-times conversion
improvement, and one number would credit the last change with all of it.
</FromMyWork>

## Where this leads

If a case study here matches the problem you have, the next step is a diagnosis of
your own funnel rather than a copy of someone else's fix. The mechanism transfers
between products. The numbers rarely do, because they depend on a base, a price
and a market that are yours rather than mine. Start from the diagnosis and the
comparable figures follow.
""",
  ),

  dict(
    id="hub-0005", url="/benchmarks", archetype="hub", hub="benchmarks", funnel="MOFU",
    title="Product Monetization Benchmarks, Sourced and Dated",
    meta_description="Retention, churn, conversion, ARPU and pricing benchmarks by industry, each figure carrying its source and the date it was verified.",
    h1="Product monetization benchmarks", primary_keyword="product monetization benchmarks",
    secondary_keywords=["app benchmarks by industry", "india app benchmarks"],
    entity_a="benchmarks",
    facts=["f-hub-02", "f-unit-01", "f-unit-03", "f-fx-08", "f-unit-30", "f-unit-37"],
    experience=["exp-048"],
    links=L(("/benchmarks/retention", "retention benchmarks", "lateral"),
            ("/glossary", "the glossary", "hub"),
            ("/india", "monetising in India", "related"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/case-studies", "the case studies", "lateral"),
            ("/work-with-me", "a benchmarking review", "bofu")),
    visuals=V("benchmark-index",
              "Six representative figures from across this hub: India's quarterly app revenue and download volume, average mobile subscription ARPU, the regional refund-rate gap, gross revenue retention by contract size, India's projected streaming ARPU and United States cost per install by platform, each row carrying its source and verification date",
              "A sample of what this hub indexes. Verified 30 September 2026."),
    faq=[
      dict(q="How current are these benchmarks?",
           a="Each figure carries the date its source was last checked, and anything older than 90 days is re-verified before it can be published. Price figures run on a tighter 45-day cycle."),
      dict(q="Why do benchmarks differ so much between sources?",
           a="Mostly because they measure different populations. A download-to-paid rate and a trial-to-paid rate describe the same product and differ by an order of magnitude. Every figure here states its denominator."),
      dict(q="Are there India-specific benchmarks?",
           a="Where they exist and where they differ, yes. India's projected streaming ARPU is $9.02 against a $15 to $20 monthly figure in the US, and the regional refund rate is 7.7% against 3.4% in North America."),
    ],
    schema_types=HUB_SCHEMA,
    cta={"primary": {"label": "Get a benchmarks review of your product", "href": "/work-with-me"},
         "secondary": {"label": "Browse the glossary", "href": "/glossary"}},
    unique_value="States the denominator beside every figure and carries India rows where a published India figure exists, rather than presenting one global median per metric as though products in different markets were comparable.",
    block_coverage=cover(["f-hub-02"], ["f-unit-01", "f-fx-08"], ["f-unit-37"],
                         ["f-unit-03"], ["f-unit-30"]),
    body="""
<AnswerBox>
Product monetization benchmarks by industry, each figure carrying its source and
the date it was checked. India sits alongside global rather than under it. Average
mobile subscription ARPU is $8.41, about ₹806. India's projected streaming ARPU is
$9.02, about ₹865, and it is published annually rather than monthly.
</AnswerBox>

<FactTable
  id="benchmark-index"
  caption="A sample of what this hub indexes, and what each figure measures"
  columns={["Metric", "Figure"]}
  rows={[
    { cells: ["India app revenue and downloads, Q1 2026", "over $300M, up 33%, on 6.2 billion downloads"], factId: "f-hub-02" },
    { cells: ["Average mobile subscription ARPU", "$8.41 (about ₹806)"], factId: "f-unit-01" },
    { cells: ["Median refund rate, IN/SEA against North America", "7.7% against 3.4%"], factId: "f-unit-03" },
    { cells: ["Primary monetisation model, 686 tracked apps", "subscriptions 61%, advertising 26%"], factId: "f-fx-08" },
    { cells: ["India streaming ARPU, projected 2026", "$9.02 (about ₹865)"], factId: "f-unit-30" },
    { cells: ["US cost per install, fintech and utilities", "$11.62 and $2.46 on iOS (about ₹1,114 and ₹236)"], factId: "f-unit-37" },
  ]}
/>

## What this hub covers

Retention, churn, conversion, ARPU, pricing and acquisition cost, split by
industry and by market. Each metric has its own page with the figures, their
sources and the population each one describes.

The organising rule is that a benchmark without a denominator is not a
benchmark. India's app market recorded 6.2 billion downloads in the first quarter
of 2026 with non-gaming apps at 72%, and a conversion rate measured against
downloads is not comparable to one measured against trials.

## Start here

Three entry points depending on the question. Retention benchmarks if you are
trying to work out whether your curve is normal. Churn benchmarks if you are
trying to size how much of your loss is recoverable. ARPU and pricing if you are
setting a price for a market you have not sold into.

The monetisation model table is the one to read first, because it bounds every
other number here. Among 686 tracked apps, subscriptions are the primary model for
61% and advertising for 26%, so most published benchmarks describe subscription
economics whether or not they say so.

## How to read the index

Match the market before the metric. Cost per install in the United States runs
$11.62 for fintech on iOS and $2.46 for utilities, roughly ₹1,114 and ₹236.
Neither figure transfers to India without adjustment, and the adjustment is not a
single multiplier.

Filter to your own category and your own platform split. A blended cross-platform
figure hides which half of a base is leaving. Then check the date before the
number, because a stale benchmark and a wrong benchmark do the same damage to a
target.

## What recently verified means

Every figure carries the date its source last got checked. Anything older than 90
days goes back for re-verification before publication, and price figures run on a
45-day cycle because they move faster. Where two published figures disagree, both
appear and the page says so.

<FromMyWork exp="exp-048">
One measurement framework spanning 20+ growth, retention and monetisation metrics
made executive decisions roughly twice as fast. Until then each team reported a
number defined its own way.
</FromMyWork>

## Where this leads

A benchmark tells you whether you have a problem. It does not tell you which one.
If a figure here puts your funnel below its category, the next step is finding the
step where the loss happens, and that needs your own cohort data rather than
anyone's median. The benchmark sets the question. The funnel answers it. Most teams
skip the first half and start fixing, which is how a pricing problem gets six
months of onboarding work.
""",
  ),
  dict(
    id="hub-0007", url="/playbooks", archetype="hub", hub="playbooks", funnel="MOFU",
    title="Product Growth Playbooks: Retention, Pricing, Activation",
    meta_description="Growth playbooks with the sequence, the decision points and the numbers to check at each one. Written to be run, not admired.",
    h1="Product growth playbooks", primary_keyword="product growth playbooks",
    secondary_keywords=["growth playbook", "retention playbook"],
    entity_a="playbooks",
    facts=["f-hub-06", "f-hub-07", "f-hub-10", "f-unit-08", "f-fx-04", "f-act-06"],
    experience=["exp-047"],
    links=L(("/glossary", "the glossary", "hub"),
            ("/benchmarks", "the benchmarks", "lateral"),
            ("/case-studies", "the case studies", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            ("/work-with-me", "a playbook run with me", "bofu")),
    visuals=V("playbook-reality",
              "Six reference points a playbook has to be written against: the share of A/B tests that produce a winner in two separate audited studies, the testing volume top programmes run, the standing lifetime-value to acquisition-cost bar, the share of companies tracking activation and typical time to value, each row carrying its source and verification date",
              "The odds a playbook is actually working against. Verified 30 September 2026."),
    cta={"primary": {"label": "Run a growth playbook with me", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What makes a playbook different from a framework?",
           a="A playbook has a sequence and a stopping rule. It says what to do first, what to measure before the second step, and when to abandon the sequence. A framework names the boxes and leaves the order to you."),
      dict(q="How many experiments should a playbook expect to lose?",
           a="Most of them. Audited studies put the winning share at 17.4% of 2,408 tests and 36.3% across 90-plus e-commerce brands. A playbook written as though every step works is a plan with no failure budget."),
      dict(q="Do these playbooks assume a large team?",
           a="No. Each one states the smallest version that still produces a readable result, because top programmes run 3 to 5 times more tests than the median and most teams cannot start there."),
    ],
    schema_types=HUB_SCHEMA,
    unique_value="Each playbook carries a failure budget drawn from the published experiment win rates, and a stopping rule, instead of presenting a sequence of steps as though each one lands.",
    block_coverage=cover(["f-hub-06"], ["f-hub-07", "f-unit-08"], ["f-act-06"],
                         ["f-hub-10"], ["f-fx-04"]),
    body="""
<AnswerBox>
These are product growth playbooks with a sequence, a decision point at each step
and a stopping rule. They are written against the real odds: 17.4% of 2,408
audited A/B tests produced a winner. A playbook that assumes every step lands is
a plan with no failure budget.
</AnswerBox>

<FactTable
  id="playbook-reality"
  caption="The odds a playbook is actually working against"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["A/B tests producing a significant winner, 2,408 audited", "17.4%"], factId: "f-hub-06" },
    { cells: ["Significant wins across 90+ e-commerce brands", "36.3%"], factId: "f-hub-07" },
    { cells: ["Testing volume, top programmes against median", "3 to 5 times more, 6 to 8 winners a quarter"], factId: "f-hub-10" },
    { cells: ["Standing LTV to CAC bar", "3 to 1, rising to 4 or 5 to 1"], factId: "f-unit-08" },
    { cells: ["Experiments rolled back after a guardrail regression", "42% of 10,000+ a year"], factId: "f-fx-04" },
    { cells: ["Typical time to value", "about 1 day 12 hours, under 5 minutes to 2 weeks"], factId: "f-act-06" },
  ]}
/>

## What a playbook here contains

A sequence, the number to read before moving to the next step, and the condition
that ends the sequence. Most published playbooks leave the stopping rule out. It is
the part that saves a quarter.

Each one names the smallest version that still gives a readable result. Top
programmes run 3 to 5 times more tests than the median, which means most teams
cannot start where the case studies start.

## Start here

Three, by the problem you have. Retention curve analysis if you do not yet know
whether your curve flattens. Subscription pricing strategy if nobody has tested the
price. Experimentation if you cannot yet tell a win from noise — at the scale where
42% of more than 10,000 experiments a year get rolled back after a guardrail metric
flags a regression, the discipline is catching the losers, not finding the winners.

Start with the one that unblocks measurement, not the one that sounds most
ambitious. Run a pricing playbook without a working activation number and the
result arrives with nothing to attribute it to.

## How to read the index

Every playbook states its prerequisite. Some need a working cohort report, some a
live paywall, some only a spreadsheet. The prerequisite comes first on the page, so
you can rule a playbook out in ten seconds rather than three weeks.

Typical time to value averages about 1 day 12 hours and ranges from under five
minutes to two weeks, so the playbook that fits a simple tool rarely fits an
enterprise platform. Match on product shape rather than company stage.

## What recently verified means

Each playbook carries the date its figures last got checked. The published win
rates it budgets against go on the same re-verification schedule as every other
benchmark here. Where a step's expected effect moves, the step changes, and the
changelog says so.

<FromMyWork exp="exp-047">
Moving four pods off feature output and onto outcome-driven planning raised
roadmap delivery predictability. The change was in what each pod was accountable
for, not in how much they shipped.
</FromMyWork>

## Where this leads

A playbook is worth running when the constraint it addresses is the one you
actually have. If the LTV to CAC ratio already sits past 3 to 1 and payback is
short, a pricing playbook is not the bottleneck and running it will produce a small
win that costs a quarter. Diagnose first, then pick. The diagnosis usually takes
days and the wrong playbook takes months, so the order matters more than the
choice.
""",
  ),

  dict(
    id="hub-0001", url="/services", archetype="hub", hub="services", funnel="BOFU",
    title="Product Growth and Monetization Consulting Services",
    meta_description="Consulting on monetization, retention, pricing and activation for consumer and B2B products, with scope, price and first-six-weeks stated up front.",
    h1="Product growth and monetization consulting services",
    primary_keyword="product growth and monetization consulting services",
    secondary_keywords=["product monetization consultant", "growth consulting india"],
    entity_a="services",
    facts=["f-hub-01", "f-hub-04", "f-hub-05", "f-unit-06", "f-unit-20", "f-act-09"],
    experience=["exp-046"],
    links=L(("/case-studies/carinfo-3-8m-to-45m-mau", "the CarInfo growth case study", "proof"),
            ("/benchmarks/retention", "retention benchmarks", "reference"),
            ("/glossary", "the glossary", "hub"),
            ("/work-with-me", "work with me", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start a conversation", "bofu")),
    visuals=V("services-context",
              "Six reference points behind this practice: India's app market revenue and its growth rate, India's smartphone base, the projected share of GDP the app economy reaches by 2030, median lifetime-value to acquisition-cost by price tier, a decomposed monthly-active-user growth figure and median gross margin by revenue band, each row carrying its source and verification date",
              "The market this practice works in. Verified 30 September 2026."),
    cta={"primary": {"label": "Scope a services engagement", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    faq=[
      dict(q="What do these engagements cost?",
           a="Each service page states a price in both rupees and dollars, at a rate recorded in config and checked on every build. There is no bespoke quoting for the standard engagements."),
      dict(q="Which engagement should I pick?",
           a="The one matching your binding constraint. Median LTV to CAC at the $8.99 to $11.99 monthly tier is 2.5 to 1, so if your ratio is near that the constraint is usually conversion or price rather than acquisition volume."),
      dict(q="Do you work outside India?",
           a="Yes, and the India context is an advantage rather than a limit. India has 783 million smartphone users, and products that monetise there have already solved problems that most Western products meet later."),
    ],
    schema_types=HUB_SCHEMA,
    unique_value="States price, scope and the first six weeks on every service page rather than routing every enquiry through a discovery call, and names the market context with sourced figures instead of asserting expertise.",
    block_coverage=cover(["f-hub-01", "f-hub-04"], ["f-unit-06", "f-act-09"],
                         ["f-hub-05"], ["f-unit-20"], ["f-unit-06"]),
    body="""
<AnswerBox>
These are product growth and monetization consulting services for consumer and B2B
products, priced and scoped in public. India's app market earned $3.8 billion in
2024, about ₹36,438 crore, up 15.1% on the year. Much of that revenue sits with
products that have never tested a price.
</AnswerBox>

<FactTable
  id="services-context"
  caption="The market this practice works in"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["India app market revenue, 2024", "$3.8 billion (about ₹36,438 crore), up 15.1%"], factId: "f-hub-01" },
    { cells: ["India smartphone users", "783 million, second largest base"], factId: "f-hub-04" },
    { cells: ["Projected app economy share of India's GDP by 2030", "about 12%"], factId: "f-hub-05" },
    { cells: ["Median LTV to CAC at $8.99 to $11.99 a month", "2.5 to 1"], factId: "f-unit-06" },
    { cells: ["Monthly actives grown, decomposed into equal thirds", "3.8M to 45M+"], factId: "f-unit-20" },
    { cells: ["Median gross margin, $5M to $50M ARR", "71% to 74%"], factId: "f-act-09" },
  ]}
/>

## What these engagements cover

Monetization strategy, pricing and packaging, retention and lifecycle,
activation and onboarding, and experimentation programmes. Each has its own page
with the scope, the deliverables, the first six weeks and a price.

Every page shows the price in rupees and dollars, at a rate recorded in config and
re-checked on every build. Nothing here hides the cost behind a discovery call.

## Start here

Pick by constraint rather than by title. If lifetime value over acquisition cost
sits near the 2.5 to 1 median for its price tier, the constraint is usually
conversion or price. If gross margin sits below the 71% to 74% median for its
revenue band, the constraint is cost of service. No amount of funnel work reaches
that one.

If the constraint is not yet clear, the monetisation health score narrows it in
about ten minutes without a conversation.

## How to read the index

Each service page names who it is for and, more usefully, who it is not for.
Industry variants exist only where the mechanics genuinely differ. Fintech and
marketplaces carry different compliance and take-rate constraints. Where a variant
would differ only in its examples, there is no variant.

India's app economy is projected at around 12% of GDP by 2030. Several of these
engagements exist because that growth is arriving faster than the pricing and
retention practice around it.

## What recently verified means

Prices carry the date and the exchange rate they were set at. A build fails if a
rupee and dollar pair drifts more than 3% from the recorded rate. Market figures on
this page carry their own verification dates, like every other number here.

<FromMyWork exp="exp-046">
Setting portfolio-level direction on high-intent entry points, trust signals and
the core paths through each product lifted activation depth 18-25% across four
consumer and B2B platforms. The room to move was in what the four had in common.
</FromMyWork>

## Where this leads

If one of these matches your constraint, the next step is a conversation with the
diagnosis already half done rather than a discovery call that starts from zero. Send
the numbers you have, including the ones you distrust. Most engagements begin by
establishing which of the existing numbers can be relied on, and that work is
faster when the doubts arrive with the data.
""",
  ),

  dict(
    id="hub-0006", url="/tools", archetype="hub", hub="tools", funnel="MOFU",
    title="Free Product Growth and Monetization Calculators",
    meta_description="Calculators for LTV, CAC payback, churn, retention curves, app store fees and INR pricing. Each states its formula and its assumptions.",
    h1="Product growth and monetization calculators",
    primary_keyword="product growth and monetization calculators",
    secondary_keywords=["ltv calculator", "cac payback calculator"],
    entity_a="tools",
    facts=["f-hub-08", "f-hub-09", "f-unit-26", "f-unit-36", "f-fx-05", "f-glossary-0700-09"],
    experience=["exp-049"],
    links=L(("/glossary", "the glossary", "hub"),
            ("/benchmarks", "the benchmarks", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            ("/case-studies", "the case studies", "lateral"),
            ("/work-with-me", "a review of your numbers", "bofu")),
    visuals=V("tools-assumptions",
              "Six reference points the calculators default to: average and median lift on winning tests, median conversion and revenue uplift on winners, India's recurring-debit authentication threshold, India's median cost per install, Indian domestic and international payment costs and UPI Autopay mandate success, each row carrying its source and verification date",
              "The defaults these calculators ship with. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a review of your tools output", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="Are these calculators free?",
           a="Yes, and none of them asks for an email before showing a result. Each states its formula so the arithmetic can be checked rather than trusted."),
      dict(q="Where do the default values come from?",
           a="Published benchmarks, each carrying its source and verification date. India's median cost per install is $0.42, about ₹40, and the Indian payment costs default to 2% plus 18% GST domestically."),
      dict(q="Do these work for Indian pricing?",
           a="They are built for it. The recurring-debit threshold of ₹15,000, about $156, and UPI Autopay's reported 92% or better mandate success are in the defaults rather than in a footnote."),
    ],
    schema_types=HUB_SCHEMA,
    unique_value="Every calculator states its formula and ships Indian payment and pricing defaults — GST, the mandate threshold, UPI success rates — which the generic SaaS calculators omit and which change the answer materially.",
    block_coverage=cover(["f-hub-08"], ["f-unit-26", "f-fx-05"], ["f-unit-36"],
                         ["f-hub-09"], ["f-glossary-0700-09"]),
    body="""
<AnswerBox>
These are free product growth and monetization calculators for lifetime value,
acquisition payback, churn, retention curves, app store fees and rupee pricing.
Each states its formula and its defaults. Winning A/B tests move a median 6.1%, so
the defaults are set to plausible rather than flattering.
</AnswerBox>

<FactTable
  id="tools-assumptions"
  caption="The defaults these calculators ship with"
  columns={["Default", "Figure"]}
  rows={[
    { cells: ["Lift on winning tests", "8.4% average, 6.1% median"], factId: "f-hub-08" },
    { cells: ["Median uplift on winners, conversion and revenue per visitor", "1.88% and 2.77%"], factId: "f-hub-09" },
    { cells: ["India recurring debit without extra authentication", "up to ₹15,000 (about $156)"], factId: "f-unit-26" },
    { cells: ["India median cost per install, June 2026", "$0.42 (about ₹40)"], factId: "f-unit-36" },
    { cells: ["Visitors per variant at a 5% baseline, 50% / 20% / 10% lift", "1,700 / 9,000 / 36,000"], factId: "f-fx-05" },
    { cells: ["UPI Autopay mandate success under the threshold", "92% or better"], factId: "f-glossary-0700-09" },
  ]}
/>

## What these calculators do

They compute one thing each, state the formula, and show the inputs. No calculator
here asks for an email before showing a result, and none of them hides the
arithmetic behind a score.

Defaults come from published benchmarks with sources attached. A winning
experiment moves a median 6.1%, and winners deliver a median 1.88% conversion
uplift, A model whose default improvement is an order of magnitude above that
is selling optimism rather than estimating.

## Start here

Three by frequency of use. The lifetime value calculator, because almost every
other number depends on it. The acquisition payback calculator, because payback
decides how fast you can reinvest. The app store fee calculator, because
commission is the largest cost most models forget.

If you are pricing for India specifically, the rupee price point picker and the
subscription price calculator carry the tax and mandate rules rather than leaving
them to you.

## How to read the index

Each tool states its prerequisite inputs and its assumptions. Some need only a
price and a churn rate. Others need a cohort table. The list shows which before
you open it.

The Indian defaults matter more than they look. Recurring debits clear without
extra authentication up to ₹15,000, about $156, and India's median cost per
install is $0.42, roughly ₹40. A generic SaaS calculator with US defaults gets
both wrong in the same direction.

## What recently verified means

Every default carries the date its source was last checked, and the exchange rate
used for any rupee and dollar pair is recorded in config rather than typed into
the page. A build fails if a pair drifts more than 3% from that recorded rate.

<FromMyWork exp="exp-049">
Real-time data reliability improved about 80%, which is what made accurate
pricing, attribution and monetisation decisions possible at all. Before that, every
model was arguing with its own inputs.
</FromMyWork>

## Where this leads

A calculator gives you a number. It does not tell you whether the inputs are right,
and wrong inputs are the usual problem. If the output looks implausible, check the
input you were least sure about before you doubt the formula. Churn rate and
conversion rate are the two that most often turn out to have been measured against
a different denominator than the model assumes.
""",
  ),

  dict(
    id="glossary-0712", url="/glossary/omtm", archetype="glossary", hub="glossary", funnel="MOFU",
    title="What is OMTM? One Metric That Matters, and Its Limits",
    meta_description="OMTM is the one metric that matters for the current stage. How to pick it, when to change it, and the failure it shares with every single-number approach.",
    h1="What is OMTM (one metric that matters)?", primary_keyword="what is omtm",
    secondary_keywords=["one metric that matters", "omtm examples"],
    entity_a="omtm",
    facts=["f-unit-24", "f-hub-07", "f-hub-10", "f-act-19", "f-act-14", "f-glossary-0700-08"],
    experience=["exp-036"],
    links=L(("/glossary", "the glossary", "hub"),
            ("/glossary/north-star-metric", "north star metric", "lateral"),
            ("/glossary/activation-rate", "activation rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks", "the benchmarks", "related"),
            ("/work-with-me", "a metrics review", "bofu")),
    visuals=V("omtm-checks",
              "Six reference points for choosing one metric that matters: the share of companies tracking activation, experiment win rate across 90-plus brands, testing volume at top programmes, platform-reported against true return on ad spend, quick-commerce market share and UPI Autopay mandate volume growth, each row carrying its source and verification date",
              "What to check before committing to one metric. Verified 30 September 2026."),
    cta={"primary": {"label": "Get an OMTM review of your metrics", "href": "/work-with-me"},
         "secondary": {"label": "Browse the glossary", "href": "/glossary"}},
    faq=[
      dict(q="What is the difference between OMTM and a north star metric?",
           a="Horizon. An OMTM belongs to the current stage and is expected to change when the stage does. A north star metric is meant to hold for years. Treating an OMTM as permanent is how teams keep optimising a solved problem."),
      dict(q="How do I choose an OMTM?",
           a="Name the riskiest assumption in the current stage, then pick the number that would disprove it fastest. If the assumption is that users will return, the OMTM is a retention figure, not revenue."),
      dict(q="When should an OMTM change?",
           a="When the assumption behind it has been answered, either way. Holding the same metric after that point measures something nobody is deciding anything from."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Frames OMTM by the assumption it is meant to falsify and states an explicit retirement condition, rather than presenting it as a permanent focus metric, and names the platform-reported figure that fails as an OMTM.",
    body="""
<AnswerBox>
What is OMTM? The one metric that matters is the single number a team commits to
for the current stage, chosen to answer the riskiest open assumption. Only about
34% of product-led companies track activation, which is the most common OMTM
candidate and the most commonly skipped one.
</AnswerBox>

<FactTable
  id="omtm-checks"
  caption="What to check before committing to one metric"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Companies tracking activation at all", "about 34%"], factId: "f-unit-24" },
    { cells: ["Experiment win rate, 90+ e-commerce brands", "36.3%"], factId: "f-hub-07" },
    { cells: ["Testing volume, top programmes against median", "3 to 5 times more"], factId: "f-hub-10" },
    { cells: ["Reported against true return on ad spend, quick commerce", "3x to 5x against 1.2x to 2.5x"], factId: "f-act-19" },
    { cells: ["Indian quick-commerce share by GMV", "Blinkit 46%, Instamart 24%, Zepto 22%"], factId: "f-act-14" },
    { cells: ["UPI Autopay mandate transactions, January year on year", "175 million against 58 million"], factId: "f-glossary-0700-08" },
  ]}
/>

## How to choose an OMTM

Name the riskiest assumption in the current stage. Then pick the number that would
disprove it fastest.

If the assumption is that users will come back, the OMTM is a retention figure. If
it is that users will pay, the OMTM is a conversion figure. Revenue is rarely the
answer, because revenue moves for too many reasons to falsify anything specific.

The test is whether a bad result would change the plan. A metric that cannot come
back bad is not measuring an assumption.

## Why an OMTM expires

An OMTM belongs to a stage, and the stage ends. Once the assumption has an answer,
either way, the metric has done its work and holding onto it measures something
nobody decides from.

That expiry is the difference from a north star metric, which is meant to hold for
years. Treating an OMTM as permanent is how a team spends a year optimising a
question it answered in the first quarter.

## What a bad OMTM looks like

Quick-commerce platforms report 3x to 5x return on ad spend. True return after
commission and cost of goods runs 1.2x to 2.5x. A team steering by the reported
figure has picked a number computed by someone else, excluding the costs that would
make it fall.

Market position compounds that. Blinkit holds about 46% of Indian quick-commerce
gross merchandise value against Instamart at 24% and Zepto at 22%, so the same
reported figure means different things depending on whose platform produced it.

## What an OMTM cannot do

It cannot substitute for testing volume. Top programmes run 3 to 5 times more
tests than the median, and win rates sit at 36.3% across 90-plus brands, so a
single metric with a low experiment cadence moves slowly regardless of how well it
was chosen.

It also cannot capture a step change in the underlying market. UPI Autopay went
from 58 million January mandate transactions to 175 million a year later, and a
conversion OMTM held flat across that period would have hidden a rail becoming
available.

<FromMyWork exp="exp-036">
The measurement I most regret not taking rigorously was client perception of
product coherence. It was the thing the whole strategy depended on, and it was the
one number nobody owned.
</FromMyWork>
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-hub-01", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
        "default_cta": HUB_CTA,
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
