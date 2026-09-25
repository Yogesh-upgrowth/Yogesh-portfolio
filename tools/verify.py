#!/usr/bin/env python3
"""
Observe what a platform profile page actually does, and flip its row to
`verified`.

Deliberately observation-only. It records what a fetch shows and never infers:
a page it cannot reach stays `unknown` rather than becoming a guess, and a
`reported` value is left in place alongside the observation so the two can be
compared rather than one silently overwriting the other.

This same logic backs W3 in n8n, so the weekly check and this one-off audit
cannot disagree.

    python tools/verify.py data/platforms.csv
    python tools/verify.py data/platforms.csv --only Upwork,Clutch
    python tools/verify.py data/platforms.csv --target pmyogesh.com

Requires: requests, beautifulsoup4
"""
from __future__ import annotations

import argparse
import csv
import datetime
import sys
import time
from urllib.parse import urlparse

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("Install dependencies first:  pip install requests beautifulsoup4")

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)
TIMEOUT = 25


def registrable(host: str) -> str:
    """Crude eTLD+1. Good enough to tell on-platform from off-platform links."""
    parts = [p for p in (host or "").lower().split(".") if p]
    return ".".join(parts[-2:]) if len(parts) >= 2 else (host or "")


def fetch(url: str) -> tuple[int | None, str, str | None]:
    try:
        r = requests.get(url, headers={"User-Agent": UA}, timeout=TIMEOUT, allow_redirects=True)
        return r.status_code, r.text or "", None
    except requests.RequestException as exc:
        return None, "", f"{type(exc).__name__}: {exc}"


def analyse(url: str, html: str, target: str | None):
    """Everything observable from raw HTML. No JS is executed, by design."""
    soup = BeautifulSoup(html, "html.parser")
    page_host = registrable(urlparse(url).hostname or "")

    external: list[tuple[str, str]] = []
    target_links: list[tuple[str, str]] = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if not href.startswith("http"):
            continue
        host = registrable(urlparse(href).hostname or "")
        if not host or host == page_host:
            continue
        # rel is a token list; empty means follow.
        rel = " ".join(a.get("rel") or []) or "follow"
        external.append((href, rel))
        if target and target in host:
            target_links.append((href, rel))

    robots_tag = soup.find("meta", attrs={"name": lambda v: v and v.lower() == "robots"})
    meta_robots = (robots_tag.get("content") or "").strip() if robots_tag else ""

    canonical_tag = soup.find("link", attrs={"rel": lambda v: v and "canonical" in [x.lower() for x in (v if isinstance(v, list) else [v])]})
    canonical = (canonical_tag.get("href") or "").strip() if canonical_tag else ""

    # An app shell: markup arrived, but carries no external anchors and almost
    # no text. Means anything not seen here may still exist after hydration.
    text_len = len(soup.get_text(strip=True))
    js_rendered = len(external) == 0 and text_len < 500

    maxlengths = []
    for field in soup.find_all(["input", "textarea"]):
        ml = field.get("maxlength")
        if ml:
            name = field.get("name") or field.get("id") or field.get("placeholder") or "unnamed"
            maxlengths.append(f"{name}={ml}")

    indexable = "no" if "noindex" in meta_robots.lower() else ("yes" if meta_robots or canonical or text_len > 500 else "unknown")

    return {
        "external_count": len(external),
        "external_sample": "; ".join(f"{h} [{r}]" for h, r in external[:5]),
        "target_links": target_links,
        "meta_robots": meta_robots,
        "canonical": canonical,
        "js_rendered": "yes" if js_rendered else "no",
        "maxlengths": "; ".join(maxlengths[:20]),
        "indexable": indexable,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("csv_path")
    ap.add_argument("--target", default="pmyogesh.com", help="domain whose inbound link we care about")
    ap.add_argument("--only", default="", help="comma-separated platform names")
    ap.add_argument("--delay", type=float, default=2.0, help="seconds between requests")
    args = ap.parse_args()

    with open(args.csv_path, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
        fieldnames = list(rows[0].keys()) if rows else []

    wanted = {p.strip().lower() for p in args.only.split(",") if p.strip()}
    now = datetime.datetime.now(datetime.timezone.utc).isoformat(timespec="seconds")
    checked = skipped = failed = 0

    for row in rows:
        if wanted and row.get("platform", "").lower() not in wanted:
            continue
        # Prefer a real sample profile; fall back to the help page for policy pages.
        url = (row.get("sample_public_profile_url") or "").strip() or (row.get("help_url") or "").strip()
        if not url:
            skipped += 1
            continue

        status, html, err = fetch(url)
        row["http_status"] = str(status) if status is not None else f"ERROR {err}"
        row["observed_at"] = now

        if status is None or not html:
            failed += 1
            # A failed fetch must not promote anything to verified.
            print(f"  {row['platform']:<26} FETCH FAILED  {err or status}")
            time.sleep(args.delay)
            continue

        a = analyse(url, html, args.target)
        row["meta_robots"] = a["meta_robots"]
        row["canonical"] = a["canonical"]
        row["js_rendered"] = a["js_rendered"]
        row["maxlength_fields"] = a["maxlengths"]
        row["indexable"] = a["indexable"]
        row["indexable_status"] = "verified" if a["js_rendered"] == "no" else "unknown"

        if a["target_links"]:
            rels = sorted({r for _, r in a["target_links"]})
            row["rel_observed"] = ",".join(rels)
            row["rel_status"] = "verified"
        elif a["js_rendered"] == "yes":
            # Nothing rendered server-side: absence proves nothing.
            row["rel_status"] = "unknown"
            row["notes"] = ((row.get("notes") or "") + " | app shell: raw HTML carries no external anchors, re-check with a browser").strip(" |")
        else:
            row["rel_status"] = "unknown"

        flag = "JS" if a["js_rendered"] == "yes" else "  "
        print(f"  {row['platform']:<26} {status} {flag} ext={a['external_count']:<4} robots={a['meta_robots'] or '-':<24} rel={row.get('rel_observed') or '-'}")
        checked += 1
        time.sleep(args.delay)

    with open(args.csv_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)

    print(f"\nchecked {checked} | skipped (no sample URL) {skipped} | fetch failed {failed}")
    print("Rows only reach verified where a page was actually fetched and parsed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
