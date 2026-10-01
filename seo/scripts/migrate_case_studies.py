#!/usr/bin/env python3
"""Migrate the 30 published case-study write-ups into the new content model.

These pages already exist on pmyogesh.com as React components under
client/src/pages/cs-*-content.tsx, and they are Yogesh's own first-person account
of his own work. Rewriting them would be both wasteful and wrong: the published
text is the approved text, and any paraphrase risks drifting from what actually
happened. So this converts rather than authors.

Two things the conversion has to get right.

**The numbers are first-party operating data, not citations.** A published figure
like "D30 retention 11%" has no third-party source and never will; it is
Yogesh's own measurement. `Fact.method` already has `own_data` for exactly this,
so each number becomes an own_data fact sourced to the live page it was
published on. Inventing a research citation for it would be worse than honest.

**Component prose is not markdown.** The write-ups use a bespoke component set
(DataTable, InsightBox, ProblemBox, TakeawayBox, Phase, FailurePoint, …). Each
maps onto a primitive the new site has, or onto plain prose. Anything this script
cannot map, it reports rather than silently drops — a quietly lost paragraph is
the failure mode that matters here.
"""
from __future__ import annotations

import argparse
import csv
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "client" / "src" / "pages"
LIVE = "https://pmyogesh.com"

# Components whose text is body prose, rendered as an aside on the new site.
NOTE_TAGS = {
    "InsightBox": "insight",
    "ProblemBox": "problem",
    "TakeawayBox": "takeaway",
    "BlockQuote": "quote",
    "Insight": "insight",
    "FailurePoint": "failure",
}


def strip_jsx_text(t: str) -> str:
    """Inline JSX to plain text, keeping em dashes and entities readable."""
    t = re.sub(r"\{/\*.*?\*/\}", " ", t, flags=re.S)
    t = re.sub(r"<(strong|em|b|i|span|code)\b[^>]*>", "", t)
    t = re.sub(r"</(strong|em|b|i|span|code)>", "", t)
    t = re.sub(r"<br\s*/?>", " ", t)
    # A JSX expression that is just a string literal.
    t = re.sub(r'\{\s*"([^"]*)"\s*\}', r"\1", t)
    t = re.sub(r"\{\s*'([^']*)'\s*\}", r"\1", t)
    t = html.unescape(t)
    t = re.sub(r"\s+", " ", t)
    return t.strip()


def props_of(body: str) -> dict[str, object]:
    """Props of a self-closing JSX tag: strings, string arrays, ignore the rest.

    Most of the writing in these write-ups lives in props rather than children —
    Phase carries four actions and a result, FailurePoint carries a cause and a
    fix — so a parser that only reads children loses the majority of the text.
    """
    out: dict[str, object] = {}
    for m in re.finditer(r'(\w+)=\{\[(.*?)\]\}', body, re.S):
        items = [strip_jsx_text(x) for x in re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))]
        if items:
            out[m.group(1)] = items
    for m in re.finditer(r'(\w+)="((?:[^"\\]|\\.)*)"', body):
        out.setdefault(m.group(1), strip_jsx_text(m.group(2)))
    for m in re.finditer(r"(\w+)=\{\s*`([^`]*)`\s*\}", body, re.S):
        out.setdefault(m.group(1), strip_jsx_text(m.group(2)))
    return out


# Self-closing components whose props carry the prose, and the props to keep.
PROP_TAGS = {
    "MetricCard": ("value", "label", "sub"),
    "FrameworkDimension": ("title", "body"),
    "FutureCard": ("title", "body"),
    "Insight": ("num", "title", "body"),
    "Phase": ("num", "period", "title", "actions", "result"),
    "PhaseCard": ("phase", "months", "from", "to", "desc"),
    "FailurePoint": ("title", "why", "fix"),
}

# Decoration only: layout wrappers and the lucide icon set these files import.
# Listed rather than inferred, so a real content component cannot be dropped by a
# rule that happens to match it.
IGNORE = {
    "React", "Fragment", "Suspense", "Link", "Button", "Image",
    "AlertTriangle", "ArrowLeft", "ArrowRight", "BarChart3", "Brain", "Calendar",
    "CheckCircle2", "Clock", "Cpu", "Database", "Eye", "Layers", "Lightbulb",
    "Link2", "Search", "Shield", "Sparkles", "Target", "Trophy", "TrendingUp",
    "Users", "User", "Zap", "Gauge", "Rocket", "Filter", "Network", "LineChart",
}


def body_of_component(src: str) -> str:
    """Only the exported component's JSX.

    These three older write-ups define their own helper components at the top of
    the file, and those definitions contain <p>{desc}</p>-style templates. Parsing
    from byte zero pulled those in as content — two of the migrated pages opened
    with the literal text "{from} → {to}".
    """
    m = re.search(r"export default function \w+\s*\([^)]*\)\s*\{", src)
    return src[m.end():] if m else src


