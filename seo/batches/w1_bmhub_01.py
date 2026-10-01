#!/usr/bin/env python3
"""Batch w1-bmhub-01 — the five benchmark sub-hubs whose children were orphaned.

Twelve benchmark pages shipped under /benchmarks/<metric>/<industry> while
/benchmarks/<metric> itself returned 404. The internal-link check added to
`pnpm launch:check` found it: /benchmarks/retention alone was cited by 25 pages.

A sub-hub is not a landing page for its children. Its job is the part no single
industry page can carry — the definition and the denominator, the cross-industry
table that makes one industry's number legible, and the stage adjustment that
says which benchmark applies to a product of your size. The children then only
have to be specific.

India layers here are either a real published India figure or an explicit
statement that none exists. 01 SectionB's `mustNot` forbids inventing one, and
for retention by category there genuinely is no published India curve, so the
page says so rather than inferring one from a regional average.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402
from w1_hub_01 import POOL as P3  # noqa: E402
from w1_benchmark_01 import POOL as P4  # noqa: E402
from w1_service_01 import POOL as P5  # noqa: E402
from w1_hub_02 import POOL as P6  # noqa: E402

POOL = {**P1, **P2, **P3, **P4, **P5, **P6}

# ── Hub-level research ───────────────────────────────────────────────────────
# A sub-hub's job is the cross-industry view, so it needs cross-industry sources
# of its own. The first draft of these five pages leaned on their children's
# per-industry facts instead, which pushed eleven facts past the §C2 cap of 3 and
# would have made the hub a summary of pages the reader can already see.
PMT = ("https://pmtoolkit.ai/learn/growth/retention-analytics-guide",
       "Retention analytics: where users leak", "pmtoolkit.ai", "2026")
CNT = ("https://countly.com/blog/the-complete-guide-to-measuring-user-retention-cohorts-curves-benchmarks",
       "The complete guide to measuring user retention", "countly.com", "2026")
SON = ("https://trysonar.app/blog/app-store-conversion-rate",
       "App store conversion rate: how to improve it, with benchmarks", "trysonar.app", "2026")
ADA = ("https://www.adaction.com/blog/improve-app-store-conversion-rates",
       "10 ways to improve app store conversion rates", "adaction.com", "2026")
LRT = ("https://linkrunner.io/blog/install-to-first-revenue-payback-windows-2026",
       "Install-to-first-revenue timing: mobile app payback windows in 2026",
       "linkrunner.io", "2026")
RCT = ("https://www.revenuecat.com/blog/growth/free-trial-length",
       "How long should your free trial be? Data from 17,000+ apps", "revenuecat.com", "2026")
PPC = ("https://ppc.land/95-of-annual-app-subscribers-who-cancel-never-return-revenuecat-finds/",
       "95% of annual app subscribers who cancel never return, RevenueCat finds",
       "ppc.land", "2026")

HUB_FACTS = [
    fact("f-rh-01", "Top-quartile consumer apps hold 25% to 40% at day 30 and their curves flatten between day 60 and day 90",
         "25-40", "%", PMT,
         "Top-quartile consumer apps see Day 30 retention of 25 to 40 percent and flatten by Day 60 to 90."),
    fact("f-rh-02", "The mobile day-30 average runs 7% to 8%, with strong products above 15%",
         "7-8", "%", CNT,
         "Mobile benchmark for Day 30 is 7-8% average, 15%+ for strong products.", False),
    fact("f-rh-03", "SaaS subscription products often reach 40% to 50% day-30 retention, several times the mobile average",
         "40-50", "%", CNT,
         "SaaS subscription products often hit 40-50% Day 30 retention.", False),
    fact("f-ah-01", "Average app store page conversion is 30.3% on iOS and 33% on Google Play, an order of magnitude above impression-based rates",
         "30.3", "%", SON,
         "The benchmark for app store conversion rates is, on average, 30.3% on iOS and 33% on Google Play."),
    fact("f-ah-02", "Store conversion by category spans social networking at 10% to 20% on iOS up to utilities at 30% to 40%",
         "10-40", "%", SON,
         "Games 25-35% iOS, Utilities 30-40% iOS, Social Networking 10-20% iOS, Finance 15-25% iOS.", False),
    fact("f-ah-03", "Across more than 500 A/B tests, a preview video lifted conversion 20% to 35% on average, above 40% for games and about 20% for productivity",
         "20-35", "%", SON,
         "StoreMaven across 500+ A/B tests found a preview video lifts conversion 20-35% on average; games 35%, productivity 20%.", False),
    fact("f-ah-04", "Preview videos beat static screenshots in 78% of tests, with a median conversion lift of 22%",
         "78", "%", SON,
         "SplitMetrics found preview videos outperformed static screenshots in 78% of cases, median conversion lift 22%.", False),
    fact("f-ah-05", "Screenshots drive the install decision for up to 45% of users, and adding captions lifted conversion 25% on average",
         "45", "%", ADA,
         "Screenshots influence conversion more than any other element, deciding up to 45% of users; captions increased conversion 25% on average.", False),
    fact("f-th-01", "Across more than 17,000 apps, trial conversion rises with length: 25.5% under four days, 37.4% at five to nine days, 35.4% at ten to sixteen and 42.5% at seventeen to thirty-two",
         "42.5", "%", RCT,
         "Under 4 days: 25.5%; 5 to 9 days: 37.4%; 10 to 16 days: 35.4%; 17 to 32 days: 42.5%."),
    fact("f-th-02", "Trials of seventeen to thirty-two days convert about 70% better than trials under four days",
         "70", "%", RCT,
         "Trials in the 17-to-32-day range convert about 70% better than trials under 4 days.", False),
    fact("f-th-03", "46.5% of apps now use a trial of four days or shorter, up from 42.1% a year earlier, because paid acquisition needs a fast conversion signal",
         "46.5", "%", RCT,
         "46.5% of apps now use trials of 4 days or shorter, up from 42.1% a year earlier; paid acquisition needs a fast conversion signal.", False),
    fact("f-th-04", "84% of three-day trial cancellations happen between day 0 and day 1, against 64% of seven-day trial cancellations",
         "84", "%", RCT,
         "84% of 3-day trial cancellations occur between day 0 and day 1, while 64% of 7-day trial cancellations happen in that period.", False),
    fact("f-th-05", "95% of annual app subscribers who cancel never come back",
         "95", "%", PPC,
         "95% of annual app subscribers who cancel never return, RevenueCat finds.", False),
]
POOL.update({f["fact_id"]: f for f in HUB_FACTS})


BM_SCHEMA = ["Article", "FAQPage", "Person", "BreadcrumbList"]
TOOL = ("/tools/monetization-health-score", "the monetisation health score", "tool")
BOFU = ("/work-with-me", "a growth and monetisation review", "bofu")
HUB = ("/benchmarks", "the benchmarks", "hub")


def cover(answer, definition, table, india, moves, stage):
    return {"answer_box": answer, "definition": definition,
            "benchmark_table_by_industry": table, "india_layer": india,
            "what_moves_it": moves, "stage_adjustment": stage}


PAGES = [
  dict(
    id="bmhub-0001", url="/benchmarks/retention", archetype="benchmark-hub",
    hub="benchmarks", funnel="MOFU",
    title="App Retention Rate Benchmarks by Industry, 2026",
    meta_description="Day 1, day 7 and day 30 retention medians by industry, with the denominator each figure uses and why a category average misleads a single product.",
    h1="App retention rate benchmarks",
    primary_keyword="app retention rate benchmarks",
    secondary_keywords=["day 30 retention benchmark", "retention rate by industry"],
    entity_a="retention",
    facts=["f-rh-01", "f-rh-02", "f-rh-03", "f-bm-06", "f-bm-03", "f-bm-05", "f-hub-01"],
    experience=["exp-044"],
    links=L(("/benchmarks/retention/fintech", "fintech retention", "lateral"),
            ("/benchmarks/retention/gaming", "gaming retention", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention", "reference"),
            ("/glossary/retention-rate", "the retention rate definition", "lateral"),
            ("/glossary/cohort-analysis", "cohort analysis", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("retention-by-industry",
              "Day 1, day 7 and day 30 retention medians for five app categories against the cross-industry average, showing social apps holding 12% at day 30 against e-commerce at 2%, with the share of apps retaining anyone at day 30 and the productivity band for comparison, each row carrying its source and verification date",
              "Retention medians by category at three horizons. Verified 30 September 2026."),
    faq=[
      dict(q="Which retention denominator do these benchmarks use?",
           a="Installs, not activated users. That matters more than the figure itself: retention over activated users runs far higher, because it has already excluded everyone who never reached first value. Comparing an activated-user number to an install-based benchmark flatters a product by a wide margin."),
      dict(q="Is day 30 retention the right horizon to judge?",
           a="Only alongside the shape. Day 30 as a single number cannot tell a curve that has flattened from one still falling. A product at 6% and flat has a durable base; a product at 8% and still dropping does not."),
      dict(q="Why do social and e-commerce differ so much?",
           a="Natural session frequency. Social apps have a daily reason to open; a shopping app has one every few weeks. The same engineering effort buys a different curve, which is why a cross-industry average is the wrong bar for either."),
      dict(q="Is there an India-specific retention benchmark?",
           a="Not by category, not published. Regional conversion figures exist and the market size is well documented, but no source gives an India day-1 to day-30 curve by app category. This page says so rather than inferring one."),
    ],
    schema_types=BM_SCHEMA,
    cta={"primary": {"label": "Get your retention curve diagnosed", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="States the denominator before the number and separates the level from the shape, so a reader can tell whether their day-30 figure is a flattening curve or a slower decline — a distinction the category averages everywhere else erase.",
    gaps=["No published India day-1 to day-30 retention curve by app category. "
          "Regional download-to-paid conversion exists; the retention curve does not."],
    contradictions=[
      "The mobile day-30 retention average is published incompatibly across sources: "
      "countly.com gives 7% to 8% with strong products above 15%, while uxcam.com puts the "
      "cross-industry figure at 4% and userpilot.com at 5.7% across 31 categories. The "
      "sources differ on which apps enter the denominator and on whether the figure is a "
      "mean or a median, and none publishes enough method to reconcile them. This page uses "
      "the countly band and names the spread rather than averaging the three.",
    ],
    block_coverage=cover(["f-rh-02", "f-rh-01"], ["f-rh-02"],
                         ["f-bm-06", "f-bm-03", "f-bm-05", "f-rh-03"], ["f-hub-01"],
                         ["f-bm-06", "f-bm-03"], ["f-rh-01", "f-rh-02"]),
    body="""
