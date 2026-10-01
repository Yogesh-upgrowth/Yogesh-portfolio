#!/usr/bin/env python3
"""Batch w1-bm-wave2-01 — two Wave 2/3 benchmark pages pulled forward.

/benchmarks/arpu/gaming and /benchmarks/install-to-purchase/travel serve on the
live site today and are not redirect sources, because build_migration.py
correctly skips a URL whose planned target is its own path. They were scheduled
for later waves, so no Next.js page exists at either path.

That combination is a trap: cutting production over to the Next app would drop two
live, indexed URLs to 404 — the only two in the whole 132-route legacy set. The
published pages are thin (roughly 300 to 400 words), so building them properly
replaces them rather than redirecting them, and the cutover loses nothing.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402
from w1_hub_01 import POOL as P3  # noqa: E402
from w1_benchmark_01 import POOL as P4, BM_SCHEMA, bm_cover  # noqa: E402
from w1_service_01 import POOL as P5  # noqa: E402
from w1_hub_02 import POOL as P6  # noqa: E402
from w1_bmhub_01 import POOL as P7  # noqa: E402
from w1_playbook_01 import POOL as P8  # noqa: E402

PLY = ("https://blog.playio.co/arpdau-benchmarks-mobile-games",
       "ARPDAU benchmarks for mobile games", "playio.co", "2026")
CBX = ("https://www.cubix.co/blog/mobile-game-revenue-statistics-complete-guide/",
       "Mobile game revenue statistics 2026", "cubix.co", "2026")
PGB = ("https://www.pocketgamer.biz/indias-mobile-games-market-set-to-reach-24bn-by-2029/",
       "India's mobile games market set to reach $24bn by 2029",
       "pocketgamer.biz", "2026")
SEG = ("https://segwise.ai/blog/mobile-gaming-statistics",
       "Mobile gaming statistics 2026", "segwise.ai", "2026")
LRT2 = ("https://linkrunner.io/blog/metrics-that-matter-travel-hospitality-edition",
        "Metrics that matter: travel and hospitality edition", "linkrunner.io", "2026")
BOA2 = ("https://www.businessofapps.com/data/travel-app-market/",
        "Travel app benchmarks", "businessofapps.com", "2026")
CRT = ("https://www.criteo.com/blog/retail-travel-apps-higher-conversions-mobile/",
       "Retail and travel apps see 4x more conversions than mobile web",
       "criteo.com", "2026")

NEW = [
    fact("f-g-01", "Day-90 in-app purchase ARPU by genre runs 2.43 dollars for casino, 2.13 for midcore and 1.34 for casual",
         "2.43", "USD", PLY,
         "Casino games have the highest D90 IAP ARPU globally at $2.43, midcore at $2.13, casual at $1.34."),
    fact("f-g-02", "In North America and Europe midcore leads day-90 in-app purchase ARPU at 2.66 dollars, ahead of casino at 2.55",
         "2.66", "USD", PLY,
         "In North America and Europe, midcore games lead with D90 IAP ARPU of $2.66, compared to $2.55 for casino games.", False),
    fact("f-g-03", "About 4.2% of mobile gamers make an in-app purchase, up from 3.9% a year earlier",
         "4.2", "%", SEG,
         "Approximately 4.2% of mobile gamers make IAPs, up from 3.9% in 2025."),
    fact("f-g-04", "Average in-app purchase per paying user was 16.87 dollars globally in the first quarter of 2026, against 48.21 in the United States",
         "16.87", "USD", CBX,
         "The average in-app purchase per paying user globally was $16.87 in Q1 2026; in the U.S. ARPPU is $48.21."),
    fact("f-g-05", "India's mobile gaming ARPU was 2.04 dollars in 2025 and is forecast to reach 2.52 by 2030",
         "2.04", "USD", PGB,
         "In India, ARPU was just $2.04 in 2025 and is forecast to reach $2.52 by 2030."),
    fact("f-g-06", "In-app purchases account for 64% of mobile game revenue",
         "64", "%", SEG,
         "In-app purchases account for 64% of mobile game revenue.", False),
    fact("f-g-07", "India's gaming growth is led by mid-core: strategy revenue grew 77% year on year and card battlers more than 90%",
         "77", "%", PGB,
         "Strategy-genre revenue grew 77% year over year, MOBA titles more than tripled, and card battlers grew over 90%.", False),
    fact("f-t-01", "Only 2.8% of travel app installs end in a completed booking",
         "2.8", "%", LRT2,
         "Only 2.8% of installs result in completed bookings."),
    fact("f-t-02", "Travel funnel targets run 40% to 60% install-to-search, 2% to 5% search-to-booking and 85% to 95% booking-to-confirmation",
         "2-5", "%", LRT2,
         "Targets: install-to-search 40-60%, search-to-booking 2-5%, booking-to-confirmation 85-95%."),
    fact("f-t-03", "Only 42% of travel app users transact in their first month, although most sign up within seconds",
         "42", "%", BOA2,
         "Only 42% of travel app users make transactions in the first month, despite 80% signing up within seconds."),
    fact("f-t-04", "For travel advertisers in-app conversion reaches 20% against 6% on mobile web",
         "20", "%", CRT,
         "For travel advertisers, mobile web conversion rates were 6% while in-app conversion rates are as high as 20%."),
    fact("f-t-05", "Nearly 40% of trips are booked within fourteen days of departure",
         "40", "%", BOA2,
         "Nearly 40% of trips are now booked within 14 days of departure.", False),
]

POOL = {**P1, **P2, **P3, **P4, **P5, **P6, **P7, **P8}
POOL.update({f["fact_id"]: f for f in NEW})

HUB = ("/benchmarks", "the benchmarks", "hub")
BOFU = ("/work-with-me", "a monetisation review", "bofu")
PAGES = [
  dict(
    id="benchmark-0530", url="/benchmarks/arpu/gaming", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Gaming App ARPU Benchmark by Genre (2026)",
    meta_description="Gaming app ARPU benchmarks by genre, with the paying-user share that sets the ceiling and the India figure that sits two orders of magnitude below global.",
    h1="Gaming app ARPU benchmark",
    primary_keyword="gaming app arpu benchmark",
    secondary_keywords=["gaming arpu", "mobile game arppu"],
    entity_a="arpu", entity_b="gaming",
    facts=["f-g-01", "f-g-02", "f-g-03", "f-g-04", "f-g-05", "f-g-06", "f-g-07"],
    experience=["exp-034"],
    links=L(HUB, ("/benchmarks/arpu", "the ARPU benchmarks", "lateral"),
            ("/glossary/arpu", "the ARPU definition", "lateral"),
            ("/glossary/arppu", "ARPPU, the paying-user version", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("gaming-arpu-table",
              "Gaming ARPU reference points: day-90 in-app purchase ARPU for casino, midcore and casual genres globally and the North America and Europe ordering, the share of mobile gamers who ever purchase, average in-app purchase per paying user globally against the United States, India's gaming ARPU and its 2030 forecast, the in-app purchase share of game revenue, and India's fastest-growing genres, each row carrying its source and verification date",
              "Gaming ARPU by genre, each row sourced. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a gaming monetisation review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good ARPU for a mobile game?",
           a="Genre decides it before anything else. Day-90 in-app purchase ARPU runs $2.43 for casino, $2.13 for midcore and $1.34 for casual, about ₹233, ₹204 and ₹129. A casual game matching a casino figure would be extraordinary rather than well run."),
      dict(q="Why is ARPU so much lower than ARPPU?",
           a="Because only about 4.2% of mobile gamers ever purchase. Average spend per paying user was $16.87 globally in the first quarter of 2026, about ₹1,618, so dividing by all players rather than payers moves the number by more than twenty times."),
      dict(q="What should an Indian game expect?",
           a="Far less per user and a different growth mix. India's gaming ARPU was $2.04 in 2025, about ₹196, forecast to reach $2.52 by 2030. The growth is mid-core led, with strategy revenue up 77% year on year."),
      dict(q="Does advertising revenue belong in this number?",
           a="Not in these figures. In-app purchases account for 64% of mobile game revenue, so an ARPU built only from purchases omits roughly a third of what the category earns."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Separates ARPU from ARPPU with the paying-user share that connects them, so a reader can see that a 4.2% purchase rate — not pricing — sets the ceiling on every genre figure here.",
    contradictions=[
      "Gaming ARPU figures in circulation differ by two orders of magnitude and are not "
      "comparable: playio.co reports day-90 in-app purchase ARPU per genre at $1.34 to $2.43, "
      "pocketgamer.biz gives India's ARPU as $2.04 for a year, and cubix.co reports a global "
      "figure near $94.53. The first is a 90-day per-install measure, the second an annual "
      "per-user one, and the third does not state its denominator. Only the first two appear "
      "on this page, each labelled with its window.",
    ],
    block_coverage=bm_cover(["f-g-01", "f-g-03"], ["f-g-01", "f-g-02", "f-g-04"],
                            ["f-g-06", "f-g-03"], ["f-g-05", "f-g-07"],
                            ["f-g-02", "f-g-04"]),
    body="""
