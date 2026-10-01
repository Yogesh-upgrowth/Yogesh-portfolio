#!/usr/bin/env python3
"""Batch w1-benchmark-01 — the twelve benchmark pages the redirects point at.

`pnpm launch:check` names 20 redirects landing under /benchmarks/, resolving to
twelve distinct destinations across retention, app-store conversion, ARPU,
install-to-purchase and trial-to-paid.

The inventory note on every one of these rows says: **"≥3 sources or mark
'insufficient public data'"**. That rule does most of the work here, because
per-industry retention for named Indian apps largely is not published. Where a
figure exists it is cited; where it does not, the page says so in the table rather
than reaching for a number from an adjacent category and hoping. Saying "no public
figure" in a benchmark table is the whole reason to trust the rows that do carry
one.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from w1_glossary_01 import POOL as P1, fact, L, V, VERIFIED  # noqa: E402
from w1_glossary_02 import POOL as P2  # noqa: E402
from w1_hub_01 import POOL as P3  # noqa: E402
from w1_service_01 import POOL as P4  # noqa: E402

UX = ("https://uxcam.com/blog/mobile-app-retention-benchmarks/",
      "Mobile App Retention Benchmarks by Industry", "uxcam.com", "2026")
EN = ("https://enable3.io/blog/app-retention-benchmarks-2025",
      "App Retention Benchmarks: How Your App Stacks Up by Industry", "enable3.io", "2026")
SN = ("https://semnexus.com/aso-conversion-rate-benchmarks-by-category-2026",
      "ASO Conversion Rate Benchmarks by App Category", "semnexus.com", "2026")
AT = ("https://www.apptweak.com/en/aso-blog/average-app-conversion-rate-per-category",
      "Average App Conversion Rate per Category", "apptweak.com", "2026")
UXC = ("https://uxcam.com/blog/mobile-app-conversion-rate/",
       "Mobile App Conversion Rate Benchmarks", "uxcam.com", "2026")
RC = ("https://www.revenuecat.com/state-of-subscription-apps",
      "State of Subscription Apps 2026", "revenuecat.com", "2026")
BOA = ("https://www.businessofapps.com/data/app-retention-rates/",
       "App Retention Rates", "businessofapps.com", "2026")

NEW = [
    # ── retention, cross-industry and per-industry ──────────────────────────
    fact("f-bm-01", "The cross-industry app retention average is 25% at day 1, 8% at day 7 and 4% at day 30",
         "4", "%", UX,
         "The industry average in 2026 is 25% on Day-1, 8% on Day-7, and 4% at Day-30."),
    fact("f-bm-02", "Fintech apps retain a median 28% at day 1, 12% at day 7 and 7% at day 30, with strong performers at 35-45%, 18-25% and 10-15%",
         "7", "%", EN,
         "Fintech apps: strong performers 35-45% Day-1, 18-25% Day-7, 10-15% Day-30; medians 28%, "
         "12% and 7%.", False),
    fact("f-bm-03", "E-commerce apps retain a median 18% at day 1, 5% at day 7 and 2% at day 30, with strong performers at 25-30%, 8-12% and 3-6%",
         "2", "%", EN,
         "Ecommerce apps: strong performers 25-30% Day-1, 8-12% Day-7, 3-6% Day-30; medians 18%, 5% "
         "and 2%.", False),
    fact("f-bm-04", "Health and fitness apps retain a median 25% at day 1, 10% at day 7 and 5% at day 30, with strong performers at 35-45%, 15-22% and 8-12%",
         "5", "%", EN,
         "Health and fitness apps: strong performers 35-45% Day-1, 15-22% Day-7, 8-12% Day-30; "
         "medians 25%, 10% and 5%.", False),
    fact("f-bm-05", "Gaming apps retain a median 32% at day 1, 8% at day 7 and 3% at day 30, with strong performers at 40-50%, 12-18% and 5-8%",
         "3", "%", EN,
         "Gaming apps: strong performers 40-50% Day-1, 12-18% Day-7, 5-8% Day-30; medians 32%, 8% "
         "and 3%.", False),
    fact("f-bm-06", "Social apps retain a median 40% at day 1, 18% at day 7 and 12% at day 30, with strong performers at 50-60%, 25-30% and 15-20%",
         "12", "%", EN,
         "Social apps: strong performers 50-60% Day-1, 25-30% Day-7, 15-20% Day-30; medians 40%, 18% "
         "and 12%.", False),
    fact("f-bm-07", "Productivity and B2B SaaS apps hold 20% to 32% at day 30, against an average iOS app at 5.3%",
         "20-32", "%", BOA,
         "For productivity and B2B SaaS apps, day-30 retention benchmarks are 20-32%. The average "
         "iOS app retention rate drops to 5.3% by day 30.", False),
    fact("f-bm-08", "Only 5% to 7% of apps still retain users at day 30", "5-7", "%", BOA,
         "Only 5-7% of apps retain users by day 30, with most apps losing nearly all users within a "
         "month.", False),
    # ── app-store conversion ────────────────────────────────────────────────
    fact("f-bm-09", "US App Store search install medians span 2.6% to 12.4% across top-level categories, against 0.1% to 2.5% from browse",
         "2.6-12.4", "%", SN,
         "In August 2026, U.S. App Store Search medians spanned 2.6% to 12.4% across top-level "
         "categories, while Browse produced 0.1% to 2.5%."),
    fact("f-bm-10", "Medical has the highest iOS install rate by category at 7.8% and entertainment the lowest at 1.1%",
         "7.8", "%", AT,
         "Medical had the highest install rate by category on iOS at 7.8%, while entertainment had "
         "the lowest at 1.1%."),
    fact("f-bm-11", "The average US App Store conversion rate across categories is 8.56%, with an average install rate of 3.8%",
         "8.56", "%", SN,
         "The average conversion rate across all categories on the US App Store was 8.56%, while the "
         "average install rate across all categories was 3.8%.", False),
    fact("f-bm-12", "Business apps convert about 66.7% of App Store page views to installs",
         "66.7", "%", SN,
         "Business category shows approximately 66.7% page view to install conversion on App Store.",
         False),
    fact("f-bm-13", "Health and fitness apps show a 4% to 8% impression-to-page-view rate and 25% to 40% page-view-to-install",
         "25-40", "%", SN,
         "Health & Fitness typically shows 4-8% IPV rate and 25-40% page view to install rate, with "
         "1-3% impression to install.", False),
    # ── install to purchase, ARPU, trial ────────────────────────────────────
    fact("f-bm-14", "Most apps convert 1% to 2% of installs into a purchase, with retail at 1.38% and travel at 2.41%",
         "1.38", "%", UXC,
         "Most mobile apps see install-to-purchase conversion between 1% and 2%. Retail apps 1.38%; "
         "travel apps 2.41%."),
    fact("f-bm-15", "A good conversion rate for an e-commerce mobile app sits around 2% to 6% depending on order value and purchase frequency",
         "2-6", "%", ("https://blendcommerce.com/blogs/shopify/ecommerce-conversion-rate-benchmarks-2026",
                      "eCommerce Conversion Rate Benchmarks 2026", "blendcommerce.com", "2026"),
         "A good conversion rate for an ecommerce mobile app sits around 2% to 6%, depending on "
         "industry, average order value, product type and purchase frequency.", False),
    fact("f-bm-16", "Median revenue per install at day 60 is 0.34 dollars across categories, with 0.66 and above indicating strong 60-day monetisation",
         "0.34", "USD", RC,
         "Average revenue per install at Day 60 has a $0.34 median across all categories, with "
         "$0.66+ indicating strong 60-day monetization."),
    fact("f-bm-17", "North America leads day-35 download-to-paid conversion at a 2.6% median, nearly twice India and South-East Asia at 1.4%",
         "2.6", "%", RC,
         "North America leads D35 conversion at 2.6% median, nearly 2x IN/SEA's 1.4%."),
    fact("f-bm-18", "The business category records the highest download-to-trial rate of any app category",
         "1", "rank", RC,
         "The business app category had the highest download to trial rate out of all categories "
         "covered in the State of Subscription Apps.", False),
    fact("f-bm-19", "A three-day trial averages 26% cancellations against 51% for a thirty-day trial, and 31.1% of thirty-day trials cancel on day zero",
         "26", "%", ("https://www.businessofapps.com/data/app-subscription-trial-benchmarks/",
                     "App Subscription Trial Benchmarks", "businessofapps.com", "2026"),
         "A three day trial averages 26% cancellations; a 30 day one 51%. For 30-day trials, "
         "31.1% cancel on day 0.", False),
    fact("f-bm-21", "Across 31 app categories worldwide, 25.3% of users return on day 1 and average retention falls to 5.7% by day 30",
         "5.7", "%", ("https://userpilot.com/blog/mobile-app-retention/",
                      "Mobile App Retention in 2026", "userpilot.com", "2026"),
         "Only 25.3% of mobile app users return on Day 1, with average retention falling to 5.7% by "
         "Day 30 across 31 app categories worldwide.", False),
    fact("f-bm-20", "AI apps earn 41% more revenue per payer and churn about 30% faster",
         "41", "%", RC,
         "AI-powered apps generate 41% more revenue per payer, but they churn 30% faster."),
]

ST = ("https://www.statista.com/outlook/amo/media/tv-video/ott-video/india/",
      "OTT Video outlook, India", "statista.com", "2026")
CU = ("https://culta.ai/blog/arpu-benchmarks-2026",
      "ARPU Benchmarks 2026: Where Does Your SaaS Rank", "culta.ai", "2026")
OP = ("https://optif.ai/learn/questions/b2b-saas-churn-rate-benchmark/",
      "B2B SaaS Churn Rate Benchmarks, 939 Companies by Segment and ACV",
      "optif.ai", "2026")

NEW += [
    fact("f-bm-22", "India's OTT ARPU is projected at 40.44 dollars for 2026, with subscription video at 24.58 dollars per user",
         "40.44", "USD", ST,
         "India's OTT ARPU is projected to reach USD 40.44 in 2026, with SVoD generating USD 24.58 "
         "per user.", False),
    fact("f-bm-23", "India's OTT ARPU is also reported at 85 to 95 rupees a month, among the lowest in the world",
         "85-95", "INR", ("https://raoscaff.com/intel/22-ott-pricing-wars/report.html",
                          "OTT Pricing Wars: the Ad-Tier Pivot and the ARPU Math",
                          "raoscaff.com", "2026"),
         "India's OTT ARPU of Rs 85-95 per month is among the lowest globally.", False),
    fact("f-bm-24", "India's OTT video revenue is projected at 5.08 billion dollars in 2026, with users rising from 521 million in 2025 to 549 million",
         "5.08", "USD billion", ST,
         "India OTT Video revenue is projected at US$5.08bn in 2026, with users rising from 521 "
         "million in 2025 to 549 million.", False),
    fact("f-bm-25", "JioHotstar reports 100 million subscribers and 500 million active users, and is forecast at 10,000 to 11,000 crore rupees, about 22% to 25% of India's OTT revenue",
         "100", "million", ("https://www.sci-tech-today.com/stats/top-10-indian-ott-platforms-statistics-updated/",
                            "Top 10 Indian OTT Platforms Statistics", "sci-tech-today.com", "2026"),
         "JioHotstar leads with 100 million subscribers, 500 million active users and 650 million "
         "downloads; forecast Rs 10,000-11,000 crore, 22-25% of India OTT revenue.", False),
    fact("f-bm-26", "India has 216.5 million OTT subscriptions", "216.5", "million",
         ("https://bestmediainfo.com/insights/india-has-2165-million-ott-subscriptions-but-platforms-are-still-struggling-to-monetise-them-12457338",
          "India has 216.5 million OTT subscriptions", "bestmediainfo.com", "2026"),
         "India has 216.5 million OTT subscriptions, but platforms are still struggling to monetise "
         "them.", False),
    fact("f-bm-27", "Streaming advertising revenue in India stood at 563.9 million dollars in 2025",
         "563.9", "USD million", ST,
         "Streaming advertising revenue stood at US$563.9 million in 2025, and ad-supported tiers are "
         "now widely adopted.", False),
    fact("f-bm-34", "India's streaming ARPU is also projected at 9.02 dollars for 2026",
         "9.02", "USD",
         ("https://www.medianews4u.com/indias-ott-market-hits-601-million-users-but-only-119-million-pay-monetisation-gap-widens/",
          "India's OTT Market Hits 601 Million Users, But Only 119 Million Pay",
          "medianews4u.com", "2026"),
         "India's projected ARPU of USD 9.02 in 2026 is the clearest indicator of the market's "
         "monetisation ceiling at current pricing.", False),
    fact("f-bm-28", "B2B SaaS monthly ARPU runs 20 to 50 dollars self-serve, 50 to 200 for SMB, 200 to 2,000 mid-market and 2,000 to 10,000 plus for enterprise",
         "20-10000", "USD", CU,
         "Self-serve products land at $20-50/month, SMB at $50-200, mid-market at $200-2,000, and "
         "enterprise at $2,000-10,000+/month."),
    fact("f-bm-29", "The 2026 median B2B SaaS ARPU is about 250 dollars a month, up from 210 in 2024",
         "250", "USD", CU,
         "The 2026 median B2B SaaS ARPU is approximately $250/month, up from $210/month in 2024."),
    fact("f-bm-30", "Median SMB SaaS ARPU is 55 dollars a month", "55", "USD", CU,
         "For SMB specifically, the median ARPU is $55.", False),
    fact("f-bm-31", "SaaS segments are defined by annual contract value: SMB under 10,000 dollars, mid-market 10,000 to 100,000, enterprise above 100,000",
         "10000", "USD", OP,
         "Segments are defined by ACV: SMB under $10K, Mid-Market $10K-$100K, Enterprise above "
         "$100K.", False),
    fact("f-bm-32", "SMB products under 15,000 dollars ACV carry 2,000 to 8,000 dollars of CAC, and mid-market products from 15,000 to 100,000 ACV carry 15,000 to 40,000",
         "2000-8000", "USD", ("https://arjankc.com.np/blog/2026-b2b-saas-cac-benchmark-report/",
                              "2026 B2B SaaS CAC Benchmark Report", "arjankc.com.np", "2026"),
         "SMB products with ACVs under $15,000 have CAC of $2,000 to $8,000; mid-market targeting "
         "$15,000 to $100,000 has median CAC of $15,000 to $40,000.", False),
    fact("f-bm-33", "Annual account churn runs a 15% median for SMB, 10% for mid-market and 5% for enterprise",
         "15", "%", OP,
         "Annual account churn rates by segment: SMB median 15 percent, Mid-Market 10 percent, "
         "Enterprise 5 percent."),
]

POOL = {**P1, **P2, **P3, **P4}
POOL.update({f["fact_id"]: f for f in NEW})


BM_SCHEMA = ["Article", "Person", "BreadcrumbList", "FAQPage"]


def bm_cover(answer, numbers, differs, india, good):
    return {"answer_box": answer, "the_numbers": numbers,
            "why_this_industry_differs": differs, "india_layer": india,
            "what_good_looks_like": good}


def spec() -> dict:
    from w1_benchmark_pages_a import PAGES_A
    from w1_benchmark_pages_b import PAGES_B
    from w1_benchmark_pages_c import PAGES_C

    pages = [*PAGES_A, *PAGES_B, *PAGES_C]
    used = {fid for p in pages for fid in p["facts"]}
    missing = used - POOL.keys()
    if missing:
        raise SystemExit(f"facts not in POOL: {sorted(missing)}")
    return {
        "batch_id": "w1-benchmark-01", "wave": 1, "verified_on": VERIFIED,
        "fx_rate": 95.89,
        "default_cta": {
            "primary": {"label": "Get a benchmarks review", "href": "/work-with-me"},
            "secondary": {"label": "Browse the benchmarks", "href": "/benchmarks"},
        },
        "facts": {k: v for k, v in POOL.items() if k in used},
        "pages": pages,
    }


if __name__ == "__main__":
    out = Path(__file__).with_suffix(".json")
    s = spec()
    out.write_text(json.dumps(s, indent=2, ensure_ascii=False) + "\n")
    print(f"{out.name}: {len(s['pages'])} pages, {len(s['facts'])} facts")
