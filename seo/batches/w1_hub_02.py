#!/usr/bin/env python3
"""Batch w1-hub-02 — /glossary, the hub 29 pages link to and nothing served.

Found by the internal-link check added to `pnpm launch:check`. Until now that
script only walked the redirect map, so a link from one of our own pages to a
page that does not exist was invisible: /glossary was cited by 29 pages, had 25
children filed under it, and returned 404. A missing hub is worse than a missing
leaf, because every child's up-link (G08 requires one) pointed into the hole.

The hub's own job is curation, so its angle is the one thing a reader cannot get
from any single child: the same metric name means different things at different
companies, and the published distributions are wide enough that a median judges
almost nobody.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402
from w1_hub_01 import POOL as P3  # noqa: E402
from w1_benchmark_01 import POOL as P4  # noqa: E402  (carries the f-fx-* set)

LN = ("https://www.lennysnewsletter.com/p/what-is-a-good-free-to-paid-conversion",
      "What is a good free-to-paid conversion rate?", "lennysnewsletter.com", "2026")
UT = ("https://usetandem.ai/blog/onboarding-metrics-that-predict-revenue-activation",
      "Onboarding metrics that predict revenue activation", "usetandem.ai", "2026")
AM = ("https://admiral.media/cac-payback-period-mobile-apps/",
      "CAC payback period for mobile apps", "admiral.media", "2026")

NEW = [
    fact("f-gh-01",
         "Across a survey of more than 1,000 products, a fifth of freemium products convert below 2.5% and the largest group, a third, sits between 2.5% and 5%",
         "2.5-5", "%", LN,
         "A fifth (20%) of products see a conversion rate below 2.5%. About a third see between 2.5% and 5% — the biggest bucket."),
    fact("f-gh-02",
         "Free-trial products convert on a different distribution entirely: only 7% fall below 2.5%, and the most common band is 7.5% to 10%",
         "7.5-10", "%", LN,
         "Only 7% of free-trial products see conversion below 2.5%; about a quarter see between 7.5% and 10%, the most common bucket."),
    fact("f-gh-03",
         "Median activation sits at 41.7%, with the top quartile at 71% and the bottom at 19% — a spread wide enough that the median judges almost nobody",
         "41.7", "%", UT,
         "The median activation rate is 41.7%, with top-quartile products at 71% and bottom quartile at 19%."),
    fact("f-gh-04",
         "Mobile apps typically run a lifetime-value to acquisition-cost ratio of 1.5 to 2.5 to 1, below the 3 to 1 bar imported from software-as-a-service",
         "1.5-2.5", "ratio", AM,
         "Mobile apps typically show LTV:CAC ratios of 1.5-2.5:1 due to low ARPU and high CAC."),
]

POOL = {**P1, **P2, **P3, **P4}
POOL.update({f["fact_id"]: f for f in NEW})

PAGES = [
  dict(
    id="hub-0008", url="/glossary", archetype="hub", hub="glossary", funnel="MOFU",
    title="Product Growth Glossary: Metrics Defined and Benchmarked",
    meta_description="Twenty-five growth and monetisation metrics, each with its formula, its denominator and the published range, so you know which definition you are reading.",
    h1="Product growth glossary",
    primary_keyword="product growth glossary",
    secondary_keywords=["growth metrics glossary", "saas metrics definitions"],
    entity_a="glossary",
    facts=["f-gh-01", "f-gh-02", "f-gh-03", "f-gh-04", "f-fx-06", "f-fx-07"],
    experience=["exp-021"],
    links=L(("/glossary/ltv-to-cac-ratio", "the LTV:CAC entry", "lateral"),
            ("/glossary/activation-rate", "the activation rate entry", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "reference"),
            ("/benchmarks", "the benchmarks", "hub"),
            ("/playbooks", "the playbooks", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "a metrics review", "bofu")),
    visuals=V("definition-spread",
              "Six reference points showing how wide the published spread is on metrics people quote as single numbers: the freemium conversion distribution, the free-trial conversion distribution, the activation median against its top and bottom quartiles, the mobile lifetime-value to acquisition-cost band, onboarding tour completion across 464 companies with its interquartile range, and checklist completion at two different lengths, each row carrying its source and verification date",
              "Why a single benchmark number rarely settles anything. Verified 30 September 2026."),
    faq=[
      dict(q="Why does every entry give a range rather than one number?",
           a="Because the published spreads are wide enough that a single figure misleads. Activation has a median of 41.7%, a top quartile of 71% and a bottom quartile of 19%. A product at 30% is below median and above the bottom quartile, and only the range tells you that."),
      dict(q="How do I know which definition of a metric I am reading?",
           a="Check the denominator. Most disagreements about a metric are disagreements about what goes underneath the line: ARPU over all users or over payers, retention over installs or over activated users, churn over accounts or over revenue. Each entry here names its denominator first."),
      dict(q="Are these definitions the same as my analytics tool's?",
           a="Often not, and that is the point of reading the formula rather than the name. A tool reports what it can compute from the events it receives, which is not always the definition the benchmark was built on."),
      dict(q="Why do step counts change a completion rate so much?",
           a="Because each step is a chance to leave. Checklists of three to five steps complete at 67%, against 18% for ten steps or more. The content did not get worse; there was simply more of it to abandon."),
    ],
    schema_types=["CollectionPage", "ItemList", "FAQPage"],
    cta={"primary": {"label": "Get your growth metrics reviewed", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    unique_value="Each entry leads with the denominator rather than the name, and gives the published distribution rather than a median, because the common failure is two teams comparing numbers that were never the same measurement.",
    block_coverage={"editorial_intro": ["f-gh-01", "f-gh-02"],
                    "start_here_cards": ["f-gh-03", "f-gh-04"],
                    "filterable_index": ["f-fx-07"],
                    "recently_verified": ["f-fx-06"],
                    "cta_band": ["f-gh-03"]},
    body="""
