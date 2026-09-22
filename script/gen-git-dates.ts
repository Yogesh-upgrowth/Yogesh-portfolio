/**
 * Build-time generator for shared/git-dates.json — a map of route path -> the
 * ISO commit date of that page's source/content file, used for sitemap <lastmod>,
 * schema dateModified, and the visible "Last updated" date.
 *
 * Dates are read from real git history (git log -1 --format=%cI -- <file>), so a
 * page's date only moves when its content actually changes. Runs at the start of
 * the build (see script/build.ts) and can be run standalone: tsx script/gen-git-dates.ts
 */
import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import {
  STATIC_ROUTES,
  WORK_STORY_SLUGS,
  CASE_STUDY_SLUGS,
  BLOG_SLUGS,
  CASE_STUDY_TOPICS,
} from "../shared/seo-data";
import { SERVICE_SLUGS } from "../shared/services";

const PAGES = "client/src/pages";
const LIB = "client/src/lib";

const STATIC_SOURCE: Record<string, string> = {
  "/": `${PAGES}/home.tsx`,
  "/work": `${PAGES}/work.tsx`,
  "/case-studies": `${PAGES}/case-studies.tsx`,
  "/blog": `${PAGES}/blog.tsx`,
  "/contact": `${PAGES}/contact.tsx`,
  "/product-growth-score": `${PAGES}/growth-score.tsx`,
};

/** Parse case-study.tsx: slug -> content component file (@/pages/<file>). */
function caseStudySourceMap(): Record<string, string> {
  const src = readFileSync(`${PAGES}/case-study.tsx`, "utf8");
  const lazy: Record<string, string> = {};
  for (const m of src.matchAll(
    /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("@\/pages\/([^"]+)"\)\)/g
  )) {
    lazy[m[1]] = `${PAGES}/${m[2]}.tsx`;
  }
  const map: Record<string, string> = {};
  for (const m of src.matchAll(/"([a-z0-9-]+)":\s*(\w+)\b/g)) {
    const [, slug, comp] = m;
    if (lazy[comp]) map[slug] = lazy[comp]; // ignores tocMap (values aren't lazy comps)
  }
  return map;
}

/** Scan blog content files for the slug keys each one defines. */
function blogSourceMap(): Record<string, string> {
  const files = [
    "blog-content.ts",
    "blog-content-pm-fundamentals.ts",
    "blog-content-pm-strategy.ts",
    "blog-content-data-driven.ts",
    "blog-content-ai-pm.ts",
    "blog-content-growth.ts",
    "blog-content-execution.ts",
    "blog-content-career.ts",
  ];
  const map: Record<string, string> = {};
  for (const f of files) {
    const full = `${LIB}/${f}`;
    if (!existsSync(full)) continue;
    const src = readFileSync(full, "utf8");
    for (const m of src.matchAll(/^\s*"([a-z0-9-]+)":\s*`/gm)) {
      if (!map[m[1]]) map[m[1]] = full;
    }
  }
  return map;
}

function gitDate(file: string, fallback: string): string {
  if (!existsSync(file)) return fallback;
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      encoding: "utf8",
    }).trim();
    return out || fallback;
  } catch {
    return fallback;
  }
}

export function genGitDates(): Record<string, string> {
  // Repo HEAD date is the fallback for anything without its own history.
  let headDate: string;
  try {
    headDate = execSync("git log -1 --format=%cI", { encoding: "utf8" }).trim();
  } catch {
    headDate = "2026-01-01T00:00:00+00:00";
  }

  const csMap = caseStudySourceMap();
  const blogMap = blogSourceMap();
  const dates: Record<string, string> = {};

  for (const r of STATIC_ROUTES) {
    dates[r.path] = gitDate(STATIC_SOURCE[r.path], headDate);
  }
  // Topic hubs are driven by the hub component plus the case-study data they list.
  for (const t of CASE_STUDY_TOPICS) {
    dates[`/case-studies/${t.slug}`] = gitDate(
      `${PAGES}/case-study-topic.tsx`,
      headDate
    );
  }
  for (const slug of SERVICE_SLUGS) {
    dates[`/consulting/${slug}`] = gitDate("shared/services.ts", headDate);
  }
  for (const slug of WORK_STORY_SLUGS) {
    dates[`/work/${slug}`] = gitDate(`${PAGES}/story-${slug}.tsx`, headDate);
  }
  for (const slug of CASE_STUDY_SLUGS) {
    dates[`/case-study/${slug}`] = gitDate(
      csMap[slug] ?? `${PAGES}/case-study.tsx`,
      headDate
    );
  }
  for (const slug of BLOG_SLUGS) {
    // Posts without a dedicated content file fall back to the blog data file.
    dates[`/blog/${slug}`] = gitDate(
      blogMap[slug] ?? `${LIB}/blog-data.ts`,
      headDate
    );
  }

  const outFile = path.resolve("shared/git-dates.json");
  writeFileSync(outFile, JSON.stringify(dates, null, 2) + "\n", "utf8");
  const distinct = new Set(Object.values(dates)).size;
  console.log(
    `[git-dates] wrote ${Object.keys(dates).length} entries (${distinct} distinct dates) to shared/git-dates.json`
  );
  return dates;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genGitDates();
}
