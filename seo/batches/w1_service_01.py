#!/usr/bin/env python3
"""Batch w1-service-01 — the five service pages and one tool that redirects point at.

These are the remaining non-hub destinations `pnpm launch:check` names outside
/case-studies, /benchmarks and /playbooks: two service pages, three industry
variants and /tools/monetization-health-score.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402
from w1_hub_01 import POOL as P3, cover  # noqa: E402

CXO = ("https://www.cxodigitalpulse.com/phonepes-upi-scale-trails-paytms-monetisation-in-fy26-results/",
       "PhonePe's UPI Scale Trails Paytm's Monetisation in FY26 Results",
       "cxodigitalpulse.com", "2026")
TFN = ("https://tfnmarkets.com/insights/phonepe-ipo-india-2026",
       "PhonePe IPO India 2026: Valuation, OFS Structure, NPCI Cap Risk",
       "tfnmarkets.com", "2026")
GU = ("https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026",
      "The 2026 State of B2B SaaS and AI Monetization Report",
      "growthunhinged.com", "2026")
FLX = ("https://www.flexera.com/blog/saas-management/from-seats-to-consumption-why-saas-pricing-has-entered-its-hybrid-era/",
       "From seats to consumption: why SaaS pricing has entered its hybrid era",
       "flexera.com", "2026")

NEW = [
    fact("f-svc-01", "PhonePe earns merchant interchange of 0.5% to 1.1% on eligible flows, with lending distribution at 11.55% of first-half FY26 revenue",
         "0.5-1.1", "%", TFN,
         "PhonePe's revenue comes from merchant interchange (0.5%-1.1% on eligible flows), device "
         "subscriptions, bill-payment commissions and lending distribution at 11.55% of H1 FY26 revenue.",
         False),
    fact("f-svc-02", "UPI runs on zero merchant discount rate as a national policy decision", "0", "%", TFN,
         "UPI operates on zero MDR, a policy decision made at the national level, which constrains "
         "direct payment transaction monetization.", False),
    fact("f-svc-03", "India's leading UPI app earns roughly 112 rupees of gross revenue per registered user per year",
         "112", "INR", TFN,
         "The category leader generates approximately Rs 112 of gross revenue per registered user per "
         "year.", False),
    fact("f-svc-04", "PhonePe's FY26 operating revenue rose 11% to 7,920 crore rupees with a net loss of 2,792 crore, against Paytm's 8,437 crore revenue and 552 crore profit",
         "7920", "INR crore", CXO,
         "PhonePe revenue rose 11% to Rs 7,920 crore in FY26, net loss Rs 2,792 crore; Paytm Rs 8,437 "
         "crore revenue, Rs 552 crore profit."),
    fact("f-svc-05", "37% of B2B software companies now run a hybrid pricing model, up from 25% twelve months earlier",
         "37", "%", GU,
         "About two-in-five participants (37%) said they have a hybrid pricing model, up from 25% "
         "twelve months ago."),
    fact("f-svc-06", "Chargebee reports 43% of companies using hybrid pricing models, projected to reach 61% by the end of 2026",
         "43", "%", ("https://www.getmonetizely.com/blogs/the-2026-guide-to-saas-ai-and-agentic-pricing-models",
                     "The 2026 Guide to SaaS, AI and Agentic Pricing Models",
                     "getmonetizely.com", "2026"),
         "Chargebee's State of Subscriptions Report: 43% of companies now use hybrid models, with "
         "adoption projected to reach 61% by end of 2026.", False),
    fact("f-svc-07", "Seat-based contracts still account for 65% to 75% of software spend while consumption-based pricing sits at 4% to 6%",
         "65-75", "%", FLX,
         "Seat-based contracts account for 65-75% of spend, and consumption-based pricing is stuck at "
         "4-6%.", False),
    fact("f-svc-08", "Asked which pricing model investors prefer, 35% named hybrid, 26% outcome-based and 24% usage-based, against 10% flat-fee and 5% seat-based",
         "35", "%", GU,
         "Asked which pricing model investors prefer: usage-based 24%, outcome-based 26%, hybrid 35%, "
         "flat-fee 10%, seat-based 5%."),
]

POOL = {**P1, **P2, **P3}
POOL.update({f["fact_id"]: f for f in NEW})

SVC_SCHEMA = ["Service", "Person", "BreadcrumbList", "FAQPage"]


def svc_cover(answer, who, six, deliver, method, proof, price, variants, tools, faq, cta):
    return {"answer_box": answer, "who_this_is_for": who, "first_six_weeks": six,
            "deliverables": deliver, "method": method, "proof": proof,
            "pricing_anchors": price, "industry_variants": variants,
            "tools_and_templates": tools, "faq": faq, "cta": cta}


def ind_cover(answer, diff, apps, changes, bench, price, faq, cta):
    return {"answer_box": answer, "whats_different_about_industry": diff,
            "named_apps": apps, "how_the_engagement_changes": changes,
            "benchmark_card": bench, "pricing_anchors": price, "faq": faq, "cta": cta}


PAGES = [
  dict(
    id="service-0015", url="/services/app-monetization-strategy", archetype="service",
    hub="services", funnel="BOFU",
    title="App Monetization Strategy Consulting: Scope and Price",
    meta_description="A six-week engagement that sets the monetization model, the paywall and the price. Scope, deliverables and cost stated up front, in rupees and dollars.",
    h1="App monetization strategy consulting",
    primary_keyword="app monetization strategy",
    secondary_keywords=["mobile app monetization consulting", "app monetization consultant"],
    entity_a="app-monetization-strategy",
    facts=["f-svc-01", "f-svc-02", "f-svc-03", "f-hub-03", "f-act-11", "f-act-20"],
    experience=["exp-010", "exp-043"],
    links=L(("/case-studies/carinfo-motor-insurance-monetization", "the motor insurance monetisation case study", "proof"),
            ("/benchmarks/trial-to-paid-conversion", "trial-to-paid benchmarks", "reference"),
            ("/services", "the services", "hub"),
            ("/glossary/paywall", "paywall", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("monetization-inputs",
              "Six inputs a monetization strategy has to price against: India's in-app purchase spending and its projected level, the zero merchant discount rate on UPI, merchant interchange and lending distribution shares at the category leader, gross revenue per registered user, Apple's core technology commission and Google Play's standard rate, each row carrying its source and verification date",
              "What a monetization model in India is priced against. Verified 30 September 2026."),
    cta={"primary": {"label": "Start an app monetization strategy engagement", "href": "/work-with-me"},
         "secondary": {"label": "Run the monetisation health score", "href": "/tools/monetization-health-score"}},
    faq=[
      dict(q="What does an app monetization strategy engagement cost?",
           a="₹4,30,000, or $4,500, for the six-week engagement, at the exchange rate recorded in config and re-checked on every build. Industry variants are the same price; the scope differs, not the fee."),
      dict(q="How long before anything changes in the product?",
           a="The first shippable change lands in week three, and it is usually a measurement fix rather than a price change. Pricing decisions made before the funnel is measurable get attributed to the wrong thing."),
      dict(q="Do you work on ad-funded apps?",
           a="Yes, and often the answer is a hybrid rather than a switch. Where UPI runs at zero merchant discount rate, payments cannot carry the model on their own and the revenue has to come from distribution or subscription."),
    ],
    schema_types=SVC_SCHEMA,
    unique_value="Prices the engagement in public and builds the model against India's specific constraints — zero-MDR UPI, roughly ₹112 of annual revenue per registered user at the category leader, store commissions — rather than applying a Western subscription template.",
    block_coverage=svc_cover(["f-hub-03"], ["f-svc-03"], ["f-svc-02"], ["f-act-20"],
                             ["f-svc-01"], ["f-svc-03"], ["f-act-11"], ["f-act-20"],
                             ["f-act-11"], ["f-svc-02"], ["f-hub-03"]),
    body="""
