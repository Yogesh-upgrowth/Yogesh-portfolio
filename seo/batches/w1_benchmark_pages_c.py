"""Store-conversion, ARPU, install-to-purchase and trial benchmark pages.

Imported by w1_benchmark_01. These six finish the benchmark destinations the
redirects point at.
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import L, V  # noqa: E402
from w1_benchmark_01 import BM_SCHEMA, bm_cover  # noqa: E402

HUB = ("/benchmarks", "the benchmarks", "hub")

PAGES_C = [
  dict(
    id="benchmark-0567", url="/benchmarks/app-store-conversion/b2b-saas",
    archetype="benchmark", hub="benchmarks", funnel="MOFU",
    title="SaaS App Store Conversion Benchmarks by Category (2026)",
    meta_description="SaaS app store conversion benchmarks: the business category's page-view-to-install rate, the search and browse split, and why intent explains the gap.",
    h1="SaaS app store conversion benchmarks",
    primary_keyword="saas app store conversion",
    secondary_keywords=["business app store conversion", "b2b app install rate"],
    entity_a="app-store-conversion", entity_b="b2b-saas",
    facts=["f-bm-12", "f-bm-09", "f-bm-11", "f-bm-18", "f-bm-07", "f-bm-31"],
    experience=["exp-016", "exp-031"],
    links=L(HUB, ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "lateral"),
            ("/glossary/conversion-rate", "conversion rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/services/pricing-and-packaging/b2b-saas", "B2B SaaS pricing and packaging", "related"),
            ("/work-with-me", "a conversion review", "bofu")),
    visuals=V("saas-store-conversion",
              "SaaS and business app store conversion: the business category's page-view-to-install rate, App Store search against browse install ranges, the all-category average conversion and install rate, the category's download-to-trial rank, B2B day-30 retention and the ACV bands that define each segment, each row carrying its source and verification date",
              "SaaS store conversion benchmarks, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a b2b-saas store conversion review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good app store conversion rate for a SaaS app?",
           a="Business apps convert about 66.7% of App Store page views to installs, well above the 8.56% all-category average conversion rate. The gap is intent: people search for a work tool with the problem already named."),
      dict(q="Why does search convert so much better than browse?",
           a="US App Store search install medians span 2.6% to 12.4% across top-level categories against 0.1% to 2.5% from browse. A searcher has stated a need; a browser has not. Optimising for browse is optimising for the weaker half."),
      dict(q="Does a high install rate mean the listing is good?",
           a="Not by itself. A narrow, high-intent keyword set produces an excellent rate on small volume, and a listing can raise its rate by ranking for fewer terms. Read rate and install volume together or the metric rewards shrinking."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Separates rate from volume, which every store-conversion benchmark conflates: a listing can improve its conversion rate by ranking for fewer, narrower terms, and the business category's unusually high rate is mostly a statement about who searches.",
    block_coverage=bm_cover(["f-bm-12"], ["f-bm-12", "f-bm-09", "f-bm-11"],
                            ["f-bm-18", "f-bm-07"], ["f-bm-31"], ["f-bm-12"]),
    body="""
<AnswerBox>
SaaS app store conversion runs far above average. Business apps convert about
66.7% of App Store page views to installs, against an 8.56% all-category average
conversion rate and a 3.8% average install rate. Intent explains almost all of the
gap, not listing craft.
</AnswerBox>

<FactTable
  id="saas-store-conversion"
  caption="SaaS and business store conversion against the all-category figures"
  columns={["Measure", "Business / B2B", "All categories"]}
  rows={[
    { cells: ["App Store page view to install", "about 66.7%", "no published figure"], factId: "f-bm-12" },
    { cells: ["Average store conversion and install rate", "no published figure", "8.56% and 3.8%"], factId: "f-bm-11" },
    { cells: ["Install rate, search against browse", "no published figure", "2.6% to 12.4% against 0.1% to 2.5%"], factId: "f-bm-09" },
    { cells: ["Download-to-trial rate by category", "highest of any category", "a rank, not a rate"], factId: "f-bm-18" },
    { cells: ["Day 30 retention", "20% to 32%", "average iOS app 5.3%"], factId: "f-bm-07" },
    { cells: ["Segment definition by ACV", "SMB under $10K, mid-market to $100K", "enterprise above $100K"], factId: "f-bm-31" },
  ]}
/>

## The numbers, and what is missing from them

Business apps convert about 66.7% of App Store page views into installs. The
all-category average conversion rate is 8.56% and the average install rate is
3.8%. Those are different denominators, which is why the table states both and
labels which population each describes.

Three cells read "no published figure". Nobody publishes an all-category
page-view-to-install figure, and nobody breaks the search-versus-browse split or
the average install rate out for business apps specifically. The standard for these
pages is three sources or an explicit mark, and store conversion clears it for the
business category on one measure and no others.

The download-to-trial row carries a rank rather than a rate, because that is what
the source reports. A rank tells you the category leads and not by how much.

## Why B2B SaaS differs

Intent arrives before the listing does. Somebody searching for an invoicing tool
has already named the problem, decided to solve it with software, and begun
comparing. The listing's job is to confirm a decision rather than create one, and
confirmation converts far better than persuasion.

The same mechanism carries down the funnel. Business apps record the highest
download-to-trial rate of any category, and B2B products hold 20% to 32% at day 30
against an average iOS app at 5.3%. High-intent traffic converts well at every
step, which means a B2B store listing is rarely the constraint.

Segment shape matters for reading any of it. SMB sits under $10,000 ACV, about ₹9.59 lakh,
mid-market from there to $100,000, about ₹95.89 lakh, and enterprise above that, and a self-serve SMB product and
an enterprise product with a sales team should not share a store-conversion target at
all.

## The India layer

No India-specific store conversion figure is published for the business category.

What applies instead is that an Indian B2B product usually sells abroad while
ranking at home, so its store metrics and its revenue come from different
populations. A listing converting well in India and billing in dollars has a store
funnel that tells it almost nothing about revenue, and the two should be read
separately rather than blended into one conversion number.

That split is also why the ACV bands matter here: the same product can sit in the
SMB band for its Indian customers and the mid-market band abroad, with two different
expected conversion shapes.


