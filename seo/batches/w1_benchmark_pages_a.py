"""Retention benchmark pages for batch w1-benchmark-01. Imported by the batch."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import L, V  # noqa: E402
from w1_benchmark_01 import BM_SCHEMA, bm_cover  # noqa: E402

HUB = ("/benchmarks", "the benchmarks", "hub")
BOFU = ("/work-with-me", "a retention review", "bofu")

PAGES_A = [
  dict(
    id="benchmark-0457", url="/benchmarks/retention/fintech", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Fintech App Retention Benchmarks: D1, D7 and D30 (2026)",
    meta_description="Fintech app retention benchmarks for day 1, 7 and 30, with the median and strong-performer bands, and the cells where no public figure exists.",
    h1="Fintech app retention benchmarks",
    primary_keyword="fintech app retention benchmarks",
    secondary_keywords=["fintech retention", "fintech d30 retention"],
    entity_a="retention", entity_b="fintech",
    facts=["f-bm-01", "f-bm-02", "f-bm-08", "f-bm-17", "f-bm-20", "f-fx-02"],
    experience=["exp-040", "exp-012"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/glossary/churn-rate", "the churn rate definition", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("fintech-retention-table",
              "Fintech retention against the cross-industry average at day 1, day 7 and day 30, with the strong-performer band, the share of apps retaining anyone at day 30, the regional download-to-paid gap, the AI churn premium and monthly UPI Autopay mandate volume, each row carrying its source and verification date",
              "Fintech retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a fintech retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for a fintech app?",
           a="The fintech median is 7% at day 30 and strong performers reach 10% to 15%. Against a cross-industry average of 4%, fintech retains better than most categories because the use case recurs on a schedule."),
      dict(q="Why is fintech retention higher than the app average?",
           a="Because the need repeats without marketing. A bill, a statement, an EMI or a policy renewal brings a user back on a date they did not choose, which is a structural advantage over categories that have to manufacture a reason."),
      dict(q="Are there India-specific fintech retention figures?",
           a="Not published at this granularity, and this page says so rather than borrowing from a global table. What is published for India is the collection layer: more than 120 million UPI Autopay mandates a month, which decides whether a retained user actually pays."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Separates retained from collected, which every other fintech retention page conflates: a fintech user can be fully retained and still leave the revenue line through a failed mandate, so the page carries the India collection figures beside the retention bands.",
    block_coverage=bm_cover(["f-bm-02"], ["f-bm-01", "f-bm-02", "f-bm-08"],
                            ["f-bm-20"], ["f-fx-02", "f-bm-17"], ["f-bm-02"]),
    body="""
<AnswerBox>
Fintech app retention benchmarks put the median at 7% on day 30, against a
cross-industry average of 4%. Strong performers reach 10% to 15%. Day 1 sits at 28%
and day 7 at 12%. The category beats the average because its use case recurs on a
date the user does not choose.
</AnswerBox>

<FactTable
  id="fintech-retention-table"
  caption="Fintech retention against the cross-industry average"
  columns={["Measure", "Fintech", "All categories"]}
  rows={[
    { cells: ["Day 1 retention, median", "28%", "25%"], factId: "f-bm-02" },
    { cells: ["Day 7 retention, median", "12%", "8%"], factId: "f-bm-02" },
    { cells: ["Day 30 retention, median", "7%", "4%"], factId: "f-bm-01" },
    { cells: ["Day 30, strong performers", "10% to 15%", "no published figure"], factId: "f-bm-02" },
    { cells: ["Apps retaining anyone at day 30", "no published figure", "5% to 7%"], factId: "f-bm-08" },
    { cells: ["Day-35 download-to-paid, NA against IN and SEA", "no published figure", "2.6% against 1.4%"], factId: "f-bm-17" },
  ]}
/>

## The numbers, and what is missing from them

