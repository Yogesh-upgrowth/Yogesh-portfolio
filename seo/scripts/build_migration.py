#!/usr/bin/env python3
"""
build_migration.py — the D1 migration map.

Yogesh chose to migrate the existing site into the plan's taxonomy (AUDIT.md D1,
option b). This script holds the decision tables and emits two artefacts:

  seo/migration-map.csv     reviewable: from, to, kind, reason
  seo/config/redirects.json compiled: what next.config redirects() consumes

Never hand-edit either output. Change the tables here and re-run.

Kinds:
  301        permanent move, equity preserved
  301-merge  several live URLs collapse onto one target (e.g. D1/D7/D30 → retention)
  410        retired, no target (none issued by default — see NOTES)

NOTES
  Nothing is retired. Every live URL gets a target. 00-STRATEGY §6 permits a
  separate /notes blog outside the counted 1,017 pages, which is where PM-craft
  and PM-career articles go: they keep their equity, and the programmatic hubs
  stay topically pure. /notes URLs are deliberately NOT inventory rows — they
  sit outside the content system and nothing programmatic links to them.
"""
import csv, json, os, re, sys
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.path.dirname(ROOT)

# ── /blog → /playbooks or /glossary, where the topic genuinely matches ────────
# Only real matches. Anything forced would create the intent-guard collisions
# 00-STRATEGY §3 exists to prevent.
BLOG_TO_PLAN = {
    "activation-metrics-product-growth":      "/playbooks/activation-metric",
    "north-star-metrics-how-to":              "/playbooks/north-star-metric",
    "growth-loops-product-management":        "/playbooks/growth-loops-vs-funnels",
    "funnel-analysis-product-managers":       "/playbooks/growth-loops-vs-funnels",
    "product-led-growth-guide":               "/playbooks/plg-for-consumer-apps",
    "retention-strategies-consumer-apps":     "/playbooks/retention-curve-analysis",
    "product-analytics-improve-retention":    "/playbooks/retention-curve-analysis",
    "pricing-strategy-framework":             "/playbooks/subscription-pricing-strategy",
    "monetization-models-digital-products":   "/playbooks/app-monetization-models",
    "balancing-growth-monetization":          "/playbooks/hybrid-monetization",
    "reduce-customer-acquisition-cost":       "/playbooks/unit-economics-for-consumer-apps",
    "ab-testing-product-decisions":           "/playbooks/experimentation-program",
    "metrics-that-matter-product-managers":   "/glossary/omtm",
}

# ── benchmarks: live slugs → plan slugs ──────────────────────────────────────
# The plan's `retention` metric is labelled "Retention (D1/D7/D30)" — one page
# carries all three horizons, so the three live URLs merge onto it.
METRIC_MAP = {
    "d1-retention":        ("retention", True),
    "d7-retention":        ("retention", True),
    "d30-retention":       ("retention", True),
    "trial-to-paid":       ("trial-to-paid-conversion", False),
    "arpu":                ("arpu", False),
    # These two have no plan metric; added to the seeds rather than forced
    # onto an unrelated one.
    "app-store-conversion": ("app-store-conversion", False),
    "install-to-purchase":  ("install-to-purchase", False),
}
INDUSTRY_MAP = {
    "fintech": "fintech", "gaming": "gaming", "travel": "travel",
    "ecommerce": "d2c-ecommerce",
    "health-fitness": "healthtech", "medical": "healthtech",
    "entertainment": "media-ott",
    "social": "social-dating",
    "productivity": "b2b-saas",
    "subscription-apps": "b2b-saas",
}

# ── /consulting → /services ─────────────────────────────────────────────────
CONSULTING_MAP = {
    "product-monetisation-consultant":  "/services/app-monetization-strategy",
    "fintech-product-consultant":       "/services/app-monetization-strategy/fintech",
    "consumer-app-growth-consultant":   "/services/retention-and-lifecycle",
    "marketplace-product-consultant":   "/services/app-monetization-strategy/marketplaces",
    "saas-product-consultant":          "/services/pricing-and-packaging/b2b-saas",
}

# ── one-offs ────────────────────────────────────────────────────────────────
SINGLETONS = {
    "/product-growth-score": "/tools/monetization-health-score",
    "/about-yogesh-yadav":   "/about",
    "/contact":              "/work-with-me",
    "/blog":                 "/notes",
    "/work":                 "/case-studies",
    "/work/carinfo":         "/case-studies/carinfo-3-8m-to-45m-mau",
    "/work/loanwiser":       "/case-studies/loanwiser-credit-routing",
    "/work/knipex":          "/notes/knipex",
    "/work/upgrowth":        "/notes/upgrowth",
    # Live /case-studies/* are category filters; the plan uses the prefix for
    # individual studies, so the filters move under the hub as query state.
    "/case-studies/design":           "/case-studies",
    "/case-studies/growth":           "/case-studies",
    "/case-studies/machine-learning": "/case-studies",
    "/case-studies/product":          "/case-studies",
    "/case-studies/seo":              "/case-studies",
}