There is also a practical consequence for measurement. Store analytics report by
storefront, and revenue reports by billing entity, so an Indian B2B product has to
join two datasets before it can say anything about conversion to revenue at all.
## What good looks like

Against the all-category average install rate of 3.8%, almost any business app looks
strong, which makes that comparison useless. Compare against your own search traffic
instead: if search install rate sits inside the 2.6% to 12.4% band and browse sits
inside 0.1% to 2.5%, the listing is behaving normally and the lever is ranking
rather than creative.

Read rate beside volume, always. A listing can raise its conversion rate by ranking
for fewer and narrower terms, and that looks like an improvement while total installs
fall. The pairing is what makes the metric honest.

<FromMyWork exp="exp-016">
The site had 340 indexed pages against a keyword universe of tens of thousands of
queries. Building for the long tail rather than the head is what changed the
distribution.
</FromMyWork>

## If you are below the median

Check which half of your traffic you are measuring. Browse traffic converts an order
of magnitude lower than search, so a listing with heavy browse exposure reads badly
through no fault of its own.

Then check whether the listing matches the search term rather than the product. A
B2B listing written for the category and ranked for a feature converts worse than one
written for the feature somebody searched.

<FromMyWork exp="exp-031">
About 40% of engineering time across the organisation was going to client-specific
requests that sales had sold as standard. Packaging was the fix, not capacity.
</FromMyWork>


Then check whether the listing is ranking for the category or the feature. B2B buyers
search for the job, and a listing written for the product category converts the people
who already knew your name.
## How these figures were gathered

Each row names its source and the date somebody last checked it. The figures come
from published reports rather than from first-party store data.

Three rows read "no published figure", and that is the honest state of the public
data for this category. The rule for these pages is at least three sources or an
explicit "insufficient public data" mark, and store conversion is published by
category unevenly — well for medical, entertainment and business, poorly or not at
all elsewhere.

Where a row carries an all-category figure in a category column, the label says so.
A reader setting a target from an unlabelled comparison would be setting it from the
wrong population.

Re-verification runs every 90 days, and faster for anything touching price.
""",
  ),

  dict(
    id="benchmark-0563", url="/benchmarks/app-store-conversion/healthtech",
    archetype="benchmark", hub="benchmarks", funnel="MOFU",
    title="Health and Wellness App Store Conversion (2026)",
    meta_description="Health and wellness store conversion: page-view-to-install, the medical category's leading install rate, and why discovery is not the constraint.",
    h1="Health and wellness app store conversion benchmarks",
    primary_keyword="health and wellness app store conversion",
    secondary_keywords=["medical app install rate", "fitness app store conversion"],
    entity_a="app-store-conversion", entity_b="healthtech",
    facts=["f-bm-13", "f-bm-10", "f-bm-09", "f-bm-04", "f-bm-21", "f-bm-16"],
    experience=["exp-005", "exp-011"],
    links=L(HUB, ("/benchmarks/retention/healthtech", "health retention benchmarks", "lateral"),
            ("/glossary/conversion-rate", "conversion rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            ("/work-with-me", "a conversion review", "bofu")),
    visuals=V("health-store-conversion",
              "Health and wellness store conversion: the category's impression-to-page-view and page-view-to-install rates, the highest and lowest iOS install rates by category, the search against browse split, the all-category averages, health retention for context and median revenue per install, each row carrying its source and verification date",
              "Health store conversion benchmarks, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a healthtech store conversion review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good app store conversion rate for a health app?",
           a="Health and fitness apps typically show a 4% to 8% impression-to-page-view rate and 25% to 40% page view to install. Medical has the highest iOS install rate of any category at 7.8%, against 1.1% for entertainment."),
      dict(q="Why do health apps convert so well in the stores?",
           a="Because people search for them with a specific condition or goal named, and a named need converts. The category's problem sits after the install, where a 25% day-1 median falls to 5% by day 30."),
      dict(q="Should a health app invest in store optimisation?",
           a="Rarely as the first move. With page-view-to-install already at 25% to 40%, more installs mostly means more users to lose. Median revenue per install at day 60 is $0.34, so the install is not where the value is."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Puts the category's strong store conversion next to its weak day-30 retention and median revenue per install, to show that acquisition is already solved and funding it further buys users the product loses.",
    block_coverage=bm_cover(["f-bm-13"], ["f-bm-13", "f-bm-10", "f-bm-09", "f-bm-21"],
                            ["f-bm-04"], ["f-bm-16"], ["f-bm-13"]),
    body="""
<AnswerBox>
Health and wellness app store conversion runs strong: a 4% to 8%
impression-to-page-view rate and 25% to 40% page view to install. Medical leads
every category on iOS install rate at 7.8%, against 1.1% for entertainment. The
category's problem starts after the install, not before it.
</AnswerBox>

<FactTable
  id="health-store-conversion"
  caption="Health store conversion, and what happens after the install"
  columns={["Measure", "Health & wellness", "Reference"]}
  rows={[
    { cells: ["Impression to page view, and page view to install", "4% to 8%, and 25% to 40%", "no all-category figure"], factId: "f-bm-13" },
    { cells: ["Highest and lowest iOS install rate by category", "medical 7.8%", "entertainment 1.1%"], factId: "f-bm-10" },
    { cells: ["Install rate, search against browse", "no published figure", "2.6% to 12.4% against 0.1% to 2.5%"], factId: "f-bm-09" },
    { cells: ["Cross-category day 1 and day 30 retention", "no category figure", "25.3% and 5.7%"], factId: "f-bm-21" },
    { cells: ["Day 1 and day 30 retention, median", "25% and 5%", "25% and 4% all categories"], factId: "f-bm-04" },
    { cells: ["Median revenue per install at day 60", "no category figure", "$0.34, strong $0.66+"], factId: "f-bm-16" },
  ]}
/>

## The numbers, and what is missing from them

Health and fitness apps convert 4% to 8% of impressions into page views and 25% to
40% of page views into installs. Medical records the highest iOS install rate of any
category at 7.8%; entertainment records the lowest at 1.1%. That spread of roughly
seven to one across categories is larger than most listings move their own rate in a
year.