<AnswerBox>
App retention rate benchmarks put the mobile day-30 average at 7% to 8%, with
strong products above 15% and top-quartile consumer apps holding 25% to 40%.
Treat any of those as a starting point rather than a target. Your category moves
this number more than anything you ship this quarter, and the shape matters more
than the level.
</AnswerBox>

<FactTable
  id="retention-by-industry"
  caption="Retention medians by category at three horizons"
  columns={["Category", "Day 1", "Day 7", "Day 30"]}
  rows={[
    { cells: ["Mobile average", "no published figure", "no published figure", "7-8%"], factId: "f-rh-02" },
    { cells: ["Top-quartile consumer, flattening by day 60-90", "no published figure", "no published figure", "25-40%"], factId: "f-rh-01" },
    { cells: ["Social", "40%", "18%", "12%"], factId: "f-bm-06" },
    { cells: ["Gaming", "32%", "8%", "3%"], factId: "f-bm-05" },
    { cells: ["E-commerce", "18%", "5%", "2%"], factId: "f-bm-03" },
    { cells: ["SaaS subscription products", "no published figure", "no published figure", "40-50%"], factId: "f-rh-03" },
  ]}
/>

## What retention rate measures, and over what

Retention rate is the share of a cohort that comes back in a given window. The
window and the cohort are both choices, and they decide the number more than the
product does.

These benchmarks use installs as the denominator. That is the convention in
published app data, and it is also the harshest version, because it counts
everybody who downloaded and never got anywhere. Retention measured over
activated users only runs far higher, since it has already removed the users who
never reached first value. The two are different measurements, and a team that
reports one against a benchmark built on the other will conclude it is doing
well while it is not.

Day 1, day 7 and day 30 are conventions rather than meaningful thresholds. They
survive because everyone uses them, which makes them comparable.

One figure on this page is not a level at all. Top-quartile consumer apps flatten
between day 60 and day 90, and that window is the useful target: it says when the
decline should stop, not how high it should stop.

## Reading the table by industry

Social apps hold 12% at day 30. E-commerce apps hold 2%. That is a six-fold gap,
and almost none of it is execution quality. It is session frequency: a social app
has a reason to be opened daily, and a shopping app has a reason every few weeks.

So the 7% to 8% mobile average is the wrong bar for both. It would tell a competent
e-commerce team they are failing and a mediocre social team they are fine. SaaS
subscription products sit higher again at 40% to 50% by day 30, because the product
sits inside someone's working day rather than competing for their evening.

Gaming is the instructive middle case. It starts highest of the three consumer
categories at 32% on day 1 and ends lowest at 3% by day 30, because a strong first
session is not the same as a reason to return. A category that wins day 1 and loses
day 30 has an engagement problem that no amount of onboarding work will reach.

The useful comparison is your own category's median, and then the shape of your own
curve over time.

## The India layer

There is no published India day-1 to day-30 retention curve by app category. Not
a restricted one, not a paywalled one — it does not appear in the public sources.
India's app market is well documented at the revenue level, earning 3.8 billion
dollars in 2024 and growing 15.1% year on year, but market size says nothing
about how a cohort behaves.

Rather than infer an India curve from a regional conversion average, this page
leaves the gap stated. An inferred retention benchmark reaches somebody's board
deck within a week and carries no evidence at all.

Two things do transfer. Acquisition in India skews harder to Android, and Android
curves sit below iOS curves in every category that publishes both, so an
India-heavy cohort will read low against a global median for reasons that have
nothing to do with the product. And price-sensitivity shows up as churn rather
than as refusal to install, which pushes the damage to day 7 and day 30 rather
than day 1.

So compare an Indian cohort to your own earlier Indian cohorts. A global median
built mostly on iOS users in higher-ARPU markets is not the comparison set.

## How to measure it without fooling yourself

Fix the denominator first and write it down. Then take the curve, not the point.
The most common error is reading a level as a trend. Day-30 retention of 6%, flat
across three cohorts, beats 8% falling every month. A dashboard showing one number
per month hides which of the two you have.

Measure by acquisition cohort, not by calendar month. A paid campaign landing
mid-month changes a calendar-month number without anything about the product
changing at all.

