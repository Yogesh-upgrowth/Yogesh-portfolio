#!/usr/bin/env python3
"""Batch w1-playbook-01 — the playbooks, the last launch blocker.

`pnpm launch:check` has twelve /playbooks redirects landing on 404s. They resolve
to ten distinct URLs: growth-loops-vs-funnels and retention-curve-analysis each
absorb two old blog posts.

The playbook is the most expensive archetype on the site — 1,800 to 3,000 words,
and §B10 caps similarity at 0.40 against any other playbook, which is stricter
than anything else here. Ten pages that all follow one required structure will
breach that unless the substance differs, so each page is built around a finding
that only applies to it rather than around the shared skeleton.

Fact sourcing: the researched pool is effectively exhausted. Of 1,139 facts, 67
had a reuse slot left, so each playbook mixes those with new research for its own
core argument.
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
from w1_bmhub_01 import POOL as P7  # noqa: E402

OPT = ("https://www.optimizely.com/field-notes/guides/127000-experiments/",
       "Lessons learned from 127,000 experiments", "optimizely.com", "2026")
OPM = ("https://www.optimizely.com/field-notes/articles/get-more-wins-experimentation-metrics-for-program-success",
       "Get more wins: experimentation metrics for program success", "optimizely.com", "2026")
VWO = ("https://vwo.com/experimentation-program-maturity-report/",
       "Experimentation Program Maturity Report 2024", "vwo.com", "2024")
VIS = ("https://visionary-marketing.co.uk/blog/customer-onboarding-statistics-2026",
       "SaaS onboarding benchmarks 2026", "visionary-marketing.co.uk", "2026")
UPT = ("https://userpilot.com/blog/minimum-viable-onboarding/",
       "Minimum viable onboarding", "userpilot.com", "2026")
UTD = ("https://usetandem.ai/blog/onboarding-metrics-that-predict-revenue-activation",
       "Onboarding metrics that predict revenue activation", "usetandem.ai", "2026")

NEW = [
    fact("f-pb-01", "The median company runs 34 experiments a year while top performers run more than 200",
         "34", "experiments", OPM,
         "The median company runs 34 experiments a year, while top performers run 200+."),
    fact("f-pb-02", "The median company runs two to three A/B tests a month",
         "2-3", "tests", OPM,
         "The median company runs 2 to 3 A/B tests per month.", False),
    fact("f-pb-03", "A 12% win rate is the figure most often cited from large-scale analysis; a healthy band is 10% to 30%, on a conclusive rate of 35% to 40%",
         "12", "%", OPT,
         "The most commonly cited win rate is 12%. A healthy win rate is 10 to 30%, with a healthy conclusive rate of 35 to 40%."),
    fact("f-pb-04", "Impact per test peaks between one and ten tests a year per engineer, and past thirty the expected impact falls by 87%",
         "87", "%", OPT,
         "Impact per test peaks at 1-10 annual tests per engineer. Beyond 30 annual tests per engineer, expected impact drops by 87%."),
    fact("f-pb-05", "A survey of 206 companies places most organisations at the foundational or emerging stage of experimentation maturity",
         "206", "companies", VWO,
         "The VWO Experimentation Program Maturity Report, surveying 206 companies, finds the majority at foundational or emerging levels.", False),
    fact("f-pb-06", "Median time to value has compressed from 8.1 days in 2022 to 4.2 days in 2026",
         "4.2", "days", VIS,
         "Median SaaS time-to-value has compressed from 8.1 days in 2022 to 4.2 days in 2026."),
    fact("f-pb-07", "Across 547 companies the median time to value is one day, twelve hours and twenty-three minutes",
         "1.5", "days", UPT,
         "Userpilot's benchmark across 547 SaaS companies places the median time to value at 1 day, 12 hours and 23 minutes.", False),
    fact("f-pb-08", "Time to value ranges from 11 minutes for the smallest accounts to 23 days for accounts above 100,000 dollars",
         "11", "minutes", UTD,
         "Time-to-value medians range from 11 minutes for sub-$5K ARR accounts to 23 days for $100K+ accounts.", False),
    fact("f-pb-09", "Average activation is 37.5%, meaning roughly two thirds of new users never reach the product's core value",
         "37.5", "%", UTD,
         "The average SaaS activation rate is 37.5%, meaning roughly two-thirds of new users never experience the core value proposition."),
]

POOL = {**P1, **P2, **P3, **P4, **P5, **P6, **P7}
POOL.update({f["fact_id"]: f for f in NEW})
ADP = ("https://adapty.io/blog/weekly-monthly-annual-subscription-plan/",
       "Weekly vs monthly vs annual: which plan type should you offer?", "adapty.io", "2026")
RCM = ("https://www.revenuecat.com/blog/growth/monthly-subscriptions-when-to-offer",
       "Monthly subscriptions: when to offer them", "revenuecat.com", "2026")
SAX = ("https://www.saxifrage.xyz/post/k-factor-benchmarks",
       "K-factor benchmarks", "saxifrage.xyz", "2026")
TRK = ("https://track360.io/learn/refer-a-friend-program-design/measuring-referral-performance",
       "Measuring referral performance", "track360.io", "2026")

MORE = [
    fact("f-pb-10", "Weekly plans grew from 43.3% of app subscription revenue in 2023 to 55.5% in 2025, while monthly fell from 21.1% to 11.7% and annual from 29.2% to 22.5%",
         "55.5", "%", ADP,
         "Weekly plans generated 43.3% of app subscription revenue in 2023, rising to 55.5% by 2025; monthly dropped 21.1% to 11.7%, annual 29.2% to 22.5%."),
    fact("f-pb-11", "Productivity apps take 76.7% of their subscriptions on monthly plans and 90.7% of their revenue from them",
         "90.7", "%", RCM,
         "In productivity, 76.7% of subscriptions are monthly but 90.7% of revenue comes from monthly plans."),
    fact("f-pb-12", "Health and fitness is the only category where annual plans dominate revenue, at 60.6%, while utilities take 73.6% of revenue from weekly plans",
         "60.6", "%", ADP,
         "Health & Fitness is the only category where annual plans dominate at 60.6% of revenue; utilities generate 73.6% of revenue from weekly plans."),
    fact("f-pb-13", "First-year retention on annual plans fell from 31% to 28% year on year",
         "28", "%", RCM,
         "First-year annual retention fell from 31% to 28% year over year.", False),
    fact("f-pb-14", "Only about 30% of apps have a measurable k-factor at all, and among those the median is 0.45",
         "0.45", "k-factor", SAX,
         "30% of their sample had a K-factor, and for this 30% the median K-factor was .45."),
    fact("f-pb-15", "A k-factor is present for 22.5% of games against 33.6% of non-games",
         "33.6", "%", SAX,
         "For games, K-factor affected 22.5% of apps in their sample; for non-games it is 33.6%.", False),
    fact("f-pb-16", "Dropbox's documented peak viral coefficient was 0.7, below the 1.0 that self-sustaining growth needs",
         "0.7", "k-factor", SAX,
         "Dropbox's documented peak coefficient was 0.7.", False),
    fact("f-pb-17", "Active referrers are typically 5% to 15% of the active user base, with invite-to-registration at 10% to 25%",
         "5-15", "%", TRK,
         "Active referrers typically represent 5-15% of the active user base, with invite-to-registration rates of 10-25%.", False),
]
POOL.update({f["fact_id"]: f for f in MORE})
RCH = ("https://www.revenuecat.com/blog/growth/measure-hybrid-monetization",
       "How to measure hybrid monetization", "revenuecat.com", "2026")
THR = ("https://www.thrad.ai/content/subscription-vs-ads-for-ai-apps",
       "Subscription vs ads for AI apps: which model wins in 2026", "thrad.ai", "2026")
PPL = ("https://ppc.land/the-app-middle-class-is-dying-and-revenuecats-data-shows-exactly-how-fast/",
       "The app middle class is dying, and RevenueCat's data shows how fast",
       "ppc.land", "2026")
DRK = ("https://www.darkroomagency.com/observatory/cac-payback-period",
       "CAC payback period", "darkroomagency.com", "2026")
LZW2 = ("https://adapty.io/blog/mobile-app-monetization-strategies/",
        "Top 12 ways to monetize your app in 2026", "adapty.io", "2026")
AMP = ("https://amplitude.com/blog/increasing-free-trial-conversion",
       "The complete guide to increasing free trial conversion", "amplitude.com", "2026")

LAST = [
    fact("f-pb-18", "Only 10% of apps run a true hybrid model, while more than 60% of top-grossing apps run two or more revenue models at once",
         "10", "%", RCH,
         "Only 10% of apps run true hybrid models; over 60% of 2026 top-grossing apps run two or more revenue models simultaneously."),
    fact("f-pb-19", "Blended annual ARPU runs 3 to 15 dollars for hybrid freemium, 0.40 to 2 dollars for ad-only free tiers and 30 to 100 dollars or more for subscription-led products",
         "3-15", "USD", THR,
         "Hybrid freemium blended annual ARPU lands in the $3-$15 range, against $0.40-$2 for ad-only free tiers and $30-$100+ for subscription-led."),
    fact("f-pb-20", "Subscription apps earn 4.6 times the average revenue per user of ad-only apps",
         "4.6", "x", THR,
         "Subscription-based apps pull in 4.6x higher ARPU compared to ad-only apps.", False),
    fact("f-pb-21", "AI apps convert free to paid at 1% to 3%, against 5% to 8% for mature subscription mobile apps",
         "1-3", "%", THR,
         "For AI apps, free-to-paid conversion tends toward 1-3% rather than the 5-8% seen in mature subscription mobile apps.", False),
    fact("f-pb-22", "58% of new subscription apps earn under 1,000 dollars in their first year",
         "58", "%", PPL,
         "58% of new subscription apps earn under $1,000 in their first year."),
    fact("f-pb-23", "Only 4.6% of newly launched apps reach 10,000 dollars in monthly revenue within two years",
         "4.6", "%", PPL,
         "Only 4.6% of newly launched apps reach $10,000 in monthly revenue within two years.", False),
    fact("f-pb-24", "The top 10% of apps capture 95% of all subscription revenue",
         "95", "%", PPL,
         "The top 10% of apps capture 95% of all subscription revenue.", False),
    fact("f-pb-25", "Consumer subscription brands typically recover acquisition cost in three to nine months, with under six considered the target",
         "3-9", "months", DRK,
         "Subscription consumer brands typically recover acquisition costs in 3-9 months, with under 6 months considered ideal."),
    fact("f-pb-26", "Subscription revenue grew 105% year on year in the first quarter of 2026, against 29% for in-app purchases and 14% for advertising",
         "105", "%", LZW2,
         "Subscription revenue grew 105% year over year in Q1 2026, against 29% for in-app purchases and 14% for ad revenue."),
    fact("f-pb-27", "Subscriptions account for 82% of the revenue non-gaming apps earn on the app stores",
         "82", "%", LZW2,
         "82% of the revenue non-gaming apps make on the app stores comes from subscriptions.", False),
    fact("f-pb-28", "Freemium conversion benchmarks sit under 10%, against up to 25% for opt-in free trials and up to 50% for opt-out trials",
         "10", "%", AMP,
         "Industry benchmarks: freemium under 10%, opt-in free trials up to 25%, opt-out free trials up to 50%."),
]
POOL.update({f["fact_id"]: f for f in LAST})
AMN = ("https://amplitude.com/blog/good-bad-north-star-metric",
       "What makes a good vs bad north star metric", "amplitude.com", "2026")
ANP = ("https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf",
       "The North Star Playbook", "amplitude.com", "2024")



def qualitative(f: dict) -> dict:
    """Drop value/unit for a fact that states a rule rather than a number.

    Fact.value and Fact.unit are `.optional()` in the zod schema, which permits an
    absent key and rejects an explicit null. Passing None straight through wrote
    `"value": null` and took the whole gate run down at load.
    """
    return {k: v for k, v in f.items() if v is not None}

NS = [
    fact("f-pb-29", "A north star carries three to five input metrics: complementary factors a team can influence directly through the product",
         "3-5", "inputs", ANP,
         "Inputs are a set of three to five influential, complementary factors that most directly affect your North Star Metric."),
    fact("f-pb-30", "A metric the team can move directly is probably the wrong north star",
         None, None, AMN,
         "If you can move your North Star directly, it's probably not a good North Star."),
    fact("f-pb-31", "Annual and monthly recurring revenue, daily active users, downloads, page views and registered users are all named as poor north star choices",
         None, None, AMN,
         "Bad North Star choices: ARR, MRR, DAU, ad impressions, downloads, page views, registered users, time on page."),
    fact("f-pb-32", "Published north stars measure delivered value: nights booked at Airbnb, time spent listening at Spotify, rides per week at Uber",
         None, None, AMN,
         "Airbnb uses nights booked, Spotify tracks time spent listening, Uber uses rides per week, Amazon purchases per month."),
]
POOL.update({f["fact_id"]: qualitative(f) for f in NS})




PB_SCHEMA = ["Article", "FAQPage", "Person", "BreadcrumbList"]
HUB = ("/playbooks", "the playbooks", "hub")
TOOL = ("/tools/monetization-health-score", "the monetisation health score", "tool")
BOFU = ("/work-with-me", "a growth and monetisation review", "bofu")


def cover(answer, short, who, method, numbers, pitfalls, checklist):
    return {"answer_box": answer, "in_short": short, "who_this_is_for": who,
            "method": method, "numbers_and_examples": numbers,
            "pitfalls": pitfalls, "checklist": checklist}


PAGES = [
  dict(
    id="playbook-0601", url="/playbooks/experimentation-program", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Experimentation Program: Build One That Earns Its Cost",
    meta_description="How to build an experimentation program: the velocity to aim for, the win rate to expect, and why more tests per engineer makes each one worth less.",
    h1="How to build an experimentation program",
    primary_keyword="experimentation program",
    secondary_keywords=["ab testing program", "experimentation velocity benchmark"],
    entity_a="experimentation-program",
    facts=["f-pb-01", "f-pb-02", "f-pb-03", "f-pb-04", "f-pb-05", "f-fx-04", "f-fx-05",
           "f-hub-06", "f-hub-07"],
    experience=["exp-009", "exp-047"],
    links=L(("/glossary/omtm", "the OMTM entry", "lateral"),
            ("/benchmarks/retention", "the retention benchmarks", "reference"),
            ("/playbooks/activation-metric", "the activation metric playbook", "lateral"),
            ("/glossary/conversion-rate", "the conversion rate entry", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("experimentation-reality",
              "Eight reference points for sizing an experimentation program: the median and top-performer annual test counts, the median monthly test rate, the commonly cited win rate with its healthy band and conclusive rate, the point at which impact per test peaks against the 87% drop past thirty tests per engineer, the share of experiments rolled back on a guardrail regression at one large platform, the visitors per variant needed at a 5% baseline for three effect sizes, and an audited significance rate, each row carrying its source and verification date",
              "What a working programme actually produces. Verified 30 September 2026."),
    faq=[
      dict(q="How many experiments should we be running?",
           a="Fewer than the ambitious answer. The median company runs 34 a year, about two to three a month, and top performers exceed 200. But impact per test peaks between one and ten tests a year per engineer and falls 87% past thirty, so the target is tests per engineer, not tests per quarter."),
      dict(q="What win rate should we expect?",
           a="Between 10% and 30%, with 12% the figure most often cited from large-scale analysis. The more useful number is the conclusive rate — wins and losses combined — which should sit at 35% to 40%. A programme with a high win rate and a low conclusive rate is testing only safe changes."),
      dict(q="Is a losing test a failed test?",
           a="No, and a programme that treats it that way will stop shipping anything interesting. At one platform running more than 10,000 experiments a year, 42% get rolled back after a guardrail metric flags a regression. Those are the tests doing the most work."),
      dict(q="When is our traffic too low to test?",
           a="When the sample size the effect requires exceeds what you can gather in a month. At a 5% baseline, a 50% relative lift needs about 1,700 visitors per variant, a 20% lift about 9,000, and a 10% lift about 36,000. Small products can only detect large effects."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Set up an experimentation program with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Sizes the programme by tests per engineer rather than tests per quarter, using the published finding that impact per test falls 87% past thirty a year — the opposite of the velocity advice every other guide gives.",
    contradictions=[
      "Published A/B test win rates do not agree, and the gap is a definition gap rather than a "
      "performance one: optimizely.com cites 12% as the most common figure, conversionteam.com "
      "reports 17.4% reaching significance with a winning variant across 2,408 audited tests, and "
      "advertorialwizard.com reports 36.3% across 90-plus European e-commerce brands. The three "
      "differ on whether a win means statistical significance, a positive point estimate, or a "
      "shipped change. All three appear on this page with their definitions.",
    ],
    block_coverage=cover(["f-pb-01", "f-pb-03"], ["f-pb-02", "f-pb-04"],
                         ["f-pb-05"], ["f-fx-05", "f-pb-02"],
                         ["f-pb-03", "f-hub-06", "f-hub-07"], ["f-pb-04", "f-fx-04"],
                         ["f-fx-05"]),
    body="""
