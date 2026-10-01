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
         "Recurring transactions up to Rs 15,000 process without additional factor authentication after "
         "setup; insurance, mutual funds and card bills up to Rs 1,00,000."),
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
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"), BOFU),
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
revenue growth compounds a larger user base with a 457-times conversion
improvement, and one number would credit the last change with all of it.
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
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
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
were returning users and 74% of those had insurance expired or close to it. That
is the population an attach rate has to be measured against.
</FromMyWork>

## What is a realistic ARPPU floor?

Absolute scale is worth holding in view. The median subscription app earns $492 a
month, about ₹47,178. And 59.3% never pass $1,000, roughly ₹95,890, in total
revenue. Most published ARPPU benchmarks therefore come from a survivor set.
Below the median, compare against apps at your revenue stage. Platform mix counts
too, because iOS earns roughly twice the ARPU of Android on the same product.
""",
  ),
  # ── LTV ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0690", url="/glossary/ltv", archetype="glossary", hub="glossary",
    title="What is LTV? Customer Lifetime Value Formula & Benchmarks",
    meta_description="LTV is the revenue one customer returns before leaving. The formula, the realised figures for AI and non-AI apps, and why a modelled LTV flatters itself.",
    h1="What is LTV (customer lifetime value)?", primary_keyword="what is ltv",
    secondary_keywords=["ltv formula", "customer lifetime value benchmark"],
    entity_a="ltv",
    facts=["f-unit-04", "f-unit-05", "f-unit-09", "f-unit-11", "f-unit-15",
           "f-glossary-0700-05"],
    experience=["exp-044"],
    links=L(HUB, ("/glossary/cac", "CAC", "lateral"),
            ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks", "related"), BOFU),
    visuals=V("ltv-benchmarks",
              "Six LTV reference points: realised year-one LTV for AI and non-AI apps, the highest-LTV paywall configuration, the monthly retention curve, annual renewal by category, typical monthly churn, and the lift from adding a trial to an annual plan, each row carrying its source and verification date",
              "Realised LTV reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is the LTV formula?",
           a="ARPU divided by churn rate gives the simple version. It assumes a constant churn rate, which no real cohort has, so it overstates. Summing the actual revenue of a closed cohort is slower and correct."),
      dict(q="What is a good LTV for a subscription app?",
           a="Realised year-one LTV runs at a $21.37 median, about ₹2,049, for non-AI apps and $30.16, about ₹2,892, for AI apps. Judge yours against your own category and your own paywall shape, not against the overall figure."),
      dict(q="Should LTV use revenue or gross profit?",
           a="Gross profit, if you are comparing it against CAC. Store commission, payment fees and support cost all sit between the revenue line and the money that pays back acquisition. Revenue-based LTV flatters every ratio it touches."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Separates realised LTV from modelled LTV and gives the published realised figures for both AI and non-AI apps, where the ranking pages give only the ARPU-over-churn formula and no realised number to check it against.",
    body="""
<AnswerBox>
What is LTV? Customer lifetime value is the revenue a single customer returns
before leaving. Realised year-one LTV sits at a $21.37 median, about ₹2,049, for
non-AI apps and $30.16, about ₹2,892, for AI ones. Modelled LTV usually reads
higher than either, and the gap is the interesting part.
</AnswerBox>

<FactTable
  id="ltv-benchmarks"
  caption="Realised LTV reference points, and what shapes each one"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Year-one realised LTV, AI against non-AI apps", "$30.16 against $21.37 (about ₹2,892 against ₹2,049)"], factId: "f-unit-04" },
    { cells: ["Highest-LTV paywall configuration, 12 months", "weekly plus trial, $49.27 (about ₹4,725)"], factId: "f-unit-05" },
    { cells: ["Monthly plan retention, day 30 / day 90 / one year", "65% / 43% / 17%"], factId: "f-unit-09" },
    { cells: ["Annual renewal median, strongest against weakest category", "40% against 23%"], factId: "f-unit-11" },
    { cells: ["Typical monthly churn, mobile subscriptions", "5% to 12%"], factId: "f-unit-15" },
    { cells: ["Trial added to an annual plan, one-year LTV", "+35%"], factId: "f-glossary-0700-05" },
  ]}
/>

## How is LTV calculated?

Two ways, and they disagree. The modelled version divides ARPU by churn rate. It
assumes churn holds steady, which no real cohort does. Early churn runs high,
then the survivors settle. So a constant rate overstates the tail.

The realised version sums what a closed cohort actually paid. It takes a year to
read and it needs no assumption. Realised year-one LTV lands at a $21.37 median,
about ₹2,049, for non-AI apps.

<Example illustrative>
₹800 of monthly ARPU, about $8.34, at 8% monthly churn models to ₹10,000 of LTV,
about $104.29. The same cohort tracked for a year often pays about half that.
</Example>

Report both. The gap between them is your churn assumption, priced.

## What drives LTV more than price does?

Retention shape, then plan length. Monthly plans hold 65% at day 30, 43% at day
90 and 17% at one year. That curve, not the price tag, sets the ceiling.

Plan mix moves it next. Annual renewal runs at a 40% median in the strongest
categories and 23% in the weakest. Adding a trial to an annual plan lifts
one-year LTV by 35% against a direct purchase. The highest-LTV configuration
published is a weekly plan with a trial, at $49.27 over twelve months, roughly
₹4,725. Weekly pricing feels cheap per charge and compounds fast.

## What should LTV be measured in?

Gross profit, whenever the number will be set against CAC. Store commission,
payment fees, refunds and support all sit between revenue and the money that
actually repays acquisition. A revenue-based LTV flatters every ratio built on
it, and the flattery grows with the store fee.

<FromMyWork exp="exp-044">
Moving monetisation from paid acquisition into embedded intent-led in-app flows
cut effective CAC 25 to 30% and raised LTV without hurting engagement. Both sides
of the ratio moved, which is rarer than either one moving alone.
</FromMyWork>

## Where does LTV get abused?

Three patterns recur. Modelling from a first-month churn rate, which flattens a
curve that has not flattened. Quoting revenue LTV against fully-loaded CAC.
Extending the horizon until the ratio works, which is the tell: a five-year LTV
on a product eighteen months old is an assumption wearing a number.