<AnswerBox>
App monetization strategy, as a six-week engagement that ends with a chosen model,
a paywall design and a price. It costs ₹4,30,000, or $4,500. Indian in-app
purchase spending passed $1 billion in 2025, about ₹9,589 crore, and most products
in that market have never tested a price.
</AnswerBox>

<FactTable
  id="monetization-inputs"
  caption="What a monetization model in India is priced against"
  columns={["Input", "Figure"]}
  rows={[
    { cells: ["India in-app purchase spending, 2025 and projected 2026", "over $1 billion, rising to $1.25 billion"], factId: "f-hub-03" },
    { cells: ["UPI merchant discount rate", "zero, by national policy"], factId: "f-svc-02" },
    { cells: ["Category leader: interchange, and lending share of revenue", "0.5% to 1.1%, and 11.55%"], factId: "f-svc-01" },
    { cells: ["Gross revenue per registered user per year, category leader", "about ₹112 (about $1.17)"], factId: "f-svc-03" },
    { cells: ["Apple core technology commission from January 2026", "5% of digital-goods revenue"], factId: "f-act-11" },
    { cells: ["Google Play standard rate, 2026", "10% on the first $1M, 20% above"], factId: "f-act-20" },
  ]}
/>

## Who this is for

Products with real usage and no working revenue model, or with a model somebody
copied rather than chose. The typical starting point is six figures of monthly
actives, a paywall nobody has tested, and a price set by looking at a competitor's
screenshot.

It suits teams who already accept an uncomfortable answer. A monetization
engagement that cannot conclude "charge more" or "stop charging for this" is a
branding exercise. Most of the value in the six weeks comes from
narrowing what to charge for, and narrowing means dropping something.

It does not suit pre-launch products. Monetization choices need traffic to test
against, and a model built on projections produces a document rather than a
decision. It also does not suit products whose real constraint is retention. A price change
on a leaking base moves revenue for one month and then stops. Teams usually misread
that month as a win. If the cohort curve has never flattened,
the retention engagement comes first and this one waits.

## The first six weeks

Weeks one and two go to measurement, and that is not a warm-up. Most engagements
begin by working out which existing numbers can be relied on, and the answer is
usually fewer than the team expects. Conversion and churn most often carry a
different denominator than the model assumes, so a plan resting on them inherits the
error.

Week three ships something. Normally an instrumentation fix or a paywall placement
test rather than a price change. Change the price before the funnel reads cleanly
and the result arrives with nothing to attribute it to. Shipping in week three also tests
whether the organisation can ship at all, which is information worth having early.

Weeks four and five run the pricing and packaging work against live traffic. That
means real tests with pre-registered thresholds, not a survey. Week six sets the
model, the price points in both currencies, and the small set of numbers that will
say whether the model held. The engagement ends with a decision and a way to check
it, which is a narrower promise than a strategy deck and a more useful one.

## What you get

A written monetization model with the reasoning attached, not only the conclusion.
The reasoning matters because the conclusion needs revisiting within a year.
A conclusion without its argument cannot be revisited, only thrown out.

Price points in rupees and dollars, with the exchange rate and the date recorded
against them. A paywall specification covering placement, the gate, the copy and the fallback for
users who decline. A twelve-month revenue model that keeps its assumptions in a
separate list, so each one takes an argument on its own rather than as part of a
bundle.

Then the measurement plan: which numbers to watch weekly, which to ignore however
much they move, and the threshold at which the model should be revisited rather
than defended. That last item is the one clients use most, and it is the one no
strategy document normally contains.

## How the work is done

Diagnosis before design, and store economics before either, because store
economics are fixed and large. Google Play takes 10% on the first $1M of annual
revenue, roughly ₹9.59 crore, and 20% above it. Apple has added a 5% core
technology commission on digital-goods revenue from January 2026. Those numbers
set the ceiling on every model that runs through an app store. A model that enters
the spreadsheet without them is wrong by exactly that much.

Then the market constraint, which in India is specific and structural. Payments
cannot carry a model by themselves, because UPI runs at zero merchant discount
rate as a national policy decision rather than a competitive one. The category
leader earns about ₹112 of gross revenue per registered user per year, roughly
$1.17, with merchant interchange of 0.5% to 1.1% on eligible flows and lending
distribution at 11.55% of half-year revenue.

That shape — thin payments, revenue arriving through distribution — is where most
Indian consumer products end up. Designing for it in month three rather than year
three is most of what this engagement is worth, because the alternative is
building a subscription business in a market whose payment rail earns nothing.

## Proof

<FromMyWork exp="exp-010">
The insurance conversion rate was 0.007% and had seven separate causes, not one.
Each leak cut conversion by 60-80% on its own; compounded, they produced seven
purchases per hundred thousand users.
</FromMyWork>

Seven compounding leaks is the normal case rather than an extreme one, and it is
why the diagnosis phase is not optional. Ranking the leaks and fixing the largest
would have moved that funnel by very little.

<FromMyWork exp="exp-043">
Both insurance lines moved by orders of magnitude once the
quote-to-redirect-to-purchase drop-offs were diagnosed: bike from about 10 a day
to 6,800+, car from about 5 a day to 2,300+. The fix was CTA placement, partner
sequencing and context-led nudges rather than more traffic.
</FromMyWork>

Neither of those outcomes came from a better price. They came from removing the
reasons a user who had already decided could not complete.

## Price

₹4,30,000, or $4,500, for the six weeks. The rate is recorded in config and a
build of this site fails if the pair drifts more than 3% from it, which is a small
discipline that stops Indian buyers being quoted a stale number.

Industry variants cost the same. The scope differs rather than the fee, because
the work is the same length whether the compliance surface is lending or logistics.
There is no separate discovery fee, no charge for the proposal, and no retainer
attached to the outcome.

If the diagnosis concludes that the constraint is retention or activation rather
than monetization, that is the finding and the engagement says so. Repricing a
product that loses its users is a way of spending a quarter to learn something a
cohort report would have said in a week.

## By industry

Fintech, marketplaces, ed-tech, health, D2C, travel, B2B SaaS and media each have
a variant. A variant exists only where the mechanics genuinely differ, which means
compliance surface, take rate or payment rail — not a different set of examples.

Fintech carries regulatory constraints on what can be charged and when, which
narrows the model before design starts. Marketplaces carry a take rate that sets the
ceiling before the product does, so the work runs on net rather than gross. Media
carries content-cycle churn that makes annual plans behave differently from the same
plan in a utility product. Ed-tech carries a seasonal cycle that makes a
twelve-month model read wrong if it starts in the wrong quarter.

Where an industry would only change the illustrations, there is no page for it. A
generic industry overview looks thorough and says less than the parent page.

## Tools and templates

