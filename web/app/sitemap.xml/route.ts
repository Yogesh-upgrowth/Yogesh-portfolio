/**
 * Sitemap index — one child per hub (03 §5). Only hubs that actually have an
 * indexable page appear; an empty sitemap is a crawl budget request for nothing.
 */
import { indexablePages } from "@/lib/content/loader";
import { entity } from "@/lib/schema/entity";
import { hubNames, sitemapConfig } from "@/lib/seo/hubs";

export const dynamic = "force-static";

export function GET(): Response {
  const site = entity().site;
  const pages = indexablePages();
  const cfg = sitemapConfig();

  const live = hubNames().filter((hub) => pages.some((p) => p.meta.hub === hub));
  const entries = live.map((hub) => {
    const newest = pages
      .filter((p) => p.meta.hub === hub)
      .map((p) => p.meta.refreshed_on)
      .sort()
      .at(-1);
    return `  <sitemap>\n    <loc>${site}${cfg.files[hub]}</loc>` +
      (newest ? `\n    <lastmod>${newest}</lastmod>` : "") +
      `\n  </sitemap>`;
  });

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries.join("\n") + `\n</sitemapindex>\n`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
