#!/usr/bin/env python3
"""Batch w1-glossary-02 — the activation, paywall and take-rate cluster.

Eleven pages, finishing Wave 1's glossary. Facts researched for batch 01 are
reused here through its POOL, which is what keeps the §C2 three-page cap
countable across batches rather than per file.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as POOL_01, fact, L, V, HUB, BOFU, VERIFIED  # noqa: E402

FPS = ("https://firstpagesage.com/reports/freemium-conversion-rate-benchmarks/",
       "Freemium conversion rate benchmarks", "firstpagesage.com", "2026")
UF = ("https://www.userflow.com/blog/saas-onboarding-benchmarks-2026",
      "SaaS Onboarding Benchmarks 2026", "userflow.com", "2026")
DA = ("https://www.digitalapplied.com/blog/customer-onboarding-time-to-value-2026-saas-metrics-framework",
      "Time to Value: The 2026 SaaS Onboarding Metrics Framework", "digitalapplied.com", "2026")
CZ = ("https://www.cloudzero.com/blog/saas-gross-margin-benchmarks/",
      "SaaS Gross Margin Benchmarks", "cloudzero.com", "2026")
LAD = ("https://ladya.in/insights/quick-commerce-ad-benchmarks-india-2026",
       "Quick Commerce Ad Benchmarks India 2026", "ladya.in", "2026")

NEW = [
    fact("f-act-01", "Median free-to-paid conversion across all products is 8%, while freemium models sit closer to 2% to 5%",
         "8", "%", ("https://chartmogul.com/reports/saas-conversion-report/",
                    "The SaaS Conversion Report", "chartmogul.com", "2026"),
         "The median free-to-paid conversion rate across all products is 8%. Freemium models sit closer to 2-5%."),
    fact("f-act-02", "Across 80+ SaaS products, freemium-to-paid averaged 3.7%, ranging from 2.6% in ed-tech to 5.8% in reg-tech",
         "3.7", "%", FPS,
         "An average freemium-to-paid conversion rate of 3.7% for traditional freemium, with industry variation "
         "from 2.6% in EdTech to 5.8% in RegTech.", False),
    fact("f-act-03", "In a survey of 200 B2B software products, one in four freemium products converts under 2.5% of free users within six months, and another quarter reaches 10% to 15%",
         "2.5", "%", ("https://chartmogul.com/reports/saas-conversion-report/",
                      "The SaaS Conversion Report", "chartmogul.com", "2026"),
         "One-in-four freemium products convert less than 2.5% of free users within six months, while another "
         "quarter manages 10-15%."),
    fact("f-act-04", "The SaaS-only median activation rate is 30%, against a blended free-to-paid conversion of 8%",
         "30", "%", UF,
         "The SaaS-only median activation rate is 30%, and the blended free-to-paid conversion rate is 8%.", False),
    fact("f-act-05", "Two-thirds of new SaaS users never reach the aha moment", "66", "%", DA,
         "Two-thirds of new SaaS users never reach the aha moment.", False),
    fact("f-act-06", "Time to value averages 1 day 12 hours across industries, from under 5 minutes for simple tools to 1 to 2 weeks for enterprise platforms",
         "1.5", "days", DA,
         "Typical TTV: simple SaaS under 5 minutes, mid-complexity 1-3 days, enterprise 1-2 weeks, "
         "cross-industry average 1d 12h 23m.", False),
    fact("f-act-07", "AI and ML products show 54.8% benchmark activation with a time-to-value median near 17 hours, against 42.6% for CRM and sales tools",
         "54.8", "%", DA,
         "AI & ML products have benchmark activation of 54.8% with TTV medians of roughly 17 hours. "
         "CRM & Sales products show 42.6% benchmark activation.", False),
    fact("f-act-08", "Mature SaaS contribution margins run 70% to 80%, with median software gross margin at 80% and 76% blended with services",
         "70-80", "%", CZ,
         "For mature SaaS, contribution margins fall between 70-80%, while median software gross margin is 80%, "
         "and blended it is 76%."),
    fact("f-act-09", "Median gross margin for private SaaS between 5 million and 50 million dollars ARR is 71% to 74%",
         "71-74", "%", CZ,
         "The median gross margin for private SaaS companies with $5M-$50M ARR is 71-74% in 2026."),
    fact("f-act-10", "Apple and Google both charge 15% on the first 1 million dollars of annual revenue and 30% above it, plus a 99 dollar and 25 dollar developer fee",
         "15", "%", ("https://www.revenuecat.com/blog/engineering/small-business-program",
                     "The 15% App Store Fee: A Guide for Developers", "revenuecat.com", "2026"),
         "Apple App Store costs $99/year plus 15% for revenue under $1M/year, 30% above. Google Play charges "
         "$25 once plus 15% on first $1M/year, 30% above."),
    fact("f-act-11", "From 1 January 2026 Apple replaced the per-install Core Technology Fee with a 5% Core Technology Commission on digital-goods revenue",
         "5", "%", ("https://blog.funnelfox.com/apple-app-store-fees-2026-eu-dma/",
                    "App Store Fees and Commission Rates in 2026", "funnelfox.com", "2026"),
         "From January 1, 2026, Apple replaced the per-install Core Technology Fee with a 5% Core Technology "
         "Commission on digital-goods revenue.", False),
    fact("f-act-12", "Razorpay charges Indian businesses 2% plus 18% GST on domestic payments and 3% on international card exports",
         "2", "%", ("https://razorpay.com/blog/best-payment-gateway-pricing-saas-india-tco-guide",
                    "Payment gateway pricing for SaaS businesses in India", "razorpay.com", "2026"),
         "Razorpay charges 2% platform fee plus 18% GST for domestic payments, and 3% for international "
         "exports by card."),
    fact("f-act-13", "All-in international payment cost for Indian businesses spans 0.5% to 1.2% via virtual export accounts and 6% to 8.5% via legacy wallet aggregators",
         "0.5-8.5", "%", ("https://razorpay.com/blog/international-payment-processing-cost-in-india-2026-the-complete-rate-benchmark-for-indian-businesses",
                          "International Payment Processing Cost in India 2026", "razorpay.com", "2026"),
         "True all-in cost ranges from 0.5 to 1.2 percent via virtual export accounts to 6 to 8.5 percent via "
         "legacy global wallet aggregators."),
    fact("f-act-14", "Indian quick commerce splits by GMV into Blinkit near 46%, Swiggy Instamart near 24% and Zepto near 22%",
         "46", "%", LAD,
         "Blinkit holds about 46% of the market by GMV, Swiggy Instamart around 24%, and Zepto around 22%.", False),
    fact("f-act-15", "Quick-commerce commissions run 10% to 18% at Zepto, 15% to 25% at Instamart and about 22% at Blinkit",
         "10-25", "%", LAD,
         "Zepto's commission rate is 10-18% against Instamart's 15-25%. Blinkit's commission is 22%.", False),
    fact("f-act-16", "Indian D2C brands lose 30% to 35% of revenue to quick-commerce platforms across listing fees, mandatory ad spend, commission and operations",
         "30-35", "%", ("https://base.com/en-IN/blog/quick-commerce-for-d2c-brands-the-complete-guide-2026/",
                        "Quick Commerce for D2C Brands", "base.com", "2026"),
         "For D2C brands, platforms consume 30% to 35% of revenue between listing fees, mandatory ad spend, "
         "commission, and operations.", False),
    fact("f-act-17", "ONDC offers a commission route near 3%, against the 15% to 25% incumbent Indian marketplaces charge",
         "3", "%", ("https://ecorpit.com/retail-digital-transformation-d2c-quick-commerce-india-2026/",
                    "2026 India retail: quick commerce, ONDC and D2C", "ecorpit.com", "2026"),
         "ONDC offers a lower-commission route near 3%, against the 15% to 25% that incumbent marketplaces "
         "charge.", False),
    fact("f-act-18", "Zepto Pass, a paid membership, ran fourteen months from February 2024 to April 2025 before being replaced",
         "14", "months", ("https://www.markhub24.com/post/zepto-pass-a-membership-strategy-for-customer-retention-in-indian-quick-commerce",
                          "Zepto Pass: A Membership Strategy for Customer Retention", "markhub24.com", "2026"),
         "Zepto Pass had a fourteen-month lifespan, February 2024 to April 2025, before its quiet replacement "
         "by Zepto Daily.", False),
    fact("f-act-19", "Quick-commerce platforms report 3x to 5x return on ad spend, while true return after commission and cost of goods runs 1.2x to 2.5x",
         "1.2-2.5", "x", LAD,
         "Platform-reported RoAS ranges from 3x to 5x, but true RoAS after commission and cost of goods is "
         "1.2x to 2.5x depending on the platform.", False),
    fact("f-act-20", "Google Play's 2026 standard rate is 10% on the first 1 million dollars of annual revenue and 20% above it",
         "10", "%", ("https://www.strataigize.com/insights/google-play-external-payments-fee-changes-2026/",
                     "Google Play External Payments and Fee Changes", "strataigize.com", "2026"),
         "Google lowered its baseline: the standard rate is now 10% on the first $1 million and 20% above it, "
         "plus a billing fee charged separately.", False),
    fact("f-act-21", "eBay reported a 13.91% take rate on 22.2 billion dollars of gross merchandise volume in the first quarter of 2026, against Etsy at 25.7%, up 180 basis points",
         "13.91", "%", ("https://www.feinternational.com/blog/marketplace-app-valuation",
                        "Marketplace App Valuation 2026", "feinternational.com", "2026"),
         "eBay reported a 13.91% take rate on $22.2 billion of GMV in Q1 2026; Etsy reported 25.7%, up 180 "
         "basis points.", False),
    fact("f-act-22", "Zomato charges Indian restaurants 18% to 25% commission and Swiggy 18% to 22%, with a per-order platform fee of 17.58 rupees as of March 2026",
         "18-25", "%", ("https://www.businessofapps.com/data/food-delivery-app-market/",
                        "Food Delivery App Revenue and Usage Statistics", "businessofapps.com", "2026"),
         "Zomato charges restaurants 18-25% commission and Swiggy 18-22%. Both raised per-order platform fees "
         "to Rs 17.58 in March 2026.", False),
]

POOL = dict(POOL_01)
POOL.update({f["fact_id"]: f for f in NEW})


PAGES = [
  dict(
    id="glossary-0698", url="/glossary/activation-rate", archetype="glossary", hub="glossary",
    title="What is Activation Rate? Formula, Benchmarks and Events",
    meta_description="Activation rate is the share of new users who reach first value. The formula, the 30% to 36% medians, and why two-thirds of users never get there.",
    h1="What is activation rate?", primary_keyword="what is activation rate",
    secondary_keywords=["activation rate formula", "activation rate benchmark"],
    entity_a="activation-rate",
    facts=["f-act-04", "f-unit-22", "f-unit-23", "f-unit-24", "f-act-05", "f-act-07"],
    experience=["exp-005", "exp-011"],
    links=L(HUB, ("/glossary/aha-moment", "the aha moment", "lateral"),
            ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks", "related"), BOFU),
    visuals=V("activation-benchmarks",
              "Six activation reference points: the SaaS-only median, the average across SaaS, the gap between the top decile and the median at day one, the share of companies that track activation at all, the share of users who never reach first value, and activation by product category, each row carrying its source and verification date",
              "Activation reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good activation rate?",
           a="The SaaS-only median is 30% and the broader average is 36%. Above 50% is strong. The more useful comparison is your own category: AI and machine-learning products benchmark at 54.8% while CRM and sales tools sit at 42.6%."),
      dict(q="How do I define the activation event?",
           a="Pick the first action that predicts retention, not the first action that is easy to instrument. Signing up is not activation. The event should be the smallest thing a user can do that proves the product worked for them."),
      dict(q="Why do so few teams track activation?",
           a="Only about 34% of product-led companies track it at all, largely because it needs a defined event and most teams never agree on one. The cost is that the metric best predicting conversion goes unmeasured."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Pairs the activation medians with the two facts that make them actionable — two-thirds of users never reach first value, and only a third of companies measure whether they did — and gives a worked reframing that moved a real compliance step from 35% to 71%.",
    body="""
