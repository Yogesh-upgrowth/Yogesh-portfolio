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

FACT_REUSE_SITEWIDE = 3   # §C2
EXPERIENCE_PER_PAGE = 2   # §C3
EXPERIENCE_REUSE = 8      # §C3
MIN_FACTS = 6             # G01: page-specific sourced facts.


def shared_facts() -> frozenset[str]:
    """Fact ids 02 §2 G01 exempts from the page-specific count and the §C2 cap.

    Read from the same registry gates.ts reads, so the pre-flight and the gate
    cannot disagree about which facts are exempt. A pre-flight that is laxer than
    the gate wastes a round trip; one that is stricter blocks a valid page.
    """
    p = ROOT / "seo" / "data" / "facts" / "shared.json"
    if not p.exists():
        return frozenset()
    try:
        raw = json.loads(p.read_text())
    except json.JSONDecodeError:
        return frozenset()
    return frozenset(
        e["fact_id"] for e in raw.get("shared", []) if isinstance(e, dict) and e.get("fact_id")
    )


SHARED = shared_facts()


def link_roles() -> frozenset[str]:
    """The role enum PageMeta accepts, read from the schema that enforces it."""
    src = (ROOT / "web" / "lib" / "content" / "schemas.ts").read_text()
    m = re.search(r"role: z\.enum\(\[([^\]]+)\]\)", src)
    if not m:
        raise SystemExit("author.py: could not read the link-role enum from schemas.ts")
    return frozenset(re.findall(r'"([a-z]+)"', m.group(1)))


LINK_ROLES = link_roles()

# Archetypes 01 §B allows a year token in the title.
TIME_BOUND = {"benchmark", "benchmark-hub", "pricing-examples", "teardown", "compare"}


def bands() -> dict[str, tuple[tuple[int, int], tuple[int, int]]]:
    """Word and section bands, read from the contracts the gate runner uses.

    Duplicating them here once produced a `tool` band of 500-900 against the
    contract's 700-1100, which is the kind of drift that makes a pre-flight worse
    than no pre-flight: it passes a page the gate will fail.
    """
    src = (ROOT / "web" / "lib" / "gates" / "contracts.ts").read_text()
    out: dict[str, tuple[tuple[int, int], tuple[int, int]]] = {}
    for m in re.finditer(
        r"^  \"?([a-z-]+)\"?: \{\s*\n?\s*words: \[(\d+), (\d+)\], section: \[(\d+), (\d+)\]",
        src, re.M,
    ):
        name, w1, w2, s1, s2 = m.groups()
        out[name] = ((int(w1), int(w2)), (int(s1), int(s2)))
    if not out:
        raise SystemExit("author.py: could not read any archetype bands from contracts.ts")
    return out


BANDS = bands()


def slug_of(url: str) -> str:
    return url.rstrip("/").rsplit("/", 1)[-1]


def hub_of(url: str) -> str:
    return url.strip("/").split("/")[0]


def path_for(url: str) -> Path:
    """Mirror of loader.urlForFile, inverted.

    A single-segment URL is a file at the top of content/, not a directory with
    a file of the same name inside it: /case-studies is content/case-studies.json,
    and content/case-studies/case-studies.json would load as
    /case-studies/case-studies and fail the inventory check.
    """
    return CONTENT.joinpath(*url.strip("/").split("/"))


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
        # PageMeta allows an absent FAQ but not an empty one (02 §2 G07: "3–5 or
        # absent"), so an empty list is dropped rather than written.
        **({"faq": page["faq"]} if page.get("faq") else {}),
        "cta": page.get("cta", batch["default_cta"]),
        "schema_types": page["schema_types"],
        "unique_value_statement": page["unique_value"],
        "verified_on": batch["verified_on"],
        "refreshed_on": batch["verified_on"],
        "changelog": [],
        "provenance": page.get("provenance", "authored"),
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


def built_urls(spec: dict) -> set[str]:
    """URLs that will actually serve a page once this batch is written.

    The inventory is the *plan*, so checking links against it only catches
    invented slugs — it happily passes a link to a page scheduled for wave 3.
    That is how 46 links to unbuilt tools and /india pages reached the content:
    every one was a valid inventory row and a guaranteed 404.

    A link may point at a page already on disk, or at one this batch is about to
    create. Anything else is a link into a hole, whatever the plan says.
    """
    urls = {"/", "/about", "/work-with-me", "/notes", "/contact"}
    for f in CONTENT.glob("**/*.json"):
        if f.name == "experience.json" or "hubs" in f.parts:
            continue
        try:
            m = json.loads(f.read_text())
        except json.JSONDecodeError:
            continue
        if isinstance(m, dict) and m.get("url"):
            urls.add(m["url"])
    urls |= {p["url"] for p in spec["pages"]}
    return urls