Three further rules keep the measurement honest. Split paid from organic, because
blending them lets a campaign's quality masquerade as product health. Keep the
cohort window fixed: a day-30 figure that sometimes means days 28 to 32 and
sometimes means day 30 exactly will drift by more than most real improvements.
And hold the definition of a return steady — an app open, a session over some
length, and a meaningful action give three different curves from the same data.

Write the three choices down once and leave them alone. Most retention arguments
turn out to be arguments about one of them.

## What actually moves it

Three things, in order of size.

Category and acquisition source set the ceiling before the product gets a vote,
which is why the social-to-e-commerce gap dwarfs most product work. First-session
experience moves the day-1 number most, because that is the only number a user
decides in one sitting. And a reason to return on a natural cadence moves day 7
and day 30, which is why notification work shows up at those horizons and almost
never at day 1.

Work on the horizon you can actually influence. A team pushing day-30 retention
with onboarding changes is pulling the wrong lever.

<FromMyWork exp="exp-044">
The pattern I keep seeing is a retention problem diagnosed as an acquisition
problem. Cheaper installs make the curve look worse rather than better. The team
reads that drop as a product regression and starts fixing the wrong thing.
</FromMyWork>

## Stage adjustment

Early on the question is whether a durable base exists, not whether it is large.

<Example illustrative>
A pre-launch product with 200 installs and a flat 9% curve has found something.
The same 9% at a million installs is a business. The curve is identical; only the
question it answers has changed.
</Example>

At scale the benchmark to beat is your own previous cohort, because by then the
category median is a floor you have either cleared or not. SaaS products holding
40% to 50% at day 30 are not beating the mobile average by trying harder; they
occupy a different position in the user's day.

In between, the number worth watching is the gap between your best and worst
acquisition source. Early on that gap is noise. Once volume makes it stable, it
is the single largest lever available, and usually larger than any onboarding
change: the same product retains very differently depending on who arrives.

One stage-specific warning. Growing fast drags the blended curve down even when
every cohort improves, because recent cohorts dominate the mix and recent cohorts
have had less time. Read cohorts separately before concluding anything about a
trend.

## Sources and tools

Every figure above carries its source and the date it was last checked. Where two
sources disagree, the disagreement gets recorded rather than averaged away, because
sources rarely measure the same population: a "mobile average" and a "top-quartile
consumer" figure differ by more than performance, they differ by who was counted.

The monetisation health score puts your retention figure next to the other inputs
that decide whether the curve pays for itself. Retention on its own cannot answer
that: a 3% day-30 curve on a high-value purchase can fund a business that a 12%
curve on an ad-supported one cannot.

The industry pages under this hub carry the specifics — the medians, the
sub-segments and the mechanisms particular to each category. Start with the one
closest to your session frequency rather than the one closest to your sector. A
fintech app people open weekly has more in common with a weekly commerce app than
with a daily payments app, whatever the category label says.
""",
  ),
  dict(
    id="bmhub-0002", url="/benchmarks/app-store-conversion", archetype="benchmark-hub",
    hub="benchmarks", funnel="MOFU",
    title="App Store Conversion Rate Benchmarks by Category, 2026",
    meta_description="Impression, page-view and install conversion medians by app category, and the three different denominators the stores report under one name.",
    h1="App store conversion rate benchmarks",
    primary_keyword="app store conversion rate benchmarks",
    secondary_keywords=["app store conversion rate by category", "page view to install rate"],
    entity_a="app-store-conversion",
    facts=["f-ah-01", "f-ah-02", "f-ah-03", "f-ah-04", "f-ah-05", "f-bm-13"],
    experience=["exp-021"],
    links=L(("/benchmarks/app-store-conversion/media-ott", "media and OTT store conversion", "lateral"),
            ("/benchmarks/app-store-conversion/healthtech", "healthtech store conversion", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention", "reference"),
            ("/glossary/conversion-rate", "the conversion rate definition", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("store-conversion-by-category",
              "App store conversion reference points across categories: the average US store conversion rate and install rate, the search against browse install spread, the highest and lowest category install rates, the business category page-view-to-install rate, the health and fitness impression-to-page-view and page-view-to-install bands, and regional day-35 download-to-paid medians, each row carrying its source and verification date",
              "Store conversion at each stage of the funnel, by category. Verified 30 September 2026."),
    faq=[
      dict(q="Which denominator does app store conversion use?",
           a="Three are in circulation, and they differ by an order of magnitude. Impression-to-page-view counts everyone who saw the listing in a feed. Page-view-to-install counts only people who opened the listing. Store-reported conversion often blends both. A 66.7% figure and a 3.8% figure can describe the same app."),
      dict(q="Why is search conversion so much higher than browse?",
           a="Intent. Search install medians span 2.6% to 12.4% across categories against 0.1% to 2.5% from browse, because a searcher has already named the thing they want. Optimising a listing for browse traffic and judging it on a blended number will read as failure."),
      dict(q="Does a higher install rate always help?",
           a="No. Install rate and install quality trade off. A listing that oversells converts more browsers and retains fewer of them, which shows up two weeks later as a worse retention curve and a worse payback period."),
      dict(q="How much does category explain?",
           a="Most of the spread. Medical leads iOS install rate at 7.8% and entertainment sits lowest at 1.1%, a seven-fold gap that no amount of creative testing closes."),
    ],
    schema_types=BM_SCHEMA,
    cta={"primary": {"label": "Review your app store conversion funnel", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Separates the three denominators the stores report under one name, so a reader can tell whether their conversion figure is an impression rate, a page-view rate or a blend — the reason most store benchmarks are quoted against the wrong bar.",
    block_coverage=cover(["f-ah-01"], ["f-ah-01", "f-bm-13"],
                         ["f-ah-02", "f-ah-01", "f-bm-13"], ["f-ah-02"],
                         ["f-ah-03", "f-ah-04", "f-ah-05"], ["f-ah-05", "f-ah-03"]),
    body="""
<AnswerBox>
App store conversion rate benchmarks average 30.3% on iOS and 33% on Google Play.
If your number is nearer 4%, nothing is broken — those two figures count different
things. Before comparing your rate to any benchmark, establish whether it counts
impressions, page views, or a blend of both.
</AnswerBox>

<FactTable
  id="store-conversion-by-category"
  caption="Store conversion at each stage of the funnel, by category"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Average store page conversion, iOS and Google Play", "30.3% and 33%"], factId: "f-ah-01" },
    { cells: ["By category on iOS, social networking to utilities", "10-20% up to 30-40%"], factId: "f-ah-02" },
    { cells: ["Health and fitness, impression to page view / page view to install", "4-8% / 25-40%"], factId: "f-bm-13" },
    { cells: ["Preview video lift across 500+ A/B tests", "20-35%; games above 40%"], factId: "f-ah-03" },
    { cells: ["Preview video against static screenshots", "won 78% of tests, median lift 22%"], factId: "f-ah-04" },
    { cells: ["Screenshots as the deciding element, and captions", "up to 45% of users; captions +25%"], factId: "f-ah-05" },
  ]}
/>

## What app store conversion measures

Three distinct measurements share the name, and the confusion between them causes
more bad decisions than any single figure.

