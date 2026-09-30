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
    facts=["f-bm-01", "f-bm-02", "f-bm-08", "f-bm-17", "f-bm-20", "f-unit-25"],
    experience=["exp-040", "exp-012"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/benchmarks/churn/fintech", "fintech churn benchmarks", "lateral"),
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/india/payment-success-rates-india", "payment success rates in India", "related"),
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
                            ["f-bm-20"], ["f-unit-25", "f-bm-17"], ["f-bm-02"]),
    body="""
<AnswerBox>
Fintech app retention runs a median 7% at day 30, against a cross-industry average
of 4%. Strong performers reach 10% to 15%. Day 1 sits at 28% median and day 7 at
12%. The category retains above average because its use case recurs on a date the
user does not choose.
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
a category that holds its lead at day 30 is being pulled back by need rather than
by novelty.

Two cells here carry no number, and that is deliberate. Strong-performer bands for
the whole app market are not published, and nor is a fintech-specific figure for
the share of apps retaining anyone at day 30 — the 5% to 7% figure is
cross-industry. Filling those cells from an adjacent category would make the table
look complete and make it wrong.

## Why fintech differs

The return trigger is external. A statement date, a bill, an EMI, a policy expiry
or a tax deadline brings a user back without the product having to earn attention
that week. Categories without a calendar have to manufacture the reason, and that
is expensive.

The second difference is that a fintech user's value is not evenly spread. One
user who routes a salary through the app and one who checked a balance once both
count as retained at day 30, and their revenue differs by orders of magnitude. So
a retention curve on its own is a weaker signal here than in a subscription
product, and it should be read next to a revenue-weighted version.

AI-led fintech features complicate it further. AI apps earn 41% more revenue per
payer and churn about 30% faster, so bolting an AI feature onto a fintech product
can lift revenue per user and shorten the tenure that revenue is drawn from.

## The India layer

There is no published India-specific fintech retention table at day 1, 7 and 30.
Rather than infer one, the useful India figure is the collection layer underneath
retention. More than 120 million UPI Autopay mandates are created monthly, and a
fintech product with a recurring charge either sits on that rail or explains why
not.

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

At day 30, 10% to 15% puts a fintech app in the strong-performer band. Below 7%
the product is behind its own category rather than behind the market. Between
those, the more useful question is which cohort is holding: if only the
salary-routing users stay, the headline is carried by a segment the product did
not deliberately build for.

Read the curve's shape before its level. A curve that flattens between day 7 and
day 30 has found a recurring need. One that keeps sliding has a use case that
happens once, and no amount of lifecycle messaging converts a one-off need into a
habit.

## If you are below the median

Check collection before retention. A failed mandate leaves the cohort exactly as a
cancellation does, and most dashboards report the two together, so a fintech
product can read as disliked when it is merely uncollected.

Then check the trigger. If the product has no external date that brings a user
back, retention work means finding one — a statement, a reminder, a deadline —
rather than writing better notifications for a week the user had no reason to open
anything.

<FromMyWork exp="exp-040">
Routing applicants only to lenders with high disbursement probability got bank and
NBFC approval rates to 90%+. The gain came from the routing rule rather than the
model that fed it.
</FromMyWork>
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
    facts=["f-bm-01", "f-bm-03", "f-bm-14", "f-bm-15", "f-bm-08", "f-act-16"],
    experience=["exp-024", "exp-052"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/benchmarks/churn/d2c-ecommerce", "ecommerce churn benchmarks", "lateral"),
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/india/cod-to-prepaid-conversion-d2c", "COD to prepaid conversion", "related"),
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
                            ["f-bm-14"], ["f-act-16"], ["f-bm-15"]),
    body="""
<AnswerBox>
Ecommerce app retention runs a median 2% at day 30, below the 4% cross-industry
average. Day 1 sits at 18% and day 7 at 5%. Strong performers reach 3% to 6% at
day 30. The category retains poorly by construction, because buying is episodic
and the browser is always one tap away.
</AnswerBox>