<AnswerBox>
What is activation rate? It is the share of new users who reach a defined first
moment of value. The SaaS-only median is 30% and the broader average is 36%. Two
thirds of new users never get there at all, which makes activation the largest
single leak in most funnels.
</AnswerBox>

<FactTable
  id="activation-benchmarks"
  caption="Activation reference points, and what each one measures"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["SaaS-only median activation rate", "30%"], factId: "f-act-04" },
    { cells: ["Average activation rate across SaaS", "36%, above 50% is strong"], factId: "f-unit-22" },
    { cells: ["Top decile against median, day-one activation", "21% against 5%"], factId: "f-unit-23" },
    { cells: ["Companies that track activation at all", "about 34%"], factId: "f-unit-24" },
    { cells: ["New users who never reach the aha moment", "two thirds"], factId: "f-act-05" },
    { cells: ["Activation by category, AI and ML against CRM", "54.8% against 42.6%"], factId: "f-act-07" },
  ]}
/>

## How is activation rate calculated?

Divide the users who completed the activation event by all users who signed up in
the same cohort. The arithmetic is trivial. Choosing the event is the whole job.

Pick the first action that predicts retention, not the first action that is easy
to instrument. Signing up is not activation. Nor is opening the app. The event
should be the smallest thing a user can do that proves the product worked for
them, and it should be visible in the retention curve.

## What counts as a good activation rate

The SaaS-only median is 30%. The broader average is 36%, and above 50% is strong.
Category moves it more than craft does: AI and machine-learning products benchmark
at 54.8% while CRM and sales tools sit at 42.6%.

The spread inside a category is wider still. Top-decile products see 21% day-one
activation against a 5% median, which is a four-fold gap on the same day of the
same funnel. That gap is where the work is.

## Why activation goes unmeasured

Only about 34% of product-led companies track activation at all. The reason is
usually that nobody will commit to the event definition, so the metric never gets
built. Meanwhile two thirds of new users never reach first value, and that loss
sits in the numbers as generalised churn.

That misdirects effort. A team without an activation number optimises
acquisition, because acquisition already has a dashboard. It then pours users into
a funnel that loses most of them in the first session.

## What actually moves activation

Reframing the ask moves it more reliably than shortening it.

<FromMyWork exp="exp-005">
Asking for a bank statement upfront got 35% compliance. Showing a preliminary
eligibility range first, then asking for the statement to reveal the exact offer,
took it to 71% — the same ask, reframed from a compliance step into a reward.
</FromMyWork>

Removing work moves it too. Measure the removal on the device users actually
hold, not on a desk machine.

<FromMyWork exp="exp-011">
The renewal form was 23 fields across 6 steps and took 11 minutes on a mid-range
Android handset, timed. It went to 4 fields and one step for most renewals, using
registration data the insurer already held.
</FromMyWork>
""",
  ),

  dict(
    id="glossary-0699", url="/glossary/conversion-rate", archetype="glossary", hub="glossary",
    title="What is Conversion Rate? Formula, Benchmarks & Denominators",
    meta_description="Conversion rate is completions divided by a denominator you choose. The formula, the medians that matter, and why the denominator decides the answer.",
    h1="What is conversion rate?", primary_keyword="what is conversion rate",
    secondary_keywords=["conversion rate formula", "conversion rate benchmark"],
    entity_a="conversion-rate",
    facts=["f-act-01", "f-unit-38", "f-glossary-0700-04", "f-act-02",
           "f-glossary-0700-07", "f-unit-35"],
    experience=["exp-010"],
    links=L(HUB, ("/glossary/free-to-paid-conversion", "free-to-paid conversion", "lateral"),
            ("/glossary/activation-rate", "activation rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("conversion-benchmarks",
              "Six conversion reference points: median free-to-paid across products, median day-one return rate, hard paywall against freemium download-to-paid, average freemium-to-paid across 80-plus products, the win rate of price localisation experiments and India's cost-per-install ratio, each row carrying its source and verification date",
              "Conversion reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good conversion rate?",
           a="The question has no answer without a denominator. Median free-to-paid across products is 8%. Download-to-paid within 35 days is 2.1% for freemium apps and 10.7% for hard paywalls. Those are all conversion rates and none is comparable to another."),
      dict(q="Why did my conversion rate improve without any change?",
           a="Usually the denominator moved. Cutting low-intent traffic raises conversion while lowering total conversions. Both effects are real, and only one of them is good news."),
      dict(q="What is the highest-yield conversion experiment?",
           a="Price localisation wins 62.3% of experiments, the highest win rate of any test type. For a product selling across markets it beats most copy and layout work."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Treats the denominator as the definition rather than a footnote, lining up four published conversion medians that are routinely compared and are not comparable, and carries a worked case where one funnel had seven separate multiplicative leaks.",
    body="""
