/**
 * Components — 03-TECHNICAL-SPEC §7, contracts from 01-PAGE-ARCHETYPES.
 *
 * These are the structured blocks MDX bodies are allowed to use. Several are
 * load-bearing for gates: Sources renders from facts_used (G02/B4), FromMyWork
 * is the only legal home for first person (G12), NotAffiliated is required on
 * teardown/compare/pricing-examples (G17), PriceTable is where INR+USD pairing
 * lives (G15). Changing a tag name here means changing the gate that looks for
 * it.
 *
 * Server components throughout; no client JS unless a block genuinely needs it.
 */
import type { ReactNode } from "react";
import type { Fact, ExperienceEntry, PageMeta } from "@/lib/content/schemas";

/* ── AnswerBox — B1. The verdict, first, with a number. ───────────────────── */
export function AnswerBox({ children }: { children: ReactNode }) {
  return (
    <div className="answer-box" role="doc-abstract">
      {children}
    </div>
  );
}

/* ── LastVerified — B4 pill under the H1. ────────────────────────────────── */
export function LastVerified({ date, method }: { date: string; method?: string }) {
  return (
    <p className="last-verified">
      <span className="pill">Last verified {date}</span>
      {method ? <span className="how"> · {method}</span> : null}
    </p>
  );
}

/* ── SourcePill — a domain and the date it was checked. ──────────────────── */
export function SourcePill({ domain, verifiedOn }: { domain: string; verifiedOn: string }) {
  return (
    <span className="source-pill">
      {domain} <time dateTime={verifiedOn}>{verifiedOn}</time>
    </span>
  );
}