The monetisation health score narrows the likely constraint in about ten minutes,
before any conversation, and it is worth running before you decide whether to book
anything. The app store fee calculator prices commission against your own revenue
band, including the 5% core technology commission where it applies, so the ceiling
is visible before the model is built.

Both are free and neither asks for an email. Both show their formulas, so you can check the
output rather than believe it. That matters more for a fee calculator than for most
tools, because commission rules moved twice in 2026 and a calculator hiding its
arithmetic cannot be audited against the current ones.

If the score says your constraint sits outside monetization, the honest next step is
the engagement that addresses the constraint you actually have. Several enquiries a
quarter end that way, and saying so early costs a fee and saves a client a
quarter.
""",
  ),

  dict(
    id="service-0018", url="/services/retention-and-lifecycle", archetype="service",
    hub="services", funnel="BOFU",
    title="User Retention Consulting and Lifecycle Design",
    meta_description="A six-week engagement on retention curves, lifecycle triggers and failed-payment recovery. Scope, deliverables and cost stated up front.",
    h1="User retention consulting and lifecycle design",
    primary_keyword="user retention consulting",
    secondary_keywords=["lifecycle marketing consultant", "retention consulting india"],
    entity_a="retention-and-lifecycle",
    facts=["f-unit-14", "f-act-18", "f-hub-08", "f-hub-09", "f-svc-04", "f-unit-27"],
    experience=["exp-045", "exp-014"],
    links=L(("/case-studies/growth-loop-repeat-users", "the repeat-user growth loop case study", "proof"),
            ("/benchmarks/retention", "retention benchmarks", "reference"),
            ("/services", "the services", "hub"),
            ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("retention-levers",
              "Six levers a retention engagement works through: failed-payment recovery by intervention, the lifespan of a withdrawn Indian membership programme, the average and median lift on winning experiments, median conversion and revenue uplift on winners, two Indian fintech revenue and profit outcomes and the card failure spike after India's 2021 rules, each row carrying its source and verification date",
              "The levers, with their realistic sizes. Verified 30 September 2026."),
    cta={"primary": {"label": "Start a retention and lifecycle engagement", "href": "/work-with-me"},
         "secondary": {"label": "See the retention benchmarks", "href": "/benchmarks/retention"}},
    faq=[
      dict(q="What does a retention and lifecycle engagement cost?",
           a="₹4,30,000, or $4,500, for six weeks, at the rate recorded in config. The scope covers the curve, the lifecycle triggers and the collection layer, because the third is where a surprising share of churn lives."),
      dict(q="Where does a retention engagement usually start?",
           a="With collection, not messaging. Smart retry recovers about 40% of failed payments and a card updater another 25%, and none of that needs a product change or a new campaign."),
      dict(q="Is this lifecycle marketing or product work?",
           a="Both, and the split is the point. Timing beats copy in most lifecycle work, and timing is a product and data problem rather than a creative one."),
    ],
    schema_types=SVC_SCHEMA,
    unique_value="Treats collection as the first retention lever rather than the last, with the published recovery rates by intervention, and sizes every proposed lever against the median 6.1% lift a winning experiment actually delivers.",
    block_coverage=svc_cover(["f-hub-08"], ["f-act-18"], ["f-unit-14"], ["f-hub-09"],
                             ["f-unit-27"], ["f-svc-04"], ["f-hub-08"], ["f-act-18"],
                             ["f-unit-14"], ["f-unit-27"], ["f-hub-09"]),
    body="""
<AnswerBox>
User retention consulting, as a six-week engagement covering the cohort curve, the
lifecycle triggers and the collection layer. It costs ₹4,30,000, or $4,500.
Expect ordinary sizes: winning experiments move a median 6.1%, and the largest
recoverable block is usually failed payments rather than lost interest.
</AnswerBox>

<FactTable
  id="retention-levers"
  caption="The levers, with their realistic sizes"
  columns={["Lever", "Published effect"]}
  rows={[
    { cells: ["Failed-payment recovery: retry / card updater / email", "40% / 25% / plus 15% to 20%"], factId: "f-unit-14" },
    { cells: ["Lift on winning experiments", "8.4% average, 6.1% median"], factId: "f-hub-08" },
    { cells: ["Median uplift on winners, conversion and revenue per visitor", "1.88% and 2.77%"], factId: "f-hub-09" },
    { cells: ["India card subscription failure after the 2021 rules", "above 20% in some categories"], factId: "f-unit-27" },
    { cells: ["A paid membership withdrawn after 14 months", "Zepto Pass, February 2024 to April 2025"], factId: "f-act-18" },
    { cells: ["Two Indian fintech outcomes, FY26", "₹7,920 crore revenue at a ₹2,792 crore loss, against ₹8,437 crore at ₹552 crore profit"], factId: "f-svc-04" },
  ]}
/>

## Who this is for

Subscription and transactional products where somebody has measured the curve and
it does not flatten, or where nobody has measured it as cohorts at all. A paying
base normally exists already, because retention work without payers is activation
work under a different name.

The engagement suits teams who can act on an unglamorous answer. A large share of
what looks like churn turns out to be collection, and fixing collection is
unexciting, mechanical and the highest-return work available. If the team needs the
answer to be a campaign, the money is better spent elsewhere.

It does not suit products still searching for a proposition. A paid membership
withdrawn after fourteen months, as Zepto Pass was between February 2024 and April
2025, is rarely a retention execution failure. It is a proposition failure, and
lifecycle work cannot reach one. Watch for a curve that falls at the same rate
whichever cohort you look at. That pattern says the product has not yet found the
group it keeps.

## The first six weeks

Week one rebuilds the cohort report with closed cohorts only, then splits decided
churn from failed payments. That single split changes the plan more often than
anything else in the engagement. The two have completely different fixes, and most
dashboards report them as one number.

Weeks two and three fix collection. These fixes need no product change and no new
creative, which makes them the fastest available return and the reason they come
first. Smart retry, a card updater and a dunning sequence all sit in configuration, and
each has a published effect size.

Weeks four and five build the trigger set around observed intent and real
deadlines rather than a calendar. The work here is choosing the event and the
delay, not writing the message. Week six sets the measurement and the thresholds
that will say whether it held, including the threshold at which a trigger should be
retired rather than rewritten.

## What you get

A cohort report you can maintain after the engagement ends, with its definitions
written down beside it so the next person to open it reads the same numbers. A
churn decomposition separating cancellations from collection failures, sized, so
the recoverable share is a figure rather than an intuition.

A trigger specification listing the event, the timing and the expected effect for
each one. Each expected effect sits against a median 1.88% conversion uplift and a 2.77%
revenue-per-visitor uplift rather than a hoped-for double. That makes the set easier
to defend in a planning meeting and harder to oversell.

Plus a list of the things not worth doing, which on most products runs longer than
the list of things that are. That list is what stops a lifecycle programme growing
into forty campaigns nobody can attribute.

## How the work is done

Collection first, because the numbers are unambiguous. Smart retry recovers about
40% of failed payments, a card updater about 25%, and dunning email adds 15% to 20%
on top of those. In India this matters more than elsewhere: the 2021 card rules
pushed subscription failure above 20% in some categories, and every one of those
failures appears in a retention dashboard as a customer choosing to leave.