Three cells read "no published figure". Nobody publishes a health-specific
search-versus-browse split, nor a health-specific revenue per install, nor a
cross-category retention figure broken out for the category. The rows that carry an all-category number say
so, because a target set from an unlabelled comparison would be set against the
wrong population.


One more caveat belongs on the table. Medical and health-and-fitness are separate
categories in the stores and get reported separately, so a wellness app comparing
itself to the medical install rate is comparing against a different category.
## Why health and wellness differs

Search intent is unusually specific. Somebody types a condition, a goal or a
measurement, and a listing matching that term converts because they named the need
first. Few categories get traffic that well qualified.

Acquisition is therefore the solved part. Day 1 retention sits at a 25% median,
roughly the all-category figure, and day 30 at 5% against 4%. So a
category that converts the store unusually well keeps users only slightly better
than average, and the distance between those two facts is the whole problem.

Median revenue per install at day 60 is $0.34 across categories, roughly ₹33, with
$0.66 and above, about ₹63, marking strong monetisation. Against a 25% to 40% install rate, that number
says the install is cheap to win and worth little on its own.

## The India layer

No India-specific health store conversion figure is published.

What is specific to India is the gap between willingness to install and willingness
to pay. A category converting 25% to 40% of page views in a market where
subscription prices sit well below US levels produces a lot of installs and little
revenue, and the honest consequence is that store optimisation is not where an
Indian health product should spend.

The first-session design matters more. In practice the lever is removing work from
the opening minutes rather than adding polish to the listing.

<FromMyWork exp="exp-011">
The renewal form was 23 fields across 6 steps and took 11 minutes on a mid-range
Android handset, timed. It went to 4 fields and one step for most renewals, using
registration data the insurer already held.
</FromMyWork>

## What good looks like

Inside 25% to 40% page view to install, the listing is performing to category. Below
25% there is a real listing problem; above 40% the listing is probably ranking for
terms narrower than the product.

The more useful target is what the install does next. Pair store conversion with day
7, not day 30: the category's habit forms in the first week, and a listing that
promises more than the first week delivers produces a good install rate and a bad
curve.


Set the target from your own search terms rather than from the band. A listing
ranking for condition-specific queries should sit at the top of the 25% to 40% range;
one ranking for generic wellness terms should not, and neither figure is a problem.
## If you are below the median

Check the screenshots against the search term rather than against the brand. In this
category the first screenshot usually has to show the measurement or the plan, not
the logo.

Then reframe whatever the first session asks for.

<FromMyWork exp="exp-005">
Asking for a bank statement upfront got 35% compliance. Showing a preliminary
eligibility range first, then asking for the statement to reveal the exact offer,
took it to 71% — the same ask, reframed from a compliance step into a reward.
</FromMyWork>


Then check the screenshot order against what the search term promised. In this
category the install decision usually happens on the first screenshot, and a generic
hero image wastes the one asset that converts.

Both checks cost an afternoon and neither needs a release.
## How these figures were gathered

Every row carries a source and the date somebody last checked it, drawn from
published reports rather than first-party store data.

Three rows read "no published figure". Store conversion is broken out by category
unevenly: medical, entertainment and business are covered, and most other categories
are not. The standard here is three sources or an explicit "insufficient public data"
mark, and this page reports both states on the same table.

Figures go back for re-verification every 90 days, and price figures every 45.


Where a row carries an all-category figure in a category column, the label says so. A
target set from an unlabelled comparison would be set against the wrong population,
which is the specific error this column exists to prevent.""",
  ),

  dict(
    id="benchmark-0568", url="/benchmarks/app-store-conversion/media-ott",
    archetype="benchmark", hub="benchmarks", funnel="MOFU",
    title="OTT and Audio App Store Conversion Rate Benchmarks (2026)",
    meta_description="OTT and audio store conversion: entertainment's lowest-in-class install rate, India's subscription base, and three ARPU figures that disagree.",
    h1="OTT and audio app store conversion rate benchmarks",
    primary_keyword="ott and audio app store conversion rate",
    secondary_keywords=["entertainment app install rate", "streaming app store conversion"],
    entity_a="app-store-conversion", entity_b="media-ott",
    facts=["f-bm-10", "f-bm-16", "f-bm-25", "f-bm-26", "f-bm-27", "f-bm-24",
           "f-bm-22", "f-bm-23", "f-bm-34"],
    experience=["exp-019", "exp-045"],
    links=L(HUB, ("/india", "monetising in India", "lateral"),
            ("/glossary/conversion-rate", "conversion rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "the retention benchmarks", "related"),
            ("/work-with-me", "a conversion review", "bofu")),
    visuals=V("ott-store-conversion",
              "OTT and audio store conversion: entertainment's lowest-in-class iOS install rate against medical's highest, median revenue per install, India's OTT subscriptions, the leading platform's subscriber and active-user counts, streaming advertising revenue and India's projected OTT revenue and user base, each row carrying its source and verification date",
              "OTT and audio store conversion benchmarks, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a media-ott conversion review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good app store conversion rate for a streaming app?",
           a="Entertainment has the lowest iOS install rate of any category at 1.1%, against medical's 7.8%. A streaming listing performing at category level therefore looks terrible against any cross-category average, and that is a measurement artefact."),
      dict(q="Why does entertainment convert so poorly in the stores?",
           a="Because the decision is about the catalogue rather than the app, and a store listing cannot show a catalogue. People install a streaming app when they want a specific title, which the listing has no way to advertise."),
      dict(q="What is India's OTT ARPU?",
           a="Three published figures disagree: $40.44 a year, ₹85 to ₹95 a month, and $9.02. They are not reconcilable without knowing each one's denominator, so this page states the disagreement rather than picking one."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="States that three published India OTT ARPU figures contradict each other and refuses to pick one, and explains why entertainment's lowest-in-class install rate is a property of catalogue-led decisions rather than a listing failure.",
    contradictions=["India's OTT ARPU is published as $40.44 a year (Statista outlook), as ₹85-95 a month (roughly $10.6-11.9 a year at 95.89) and as $9.02. The three are not reconcilable without each source's denominator and subscriber definition. Stated as a disagreement on the page rather than resolved by preference."],
    block_coverage=bm_cover(["f-bm-10"], ["f-bm-10", "f-bm-16", "f-bm-26"],
                            ["f-bm-27"], ["f-bm-25", "f-bm-24", "f-bm-22", "f-bm-23", "f-bm-34"],
                            ["f-bm-10"]),
    body="""
