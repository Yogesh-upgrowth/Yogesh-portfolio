/**
 * Prose extraction for the text gates.
 *
 * Gates measure the reader's page, not the source file — so component tags,
 * code fences and the Sources block come out before anything is counted.
 * Getting this wrong makes every downstream gate wrong, which is why it lives
 * in one place with its own tests.
 */

/** Blocks whose text is rendered from meta, not authored prose. */
const RENDERED_FROM_META = ["Sources", "FAQ", "Changelog", "AuthorBox", "Breadcrumbs"];

export interface Section {
  heading: string;
  level: number;
  words: number;
  text: string;
}

/** Strip code fences, component tags and meta-rendered blocks. */
export function toProse(mdx: string): string {
  let s = mdx.replace(/```[\s\S]*?```/g, " ").replace(/`[^`\n]*`/g, " ");
  // Self-closing and paired component tags, plus the text inside meta-rendered ones.
  for (const tag of RENDERED_FROM_META) {
    s = s.replace(new RegExp(`<${tag}\\b[^>]*/>`, "g"), " ");
    s = s.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?</${tag}>`, "g"), " ");
  }
  s = s.replace(/<\/?[A-Z][A-Za-z0-9]*\b[^>]*>/g, " ");
  // Markdown syntax that is not words.
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, " ");
  s = s.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
  s = s.replace(/^\s*>\s?/gm, "");
  s = s.replace(/^\s*[-*+]\s+/gm, "");
  s = s.replace(/[*_~]{1,3}/g, "");
  return s;
}

export function words(text: string): string[] {
  return text.split(/\s+/).filter((w) => /[A-Za-z0-9₹$%]/.test(w));
}

export function wordCount(text: string): number {
  return words(text).length;
}

/** H2/H3 sections with their word counts. Prose before the first heading is
 *  returned as the lead. */
export function sections(mdx: string): { lead: string; sections: Section[] } {
  const prose = toProse(mdx);
  const lines = prose.split("\n");
  const out: Section[] = [];
  let lead: string[] = [];
  let cur: { heading: string; level: number; buf: string[] } | null = null;

  const flush = () => {
    if (!cur) return;
    const text = cur.buf.join("\n").trim();
    out.push({ heading: cur.heading, level: cur.level, words: wordCount(text), text });
  };

  for (const line of lines) {
    const m = /^(#{2,3})\s+(.*)$/.exec(line.trim());
    if (m) {
      flush();
      cur = { heading: (m[2] ?? "").trim(), level: (m[1] ?? "##").length, buf: [] };
      continue;
    }
    if (cur) cur.buf.push(line);
    else lead.push(line);
  }
  flush();
  return { lead: lead.join("\n").trim(), sections: out };
}

/** The first paragraph of the lead — what G06 judges. */
export function firstParagraph(mdx: string): string {
  const { lead } = sections(mdx);
  const para = lead.split(/\n\s*\n/).map((p) => p.trim()).find((p) => wordCount(p) > 0);
  return para ?? "";
}

export function sentences(text: string): string[] {
  return text
    .replace(/\n+/g, " ")
    // Don't split on decimals, abbreviations or currency amounts.
    .split(/(?<![A-Z0-9])(?<!\b[A-Z])[.!?]+(?=\s+[A-Z"'(]|\s*$)/)
    .map((s) => s.trim())
    .filter((s) => wordCount(s) > 0);
}

/**
 * Flesch–Kincaid grade level. Syllable counting is heuristic — every
 * implementation's is — so the threshold is treated as a band, not a cliff.
 */
export function fleschKincaidGrade(text: string): number {
  const sents = sentences(text);
  const ws = words(text);
  if (!sents.length || !ws.length) return 0;
  const syllables = ws.reduce((n, w) => n + countSyllables(w), 0);
  return 0.39 * (ws.length / sents.length) + 11.8 * (syllables / ws.length) - 15.59;
}

export function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 1;
  if (w.length <= 3) return 1;
  const trimmed = w
    .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
    .replace(/^y/, "");
  const groups = trimmed.match(/[aeiouy]{1,2}/g);
  return Math.max(1, groups ? groups.length : 1);
}

/** Passive-voice heuristic: a form of "to be" followed by a past participle. */
const BE = /\b(?:am|is|are|was|were|be|been|being)\b/i;
const PARTICIPLE = /\b\w+(?:ed|en|own|ade|ought|uilt|old)\b/i;

export function passiveShare(text: string): number {
  const sents = sentences(text);
  if (!sents.length) return 0;
  let n = 0;
  for (const s of sents) {
    const m = BE.exec(s);
    if (!m) continue;
    const after = s.slice(m.index + m[0].length, m.index + m[0].length + 40);
    if (PARTICIPLE.test(after)) n++;
  }
  return n / sents.length;
}
