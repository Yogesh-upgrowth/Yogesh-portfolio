/**
 * Build-time RSS 2.0 feed at dist/public/feed.xml.
 *
 * The site had no feed at all — only sitemap.xml, which is for crawlers, not
 * readers. Without a feed nothing can syndicate the writing: no RSS reader,
 * newsletter tool or aggregator can follow it.
 *
 * Carries blog posts and case studies together, newest first, so a subscriber
 * gets the case-study work too rather than only the blog.
 */
import { writeFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, ogImageUrl } from "../shared/seo-data";
import { readBlogIndex } from "./lib/blog-index";
import { caseStudies } from "../client/src/data/caseStudies";

interface Item {
  path: string;
  title: string;
  description: string;
  category: string;
  date: Date;
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** RFC-822, which is what RSS 2.0 requires for pubDate. */
function rfc822(d: Date): string {
  return d.toUTCString();
}

function parseDate(input: string): Date {
  const d = new Date(input);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

export function genFeed() {
  const items: Item[] = [
    ...readBlogIndex().map((p) => ({
      path: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      category: p.category,
      date: parseDate(p.date),
    })),
    ...caseStudies.map((c) => ({
      path: `/case-study/${c.slug}`,
      title: c.title,
      description: c.description,
      category: `Case Study: ${c.category}`,
      date: parseDate(c.date),
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  const body = items
    .map((it) => {
      const url = `${SITE_URL}${it.path}`;
      return `    <item>
      <title>${esc(it.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(it.description)}</description>
      <category>${esc(it.category)}</category>
      <pubDate>${rfc822(it.date)}</pubDate>
      <enclosure url="${esc(ogImageUrl(it.path))}" type="image/png" length="0"/>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE_NAME)} — ${esc(SITE_TAGLINE)}</title>
    <link>${SITE_URL}/</link>
    <description>Essays and case studies on product growth, monetisation, fintech and SEO strategy — with the numbers attached.</description>
    <language>en-us</language>
    <lastBuildDate>${rfc822(new Date())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${body}
  </channel>
</rss>
`;

  const out = path.resolve("dist/public/feed.xml");
  writeFileSync(out, xml, "utf8");
  console.log(`[feed] wrote ${items.length} items to dist/public/feed.xml`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genFeed();
}
