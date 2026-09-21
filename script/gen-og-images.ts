/**
 * Generates one 1200x630 Open Graph card per route into client/public/og/.
 *
 * Every page previously shared the same og-image.png, so every case study and
 * blog post rendered an identical card on LinkedIn and X. These cards carry the
 * page's own title, its section, and — for case studies — a real metric taken
 * verbatim from the page.
 *
 * The PNGs are committed rather than generated during the Vercel build, because
 * resvg renders text with system fonts: a build image without them would emit
 * 100 silently blank cards. Generating here and committing keeps the deploy
 * font-independent.
 *
 * Run after changing any page title:  tsx script/gen-og-images.ts
 */
import { Resvg } from "@resvg/resvg-js";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import {
  getAllRoutePaths,
  STATIC_ROUTES,
  WORK_STORY_SLUGS,
  CASE_STUDY_TOPICS,
  ogImagePath,
} from "../shared/seo-data";
import { PAGE_SEO } from "../shared/seo-meta";
import { caseStudies } from "../client/src/data/caseStudies";
import { CASE_STUDY_METRICS } from "../client/src/data/case-study-metrics";

const W = 1200;
const H = 630;
const LEFT = 82;
const RIGHT_EDGE = 1120;
const FONTS = "Liberation Sans, DejaVu Sans, Arial, Helvetica, sans-serif";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/—/g, "&#8212;")
    .replace(/·/g, "&#183;");
}

/**
 * SVG has no text wrapping, so lines are broken here. Width is estimated from
 * an average glyph width for bold sans — good enough to keep lines inside the
 * card, which is all that matters at this size.
 */
function wrapLines(text: string, fontSize: number, maxWidth: number): string[] {
  const perChar = fontSize * 0.545;
  const maxChars = Math.max(8, Math.floor(maxWidth / perChar));
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxChars) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Largest size at which the title fits the available lines. Cards carrying a
 *  metric start smaller, so the title cannot run into the metric block. */
function fitTitle(title: string, maxLines: number, sizes: number[]) {
  for (const size of sizes) {
    const lines = wrapLines(title, size, RIGHT_EDGE - LEFT);
    if (lines.length <= maxLines) return { size, lines };
  }
  const size = sizes[sizes.length - 1];
  return { size, lines: wrapLines(title, size, RIGHT_EDGE - LEFT).slice(0, maxLines) };
}

interface Card {
  eyebrow: string;
  title: string;
  metric?: { value: string; label: string };
}