<AnswerBox>
Gaming app ARPU benchmarks are set by genre and by how few players ever pay. Day-90
in-app purchase ARPU runs $1.34 for casual, $2.13 for midcore and $2.43 for casino,
about ₹129, ₹204 and ₹233. Only about 4.2% of mobile gamers purchase at all, which is
what holds every one of those figures down.
</AnswerBox>

<FactTable
  id="gaming-arpu-table"
  caption="Gaming ARPU by genre, each row sourced"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Day-90 IAP ARPU: casino / midcore / casual", "$2.43 / $2.13 / $1.34 (₹233 / ₹204 / ₹129)"], factId: "f-g-01" },
    { cells: ["Day-90 IAP ARPU in NA and Europe, midcore against casino", "$2.66 against $2.55 (₹255 against ₹245)"], factId: "f-g-02" },
    { cells: ["Mobile gamers who make any in-app purchase", "about 4.2%, up from 3.9%"], factId: "f-g-03" },
    { cells: ["Average IAP per paying user, global against US", "$16.87 against $48.21 (₹1,618 against ₹4,624)"], factId: "f-g-04" },
    { cells: ["India gaming ARPU, 2025 and 2030 forecast", "$2.04 and $2.52 (₹196 and ₹242)"], factId: "f-g-05" },
    { cells: ["In-app purchase share of mobile game revenue", "64%"], factId: "f-g-06" },
    { cells: ["India's fastest-growing genre revenue", "strategy +77%; card battlers +90%"], factId: "f-g-07" },
  ]}