Then timing. Teams rewrite most lifecycle programmes when they should reschedule
them. A trigger fired at the moment of real need outperforms better copy
fired at a convenient hour, and that makes it a data and product problem rather
than a creative one. The practical consequence is that the engagement spends its
time on event definitions and delays rather than on message testing.

Experiment sizing runs underneath both. Winning experiments move a median 6.1%,
which means a retention plan built from four changes each expected to deliver 30%
is not a plan. Sizing honestly changes which changes get attempted, and it changes
how long the team expects to wait before reading a result.

## Proof

<FromMyWork exp="exp-045">
Orchestrating triggers around policy expiry, compliance deadlines and observed
intent improved monetisation per active user. The gain came from the schedule
rather than the message.
</FromMyWork>

<FromMyWork exp="exp-014">
Timing beat messaging. A user whose insurance expired three days ago converted at
4.8 times the rate of one with 60 days remaining, on identical copy.
</FromMyWork>

Identical copy is the important part of that second result. The same words at the
wrong moment produced a fifth of the conversion, a larger effect than any copy test
in that programme produced.

Both results point the same way. The schedule carried the outcome, and a schedule
comes out of event data rather than a content calendar. That is why the
engagement spends weeks four and five on event definitions and delays, and almost
none of its time on message variants.

## Price

₹4,30,000, or $4,500, for six weeks, at the rate recorded in config. Collection
work, the cohort rebuild and the trigger set all sit inside that scope. There is no
per-campaign fee, because the number of campaigns is not the deliverable and
charging for it would reward the wrong thing.

Two Indian fintech results from FY26 make the case for scope over volume. One
produced ₹7,920 crore of revenue, about $826 million, at a ₹2,792 crore loss,
roughly $291 million. The other produced ₹8,437 crore, about $880 million, at a
₹552 crore profit, roughly $58 million.

Similar revenue, opposite outcomes. Retention economics rather than activity account
for most of that gap, and neither company got there by running more campaigns. That
is the argument for buying a scope rather than a volume: the work that closes the
gap is a handful of structural fixes, and a per-campaign fee would pay for the
opposite.

## By industry

Fintech, media, ed-tech and D2C variants exist where the churn mechanics actually
differ. Insurance and lending churn against deadlines, so the trigger set runs on dates.
Media churns against content gaps, so it runs on catalogue events. D2C churns against
delivery, so it starts after fulfilment rather than after purchase. Each of those
changes which table the triggers read from, not only which words they carry.

Fintech also carries a mandate layer nothing else does. That is why the India variant
of this engagement opens at the payment rail rather than the funnel, and why its
first week often produces a larger number than its last.

Where an industry would only change the examples, there is no variant. A generic
industry page is a way of appearing thorough while saying less than the parent.

## Tools and templates

The retention curve projector fits a curve to your own cohort data and shows where
it flattens, which is the question a single retention number cannot answer. The
churn-to-lifetime calculator converts a monthly rate into an expected tenure
without assuming the rate holds, because assuming it holds is what makes most
lifetime-value models optimistic.

Both are free, both show their formulas, and neither asks for an email. Running the
projector on your own data before a conversation usually shortens the first week of
the engagement by several days, because the cohort rebuild starts from something
rather than nothing.

The churn-to-lifetime calculator is also the fastest way to sanity-check a lifetime
value figure somebody else produced. If the two disagree by more than a little, the
difference is almost always a churn rate that was measured over one window and
applied to another.
""",
  ),
  dict(
    id="service-industry-0027", url="/services/app-monetization-strategy/fintech",
    archetype="service-industry", hub="services", funnel="BOFU", not_affiliated=True,
    title="Fintech App Monetization Consultant: India and Global",
    meta_description="Monetizing a fintech app when the payment rail earns nothing. What changes, which Indian players prove it, and what the engagement covers.",
    h1="Fintech app monetization consultant",
    primary_keyword="fintech app monetization consultant",
    secondary_keywords=["fintech monetization strategy", "india fintech revenue model"],
    entity_a="fintech", entity_b="app-monetization-strategy",
    facts=["f-svc-01", "f-svc-02", "f-svc-03", "f-svc-04", "f-unit-25", "f-act-12"],
    experience=["exp-040", "exp-042"],
    links=L(("/case-studies/loanwiser-credit-routing", "the credit routing case study", "proof"),
            ("/benchmarks/retention/fintech", "fintech retention benchmarks", "reference"),
            ("/services", "the services", "hub"),
            ("/services/app-monetization-strategy", "the parent engagement", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("fintech-monetization",
              "Six figures that shape a fintech monetization model in India: the zero merchant discount rate on UPI, merchant interchange and lending distribution share at the category leader, gross revenue per registered user per year, two FY26 revenue and profit outcomes, monthly UPI Autopay mandate volume and Indian payment gateway costs, each row carrying its source and verification date",
              "What a fintech model in India has to work around. Verified 30 September 2026."),
    cta={"primary": {"label": "Start a fintech monetization engagement", "href": "/work-with-me"},
         "secondary": {"label": "See the parent engagement", "href": "/services/app-monetization-strategy"}},
    faq=[
      dict(q="Why can a fintech app not monetise payments directly in India?",
           a="Because UPI runs at zero merchant discount rate as a national policy decision. Payment volume produces scale and data rather than revenue, so the model has to earn somewhere adjacent."),
      dict(q="Where does fintech revenue actually come from?",
           a="Distribution, mostly. At the category leader, lending distribution accounted for 11.55% of first-half FY26 revenue, with merchant interchange of 0.5% to 1.1% on eligible flows alongside subscriptions and bill-payment commissions."),
      dict(q="Does this engagement cover regulatory constraints?",
           a="It has to. What can be charged, when consent is required and how a mandate behaves are inputs to the model rather than a compliance review afterwards."),
    ],
    schema_types=SVC_SCHEMA,
    unique_value="Builds the model from the zero-MDR constraint outward, with the category leader's actual revenue mix and per-user revenue, rather than assuming a subscription or interchange model that Indian policy has already ruled out.",
    block_coverage=ind_cover(["f-svc-02"], ["f-svc-02", "f-svc-03"],
                             ["f-svc-01", "f-svc-04"], ["f-act-12"],
                             ["f-svc-03"], ["f-unit-25"], ["f-svc-01"], ["f-svc-04"]),
    body="""
<AnswerBox>
A fintech app monetization consultant working in India starts from an unusual
constraint: UPI runs at zero merchant discount rate, so payment volume earns
nothing directly. The category leader takes about ₹112 per registered user a year,
roughly $1.17, and most of it arrives through distribution.
</AnswerBox>

<FactTable
  id="fintech-monetization"
  caption="What a fintech model in India has to work around"
  columns={["Constraint or figure", "Value"]}
  rows={[
    { cells: ["UPI merchant discount rate", "zero, by national policy"], factId: "f-svc-02" },
    { cells: ["Category leader: interchange, and lending share of revenue", "0.5% to 1.1%, and 11.55%"], factId: "f-svc-01" },
    { cells: ["Gross revenue per registered user per year", "about ₹112 (about $1.17)"], factId: "f-svc-03" },
    { cells: ["Two FY26 outcomes on similar revenue", "₹7,920 crore at a ₹2,792 crore loss, against ₹8,437 crore at ₹552 crore profit"], factId: "f-svc-04" },
    { cells: ["UPI Autopay mandates created monthly", "more than 120 million"], factId: "f-unit-25" },
    { cells: ["India gateway cost, domestic and international cards", "2% plus 18% GST, and 3%"], factId: "f-act-12" },
  ]}