Typical monthly churn of 5% to 12% implies a mean tenure most models quietly
exceed. If the model needs a longer life than the churn rate allows, fix the
model.
""",
  ),

  # ── CAC ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0691", url="/glossary/cac", archetype="glossary", hub="glossary",
    title="What is CAC? Customer Acquisition Cost Formula & Benchmarks",
    meta_description="CAC is the fully-loaded cost of one new paying customer. The formula, CPI benchmarks for India and the US, and why cheap installs are not cheap buyers.",
    h1="What is CAC (customer acquisition cost)?", primary_keyword="what is cac",
    secondary_keywords=["cac formula", "customer acquisition cost benchmark"],
    entity_a="cac",
    facts=["f-unit-35", "f-unit-36", "f-unit-37", "f-unit-07", "f-unit-06",
           "f-glossary-0700-03"],
    experience=["exp-015", "exp-044"],
    links=L(HUB, ("/glossary/ltv", "LTV", "lateral"),
            ("/glossary/cac-payback-period", "CAC payback period", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("cac-benchmarks",
              "Six CAC and cost-per-install reference points: India's cost per install relative to the US, India's median CPI trend, US fintech and utility CPI by platform, typical payback period, median LTV to CAC by price tier, and the India trial conversion gap, each row carrying its source and verification date",
              "Acquisition cost reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is the CAC formula?",
           a="Total acquisition spend in a period divided by new paying customers won in that period. Fully loaded means media plus tooling plus the salaries of the people running it, not media alone."),
      dict(q="Is CAC cheaper in India?",
           a="Installs are. Cost per install in India runs about 0.12 times the US level. Customers are a different question, because trial conversion in India and South-East Asia sits at a 15.2% median against 34.2% in North America."),
      dict(q="What is the difference between CAC and CPI?",
           a="CPI buys an install. CAC buys a payer. Divide CPI by your install-to-paid rate to get from one to the other, and the divisor is usually a small number, so the two are not close."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Does the arithmetic the India-is-cheap claim usually skips: a 0.12x cost per install set against a 15.2% trial conversion median and a 0.6x price index, which is the calculation that decides whether the cheap install is actually cheap.",
    body="""
<AnswerBox>
What is CAC? Customer acquisition cost is the fully-loaded spend needed to win
one new paying customer. Media, tooling and the salaries of the people running it
all count. Subscription apps typically recover it in 60 to 90 days. Cost per
install is not CAC and is usually a tenth of it.
</AnswerBox>

<FactTable
  id="cac-benchmarks"
  caption="Acquisition cost reference points, and what each one buys"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["India cost per install against the US", "0.12x, or 70% to 90% lower"], factId: "f-unit-35" },
    { cells: ["India median CPI, July 2025 to June 2026", "$0.71 to $0.42 (about ₹68 to ₹40)"], factId: "f-unit-36" },
    { cells: ["US fintech CPI, iOS and Android", "$11.62 and $3.84 (about ₹1,114 and ₹368)"], factId: "f-unit-37" },
    { cells: ["Typical subscription app payback", "60 to 90 days"], factId: "f-unit-07" },
    { cells: ["Median LTV to CAC at $8.99 to $11.99 a month", "2.5 to 1"], factId: "f-unit-06" },
    { cells: ["Trial conversion, IN and SEA against North America", "15.2% against 34.2%"], factId: "f-glossary-0700-03" },
  ]}
/>

## How is CAC calculated?

Divide acquisition spend by new paying customers over the same window. Fully
loaded means every cost that exists to win customers. Media, creative
production, agency fees, attribution tooling and the salaries of the growth team
all belong in the numerator.

Two common exclusions break the number. Leaving out salaries understates CAC by
a third in most small teams. Counting installs instead of payers understates it
by far more.

## What is the difference between CAC and CPI?

CPI buys an install. CAC buys a payer. To get from one to the other, divide CPI
by the install-to-paid rate.

<Example illustrative>
₹190 per install, about $1.98, at a 4% install-to-paid rate gives a CAC of
₹4,750, about $49.54. The install looked cheap. The customer did not.
</Example>

US fintech CPI runs $11.62 on iOS and $3.84 on Android, roughly ₹1,114 and ₹368.
Platform alone moves the input threefold before conversion touches it.

## Does cheap traffic mean cheap customers in India?

Not by itself, and this is where the argument usually stops too early. Cost per
install in India runs about 0.12 times the US level, and the median fell from
$0.71 to $0.42 across the year, roughly ₹68 to ₹40. On installs alone India looks
eight times cheaper.

Then two multipliers push back. Trial conversion in India and South-East Asia
sits at a 15.2% median against 34.2% in North America, so more installs are
needed per payer. And the payer is worth less, because Indian prices sit below
the US baseline. Run those together and the advantage narrows sharply. It does
not vanish. It stops being eightfold.

<FromMyWork exp="exp-015">
Facebook interest targeting looked fine on cost per install and was catastrophic
on cost per purchase, at 5 times Google Search intent and 12 times organic.
Cutting its share of paid budget took blended cost per purchase from ₹1,100 to
₹590, about $11.47 to $6.15, in three months.
</FromMyWork>

## What actually moves CAC

Channel mix moves it slowly. Conversion moves it immediately, because it is the
divisor. Median LTV to CAC at the $8.99 to $11.99 monthly tier, roughly ₹862 to ₹1,150,
is 2.5 to 1. That leaves little room for a funnel leak.

<FromMyWork exp="exp-044">
Moving monetisation from paid acquisition into embedded intent-led in-app flows
cut effective CAC 25 to 30%. The intent was already present in the session and
did not have to be bought.
</FromMyWork>
""",
  ),

  # ── LTV:CAC ratio ─────────────────────────────────────────────────────────
  dict(
    id="glossary-0692", url="/glossary/ltv-to-cac-ratio", archetype="glossary", hub="glossary",
    title="What is LTV:CAC Ratio? Formula, Benchmarks and Limits",
    meta_description="LTV:CAC compares what a customer returns against what they cost. The formula, the 3:1 bar and the 2.5:1 reality, and the three ways the ratio gets faked.",
    h1="What is LTV:CAC ratio (and what does it hide)?", primary_keyword="what is ltv:cac ratio",
    secondary_keywords=["ltv cac ratio formula", "ltv to cac benchmark"],
    entity_a="ltv-to-cac-ratio",
    facts=["f-unit-06", "f-unit-08", "f-unit-04", "f-unit-07", "f-unit-35",
           "f-glossary-0700-03"],
    experience=["exp-044"],
    links=L(HUB, ("/glossary/ltv", "LTV", "lateral"),
            ("/glossary/cac", "CAC", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "the retention benchmarks", "related"), BOFU),
    visuals=V("ltv-cac-benchmarks",
              "Six reference points for the LTV to CAC ratio: the medians by monthly price tier, the investor expectation, realised year-one LTV, typical payback period, India's cost-per-install advantage and India's trial conversion gap, each row carrying its source and verification date",
              "LTV to CAC reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good LTV:CAC ratio?",
           a="3 to 1 remains the standing bar and investors increasingly ask for 4 to 1 or 5 to 1. Published medians for subscription apps sit lower, at 2.5 to 1 in the $8.99 to $11.99 monthly tier, so the bar is an ambition rather than a norm."),
      dict(q="Can an LTV:CAC ratio be too high?",
           a="Yes. A ratio far past 5 to 1 usually means underspending rather than efficiency. If every acquired cohort pays back five times over, the constraint is the acquisition budget, not the economics."),
      dict(q="Why does LTV:CAC hide problems?",
           a="It has no time in it. A 4 to 1 ratio that takes three years to realise and a 4 to 1 ratio that pays back in three months are the same number and not the same business. Read payback period beside it."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="States the published subscription-app medians (2.5 to 1, rising to 2.7 to 1 with price) against the 3:1 bar the ranking pages repeat as though it were typical, and shows why the ratio needs payback period beside it to mean anything.",
    body="""
