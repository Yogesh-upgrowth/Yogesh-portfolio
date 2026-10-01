#!/usr/bin/env python3
"""
similarity_check.py — reference implementation for gates G04 (similarity) and G05 (boilerplate).

Dependency-free. Port to TypeScript if you prefer, but keep the algorithm and thresholds identical.

Usage:
  python3 scripts/similarity_check.py --content content --out data/similarity/report.json [--ids id1,id2] [--archetype teardown]

Reads every content/<hub>/**/<slug>.json (PageMeta) that has a sibling .mdx, strips shared components,
builds 5-gram word shingles, MinHash (128 permutations), estimates Jaccard against every other page,
and computes the boilerplate ratio per page (share of normalised sentences that appear in >= 3 other
pages of the same archetype).

Thresholds (02 §2): sibling <= 0.55, parent <= 0.45, any <= 0.60, boilerplate <= 0.35.

Relations:
  parent  = the page whose URL is this URL minus its last segment (e.g. /benchmarks/retention for /benchmarks/retention/fintech)
  sibling = same parent URL, or same archetype with the same entity_a (e.g. the 4 lenses of one app),
            or same archetype with the same entity_b (e.g. same industry under different services)
"""
import argparse, json, os, re, sys, random, hashlib
from collections import defaultdict

NUM_PERM = 128
SHINGLE_N = 5
THRESH = {"sibling": 0.55, "parent": 0.45, "any": 0.60, "boilerplate": 0.35}
MAX64 = (1 << 61) - 1  # Mersenne prime for the linear hash family

random.seed(20260928)
A = [random.randint(1, MAX64 - 1) for _ in range(NUM_PERM)]
B = [random.randint(0, MAX64 - 1) for _ in range(NUM_PERM)]

COMPONENT_LINE = re.compile(r"^\s*<(/?)(AnswerBox|LastVerified|FactTable|SourcePill|PriceTable|DecisionTable|CalculatorShell|Calculator|FromMyWork|WhatIdDo|FAQ|CTABand|Breadcrumbs|RelatedGrid|AuthorBox|NotAffiliated|Sources|Changelog|Figure|SharedFact)\b.*$")
FRONTMATTER = re.compile(r"^---.*?---\s*", re.S)
MD_TABLE_ROW = re.compile(r"^\s*\|.*\|\s*$")
STRIP_SECTIONS = ("## sources", "## faq", "## frequently asked questions")

def normalise(text: str) -> str:
    text = FRONTMATTER.sub("", text)
    out, skip = [], False
    for line in text.splitlines():
        low = line.strip().lower()
        if low.startswith("## "):
            skip = any(low.startswith(s) for s in STRIP_SECTIONS)
        if skip or COMPONENT_LINE.match(line) or MD_TABLE_ROW.match(line):
            continue
        out.append(line)
    text = "\n".join(out)
    text = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", text)      # keep anchor text, drop URLs
    text = re.sub(r"[#*_`>|]", " ", text)
    text = re.sub(r"\s+", " ", text).strip().lower()
    return text

def shingles(text: str, n: int = SHINGLE_N) -> set:
    words = re.findall(r"[a-z0-9₹$%.]+", text)
    if len(words) < n:
        return {" ".join(words)} if words else set()
    return {" ".join(words[i:i + n]) for i in range(len(words) - n + 1)}

def h64(s: str) -> int:
    return int.from_bytes(hashlib.blake2b(s.encode("utf-8"), digest_size=8).digest(), "big")

def minhash(sh: set) -> list:
    if not sh:
        return [MAX64] * NUM_PERM
    hs = [h64(s) for s in sh]
    sig = []
    for a, b in zip(A, B):
        sig.append(min((a * x + b) % MAX64 for x in hs))
    return sig

def est_jaccard(s1: list, s2: list) -> float:
    return sum(1 for x, y in zip(s1, s2) if x == y) / NUM_PERM

def sentences(text: str) -> set:
    parts = re.split(r"(?<=[.!?])\s+", text)
    return {p.strip() for p in parts if len(p.split()) >= 6}

def parent_of(url: str):
    parts = url.rstrip("/").split("/")
    return "/".join(parts[:-1]) if len(parts) > 2 else None

