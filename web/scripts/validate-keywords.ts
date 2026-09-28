/**
 * pnpm keywords --wave 1 — DataForSEO validation (03 §4).
 *
 * Keeps a row when (vol_in + vol_us >= 30), OR funnel is BOFU, OR the archetype
 * is one where zero volume is strategic. A BOFU row is never dropped for volume:
 * "app monetization consultant india" can show 10 searches a month and still be
 * the query that pays for the site.
 *
 * Endpoint names change; verify against current DataForSEO docs before wiring
 * a new one (03 §4 says so explicitly).
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { inventory, type InventoryRow } from "../lib/content/inventory";
import { guardedFetch, requireEnv, runScript } from "../lib/net";

const OUT = join(process.cwd(), "..", "seo", "data", "keywords.json");
const ENDPOINT = "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live";
const MIN_VOLUME = 30;
const STRATEGIC_ZERO_VOLUME = new Set(["glossary", "india", "pricing-examples"]);

interface KeywordRow {
  url: string;
  keyword: string;
  vol_in: number | null;
  vol_us: number | null;
  difficulty: number | null;
  keep: boolean;
  reason: string;
  notes?: string;
}

function decide(row: InventoryRow, volIn: number | null, volUs: number | null): {
  keep: boolean; reason: string;
} {
  if (row.funnel === "BOFU") return { keep: true, reason: "BOFU — never dropped for volume" };
  if (STRATEGIC_ZERO_VOLUME.has(row.archetype)) {
    return { keep: true, reason: `${row.archetype} — strategic zero volume allowed` };
  }
  const total = (volIn ?? 0) + (volUs ?? 0);
  return total >= MIN_VOLUME
    ? { keep: true, reason: `combined volume ${total}` }
    : { keep: false, reason: `combined volume ${total} below ${MIN_VOLUME}` };
}

async function fetchVolumes(keywords: string[], locationCode: number, auth: string) {
  const res = await guardedFetch(ENDPOINT, {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
    body: JSON.stringify([{ keywords, location_code: locationCode, language_code: "en" }]),
  });
  if (!res.ok) throw new Error(`DataForSEO returned ${res.status}: ${await res.text()}`);
  const doc = await res.json() as {
    tasks?: { result?: { keyword: string; search_volume: number | null;
                        keyword_difficulty?: number | null }[] }[];
  };
  const out = new Map<string, { volume: number | null; difficulty: number | null }>();
  for (const t of doc.tasks ?? []) {
    for (const r of t.result ?? []) {
      out.set(r.keyword.toLowerCase(),
        { volume: r.search_volume, difficulty: r.keyword_difficulty ?? null });
    }
  }
  return out;
}

async function main(): Promise<void> {
  const waveArg = process.argv[process.argv.indexOf("--wave") + 1];
  const wave = waveArg ? Number(waveArg) : undefined;
  const rows = inventory().filter((r) => wave === undefined || r.wave === wave);
  if (!rows.length) {
    console.log("[keywords] no rows matched.");
    return;
  }

  const { DATAFORSEO_LOGIN, DATAFORSEO_PASSWORD } =
    requireEnv("DATAFORSEO_LOGIN", "DATAFORSEO_PASSWORD");
  const auth = Buffer.from(`${DATAFORSEO_LOGIN}:${DATAFORSEO_PASSWORD}`).toString("base64");

  const keywords = [...new Set(rows.map((r) => r.primary_keyword).filter(Boolean))];
  console.log(`[keywords] ${rows.length} rows, ${keywords.length} unique keywords`);

  // 2316 = India, 2840 = United States.
  const inVol = await fetchVolumes(keywords, 2316, auth);
  const usVol = await fetchVolumes(keywords, 2840, auth);

  const out: KeywordRow[] = rows.map((r) => {
    const k = r.primary_keyword.toLowerCase();
    const volIn = inVol.get(k)?.volume ?? null;
    const volUs = usVol.get(k)?.volume ?? null;
    const { keep, reason } = decide(r, volIn, volUs);
    return {
      url: r.url, keyword: r.primary_keyword, vol_in: volIn, vol_us: volUs,
      difficulty: inVol.get(k)?.difficulty ?? usVol.get(k)?.difficulty ?? null,
      keep, reason,
    };
  });

  mkdirSync(join(OUT, ".."), { recursive: true });
  writeFileSync(OUT, JSON.stringify({
    generated_on: new Date().toISOString().slice(0, 10),
    min_volume: MIN_VOLUME, rows: out,
  }, null, 2) + "\n", "utf8");

  const dropped = out.filter((r) => !r.keep);
  console.log(`[keywords] keep ${out.length - dropped.length}, drop ${dropped.length}`);
  for (const d of dropped.slice(0, 20)) console.log(`    DROP ${d.url} — ${d.reason}`);
  if (dropped.length > 20) console.log(`    ... +${dropped.length - 20} more`);
  console.log(`[keywords] wrote ${OUT}. Nothing is removed from the inventory ` +
    "automatically — review the drops, then edit seeds and re-run build_inventory.py.");
}

runScript("keywords", main);