Fintech retains a median 28% at day 1, 12% at day 7 and 7% at day 30. The
cross-industry averages for the same points are 25%, 8% and 4%, so the category's
advantage widens as the window lengthens. That shape matters more than the level:
a category that holds its lead at day 30 pulls users back out of
need rather than novelty.

Two cells here carry no number, deliberately. Nobody publishes strong-performer
bands for the whole app market, and nobody publishes a fintech-specific figure for
the share of apps retaining anyone at day 30 — the 5% to 7% range covers all
categories. Filling those cells from an adjacent category would make the table look
complete and make it wrong.

## Why fintech differs

The return trigger sits outside the product. A statement date, a bill, an EMI, a
policy expiry or a tax deadline brings a user back without the product earning
attention that week. Categories without a calendar must manufacture the reason, and
that costs money.

A fintech user's value also spreads unevenly. Someone routing a salary through the
app and someone who checked a balance once both count as retained at day 30, and
their revenue differs by orders of magnitude. A retention curve alone therefore
carries less signal here than in a subscription product. Read it next to a
revenue-weighted version.

AI-led fintech features complicate it further. AI apps earn 41% more revenue per
payer and churn about 30% faster, so bolting an AI feature onto a fintech product
can lift revenue per user and shorten the tenure that revenue is drawn from.

## The India layer

There is no published India-specific fintech retention table at day 1, 7 and 30, and
this page does not infer one. What is published, and what travels, is the direction
of engagement: finance app sessions grew 21% in 2026 while gaming cost per install
jumped 30%. Attention in finance is rising while the cost of buying it elsewhere
rises faster.

That distinction matters because a retained user and a paying user are not the
same person in this market. Day-35 download-to-paid conversion runs 2.6% in North
America against 1.4% across India and South-East Asia, so the same retention curve
produces about half the revenue conversion.

<FromMyWork exp="exp-012">
Not supporting UPI was the single most expensive omission in the funnel. Card and
net banking were the only options in a market where the buying demographic pays by
UPI. Integration took six weeks, and 73% of purchases came through UPI in the
first month after launch.
</FromMyWork>

## What good looks like

At day 30, 10% to 15% puts a fintech app in the strong-performer band. Below 7% the
product trails its own category rather than the market. Between those two the more
useful question is which cohort holds. If only the salary-routing users stay, a
segment the product never deliberately built for carries the headline.

Read the curve's shape before its level. A curve that flattens between day 7 and
day 30 has found a recurring need. One that keeps sliding has a use case that
happens once, and no amount of lifecycle messaging turns a one-off need into a
habit.

One more check belongs here. Split the curve by whether the user completed a
money-moving action in week one. In most fintech products those two cohorts
diverge so sharply that a blended figure describes neither, and the blended figure
is what gets compared against tables like this one.

## If you are below the median

Check collection before retention. A failed mandate leaves the cohort exactly as a
cancellation does, and most dashboards report the two together, so a fintech
product reads as disliked when it is merely uncollected. That check costs an
afternoon and reorders the whole plan often enough to be worth doing first.

Then check the trigger. If the product has no external date that brings a user
back, retention work means finding one — a statement, a reminder, a deadline —
rather than writing better notifications for a week in which the user had no reason
to open anything. Products without a natural date usually have to borrow one from
the user's own calendar, and that is a product decision rather than a lifecycle
campaign.

<FromMyWork exp="exp-040">
Routing applicants only to lenders with high disbursement probability got bank and
NBFC approval rates to 90%+. The gain came from the routing rule rather than the
model that fed it.
</FromMyWork>


## How these figures were gathered

Each row names its source and the date it was last checked. Figures come from
published benchmark reports, not from a panel this site runs.

Three rows say "no published figure". That is the point of them. The inventory rule
for every benchmark page here is at least three sources or an explicit "insufficient
public data" mark. Fintech is well covered at day 1, 7 and 30 and poorly covered on
strong-performer spread, so the table shows both states.