<AnswerBox>
OTT and audio app store conversion rate benchmarks start from an uncomfortable
fact: entertainment has the lowest iOS install rate of any category at 1.1%,
against medical's 7.8%. A streaming listing performing exactly to category looks
broken against any cross-category average.
</AnswerBox>

<FactTable
  id="ott-store-conversion"
  caption="OTT and audio conversion, and the Indian market around it"
  columns={["Measure", "Figure", "Reference"]}
  rows={[
    { cells: ["Lowest and highest iOS install rate by category", "entertainment 1.1%", "medical 7.8%"], factId: "f-bm-10" },
    { cells: ["Median revenue per install at day 60", "no category figure", "$0.34, strong $0.66+"], factId: "f-bm-16" },
    { cells: ["India OTT subscriptions", "216.5 million", "no conversion figure published"], factId: "f-bm-26" },
    { cells: ["Leading Indian platform", "100M subscribers, 500M active users", "22% to 25% of OTT revenue"], factId: "f-bm-25" },
    { cells: ["India streaming advertising revenue, 2025", "$563.9 million", "ad tiers now widely adopted"], factId: "f-bm-27" },
    { cells: ["India OTT revenue and users, 2026", "$5.08 billion, 549 million users", "521 million in 2025"], factId: "f-bm-24" },
    { cells: ["India OTT ARPU, three published figures", "$40.44 a year, ₹85 to ₹95 a month", "and $9.02 a year"], factId: "f-bm-22" },
  ]}
/>

## The numbers, and what is missing from them

Entertainment records a 1.1% iOS install rate, the lowest of any category, against
medical's 7.8%. No separate figure exists for audio, which the inventory groups with
OTT here, and none exists for page-view-to-install in the category.

So the honest position is that store conversion for this category is published as a
single low number and nothing else. Everything else on this page describes the market
the listing sits in, because that is what the public data covers: 216.5 million
Indian OTT subscriptions, $5.08 billion of projected 2026 revenue, about ₹48,712
crore, and a user base moving from 521 million to 549 million.

Three cells carry no category figure and say so. The rule for these pages is three
sources or an explicit mark.

## Why media and OTT differ

The decision is about the catalogue, not the app. Somebody installs a streaming app
because they want a particular title, series or match, and a store listing cannot
show a catalogue — it can show six screenshots. That mismatch, not listing quality,
produces the 1.1%.

It also means install rate is close to useless as a product signal here. The listing
converts the people who already decided, and the deciding happened on a poster, a
fixture list or a social clip somewhere else entirely.

Audio behaves differently again, and nobody publishes it separately. A music or
podcast app competes on catalogue too, but its sessions are habitual rather than
event-driven, so borrowing the entertainment figure for audio would misdescribe both.


Live sport breaks the pattern again. A fixture draws installs on a schedule nobody in
the product controls, and the install rate on match day says more about the fixture
than about the listing.
## The India layer

India is where this category's economics are decided, and its ARPU is genuinely
disputed. One source projects $40.44 for 2026, about ₹3,877, with subscription video at $24.58
per user, about ₹2,357. Another puts it at ₹85 to ₹95 a month, about $0.89 to $0.99 at the rate on file, which
annualises far below the first figure. A third gives $9.02, about ₹865.

Those three cannot be reconciled without each source's denominator and subscriber
definition, so this page states the disagreement rather than picking the convenient
figure. Anyone modelling an Indian OTT business from a single published ARPU is
modelling from one of three incompatible numbers.

The scale is not in dispute. The leading platform reports 100 million subscribers
and 500 million active users, and forecasts put it at 22% to 25% of India's OTT
revenue. Streaming advertising revenue reached $563.9 million in 2025, about ₹5,403
crore.

## What good looks like

Against 1.1%, the only useful comparison is your own history and your own traffic
source. A rising install rate on flat volume usually means narrower ranking rather
than a better listing.

The figure worth targeting instead is what happens after. Median revenue per install
at day 60 is $0.34 across categories, about ₹33, with $0.66 and above, roughly ₹63,
marking strong monetisation. For a catalogue product the first title somebody watches
sets that number, not the store page.


Measure the listing against your own catalogue cycle. A streaming app's install rate
moves with what released this month, so a month-on-month comparison describes the
slate rather than the store page.

Pair it with the churn that follows a title-driven install: those cohorts leave when
the season does.
## If you are below the median

Lead with the catalogue, not the interface. The screenshots that work in this
category show what is available, because that is the actual decision.

Then look at the first session: the title somebody came for has to be reachable
without a search.

<FromMyWork exp="exp-019">
Letting users share a vehicle report turned a utility check into an acquisition
channel. Shared reports carried 12.3% of new installs within four months, and those
users arrived with the intent already formed.
</FromMyWork>

<FromMyWork exp="exp-045">
Orchestrating triggers around policy expiry, compliance deadlines and observed
intent improved monetisation per active user. The gain came from the schedule rather
than the message.
</FromMyWork>


Then check the first screen after install. In this category the install is cheap and
the first title is everything, so a home screen that opens on a carousel rather than on
the reason somebody installed loses the session it just bought.
## How these figures were gathered

Each row names a source and a verification date. The figures are published reports,
not first-party store data.

The ARPU disagreement above is recorded as a contradiction on the research object
rather than smoothed over. Three sources give three incompatible figures for the same
market, and a page that picked one would be making an editorial choice look like a
fact.

Three rows read "no published figure", including audio as a separate category. The
standard is three sources or an explicit "insufficient public data" mark, and this
category clears it on market size and fails it on conversion.

Re-verification runs every 90 days, and every 45 for price.


