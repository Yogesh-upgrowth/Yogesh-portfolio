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
  const rows: { path: string; words: number; keyword: string; hasKeyword: boolean }[] = [];
  const missingFile: string[] = [];

  for (const p of getAllRoutePaths()) {
    const f = fileFor(p);
    if (!existsSync(f)) {
      missingFile.push(p);
      continue;
    }
    const text = mainText(readFileSync(f, "utf8"));
    const words = wordCount(text);
    const keyword = PAGE_SEO[p]?.keyword ?? "";
    const hasKeyword = keyword ? norm(text).includes(norm(keyword)) : true;
    rows.push({ path: p, words, keyword, hasKeyword });
  }

  const thin = rows.filter((r) => r.words < 300).sort((a, b) => a.words - b.words);
  const noKeyword = rows.filter((r) => r.keyword && !r.hasKeyword);
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
  md += `- Pages missing their target keyword in copy: **${noKeyword.length}**\n`;
  md += `- Case studies with fewer than 3 concrete metrics: **${csThinMetrics.length}**\n\n`;

  md += `## Thin content (<300 words) — rewrite candidates\n\n`;
  md += thin.length
    ? `| Page | Words |\n|---|---|\n` + thin.map((r) => `| \`${r.path}\` | ${r.words} |`).join("\n") + "\n\n"
    : `_None._\n\n`;

  md += `## Pages whose copy never mentions the target keyword\n\n`;
  md += noKeyword.length
    ? `| Page | Target keyword |\n|---|---|\n` +
      noKeyword.map((r) => `| \`${r.path}\` | ${r.keyword} |`).join("\n") + "\n\n"
    : `_None._\n\n`;

  md += `## Case studies missing concrete metrics (<3)\n\n`;
  md += csThinMetrics.length
    ? `| Case study | Metrics found |\n|---|---|\n` +
      csThinMetrics.map((x) => `| \`${x.path}\` | ${x.n} |`).join("\n") + "\n\n"
    : `_None — every case study has 3+ metrics._\n\n`;

  md += `## Full word-count table\n\n`;
  md += `| Page | Words | Keyword in copy |\n|---|---|---|\n`;
  md += rows
    .sort((a, b) => a.path.localeCompare(b.path))
    .map((r) => `| \`${r.path}\` | ${r.words} | ${r.hasKeyword ? "yes" : "**no**"} |`)
    .join("\n");
  md += "\n";

  if (missingFile.length) {
    md += `\n## Not built (investigate)\n\n` + missingFile.map((p) => `- \`${p}\``).join("\n") + "\n";
  }

  writeFileSync(path.resolve("seo-content-report.md"), md, "utf8");
  console.log(
    `[seo-report] ${total} pages | ${thin.length} thin | ${noKeyword.length} keyword-absent | ${csThinMetrics.length} metric-light case studies`
  );
}

main();
