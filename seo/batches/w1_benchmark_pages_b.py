"""Remaining benchmark pages for batch w1-benchmark-01. Imported by the batch."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import L, V  # noqa: E402
from w1_benchmark_01 import BM_SCHEMA, bm_cover  # noqa: E402

HUB = ("/benchmarks", "the benchmarks", "hub")

PAGES_B = [
  dict(
    id="benchmark-0465", url="/benchmarks/retention/gaming", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Gaming App Retention Benchmarks: D1, D7 and D30 (2026)",
    meta_description="Gaming and fantasy sports app retention benchmarks for day 1, 7 and 30, why the strongest day 1 produces an ordinary day 30, and the store figures.",
    h1="Gaming app retention benchmarks",
    primary_keyword="gaming app retention benchmarks",
    secondary_keywords=["fantasy sports retention", "gaming d30 retention"],
    entity_a="retention", entity_b="gaming",
    facts=["f-bm-05", "f-bm-09", "f-bm-11", "f-bm-19", "f-bm-16", "f-act-14"],
    experience=["exp-018", "exp-019"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/benchmarks/churn/gaming", "gaming churn benchmarks", "lateral"),
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/india/ads-vs-subscriptions-indian-apps", "ads against subscriptions", "related"),
            ("/work-with-me", "a retention review", "bofu")),
    visuals=V("gaming-retention-table",
              "Gaming retention at day 1, day 7 and day 30 with the strong-performer band, the share of apps retaining anyone at day 30, App Store search and browse install ranges, the average US store conversion rate, trial cancellation rates by trial length and Indian quick-commerce share for market-structure comparison, each row carrying its source and verification date",
              "Gaming retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a gaming retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for a gaming app?",
           a="The gaming median is 3% at day 30 with strong performers at 5% to 8%. That is below the 4% cross-industry average, despite gaming having the strongest day 1 of any category at a 32% median."),
      dict(q="Why does gaming have the best day 1 and a weak day 30?",
           a="Because the first session is the product and the tenth is a different one. A game earns the first open on novelty, which is reliable, and the thirtieth on depth, which most titles do not have."),
      dict(q="Do fantasy sports apps follow the gaming curve?",
           a="No published benchmark separates them, and this page does not estimate one. Their retention is tied to a sporting calendar rather than to session depth, so a general gaming median is the wrong comparison for them."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Explains the category's signature shape — the strongest day 1 of any category producing a below-average day 30 — and refuses to give fantasy sports a borrowed number, since their curve follows a fixture calendar rather than session depth.",
    block_coverage=bm_cover(["f-bm-05"], ["f-bm-05", "f-bm-16"], ["f-bm-19"],
                            ["f-act-14"], ["f-bm-09", "f-bm-11"]),
    body="""
<AnswerBox>
Gaming app retention benchmarks put the median at 3% on day 30, below the 4%
cross-industry average, with strong performers at 5% to 8%. Day 1 is the strongest
of any category at a 32% median. The category wins the first session and loses the
thirtieth, and that shape is the whole story.
</AnswerBox>

<FactTable
  id="gaming-retention-table"
  caption="Gaming retention, and the acquisition funnel above it"
  columns={["Measure", "Gaming", "Reference"]}
  rows={[
    { cells: ["Day 1 retention, median and strong", "32%, strong 40% to 50%", "25% all categories"], factId: "f-bm-05" },
    { cells: ["Day 7 retention, median and strong", "8%, strong 12% to 18%", "8% all categories"], factId: "f-bm-05" },
    { cells: ["Day 30 retention, median and strong", "3%, strong 5% to 8%", "4% all categories"], factId: "f-bm-05" },
    { cells: ["Median revenue per install at day 60", "no gaming figure", "$0.34, strong $0.66+"], factId: "f-bm-16" },
    { cells: ["App Store install rate, search against browse", "no published figure", "2.6% to 12.4% against 0.1% to 2.5%"], factId: "f-bm-09" },
    { cells: ["Average US App Store conversion", "no published figure", "8.56%, install rate 3.8%"], factId: "f-bm-11" },
  ]}