<AnswerBox>
What is LTV:CAC ratio? The LTV:CAC ratio divides customer lifetime value by the
cost of acquiring that customer. The standing bar is 3 to 1, and investors increasingly
ask for 4 to 1. Published medians for subscription apps sit at 2.5 to 1. The bar
is an ambition, not a norm.
</AnswerBox>

<FactTable
  id="ltv-cac-benchmarks"
  caption="What the ratio actually reads at, by price tier and by market"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median at $8.99 to $11.99 a month", "2.5 to 1"], factId: "f-unit-06" },
    { cells: ["The standing bar, and what investors now ask", "3 to 1, rising to 4 or 5 to 1"], factId: "f-unit-08" },
    { cells: ["Year-one realised LTV, AI against non-AI", "$30.16 against $21.37 (about ₹2,892 against ₹2,049)"], factId: "f-unit-04" },
    { cells: ["Typical payback period", "60 to 90 days"], factId: "f-unit-07" },
    { cells: ["India cost per install against the US", "0.12x"], factId: "f-unit-35" },
    { cells: ["Trial conversion, IN and SEA against North America", "15.2% against 34.2%"], factId: "f-glossary-0700-03" },
  ]}
/>

## How is the ratio calculated?

Divide lifetime value by acquisition cost for the same cohort. Same cohort is the
part teams skip. A ratio built from this quarter's CAC and last year's realised
LTV compares two different businesses.

Both inputs need the same basis. If CAC is fully loaded, LTV has to be gross
profit. Mixing a revenue LTV with a media-only CAC can double the ratio without
anything changing.

## What is a good ratio in practice

3 to 1 is the number everyone quotes. The published median at the $8.99 to
$11.99 monthly tier, roughly ₹862 to ₹1,150, is 2.5 to 1. It rises with price. So most subscription
apps sit below the bar they are measured against, and the honest read is that
2.5 to 1 with a 60-day payback beats 4 to 1 with a three-year one.

A ratio can also run too high. Far past 5 to 1 usually signals underspending
rather than efficiency. Every cohort paying back five times over means the
constraint is budget, not economics.

## What does the ratio hide

Time. The formula has none in it. A 4 to 1 that realises over three years and a
4 to 1 that pays back in three months are the same number and different
businesses. Typical subscription payback runs 60 to 90 days, so a ratio quoted
without a payback period beside it is half an answer.

It also hides where the room to move sits. Realised year-one LTV differs by 41%
between AI and non-AI apps. Category sets more of the ratio than execution does.

## How the ratio gets faked

Three moves, all common. Extending the LTV horizon until the ratio clears.
Excluding salaries from CAC. Using blended CAC, where organic installs subsidise
the paid number and the paid channel never gets judged.

India shows a fourth. Cost per install there runs 0.12 times the US level, which
looks like an instant ratio win. Trial conversion at a 15.2% median against 34.2%
in North America takes most of it back.

<FromMyWork exp="exp-044">
Moving monetisation from paid acquisition into embedded intent-led in-app flows
cut effective CAC 25 to 30% and raised LTV at the same time. That moves the ratio
by its denominator rather than by its horizon.
</FromMyWork>
""",
  ),
  # ── CAC payback period ────────────────────────────────────────────────────
  dict(
    id="glossary-0693", url="/glossary/cac-payback-period", archetype="glossary", hub="glossary",
    title="What is CAC Payback Period? Formula and Benchmarks",
    meta_description="CAC payback is how long a customer takes to repay what they cost. The formula, the 60 to 90 day norm, and why it constrains growth more than any ratio.",
    h1="What is CAC payback period?", primary_keyword="what is cac payback period",
    secondary_keywords=["cac payback formula", "cac payback benchmark"],
    entity_a="cac-payback-period",
    facts=["f-unit-07", "f-unit-09", "f-unit-19", "f-unit-21", "f-unit-26", "f-unit-36"],
    experience=["exp-054"],
    links=L(HUB, ("/glossary/cac", "CAC", "lateral"),
            ("/glossary/unit-economics", "unit economics", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("payback-benchmarks",
              "Six reference points for CAC payback: the typical subscription app window, the monthly retention curve, median growth by revenue band, the median Rule of 40 score, India's recurring-debit authentication threshold and India's median cost per install, each row carrying its source and verification date",
              "Payback reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good CAC payback period?",
           a="Subscription apps typically recover acquisition cost in 60 to 90 days. Longer is survivable with patient capital and fatal without it, because payback sets how fast you can reinvest."),
      dict(q="How do I calculate CAC payback period?",
           a="Divide CAC by the monthly gross profit one customer produces. Gross profit, not revenue: store commission and payment fees are paid before any of it repays acquisition."),
      dict(q="Why does payback matter more than LTV:CAC?",
           a="Because it carries time, and the ratio does not. Payback decides how often the same rupee can be spent again. Two businesses with identical ratios and different payback grow at different speeds on the same capital."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Frames payback as the reinvestment-rate constraint rather than a health metric, and names the India-specific failure mode where a mandate that needs re-authentication stretches payback without changing price or churn.",
    body="""
<AnswerBox>
What is CAC payback period? It is how many months a customer takes to repay what
they cost to acquire. Subscription apps typically recover acquisition cost in 60
to 90 days. Payback carries time, which the LTV to CAC ratio does not, and time
is what limits growth.
</AnswerBox>

<FactTable
  id="payback-benchmarks"
  caption="Payback reference points, and what each one constrains"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Typical subscription app payback", "60 to 90 days"], factId: "f-unit-07" },
    { cells: ["Monthly plan retention, day 30 / day 90 / one year", "65% / 43% / 17%"], factId: "f-unit-09" },
    { cells: ["Median growth, $1M to $30M ARR", "26%, top performers 40% to 50%"], factId: "f-unit-19" },
    { cells: ["Median Rule of 40 score", "25%"], factId: "f-unit-21" },
    { cells: ["India recurring debit without extra authentication", "up to ₹15,000 (about $156)"], factId: "f-unit-26" },
    { cells: ["India median cost per install, June 2026", "$0.42 (about ₹40)"], factId: "f-unit-36" },
  ]}
/>

## How is CAC payback calculated?