<AnswerBox>
What is conversion rate? It divides completions by a population you
choose, and the choice decides the answer. Median free-to-paid across products is 8%.
Download-to-paid inside 35 days is 2.1% for freemium apps and 10.7% for hard
paywalls. All three are conversion rates and none compares to another.
</AnswerBox>

<FactTable
  id="conversion-benchmarks"
  caption="Conversion rates that get compared and should not be"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median free-to-paid across products", "8%"], factId: "f-act-01" },
    { cells: ["Median day-one return, all apps", "25.3%"], factId: "f-unit-38" },
    { cells: ["Download-to-paid at day 35, hard paywall against freemium", "10.7% against 2.1%"], factId: "f-glossary-0700-04" },
    { cells: ["Average freemium-to-paid across 80+ products", "3.7%, from 2.6% to 5.8% by sector"], factId: "f-act-02" },
    { cells: ["Win rate of price localisation experiments", "62.3%"], factId: "f-glossary-0700-07" },
    { cells: ["India cost per install against the US", "0.12x"], factId: "f-unit-35" },
  ]}
/>

## How is conversion rate calculated?

Divide the users who completed the step by the users who could have. Then write
the denominator down, because a conversion rate without one is a number without a
claim.

<Example illustrative>
500 purchases from 10,000 visitors is 5%. The same 500 purchases from the 2,000
visitors who reached the pricing page is 25%. Both are true.
</Example>

The denominator also explains most unexplained movement. Cutting low-intent
traffic raises conversion rate and lowers total conversions at the same time.
Both effects are real and only one is good news.

## Which conversion rate to compare against

Match the denominator before the number. Download-to-paid starts at the install
and folds in every step after. Free-to-paid starts at signup. Trial-to-paid starts
at trial start. Median free-to-paid across products is 8%, and freemium products
average 3.7% with a range from 2.6% to 5.8% by sector.

The paywall gap shows how much the denominator matters. Hard paywalls reach 10.7%
download-to-paid against 2.1% for freemium, which is not a five-fold improvement
in persuasion. It is a smaller, more qualified denominator.

## Where the biggest wins sit

Price, more often than copy. Price localisation wins 62.3% of experiments, the
highest win rate of any test type. For anything selling across borders that
outranks most layout work.

Geography compounds it. Cost per install in India runs 0.12 times the US level, so
the same conversion rate carries very different economics, and the same absolute
price asks much more of the buyer.

## Conversion problems are rarely single

The instinct is to look for the leak. Often there are several, and they multiply.

<FromMyWork exp="exp-010">
The insurance conversion rate was 0.007% and had seven separate causes, not one.
Each leak cut conversion by 60-80% on its own; compounded, they produced seven
purchases per hundred thousand users.
</FromMyWork>

Ranking seven leaks at that severity and taking the top one does not work.
Compounding makes a funnel look unfixable, then makes it move sharply once several
clear at once.
""",
  ),

  dict(
    id="glossary-0701", url="/glossary/free-to-paid-conversion", archetype="glossary", hub="glossary",
    title="What is Free-to-Paid Conversion? Formula and Benchmarks",
    meta_description="Free-to-paid conversion is the share of free users who start paying. The formula, the 8% median almost nobody has, and the six-month window that hides it.",
    h1="What is free-to-paid conversion?", primary_keyword="what is free-to-paid conversion",
    secondary_keywords=["free to paid conversion rate", "free to paid benchmark"],
    entity_a="free-to-paid-conversion",
    facts=["f-act-01", "f-act-02", "f-act-03", "f-act-04", "f-glossary-0700-01",
           "f-glossary-0700-07"],
    experience=["exp-043"],
    links=L(HUB, ("/glossary/freemium", "freemium", "lateral"),
            ("/glossary/conversion-rate", "conversion rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"), BOFU),
    visuals=V("free-to-paid-benchmarks",
              "Six free-to-paid reference points: the median across products, the average across 80-plus products with its sector range, the bimodal split in a 200-product survey, the SaaS-only activation median, median trial-to-paid by trial length and the win rate of price localisation experiments, each row carrying its source and verification date",
              "Free-to-paid reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good free-to-paid conversion rate?",
           a="The median is 8%, and almost no company sits at it. In a survey of 200 B2B products, one quarter converted under 2.5% within six months and another quarter reached 10% to 15%. The distribution is bimodal, so the median describes nobody."),
      dict(q="How long should I wait before measuring it?",
           a="Six months is the window the published survey uses, and shorter windows systematically understate. A product with a long consideration cycle measured at 30 days will look broken when it is only slow."),
      dict(q="Is free-to-paid the same as trial-to-paid?",
           a="No. Free-to-paid counts everyone on a free tier, including people who will never evaluate paying. Trial-to-paid counts people who started a time-boxed evaluation. The second runs several times higher on the same product."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="States plainly that the 8% median describes almost no real company, using the bimodal split from the 200-product survey, and separates free-to-paid from trial-to-paid with published figures for both rather than treating them as one metric.",
    body="""
<AnswerBox>
What is free-to-paid conversion? It is the share of free users who become paying
customers. The median across products is 8%. The distribution behind that median
is bimodal: a quarter of freemium products convert under 2.5% in six months and
another quarter reaches 10% to 15%.
</AnswerBox>

<FactTable
  id="free-to-paid-benchmarks"
  caption="Free-to-paid reference points, and the distribution behind them"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median free-to-paid across products", "8%, freemium closer to 2% to 5%"], factId: "f-act-01" },
    { cells: ["Average across 80+ products, by sector", "3.7%, from 2.6% to 5.8%"], factId: "f-act-02" },
    { cells: ["200-product survey, bottom and second quartile", "under 2.5% in six months, and 10% to 15%"], factId: "f-act-03" },
    { cells: ["SaaS-only median activation rate", "30%"], factId: "f-act-04" },
    { cells: ["Median trial-to-paid by trial length", "42.5% at 17 to 32 days, 25.5% at 4 days or fewer"], factId: "f-glossary-0700-01" },
    { cells: ["Win rate of price localisation experiments", "62.3%"], factId: "f-glossary-0700-07" },
  ]}
/>

## How is free-to-paid conversion calculated?

Divide the free users who started paying by all free users in the same cohort,
then fix the window. The published survey uses six months. Shorter windows
understate systematically.

A product with a long consideration cycle measured at 30 days looks broken when it
is only slow. Pick one window, keep it, and state it beside the number. Changing
the window between quarters is how a flat metric starts to look like progress.

## Why the median describes nobody

The median is 8% and the distribution is bimodal. A quarter of freemium products
convert under 2.5% of free users within six months. Another quarter reaches 10% to
15%. Very few sit in between.

That shape matters for target-setting. A team at 2% is not 6 points from average;
it is in the lower mode, and the products in the upper mode are usually built
differently rather than executed better. The average across 80-plus products is
3.7%, ranging from 2.6% to 5.8% by sector, which is the fairer benchmark for a
traditional freemium tier.

## Free-to-paid is not trial-to-paid

Free-to-paid counts everyone on a free tier, including people who will never
evaluate paying. Trial-to-paid counts people who chose a time-boxed evaluation.
Median trial-to-paid runs 42.5% for trials of 17 to 32 days and 25.5% for four
days or fewer.

Comparing those two directly is the commonest way a freemium product convinces
itself it is failing. The denominators are not the same population.

## What moves it

Activation first. The SaaS-only median activation rate is 30%, and a user who
never reached first value has nothing to buy. Then price, because price
localisation wins 62.3% of experiments.

Often the step between value and payment is mechanical, not persuasive.