Where a row describes the market rather than the listing, the column header says so.
This page carries more market data than conversion data, and that imbalance is the
honest state of what gets published for the category.""",
  ),

  dict(
    id="benchmark-0528", url="/benchmarks/arpu/b2b-saas", archetype="benchmark",
    hub="benchmarks", funnel="MOFU",
    title="SaaS ARPU Benchmarks by Segment and Contract Value (2026)",
    meta_description="SaaS ARPU benchmarks by segment: self-serve to enterprise monthly bands, the $250 median, and why ARPU and churn move together across contract sizes.",
    h1="SaaS ARPU benchmarks", primary_keyword="saas arpu",
    secondary_keywords=["b2b saas arpu benchmark", "arpu by segment"],
    entity_a="arpu", entity_b="b2b-saas",
    facts=["f-bm-28", "f-bm-29", "f-bm-30", "f-bm-31", "f-bm-32", "f-bm-33", "f-fx-08"],
    experience=["exp-037", "exp-048"],
    links=L(HUB, ("/glossary/arpu", "ARPU", "lateral"),
            ("/glossary/unit-economics", "unit economics", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/services/pricing-and-packaging/b2b-saas", "B2B SaaS pricing and packaging", "related"),
            ("/work-with-me", "an ARPU review", "bofu")),
    visuals=V("saas-arpu-table",
              "SaaS ARPU by segment: monthly bands from self-serve to enterprise, the 2026 median and its movement since 2024, median SMB ARPU, the ACV definitions of each segment, acquisition cost by segment and annual account churn by segment, each row carrying its source and verification date",
              "SaaS ARPU benchmarks by segment, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a b2b-saas arpu review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good ARPU for a B2B SaaS product?",
           a="The 2026 median is about $250 a month, up from $210 in 2024. The band that matters is your segment's: $20 to $50 self-serve, $50 to $200 SMB, $200 to $2,000 mid-market and $2,000 to $10,000-plus enterprise."),
      dict(q="Why does ARPU rise with segment rather than with product quality?",
           a="Because segment decides seat count, procurement and willingness to pay. The same product sold to a ten-person team and a ten-thousand-person enterprise produces ARPU two orders of magnitude apart, and almost none of that gap is the product."),
      dict(q="Can ARPU be raised without moving upmarket?",
           a="Yes, by changing what the price tracks. Pricing on consumption rather than seats raises ARPU inside the same segment when usage grows, which is why 37% of companies now run a hybrid model."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Reads ARPU and churn as one decision rather than two metrics: the segment that pays five times more also churns three times less and costs five times more to acquire, so an ARPU target without the matching churn and CAC assumption is half a plan.",
    block_coverage=bm_cover(["f-bm-29"], ["f-bm-28", "f-bm-29", "f-bm-30"],
                            ["f-bm-31", "f-bm-33"], ["f-bm-32"], ["f-bm-28"]),
    body="""
<AnswerBox>
SaaS ARPU benchmarks run by segment, not by product. Monthly ARPU sits at $20 to $50
self-serve, about ₹1,918 to ₹4,795, then $50 to $200 for SMB, $200 to $2,000
mid-market and $2,000 to $10,000-plus enterprise. The 2026 median is about $250 a
month, roughly ₹23,973, up from $210 in 2024.
</AnswerBox>

<FactTable
  id="saas-arpu-table"
  caption="SaaS ARPU, acquisition cost and churn, all by segment"
  columns={["Segment", "Monthly ARPU", "What comes with it"]}
  rows={[
    { cells: ["Self-serve to enterprise", "$20-50, $50-200, $200-2,000, $2,000-10,000+", "four bands, not a scale"], factId: "f-bm-28" },
    { cells: ["Median across B2B SaaS", "about $250, up from $210 in 2024", "the median describes few companies"], factId: "f-bm-29" },
    { cells: ["SMB median", "$55", "inside the $50-200 band"], factId: "f-bm-30" },
    { cells: ["Segment definition by ACV", "SMB under $10K, mid-market to $100K, enterprise above", "annual, not monthly"], factId: "f-bm-31" },
    { cells: ["Acquisition cost by segment", "under $15K ACV: $2,000-8,000", "$15K-100K ACV: $15,000-40,000"], factId: "f-bm-32" },
    { cells: ["Annual account churn by segment", "SMB 15%, mid-market 10%, enterprise 5%", "median"], factId: "f-bm-33" },
    { cells: ["Primary monetisation model, 686 tracked apps", "subscriptions 61%, advertising 26%", "model, not segment"], factId: "f-fx-08" },
  ]}
/>

## The numbers, and what is missing from them

Monthly ARPU bands run $20 to $50 self-serve, $50 to $200 SMB, $200 to $2,000
mid-market and $2,000 to $10,000-plus enterprise. The 2026 median across B2B SaaS is about
$250 a month, roughly ₹23,973, up from $210 in 2024. The SMB median specifically is
$55, about ₹5,274.

Notice that the overall median of $250 sits inside the mid-market band and outside
every other one. A median that describes one of four segments is not a benchmark for
the other three, which is the single most common misuse of this figure.

No India-specific B2B SaaS ARPU band is published, and no figure separates
usage-priced from seat-priced products. Both gaps matter for reading the bands, and
this page states them rather than estimating.

## Why segment decides ARPU

Seat count, procurement and willingness to pay all scale with the buyer. None of the
three is a property of the software. Sell the same product to a ten-person team and to
a ten-thousand-person enterprise and the ARPU differs by two orders of magnitude.

Churn moves the same way, in the opposite direction. Annual account churn runs a 15%
median for SMB, 10% for mid-market and 5% for enterprise. So the segment paying five
times more also stays three times longer. Read ARPU without that pairing and upmarket
moves look better than they are, while SMB looks worse.

Acquisition cost completes the picture. SMB products under $15,000 ACV, about ₹14.38 lakh,
carry $2,000 to $8,000 of CAC, roughly ₹1.92 lakh to ₹7.67 lakh. Mid-market products from $15,000 to
$100,000 ACV carry $15,000 to $40,000 of CAC, roughly ₹14.38 lakh to ₹38.36 lakh. So the segment with five times the ARPU costs roughly five times as much to
win, and the advantage shows up in tenure rather than in the first invoice.

## The India layer

No published ARPU band exists for Indian B2B SaaS specifically, and the useful
observation is structural rather than numerical.

An Indian SaaS company usually sells into the same ACV bands as everyone else while
carrying a lower cost base, which changes what a given ARPU can fund rather than what
it is. The segment definitions still apply: SMB under $10,000 ACV, about ₹9.59 lakh,
mid-market to $100,000, enterprise above. A company reading its own ARPU as low
because it sells to Indian SMBs has the band right and the implication wrong.


