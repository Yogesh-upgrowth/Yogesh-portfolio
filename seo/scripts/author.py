#!/usr/bin/env python3
"""Batch authoring harness.

A batch spec is one JSON file holding a shared fact pool plus N page specs. This
script expands it into the three files each page needs — the research object,
the page meta, the MDX body — so that producing a page costs prose and fact
selection rather than 200 lines of hand-written JSON.

Why a shared pool: facts are researched per cluster, not per page, and §C2 caps
a fact at 3 pages site-wide. Stable pool-level fact ids are what make that cap
countable; renaming a fact per page would hide the reuse from gReuse.

The script refuses to write when the batch itself breaches a cap it can see
locally (fact on >3 pages, >2 experience entries on a page). Catching it here
costs a second; catching it in `pnpm gates` costs a round trip.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from prose import style_problems, to_prose as _to_prose, words as _words  # noqa: E402

ROOT = Path(__file__).resolve().parents[2]
CONTENT = ROOT / "web" / "content"
RESEARCH = ROOT / "seo" / "research"

FACT_REUSE_SITEWIDE = 3
MIN_FACTS = 6  # G01: page-specific sourced facts.

# Archetypes 01 §B allows a year token in the title.
TIME_BOUND = {"benchmark", "benchmark-hub", "pricing-examples", "teardown", "compare"}

# 01 §B word and section bands, mirrored from web/lib/gates/contracts.ts.
BANDS = {
    "glossary": ((350, 700), (60, 250)),
    "hub": ((300, 600), (60, 250)),
    "service": ((900, 1500), (120, 400)),
    "playbook": ((1200, 2200), (120, 400)),
    "teardown": ((1100, 1800), (120, 400)),
    "case-study": ((900, 1600), (120, 400)),
    "benchmark-hub": ((700, 1200), (120, 400)),
    "benchmark": ((600, 1100), (120, 400)),
    "tool": ((500, 900), (100, 300)),
    "india": ((900, 1600), (120, 400)),
    "compare": ((900, 1500), (120, 400)),
}
EXPERIENCE_PER_PAGE = 2


def slug_of(url: str) -> str:
    return url.rstrip("/").rsplit("/", 1)[-1]


def hub_of(url: str) -> str:
    return url.strip("/").split("/")[0]


def build_research(page: dict, pool: dict, batch: dict) -> dict:
    facts = [pool[fid] for fid in page["facts"]]
    return {
        "page_id": page["id"],
        "url": page["url"],
        "archetype": page["archetype"],
        "primary_keyword": page["primary_keyword"],
        "secondary_keywords": page.get("secondary_keywords", []),
        # SERP capture needs a browser we do not have. Left empty and declared,
        # rather than invented: G02 reads fetch_log, and an empty log skips
        # rather than passes.
        "serp": {"in": [], "us": [], "ai_overview_present": False, "ai_overview_domains": []},
        "paa": page.get("paa", []),
        "facts": facts,
        "entities": page.get("entities", {}),
        "gaps": page.get("gaps", []),
        "status": "complete",
        "incomplete_reasons": [],
        "researched_on": batch["verified_on"],
        "serp_leader_summaries": [],
        "shared_candidates": [],
        "contradictions": page.get("contradictions", []),
        "fetch_log": [],
        "block_coverage": page.get("block_coverage", {}),
    }


def build_meta(page: dict, batch: dict) -> dict:
    return {
        "id": page["id"],
        "url": page["url"],
        "archetype": page["archetype"],
        "hub": page.get("hub", hub_of(page["url"])),
        "wave": page.get("wave", batch.get("wave", 1)),
        "batch_id": batch["batch_id"],
        "status": "drafted",
        "indexable": False,
        "title": page["title"],
        "meta_description": page["meta_description"],
        "h1": page["h1"],
        "primary_keyword": page["primary_keyword"],
        "secondary_keywords": page.get("secondary_keywords", []),
        "entity_a": page.get("entity_a", slug_of(page["url"])),
        "geo": page.get("geo", "IN+US"),
        "facts_used": page["facts"],
        "experience_used": page.get("experience", []),
        "internal_links": page["links"],
        "visuals": page.get("visuals", []),
        "faq": page.get("faq", []),
        "cta": page.get("cta", batch["default_cta"]),
        "schema_types": page["schema_types"],
        "unique_value_statement": page["unique_value"],
        "verified_on": batch["verified_on"],
        "refreshed_on": batch["verified_on"],
        "changelog": [],
        "not_affiliated": page.get("not_affiliated", False),
        "fx_rate_used": batch["fx_rate"],
    }


def inventory_urls() -> set[str]:
    """Every URL the plan knows about, plus the standing pages outside it.

    An internal link to a slug that is not in here is an invented URL, which is
    how /india/upi-autopay-subscriptions nearly shipped. Cheaper to fail on the
    typo than to publish a link into a 404.
    """
    import csv
    urls = {"/", "/about", "/work-with-me", "/notes", "/contact"}
    with (ROOT / "seo" / "page-inventory.csv").open() as fh:
        for row in csv.DictReader(fh):
            urls.add(row["url"])
    return urls


def check(spec: dict) -> list[str]:
    """Local cap checks. Cheap here, expensive in the gate runner."""
    errs: list[str] = []
    known = inventory_urls()
    pool = spec["facts"]
    counts: Counter[str] = Counter()
    for page in spec["pages"]:
        for fid in page["facts"]:
            if fid not in pool:
                errs.append(f"{page['id']}: fact {fid} is not in the pool")
            counts[fid] += 1
        if len(page.get("experience", [])) > EXPERIENCE_PER_PAGE:
            errs.append(f"{page['id']}: {len(page['experience'])} experience entries (cap {EXPERIENCE_PER_PAGE})")
        if not page.get("body", "").strip():
            errs.append(f"{page['id']}: empty body")
            continue
        if len(page["facts"]) < MIN_FACTS:
            errs.append(f"{page['id']}: {len(page['facts'])} facts (G01 needs {MIN_FACTS})")
        if not page.get("visuals"):
            errs.append(f"{page['id']}: no visual (G14, and PageMeta requires one)")
        for v in page.get("visuals", []):
            anchor = v["src"].lstrip("#")
            if v["src"].startswith("#") and f'id="{anchor}"' not in page["body"]:
                errs.append(f"{page['id']}: visual points at #{anchor}, which the body does not define")
        # G10, checked here because a 156-character meta fails PageMeta at load
        # and takes the whole gate run down with it.
        t, d = page["title"], page["meta_description"]
        if not 35 <= len(t) <= 65:
            errs.append(f"{page['id']}: G10 title {len(t)} chars (35-65)")
        if not 110 <= len(d) <= 155:
            errs.append(f"{page['id']}: G10 meta {len(d)} chars (110-155)")
        kw = page["primary_keyword"].lower()
        if kw not in t.lower():
            errs.append(f"{page['id']}: G10 primary keyword not in title")
        if kw not in page["h1"].lower():
            errs.append(f"{page['id']}: G10 primary keyword not in H1")
        first100 = " ".join(_words(_to_prose(page["body"]))[:100]).lower()
        if kw not in first100:
            errs.append(f"{page['id']}: G10 primary keyword not in the first 100 words")
        if re.search(r"\b20\d\d\b", t) and page["archetype"] not in TIME_BOUND:
            errs.append(f"{page['id']}: G10 year token in the title of a non-time-bound archetype")

        bands = BANDS.get(page["archetype"])
        if bands:
            for problem in style_problems(page["body"], page["archetype"], *bands):
                errs.append(f"{page['id']}: {problem}")
        # A FromMyWork block that cites an id the meta does not list fails the
        # draft schema; catch the mismatch in both directions here.
        cited = set(re.findall(r'<FromMyWork exp="([^"]+)"', page.get("body", "")))
        listed = set(page.get("experience", []))
        for c in cited - listed:
            errs.append(f"{page['id']}: body cites {c}, meta does not list it")
        for l in listed - cited:
            errs.append(f"{page['id']}: meta lists {l}, body does not cite it")
        for link in page["links"]:
            if link["url"].split("#")[0] not in known:
                errs.append(f"{page['id']}: link {link['url']} is not a known URL")
        roles = {l["role"] for l in page["links"]}
        need = {"proof", "reference"} if page.get("funnel") == "BOFU" else {"bofu", "tool"}
        for r in need - roles:
            errs.append(f"{page['id']}: no link with role {r} (C4)")
        for href in re.findall(r"\]\((/[^)\s]+)\)", page.get("body", "")):
            if href.split("#")[0] not in known:
                errs.append(f"{page['id']}: body links {href}, which is not a known URL")
    # Fact shape, because an over-long excerpt fails ResearchObject at load and
    # takes the gate run down before any page is judged.
    for fid, f in pool.items():
        if fid not in counts:
            continue
        ex = f["excerpt"]
        if len(ex) > 200:
            errs.append(f"{fid}: excerpt {len(ex)} chars (max 200)")
        if len(ex.split()) > 25:
            errs.append(f"{fid}: excerpt {len(ex.split())} words (max 25, G02 renders it verbatim)")
    for fid, n in counts.items():
        if n > FACT_REUSE_SITEWIDE:
            errs.append(f"fact {fid} used on {n} pages in this batch (cap {FACT_REUSE_SITEWIDE})")
    for field in ("title", "meta_description", "h1"):
        seen: Counter[str] = Counter(p[field] for p in spec["pages"])
        for v, n in seen.items():
            if n > 1:
                errs.append(f"G10 {field} repeated on {n} pages: \"{v[:50]}…\"")
    urls = Counter(p["url"] for p in spec["pages"])
    for u, n in urls.items():
        if n > 1:
            errs.append(f"url {u} appears {n} times")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("spec", type=Path)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    spec = json.loads(args.spec.read_text())
    errs = check(spec)
    # "risk" findings are the port's own advice, not a gate: the gate's sentence
    # splitter refuses to break after a digit or before a heading, so a sentence
    # next to either reads long without being long. Surfaced, never blocking.
    warns = [e for e in errs if " G13 risk: " in e]
    errs = [e for e in errs if " G13 risk: " not in e]
    for w in warns:
        print(f"author.py: warn: {w}", file=sys.stderr)
    if errs:
        print(f"author.py: {len(errs)} problem(s) in {args.spec.name}", file=sys.stderr)
        for e in errs:
            print(f"  - {e}", file=sys.stderr)
        return 1

    pool = spec["facts"]
    written = 0
    for page in spec["pages"]:
        d = CONTENT / hub_of(page["url"])
        stem = slug_of(page["url"])
        research = build_research(page, pool, spec)
        meta = build_meta(page, spec)
        body = page["body"].strip() + "\n"
        if args.dry_run:
            print(f"  would write {d.relative_to(ROOT)}/{stem}.{{json,mdx}}")
        else:
            d.mkdir(parents=True, exist_ok=True)
            RESEARCH.mkdir(parents=True, exist_ok=True)
            (d / f"{stem}.json").write_text(json.dumps(meta, indent=2, ensure_ascii=False) + "\n")
            (d / f"{stem}.mdx").write_text(body)
            (RESEARCH / f"{page['id']}.json").write_text(
                json.dumps(research, indent=2, ensure_ascii=False) + "\n"
            )
        written += 1
    print(f"author.py: {written} page(s) from {args.spec.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
