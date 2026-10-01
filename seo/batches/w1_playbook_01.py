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