There is a second India-specific reading. An Indian product selling into the SMB
band abroad competes with local tools priced for local costs, which compresses the
achievable ARPU inside the band rather than moving the band.
## What good looks like

Inside your segment's band, and rising for a reason you can name. The $250 median,
about ₹23,973, is the wrong target unless you sell mid-market. For an SMB product the $55 median,
about ₹5,274, is the comparison. Clearing it by a wide margin usually means the
product moved segment without anyone deciding to.

Read ARPU with churn and CAC on the same page. An ARPU target without a matching
churn and acquisition-cost assumption is half a plan, and it is the half that looks
best in a board deck.

<FromMyWork exp="exp-037">
Pricing an integrations platform on execution volume and connector usage rather than
seats took it to roughly $60K MRR, about ₹57.53 lakh. The price then tracked what the
customer consumed instead of how many people logged in.
</FromMyWork>

## If you are below the median

Check which band you are actually in before concluding anything. Most products that
look below the median are mid-band for their segment and comparing against the wrong
one.

Then change what the price tracks rather than the number on the page. Moving from
seats to consumption raises ARPU inside the same segment when usage grows, and it
does so without a renegotiation.

<FromMyWork exp="exp-048">
One measurement framework spanning 20+ growth, retention and monetisation metrics
made executive decisions roughly twice as fast. Until then each team reported a number
defined its own way.
</FromMyWork>


Then check whether the low figure is a mix effect. A product with a large self-serve
tail and a small enterprise head reports an ARPU near the self-serve band while
earning most of its revenue at the top, and the fix is reporting rather than pricing.
## How these figures were gathered

Each row names its source and a verification date, from published benchmark reports.

The segment bands and the churn figures come from different sources with slightly
different ACV cut-offs. One defines SMB as under $10,000, about ₹9.59 lakh, and others
draw the line elsewhere. Each appears with its own definition rather than being forced
onto one scale, because the cut-off is the part that decides which band a company
reads itself into.

No India-specific band is published, so there is no India row. The standard for these
pages is three sources or an explicit "insufficient public data" mark.

Figures go back for re-checking every 90 days, and every 45 for price.


Re-verification runs every 90 days. Anything about price runs on a 45-day cycle,
which for this page means most of it.""",
  ),

  dict(
    id="benchmark-0577", url="/benchmarks/install-to-purchase/d2c-ecommerce",
    archetype="benchmark", hub="benchmarks", funnel="MOFU",
    title="Ecommerce Install to Purchase Benchmarks and Rates (2026)",
    meta_description="Ecommerce install to purchase benchmarks: the 1% to 2% typical band, retail against travel, and the Indian payment costs that decide whether it pays.",
    h1="Ecommerce install to purchase benchmarks",
    primary_keyword="ecommerce install to purchase",
    secondary_keywords=["install to purchase rate", "d2c app purchase conversion"],
    entity_a="install-to-purchase", entity_b="d2c-ecommerce",
    facts=["f-bm-14", "f-bm-15", "f-bm-17", "f-bm-03", "f-bm-21", "f-act-12"],
    experience=["exp-010", "exp-043"],
    links=L(HUB, ("/glossary/conversion-rate", "conversion rate", "lateral"),
            ("/benchmarks/retention/d2c-ecommerce", "ecommerce retention benchmarks", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            ("/work-with-me", "a conversion review", "bofu")),
    visuals=V("install-to-purchase-table",
              "Ecommerce install-to-purchase benchmarks: the typical band with retail and travel figures, a good mobile commerce conversion range, the regional download-to-paid gap, ecommerce retention for context, the cross-category day-1 and day-30 average and Indian payment gateway costs, each row carrying its source and verification date",
              "Install-to-purchase benchmarks, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a d2c-ecommerce purchase conversion review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What is a good install to purchase rate for an ecommerce app?",
           a="Most apps convert 1% to 2% of installs into a purchase, with retail at 1.38% and travel at 2.41%. For session-level conversion rather than install-level, 2% to 6% is the range depending on order value and purchase frequency."),
      dict(q="Why is install to purchase so much lower than site conversion?",
           a="Because the denominator includes everyone who installed, including people who never reached a product page. Install-to-purchase folds the whole funnel into one number, which makes it useful for media planning and poor for diagnosis."),
      dict(q="Does India convert worse on install to purchase?",
           a="No install-to-purchase figure is published for India specifically. What is published is that day-35 download-to-paid runs 2.6% in North America against 1.4% across India and South-East Asia, which is a subscription measure rather than a commerce one."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Treats install-to-purchase as a media-planning number rather than a diagnostic one, and prices the Indian version against gateway cost and tax, which decide whether a converted install is profitable at all.",
    block_coverage=bm_cover(["f-bm-14"], ["f-bm-14", "f-bm-15", "f-bm-21"],
                            ["f-bm-03"], ["f-bm-17", "f-act-12"], ["f-bm-15"]),
    body="""
<AnswerBox>
Ecommerce install to purchase runs 1% to 2% for most apps, with retail at 1.38% and
travel at 2.41%. Session-level conversion is a different measure and sits at 2% to
6%. The install-level number folds the entire funnel into one figure, which makes it
good for media planning and poor for diagnosis.
</AnswerBox>

<FactTable
  id="install-to-purchase-table"
  caption="Install to purchase, and the measures it gets confused with"
  columns={["Measure", "Figure", "What it counts"]}
  rows={[
    { cells: ["Install to purchase, typical", "1% to 2%", "every install"], factId: "f-bm-14" },
    { cells: ["Retail and travel, install to purchase", "1.38% and 2.41%", "every install"], factId: "f-bm-14" },
    { cells: ["Good mobile commerce conversion", "2% to 6%", "sessions, by order value"], factId: "f-bm-15" },
    { cells: ["Ecommerce retention, day 1 and day 30", "18% and 2%", "a cohort, not a funnel"], factId: "f-bm-03" },
    { cells: ["Cross-category day 1 and day 30 average", "25.3% and 5.7%", "31 categories"], factId: "f-bm-21" },
    { cells: ["India gateway cost, domestic and international", "2% plus 18% GST, and 3%", "on every converted order"], factId: "f-act-12" },
  ]}
