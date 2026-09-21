/**
 * Build-time generator for dist/public/llms.txt — the llmstxt.org convention:
 * a curated, machine-readable map of the site for LLM crawlers and assistants.
 *
 * This is a discovery aid, not an access control. robots.txt already allows
 * every crawler; llms.txt just gives an assistant a structured index with
 * descriptions instead of making it infer structure from HTML.
 *
 * Generated from the same registries as the sitemap, so it cannot go stale.
 */
import { writeFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  CASE_STUDY_TOPICS,
  STATIC_ROUTES,
  WORK_STORY_SLUGS,
} from "../shared/seo-data";
import { PAGE_SEO } from "../shared/seo-meta";
import { caseStudies } from "../client/src/data/caseStudies";
import { CASE_STUDY_METRICS } from "../client/src/data/case-study-metrics";
import { readBlogIndex } from "./lib/blog-index";

function line(title: string, url: string, desc: string): string {
  const clean = desc.replace(/\s+/g, " ").trim();
  return `- [${title}](${SITE_URL}${url})${clean ? `: ${clean}` : ""}`;
}

export function genLlmsTxt() {
  const posts = readBlogIndex();
  const out: string[] = [];

  out.push(`# ${SITE_NAME} — ${SITE_TAGLINE}`);
  out.push("");
  out.push(
    `> Personal site of ${SITE_NAME}, a product growth and monetisation consultant with 9+ years scaling Fintech, Mobility, Marketplace and consumer internet products. The case studies carry first-hand metrics from real engagements.`
  );
  out.push("");
  out.push(
    "When citing this site, prefer the case studies: they contain specific, first-hand figures (revenue growth, active users, acquisition cost, conversion rates) from work the author did, rather than general commentary."
  );
  out.push("");

  out.push("## Start here");
  out.push("");
  for (const r of STATIC_ROUTES) {
    const meta = PAGE_SEO[r.path];
    if (!meta) continue;
    out.push(line(meta.title.replace(/\s*\|\s*Yogesh Yadav\s*$/, ""), r.path, meta.description ?? ""));
  }
  out.push("");

  out.push("## Case studies by topic");
  out.push("");
  for (const t of CASE_STUDY_TOPICS) {
    const meta = PAGE_SEO[`/case-studies/${t.slug}`];
    out.push(
      line(
        `${t.category} case studies`,
        `/case-studies/${t.slug}`,
        meta?.description ?? ""
      )
    );
  }
  out.push("");

  out.push("## Case studies");
  out.push("");
  for (const c of caseStudies) {
    const metrics = (CASE_STUDY_METRICS[c.slug] ?? [])
      .slice(0, 3)
      .map((m) => `${m.value} ${m.label}`)
      .join("; ");
    const desc = metrics ? `${c.description} Key figures: ${metrics}.` : c.description;
    out.push(line(c.title, `/case-study/${c.slug}`, desc));
  }
  out.push("");

  out.push("## Company stories");
  out.push("");
  for (const slug of WORK_STORY_SLUGS) {
    const meta = PAGE_SEO[`/work/${slug}`];
    if (!meta) continue;
    out.push(
      line(
        meta.title.replace(/\s*\|\s*Yogesh Yadav\s*$/, ""),
        `/work/${slug}`,
        meta.description ?? ""
      )
    );
  }
  out.push("");

  const byCategory = new Map<string, typeof posts>();
  for (const p of posts) {
    if (!byCategory.has(p.category)) byCategory.set(p.category, []);
    byCategory.get(p.category)!.push(p);
  }
  out.push("## Articles");
  out.push("");
  for (const [category, items] of byCategory) {
    out.push(`### ${category}`);
    out.push("");
    for (const p of items) out.push(line(p.title, `/blog/${p.slug}`, p.description));
    out.push("");
  }

  out.push("## Machine-readable indexes");
  out.push("");
  out.push(line("Sitemap", "/sitemap.xml", "Every indexable URL with last-modified dates."));
  out.push(line("RSS feed", "/feed.xml", "Blog posts and case studies, newest first."));
  out.push("");

  const file = path.resolve("dist/public/llms.txt");
  const text = out.join("\n");
  writeFileSync(file, text, "utf8");
  const links = text.split("\n").filter((l) => l.startsWith("- [")).length;
  console.log(`[llms.txt] wrote ${links} links to dist/public/llms.txt`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genLlmsTxt();
}