/>

## The numbers, and what is missing from them

Gaming has the strongest day 1 of any category at a 32% median, with strong
performers reaching 40% to 50%. By day 7 it has fallen to the cross-industry
average of 8%, and by day 30 it sits below it at 3% against 4%.

Three cells carry no gaming-specific figure. Publishers break store conversion out
for medical, entertainment and business but not for gaming at this grain, so those
rows show the all-category range and label it. Fantasy sports, which the inventory
groups with gaming, has no separate retention curve anywhere — and a fixture calendar
drives it rather than session depth, so borrowing the gaming median would be worse
than leaving it out.


The practical reading: use the day-1 and day-7 bands, and treat day 30 as a check
rather than a target.
## Why gaming differs

The first session and the thirtieth are different products. A game earns the first
open on novelty and art, which is reliable and cheap to produce. It earns the
thirtieth on depth, progression and social ties, which most titles never build. The
steep fall between day 1 and day 7 is therefore not a funnel leak. It is the
category sorting curiosity from intent.

Trial structure shows the same pattern in subscription terms. A three-day trial
averages 26% cancellations against 51% for a thirty-day trial, and 31.1% of
thirty-day trials cancel on day zero. Longer exposure surfaces more rejection. That
is information, not failure.


Live-service titles break the pattern, and no published benchmark separates them
either. A game with a content calendar retains on a schedule, the way a media product
does, so the general gaming median makes a poor comparison for it.
## The India layer

No India-specific gaming retention table is published at day 1, 7 and 30.

The structural comparison that does hold is concentration. Indian quick commerce
splits by gross merchandise value into Blinkit at about 46%, Instamart at 24% and
Zepto at 22% — a market where the leader takes roughly half. Indian real-money
gaming and fantasy sports concentrate similarly, and in a concentrated market a
mid-tier app's retention problem is usually a distribution problem wearing a
retention label. There is no published figure for that split, so this page states
the mechanism and not a number.


The other India-specific factor is device. A large share of the Indian base runs
mid-range Android hardware, and a title that drops frames on it loses users for a
reason no retention campaign can reach.
## What good looks like

At day 30, 5% to 8% is the strong-performer band and 3% is the median. For gaming,
though, the more diagnostic point is day 7: the strong band runs 12% to 18% against
an 8% median, and that gap is where depth exists or does not.

A day-1 figure above 40% alongside a day-7 figure at the median means the product
buys attention it cannot hold. That is an acquisition-efficiency problem wearing a
good headline. The cheapest diagnostic is to compare paid and organic cohorts at day
7: when paid installs fall off a cliff and organic ones do not, the game is fine and
the targeting is not.


For a fantasy sports product, measure against your own last season rather than
against this table. The fixture calendar dominates everything else.
## If you are below the median

Look at session two, not session thirty. A user decides to return in the last
minute of the first session, and almost every day-30 problem in this category is a
day-2 problem compounded thirty times over.

Then treat any feature needing accumulated history with suspicion. Those features
test well with the team, who already have the history, and fail with new users, who
do not. The pattern is consistent enough to be worth a rule.

<FromMyWork exp="exp-018">
A feature I championed reached 2.8% adoption and was killed. Maintenance logging
needed repeated deliberate effort and returned nothing until enough history had
accumulated, so it never cleared its own activation gate.
</FromMyWork>

<FromMyWork exp="exp-019">
Letting users share a vehicle report turned a utility check into an acquisition
channel. Shared reports carried 12.3% of new installs within four months.
</FromMyWork>


## How these figures were gathered

Every row names a source and a date. These figures come from published benchmarks
rather than from a panel this site runs.

Three rows read "no published figure", including both store-conversion rows and the
fantasy sports split. Publishers break store conversion out for medical,
entertainment and business, and not for gaming at this grain. Fantasy sports has no separate retention
curve published anywhere.

