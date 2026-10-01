#!/usr/bin/env python3
"""Observe the live status of every source_url and record it as a fetch_log.

G02 checks that each cited source was reachable. It runs offline against the
fetch_log on the research object rather than re-fetching, so the log has to be
produced somewhere with outbound HTTP. The agent container's egress proxy
denies arbitrary hosts, so this runs in CI, where the runner has open network,
and the resulting logs are committed.

Only the status is recorded. Nothing here decides whether a fact is true — that
stayed with the researcher who read the page.

  python3 seo/scripts/verify_sources.py            # fetch, write logs, report
  python3 seo/scripts/verify_sources.py --dry-run   # list the URLs, fetch none
"""
from __future__ import annotations

import argparse
import json
import pathlib
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = pathlib.Path(__file__).resolve().parents[2]
RESEARCH = ROOT / "seo" / "research"
TIMEOUT = 30
# Some publishers 403 a bare urllib agent while serving the page fine to a
# browser. A 403 from a working page is a false failure, so present a real UA.
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)


def observe(url: str) -> tuple[int, str]:
    """Return (status, why). Status 0 means the request never got a response."""
    req = urllib.request.Request(url, headers={"User-Agent": UA}, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
            return resp.status, f"GET returned {resp.status}"
    except urllib.error.HTTPError as exc:
        return exc.code, f"GET returned {exc.code}"
    except Exception as exc:  # DNS, TLS, reset, timeout
        return 0, f"no response: {type(exc).__name__}"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    objects = sorted(RESEARCH.glob("*.json"))
    if not objects:
        print(f"no research objects under {RESEARCH}", file=sys.stderr)
        return 1

    loaded = [(p, json.loads(p.read_text())) for p in objects]
    urls = sorted({f["source_url"] for _, d in loaded for f in d.get("facts", [])})
    print(f"{len(loaded)} research objects, {len(urls)} distinct source URLs")

    if args.dry_run:
        for u in urls:
            print(" ", u)
        return 0

    with ThreadPoolExecutor(max_workers=8) as pool:
        results = dict(zip(urls, pool.map(observe, urls)))

    # used=True: every URL here is cited by a fact, which is what "used" means.
    for path, data in loaded:
        cited = sorted({f["source_url"] for f in data.get("facts", [])})
        data["fetch_log"] = [
            {"url": u, "status": results[u][0], "used": True, "why": results[u][1]}
            for u in cited
        ]
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")

    bad = {u: r for u, r in results.items() if r[0] != 200}
    print(f"\n{len(urls) - len(bad)}/{len(urls)} returned 200")
    for u, (status, why) in sorted(bad.items()):
        print(f"  {status or 'ERR':>3}  {u}  ({why})")
    if bad:
        print(
            "\nEach of these needs an archive_url on the facts citing it, or a "
            "live replacement source. G02 blocks the page until then."
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
