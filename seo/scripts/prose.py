"""Python port of web/lib/gates/prose.ts, for pre-flighting a batch before it lands.

The TypeScript implementation stays authoritative — it is what the gate runner
uses and what the unit tests cover. This exists so a draft can be measured while
it is still being written, instead of round-tripping through `pnpm gates` for
every sentence that runs two words long. Where the two disagree, the gate wins,
so the thresholds here are deliberately set a shade tighter than the gate's.
"""
from __future__ import annotations

import re
from pathlib import Path

RENDERED_FROM_META = ["Sources", "FAQ", "Changelog", "AuthorBox", "Breadcrumbs"]


def to_prose(mdx: str) -> str:
    s = re.sub(r"```[\s\S]*?```", " ", mdx)
    s = re.sub(r"`[^`\n]*`", " ", s)
    for tag in RENDERED_FROM_META:
        s = re.sub(rf"<{tag}\b[^>]*/>", " ", s)
        s = re.sub(rf"<{tag}\b[^>]*>[\s\S]*?</{tag}>", " ", s)
    s = re.sub(r"</?[A-Z][A-Za-z0-9]*\b[^>]*>", " ", s)
    s = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", s)
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    s = re.sub(r"^\s*>\s?", "", s, flags=re.M)
    s = re.sub(r"^\s*[-*+]\s+", "", s, flags=re.M)
    s = re.sub(r"[*_~]{1,3}", "", s)
    return s


def words(text: str) -> list[str]:
    return [w for w in re.split(r"\s+", text) if re.search(r"[A-Za-z0-9₹$%]", w)]


def sentences(text: str) -> list[str]:
    t = re.sub(r"\n+", " ", text)
    parts = re.split(r"(?<![A-Z0-9])(?<!\b[A-Z])[.!?]+(?=\s+[A-Z\"'(]|\s*$)", t)
    return [p.strip() for p in parts if words(p)]


def count_syllables(word: str) -> int:
    w = re.sub(r"[^a-z]", "", word.lower())
    if not w:
        return 1
    if len(w) <= 3:
        return 1
    trimmed = re.sub(r"(?:[^laeiouy]es|ed|[^laeiouy]e)$", "", w)
    trimmed = re.sub(r"^y", "", trimmed)
    groups = re.findall(r"[aeiouy]{1,2}", trimmed)
    return max(1, len(groups))


def fk_grade(text: str) -> float:
    sents, ws = sentences(text), words(text)
    if not sents or not ws:
        return 0.0
    syl = sum(count_syllables(w) for w in ws)
    return 0.39 * (len(ws) / len(sents)) + 11.8 * (syl / len(ws)) - 15.59


BE = re.compile(r"\b(?:am|is|are|was|were|be|been|being)\b", re.I)
PARTICIPLE = re.compile(r"\b\w+(?:ed|en|own|ade|ought|uilt|old)\b", re.I)


def passive_share(text: str) -> float:
    sents = sentences(text)
    if not sents:
        return 0.0
    n = 0
    for s in sents:
        m = BE.search(s)
        if not m:
            continue
        if PARTICIPLE.search(s[m.end():m.end() + 40]):
            n += 1
    return n / len(sents)


def split_sections(mdx: str) -> tuple[str, list[tuple[str, int, str]]]:
    """(lead, [(heading, level, text)]) over the prose form."""
    prose = to_prose(mdx)
    lead: list[str] = []
    out: list[tuple[str, int, str]] = []
    cur: tuple[str, int, list[str]] | None = None
    for line in prose.split("\n"):
        m = re.match(r"^(#{2,3})\s+(.*)$", line.strip())
        if m:
            if cur:
                out.append((cur[0], cur[1], "\n".join(cur[2]).strip()))
            cur = (m.group(2).strip(), len(m.group(1)), [])
            continue
        (cur[2] if cur else lead).append(line)
    if cur:
        out.append((cur[0], cur[1], "\n".join(cur[2]).strip()))
    return "\n".join(lead).strip(), out


FIRST_PERSON = re.compile(r"\b(?:I|my client|we shipped|in my work|we built|we ran|our client)\b")
SUPERLATIVE = re.compile(r"\b(?:best|#1|number one|leading|world.?class|top.rated)\b", re.I)


_BANNED: list[str] | None = None


