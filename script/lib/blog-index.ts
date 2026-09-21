/**
 * Reads the blog registry out of client/src/lib/blog-data.ts.
 *
 * That module imports image assets, so it cannot be imported from a plain
 * build script — the entries are flat object literals, so they are parsed
 * instead. Shared by the OG card generator and the feed generator so the two
 * cannot drift apart.
 */
import { readFileSync } from "fs";

export interface BlogIndexEntry {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

const ENTRY =
  /slug:\s*"([a-z0-9-]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",\s*description:\s*"((?:[^"\\]|\\.)*)",\s*category:\s*"([^"]+)",\s*date:\s*"([^"]+)"/g;

function unescape(s: string): string {
  return s.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

export function readBlogIndex(
  file = "client/src/lib/blog-data.ts"
): BlogIndexEntry[] {
  const src = readFileSync(file, "utf8");
  const out: BlogIndexEntry[] = [];
  for (const m of src.matchAll(ENTRY)) {
    out.push({
      slug: m[1],
      title: unescape(m[2]),
      description: unescape(m[3]),
      category: m[4],
      date: m[5],
    });
  }
  return out;
}
