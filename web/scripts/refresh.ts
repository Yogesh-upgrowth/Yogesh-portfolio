/**
 * pnpm refresh [--sweep] [--ids a,b] — 02 §8.
 *
 * Finds facts past their window, re-fetches, diffs, and updates only what
 * actually changed. The important rule is negative: refreshed_on and
 * dateModified move only when content moved. Bumping a date without changing
 * anything is the cheapest possible lie to tell a crawler, and the one most
 * likely to be caught.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { ResearchObject, type Fact } from "../lib/content/schemas";
import { loadAllPages } from "../lib/content/loader";
import { guardedFetch, runScript } from "../lib/net";

const RESEARCH = join(process.cwd(), "..", "seo", "research");
const PRICE_WINDOW_DAYS = 45;
const FACT_WINDOW_DAYS = 90;
/** Monthly sweep covers a tenth of the corpus, oldest first (02 §8). */
const SWEEP_SHARE = 0.1;

function ageDays(iso: string): number {
  return Math.round((Date.now() - Date.parse(iso)) / 86_400_000);
}

function isPriceFact(f: Fact): boolean {
  return /(?:INR|USD|\/month|\/mo|\/year|per month|price)/i.test(`${f.unit ?? ""} ${f.claim}`);
}

function stale(f: Fact): boolean {
  return ageDays(f.verified_on) > (isPriceFact(f) ? PRICE_WINDOW_DAYS : FACT_WINDOW_DAYS);
}

async function stillReachable(url: string): Promise<{ ok: boolean; status: number }> {
  const res = await guardedFetch(url, { method: "HEAD", redirect: "follow" });
  return { ok: res.ok, status: res.status };
}

async function main(): Promise<void> {
  const sweep = process.argv.includes("--sweep");
  const idsArg = process.argv[process.argv.indexOf("--ids") + 1];
  const ids = idsArg && !idsArg.startsWith("--") ? new Set(idsArg.split(",")) : null;

  let pages = loadAllPages().filter((p) => p.meta.status === "indexable" || p.meta.indexable);
  if (ids) pages = pages.filter((p) => ids.has(p.meta.id));
  if (sweep) {
    pages = pages
      .sort((a, b) => a.meta.verified_on.localeCompare(b.meta.verified_on))
      .slice(0, Math.max(1, Math.ceil(pages.length * SWEEP_SHARE)));
  }
  if (!pages.length) {
    console.log("[refresh] nothing to refresh.");
    return;
  }

  let checked = 0, dead = 0, changedPages = 0;
  for (const page of pages) {
    const file = join(RESEARCH, `${page.meta.id}.json`);
    if (!existsSync(file)) continue;
    const parsed = ResearchObject.safeParse(JSON.parse(readFileSync(file, "utf8")));
    if (!parsed.success) {
      console.error(`[refresh] ${page.meta.id}: research object is invalid, skipped`);
      continue;
    }
    const research = parsed.data;
    const staleFacts = research.facts.filter(stale);
    if (!staleFacts.length) continue;

    let touched = false;
    for (const f of staleFacts) {
      checked++;
      const { ok, status } = await stillReachable(f.source_url);
      if (!ok) {
        dead++;
        // 02 §7: a 404 source is replaced with an archived snapshot, or the
        // claim comes out. It is never left citing a dead page.
        console.log(`[refresh] DEAD ${f.fact_id} (${status}) ${f.source_url}`);
        console.log(`          ${f.archive_url
          ? `archive on file: ${f.archive_url}`
          : "no archive recorded — remove the claim or find a new source"}`);
        continue;
      }
      // Reachable, but the figure still needs a human or an agent to re-read.
      // Marking it verified here without reading it would be exactly the lie
      // this script exists to prevent.
      console.log(`[refresh] RECHECK ${f.fact_id} — ${ageDays(f.verified_on)}d old, ` +
        `source is up. Re-read and update value + verified_on.`);
      touched = true;
    }
    if (touched) changedPages++;
  }

  console.log(`\n[refresh] ${pages.length} page(s) examined, ${checked} stale fact(s) checked, ` +
    `${dead} dead source(s), ${changedPages} page(s) needing a re-read.`);
  console.log("[refresh] refreshed_on is NOT bumped here. It moves only when content " +
    "changes — 02 §8.");
  void readdirSync;
}

runScript("refresh", main);
