#!/usr/bin/env python3
"""Batch w1-glossary-01 — the unit-economics cluster.

Source of truth for twelve glossary pages. Kept as Python rather than raw JSON
so the prose stays readable and the fact pool stays one object, which is what
makes the §C2 reuse cap countable. Run it to emit the JSON spec, then feed that
to seo/scripts/author.py.

Every number in every body traces to a fact in POOL that the page lists, or sits
inside an <Example illustrative> block, which is the only exemption G03 grants.
"""
from __future__ import annotations

import json
from pathlib import Path

VERIFIED = "2026-09-30"

RC = ("https://www.revenuecat.com/state-of-subscription-apps",
      "State of Subscription Apps 2026", "revenuecat.com", "2026")
AD = ("https://adapty.io/state-of-in-app-subscriptions/",
      "State of In-App Subscriptions 2026", "adapty.io", "2026")
SC = ("https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf",
      "2025 B2B SaaS Retention Benchmarks", "saas-capital.com", "2025")
LR = ("https://linkrunner.io/tools/cost-per-install-benchmark",
      "Cost per install benchmarks by country, platform and category",
      "linkrunner.io", "2026")


def fact(fid, claim, value, unit, src, excerpt, primary=True):
    url, title, domain, pub = src
    return {
        "fact_id": fid, "claim": claim, "value": value, "unit": unit,
        "source_url": url, "source_title": title, "source_domain": domain,
        "excerpt": excerpt, "published_on": pub, "verified_on": VERIFIED,
        "method": "search_index", "primary": primary,
    }