def load_pages(content_dir: str, ids=None, archetype=None):
    pages = {}
    for root, _, files in os.walk(content_dir):
        for f in files:
            if not f.endswith(".json"):
                continue
            jp = os.path.join(root, f)
            mp = jp[:-5] + ".mdx"
            if not os.path.exists(mp):
                continue
            try:
                meta = json.load(open(jp))
            except Exception as e:
                print(f"skip {jp}: {e}", file=sys.stderr); continue
            if "url" not in meta or "archetype" not in meta:
                continue
            if ids and meta.get("id") not in ids:
                continue
            if archetype and meta.get("archetype") != archetype:
                continue
            body = normalise(open(mp, encoding="utf-8").read())
            pages[meta["url"]] = {
                "id": meta.get("id"), "url": meta["url"], "archetype": meta["archetype"],
                "entity_a": meta.get("entity_a") or "", "entity_b": meta.get("entity_b") or "",
                "text": body, "sig": minhash(shingles(body)), "sents": sentences(body),
            }
    return pages

def relation(p, q):
    if parent_of(p["url"]) == q["url"] or parent_of(q["url"]) == p["url"]:
        return "parent"
    if p["archetype"] == q["archetype"]:
        if parent_of(p["url"]) and parent_of(p["url"]) == parent_of(q["url"]):
            return "sibling"
        if p["entity_a"] and p["entity_a"] == q["entity_a"]:
            return "sibling"
        if p["entity_b"] and p["entity_b"] == q["entity_b"]:
            return "sibling"
    return "any"

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--content", default="content")
    ap.add_argument("--out", default="data/similarity/report.json")
    ap.add_argument("--ids", default=None, help="comma-separated page ids to report on (all pages are still loaded as the comparison corpus)")
    ap.add_argument("--archetype", default=None)
    args = ap.parse_args()

    # An empty corpus must not read as a pass. --content is relative to the
    # working directory, so running this from the repo root instead of web/
    # walks a directory that does not exist, loads nothing, and reports
    # "0 pages, failures: 0" with exit 0. That is the same silent green as the
    # fact-usage index that was never generated, and it would hide every
    # near-duplicate page in the corpus.
    if not os.path.isdir(args.content):
        print(f"no such content directory: {args.content!r} "
              f"(cwd {os.getcwd()}) — run this from web/", file=sys.stderr)
        sys.exit(2)

    corpus = load_pages(args.content)
    if not corpus:
        print(f"loaded 0 pages from {args.content!r} — refusing to report a pass",
              file=sys.stderr)
        sys.exit(2)
    focus_ids = set(args.ids.split(",")) if args.ids else None
    focus = [p for p in corpus.values() if (not focus_ids or p["id"] in focus_ids) and (not args.archetype or p["archetype"] == args.archetype)]

    # boilerplate: sentence frequency within archetype
    sent_count = defaultdict(lambda: defaultdict(int))
    for p in corpus.values():
        for s in p["sents"]:
            sent_count[p["archetype"]][s] += 1

    report, fails = {}, 0
    for p in focus:
        worst = {"sibling": (0.0, None), "parent": (0.0, None), "any": (0.0, None)}
        for q in corpus.values():
            if q["url"] == p["url"]:
                continue
            j = est_jaccard(p["sig"], q["sig"])
            rel = relation(p, q)
            if j > worst[rel][0]:
                worst[rel] = (j, q["url"])
            if rel != "any" and j > worst["any"][0]:
                worst["any"] = (j, q["url"])
        shared = sum(1 for s in p["sents"] if sent_count[p["archetype"]][s] >= 4)  # itself + 3 others
        boiler = shared / len(p["sents"]) if p["sents"] else 0.0
        checks = {
            "sibling": worst["sibling"][0] <= THRESH["sibling"],
            "parent": worst["parent"][0] <= THRESH["parent"],
            "any": worst["any"][0] <= THRESH["any"],
            "boilerplate": boiler <= THRESH["boilerplate"],
        }
        ok = all(checks.values())
        fails += 0 if ok else 1
        report[p["id"] or p["url"]] = {
            "url": p["url"], "archetype": p["archetype"], "pass": ok, "checks": checks,
            "max_sibling": worst["sibling"], "max_parent": worst["parent"], "max_any": worst["any"],
            "boilerplate_ratio": round(boiler, 3), "shingle_words": len(p["text"].split()),
        }

    os.makedirs(os.path.dirname(args.out) or ".", exist_ok=True)
    json.dump({"thresholds": THRESH, "pages": report}, open(args.out, "w"), indent=2)
    print(f"checked {len(report)} pages against corpus of {len(corpus)}; failures: {fails}")
    for k, v in sorted(report.items(), key=lambda kv: -max(kv[1]['max_any'][0], kv[1]['boilerplate_ratio'])):
        if not v["pass"]:
            print(f"FAIL {k}: sibling={v['max_sibling'][0]:.2f} parent={v['max_parent'][0]:.2f} any={v['max_any'][0]:.2f} boilerplate={v['boilerplate_ratio']:.2f}")
    sys.exit(1 if fails else 0)

if __name__ == "__main__":
    main()
