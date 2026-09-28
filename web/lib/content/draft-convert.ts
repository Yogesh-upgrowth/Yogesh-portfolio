/**
 * DraftOutput -> PageMeta + MDX (prompts/page-generation.md §3, last line).
 *
 * The conversion is where the base contract's block order is applied, so the
 * generator does not have to remember it and cannot get it wrong per page.
 * 01 §A gives the order: answer box, body sections, "what I'd steal"/"what I'd
 * do", India layer, FAQ, sources, NotAffiliated.
 */
import type { DraftOk } from "./draft-schema";
import type { InventoryRow } from "./inventory";
import type { PageMeta } from "./schemas";
import { contractFor } from "../gates/contracts";

export interface ConvertInput {
  draft: DraftOk;
  row: InventoryRow;
  batchId?: string;
  today: string;
  fxRate?: number;
}

export function draftToMdx(draft: DraftOk): string {
  const out: string[] = [];

  // B1: the answer box is always first and is a component, not prose, so G06
  // measures the same text the reader sees first.
  out.push(`<AnswerBox>\n${draft.answer_first.trim()}\n</AnswerBox>`, "");

  for (const [i, sec] of draft.sections.entries()) {
    out.push(`## ${sec.h2}`, "", sec.body_markdown.trim(), "");
    const table = draft.tables.find((t) => t.id === sec.visual);
    if (table) out.push(tableTag(table), "");
    const visual = draft.visual_specs.find((v) => v.id === sec.visual);
    if (visual) {
      out.push(
        `<Figure alt=${JSON.stringify(visual.alt)}` +
          (visual.caption ? ` caption=${JSON.stringify(visual.caption)}` : "") +
          `>\n  {/* built at build time from visual_specs[${i}] */}\n</Figure>`,
        "",
      );
    }
  }

  // Tables not bound to a section still have to render somewhere.
  for (const t of draft.tables) {
    if (!draft.sections.some((s) => s.visual === t.id)) out.push(tableTag(t), "");
  }

  if (draft.from_my_work) {
    out.push(
      `<FromMyWork exp="${draft.from_my_work.exp_id}">`,
      draft.from_my_work.text.trim(),
      `</FromMyWork>`,
      "",
    );
  }
  if (draft.what_i_would_do) {
    out.push(
      `<WhatIdDo`,
      `  verdict=${JSON.stringify(draft.what_i_would_do.verdict)}`,
      `  steps={${JSON.stringify(draft.what_i_would_do.steps)}}`,
      `/>`,
      "",
    );
  }
  if (draft.india_layer) out.push("## India", "", draft.india_layer.trim(), "");
  if (draft.not_affiliated) out.push(`<NotAffiliated />`, "");
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

function tableTag(t: DraftOk["tables"][number]): string {
  return (
    `<${t.component}\n` +
    `  caption=${JSON.stringify(t.note || t.id)}\n` +
    `  columns={${JSON.stringify(t.columns)}}\n` +
    `  rows={${JSON.stringify(t.rows)}}\n` +
    `/>`
  );
}

export function draftToMeta({ draft, row, batchId, today, fxRate }: ConvertInput): PageMeta {
  const contract = contractFor(row.archetype);
  const faq = draft.faq?.length ? draft.faq.map((f) => ({ q: f.q, a: f.a })) : undefined;

  // schema_hints are the generator's suggestion; the contract decides. A page
  // cannot talk itself into a type its archetype does not carry.
  const types = new Set<string>(contract.requiredSchema);
  if (faq && faq.length >= 3) types.add("FAQPage");

  return {
    id: row.id,
    url: row.url,
    archetype: row.archetype,
    hub: row.hub,
    wave: row.wave,
    batch_id: batchId,
    status: "drafted",
    indexable: false,                       // CLAUDE.md §1.3
    title: draft.title,
    meta_description: draft.meta_description,
    h1: draft.h1,
    primary_keyword: row.primary_keyword,
    secondary_keywords: row.secondary_keywords,
    entity_a: row.entity_a || undefined,
    entity_b: row.entity_b || undefined,
    geo: (row.geo === "IN" || row.geo === "US" ? row.geo : "IN+US"),
    facts_used: draft.facts_used_all,
    experience_used: draft.experience_used,
    internal_links: draft.internal_links.map(({ url, anchor, role }) => ({ url, anchor, role })),
    visuals: [
      ...draft.visual_specs.map((v) => ({
        type: (v.chart ? "svg-chart" : "diagram") as "svg-chart" | "diagram",
        src: `/svg/${row.id}-${v.id}.svg`,
        alt: v.alt,
        caption: v.caption,
      })),
      ...draft.tables.map((t) => ({
        type: "table" as const,
        src: `#${t.id}`,
        alt: `${t.note || t.id}: ${t.columns.join(", ")} across ${t.rows.length} rows, each with its source`,
        caption: t.note || undefined,
      })),
    ],
    faq,
    cta: draft.cta,
    schema_types: [...types],
    unique_value_statement: draft.unique_value_statement,
    verified_on: today,
    refreshed_on: today,
    changelog: [],
    not_affiliated: contract.notAffiliated ? true : draft.not_affiliated,
    fx_rate_used: fxRate,
  } as PageMeta;
}
