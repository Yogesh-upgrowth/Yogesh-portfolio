/**
 * pnpm links — computes data/link-plan.json (03 §4).
 *
 * G08 requires every page to have at least 3 planned inbound links before it can
 * flip indexable. Left to the generator, links cluster: hubs collect everything
 * and leaf pages collect nothing. So candidates are scored by shared entities
 * and then capped per source, which spreads inbound links across the corpus
 * rather than concentrating them.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { inventory, type InventoryRow } from "../lib/content/inventory";

const OUT = join(process.cwd(), "..", "seo", "data", "link-plan.json");

/** Maximum outbound suggestions per source, so one page cannot carry the corpus. */
const MAX_OUT_PER_PAGE = 12;
const TARGET_INBOUND = 3;
/** The one page every other page must link to (00-STRATEGY §2, outcome 1). */
const CONVERSION_URL = "/work-with-me";

export interface PlannedLink {
  to: string;
  anchor: string;
  role: "hub" | "lateral" | "bofu" | "proof" | "tool" | "related";
  score: number;
  why: string;
}

function score(a: InventoryRow, b: InventoryRow): { score: number; why: string } | null {
  if (a.url === b.url) return null;
  let s = 0;
  const why: string[] = [];

  if (a.entity_a && a.entity_a === b.entity_a) { s += 5; why.push(`same ${a.entity_a}`); }
  if (a.entity_b && a.entity_b === b.entity_b) { s += 4; why.push(`same ${a.entity_b}`); }
  if (a.entity_a && a.entity_a === b.entity_b) { s += 3; why.push("entity crosses"); }
  if (a.entity_b && a.entity_b === b.entity_a) { s += 3; why.push("entity crosses"); }
  if (a.hub === b.hub && a.archetype === b.archetype) { s += 1; why.push("sibling"); }
  // A BOFU target is worth linking to from anywhere with a shared entity.
  if (b.funnel === "BOFU" && s > 0) { s += 3; why.push("BOFU"); }
  // Glossary and tools are the natural lateral targets for any page.
  if (b.archetype === "glossary" || b.archetype === "tool") { s += 1; }

  return s > 0 ? { score: s, why: why.join(", ") } : null;
}

function roleFor(from: InventoryRow, to: InventoryRow): PlannedLink["role"] {
  if (to.archetype === "hub") return "hub";
  if (to.funnel === "BOFU") return "bofu";
  if (to.archetype === "tool") return "tool";
  if (to.archetype === "case-study") return "proof";
  if (to.archetype === from.archetype) return "lateral";
  return "related";
}

function anchorFor(to: InventoryRow): string {
  // Descriptive, never "click here" (G08). The title hint is already the
  // human-readable name the inventory carries.
  return to.title_hint.replace(/\s*\(\d{4}\)\s*$/, "").toLowerCase();
}