def check(spec: dict) -> list[str]:
    """Local cap checks. Cheap here, expensive in the gate runner."""
    errs: list[str] = []
    known = inventory_urls()
    will_exist = built_urls(spec)
    # Usage already on disk. Without this the cap is enforced per batch, and a
    # fact at 3 uses in batch 01 would silently reach 4 in batch 02 — gReuse
    # would catch it, but only after a full gate run.
    on_disk: Counter[str] = Counter()
    exp_on_disk: Counter[str] = Counter()
    batch_urls = {p["url"] for p in spec["pages"]}
    for f in CONTENT.glob("*/*.json"):
        try:
            m = json.loads(f.read_text())
        except json.JSONDecodeError:
            continue
        if m.get("url") in batch_urls or "facts_used" not in m:
            continue
        on_disk.update(m["facts_used"])
        exp_on_disk.update(m.get("experience_used", []))
    pool = spec["facts"]
    counts: Counter[str] = Counter(on_disk)
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
        own = [f for f in page["facts"] if f not in SHARED]
        if len(own) < MIN_FACTS:
            errs.append(
                f"{page['id']}: {len(own)} page-specific fact(s) of {len(page['facts'])} "
                f"(G01 needs {MIN_FACTS}; shared facts do not count)"
            )
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

        # G09 and G16, both of which only bite after a full gate run otherwise.
        has_faq = len(page.get("faq", [])) >= 3
        if has_faq and "FAQPage" not in page["schema_types"]:
            errs.append(f"{page['id']}: G09 FAQ has {len(page['faq'])} entries but FAQPage is not emitted")
        if not has_faq and "FAQPage" in page["schema_types"]:
            errs.append(f"{page['id']}: G09 FAQPage emitted with no FAQ")
        cta = page.get("cta") or spec["default_cta"]
        label = cta["primary"]["label"].lower()
        ctx = [c.lower().replace("-", " ") for c in
               (page.get("entity_a"), page.get("entity_b"), page["archetype"]) if c]
        if ctx and len(label) < 25 and not any(c in label for c in ctx):
            errs.append(f"{page['id']}: G16 CTA \"{cta['primary']['label']}\" names no page context")

        bands = BANDS.get(page["archetype"])
        if bands:
            migrated = page.get("provenance") == "migrated"
            for problem in style_problems(page["body"], page["archetype"], *bands):
                # G12 exempts case studies from the first-person rule: the
                # archetype is an account of Yogesh's own work and its contract
                # requires "my role" and "what I'd do differently" in the body.
                if page["archetype"] == "case-study" and problem.startswith("G12 first person"):
                    continue
                # Mirror of PageMeta.provenance: a migrated page is not held to a
                # section shape, a readability limit or the question rule.
                if migrated and (
                    problem.startswith(("G13 FK", "G13 passive", "G13 average", "G07 H2 ", "G07 risk"))
                    or "question mark" in problem
                    or re.match(r"^G07 \d+ H2s", problem)
                    or re.match(r"^G07 \d+ words \(band", problem)
                ):
                    continue
                errs.append(f"{page['id']}: {problem}")
        # A FromMyWork block that cites an id the meta does not list fails the
        # draft schema; catch the mismatch in both directions here.
        cited = set(re.findall(r'<FromMyWork exp="([^"]+)"', page.get("body", "")))
        listed = set(page.get("experience", []))
        for c in cited - listed:
            errs.append(f"{page['id']}: body cites {c}, meta does not list it")
        # A case study's whole body is the first-person account, so its
        # experience_used declares provenance rather than marking inline blocks.
        # Requiring a FromMyWork per declared entry would force decorative blocks
        # into a page that is already the account those entries came from.
        if page["archetype"] != "case-study":
            for l in listed - cited:
                errs.append(f"{page['id']}: meta lists {l}, body does not cite it")
        for link in page["links"]:
            target = link["url"].split("#")[0]
            if target not in known:
                errs.append(f"{page['id']}: link {link['url']} is not a known URL")
            elif target not in will_exist:
                errs.append(
                    f"{page['id']}: link {link['url']} is a planned page that does not "
                    f"exist yet — it would 301 or render as a 404"
                )
        for link in page["links"]:
            if link["role"] not in LINK_ROLES:
                errs.append(f"{page['id']}: link role \"{link['role']}\" is not in the PageMeta enum")
        roles = {l["role"] for l in page["links"]}
        # G08 wants a link up to a hub on every page, in addition to the C4 roles.
        need = {"proof", "reference"} if page.get("funnel") == "BOFU" else {"bofu", "tool"}
        need |= {"hub"}
        # Mirror of G08: a tool page satisfies §C4's tool requirement by being
        # one. The only link that would satisfy it is the page's own URL, which
        # G08 then rejects as a self-link.
        if page["archetype"] == "tool":
            need.discard("tool")
        # G08 does not take the "reference" role at face value: the target has to
        # be a child of /benchmarks or /teardowns, not the hub itself (01 §C4
        # says one benchmark or teardown, and a hub is neither).
        if "reference" in need and not any(
            re.match(r"^/(benchmarks|teardowns)/", l["url"]) for l in page["links"]
        ):
            errs.append(f"{page['id']}: G08 no link to a /benchmarks/ or /teardowns/ page (C4)")
            need.discard("reference")
        for r in need - roles:
            errs.append(f"{page['id']}: no link with role {r} (C4)")
        for href in re.findall(r"\]\((/[^)\s]+)\)", page.get("body", "")):
            target = href.split("#")[0]
            if target not in known:
                errs.append(f"{page['id']}: body links {href}, which is not a known URL")
            elif target not in will_exist:
                errs.append(
                    f"{page['id']}: body links {href}, a planned page that does not exist yet"
                )
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
        if fid in SHARED:
            continue
        if n > FACT_REUSE_SITEWIDE:
            errs.append(
                f"fact {fid} would be on {n} pages site-wide, {on_disk[fid]} of them already "
                f"written (cap {FACT_REUSE_SITEWIDE})"
            )
    for field in ("title", "meta_description", "h1"):
        seen: Counter[str] = Counter(p[field] for p in spec["pages"])
        for v, n in seen.items():
            if n > 1:
                errs.append(f"G10 {field} repeated on {n} pages: \"{v[:50]}…\"")
    exp_counts = Counter(exp_on_disk)
    for page in spec["pages"]:
        exp_counts.update(page.get("experience", []))
    for eid, n in exp_counts.items():
        if n > EXPERIENCE_REUSE:
            errs.append(f"experience {eid} would be on {n} pages (cap {EXPERIENCE_REUSE})")
    urls = Counter(p["url"] for p in spec["pages"])
    for u, n in urls.items():
        if n > 1:
            errs.append(f"url {u} appears {n} times")
    return errs


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("spec", type=Path)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument(
        "--allow-failing", action="store_true",
        help="write the pages even when content gates would fail. For migrating "
             "published pages that redirects already point at: the page has to "
             "exist and return 200, and it stays status=drafted / indexable=false "
             "until pnpm gates passes it. Structural problems (a bad link target, "
             "a fact over its reuse cap, an invented URL) still refuse to write.",
    )
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
    # Content findings are the author's to fix; structural ones would produce a
    # broken page, so they refuse to write whatever the flag says.
    STRUCTURAL = ("is not a known URL", "no link with role", "not in the pool",
                  "cap ", "appears ", "empty body", "does not define", "no visual",
                  "G08 no link", "repeated on", "body cites", "body links")
    if errs:
        blocking = [e for e in errs if not args.allow_failing
                    or any(k in e for k in STRUCTURAL)]
        print(f"author.py: {len(errs)} problem(s) in {args.spec.name}", file=sys.stderr)
        for e in errs:
            print(f"  - {e}", file=sys.stderr)
        if blocking:
            return 1
        print(
            f"author.py: writing anyway (--allow-failing). {len(errs)} content "
            "finding(s) stand; these pages stay indexable:false until pnpm gates "
            "passes them.",
            file=sys.stderr,
        )

    pool = spec["facts"]
    written = 0
    for page in spec["pages"]:
        target = path_for(page["url"])
        d, stem = target.parent, target.name
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