Divide CAC by the monthly gross profit one customer produces. The answer is in
months. Gross profit matters here, because store commission, payment fees and
support are all paid before a single rupee repays acquisition.

<Example illustrative>
₹4,800 of CAC, about $50.06, against ₹600 of monthly gross profit, about $6.26,
pays back in eight months.
</Example>

Two refinements change the answer. Charge annually and payback can happen on day
one. Discount the first period heavily and payback stretches past the point where
most of the cohort has already left.

## Why payback beats the ratio

Payback decides how often the same rupee gets spent again. A 90-day payback
recycles capital four times a year. A 24-month payback recycles it once every two
years. Both can show the same LTV to CAC ratio.

That recycling rate is most of what separates median growth of 26% at the $1M to
$30M ARR band, roughly ₹9.59 crore to ₹287.67 crore, from the 40% to 50% top
performers reach. The median Rule of 40
score is 25%, and payback is the lever inside it that a product team can actually
move.

## What stretches payback without anyone deciding to

Retention shape does the most damage early. Monthly plans hold 65% at day 30 and
43% at day 90. A payback period that runs past day 90 is being repaid by fewer
than half the cohort that was acquired, so the real figure is worse than the
arithmetic suggests.

Payment friction does the rest, and in India it is specific. Recurring debits
clear without extra authentication up to ₹15,000, about $156. Above that
threshold the mandate needs re-authentication, and a payment that needs a human
is a payment that sometimes does not happen. The result is a longer payback with
no change in price, churn intent or product.

<FromMyWork exp="exp-054">
A hyperlocal D2C food business at 300+ daily tiffins that unit economics told me
to pivot out of. Customer feedback pointed at fresh grocery retail instead, and
the decision was an economics call rather than a demand one.
</FromMyWork>

## What to do with a long payback

Shorten it before funding it. Annual plans pull revenue forward, which is the
bluntest available lever. Removing a discount on the first period often helps more
than raising the price, because the discount lands in exactly the months that
decide payback. Cutting involuntary payment failure shortens payback without
touching the offer at all.

What rarely helps is buying cheaper traffic. India's median cost per install fell
to $0.42, roughly ₹40, and that is already close to the floor. Conversion and
collection are where the months come from.
""",
  ),

  # ── Churn rate ────────────────────────────────────────────────────────────
  dict(
    id="glossary-0694", url="/glossary/churn-rate", archetype="glossary", hub="glossary",
    title="What is Churn Rate? Formula, Benchmarks and the Split",
    meta_description="Churn rate is the share of customers who leave in a period. The formula, the 5 to 12% monthly norm, and why 20 to 40% of it is a failed payment.",
    h1="What is churn rate?", primary_keyword="what is churn rate",
    secondary_keywords=["churn rate formula", "monthly churn benchmark"],
    entity_a="churn-rate",
    facts=["f-unit-15", "f-unit-12", "f-unit-10", "f-unit-13", "f-unit-25", "f-unit-27"],
    experience=["exp-014", "exp-006"],
    links=L(HUB, ("/glossary/retention-rate", "retention rate", "lateral"),
            ("/glossary/nrr", "net revenue retention", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("churn-benchmarks",
              "Six churn reference points: typical monthly churn for mobile subscriptions, the involuntary share of total churn, first-month renewal by category, the median recovery rate for involuntary churn, monthly UPI Autopay mandate volume in India and the card failure spike after India's 2021 rules, each row carrying its source and verification date",
              "Churn reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good monthly churn rate?",
           a="Monthly churn of 5% to 12% is typical for mobile subscription apps, and the strongest hold under 5%. Category sets much of it: first-month renewal ranges from 42% to 61% depending on what the app does."),
      dict(q="What is involuntary churn?",
           a="Churn caused by a failed payment rather than a decision to leave. It accounts for 20% to 40% of total churn, and the median recovery rate is 47.6%, so roughly half of it is winnable without changing the product."),
      dict(q="How do I reduce churn in India?",
           a="Start with collection, not retention messaging. India's 2021 card rules pushed failure rates above 20% in some categories. UPI Autopay now carries more than 120 million mandates a month and fails far less often."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Splits churn into decided and failed before benchmarking either, and treats the India collection problem as a churn cause with its own numbers rather than as a payments footnote.",
    body="""
<AnswerBox>
What is churn rate? It is the share of customers who stop paying in a period.
Monthly churn of 5% to 12% is typical for mobile subscription apps, and the
strongest hold under 5%. Between 20% and 40% of that is a failed payment rather
than a decision.
</AnswerBox>

<FactTable
  id="churn-benchmarks"
  caption="Churn reference points, split by cause where the data allows"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Typical monthly churn, mobile subscriptions", "5% to 12%, best under 5%"], factId: "f-unit-15" },
    { cells: ["Share of total churn that is a failed payment", "20% to 40%"], factId: "f-unit-12" },
    { cells: ["First-month renewal, strongest against weakest category", "61% against 42%"], factId: "f-unit-10" },
    { cells: ["Median recovery of involuntary churn", "47.6%, top performers 70% to 85%"], factId: "f-unit-13" },
    { cells: ["UPI Autopay mandates created monthly in India", "more than 120 million"], factId: "f-unit-25" },
    { cells: ["India card subscription failure after the 2021 rules", "above 20% in some categories"], factId: "f-unit-27" },
  ]}
/>

## How is churn rate calculated?

Divide customers lost in a period by customers at the start of it. Then decide
whether you are counting people or revenue, because the two diverge as soon as
plans differ in price.

<Example illustrative>
1,000 subscribers at the start of a month and 80 lost gives 8% customer churn. If
those 80 were all on the ₹200 plan, about $2.09, and the base averages ₹800,
about $8.34, revenue churn is far lower.
</Example>

Customer churn tells you about the product. Revenue churn tells you about the
business. Quote both or say which one you mean.

## What is a good churn rate

5% to 12% monthly is the typical band, and category explains much of the spread.
First-month renewal runs from 42% in the weakest categories to 61% in the
strongest. Holding a gaming app to a business app's renewal rate sets a target
the category does not produce.

Compounding is the part that surprises people. Monthly churn does not annualise
by multiplication. Run a rate in the 5% to 12% band twelve times over and most of
the starting cohort has gone.

## Why the split between decided and failed matters most

Between 20% and 40% of total churn is a failed payment. Those users did not
choose to leave. Median recovery of involuntary churn is 47.6%, and top
performers reach 70% to 85%, so about half of that slice is winnable without
touching the product.

Teams that measure only cancellations therefore misread their own problem. They
run win-back campaigns at people whose card simply expired.

<FromMyWork exp="exp-014">
Timing beat messaging. A user whose insurance expired three days ago converted at
4.8 times the rate of one with 60 days remaining, on identical copy. The trigger
did more work than the words.
</FromMyWork>