That second gap is the one worth repeating. Fantasy sports retention tracks a fixture
calendar, not session depth, so the gaming median is the wrong comparison and a
borrowed number would be worse than none.

Everything here goes back for re-checking on a 90-day cycle.


Price figures run on a 45-day cycle, because store pricing and promotions move
faster than retention does.""",
  ),

  dict(
    id="benchmark-0468", url="/benchmarks/retention/social-dating", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Dating and Social App Retention Benchmarks (2026)",
    meta_description="Social, dating and community app retention benchmarks for day 1, 7 and 30 — the strongest curve of any category, and why dating inverts the incentive.",
    h1="Dating and social app retention benchmarks",
    primary_keyword="dating and social app retention benchmarks",
    secondary_keywords=["social app retention", "dating app d30 retention"],
    entity_a="retention", entity_b="social-dating",
    facts=["f-bm-06", "f-bm-21", "f-bm-11", "f-bm-17", "f-bm-19", "f-act-19"],
    experience=["exp-013", "exp-019"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/benchmarks/churn/social-dating", "social and dating churn benchmarks", "lateral"),
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/india/regional-language-monetization", "regional language monetisation", "related"),
            ("/work-with-me", "a retention review", "bofu")),
    visuals=V("social-retention-table",
              "Social and dating retention at day 1, day 7 and day 30 with the strong-performer band against the cross-industry average, the average US App Store conversion rate, the regional download-to-paid gap, trial cancellation by trial length and reported against true return on ad spend, each row carrying its source and verification date",
              "Social and dating retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a social and dating retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for a social app?",
           a="The median is 12% at day 30, three times the 4% cross-industry average, with strong performers at 15% to 20%. Social is the strongest retaining category published, because the value is other people rather than features."),
      dict(q="Why are dating apps different from social apps?",
           a="Because success removes the user. A dating product that works loses its best-served customers, which no other category has to plan for. No published benchmark separates dating from social, so the 12% median flatters dating and understates community products."),
      dict(q="Does a high retention rate mean a social app is healthy?",
           a="Not on its own. A social product can retain a shrinking group intensely while failing to add anyone, and a cohort table showing high retention with falling new-cohort size is a product in decline with a flattering curve."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Names the incentive inversion in dating that every blended social benchmark hides — a working dating product loses the users it serves best — and shows how a high retention median can describe a shrinking base.",
    block_coverage=bm_cover(["f-bm-06"], ["f-bm-06", "f-bm-21"], ["f-bm-19"],
                            ["f-bm-17"], ["f-bm-11", "f-act-19"]),
    body="""
<AnswerBox>
Dating and social app retention benchmarks put the median at 12% on day 30, roughly
twice the 5.7% average across 31 categories, with strong performers at 15% to 20%. Day 1
runs at 40% and day 7 at 18%. No published category retains better, because other
people hold a user where features cannot.
</AnswerBox>

<FactTable
  id="social-retention-table"
  caption="Social and dating retention against every other category"
  columns={["Measure", "Social", "All categories"]}
  rows={[
    { cells: ["Day 1 retention, median and strong", "40%, strong 50% to 60%", "25%"], factId: "f-bm-06" },
    { cells: ["Day 7 retention, median and strong", "18%, strong 25% to 30%", "8%"], factId: "f-bm-06" },
    { cells: ["Day 30 retention, median and strong", "12%, strong 15% to 20%", "5.7% over 31 categories"], factId: "f-bm-21" },
    { cells: ["Dating, separated from social", "no published figure", "not separated in any source"], factId: "f-bm-06" },
    { cells: ["Average US App Store conversion", "no published figure", "8.56%, install rate 3.8%"], factId: "f-bm-11" },
    { cells: ["Day-35 download-to-paid, NA against IN and SEA", "no published figure", "2.6% against 1.4%"], factId: "f-bm-17" },
  ]}
/>

## The numbers, and what is missing from them