<AnswerBox>
An experimentation program earns its cost once you can reach a sample size that
settles a question. Aim for the median of about 34 tests a year before aiming
higher. Expect a win rate between 10% and 30%. Judge the programme on its
conclusive rate, not its wins. Most teams chase volume and skip the maths.
</AnswerBox>

<FactTable
  id="experimentation-reality"
  caption="What a working programme actually produces"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Annual tests, median against top performers", "34 against 200+"], factId: "f-pb-01" },
    { cells: ["Monthly tests, median company", "2 to 3"], factId: "f-pb-02" },
    { cells: ["Win rate, commonly cited / healthy band / conclusive rate", "12% / 10-30% / 35-40%"], factId: "f-pb-03" },
    { cells: ["Impact per test, peak and the drop past 30 per engineer", "peaks at 1-10 a year; falls 87%"], factId: "f-pb-04" },
    { cells: ["Experiments rolled back on a guardrail regression", "42% of 10,000+ a year"], factId: "f-fx-04" },
    { cells: ["Visitors per variant at a 5% baseline, 50% / 20% / 10% lift", "1,700 / 9,000 / 36,000"], factId: "f-fx-05" },
    { cells: ["Tests reaching significance with a winner, 2,408 audited", "17.4%"], factId: "f-hub-06" },
    { cells: ["Tests producing a significant win, 90+ e-commerce brands", "36.3%"], factId: "f-hub-07" },
    { cells: ["Organisations at foundational or emerging maturity", "most of 206 surveyed"], factId: "f-pb-05" },
  ]}
/>

## In short

Five things decide whether a programme pays for itself.

Sample size comes first. At a 5% baseline, a 50% relative lift needs about 1,700
visitors per variant. A 20% lift needs about 9,000. A 10% lift needs about 36,000.
Without the third, small effects are not a question you can answer. Running the test
anyway just makes noise look like evidence.

Velocity has a ceiling per person, not per team. Impact per test peaks between one
and ten tests a year per engineer. Past thirty it drops 87%.

The conclusive rate beats the win rate. Wins and losses together should reach 35%
to 40%. Below that, most tests cannot move anything either way.

Rollbacks are output, not failure. And maturity binds hardest: of 206 companies
surveyed, most sit at the foundational or emerging stage.

## Who this is for, and who it is not

This suits a team with enough traffic to settle a question inside a month, on a
surface where one change can be isolated. A busiest page seeing a few hundred visitors a
week puts this out of reach for now. Qualitative research and judgement are the
honest alternatives.

It also suits teams already running tests who cannot tell whether it is working.
The symptom is familiar: a dashboard full of wins, a revenue line that has not
moved. That is what a high win rate on a low conclusive rate looks like.

It does not suit teams whose real problem is that nobody knows what to build. A
programme settles disagreements about size. It does not supply a hypothesis. Most
organisations sit at foundational or emerging maturity, and at that stage the fix
is a working metrics pipeline, not more tests.

## The method

Six steps, each with a number that tells you whether to continue.

### 1. Compute your detectable effect before designing anything

Start with two numbers: baseline conversion, and weekly traffic on the surface you
want to test. Then work out the smallest relative lift four weeks could detect. At
a 5% baseline, four weeks at 2,000 weekly visitors per variant reaches about the
9,000 needed for a 20% lift. It does not come close to the 36,000 a 10% lift needs.

Say the answer is "only effects above 30%". That is the programme's resolution.
Design tests that could plausibly move things that far. Stop proposing copy tweaks.

Write the number on the wall. Every test proposal gets checked against it first,
and about half will fail that check. That is the arithmetic doing its job.

### 2. Set the cadence from headcount, not ambition

Start at the median of two to three tests a month. Hold there until the pipeline
runs reliably. The temptation is the 200-a-year figure top performers reach. But
impact per test peaks between one and ten a year per engineer, so a small team at
200 is running 200 weak tests.

Divide instead. Count engineers who can ship a test, multiply by ten, and treat
that as the annual ceiling. Four engineers means forty tests a year, which is just
above the median and well inside the range where each one still matters.

### 3. Instrument guardrails before the first test

Decide what must not get worse. Wire it before you need it. At the scale where 42%
of experiments get rolled back on a guardrail regression, guardrails do more work
than the primary metrics.

Three are usually enough: a revenue-adjacent metric, a retention-adjacent one, and
one load or error measure. More than five and nobody reads them.

## The method, part two: running and reading

Three more steps. This is where most programmes lose their results rather than their
velocity: the pipeline works, tests ship, and the readings cannot be trusted.

### 4. Run to the pre-computed sample size

Not to significance. Stopping the moment a test turns green is the most common way
to manufacture a false win. It is also why audited win rates come in low: across
2,408 tests, 17.4% reached significance with a winner.

### 5. Report the conclusive rate every month

Wins, losses and inconclusive, as three numbers. Target 35% to 40% conclusive. A
month of nothing but inconclusive results means underpowered tests or changes too
small to matter. Both are fixable, and neither is bad luck.

### 6. Review the programme quarterly against tests per engineer

Not against tests shipped. Past thirty a year per engineer, the programme is adding
tests and losing impact. Cut the count and raise the ambition of each one.

## The numbers to expect

Expect to lose most tests. A 12% win rate is the figure most often cited. A healthy
band runs 10% to 30%, and the audited 17.4% significance rate sits inside it. Budget
for a 50% win rate and the programme gets cancelled in its second quarter.

Expect the first three months to produce process, not results. At two to three tests
a month, a quarter is six to nine tests. One or two will be conclusive wins.

Expect the sample size arithmetic to kill about half the proposed tests before they
run. That is the arithmetic working, not an obstacle to route around.

Expect the biggest single gain to come from fixing measurement rather than from any
test. Most teams at foundational maturity find that their baseline numbers disagree
between two tools, and no experiment result is readable until that is settled.

<FromMyWork exp="exp-009">
Two weeks went into assembling a clean dataset of roughly 22,000 prior applications
before proposing anything. The target set afterwards, 70% disbursement against an
industry range of 20 to 35%, was chosen to force a different operating model rather
than to be achievable.
</FromMyWork>

<FromMyWork exp="exp-047">
The habit that compounds is writing the expected result down before the test runs.
It converts an argument about whether a number is good into a check against
something already agreed, and it takes about a minute.
</FromMyWork>

## Pitfalls

Six, and the first two account for most wasted programmes.

Testing effects smaller than your traffic can detect. If 36,000 visitors per
variant is out of reach, a 10% lift is not a question you can answer, and running
the test anyway produces a number that feels like evidence.

Stopping early. A test watched daily and stopped on the first green day has no
error rate you can quote.

Optimising the win rate. It is the easiest metric to game — test only safe changes
and it rises while the conclusive rate falls.

Chasing top-performer volume. Past thirty tests a year per engineer, expected
impact falls 87%, so the volume arrives and the results do not.

Treating rollbacks as failures. At 42% rollback on guardrail regressions, a
programme with no rollbacks is not catching regressions.

Running without guardrails, which turns every rollback into an argument about
whether the regression was real.

## The checklist

Twelve items, in the order they have to happen. Copy it and work down. Anything
unticked above item six means the programme is not ready to run a test yet, however
many ideas are queued.

1. Baseline conversion recorded for the surface under test.
2. Weekly traffic per variant recorded.
3. Minimum detectable effect computed for a four-week run.
4. Test ideas filtered to effects above that threshold.
5. Guardrail metrics named and instrumented.
6. Sample size per variant fixed in writing before launch.
7. Stopping rule written down, with no daily peeking.
8. Assignment checked for leakage across variants.
9. Results classified as win, loss or inconclusive.
10. Conclusive rate reported monthly against the 35% to 40% band.
11. Tests per engineer per year tracked against the one-to-ten peak.
12. Rollback count reported as a positive signal, not a defect count.

## Sources and related

Every figure carries its source and the date it was last checked. Where published
win rates disagree — 12%, 17.4% and 36.3% across three studies — the disagreement
is a definition gap rather than a performance gap, and all three appear above with
what each one counts as a win.

The activation metric playbook is the usual next step. Activation is the metric most
programmes should test against first, because it moves earlier than revenue and
responds to work a product team controls.

One note on the sources. The velocity and win-rate figures come from
experimentation vendors reporting on their own platforms, which is the best evidence
available and still a selected sample: teams that buy an experimentation tool are
not a random sample of teams. The direction of the findings is well supported. Treat
the exact percentages as the centre of a range rather than as a target.
""",
  ),
  dict(
    id="playbook-0602", url="/playbooks/activation-metric", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Activation Metric: How to Choose and Move It",
    meta_description="Choosing an activation metric: where to put the threshold, what time to value to expect by account size, and why step count beats copy.",
    h1="How to choose and move an activation metric",
    primary_keyword="activation metric",
    secondary_keywords=["activation rate benchmark", "time to value"],
    entity_a="activation-metric",
    facts=["f-pb-06", "f-pb-07", "f-pb-08", "f-pb-09", "f-gh-03", "f-fx-06", "f-fx-07"],
    experience=["exp-005", "exp-003"],
    links=L(("/glossary/activation-rate", "the activation rate entry", "lateral"),
            ("/glossary/aha-moment", "the aha moment entry", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "reference"),
            ("/playbooks/experimentation-program", "the experimentation playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("activation-reality",
              "Seven reference points for setting an activation metric: the median activation rate with its top and bottom quartiles, the average rate and the share of users who never reach core value, how median time to value has compressed across four years, the median time to value across 547 companies, the spread in time to value from the smallest accounts to the largest, median onboarding tour completion with its interquartile range, and checklist completion at three-to-five steps against ten or more, each row carrying its source and verification date",
              "What activation looks like when it is measured honestly. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good activation rate?",
           a="The spread matters more than the middle. The median is 41.7%, the top quartile 71% and the bottom quartile 19%, while another source puts the average at 37.5%. A product at 30% sits below median and above the bottom quartile, and only the range tells you that."),
      dict(q="Where should the activation threshold go?",
           a="At the first action that predicts a second session, not at the first action you can measure. Signup completion is easy to instrument and predicts almost nothing. The test is whether users who cross your threshold return at a materially higher rate than those who do not."),
      dict(q="How fast should time to value be?",
           a="Faster than you think, and it depends on deal size. The median across 547 companies is about a day and a half, and the four-year trend has compressed from 8.1 days to 4.2. Smaller accounts expect minutes; the largest expect weeks."),
      dict(q="Why does my onboarding checklist get abandoned?",
           a="Usually because it has too many steps. Checklists of three to five steps complete at 67%, against 18% for ten or more. Median tour completion is 29%, so most of what gets built is not finished by most users."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Fix your activation metric with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Sets the activation threshold by whether it predicts a second session rather than by what is easy to instrument, and prices the choice against time-to-value figures that differ by three orders of magnitude between small and large accounts.",
    contradictions=[
      "Published activation rates disagree on the central figure: usetandem.ai gives a 41.7% "
      "median with quartiles at 71% and 19%, and also reports a 37.5% average. A median and an "
      "average of a skewed distribution are not the same statistic, and neither source states "
      "which products entered the sample. Both appear on this page rather than one being chosen.",
    ],
    block_coverage=cover(["f-gh-03", "f-pb-09"], ["f-pb-06", "f-fx-07"],
                         ["f-pb-08"], ["f-pb-07", "f-fx-06"],
                         ["f-pb-07", "f-pb-08"], ["f-fx-07", "f-fx-06"],
                         ["f-gh-03"]),
    body="""
<AnswerBox>
An activation metric marks the first moment a user gets the thing they came for.
Put the threshold at the action that predicts a second session. The median
activation rate is 41.7%, the top quartile 71% and the bottom 19%, and on average
37.5% of new users activate — so roughly two thirds never reach core value at all.
</AnswerBox>

<FactTable
  id="activation-reality"
  caption="What activation looks like when it is measured honestly"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Activation rate, median / top quartile / bottom quartile", "41.7% / 71% / 19%"], factId: "f-gh-03" },
    { cells: ["Average activation, and users never reaching core value", "37.5%; about two thirds"], factId: "f-pb-09" },
    { cells: ["Median time to value, 2022 against 2026", "8.1 days against 4.2"], factId: "f-pb-06" },
    { cells: ["Median time to value across 547 companies", "1 day 12 hours 23 minutes"], factId: "f-pb-07" },
    { cells: ["Time to value, smallest accounts against largest", "11 minutes against 23 days"], factId: "f-pb-08" },
    { cells: ["Onboarding tour completion, 464 companies", "29% median; middle half 15-55%"], factId: "f-fx-06" },
    { cells: ["Checklist completion, 3-5 steps against 10+", "67% against 18%"], factId: "f-fx-07" },
  ]}
/>

## In short

Five rules, and the first one is the whole job.

Pick the threshold by prediction, not convenience. The right activation event is the
one after which users come back. Signup completion is trivial to instrument and
predicts nothing.

Expect the spread to be enormous. A 41.7% median sits between a 19% bottom quartile
and a 71% top one. Your number means little until you know which part of that range
your product type lives in.

Time to value has a deadline that shrinks every year. The median has gone from 8.1
days in 2022 to 4.2 in 2026.

Account size changes the deadline completely, from 11 minutes for the smallest
accounts to 23 days for the largest.

And shorten the path before improving it. Three-to-five-step checklists complete at
67%; ten or more complete at 18%.

## Who this is for, and who it is not

This suits a product where new users arrive continuously and some fraction never
come back. That covers most self-serve software and most consumer apps. It needs
event tracking good enough to tell a returning user from a new one, which is a lower
bar than most analytics work.

It suits teams who have an activation number and distrust it. The common case is a
threshold set at whatever was easy to log, producing a figure that moves without
anything improving.

It does not suit a product with a long, sales-assisted onboarding where value
arrives after a managed implementation. At 23 days to value for the largest
accounts, activation stops being a product metric and becomes a delivery one. Use a
milestone plan instead.

It also does not suit a product that has not yet found anyone who wants it.
Activation measures how reliably you deliver a known value, not whether the value
exists.

## The method, part one: choosing the metric

Three steps, and the first two are analysis rather than product work.

### 1. List candidate events from the first week

Pull every meaningful action a new user can take in week one. Keep anything a user
chooses to do. Discard anything the product does to them, and discard signup steps.
A list of eight to fifteen candidates is normal.

### 2. Rank candidates by second-session lift

For each candidate, compare the return rate of users who did it against users who
did not. The candidate with the widest gap is your activation event. This is the
whole selection method, and it takes an afternoon on existing data.

