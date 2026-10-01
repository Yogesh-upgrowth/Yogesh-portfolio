#!/usr/bin/env python3
"""Retarget internal links whose destination is a planned page, not a built one.

Why this exists: author.py used to validate link targets against
seo/page-inventory.csv, which is the *plan*. Every URL scheduled for a later wave
passed, so 46 links to unbuilt calculators, /india pages and churn benchmarks
reached the content and would have shipped as 301s onto 404s. author.py now checks
against built pages instead; this script repairs what the old check let through.

It rewrites the batch sources rather than content/, because the batches are the
source of truth — patching content/ alone would be undone by the next
regeneration.

Each mapping sends a link to the nearest live page that honestly carries the same
intent, and rewrites the anchor to name what the reader will actually land on. A
link whose anchor promises a calculator and lands on a hub is a worse defect than
the 404 it replaced.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
BATCHES = ROOT / "seo" / "batches"

# target -> (live url, anchor). A churn benchmark maps to the retention benchmark
# for the same industry: both exist, both are built, and the industries line up
# exactly, so the reader lands on the same segment rather than on a generic hub.
MAP: dict[str, tuple[str, str]] = {
    "/benchmarks/churn": ("/benchmarks/retention", "the retention benchmarks"),
    # The per-industry churn pages are cited almost entirely from the retention
    # page for the SAME industry, so mapping churn/fintech to retention/fintech
    # would self-link. The glossary entry is the live page that actually covers
    # churn, and these links are all role "lateral", which it satisfies.
    "/benchmarks/churn/b2b-saas": ("/glossary/churn-rate", "the churn rate definition"),
    "/benchmarks/churn/d2c-ecommerce": ("/glossary/churn-rate", "the churn rate definition"),
    "/benchmarks/churn/fintech": ("/glossary/churn-rate", "the churn rate definition"),
    "/benchmarks/churn/gaming": ("/glossary/churn-rate", "the churn rate definition"),
    "/benchmarks/churn/healthtech": ("/glossary/churn-rate", "the churn rate definition"),
    "/benchmarks/churn/social-dating": ("/glossary/churn-rate", "the churn rate definition"),
    # Retention children not yet written fall back to their own sub-hub, which is.
    "/benchmarks/retention/ai-apps": ("/benchmarks/retention", "the retention benchmarks"),
    "/benchmarks/retention/marketplaces": ("/benchmarks/retention", "the retention benchmarks"),
    "/benchmarks/retention/media-ott": ("/benchmarks/retention", "the retention benchmarks"),
    # A near-synonym that is written: the paywall entry covers hard paywalls.
    "/glossary/hard-paywall": ("/glossary/paywall", "the paywall entry"),
    "/glossary/upi-autopay": ("/india", "monetising in India"),
    # Hubs with no children built. An empty hub is the thin page 01 SectionB
    # forbids, so these point at the live page that carries the same intent.
    "/teardowns": ("/case-studies", "the case studies"),
    "/hire": ("/work-with-me", "work with me"),
}

# Every /india/* leaf is wave 2+; the /india hub is built and carries the subject.
INDIA = ("/india", "monetising in India")
# Every /tools/* calculator is wave 2+; the /tools hub is built and lists them.
TOOLS = ("/tools", "the tools")
LIVE_TOOL = ("/tools/monetization-health-score", "the monetisation health score")


def live_urls() -> set[str]:
    urls = {"/", "/about", "/work-with-me", "/notes", "/contact"}
    for f in (ROOT / "web" / "content").glob("**/*.json"):
        if f.name == "experience.json" or "hubs" in f.parts:
            continue
        try:
            m = json.loads(f.read_text())
        except json.JSONDecodeError:
            continue
        if isinstance(m, dict) and m.get("url"):
            urls.add(m["url"])
    return urls


def resolve(target: str, live: set[str]) -> tuple[str, str] | None:
    """Where should this dead target point, and what should the anchor say?"""
    if target in live:
        return None
    if target in MAP:
        return MAP[target]
    if target.startswith("/india/"):
        return INDIA
    if target.startswith("/tools/"):
        return TOOLS
    return None


LINK = re.compile(r'\("(/[^"]*)",\s*"([^"]*)",\s*"([a-z]+)"\)')
# url="/x" on the page spec, so a rewrite can be checked against its own page.
PAGE_URL = re.compile(r'\burl="(/[^"]*)"')


def main() -> int:
    live = live_urls()
    changed: dict[str, int] = {}
    unmapped: set[str] = set()

    for path in sorted(BATCHES.glob("*.py")):
        src = path.read_text()
        hits = 0
        # Every page URL this file defines. A mapping that lands on one of them
        # from inside that same page produces a self-link, which G08 rejects —
        # /teardowns -> /case-studies did exactly that on the /case-studies hub.
        own = set(PAGE_URL.findall(src))

        def sub(m: re.Match[str]) -> str:
            nonlocal hits
            url, anchor, role = m.group(1), m.group(2), m.group(3)
            base = url.split("#")[0]
            r = resolve(base, live)
            if r is None:
                if base not in live:
                    unmapped.add(base)
                return m.group(0)
            new_url, new_anchor = r
            if new_url in own and new_url in src:
                # Cannot tell from a regex which page this link belongs to, so
                # flag rather than guess: a self-link is worse than a 404.
                print(f"  SKIPPED in {path.name}: {base} -> {new_url} may self-link; "
                      f"retarget it by hand", file=sys.stderr)
                return m.group(0)
            # A `tool` role must still land on a tool. The hub satisfies the
            # reader; the single built calculator satisfies G08's intent better.
            if role == "tool" and new_url == "/tools":
                new_url, new_anchor = LIVE_TOOL
            hits += 1
            return f'("{new_url}", "{new_anchor}", "{role}")'

        out = LINK.sub(sub, src)
        # Body markdown links to dead targets, e.g. [text](/tools/ltv-calculator).
        def sub_md(m: re.Match[str]) -> str:
            nonlocal hits
            base = m.group(1).split("#")[0]
            r = resolve(base, live)
            if r is None:
                return m.group(0)
            hits += 1
            return f"]({r[0]})"

        out = re.sub(r"\]\((/[^)\s]+)\)", sub_md, out)
        if out != src:
            path.write_text(out)
            changed[path.name] = hits

    for name, n in sorted(changed.items()):
        print(f"  {name}: {n} link(s) retargeted")
    print(f"retarget: {sum(changed.values())} link(s) across {len(changed)} batch file(s)")
    if unmapped:
        print(f"\nunmapped dead targets ({len(unmapped)}) — decide these by hand:")
        for u in sorted(unmapped):
            print(f"    {u}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