/>

## What is different about fintech

The rail earns nothing. UPI operates at zero merchant discount rate as a policy
decision taken nationally, not as a competitive move, which means it will not
revert when a company decides it needs margin. Any model that assumes a cut of
payment volume is planning against a rule rather than a market.

What payment volume does produce is scale, frequency and data. All three are
valuable, and none of them is revenue until something sits next to them. So a
fintech monetization model in India is really a distribution model wearing a
payments front end, and the strategic question is which adjacent product the
traffic can honestly carry.

Regulation compounds the difference. What a product may charge, when it needs
explicit consent, and how a recurring mandate behaves are all inputs to the model
rather than a compliance review bolted on at the end. A model designed first and
checked for legality afterwards gets rebuilt, and the rebuild usually removes the
part that made it work.

## Who this shows up in

Two Indian results from FY26 show how far apart the outcomes sit on similar
revenue. One company produced ₹7,920 crore of revenue, about $826 million, at a
₹2,792 crore loss, roughly $291 million. Another produced ₹8,437 crore, about $880
million, at a ₹552 crore profit, roughly $58 million.

The revenue mix at the category leader is the more instructive number. Merchant
interchange runs 0.5% to 1.1% on eligible flows. Lending distribution accounted for
11.55% of first-half FY26 revenue. Device subscriptions, bill-payment commissions,
insurance distribution and advertising fill the rest. No single line carries the
business, and the largest one is not payments.

Neither company appears here as an endorsement or a partner. Both are public
reference points for a market structure, and their figures come from published
reporting with dates attached.

## How the engagement changes

The parent engagement starts at the funnel. This one starts at the rail, because
the rail decides what the funnel can be asked to do. Week one maps where money can
legally and mechanically be collected, and at what cost: domestic gateway charges
run 2% plus 18% GST, international card exports 3%, and those percentages set the
floor under every price.

Mandates come next. More than 120 million UPI Autopay mandates get created monthly
in India, and a fintech product with a recurring component either lives on that
rail or explains why not. The engagement designs the mandate flow alongside the
price rather than after it, because a price above the no-authentication threshold
changes the collection rate rather than the revenue line.

Only then does the work reach packaging and the paywall. Weeks four and five run
the same pricing tests as the parent engagement, inside the constraints the first
three weeks established.

## Benchmarks that apply

Fintech retention and conversion benchmarks sit on their own page, and the useful
ones are per-funnel rather than per-category. A lending funnel and a payments
funnel in the same app behave differently enough that a blended figure describes
neither.

The per-user revenue figure is the honest anchor. About ₹112 a year, roughly $1.17,
at the largest player in the market sets a ceiling most plans quietly exceed. A
model projecting several dollars per user per year in India is claiming to beat the
category leader, and that claim needs a mechanism rather than an assumption.

The second benchmark worth holding is mandate success rather than conversion. With
more than 120 million UPI Autopay mandates created monthly, a recurring fintech
product's revenue depends on how many of its mandates clear, and that number sits in
a payments dashboard rather than a product one. Teams that benchmark conversion and
ignore collection routinely report a retention problem they do not have.

## Proof

<FromMyWork exp="exp-040">
Routing applicants only to lenders with high disbursement probability got bank and
NBFC approval rates to 90%+. The gain came from the routing rule rather than the
model that fed it.
</FromMyWork>

<FromMyWork exp="exp-042">
Offline loan sourcing through 1.5M+ CSC and kiosk shops, backed by Haryana and
Karnataka government tie-ups, reached borrowers no digital funnel was touching.
Distribution was the product decision, not a channel choice.
</FromMyWork>

Both results point at the same thing. In Indian fintech the revenue follows who gets
reached and how they get routed, rather than a better screen. That is why this variant
spends its first weeks on rails and routing, and why a funnel optimisation brief
usually arrives mis-scoped.

Neither result came from pricing. One came from a routing rule and one from a
distribution channel, and both would have been invisible to a conversion audit. That
is the argument for starting a fintech engagement at the rail: the largest available
gains sit in places a funnel review does not look.

## Price

₹4,30,000, or $4,500, for the six weeks, the same as the parent engagement. The
scope differs and the fee does not, because the work takes the same six weeks
whether the constraint is a paywall or a mandate.

Compliance review is not included and is no substitute for counsel. What is included
is a model that takes the rules as given rather than discovering them in week five,
which is the cheaper order to find them in.

Two things sit outside the fee. Partner negotiations with lenders or insurers are a
commercial programme rather than a design exercise. And any change requiring a
regulatory filing runs on the regulator's timetable, not a six-week one, so the
engagement produces the design and flags the dependency rather than promising a
date.
""",
  ),

  dict(
    id="service-industry-0032", url="/services/app-monetization-strategy/marketplaces",
    archetype="service-industry", hub="services", funnel="BOFU", not_affiliated=True,
    title="Marketplace App Monetization Consultant: Take Rate First",
    meta_description="Monetizing a marketplace app when the take rate sets the ceiling. What changes, the Indian commission benchmarks, and what the engagement covers.",
    h1="Marketplace app monetization consultant",
    primary_keyword="marketplace app monetization consultant",
    secondary_keywords=["marketplace take rate strategy", "marketplace monetization india"],
    entity_a="marketplaces", entity_b="app-monetization-strategy",
    facts=["f-act-14", "f-act-15", "f-act-16", "f-act-17", "f-act-21", "f-act-22"],
    experience=["exp-024", "exp-051"],
    links=L(("/case-studies/comparison-platform-india", "the comparison platform case study", "proof"),
            ("/benchmarks/retention", "the retention benchmarks", "reference"),
            ("/services", "the services", "hub"),
            ("/services/app-monetization-strategy", "the parent engagement", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("marketplace-take-rates",
              "Six take-rate reference points for marketplace monetization: Indian quick-commerce market share by gross merchandise value, quick-commerce commission ranges, the share of revenue platforms consume from brands, the ONDC alternative rate, eBay and Etsy reported take rates and Indian food-delivery commissions, each row carrying its source and verification date",
              "The take rates a marketplace model sits inside. Verified 30 September 2026."),
    cta={"primary": {"label": "Start a marketplaces monetization engagement", "href": "/work-with-me"},
         "secondary": {"label": "See the parent engagement", "href": "/services/app-monetization-strategy"}},
    faq=[
      dict(q="What take rate should a marketplace charge?",
           a="Whatever matches the share of the transaction it performs. eBay reported 13.91% and Etsy 25.7%, and the gap tracks how much discovery each one carries rather than how large each one is."),
      dict(q="Is ONDC a real alternative in India?",
           a="It offers a route near 3% against the 15% to 25% incumbents charge, so the arithmetic is real. Whether sellers move depends on whether the incumbent's demand is worth the difference, which is an empirical question rather than a strategic one."),
      dict(q="Why does the engagement start with the take rate?",
           a="Because it sets the ceiling before the product does. Indian brands lose 30% to 35% of revenue to quick-commerce platforms once listing fees, ad spend, commission and operations are counted, and no pricing change inside the app reaches that."),
    ],
    schema_types=SVC_SCHEMA,
    unique_value="Starts from the take rate as a ceiling rather than a lever, with the Indian commission and platform-cost figures side by side and the ONDC alternative priced, instead of treating marketplace monetization as a funnel problem.",
    block_coverage=ind_cover(["f-act-16"], ["f-act-16", "f-act-17"],
                             ["f-act-14", "f-act-21", "f-act-22"], ["f-act-15"],
                             ["f-act-21"], ["f-act-15"], ["f-act-17"], ["f-act-14"]),
    body="""