/* ── FactTable — rows that each carry their own source. ─────────────────── */
export function FactTable({
  caption, columns, rows, id,
}: {
  caption: string;
  columns: string[];
  rows: { cells: (string | number)[]; fact?: Fact }[];
  /** Anchor target, so meta.visuals[].src can point at this table. */
  id?: string;
}) {
  return (
    <figure className="fact-table" id={id}>
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {columns.map((c) => <th key={c} scope="col">{c}</th>)}
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.cells.map((c, j) => <td key={j}>{c}</td>)}
              <td>
                {r.fact ? (
                  <a href={r.fact.source_url} rel="nofollow noopener" target="_blank">
                    <SourcePill domain={r.fact.source_domain} verifiedOn={r.fact.verified_on} />
                  </a>
                ) : (
                  <span className="muted">no public figure</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

/* ── PriceTable — G15 lives here. Every row carries both currencies. ────── */
export function PriceTable({
  caption, rows, fxRate, fxAsOf,
}: {
  caption: string;
  rows: { tier: string; inr: number; usd: number; period: string; verifiedOn: string }[];
  fxRate: number;
  fxAsOf: string;
}) {
  return (
    <figure className="price-table">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Tier</th><th scope="col">INR</th><th scope="col">USD</th>
            <th scope="col">Period</th><th scope="col">Verified</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.tier}>
              <td>{r.tier}</td>
              <td className="num">₹{r.inr.toLocaleString("en-IN")}</td>
              <td className="num">${r.usd.toLocaleString("en-US")}</td>
              <td>{r.period}</td>
              <td><time dateTime={r.verifiedOn}>{r.verifiedOn}</time></td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption>
        Converted at ₹{fxRate}/$1 as of {fxAsOf}. Device-checked INR prices are
        shown as observed, never back-converted.
      </figcaption>
    </figure>
  );
}

/* ── DecisionTable — for /decisions and /compare. ───────────────────────── */
export function DecisionTable({
  caption, options, criteria,
}: {
  caption: string;
  options: string[];
  criteria: { name: string; verdicts: string[] }[];
}) {
  return (
    <figure className="decision-table">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Criterion</th>
            {options.map((o) => <th key={o} scope="col">{o}</th>)}
          </tr>
        </thead>
        <tbody>
          {criteria.map((c) => (
            <tr key={c.name}>
              <th scope="row">{c.name}</th>
              {c.verdicts.map((v, i) => <td key={i}>{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

/* ── FromMyWork — G12. The only legal place for first person. ───────────── */
export function FromMyWork({
  entry, children,
}: {
  /** Resolved from content/experience.json by exp_id. */
  entry: ExperienceEntry;
  children: ReactNode;
}) {
  const company = entry.can_name_company ? entry.context : anonymiseContext(entry.context);
  return (
    <aside className="from-my-work">
      <p className="context">From my work · {company} · {entry.timeframe}</p>
      <div className="claim">{children}</div>
      {entry.numbers.length ? (
        <ul className="numbers">
          {entry.numbers.map((n, i) => (
            <li key={i}>
              {n.metric}: {n.from && n.to ? `${n.from} → ${n.to}` : n.value}
              {n.window ? ` over ${n.window}` : ""}
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}

/**
 * An anonymised entry must not leak the company through its context line.
 * Exported because a leak here is a permission breach, so it is unit-tested
 * rather than trusted (02 §5).
 */
export function anonymiseContext(context: string): string {
  // Keep the trailing qualifiers (sector, dates) and drop the leading subject,
  // which is where the company name sits.
  const rest = context.includes(",") ? context.slice(context.indexOf(",")) : "";
  return `A client${rest}`;
}

/* ── WhatIdDo — verdict plus three steps. Opinion, not experience. ──────── */
export function WhatIdDo({ verdict, steps }: { verdict: string; steps: string[] }) {
  return (
    <aside className="what-id-do">
      <p className="verdict">{verdict}</p>
      <ol>{steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
    </aside>
  );
}

/* ── FAQ — rendered from meta, no JS. ──────────────────────────────────── */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  if (items.length < 3) return null;
  return (
    <section className="faq">
      <h2>Questions</h2>
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

/* ── Sources — B4. Numbered, with excerpt, date and archive fallback. ──── */
export function Sources({ facts, fxNote }: { facts: Fact[]; fxNote?: string }) {
  if (!facts.length) return null;
  return (
    <section className="sources">
      <h2>Sources</h2>
      <ol>
        {facts.map((f) => (
          <li key={f.fact_id} id={f.fact_id}>
            <a href={f.source_url} rel="nofollow noopener" target="_blank">{f.source_title}</a>
            {" — "}
            <q>{f.excerpt}</q>{" "}
            <SourcePill domain={f.source_domain} verifiedOn={f.verified_on} />
            {f.archive_url ? (
              <>
                {" · "}
                <a href={f.archive_url} rel="nofollow noopener" target="_blank">archived</a>
              </>
            ) : null}
            {f.method !== "fetched" ? <span className="method"> · {f.method}</span> : null}
          </li>
        ))}
      </ol>
      {fxNote ? <p className="fx-note">{fxNote}</p> : null}
    </section>
  );
}

/* ── NotAffiliated — G17, required on teardown/compare/pricing-examples. ── */
export function NotAffiliated({ company, verifiedOn }: { company: string; verifiedOn: string }) {
  return (
    <p className="not-affiliated">
      Not affiliated with {company}. Prices and features verified on{" "}
      <time dateTime={verifiedOn}>{verifiedOn}</time>.
    </p>
  );
}

/* ── CTABand — G16. One primary, at most one secondary. ────────────────── */
export function CTABand({ cta }: { cta: PageMeta["cta"] }) {
  return (
    <aside className="cta-band">
      <a className="cta-primary" href={cta.primary.href}>{cta.primary.label}</a>
      {cta.secondary ? (
        <a className="cta-secondary" href={cta.secondary.href}>{cta.secondary.label}</a>
      ) : null}
    </aside>
  );
}

/* ── Breadcrumbs — visible counterpart to the BreadcrumbList node. ─────── */
export function Breadcrumbs({ trail }: { trail: { url: string; name: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={t.url}>
            {i === trail.length - 1 ? (
              <span aria-current="page">{t.name}</span>
            ) : (
              <a href={t.url}>{t.name}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ── RelatedGrid — each card says why the link is there. ───────────────── */
export function RelatedGrid({
  items,
}: {
  items: { url: string; title: string; why: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="related">
      <h2>Related</h2>
      <ul>
        {items.slice(0, 3).map((it) => (
          <li key={it.url}>
            <a href={it.url}>{it.title}</a>
            <p className="why">{it.why}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── AuthorBox — B9, on every page. ───────────────────────────────────── */
export function AuthorBox({
  name, role, proof,
}: {
  name: string; role: string; proof: string[];
}) {
  return (
    <aside className="author-box">
      <p className="name">{name}</p>
      <p className="role">{role}</p>
      <ul>{proof.slice(0, 2).map((p) => <li key={p}>{p}</li>)}</ul>
      <a href="/about">More about how I work</a>
    </aside>
  );
}

/* ── Figure — SVG charts built at build time, no requests. ─────────────── */
export function Figure({
  children, alt, caption,
}: {
  children: ReactNode; alt: string; caption?: string;
}) {
  return (
    <figure className="figure">
      <div role="img" aria-label={alt}>{children}</div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

/* ── Changelog — what changed and when, from meta. ────────────────────── */
export function Changelog({ entries }: { entries: { date: string; note: string }[] }) {
  if (!entries.length) return null;
  return (
    <section className="changelog">
      <h2>Changelog</h2>
      <ul>
        {entries.map((e) => (
          <li key={e.date + e.note}>
            <time dateTime={e.date}>{e.date}</time> — {e.note}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── Example — marks an illustrative figure so G03 exempts it. ─────────── */
export function Example({
  illustrative, children,
}: {
  illustrative?: boolean; children: ReactNode;
}) {
  return (
    <aside className="example" data-illustrative={illustrative ? "true" : undefined}>
      {illustrative ? <p className="label">Illustrative worked example</p> : null}
      {children}
    </aside>
  );
}
