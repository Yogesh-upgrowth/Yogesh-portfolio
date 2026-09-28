/**
 * Archetype layouts — 03-TECHNICAL-SPEC §7.
 *
 * Most archetypes share ReferenceLayout. These four differ in ways that matter
 * to their contract, so they wrap it rather than reimplement it: the base
 * contract's block order stays in one place.
 */
import type { ReactNode } from "react";
import type { Fact, PageMeta } from "@/lib/content/schemas";
import { ReferenceLayout, type ReferenceLayoutProps } from "./ReferenceLayout";
import { CTABand, RelatedGrid } from "../primitives";

export { ReferenceLayout };
export type { ReferenceLayoutProps };

/**
 * ServiceLayout — BOFU. 01 §B2 allows the CTA above the fold here, which is the
 * one place the TOFU rule in G16 does not apply.
 */
export function ServiceLayout(
  props: ReferenceLayoutProps & { industryVariants?: { url: string; name: string }[] },
) {
  const { industryVariants, children, ...rest } = props;
  return (
    <ReferenceLayout {...rest}>
      {/* Repeated CTA at the top is deliberate for a transactional page. */}
      <CTABand cta={rest.meta.cta} />
      {children}
      {industryVariants?.length ? (
        <section className="industry-variants">
          <h2>By industry</h2>
          <ul>
            {industryVariants.map((v) => (
              <li key={v.url}><a href={v.url}>{v.name}</a></li>
            ))}
          </ul>
        </section>
      ) : null}
    </ReferenceLayout>
  );
}

/**
 * ToolLayout — inputs left, results right on desktop; stacked on mobile.
 * The calculator is the only client island on the page (03 §6).
 */
export function ToolLayout(
  props: ReferenceLayoutProps & { calculator: ReactNode; method?: ReactNode },
) {
  const { calculator, method, children, ...rest } = props;
  return (
    <ReferenceLayout {...rest}>
      <div className="tool-shell">{calculator}</div>
      {children}
      {method ? (
        <section className="tool-method">
          <h2>How this is calculated</h2>
          {method}
        </section>
      ) : null}
    </ReferenceLayout>
  );
}

/**
 * HubLayout — curated intro, hand-picked cards, then the full index.
 * 01 §B1 forbids an auto-dumped list, so `picks` is required rather than
 * optional: a hub with no curation is a contract failure, not a styling choice.
 */
export function HubLayout({
  meta, facts, picks, index, children,
}: {
  meta: PageMeta;
  facts: Fact[];
  picks: { url: string; title: string; why: string }[];
  index: { url: string; name: string }[];
  children: ReactNode;
}) {
  return (
    <ReferenceLayout meta={meta} facts={facts} items={index}>
      {children}
      <RelatedGrid items={picks} />
      <section className="hub-index">
        <h2>Everything in this section</h2>
        {/* Server-rendered list; any filter enhances it progressively (03 §6). */}
        <ul>
          {index.map((it) => (
            <li key={it.url}><a href={it.url}>{it.name}</a></li>
          ))}
        </ul>
      </section>
    </ReferenceLayout>
  );
}

/**
 * CaseStudyLayout — proof. The permission line is not optional: a case study
 * whose numbers are client_approved or anonymised must say so, or a reader
 * cannot tell what has been cleared for publication (02 §5).
 */
export function CaseStudyLayout(
  props: ReferenceLayoutProps & {
    permission: "public" | "client_approved" | "anonymised" | "founder_own";
    outcome: { metric: string; from?: string; to?: string; window?: string }[];
  },
) {
  const { permission, outcome, children, ...rest } = props;
  return (
    <ReferenceLayout {...rest}>
      {outcome.length ? (
        <figure className="outcome-strip">
          <table>
            <caption>Outcome</caption>
            <thead>
              <tr><th scope="col">Metric</th><th scope="col">Before</th>
                  <th scope="col">After</th><th scope="col">Window</th></tr>
            </thead>
            <tbody>
              {outcome.map((o) => (
                <tr key={o.metric}>
                  <th scope="row">{o.metric}</th>
                  <td className="num">{o.from ?? "—"}</td>
                  <td className="num">{o.to ?? "—"}</td>
                  <td>{o.window ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </figure>
      ) : null}
      {children}
      <p className="permission-note">
        {permission === "public"
          ? "Published figures, verifiable from the sources below."
          : permission === "client_approved"
            ? "Figures published with the client's written approval."
            : permission === "anonymised"
              ? "Client and identifying figures withheld; ranges only."
              : "Figures from a product I founded."}
      </p>
    </ReferenceLayout>
  );
}