Where a figure exists for all categories but not for fintech, the row carries the
all-category number and labels it. That is a comparison, not a fintech benchmark,
and the distinction matters when somebody sets a target from it.

Anything older than 90 days goes back for re-verification before publication. Price
figures run on a tighter 45-day cycle, because they move faster than retention does.
""",
  ),

  dict(
    id="benchmark-0460", url="/benchmarks/retention/d2c-ecommerce", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Ecommerce App Retention Benchmarks: D1, D7, D30 (2026)",
    meta_description="Ecommerce and D2C app retention benchmarks for day 1, 7 and 30, with the purchase-conversion figures that matter more than the curve.",
    h1="Ecommerce app retention benchmarks",
    primary_keyword="ecommerce app retention benchmarks",
    secondary_keywords=["d2c app retention", "ecommerce d30 retention"],
    entity_a="retention", entity_b="d2c-ecommerce",
    facts=["f-bm-01", "f-bm-03", "f-ih-01", "f-bm-15", "f-bm-08", "f-fx-03"],
    experience=["exp-024", "exp-052"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/glossary/churn-rate", "the churn rate definition", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("ecommerce-retention-table",
              "Ecommerce retention against the cross-industry average at day 1, day 7 and day 30, with the strong-performer band, install-to-purchase conversion for retail and travel, a good mobile commerce conversion range and the share of revenue Indian quick-commerce platforms consume, each row carrying its source and verification date",
              "Ecommerce retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get an ecommerce retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for an ecommerce app?",
           a="The ecommerce median is 2% at day 30, below the 4% cross-industry average, and strong performers reach 3% to 6%. The category retains poorly by design: buying is episodic rather than habitual."),
      dict(q="Why is ecommerce app retention so low?",
           a="Because the need is intermittent and the alternative is frictionless. A user who wants nothing this month has no reason to open the app, and the browser is always available. Retention here tracks purchase frequency, not satisfaction."),
      dict(q="Should an ecommerce app optimise retention or purchase rate?",
           a="Purchase rate first. Install-to-purchase runs 1.38% for retail against 2.41% for travel, and a retained user who never buys costs money to serve. The curve matters once the purchase works."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Reads ecommerce retention as a function of purchase frequency rather than satisfaction, pairing the curve with install-to-purchase rates and the Indian platform take that decides whether a retained buyer is profitable at all.",
    block_coverage=bm_cover(["f-bm-03"], ["f-bm-01", "f-bm-03", "f-bm-08"],
                            ["f-ih-01"], ["f-fx-03"], ["f-bm-15"]),
    body="""
<AnswerBox>
Ecommerce app retention benchmarks put the median at 2% on day 30, below the 4%
cross-industry average. Day 1 sits at 18% and day 7 at 5%. Strong performers reach
3% to 6%. The category retains poorly by construction, because buying is episodic
and the browser sits one tap away.
</AnswerBox>

<FactTable
  id="ecommerce-retention-table"
  caption="Ecommerce retention, and the purchase rates that matter more"
  columns={["Measure", "Ecommerce", "Reference"]}
  rows={[
    { cells: ["Day 1 retention, median", "18%", "25% all categories"], factId: "f-bm-03" },
    { cells: ["Day 7 retention, median", "5%", "8% all categories"], factId: "f-bm-01" },
    { cells: ["Day 30 retention, median", "2%", "4% all categories"], factId: "f-bm-03" },
    { cells: ["Median time from install to first revenue", "about 48 hours", "p90 near 14 days"], factId: "f-ih-01" },
    { cells: ["Good mobile commerce conversion", "2% to 6%", "by order value and frequency"], factId: "f-bm-15" },
    { cells: ["Apps retaining anyone at day 30", "no published figure", "5% to 7%"], factId: "f-bm-08" },
  ]}
/>

## The numbers, and what is missing from them

