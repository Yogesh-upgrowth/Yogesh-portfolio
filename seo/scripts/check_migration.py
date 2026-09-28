#!/usr/bin/env python3
"""
check_migration.py — fails when the migration map is incoherent.

Three ways a migration silently breaks, all checked here:
  1. A 301 points at a URL that is not an inventory row (G08 would fail every
     internal link into it, and the redirect would land on a 404).
  2. A redirect chains: its target is itself the source of another redirect.
     Chains lose equity and Google gives up after a few hops.
  3. A redirect loops back to its own source.

Exit code is non-zero on any failure, so this is CI-safe.

Targets outside the inventory are allowed only when listed in ALLOWED_NON_ROWS:
/notes/* is sanctioned by 00-STRATEGY §6 and deliberately excluded from the
1,017 counted pages, and /about is named in 03-TECHNICAL-SPEC §9.7.
"""
import csv, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALLOWED_NON_ROWS = [re.compile(r"^/notes(/|$)"), re.compile(r"^/about$")]


def main():
    inv = {r["url"] for r in csv.DictReader(open(os.path.join(ROOT, "page-inventory.csv")))}
    rows = list(csv.DictReader(open(os.path.join(ROOT, "migration-map.csv"))))
    sources = {r["from"] for r in rows}
    fails = []

    for r in rows:
        src, tgt = r["from"], r["to"]
        if tgt == src:
            fails.append(("loop", src, tgt, "redirect points at itself"))
            continue
        if tgt in sources:
            fails.append(("chain", src, tgt, "target is itself redirected"))
        if tgt not in inv and not any(p.match(tgt) for p in ALLOWED_NON_ROWS):
            fails.append(("missing-row", src, tgt, "target is not an inventory row"))

    allowed = sum(1 for r in rows if any(p.match(r["to"]) for p in ALLOWED_NON_ROWS))
    print(f"redirects checked: {len(rows)}")
    print(f"  targets that are inventory rows: "
          f"{sum(1 for r in rows if r['to'] in inv)}")
    print(f"  targets allowed outside the inventory: {allowed}")

    if not fails:
        print("PASS — every target resolves, no chains, no loops")
        return 0

    by_kind = {}
    for kind, src, tgt, why in fails:
        by_kind.setdefault(kind, []).append((src, tgt, why))
    print(f"\nFAIL — {len(fails)} problem(s)")
    for kind, items in sorted(by_kind.items()):
        print(f"\n  {kind} ({len(items)}):")
        for src, tgt, why in items[:25]:
            print(f"    {src}  ->  {tgt}   ({why})")
        if len(items) > 25:
            print(f"    ... +{len(items)-25} more")
    return 1


if __name__ == "__main__":
    sys.exit(main())