<FromMyWork exp="exp-043">
Both insurance lines moved by orders of magnitude once the
quote-to-redirect-to-purchase drop-offs were diagnosed: bike from about 10 a day
to 6,800+, car from about 5 a day to 2,300+. The fix was CTA placement, partner
sequencing and context-led nudges rather than more traffic.
</FromMyWork>
""",
  ),
  dict(
    id="glossary-0702", url="/glossary/paywall", archetype="glossary", hub="glossary",
    title="What is a Paywall? Types, Benchmarks and the Trade-off",
    meta_description="A paywall is the gate between free use and payment. Hard, soft and metered types, the 10.7% against 2.1% conversion gap, and what each type costs you.",
    h1="What is a paywall?", primary_keyword="what is a paywall",
    secondary_keywords=["paywall types", "hard paywall conversion benchmark"],
    entity_a="paywall",
    facts=["f-glossary-0700-04", "f-unit-05", "f-act-03", "f-act-10", "f-unit-02", "f-act-11"],
    experience=["exp-013"],
    links=L(HUB, ("/glossary/freemium", "freemium", "lateral"),
            ("/glossary/free-trial", "free trial", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("paywall-benchmarks",
              "Six paywall reference points: hard paywall against freemium download-to-paid conversion, the highest-lifetime-value paywall configuration, the bimodal freemium conversion split, store commission rates, the iOS to Android revenue gap and Apple's new core technology commission, each row carrying its source and verification date",
              "Paywall reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="Which paywall converts best?",
           a="Hard paywalls reach 10.7% median day-35 download-to-paid against 2.1% for freemium. That is a measured-rate difference and a funnel-size difference at once, so the higher rate does not automatically mean more revenue."),
      dict(q="What are the main paywall types?",
           a="Hard gates everything behind payment. Soft allows limited use then asks. Metered allows a fixed number of actions. Freemium keeps a permanently free tier. Each trades reach against measured conversion."),
      dict(q="Where should the paywall sit in onboarding?",
           a="After the first moment of value and before the second. Placed earlier it converts a colder audience; placed later it loses people who were ready. The right position is the step where the user has seen the product work."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Reads the hard-against-freemium conversion gap as a denominator effect rather than a persuasion win, and prices the paywall decision against store commission and platform revenue mix, which the type-comparison pages leave out entirely.",
    body="""
<AnswerBox>
What is a paywall? It is the gate between free use and payment. Hard paywalls
reach a 10.7% median day-35 download-to-paid conversion against 2.1% for
freemium. The gap is mostly denominator, not persuasion, and choosing between
them is a reach decision.
</AnswerBox>

<FactTable
  id="paywall-benchmarks"
  caption="Paywall reference points, and what each choice costs"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Day-35 download-to-paid, hard against freemium", "10.7% against 2.1%"], factId: "f-glossary-0700-04" },
    { cells: ["Highest-LTV configuration over 12 months", "weekly plus trial, $49.27 (about ₹4,725)"], factId: "f-unit-05" },
    { cells: ["Freemium products converting under 2.5% in six months", "one in four"], factId: "f-act-03" },
    { cells: ["Apple and Google commission", "15% under $1M a year, 30% above"], factId: "f-act-10" },
    { cells: ["iOS against Android ARPU, same app", "about 2x"], factId: "f-unit-02" },
    { cells: ["Apple core technology commission from January 2026", "5% of digital-goods revenue"], factId: "f-act-11" },
  ]}
/>

## What are the paywall types?

Four shapes, in order of how much they gate. Hard puts everything behind payment.
Soft allows limited use, then asks. Metered allows a fixed number of actions and
then stops. Freemium keeps a permanently free tier and sells an upgrade.

Each trades reach against measured conversion, and the trade is close to
mechanical. Gate earlier and the denominator shrinks to people who already
intended to pay, so the rate rises. Gate later and the rate falls while the base
grows.

## Which paywall converts better

Hard paywalls reach 10.7% median day-35 download-to-paid against 2.1% for
freemium. Read as persuasion that looks like a five-fold win. Read as arithmetic
it is a smaller, warmer denominator.

Total revenue is the question the rate cannot answer. A freemium product at 2.1%
of a base ten times larger earns more. One in four freemium products converts
under 2.5% of free users in six months, so the freemium bet needs volume it may
never get.

## Where the paywall should sit

After the first moment of value and before the second. Earlier and it meets a
colder audience. Later and it loses people who were already ready.

Configuration matters as much as position. The highest-lifetime-value setup
published is a weekly plan with a trial, at $49.27 over twelve months, roughly
₹4,725. Weekly pricing reads cheap at each charge and compounds across the year.

## What the paywall costs before any user sees it

Store commission lands on every rupee that passes through it. Apple and Google
both take 15% under $1M of annual revenue, about ₹9.59 crore, and 30% above. From
January 2026 Apple also applies a 5% core technology commission to digital-goods
revenue.

Platform mix then decides how much of that hurts. iOS earns roughly twice the ARPU
of Android on the same app, so an Android-heavy base pays similar fees on thinner
revenue.

## What lifts paywall conversion without a discount

Trust, more often than price. A user at the paywall has two questions. Is the
product worth the money, and is the company behind it reliable. Discounting answers
the first and ignores the second, which is why a price cut often moves conversion
less than expected. Naming the counterparty and putting a verifiable number beside
the price answers the second directly.

<FromMyWork exp="exp-013">
Trust was a conversion lever, not a brand exercise. Showing insurer brand names
lifted quote acceptance 34%, and surfacing the IRDAI-mandated claim settlement
ratio next to the price broke the market's habit of treating insurance as a pure
price comparison.
</FromMyWork>
""",
  ),

  dict(
    id="glossary-0703", url="/glossary/freemium", archetype="glossary", hub="glossary",
    title="What is Freemium? Model, Benchmarks and Break-even",
    meta_description="Freemium gives a permanently free tier and sells an upgrade. The conversion benchmarks, the margin the free tier costs, and when the model does not work.",
    h1="What is freemium?", primary_keyword="what is freemium",
    secondary_keywords=["freemium conversion rate", "freemium model benchmark"],
    entity_a="freemium",
    facts=["f-act-01", "f-act-02", "f-act-03", "f-act-08", "f-unit-31", "f-act-16"],
    experience=["exp-053"],
    links=L(HUB, ("/glossary/paywall", "paywall", "lateral"),
            ("/glossary/free-to-paid-conversion", "free-to-paid conversion", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("freemium-benchmarks",
              "Six freemium reference points: the median free-to-paid rate, the average across 80-plus products with its sector range, the bimodal split in a 200-product survey, mature contribution margin, marketplace take-rate spread and the share of revenue Indian platforms consume, each row carrying its source and verification date",
              "Freemium reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What conversion rate does freemium need to work?",
           a="It depends on the cost of a free user. With 70% to 80% contribution margin and near-zero marginal cost, 2% to 5% can work. With real serving cost per free user, the same rate loses money at scale."),
      dict(q="When does freemium not work?",
           a="When the free tier is expensive to serve, when the product's value needs a sales conversation, or when the free tier is good enough that nobody upgrades. All three show up as a conversion rate stuck below 2.5%."),
      dict(q="Is freemium better than a free trial?",
           a="Different instruments. Freemium builds a base and converts slowly. A trial forces a decision inside a window. Products with network effects or referral loops favour freemium; products with immediate single-user value favour trials."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Turns freemium from a conversion question into a margin question, pairing the conversion medians with contribution-margin and platform-cost figures so the break-even can actually be computed rather than asserted.",
    body="""
<AnswerBox>
What is freemium? It is a permanently free tier sold alongside a paid upgrade.
Median free-to-paid across products is 8%, and freemium specifically sits closer
to 2% to 5%. Whether that works is a margin question, not a conversion question.
</AnswerBox>

<FactTable
  id="freemium-benchmarks"
  caption="Freemium reference points, conversion and cost together"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median free-to-paid across products", "8%, freemium closer to 2% to 5%"], factId: "f-act-01" },
    { cells: ["Average across 80+ products, by sector", "3.7%, from 2.6% to 5.8%"], factId: "f-act-02" },
    { cells: ["200-product survey, bottom and second quartile", "under 2.5% in six months, and 10% to 15%"], factId: "f-act-03" },
    { cells: ["Mature SaaS contribution margin", "70% to 80%"], factId: "f-act-08" },
    { cells: ["Marketplace take rates", "under 2% to over 70%, most 10% to 20%"], factId: "f-unit-31" },
    { cells: ["Revenue Indian quick-commerce platforms consume", "30% to 35%"], factId: "f-act-16" },
  ]}
