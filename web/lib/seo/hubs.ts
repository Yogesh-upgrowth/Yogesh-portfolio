/**
 * Hub registry for sitemaps and llms.txt — seo/config/sitemaps.json.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface SitemapConfig {
  index: string;
  files: Record<string, string>;
  max_urls_per_file: number;
}

let cached: SitemapConfig | null = null;

export function sitemapConfig(): SitemapConfig {
  if (cached) return cached;
  const p = join(process.cwd(), "..", "seo", "config", "sitemaps.json");
  cached = JSON.parse(readFileSync(p, "utf8")) as SitemapConfig;
  return cached;
}

export function hubNames(): string[] {
  return Object.keys(sitemapConfig().files);
}

export function sitemapPathFor(hub: string): string {
  const p = sitemapConfig().files[hub];
  if (!p) throw new Error(`[sitemaps] no sitemap configured for hub "${hub}"`);
  return p;
}