POOL = {f["fact_id"]: f for f in [
    fact("f-unit-01", "Average mobile subscription ARPU is 8.41 US dollars", "8.41", "USD", RC,
         "The average mobile subscription ARPU is $8.41."),
    fact("f-unit-02", "iOS earns roughly twice the ARPU of Android on the same app", "2", "x", RC,
         "iOS pays about 2x the ARPU compared to Android."),
    fact("f-unit-03", "India and South-East Asia show the highest median refund rate at 7.7%, against 3.4% in North America",
         "7.7", "%", RC,
         "IN/SEA leads with a 7.7% median refund rate; North America's is 3.4%."),
    fact("f-unit-04", "AI apps hold a 41% year-one realised LTV premium: 30.16 dollars median against 21.37 for non-AI apps",
         "30.16", "USD", RC,
         "AI apps sustain a 41% Year 1 realized LTV premium ($30.16 median vs $21.37 median)."),
    fact("f-unit-05", "A weekly plan with a trial is the highest-LTV paywall configuration at 49.27 dollars over twelve months",
         "49.27", "USD", RC,
         "Weekly+trial is the highest-LTV paywall configuration at $49.27 over 12 months."),
    fact("f-unit-06", "Median LTV:CAC is 2.5 to 1 for apps priced 8.99 to 11.99 a month and 2.7 to 1 at 12.99 to 14.99",
         "2.5", "ratio", AD,
         "Apps pricing at $8.99-$11.99 monthly have a median LTV:CAC of 2.5:1; $12.99-$14.99 achieve 2.7:1."),
    fact("f-unit-07", "Subscription apps typically recover acquisition cost in 60 to 90 days", "60-90", "days", AD,
         "For subscription apps the typical CAC payback period is 60-90 days, depending on plan length, "
         "trial conversion rate and pricing."),
    fact("f-unit-08", "3 to 1 remains the standing LTV:CAC bar while investors increasingly expect 4 to 1 or 5 to 1",
         "3", "ratio", AD,
         "A ratio of 4:1 to 5:1 is increasingly expected by investors, though 3:1 remains the gold standard for mobile apps."),
    fact("f-unit-09", "Monthly plans retain about 65% at day 30, 43% at day 90 and 17% at one year", "17", "%", RC,
         "For monthly plans, day 30 retention is approximately 65%, day 90 approximately 43%, and one-year approximately 17%."),
    fact("f-unit-10", "Median first-month renewal runs 42% to 61% by category, with Business highest at 61% and Social & Lifestyle lowest at 42%",
         "42-61", "%", RC,
         "Median first renewal rate ranges from 42-61% between categories; Business achieves 61%, Social & Lifestyle 42%."),
    fact("f-unit-11", "Travel and Business lead annual renewal at a 40% median while Productivity and Photo & Video sit at 23%",
         "40", "%", RC,
         "Travel and Business apps see the highest median annual subscription renewal rate (40%); "
         "Productivity and Photo & Video see the lowest (23%)."),
    fact("f-unit-12", "Between 20% and 40% of total subscription churn is payment failure rather than cancellation",
         "20-40", "%", ("https://recurly.com/research/churn-rate-benchmarks/",
                        "Churn rate benchmarks", "recurly.com", "2026"),
         "Companies that measure only active cancellations miss the 20 to 40% of total churn driven by payment failures."),
    fact("f-unit-13", "Median recovery of involuntary churn is 47.6%, with top performers reaching 70% to 85%",
         "47.6", "%", ("https://www.dunningcompare.com/stats/involuntary-churn-statistics-2026",
                       "Involuntary Churn Statistics 2026", "dunningcompare.com", "2026"),
         "The industry median recovery rate for involuntary churn is 47.6%, with top-performer recovery reaching 70-85%.",
         False),
    fact("f-unit-14", "Smart retry alone recovers about 40% of failed payments, a card updater 25%, and dunning email adds 15 to 20% on top",
         "40", "%", ("https://www.digitalapplied.com/blog/failed-payment-recovery-dunning-playbook-2026",
                     "Failed-Payment Recovery: The 2026 Dunning Playbook", "digitalapplied.com", "2026"),
         "Smart retry alone recovers 40%, card updater 25%, and emails add 15-20% on top; combining all three reaches 70%.",
         False),
    fact("f-unit-15", "Monthly churn of 5% to 12% is typical for mobile subscription apps, with the best holding under 5%",
         "5-12", "%", ("https://www.businessofapps.com/data/app-churn-rates/",
                       "App Churn Rates 2026", "businessofapps.com", "2026"),
         "For mobile subscription apps, monthly churn of 5-12% is typical, with the best apps under 5%."),
    fact("f-unit-16", "Median private B2B SaaS gross revenue retention fell to 84% in 2025 while annual net revenue retention compressed to 101%",
         "84", "%", SC,
         "The median SaaS gross revenue retention rate fell to 84% in 2025; annual NRR compressed to 101% "
         "across all private B2B SaaS."),
    fact("f-unit-17", "Net revenue retention splits hard by contract size: 97% under 25,000 dollars ACV, about 108% from 25,000 to 100,000, and 118% above that",
         "118", "%", SC,
         "Enterprise (over $100K ACV) at a median 118% NRR, mid-market ($25K-$100K ACV) at about 108%, "
         "and SMB (under $25K ACV) at 97%."),
    fact("f-unit-18", "Gross revenue retention by contract size runs 82% under 25,000 dollars ACV, 88% from 25,000 to 100,000, and 95% above",
         "95", "%", SC,
         "SMB (<$25K ACV): 82% GRR; Mid-Market ($25K-$100K): 88% GRR; Enterprise (>$100K ACV): 95% GRR."),
    fact("f-unit-19", "Median growth for companies between 1 million and 30 million dollars ARR is 26%, with top performers at 40% to 50%",
         "26", "%", ("https://aventis-advisors.com/rule-of-40-in-saas-2026/",
                     "Rule of 40 in SaaS: 2026 Data, Benchmarks and Valuation Impact",
                     "aventis-advisors.com", "2026"),
         "For companies in the $1M-$30M ARR range, median growth is 26%, while top performers grow at 40-50%.",
         False),
    fact("f-unit-20", "Bootstrapped SaaS companies between 3 million and 20 million dollars ARR grow at a 15% median",
         "15", "%", SC,
         "SaaS Capital's 2026 private B2B SaaS benchmark shows median revenue growth of 15% for bootstrapped "
         "SaaS companies with $3m to $20m ARR."),
    fact("f-unit-21", "The median Rule of 40 score was 25% in 2025, and the measure only starts to bite from about 20 million dollars ARR",
         "25", "%", ("https://aventis-advisors.com/rule-of-40-in-saas-2026/",
                     "Rule of 40 in SaaS: 2026 Data, Benchmarks and Valuation Impact",
                     "aventis-advisors.com", "2026"),
         "The 2025 median Rule of 40 score is 25%. The Rule of 40 becomes a meaningful benchmark at roughly "
         "$20M ARR and above.", False),
    fact("f-unit-22", "Average SaaS activation rate is 36%, with 20% to 40% counted as good and above 50% as excellent",
         "36", "%", ("https://usetandem.ai/blog/activation-rate-benchmarks",
                     "Activation rate benchmarks 2026", "usetandem.ai", "2026"),
         "Activation rate benchmarks show 36% average for SaaS in 2026. Good performance is 20% to 40% and "
         "excellent exceeds 50%.", False),
    fact("f-unit-23", "The top 10% of products see four times the median day-one activation: 21% against 5%",
         "21", "%", ("https://info.amplitude.com/rs/138-CDN-550/images/the-product-benchmark-report.pdf",
                     "Product Benchmark Report", "amplitude.com", "2025"),
         "The top 10% of products see 4x higher day-one activation than the median (21% vs. 5%)."),
    fact("f-unit-24", "Only about 34% of product-led companies actively track activation at all", "34", "%",
         ("https://mixpanel.com/blog/product-led-growth/", "Product-led growth in 2026", "mixpanel.com", "2026"),
         "Only about 34% of PLG companies actively track activation, the single metric that best predicts "
         "whether a free user ever becomes a paying one."),
    fact("f-unit-25", "More than 120 million UPI Autopay mandates are created every month in India", "120", "million",
         ("https://razorpay.com/blog/upi-autopay-vs-card-e-mandates/",
          "UPI Autopay vs Card e-Mandates: 2026 Decision Guide", "razorpay.com", "2026"),
         "Over 120 million UPI Autopay mandates are created every month in India, supporting SIPs, OTT "
         "subscriptions and insurance renewals."),
    fact("f-unit-26", "The RBI E-Mandate Framework 2026 allows recurring debits up to 15,000 rupees without additional authentication, and up to 1,00,000 rupees for insurance, mutual funds and credit-card bills",
         "15000", "INR", ("https://amlegals.com/upi-autopay-and-recurring-payments-compliance-checklist-under-rbis-e-mandate-framework-2026/",
                          "UPI Autopay and Recurring Payments: Compliance Checklist Under RBI's E-Mandate Framework 2026",
                          "amlegals.com", "2026"),
         "Pre-authorised recurring transactions up to Rs 15,000 can be processed without additional factor "
         "authentication after initial setup; insurance premiums, mutual fund subscriptions and credit card "
         "bills up to Rs 1,00,000."),
    fact("f-unit-27", "India's 2021 card e-mandate rules pushed card subscription failure rates above 20% in some categories",
         "20", "%", ("https://razorpay.com/blog/upi-autopay-vs-card-e-mandates/",
                     "UPI Autopay vs Card e-Mandates: 2026 Decision Guide", "razorpay.com", "2026"),
         "The mandate requiring extra authentication for card payments above Rs 5,000 caused failure rates to "
         "spike to 20%+ in some categories, accelerating UPI Autopay adoption."),
    fact("f-unit-29", "India has 601 million OTT users and 119 million paying subscribers", "119", "million",
         ("https://www.medianews4u.com/indias-ott-market-hits-601-million-users-but-only-119-million-pay-monetisation-gap-widens/",
          "India's OTT Market Hits 601 Million Users, But Only 119 Million Pay", "medianews4u.com", "2026"),
         "Despite a massive base of 601 million OTT users, only 119 million are active paying subscribers."),
    fact("f-unit-30", "India's streaming ARPU is projected at 9.02 dollars for 2026 against 15 to 20 dollars a month in the United States",
         "9.02", "USD", ("https://www.statista.com/outlook/emo/online-food-delivery/india/",
                         "Online video and OTT outlook, India", "statista.com", "2026"),
         "India's projected ARPU of USD 9.02 in 2026. In the United States streaming ARPU runs above USD "
         "15-20 per month.", False),
    fact("f-unit-31", "Marketplace take rates span under 2% to over 70%, and most established multi-vendor marketplaces sit between 10% and 20%",
         "10-20", "%", ("https://origami-marketplace.com/en-gb/marketplace-take-rate-a-guide-for-marketplace-operators/",
                        "Marketplace Take Rate Guide 2026", "origami-marketplace.com", "2026"),
         "Marketplace take rates in 2026 range from under 2% to over 70%. Most established multi-vendor "
         "marketplaces charge between 10 and 20%.", False),
    fact("f-unit-35", "Cost per install in India runs about 0.12 times the United States level, 70% to 90% lower",
         "0.12", "x", LR,
         "India has a CPI of 0.12x relative to the United States. CPIs in India are often 70-90% lower than US CPIs."),
    fact("f-unit-36", "India's median cost per install fell from 0.71 dollars in July 2025 to 0.42 dollars in June 2026",
         "0.42", "USD", LR,
         "India's median CPI averaged about $1.18 per install, starting at $0.71 in July 2025 and finishing "
         "at $0.42 in June 2026."),
    fact("f-unit-37", "United States fintech cost per install is 11.62 dollars on iOS and 3.84 on Android, against 2.46 and 0.84 for utilities",
         "11.62", "USD", LR,
         "US CPIs by category include Fintech ($11.62 iOS / $3.84 Android) and Utilities ($2.46 / $0.84)."),
    fact("f-unit-38", "The median app retains 4% of its users at day 30, and 25.3% return on day one", "4", "%",
         ("https://uxcam.com/blog/mobile-app-retention-benchmarks/",
          "Mobile App Retention Benchmarks by Industry 2026", "uxcam.com", "2026"),
         "The median app retains just 4% of users at Day 30. Only 25.3% of mobile app users return on Day 1.",
         False),
    fact("f-unit-39", "iOS averages 25.65% day-one and 4.13% day-30 retention against 23.01% and 2.59% on Android",
         "4.13", "%", ("https://uxcam.com/blog/mobile-app-retention-benchmarks/",
                       "Mobile App Retention Benchmarks by Industry 2026", "uxcam.com", "2026"),
         "iOS averages 25.65% on Day 1 and 4.13% on Day 30, while Android averages 23.01% on Day 1 and 2.59% "
         "on Day 30.", False),
]}