<AnswerBox>
This product growth glossary defines twenty-five metrics by their denominator
rather than their name, because that is where teams disagree. Each entry gives
the formula, the published range and the trap. Take freemium conversion. A fifth
of products convert below 2.5%. The largest group lands between 2.5% and 5%. One
benchmark number settles very little.
</AnswerBox>

<FactTable
  id="definition-spread"
  caption="Why a single benchmark number rarely settles anything"
  columns={["Reference point", "Published spread"]}
  rows={[
    { cells: ["Freemium free-to-paid, 1,000+ products", "20% below 2.5%; largest group 2.5-5%"], factId: "f-gh-01" },
    { cells: ["Free-trial free-to-paid, same survey", "only 7% below 2.5%; most common 7.5-10%"], factId: "f-gh-02" },
    { cells: ["Activation rate", "41.7% median, 71% top quartile, 19% bottom"], factId: "f-gh-03" },
    { cells: ["Mobile app LTV to CAC", "1.5 to 2.5 to 1"], factId: "f-gh-04" },
    { cells: ["Onboarding tour completion, 464 companies", "29% median; middle half 15-55%"], factId: "f-fx-06" },
    { cells: ["Checklist completion, 3-5 steps against 10+", "67% against 18%"], factId: "f-fx-07" },
  ]}
/>

## What this glossary is for

Two people can report the same metric, disagree by a factor of three, and both be
right. The name is shared and the denominator is not. ARPU over every active user
and ARPU over paying users are different numbers wearing one label, and a
quarterly review that mixes them produces a decision nobody can trace.

So each entry starts with what sits underneath the line, then the formula, then
the published range, then the specific way the metric lies. The definition comes
first for a reason. A benchmark built on a different denominator misleads you
more than no benchmark at all.

## Start here

Three entries carry most of the weight. LTV:CAC gets quoted against a bar it was
never built for. The 3 to 1 rule came from software-as-a-service, and mobile apps
typically run 1.5 to 2.5 to 1. A consumer app at 2 to 1 is not failing a universal
test. It is meeting somebody else's.

