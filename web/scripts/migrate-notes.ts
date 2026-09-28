/**
 * pnpm notes:migrate — ports the PM-craft articles to /notes.
 *
 * 48 URLs redirect to /notes/* under the D1 migration, and /notes sits outside
 * the 1,017-page content system by design (00-STRATEGY §6). Without this the
 * redirects land on 404s, which is worse than not having migrated at all.
 *
 * Bodies come from the Vite app's content modules, which are plain
 * Record<slug, html>. Metadata is parsed out of blog-data.ts rather than
 * imported, because that module pulls in image assets through a Vite alias that
 * does not resolve outside Vite.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { getPostContent } from "../../client/src/lib/blog-content";

const OUT = join(process.cwd(), "notes");
const BLOG_DATA = join(process.cwd(), "..", "client", "src", "lib", "blog-data.ts");
const MIGRATION = join(process.cwd(), "..", "seo", "migration-map.csv");

interface NoteMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

/** Pull post metadata without evaluating the module's asset imports. */
function parseBlogData(): Map<string, NoteMeta> {
  const src = readFileSync(BLOG_DATA, "utf8");
  const out = new Map<string, NoteMeta>();
  const re = /\{[^{}]*?slug:\s*"([^"]+)"[\s\S]{0,900}?\}/g;
  for (const m of src.matchAll(re)) {
    const block = m[0];
    const slug = m[1]!;
    const field = (name: string) => {
      const f = new RegExp(`${name}:\\s*"((?:[^"\\\\]|\\\\.)*)"`).exec(block);
      return f?.[1]?.replace(/\\"/g, '"') ?? "";
    };
    if (out.has(slug)) continue;
    out.set(slug, {
      slug,
      title: field("title"),
      description: field("description"),
      date: field("date"),
      category: field("category"),
      readTime: field("readTime"),
    });
  }
  return out;
}

/** The slugs D1 actually sent to /notes — the only ones that need to exist. */
function notesSlugs(): string[] {
  const rows = readFileSync(MIGRATION, "utf8").split("\n").slice(1);
  const out: string[] = [];
  for (const line of rows) {
    const to = line.split(",")[1] ?? "";
    if (to.startsWith("/notes/")) out.push(to.slice("/notes/".length));
  }
  return [...new Set(out)];
}

function main(): void {
  const meta = parseBlogData();
  const wanted = notesSlugs();
  mkdirSync(OUT, { recursive: true });

  const index: NoteMeta[] = [];
  const missingBody: string[] = [];
  const missingMeta: string[] = [];

  for (const slug of wanted) {
    // getPostContent, not BLOG_CONTENT: most bodies live in the seven
    // category modules and only a handful sit in the top-level record.
    const html = getPostContent(slug);
    const m = meta.get(slug);
    if (!html) { missingBody.push(slug); continue; }
    if (!m) { missingMeta.push(slug); continue; }
    writeFileSync(join(OUT, `${slug}.html`), html.trim() + "\n", "utf8");
    index.push(m);
  }

  index.sort((a, b) => b.date.localeCompare(a.date));
  writeFileSync(join(OUT, "index.json"), JSON.stringify(index, null, 2) + "\n", "utf8");

  console.log(`[notes] ${index.length}/${wanted.length} article(s) migrated`);
  if (missingMeta.length) {
    console.log(`[notes] ${missingMeta.length} without metadata: ${missingMeta.join(", ")}`);
  }
  if (missingBody.length) {
    console.log(`[notes] ${missingBody.length} without a body: ${missingBody.join(", ")}`);
    console.log("[notes] These redirect to /notes/<slug> and would 404. Either add the " +
      "body, or retarget the redirect in build_migration.py.");
  }
  console.log(`[notes] wrote ${OUT}`);
}

main();