# Live case studies that are the same work as a plan slug (the D2 conflict:
# one says 45M+ MAU, the other 1.2M+ DAU).
CASE_STUDY_ALIASES = {
    "carinfo-45m-mau":              "carinfo-3-8m-to-45m-mau",
    "insurance-funnel-1200-growth": "carinfo-motor-insurance-monetization",
}


def live_urls():
    p = os.path.join(REPO, "dist", "public", "sitemap.xml")
    ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    root = ET.parse(p).getroot()
    out = set()
    for loc in root.findall(".//s:loc", ns):
        out.add(loc.text.replace("https://pmyogesh.com", "") or "/")
    return sorted(out)


def target_for(url):
    """Return (target, kind, reason) or None when the URL stays put."""
    if url == "/":
        return None
    if url in SINGLETONS:
        return SINGLETONS[url], "301", "explicit mapping"

    if url.startswith("/blog/"):
        slug = url[len("/blog/"):]
        if slug in BLOG_TO_PLAN:
            return BLOG_TO_PLAN[slug], "301", "topic matches a plan archetype"
        return f"/notes/{slug}", "301", "PM craft/career — 00-STRATEGY §6 /notes, outside the 1,017"

    if url.startswith("/case-study/"):
        slug = url[len("/case-study/"):]
        slug = CASE_STUDY_ALIASES.get(slug, slug)
        return f"/case-studies/{slug}", "301", "singular → plural prefix"

    if url.startswith("/consulting/"):
        slug = url[len("/consulting/"):]
        if slug in CONSULTING_MAP:
            return CONSULTING_MAP[slug], "301", "consulting → services"
        raise SystemExit(f"unmapped /consulting URL: {url}")

    if url.startswith("/benchmarks/"):
        parts = [p for p in url.split("/") if p][1:]
        if len(parts) != 2:
            return None  # /benchmarks hub already matches
        metric, industry = parts
        if metric not in METRIC_MAP:
            raise SystemExit(f"unmapped benchmark metric: {metric}")
        if industry not in INDUSTRY_MAP:
            raise SystemExit(f"unmapped benchmark industry: {industry}")
        m, merged = METRIC_MAP[metric]
        tgt = f"/benchmarks/{m}/{INDUSTRY_MAP[industry]}"
        if tgt == url:
            return None
        kind = "301-merge" if merged else "301"
        reason = ("D1/D7/D30 collapse onto the plan's single retention metric"
                  if merged else "slug renamed to the plan's vocabulary")
        return tgt, kind, reason
    return None


def main():
    rows, seen_targets = [], {}
    for url in live_urls():
        r = target_for(url)
        if not r:
            continue
        tgt, kind, reason = r
        rows.append({"from": url, "to": tgt, "kind": kind, "reason": reason})
        seen_targets.setdefault(tgt, []).append(url)

    rows.sort(key=lambda r: r["from"])
    out_csv = os.path.join(ROOT, "migration-map.csv")
    with open(out_csv, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["from", "to", "kind", "reason"])
        w.writeheader()
        w.writerows(rows)

    redirects_path = os.path.join(ROOT, "config", "redirects.json")
    doc = json.load(open(redirects_path))
    doc["redirects"] = [
        {"source": r["from"], "destination": r["to"],
         "permanent": True, "note": r["reason"]}
        for r in rows
    ]
    doc["_generated_by"] = "seo/scripts/build_migration.py — never hand-edit"
    json.dump(doc, open(redirects_path, "w"), indent=2)
    open(redirects_path, "a").write("\n")

    merges = {t: u for t, u in seen_targets.items() if len(u) > 1}
    print(f"wrote {out_csv}")
    print(f"wrote {redirects_path}")
    print(f"redirects: {len(rows)}")
    from collections import Counter
    for k, v in sorted(Counter(r['kind'] for r in rows).items()):
        print(f"  {k}: {v}")
    print(f"targets receiving >1 source (merges): {len(merges)}")
    for t, u in sorted(merges.items())[:12]:
        print(f"    {t}  <- {len(u)} urls")
    notes = [r for r in rows if r["to"].startswith("/notes")]
    print(f"to /notes (outside the 1,017): {len(notes)}")


if __name__ == "__main__":
    main()