Be suspicious of anything that only correlates because keen users do everything. If
two candidates have similar lift, prefer the earlier one.

### 3. Set the threshold where the lift appears

Many events have a count that matters: three searches, two uploads, one completed
profile. Find the count at which the return-rate gap opens, and set the threshold
there rather than at one.

Two cautions on the count. Set it too high and activation becomes a measure of your
best users, which is flattering and useless for finding leaks. Set it at one and you
capture people who tried the feature once and left. The count where the gap opens is
usually two or three, and it is worth checking each quarter, because it moves when
the product changes.

### 4. Check the metric survives a cohort split

Before publishing the definition, recompute it for paid and organic users
separately, and for your two largest acquisition sources. A threshold that predicts
return for organic users and not for paid ones is measuring intent rather than
product value, and it will mislead the moment the acquisition mix shifts.

## The method, part two: moving the number

Three more steps, in order of how much they usually return.

### 5. Shorten the path before polishing it

Count the steps between arrival and the activation event. Then remove some. The
completion evidence is blunt: three to five steps complete at 67% and ten or more at
18%, so a path cut from eleven steps to five does more than any copy rewrite.

### 6. Set a time-to-value target from your account size

The median is about a day and a half. Smaller accounts expect minutes. If your
product serves the small end and takes a day, the gap is the problem, and almost
every fix is removal rather than addition.

### 7. Measure the tour, then consider deleting it

Median tour completion is 29%, with the middle half between 15% and 55%. A tour
nobody finishes is a cost. Either shorten it until it completes, or replace it with
a product that needs less explaining.

<FromMyWork exp="exp-005">
Asking for a bank statement upfront got 35% compliance. Showing a preliminary
eligibility range first, then asking for the statement to reveal the exact offer,
took it to 71%. Same ask, reframed from a compliance step into a reward.
</FromMyWork>

## The numbers to expect

Expect your first honest activation figure to be lower than the one you have been
reporting. Moving the threshold from signup to a predictive event usually halves it.
That is a measurement change, not a regression, and saying so once in writing
prevents a quarter of confusion.

Expect the path-shortening work to produce the largest single jump. The gap between
67% and 18% completion is a step-count gap, not a persuasion gap.

Expect diminishing returns after that. Once the path is short and the threshold is
honest, activation moves in single percentage points. The top quartile at 71% is a
product-fit position rather than an onboarding achievement, and no amount of
onboarding craft gets a product there if the value takes a week to appear.

Expect time to value to keep tightening. It has halved in four years, from 8.1 days
to 4.2, which means a target set two years ago is now behind the market. Re-set it
annually rather than treating it as fixed.

Expect the cohort split to change your conclusions at least once. Paid and organic
users activate at different rates in almost every product, and a blended figure
moves when the spend mix moves — which reads as a product change and is not one.

<FromMyWork exp="exp-003">
Income stability predicted approval far better than declared income. A score built
from six months of credit consistency separated the top and bottom bands by more
than 66 percentage points — and it was absent from the routing logic entirely.
</FromMyWork>

## Pitfalls

Five, and the first is nearly universal.

Setting the threshold at signup. It is easy to log, it rises when marketing spends
more, and it predicts nothing about whether anyone comes back.

Comparing your figure to a single benchmark. With a 19% bottom quartile and a 71%
top one, one number cannot tell you where you stand.

Adding onboarding instead of removing steps. Every added step costs completion, and
the published gap between short and long checklists is wide.

Treating one time-to-value target as universal. Eleven minutes and 23 days are both
correct, for different account sizes.

Changing the definition quietly. An activation rate that jumps between quarters
because the threshold moved will be read as performance by everyone who was not in
the room.

## The checklist

Thirteen items. The first five are analysis; nothing after them is worth doing until
they are done.

1. Candidate events from week one listed, product-initiated events excluded.
2. Return rate computed for users who did each candidate and users who did not.
3. Candidate with the widest second-session lift chosen.
4. Threshold count set where the return-rate gap opens.
5. Definition written down, with the date it took effect.
6. Current activation rate recomputed on the new definition.
7. Figure placed against the 19% to 71% quartile range, not the median alone.
8. Steps between arrival and activation counted.
9. Path reduced toward five steps or fewer.
10. Time-to-value target set from account size, not from the global median.
11. Tour completion measured against the 29% median before any redesign.
12. Paid and organic cohorts reported separately.
13. Definition changes logged in the changelog, so a step in the chart has a cause.

## Sources and related

Each figure carries its source and the date it was last checked. Two of them
disagree: a 41.7% median and a 37.5% average come from the same source and are
different statistics on a skewed distribution, so both appear rather than one being
presented as the activation rate.

The experimentation playbook is the natural companion, because activation is usually
the first metric worth testing against. It also moves earlier than revenue, which is
what makes it readable inside a quarter.

A note on what these figures cover. The activation and time-to-value numbers come
from onboarding-tool vendors measuring their own customers, so the sample is products
that already invest in onboarding. That biases the middle of the distribution upward:
a product with no onboarding work at all is unlikely to appear in the sample at all.
Read the bottom quartile as a floor among teams already trying, not as the floor.

The glossary entries for activation rate and the aha moment carry the definitions
this playbook assumes, including which denominator each figure uses.
""",
  ),
  dict(
    id="playbook-0603", url="/playbooks/subscription-pricing-strategy", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Subscription Pricing Strategy: Choosing Plan Lengths",
    meta_description="A subscription pricing strategy built on plan length: what the shift to weekly billing did to revenue mix, and which categories it does not apply to.",
    h1="Subscription pricing strategy: choosing plan lengths",
    primary_keyword="subscription pricing strategy",
    secondary_keywords=["weekly vs annual subscription", "subscription plan mix"],
    entity_a="subscription-pricing-strategy",
    facts=["f-pb-10", "f-pb-11", "f-pb-12", "f-pb-13", "f-th-05", "f-th-01",
           "f-glossary-0700-06"],
    experience=["exp-025"],
    links=L(("/glossary/paywall", "the paywall entry", "lateral"),
            ("/glossary/free-trial", "the free trial entry", "lateral"),
            ("/benchmarks/trial-to-paid-conversion/b2b-saas", "B2B SaaS trial conversion", "reference"),
            ("/playbooks/activation-metric", "the activation metric playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("plan-length-economics",
              "Seven reference points for choosing subscription plan lengths: how the weekly, monthly and annual shares of app subscription revenue moved between 2023 and 2025, the productivity category's monthly subscription and revenue shares, the one category where annual revenue dominates against the one where weekly does, the fall in first-year annual retention, the share of cancelled annual subscribers who never return, trial conversion by trial length, and Indian subscription price levels against the US baseline, each row carrying its source and verification date",
              "What plan length does to revenue, and where it reverses. Verified 30 September 2026."),
    faq=[
      dict(q="Should the default plan be weekly, monthly or annual?",
           a="The market has moved to weekly: it went from 43.3% of app subscription revenue in 2023 to 55.5% in 2025, while monthly halved to 11.7%. But two categories reverse it — health and fitness takes 60.6% of revenue from annual plans, and productivity takes 90.7% from monthly."),
      dict(q="Does an annual plan improve retention?",
           a="Less than it used to, and the downside is sharper. First-year retention on annual plans fell from 31% to 28% year on year, and 95% of annual subscribers who cancel never come back. An annual plan converts a monthly churn decision into one irreversible one."),
      dict(q="Why does productivity behave differently?",
           a="Because the spend is a work expense with a renewal conversation attached, not a personal one. Productivity takes 76.7% of its subscriptions monthly and 90.7% of its revenue from them, so the monthly plan is the business rather than the entry point."),
      dict(q="How should Indian pricing differ?",
           a="By level, not by structure. Indian subscription prices sit at about 0.6 times the US baseline, so the same plan ladder produces materially less revenue per subscriber and the cost of a long free period is harder to recover."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Set your subscription pricing with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Treats plan length as the primary pricing decision rather than price point, and names the two categories where the industry-wide shift to weekly billing reverses — which a general pricing guide averages away.",
    block_coverage=cover(["f-pb-10"], ["f-pb-12", "f-th-05"],
                         ["f-pb-11"], ["f-pb-10", "f-pb-13"],
                         ["f-pb-11", "f-pb-12"], ["f-th-05", "f-pb-13"],
                         ["f-glossary-0700-06"]),
    body="""
<AnswerBox>
A subscription pricing strategy starts with plan length, not price point. Weekly
plans went from 43.3% of app subscription revenue in 2023 to 55.5% in 2025 while
monthly halved to 11.7%. Before copying that, check your category: health and
fitness takes 60.6% of revenue from annual plans and productivity takes 90.7% from
monthly.
</AnswerBox>

<FactTable
  id="plan-length-economics"
  caption="What plan length does to revenue, and where it reverses"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Share of app subscription revenue, 2023 to 2025", "weekly 43.3% to 55.5%; monthly 21.1% to 11.7%; annual 29.2% to 22.5%"], factId: "f-pb-10" },
    { cells: ["Productivity: monthly share of subscriptions and of revenue", "76.7% and 90.7%"], factId: "f-pb-11" },
    { cells: ["The annual-dominant and weekly-dominant categories", "health and fitness 60.6%; utilities 73.6%"], factId: "f-pb-12" },
    { cells: ["First-year retention on annual plans, year on year", "31% to 28%"], factId: "f-pb-13" },
    { cells: ["Cancelled annual subscribers who never return", "95%"], factId: "f-th-05" },
    { cells: ["Trial conversion by length, under 4 days against 17-32", "25.5% against 42.5%"], factId: "f-th-01" },
    { cells: ["Indian subscription prices against the US baseline", "0.6x"], factId: "f-glossary-0700-06" },
  ]}
/>

## In short

Five findings, and the first one surprises most teams.

Plan length moves revenue more than price point. The weekly share of app
subscription revenue rose from 43.3% to 55.5% in two years while monthly fell from
21.1% to 11.7%. Nobody achieved that by changing a number on a page.

Category overrides the trend. Health and fitness is the only category where annual
plans dominate revenue, at 60.6%. Utilities take 73.6% from weekly. Averaging those
two together describes neither.

Annual plans have got weaker, not stronger. First-year retention on them fell from
31% to 28% in a year.

Annual cancellation is close to final: 95% of annual subscribers who cancel never
come back.

And trial length interacts with plan length. Conversion runs 25.5% under four days
against 42.5% at seventeen to thirty-two, so a short trial on an annual plan asks
for the largest commitment with the least evidence.

## Who this is for, and who it is not

This suits a product already charging a subscription, with enough volume to see
plan-mix effects inside a quarter. It also suits a team about to launch paid tiers
and choosing the ladder for the first time, where the plan-length decision is
cheaper to get right than to change later.

It suits anyone whose annual plan is doing worse than its reputation. The common case
is an annual discount set years ago, on the belief that annual plans hold users well.
The evidence now puts first-year retention at 28%.

It does not suit a product whose problem is that nobody converts at any price. That
is an activation or value problem, and a pricing ladder cannot fix it.

It also does not suit usage-based or seat-based business software. There the billing
period matters less than the unit being counted. The findings here come from consumer
app subscription data.

## The method, part one: reading your own mix

Three steps before any price changes.

### 1. Split subscriptions and revenue by plan length

Two tables, not one. Count the share of subscribers on each plan length. Then the
share of revenue each produces. The gap between the tables is the finding.
Productivity shows it plainly: 76.7% of subscriptions are monthly and 90.7% of
revenue is. So monthly subscribers are worth more each, not just more numerous.

Run both tables on a fixed month, and again a quarter later. Plan mix drifts on its
own as older cohorts churn, and a one-off reading will credit that drift to whatever
you shipped.

### 2. Compare your mix to your category, not the market

The market figure is 55.5% weekly. Your category may be the opposite. If you are in
health and fitness, the annual-dominant 60.6% pattern is the relevant comparison,
and matching the market would mean moving away from what works in your category.

### 3. Measure annual retention yourself

Do not inherit the assumption. Compute first-year annual retention from your own
cohorts and set it against the published 28%. Then measure how many cancelled annual
subscribers ever come back, against the 95% who never do.

Both numbers are cheap to get and they settle the argument.

<Example illustrative>
An annual plan retaining 40% of subscribers through year one is an asset. The same
plan at 20% is a way of collecting one year of revenue from people who then leave —
a real strategy, and a different one from the retention story usually told about it.
</Example>

## The method, part two: changing the ladder

Three steps, in the order that limits damage.

### 4. Add a shorter plan before discounting a longer one

Adding weekly or monthly next to annual tests demand for a shorter commitment. It
does not cut the price of the longer one. Discounting annual first gives away margin
on subscribers who would have paid in full.

### 5. Match trial length to plan length

A long commitment needs more evidence, and the trial data supports giving it:
conversion runs 42.5% at seventeen to thirty-two days against 25.5% under four. Pair
the shortest trials with the shortest plans.

### 6. Price the India ladder from local levels

Indian subscription prices sit at about 0.6 times the US baseline. Build the ladder
upward from a price you can defend locally. Do not discount the US one downward. The
two methods land in different places, and only one survives a rival who charges
nothing.

<FromMyWork exp="exp-025">
Launching a cheaper line to chase a distributor's forecast damaged the premium position
and the volume never arrived. A plan ladder works the same way: a cheaper tier moves mix
before it moves demand, and the mix shift is permanent.
</FromMyWork>

## The numbers to expect

Expect the mix to move faster than the prices. Adding a shorter plan reallocates
subscribers within weeks, and the revenue-per-subscriber figure falls while total
revenue rises. Both numbers are correct and only one is usually quoted.

Expect annual to look worse than its reputation once measured. A 28% first-year
retention figure means most annual subscribers do not reach a second year, and the
95% never-return figure means the loss is permanent.

Expect weekly plans to raise support load and refund rates alongside revenue. The
revenue share moved to 55.5% because weekly converts better, not because it is
cheaper to run. Budget for the extra billing events: a weekly subscriber generates
fifty-two charges a year against one, and each is a chance for a payment to fail.

Expect the category pattern to hold against your instinct. Utilities at 73.6% weekly
and health and fitness at 60.6% annual are stable positions, not fashions.

Expect one more thing: the plan ladder will shape who signs up, not just what they
pay. A weekly-first ladder attracts people solving a problem this week. An
annual-first ladder attracts people who have already decided. Those two groups
behave differently for the rest of their lives as customers, and the difference shows
up in retention long before it shows up in revenue.

## Pitfalls

Five, and the first is the most expensive.

Copying the market mix without checking the category. The 55.5% weekly figure is an
average across categories that behave in opposite directions.

Treating an annual plan as a retention tool. It defers the churn decision rather
than removing it, and makes the eventual decision final for 95% of those who take
it.

Discounting annual to defend the mix. That lowers revenue from the subscribers
already most committed.

Pairing a three-day trial with an annual plan. Conversion at that trial length runs
25.5%, and it is the largest ask with the least evidence behind it.

Reading a falling revenue-per-subscriber as a pricing failure when a shorter plan
was just introduced. That is mix, and it is usually the intended effect.

And setting the ladder once. The weekly share moved twelve points in two years, so a
ladder chosen three years ago was built for a market that no longer exists. Revisit
it annually against your own category's pattern rather than the cross-category
average.

## The checklist

Thirteen items. Items one to five are measurement; nothing below them is safe
without them.

1. Share of subscribers on each plan length recorded.
2. Share of revenue from each plan length recorded separately.
3. Gap between the two tables noted and explained.
4. Category comparison chosen, not the cross-category average.
5. Own first-year annual retention computed against the 28% figure.
6. Return rate of cancelled annual subscribers measured against the 95% figure.
7. Trial length recorded per plan length.
8. Shortest trial paired with the shortest plan, not the longest.
9. Shorter plan added before any longer plan is discounted.
10. Refund and support load tracked per plan length.
11. Revenue per subscriber reported alongside total revenue, never alone.
12. India ladder built upward from a local price, not discounted from the US one.
13. Plan and price changes dated in the changelog, so a step in the chart has a cause.