/>

## How does freemium work

A free tier carries the acquisition. The paid tier carries the revenue. The free
tier has to be useful enough to keep people and limited enough that the useful
next step costs money.

Getting that boundary wrong fails in two directions. Too generous and nobody
upgrades. Too mean and nobody stays long enough to consider it. The tell for the
first is a conversion rate stuck under 2.5%, which one in four freemium products
reports within six months.

## What conversion rate freemium needs

The rate alone answers nothing. Cost of a free user decides it.

<Example illustrative>
100,000 free users costing ₹2 each a month, about $0.02, is ₹2,00,000 of monthly
cost, roughly $2,086. At 3% conversion and ₹800 of monthly revenue per payer,
about $8.34, the paid base returns ₹24,00,000, about $25,029.
</Example>

With mature contribution margins of 70% to 80% and near-zero marginal serving
cost, 2% to 5% works comfortably. With real per-user cost, the same rate loses
money as the free base grows. Average freemium-to-paid across 80-plus products is
3.7%, ranging 2.6% to 5.8% by sector, so most products live in the range where
cost decides the outcome.

## What the distribution channel takes

Freemium economics get set outside the product too. Marketplace take rates span
under 2% to over 70%, and most sit between 10% and 20%. Indian quick-commerce
platforms consume 30% to 35% of revenue once listing fees, mandatory ad spend,
commission and operations are counted.

A freemium model that pencils at 80% margin does not survive a channel taking a
third of the paid revenue. Compute the margin after the channel, not before it.

## When to choose freemium

Choose it when the free tier does work the paid tier cannot buy: distribution,
referral, network effects, content. Avoid it when value needs a sales
conversation, or when serving a free user costs real money.

<FromMyWork exp="exp-053">
Validating demand on Medium before building anything, then scaling a content
platform to 10,000+ published blogs. It was also where I learned SEO and content
operations by running them rather than reading about them.
</FromMyWork>

That is the freemium logic without a product: give the work away where the
audience already is, and find out whether anyone wants it before paying to build
the tier.
""",
  ),

  dict(
    id="glossary-0704", url="/glossary/free-trial", archetype="glossary", hub="glossary",
    title="What is a Free Trial? Length, Benchmarks and Trade-offs",
    meta_description="A free trial gives full access for a fixed window. The length data, the conversion medians by category, and why India needs the payment rail decided first.",
    h1="What is a free trial?", primary_keyword="what is a free trial",
    secondary_keywords=["free trial length benchmark", "free trial conversion rate"],
    entity_a="free-trial",
    facts=["f-glossary-0700-01", "f-glossary-0700-02", "f-glossary-0700-05", "f-unit-05",
           "f-unit-25", "f-act-06"],
    experience=["exp-012"],
    links=L(HUB, ("/glossary/trial-to-paid-conversion", "trial-to-paid conversion", "lateral"),
            ("/glossary/paywall", "paywall", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"), BOFU),
    visuals=V("trial-benchmarks",
              "Six free-trial reference points: median trial-to-paid by trial length, the spread by category, the lifetime-value lift from adding a trial to an annual plan, the highest-lifetime-value configuration, monthly UPI Autopay mandate volume in India and typical time to value, each row carrying its source and verification date",
              "Free-trial reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="How long should a free trial be?",
           a="Longer converts better in the published data: 42.5% median for trials of 17 to 32 days against 25.5% for four days or fewer. The long trial buys enough sessions for the product to prove itself."),
      dict(q="Should the trial require a card?",
           a="Requiring one raises conversion and shrinks starts. In India the question is sharper, because the card rail itself fails more often than UPI Autopay, which now carries more than 120 million mandates a month."),
      dict(q="Should a trial sit on the monthly or annual plan?",
           a="Annual, usually. Adding a trial to an annual plan raises one-year lifetime value by 35% against a direct purchase, so the choice is rarely trial against no trial. It is which plan the trial sits on."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Ties trial length to time-to-value rather than treating it as a pricing preference, and makes the payment rail part of the trial design, which matters in India where the card mandate is the failure point rather than the offer.",
    body="""
<AnswerBox>
What is a free trial? It is full or near-full access for a fixed window, after
which payment begins. Median trial-to-paid runs 42.5% for trials of 17 to 32 days
and 25.5% for four days or fewer. Length is the strongest lever, and it works by
buying sessions.
</AnswerBox>

<FactTable
  id="trial-benchmarks"
  caption="Free-trial reference points, length and configuration"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median trial-to-paid by length", "42.5% at 17 to 32 days, 25.5% at 4 days or fewer"], factId: "f-glossary-0700-01" },
    { cells: ["Spread by category, strongest against weakest", "43.5% against 22.2%"], factId: "f-glossary-0700-02" },
    { cells: ["Trial added to an annual plan, one-year LTV", "+35%"], factId: "f-glossary-0700-05" },
    { cells: ["Highest-LTV configuration over 12 months", "weekly plus trial, $49.27 (about ₹4,725)"], factId: "f-unit-05" },
    { cells: ["UPI Autopay mandates created monthly in India", "more than 120 million"], factId: "f-unit-25" },
    { cells: ["Typical time to value", "about 1 day 12 hours, from under 5 minutes to 2 weeks"], factId: "f-act-06" },
  ]}
/>

## How long should a free trial run

Long enough to cross time to value, and no longer. Typical time to value averages
about 1 day 12 hours, from under 5 minutes for simple tools to two weeks for
enterprise platforms. A trial shorter than that window cannot work, whatever the
copy says.

The data agrees. Median trial-to-paid runs 42.5% for trials of 17 to 32 days and
25.5% for four days or fewer. The long trial is not generosity. It is buying
enough sessions for the product to demonstrate itself.

## What the trial should sit on

The annual plan, in most cases. Adding a trial to an annual plan raises one-year
lifetime value by 35% against a direct purchase, so the real choice is which plan
carries the trial rather than whether to offer one.

Configuration outranks both. The highest-lifetime-value setup published is a
weekly plan with a trial, at $49.27 over twelve months, roughly ₹4,725. Category
sets the floor underneath all of it, with medians spanning 43.5% in the strongest
category and 22.2% in the weakest.

## Why the payment rail is part of trial design

A trial ends in a charge, so the rail that charge runs on is part of the design
rather than an implementation detail. In India that decision moves conversion more
than trial length does. UPI Autopay now carries more than 120 million mandates a
month, and a trial that converts onto a card mandate meets a rail that fails more
often.

<FromMyWork exp="exp-012">
Not supporting UPI was the single most expensive omission in the funnel. Card and
net banking were the only options in a market where the buying demographic pays by
UPI. Integration took six weeks, and 73% of purchases came through UPI in the
first month after launch.
</FromMyWork>

## What a trial cannot fix

A trial exposes the product rather than selling it. If the product does not
demonstrate value inside the window, a longer trial produces a longer look at the
same gap, and a shorter one simply hides it. Fix time to value first, then set the
length around it.

The same holds for the reminder sequence. Warning a user before the charge lands
reduces refunds and disputes, and it does not make an unconvinced user convert. The
trial has already answered that question by then.
""",
  ),

  dict(
    id="glossary-0705", url="/glossary/north-star-metric", archetype="glossary", hub="glossary",
    title="What is a North Star Metric? Definition and Selection",
    meta_description="A north star metric is the single number a team steers by. How to pick one, the tests it has to pass, and the reported figures that fail every one of them.",
    h1="What is a north star metric?", primary_keyword="what is a north star metric",
    secondary_keywords=["north star metric examples", "how to choose a north star metric"],
    entity_a="north-star-metric",
    facts=["f-unit-24", "f-act-05", "f-unit-23", "f-unit-08", "f-act-19", "f-act-04"],
    experience=["exp-032", "exp-033"],
    links=L(HUB, ("/glossary/activation-rate", "activation rate", "lateral"),
            ("/glossary/aha-moment", "the aha moment", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks", "related"), BOFU),
    visuals=V("north-star-tests",
              "Six reference points for choosing a north star metric: the share of companies that track activation, the share of users who never reach first value, the top-decile against median activation gap, the standing LTV to CAC bar, platform-reported against true return on ad spend, and the SaaS-only activation median, each row carrying its source and verification date",
              "What a north star candidate has to survive. Verified 30 September 2026."),
    faq=[
      dict(q="What makes a good north star metric?",
           a="It has to move before revenue does, respond to work the team controls, and break if the product gets worse. A metric that only rises is a vanity metric with a plan attached."),
      dict(q="Should revenue be the north star metric?",
           a="Rarely. Revenue is the outcome, and it lags too far behind the work to steer by. The better candidate is the leading indicator that predicts it, which for most product-led companies is activation."),
      dict(q="How many north star metrics should a team have?",
           a="One, with a small set of inputs beneath it. Aggregating independently-set team goals produces a list, and a list is a tracker rather than a direction."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Gives three falsifiable tests a candidate metric has to pass and then applies them to a real reported figure that fails — platform-reported return on ad spend against true return after commission — instead of listing well-known companies' metrics.",
    body="""