Social leads every published retention band: 40% at day 1, 18% at day 7 and 12% at
day 30, against a 5.7% average across 31 categories. The strong-performer range at
day 30 is 15% to 20%, which is above most categories' day-7 median.

The important gap is that **dating is not separated from social in any published
source**, and the two behave in opposite ways. Grouping them produces a median
that flatters dating and understates community products, so the row above says so
rather than splitting the figure on an assumption.


Read the strong-performer band carefully here. At 15% to 20% on day 30 it sits above
most categories' day-7 median, which means a social product performing badly by its
own category's standard still looks excellent in a general table. That is how a
struggling social product gets congratulated.
## Why social and dating differ

Social retention compounds because the product's value is other users. Each
retained user makes the product slightly better for everyone else, which is why
the category's curve flattens where others keep falling.

Dating inverts the incentive. A dating product that works removes the user it
worked for, and no other category has to plan for success causing churn. That
tension shapes everything downstream: pricing, notification design, and what the
product is allowed to optimise for. A dating app measured on day-30 retention is
being measured on a metric it should sometimes want to lose.

Trial behaviour differs too. A three-day trial averages 26% cancellations against
51% for a thirty-day trial, and in a category where value depends on who else is
present, a longer trial gives the network more time to prove itself or fail.

## The India layer

No India-specific social or dating retention table is published at day 1, 7 and
30, and this page does not estimate one.

What is published is the monetisation gap: day-35 download-to-paid runs 2.6% in
North America against 1.4% across India and South-East Asia. For a category whose
retention is already strong, that gap says the Indian constraint is willingness
to pay rather than engagement — which points at price and packaging work rather
than at retention work.

<FromMyWork exp="exp-013">
Trust was a conversion lever, not a brand exercise. Showing insurer brand names
lifted quote acceptance 34%, and surfacing the IRDAI-mandated claim settlement
ratio next to the price broke the market's habit of treating insurance as a pure
price comparison.
</FromMyWork>


Language cluster is the India-specific variable with no published figure. A product
that has reached density in one language and not another has two very different
curves inside one number.
## What good looks like

At day 30, 15% to 20% is the strong band and 12% is the median. A high number here
needs a second reading, though: a social product can retain a shrinking group
intensely while adding nobody, and the cohort table looks excellent while the
business shrinks.

Read new-cohort size beside retention. Reported figures mislead here the same way
quick-commerce platforms report 3x to 5x return on ad spend while true return after
commission and cost of goods runs 1.2x to 2.5x. The number is real, and it is not
the one that decides anything. For a dating product add a third column: whether the
user left because the product worked.


For a dating product, add a reason code to churn. Without it the curve cannot
distinguish the two outcomes that matter most.
## If you are below the median

Find the density problem before the engagement problem. Social products fail by
geography, interest or language cluster rather than uniformly, so an aggregate curve
hides which clusters reached critical mass and which never will.

Then make the product's value visible before the network exists for that user. The
first session of a social product usually has nobody in it, and whatever stands in
for other people during that session decides the day-1 number.

<FromMyWork exp="exp-019">
Letting users share a vehicle report turned a utility check into an acquisition
channel. Shared reports carried 12.3% of new installs within four months, and
those users arrived with the intent already formed.
</FromMyWork>



Check density per cluster before anything else. A product at critical mass in two
cities and nowhere else has a distribution problem, not a retention problem.
## How these figures were gathered

Each row carries a source and a verification date, drawn from published benchmark
reports.

The dating row reads "no published figure" and will keep reading that way until
somebody publishes one. No source separates dating from social, and the two categories
move in opposite directions, so a split figure here would be an invention rather than
an estimate.

The standard for these pages is three sources or an explicit "insufficient public
data" mark. Social retention clears that at all three day marks. Dating does not clear
it at any.

Re-verification runs every 90 days, and faster for anything about price.