## Why India churns differently

Collection, not intent. India's 2021 card rules pushed subscription failure rates
above 20% in some categories, which shows up in every churn dashboard as
customers leaving. UPI Autopay now carries more than 120 million mandates a
month, and moving recurring collection onto it removes a large share of that
failure before any retention work begins.

<FromMyWork exp="exp-006">
Turning a rejection into a pathway recovered borrowers nobody was counting.
Rejected applicants given a specific reason and a re-apply timeline came back at a
28% re-application rate, and 67% of those cleared the filter second time.
</FromMyWork>
""",
  ),

  # ── Retention rate ────────────────────────────────────────────────────────
  dict(
    id="glossary-0697", url="/glossary/retention-rate", archetype="glossary", hub="glossary",
    title="What is Retention Rate? Formula, Benchmarks and Curves",
    meta_description="Retention rate is the share of a cohort still active after a period. Day 1 and day 30 medians, the iOS and Android gap, and why the curve beats any point.",
    h1="What is retention rate?", primary_keyword="what is retention rate",
    secondary_keywords=["retention rate formula", "day 30 retention benchmark"],
    entity_a="retention-rate",
    facts=["f-unit-38", "f-unit-39", "f-unit-09", "f-unit-11", "f-unit-10", "f-unit-22"],
    experience=["exp-019", "exp-018"],
    links=L(HUB, ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/glossary/cohort-analysis", "cohort analysis", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention", "retention benchmarks by industry", "related"), BOFU),
    visuals=V("retention-benchmarks",
              "Six retention reference points: median day 1 and day 30 app retention, the iOS and Android split, the monthly subscription retention curve, annual renewal by category, first-month renewal by category and the average SaaS activation rate, each row carrying its source and verification date",
              "Retention reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good day 30 retention rate?",
           a="The median app retains 4% of users at day 30, which surprises most teams. Subscription retention is a different measure and much higher, because a paying subscriber has already selected themselves."),
      dict(q="What is the difference between retention rate and churn rate?",
           a="They are complements for a single period. Retention is who stayed, churn is who left. They stop being interchangeable across multiple periods, because retention compounds down a curve while a single churn figure implies a straight line."),
      dict(q="Is iOS retention better than Android?",
           a="On the published medians, yes, and by more at day 30 than at day 1. iOS averages 25.65% day 1 and 4.13% day 30. Android averages 23.01% and 2.59%. Any cross-platform target needs the mix stated."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Keeps install retention and subscription retention as separate measures with their own published medians, which is the conflation that makes most retention targets meaningless, and reads the curve's shape rather than one day's number.",
    body="""
<AnswerBox>
What is retention rate? It is the share of a cohort still active after a set
period. The median app retains 4% of users at day 30 and 25.3% return on day one.
Paid subscription retention is a different and much higher measure, because a
subscriber has already selected themselves.
</AnswerBox>

<FactTable
  id="retention-benchmarks"
  caption="Retention reference points, kept separate by what they measure"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median app retention, day 1 and day 30", "25.3% and 4%"], factId: "f-unit-38" },
    { cells: ["iOS against Android, day 1 and day 30", "25.65% and 4.13% against 23.01% and 2.59%"], factId: "f-unit-39" },
    { cells: ["Monthly subscription retention, day 30 / 90 / one year", "65% / 43% / 17%"], factId: "f-unit-09" },
    { cells: ["Annual renewal median, strongest against weakest", "40% against 23%"], factId: "f-unit-11" },
    { cells: ["First-month renewal, strongest against weakest", "61% against 42%"], factId: "f-unit-10" },
    { cells: ["Average SaaS activation rate", "36%"], factId: "f-unit-22" },
  ]}
/>

## How is retention rate calculated?

Take a cohort, fix its start date, and count how many are still active at day N.
The cohort has to be closed. Measuring against a moving base mixes new arrivals
into an old cohort and flatters every reading.

Two measures share the name and should not. Install retention asks whether a user
came back. Subscription retention asks whether a payer renewed. The first has a
4% day-30 median. The second holds 65% at day 30. Quoting one as the other is how
targets become unreachable.

## What the curve says that a single day cannot

Shape beats level. A curve that falls steeply and then flattens has found a
durable use case. A curve that keeps sliding has not, however good its day-1
number looks.

Monthly subscriptions hold 65% at day 30, 43% at day 90 and 17% at one year.
Three points, one story: the damage concentrates early, and the survivors are
worth far more than the average implies. Platform changes the level too. iOS
averages 4.13% at day 30 against 2.59% on Android, so a blended cross-platform
target hides which half of the base is actually leaving.

## What moves retention

The first session moves it most. Average SaaS activation sits at 36%, and
activation is the gate everything downstream passes through. A user who never
reached the point of value has nothing to be retained by.

Category sets the rest. Annual renewal runs at a 40% median in the strongest
categories and 23% in the weakest, with first-month renewal spanning 42% to 61%.
Those gaps are wider than most teams move their own number in a year.

<FromMyWork exp="exp-019">
Letting users share a vehicle report turned a utility check into an acquisition
channel. Shared reports carried 12.3% of new installs within four months, and
those users arrived with the intent already formed.
</FromMyWork>

## What retention work usually gets wrong

Two errors. Optimising day 1 because it is the number that moves fastest, when
day 30 is the one that pays. And building depth for users who never activated.

<FromMyWork exp="exp-018">
A feature I championed reached 2.8% adoption and was killed. Maintenance logging
needed repeated deliberate effort and returned nothing until enough history had
accumulated, so it never cleared its own activation gate.
</FromMyWork>
""",
  ),
  # ── MRR ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0695", url="/glossary/mrr", archetype="glossary", hub="glossary",
    title="What is MRR? Formula, Benchmarks and the Four Movements",
    meta_description="MRR is normalised recurring monthly revenue. The formula, the four movements that explain any change in it, and the one they all hide.",
    h1="What is MRR (monthly recurring revenue)?", primary_keyword="what is mrr",
    secondary_keywords=["mrr formula", "monthly recurring revenue benchmark"],
    entity_a="mrr",
    facts=["f-unit-19", "f-unit-20", "f-unit-12", "f-unit-14", "f-unit-15",
           "f-glossary-0700-10"],
    experience=["exp-037"],
    links=L(HUB, ("/glossary/arr", "ARR", "lateral"),
            ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("mrr-benchmarks",
              "Six MRR reference points: median growth by revenue band, bootstrapped growth median, the involuntary share of churn, dunning recovery by intervention, typical monthly churn and the median subscription app's monthly revenue, each row carrying its source and verification date",
              "MRR reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="How do I calculate MRR?",
           a="Normalise every subscription to a monthly value and add them up. An annual plan divides by twelve. Do not count one-off fees, and do not count the annual payment in the month it arrives, or the series becomes unreadable."),
      dict(q="What are the four MRR movements?",
           a="New, expansion, contraction and churn. Any change in MRR decomposes into those four, and the decomposition is the whole value of tracking it. A flat month can hide strong new revenue cancelled out by churn."),
      dict(q="What is a good MRR growth rate?",
           a="Median growth for companies between $1M and $30M ARR is 26%, with top performers at 40% to 50%. Bootstrapped companies between $3M and $20M ARR grow at a 15% median, which is the fairer comparison without funding."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Names the movement the standard four-way decomposition leaves out — revenue lost to failed collection rather than to cancellation, 20 to 40% of churn — and gives the recovery rates by intervention so it can be sized.",
    body="""