<AnswerBox>
What is a north star metric? It is the single number a team steers by, chosen
because it leads revenue rather than reports it. Only about 34% of product-led
companies track activation, the metric that best predicts whether a free user ever
pays, which is where most north star choices go wrong.
</AnswerBox>

<FactTable
  id="north-star-tests"
  caption="What a north star candidate has to survive"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Companies tracking activation at all", "about 34%"], factId: "f-unit-24" },
    { cells: ["New users who never reach first value", "two thirds"], factId: "f-act-05" },
    { cells: ["Top decile against median day-one activation", "21% against 5%"], factId: "f-unit-23" },
    { cells: ["Standing LTV to CAC bar", "3 to 1, rising to 4 or 5 to 1"], factId: "f-unit-08" },
    { cells: ["Reported against true return on ad spend, quick commerce", "3x to 5x against 1.2x to 2.5x"], factId: "f-act-19" },
    { cells: ["SaaS-only median activation rate", "30%"], factId: "f-act-04" },
  ]}
/>

## What a north star metric has to do

Three tests, and a candidate has to pass all of them.

It has to move before revenue does, or it cannot steer anything. It has to respond
to work the team controls, or it is a weather report. And it has to be able to
fall when the product gets worse, because a metric that only rises is a vanity
metric with a plan attached.

Cumulative totals fail the third test by construction. Registered users only goes
up. So does lifetime downloads.

## Why revenue is the wrong choice

Revenue is the outcome. It lags the work by the length of the sales or conversion
cycle, which makes it useless for steering inside a quarter.

The better candidate leads it. For most product-led companies that is activation:
the SaaS-only median is 30%, two thirds of new users never reach first value, and
top-decile products see 21% day-one activation against a 5% median. A metric with
that much spread is a metric with room to be moved.

## A reported number that fails all three tests

Quick-commerce platforms report 3x to 5x return on ad spend. True return after
commission and cost of goods runs 1.2x to 2.5x.

Steering by the reported figure fails every test. It does not lead anything,
because it is a rearward calculation. It barely responds to the team's work,
because the platform computes it. And it cannot fall far, because the definition
excludes the costs that would make it fall. The LTV to CAC bar of 3 to 1 has the
same problem when quoted without payback beside it.

## One metric, not eleven

The failure mode is not choosing badly. It is choosing many.

<FromMyWork exp="exp-032">
Aggregating independently-set team OKRs produced 11 objectives and 34 key results,
which is a project tracker with aspirational language rather than OKRs. Replacing
it with three annual company objectives and quarterly goals linked to them
restored the connection between daily work and direction.
</FromMyWork>

A single metric only works if the organisation can see it and argue about it.

<FromMyWork exp="exp-033">
Three artefacts fixed decision coherence: a 3-page quarterly Strategic Brief
shared with the whole organisation, a 60-minute bi-weekly cross-team roadmap sync
with a fixed agenda, and a Decision Log recording what was decided, why, and what
was rejected.
</FromMyWork>
""",
  ),
  dict(
    id="glossary-0706", url="/glossary/aha-moment", archetype="glossary", hub="glossary",
    title="What is the Aha Moment? Definition and How to Find It",
    meta_description="The aha moment is when a user first sees the product work. How to locate it in data, the time-to-value benchmarks, and why two-thirds never arrive.",
    h1="What is the aha moment?", primary_keyword="what is the aha moment",
    secondary_keywords=["aha moment definition", "time to value benchmark"],
    entity_a="aha-moment",
    facts=["f-act-05", "f-act-06", "f-act-07", "f-unit-23", "f-unit-22", "f-unit-39"],
    experience=["exp-046"],
    links=L(HUB, ("/glossary/activation-rate", "activation rate", "lateral"),
            ("/glossary/north-star-metric", "north star metric", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks", "related"), BOFU),
    visuals=V("aha-benchmarks",
              "Six reference points for the aha moment: the share of users who never reach it, typical time to value by product complexity, activation and time to value by category, the top-decile against median day-one activation gap, the average activation rate and day-one against day-30 retention by platform, each row carrying its source and verification date",
              "Aha-moment reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="How do I find my product's aha moment?",
           a="Compare retained cohorts against churned ones and look for the earliest action that separates them. The aha moment is a hypothesis about that action, and it is testable: move more users through it and retention should rise."),
      dict(q="How fast should the aha moment arrive?",
           a="Typical time to value averages about 1 day 12 hours, from under 5 minutes for simple tools to two weeks for enterprise platforms. AI and machine-learning products reach it near 17 hours at the median."),
      dict(q="What is the difference between the aha moment and activation?",
           a="The aha moment is the experience. Activation is the measured event that stands in for it. The first explains why the number moves; the second proves the experience is real and repeatable."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Treats the aha moment as a falsifiable hypothesis with a stated test rather than a workshop exercise, and grounds the timing in published time-to-value medians by category instead of generic advice to shorten onboarding.",
    body="""
<AnswerBox>
What is the aha moment? It is the point where a new user first sees the product
do the thing they came for. Two thirds of new SaaS users never reach it. Typical
time to value averages about 1 day 12 hours, which is the window the whole of
onboarding has to work inside.
</AnswerBox>

<FactTable
  id="aha-benchmarks"
  caption="Aha-moment reference points, timing and reach"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["New users who never reach the aha moment", "two thirds"], factId: "f-act-05" },
    { cells: ["Typical time to value", "about 1 day 12 hours, under 5 minutes to 2 weeks"], factId: "f-act-06" },
    { cells: ["Activation and time to value, AI and ML against CRM", "54.8% at about 17 hours, against 42.6%"], factId: "f-act-07" },
    { cells: ["Top decile against median day-one activation", "21% against 5%"], factId: "f-unit-23" },
    { cells: ["Average activation rate across SaaS", "36%"], factId: "f-unit-22" },
    { cells: ["Day-1 and day-30 retention, iOS against Android", "25.65% and 4.13% against 23.01% and 2.59%"], factId: "f-unit-39" },
  ]}
/>

## How to find the aha moment

Work backwards from retention. Take a cohort that stayed and a cohort that left,
then look for the earliest action that separates them. That action is the
candidate.

Treat it as a hypothesis with a test attached. Move more users through the
candidate action and retention should rise. If it does not, the action correlated
with something else and the hypothesis was wrong. Most teams skip that test and
adopt the first plausible answer from a workshop.

## How fast it has to arrive

Inside the window the user is still paying attention. Typical time to value
averages about 1 day 12 hours, spanning under 5 minutes for simple tools to two
weeks for enterprise platforms. AI and machine-learning products reach it near 17
hours at the median and activate at 54.8%, against 42.6% for CRM and sales tools.

Platform sets a harder limit than product complexity does. Day-30 retention runs
4.13% on iOS and 2.59% on Android, so an Android-heavy product has less time to
prove itself and more of its audience to lose while trying.

## Why two thirds never arrive

Because onboarding asks for work before it gives anything. The average activation
rate across SaaS is 36%, and the top decile reaches 21% day-one activation against
a 5% median. That spread is not a copywriting gap. It is a difference in how much
the product does before it asks.

The practical rule: every step before the aha moment needs a reason to exist that
the user would accept. Account setup, permissions and profile questions rarely
pass that test.

## What it looks like across a portfolio

The aha moment is product-specific, and the pattern underneath it often is not.

<FromMyWork exp="exp-046">
Setting portfolio-level direction on high-intent entry points, trust signals and
the core paths through each product lifted activation depth 18-25% across four
consumer and B2B platforms. The room to move was in what the four had in common, not in any one
roadmap.
</FromMyWork>