def banned_phrases() -> list[str]:
    """The same list G13 loads, read from the one config that owns it."""
    global _BANNED
    if _BANNED is None:
        import json
        cfg = json.loads(
            (Path(__file__).resolve().parents[1] / "config" / "banned-phrases.json").read_text()
        )
        _BANNED = cfg["phrases"]
    return _BANNED


def style_problems(mdx: str, archetype: str, word_band: tuple[int, int],
                   section_band: tuple[int, int]) -> list[str]:
    """Everything G06, G07, G12, G13 and G15 would say, said earlier."""
    prose = to_prose(mdx)
    out: list[str] = []

    low = prose.lower()
    hits = [b for b in banned_phrases() if b.lower() in low]
    if hits:
        out.append(f"G13 banned phrase(s): {', '.join(hits[:5])}")

    # G13 — thresholds are the gate's, checked one notch tighter on the two that
    # drift with a single long sentence.
    tofu = archetype in {"glossary", "playbook", "teardown"}
    limit = 11 if tofu else 13
    grade = fk_grade(prose)
    if grade > limit:
        out.append(f"G13 FK grade {grade:.1f} (max {limit})")
    passive = passive_share(prose)
    if passive > 0.15:
        out.append(f"G13 passive {passive * 100:.0f}% (max 15%)")
    sents = sentences(prose)
    avg = len(words(prose)) / len(sents) if sents else 0
    if avg > 22:
        out.append(f"G13 average sentence {avg:.1f} words (max 22)")
    # Advisory rather than a gate: a very long sentence is usually a split that
    # never happened, because the sentence splitter refuses to break after a
    # digit. Ending a sentence on a number therefore silently doubles its
    # measured length and pushes FK up with it.
    for s in sents:
        if len(words(s)) > 45:
            out.append(f"G13 risk: {len(words(s))}-word sentence \"{s[:48]}…\"")

    lead, secs = split_sections(mdx)
    # Mirror of h2Sections in prose.ts: an H3 is part of its parent H2, not a
    # section of its own, so its words count toward the parent's band.
    h2s: list[tuple[str, int, str]] = []
    for h, lvl, t in secs:
        if lvl == 2:
            h2s.append((h, lvl, t))
        elif h2s:
            ph, pl, pt = h2s[-1]
            h2s[-1] = (ph, pl, f"{pt}\n\n### {h}\n{t}")
    body_q = sum(t.count("?") for _, _, t in secs)
    if body_q:
        out.append(f"G13 {body_q} question mark(s) in body prose")

    # G12 — first person only inside FromMyWork / WhatIdDo.
    outside = prose
    for b in re.finditer(r"<(FromMyWork|WhatIdDo)\b[^>]*>([\s\S]*?)</\1>", mdx):
        outside = outside.replace(to_prose(b.group(0)), " ")
    m = FIRST_PERSON.search(outside)
    if m:
        i = max(0, m.start() - 40)
        out.append(f"G12 first person outside a block: \"…{outside[i:m.end() + 20].strip()}…\"")

    # G15 — a sentence naming money names both currencies.
    for s in sents:
        inr = bool(re.search(r"₹|\bINR\b", s))
        usd = bool(re.search(r"\$|\bUSD\b", s))
        if inr != usd:
            out.append(f"G15 {'INR' if inr else 'USD'} only: \"{s[:60].strip()}…\"")

    # G07 — word band and per-section band.
    n = len(words(prose))
    lo = int(word_band[0] * 0.8)
    if n < lo or n > word_band[1]:
        out.append(f"G07 {n} words (band {word_band[0]}–{word_band[1]}, floor {lo})")
    if not 4 <= len(h2s) <= 10:
        out.append(f"G07 {len(h2s)} H2s (need 4-10)")
    for h, _, t in h2s:
        c = len(words(t))
        if c < section_band[0] or c > section_band[1]:
            out.append(f"G07 H2 \"{h}\" {c} words (band {section_band[0]}–{section_band[1]})")

    # G06 — the opening paragraph carries a number and stays under 80 words.
    para = next((p.strip() for p in re.split(r"\n\s*\n", lead) if words(p)), "")
    pw = len(words(para))
    if pw > 80:
        out.append(f"G06 opening paragraph {pw} words (max 80)")
    if not re.search(r"\d", para):
        out.append("G06 opening paragraph carries no number")
    return out