/>

## The numbers

Read the genre row first and the paying-user row second, because the second explains
the first.

Day-90 in-app purchase ARPU separates casino at $2.43, about ₹233, from casual at
$1.34, about ₹129 — a gap of roughly 80%. In North America and Europe the order
changes: midcore leads at $2.66, about ₹255, ahead of casino at $2.55, about ₹245.
Genre and region interact, so a single global genre figure is already an average of
two different markets.

Average in-app purchase per paying user tells a different story. It was $16.87 globally
in the first quarter of 2026, about ₹1,618, and $48.21 in the United States, about
₹4,624. Those are per payer. The genre figures above are per install. The two differ by
more than ten times for the same players.

## Why gaming differs from other categories

Two structural features, and neither is about pricing.

The paying share is tiny. About 4.2% of mobile gamers ever make a purchase, up from
3.9% a year earlier. So almost every gaming ARPU figure is a few large payers divided across a very large
free population. The average moves when whale behaviour moves, not when the shop
changes.

And a third of the revenue is missing from these figures. In-app purchases account for
64% of mobile game revenue, so purchase-only ARPU omits advertising and every other
line. A game comparing its blended revenue per user to a purchase-only benchmark will
look better than it is.

That matters most for casual games, which lean hardest on advertising. Casual sits
lowest on purchase ARPU at $1.34, about ₹129, and the gap to midcore closes once ad
revenue enters the comparison. The published purchase-only figures cannot show that,
so a casual title should build its own blended number before concluding it
underperforms.