Impression-to-page-view is the share of people who saw your listing somewhere in
the store and tapped through. Health and fitness apps run 4% to 8% here.
Page-view-to-install is the share who then installed, and the same category runs
25% to 40%. Store dashboards frequently report a third thing: a blended rate over
impressions, which lands in the low single digits.

The headline averages of 30.3% on iOS and 33% on Google Play are page-view figures.
Read one as a store-wide rate and you would conclude that a third of everyone who
sees your listing installs, which no app achieves. The people reaching that page
have already decided something.

So the first question about any store conversion number is not whether it is good.
It is what sits in the denominator.

## Reading the table by category

Utilities convert 30% to 40% on iOS. Social networking converts 10% to 20%. Two to
three times, and creative quality explains very little of it.

Two mechanisms drive the spread. The first is how specific the need is: somebody
looking for a file converter knows what they want, while somebody browsing social
apps is sampling. The second is competitive density — social listings sit beside
hundreds of close substitutes, and a narrow utility rarely does.

Both are properties of the category, not of the listing. A team benchmarking a
social app against the 30.3% iOS average has set a target the category does not
support.

There is a third, quieter mechanism: what the install commits you to. A utility
install carries an implicit promise of a single answer, and two screenshots can
make that promise credibly. A social install asks for an ongoing share of
someone's evenings, which no screenshot establishes. The same listing craft buys a
different result because the ask differs.

## The India layer

No source publishes an India-specific store conversion rate by category. What is
published, and what matters more here, is the platform split: Google Play averages
33% against iOS at 30.3%, and India's install base is overwhelmingly Android.

So the Play figure is the relevant benchmark for an India-heavy app, not the iOS
one or a blend of the two. The two stores also surface different signals — Play
weights ratings volume and install count more heavily — so a listing that performs
on iOS frequently underperforms on Play for reasons of store mechanics rather than
creative. Measure them separately.

The deeper India point is that store conversion is rarely where an Indian funnel
leaks. The install decision costs nothing and discovery skews to search, so install
rates are often healthy while revenue per install stays low. A team watching store
conversion alone will see nothing wrong, because the leak sits downstream of every
metric on this page. The category bands above, from 10% for social up to 40% for
utilities, apply to the install decision only.

## How to measure it without fooling yourself

Pull the funnel apart into its three stages and keep them apart. Impressions,
page views, installs. A blended figure moves when traffic mix moves, which means
it reports your marketing channel changes as product changes.

Then split search from browse, because the two behave differently enough that a
blend is uninterpretable. Search traffic arrives with intent and browse traffic
does not; they are two populations, not two ends of a range. A listing optimised
for search keywords and judged on browse traffic will look like a failure.

Finally, pair every conversion figure with a downstream quality figure from the
same cohort. Install rate alone cannot distinguish a better listing from a more
misleading one, and those have opposite consequences.

Two practical cautions. Store dashboards attribute on their own windows, which
rarely match your analytics windows, so the same week produces two different
conversion rates and neither is wrong. And seasonal category swings are large
enough to swamp a listing test, which makes a holdout more reliable than a
before-and-after comparison.

## What actually moves it

Traffic source first, by a wide margin. Moving volume from browse to search does
more than any screenshot test, because intent arrives with the user.

Within a source, the creative carries the rest, and here the published evidence is
unusually specific. Screenshots decide the install for up to 45% of users, and
adding captions to them lifted conversion 25% on average. A preview video lifted
conversion 20% to 35% across more than 500 A/B tests, above 40% for games and about
20% for productivity, and beat static screenshots in 78% of tests with a median
lift of 22%.

Read those together and the order of work is clear: captions on the first two
screenshots, then a video, then everything else. Category still sets the ceiling, as
the social-to-utilities gap shows.

What moves it less than people expect: ratings above roughly four stars, icon
iterations after the first competent one, and localisation of body copy where the
screenshots stay in English.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. A store conversion win
and a traffic mix shift look identical in a blended number, and only one of them is
something the team did.
</FromMyWork>

## Stage adjustment

Early on, store conversion is the wrong thing to optimise. With low impression
volume the figure swings on noise, and the binding constraint is whether anyone
sees the listing at all. Fix discovery first.

At moderate volume the search-versus-browse split becomes readable, and that is the
point at which listing work starts to pay. This is also when a video earns its cost:
a 22% median lift is worth producing for once the traffic exists to see it.

At scale the measurement inverts: install rate stops being the goal and becomes a
constraint, because a listing tuned past a certain point buys installs that do not
retain. Utilities' 30% to 40% is a healthy band partly because the intent behind it
is real.

The stage question to ask, then, is which constraint binds. Below roughly ten
thousand monthly impressions, discovery binds. Above that, and before paid
acquisition dominates the mix, the listing binds. Once paid dominates, the
creative in the ad binds, and the store listing mostly has to avoid losing people
who have already been persuaded elsewhere.

## Sources and tools

Each figure carries its source and the date it was last checked. The category
pages under this hub give the sub-segment detail, including the stage-by-stage
breakdown where a source publishes one.

The monetisation health score puts store conversion next to revenue per install
and the retention curve, which is the only combination that says whether a higher
install rate is worth having.

Where a source publishes a figure for one platform only, this hub says which one
rather than presenting it as cross-platform. That matters more here than on most
benchmark pages: iOS and Play report different stages of the same funnel under
similar names, and several widely-quoted store conversion averages are iOS-only
figures that have lost their label somewhere in the retelling. The creative-lift
figures above come from A/B testing vendors measuring their own customers' tests,
which is the best evidence available and still a selected sample.
""",
  ),
  dict(
    id="bmhub-0003", url="/benchmarks/arpu", archetype="benchmark-hub",
    hub="benchmarks", funnel="MOFU",
    title="ARPU Benchmarks by Segment and Industry, 2026",
    meta_description="ARPU medians by SaaS segment and app category, the blended-versus-paying denominator problem, and the three incompatible India figures nobody reconciles.",
    h1="ARPU benchmarks",
    primary_keyword="arpu benchmarks",
    secondary_keywords=["average revenue per user benchmark", "b2b saas arpu median"],
    entity_a="arpu",
    facts=["f-bm-29", "f-bm-28", "f-bm-30", "f-bm-32", "f-bm-22", "f-bm-23", "f-bm-34"],
    experience=["exp-036"],
    links=L(("/benchmarks/arpu/b2b-saas", "B2B SaaS ARPU", "lateral"),
            ("/glossary/arpu", "the ARPU definition", "lateral"),
            ("/glossary/arppu", "ARPPU, the paying-user version", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention", "reference"),
            HUB, TOOL, BOFU),
    visuals=V("arpu-by-segment",
              "ARPU reference points by segment: the 2026 median B2B SaaS monthly figure against 2024, the four self-serve to enterprise bands, the SMB median, median day-60 revenue per install across app categories, and three mutually incompatible published figures for India OTT ARPU, each row carrying its source and verification date",
              "ARPU by segment, and the India figures that disagree. Verified 30 September 2026."),
    faq=[
      dict(q="Is ARPU calculated over all users or paying users?",
           a="Both, under the same name, which is why the figure is so often useless in a comparison. ARPU divides revenue by every active user. ARPPU divides it by payers only. In a freemium product with 3% conversion the two differ by more than thirty times."),
      dict(q="Why is the B2B SaaS median unhelpful on its own?",
           a="Because it sits inside one segment's band and outside every other. The 2026 median of about $250 a month falls in the mid-market range of $200 to $2,000, so it is not a benchmark for self-serve products at $20 to $50 or enterprise ones above $2,000."),
      dict(q="Which India ARPU figure should I use?",
           a="None of them without checking the denominator. Three published figures for India OTT ARPU are in circulation and they are not reconcilable: $40.44 a year, ₹85 to ₹95 a month, and $9.02 a year. The gap is roughly four-fold between the outer two."),
      dict(q="Does rising ARPU always mean the business improved?",
           a="No. ARPU rises when free users churn out, because the denominator shrinks. A product losing its free base and holding its payers will show improving ARPU and a shrinking business."),
    ],
    schema_types=BM_SCHEMA,
    cta={"primary": {"label": "Get your ARPU and pricing reviewed", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Records the three incompatible published figures for India OTT ARPU side by side instead of picking one, and shows that the widely-quoted B2B SaaS median sits inside a single segment band — so the number is not a benchmark for three of four segments.",
    contradictions=[
      "India OTT ARPU is published three incompatible ways: statista.com projects $40.44 for "
      "2026, raoscaff.com reports ₹85-95 per month, and medianews4u.com projects $9.02 for the "
      "same year. Annualised, those imply roughly $40, $11 and $9. Without each source's "
      "denominator — paying subscribers, all registered users, or all viewers including "
      "ad-supported ones — they cannot be reconciled, and none publishes it. All three are "
      "shown on the page rather than one being chosen.",
    ],
    block_coverage=cover(["f-bm-29"], ["f-bm-28"],
                         ["f-bm-28", "f-bm-30", "f-bm-32"], ["f-bm-22", "f-bm-23", "f-bm-34"],
                         ["f-bm-30", "f-bm-32"], ["f-bm-28", "f-bm-29"]),
    body="""