## Sources and related

Each figure carries its source and the date it was last checked. The plan-mix and
retention figures come from subscription infrastructure vendors reporting across
their customer base, which is the largest sample available for app subscriptions and
a selected one: apps that use subscription tooling skew subscription-first.

The free trial and paywall glossary entries carry the definitions this playbook
assumes. The activation metric playbook comes first in practice, because a pricing
ladder built on a broken activation number optimises the wrong step.

Two gaps in the published record are worth naming. No source gives a plan-mix split
for India by category, so the ladder advice above rests on the price level alone.
And no source separates refund rates by plan length, which is the figure that would
settle whether weekly billing costs more to run than it earns. Both are stated here
as gaps rather than filled with an estimate.
"""
  ),
  dict(
    id="playbook-0604", url="/playbooks/growth-loops-vs-funnels", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Growth Loops vs Funnels: Which One You Actually Have",
    meta_description="Growth loops vs funnels, decided by measurement: only about 30% of apps have a measurable k-factor at all, and the median among those is 0.45.",
    h1="Growth loops vs funnels: which one you actually have",
    primary_keyword="growth loops vs funnels",
    secondary_keywords=["k-factor benchmark", "viral coefficient"],
    entity_a="growth-loops-vs-funnels",
    facts=["f-pb-14", "f-pb-15", "f-pb-16", "f-pb-17", "f-unit-37", "f-hub-10", "f-fx-01"],
    experience=["exp-007", "exp-042"],
    links=L(("/glossary/cac", "the CAC entry", "lateral"),
            ("/glossary/cohort-analysis", "the cohort analysis entry", "lateral"),
            ("/benchmarks/retention/social-dating", "social and dating retention benchmarks", "reference"),
            ("/playbooks/experimentation-program", "the experimentation playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("loop-or-funnel",
              "Seven reference points for telling a growth loop from a funnel: the share of apps with any measurable k-factor and the median among them, how that share differs between games and non-games, the documented peak viral coefficient at one well-known referral programme, the typical share of active users who refer and the invite-to-registration rate, cost per install by platform and category in the United States, the testing volume top programmes run, and session length by game genre, each row carrying its source and verification date",
              "Whether a loop exists is a measurement question. Verified 30 September 2026."),
    faq=[
      dict(q="How do I know whether I have a loop or a funnel?",
           a="Measure the k-factor and see whether it exists. Only about 30% of apps have a measurable one at all, and among those the median is 0.45. A k-factor you cannot measure is a funnel, whatever the strategy deck says."),
      dict(q="Is a k-factor above 1 a realistic target?",
           a="Rarely. The median among apps that have any measurable k-factor is 0.45, and Dropbox's documented peak was 0.7. Above one means every user brings more than one more, which is a property of messaging and collaboration products rather than a goal to set."),
      dict(q="Do games spread better than other apps?",
           a="Less often than expected. A k-factor is present for 22.5% of games against 33.6% of non-games, so games are the category less likely to have a measurable loop at all."),
      dict(q="What should a referral programme deliver?",
           a="A contribution, not a growth engine. Active referrers are typically 5% to 15% of the active base, with 10% to 25% of invites turning into registrations. That is a useful discount on acquisition cost, not a replacement for it."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Diagnose your growth loops with me", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Settles the loop-or-funnel question by measurement rather than by strategy preference, using the finding that about 70% of apps have no measurable k-factor at all — which makes most loop diagrams a description of something that is not happening.",
    block_coverage=cover(["f-pb-14"], ["f-pb-15", "f-pb-16"],
                         ["f-pb-17"], ["f-pb-14", "f-pb-17"],
                         ["f-unit-37", "f-hub-10"], ["f-pb-16", "f-pb-14"],
                         ["f-fx-01"]),
    body="""
<AnswerBox>
Growth loops vs funnels is not a choice between two strategies. They are two
descriptions, and measurement decides which one fits. Only about 30% of apps have a
measurable k-factor at all, and among those the median is 0.45. For most apps, then,
a loop diagram describes something that is not happening.
</AnswerBox>

<FactTable
  id="loop-or-funnel"
  caption="Whether a loop exists is a measurement question"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Apps with any measurable k-factor, and the median among them", "about 30%; median 0.45"], factId: "f-pb-14" },
    { cells: ["Share with a k-factor, games against non-games", "22.5% against 33.6%"], factId: "f-pb-15" },
    { cells: ["Documented peak viral coefficient at Dropbox", "0.7"], factId: "f-pb-16" },
    { cells: ["Active referrers, and invite-to-registration", "5-15% of active users; 10-25%"], factId: "f-pb-17" },
    { cells: ["US cost per install, fintech against utilities, iOS and Android", "$11.62 and $3.84 against $2.46 and $0.84"], factId: "f-unit-37" },
    { cells: ["Testing volume at top programmes against the median", "3 to 5 times more"], factId: "f-hub-10" },
    { cells: ["Session length by genre, strategy against casual games", "37.51 against 25.92 minutes"], factId: "f-fx-01" },
  ]}
/>

## In short

Five points, and the first one ends most arguments.

A loop is a measurement, not a diagram. If you cannot compute a k-factor from your
own data, you have a funnel. Most apps are in that position.

The realistic range sits well below one. Among apps with a measurable k-factor the
median is 0.45, and the best-documented peak at a famous referral programme was 0.7.

Games are less likely to have a loop than non-games: 22.5% against 33.6%. The
intuition that games spread themselves is mostly wrong.

Referral programmes contribute at the margin. Active referrers run 5% to 15% of the
active base, and 10% to 25% of invites become registrations.

A k-factor under one still pays. It lowers blended acquisition cost, which matters
most where installs are expensive: $11.62 on iOS for US fintech, about ₹1,114,
against $0.84 for Android utilities, about ₹81.

## Who this is for, and who it is not

This suits a team that has drawn a loop on a whiteboard and wants to know whether it
exists. It also suits a team being pushed toward a referral programme and needing to
size the likely return before building one.

High acquisition cost makes this most valuable, because the same referral rate saves
more money per referred user.

<Example illustrative>
A k-factor of 0.3 on a product paying $11.62 per install, about ₹1,114, saves roughly
fourteen times what the same k-factor saves on a product paying $0.84, about ₹81. The
loop is identical; only the thing it is worth differs.
</Example>

Let that arithmetic drive the decision to invest.

It does not suit a product with no retention. A loop multiplies whatever the product
already does; if users do not come back, the loop multiplies nothing. Fix the curve
first.

It also does not suit a product whose growth is genuinely sales-led. There the
question is pipeline, not propagation, and the k-factor is not a useful frame.

## The method, part one: find out what you have

Three steps, all measurement.

### 1. Define the invite event honestly

A share, an invite, a referral link opened. Count only what a user did deliberately.
A notification the product sent is not an invite. Counting it inflates every number
downstream.

### 2. Compute the k-factor over a fixed cohort

Take one acquisition cohort. Count invites sent per user, then the share of invites
that became registered users. Multiply. That is your k-factor for that cohort.

Do it for three cohorts before believing any of them. If the answer is zero or
unmeasurable, stop here. You have a funnel, and the rest of this playbook turns to
making that funnel cheaper rather than replacing it.

One warning about the arithmetic. The k-factor describes one cycle, so a cohort still
mid-cycle reads low. Give each cohort the time your invite-to-registration lag
actually takes, which for most products runs one to two weeks, and measure the same
window every time.

### 3. Place the result against the distribution

A measurable k-factor at all puts you in the 30% minority. Above 0.45 puts you above
the median of that minority. At 0.7 you match the strongest well-documented
programme. Anything above one means checking the measurement again, because that is
rare enough to warrant doubt.

Write the number down with its date and its cohort. A k-factor quoted without both is
the kind of figure that survives three years of strategy decks after the behaviour it
described has stopped.

## The method, part two: making it pay

Three steps, which apply at any measurable k-factor below one.

### 4. Convert the k-factor into a cost saving, not a growth rate

A k-factor under one does not compound. It reduces the installs you pay for.
Work out the blended cost per install with and without the referred volume, and judge
the programme on that gap.

State the saving in currency rather than as a rate.

<Example illustrative>
A k-factor of 0.25 on a product buying ten thousand installs a month at $11.62, about
₹1,114, removes roughly two thousand paid installs a month from the bill. That is a
figure a finance team can check. A growth rate is not.
</Example>

### 5. Raise participation before raising the reward

Active referrers run 5% to 15% of the active base. Moving the low end of that range
toward the high end usually beats increasing the incentive. It recruits people who
were willing and never asked.

Three things raise participation cheaply: putting the ask where people already are,
making the reward legible in one line, and removing the step where someone has to
copy a code. A larger reward mostly attracts the people who would have referred
anyway.

### 6. Place the ask after the value, not before it

Ask before a user has got anything and the invites will not convert. Session length
proxies for when value lands: strategy game sessions average 37.51 minutes against
25.92 for casual. So the right moment differs by product more than by design taste.

<FromMyWork exp="exp-007">
Routing to fewer banks beat routing to many. The industry practice of firing one
application at eight lenders inflated enquiry counts, which itself flagged the
borrower as risky.
</FromMyWork>

## The numbers to expect

Expect the first honest k-factor to be lower than the deck claimed, often zero. That
is the common case, and naming it early saves a quarter of building.

Expect a good referral programme to look unimpressive as a growth rate and useful as a
discount. Referred users arrive instead of purchased ones, so the saving shows up in
the acquisition bill rather than in the growth curve.

Expect participation to be the binding constraint rather than reward size. The 5% to
15% band is wide, and the gap between its ends is larger than most incentive changes
produce.

Expect invite quality to fall as volume rises. The 10% to 25% invite-to-registration
band narrows at the top end of participation. Later referrers know the people they
invite less well.

<FromMyWork exp="exp-042">
Offline loan sourcing through more than 1.5 million CSC and kiosk shops reached
borrowers no digital funnel was going to find, without loosening lender-grade credit
quality. Distribution is sometimes a place rather than a mechanic.
</FromMyWork>

## Pitfalls

Five, and the first is the reason most loop strategies fail quietly.

Treating the loop as a plan rather than a measurement. Arrows on a diagram prove
nothing circulates.

Targeting a k-factor above one. The median among apps that have one is 0.45, and
chasing self-sustaining virality produces the spammy invite flows that get products
removed from stores.

Counting product-sent messages as invites. It makes the number look good and the
revenue unchanged.

Assuming games spread themselves. A k-factor is present for 22.5% of games against
33.6% of non-games.

Investing in referral where acquisition is already cheap. At $0.84 per install, about
₹81, a referral programme has almost no cost to save.

And measuring once. A k-factor moves with the acquisition mix, because referred users
refer at different rates from paid ones. One reading taken during a paid campaign
will understate the loop, and one taken during an organic spike will overstate it.

## The checklist

Twelve items. Stop after item five if the answer there is no.

1. Invite event defined, with product-sent messages excluded.
2. One acquisition cohort fixed as the measurement base.
3. Invites sent per user computed for that cohort.
4. Invite-to-registration rate computed for that cohort.
5. K-factor computed, and repeated for three cohorts.
6. Result placed against the 30% measurable share and the 0.45 median.
7. Blended cost per install computed with and without referred volume.
8. Saving stated in currency, not as a growth rate.
9. Participation rate measured against the 5% to 15% band.
10. Invite prompt placed after a value moment, with the moment named.
11. Invite quality tracked as participation rises.
12. Decision recorded: loop worth investing in, or funnel to make cheaper.

## Sources and related

Each figure carries its source and the date it was last checked. The k-factor
distribution comes from one analysis of an app sample, and it is the only published
source found that reports how many apps have a measurable k-factor at all rather than
what a good one looks like. That makes it the most useful figure here and a single
source, so it is marked as such.

The referral participation bands come from referral-programme tooling, measuring
programmes that exist — which excludes the products that tried and stopped.

The CAC glossary entry carries the cost definitions this playbook uses. The
experimentation playbook is the companion when a referral change needs testing, since
invite-flow effects are usually small enough to need real statistical power.
"""
  ),
  dict(
    id="playbook-0605", url="/playbooks/retention-curve-analysis", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Retention Curve Analysis: Reading the Shape, Not the Level",
    meta_description="Retention curve analysis step by step: telling a flattening curve from a slow decline, when it should flatten, and which category median applies.",
    h1="Retention curve analysis: reading the shape, not the level",
    primary_keyword="retention curve analysis",
    secondary_keywords=["retention curve flattening", "cohort retention analysis"],
    entity_a="retention-curve-analysis",
    facts=["f-rh-01", "f-rh-02", "f-rh-03", "f-bm-02", "f-bm-05", "f-fx-03", "f-ih-02"],
    experience=["exp-044", "exp-036"],
    links=L(("/glossary/cohort-analysis", "the cohort analysis entry", "lateral"),
            ("/glossary/retention-rate", "the retention rate entry", "lateral"),
            ("/benchmarks/retention/gaming", "gaming retention benchmarks", "reference"),
            ("/playbooks/activation-metric", "the activation metric playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("curve-shape",
              "Seven reference points for reading a retention curve: the day-30 band and flattening window for top-quartile consumer apps, the mobile day-30 average and the strong-product threshold, the day-30 band for SaaS subscription products, day 1, 7 and 30 medians for fintech and for gaming, the disagreement between two published e-commerce day-30 figures, and the share of paying users who convert within two days, each row carrying its source and verification date",
              "The shape tells you more than the level. Verified 30 September 2026."),
    faq=[
      dict(q="When should a retention curve flatten?",
           a="Between day 60 and day 90 for top-quartile consumer apps, which hold 25% to 40% at day 30. The flattening window is the useful target, because it says when the decline should stop rather than how high it should stop."),
      dict(q="Is a 6% day-30 figure bad?",
           a="It depends entirely on the shape and the category. The mobile average is 7% to 8%, so 6% is near-average, and a flat 6% across three cohorts beats an 8% still falling each month. Gaming sits at 3% by day 30 and e-commerce at 2% to 6%."),
      dict(q="How many users do I need for a readable curve?",
           a="Enough that a single user's behaviour cannot move a percentage point, which in practice means a few hundred per cohort. Below that, read the curve as a direction and not a number."),
      dict(q="Why does my curve look worse when growth accelerates?",
           a="Because recent cohorts dominate the blend and have had less time to retain. Every cohort can improve while the blended curve falls. Read cohorts separately before concluding anything about a trend."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Get your retention curve analysed", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Judges a curve by when it flattens rather than where it sits, using the published day-60-to-90 flattening window — so a product below the category median can still be shown to have a durable base, which a single day-30 comparison hides.",
    contradictions=[
      "Published day-30 retention for e-commerce does not agree: appstorys.com gives 3% to 6% "
      "while enable3.io reports a 2% median for the same category. Neither states which apps "
      "entered the sample or whether the figure is a mean or a median. Both appear on this page.",
    ],
    block_coverage=cover(["f-rh-01", "f-rh-02"], ["f-rh-01", "f-rh-03"],
                         ["f-bm-02"], ["f-rh-01", "f-bm-05"],
                         ["f-bm-05", "f-fx-03"], ["f-ih-02", "f-rh-02"],
                         ["f-rh-01"]),
    body="""
<AnswerBox>
Retention curve analysis asks one question first: does the curve flatten. Top-quartile
consumer apps hold 25% to 40% at day 30 and flatten between day 60 and day 90. The
mobile average is 7% to 8%. A flat 6% beats a falling 8%, because the flat one has
found a population the product keeps.
</AnswerBox>