/>

## The numbers, and what is missing from them

Most apps convert 1% to 2% of installs into a purchase. Retail sits at 1.38% and
travel at 2.41%. Session-level conversion, which is what most ecommerce teams quote
internally, runs 2% to 6% depending on order value, product type and purchase
frequency.

Those two do not compare, and teams compare them constantly. One counts every install,
including people who never saw a product page. The other counts sessions by people
already browsing. Move between the two without saying so and you can report an
improvement that is entirely definitional.

Nobody publishes an India-specific install-to-purchase figure. The row mentioning
India carries a gateway cost instead, which does exist publicly, and labels it.


A third measure gets mixed in as well: download-to-paid at a fixed window, which
counts subscriptions rather than orders. Three metrics, three denominators, one name.
## Why D2C and ecommerce differ

The purchase happens episodically and the alternative costs nothing. A user who needs
nothing this month will not buy however good the app is, and the mobile site sits
there without an install. So install-to-purchase measures how well the install timing
matched a need, as much as how well the product converts.

Retention compounds that. Ecommerce retains 18% at day 1 and 2% at day 30, against a
cross-category average of 25.3% and 5.7% over 31 categories. A category losing most
of its base in a month leaves a narrow window for the first purchase, and
install-to-purchase largely measures that window.


Payment method adds a step no other category carries in India. Cash on delivery
converts better at checkout and settles worse, so an app optimising install-to-purchase
without tracking prepaid share can raise the metric and lower the cash collected.
## The India layer

The Indian version of this question is not conversion, it is what survives
conversion. Domestic payments cost 2% plus 18% GST through a gateway, and
international card exports 3%, and both land on every order that converts.

Add the platform layer where it applies and a converted install can be unprofitable
at a perfectly normal conversion rate. That is why an Indian D2C team should price the
order before optimising the funnel: a 2% conversion rate on a margin that cannot carry
the payment cost is a worse problem than a 1% rate on one that can.

The closest published figure comes from subscriptions: day-35 download-to-paid runs
2.6% in North America against 1.4% across India and South-East Asia. That measures
something else, and the table says so.

## What good looks like

Inside 1% to 2% at install level, the app is behaving to category, and retail's 1.38%
is the closer comparison for most D2C products. At session level, 2% to 6% is the
range, and where you sit inside it tracks order value more than craft.

State the denominator next to the number every time. The single most useful discipline
here is refusing to quote a conversion rate without saying what it divides by.


Set the target per acquisition source. A discount-led install and an organic one
convert differently enough that a single install-to-purchase target will be wrong for
both, and the blended figure moves with media mix rather than with anything the product
team changed.

State the source split next to the number, every time.
## If you are below the median

Look for several leaks rather than one. The instinct is to find the step that loses
most users, and in practice the losses compound.

<FromMyWork exp="exp-010">
The insurance conversion rate was 0.007% and had seven separate causes, not one. Each
leak cut conversion by 60-80% on its own; compounded, they produced seven purchases
per hundred thousand users.
</FromMyWork>

Then check placement and sequencing before copy.

<FromMyWork exp="exp-043">
Both insurance lines moved by orders of magnitude once the
quote-to-redirect-to-purchase drop-offs were diagnosed: bike from about 10 a day to
6,800+, car from about 5 a day to 2,300+. The fix was CTA placement, partner
sequencing and context-led nudges rather than more traffic.
</FromMyWork>


Then check the first-order friction specifically. Shipping cost shown late, a forced
account creation and an unclear returns policy each remove a measurable share of first
orders, and none of them affects repeat orders at all.
## How these figures were gathered

Each row names a source, a verification date and what the figure counts. That third
column exists because this metric is defined inconsistently across sources, and the
definition moves the number more than performance does.

Nobody publishes an India-specific install-to-purchase figure, so the table carries no
India row for it. The standard for these pages is three sources or an explicit "insufficient
public data" mark, and the India cell fails it.

Re-verification runs every 90 days. Payment-cost figures run on a 45-day cycle,
because gateway pricing and tax treatment move faster than conversion does.


Where two sources define install-to-purchase differently, both appear with their
definition rather than being averaged. Averaging two different denominators produces a
number that describes neither population, which is worse than reporting a range.""",
  ),

  dict(
    id="benchmark-0489", url="/benchmarks/trial-to-paid-conversion/b2b-saas",
    archetype="benchmark", hub="benchmarks", funnel="MOFU",
    title="SaaS Trial to Paid Conversion Benchmarks by Length (2026)",
    meta_description="SaaS trial to paid conversion: cancellation by trial length, the business category's download-to-trial lead, and churn by segment after it converts.",
    h1="SaaS trial to paid conversion benchmarks",
    primary_keyword="saas trial to paid conversion",
    secondary_keywords=["b2b trial conversion benchmark", "saas free trial conversion"],
    entity_a="trial-to-paid-conversion", entity_b="b2b-saas",
    facts=["f-bm-18", "f-bm-19", "f-bm-12", "f-bm-07", "f-bm-33", "f-svc-07"],
    experience=["exp-005", "exp-039"],
    links=L(HUB, ("/glossary/trial-to-paid-conversion", "trial-to-paid conversion", "lateral"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/services/pricing-and-packaging/b2b-saas", "B2B SaaS pricing and packaging", "related"),
            ("/work-with-me", "a trial conversion review", "bofu")),
    visuals=V("saas-trial-table",
              "SaaS trial conversion benchmarks: the business category's download-to-trial rank, cancellation rates by trial length including day-zero cancellations, the category's page-view-to-install rate, day-30 retention, annual account churn by segment and the share of software spend still on seats, each row carrying its source and verification date",
              "SaaS trial conversion benchmarks, each row sourced. Verified 1 October 2026."),
    cta={"primary": {"label": "Get a b2b-saas trial conversion review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="How long should a B2B SaaS trial be?",
           a="Longer trials surface more rejection: a three-day trial averages 26% cancellations against 51% for a thirty-day trial, and 31.1% of thirty-day trials cancel on day zero. The day-zero figure is the one worth acting on."),
      dict(q="Why do a third of long trials cancel immediately?",
           a="Because a thirty-day trial invites a user to start it and decide later, and deciding later often means cancelling now to avoid the charge. The length changes the decision's timing rather than its outcome."),
      dict(q="Does a high trial start rate predict conversion?",
           a="Not reliably. The business category records the highest download-to-trial rate of any category, which says intent is high at the top. Conversion depends on whether the trial reaches the moment the product proves itself."),
    ],
    schema_types=BM_SCHEMA,
    unique_value="Separates when a trial cancels from whether it converts, using the day-zero cancellation figure that trial-length advice ignores, and carries churn by segment so a conversion target implies a tenure assumption.",
    block_coverage=bm_cover(["f-bm-19"], ["f-bm-19", "f-bm-18", "f-bm-12"],
                            ["f-bm-07"], ["f-svc-07"], ["f-bm-33"]),
    body="""