<AnswerBox>
What is MRR? Monthly recurring revenue normalises every active subscription to a
monthly value and adds them together. Median growth at the $1M to $30M ARR band,
roughly ₹9.59 crore to ₹287.67 crore, is 26%. The number matters far less than its
four movements: new, expansion, contraction and churn.
</AnswerBox>

<FactTable
  id="mrr-benchmarks"
  caption="MRR reference points, and what each one constrains"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median growth, $1M to $30M ARR", "26%, top performers 40% to 50%"], factId: "f-unit-19" },
    { cells: ["Bootstrapped median growth, $3M to $20M ARR", "15%"], factId: "f-unit-20" },
    { cells: ["Share of churn that is a failed payment", "20% to 40%"], factId: "f-unit-12" },
    { cells: ["Recovery by intervention: retry / card updater / email", "40% / 25% / plus 15% to 20%"], factId: "f-unit-14" },
    { cells: ["Typical monthly churn, mobile subscriptions", "5% to 12%"], factId: "f-unit-15" },
    { cells: ["Median subscription app, monthly revenue", "$492 (about ₹47,178)"], factId: "f-glossary-0700-10" },
  ]}
/>

## How is MRR calculated?

Normalise each subscription to its monthly value, then sum. An annual plan
divides by twelve. A quarterly plan divides by three.

Two things do not belong in it. One-off fees are not recurring. An annual payment
counted in the month it lands turns the series into a sawtooth nobody can read.
Either mistake inflates one month and makes the next look like a collapse.

<Example illustrative>
200 subscribers on ₹800 a month, about $8.34, plus 50 on ₹8,000 a year, about
$83.43, gives ₹1,93,333 of MRR, roughly $2,016.
</Example>

## What the four movements show

New, expansion, contraction and churn. Every change in MRR decomposes into those
four, and the decomposition is the reason to track MRR at all.

A flat month can hold strong new revenue exactly cancelled by churn. The headline
says nothing happened. The movements say two large things happened in opposite
directions, and only one of them is under your control this quarter.

## The movement that is usually missing

Failed collection. Between 20% and 40% of churn is a payment failure rather than
a cancellation, and in a four-way decomposition it lands silently in churn. So
the report reads as customers leaving when much of it is money not collected.

Sizing it is worth the effort, because the fixes are mechanical. Smart retry
recovers about 40%. A card updater recovers 25%. Dunning email adds 15% to 20% on
top. None of that needs a product change, and none of it needs a price change.

## What is a good MRR growth rate

At the $1M to $30M ARR band, roughly ₹9.59 crore to ₹287.67 crore, 26% is the
median. Top performers run 40% to 50%.
Funding changes the comparison, though. Bootstrapped companies between $3M and
$20M ARR, roughly ₹28.77 crore to ₹191.78 crore, grow at a 15% median. A
bootstrapped product measured against the venture median is being held to someone
else's cost of capital.

Scale is worth keeping in view. The median subscription app earns $492 a month,
about ₹47,178. Most published growth benchmarks come from companies far past
that point.

<FromMyWork exp="exp-037">
Pricing an integrations platform on execution volume and connector usage rather
than seats took it to roughly $60K MRR, about ₹57.53 lakh. The price then tracked
what the customer consumed instead of how many people logged in.
</FromMyWork>

Typical monthly churn of 5% to 12% sets the treadmill underneath all of it. New
revenue has to clear that before growth begins.
""",
  ),

  # ── ARR ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0696", url="/glossary/arr", archetype="glossary", hub="glossary",
    title="What is ARR? Formula, Benchmarks and What It Overstates",
    meta_description="ARR annualises recurring revenue. The formula, median growth by band, the Rule of 40 median, and the three ways ARR gets inflated before a raise.",
    h1="What is ARR (annual recurring revenue)?", primary_keyword="what is arr",
    secondary_keywords=["arr formula", "arr growth benchmark"],
    entity_a="arr",
    facts=["f-unit-19", "f-unit-20", "f-unit-21", "f-unit-16", "f-unit-17", "f-unit-13"],
    experience=["exp-048"],
    links=L(HUB, ("/glossary/mrr", "MRR", "lateral"),
            ("/glossary/nrr", "net revenue retention", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "related"), BOFU),
    visuals=V("arr-benchmarks",
              "Six ARR reference points: median growth by revenue band, bootstrapped growth median, the median Rule of 40 score, median gross and net revenue retention, net revenue retention by contract size and the median involuntary-churn recovery rate, each row carrying its source and verification date",
              "ARR reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is the difference between ARR and revenue?",
           a="ARR counts only recurring contracted revenue, annualised. Revenue counts everything that arrived, including services, one-off fees and overages. A company with heavy services revenue has an ARR well below its revenue, and that is correct rather than a problem."),
      dict(q="Is ARR just MRR times twelve?",
           a="Arithmetically yes, and that is the trap. Multiplying a single month by twelve carries that month's seasonality, its churn and its one-off luck into a full-year figure twelve times over."),
      dict(q="What is a good ARR growth rate?",
           a="26% is the median between $1M and $30M ARR, with top performers at 40% to 50%. The median Rule of 40 score is 25%, and the measure only becomes meaningful from about $20M ARR."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Treats ARR as a claim that needs retention evidence beside it, pairing the growth medians with the 84% gross retention and 101% net retention that determine whether the annualised figure survives the year.",
    body="""
<AnswerBox>
What is ARR? Annual recurring revenue annualises contracted recurring revenue.
Median growth between $1M and $30M ARR, roughly ₹9.59 crore to ₹287.67 crore, is
26%. Top performers run 40% to 50%. ARR is a forward claim rather than a record of
cash, which is why retention has to sit beside it.
</AnswerBox>

<FactTable
  id="arr-benchmarks"
  caption="ARR reference points, and the retention that has to support them"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median growth, $1M to $30M ARR", "26%, top performers 40% to 50%"], factId: "f-unit-19" },
    { cells: ["Bootstrapped median growth, $3M to $20M ARR", "15%"], factId: "f-unit-20" },
    { cells: ["Median Rule of 40 score", "25%, meaningful from about $20M ARR"], factId: "f-unit-21" },
    { cells: ["Median private B2B SaaS gross and net retention", "84% and 101%"], factId: "f-unit-16" },
    { cells: ["Net revenue retention by contract size", "97% under $25K ACV, 118% above $100K"], factId: "f-unit-17" },
    { cells: ["Median recovery of involuntary churn", "47.6%"], factId: "f-unit-13" },
  ]}