function main(): void {
  const rows = inventory();
  const byUrl = new Map(rows.map((r) => [r.url, r]));
  const outbound = new Map<string, PlannedLink[]>();
  void byUrl;
  const inboundCount = new Map<string, number>();

  for (const from of rows) {
    const scored: PlannedLink[] = [];

    // A hub links to every child (03 §4). Without this, a page with no entity
    // matches and no children of its own ends with zero inbound links and can
    // never flip indexable — which is what happened to the two services
    // carrying industries: "none".
    if (from.archetype === "hub") {
      for (const child of rows) {
        if (child.hub !== from.hub || child.url === from.url) continue;
        scored.push({
          to: child.url, anchor: anchorFor(child), role: "related",
          score: 50, why: "child of this hub",
        });
      }
    }
    for (const to of rows) {
      const s = score(from, to);
      if (!s) continue;
      scored.push({
        to: to.url, anchor: anchorFor(to), role: roleFor(from, to),
        score: s.score, why: s.why,
      });
    }
    // Two links every page owes under B8, neither of which entity scoring
    // produces on its own.
    //
    // The hub: a leaf page shares no entity with its own section index.
    const hub = rows.find((r) => r.archetype === "hub" && r.hub === from.hub);
    if (hub && from.archetype !== "hub") {
      scored.unshift({
        to: hub.url, anchor: anchorFor(hub), role: "hub",
        score: 99, why: "hub of this section",
      });
    }
    // The conversion page: /work-with-me carries no entity_a or entity_b, so it
    // scored zero from everywhere and finished with no inbound links at all —
    // on a site whose stated purpose is booked calls. Every page owes it one
    // BOFU link, so it is added explicitly rather than left to scoring.
    if (from.url !== CONVERSION_URL) {
      const conv = byUrl.get(CONVERSION_URL);
      if (conv) {
        scored.unshift({
          to: conv.url, anchor: "work with me", role: "bofu",
          score: 98, why: "conversion page (B8 requires one BOFU link per page)",
        });
      }
    }
    // B8 also wants at least two lateral links within the archetype. Siblings
    // score only 1, so on a page with strong entity matches they never survive
    // the cap — which left the two services carrying industries: "none" with
    // nothing but their hub link. Reserve two slots for the least-linked
    // siblings, which satisfies the contract and feeds the tail at the same
    // time.
    if (from.archetype !== "hub") {
      const siblings = rows
        .filter((r) => r.url !== from.url && r.archetype === from.archetype && r.hub === from.hub)
        .sort((a, b) => (inboundCount.get(a.url) ?? 0) - (inboundCount.get(b.url) ?? 0))
        .slice(0, 2);
      for (const sib of siblings) {
        scored.unshift({
          to: sib.url, anchor: anchorFor(sib), role: "lateral",
          score: 97, why: "lateral within the archetype (B8), least-linked sibling",
        });
      }
    }

    scored.sort((a, b) => b.score - a.score);

    const picked: PlannedLink[] = [];
    const seen = new Set<string>();
    // A hub is an index, so it is not capped: capping it is what starves the
    // tail of each section.
    const cap = from.archetype === "hub" ? Infinity : MAX_OUT_PER_PAGE;
    for (const cand of scored) {
      if (picked.length >= cap) break;
      if (seen.has(cand.to)) continue;
      // Spread: skip a target that already has enough planned inbound links,
      // unless this page still needs outbound links to meet its own minimum.
      const already = inboundCount.get(cand.to) ?? 0;
      if (from.archetype !== "hub" && already >= TARGET_INBOUND * 2 && picked.length >= 5) continue;
      picked.push(cand);
      seen.add(cand.to);
      inboundCount.set(cand.to, already + 1);
    }
    outbound.set(from.url, picked);
  }

  const starved = rows
    .filter((r) => (inboundCount.get(r.url) ?? 0) < TARGET_INBOUND)
    .map((r) => r.url);

  mkdirSync(join(OUT, ".."), { recursive: true });
  writeFileSync(OUT, JSON.stringify({
    generated_on: new Date().toISOString().slice(0, 10),
    target_inbound: TARGET_INBOUND,
    max_out_per_page: MAX_OUT_PER_PAGE,
    outbound: Object.fromEntries(outbound),
    inbound_count: Object.fromEntries(inboundCount),
    starved,
  }, null, 2) + "\n", "utf8");

  const counts = [...inboundCount.values()];
  const min = counts.length ? Math.min(...counts) : 0;
  const max = counts.length ? Math.max(...counts) : 0;
  console.log(`[links] ${rows.length} rows`);
  console.log(`[links] inbound per page: min ${min}, max ${max}`);
  console.log(`[links] pages below ${TARGET_INBOUND} inbound: ${starved.length}`);
  if (starved.length) {
    for (const u of starved.slice(0, 10)) console.log(`    ${u} (${inboundCount.get(u) ?? 0})`);
    if (starved.length > 10) console.log(`    ... +${starved.length - 10} more`);
  }
  console.log(`[links] wrote ${OUT}`);
}

main();