Where two sources disagree, both appear with the disagreement stated rather than
resolved by preference. That happens often in this category, because social and
dating get grouped differently by different publishers.""",
  ),

  dict(
    id="benchmark-0463", url="/benchmarks/retention/b2b-saas", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="B2B SaaS App Retention Benchmarks: D1, D7, D30 (2026)",
    meta_description="B2B SaaS and productivity app retention benchmarks, why the app curve and the contract curve disagree, and the store conversion the category leads on.",
    h1="B2B SaaS app retention benchmarks",
    primary_keyword="saas app retention benchmarks",
    secondary_keywords=["b2b saas retention", "productivity app retention"],
    entity_a="retention", entity_b="b2b-saas",
    facts=["f-bm-07", "f-bm-12", "f-bm-18", "f-bm-02", "f-bm-06", "f-svc-05"],
    experience=["exp-031", "exp-039"],
    links=L(HUB, ("/glossary/nrr", "net revenue retention", "lateral"),
            ("/benchmarks/churn/b2b-saas", "B2B SaaS churn benchmarks", "lateral"),
            ("/tools/nrr-grr-calculator", "the NRR and GRR calculator", "tool"),
            ("/services/pricing-and-packaging/b2b-saas", "B2B SaaS pricing and packaging", "related"),
            ("/work-with-me", "a retention review", "bofu")),
    visuals=V("b2b-retention-table",
              "B2B SaaS retention at day 30 against the average iOS app, App Store page-view-to-install for business apps, the category's download-to-trial rank, fintech and social medians for comparison, and hybrid pricing adoption, each row carrying its source and verification date",
              "B2B SaaS retention benchmarks, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a b2b-saas retention review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good day 30 retention rate for a B2B SaaS app?",
           a="Productivity and B2B SaaS apps hold 20% to 32% at day 30, against an average iOS app at 5.3%. The category retains far above consumer apps because the product is used at work, on a schedule somebody else sets."),
      dict(q="Should a B2B product track app retention at all?",
           a="As a leading indicator, not as the outcome. The contract renews on revenue retention, and a seat that stops opening the app is a renewal risk months before it shows up in NRR — which is exactly what makes the app curve useful."),
      dict(q="Why does the business category convert so well in the app stores?",
           a="Intent. Business apps convert about 66.7% of App Store page views to installs and record the highest download-to-trial rate of any category, because people search for them with a problem already named."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Holds the app retention curve and the contract retention curve apart, which every B2B retention page conflates, and shows why the app number is the earlier signal while the revenue number is the outcome.",
    block_coverage=bm_cover(["f-bm-07"], ["f-bm-07", "f-bm-02", "f-bm-06"],
                            ["f-bm-12", "f-bm-18"], ["f-svc-05"], ["f-bm-07"]),
    body="""
<AnswerBox>
SaaS app retention benchmarks put productivity and B2B products at 20% to 32% on
day 30, against an average iOS app at 5.3%. The category retains far above consumer
apps because people use it at work, on a schedule somebody else sets. The app curve
and the contract curve measure different things, and both matter.
</AnswerBox>

<FactTable
  id="b2b-retention-table"
  caption="B2B SaaS retention, and the funnel that fills it"
  columns={["Measure", "B2B SaaS", "Reference"]}
  rows={[
    { cells: ["Day 30 retention", "20% to 32%", "average iOS app 5.3%"], factId: "f-bm-07" },
    { cells: ["Day 1 and day 7", "no published figure", "fintech 28% and 12%"], factId: "f-bm-02" },
    { cells: ["Strongest consumer comparison", "no published figure", "social 12% at day 30"], factId: "f-bm-06" },
    { cells: ["App Store page view to install, business", "about 66.7%", "no all-category figure"], factId: "f-bm-12" },
    { cells: ["Download-to-trial rate by category", "highest of any category", "rank, not a rate"], factId: "f-bm-18" },
    { cells: ["Companies running hybrid pricing", "37%", "up from 25% a year earlier"], factId: "f-svc-05" },
  ]}
/>

## The numbers, and what is missing from them