<FactTable
  id="curve-shape"
  caption="The shape tells you more than the level"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Top-quartile consumer apps, day 30 and flattening window", "25-40%; flattens day 60-90"], factId: "f-rh-01" },
    { cells: ["Mobile day-30 average, and the strong threshold", "7-8%; above 15%"], factId: "f-rh-02" },
    { cells: ["SaaS subscription products at day 30", "40-50%"], factId: "f-rh-03" },
    { cells: ["Fintech, day 1 / 7 / 30 medians", "28% / 12% / 7%"], factId: "f-bm-02" },
    { cells: ["Gaming, day 1 / 7 / 30 medians", "32% / 8% / 3%"], factId: "f-bm-05" },
    { cells: ["E-commerce day 30, two published figures", "3-6% against a 2% median"], factId: "f-fx-03" },
    { cells: ["Paying users who convert within two days", "about half"], factId: "f-ih-02" },
  ]}
/>

## In short

Five points. The first one reframes the whole exercise.

The shape carries the information, not the level. A curve that flattens has found a
population the product holds. One still falling at day 90 has not, however high it
started.

There is a published window for flattening: day 60 to 90 for top-quartile consumer
apps. That gives the analysis a deadline rather than only a target.

Category sets the level before the product gets a vote. Gaming runs 32% at day 1 and
3% by day 30. Fintech runs 28% and 7%. SaaS subscription products reach 40% to 50%.

Day 1 and day 30 answer different questions. Gaming wins day 1 and loses day 30,
which is a reason-to-return problem rather than a first-session one.

And growth distorts the blend. Fast growth drags a blended curve down even when every
cohort improves.

## Who this is for, and who it is not

This suits any product with repeat usage and at least a few hundred new users a
month. It needs only an install or signup date and a usage event, which is the
smallest analytics setup that supports any decision at all.

It suits teams whose retention number has been flat for months and who cannot tell
whether that is good. Flat is usually the answer they were hoping for, and the
analysis here says so explicitly.

It does not suit a single-purchase product where nobody is expected to return. A
curve that decays to zero is correct behaviour for a product someone uses once, and
measuring it as retention produces alarm about nothing.

It also does not suit a product in its first weeks, where cohorts are too small to
read. The direction is visible; the number is noise.

## The method, part one: build a curve you can trust

Three steps, and skipping the first makes the rest unreadable.

### 1. Fix the three definitions before plotting anything

A denominator, a window, and a return. Installs or activated users. Day 30 exactly or
days 28 to 32. An app open, a session over some length, or a meaningful action. Three
choices, eight combinations, eight different curves from one dataset.

Write them down with the date. Most retention arguments turn out to be arguments about
one of these three, and an hour spent here saves a quarter of disagreement later.

The denominator choice is the one that moves the number most. Retention over activated
users runs far above retention over installs, because it has already removed everyone
who never reached first value. Neither is wrong. Comparing one against a benchmark
built on the other is.

### 2. Plot by acquisition cohort, never by calendar month

A calendar-month figure moves when a campaign lands mid-month, with nothing about the
product changing. Cohort by install week is the smallest unit that behaves.

### 3. Split paid from organic before reading anything

Blending them lets a campaign's quality masquerade as product health. Cheaper installs
make the curve look worse, which teams routinely read as a regression.

Split the two largest paid sources out as well, once volume allows. The gap between the
best and worst source is often the largest lever available, and larger than most
onboarding changes — the same product retains very differently depending on who
arrives.

## The method, part two: read the shape

Three steps, in this order.

### 4. Find the flattening point, or establish there is none

Compare each cohort's day-to-day decline rate rather than its level. The curve has
flattened when the decline between consecutive periods stops shrinking. For
top-quartile consumer apps that happens between day 60 and day 90, so a curve still
steepening at day 90 has a structural problem.

### 5. Compare to your category, then to your own last cohort

The mobile average of 7% to 8% is the wrong bar for gaming at 3% and for SaaS at 40%
to 50%. Once you have the category median, the more useful comparison is your own
previous cohort, because that controls for everything the category cannot.

### 6. Separate the day-1 problem from the day-30 problem

A low day 1 is a first-session problem. A fine day 1 with a collapsing day 30 is a
reason-to-return problem. Gaming shows the second shape clearly at 32% and 3%, and
onboarding work will not touch it.

Name which one you have before choosing any fix. Onboarding changes move day 1.
Notifications, content freshness and habit mechanics move day 7 and day 30. A team
pushing day-30 retention with onboarding work is pulling a lever connected to a
different number.

<FromMyWork exp="exp-044">
The pattern I keep seeing is a retention problem diagnosed as an acquisition problem.
Cheaper installs make the curve look worse rather than better. The team reads that
drop as a product regression and starts fixing the wrong thing.
</FromMyWork>

## The numbers to expect

Expect your honest curve to sit below the number currently being reported, because
most reported figures use the kindest available denominator.

Expect the flattening question to change the conversation more than the level does. A
flat curve has a business to grow, and a falling one has a leak to find.

<Example illustrative>
A product at 5% day-30 retention, flat for three cohorts, is healthier than one at 9%
that drops a point each month. The second looks better on a dashboard and is on its
way to zero.
</Example>

Expect the first two days to carry most of the monetisation signal as well. About half
of all paying users pay within two days of arriving, so a curve that collapses before
day 2 is also a revenue problem.

Expect three cohorts before any conclusion. One cohort is an anecdote with a chart
attached.

Expect the analysis to take an afternoon and the definitions to take longer. The
plotting is straightforward once the three choices are fixed. Teams that skip the
definitions spend weeks arguing about charts that measure different things.

<FromMyWork exp="exp-036">
The measurement I most regret not taking rigorously was client perception of product
coherence. It was the thing the whole strategy depended on, and it was the one number
nobody owned.
</FromMyWork>

## Pitfalls

Five, and the first two produce most false conclusions.

Reading a level as a trend. Day-30 retention of 6%, flat across three cohorts, beats
8% falling every month, and a single monthly number hides which you have.

Comparing to a cross-category average. The gap between gaming at 3% and SaaS at 40%
to 50% is larger than anything a product team changes.

Blending paid and organic. It converts acquisition decisions into apparent product
regressions.

Changing a definition mid-year. The step in the chart will be read as performance by
everyone who was not in the room.

Treating a published figure as settled when sources disagree. Two give e-commerce day
30 as 3% to 6% and as a 2% median, and neither publishes its sample.

## The checklist

Fourteen items. Items one to six must hold before any number is quoted outside the
team.

1. Denominator chosen and written down, installs or activated users.
2. Window fixed, with exact days stated.
3. Definition of a return fixed, with the event named.
4. All three definitions dated.
5. Cohorts built by acquisition week, not calendar month.
6. Paid and organic split into separate curves.
7. At least three cohorts plotted before any conclusion.
8. Decline rate between consecutive periods computed, not just the level.
9. Flattening point identified, or its absence stated.
10. Flattening point compared against the day-60-to-90 window.
11. Category median chosen as the comparison, not the cross-category average.
12. Current cohort compared against the previous one.
13. Day-1 and day-30 problems named separately.
14. Definition changes logged, so every step in the chart has a cause.

## Sources and related

Each figure carries its source and the date it was last checked. One disagreement is
recorded rather than resolved: e-commerce day-30 retention appears as 3% to 6% in one
source and as a 2% median in another, and neither states its sample or whether the
figure is a mean or a median.

A gap worth naming: no source publishes what share of apps never flatten at all,
which is the figure that would turn the flattening test into a benchmark. The day-60
to day-90 window is the closest published substitute, and it describes top-quartile
apps rather than the median.

The cohort analysis and retention rate glossary entries carry the definitions this
playbook assumes. The activation metric playbook is usually the next step, because a
curve that collapses before day 2 is an activation problem wearing a retention label.
"""
  ),
  dict(
    id="playbook-0606", url="/playbooks/unit-economics-for-consumer-apps", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Unit Economics for Consumer Apps: The Honest Version",
    meta_description="Unit economics for consumer apps against the real distribution: 58% of new subscription apps earn under $1,000 in year one and the top 10% take 95%.",
    h1="Unit economics for consumer apps",
    primary_keyword="unit economics for consumer apps",
    secondary_keywords=["consumer app cac payback", "app ltv cac ratio"],
    entity_a="unit-economics-for-consumer-apps",
    facts=["f-pb-22", "f-pb-23", "f-pb-24", "f-pb-25", "f-gh-04", "f-pb-19", "f-ih-02"],
    experience=["exp-025", "exp-021"],
    links=L(("/glossary/unit-economics", "the unit economics entry", "lateral"),
            ("/glossary/cac-payback-period", "the CAC payback entry", "lateral"),
            ("/benchmarks/install-to-purchase/d2c-ecommerce", "install to purchase benchmarks", "reference"),
            ("/playbooks/subscription-pricing-strategy", "the pricing playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("consumer-unit-economics",
              "Seven reference points for consumer app unit economics: the share of new subscription apps earning under a thousand dollars in year one, the share reaching ten thousand dollars monthly within two years, the share of all subscription revenue the top decile captures, the typical consumer payback window and its target, the mobile lifetime-value to acquisition-cost band against the software bar, blended annual revenue per user across three monetisation shapes, and the share of payers who pay within two days, each row carrying its source and verification date",
              "The distribution most unit-economics models ignore. Verified 30 September 2026."),
    faq=[
      dict(q="Is a 3 to 1 LTV to CAC ratio the right target?",
           a="Not for a consumer app. That bar came from software-as-a-service. Mobile apps typically run 1.5 to 2.5 to 1, because revenue per user is lower and installs cost more. A consumer app at 2 to 1 fails no universal test."),
      dict(q="How fast should acquisition cost come back?",
           a="Three to nine months for consumer subscription, with under six the target. That beats the twelve-month software convention, because consumer churn leaves less time to recover."),
      dict(q="Why do my projections look nothing like published outcomes?",
           a="The published distribution skews hard. 58% of new subscription apps earn under $1,000 in their first year, only 4.6% reach $10,000 a month within two years, and the top 10% of apps take 95% of all subscription revenue."),
      dict(q="Where does the model break first?",
           a="Usually in the revenue window rather than the cost. About half of all users who ever pay do so within two days of arriving, so a model spreading revenue evenly across month one goes wrong in week one."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Pressure-test your app unit economics", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Builds the model against the published outcome distribution rather than a median, so a forecast has to survive the fact that 58% of new subscription apps earn under $1,000 in year one and the top decile takes 95% of revenue.",
    block_coverage=cover(["f-pb-22", "f-pb-24"], ["f-gh-04", "f-pb-25"],
                         ["f-pb-23"], ["f-unit-37", "f-pb-25"],
                         ["f-ih-02", "f-pb-24"], ["f-gh-04", "f-pb-23"],
                         ["f-pb-25"]),
    body="""
<AnswerBox>
Unit economics for consumer apps answer one question: does a user return more than
they cost, fast enough. Aim to recover acquisition cost inside six months. Expect a
lifetime-value to acquisition-cost ratio of 1.5 to 2.5 to one rather than the software
bar of three. And build against the real distribution: 58% of new subscription apps
earn under $1,000, about ₹95,900, in their first year.
</AnswerBox>

<FactTable
  id="consumer-unit-economics"
  caption="The distribution most unit-economics models ignore"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["New subscription apps earning under $1,000 (₹95,900) in year one", "58%"], factId: "f-pb-22" },
    { cells: ["Newly launched apps reaching $10,000/month (₹9.59 lakh) within two years", "4.6%"], factId: "f-pb-23" },
    { cells: ["Share of all subscription revenue taken by the top 10% of apps", "95%"], factId: "f-pb-24" },
    { cells: ["Consumer subscription payback window, and the target", "3-9 months; under 6"], factId: "f-pb-25" },
    { cells: ["Mobile LTV to CAC, against the software bar", "1.5-2.5 to 1, against 3 to 1"], factId: "f-gh-04" },
    { cells: ["Blended annual revenue per user: hybrid / ad-only / subscription-led", "$3-15 / $0.40-2 / $30+ (₹288-1,438 / ₹38-192 / ₹2,877+)"], factId: "f-pb-19" },
    { cells: ["Users who ever pay, paying within two days", "about half"], factId: "f-ih-02" },
  ]}
/>

## In short

Five things, and the first invalidates most spreadsheets.

The outcome distribution is not normal. 58% of new subscription apps earn under
$1,000, about ₹95,900, in year one. Only 4.6% reach $10,000 a month, about ₹9.59 lakh,
within two years. The top decile takes 95% of subscription revenue. A model built on a
median outcome is modelling a position almost nobody occupies.

The three-to-one ratio is borrowed. Mobile apps run 1.5 to 2.5 to one: lower revenue
per user, costlier installs.

The payback window is tighter than software's. Three to nine months, with under six
the target, against the twelve-month convention.

Revenue per user varies as widely as cost does. Blended annual revenue per user runs $3
to $15 for hybrid freemium, about ₹288 to ₹1,438, against $30 or more for
subscription-led products, about ₹2,877.

Put those five together and the model gets simpler. Judge a channel on payback, judge
the product on realised value, and treat any forecast above the published outcomes as a
claim that needs its own argument.

And the revenue arrives early or not at all. About half of everyone who ever pays
pays within two days.

## Who this is for, and who it is not

This suits a consumer app with paid acquisition, or about to start it. The decision it
supports is how much to spend per install and how long to wait before judging.

It suits founders whom someone is holding to a three-to-one ratio learned from
software. The counter-argument here is arithmetic, not opinion.

It does not suit an enterprise or seat-based product. Ratios and payback windows differ
there, and the software conventions hold.

It also does not suit a product with no paid acquisition and no plan for any. Organic
unit economics are simpler. There the binding question is retention, not payback.

One more case it suits: a team about to raise spend on a channel that already works.
That is the moment a blended payback figure does the most damage, because the channel
being scaled is rarely the one the blend describes.

## The method, part one: build the model honestly

Three steps.

### 1. Measure revenue in the window it actually arrives

About half of all payers pay within two days. Model day-zero-to-two revenue separately
from everything after. The two behave differently, and only the first follows from a
cohort's first session.

### 2. Use a realised lifetime value, never a projected one

Take a cohort as old as your payback target. Total what it actually paid. A projected
lifetime value multiplies an early number by an assumed lifetime, and that assumption
carries the whole result.

### 3. Compute payback per channel, not blended

Acquisition cost varies by more than tenfold across categories and platforms, and
inside one product it varies as widely across channels. A blended payback figure hides
the channel that will never pay back.

Rank the channels by payback and read the list rather than the average. The worst
channel usually funds nothing and consumes a third of the budget.

## The method, part two: judge it against the distribution

Three steps that most models skip, and the ones that turn a spreadsheet into a
decision. Each produces something a sceptical reader can check, instead of a number resting on
an assumption nobody wrote down.

### 4. Set the ratio target from the category, not the convention

For a consumer app, 1.5 to 2.5 to one is the published band. Pick a target inside it
and write down the reason. Do not inherit three to one from a different business
shape.

### 5. Test the forecast against the outcome distribution

Put the forecast next to the published outcomes. 58% of new subscription apps stay
under $1,000 in year one, about ₹95,900. Only 4.6% pass $10,000 a month inside two
years, about ₹9.59 lakh. A forecast clearing the second threshold forecasts an
outcome that only 4.6% of apps reach. That is allowed. Say so out loud.

### 6. Decide the kill rule before spending

Name the payback figure at which you stop a channel. Six months is the published
target. Writing it down first makes it a decision rather than an argument later.

Set a second rule for scaling up, not only for stopping. A channel that pays back in
three months earns more budget; one at eight months holds steady; one past nine stops.
Three rules, decided once, remove most of the monthly debate about where spend goes.

<FromMyWork exp="exp-025">
Launching a cheaper line to chase a distributor's forecast damaged the premium position
and the volume never arrived. Unit economics fail the same way: the cheaper acquisition
looks like progress and costs more than it brings.
</FromMyWork>