Ecommerce sits below the cross-industry average at every point on the curve: 18%
against 25% at day 1, 5% against 8% at day 7, and 2% against 4% at day 30. Strong
performers reach 3% to 6% at day 30, which still falls short of the all-category
average. So a category-leading ecommerce app looks mediocre against a general table,
and that is a measurement artefact rather than a finding.

No ecommerce-specific figure exists for the share of apps retaining anyone at day
30, so that cell carries the cross-industry 5% to 7% and names the population it
describes. An India-specific D2C retention table at day 1, 7 and 30 is also not
published, and this page does not manufacture one. Those two gaps matter more here
than in most categories, because ecommerce retention varies so widely by order
frequency that a borrowed figure would mislead rather than approximate.

## Why ecommerce differs

Purchase frequency sets the ceiling. A category where the average customer buys
four times a year cannot retain like one where the user opens the app daily, and
no amount of engagement design changes how often somebody needs shoes. So a low
curve here is a description of the category, not a verdict on the product.

The second difference is substitution. Every ecommerce app competes with its own
mobile site, which requires no install and no update. A user who is not retained
in the app may be perfectly retained as a customer, which makes app retention a
channel metric rather than a loyalty metric.

Assortment compounds both. Carrying more does not raise retention if the extra
range has no demand behind it.

<FromMyWork exp="exp-024">
Carrying the full catalogue was never viable, so the first real work was choosing
what not to stock. Of roughly 1,200 SKUs we prioritised 85 — under 8% — against
the highest-probability commercial opportunities for the market's development
stage.
</FromMyWork>

## The India layer

No India-specific D2C retention table is published at day 1, 7 and 30. What the
published record does show is how wide the disagreement runs even globally: one
source puts e-commerce and retail day-30 retention at 3% to 6%, against the 2%
median another reports for the same category. Both appear here with their source.

That changes what retention is worth. A retained buyer ordering through a platform
taking a third of revenue contributes very differently from one ordering direct, so
a D2C retention programme that shifts orders onto a platform can raise the curve
and lower the margin in the same quarter.

Read retention by channel, or the number hides which half of the base earns
anything. No India-specific D2C retention curve is published, so the channel split
is the India layer that actually exists here — and it is the one that changes
decisions.

## What good looks like

At day 30, 3% to 6% is the strong-performer band, and below 2% the app trails its
own category. The more useful target, though, is repeat purchase rate rather than
retention. First revenue arrives fast when it arrives at all — a median of about 48
hours across more than 145,000 installs, with the 90th percentile near 14 days — and a
good mobile commerce conversion rate sits between 2% and 6% depending on order value
and purchase frequency.

Read cohorts by acquisition channel. In ecommerce more than in most categories the
channel decides the curve, so a blended number describes your media mix rather than
your product. A discount-led cohort and an organic cohort can differ by a factor of
three at day 30 on the same app, which makes the blended figure almost unusable for
a decision.


Set the target on purchases per buyer per year, then derive the retention target
from it. Doing it the other way round produces a retention goal the category cannot
reach.
## If you are below the median

Fix the first purchase before the fifth. A user who has never bought has no habit
to retain, and the interventions differ: shipping clarity, payment options and a
visible returns policy move the first purchase, while none of them move the seventh.

Then segment by frequency rather than recency. A quarterly buyer who bought last
quarter is a healthy customer and, under a 30-day definition, a churned user. That
single definitional choice reclassifies a large share of a D2C base, and teams
usually discover it after a quarter of chasing the wrong cohort.

<FromMyWork exp="exp-052">
Order intake arrived by email, phone and trade expo and was systemised into one
processing workflow. The systemisation was worth more than any single channel,
because it made the demand legible.
</FromMyWork>


## How these figures were gathered

Every row carries its source and a verification date. The figures come from
published reports rather than from first-party panel data.

Two rows read "no published figure", and that is deliberate. The standard for these
pages is at least three sources or an explicit "insufficient public data" mark.
Ecommerce retention is well documented at the three day marks and undocumented on
app-level survival, so the table reports both honestly.