## The India layer

India's gaming ARPU was $2.04 in 2025, about ₹196, and is forecast to reach $2.52 by
2030, about ₹242. Against a United States ARPPU of $48.21, about ₹4,624, the gap is
not a performance gap — it is a price level and a payment-rail difference.

The growth mix matters more than the level. India's gains are mid-core led: strategy
revenue grew 77% year on year and card battlers more than 90%. A casual title planning
around Indian growth figures is planning around somebody else's genre.

No source publishes an India ARPU split by genre, so this page does not state one. The
honest read is that the global genre ordering probably holds and the levels do not.

One more India factor sits outside ARPU entirely. Real-money gaming and fantasy sports
operate under a separate regulatory and tax regime from in-app purchase games, so their
revenue per user is not comparable to the genre figures here at all. Treat them as a
different business that happens to share a store category.

## What good looks like

At the early stage, the number to watch is the paying share rather than ARPU. Against
a 4.2% baseline, a game converting 2% has a conversion problem no price change fixes.

In the growth stage, compare to your genre and region together. Midcore in North
America at $2.66, about ₹255, and casino globally at $2.43, about ₹233, are close
enough that mixing them hides real differences.

At scale the purchase-only figure stops being sufficient. With in-app purchases at 64%
of category revenue, a mature game needs a blended figure that includes advertising,
and the benchmark to beat becomes its own previous cohort.

<FromMyWork exp="exp-034">
Two small teams solved problems no product-line team would own. Monetisation sits in
the same place: the paying-share problem belongs to nobody by default, and it is
usually the number with the most room in it.
</FromMyWork>

## If you are below median

Check the denominator before changing the product. An ARPU computed over installs,
over active users and over payers gives three numbers from one game, and most
published comparisons do not say which they used.

Then check the paying share against 4.2%. If the share is at or above baseline and ARPU
is low, the problem is price or offer depth. If the share sits below, the problem is the
first purchase, and no pricing work reaches it.

Those two paths need different teams. Offer depth is an economy and content question.
First purchase is an onboarding and trust question. Diagnosing which one applies takes
an afternoon with the paying-share number and saves a quarter of work on the wrong
one.

## Sources

Every row carries its source and the date it was last checked.

One disagreement is recorded rather than averaged. Published gaming ARPU figures span
roughly $1.34, about ₹129, up to near $94.53, about ₹9,063, because they measure
different windows and different denominators. A day-90 per-install figure, an annual
per-user figure and an unlabelled global figure are three different measurements
wearing one name. Only the figures whose window a source states appear above.

The genre figures come from attribution and analytics vendors measuring their own
customer bases, which skews toward games that already instrument monetisation carefully.
Read the genre ordering as well evidenced and the exact levels as specific to that
population.