/>

## How is ARR calculated?

Sum contracted recurring revenue and express it over twelve months. For a
monthly-billed book that means MRR times twelve, and the multiplication is where
the trouble starts.

One month carries its own seasonality, its own churn and its own luck. Multiply
it by twelve and all three arrive magnified. A December with an unusual enterprise
close becomes a full-year figure the business never earned.

Services, one-off fees and overages stay out. A company with heavy services
revenue has an ARR well below its total revenue, and that is accurate rather than
a problem to solve.

## What has to sit beside ARR

Retention, because ARR is a claim about next year. Median private B2B SaaS gross
revenue retention is 84% and net revenue retention is 101%. So the median company
loses roughly a sixth of its contracted base each year, and expansion just covers
the loss.

Contract size changes that picture more than anything else. Net revenue retention
runs 97% below $25K ACV, about ₹23.97 lakh. It runs 118% above $100K, about
₹95.89 lakh. An ARR figure built on small contracts needs a much larger
new-business engine to hold flat.

## What is a good ARR growth rate

Between $1M and $30M ARR, roughly ₹9.59 crore to ₹287.67 crore, the median is 26%.
Top performers reach 40% to 50%.
Bootstrapped companies between $3M and $20M ARR, roughly ₹28.77 crore to ₹191.78
crore, grow at a 15% median. That is the honest comparison for a product without
venture funding.

Efficiency enters at scale. The median Rule of 40 score is 25%. The measure only
starts to bite from about $20M ARR, roughly ₹191.78 crore. Below that, growth rate
on its own is the more useful reading.

## The three ways ARR gets inflated

Annualising the best month. Counting non-recurring revenue as recurring. Booking
a signed contract before it starts serving. All three survive a spreadsheet
review and none survives a cohort report.

There is a fourth that is less deliberate. Failed payments reduce collected
revenue while the contract still counts toward ARR, and median recovery of
involuntary churn is 47.6%. About half of that gap is winnable, which means it is
also real.

<FromMyWork exp="exp-048">
One measurement framework spanning 20+ growth, retention and monetisation metrics
made executive decisions roughly twice as fast. Until then each team reported a
number defined its own way.
</FromMyWork>
""",
  ),

  # ── NRR ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0710", url="/glossary/nrr", archetype="glossary", hub="glossary",
    title="What is NRR? Net Revenue Retention Formula & Benchmarks",
    meta_description="NRR measures revenue kept from existing customers, expansion included. The formula, the medians by contract size, and why over 100% can still hide churn.",
    h1="What is NRR (net revenue retention)?", primary_keyword="what is nrr",
    secondary_keywords=["nrr formula", "net revenue retention benchmark"],
    entity_a="nrr",
    facts=["f-unit-16", "f-unit-17", "f-unit-18", "f-unit-13", "f-unit-12", "f-unit-10"],
    experience=["exp-039"],
    links=L(HUB, ("/glossary/grr", "GRR", "lateral"),
            ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/benchmarks/retention/b2b-saas", "B2B SaaS retention benchmarks", "related"), BOFU),
    visuals=V("nrr-benchmarks",
              "Six reference points for net revenue retention: the median gross and net figures, net retention by contract size, gross retention by contract size, the median involuntary-churn recovery rate, the involuntary share of churn and first-month renewal by category, each row carrying its source and verification date",
              "Net revenue retention reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good NRR?",
           a="The median for private B2B SaaS is 101%. Contract size decides most of it: 97% below $25K ACV against 118% above $100K. Judge yours against your own contract band, because the bands differ by more than execution does."),
      dict(q="What is the difference between NRR and GRR?",
           a="NRR includes expansion revenue and GRR does not. GRR can never rise above its starting point, so it measures how leaky the base is. NRR can rise above its starting point and measures whether expansion outruns the leak."),
      dict(q="Can a healthy NRR hide a problem?",
           a="Routinely. A handful of large accounts expanding can mask a majority of small accounts leaving. Read NRR beside GRR and beside customer count, or a shrinking base looks like growth."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Shows the specific arithmetic by which NRR above 100% coexists with a shrinking customer base, and pairs the contract-size bands for both net and gross retention so the leak can be read separately from the expansion covering it.",
    body="""
<AnswerBox>
What is NRR? Net revenue retention measures the revenue kept from an existing
cohort a year on, with expansion counted and new customers excluded. The median
for private B2B SaaS is 101%. A figure above the starting point means expansion
outran churn, not that nothing churned.
</AnswerBox>

<FactTable
  id="nrr-benchmarks"
  caption="Net and gross revenue retention, by contract size"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median private B2B SaaS, net and gross", "101% and 84%"], factId: "f-unit-16" },
    { cells: ["Net revenue retention by ACV", "97% under $25K, ~108% at $25K to $100K, 118% above"], factId: "f-unit-17" },
    { cells: ["Gross revenue retention by ACV", "82% under $25K, 88% at $25K to $100K, 95% above"], factId: "f-unit-18" },
    { cells: ["Median recovery of involuntary churn", "47.6%, top performers 70% to 85%"], factId: "f-unit-13" },
    { cells: ["Share of churn that is a failed payment", "20% to 40%"], factId: "f-unit-12" },
    { cells: ["First-month renewal, strongest against weakest", "61% against 42%"], factId: "f-unit-10" },
  ]}
/>

## How is NRR calculated?

Take a cohort's revenue twelve months ago. Take the same cohort's revenue today,
including any expansion and net of contraction and churn. Divide the second by the
first.

New customers stay out. That exclusion is the whole point. NRR asks one thing:
whether the base you already had is worth more or less than it was. New sales
cannot hide the answer.

## What is a good NRR

101% is the median for private B2B SaaS. Contract size explains most of the
variation. Net retention runs 97% below $25K ACV, or about ₹23.97 lakh. It reaches
roughly 108% between $25K and $100K. Above $100K, about ₹95.89 lakh, it runs 118%.

Those bands are further apart than execution usually moves a single company, so
an SMB product measured against an enterprise benchmark is being held to a
structure it does not have. Larger contracts have more seats to add, more
workflow embedded and more people invested in keeping them.

## How a healthy NRR hides a shrinking base

The arithmetic is unforgiving and easy to miss. NRR weights by revenue. A few
large accounts expanding can therefore carry a majority of small accounts out
of the base.