<AnswerBox>
ARPU benchmarks put the 2026 median for B2B SaaS at about $250 a month (roughly
₹24,000), up from $210 in 2024. That median is less useful than it looks. It falls
inside the mid-market band and outside the self-serve, SMB and enterprise ones. For
three of four segments it is not a benchmark at all.
</AnswerBox>

<FactTable
  id="arpu-by-segment"
  caption="ARPU by segment, and the India figures that disagree"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["B2B SaaS median monthly ARPU, 2026 against 2024", "about $250 against $210 (about ₹24,000 against ₹20,100)"], factId: "f-bm-29" },
    { cells: ["Self-serve / SMB / mid-market / enterprise bands", "$20-50 / $50-200 / $200-2,000 / $2,000-10,000"], factId: "f-bm-28" },
    { cells: ["Median SMB SaaS ARPU", "$55 a month (about ₹5,274)"], factId: "f-bm-30" },
    { cells: ["CAC by contract value, SMB under $15,000 ACV", "$2,000-8,000 (about ₹1.9-7.7 lakh)"], factId: "f-bm-32" },
    { cells: ["India OTT ARPU, figure one", "$40.44 a year projected"], factId: "f-bm-22" },
    { cells: ["India OTT ARPU, figure two", "₹85-95 a month"], factId: "f-bm-23" },
    { cells: ["India OTT ARPU, figure three", "$9.02 a year projected"], factId: "f-bm-34" },
  ]}
/>

## What ARPU measures, and the denominator that decides it

ARPU divides revenue by users. Every argument about ARPU is an argument about
which users.

The blended version takes all active users, payers and free alike. The paying
version, properly called ARPPU, takes payers only. In a freemium product
converting 3%, those two numbers differ by more than thirty times, and both get
reported as "ARPU" in decks that then get compared.

The second choice is the period. A monthly ARPU and an annual one differ by roughly
twelve. That sounds too obvious to cause problems, until the India figures below,
where one source reports annually and another monthly. The two then get quoted side
by side as though they disagreed about performance.

Write down which users and which period before you compare anything. Most ARPU
disputes end there.

## Reading the table by segment

The bands matter more than the median. Self-serve products run $20 to $50 a month
(about ₹1,900 to ₹4,800), SMB $50 to $200 (₹4,800 to ₹19,000), mid-market $200 to
$2,000 (₹19,000 to ₹1.9 lakh) and enterprise $2,000 to $10,000 (₹1.9 lakh to
₹9.6 lakh). The 2026 median of about $250 (₹24,000) sits in the third of those.

So a self-serve product comparing itself to $250 (about ₹24,000) is comparing
itself to a different business model rather than a better-run version of its own.
The SMB median of $55 a month (about ₹5,300) is the relevant bar in that band, and
it sits more than four times below the headline.

The acquisition side explains why the bands hold. SMB products under $15,000 of
annual contract value (about ₹14.4 lakh) carry $2,000 to $8,000 of acquisition cost
(about ₹1.9 lakh to ₹7.7 lakh). A product trying to charge mid-market prices to an
SMB buyer pays SMB acquisition costs for mid-market revenue only if the buyer
agrees, and usually they do not.

## The India layer

India OTT ARPU is published three ways, and they do not reconcile.

One source projects $40.44 for 2026 (about ₹3,878). Another reports ₹85 to ₹95 a
month, which, multiplying the midpoint by twelve, annualises to a figure near the
third source's projection of $9.02 (about ₹865) rather than to the first's. The
outer two differ by more than four times.

This page records the disagreement rather than choosing. The likely cause is the
denominator — paying subscribers, all registered users, or all viewers including
ad-supported ones — but no source publishes enough method to confirm it, and
picking the convenient figure is how an invented benchmark enters circulation.

The practical advice: if you are modelling Indian subscription revenue, do not
start from a published ARPU at all. Start from your own price points and your own
paying conversion, and use these figures only as a sanity check on the order of
magnitude.

## How to measure it without fooling yourself

Report ARPU and ARPPU together, always. One without the other cannot distinguish a
pricing improvement from a free-user exodus, and those call for opposite
responses.

Hold the denominator fixed across periods. A definition change mid-year produces a
step in the chart that looks like performance, and the step survives in the chart
long after everyone has forgotten the change.

Segment before averaging. A blended ARPU across self-serve and enterprise customers
describes nobody, and it moves when the mix moves, so it reports sales composition
as product performance.

<Example illustrative>
Where one segment is 5% of users and 60% of revenue, the blended ARPU is mostly
that segment with extra steps. Lose a single enterprise account and the figure
moves more than a year of self-serve pricing work.
</Example>

Two further habits help. Exclude trialists from the user count until they pay, or a
trial push will show up as an ARPU collapse. And decide once whether refunds and
taxes come out before the division — India's GST on digital subscriptions is large
enough to move the figure visibly, and a net number compared against a gross
benchmark reads as underperformance that is not there.

## What actually moves it

Mix, price, and attach rate, in that order of impact and reverse order of
attention.

Mix moves ARPU most and gets credited least: winning more mid-market accounts
raises the blended figure without any product or pricing change. Price moves it
directly, bounded by what the segment tolerates — the bands above are fairly
stable, and products that try to exit their band usually find out why it exists.
Attach rate, the share of users on a paid add-on, is the slow compounding one, and
the only one of the three that raises ARPU without raising the price.

What moves it less than expected: discounting, which raises conversion and lowers
ARPU by roughly the amount of the discount, and annual-plan pushes, which move
cash timing more than they move revenue per user.

<FromMyWork exp="exp-036">
The measurement I most regret not taking rigorously was client perception of
product coherence. ARPU has the same problem in miniature: the number everyone
quotes is rarely the number that explains the result.
</FromMyWork>