Four products, one set of changes. High-intent entry points and trust signals are
usually where the first moment of value is being blocked.
""",
  ),

  dict(
    id="glossary-0707", url="/glossary/cohort-analysis", archetype="glossary", hub="glossary",
    title="What is Cohort Analysis? Method, Curves and Benchmarks",
    meta_description="Cohort analysis groups users by when they arrived and tracks them separately. The method, what a healthy curve looks like, and what averages hide.",
    h1="What is cohort analysis?", primary_keyword="what is cohort analysis",
    secondary_keywords=["cohort analysis method", "retention cohort benchmark"],
    entity_a="cohort-analysis",
    facts=["f-unit-38", "f-unit-39", "f-unit-11", "f-glossary-0700-02", "f-act-18", "f-act-14"],
    experience=["exp-020", "exp-009"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks", "related"), BOFU),
    visuals=V("cohort-benchmarks",
              "Six cohort reference points: median day-1 and day-30 app retention, the iOS and Android split, annual renewal by category, trial conversion by category, the lifespan of a withdrawn Indian membership programme and quick-commerce market share by gross merchandise value, each row carrying its source and verification date",
              "Cohort reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What does a healthy cohort curve look like?",
           a="It falls steeply, then flattens. A flattening curve means a durable use case has been found. A curve that keeps sliding has not found one, however strong its first week looks."),
      dict(q="How large does a cohort need to be?",
           a="Large enough that a week's noise does not move the line. In practice, group by month rather than by week for small products, and keep the cohort closed once it is defined."),
      dict(q="What does an aggregate retention number hide?",
           a="Direction. A product whose newest cohorts retain worse can show flat aggregate retention for months while the underlying trend worsens, because older and better cohorts are still in the average."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Uses a real withdrawn Indian membership programme and a decomposed growth curve as the worked cases, rather than a generic retention grid, and states the specific way an aggregate number can hold flat while every new cohort worsens.",
    body="""
<AnswerBox>
What is cohort analysis? It groups users by when they arrived and tracks each
group separately, so improvement and decay stay visible. The median app retains
4% of users at day 30. An aggregate number that size tells you nothing about
direction; cohorts do.
</AnswerBox>

<FactTable
  id="cohort-benchmarks"
  caption="Cohort reference points, and what each comparison shows"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median app retention, day 1 and day 30", "25.3% and 4%"], factId: "f-unit-38" },
    { cells: ["Day-1 and day-30 retention, iOS against Android", "25.65% and 4.13% against 23.01% and 2.59%"], factId: "f-unit-39" },
    { cells: ["Annual renewal median, strongest against weakest", "40% against 23%"], factId: "f-unit-11" },
    { cells: ["Trial conversion by category, strongest against weakest", "43.5% against 22.2%"], factId: "f-glossary-0700-02" },
    { cells: ["Zepto Pass paid membership lifespan", "14 months, February 2024 to April 2025"], factId: "f-act-18" },
    { cells: ["Indian quick-commerce share by GMV", "Blinkit 46%, Instamart 24%, Zepto 22%"], factId: "f-act-14" },
  ]}
/>

## How cohort analysis works

Fix a start date. Every user who arrived in that period belongs to that cohort
permanently. Then measure the same thing at the same ages across cohorts: day 7,
day 30, day 90.

The cohort has to stay closed. Adding later arrivals to an earlier cohort mixes
ages and flatters every reading, and it is the single commonest error in a
retention dashboard.

## What a healthy curve looks like

Steep, then flat. A curve that falls hard and then levels has found a group with a
durable use case. A curve that keeps sliding has not found one, whatever its first
week looked like.

Level matters less than shape, and the levels themselves are sobering. Median day-1
return is 25.3% and median day-30 retention is 4%. Compared across cohorts, the
useful question is whether the newest cohort sits above the one before it at the
same age.

## What an aggregate number hides

Direction, and it hides it for months. Older, better cohorts stay in the average
long after the product stopped producing cohorts that good.

<Example illustrative>
Six monthly cohorts retaining 20%, 19%, 18%, 17%, 16% and 15% at day 30 average
17.5%. The average looks stable across reporting periods. Every new cohort is
worse than the last.
</Example>

Platform splits do the same. iOS retains 4.13% at day 30 against 2.59% on Android,
so a shifting platform mix moves the blended number without any cohort changing.

## Cohorts decide which bets get withdrawn

Category level sets expectations before the product does. Annual renewal medians
run 40% in the strongest categories against 23% in the weakest, and trial
conversion spans 43.5% to 22.2%. A programme judged against the wrong category
gets killed or kept for the wrong reason.

Zepto Pass, a paid membership in Indian quick commerce, ran fourteen months from
February 2024 to April 2025 before being replaced, in a market where Blinkit holds
about 46% of gross merchandise value against Instamart at 24% and Zepto at 22%.
A membership programme in third place is a cohort bet, and the cohorts answer it.

## What cohorts are worth before the work starts

Decomposition, mostly.

<FromMyWork exp="exp-020">
Scaling from 3.8M to 45M+ monthly actives came from three sources in roughly equal
thirds: organic search, referral and sharing, and paid acquisition buying
higher-intent users than before.
</FromMyWork>

<FromMyWork exp="exp-009">
Two weeks went into assembling a clean dataset of roughly 22,000 prior
applications before proposing anything. The target set afterwards — 70%
disbursement against an industry range of 20-35% — was chosen to force a different
operating model rather than to be achievable.
</FromMyWork>
""",
  ),

  dict(
    id="glossary-0708", url="/glossary/unit-economics", archetype="glossary", hub="glossary",
    title="What are Unit Economics? Definition, Formula and Margins",
    meta_description="Unit economics is the profit and loss of one customer. The formula, the margin benchmarks, and the platform and payment costs most models leave out.",
    h1="What are unit economics?", primary_keyword="what are unit economics",
    secondary_keywords=["unit economics formula", "contribution margin benchmark"],
    entity_a="unit-economics",
    facts=["f-act-08", "f-act-09", "f-act-10", "f-act-12", "f-unit-31", "f-act-16"],
    experience=["exp-054", "exp-025"],
    links=L(HUB, ("/glossary/cac-payback-period", "CAC payback period", "lateral"),
            ("/glossary/ltv", "LTV", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("unit-economics-costs",
              "Six cost reference points for unit economics: mature contribution margin, median gross margin by revenue band, store commission, Indian domestic and international payment costs, marketplace take rates and the share of revenue Indian quick-commerce platforms consume, each row carrying its source and verification date",
              "The costs a unit-economics model has to carry. Verified 30 September 2026."),
    faq=[
      dict(q="What is the unit economics formula?",
           a="Revenue per customer minus the variable cost of serving them, compared against what they cost to acquire. The contribution margin is the first half; unit economics works only when it is set against acquisition cost."),
      dict(q="What is a good contribution margin?",
           a="Mature SaaS runs 70% to 80%, and median gross margin for private companies between $5M and $50M ARR is 71% to 74%. Below 70% the model needs either higher prices or lower serving cost."),
      dict(q="What do unit economics models usually leave out?",
           a="Store commission, payment processing, tax and refunds. Each is a percentage of revenue rather than a fixed cost, so leaving them out overstates margin by the same proportion at every scale."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Assembles the specific percentage costs an Indian digital business actually pays — store commission, domestic gateway plus GST, international routing spread, platform take — into one model, where the general guides stop at gross margin.",
    body="""
<AnswerBox>
What are unit economics? The profit and loss of a single customer: revenue,
minus the variable cost of serving them, set against what they cost to acquire.
Mature SaaS contribution margins run 70% to 80%. Most models overstate that,
because they omit costs charged as a share of revenue.
</AnswerBox>

<FactTable
  id="unit-economics-costs"
  caption="The costs a unit-economics model has to carry"
  columns={["Cost", "Figure"]}
  rows={[
    { cells: ["Mature SaaS contribution margin", "70% to 80%"], factId: "f-act-08" },
    { cells: ["Median gross margin, $5M to $50M ARR", "71% to 74%"], factId: "f-act-09" },
    { cells: ["Apple and Google commission", "15% under $1M a year, 30% above"], factId: "f-act-10" },
    { cells: ["India domestic gateway, and international cards", "2% plus 18% GST, and 3%"], factId: "f-act-12" },
    { cells: ["Marketplace take rates", "under 2% to over 70%, most 10% to 20%"], factId: "f-unit-31" },
    { cells: ["Revenue Indian quick-commerce platforms consume", "30% to 35%"], factId: "f-act-16" },
  ]}
