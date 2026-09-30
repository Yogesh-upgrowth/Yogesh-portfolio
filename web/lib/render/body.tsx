/**
 * MDX body rendering.
 *
 * The bodies live on disk as .mdx beside their meta, and until this existed every
 * route handed `null` to renderPage: the layout, the JSON-LD, the FAQ and the
 * sources all shipped, and the article itself did not. Compiling here rather than
 * per route keeps the component map in one place, because the map is the
 * contract — a body may only use components the archetypes define.
 *
 * FromMyWork is the one component a body cannot supply in full. It carries an
 * exp id only, and the entry is resolved from content/experience.json here, so
 * the prose can never restate a context line, timeframe or number that differs
 * from the library. A body citing an id the library does not hold throws rather
 * than rendering an empty aside: a missing FromMyWork is a silent loss of the
 * only first-person proof on the page.
 */
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  AnswerBox, DecisionTable, Example, FactTable, Figure, FromMyWork, PriceTable,
  SourcePill, WhatIdDo,
} from "@/components/primitives";
import { ExperienceEntry, type Fact } from "@/lib/content/schemas";

let cache: Map<string, ExperienceEntry> | undefined;

export function experienceLibrary(): Map<string, ExperienceEntry> {
  if (cache) return cache;
  const raw = JSON.parse(
    readFileSync(join(process.cwd(), "content", "experience.json"), "utf8"),
  ) as unknown[];
  cache = new Map(
    raw.map((e) => {
      const parsed = ExperienceEntry.parse(e);
      return [parsed.id, parsed] as const;
    }),
  );
  return cache;
}

function components(facts: Fact[]) {
  const library = experienceLibrary();
  const byId = new Map(facts.map((f) => [f.fact_id, f]));
  return {
    AnswerBox,
    Example,
    /**
     * A body names the fact behind each row by id; the fact itself is resolved
     * from the page's research object so the source pill and its verification
     * date cannot drift from what the research actually says.
     */
    FactTable: (props: {
      caption: string; columns: string[]; id?: string;
      rows: { cells: (string | number)[]; factId?: string }[];
    }) => {
      const { rows, ...rest } = props;
      if (!Array.isArray(rows)) {
        // Reached only if expression attributes are being stripped again.
        throw new Error(
          `[body] FactTable received no rows (props: ${Object.keys(props).join(", ")}) — ` +
            "expression attributes are being dropped before compile",
        );
      }
      return (
      <FactTable
        {...rest}
        rows={rows.map((r) => {
          if (r.factId && !byId.has(r.factId)) {
            throw new Error(`[body] FactTable row cites ${r.factId}, which the page does not use`);
          }
          return { cells: r.cells, fact: r.factId ? byId.get(r.factId) : undefined };
        })}
      />
      );
    },
    PriceTable,
    DecisionTable,
    Figure,
    SourcePill,
    WhatIdDo,
    FromMyWork: ({ exp, children }: { exp: string; children: ReactNode }) => {
      const entry = library.get(exp);
      if (!entry) {
        throw new Error(
          `[body] FromMyWork cites ${exp}, which is not in content/experience.json`,
        );
      }
      return <FromMyWork entry={entry}>{children}</FromMyWork>;
    },
  };
}

export function Body({ source, facts }: { source: string; facts: Fact[] }) {
  return (
    <div className="prose">
      {/*
        * blockJS must be turned off, and the reason is worth stating because the
        * default is the safe one. next-mdx-remote v6 defaults blockJS to true,
        * which strips every JSX expression attribute from the source before
        * compiling: a FactTable arrives with its quoted id and caption and no
        * rows at all, silently. That default exists for MDX submitted by
        * strangers. These bodies are repo files, written here and reviewed in
        * the diff like any other source, so the threat it guards against does
        * not apply — and blockDangerousJS stays on regardless.
        */}
      <MDXRemote
        source={source}
        components={components(facts)}
        options={{ mdxOptions: { format: "mdx" }, blockJS: false }}
      />
    </div>
  );
}
