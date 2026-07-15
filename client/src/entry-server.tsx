import { prerenderToNodeStream } from "react-dom/static";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import type { Readable } from "node:stream";
import App from "./App";
import { BLOG_POSTS } from "./lib/blog-data";
import { caseStudies } from "./data/caseStudies";

/**
 * The slugs that the app can actually render, read from the real content data.
 * The prerenderer cross-checks these against the registry in shared/seo-data.ts
 * and fails the build on any drift, so a new page can never silently ship
 * unprerendered or unlisted in the sitemap.
 */
export function getDataSlugs(): { blog: string[]; caseStudy: string[] } {
  return {
    blog: BLOG_POSTS.map((p) => p.slug),
    caseStudy: caseStudies.map((c) => c.slug),
  };
}

// On the server there is no DOM, so Helmet must collect tags into the provided
// context object instead of trying to write them to document.head.
(HelmetProvider as unknown as { canUseDOM: boolean }).canUseDOM = false;

export interface HelmetState {
  title?: { toString(): string };
  meta?: { toString(): string };
  link?: { toString(): string };
  script?: { toString(): string };
  htmlAttributes?: { toString(): string };
  bodyAttributes?: { toString(): string };
}

export interface RenderResult {
  html: string;
  head: string;
  htmlAttributes: string;
  bodyAttributes: string;
}

function streamToString(stream: Readable): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}

/**
 * Render a single route to fully-resolved static HTML plus the head tags that
 * its <Seo> component (via react-helmet-async) produced. Suspense/lazy routes
 * are fully resolved because prerenderToNodeStream waits for `allReady`.
 */
export async function render(url: string): Promise<RenderResult> {
  const helmetContext: { helmet?: HelmetState } = {};

  const { prelude } = await prerenderToNodeStream(
    <HelmetProvider context={helmetContext}>
      <Router ssrPath={url}>
        <App />
      </Router>
    </HelmetProvider>
  );

  const html = await streamToString(prelude as unknown as Readable);
  const h = helmetContext.helmet;

  const head = [
    h?.title?.toString() ?? "",
    h?.meta?.toString() ?? "",
    h?.link?.toString() ?? "",
    h?.script?.toString() ?? "",
  ]
    .filter(Boolean)
    .join("\n    ");

  return {
    html,
    head,
    htmlAttributes: h?.htmlAttributes?.toString() ?? "",
    bodyAttributes: h?.bodyAttributes?.toString() ?? "",
  };
}