/>

## How unit economics is calculated

Take revenue from one customer over their life. Subtract every variable cost of
serving them. The remainder is contribution margin. Set that against acquisition
cost, and the model either closes or it does not.

<Example illustrative>
₹800 of monthly revenue, about $8.34, at 72% contribution margin leaves ₹576,
about $6.01. Against ₹4,800 of acquisition cost, roughly $50.06, the customer
repays in the ninth month.
</Example>

Contribution margin is the internal number. Gross margin is the reported one.
Mature SaaS runs 70% to 80% contribution. For private companies between $5M and
$50M ARR, roughly ₹47.95 crore to ₹479.45 crore, median gross margin is 71% to
74%.

## The costs models leave out

All of them are percentages of revenue, which is why omitting them overstates
margin identically at every scale.

Store commission takes 15% under $1M of annual revenue, about ₹9.59 crore, and 30%
above. Indian domestic payments cost 2% plus 18% GST through a gateway, and
international card exports 3%. A marketplace layer adds its own take, usually 10%
to 20% and occasionally far more.

Stack those and a 75% contribution margin becomes something quite different before
a single support ticket enters the model.

## Where the channel decides the business

Indian quick-commerce platforms consume 30% to 35% of revenue across listing fees,
mandatory ad spend, commission and operations. No pricing change inside the product
recovers a third of revenue taken at the channel.

That makes channel choice a unit-economics decision rather than a distribution one.
It needs deciding before the price is set rather than after, because the price has
to carry the channel cost and the channel cost is not small. A product priced for
direct sale and then pushed through a platform taking a third has no margin left
to defend.

## When the numbers say stop

Unit economics is most useful when it argues against the plan.

<FromMyWork exp="exp-054">
A hyperlocal D2C food business at 300+ daily tiffins that unit economics told me
to pivot out of. Customer feedback pointed at fresh grocery retail instead, and the
decision was an economics call rather than a demand one.
</FromMyWork>

Ignoring it costs more than the revenue it chases.

<FromMyWork exp="exp-025">
Launching a cheaper line to chase a distributor's forecast damaged the premium
position and the forecast never materialised. We sold 23% of the order in twelve
months and discontinued the line within nine.
</FromMyWork>
""",
  ),

  dict(
    id="glossary-0709", url="/glossary/take-rate", archetype="glossary", hub="glossary",
    title="What is Take Rate? Formula, Benchmarks and Pressure",
    meta_description="Take rate is the share of transaction value a platform keeps. The formula, benchmarks from app stores to Indian delivery, and where it is under pressure.",
    h1="What is take rate?", primary_keyword="what is take rate",
    secondary_keywords=["take rate formula", "marketplace take rate benchmark"],
    entity_a="take-rate",
    facts=["f-unit-31", "f-act-20", "f-act-21", "f-act-22", "f-act-15", "f-act-17"],
    experience=["exp-024", "exp-051"],
    links=L(HUB, ("/glossary/unit-economics", "unit economics", "lateral"),
            ("/glossary/arpu", "ARPU", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"), BOFU),
    visuals=V("take-rate-benchmarks",
              "Six take-rate reference points: the overall marketplace spread, Google Play's 2026 rates, eBay and Etsy reported take rates, Indian food-delivery commissions, Indian quick-commerce commissions and the ONDC alternative, each row carrying its source and verification date",
              "Take-rate reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good take rate?",
           a="Most established multi-vendor marketplaces sit between 10% and 20%, and the full range runs from under 2% to over 70%. The right level depends on how much of the transaction the platform actually performs."),
      dict(q="How is take rate calculated?",
           a="Platform revenue divided by gross merchandise value over the same period. Whether to include advertising, listing fees and logistics revenue changes the answer substantially, so state what is inside the numerator."),
      dict(q="Are take rates rising or falling?",
           a="Both, in different places. Etsy's rose 180 basis points year on year while Google Play's standard rate fell to 10% on the first $1M. Regulatory pressure and competition are pushing digital rates down and marketplace rates up."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Sets the take rates a business actually faces side by side across app stores, global marketplaces, Indian food delivery and quick commerce, with the ONDC 3% alternative, rather than quoting one sector's range as the benchmark.",
    body="""
<AnswerBox>
What is take rate? It is the share of transaction value a platform keeps. Most
established multi-vendor marketplaces sit between 10% and 20%, with the full range
running from under 2% to over 70%. The level tracks how much of the transaction the
platform actually performs.
</AnswerBox>

<FactTable
  id="take-rate-benchmarks"
  caption="Take rates a business actually faces, by platform"
  columns={["Platform", "Take rate"]}
  rows={[
    { cells: ["Marketplaces overall", "under 2% to over 70%, most 10% to 20%"], factId: "f-unit-31" },
    { cells: ["Google Play, 2026 standard", "10% on the first $1M, 20% above"], factId: "f-act-20" },
    { cells: ["eBay and Etsy, reported", "13.91% and 25.7%"], factId: "f-act-21" },
    { cells: ["Zomato and Swiggy, restaurant commission", "18% to 25% and 18% to 22%"], factId: "f-act-22" },
    { cells: ["Indian quick commerce", "Zepto 10% to 18%, Instamart 15% to 25%, Blinkit 22%"], factId: "f-act-15" },
    { cells: ["ONDC", "near 3%"], factId: "f-act-17" },
  ]}
/>

## How is take rate calculated?

Divide platform revenue by gross merchandise value over the same period. The
difficulty is the numerator. Advertising revenue, listing fees, payment margin and
logistics all sit at the platform's discretion, and including them changes the
figure substantially.

<Example illustrative>
₹1,00,00,000 of monthly gross merchandise value, about $10.43 lakh in dollars at
₹95.89, against ₹15,00,000 of platform revenue gives a 15% take rate.
</Example>

State what is inside the numerator beside the number. The same headline rate,
counted as commission alone or as everything the platform charges, describes two
very different businesses.

## What take rates look like in practice

Google Play's 2026 standard rate is 10% on the first $1M of annual revenue, about
₹9.59 crore, and 20% above. eBay reported 13.91% and Etsy 25.7%. Indian food
delivery runs 18% to 25% at Zomato and 18% to 22% at Swiggy. Indian quick commerce
spans Zepto at 10% to 18%, Instamart at 15% to 25% and Blinkit at about 22%.

The pattern is not scale. It is how much work the platform does. Etsy carries
discovery for products with no brand of their own and charges accordingly. eBay
carries less and charges less.

## Where the rate is under pressure

In opposite directions at once. Etsy's rate rose 180 basis points year on year
while Google Play's standard fell to 10% on the first million. Regulation and
competition push digital distribution rates down; marketplace rates drift up as
platforms add advertising and logistics.

India has the sharpest version of that split. ONDC offers a route near 3% against
the 15% to 25% incumbents charge. Whether sellers move depends on whether the
incumbent's discovery is worth the difference, which is an empirical question with
a very large number attached.

## What a high take rate forces on a seller

Assortment discipline, first.

<FromMyWork exp="exp-024">
Carrying the full catalogue was never viable, so the first real work was choosing
what not to stock. Of roughly 1,200 SKUs we prioritised 85 — under 8% — against
the highest-probability commercial opportunities for the market's development
stage.
</FromMyWork>

Then a structure that reduces the number of paid hops between product and buyer.

<FromMyWork exp="exp-051">
A hub-and-spoke launch with three to four anchor distributors per city,
aggregating downstream vendor demand into one consolidation point, was what made
direct-to-vendor fulfilment from a single Bangalore warehouse work at all.
</FromMyWork>
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-glossary-02",
        "wave": 1,
        "verified_on": VERIFIED,
        "fx_rate": 95.89,
        "default_cta": {
            "primary": {"label": "Get a monetisation review", "href": "/work-with-me"},
            "secondary": {"label": "Browse the glossary", "href": "/glossary"},
        },
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": PAGES,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    out.write_text(json.dumps(spec(), indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(PAGES)} pages, {len(spec()['facts'])} facts")