The India figures come from market forecasts rather than measured platform data, so they
carry forecast risk on top of that. The 2030 projection in particular is a projection,
and projections in this category have been revised more often than they have been met.
"""
  ),
  dict(
    id="benchmark-0578", url="/benchmarks/install-to-purchase/travel", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="Travel Install to Purchase Rate Benchmark (2026)",
    meta_description="Travel install to purchase rate benchmarks, with the stage-by-stage funnel targets and why the first month captures less than half of first bookings.",
    h1="Travel install to purchase rate benchmark",
    primary_keyword="travel install to purchase rate",
    secondary_keywords=["travel app booking conversion", "travel app funnel benchmark"],
    entity_a="install-to-purchase", entity_b="travel",
    facts=["f-t-01", "f-t-02", "f-t-03", "f-t-04", "f-t-05", "f-bm-14"],
    experience=["exp-028"],
    links=L(HUB, ("/benchmarks/install-to-purchase", "install to purchase benchmarks", "lateral"),
            ("/glossary/conversion-rate", "the conversion rate definition", "lateral"),
            ("/glossary/arpu", "the ARPU definition", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("travel-funnel-table",
              "Travel install-to-purchase reference points: the share of installs ending in a completed booking, stage targets for install-to-search, search-to-booking and booking-to-confirmation, the share of users transacting in their first month, in-app against mobile web conversion for travel advertisers, the share of trips booked within fourteen days of departure, and the cross-category install-to-purchase band with travel named, each row carrying its source and verification date",
              "Travel booking conversion, stage by stage. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a travel funnel review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good install to purchase rate for a travel app?",
           a="Around 2.8% of installs end in a completed booking, and travel sits at 2.41% in the cross-category data — above the 1% to 2% most apps manage. Travel converts better than average because the intent that drove the install is usually a trip already being planned."),
      dict(q="Where does the travel funnel actually leak?",
           a="Between search and booking. The stage targets are 40% to 60% install-to-search, 2% to 5% search-to-booking and 85% to 95% booking-to-confirmation, so the middle stage loses the most and the final stage loses least."),
      dict(q="How long should I wait before judging a cohort?",
           a="Longer than a month. Only 42% of travel app users transact in their first month, so a 30-day window misses most of the first bookings and will condemn a cohort that is performing normally."),
      dict(q="Is the app worth the cost against mobile web?",
           a="On conversion, substantially. For travel advertisers in-app conversion reaches 20% against 6% on mobile web, which is the clearest argument for the app existing at all."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Breaks the install-to-purchase rate into the three published stage targets and shows the measurement window matters as much as the rate, because fewer than half of travel users transact in their first month.",
    block_coverage=bm_cover(["f-t-01", "f-bm-14"], ["f-t-01", "f-t-02", "f-bm-14"],
                            ["f-t-04", "f-t-05"], ["f-t-03"],
                            ["f-t-02", "f-t-04"]),
    body="""
<AnswerBox>
Travel install to purchase rate benchmarks put completed bookings at about 2.8% of
installs, with travel at 2.41% in cross-category data against 1% to 2% for most apps.
The window matters as much as the rate: only 42% of travel app users transact in their
first month, so a 30-day read understates almost every cohort.
</AnswerBox>

<FactTable
  id="travel-funnel-table"
  caption="Travel booking conversion, stage by stage"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Installs ending in a completed booking", "about 2.8%"], factId: "f-t-01" },
    { cells: ["Stage targets: install-to-search / search-to-booking / booking-to-confirmation", "40-60% / 2-5% / 85-95%"], factId: "f-t-02" },
    { cells: ["Travel users transacting in their first month", "42%"], factId: "f-t-03" },
    { cells: ["Travel conversion, in-app against mobile web", "up to 20% against 6%"], factId: "f-t-04" },
    { cells: ["Trips booked within fourteen days of departure", "nearly 40%"], factId: "f-t-05" },
    { cells: ["Cross-category install-to-purchase, with travel named", "1-2% typical; travel 2.41%"], factId: "f-bm-14" },
  ]}
/>

## The numbers

Travel converts above the app average and the reason is intent rather than craft.

About 2.8% of installs end in a completed booking, and the cross-category data puts
travel at 2.41% against 1% to 2% for most apps. Somebody installing a travel app
usually has a trip in mind, which no onboarding sequence can manufacture.