Activation rate is the one with the widest honest spread, from 19% at the bottom
quartile to 71% at the top. Free-to-paid conversion is the one where the model
outweighs the execution. The trial and freemium distributions barely overlap.

## How to read an entry

Every entry answers four questions in the same order: what goes in the
denominator, what the formula is, what the published range is, and when the
number misleads. The last one is the part most glossaries leave out, and it is
usually the reason you looked the metric up.

A figure drawn from first-hand client work carries that label and stays fixed to
the period it describes. A figure from a published source carries its source and
its last verification date.

## What recently verified means

Published benchmarks move, so each figure carries its last check date and goes back
on a re-verification schedule. Figures tied to product conventions move fastest.
Onboarding tour completion has a 29% median across 464 companies, and the middle
half runs anywhere from 15% to 55% — a spread wide enough that the median alone
would mislead most readers of it.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. A single multiple
credits the last change with all of the growth. Comparing one metric across two
definitions makes the same mistake, and calls the gap performance.
</FromMyWork>

## Where this leads

If you came here to settle an argument about a number, the entry will tell you
whether the argument is about the measurement or the performance. Those need
different fixes. Measurement disagreements end with an agreed denominator, and
usually take an afternoon. Performance gaps end with a diagnosis, which is where
the playbooks and the benchmarks pick up. Start with the entry for the metric in
dispute, agree the denominator first, and only then go looking for the range it
belongs in.
""",
  ),
  dict(
    id="hub-0011", url="/india", archetype="hub", hub="india", funnel="MOFU",
    title="Monetising Apps in India: Prices, Rails and Benchmarks",
    meta_description="What differs when you monetise in India: price levels, payment rails, platform take and the figures published about each, with the gaps named.",
    h1="Monetising apps in India",
    primary_keyword="monetising apps in india",
    secondary_keywords=["india app monetization", "india subscription pricing"],
    entity_a="india",
    facts=["f-hub-04", "f-hub-05", "f-hub-03", "f-svc-03", "f-act-17", "f-bm-26"],
    experience=["exp-021"],
    links=L(("/benchmarks/arpu", "the ARPU benchmarks", "lateral"),
            ("/benchmarks/trial-to-paid-conversion/b2b-saas", "B2B SaaS trial conversion", "reference"),
            ("/glossary/take-rate", "the take rate entry", "lateral"),
            ("/glossary/arpu", "the ARPU entry", "lateral"),
            ("/benchmarks", "the benchmarks", "hub"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "an India monetisation review", "bofu")),
    visuals=V("india-monetisation",
              "Six reference points for monetising in India: the smartphone user base, the projected share of GDP from the app economy by 2030, in-app purchase spending in 2025 and its 2026 projection, annual gross revenue per registered user for the leading UPI app, the ONDC commission route against incumbent marketplace rates, and the national OTT subscription count, each row carrying its source and verification date",
              "What the published record actually says about India. Verified 30 September 2026."),
    faq=[
      dict(q="Why can't I use global benchmarks for India?",
           a="Because the price level differs more than the behaviour does. Indian subscription prices sit well below the US baseline, so the same conversion rate produces materially less revenue, and a global ARPU benchmark will read as underperformance when the funnel is working normally."),
      dict(q="Is the Indian market large or small?",
           a="Both, depending on the denominator. India has 783 million smartphone users and the second largest base in the world, and in-app purchase spending passed one billion dollars in 2025. Enormous reach, modest spend per head."),
      dict(q="What breaks most often in Indian monetisation?",
           a="The recurring charge rather than the sale. Mandate-based recurring payments fail more often than card-on-file charges do in card-led markets, so a funnel that converts on paper loses revenue at the first renewal."),
      dict(q="Where are the published figures missing?",
           a="Retention curves by app category, and trial-to-paid rates by category. Market size and revenue are well documented; cohort behaviour is not. The pages here say so rather than inferring a number."),
    ],
    schema_types=["CollectionPage", "ItemList", "FAQPage"],
    cta={"primary": {"label": "Get your India monetisation reviewed", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    unique_value="Names which India figures are actually published and which are not, instead of filling the gaps with inferences from regional averages — the retention and trial-conversion curves most India monetisation advice quietly invents.",
    gaps=["No published India retention curve by app category, and no India trial-to-paid "
          "rate by category. Market size, revenue and platform economics are well documented."],
    block_coverage={"editorial_intro": ["f-hub-04", "f-hub-03"],
                    "start_here_cards": ["f-svc-03", "f-act-17"],
                    "filterable_index": ["f-bm-26"],
                    "recently_verified": ["f-hub-05"],
                    "cta_band": ["f-hub-03"]},
    body="""