<AnswerBox>
A marketplace app monetization consultant starts at the take rate, because it sets
the ceiling before the product does. Indian brands lose 30% to 35% of revenue to
quick-commerce platforms once listing fees, mandatory ad spend, commission and
operations are counted, and no in-app pricing change reaches that.
</AnswerBox>

<FactTable
  id="marketplace-take-rates"
  caption="The take rates a marketplace model sits inside"
  columns={["Platform or route", "Take"]}
  rows={[
    { cells: ["Revenue Indian quick-commerce platforms consume from brands", "30% to 35%"], factId: "f-act-16" },
    { cells: ["Indian quick-commerce commissions", "Zepto 10% to 18%, Instamart 15% to 25%, Blinkit about 22%"], factId: "f-act-15" },
    { cells: ["ONDC", "near 3%"], factId: "f-act-17" },
    { cells: ["eBay and Etsy, reported take rate", "13.91% and 25.7%"], factId: "f-act-21" },
    { cells: ["Zomato and Swiggy, restaurant commission", "18% to 25% and 18% to 22%"], factId: "f-act-22" },
    { cells: ["Indian quick-commerce share by GMV", "Blinkit 46%, Instamart 24%, Zepto 22%"], factId: "f-act-14" },
  ]}
/>

## What is different about marketplaces

Two sides, one price, and the price sets the ceiling. A marketplace does not choose
its margin the way a product company does. It chooses a take rate, and the take
rate has to match the share of the transaction it actually performs. Charge above that share and supply
leaves. Charge below it and the business cannot fund itself.

That makes take-rate design the monetization strategy rather than an input to it.
Everything a funnel can do sits inside a number somebody set before the funnel
existed. A marketplace engagement opening with conversion work optimises inside a
ceiling nobody examined.

A second difference: competitors contest the take rate continuously. ONDC offers
a route near 3% against the 15% to 25% incumbents charge in India. That arithmetic
is available to every seller, which means an incumbent take rate is a claim about
the value of its demand, re-tested every quarter.

## Who this shows up in

Indian quick commerce splits by gross merchandise value into Blinkit at about 46%,
Swiggy Instamart at about 24% and Zepto at about 22%. Commissions run 10% to 18% at
Zepto, 15% to 25% at Instamart and about 22% at Blinkit, and the lowest rate
belongs to the smallest share. That is the trade a challenger makes.

Globally the pattern holds on work rather than scale. eBay reported a 13.91% take
rate and Etsy 25.7%. Etsy carries discovery for products with no brand of their
own; eBay carries less and charges less. Indian food delivery sits between them,
with Zomato at 18% to 25% and Swiggy at 18% to 22%.

None of these companies is a client or a partner, and none appears here as an
endorsement. They are published reference points for how take rate tracks
function, each with its source and date.

## How the engagement changes

Week one prices the ceiling. Count every fee a seller or buyer pays, including the
ones outside commission. Listing fees, mandatory ad spend and operations together
take Indian brands from a nominal commission to 30% to 35% of revenue. A model
resting on the commission line alone misses the difference.

Weeks two and three decide what the platform is charging for. This is where
assortment and supply structure enter, because a marketplace that charges for
discovery has to produce discovery. Weeks four and five test the rate and the
packaging on real supply, with pre-set thresholds, rather than surveying sellers
about willingness to pay.

Week six sets the rate, the fee schedule and the measurement. The measurement
matters more here than in other variants: a take rate that looks accepted for two
quarters and then loses supply was never accepted.

## Benchmarks that apply

Commission ranges are the wrong benchmark on their own. Compare take rate against
function instead. The Indian quick-commerce numbers make that legible: Zepto charges
10% to 18% while holding about 22% of gross merchandise value, which is buying supply
with price.

Retention benchmarks for marketplaces sit on their own page, and they need reading
per side. Supply retention and demand retention move independently, and a blended
figure hides which side is leaving.

The other benchmark that matters is all-in cost rather than headline commission. A
seller comparing a 22% commission against a 3% alternative is comparing the wrong
two numbers if listing fees and mandatory ad spend take the first to a third of
revenue. Every take-rate comparison in this engagement runs on all-in cost, because
that is the number a seller experiences.

## Proof

<FromMyWork exp="exp-024">
Carrying the full catalogue was never viable, so the first real work was choosing
what not to stock. Of roughly 1,200 SKUs we prioritised 85 — under 8% — against the
highest-probability commercial opportunities for the market's development stage.
</FromMyWork>

<FromMyWork exp="exp-051">
A hub-and-spoke launch with three to four anchor distributors per city, aggregating
downstream vendor demand into one consolidation point, was what made
direct-to-vendor fulfilment from a single Bangalore warehouse work at all.
</FromMyWork>

Both decisions were structural rather than promotional. Narrowing assortment and
consolidating demand changed what the platform could charge for, which is the move a
take-rate design makes: decide what work the platform performs, then price that work.

The assortment number is the one worth sitting with. Prioritising 85 of roughly 1,200
SKUs meant declining more than nine tenths of the catalogue, and that decision did
more for the economics than any fee change would have. Marketplace monetization is
usually a subtraction problem before it is a pricing one.

## Price

₹4,30,000, or $4,500, for the six weeks, the same as the parent engagement. Take-rate
work, fee-schedule design and the supply-side test all sit inside that scope.

What is not inside it is renegotiating existing seller contracts. The engagement
produces the rate and the reasoning. Moving an installed base onto it is a commercial
programme rather than a six-week piece of work, and it usually needs a named owner on
the client side before it starts.