<FactTable
  id="ecommerce-retention-table"
  caption="Ecommerce retention, and the purchase rates that matter more"
  columns={["Measure", "Ecommerce", "Reference"]}
  rows={[
    { cells: ["Day 1 retention, median", "18%", "25% all categories"], factId: "f-bm-03" },
    { cells: ["Day 7 retention, median", "5%", "8% all categories"], factId: "f-bm-01" },
    { cells: ["Day 30 retention, median", "2%", "4% all categories"], factId: "f-bm-03" },
    { cells: ["Install-to-purchase, retail and travel", "1.38% and 2.41%", "1% to 2% typical"], factId: "f-bm-14" },
    { cells: ["Good mobile commerce conversion", "2% to 6%", "by order value and frequency"], factId: "f-bm-15" },
    { cells: ["Apps retaining anyone at day 30", "no published figure", "5% to 7%"], factId: "f-bm-08" },
  ]}
/>

## The numbers, and what is missing from them

Ecommerce sits below the cross-industry average at every point on the curve: 18%
against 25% at day 1, 5% against 8% at day 7, and 2% against 4% at day 30. Strong
performers reach 3% to 6% at day 30, which is still below the all-category
average.

No ecommerce-specific figure is published for the share of apps retaining anyone
at day 30, so that cell carries the cross-industry 5% to 7% and says which
population it describes. An India-specific D2C retention table at day 1, 7 and 30
is also not published, and this page does not manufacture one.

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

The figure that decides Indian D2C economics is not retention, it is what the
channel takes. Indian quick-commerce platforms consume 30% to 35% of revenue once
listing fees, mandatory ad spend, commission and operations are counted.

That changes what retention is worth. A retained buyer who orders through a
platform taking a third of revenue contributes very differently from one ordering
direct, so a D2C retention programme that raises platform orders can raise the
curve and lower the margin at the same time. Read retention by channel, or the
number hides which half of the base is profitable.

## What good looks like

At day 30, 3% to 6% is the strong-performer band. Below 2% the app is behind its
own category. But the more useful target is repeat purchase rate rather than
retention: install-to-purchase runs 1.38% for retail and 2.41% for travel, and a
good mobile commerce conversion rate sits between 2% and 6% depending on order
value and purchase frequency.

Read cohorts by acquisition channel. In ecommerce more than in most categories,
the channel decides the curve, and a blended number tells you about your media mix
rather than your product.

## If you are below the median

Fix the first purchase before the fifth. A user who has never bought has no
habit to retain, and the interventions are different: shipping clarity, payment
options and returns policy move first purchase, while none of them move the
seventh.

Then segment by frequency rather than recency. A quarterly buyer who bought last
quarter is a healthy customer and a churned user by a 30-day definition.

<FromMyWork exp="exp-052">
Order intake arrived by email, phone and trade expo and was systemised into one
processing workflow. The systemisation was worth more than any single channel,
because it made the demand legible.
</FromMyWork>
""",
  ),

  dict(
    id="benchmark-0459", url="/benchmarks/retention/healthtech", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Health App Retention Benchmarks: D1, D7 and D30 (2026)",
    meta_description="Health and wellness app retention benchmarks for day 1, 7 and 30, the January cohort problem, and the store-conversion figures for the category.",
    h1="Health and wellness app retention benchmarks",
    primary_keyword="health and wellness app retention benchmarks",
    secondary_keywords=["fitness app retention", "healthtech d30 retention"],
    entity_a="retention", entity_b="healthtech",
    facts=["f-bm-01", "f-bm-04", "f-bm-13", "f-bm-10", "f-bm-08", "f-act-07"],
    experience=["exp-014", "exp-046"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/benchmarks/churn/healthtech", "healthtech churn benchmarks", "lateral"),
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/india/monetizing-tier-2-tier-3-users", "monetising tier 2 and tier 3 users", "related"),
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
Health and wellness app retention runs a median 5% at day 30 against a 4%
cross-industry average, with strong performers at 8% to 12%. Day 1 is unusually
strong at 25%, and strong performers reach 35% to 45%. The category acquires
willing users and then asks them to do something difficult every day.
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

## What good looks like

At day 30, 8% to 12% is the strong-performer band and 5% is the median. But the
figure to watch is day 7, where the category's strong band runs 15% to 22%: that
window is where the habit either forms or does not, and day 30 is mostly its
consequence.

Store conversion is already strong at 25% to 40% page view to install, so a health
app with a retention problem rarely has an acquisition problem. Spending there
buys more users to lose.

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
""",
  ),
]
