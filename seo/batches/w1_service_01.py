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
            ("/tools/retention-curve-projector", "the retention curve projector", "tool"),
            ("/work-with-me", "start the engagement", "bofu")),
    visuals=V("retention-levers",
              "Six levers a retention engagement works through: failed-payment recovery by intervention, the lifespan of a withdrawn Indian membership programme, the average and median lift on winning experiments, median conversion and revenue uplift on winners, two Indian fintech revenue and profit outcomes and the card failure spike after India's 2021 rules, each row carrying its source and verification date",
              "The levers, with their realistic sizes. Verified 30 September 2026."),
    cta={"primary": {"label": "Start a retention and lifecycle engagement", "href": "/work-with-me"},
         "secondary": {"label": "Project your retention curve", "href": "/tools/retention-curve-projector"}},
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