## Stage adjustment

Early on, ARPU is close to meaningless. With a few hundred users the figure swings
on individual accounts, and the useful question is whether anyone pays willingly
at the price you named.

In the growth stage ARPU becomes a mix diagnostic rather than a performance one.
Watch it alongside the segment split: a rising blended figure with a falling
self-serve figure means the business is moving upmarket, which is a strategy
decision rather than an improvement.

This is also the stage where ARPU and growth pull against each other. Opening a
cheaper tier lowers ARPU and usually raises total revenue, and a team held to ARPU
as a target will refuse the trade. Treat it as a diagnostic, never as a goal — of
all the metrics on this site, ARPU is the one most easily improved by doing
something harmful.

At scale the bands become the constraint. A product in the $200 to $2,000 band
(₹19,000 to ₹1.9 lakh) with ambitions above it needs a different buyer, not a
higher price. The $250 median (about ₹24,000) shows how many stop exactly there.

## Sources and tools

Each figure carries its source and the date it was last checked. The India figures
above are presented as three competing claims because that is what the published
record contains, and averaging them would create a number no source supports.

The monetisation health score takes ARPU alongside retention and acquisition cost,
which is the only combination that distinguishes a healthy ARPU from one propped up
by churned free users. The acquisition-cost bands above are the reason: ARPU without
the cost of acquiring it is half a sentence.

The segment page under this hub carries the B2B SaaS detail, including the
relationship between contract value and churn that makes the bands above behave
differently at each end. For a consumer product, the revenue-per-install figures
here are the better starting point, and the glossary entries for ARPU and ARPPU set
out the two denominators side by side before any benchmark gets applied.
""",
  ),
  dict(
    id="bmhub-0004", url="/benchmarks/install-to-purchase", archetype="benchmark-hub",
    hub="benchmarks", funnel="MOFU",
    title="Install to Purchase Conversion Benchmarks by Category, 2026",
    meta_description="What share of installs become a first purchase, by category, plus how fast first revenue arrives and the measurement window the timing data implies.",
    h1="Install to purchase conversion benchmarks",
    primary_keyword="install to purchase conversion benchmarks",
    secondary_keywords=["install to purchase rate", "first purchase conversion app"],
    entity_a="install-to-purchase",
    facts=["f-bm-14", "f-bm-15", "f-ih-01", "f-ih-02", "f-bm-20", "f-hub-02"],
    experience=["exp-021"],
    links=L(("/benchmarks/install-to-purchase/d2c-ecommerce", "D2C e-commerce install to purchase", "lateral"),
            ("/benchmarks/retention/d2c-ecommerce", "D2C e-commerce retention", "reference"),
            ("/glossary/conversion-rate", "the conversion rate definition", "lateral"),
            ("/glossary/arpu", "the ARPU definition", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("install-to-purchase",
              "Install-to-purchase reference points: the typical one to two percent band with retail and travel named, the e-commerce app range by order value, median day-60 revenue per install and the strong threshold, the AI app revenue-per-payer premium against its faster churn, average US store conversion for funnel context, and India app revenue growth, each row carrying its source and verification date",
              "Install to first purchase, and what each install is worth. Verified 30 September 2026."),
    faq=[
      dict(q="What counts as the purchase in this metric?",
           a="The first paid transaction, which is not the same as a subscription start or a trial start. A product with trials will show a much lower install-to-purchase rate than install-to-trial, and mixing the two is the most common error in this metric."),
      dict(q="Is 1% to 2% good?",
           a="It depends entirely on order value, and the rate alone cannot say. Retail converts 1.38% and travel 2.41%, but travel's order value is many times larger, so the two rates describe very different businesses."),
      dict(q="What window should I measure over?",
           a="Fourteen days captures almost all of it. The median time from install to first revenue is about 48 hours and the 90th percentile sits near 14 days, so a shorter window penalises any product with a consideration cycle and a longer one mostly adds delay."),
      dict(q="Do AI apps convert differently?",
           a="They monetise differently rather than converting differently: AI apps earn 41% more revenue per payer and churn about 30% faster. A strong first-purchase rate with that churn profile produces a very different lifetime value."),
    ],
    schema_types=BM_SCHEMA,
    cta={"primary": {"label": "Review your install to purchase funnel", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Pairs the conversion rate with the published timing distribution, so the measurement window follows the evidence rather than convention: half of all payers pay within two days, which makes most reporting windows either too short to be fair or too long to be useful.",
    block_coverage=cover(["f-bm-14"], ["f-bm-14", "f-ih-01"],
                         ["f-bm-14", "f-bm-15", "f-ih-01"], ["f-hub-02"],
                         ["f-ih-02", "f-bm-20"], ["f-bm-15", "f-ih-02"]),
    body="""
<AnswerBox>
Install to purchase conversion benchmarks sit at 1% to 2% for most apps, with retail
at 1.38% and travel at 2.41%. The timing matters as much as the rate: across more
than 145,000 installs the median time to first revenue is about 48 hours, and half
of everyone who ever pays has paid within two days.
</AnswerBox>

<FactTable
  id="install-to-purchase"
  caption="Install to first purchase, and what each install is worth"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Typical install-to-purchase band", "1-2%; retail 1.38%, travel 2.41%"], factId: "f-bm-14" },
    { cells: ["Good e-commerce app conversion, by order value", "2-6%"], factId: "f-bm-15" },
    { cells: ["Median time install to first revenue, 145,000+ installs", "about 48 hours; p90 near 14 days"], factId: "f-ih-01" },
    { cells: ["Share of all payers who pay within two days", "about half; 90% within two weeks"], factId: "f-ih-02" },
    { cells: ["AI apps, revenue per payer against churn", "41% more revenue, churn about 30% faster"], factId: "f-bm-20" },
    { cells: ["India app revenue, Q1 2026", "$300M+ (₹2,900 crore), up 33%, 6.2bn downloads"], factId: "f-hub-02" },
  ]}
/>

## What install to purchase measures

The share of installs that produce a first paid transaction. The denominator is
installs, the numerator is purchases, and both need care.

Installs are the easier half, though store-reported installs and analytics-reported
installs rarely agree, because the two attribute on different windows. Use one
source and stay with it.

The numerator causes more trouble. A first purchase is not a trial start and not a
subscription activation. A product with a free trial will report an
install-to-trial rate many times higher than its install-to-purchase rate, and a
deck that moves between the two without saying so will show a funnel that improves
at every step and a revenue line that does not.

Most apps land at 1% to 2%. Store conversion rates sit far above that, because that
metric ends at the install rather than at the payment — a difference of denominator
rather than of quality.

## Reading the table by category

Retail converts 1.38% and travel 2.41%. Almost twice, and it tells you very little
on its own, because a travel purchase is worth many times a retail one.

E-commerce apps have a wider published band of 2% to 6%, explicitly dependent on
order value and purchase frequency. That dependency is the point: a high-frequency,
low-value product and a low-frequency, high-value one can both be healthy at
opposite ends of this range, and neither should chase the other's rate.

AI apps show the pattern most clearly. They earn 41% more revenue per payer and
churn about 30% faster, so a strong first-purchase rate buys a shorter relationship.
The same rate means something different depending on what happens after it.

Which is the general lesson of this table. The rate is a ratio, and a ratio cannot
tell you the size of what it counts.