## The numbers to expect

Expect realised lifetime value to come in below the projection, usually by a wide
margin. Projections assume a lifetime; realised numbers measure one. The gap is widest
in the first six months, when the assumed tail has not had a chance to disprove itself.

Expect one or two channels to carry the whole result. Acquisition cost spans more than
a tenfold range, so a blended figure averages things that need judging separately.

Expect the payback target to bind harder than the ratio. A product can hit two to one
on lifetime value and still fail, if that lifetime runs three years and the cash is
needed this quarter.

Expect the model to need rebuilding once a year. Install costs move, store fees change,
and a payback figure from eighteen months ago describes a market that has shifted under
it.

Expect the distribution to be the most useful thing on this page. 58% earn under
$1,000, about ₹95,900, while the top decile takes 95% of revenue. Consumer app
economics get won or lost at the extremes.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. A single multiple credits
the last change with all of the growth, and in unit economics that usually hides a
mix shift between channels.
</FromMyWork>

## Pitfalls

Five, and the first two are nearly universal.

Importing the three-to-one ratio. It fits a different revenue shape. Mobile apps run
1.5 to 2.5 to one.

Projecting lifetime value instead of realising it. The assumed lifetime does the work, and nobody
audits it.

Blending channels. A tenfold spread in install cost means the blend describes no
channel you actually buy.

Modelling revenue as a monthly average. Half of all payers pay within two days, so
month one is front-loaded and months two onward are thinner than a straight line
suggests.

Forecasting a median outcome. Almost nobody sits at the median: 58% stay below $1,000
in year one, about ₹95,900, and 4.6% pass $10,000 a month, about ₹9.59 lakh, within two
years.

## The checklist

Thirteen items. Items one to four are the model; the rest are the judgement.

1. Day-zero-to-two revenue split from later revenue.
2. Cohort age matches the payback target.
3. Realised lifetime value totalled for that cohort; nothing projected.
4. Cost per install computed per channel, never blended.
5. Payback period computed per channel.
6. Ratio target inside the 1.5 to 2.5 band, with the reason noted.
7. Payback target chosen against the three-to-nine-month window.
8. Kill rule agreed in writing before any spend increase.
9. Forecast placed against the outcome figures for year one and month twenty-four.
10. Any assumption of a top-decile outcome flagged explicitly as one.
11. Retention curve read before any acquisition increase.
12. Refunds and store fees deducted before lifetime value is computed.
13. Currency pairing and fx date noted for every figure in the model.
14. Model dated, and the next rebuild booked within twelve months.
15. Scaling rule sits beside the kill rule, so good channels grow deliberately.

## Sources and related

Each figure carries its source and the date it was last checked. The outcome
distribution comes from one subscription platform's data across its customer base,
reported secondhand, and it is the only published source found that gives the shape of
app outcomes rather than a central tendency. That makes it the most useful figure here
and a single source, so it is marked as one.

The install-to-purchase benchmarks carry the conversion side of this model. The pricing
playbook sets the revenue side. The unit economics and CAC payback glossary entries
carry the definitions, including which costs belong above the line.

One gap worth naming: no source publishes what share of consumer apps ever recover
acquisition cost at all. The payback window above describes the apps that do. Treat it
as the target among products already working, not as a probability of reaching it.
"""
  ),
  dict(
    id="playbook-0607", url="/playbooks/hybrid-monetization", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="Hybrid Monetization: Running Ads and Subscriptions Together",
    meta_description="Hybrid monetization in practice: only 10% of apps run a true hybrid model while more than 60% of top-grossing apps run two or more revenue models.",
    h1="Hybrid monetization: ads and subscriptions together",
    primary_keyword="hybrid monetization",
    secondary_keywords=["ads and subscription together", "hybrid app revenue model"],
    entity_a="hybrid-monetization",
    facts=["f-pb-18", "f-pb-19", "f-pb-20", "f-pb-21", "f-svc-06", "f-svc-08", "f-bm-27"],
    experience=["exp-018", "exp-026"],
    links=L(("/glossary/arpu", "the ARPU entry", "lateral"),
            ("/glossary/freemium", "the freemium entry", "lateral"),
            ("/benchmarks/arpu/b2b-saas", "ARPU benchmarks", "reference"),
            ("/playbooks/app-monetization-models", "the monetisation models playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("hybrid-reality",
              "Seven reference points for hybrid monetization: the share of apps running a true hybrid model against the share of top-grossing apps running two or more revenue models, blended annual revenue per user for hybrid freemium against ad-only and subscription-led products, how much more subscription apps earn per user than ad-only ones, free-to-paid conversion for AI apps against mature subscription apps, the share of companies on hybrid pricing now and projected, what pricing model investors prefer, and Indian streaming advertising revenue, each row carrying its source and verification date",
              "Few apps run hybrid; most of the biggest ones do. Verified 30 September 2026."),
    faq=[
      dict(q="Is hybrid monetization common?",
           a="No, and that is the interesting part. Only 10% of apps run a true hybrid model, while more than 60% of top-grossing apps run two or more revenue models at once. Hybrid is rare overall and normal at the top."),
      dict(q="What revenue per user should hybrid produce?",
           a="Between the two models it combines. Blended annual revenue per user runs $3 to $15 for hybrid freemium, against $0.40 to $2 for ad-only free tiers and $30 or more for subscription-led products."),
      dict(q="Does adding ads damage subscription revenue?",
           a="Only if the ads reach the people most likely to subscribe. Subscription apps earn 4.6 times the revenue per user of ad-only ones, so the arithmetic favours protecting the subscription path and monetising everyone else."),
      dict(q="Which products need hybrid most?",
           a="Those with very low free-to-paid conversion. AI apps convert at 1% to 3% against 5% to 8% for mature subscription apps, which leaves a much larger non-paying population to monetise some other way."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Design a hybrid monetization model with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Sets the 10% of apps running true hybrid against the 60%-plus of top-grossing apps that do, so the decision is framed as a scale question rather than a philosophy — and sizes the non-paying population with conversion figures rather than assuming it.",
    block_coverage=cover(["f-pb-18"], ["f-pb-19", "f-pb-20"],
                         ["f-pb-21"], ["f-pb-19", "f-pb-20"],
                         ["f-svc-06", "f-bm-27"], ["f-pb-20", "f-pb-21"],
                         ["f-svc-08"]),
    body="""
<AnswerBox>
Hybrid monetization means running two revenue models at once, usually subscriptions
plus advertising. Only 10% of apps do it. More than 60% of top-grossing apps run two
or more. Treat it as something products grow into, once the non-paying population is
large enough to be worth serving.
</AnswerBox>

<FactTable
  id="hybrid-reality"
  caption="Few apps run hybrid; most of the biggest ones do"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Apps on a true hybrid model, against top-grossing apps on two or more", "10% against more than 60%"], factId: "f-pb-18" },
    { cells: ["Blended annual revenue per user: hybrid / ad-only / subscription-led", "$3-15 / $0.40-2 / $30+ (₹288-1,438 / ₹38-192 / ₹2,877+)"], factId: "f-pb-19" },
    { cells: ["Subscription against ad-only revenue per user", "4.6 times"], factId: "f-pb-20" },
    { cells: ["Free-to-paid conversion, AI apps against mature subscription apps", "1-3% against 5-8%"], factId: "f-pb-21" },
    { cells: ["Companies on hybrid pricing now and projected", "43%, rising to 61%"], factId: "f-svc-06" },
    { cells: ["Pricing model investors name as preferred", "hybrid 35%, outcome-based 26%"], factId: "f-svc-08" },
    { cells: ["Indian streaming advertising revenue, 2025", "$563.9 million (about ₹5,400 crore)"], factId: "f-bm-27" },
  ]}
/>

## In short

Five points, and the first two frame the decision.

Hybrid is rare and concentrated. Only 10% of apps run a true hybrid model. More than
60% of top-grossing apps run two or more. So hybrid follows scale rather than causing
it.

The revenue per user lands between the two models, not above both. Hybrid freemium
blends to $3 to $15 a year, about ₹288 to ₹1,438, against $0.40 to $2 for ad-only and
$30 or more for subscription-led.

Subscription remains the stronger model per user, at 4.6 times ad-only revenue. So the
subscription path is the thing to protect.

Low conversion is the signal to go hybrid. AI apps convert at 1% to 3% against 5% to
8% for mature subscription apps, which leaves far more non-payers to serve.

And the direction of travel is clear: 43% of companies already use hybrid pricing,
projected to reach 61%, and investors name hybrid their preferred model at 35%.

## Who this is for, and who it is not

This suits a product with a large, engaged, non-paying population, and a subscription
that converts a small share of it. In that shape, ads add revenue without taking it
from somewhere else.

It suits teams under pressure to raise revenue per user without raising price. Hybrid
does that by widening who pays at all, rather than charging payers more.

It does not suit a product whose free tier is small or lightly used. Ads on thin
traffic earn very little and cost goodwill at the worst moment.

It also does not suit a product whose subscription converts well. Take the top of the
published range, 8% on an engaged base. Ad revenue from the rest rarely covers the
damage to the funnel.

One more case where it fits: a product with strong seasonal or regional traffic that
will never pay. Indian streaming advertising reached $563.9 million in 2025, about
₹5,400 crore, which is a real market built on exactly that population.

## The method, part one: size the opportunity

Three steps, all arithmetic before any build.

### 1. Count the non-paying population and its engagement

Count how many free users return weekly, not how many exist. Ad revenue tracks
sessions, so a large dormant base produces almost nothing.

Write the weekly figure down. It sets the ceiling on everything below.

### 2. Model ad revenue at the published blend, not at a vendor estimate

Hybrid freemium blends to $3 to $15 per user per year, about ₹288 to ₹1,438. Use the low
end for the first model. If the low end does not change the business, the work is not
worth doing yet.

The low end is the honest default for a reason. Published blends come from products that
already run ads competently, with fill rates and placements tuned over years. A first
implementation lands below that, and planning from the top of the range turns a
reasonable project into a missed forecast.

### 3. Price the risk to subscription revenue explicitly

Subscription apps earn 4.6 times the revenue per user of ad-only ones. Work out how
many subscribers you could lose before the ad revenue stops being a gain. Then check
whether that number is small enough to worry about. It usually is.

## The method, part two: build it without damaging the funnel

Three steps, in this order.

### 4. Exclude the likely subscribers from ad exposure

Everyone who has started a trial, opened a paywall more than once, or crossed your
activation threshold goes on an exclusion list. The remaining audience is where ads
belong.

Keep the list dynamic. A user who crosses the activation threshold next week should
leave the ad audience next week, not at the next quarterly review. A static list decays
into exactly the problem it was built to prevent, and the decay is invisible because
both revenue lines keep reporting normally.

### 5. Put ads where value has already landed, never before it

Ads before a user has got anything suppress both models at once. Place them after a
completed action, which costs least.

### 6. Report one blended revenue-per-user figure, plus both components

Measurement is the usual reason hybrid underperforms. Teams judge ads and subscriptions
in separate dashboards and never see the trade. One blended figure, with both parts
visible, is the minimum.

<FromMyWork exp="exp-018">
Two revenue lines in one product create a governance problem before they create a
revenue problem. Somebody has to own the trade between them, and if nobody does, each
team optimises its own line and the blended number drifts.
</FromMyWork>

## The numbers to expect

Expect ad revenue per user to look small and the total to matter anyway. The gap
between $0.40 and $15 a year, about ₹38 and ₹1,438, is the difference between
monetising a free base badly and well, and both look unimpressive per user.

Expect subscription revenue to stay the larger line. At 4.6 times ad-only revenue per
user, a hybrid product usually earns most of its money from a minority of users.

Expect measurement to be harder than the build. Two models in one funnel means every
change moves both numbers. Attributing the effect needs a blended metric agreed in
advance.

Expect the market to move toward you. Hybrid pricing is at 43% of companies and
projected to reach 61%, and investors already name it their preferred model at 35%. That
matters for a fundraise as much as for revenue: a model investors recognise needs less
explaining than one they have to be talked into.

<FromMyWork exp="exp-026">
Professionals bought after using the tool, not after hearing about it. Hands-on
demonstration beat description, which is the same reason an ad shown before first value
costs more than it earns.
</FromMyWork>

## Pitfalls

Five, and the first is the one that kills hybrid attempts.

Showing ads to likely subscribers. It trades a high-value conversion for a low-value
impression, and the arithmetic is 4.6 to one against you.

Judging the two models separately. Without a blended figure, each team reports a win
while the total stays flat.

Modelling ad revenue from a vendor's best case. The published blend is $3 to $15 per
user per year, about ₹288 to ₹1,438, and the low end is the honest planning number.

Adding ads to a thin free tier. Low session volume produces revenue too small to measure
and churn large enough to notice. The order matters: grow the free base first, then
monetise it.

Going hybrid to avoid a pricing decision. A product converting at 8% has a price problem
it can solve. One converting at 1% to 3% has a population problem, which hybrid
genuinely addresses. Diagnose which you have before building either.

## The checklist

Twelve items. The first four decide whether to proceed at all.

1. Non-paying population counted, with weekly returning users separated out.
2. Free-to-paid conversion rate measured against the 1% to 8% published span.
3. Ad revenue modelled at the low end of the published blended range.
4. Decision recorded: proceed only if the low-end model changes the business.
5. Exclusion list defined for trialists, repeat paywall viewers and activated users.
6. Ad placements mapped to moments after a completed action.
7. Blended revenue-per-user metric defined and agreed before launch.
8. Both component figures visible alongside the blend.
9. Owner named for the trade between the two revenue lines.
10. Subscription conversion monitored as a guardrail, with a rollback threshold.
11. Session volume per placement tracked, since ad revenue follows sessions.
12. Review booked at ninety days against the blended figure, not either component.
13. Exclusion list set to refresh continuously, not at the quarterly review.

## Sources and related

Each figure carries its source and the date it was last checked. The hybrid adoption
and revenue-per-user figures come from subscription platform and analyst reporting on
app portfolios, and the ARPU bands in particular come from a single source, so they are
marked as one rather than presented as a consensus.

The monetisation models playbook covers the choice between models. This one covers
running two at once. The ARPU and freemium glossary entries carry the definitions,
including which denominator each blended figure uses.