function buildSvg(card: Card): string {
  const hasMetric = Boolean(card.metric);
  const maxLines = 3;
  const { size, lines } = fitTitle(
    card.title,
    maxLines,
    hasMetric ? [58, 52, 46, 41, 37] : [70, 62, 56, 50, 45, 40]
  );
  const lineHeight = Math.round(size * 1.18);

  // With a metric the title is top-anchored so it can never run into the metric
  // block below it; without one it is centred in the space above the footer.
  const blockTop = 200;
  const blockH = lines.length * lineHeight;
  let y = hasMetric
    ? blockTop + size
    : blockTop + Math.max(0, (500 - blockTop - blockH) / 2) + size;

  const titleTspans = lines
    .map((l) => {
      const t = `<text x="${LEFT}" y="${Math.round(y)}" font-family="${FONTS}" font-size="${size}" font-weight="700" fill="#FFFFFF">${esc(l)}</text>`;
      y += lineHeight;
      return t;
    })
    .join("\n  ");

  let metricBlock = "";
  if (card.metric) {
    const value = esc(card.metric.value);
    const label = esc(card.metric.label);
    // Bold digits and '%' run wider than the 0.545 average used for wrapping.
    const valueWidth = Math.round(value.length * 46 * 0.6);
    metricBlock = `
  <rect x="${LEFT}" y="452" width="8" height="58" rx="4" fill="#2563EB"/>
  <text x="${LEFT + 26}" y="496" font-family="${FONTS}" font-size="46" font-weight="700" fill="#60A5FA">${value}</text>
  <text x="${LEFT + 26 + valueWidth + 20}" y="496" font-family="${FONTS}" font-size="27" font-weight="500" fill="#94A3B8">${label}</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1220"/>
      <stop offset="100%" stop-color="#111C33"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="16" height="${H}" fill="#2563EB"/>
  <text x="${LEFT}" y="118" font-family="${FONTS}" font-size="26" font-weight="600" letter-spacing="5" fill="#60A5FA">${esc(card.eyebrow.toUpperCase())}</text>
  ${titleTspans}${metricBlock}
  <rect x="${LEFT}" y="556" width="${RIGHT_EDGE - LEFT}" height="1" fill="#1E293B"/>
  <text x="${LEFT}" y="595" font-family="${FONTS}" font-size="25" font-weight="500" fill="#94A3B8">Yogesh Yadav &#183; Product Growth &amp; Monetisation Consultant</text>
</svg>`;
}

/** Blog titles live in blog-data.ts, which imports image assets and so cannot
 *  be imported from a plain script. The entries are flat, so parse them. */
function blogCards(): Map<string, Card> {
  const src = readFileSync("client/src/lib/blog-data.ts", "utf8");
  const map = new Map<string, Card>();
  const re = /slug:\s*"([a-z0-9-]+)",\s*title:\s*"((?:[^"\\]|\\.)*)"[\s\S]*?category:\s*"([^"]+)"/g;
  for (const m of src.matchAll(re)) {
    const [, slug, title, category] = m;
    map.set(`/blog/${slug}`, {
      eyebrow: `Article · ${category}`,
      title: title.replace(/\\"/g, '"'),
    });
  }
  return map;
}

function cardFor(routePath: string, blog: Map<string, Card>): Card {
  if (routePath === "/") {
    return { eyebrow: "pmyogesh.com", title: "Product Growth & Monetisation Consultant" };
  }
  if (blog.has(routePath)) return blog.get(routePath)!;

  if (routePath.startsWith("/case-study/")) {
    const slug = routePath.replace("/case-study/", "");
    const study = caseStudies.find((c) => c.slug === slug);
    const metric = (CASE_STUDY_METRICS[slug] ?? [])[0];
    return {
      eyebrow: `Case Study · ${study?.category ?? "Product"}`,
      title: study?.title ?? PAGE_SEO[routePath]?.title ?? slug,
      metric,
    };
  }
  if (routePath.startsWith("/case-studies/")) {
    const topic = CASE_STUDY_TOPICS.find((t) => `/case-studies/${t.slug}` === routePath);
    const count = caseStudies.filter((c) => c.category === topic?.category).length;
    return {
      eyebrow: "Case Studies",
      title: `${topic?.category} case studies`,
      metric: { value: String(count), label: "studies with real numbers" },
    };
  }
  if (routePath.startsWith("/work/")) {
    const slug = routePath.replace("/work/", "");
    const title = (PAGE_SEO[routePath]?.title ?? slug).replace(/\s*\|\s*Yogesh Yadav\s*$/, "");
    return { eyebrow: "Company Story", title };
  }

  const isStatic = STATIC_ROUTES.some((r) => r.path === routePath);
  const title = (PAGE_SEO[routePath]?.title ?? routePath).replace(/\s*\|\s*Yogesh Yadav\s*$/, "");
  return { eyebrow: isStatic ? "pmyogesh.com" : "pmyogesh.com", title };
}

export function genOgImages() {
  const blog = blogCards();
  const routes = getAllRoutePaths();
  let written = 0;
  let blank = 0;

  for (const route of routes) {
    const card = cardFor(route, blog);
    const svg = buildSvg(card);
    const png = new Resvg(svg, {
      fitTo: { mode: "width", value: W },
      font: { loadSystemFonts: true, defaultFontFamily: "Liberation Sans" },
    })
      .render()
      .asPng();

    // A card with no glyphs compresses to almost nothing — catch a fontless
    // environment loudly instead of shipping 100 blank images.
    if (png.length < 12000) blank++;

    const out = path.resolve("client/public" + ogImagePath(route));
    mkdirSync(path.dirname(out), { recursive: true });
    writeFileSync(out, png);
    written++;
  }

  if (blank > 0) {
    throw new Error(
      `[og-images] ${blank}/${written} cards rendered suspiciously small — fonts are probably missing. Refusing to ship blank cards.`
    );
  }
  console.log(`[og-images] wrote ${written} cards to client/public/og/`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genOgImages();
}
