/**
 * The inventory is the only list of pages that exist (CLAUDE.md §1.6).
 *
 * Read from seo/page-inventory.csv, which is generated from seo/seeds/*.json by
 * build_inventory.py and never hand-edited.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface InventoryRow {
  id: string;
  wave: number;
  hub: string;
  archetype: string;
  url: string;
  title_hint: string;
  primary_keyword: string;
  secondary_keywords: string[];
  intent: string;
  funnel: string;
  audience_tier: string;
  entity_a: string;
  entity_b: string;
  geo: string;
  template_id: string;
  notes: string;
}

const CSV_PATH = join(process.cwd(), "..", "seo", "page-inventory.csv");

/** Minimal RFC4180 parser — the notes column contains commas and quotes. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else quoted = false;
      } else field += c;
      continue;
    }
    if (c === '"') { quoted = true; continue; }
    if (c === ",") { row.push(field); field = ""; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; continue; }
    if (c === "\r") continue;
    field += c;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((f) => f.length));
}

let cache: InventoryRow[] | null = null;

export function inventory(): InventoryRow[] {
  if (cache) return cache;
  const rows = parseCsv(readFileSync(CSV_PATH, "utf8"));
  const header = rows[0];
  if (!header) throw new Error(`[inventory] ${CSV_PATH} is empty`);
  const idx = (name: string) => {
    const i = header.indexOf(name);
    if (i === -1) throw new Error(`[inventory] missing column "${name}"`);
    return i;
  };
  const c = {
    id: idx("id"), wave: idx("wave"), hub: idx("hub"), archetype: idx("archetype"),
    url: idx("url"), title_hint: idx("title_hint"), primary_keyword: idx("primary_keyword"),
    secondary_keywords: idx("secondary_keywords"), intent: idx("intent"), funnel: idx("funnel"),
    audience_tier: idx("audience_tier"), entity_a: idx("entity_a"), entity_b: idx("entity_b"),
    geo: idx("geo"), template_id: idx("template_id"), notes: idx("notes"),
  };
  const out = rows.slice(1).map((r) => ({
    id: r[c.id] ?? "", wave: Number(r[c.wave] ?? 0), hub: r[c.hub] ?? "",
    archetype: r[c.archetype] ?? "", url: r[c.url] ?? "", title_hint: r[c.title_hint] ?? "",
    primary_keyword: r[c.primary_keyword] ?? "",
    secondary_keywords: (r[c.secondary_keywords] ?? "").split("|").filter(Boolean),
    intent: r[c.intent] ?? "", funnel: r[c.funnel] ?? "",
    audience_tier: r[c.audience_tier] ?? "", entity_a: r[c.entity_a] ?? "",
    entity_b: r[c.entity_b] ?? "", geo: r[c.geo] ?? "",
    template_id: r[c.template_id] ?? "", notes: r[c.notes] ?? "",
  }));

  const dupes = new Map<string, number>();
  for (const r of out) dupes.set(r.url, (dupes.get(r.url) ?? 0) + 1);
  const clashes = [...dupes].filter(([, n]) => n > 1).map(([u]) => u);
  if (clashes.length) {
    throw new Error(
      `[inventory] duplicate URLs in page-inventory.csv: ${clashes.slice(0, 5).join(", ")}` +
        (clashes.length > 5 ? ` (+${clashes.length - 5} more)` : "") +
        " — fix the seeds and re-run build_inventory.py",
    );
  }
  cache = out;
  return out;
}

export function inventoryByUrl(): Map<string, InventoryRow> {
  return new Map(inventory().map((r) => [r.url, r]));
}

export function rowsFor(archetype: string, wave?: number): InventoryRow[] {
  return inventory().filter(
    (r) => r.archetype === archetype && (wave === undefined || r.wave === wave),
  );
}

/**
 * Link resolver — throws on any URL that is not an inventory row.
 * This is what makes G08's "all targets exist in the inventory" true at build
 * time rather than at gate time. /notes/* is outside the content system by
 * design (00-STRATEGY §6), so it is allowed through explicitly.
 */
const NON_INVENTORY_OK = [/^\/notes(\/|$)/, /^\/about$/, /^\/$/];

export function resolveInternal(url: string): string {
  if (NON_INVENTORY_OK.some((p) => p.test(url))) return url;
  if (!inventoryByUrl().has(url)) {
    throw new Error(
      `[links] "${url}" is not a row in page-inventory.csv. ` +
        "Add it to seo/seeds/*.json and re-run build_inventory.py (CLAUDE.md §1.6).",
    );
  }
  return url;
}
