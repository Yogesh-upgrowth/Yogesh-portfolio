/**
 * /notes — the PM-craft archive, outside the 1,017-page content system.
 *
 * 00-STRATEGY §6 excludes PM-career content from the programmatic hubs but
 * permits a separate blog that is "not counted here". The D1 migration sends 46
 * URLs to /notes, so these pages exist to keep that equity rather than 410 it.
 *
 * Deliberately not inventory rows: no gates, no research objects, no sitemap
 * entry alongside the hubs. They are archive, not the corpus.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "notes");

export interface Note {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

let cache: Note[] | null = null;

export function notes(): Note[] {
  if (cache) return cache;
  const p = join(DIR, "index.json");
  cache = existsSync(p) ? (JSON.parse(readFileSync(p, "utf8")) as Note[]) : [];
  return cache;
}

export function note(slug: string): Note | undefined {
  return notes().find((n) => n.slug === slug);
}

export function noteBody(slug: string): string | null {
  const p = join(DIR, `${slug}.html`);
  return existsSync(p) ? readFileSync(p, "utf8") : null;
}
