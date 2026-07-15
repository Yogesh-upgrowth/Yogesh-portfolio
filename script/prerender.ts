import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import {
  getAllRoutePaths,
  BLOG_SLUGS,
  CASE_STUDY_SLUGS,
} from "../shared/seo-data";
import type { RenderResult } from "../client/src/entry-server";

const PUBLIC_DIR = path.resolve("dist/public");
const SERVER_ENTRY = path.resolve("dist/server/entry-server.js");
const NOT_FOUND_ROUTE = "/__prerender_404__";

type ServerModule = {
  render: (url: string) => Promise<RenderResult>;
  getDataSlugs: () => { blog: string[]; caseStudy: string[] };
};

/** Fail the build if the sitemap/slug registry has drifted from real content. */
function validateRegistry(mod: ServerModule) {
  const data = mod.getDataSlugs();
  const problems: string[] = [];

  const diff = (label: string, registry: string[], actual: string[]) => {
    const reg = new Set(registry);
    const act = new Set(actual);
    for (const s of actual) if (!reg.has(s)) problems.push(`${label}: "${s}" exists in content data but is missing from the registry in shared/seo-data.ts`);
    for (const s of registry) if (!act.has(s)) problems.push(`${label}: "${s}" is in the registry but has no matching content (would 404)`);
  };

  diff("blog", BLOG_SLUGS, data.blog);
  diff("case-study", CASE_STUDY_SLUGS, data.caseStudy);

  if (problems.length) {
    throw new Error(
      "Route registry is out of sync with content data:\n  - " +
        problems.join("\n  - ") +
        "\nUpdate shared/seo-data.ts (BLOG_SLUGS / CASE_STUDY_SLUGS) to match."
    );
  }
}

/** Convert a route path to its directory-style output file under dist/public. */
function outputFileFor(routePath: string): string {
  if (routePath === "/") return path.join(PUBLIC_DIR, "index.html");
  const clean = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(PUBLIC_DIR, clean, "index.html");
}

function buildHtml(template: string, r: RenderResult): string {
  let html = template
    .replace("<!--ssr-head-->", r.head)
    .replace("<!--ssr-outlet-->", r.html);
  if (r.bodyAttributes) {
    html = html.replace("<body>", `<body ${r.bodyAttributes}>`);
  }
  return html;
}

export async function prerender() {
  const template = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf8");

  if (!template.includes("<!--ssr-outlet-->") || !template.includes("<!--ssr-head-->")) {
    throw new Error(
      "dist/public/index.html is missing <!--ssr-outlet--> / <!--ssr-head--> placeholders."
    );
  }

  const mod: ServerModule = await import(pathToFileURL(SERVER_ENTRY).href);
  validateRegistry(mod);

  const routes = getAllRoutePaths();
  console.log(`[prerender] rendering ${routes.length} routes...`);

  let ok = 0;
  for (const route of routes) {
    const result = await mod.render(route);
    const outFile = outputFileFor(route);
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, buildHtml(template, result), "utf8");
    ok++;
  }

  // Real 404 page (an unmatched route renders <NotFound/>, not the app shell).
  const notFound = await mod.render(NOT_FOUND_ROUTE);
  await writeFile(path.join(PUBLIC_DIR, "404.html"), buildHtml(template, notFound), "utf8");

  console.log(`[prerender] wrote ${ok} routes + 404.html to dist/public`);
}

// Allow running standalone: `tsx script/prerender.ts`
if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  prerender().catch((err) => {
    console.error("[prerender] failed:", err);
    process.exit(1);
  });
}
