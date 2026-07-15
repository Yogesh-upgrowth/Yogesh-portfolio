/**
 * Build-time sitemap generator. Emits dist/public/sitemap.xml with exactly one
 * entry per route (no duplicates) and a real per-page <lastmod> taken from
 * shared/git-dates.json. No changefreq / priority.
 */
import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { SITE_URL, getAllRoutePaths } from "../shared/seo-data";

export function genSitemap() {
  const dates: Record<string, string> = JSON.parse(
    readFileSync(path.resolve("shared/git-dates.json"), "utf8")
  );

  const paths = getAllRoutePaths();
  const body = paths
    .map((p) => {
      const loc = `${SITE_URL}${p}`;
      const lastmod = (dates[p] ?? "").slice(0, 10);
      return `  <url>\n    <loc>${loc}</loc>${
        lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""
      }\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  const out = path.resolve("dist/public/sitemap.xml");
  writeFileSync(out, xml, "utf8");
  console.log(`[sitemap] wrote ${paths.length} urls to dist/public/sitemap.xml`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genSitemap();
}
