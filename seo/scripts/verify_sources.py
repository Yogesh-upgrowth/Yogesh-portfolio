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


# A server that refuses an automated client is not a dead source. The first run
# of this script returned 405 for six businessofapps.com URLs and 403 for NPCI,
# bestmediainfo and a Substack post — all of which serve the page to a browser.
# Reporting those as failures alongside a real 404 would bury the two links that
# are actually gone, and "re-source NPCI" is the wrong instruction to give.
REFUSED = {401, 403, 405, 406, 418, 429}


def observe(url: str) -> tuple[int, str]:
    """Return (status, why). Status 0 means the request never got a response."""
    attempts: list[str] = []
    for method in ("GET", "HEAD"):
        req = urllib.request.Request(url, headers={"User-Agent": UA}, method=method)
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
                return resp.status, f"{method} returned {resp.status}"
        except urllib.error.HTTPError as exc:
            attempts.append(f"{method} {exc.code}")
            if exc.code not in REFUSED:
                # A real status from the origin. Trying another verb will not
                # change a 404 into a 200.
                return exc.code, f"{method} returned {exc.code}"
        except Exception as exc:  # DNS, TLS, reset, timeout
            attempts.append(f"{method} {type(exc).__name__}")
    last = attempts[-1] if attempts else "no attempt"
    code = int(last.split()[1]) if last.split()[-1].isdigit() else 0
    return code, f"refused automated access ({'; '.join(attempts)})"


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

    ok = {u for u, r in results.items() if r[0] == 200}
    refused = {u: r for u, r in results.items() if r[0] in REFUSED}
    dead = {u: r for u, r in results.items() if u not in ok and u not in refused}

    print(f"\n{len(ok)}/{len(urls)} returned 200")

    if dead:
        print(f"\nGONE — {len(dead)} source(s) no longer resolve. Each needs a "
              f"replacement source or an archive_url on the facts citing it:")
        for u, (status, why) in sorted(dead.items()):
            print(f"  {status or 'ERR':>3}  {u}  ({why})")

    if refused:
        print(f"\nREFUSED — {len(refused)} source(s) answered but blocked an "
              f"automated client. This is a bot defence, not a dead link: the "
              f"page is there in a browser. Check one by hand before "
              f"re-sourcing anything, and add an archive_url so G02 stops "
              f"blocking on it:")
        for u, (status, why) in sorted(refused.items()):
            print(f"  {status:>3}  {u}  ({why})")

    # G02 does not make this distinction — it blocks on any non-200 without an
    # archive_url — so both buckets block their pages. The split is for whoever
    # has to act on it, because the actions are different.
    print(f"\nG02 will block pages citing any of the {len(dead) + len(refused)} "
          f"non-200 source(s) that lack an archive_url.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