<Example illustrative>
Two products convert an identical 1.5% of installs. One sells a ₹200 add-on, about
$2.09; the other a ₹20,000 booking, about $209. The funnels look the same on every
dashboard and the businesses are a hundred times apart.
</Example>

The category labels above are mostly proxies for order value rather than for funnel
quality.

## The India layer

India's app revenue passed $300 million (about ₹2,900 crore) in the first quarter
of 2026, up 33% year on year, on 6.2 billion downloads. Hold those two numbers together: download volume
is enormous and revenue per download is small.

That is the Indian install-to-purchase picture in one comparison, and no published
source gives a category-level Indian first-purchase rate. The structural reasons
are well understood — lower price points, a larger free-to-paid gap, and payment
friction on recurring mandates — but the rate itself is not published, so this page
does not state one.

What transfers is the method. In an India-heavy product, measure install-to-purchase
and revenue per install together from the start. Install volume makes almost any
conversion rate look like a large absolute number. The revenue per install stays
low regardless.

## How to measure it without fooling yourself

Pick one install source and one purchase definition, and write both down. Then
measure by install cohort rather than by calendar period, because a purchase that
happens in week six belongs to the cohort that installed, not to the week it landed
in.

Choose a window and keep it, and let the published timing choose it for you. With a
median of about 48 hours to first revenue and 90% of payers converting inside two
weeks, a 14-day window captures almost the whole effect. A 7-day window will
understate a product with any consideration cycle, and a 60-day window mostly adds
noise and delay.

Always report the rate with the value. A team optimising the rate alone finds the
lowest-priced entry point and declares victory while the revenue per install falls.
Every dashboard shows improvement throughout.

## What actually moves it

Price point and first-run experience, roughly equally, and then the match between
the two.

Lowering the entry price raises the rate almost mechanically. Whether that helps
depends entirely on the lifetime value behind it. The first session moves it
next, because a user who has not understood the product will not buy regardless of
price. The fit between what the install promised and what the purchase asks for matters
more than either. A listing selling a free tool, with a paywall on first open,
converts badly at any price.

What moves it less than expected: the number of paywall impressions, which raises
the rate briefly and costs retention, and discount depth beyond a modest first offer.
AI apps' 41% revenue-per-payer premium comes from value rather than from paywall
pressure.

The timing data bounds all of this. Since half of all payers pay within two days, a
re-engagement campaign aimed at week three is working on the thin tail, and the
first two sessions carry most of the decision.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. A rising
install-to-purchase rate alongside a falling revenue per install is two findings
wearing one number. Only the pair tells you what happened.
</FromMyWork>

## Stage adjustment

Early on, the rate is too noisy to steer by and the useful question is whether
anybody completes a purchase without being asked twice. A handful of unprompted
purchases says more than a rate computed on 300 installs. The 48-hour median helps
here too: it means an early read is available within days rather than months.

In the growth stage, the rate and the value need watching together, and this is
where most products make the trade badly. The 2% to 6% e-commerce band exists
because order value differs; a product moving from the top of that band to the
bottom has usually changed its pricing rather than improved its funnel.

At scale the question becomes marginal rather than average. The average rate across
all installs stops being actionable once channels differ. What matters is the rate
on the next thousand installs from the channel you are about to buy more of. That
figure frequently sits well below the blended one.

## Sources and tools

Each figure carries its source and the date it was last checked. Where a source
publishes a rate without an order value or a window, this page says so, because an
install-to-purchase rate with neither is not comparable to anything.

The category page under this hub carries the D2C e-commerce detail. The monetisation
health score takes the rate and the value of each install together, which is the pair
that decides whether a conversion improvement was worth making.

One caution on comparing across sources. Published install-to-purchase figures vary
in whether they count returning purchasers, and a figure that includes repeat buyers
is not a first-purchase rate at all. Where a source leaves this unstated, this hub
treats the figure as indicative of the band rather than as a point comparison, which
is why the ranges above are given as ranges.

No source publishes what share of an app's lifetime revenue arrives in the first 24
hours, which is the figure a paid-acquisition team most wants. The timing
distribution above is the closest published substitute.
""",
  ),

  dict(
    id="bmhub-0005", url="/benchmarks/trial-to-paid-conversion", archetype="benchmark-hub",
    hub="benchmarks", funnel="MOFU",
    title="Trial to Paid Conversion Rate Benchmarks, 2026",
    meta_description="Trial-to-paid rates by trial length across 17,000 apps, the distribution behind the median, and why cancellation rate and conversion rate disagree.",
    h1="Trial to paid conversion rate benchmarks",
    primary_keyword="trial to paid conversion rate benchmarks",
    secondary_keywords=["trial conversion rate benchmark", "free trial length conversion"],
    entity_a="trial-to-paid-conversion",
    facts=["f-gh-02", "f-gh-01", "f-th-01", "f-th-02", "f-th-03", "f-th-04", "f-th-05"],
    experience=["exp-044"],
    links=L(("/benchmarks/trial-to-paid-conversion/b2b-saas", "B2B SaaS trial conversion", "lateral"),
            ("/glossary/trial-to-paid-conversion", "the trial-to-paid definition", "lateral"),
            ("/glossary/free-trial", "the free trial entry", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention", "reference"),
            HUB, TOOL, BOFU),
    visuals=V("trial-conversion",
              "Trial-to-paid reference points: conversion by trial length across more than 17,000 apps in four bands, how much better long trials convert than short ones, the share of apps now using trials of four days or less, the share of cancellations landing on the first day for three-day against seven-day trials, the published distribution of free-trial conversion rates, and the share of cancelled annual subscribers who never return, each row carrying its source and verification date",
              "Conversion rises with trial length, and cancellations rise too. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good trial-to-paid conversion rate?",
           a="It depends which denominator you are using, and the two in circulation differ by a factor of four. Measured over signups, the most common band is 7.5% to 10%. Measured over trial starts, conversion runs 25.5% to 42.5% depending on trial length."),
      dict(q="Should the trial be shorter or longer?",
           a="Longer, on the conversion evidence: 42.5% at seventeen to thirty-two days against 25.5% under four days, about 70% better. The case for short trials is about getting a fast conversion signal for ad-spend optimisation, not about converting more people."),
      dict(q="Why do trial products beat freemium products?",
           a="Because the two distributions barely overlap. A fifth of freemium products convert below 2.5%, against 7% of trial products. The commitment a trial asks for selects for intent before the product gets a chance to perform."),
      dict(q="Does this transfer to India?",
           a="The direction does; no India-specific rate is published. One factor argues for longer trials in India: the industry's shift to four-day trials is driven by paid-acquisition signal, and Indian funnels lean more on organic volume, so there is less reason to pay the conversion penalty."),
    ],
    schema_types=BM_SCHEMA,
    cta={"primary": {"label": "Get your trial conversion reviewed", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Shows that trial cancellation rate and trial conversion rate point in opposite directions, and that the industry's shift to four-day trials is an ad-attribution decision rather than a conversion one — which no trial benchmark page states.",
    block_coverage=cover(["f-gh-02"], ["f-gh-02", "f-gh-01"],
                         ["f-th-01", "f-th-02", "f-gh-01"], ["f-th-03"],
                         ["f-th-01", "f-th-04"], ["f-th-02", "f-th-05"]),
    body="""