Two gaps are worth naming. No source publishes how hybrid adoption splits by category,
so the decision above rests on your own conversion rate rather than on a peer group.
And no source gives the subscription loss attributable to ad exposure, which is the one
figure that would settle the exclusion-list question. Both stay stated as gaps.
"""
  ),
  dict(
    id="playbook-0608", url="/playbooks/app-monetization-models", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="App Monetization Models: Choosing Between Them",
    meta_description="App monetization models compared on published evidence: subscriptions take 82% of non-gaming store revenue and grew 105% year on year against 14% for ads.",
    h1="App monetization models: choosing between them",
    primary_keyword="app monetization models",
    secondary_keywords=["app revenue models compared", "subscription vs ads vs iap"],
    entity_a="app-monetization-models",
    facts=["f-pb-26", "f-pb-27", "f-fx-08", "f-act-20", "f-act-21", "f-bm-26", "f-pb-28"],
    experience=["exp-029", "exp-030"],
    links=L(("/glossary/take-rate", "the take rate entry", "lateral"),
            ("/glossary/paywall", "the paywall entry", "lateral"),
            ("/benchmarks/app-store-conversion/media-ott", "store conversion benchmarks", "reference"),
            ("/playbooks/hybrid-monetization", "the hybrid monetization playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("model-evidence",
              "Seven reference points for choosing between app monetization models: year-on-year revenue growth for subscriptions against in-app purchases and advertising, the subscription share of non-gaming app store revenue, the primary model across 686 tracked apps, the standard Google Play revenue share at two tiers, a reported marketplace take rate on gross merchandise volume, the Indian OTT subscription base, and conversion benchmarks for freemium against opt-in and opt-out trials, each row carrying its source and verification date",
              "What each model actually returns, and what the store takes. Verified 30 September 2026."),
    faq=[
      dict(q="Which model is growing fastest?",
           a="Subscriptions, by a wide margin. Subscription revenue grew 105% year on year in the first quarter of 2026, against 29% for in-app purchases and 14% for advertising."),
      dict(q="Is subscription always the right choice?",
           a="No. It takes 82% of non-gaming store revenue and is the primary model for 61% of tracked apps, but it needs repeated value to justify repeated billing. A product used once or twice has nothing to renew."),
      dict(q="What does the store take?",
           a="Google Play's standard rate is 10% on the first $1 million of annual revenue and 20% above it. That sits well below marketplace take rates: eBay reported 13.91% on its gross merchandise volume."),
      dict(q="Does the model change the conversion rate I should expect?",
           a="Substantially. Freemium benchmarks sit under 10%, opt-in trials reach up to 25% and opt-out trials up to 50%. Choosing the model sets the range before any execution."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Choose your app monetization model with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Chooses between models on usage frequency and store take rather than on revenue share alone, and shows that the model choice sets the conversion range before execution does — freemium under 10% against up to 50% for opt-out trials.",
    block_coverage=cover(["f-pb-26", "f-pb-27"], ["f-fx-08", "f-pb-28"],
                         ["f-bm-26"], ["f-act-20", "f-act-21"],
                         ["f-pb-27", "f-fx-08"], ["f-pb-28", "f-act-20"],
                         ["f-pb-26"]),
    body="""
<AnswerBox>
App monetization models divide into subscription, one-off purchase, advertising and
transaction fees. Subscriptions take 82% of non-gaming store revenue and grew 105% year
on year, against 29% for in-app purchases and 14% for ads. Pick on how often people use
the product, then check what the store takes.
</AnswerBox>

<FactTable
  id="model-evidence"
  caption="What each model actually returns, and what the store takes"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Year-on-year revenue growth: subscriptions / IAP / ads", "105% / 29% / 14%"], factId: "f-pb-26" },
    { cells: ["Subscription share of non-gaming app store revenue", "82%"], factId: "f-pb-27" },
    { cells: ["Primary model across 686 tracked apps", "subscriptions 61%, advertising 26%"], factId: "f-fx-08" },
    { cells: ["Google Play standard rate, first $1M (₹9.59 crore) and above", "10% then 20%"], factId: "f-act-20" },
    { cells: ["eBay reported take rate on gross merchandise volume", "13.91%"], factId: "f-act-21" },
    { cells: ["OTT subscriptions in India", "216.5 million"], factId: "f-bm-26" },
    { cells: ["Conversion: freemium / opt-in trial / opt-out trial", "under 10% / up to 25% / up to 50%"], factId: "f-pb-28" },
  ]}
/>

## In short

Five points, and the first is about frequency rather than revenue.

Usage frequency picks the model. Repeated use justifies repeated billing. A product
someone opens twice has nothing to renew, whatever the revenue charts say.

Subscriptions dominate and are growing fastest: 82% of non-gaming store revenue, the
primary model for 61% of tracked apps, and 105% year-on-year growth against 14% for ads.

The model sets the conversion range before execution does. Freemium sits under 10%,
opt-in trials reach 25% and opt-out trials 50%.

Store economics are better than marketplace economics. Google Play takes 10% on the
first $1 million, about ₹9.59 crore, and 20% above, against eBay's reported 13.91% of
gross merchandise volume.

And scale exists outside the Western subscription market. India has 216.5 million OTT
subscriptions, which is a subscription market at a different price level.

## Who this is for, and who it is not

This suits a team choosing a model for a new product, or reconsidering one that is not
producing. The decision is cheap now and expensive later, because a model change
reshapes the product rather than the pricing page.

It suits anyone whose instinct is subscription because subscription is winning. The
growth figures support that instinct and the frequency test may not.

It does not suit a product already monetising well. Changing a working model to chase a
category average usually costs more than it returns.

It also does not suit a marketplace, where the question is take rate rather than model.
The glossary entry on take rate covers that directly.

One case deserves its own note: a product with two distinct user groups, one frequent and
one occasional. That shape often wants two models rather than one, and the hybrid
playbook covers it. Choosing a single model for both groups usually underserves the
larger one.

## The method, part one: narrow the field

Three steps.

### 1. Measure how often people come back

Weekly or more often supports a subscription. Monthly or less points to a one-off
purchase, transaction fees or advertising. That one measurement rules out at least two
models for most products.

Measure it on real cohorts rather than on intent. What people say about how often they
would use a product has almost no relationship to how often they do.

### 2. Count the non-paying population you would keep

Advertising and hybrid both need volume. If most users leave in week one, advertising has
no inventory worth selling, and the choice narrows to charging the few who stay.

Count returning users rather than installs. An install that never comes back produces one
impression, which prices at close to nothing, and install counts flatter every ad model
on paper.

### 3. Check what the platform takes from each option

Google Play takes 10% on the first $1 million of annual revenue, about ₹9.59 crore, and
20% above it. Transaction and marketplace models carry their own rates, with eBay
reporting 13.91% of gross merchandise volume. Run each candidate model net of its own
take, because the gross comparison is misleading.

## The method, part two: commit and set the bar

Three steps.

### 4. Set the conversion expectation from the model, not from ambition

Freemium under 10%, opt-in trials up to 25%, opt-out up to 50%. Write down which range
applies before launch, so the first month's number has something to be judged against.

The gap between those ranges is mostly commitment, not quality. An opt-out trial asks for
card details and converts best because it has already filtered for intent. It also cuts the
number of people who start, so the higher rate applies to a smaller group. Model both
effects, or the model choice will look better on paper than in revenue.

### 5. Price the model at the local level where you sell

India's 216.5 million OTT subscriptions are a reminder that a subscription market can be
very large and priced far below Western equivalents. Build the ladder from a local price
rather than converting a Western one. The conversion rate and the price level move
independently, and a model that works at one price level can fail at another with the same
funnel.

### 6. Decide what would make you change model, in advance

Name the figure. A subscription with renewal rates below your payback requirement is a
model problem rather than a pricing problem, and the threshold is easier to agree before
anyone is defending a decision.

Two thresholds are usually enough: a renewal rate below which the subscription is not
viable, and a conversion rate below which freemium is not. Both get written down once and
checked quarterly, which keeps the model decision reviewable instead of permanent.

<FromMyWork exp="exp-030">
Sixty days went into understanding the organisation before changing anything.
Misdiagnosing the problem is more expensive than moving slowly, and a monetisation model
is the most expensive thing to misdiagnose.
</FromMyWork>

## The numbers to expect

Expect subscription to look best on every published chart and still fail the frequency
test for some products. An 82% revenue share describes the market, not your product.

Expect the net comparison to change the ranking. Gross revenue favours whatever model
charges most. Net of a 10% to 20% platform rate, or a 13.91% marketplace take, the order
can reverse.

Expect the conversion range to hold. Freemium under 10% is persistent across many
products, and a plan assuming 20% from a freemium model is planning on an outlier.

Expect advertising to grow slowest. At 14% year on year against 105% for subscriptions, an
ad-first model places the business in the slower-growing part of the market. That is
sometimes the right call, and it should be a deliberate one rather than a default.

<FromMyWork exp="exp-029">
Three teams shipped in the same week without knowing it, and the collision was
organisational rather than technical. Monetisation models fail the same way, when pricing,
product and growth each assume a different model.
</FromMyWork>

## Pitfalls

Five, and the first is the most common.

Choosing subscription because subscription is winning. The 105% growth figure is a market
fact, and the frequency test is a product fact.

Comparing models gross. Platform and marketplace rates differ enough to change which
model nets more.

Planning freemium conversion above its range. Under 10% is the published benchmark, and
most plans assume better.

Assuming a Western price. India's 216.5 million OTT subscriptions exist at a very
different level, and a converted price misses both markets.

Treating the model as a pricing page decision. It shapes the product, the funnel and the
team. Changing it later means rebuilding all three.

And leaving the decision unowned. Pricing, product and growth each make assumptions about
the model, and when nobody owns it those assumptions diverge quietly until a launch
exposes them.

## The checklist

Twelve items. The first three narrow the field; the rest commit to one.

1. Return frequency measured, weekly or less often.
2. Non-paying population that survives week one counted.
3. Models eliminated by the frequency test, in writing.
4. Platform or marketplace rate applied to each remaining candidate.
5. Net revenue per user compared across candidates, not gross.
6. Conversion range chosen from the model, with the figure recorded.
7. Local price level researched for each market you sell into.
8. Ladder built upward from the local price, not converted down.
9. Renewal or repeat-purchase requirement stated for the chosen model.
10. Change-of-model threshold agreed before launch.
11. One owner named for the model decision across pricing, product and growth.
12. Review booked at ninety days against the conversion range, not the revenue total.
13. Renewal and conversion thresholds written down, with a quarterly check scheduled.

## Sources and related

Each figure carries its source and the date it was last checked. The growth rates and
revenue shares come from app store and platform reporting, which covers apps distributed
through the stores and therefore excludes web-billed products — an increasingly large
exception worth remembering when the store take is the deciding factor.

The hybrid monetization playbook covers running two of these models at once, which is
where most products end up at scale. The take rate and paywall glossary entries carry the
definitions, including what belongs inside a take rate.

One gap worth stating: no source gives revenue growth by model for India specifically.
The subscription base is documented and the growth split is not, so the growth figures
above describe the global store market and the Indian price level has to come from
elsewhere.
"""
  ),
  dict(
    id="playbook-0609", url="/playbooks/north-star-metric", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="North Star Metric: Choosing One Teams Can Actually Move",
    meta_description="Choosing a north star metric: the test is whether you can move it directly, because a metric you can move directly is the wrong one.",
    h1="Choosing a north star metric teams can move",
    primary_keyword="north star metric",
    secondary_keywords=["north star metric examples", "input metrics"],
    entity_a="north-star-metric",
    facts=["f-pb-29", "f-pb-30", "f-pb-31", "f-pb-32", "f-rh-01", "f-gh-03", "f-pb-06"],
    experience=["exp-032", "exp-033"],
    links=L(("/glossary/north-star-metric", "the north star metric entry", "lateral"),
            ("/glossary/omtm", "the OMTM entry", "lateral"),
            ("/benchmarks/retention/healthtech", "healthtech retention benchmarks", "reference"),
            ("/playbooks/activation-metric", "the activation metric playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("north-star-tests",
              "Seven reference points for choosing a north star metric: the number of input metrics a north star carries, the test that a directly movable metric is the wrong one, the list of commonly named poor choices, published examples that measure delivered value, the day-60-to-90 window in which a healthy retention curve flattens, the share of paying users who pay within two days, and how far median time to value has compressed, each row carrying its source and verification date",
              "The tests a candidate has to survive. Verified 30 September 2026."),
    faq=[
      dict(q="How do I know a north star candidate is wrong?",
           a="If the team can move it directly, it is the wrong one. A metric you can push without changing customer behaviour is a dial, not a north star, and revenue metrics fail this test most often."),
      dict(q="Which metrics are usually poor choices?",
           a="Recurring revenue, daily active users, downloads, page views and registered users are all named as poor north stars. They either lag the behaviour you want or count people rather than value delivered."),
      dict(q="How many input metrics should there be?",
           a="Three to five. Each should be something a team can influence directly through the product, and together they should plausibly explain movement in the north star."),
      dict(q="How often should the north star change?",
           a="Rarely, and never quietly. A changed definition makes every prior chart incomparable, so the change needs a date and a stated reason that survives being read a year later."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Choose a north star metric with me", "href": "/work-with-me"},
         "secondary": {"label": "See the case studies", "href": "/case-studies"}},
    unique_value="Uses the direct-movability test as the primary filter rather than a list of good examples, and pairs each candidate with a published leading-indicator window so the choice can be checked against evidence instead of taste.",
    block_coverage=cover(["f-pb-30"], ["f-pb-31", "f-pb-32"],
                         ["f-pb-29"], ["f-pb-29", "f-pb-32"],
                         ["f-rh-01", "f-gh-03"], ["f-pb-31", "f-pb-30"],
                         ["f-pb-06"]),
    body="""
<AnswerBox>
A north star metric is the one number a team steers by. The test that eliminates most
candidates: if you can move it directly, it is the wrong one. It has to measure value
delivered, lead revenue rather than report it, and break into 3 to 5 inputs that
different teams can each influence.
</AnswerBox>

<FactTable
  id="north-star-tests"
  caption="The tests a candidate has to survive"
  columns={["Test or reference point", "What it says"]}
  rows={[
    { cells: ["The direct-movability test", "a metric you can move directly is the wrong one"], factId: "f-pb-30" },
    { cells: ["Commonly named poor choices", "ARR, MRR, DAU, downloads, page views, registered users"], factId: "f-pb-31" },
    { cells: ["Published examples that measure delivered value", "nights booked, time spent listening, rides per week"], factId: "f-pb-32" },
    { cells: ["Input metrics a north star carries", "three to five, each team-influenceable"], factId: "f-pb-29" },
    { cells: ["When a healthy retention curve flattens", "day 60 to 90, top-quartile consumer apps"], factId: "f-rh-01" },
    { cells: ["Activation rate, median against its quartiles", "41.7%; 71% top, 19% bottom"], factId: "f-gh-03" },
    { cells: ["Median time to value, 2022 against 2026", "8.1 days against 4.2"], factId: "f-pb-06" },
  ]}
/>

## In short

Five tests. A candidate has to pass all of them.

Direct movability disqualifies. If the team can move the number without changing what
customers do, it is a dial rather than a north star.

It has to measure value received, not people counted. Nights booked, time spent
listening and rides per week all describe something a customer got. Registered users and
downloads do not.

It has to lead revenue. Recurring revenue, named repeatedly as a poor choice, reports
last quarter's product decisions.

It has to decompose into three to five inputs, each owned by a team that can move it.

And it has to be checkable against a published window, so progress is readable inside a
quarter rather than at the year's end.

## Who this is for, and who it is not

This suits a team with several dashboards and no agreed single number, where every
function reports progress and the business does not obviously move. The symptom is
familiar: every team hitting its targets and leadership unable to say whether the
quarter went well.

It suits teams whose current north star is revenue. That is the most common choice and
the one that fails the movability and leading-indicator tests at once.

It does not suit a product still looking for anyone who wants it. A north star measures
how much value a working product delivers. Before that, the question is whether value
exists at all, and no single metric answers it.

It also does not suit a company with genuinely unrelated product lines. One number
across two businesses describes neither, and the honest answer is one north star per
line with a shared financial frame above them.

## The method, part one: find the candidate

Three steps.

### 1. Write down what a customer gets, in their words

Not a feature, and not an event name. A night stayed. An hour of music. A ride taken. If
the sentence needs product vocabulary to make sense, it is not describing customer value
yet.

Write three or four of these before picking one. The first is usually the thing the team
most wants to be true, and the second or third is usually closer to what customers
actually came for.

### 2. Run every candidate through the movability test

Ask whether the team could move the number next week without changing customer behaviour.
Anything that passes that test fails as a north star. Revenue, sign-ups and page views all
fail here, which is why they appear on every list of poor choices.

A discount moves revenue. A paid campaign moves sign-ups. Neither tells you the product
got better, and a metric that responds to both is reporting the marketing calendar.

### 3. Check that it leads rather than lags

A north star should move before revenue does. Two published windows make this checkable:
a healthy retention curve flattens between day 60 and day 90, and activation has a
published spread from 19% at the bottom quartile to 71% at the top. A candidate that
cannot show movement inside those windows will not steer a quarter.

## The method, part two: build the input tree

Three steps, and this is where most north stars quietly fail.

