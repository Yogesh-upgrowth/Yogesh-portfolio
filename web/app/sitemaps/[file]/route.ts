/**
 * Per-hub sitemap at /sitemaps/<hub>.xml.
 *
 * The dynamic segment captures the whole filename including the extension —
 * a folder named "[hub].xml" makes Next type params as {}, because the segment
 * is then not purely dynamic.
 *
 * Indexable pages only, lastmod = refreshed_on, which changes only when content
 * changed (02 §8).
 */
import { indexablePages } from "@/lib/content/loader";
import { entity } from "@/lib/schema/entity";
import { hubNames, sitemapConfig } from "@/lib/seo/hubs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return hubNames().map((hub) => ({ file: `${hub}.xml` }));
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ file: string }> },
): Promise<Response> {
  const { file } = await ctx.params;
  const hub = file.replace(/\.xml$/, "");
  const site = entity().site;
  const cfg = sitemapConfig();

  if (!hubNames().includes(hub)) {
    return new Response("Not found", { status: 404 });
  }

  const urls = indexablePages()
    .filter((p) => p.meta.hub === hub)
    .slice(0, cfg.max_urls_per_file)
    .map(
      (p) =>
        `  <url>\n    <loc>${site}${p.meta.url}</loc>\n` +
        `    <lastmod>${p.meta.refreshed_on}</lastmod>\n  </url>`,
    );

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join("\n") + (urls.length ? "\n" : "") + `</urlset>\n`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