Supply-side research sits inside the fee, and clients most often expect it outside. A take rate cannot be set without talking to sellers about what they think
they are paying for, and the answer is frequently different from what the platform
believes it sells. That gap is usually where the rate has room to move.
""",
  ),
  dict(
    id="service-industry-0040", url="/services/pricing-and-packaging/b2b-saas",
    archetype="service-industry", hub="services", funnel="BOFU",
    title="SaaS Pricing and Packaging Consultant for B2B Products",
    meta_description="Pricing and packaging for B2B SaaS as seats give way to hybrid. What changes, where the spend actually sits, and what the engagement covers.",
    h1="SaaS pricing and packaging consultant",
    primary_keyword="saas pricing and packaging consultant",
    secondary_keywords=["b2b saas pricing consultant", "usage based pricing consultant"],
    entity_a="b2b-saas", entity_b="pricing-and-packaging",
    facts=["f-svc-05", "f-svc-06", "f-svc-07", "f-svc-08", "f-unit-18", "f-act-09"],
    experience=["exp-037", "exp-031"],
    links=L(("/case-studies/crm-180k-transactions", "the CRM throughput case study", "proof"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "reference"),
            ("/services", "the services", "hub"),
            ("/glossary/nrr", "net revenue retention", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("b2b-pricing-shift",
              "Six figures behind the shift in B2B pricing: the share of companies running hybrid models and its growth, an independent hybrid adoption figure and its projection, the share of spend still on seats against consumption, investor model preferences, gross revenue retention by contract size and median gross margin by revenue band, each row carrying its source and verification date",
              "Where B2B pricing actually sits, against where it is said to be going. Verified 30 September 2026."),
    cta={"primary": {"label": "Start a b2b-saas pricing engagement", "href": "/work-with-me"},
         "secondary": {"label": "See the retention benchmarks", "href": "/benchmarks/retention/b2b-saas"}},
    faq=[
      dict(q="Should we move off per-seat pricing?",
           a="Probably to a hybrid rather than away from seats entirely. 37% of companies now run a hybrid model, up from 25% a year earlier, while seat-based contracts still account for 65% to 75% of spend."),
      dict(q="Is usage-based pricing what investors want?",
           a="Hybrid is, by their own stated preference: 35% named hybrid, 26% outcome-based and 24% usage-based, against 5% for seat-based. That is a preference about alignment, not a prediction about your product."),
      dict(q="How does contract size change the work?",
           a="It changes the whole shape. Gross revenue retention runs 82% below $25K ACV against 95% above $100K, so a small-contract book needs packaging that reduces churn while a large-contract book needs packaging that creates expansion room."),
    ],
    schema_types=SVC_SCHEMA,
    unique_value="Sets the hybrid-pricing narrative against the share of spend still sitting on seats, so the recommendation is a migration path rather than a model swap, and ties the packaging decision to gross retention by contract size.",
    block_coverage=ind_cover(["f-svc-05"], ["f-svc-07", "f-svc-05"],
                             ["f-svc-06"], ["f-unit-18"],
                             ["f-act-09"], ["f-svc-08"], ["f-svc-07"], ["f-svc-08"]),
    body="""
<AnswerBox>
A SaaS pricing and packaging consultant working on B2B products in 2026 is mostly
designing migrations, not models. 37% of companies now run a hybrid of seats and
consumption, up from 25% a year earlier, while seat-based contracts still carry 65%
to 75% of actual spend.
</AnswerBox>

<FactTable
  id="b2b-pricing-shift"
  caption="Where B2B pricing sits, against where it is said to be going"
  columns={["Measure", "Figure"]}
  rows={[
    { cells: ["Companies running a hybrid model, now and a year ago", "37%, up from 25%"], factId: "f-svc-05" },
    { cells: ["Independent hybrid adoption figure and projection", "43%, projected 61% by end of 2026"], factId: "f-svc-06" },
    { cells: ["Share of spend: seats against consumption", "65% to 75%, against 4% to 6%"], factId: "f-svc-07" },
    { cells: ["Investor preference by model", "hybrid 35%, outcome 26%, usage 24%, seats 5%"], factId: "f-svc-08" },
    { cells: ["Gross revenue retention by ACV", "82% under $25K, 95% above $100K"], factId: "f-unit-18" },
    { cells: ["Median gross margin, $5M to $50M ARR", "71% to 74%"], factId: "f-act-09" },
  ]}
/>

## What is different about B2B SaaS

The gap between the narrative and the spend. Every pricing article in 2026 says
seats are finished, and 37% of companies do now run a hybrid, up sharply from 25% a
year earlier. Meanwhile seat-based contracts still account for 65% to 75% of
software spend and consumption-based pricing sits at 4% to 6%.

Both facts are true, and holding them together is the whole job. A company that
reads the narrative and rebuilds on pure consumption is pricing for a market that
has not arrived. A company that ignores it keeps a model its buyers increasingly
ask about and its investors increasingly discount.

So the deliverable is usually a migration path rather than a model. Which meter
goes alongside the seat, what it prices, how existing contracts move, and what
happens to revenue predictability in the transition quarter. That last question
kills more pricing changes than any other, and it is answerable in advance.

## What the market says it wants

Investor preference is unusually explicit. Asked which model they prefer, 35% named
hybrid, 26% outcome-based and 24% usage-based, against 10% for flat fee and 5% for
seats. That is a statement about revenue aligning with value delivered, not a
forecast about any particular product.

A second source puts hybrid adoption at 43% and projects 61% by the end of 2026.
The two figures disagree by six points on today and agree on direction, which is
about as much certainty as pricing data offers. Where they disagree, both appear.

Named here are the reports rather than the vendors, deliberately. Published pricing
pages change without notice and a quoted competitor price ages badly, so this
engagement gathers current vendor prices during week one rather than citing a
stale number on a page.

## How the engagement changes

Contract size sets the shape before anything else. Gross revenue retention runs 82%
below $25K ACV, about ₹23.97 lakh, and 95% above $100K, about ₹95.89 lakh. A
small-contract book needs packaging that reduces churn. A large-contract book needs
packaging that creates expansion room. The same hybrid model serves those two badly
if it is not tuned to which one you have.

Then the meter. Weeks two and three pick what to charge for, and the test is
whether the customer can predict their own bill. A meter that moves with something
the customer does not control produces support load and churn regardless of how
well it aligns with value.

Weeks four and five model the migration: grandfathering, floors, the revenue bridge
and the quarter where predictability drops. Week six sets the packaging, the price
points and the thresholds for revisiting.

## Benchmarks that apply

Gross margin is the constraint most pricing work ignores. Median gross margin for
private SaaS between $5M and $50M ARR, roughly ₹47.95 crore to ₹479.45 crore, is 71%
to 74%. A consumption meter on a workload with real marginal cost can improve
alignment and worsen margin at the same time, and the model has to show both.

Retention benchmarks for B2B SaaS sit on their own page and should be read by
contract band rather than in aggregate, for the same reason the packaging is.

The benchmark to avoid is a competitor's list price. Published prices are a
negotiating position, discounting is invisible from outside, and a page quoting one
ages the moment the vendor edits it. This engagement gathers current prices during
week one and treats them as evidence about positioning rather than as a target to
match.

## Proof

<FromMyWork exp="exp-037">
Pricing an integrations platform on execution volume and connector usage rather
than seats took it to roughly $60K MRR, about ₹57.53 lakh. The price then tracked
what the customer consumed instead of how many people logged in.
</FromMyWork>

<FromMyWork exp="exp-031">
About 40% of engineering time across the organisation was going to client-specific
requests that sales had sold as standard. Packaging was the fix, not capacity.
</FromMyWork>

That second result is the common case in B2B. A pricing problem presents as a
capacity problem, because the bespoke work sales promised has to come from somewhere.
Fixing the package stops the promise, and no amount of hiring achieves the same thing.

The first result is the other half of the pattern. Moving from seats to execution
volume changed which customers grew their spend, and it changed which customers
complained about the bill. Both effects were predictable from the meter, and neither
would have shown up in a willingness-to-pay survey.

## Price

₹4,30,000, or $4,500, for the six weeks. Meter selection, packaging, the migration
model and the revenue bridge all sit inside that scope.

Vendor price gathering happens during the engagement rather than beforehand, because
a competitor's published price is only useful on the day it is read. Nothing here
quotes a competitor price on a public page for that reason.

Also inside the fee: the revenue bridge for the transition quarter, which is the
artefact that gets a pricing change approved. Grandfathering rules and the floor
design sit inside it too, because those are the decisions that determine whether the
change survives its first renewal cycle.

