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
    experience=["exp-021"],
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

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. A revenue rise after a
pricing change is usually part mix and part price, and crediting the price change
with all of it hides which half repeats.
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