Rows that carry an all-category figure in an ecommerce column say so. Borrowing a
number from a neighbouring category would make this table look complete and make a
target set from it wrong.

Figures go back for re-checking every 90 days. Anything about price or fees runs on
a 45-day cycle instead.
""",
  ),

  dict(
    id="benchmark-0459", url="/benchmarks/retention/healthtech", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Health and Wellness App Retention Benchmarks (2026)",
    meta_description="Health and wellness app retention benchmarks for day 1, 7 and 30, the January cohort problem, and the store-conversion figures for the category.",
    h1="Health and wellness app retention benchmarks",
    primary_keyword="health and wellness app retention benchmarks",
    secondary_keywords=["fitness app retention", "healthtech d30 retention"],
    entity_a="retention", entity_b="healthtech",
    facts=["f-bm-01", "f-bm-04", "f-bm-13", "f-bm-10", "f-bm-08", "f-act-07"],
    experience=["exp-014", "exp-046"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/glossary/churn-rate", "the churn rate definition", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("health-retention-table",
              "Health and wellness retention against the cross-industry average at day 1, day 7 and day 30, with the strong-performer band, the category's app-store page-view-to-install rate, the highest iOS install rate by category, activation and time to value for comparison, each row carrying its source and verification date",
              "Health and wellness retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a healthtech retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for a health app?",
           a="The median is 5% at day 30 with strong performers at 8% to 12%, against a 4% cross-industry average. Day 1 is unusually strong at 25% median, rising to 35% to 45% for strong performers."),
      dict(q="Why do health apps lose users so fast after a strong start?",
           a="Because intent at install is high and the behaviour it requires is daily and effortful. The gap between a 25% day-1 median and a 5% day-30 median is the distance between deciding to change and doing it repeatedly."),
      dict(q="Does the January cohort distort health app benchmarks?",
           a="Materially, and no published benchmark separates it. A January cohort installs with higher intent and churns harder, so a year-round median blends two different populations. Read your own cohorts by month before comparing to any table."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Names the seasonal-cohort distortion no published health retention benchmark separates, and pairs the curve with the category's unusually strong store-conversion figures to show that the constraint is behaviour rather than acquisition.",
    block_coverage=bm_cover(["f-bm-04"], ["f-bm-01", "f-bm-04", "f-bm-08"],
                            ["f-act-07"], ["f-bm-10"], ["f-bm-13"]),
    body="""
<AnswerBox>
Health and wellness app retention benchmarks put the median at 5% on day 30 against
a 4% cross-industry average, with strong performers at 8% to 12%. Day 1 runs
unusually strong at 25%, and strong performers reach 35% to 45%. The category
acquires willing users, then asks them to do something difficult every day.
</AnswerBox>

<FactTable
  id="health-retention-table"
  caption="Health and wellness retention, and the funnel above it"
  columns={["Measure", "Health & wellness", "Reference"]}
  rows={[
    { cells: ["Day 1 retention, median and strong", "25%, strong 35% to 45%", "25% all categories"], factId: "f-bm-04" },
    { cells: ["Day 7 retention, median and strong", "10%, strong 15% to 22%", "8% all categories"], factId: "f-bm-04" },
    { cells: ["Day 30 retention, median", "5%", "4% all categories"], factId: "f-bm-01" },
    { cells: ["App Store page view to install", "25% to 40%", "no published figure"], factId: "f-bm-13" },
    { cells: ["Highest iOS install rate by category", "medical, 7.8%", "entertainment lowest, 1.1%"], factId: "f-bm-10" },
    { cells: ["Apps retaining anyone at day 30", "no published figure", "5% to 7%"], factId: "f-bm-08" },
  ]}
/>

## The numbers, and what is missing from them

