import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));

/**
 * Redirects are compiled, never hand-written here. The source of truth is
 * seo/migration-map.csv via seo/scripts/build_migration.py, validated by
 * seo/scripts/check_migration.py (03-TECHNICAL-SPEC §5, "Redirect registry").
 */
function loadRedirects() {
  const p = join(here, "..", "seo", "config", "redirects.json");
  const doc = JSON.parse(readFileSync(p, "utf8"));
  return doc.redirects.map(({ source, destination, permanent }) => ({
    source,
    destination,
    permanent: permanent !== false,
  }));
}

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return loadRedirects();
  },
};