Outside it: implementing the meter. Metering is engineering work with its own
timeline, and a pricing engagement promising the implementation would be promising
someone else's quarter.
""",
  ),

  dict(
    id="tool-0586", url="/tools/monetization-health-score", archetype="tool",
    hub="tools", funnel="MOFU",
    title="Monetization Health Score: A Ten-Minute Diagnostic",
    meta_description="Score your monetization across pricing, paywall, collection and store economics in ten minutes. Shows its formula and its Indian defaults.",
    h1="Monetization health score", primary_keyword="monetization health score",
    secondary_keywords=["app monetization audit tool", "monetization diagnostic"],
    entity_a="monetization-health-score",
    facts=["f-act-10", "f-act-11", "f-glossary-0700-09", "f-svc-05", "f-svc-07", "f-act-13"],
    experience=["exp-049"],
    links=L(("/tools", "the tools", "hub"),
            ("/glossary/unit-economics", "unit economics", "lateral"),
            ("/glossary/paywall", "paywall", "lateral"),
            ("/glossary/ltv-to-cac-ratio", "the LTV:CAC entry", "lateral"),
            ("/benchmarks", "the benchmarks", "related"),
            ("/work-with-me", "a monetisation review", "bofu")),
    visuals=V("score-inputs",
              "Six inputs the monetization health score checks: store commission rates, Apple's core technology commission, UPI Autopay mandate success, the share of companies on hybrid pricing, the share of spend still on seats, and the all-in range for international payment costs from India, each row carrying its source and verification date",
              "What the score checks, and the published figure behind each. Verified 30 September 2026."),
    cta={"primary": {"label": "Get a monetization health score review", "href": "/work-with-me"},
         "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"}},
    faq=[
      dict(q="What does the monetization health score measure?",
           a="Four things: whether the price has been tested, whether the paywall is placed against a known value moment, whether collection is instrumented, and whether store and payment costs are in the model. Each scores separately."),
      dict(q="Does it need my data?",
           a="It needs four or five numbers you already have, entered in the browser. Nothing is submitted, nothing is stored, and no email is requested before the result appears."),
      dict(q="What is a good score?",
           a="Any dimension scoring zero matters more than the total. A product with excellent pricing and uninstrumented collection is losing revenue it cannot see, and a total score would average that away."),
    ],
    schema_types=["WebApplication", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Scores collection and store economics as separate dimensions rather than folding them into a single monetization total, and ships Indian payment defaults, so a zero on an invisible dimension surfaces instead of averaging away.",
    body="""
<AnswerBox>
The monetization health score checks 4 dimensions in about 10 minutes: whether
anyone has tested the price, whether the paywall sits at a known value moment,
whether any report splits failed payments from cancellations, and whether store and
payment costs appear in the model. Each scores 0 to 5 on its own, because one zero
matters more than the total.
</AnswerBox>

<FactTable
  id="score-inputs"
  caption="What the score checks, and the published figure behind each"
  columns={["Input", "Reference figure"]}
  rows={[
    { cells: ["Store commission", "15% under $1M a year, 30% above"], factId: "f-act-10" },
    { cells: ["Apple core technology commission from January 2026", "5% of digital-goods revenue"], factId: "f-act-11" },
    { cells: ["UPI Autopay mandate success under the threshold", "92% or better"], factId: "f-glossary-0700-09" },
    { cells: ["Companies running a hybrid pricing model", "37%"], factId: "f-svc-05" },
    { cells: ["Share of spend still on seats, against consumption", "65% to 75%, against 4% to 6%"], factId: "f-svc-07" },
    { cells: ["India international payment cost, all-in range", "0.5% to 1.2% against 6% to 8.5%"], factId: "f-act-13" },
  ]}
/>

## How the score works

Four dimensions, each scored 0 to 5, each reported on its own rather than summed
into a headline. Summing them is the mistake most diagnostic tools make. A product
with strong pricing and no collection instrumentation averages to respectable while
losing revenue nobody measures.

Each dimension asks for one or two numbers you already have. The price, and whether
anyone has tested it. The paywall's position relative to the first value moment.
Whether any report splits failed payments from cancellations. Whether store
commission and payment costs appear in the revenue model at all.

Everything runs in the browser. It submits nothing, stores nothing, and asks for no
email before showing a result. The formula sits beside the output, so you can check
the arithmetic rather than believe it.

## Why collection is scored separately

Because it sits at zero most often and draws attention least. A failed payment
leaves a cohort exactly as a cancellation does, and most dashboards report the two
together, so a product looks disliked when it is merely uncollected.

The Indian case makes this concrete. Razorpay puts UPI Autopay mandate success at 92% or
better under the threshold, a materially different collection rate from the card rail
it replaced. A model that never split the two cannot say
whether a retention change worked or a rail changed underneath it.

International routing adds the same problem at the other end. All-in international
payment cost for Indian businesses spans 0.5% to 1.2% through virtual export
accounts and 6% to 8.5% through legacy wallet aggregators. That swing covers several
percentage points of revenue, a routing choice rather than a product one, and it
belongs in the score.

## Why store economics are an input, not a footnote

Store commission is the largest single cost most revenue models omit. Apple and
Google both take 15% under $1M of annual revenue, about ₹9.59 crore, and 30% above
it, and Apple has added a 5% core technology commission on digital-goods revenue
from January 2026.

A model pricing against gross revenue therefore overstates contribution by the
commission rate at every volume, and the overstatement grows as revenue crosses the
threshold into the higher rate. The score checks whether the figure appears at all
rather than whether it looks favourable, because nothing about it is negotiable at
most sizes.

The same applies to the payment layer underneath it. Gateway cost, tax and refunds
each take a percentage, and each lands before the money reaches the line a pricing
decision works from. Ignore them and the score rates a model healthy on a
margin it does not have.

## What the pricing dimension actually checks

Whether a price has been tested, and whether the model matches how the product gets
used. 37% of companies now run a hybrid of seats and consumption, while seats still
carry 65% to 75% of spend and consumption 4% to 6%. Both numbers are relevant: the
first says hybrid is normal, the second says a full switch is not.

The dimension scores low for an untested price whatever the price happens to be. An
untested price stays a guess nobody has put to evidence, and its level stays beside
the point until somebody does.

It also checks predictability from the buyer's side. A meter the customer cannot
forecast produces support load and churn however well it tracks value, so a
consumption model scores lower when the metered event sits outside the customer's
control. That check catches the most common failure in a well-intentioned move off
seats.

## What to do with a low score

Fix the zero first, whichever dimension it is in. The dimensions run roughly in order of
cost of neglect, and collection usually pays back fastest because those fixes are
configuration rather than product work.

<FromMyWork exp="exp-049">
Real-time data reliability improved about 80%, which is what made accurate pricing,
attribution and monetisation decisions possible at all. Before that, every model was
arguing with its own inputs.
</FromMyWork>

If two dimensions score zero, take the instrumentation one first. Decisions resting
on unreliable inputs produce work nobody can evaluate afterwards, and that costs more
than the delay of fixing the inputs.

One caution about the total. A respectable average across four dimensions can hide a
zero, which is why the score reports each one and deliberately does not lead with a
headline number. If a tool gives you a single monetization grade, check what it
averaged to get there.
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-service-01", "wave": 1, "verified_on": VERIFIED, "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Start a services engagement", "href": "/work-with-me"},
                        "secondary": {"label": "See the case studies", "href": "/case-studies"}},
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