### 4. Decompose into three to five inputs

Each input should be a factor a team can influence directly through the product, and
together they should plausibly explain movement in the north star. More than five and
nobody holds the tree in their head.

### 5. Assign each input to a team that can move it

The test is whether a designer or engineer can draw a line from their work to one input.
If they cannot, that branch of the tree is decoration, and the team attached to it will go
back to its own dashboard within a month.

Do this in the room, with the people concerned, rather than on a slide afterwards. An
input assigned to a team that was not consulted is an input with no owner, whatever the
diagram says.

### 6. Set a review cadence against the time-to-value trend

Median time to value has halved in four years, from 8.1 days to 4.2. A metric tree built
on a slower product is already describing a different market, so the tree gets revisited
annually rather than treated as settled.

<FromMyWork exp="exp-032">
Aggregating independently-set team OKRs produced eleven objectives and thirty-four key
results, which is not a strategy. A north star without one owner per input produces the
same sprawl with better branding.
</FromMyWork>

## The numbers to expect

Expect the first candidate to fail the movability test. Revenue and active users are the
usual starting points and both fail it.

Expect the input tree to expose an unowned branch. That is the most useful output of the
exercise: a factor everyone agrees matters and nobody is accountable for. It is usually
one of the two or three things most limiting growth, which is why it stayed unowned.

Expect the north star to move slowly and the inputs to move weekly. That is the intended
shape. A north star that jumps month to month is probably a dial after all.

Expect to resist changing it. The definition change is what destroys comparability, and
the temptation arrives in the first bad quarter.

Expect the activation range to be the useful comparison for most input metrics. With a
41.7% median between a 19% bottom quartile and a 71% top one, an input moving from 30% to
35% is real progress and looks like nothing against a median alone.

<FromMyWork exp="exp-033">
Three artefacts fixed decision coherence, and the one that did most work was a short
quarterly brief shared widely. A metric tree does the same job: it makes the reasoning
visible rather than keeping it in one person's head.
</FromMyWork>

## Pitfalls

Five, and the first two account for most failed north stars.

Choosing revenue. It fails movability and it lags, which is the pair of faults the test
exists to catch.

Choosing active users. Downloads, registered users and daily actives are all named as
poor choices, because they count people rather than value received.

Building a tree with more than five inputs. Beyond that nobody retains it, and the tree
becomes a document rather than a decision aid.

Leaving an input unowned. The branch stops moving and nobody notices for a quarter.

Changing the definition without a date. Every chart before the change becomes
incomparable, and the step gets read as performance by everyone who was not in the room.

And choosing a metric the data cannot yet support. A north star that needs instrumentation
nobody has built is a plan to measure something, not a metric, and the gap usually lasts
longer than the quarter it was chosen for.

## The checklist

Thirteen items. The first four choose the metric; the rest make it operable.

1. Customer value written in the customer's words, with no product vocabulary.
2. Candidate list drawn from that sentence, not from the dashboard.
3. Movability test run on each candidate, and the passers discarded.
4. Leading-indicator check run against a published window.
5. Final candidate written down with its exact definition.
6. Denominator and time window stated alongside it.
7. Three to five inputs identified.
8. Each input confirmed as team-influenceable through the product.
9. One owner named per input.
10. Line drawn from at least one person's weekly work to each input.
11. Reporting cadence set: north star monthly, inputs weekly.
12. Annual review of the tree scheduled against the time-to-value trend.
13. Any definition change logged with a date and a reason.
14. Instrumentation confirmed to exist before the metric is announced.

## Sources and related

Each figure carries its source and the date it was last checked. The selection tests and
the poor-choice list come from one vendor's framework, which is the most widely adopted
treatment of the subject and still one source, so it is marked as one rather than as a
consensus.

One gap is worth naming: no survey found reports what share of companies have a defined
north star, or what share abandon one. Published material on this subject is almost
entirely prescriptive rather than measured, which is why the tests above are framed as
tests rather than as benchmarks.

The north star glossary entry carries the definition and the OMTM entry covers the
single-metric trap. The activation metric playbook is usually where the first input
comes from.
"""
  ),
  dict(
    id="playbook-0610", url="/playbooks/plg-for-consumer-apps", archetype="playbook",
    hub="playbooks", funnel="MOFU",
    title="PLG for Consumer Apps: What Transfers and What Does Not",
    meta_description="Product-led growth for consumer apps: the model sets the conversion ceiling before execution does, from freemium under 10% to opt-out trials up to 50%.",
    h1="PLG for consumer apps: what transfers and what does not",
    primary_keyword="plg for consumer apps",
    secondary_keywords=["product led growth consumer", "freemium vs trial conversion"],
    entity_a="plg-for-consumer-apps",
    facts=["f-gh-01", "f-gh-02", "f-pb-21", "f-fx-06", "f-fx-07", "f-pb-07", "f-pb-24"],
    experience=["exp-026", "exp-005"],
    links=L(("/glossary/freemium", "the freemium entry", "lateral"),
            ("/glossary/free-to-paid-conversion", "the free-to-paid entry", "lateral"),
            ("/benchmarks/trial-to-paid-conversion/b2b-saas", "trial conversion benchmarks", "reference"),
            ("/playbooks/activation-metric", "the activation metric playbook", "lateral"),
            HUB, TOOL, BOFU),
    visuals=V("plg-ceilings",
              "Seven reference points for product-led growth in consumer apps: the published distribution of freemium conversion rates against the free-trial distribution, free-to-paid conversion for AI apps against mature subscription apps, median onboarding tour completion with its interquartile range, checklist completion at three-to-five steps against ten or more, the median time to value across 547 companies, and the share of all subscription revenue the top decile of apps captures, each row carrying its source and verification date",
              "The model sets the ceiling before execution does. Verified 30 September 2026."),
    faq=[
      dict(q="Does product-led growth work for consumer apps?",
           a="It is the default there, and the question is which variant. Freemium and free trial sit on different distributions: a fifth of freemium products convert below 2.5%, against 7% of trial products, and the most common trial band is 7.5% to 10%."),
      dict(q="Freemium or free trial?",
           a="Trial, unless the product needs a permanent free tier to work. The two distributions barely overlap, so the model choice moves the outcome more than execution usually does."),
      dict(q="Why is my AI app converting so badly?",
           a="It may not be. AI apps convert free to paid at 1% to 3%, against 5% to 8% for mature subscription apps. If you are inside that band the funnel is normal, and the revenue problem is a population problem."),
      dict(q="What should we fix first?",
           a="The path length. Checklists of three to five steps complete at 67% against 18% for ten or more, and median tour completion is 29%. Most self-serve products lose more users to step count than to pricing."),
    ],
    schema_types=PB_SCHEMA,
    cta={"primary": {"label": "Build a product-led growth motion with me", "href": "/work-with-me"},
         "secondary": {"label": "See the benchmarks", "href": "/benchmarks"}},
    unique_value="Treats the freemium-or-trial decision as the thing that sets the conversion ceiling, using two published distributions that barely overlap — so a team can tell whether its rate is an execution problem or a model problem before spending a quarter on the wrong one.",
    contradictions=[
      "Freemium conversion benchmarks are quoted both as a distribution and as a single "
      "ceiling: lennysnewsletter.com reports a fifth of products below 2.5% with the largest "
      "group between 2.5% and 5%, while amplitude.com states a benchmark of under 10%. The "
      "first describes where products sit and the second where the ceiling is, so they are "
      "answers to different questions. Both appear on this page.",
    ],
    block_coverage=cover(["f-gh-01", "f-gh-02"], ["f-pb-21", "f-gh-02"],
                         ["f-pb-24"], ["f-fx-07", "f-pb-07"],
                         ["f-fx-06", "f-pb-07"], ["f-gh-01", "f-pb-21"],
                         ["f-fx-07"]),
    body="""
<AnswerBox>
PLG for consumer apps means the product does the selling, so the model choice sets the
ceiling before execution does. Freemium and free trial sit on distributions
that barely overlap: a fifth of freemium products convert below 2.5%, against 7% of trial
products, whose most common band is 7.5% to 10%.
</AnswerBox>

<FactTable
  id="plg-ceilings"
  caption="The model sets the ceiling before execution does"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Freemium conversion distribution, 1,000+ products", "20% below 2.5%; largest group 2.5-5%"], factId: "f-gh-01" },
    { cells: ["Free-trial conversion distribution, same survey", "7% below 2.5%; most common 7.5-10%"], factId: "f-gh-02" },
    { cells: ["Free-to-paid, AI apps against mature subscription apps", "1-3% against 5-8%"], factId: "f-pb-21" },
    { cells: ["Onboarding tour completion, 464 companies", "29% median; middle half 15-55%"], factId: "f-fx-06" },
    { cells: ["Checklist completion, 3-5 steps against 10+", "67% against 18%"], factId: "f-fx-07" },
    { cells: ["Median time to value across 547 companies", "1 day 12 hours 23 minutes"], factId: "f-pb-07" },
    { cells: ["Share of all subscription revenue taken by the top 10% of apps", "95%"], factId: "f-pb-24" },
  ]}
/>

## In short

Five points, and the first decides most of the outcome.

The model choice sets the ceiling. Freemium and trial distributions barely overlap, so the
same rate can be good news or bad depending on which model produced it.

<Example illustrative>
A freemium product converting at 4% sits above the largest group in its distribution. A
trial product at 4% sits near the bottom of its own. Same number, opposite verdict.
</Example>

Your category may already explain the number. AI apps convert at 1% to 3% against 5% to 8%
for mature subscription apps.

Step count beats persuasion. Three-to-five-step checklists complete at 67%; ten or more
complete at 18%.

Speed is the constraint, not polish. The median time to value is about a day and a half,
and most consumer patience is shorter than that.

And the market rewards very few products: the top decile of apps takes 95% of all
subscription revenue, so a product-led motion has to work properly rather than adequately.

## Who this is for, and who it is not

This suits a consumer app with self-serve sign-up and no sales conversation, which is
almost all of them. The decisions it supports are which free model to run and what to fix
when conversion disappoints.

It suits teams whose conversion rate has been called bad without a comparison. Half the
time the number is ordinary for the model, and the right response is to change the model
rather than the funnel.

It does not suit a product that needs a human to onboard each customer. There the free model
is a lead-generation question rather than a conversion one, and the benchmarks on this page
will flatter it.

It also does not suit a product with no retention. Product-led growth multiplies a working
product. If users do not come back, the free tier produces cost and the trial produces
nothing.

## The method, part one: choose the free model

Three steps.

### 1. Decide whether the free tier has a job beyond conversion

A permanent free tier earns its cost when free users create value for paying ones, or supply
ad inventory, or seed a network. Without one of those jobs, a trial does the same work for
less.

Write the job down in a sentence. If the sentence is "it gets people in the door", that is a
trial's job, and a trial does it with a deadline attached.

### 2. Place your current rate on the right distribution

A fifth of freemium products convert below 2.5%; only 7% of trial products do. Find which
distribution applies, then where you sit on it. That single comparison settles whether you
have an execution problem or a model problem.

Record the denominator with the rate. Conversion over sign-ups, over activated users and
over trial starts give three different numbers from one funnel, and a benchmark built on one
of them says nothing about the other two.

### 3. Check your category before concluding anything

AI apps convert at 1% to 3% against 5% to 8% for mature subscription apps. A product
inside its category band has a normal funnel, and chasing the cross-category number will
waste a quarter.

## The method, part two: fix the path

Three steps, in order of return.

### 4. Cut the steps to first value

Count them, then remove some. Completion runs 67% at three to five steps and 18% at ten or
more, which is a larger gap than any copy change produces.

Count the real path, not the designed one. Account creation, permission prompts, email
verification and a plan choice are all steps, and they are usually the ones left out of the
onboarding diagram.

### 5. Set a time-to-value target under a day

The median across 547 companies is about a day and a half, and consumer patience runs shorter
than business patience. Treat anything over a day as the thing to fix.

Measure it from first open, not from account creation. The gap between those two is where
most of the delay hides, and the user experiences the whole of it.

### 6. Measure the tour before redesigning it

Median tour completion is 29%, with the middle half between 15% and 55%. A tour most users
abandon is a cost rather than an asset, and shortening it beats improving it.

The honest test is whether completers convert better than skippers. If they do not, the tour
is selecting for patient users rather than creating value, and deleting it costs nothing.

<FromMyWork exp="exp-026">
Professionals bought after using the tool, not after hearing about it. Hands-on
demonstration beat description, which is the whole argument for letting a product sell
itself.
</FromMyWork>

## The numbers to expect

Expect the model comparison to reframe the conversation. A rate that looked poor against
one distribution often looks ordinary against the right one.

Expect the step-count work to produce the largest single improvement, and to feel too simple
to be the answer. It usually arrives as deletions rather than as new screens, which is why
it rarely gets proposed.

Expect conversion to stay low in absolute terms. Freemium under 10% is the published ceiling,
so a product-led motion is a volume business. The arithmetic only works with enough people
arriving at the top of it, which makes distribution the constraint rather than the funnel.

Expect the market to be unforgiving. With the top decile of apps taking 95% of
subscription revenue, an adequate product-led motion is not a position that pays.

<FromMyWork exp="exp-005">
Asking for a bank statement upfront got 35% compliance. Showing a preliminary eligibility
range first, then asking for the statement to reveal the exact offer, took it to 71%. The
same ask, reframed from a requirement into a reward.
</FromMyWork>

## Pitfalls

Five, and the first is the most common misdiagnosis.

Comparing a freemium rate to a trial benchmark. The two distributions barely overlap, and
the comparison condemns a product that is performing normally.

Ignoring the category band. An AI app inside the published 1% to 3% range is not failing.

Running a free tier with no job. If free users create nothing for paying ones, the tier is
a cost centre with a growth story attached.

Adding onboarding instead of removing steps. Every step costs completion, and the published
gap is wide.

Treating a 29% tour completion as a design problem. It is usually a length problem, and
the cheapest fix is deletion.

And copying a business-software motion wholesale. Consumer patience is shorter, the price
point is lower, and the median time to value of about a day and a half already describes a
slower audience than most consumer apps face.

## The checklist

Thirteen items. The first five are diagnosis; the rest are the work.

1. Free model identified: permanent free tier, opt-in trial or opt-out trial.
2. Job of the free tier stated, beyond conversion, or the tier reconsidered.
3. Current conversion rate computed on a stated denominator.
4. Rate placed on the matching published distribution, not the other one.
5. Category band checked before any conclusion about performance.
6. Steps between arrival and first value counted.
7. Path reduced toward five steps or fewer.
8. Time to value measured and targeted under a day.
9. Tour completion measured against the 29% median before redesign.
10. Checklist length checked against the three-to-five finding.
11. Paid and organic cohorts reported separately.
12. Denominator and model recorded together, so later comparisons stay valid.
13. Review booked at ninety days against the matching distribution, not a single median.
14. Tour completers compared against skippers, to test whether the tour earns its place.

## Sources and related

Each figure carries its source and the date it was last checked. One disagreement is
recorded rather than resolved: freemium conversion appears both as a distribution, with a
fifth of products below 2.5%, and as a single under-10% ceiling. Those answer different
questions, and both are on this page.

The conversion figures come from self-reported survey data and onboarding tooling, so they
carry a reporting bias toward teams already measuring this work. Read the bottom of each
distribution as a floor among those teams rather than the floor.

The freemium and free-to-paid glossary entries carry the definitions. The activation metric
playbook is the companion for the path work, since first value is the step every figure here
depends on.

One gap worth stating: no source separates consumer from business products in the
conversion distributions above. The survey covers both, so the bands are the best available
comparison and not a consumer-only one. Where a category figure exists, such as the AI band,
it is the better comparison.
"""
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-playbook-01", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Run a growth playbook with me",
                                    "href": "/work-with-me"},
                        "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