Health and wellness beats the cross-industry average at every point: 25% against
25% at day 1, 10% against 8% at day 7, and 5% against 4% at day 30. The strong
performer bands are wide — 35% to 45% at day 1 and 8% to 12% at day 30 — which
says the spread inside the category is larger than the gap to other categories.

Two gaps. No health-specific figure exists for the share of apps retaining anyone
at day 30, so that cell shows the cross-industry range and says so. And no
published benchmark separates seasonal cohorts, which for this category is the
single most distorting omission.


Treat the day-1 figure with particular care in this category. A high day 1 here
reflects intent at install rather than product quality, and intent is the one input
a benchmark cannot tell you whether you share.
## Why health and wellness differs

The behaviour is effortful and the payoff is delayed. A user installs with real
intent, and the product then asks for a daily action whose reward arrives in weeks.
That gap, not acquisition quality, is what the curve measures.

Category comparison makes the point. AI and machine-learning products reach 54.8%
benchmark activation with a time to value near 17 hours, because the product does
the work. A fitness app cannot do the exercise for the user, so its activation
ceiling is set by something outside the software.

Seasonality then distorts every published figure. A January cohort installs with
higher intent and abandons harder, so a year-round median blends two populations
with different curves. Any comparison against a table like this one should be run
on your own monthly cohorts first.

## The India layer

No India-specific health and wellness retention table is published at day 1, 7
and 30, and this page does not estimate one.

What is published and relevant is store discovery. Medical has the highest iOS
install rate of any category at 7.8%, against 1.1% for entertainment, so health
products convert search intent unusually well. In a market where paid acquisition
is expensive relative to willingness to pay, that organic conversion advantage is
the category's most useful asset — and it makes the retention problem, not the
acquisition problem, the one worth funding.


The practical consequence is that an Indian health product should budget for
retention work and not for more installs. Discovery is already the cheap part, and
spending there buys more of the users the curve is losing.
## What good looks like

At day 30, 8% to 12% is the strong-performer band and 5% is the median. The figure
to watch, though, is day 7, where the category's strong band runs 15% to 22%. That
window is where the habit forms or does not, and day 30 mostly reports the
consequence.

Store conversion already runs strong at 25% to 40% page view to install, so a health
app with a retention problem rarely has an acquisition problem. Spending there buys
more users to lose. The practical test: if day 7 sits inside the strong band and day
30 does not, the product has built a habit it cannot sustain, which is a different
problem from one it never started.


Compare monthly cohorts against each other before comparing any of them against
this table. In a seasonal category that internal comparison is the more reliable
signal.
## If you are below the median

Shorten the time to first felt benefit. The category's problem is a delayed
payoff, so anything that produces a visible result in the first session — a
measurement, a plan, a score — moves the curve more than a streak mechanic does.

Then fix the timing of prompts rather than their wording.

<FromMyWork exp="exp-014">
Timing beat messaging. A user whose insurance expired three days ago converted at
4.8 times the rate of one with 60 days remaining, on identical copy.
</FromMyWork>

<FromMyWork exp="exp-046">
Setting portfolio-level direction on high-intent entry points, trust signals and
the core paths through each product lifted activation depth 18-25% across four
consumer and B2B platforms.
</FromMyWork>



Then check whether the first session produced anything the user could see. A plan,
a score or a single measurement all qualify; a tour of the interface does not.
## How these figures were gathered

Each row shows its source and when somebody last checked it. The numbers come from
published benchmark reports.

The seasonality caveat above is the most important thing on this page, and no
published source handles it. January cohorts behave differently from June cohorts in
this category, and every median here blends them. Run your own months before
comparing.

Two rows read "no published figure". The rule for these pages is three sources or an
explicit "insufficient public data" mark, and health retention is well covered at
day 1, 7 and 30 while app-level survival is not covered for the category at all.

Re-verification runs every 90 days, and every 45 for anything touching price.


Where two published sources disagree, both appear and the page says so rather than
picking the friendlier one.""",
  ),
]