<AnswerBox>
SaaS trial to paid conversion depends on length in a way most advice gets backwards.
A three-day trial averages 26% cancellations against 51% for a thirty-day trial, and
31.1% of thirty-day trials cancel on day zero. Length changes when the decision
happens more than whether it goes your way.
</AnswerBox>

<FactTable
  id="saas-trial-table"
  caption="Trial conversion, and what sits either side of it"
  columns={["Measure", "Figure", "Note"]}
  rows={[
    { cells: ["Cancellation by trial length", "26% at three days, 51% at thirty", "longer surfaces more"], factId: "f-bm-19" },
    { cells: ["Day-zero cancellation, thirty-day trial", "31.1%", "most of the thirty-day gap"], factId: "f-bm-19" },
    { cells: ["Download-to-trial rate by category", "business is highest", "a rank, not a rate"], factId: "f-bm-18" },
    { cells: ["App Store page view to install, business", "about 66.7%", "intent arrives early"], factId: "f-bm-12" },
    { cells: ["Day 30 retention, B2B and productivity", "20% to 32%", "average iOS app 5.3%"], factId: "f-bm-07" },
    { cells: ["Annual account churn by segment", "SMB 15%, mid-market 10%, enterprise 5%", "after conversion"], factId: "f-bm-33" },
  ]}
/>

## The numbers, and what is missing from them

A three-day trial averages 26% cancellations and a thirty-day trial 51%. The figure
that matters inside that gap is day zero: 31.1% of thirty-day trials cancel on the
day they start. So most of the extra cancellation a long trial reports happens before
the user has used anything.

No published figure gives trial-to-paid conversion for B2B SaaS as a rate. The
download-to-trial row carries a rank, because a rank is what the source reports, and
the page says so rather than converting a rank into an implied percentage.

That absence is worth stating plainly: this page has cancellation data, intent data
and post-conversion churn data, and no clean B2B trial-to-paid rate. The standard for
these pages is three sources or an explicit mark, and that measure fails it.

## Why B2B SaaS trials differ

Intent arrives before the trial. Business apps convert about 66.7% of App Store page
views to installs and record the highest download-to-trial rate of any category, so
the people starting a B2B trial have already named their problem.

That changes what a trial is for. In a consumer product the trial creates desire; in
B2B it verifies a decision, usually against a checklist somebody else will review.
The trial either reaches the moment the product proves itself against that checklist
or it does not, and length only matters insofar as it allows that moment to happen.

Day-zero cancellation fits the same pattern. A user who starts a thirty-day trial and
cancels immediately has not rejected the product; they have removed the risk of
forgetting. Reading that as a conversion failure sends teams to fix the wrong thing.

## The India layer

No India-specific B2B trial conversion figure is published.

What applies is the pricing model underneath the trial. Seat-based contracts still
account for 65% to 75% of software spend against 4% to 6% for consumption, and a trial
on a seat-based plan asks the buyer to predict headcount, while a trial on a
consumption plan asks them to predict usage. For an Indian company selling abroad the
second is usually the easier question and the harder invoice, and the trial's design
has to pick one.


The other India-specific factor is the invoice. A trial converting into a dollar
invoice from an Indian entity carries a different payment cost and a different tax
treatment than a rupee one, and the trial's end state has to account for both.
## What good looks like

Judge a trial by the share that reaches the proving moment, not by the share that
converts. Those two track each other closely, and only the first is actionable.

Then set the length from time-to-value and nothing else. If the product proves itself
in a day, a thirty-day trial adds a month of forgetting and a 31.1% day-zero
cancellation rate for no gain. Day 30 retention of 20% to 32% for B2B products says
the category holds users once they arrive, so the work sits in the first session.


Set the trial's length from the slowest buyer who still matters, not from the
average. In B2B the evaluation usually involves somebody who was not in the first
session, and a trial that expires before that person looks at it converts nobody.
## If you are below the median

Reframe what the trial asks for before you change its length.

<FromMyWork exp="exp-005">
Asking for a bank statement upfront got 35% compliance. Showing a preliminary
eligibility range first, then asking for the statement to reveal the exact offer, took
it to 71% — the same ask, reframed from a compliance step into a reward.
</FromMyWork>

Then make the trial's failures visible to the user. In B2B the most common silent
trial killer is something that broke and looked like the product not working.

<FromMyWork exp="exp-039">
Making failures debuggable by the customer cut sales and support effort about 25%.
Idempotency, surfaced errors and retry mechanics meant customers resolved their own
breakages instead of churning quietly.
</FromMyWork>

Remember what conversion buys. Annual account churn runs 15% for SMB, 10% for
mid-market and 5% for enterprise, so a conversion target implies a tenure assumption
whether or not anyone wrote it down.

## How these figures were gathered

Each row names its source, the date somebody last checked it and what the figure
counts. The third column matters here because "trial conversion" names at least three
different measures across sources.

One row carries a rank rather than a rate, and the page says so. Converting a rank
into a number would be inventing precision the source does not have.

No clean B2B trial-to-paid rate is published and no India figure exists, so neither
appears. Re-verification runs every 90 days, and every 45 for price.


Where two sources define a trial differently — opt-in against credit-card-required —
both appear with the definition stated. That distinction moves conversion more than
any design choice in the trial itself.

Figures go back for re-checking on the usual 90-day cycle.""",
  ),
]