Day 30 is the only point with a published B2B band: 20% to 32%, against an
average iOS app at 5.3%. Day 1 and day 7 are not published for the category, so
those rows carry a comparison rather than a fabricated figure — fintech's 28% and
12% are shown as the nearest published high-retention consumer category, labelled
as such.

Even the top consumer category does not reach the B2B floor. Social retains a 12%
median at day 30; the weakest end of the B2B band is 20%. That gap is structural
and it is the most useful single fact on this page.


So the honest summary is that this category has one well-published number and a
curve nobody has measured publicly. Plan around the day-30 band and treat the rest
as your own instrumentation problem.
## Why B2B SaaS differs

Use is compelled and scheduled. A work tool opens because a task requires it, at a
cadence somebody else set, which removes the attention problem every consumer app
spends its budget on.

The discovery funnel reflects the same intent. Business apps convert about 66.7%
of App Store page views to installs and record the highest download-to-trial rate
of any category, because people arrive having already named their problem.

The complication is that app retention is not the contract. A seat that stops
opening the app is a renewal risk long before revenue moves, which makes the app
curve a leading indicator of something measured elsewhere. Treating it as the
outcome is the common error; ignoring it wastes the earliest signal available.

## The India layer

No India-specific B2B SaaS app retention figures are published at day 1, 7 or 30.

What applies instead is packaging. 37% of companies now run a hybrid of seats and
consumption, up from 25% a year earlier, and for an Indian SaaS company selling
abroad the meter choice interacts with collection and tax in ways a pure seat
model avoids. Retention work in this category often turns out to be packaging
work, because a seat nobody uses churns at renewal regardless of how good the
product is.

<FromMyWork exp="exp-031">
About 40% of engineering time across the organisation was going to client-specific
requests that sales had sold as standard. Packaging was the fix, not capacity.
</FromMyWork>


The collection layer matters here too. An Indian SaaS company billing abroad pays a
different percentage depending on how the money is routed, and that lands on the
same contribution line a renewal protects.
## What good looks like

At day 30, above 32% is strong and below 20% puts the product behind its own
category rather than behind the market. Read it per account rather than per user:
one account with ten engaged seats and one with a single engaged seat produce the
same blended figure and very different renewals.

Then read it against revenue retention. A rising app curve beside flat net revenue
retention means usage grows inside accounts that are not expanding, which points at
packaging rather than at the product. The reverse — flat usage with rising revenue —
usually means a price rise that the next renewal cycle will test.


Set the threshold per account band as well. A product selling to ten-seat teams and
one selling to thousand-seat enterprises should not share a day-30 target, because
the second has departments that never open the app and never needed to.
## If you are below the median

Find the accounts where usage concentrates in one seat. Single-seat dependency
causes more B2B retention problems than any other pattern and hides most effectively
in an aggregate curve, because one heavy user carries the account's numbers until
they leave.

Then make failures the customer can see and fix without you. Silent breakage is the
second most common cause, and it produces churn that arrives with no warning in any
engagement metric.

<FromMyWork exp="exp-039">
Making failures debuggable by the customer cut sales and support effort about
25%. Idempotency, surfaced errors and retry mechanics meant customers resolved
their own breakages instead of churning quietly.
</FromMyWork>



Both checks are instrumentation rather than product work, and both can happen
before anyone writes a roadmap item. Start with the seat concentration report: it
takes a day and it usually names the accounts at risk.
## How these figures were gathered

Every row shows its source and the date somebody last checked it, from published
benchmark reports.

Three rows read "no published figure". Day 1 and day 7 are not published for this
category at all, so those rows carry the nearest published high-retention consumer
category and label it as a comparison. A reader setting a day-7 target from a fintech
number would be setting it from the wrong category, which is why the label matters
more than the number.

The rule for these pages is three sources or an explicit "insufficient public data"
mark. Day 30 clears it. The rest of the curve does not.

Figures go back for re-checking every 90 days.


Every figure goes back on a 90-day cycle, and any price figure on a 45-day one.""",
  ),
]