<AnswerBox>
Monetising apps in India means the same product mechanics at a different price
level. The reach is enormous: 783 million smartphone users, the second largest base
in the world. In-app purchase spending passed only one billion dollars in 2025.
Volume is abundant. Revenue per head is not.
</AnswerBox>

<FactTable
  id="india-monetisation"
  caption="What the published record actually says about India"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Smartphone users", "783 million, second largest base"], factId: "f-hub-04" },
    { cells: ["App economy as a share of GDP by 2030, projected", "about 12%"], factId: "f-hub-05" },
    { cells: ["In-app purchase spending, 2025 and 2026 projection", "$1bn, rising to $1.25bn (about ₹9,600 crore to ₹12,000 crore)"], factId: "f-hub-03" },
    { cells: ["Leading UPI app, annual gross revenue per registered user", "about ₹112 (about $1.17)"], factId: "f-svc-03" },
    { cells: ["ONDC commission route against incumbent marketplaces", "about 3% against 15-25%"], factId: "f-act-17" },
    { cells: ["OTT subscriptions in India", "216.5 million"], factId: "f-bm-26" },
  ]}
/>

## What actually differs

Three things, and only one of them is about the user.

Price level differs most. The same product sells for a fraction of its Western
price. That changes every ratio built on revenue. Acquisition cost has less room
and payback stretches. A lifetime-value-to-acquisition-cost bar imported from a
higher-ARPU market becomes unreachable by arithmetic, not by poor execution.

Payment rails differ next. Recurring mandates behave differently from card-on-file
charges, and the failure lands on renewal rather than on sale. The leading UPI app
earns roughly ₹112 of gross revenue per registered user per year, about $1.17. No
figure states more plainly how thin per-user monetisation runs at national scale.

Platform economics differ third. ONDC offers a commission route near 3%, against the
15% to 25% incumbent marketplaces charge. Distribution cost is genuinely in play
here rather than fixed.

## Start here

For pricing, begin with the ARPU benchmarks and read the India layer there. It
records three incompatible published figures for Indian OTT ARPU rather than
choosing one. For funnel modelling, begin with the take rate entry. Platform and
payment costs take a larger share of a smaller ticket.

For a market-entry decision, the 216.5 million OTT subscriptions are the useful
anchor. A very large paying population exists. It pays small amounts reliably rather
than large amounts occasionally.

## What the published record does not contain

No India retention curve by app category. No India trial-to-paid rate by category.
Market size, revenue and platform fees are documented well; cohort behaviour is
not.

That absence matters. It is where most India monetisation advice quietly invents a
figure, usually by scaling a global curve down by whatever factor somebody chose.
The pages here state the gap instead. Where an inference genuinely helps, it carries
a label and its reasoning, so a reader can argue with the reasoning rather than
inherit a number.

## What recently verified means

Every figure carries its last check date, and the Indian figures move faster than
most. Forecasters put the app economy near 12% of India's GDP by 2030. That is a
projection, not a measurement, and projections get revised more often than they get
met.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. That applies doubly in
India, where a large user number and a small revenue number describe the same
business and only one of them usually reaches the slide.
</FromMyWork>

## Where this leads

On an India strategy, the question is rarely whether the market is big enough.
It is whether your unit economics survive a price level that competitors often set
at zero. Your own numbers answer that, measured against the benchmarks here rather
than against the market size. Start with the price you can defend. Work back to the
acquisition cost it supports. Then check whether the payment rail you depend on
actually renews.
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-hub-02", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
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
