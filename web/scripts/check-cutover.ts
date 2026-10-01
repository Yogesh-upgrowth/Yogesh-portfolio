/**
 * pnpm cutover:check — is it safe to point production at the Next.js app yet?
 *
 * Separate from launch:check, which asks whether the redirects land on a page
 * that exists. This asks the question that comes after: whether the page they
 * land on is one Google is allowed to keep.
 *
 * It exists because the cutover is a Vercel project setting (Root Directory →
 * web) and nothing in this repo can gate it, so the only protection is knowing
 * the answer before someone clicks it. Every page here ships
 * `noindex,follow` until `pnpm publish` flips it (CLAUDE.md §1.3). Cutting over
 * first means 301-ing ranking URLs onto noindex pages: Google follows the
 * redirect, finds noindex, and drops the destination. The redirects exist to
 * move that equity, and in the wrong order they discard it instead.
 *
 * So the order is publish, then cut over — not the reverse. This refuses to say
 * "safe" until that is true.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadAllPages } from "../lib/content/loader";

const MAP = join(process.cwd(), "..", "seo", "migration-map.csv");

function redirectTargets(): Map<string, string[]> {
  const [header, ...lines] = readFileSync(MAP, "utf8").trim().split("\n");
  const cols = (header ?? "").split(",");
  const iFrom = cols.indexOf("from"), iTo = cols.indexOf("to");
  const out = new Map<string, string[]>();
  for (const l of lines) {
    const p = l.split(",");
    const from = p[iFrom] ?? "", to = (p[iTo] ?? "").split("#")[0] ?? "";
    if (!from || !to) continue;
    out.set(to, [...(out.get(to) ?? []), from]);
  }
  return out;
}

export interface CutoverVerdict {
  safe: boolean;
  indexable: number;
  total: number;
  /** Redirect destinations that are noindex, with the sources pointing at them. */
  onNoindex: { target: string; from: string[] }[];
}

/** The verdict, without printing or exiting. Exported so a test can assert it. */
export function cutoverVerdict(): CutoverVerdict {
  const pages = loadAllPages();
  const byUrl = new Map(pages.map((p) => [p.meta.url, p.meta]));
  const onNoindex: { target: string; from: string[] }[] = [];
  for (const [target, from] of redirectTargets()) {
    const meta = byUrl.get(target);
    if (!meta) continue; // a legacy route, which launch:check owns
    if (!meta.indexable) onNoindex.push({ target, from });
  }
  return {
    safe: onNoindex.length === 0,
    indexable: pages.filter((p) => p.meta.indexable).length,
    total: pages.length,
    onNoindex,
  };
}

function main(): number {
  const pages = loadAllPages();
  const byUrl = new Map(pages.map((p) => [p.meta.url, p.meta]));
  const targets = redirectTargets();

  const indexable = pages.filter((p) => p.meta.indexable);
  console.log(`[cutover] ${indexable.length}/${pages.length} page(s) are indexable`);

  // A redirect onto a noindex page is the specific harm: the old URL stops
  // serving and the new one tells Google not to keep it.
  const onNoindex: { target: string; from: string[] }[] = [];
  let unknown = 0;
  for (const [target, from] of targets) {
    const meta = byUrl.get(target);
    if (!meta) { unknown++; continue; } // launch:check owns this case
    if (!meta.indexable) onNoindex.push({ target, from });
  }

  if (unknown) {
    console.log(`[cutover] ${unknown} redirect target(s) are not content pages ` +
                `(legacy routes) — launch:check covers those`);
  }

  if (onNoindex.length) {
    const sources = onNoindex.reduce((n, r) => n + r.from.length, 0);
    console.error(
      `\n[cutover] ${sources} redirect(s) point at ${onNoindex.length} noindex page(s).`);
    for (const r of onNoindex.slice(0, 8)) {
      console.error(`    ${r.target}  ← ${r.from.length} redirect(s)`);
    }
    if (onNoindex.length > 8) console.error(`    … and ${onNoindex.length - 8} more`);
    console.error(
      "\n    Cutting over now would 301 these ranking URLs onto pages that tell\n" +
      "    Google not to index them, which loses the equity the redirects exist\n" +
      "    to move. Publish first (pnpm publish --batch <id>), then cut over.");
    console.error("[cutover] NOT SAFE TO CUT OVER");
    return 1;
  }

  console.log("[cutover] no redirect lands on a noindex page — safe to cut over");
  return 0;
}

// Only when run directly, so importing cutoverVerdict in a test does not exit.
if (process.argv[1] && /check-cutover\.ts$/.test(process.argv[1])) process.exit(main());
