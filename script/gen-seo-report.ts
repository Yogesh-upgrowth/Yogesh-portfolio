/**
 * Generates seo-content-report.md from the prerendered HTML in dist/public.
 * Reports word count per page, thin-content (<300 words) flags, pages whose
 * copy never mentions their target keyword, and case studies missing concrete
 * metrics. It never modifies page content — thin pages are reported, not padded.
 *
 * Run after a build:  tsx script/gen-seo-report.ts
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import { getAllRoutePaths } from "../shared/seo-data";
import { PAGE_SEO } from "../shared/seo-meta";
import { CASE_STUDY_METRICS } from "../client/src/data/case-study-metrics";

const PUBLIC_DIR = path.resolve("dist/public");

function fileFor(routePath: string): string {
  if (routePath === "/") return path.join(PUBLIC_DIR, "index.html");
  return path.join(PUBLIC_DIR, routePath.replace(/^\/+/, ""), "index.html");
}

/**
 * Extract visible content text from a prerendered page: take <body>, drop
 * boilerplate (nav/header/footer/script/style/svg), then strip tags. This is
 * robust to layouts where the article isn't wholly inside <main>.
 */
function mainText(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;
  body = body
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ");
  return body
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;|&#38;/gi, " and ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text: string): number {
  return text ? text.split(/\s+/).length : 0;
}

/** First <h1> on the page, tags stripped. */
function h1Of(html: string): string {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return m ? m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
}

/** Words too common to carry topical signal when matching a keyword. */
const STOP = new Set([
  "a", "an", "and", "at", "for", "from", "in", "of", "on", "or", "the", "to", "with",
]);

function contentTokens(keyword: string): string[] {
  return norm(keyword).split(" ").filter((t) => t && !STOP.has(t));
}

/** Normalize for keyword matching: lowercase, & -> and, strip punctuation. */
function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function main() {
  const rows: { path: string; words: number; keyword: string; hasKeyword: boolean; inH1: number; inBody: number }[] = [];
  const missingFile: string[] = [];

  for (const p of getAllRoutePaths()) {
    const f = fileFor(p);
    if (!existsSync(f)) {
      missingFile.push(p);
      continue;
    }
    const html = readFileSync(f, "utf8");
    const text = mainText(html);
    const words = wordCount(text);
    const keyword = PAGE_SEO[p]?.keyword ?? "";

    // Exact-phrase presence is a weak, often misleading test: real copy says
    // "insurance funnel" and "conversion", not the stitched-together phrase.
    // What actually matters is whether the H1 — the page's strongest on-page
    // signal — carries the keyword's content words.
    const tokens = contentTokens(keyword);
    const nH1 = norm(h1Of(html));
    const nText = norm(text);
    const exact = keyword ? nText.includes(norm(keyword)) : true;
    const inH1 = tokens.length
      ? tokens.filter((t) => nH1.includes(t)).length / tokens.length
      : 1;
    const inBody = tokens.length
      ? tokens.filter((t) => nText.includes(t)).length / tokens.length
      : 1;
    rows.push({ path: p, words, keyword, hasKeyword: exact, inH1, inBody });
  }

  const thin = rows.filter((r) => r.words < 300).sort((a, b) => a.words - b.words);
  const noKeyword = rows.filter((r) => r.keyword && !r.hasKeyword);
  // Real misalignment: the H1 carries under half the keyword's content words.
  const weakH1 = rows
    .filter((r) => r.keyword && r.inH1 < 0.5)
    .sort((a, b) => a.inH1 - b.inH1);
  // Worse: the keyword's terms barely appear anywhere on the page.
  const offTopic = rows.filter((r) => r.keyword && r.inBody < 0.5);
  const csThinMetrics = getAllRoutePaths()
    .filter((p) => p.startsWith("/case-study/"))
    .map((p) => ({ path: p, n: (CASE_STUDY_METRICS[p.replace("/case-study/", "")] ?? []).length }))
    .filter((x) => x.n < 3);

  const total = rows.length;
  const median = [...rows].sort((a, b) => a.words - b.words)[Math.floor(total / 2)]?.words ?? 0;

  let md = `# SEO Content Report\n\n`;
  md += `_Generated from the prerendered HTML in \`dist/public\`. This report is diagnostic only — thin pages are flagged for you to rewrite, never auto-padded._\n\n`;
  md += `- Pages analyzed: **${total}**\n`;
  md += `- Median word count: **${median}**\n`;
  md += `- Thin pages (<300 words): **${thin.length}**\n`;
  md += `- Pages whose H1 misses most of the keyword's terms: **${weakH1.length}**\n`;
  md += `- Pages whose copy barely covers the keyword at all: **${offTopic.length}**\n`;
  md += `- Pages missing the exact keyword phrase (weak signal, FYI): **${noKeyword.length}**\n`;
  md += `- Case studies with fewer than 3 concrete metrics: **${csThinMetrics.length}**\n\n`;

  md += `## Thin content (<300 words) — rewrite candidates\n\n`;
  md += thin.length
    ? `| Page | Words |\n|---|---|\n` + thin.map((r) => `| \`${r.path}\` | ${r.words} |`).join("\n") + "\n\n"
    : `_None._\n\n`;

  md += `## Keyword/H1 misalignment — fix the H1 or retarget the keyword\n\n`;
  md += `_The H1 is the page's strongest on-page signal. A keyword whose terms are absent\nfrom it is either the wrong target for this page, or the H1 needs rewriting._\n\n`;
  md += weakH1.length
    ? `| Page | Target keyword | Keyword terms in H1 | H1 |\n|---|---|---|---|\n` +
      weakH1
        .map((r) => `| \`${r.path}\` | ${r.keyword} | ${Math.round(r.inH1 * 100)}% | ${h1Of(readFileSync(fileFor(r.path), "utf8")).slice(0, 70)} |`)
        .join("\n") + "\n\n"
    : `_None — every page's H1 carries its keyword._\n\n`;

  md += `## Pages barely covering their keyword anywhere in copy\n\n`;
  md += offTopic.length
    ? `| Page | Target keyword | Keyword terms in copy |\n|---|---|---|\n` +
      offTopic.map((r) => `| \`${r.path}\` | ${r.keyword} | ${Math.round(r.inBody * 100)}% |`).join("\n") + "\n\n"
    : `_None._\n\n`;

  md += `## Case studies missing concrete metrics (<3)\n\n`;
  md += csThinMetrics.length
    ? `| Case study | Metrics found |\n|---|---|\n` +
      csThinMetrics.map((x) => `| \`${x.path}\` | ${x.n} |`).join("\n") + "\n\n"
    : `_None — every case study has 3+ metrics._\n\n`;

  md += `## Full word-count table\n\n`;
  md += `| Page | Words | Keyword in H1 | Keyword in copy | Exact phrase |\n|---|---|---|---|---|\n`;
  md += rows
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((r) => `| \`${r.path}\` | ${r.words} | ${Math.round(r.inH1 * 100)}% | ${Math.round(r.inBody * 100)}% | ${r.hasKeyword ? "yes" : "no"} |`)
    .join("\n");
  md += "\n";

  if (missingFile.length) {
    md += `\n## Not built (investigate)\n\n` + missingFile.map((p) => `- \`${p}\``).join("\n") + "\n";
  }

  writeFileSync(path.resolve("seo-content-report.md"), md, "utf8");
  console.log(
    `[seo-report] ${total} pages | ${thin.length} thin | ${weakH1.length} weak-H1 | ${offTopic.length} off-topic | ${csThinMetrics.length} metric-light case studies`
  );
}

main();
