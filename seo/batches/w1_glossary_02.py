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
    fact("f-act-09", "Median gross margin for private SaaS between 5 and 50 million dollars ARR is 71% to 74%",
         "71-74", "%", CZ,
         "The median gross margin for private SaaS companies with $5M-$50M ARR is 71-74% in 2026."),
    fact("f-act-10", "Apple and Google both charge 15% on the first million dollars of annual revenue and 30% above it, plus a 99 dollar and 25 dollar developer fee",
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
    fact("f-act-20", "Google Play's 2026 standard rate is 10% on the first million dollars of annual revenue and 20% above it",
         "10", "%", ("https://www.strataigize.com/insights/google-play-external-payments-fee-changes-2026/",
                     "Google Play External Payments and Fee Changes", "strataigize.com", "2026"),
         "Google lowered its baseline: the standard rate is now 10% on the first $1 million and 20% above it, "
         "plus a billing fee charged separately.", False),
    fact("f-act-21", "eBay reported a 13.91% take rate on 22.2 billion dollars of gross merchandise volume in the first quarter of 2026, against Etsy at 25.7%",
         "13.91", "%", ("https://www.feinternational.com/blog/marketplace-app-valuation",
                        "Marketplace App Valuation 2026", "feinternational.com", "2026"),
         "eBay reported a take rate of 13.91% on $22.2 billion of GMV in Q1 2026, while Etsy reported 25.7%, "
         "up 180 basis points year over year.", False),
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
            ("/tools/activation-rate-benchmarker", "the activation rate benchmarker", "tool"),
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
            ("/tools/paywall-uplift-calculator", "the paywall uplift calculator", "tool"),
            ("/india/inr-price-points-that-convert", "INR price points that convert", "related"),
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
            ("/tools/freemium-break-even-calculator", "the freemium break-even calculator", "tool"),
            ("/india/free-trials-in-india", "free trials in India", "related"), BOFU),
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