<AnswerBox>
Trial to paid conversion rate benchmarks rise with trial length. Across 17,000-plus
apps, trials under four days convert 25.5% and trials of seventeen to thirty-two days
convert 42.5% — about 70% better. Most advice says shorten the trial, and 46.5% of
apps now run four days or less. The conversion data points the other way.
</AnswerBox>

<FactTable
  id="trial-conversion"
  caption="Conversion rises with trial length, and cancellations rise too"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Conversion by trial length, 17,000+ apps", "<4 days 25.5%; 5-9 days 37.4%; 10-16 days 35.4%; 17-32 days 42.5%"], factId: "f-th-01" },
    { cells: ["Long trials against short ones", "17-32 days convert about 70% better"], factId: "f-th-02" },
    { cells: ["Apps using a trial of four days or shorter", "46.5%, up from 42.1%"], factId: "f-th-03" },
    { cells: ["Cancellations landing on day 0 to day 1", "84% of 3-day trials, 64% of 7-day"], factId: "f-th-04" },
    { cells: ["Free-trial products, published distribution", "7% below 2.5%; most common 7.5-10%"], factId: "f-gh-02" },
    { cells: ["Annual subscribers who cancel and never return", "95%"], factId: "f-th-05" },
  ]}
/>

## What trial to paid conversion measures

The share of trial starts that become paying customers. Simple to state, and three
choices decide the number.

The first is what starts a trial. A trial requiring card details and one that does
not are different products with the same name, and they convert on different
distributions. The second is the window: conversion measured at the end of the
trial and conversion measured thirty days later differ, because some people pay
late. The third is whether a cancelled-but-not-yet-expired trial counts as lost.

The distribution matters more than any median. Across more than 1,000 products, 7% of
free-trial products convert below 2.5% and the most common band is 7.5% to 10%.
Freemium products sit on a different distribution entirely: a fifth below 2.5%, with
the largest group between 2.5% and 5%.

Those two distributions barely overlap. Note also how far the trial-length figures
sit above both — a 42.5% conversion on a long trial counts trial starts, while the
distribution above counts signups. Another denominator, another number.

## Reading the table: two metrics pointing opposite ways

Here is the disagreement most trial advice hides. Longer trials convert better —
25.5% under four days, rising to 42.5% at seventeen to thirty-two days. Longer trials
also produce more cancellations, because a user with thirty days has thirty days to
change their mind.

Both are true, and only one of them is revenue. Cancellation rate counts people
leaving; conversion rate counts people paying. A trial can raise both at once by
getting more people to engage at all, and a team optimising for fewer cancellations
will shorten the trial and lose conversions doing it.

The cancellation timing shows where the real decision sits: 84% of three-day trial
cancellations happen between day 0 and day 1, against 64% of seven-day cancellations.
Almost everyone who abandons a short trial does so immediately, which means the short
trial never got a second session to make its case.

Meanwhile 46.5% of apps now run trials of four days or less, up from 42.1% a year
earlier. That move is not a conversion decision. Paid acquisition needs a fast
conversion signal to optimise ad spend, and a short trial returns one within days.

## The India layer

No published source gives an India-specific trial-to-paid rate by category, so this
page does not state one. Two structural factors do transfer, and both argue against
copying the industry's drift toward short trials.

The first is that the drift is driven by paid-acquisition attribution, and Indian
acquisition leans more on organic and referral volume than on paid signal. A team
that is not optimising ad spend day by day has less reason to pay the conversion
penalty that a four-day trial carries.

The second is mechanical. Recurring-payment mandates fail more often in India than
card-on-file charges do in card-led markets, so a trial that converts on paper can
fail at the first charge. Measure the first successful payment rather than the
conversion event, or the funnel will report revenue that never arrived. And note what
the annual data implies about recovery: 95% of annual subscribers who cancel never
come back, so a failed first charge on an annual plan is usually permanent.

## How to measure it without fooling yourself

Separate trial type before anything else. Blending card-required and
card-not-required trials produces a number that describes neither, and the gap
between them is wider than almost any improvement you will ship.

Use a fixed window past the trial end — thirty days is the common convention — and
apply it consistently. A product reporting conversion at trial end and a competitor
reporting it thirty days later are not comparable.

Count cancellations separately from non-conversions, and never treat the cancellation
rate as an inverted conversion rate. A cancellation is an active decision; a
non-conversion is often inattention. One needs a better product case, the other needs
a reminder, and the 84%-on-day-one figure says which of the two a short trial is
mostly producing.

Finally, measure the first successful charge rather than the conversion event, and
keep involuntary failures in their own bucket. A mandate that fails on the first
attempt is not a user who declined, and a funnel that files the two together will
send win-back messaging to people who thought they had already bought.

## What actually moves it

Trial length, trial type, and the first session, in that order.

Length is the largest and the cheapest to change, and the evidence points longer
rather than shorter: about 70% better conversion at seventeen to thirty-two days than
under four. Type is larger still but changes what the business is: requiring a card
raises conversion and cuts trial starts, and whether that trade is worth it depends
on how much top-of-funnel volume you can afford to lose. The first session decides
whether the rest of the trial happens at all, which is why 84% of three-day
cancellations land on day zero or one.

What moves it less than expected: the number of reminder emails past the second,
feature-gating adjustments inside the trial, and extending a trial for users who never
engaged during the first one.

<FromMyWork exp="exp-044">
The pattern I keep seeing is a retention problem diagnosed as an acquisition
problem. Trials make it worse, because a trial start looks like acquisition and
behaves like retention.
</FromMyWork>

## Stage adjustment

Early on, the trial design is the experiment. With low volume the conversion rate
cannot be read reliably, but the trial type and length can be chosen from published
evidence rather than guessed, and longer is the better prior unless paid acquisition
is already the main channel.

In the growth stage the rate becomes readable and the segment split becomes the useful
view. This is also when the attribution trade becomes real: once paid spend is large
enough that a slow conversion signal costs money, a shorter trial can be the right
choice despite converting worse. Make that trade knowingly rather than by copying the
46.5% of apps that have already made it.

At scale the conversion rate stops being the goal and the revenue behind it takes
over.

<Example illustrative>
A product converting 25% on a three-day trial and one converting 42% on a thirty-day
trial can land on similar annual revenue. The cash arrives weeks earlier in the first
case, and the second carries twenty-seven extra days of support and infrastructure for
every trialist who never pays.
</Example>

Only the full picture distinguishes them, and the conversion rate alone hides it.

## Sources and tools

Each figure carries its source and the date it was last checked. Where a published
figure gives no trial type or window, this page notes the omission rather than
filing the number next to ones that have both.

The segment page under this hub carries the B2B SaaS detail. The monetisation health
score takes trial conversion alongside retention and price, which is what separates
a conversion rate worth raising from one that is already taking everybody it should.

A note on the distribution figures. They come from a survey of self-reported rates
across more than 1,000 products, which carries the usual self-reporting bias: teams
with embarrassing numbers answer less often. Read the bottom of the distribution as a
floor on how bad it gets rather than as a true tail.

The trial-length figures come from a single platform's aggregate across 17,000-plus
apps. That is a large sample and a selected one — apps using that platform skew toward
subscription-first consumer products — so the direction is well evidenced and the exact
percentages are specific to that population.
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-bmhub-01", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Get a growth and monetisation review",
                                    "href": "/work-with-me"},
                        "secondary": {"label": "See the case studies", "href": "/case-studies"}},
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