# Facts first researched for glossary-0700 and reused here under the §C2 cap.
CARRY = {f["fact_id"]: f for f in json.loads(
    (Path(__file__).resolve().parents[1] / "research" / "glossary-0700.json").read_text()
)["facts"]}
POOL.update(CARRY)



def L(*triples):
    return [{"url": u, "anchor": a, "role": r} for u, a, r in triples]


def V(anchor, alt, caption):
    return [{"type": "table", "src": f"#{anchor}", "alt": alt, "caption": caption}]


HUB = ("/glossary", "the glossary", "hub")
BOFU = ("/work-with-me", "a monetisation review", "bofu")

PAGES = [
  # ── ARPU ──────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0688", url="/glossary/arpu", archetype="glossary", hub="glossary",
    title="What is ARPU? Formula, Benchmarks and the Blended Trap",
    meta_description="ARPU divides revenue by every active user, payer or not. The formula, the $8.41 subscription median, and why one blended number hides more than it shows.",
    h1="What is ARPU?", primary_keyword="what is arpu",
    secondary_keywords=["arpu formula", "average revenue per user benchmark"],
    entity_a="arpu",
    facts=["f-unit-01", "f-unit-02", "f-unit-29", "f-unit-30", "f-unit-03",
           "f-glossary-0700-06"],
    experience=["exp-021"],
    links=L(HUB, ("/glossary/arppu", "ARPPU", "lateral"),
            ("/glossary/ltv", "lifetime value", "lateral"),
            ("/tools/arpu-arppu-calculator", "the ARPU and ARPPU calculator", "tool"),
            ("/india/ott-pricing-india", "OTT pricing in India", "related"), BOFU),
    visuals=V("arpu-benchmarks",
              "Six ARPU reference points: the mobile subscription average, the iOS to Android gap, India's projected streaming ARPU, India's paying-subscriber share, the India price index and the regional refund-rate gap, each row carrying its source and verification date",
              "ARPU reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good ARPU?",
           a="The mobile subscription average is $8.41, about ₹806. Platform mix moves it harder than product quality does: iOS earns roughly twice the ARPU of Android on the same app. Check your own platform split before treating a low number as a failure."),
      dict(q="What is the difference between ARPU and ARPPU?",
           a="ARPU divides revenue by every active user. ARPPU divides it by paying users only. In a freemium product the two differ by an order of magnitude, so labelling one as the other is the commonest error in a monetisation deck."),
      dict(q="Why is ARPU lower in India?",
           a="Mostly the denominator. India has 601 million OTT users and 119 million paying subscribers. Price adds to it, because Indian subscription prices sit at 0.6 times the US baseline, and refunds run at a 7.7% median against 3.4% in North America."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Names the published India-versus-US ARPU comparison as unit-mismatched, an annual figure set against a monthly one, instead of repeating it; and separates the denominator effect from the price effect, which the ranking pages conflate.",
    contradictions=["India's projected streaming ARPU of $9.02 for 2026 is published as an annual figure, and the US comparison usually set beside it ($15-20) is published per month. The gap as quoted is not like-for-like. Stated in the body rather than repeated."],
    body="""
<AnswerBox>
What is ARPU? Average revenue per user divides revenue for a period by every
active user in that period, payer or not. The mobile subscription average is
$8.41, about ₹806. It blends payers with free users by design. That is why it is
easy to quote and easy to misread.
</AnswerBox>

<FactTable
  id="arpu-benchmarks"
  caption="ARPU reference points, and what each one is actually measuring"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Mobile subscription average", "$8.41 (about ₹806)"], factId: "f-unit-01" },
    { cells: ["iOS against Android, same app", "about 2x"], factId: "f-unit-02" },
    { cells: ["India streaming, projected 2026", "$9.02 (about ₹865), published as annual"], factId: "f-unit-30" },
    { cells: ["India OTT paying base", "119M paying of 601M users"], factId: "f-unit-29" },
    { cells: ["India price index against the US baseline", "0.6x"], factId: "f-glossary-0700-06" },
    { cells: ["Median refund rate, IN/SEA against North America", "7.7% against 3.4%"], factId: "f-unit-03" },
  ]}
/>

## How is ARPU calculated?

Divide revenue by active users over the same window. Then fix both halves. The
denominator causes most of the trouble. Monthly actives, registered accounts and
cumulative installs give three very different answers from one revenue figure.

<Example illustrative>
Take ₹48,00,000 of revenue in a month, about $50,057. Across 10,000 monthly
actives that is ₹480, about $5.01. Across 40,000 registered accounts it is ₹120,
about $1.25.
</Example>

Pick the definition once. Write it beside the chart. Keep it when the number
moves the wrong way. Most reported ARPU gains turn out to be denominator changes
nobody flagged.

## What counts as a good ARPU?

The average is a starting point, not a target. Platform mix moves it harder than
product quality does. iOS earns roughly twice the ARPU of Android on the same
app. So an Android-heavy base reads low with nothing broken. Benchmark against a
blended cross-platform figure and you chase a gap your install base created.

Refunds sit in the same trap. They land in the numerator. India and South-East
Asia show a 7.7% median refund rate. North America shows 3.4%. Two products with
identical gross conversion report different ARPU.

## Why does ARPU read lower in India?

The denominator comes first. India has 601 million OTT users and 119 million
paying subscribers. The free base dwarfs the paying one. Any all-user average
therefore sits near the floor before pricing enters. Price comes second and it is
real. Indian subscription prices sit at 0.6 times the US baseline.

One warning about the usual comparison. India's projected streaming ARPU for 2026
is $9.02, about ₹865. The US figure set beside it, $15 to $20 or roughly ₹1,438
to ₹1,918, is published per month. One is annual. The other is not. The gap is
real. The ratio in most decks is not.

## Where does ARPU mislead?

One blended ARPU across geographies, platforms and models averages things that do
not belong together. It moves when country mix moves. It holds still when the
product improves.

<FromMyWork exp="exp-021">
The headline growth figure needs decomposing to be honest. The 1200% insurance
revenue growth is the compound of several independent changes, and reporting it
as one number would credit the last change with all of it.
</FromMyWork>

ARPU has the same defect. Split it by platform and by market, or accept that you
cannot act on it.
""",
  ),

  # ── ARPPU ─────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0689", url="/glossary/arppu", archetype="glossary", hub="glossary",
    title="What is ARPPU? Formula, Benchmarks and When It Lies",
    meta_description="ARPPU divides revenue by paying users only. The formula, how it diverges from ARPU in freemium, and the one way it rises while the business shrinks.",
    h1="What is ARPPU?", primary_keyword="what is arppu",
    secondary_keywords=["arppu formula", "average revenue per paying user"],
    entity_a="arppu",
    facts=["f-unit-01", "f-unit-02", "f-unit-03", "f-unit-29", "f-unit-30",
           "f-glossary-0700-10"],
    experience=["exp-022"],
    links=L(HUB, ("/glossary/arpu", "ARPU", "lateral"),
            ("/glossary/freemium", "freemium", "lateral"),
            ("/tools/arpu-arppu-calculator", "the ARPU and ARPPU calculator", "tool"),
            ("/india/inr-price-points-that-convert", "INR price points that convert", "related"),
            ("/work-with-me", "a pricing review", "bofu")),
    visuals=V("arppu-context",
              "Six reference points ARPPU has to be read against: the all-user subscription average, the iOS to Android gap, India's paying-subscriber base, India's projected streaming ARPU, the median subscription app's monthly revenue and the regional refund-rate gap, each row carrying its source and verification date",
              "What ARPPU has to be read against. Verified 30 September 2026."),
    faq=[
      dict(q="What is the ARPPU formula?",
           a="Revenue in a period divided by the paying users in that same period. The window matters. A monthly ARPPU that counts annual subscribers as payers in every month of their term reads very differently from one that counts them once."),
      dict(q="Should I track ARPU or ARPPU?",
           a="Both, for different questions. ARPU answers whether the whole base monetises. ARPPU answers whether the price suits the people who already said yes. Rising ARPPU with falling ARPU usually means you are shedding marginal payers."),
      dict(q="Is a high ARPPU good?",
           a="Not on its own. ARPPU rises when you upsell and rises just as reliably when you lose your cheapest payers. Read it beside paying-user count, never alone."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Shows the failure mode ARPPU has that ARPU does not — it improves when you shed cheap payers — and grounds the India read in the 601 million to 119 million paying gap rather than a global average.",
    body="""
<AnswerBox>
What is ARPPU? Average revenue per paying user divides revenue for a period by
the paying users in that period. ARPU averages across everyone and lands at
$8.41, about ₹806, for mobile subscriptions. ARPPU strips the free base out. That
makes it right for pricing questions and wrong for reach questions.
</AnswerBox>

<FactTable
  id="arppu-context"
  caption="The numbers ARPPU has to be read against"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["All-user mobile subscription ARPU", "$8.41 (about ₹806)"], factId: "f-unit-01" },
    { cells: ["iOS against Android ARPU, same app", "about 2x"], factId: "f-unit-02" },
    { cells: ["India OTT paying base", "119M paying of 601M users"], factId: "f-unit-29" },
    { cells: ["India streaming ARPU, projected 2026", "$9.02 (about ₹865)"], factId: "f-unit-30" },
    { cells: ["Median subscription app, monthly revenue", "$492 (about ₹47,178)"], factId: "f-glossary-0700-10" },
    { cells: ["Median refund rate, IN/SEA against North America", "7.7% against 3.4%"], factId: "f-unit-03" },
  ]}
/>

## How is ARPPU calculated?

Revenue divided by payers, same window for both. The subtlety is what counts as a
payer in a monthly view when someone bought an annual plan. Count them in every
month of the term and ARPPU smooths. Count them only in the month of purchase and
it spikes.

<Example illustrative>
Take 100 payers billing ₹800 a month (about $8.34). Add 10 who each paid ₹9,600
up front (about $100.11). Month one then holds ₹1,76,000 of revenue, or about
$1,835. Across 110 payers that reads ₹1,600 (about $16.69) for month one, and
₹800 (about $8.34) for every month after.
</Example>

Neither convention is wrong. Mixing them across quarters is, and it happens often
enough to be worth checking before reading any trend.

## What does ARPPU show that ARPU does not?

ARPU blends monetisation with reach. ARPPU isolates price and plan mix. It
answers a narrower and more actionable question. For the people who already
decided to pay, is the price right and are they buying up.

That narrowness is also the trap. ARPPU rises when you upsell. It rises just as
reliably when you lose your cheapest payers. A team optimising ARPPU without
watching paying-user count can report a clean quarter while the business shrinks.
Read the two together or read neither.

## Why is ARPPU harder in India?

The paying base is small next to the audience. India has 601 million OTT users
and 119 million paying subscribers. So the population ARPPU describes is a fifth
of the population the product serves. A concentrated payer base pushes ARPPU well
above the market average while total revenue stays thin.

A healthy ARPPU on a narrow base is the most flattering number an Indian consumer
product can show. It is also close to the least informative. Refunds narrow it
further. The IN and South-East Asia median refund rate is 7.7% against 3.4% in
North America.

<FromMyWork exp="exp-022">
The opportunity was sized before the work started. Of 3.8M monthly actives, 68%
were returning users with a known vehicle, which is the population any insurance
attach rate has to be measured against rather than the whole base.
</FromMyWork>

## What is a realistic ARPPU floor?

Absolute scale is worth holding in view. The median subscription app earns $492 a
month, about ₹47,178. And 59.3% never pass $1,000, roughly ₹95,890, in total
revenue. Most published ARPPU benchmarks therefore come from a survivor set.
Below the median, compare against apps at your revenue stage. Platform mix counts
too, because iOS earns roughly twice the ARPU of Android on the same product.
""",
  ),
]


def spec() -> dict:
    used = {fid for p in PAGES for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-glossary-01",
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
