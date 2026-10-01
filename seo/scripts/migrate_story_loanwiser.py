#!/usr/bin/env python3
"""Migrate the published LoanWiser write-up to /case-studies/loanwiser-credit-routing.

`pnpm launch:check` reported this redirect target missing, and an earlier note in
this project recorded it as "no published write-up exists to migrate". That was
wrong. The write-up exists at client/src/pages/story-loanwiser.tsx and serves at
/work/loanwiser — 731 lines, twenty H2 sections, Yogesh's own first-person
account. migrate_case_studies.py never saw it because that script discovers its
inputs from `cs-*-content.tsx` plus caseStudies.ts, and the four company stories
(`story-*.tsx`, registered in company-story.tsx) match neither.

So this is a migration, not an authoring job, and the distinction matters: the
page keeps the numbers as originally published and the voice as originally
written, rather than being rewritten from the experience library.

It reuses migrate_case_studies.py wholesale — the parser handles this markup
unchanged, and the style, currency, fact-extraction and block-coverage passes are
the same ones the other thirty went through, in the same order. Only the inputs
differ, because the metadata lives in company-story.tsx rather than caseStudies.ts.

Twenty H2 sections is far outside the case-study contract's four-to-ten, which is
exactly what PageMeta.provenance = "migrated" is for: it relaxes G07's section
shape, G13's readability limits and G17's quote length, while every gate guarding
against an invented claim stays in force.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import migrate_case_studies as M  # noqa: E402

SLUG = "loanwiser"
URL = "/case-studies/loanwiser-credit-routing"
# The story's own canonical URL, which is what the facts cite as their source.
PUBLISHED_URL = f"{M.LIVE}/work/{SLUG}"


def story_meta() -> dict:
    """title / tagline / category / readTime, from company-story.tsx."""
    src = (M.SRC / "company-story.tsx").read_text()
    m = re.search(rf"\n  {SLUG}: \{{(.*?)\n  \}},", src, re.S)
    if not m:
        raise SystemExit(f"migrate_story: no `{SLUG}` entry in company-story.tsx")
    body = m.group(1)
    got: dict[str, object] = {}
    for k in ("title", "company", "role", "category", "metric", "metricLabel",
              "readTime", "tagline"):
        mm = re.search(rf'{k}:\s*"((?:[^"\\]|\\.)*)"', body)
        if mm:
            got[k] = M.strip_jsx_text(mm.group(1))
    return got


CELL = re.compile(
    r'<div className="val">([^<]+)</div>\s*<div className="lbl">([^<]+)</div>'
)


def metric_cells(src: str) -> list[tuple[str, str]]:
    """(value, label) for every .metric-cell, in document order, de-duplicated.

    These carry the write-up's headline figures. migrate_case_studies.metrics_grid
    reads the cs-* markup and finds none here, which is why the first pass
    produced a page with no FactTable and a visual pointing at an anchor that did
    not exist.
    """
    out, seen = [], set()
    for val, lbl in CELL.findall(src):
        val, lbl = val.strip(), lbl.strip()
        if (val, lbl) in seen:
            continue
        seen.add((val, lbl))
        out.append((val, lbl))
    return out


def inventory_row() -> dict:
    with (M.ROOT / "seo" / "page-inventory.csv").open() as fh:
        for row in csv.DictReader(fh):
            if row["url"] == URL:
                return row
    raise SystemExit(f"migrate_story: {URL} is not in page-inventory.csv")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--verified", default="2026-09-30")
    ap.add_argument("--out", type=Path,
                    default=M.ROOT / "seo" / "batches" / "w1_story_01.json")
    args = ap.parse_args()

    row, meta = inventory_row(), story_meta()
    raw = (M.SRC / f"story-{SLUG}.tsx").read_text()
    cells = metric_cells(raw)
    blocks, unmapped = M.parse(raw)
    if unmapped:
        print(f"migrate_story: unmapped components {unmapped}", file=sys.stderr)

    # The original UI copy contains "between ₹X and ₹Y" — a placeholder the
    # product filled at runtime, not a published figure. G15 reads it as an
    # unpaired rupee amount, and pairing it would mean inventing a dollar value
    # for a number that was never stated. Named as a placeholder instead.
    PLACEHOLDER = re.compile(r"₹X and ₹Y")

    def clean(t: str) -> str:
        t = PLACEHOLDER.sub("a stated lower and upper amount", t)
        return M.escape_mdx(M.pair_currencies(M.apply_style(t)))

    # Same order as migrate_case_studies: style and currency BEFORE fact
    # extraction, so the facts describe the text the page actually shows.
    for b in blocks:
        if b.get("text"):
            b["text"] = clean(b["text"])
        if b["t"] == "table":
            b["rows"] = [[M.pair_currencies(M.apply_style(c)) for c in r] for r in b["rows"]]
            b["columns"] = [M.apply_style(c) for c in b["columns"]]

    title = M.apply_style(meta["title"])
    tagline = clean(str(meta["tagline"]))
    # The answer box is page prose, so every figure in it needs a fact behind it.
    headline = (
        f"This fintech credit routing case study starts with a number the business "
        f"had written off as someone else's: Loanwiser's bank partners were declining "
        f"83 of every 100 digital loan applications. The fix was not more leads. It "
        f"was a credit intelligence layer that took the disbursement rate to "
        f"{meta['metric']} by routing each application to the one lender most likely "
        f"to approve it."
    )
    extra = [{"t": "p", "text": headline}, {"t": "p", "text": tagline}]
    extra += [{"t": "p", "text": clean(f"{lbl}: {val}")} for val, lbl in cells]

    facts = M.facts_for(URL.rsplit("/", 1)[-1], PUBLISHED_URL, title,
                        blocks + extra, "2020", args.verified)
    cov, missing = M.coverage_of(facts)
    if missing:
        print(f"migrate_story: blocks with no supporting fact: {missing}", file=sys.stderr)

    mdx = M.to_mdx(blocks)
    anchor = f"{URL.rsplit('/', 1)[-1]}-figures"

    # Every row has to cite a fact, so only cells whose figure appears in one of
    # the extracted facts go in. A row citing nothing is what G01's block
    # coverage and G03 both exist to catch.
    rows = []
    for val, lbl in cells:
        hit = next((f for f in facts if val.rstrip("+×x") in f["claim"]), None)
        if hit is None:
            continue
        rows.append(f'    {{ cells: ["{lbl}", "{val}"], factId: "{hit["fact_id"]}" }},')
    table = ""
    if rows:
        table = (f'<FactTable\n  id="{anchor}"\n'
                 '  caption="Figures as published in the original write-up"\n'
                 '  columns={["Measure", "As published"]}\n'
                 "  rows={[\n" + "\n".join(rows) + "\n  ]}\n/>\n\n")
    body = f"<AnswerBox>\n{headline}\n</AnswerBox>\n\n{table}{mdx}"

    left = M.remaining_banned(M.to_plain(body))
    if left:
        print(f"migrate_story: banned phrase(s) survived the style pass: {left}",
              file=sys.stderr)

    page = dict(
        id=row["id"], url=URL, archetype="case-study", hub="case-studies",
        provenance="migrated",
        # title_for falls back to "<keyword>: a case study with the numbers" when
        # neither the title_hint nor the published title carries the keyword, and
        # here that reads "case study" twice. Named explicitly instead.
        title="Fintech Credit Routing Case Study: Loanwiser at 90%+",
        meta_description=M.describe(tagline, row),
        h1=M.h1_for(row, M.apply_style(str(meta["title"]))),
        primary_keyword=row["primary_keyword"],
        secondary_keywords=[s for s in (row["secondary_keywords"] or "").split("|") if s],
        entity_a="loanwiser",
        facts=[f["fact_id"] for f in facts],
        experience=["exp-001", "exp-007"],
        links=M.links_for(URL, ["/case-studies/comparison-platform-india"],
                          "/benchmarks/retention/fintech"),
        visuals=[{
            "type": "table", "src": f"#{anchor}",
            "alt": ("Figures from the LoanWiser credit routing write-up, each row carrying "
                    "the measure and the result as originally published, with the bank "
                    "rejection rate, the disbursement rate before and after, the share of "
                    "rejections carrying a usable reason and the approval-rate gap the "
                    "behavioural signal opened up"),
            "caption": "Figures as published in the original write-up. Verified 30 September 2026.",
        }],
        schema_types=["Article", "Person", "BreadcrumbList"],
        cta={"primary": {"label": "Get a credit routing diagnosis", "href": "/work-with-me"},
             "secondary": {"label": "See the case studies", "href": "/case-studies"}},
        unique_value=(
            "A first-hand account of reattributing an 83% bank rejection rate from an "
            "external underwriting constraint to an internal routing failure, with the "
            "figures as measured at the time and the partner resistance that took eight "
            "months to shift. Migrated from the published write-up rather than rewritten."
        ),
        block_coverage=cov,
        body=body,
    )

    spec = {
        "batch_id": "w1-story-01", "wave": 1, "verified_on": args.verified,
        "fx_rate": 95.89,
        "default_cta": {"primary": {"label": "Get a growth and monetisation review",
                                    "href": "/work-with-me"},
                        "secondary": {"label": "See the case studies",
                                      "href": "/case-studies"}},
        "facts": {f["fact_id"]: f for f in facts},
        "pages": [page],
    }
    args.out.write_text(json.dumps(spec, indent=2, ensure_ascii=False) + "\n")
    print(f"{args.out.name}: 1 page, {len(facts)} facts, {len(blocks)} blocks")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