The stage targets show where the loss happens. Install-to-search runs 40% to 60%, so
roughly half of installs never search. Search-to-booking runs 2% to 5%, the narrowest
stage by far. Booking-to-confirmation runs 85% to 95%: once a booking starts, it
usually finishes.

Read the three together and the middle stage is the whole problem. A travel app that
doubled install-to-search would still hit a search-to-booking stage losing 95% or
more.

## Why travel differs from other categories

Three mechanisms, and the first is the one most funnels mismeasure.

Trips have dates, and purchases follow them. Travellers book nearly 40% of trips within
fourteen days of departure, so the trip sets the timing rather than the app. A user who installs
in March for a June trip is not a lost user in April.

Order value is high and frequency is low. Travel sustains a 2.41% rate on baskets worth
many times a typical retail order, so the same percentage carries very different revenue
behind it.

And the app genuinely outperforms the web here: in-app conversion reaches 20% against
6% on mobile web for travel advertisers. That gap is larger than in most categories and
is the strongest argument for the install in the first place.

## The India layer

No source publishes an India-specific travel install-to-purchase rate, and this page does
not infer one. The measurement warning does transfer, and it bites harder in India.

Only 42% of travel app users transact in their first month globally. Indian travel
demand concentrates around festival and holiday windows, so a cohort acquired outside
those windows will convert later still. A 30-day attribution window judged against a
global rate misleads in both directions: it understates the cohort and flatters whichever
channel happened to land in season.

Measure travel cohorts on a 90-day window at minimum, and report the season you acquired
the cohort in alongside the rate.

Two Indian specifics compound this. Domestic travel concentrates into a handful of
holiday periods, so a quarter can contain one real booking window rather than three.
And price sensitivity pushes more of the decision onto comparison, which lengthens the
gap between install and booking. Both stretch the window further, and neither appears
in any published rate.

## What good looks like

Early on, watch install-to-search rather than install-to-purchase. Against a 40% to 60%
target, a product below that band has a discovery or first-session problem, and the
booking stage cannot be read yet.

In the growth stage, the search-to-booking stage is the lever. It is the narrowest
published band at 2% to 5%, which makes it both the largest loss and the place where a
point of improvement is worth most.

At scale, compare your own cohorts season by season. The published rates blend high and
low season, and your mix will not match theirs.

<FromMyWork exp="exp-028">
Tracking infrastructure project announcements rather than waiting for sales data
surfaced demand earlier than the pipeline did. Travel funnels reward the same habit:
the leading signal sits upstream of the booking, in search behaviour.
</FromMyWork>

## If you are below median

Separate the three stages before changing anything. A blended rate cannot tell an app
nobody searches in from one where search works and booking does not. Those two need
opposite fixes.

Then widen the window. With 42% transacting in month one, a 30-day measurement reads
fewer than half the conversions. The apparent shortfall may be entirely an artefact of
when you looked.

Only after both of those is a product change worth considering. The most common real fix
at the search-to-booking stage is cutting the number of decisions between a result and a
confirmed price, because that is where a dated purchase stalls.

One caution on channel. In-app conversion reaching 20% against 6% on mobile web makes
the app look like the answer to a weak funnel, but that gap measures users who already
chose to install. Pushing web users into an install adds a step before the booking and
usually costs more conversions than it gains.

## Sources

Every row carries its source and the date it was last checked.

The stage targets deserve a caveat. They come from attribution tooling and describe
targets rather than measured medians, which is a weaker claim than a distribution. This
page labels them as targets for that reason: a product inside them meets a vendor's
recommendation rather than beating a peer group.

No source gives the stage breakdown for India, and none separates business travel from
leisure, which almost certainly differ on every stage. This page states both gaps rather than
filling them with an estimate.

The booking-window figure carries the same caveat. It covers trips in general rather
than app bookings specifically, so read it as directional evidence that travel
purchases follow dates, not as a measurement of this funnel.
"""
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-bm-wave2-01", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Get a monetisation review",
                                    "href": "/work-with-me"},
                        "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
