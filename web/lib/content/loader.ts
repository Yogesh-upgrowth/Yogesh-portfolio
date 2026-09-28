/**
 * Content loader — 03-TECHNICAL-SPEC §2.
 *
 * "The URL is the file path." content/teardowns/duolingo/pricing.json backs
 * /teardowns/duolingo/pricing. The loader throws at build when a content file
 * has no inventory row, or an inventory row past `drafted` has no file.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { PageMeta } from "./schemas";
import { inventoryByUrl, type InventoryRow } from "./inventory";

const CONTENT_DIR = join(process.cwd(), "content");

export interface LoadedPage {
  meta: PageMeta;
  body: string;
  row: InventoryRow;
}

function walk(dir: string, out: string[] = []): string[] {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith(".json")) out.push(p);
  }
  return out;
}

/** content/<...>/<slug>.json  ->  /<...>/<slug> */
export function urlForFile(file: string): string {
  const rel = relative(CONTENT_DIR, file).replace(/\.json$/, "");
  return "/" + rel.split(sep).join("/");
}

export function loadPage(file: string): LoadedPage {
  const url = urlForFile(file);
  const row = inventoryByUrl().get(url);
  if (!row) {
    throw new Error(
      `[content] ${relative(process.cwd(), file)} maps to "${url}", which is not a ` +
        "row in seo/page-inventory.csv. Either the slug is wrong or the page was " +
        "created outside the inventory (CLAUDE.md §1.6).",
    );
  }
  const parsed = PageMeta.safeParse(JSON.parse(readFileSync(file, "utf8")));
  if (!parsed.success) {
    const lines = parsed.error.issues
      .map((i) => `    ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`[content] ${url} failed PageMeta validation:\n${lines}`);
  }
  const meta = parsed.data;
  if (meta.url !== url) {
    throw new Error(`[content] ${url}: meta.url is "${meta.url}" — it must match the file path`);
  }
  if (meta.archetype !== row.archetype) {
    throw new Error(
      `[content] ${url}: archetype "${meta.archetype}" disagrees with the inventory ` +
        `("${row.archetype}"). The inventory wins — fix the page or the seeds.`,
    );
  }
  const mdx = file.replace(/\.json$/, ".mdx");
  if (!existsSync(mdx)) {
    throw new Error(`[content] ${url}: meta exists but ${relative(process.cwd(), mdx)} does not`);
  }
  return { meta, body: readFileSync(mdx, "utf8"), row };
}

export function loadAllPages(): LoadedPage[] {
  return walk(CONTENT_DIR).map(loadPage);
}

/** Pages Next should statically generate for one archetype. */
export function pagesForArchetype(archetype: string): LoadedPage[] {
  return loadAllPages().filter((p) => p.meta.archetype === archetype);
}

/** Only these reach sitemaps and llms.txt (CLAUDE.md §1.3). */
export function indexablePages(): LoadedPage[] {
  return loadAllPages().filter((p) => p.meta.indexable && p.meta.status === "indexable");
}

/**
 * Build-time consistency check, both directions. Called from a route so a
 * broken corpus fails `next build` rather than shipping a hole.
 *
 * Statuses before `drafted` legitimately have no file — those rows are the
 * backlog, not a fault.
 */
const FILE_EXPECTED_FROM: ReadonlyArray<PageMeta["status"]> = [
  "drafted", "gated", "reviewed", "published", "indexable",
];

export function assertCorpusConsistent(): void {
  const pages = loadAllPages();
  const byUrl = new Map(pages.map((p) => [p.meta.url, p]));
  const problems: string[] = [];

  for (const p of pages) {
    for (const link of p.meta.internal_links) {
      const target = byUrl.get(link.url);
      if (!inventoryByUrl().has(link.url) && !/^\/(notes(\/|$)|about$|$)/.test(link.url)) {
        problems.push(`${p.meta.url} links to "${link.url}", not an inventory row`);
      } else if (target && FILE_EXPECTED_FROM.indexOf(target.meta.status) === -1) {
        problems.push(
          `${p.meta.url} links to "${link.url}", whose status is "${target.meta.status}" ` +
            "(G08 requires targets at published or beyond)",
        );
      }
    }
    if (p.meta.indexable) {
      const inbound = pages.filter((q) =>
        q.meta.url !== p.meta.url && q.meta.internal_links.some((l) => l.url === p.meta.url),
      ).length;
      if (inbound < 3) {
        problems.push(`${p.meta.url} is indexable with only ${inbound} inbound links (G08 needs 3)`);
      }
    }
  }
  if (problems.length) {
    throw new Error(
      `[content] corpus is inconsistent (${problems.length}):\n` +
        problems.slice(0, 20).map((s) => `    ${s}`).join("\n") +
        (problems.length > 20 ? `\n    ... +${problems.length - 20} more` : ""),
    );
  }
}