<Example illustrative>
100 accounts at ₹1,00,000 each, about $1,043, is ₹1,00,00,000 of cohort revenue,
roughly $1,04,286. Lose 30 of them and grow the largest 10 by 50% each, and
revenue holds near flat while the customer count falls by nearly a third.
</Example>

So NRR belongs beside GRR and beside customer count. Gross retention runs 82%
below $25K ACV, about ₹23.97 lakh, against 95% above $100K. The gap between the
two measures is the size of the leak expansion covers.

## What moves NRR

Expansion mechanics first, then collection. Between 20% and 40% of churn is a
failed payment, and median recovery is 47.6%, so a measurable slice of lost
revenue is recoverable without a renewal conversation.

Onboarding sets the ceiling. First-month renewal spans 42% to 61% by category,
and an account that never reached steady use will not expand later.

<FromMyWork exp="exp-039">
Making failures debuggable by the customer cut sales and support effort about
25%. Idempotency, surfaced errors and retry mechanics meant customers resolved
their own breakages instead of churning quietly.
</FromMyWork>
""",
  ),

  # ── GRR ───────────────────────────────────────────────────────────────────
  dict(
    id="glossary-0711", url="/glossary/grr", archetype="glossary", hub="glossary",
    title="What is GRR? Gross Revenue Retention Formula & Benchmarks",
    meta_description="GRR measures revenue kept from an existing cohort, expansion excluded. The formula, the medians by contract size, and why it is the harder number to move.",
    h1="What is GRR (gross revenue retention)?", primary_keyword="what is grr",
    secondary_keywords=["grr formula", "gross revenue retention benchmark"],
    entity_a="grr",
    facts=["f-unit-16", "f-unit-18", "f-unit-17", "f-unit-14", "f-unit-26", "f-unit-27"],
    experience=["exp-002"],
    links=L(HUB, ("/glossary/nrr", "NRR", "lateral"),
            ("/glossary/churn-rate", "churn rate", "lateral"),
            ("/tools/monetization-health-score", "the monetisation health score", "tool"),
            ("/india", "monetising in India", "related"),
            BOFU),
    visuals=V("grr-benchmarks",
              "Six reference points for gross revenue retention: the median gross and net figures, gross retention by contract size, net retention by contract size, dunning recovery by intervention, India's recurring-debit authentication threshold and the card failure spike after India's 2021 rules, each row carrying its source and verification date",
              "Gross revenue retention reference points, each row sourced. Verified 30 September 2026."),
    faq=[
      dict(q="What is a good GRR?",
           a="The median for private B2B SaaS fell to 84%. By contract size it runs 82% below $25K ACV, 88% between $25K and $100K, and 95% above $100K. GRR cannot rise above the revenue the cohort started with, so it is a ceiling measure."),
      dict(q="Why is GRR harder to improve than NRR?",
           a="Because expansion cannot help it. NRR can be rescued by upselling the accounts that stay. GRR only improves when fewer accounts and fewer rupees leave, which means fixing the product, the onboarding or the collection."),
      dict(q="Does a failed payment count against GRR?",
           a="Yes, and that is why the number is often worse than the product deserves. Revenue lost to a declined mandate leaves the cohort the same way a cancellation does, and the dashboard rarely distinguishes them."),
    ],
    schema_types=["DefinedTerm", "Person", "BreadcrumbList", "FAQPage"],
    unique_value="Treats GRR as partly a collections metric rather than purely a satisfaction metric, with India's mandate thresholds and post-2021 card failure rates as the concrete case, and notes the data quality that reading it honestly requires.",
    body="""
<AnswerBox>
What is GRR? Gross revenue retention measures the revenue kept from an existing
cohort a year on, with expansion excluded. The median for private B2B SaaS fell to
84%. GRR has a ceiling at the revenue the cohort started with, which makes it the
harder of the two retention numbers to move.
</AnswerBox>

<FactTable
  id="grr-benchmarks"
  caption="Gross revenue retention, by contract size and against net"
  columns={["Reference point", "Figure"]}
  rows={[
    { cells: ["Median private B2B SaaS, gross and net", "84% and 101%"], factId: "f-unit-16" },
    { cells: ["Gross revenue retention by ACV", "82% under $25K, 88% at $25K to $100K, 95% above"], factId: "f-unit-18" },
    { cells: ["Net revenue retention by ACV", "97% under $25K, 118% above $100K"], factId: "f-unit-17" },
    { cells: ["Recovery by intervention: retry / card updater / email", "40% / 25% / plus 15% to 20%"], factId: "f-unit-14" },
    { cells: ["India recurring debit without extra authentication", "up to ₹15,000 (about $156)"], factId: "f-unit-26" },
    { cells: ["India card subscription failure after the 2021 rules", "above 20% in some categories"], factId: "f-unit-27" },
  ]}
/>

## How is GRR calculated?

Take a cohort's revenue twelve months ago. Take what remains of that same revenue
today, counting contraction and churn but no expansion. Divide the second by the
first.

Because expansion is excluded, the result cannot rise above where the cohort
started. That cap is the point. GRR answers one question only: how leaky is the base. NRR answers whether
expansion is covering the leak, and the two answers are often very different.

## What is a good GRR

The median for private B2B SaaS fell to 84%. Contract size sets most of it. Gross
retention runs 82% below $25K ACV, about ₹23.97 lakh. Between $25K and $100K,
about ₹23.97 lakh to ₹95.89 lakh, it reaches 88%. Above that band it reaches 95%.

Compare that against the net figures for the same bands, 97% and 118%. The gap
between gross and net widens with contract size, because larger accounts both stay
longer and expand more. So an enterprise book looks far healthier on NRR than on
GRR, and the smaller book has nowhere to hide.

## Why GRR is the harder number

Expansion cannot rescue it. A weak NRR can be lifted by selling more to the
accounts that stayed, which a good sales team can do inside a quarter. GRR improves only when fewer
accounts and fewer rupees leave.

That pushes the work upstream into onboarding, into the product, and into
collection. None of those move in a quarter, which is exactly why GRR is the
number worth watching.

## The collections half of GRR

Revenue lost to a declined mandate leaves the cohort exactly as a cancellation
does, and most dashboards do not separate them. So part of a poor GRR is a
payments problem wearing a retention label.

India makes the mechanism visible. The 2021 card rules pushed subscription failure
rates above 20% in some categories. Recurring debits now clear without extra
authentication up to ₹15,000, about $156, and above that threshold each charge
needs the customer present again. The fixes are mechanical: smart retry recovers
about 40%, a card updater 25%, and dunning email adds 15% to 20% on top.

<FromMyWork exp="exp-002">
Most of the failure data was unusable. Of 14,022 rejections only 6,240 carried a
structured reason, so the first job was making failures countable before anything
could be attributed to them.
</FromMyWork>

The same applies here. A GRR you cannot decompose into decided and failed is a
number you cannot act on.
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