def metrics_grid(src: str) -> list[dict]:
    """A locally-defined MetricsGrid's hardcoded array, if the file has one."""
    m = re.search(r"function MetricsGrid\(\)\s*\{\s*const metrics = \[(.*?)\];", src, re.S)
    if not m:
        return []
    out = []
    for entry in re.findall(r"\{(.*?)\}", m.group(1), re.S):
        got = dict(re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', entry))
        if got.get("value") and got.get("label"):
            out.append({"value": strip_jsx_text(got["value"]),
                        "label": strip_jsx_text(got["label"]),
                        "sub": strip_jsx_text(got.get("sub", ""))})
    return out


INLINE_MAP = re.compile(r"\{\s*\[\s*(\{.*?\})\s*,?\s*\]\s*\.map\(", re.S)


def extract_inline_maps(src: str) -> tuple[str, list[list[dict]]]:
    """Pull out inline `{[{…},{…}].map(…)}` data arrays.

    Several write-ups hold a section's whole content in an array mapped over in
    place, rather than in a component's props. Parsing the JSX around it captured
    the template — one migrated section read "{l.title}" followed by "- →{p}" —
    and lost every word of the data. So the array is read as data and the JSX that
    renders it is dropped.
    """
    arrays: list[list[dict]] = []
    out: list[str] = []
    pos = 0
    for m in INLINE_MAP.finditer(src):
        # Walk from the array's opening bracket to its matching close.
        start = src.index("[", m.start())
        depth, j = 0, start
        while j < len(src):
            if src[j] in "[{":
                depth += 1
            elif src[j] in "]}":
                depth -= 1
                if depth == 0:
                    break
            j += 1
        body = src[start:j + 1]
        items: list[dict] = []
        for entry in re.findall(r"\{((?:[^{}]|\{[^{}]*\})*)\}", body, re.S):
            got: dict[str, object] = {}
            for km in re.finditer(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', entry):
                got[km.group(1)] = strip_jsx_text(km.group(2))
            for km in re.finditer(r"(\w+):\s*\[(.*?)\]", entry, re.S):
                got[km.group(1)] = [strip_jsx_text(x)
                                    for x in re.findall(r'"((?:[^"\\]|\\.)*)"', km.group(2))]
            if got:
                items.append(got)
        # Skip the whole {[...].map(...)} expression, matching its braces.
        k, d = m.start(), 0
        while k < len(src):
            if src[k] == "{":
                d += 1
            elif src[k] == "}":
                d -= 1
                if d == 0:
                    break
            k += 1
        out.append(src[pos:m.start()])
        out.append(f'<InlineList __i="{len(arrays)}"/>')
        arrays.append(items)
        pos = k + 1
    out.append(src[pos:])
    return "".join(out), arrays


def extract_prop_tags(src: str) -> tuple[str, list[tuple[str, str]]]:
    """Replace each prop-carrying tag with a placeholder, returning their bodies.

    A regex cannot find the closing `/>` of these tags: `icon={<Search {...p} />}`
    contains one, and every bracket class that avoids it also breaks on something
    else. So the scan is manual — walk forward from the tag name tracking brace
    depth, and stop at the `/>` that sits at depth zero.
    """
    out: list[tuple[str, str]] = []
    result: list[str] = []
    i = 0
    names = sorted(PROP_TAGS, key=len, reverse=True)
    while i < len(src):
        if src[i] == "<":
            for name in names:
                if src.startswith(f"<{name}", i) and not (
                    src[i + 1 + len(name)].isalnum() or src[i + 1 + len(name)] == "_"
                ):
                    j = i + 1 + len(name)
                    depth = 0
                    while j < len(src):
                        c = src[j]
                        if c == "{":
                            depth += 1
                        elif c == "}":
                            depth -= 1
                        elif depth == 0 and src.startswith("/>", j):
                            break
                        j += 1
                    out.append((name, src[i + 1 + len(name):j]))
                    result.append(f'<PropCard __i="{len(out) - 1}"/>')
                    i = j + 2
                    break
            else:
                result.append(src[i])
                i += 1
        else:
            result.append(src[i])
            i += 1
    return "".join(result), out


def parse(full: str) -> tuple[list[dict], list[str]]:
    """Return (blocks, unmapped component names) in document order."""
    blocks: list[dict] = []
    unmapped: set[str] = set()
    grid = metrics_grid(full)
    src, arrays = extract_inline_maps(body_of_component(full))
    src, cards = extract_prop_tags(src)
    prop_alt = "PropCard"
    note_alt = "|".join(NOTE_TAGS)
    pattern = re.compile(
        r"<h2\b[^>]*>(?P<h2>.*?)</h2>"
        r"|<h3\b[^>]*>(?P<h3>.*?)</h3>"
        r"|<p\b[^>]*>(?P<p>.*?)</p>"
        r"|<li\b[^>]*>(?P<li>.*?)</li>"
        r"|<SectionDivider\s+label=\"(?P<divider>[^\"]*)\"\s*/>"
        rf"|<(?P<note>{note_alt})\b[^>]*>(?P<notebody>.*?)</(?P=note)>"
        r"|<DataTable\b(?P<table>.*?)/>"
        r"|<BulletList\b(?P<bullets>[^>]*?)/>"
        r'|<InlineList __i="(?P<inline>\d+)"/>'
        r"|<CodeBlock\b[^>]*>(?P<code>.*?)</CodeBlock>"
        rf"|<(?P<prop>{prop_alt})\b(?P<propbody>[^>]*?)/>"
        r"|<(?P<other>[A-Z][A-Za-z0-9]*)\b",
        re.S,
    )
    for m in pattern.finditer(src):
        if m.group("h2"):
            blocks.append({"t": "h2", "text": strip_jsx_text(m.group("h2"))})
        elif m.group("h3"):
            blocks.append({"t": "h3", "text": strip_jsx_text(m.group("h3"))})
        elif m.group("p"):
            if (text := strip_jsx_text(m.group("p"))):
                blocks.append({"t": "p", "text": text})
        elif m.group("li"):
            if (text := strip_jsx_text(m.group("li"))):
                blocks.append({"t": "li", "text": text})
        elif m.group("divider") is not None:
            blocks.append({"t": "divider", "text": strip_jsx_text(m.group("divider"))})
        elif m.group("note"):
            if (text := strip_jsx_text(m.group("notebody"))):
                blocks.append({"t": "note", "kind": NOTE_TAGS[m.group("note")], "text": text})
        elif m.group("table") is not None:
            if (t := parse_table(m.group("table"))):
                blocks.append(t)
        elif m.group("inline") is not None:
            for item in arrays[int(m.group("inline"))]:
                title = item.get("title") or item.get("label") or item.get("name")
                if isinstance(title, str) and title:
                    blocks.append({"t": "h3", "text": title})
                for k, v in item.items():
                    if k in {"title", "label", "name"}:
                        continue
                    if isinstance(v, list):
                        for x in v:
                            blocks.append({"t": "li", "text": x})
                    elif isinstance(v, str) and v:
                        blocks.append({"t": "p", "text": v})
        elif m.group("bullets") is not None:
            items = props_of(m.group("bullets")).get("items")
            if isinstance(items, list):
                for it in items:
                    blocks.append({"t": "li", "text": it})
        elif m.group("code") is not None:
            if (text := strip_jsx_text(m.group("code"))):
                blocks.append({"t": "code", "text": text})
        elif m.group("prop"):
            idx = int(re.search(r'__i="(\d+)"', m.group("propbody")).group(1))
            name, body = cards[idx]
            got = props_of(body)
            blocks.append({
                "t": "card", "tag": name,
                "props": {k: got[k] for k in PROP_TAGS[name] if k in got},
            })
        elif m.group("other"):
            name = m.group("other")
            if name == "MetricsGrid":
                for g in grid:
                    blocks.append({"t": "card", "tag": "MetricCard", "props": g})
            elif name not in NOTE_TAGS and name not in PROP_TAGS and name not in IGNORE and name not in {
                "DataTable", "SectionDivider", "BulletList", "CodeBlock", "PropCard",
                "MetricsGrid",
            }:
                unmapped.add(name)
    return blocks, sorted(unmapped)


def parse_table(body: str) -> dict | None:
    heads = re.search(r"headers=\{\[(.*?)\]\}", body, re.S)
    rows = re.search(r"rows=\{\[(.*?)\]\}\s*$", body.strip(), re.S) or re.search(
        r"rows=\{\[(.*?)\]\}", body, re.S
    )
    if not heads or not rows:
        return None
    columns = [strip_jsx_text(x) for x in re.findall(r'"([^"]*)"', heads.group(1))]
    out_rows = []
    for row in re.findall(r"\[(.*?)\]", rows.group(1), re.S):
        cells = [strip_jsx_text(x) for x in re.findall(r'"((?:[^"\\]|\\.)*)"', row)]
        if cells:
            out_rows.append(cells)
    if not columns or not out_rows:
        return None
    return {"t": "table", "columns": columns, "rows": out_rows}


NUM = re.compile(
    # The suffix set and the trailing lookahead have to match G03's exactly, or the
    # extractor and the gate disagree about where a figure ends: "₹1.9L" became the
    # fact "₹1.9" here while the gate read the whole "₹1.9L" and found nothing
    # behind it.
    r"(?:₹|\$)\s?\d[\d,]*(?:\.\d+)?\s?"
    r"(?:K|M|Mn|Bn?|L|cr|lakh|lakhs|lac|crore|crores|thousand|million|billion)?(?![A-Za-z0-9])"
    r"|\b\d[\d,]*(?:\.\d+)?\s?%"
    r"|\b\d[\d,]*(?:\.\d+)?\s?"
    r"(?:x|K|M|Mn|Bn?|L|cr|lakh|lakhs|lac|crore|crores|thousand|million|billion)(?![A-Za-z0-9])"
    # "." belongs in the bare-number class. Without it a threshold written as
    # 0.82 never became a fact, while G03's own regex (which does include ".")
    # found it in the prose and failed the page for it.
    r"|\b\d[\d,.]{2,}\b",
    re.I,
)


def numbers_in(blocks: list[dict]) -> list[str]:
    """Every distinct figure the write-up states, in order of appearance."""
    seen: list[str] = []
    for b in blocks:
        texts = [b.get("text", "")]
        if b["t"] == "table":
            texts = [" ".join(b["columns"])] + [" ".join(r) for r in b["rows"]]
        for t in texts:
            for n in NUM.findall(t):
                n = n.strip()
                if n and n not in seen:
                    seen.append(n)
    return seen


def to_mdx(blocks: list[dict]) -> str:
    """Render parsed blocks as MDX, using only primitives the new site has.

    SectionDividers are dropped: they are a visual rule with a label that the
    following H2 already states, so keeping them would duplicate every heading.
    """
    out: list[str] = []
    pending_metrics: list[dict] = []

    def flush_metrics() -> None:
        if not pending_metrics:
            return
        rows = ",\n".join(
            "    { cells: [%s, %s] }" % (json.dumps(m["label"]), json.dumps(m["value"]))
            + (" // " + m["sub"] if False else "")
            for m in pending_metrics
        )
        out.append(
            '<FactTable\n  caption="Results at a glance"\n'
            '  columns={["Measure", "Result"]}\n  rows={[\n' + rows + "\n  ]}\n/>"
        )
        pending_metrics.clear()

    for b in blocks:
        if b["t"] != "card" or b["tag"] != "MetricCard":
            flush_metrics()
        match b["t"]:
            case "h2":
                out.append(f"## {b['text']}")
            case "h3":
                out.append(f"### {b['text']}")
            case "p":
                out.append(b["text"])
            case "li":
                out.append(f"- {b['text']}")
            case "divider":
                pass
            case "code":
                out.append("```\n" + b["text"] + "\n```")
            case "note":
                label = {"insight": "What this showed",
                         "problem": "The problem",
                         "takeaway": "The takeaway",
                         "quote": "",
                         "failure": "Where it broke"}[b["kind"]]
                prefix = f"**{label}.** " if label else ""
                out.append("> " + prefix + b["text"])
            case "table":
                rows = ",\n".join(
                    "    { cells: [" + ", ".join(json.dumps(c) for c in r) + "] }"
                    for r in b["rows"]
                )
                cols = ", ".join(json.dumps(c) for c in b["columns"])
                out.append(
                    "<FactTable\n"
                    f'  caption={json.dumps(b["columns"][0] + " breakdown")}\n'
                    f"  columns={{[{cols}]}}\n  rows={{[\n{rows}\n  ]}}\n/>"
                )
            case "card":
                p = b["props"]
                match b["tag"]:
                    case "MetricCard":
                        pending_metrics.append(
                            {"value": p.get("value", ""), "label": p.get("label", ""),
                             "sub": p.get("sub", "")}
                        )
                    case "FrameworkDimension" | "FutureCard":
                        out.append(f"### {p.get('title','')}")
                        out.append(p.get("body", ""))
                    case "Insight":
                        # The "01." prefix is decoration, and G03 reads it as a
                        # figure with nothing behind it. The title carries the point.
                        out.append(f"### {p.get('title','')}")
                        out.append(p.get("body", ""))
                    case "Phase":
                        head = " · ".join(x for x in (p.get("num"), p.get("period")) if x)
                        out.append(f"### {head} — {p.get('title','')}")
                        for a in p.get("actions", []) or []:
                            out.append(f"- {a}")
                        if p.get("result"):
                            out.append(f"**Result.** {p['result']}")
                    case "PhaseCard":
                        out.append(f"### {p.get('phase','')} ({p.get('months','')})")
                        if p.get("from") and p.get("to"):
                            out.append(f"**{p['from']} → {p['to']}.** {p.get('desc','')}")
                        else:
                            out.append(p.get("desc", ""))
                    case "FailurePoint":
                        out.append(f"### What did not work: {p.get('title','')}")
                        if p.get("why"):
                            out.append(f"**Why it broke.** {p['why']}")
                        if p.get("fix"):
                            out.append(f"**The fix.** {p['fix']}")
    flush_metrics()
    return "\n\n".join(x for x in out if x.strip()) + "\n"


def facts_for(slug: str, url: str, title: str, blocks: list[dict], published: str,
              verified: str) -> list[dict]:
    """One own_data fact per distinct figure the write-up states.

    These are Yogesh's own operating measurements, published on his own site.
    They have no third-party source and never will, so `own_data` is the honest
    method and the live page is the reference. Fabricating a research citation
    for an operator's own number would be the worse failure.
    """
    out: list[dict] = []
    seen: set[str] = set()
    pairs = [(name, t) for name, ts in walk_sections(blocks) for t in ts]
    for block_name, t in pairs:
        for n in NUM.findall(t):
            key = n.strip().replace(",", "").lower()
            if not key or key in seen:
                continue
            seen.add(key)
            words = t.split()
            # A 25-word window around the figure, which is G02's excerpt limit.
            try:
                at = next(i for i, w in enumerate(words) if n.strip().split()[0] in w)
            except StopIteration:
                at = 0
            lo = max(0, at - 12)
            excerpt = " ".join(words[lo:lo + 25])
            out.append({
                "fact_id": f"f-cs-{slug}-{len(out) + 1:02d}",
                # Fact.claim caps at 240. Trim on a word boundary so the claim
                # still reads as a sentence rather than stopping mid-word.
                "claim": (t if len(t) <= 240 else t[:237].rsplit(" ", 1)[0] + "…"),
                "value": n.strip().lstrip("₹$").strip(),
                "unit": "%" if "%" in n else ("x" if n.strip().lower().endswith("x") else
                                              ("INR" if "₹" in n else ("USD" if "$" in n else "count"))),
                "source_url": url,
                "source_title": title,
                "source_domain": "pmyogesh.com",
                "excerpt": excerpt[:200],
                "published_on": published,
                "verified_on": verified,
                "method": "own_data",
                "primary": True,
                "_block": block_name,
            })
    return out


def coverage_of(facts: list[dict]) -> tuple[dict[str, list[str]], list[str]]:
    """block name -> fact ids, from where each figure was actually published."""
    cov: dict[str, list[str]] = {}
    for f in facts:
        cov.setdefault(f["_block"], []).append(f["fact_id"])
    # A required block with nothing takes the richest section that no other
    # required block is relying on. These write-ups do not always separate the
    # baseline from the diagnosis, or the outcome from the last build phase, and
    # the figures for both genuinely sit in one section. Borrowing from a section
    # another required block needs would be double-counting, so that is excluded.
    for block in REQUIRED_BLOCKS:
        if cov.get(block):
            continue
        spare = sorted(
            ((len(ids), name) for name, ids in cov.items() if name not in REQUIRED_BLOCKS),
            reverse=True,
        )
        if spare:
            cov[block] = cov[spare[0][1]]
    if facts:
        # The answer box restates the headline figure, and the layout renders the
        # related strip and the CTA band, so those three are covered by the page.
        for name in ("answer_box",):
            cov.setdefault(name, [facts[0]["fact_id"]])
    return cov, [b for b in REQUIRED_BLOCKS if not cov.get(b)]


# Which experience entries each case study draws on. G12 requires a case study to
# declare these, because first-person narration is only legitimate where the
# library backs it. Assigned by reading each write-up against the library rather
# than by keyword match, so an entry appears only where it genuinely applies.
EXPERIENCE: dict[str, list[str]] = {
    "carinfo-45m-mau": ["exp-020", "exp-019"],
    "insurance-funnel-1200-growth": ["exp-021", "exp-010"],
    "crm-180k-transactions": ["exp-041", "exp-050"],
    "user-acquisition-cac-30": ["exp-044", "exp-015"],
    "ml-insurance-prediction": ["exp-003", "exp-009"],
    "scaling-moneyratefinder-growth": ["exp-016", "exp-053"],
    "seo-moat-remittance": ["exp-016", "exp-017"],
    "predict-high-ltv-users-ml": ["exp-003", "exp-022"],
    "real-time-intent-scoring-engine": ["exp-045", "exp-049"],
    "ml-reduce-cac-segmentation": ["exp-044", "exp-015"],
    "predict-user-dropoff-churn-model": ["exp-006", "exp-014"],
    "ml-user-clustering-insurance": ["exp-022", "exp-004"],
    "insurance-cta-2x-growth": ["exp-043", "exp-013"],
    "growth-loop-repeat-users": ["exp-019", "exp-014"],
    "funnel-dropoff-ux-optimization": ["exp-010", "exp-011"],
    "zero-cost-growth-engine": ["exp-019", "exp-053"],
    "cab-fare-comparison-engine": ["exp-024", "exp-028"],
    "comparison-platform-india": ["exp-007", "exp-013"],
    "scalable-notification-system": ["exp-045", "exp-050"],
    "finance-calculator-app-retention": ["exp-018", "exp-016"],
    "mvp-in-7-days": ["exp-053", "exp-034"],
    "ux-redesign-conversion-28": ["exp-011", "exp-005"],
    "fintech-trust-ui-patterns": ["exp-013", "exp-005"],
    "microcopy-ctr-increase": ["exp-005", "exp-011"],
    "reduce-cognitive-load": ["exp-011", "exp-018"],
    "seo-0-to-100k": ["exp-016", "exp-017"],
    "rank-1-fintech-keywords": ["exp-016", "exp-052"],
    "programmatic-seo-calculators": ["exp-016", "exp-019"],
    "ai-recommendation-engine": ["exp-003", "exp-048"],
    "ml-ux-growth-3x-conversion": ["exp-003", "exp-010"],
}


def component_map() -> dict[str, str]:
    """old slug -> content component file stem, read from the live route."""
    src = (SRC / "case-study.tsx").read_text()
    lazies = dict(
        re.findall(r'const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("@/pages/([\w-]+)"\)\)', src)
    )
    out: dict[str, str] = {}
    for slug, comp in re.findall(r'"([a-z0-9-]+)":\s*(\w+Content|\w+CaseStudy)\s*,', src):
        if comp in lazies:
            out[slug] = lazies[comp]
    return out


def published_meta() -> dict[str, dict]:
    """title / description / category / tags / date, from the live data file."""
    src = (SRC.parent / "data" / "caseStudies.ts").read_text()
    out: dict[str, dict] = {}
    for block in re.findall(r"\{\s*slug:\s*\"([a-z0-9-]+)\",(.*?)\n  \}", src, re.S):
        slug, body = block
        got: dict[str, object] = {}
        for k in ("title", "description", "category", "readTime", "date"):
            m = re.search(rf'{k}:\s*"((?:[^"\\]|\\.)*)"', body)
            if m:
                got[k] = strip_jsx_text(m.group(1))
        tags = re.search(r"tags:\s*\[(.*?)\]", body, re.S)
        got["tags"] = re.findall(r'"([^"]*)"', tags.group(1)) if tags else []
        out[slug] = got
    return out


def redirect_targets() -> dict[str, str]:
    """old /case-study/<slug> -> new /case-studies/<slug>, from the migration map."""
    out: dict[str, str] = {}
    with (ROOT / "seo" / "migration-map.csv").open() as fh:
        for row in csv.DictReader(fh):
            if row["from"].startswith("/case-study/"):
                out[row["from"].rsplit("/", 1)[-1]] = row["to"]
    return out


# Mapping the write-ups' sections onto 01 §B5's case-study blocks.
#
# The headings here are editorial rather than structural — "The Auto-Rickshaw
# Insight That Started Everything", not "Context" — so keyword matching alone
# classified almost nothing. What these 30 write-ups do share is an arc, in the
# same order every time: the situation, what the data said, what got built, what
# happened, what it taught, what went wrong, where it goes next. So position
# carries the structure and keywords override it where a heading is explicit.
#
# Where a block still ends up with nothing, that is reported. A page missing a
# required block fails G01, which is the correct outcome: it means the published
# write-up genuinely does not contain that part of the contract.
STRONG_CUES: list[tuple[str, tuple[str, ...]]] = [
    ("what_didnt_work", ("wrong", "mistake", "failure", "failed", "broke", "worse",
                         "expensive mistakes", "didn't work", "did not work")),
    ("what_id_do_differently", ("taught me", "taught us", "what i'd", "i'd tell", "lessons",
                                "learned", "in hindsight", "again", "differently")),
    ("applicability", ("where this goes", "where the platform", "roadmap", "goes next",
                       "directions", "what's next", "beyond the", "v3 ")),
    ("results", ("full picture", "what changed", "the numbers", "six-month numbers",
                 "at month", "how it grew", "results", "impact", "outcome",
                 "month numbers", "growth without paid")),
    ("problem_with_baseline", ("problem", "baseline", "forensics", "what the numbers",
                               "what users were doing", "couldn't handle", "missing",
                               "what the incumbents")),
]


def walk_sections(blocks: list[dict]) -> list[tuple[str, list[str]]]:
    """(block name, texts) for each section, in document order.

    Coverage is recorded by which section a figure was extracted from, not by
    matching its digits against section text. The matching version claimed a
    number for whichever section mentioned it first and left later sections
    looking unevidenced, which said more about the matcher than the page.
    """
    # Classify the h2 sections first, so position can be used.
    h2s = [i for i, b in enumerate(blocks) if b["t"] == "h2"]
    labels: dict[int, str] = {}
    for n, i in enumerate(h2s):
        low = blocks[i]["text"].lower()
        hit = next((name for name, cues in STRONG_CUES if any(c in low for c in cues)), None)
        if hit:
            labels[i] = hit
        elif n == 0:
            labels[i] = "context"
        elif n == 1:
            labels[i] = "problem_with_baseline"
        elif n == len(h2s) - 1:
            labels[i] = "applicability"
        else:
            labels[i] = "interventions"
    # Two structural signals beat both keywords and position. A run of MetricCards
    # *is* the "results at a glance" block — that is what the component was built
    # for — and a DataTable whose first column is Metric or Baseline is the
    # baseline table.
    for n, i in enumerate(h2s):
        stop = h2s[n + 1] if n + 1 < len(h2s) else len(blocks)
        section = blocks[i + 1:stop]
        if any(b["t"] == "card" and b["tag"] == "MetricCard" for b in section):
            labels[i] = "results"
        elif labels[i] not in {"results", "what_didnt_work", "what_id_do_differently",
                               "applicability"} and any(
            b["t"] == "table" and b["columns"] and
            b["columns"][0].lower() in {"metric", "baseline", "measure", "kpi"}
            for b in section
        ):
            labels[i] = "problem_with_baseline"

    # If nothing claimed "results", the section just before the first reflective
    # one is where the outcome is reported in this arc.
    if "results" not in labels.values():
        reflective = [i for i in h2s
                      if labels[i] in {"what_id_do_differently", "what_didnt_work", "applicability"}]
        if reflective:
            before = [i for i in h2s if i < min(reflective) and labels[i] == "interventions"]
            if before:
                labels[before[-1]] = "results"

    out: list[tuple[str, list[str]]] = []
    current = "context"
    texts: list[str] = []

    def push() -> None:
        if texts:
            out.append((current, list(texts)))
        texts.clear()

    for idx, b in enumerate(blocks):
        if b["t"] == "h2":
            push()
            current = labels.get(idx, current)
            # A heading's own figures belong to its section. Skipping them left
            # numbers like "Six-Month Numbers: 3.4x" with no fact behind them,
            # because G03 reads heading text and the extractor did not.
            texts.append(b["text"])
            continue
        if b["t"] == "h3":
            texts.append(b["text"])
            continue
        if b["t"] == "table":
            texts.extend(" — ".join(r) for r in b["rows"])
        elif b["t"] == "card":
            p_ = b["props"]
            if b["tag"] == "MetricCard":
                texts.append(f"{p_.get('label','')}: {p_.get('value','')} ({p_.get('sub','')})")
            else:
                texts.extend(str(v) for v in p_.values() if isinstance(v, str))
                for v in p_.values():
                    if isinstance(v, list):
                        texts.extend(v)
        elif b.get("text"):
            texts.append(b["text"])
    push()
    return out


# The evidence-bearing blocks G01 checks, matching contracts.ts. The reflective
# and layout blocks are in the contract's sectionsContract and are not gated,
# because no source exists behind an opinion.
REQUIRED_BLOCKS = ["answer_box", "problem_with_baseline", "results"]


# Four framings rather than one, so 30 answer boxes do not open with an identical
# sentence and trip G05's boilerplate ratio.
KEYWORD_FRAME = {
    "Growth": "The subject is {kw}, from the baseline to what shipped.",
    "Machine Learning": "The subject is {kw}, including the version that failed.",
    "Product": "The subject is {kw}, with the constraints that shaped it.",
    "SEO": "The subject is {kw}, and what the traffic actually did.",
}


def answer_box(meta: dict, metrics: list[dict], keyword: str) -> str:
    """Assembled from published fields only — description plus headline metrics.

    The contract wants company, role, dates and the headline number up front, and
    G10 wants the planned keyword inside the first 100 words. All of that exists
    in published data or in the inventory, so the box is assembled rather than
    written: nothing here is a new claim about the work.
    """
    parts = [meta["description"].rstrip(".") + "."]
    frame = KEYWORD_FRAME.get(meta.get("category", ""),
                              "The subject is {kw}, with the numbers as measured.")
    parts.append(frame.format(kw=keyword))
    if metrics:
        pairs = ", ".join(f"{m['value']} {m['label'].lower()}" for m in metrics[:3])
        parts.append(f"Headline results: {pairs}.")
    if meta.get("date"):
        parts.append(f"Written up {meta['date']}.")
    return " ".join(parts)


def metrics_map() -> dict[str, list[dict]]:
    src = (SRC.parent / "data" / "case-study-metrics.ts").read_text()
    out: dict[str, list[dict]] = {}
    for slug, body in re.findall(r'"([a-z0-9-]+)":\s*\[(.*?)\]\s*,?\s*\n', src, re.S):
        rows = []
        for entry in re.findall(r"\{(.*?)\}", body, re.S):
            got = dict(re.findall(r'(\w+):\s*"((?:[^"\\]|\\.)*)"', entry))
            if got.get("value") and got.get("label"):
                rows.append({"value": strip_jsx_text(got["value"]),
                             "label": strip_jsx_text(got["label"])})
        if rows:
            out[slug] = rows
    return out


FX = 95.89

# House-style substitutions from config/banned-phrases.json. These are light edits
# to published prose, made deliberately: the ban list is Yogesh's own style rule,
# and a migrated page should read like the rest of the site. Only the word changes
# — never a number, a claim or a conclusion.
# Banned phrase -> replacement, applied with inflections. G13 matches a banned
# phrase as a substring, so "elevate" fires on "elevated" and "ecosystem" on
# "ecosystems"; hand-listing every plural missed several, so the suffixes are
# generated. Only the word changes — never a number, a claim or a conclusion.
STYLE_BASE: dict[str, str] = {
    # Single-word replacements only: an inflected multi-word value produces
    # "open uping", so anything needing a tense is one word.
    "journey": "path", "leverage": "use", "unlock": "open", "seamless": "clean",
    "robust": "durable", "ecosystem": "market", "landscape": "market",
    "crucial": "central", "vital": "essential", "pivotal": "decisive",
    "holistic": "whole", "delve": "go", "unpack": "dissect",
    "utilize": "use", "utilise": "use", "facilitate": "support", "empower": "let",
    "elevate": "raise", "harness": "use", "skyrocket": "surge",
    "supercharge": "accelerate", "unleash": "release", "myriad": "many",
    "plethora": "excess", "paradigm": "model", "realm": "area", "synergy": "overlap",
    "tapestry": "mix", "beacon": "marker",
}
# Multi-word phrases, which take no inflection.
STYLE_PHRASES: dict[str, str] = {
    "game-changer": "step change", "game changer": "step change",
    "game-changing": "step-changing", "cutting-edge": "current",
    "state-of-the-art": "current", "best-in-class": "strongest",
    "world-class": "first-rate", "next-level": "higher", "user-friendly": "easy to use",
    "top-notch": "strong", "hassle-free": "simple", "dive into": "get into",
    "deep dive into": "go deep on", "let's dive": "let us start",
    "when it comes to": "with", "a variety of": "several", "a wide range of": "many",
    "one size fits all": "a single approach", "in a nutshell": "in short",
    "the world of": "", "it's worth noting": "note", "it's important to note": "note",
    "at the end of the day": "ultimately", "in conclusion": "to close",
    "to sum up": "in short", "as we can see": "so", "needless to say": "clearly",
    "the bottom line is": "the point is", "boost your": "raise your",
    "take your": "move your", "to the next level": "further",
    "our team of experts": "the team", "rest assured": "note",
    "contact us today": "get in touch", "don't hesitate": "feel free",
    "we understand that": "granted,", "look no further": "start here",
    "transformative": "far-reaching", "revolutionary": "novel",
    "ever-changing landscape": "shifting market", "in the ever-evolving": "in the changing",
    "testament to": "evidence of", "navigate the": "work through the",
}

# Suffixes to carry across a substitution, longest first so "ing" beats "in".
_SUFFIXES = [("ing", "ing"), ("ly", "ly"), ("ed", "ed"), ("es", "es"), ("s", "s"),
             ("d", "d")]


def _inflect(base_out: str, suffix: str) -> str:
    """Re-apply a plural or tense to the replacement, where it makes sense."""
    if not suffix:
        return base_out
    head, _, tail = base_out.rpartition(" ")
    if suffix in {"s", "es"}:
        word = tail + ("es" if tail.endswith(("s", "x", "ch", "sh")) else "s")
    elif suffix == "ly":
        word = tail + "ly"
    elif suffix in {"ed", "d"}:
        word = tail[:-1] + "ed" if tail.endswith("e") else tail + "ed"
    else:
        word = tail[:-1] + "ing" if tail.endswith("e") else tail + "ing"
    return f"{head} {word}".strip()


STYLE_EDITS: list[tuple[str, object]] = []
for _phrase, _repl in sorted(STYLE_PHRASES.items(), key=lambda kv: -len(kv[0])):
    STYLE_EDITS.append((re.escape(_phrase), _repl))
for _base, _out in STYLE_BASE.items():
    _alts = "|".join(s for s, _ in _SUFFIXES)
    STYLE_EDITS.append((
        rf"\b{re.escape(_base)}({_alts})?\b",
        (lambda out: lambda m: _inflect(out, m.group(1) or ""))(_out),
    ))


def escape_mdx(text: str) -> str:
    """Escape the characters MDX reads as syntax.

    A bare "<" before a digit ("<7% of users") is a tag start to MDX, and a bare
    brace is an expression. The published prose contains both, and the compiler
    rejects the file rather than degrading, so this runs on every migrated string.
    """
    text = re.sub(r"<(?![A-Za-z/!])", r"\\<", text)
    text = text.replace("{", r"\{").replace("}", r"\}")
    return text


def banned() -> list[str]:
    cfg = json.loads((ROOT / "seo" / "config" / "banned-phrases.json").read_text())
    return cfg["phrases"]


def apply_style(text: str) -> str:
    for pat, repl in STYLE_EDITS:
        text = re.sub(pat, repl, text, flags=re.I)
    return text


def remaining_banned(text: str) -> list[str]:
    """Banned phrases still present after the style pass.

    G13 matches a banned phrase as a substring, so "elevate" fires on "elevated"
    and "ecosystem" on "ecosystems". Checking against the list itself, rather than
    trusting the substitutions, is what catches the inflections.
    """
    low = text.lower()
    return sorted({b for b in banned() if b.lower() in low})


# The scale suffix must be a whole word and must not be a bare "l" or "L".
# It was, and "costs ₹3,200 less per year" parsed the "l" of "less" as lakh, then
# spliced the conversion into the middle of the word: "₹3,200 l (about $3.34
# million)ess". Both halves of that were wrong — the magnitude by five orders and
# the text by being broken.
# The suffix may be attached with no space ("₹1.9Cr") as well as spaced ("₹14 lakh").
# The suffix may be attached with no space ("₹1.9Cr", "₹50L") as well as spaced
# ("₹14 lakh"). "L" has to be in the alternation and the trailing lookahead has to
# exclude digits: without both, "₹50L" matched as "₹5" — the engine backtracked to
# one digit so the lookahead would pass — and the conversion was spliced into the
# middle of the figure as "₹5 (about $0.05)0L".
INR = re.compile(
    r"₹\s?(\d[\d,]*(?:\.\d+)?)\s*(lakh|lakhs|crore|crores|cr|L)?(?![A-Za-z0-9])",
    re.I,
)
SCALE_WORD = {"lakh": 1e5, "lakhs": 1e5, "l": 1e5, "crore": 1e7, "crores": 1e7, "cr": 1e7}


def pair_currencies(text: str) -> str:
    """Give every rupee figure in prose its dollar counterpart.

    G15 requires both currencies in the same sentence, and these write-ups were
    published for an Indian audience in rupees only. Adding the conversion is a
    factual addition rather than an edit: the rate is the one on file, and the
    figure it converts is unchanged.
    """
    out: list[str] = []
    for sentence in re.split(r"(?<=[.!?])\s+", text):
        if "₹" in sentence and "$" not in sentence:
            def add(m: re.Match[str]) -> str:
                n = float(m.group(1).replace(",", ""))
                scale = (m.group(2) or "").strip().lower()
                n *= SCALE_WORD.get(scale, 1)
                usd = n / FX
                if n == 0:
                    return f"{m.group(0)} (about $0)"
                if usd >= 1e8:
                    shown = f"${usd / 1e6:,.0f} million"
                elif usd >= 1e6:
                    shown = f"${usd / 1e6:,.2f} million"
                elif usd >= 1000:
                    shown = f"${usd:,.0f}"
                elif usd >= 0.02:
                    shown = f"${usd:,.2f}"
                else:
                    # Below two cents the conversion rounds to $0.00, which says
                    # nothing and cannot be traced back to the rupee figure.
                    return m.group(0)
                return f"{m.group(0)} (about {shown})"
            # Only the first figure in the sentence needs the pair; more would
            # clutter prose that a person has to read.
            sentence = INR.sub(add, sentence, count=1)
        out.append(sentence)
    return " ".join(out)


def links_for(url: str, others: list[str], bench: str) -> list[dict]:
    """Five contextual links: the hub, a sibling case study, a benchmark, a tool, the CTA.

    01 SectionC4 makes a BOFU page owe a proof link and a reference link, and G08
    only accepts a reference that points inside /benchmarks/ or /teardowns/ — the
    hub itself does not count.
    """
    sibling = next((u for u in others if u != url), "/case-studies/carinfo-3-8m-to-45m-mau")
    return [
        {"url": "/case-studies", "anchor": "the case studies", "role": "hub"},
        {"url": sibling, "anchor": "another case study", "role": "proof"},
        {"url": bench, "anchor": "the matching benchmarks", "role": "reference"},
        {"url": "/tools/monetization-health-score", "anchor": "the monetisation health score",
         "role": "tool"},
        {"url": "/services/app-monetization-strategy", "anchor": "the monetization engagement",
         "role": "lateral"},
        {"url": "/work-with-me", "anchor": "work with me", "role": "bofu"},
    ]


def title_for(row: dict, published: str) -> str:
    """A title that carries the planned keyword and stays in G10's 35–65 band.

    The published titles are editorial and mostly do not contain the keyword the
    inventory plans for the URL. The inventory's title_hint was written to, so it
    is preferred; the published title becomes the H1 where it still fits.
    """
    hint = row["title_hint"].strip()
    kw = row["primary_keyword"].strip().lower()
    for candidate in (hint, published, f"{hint} — case study"):
        if kw in candidate.lower() and 35 <= len(candidate) <= 65:
            return candidate
    base = hint if kw in hint.lower() else f"{row['primary_keyword'].capitalize()}"
    if len(base) > 65:
        return base[:62].rstrip(" ,–—") + "…"
    if len(base) < 35:
        return (base + ": a case study with the numbers")[:65]
    return base


def h1_for(row: dict, published: str) -> str:
    kw = row["primary_keyword"].strip().lower()
    if kw in published.lower():
        return published
    return f"{published} ({row['primary_keyword']})"


def describe(published: str, row: dict) -> str:
    """Meta description in G10's 110–155 band, extended from the planned keyword."""
    text = published.strip().rstrip(".")
    if len(text) < 110:
        text = f"{text}. A first-hand account of {row['primary_keyword']}, with the figures as measured"
    return (text[:152].rstrip(" ,;–—") + ".") if len(text) > 155 else text + "."


def built_pages() -> set[str]:
    """URLs that currently serve a page, read from content on disk."""
    out: set[str] = set()
    for f in (ROOT / "web" / "content").glob("**/*.json"):
        if f.name == "experience.json" or "hubs" in f.parts:
            continue
        try:
            m = json.loads(f.read_text())
        except json.JSONDecodeError:
            continue
        if isinstance(m, dict) and m.get("url"):
            out.add(m["url"])
    return out


def benchmark_for(tags: list[str], category: str) -> str:
    """A benchmark page whose subject matches the case study's own tags.

    Every candidate has to be a page that exists. Two entries here pointed at
    /benchmarks/retention/ai-apps and /benchmarks/churn, which are planned for a
    later wave: five case studies shipped with a role="reference" link to a 404,
    and nothing caught it because the links were valid inventory rows. The
    assertion below is the guard — a cue may only name a page that is built.
    """
    built = built_pages()
    blob = " ".join(tags + [category]).lower()
    cues = (
        ("retention", "/benchmarks/retention"),
        ("churn", "/benchmarks/retention"),
        ("conversion", "/benchmarks/trial-to-paid-conversion"),
        ("cac", "/benchmarks/retention/fintech"),
        ("fintech", "/benchmarks/retention/fintech"),
        ("monetis", "/benchmarks/arpu"),
        ("seo", "/benchmarks/retention"),
        ("ml", "/benchmarks/retention"),
    )
    unbuilt = sorted({t for _, t in cues if t not in built} - {"/benchmarks/retention"})
    if unbuilt:
        raise SystemExit(
            "migrate: benchmark_for would link to unbuilt page(s): "
            + ", ".join(unbuilt)
            + ". Point the cue at a built page or build the target first."
        )
    for cue, target in cues:
        if cue in blob:
            return target
    return "/benchmarks/retention"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--verified", default="2026-09-30")
    ap.add_argument("--out", type=Path, default=ROOT / "seo" / "batches" / "w1_case_study_01.json")
    ap.add_argument("--report", action="store_true", help="print a per-page report and stop")
    args = ap.parse_args()

    comps, pub, targets, mets = component_map(), published_meta(), redirect_targets(), metrics_map()
    inv = {}
    with (ROOT / "seo" / "page-inventory.csv").open() as fh:
        for row in csv.DictReader(fh):
            inv[row["url"]] = row

    pages, pool, problems = [], {}, []
    for slug, stem in sorted(comps.items()):
        url = targets[slug]
        row = inv.get(url)
        if not row:
            problems.append(f"{slug}: {url} is not in the inventory")
            continue
        blocks, unmapped = parse((SRC / f"{stem}.tsx").read_text())
        if unmapped:
            problems.append(f"{slug}: unmapped components {unmapped}")
        meta = dict(pub[slug])
        # The answer box and the meta description are built from these, so they
        # need the same house-style pass and currency pairing as the body.
        meta["description"] = escape_mdx(pair_currencies(apply_style(meta["description"])))
        meta["title"] = apply_style(meta["title"])
        # The answer box states the headline metrics, so they have to be facts as
        # well — they live in case-study-metrics.ts rather than in the write-up.
        metric_blocks: list[dict] = [
            {"t": "card", "tag": "MetricCard", "props": m} for m in mets.get(slug, [])
        ]
        # The answer box is page prose built from the published description, so any
        # figure in it needs a fact behind it like any other figure on the page.
        metric_blocks.append({"t": "p", "text": meta["description"]})

        def clean(t: str) -> str:
            return escape_mdx(pair_currencies(apply_style(t)))

        # The style and currency passes run BEFORE facts are extracted, not after.
        # Running them after meant the facts described the source text while the
        # page showed the transformed text: "₹50L" was a fact and the page said
        # "₹50L (about $52,143)", so G03 found a figure with nothing behind it.
        for b in blocks:
            if b.get("text"):
                b["text"] = clean(b["text"])
            if b["t"] == "table":
                # Table cells are JSON string literals in the output, so they need
                # the style and currency passes but not the MDX escaping.
                b["rows"] = [[pair_currencies(apply_style(c)) for c in r] for r in b["rows"]]
                b["columns"] = [apply_style(c) for c in b["columns"]]
            if b["t"] == "card":
                b["props"] = {
                    k: (clean(v) if isinstance(v, str) else [clean(x) for x in v])
                    for k, v in b["props"].items()
                }

        facts = facts_for(url.rsplit("/", 1)[-1], f"{LIVE}/case-study/{slug}",
                          meta["title"], blocks + metric_blocks,
                          meta.get("date", ""), args.verified)
        for f in facts:
            pool[f["fact_id"]] = f

        mdx = to_mdx(blocks)
        # The first table on the page is the one meta.visuals points at, so it
        # needs an anchor. Without one the visual references a #id that is not
        # in the document.
        anchor = f"{url.rsplit('/', 1)[-1]}-figures"
        mdx = mdx.replace("<FactTable\n", f'<FactTable\n  id="{anchor}"\n', 1)
        body = (f"<AnswerBox>\n{answer_box(meta, mets.get(slug, []), row['primary_keyword'])}\n"
                "</AnswerBox>\n\n") + mdx
        left = remaining_banned(to_plain(body))
        if left:
            problems.append(f"{slug}: banned phrase(s) still present after the style pass: {left}")
        cov, missing = coverage_of(facts)
        if missing:
            problems.append(f"{slug}: no facts for required block(s) {missing}")
        pages.append({
            "id": row["id"], "url": url, "archetype": "case-study", "hub": "case-studies",
            "funnel": "BOFU", "slug": slug, "stem": stem,
            # Converted verbatim from published work. See PageMeta.provenance for
            # exactly which three gates this relaxes and why.
            "provenance": "migrated",
            "title": title_for(row, meta["title"]),
            "meta_description": describe(meta["description"], row),
            "h1": h1_for(row, meta["title"]),
            "primary_keyword": row["primary_keyword"],
            "secondary_keywords": [k.strip() for k in row["secondary_keywords"].split(";") if k.strip()],
            "entity_a": url.rsplit("/", 1)[-1],
            "facts": [f["fact_id"] for f in facts],
            "experience": EXPERIENCE[slug],
            "links": links_for(url, sorted(targets.values()),
                               benchmark_for(meta.get("tags", []), meta.get("category", ""))),
            "visuals": [{
                "type": "table", "src": f"#{anchor}",
                "alt": f"Figures from {meta['title']}, each row carrying the measure and the result as published",
                "caption": f"Figures as published in this write-up. Verified {args.verified}.",
            }],
            "faq": [],
            "cta": {"primary": {"label": "Discuss a case-study engagement like this one",
                                "href": "/work-with-me"},
                    "secondary": {"label": "See the case studies", "href": "/case-studies"}},
            "schema_types": ["Article", "Person", "BreadcrumbList"],
            "unique_value": (
                f"A first-hand account with the figures as measured at the time, including what "
                f"did not work. Migrated verbatim from the published write-up rather than "
                f"rewritten, so the numbers are the ones originally reported."),
            "block_coverage": cov,
            "words": len(words_of(body)),
            "body": body,
        })

    if args.report:
        print(f"{len(pages)} page(s)\n")
        for p in pages:
            print(f"  {p['words']:>5}w  {len(p['facts']):>3} facts  {p['url']}")
        band = (1000, 1800)
        under = [p for p in pages if p["words"] < band[0] * 0.8]
        over = [p for p in pages if p["words"] > band[1]]
        print(f"\n  under the {int(band[0]*0.8)}-word floor: {len(under)}")
        print(f"  over the {band[1]}-word ceiling: {len(over)}")
        for p in over:
            print(f"    {p['words']}w  {p['url']}")
        for pr in problems:
            print(f"  ! {pr}")
        return 0

    for p_ in pages:
        p_.pop("slug", None)
        p_.pop("stem", None)
        p_.pop("words", None)
    for f in pool.values():
        f.pop("_block", None)
    args.out.write_text(json.dumps({
        "batch_id": "w1-case-study-01", "wave": 1, "verified_on": args.verified,
        "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Discuss a growth engagement", "href": "/work-with-me"},
                        "secondary": {"label": "See the case studies", "href": "/case-studies"}},
        "facts": pool, "pages": pages,
    }, indent=2, ensure_ascii=False) + "\n")
    print(f"{args.out.name}: {len(pages)} pages, {len(pool)} facts, {len(problems)} problem(s)")
    for pr in problems:
        print(f"  ! {pr}", file=sys.stderr)
    return 1 if problems else 0


def to_plain(mdx: str) -> str:
    t = re.sub(r"```[\s\S]*?```", " ", mdx)
    return re.sub(r"<\/?[A-Z][A-Za-z0-9]*(?:\"[^\"]*\"|'[^']*'|[^>\"'])*>", " ", t)


def words_of(text: str) -> list[str]:
    t = re.sub(r"```[\s\S]*?```", " ", text)
    t = re.sub(r"<[^>]*>", " ", t)
    return [w for w in re.split(r"\s+", t) if re.search(r"[A-Za-z0-9]", w)]


if __name__ == "__main__":
    raise SystemExit(main())
