/**
 * ReferenceLayout — the shared layout most archetypes use (03 §7).
 *
 * Assembles the blocks the base contract requires in the order 01 §A gives, so
 * a page cannot forget one: breadcrumbs, H1, the Last verified pill, the answer
 * box, the body, then FAQ, sources, changelog, author box and the CTA band.
 *
 * The LCP element is the H1 or the answer paragraph, never an image (03 §6).
 */
import type { ReactNode } from "react";
import type { Fact, PageMeta } from "@/lib/content/schemas";
import {
  AuthorBox, Breadcrumbs, CTABand, Changelog, FAQ, LastVerified, NotAffiliated, Sources,
} from "../primitives";
import { buildGraph } from "@/lib/schema";
import { entity } from "@/lib/schema/entity";

export interface ReferenceLayoutProps {
  meta: PageMeta;
  facts: Fact[];
  children: ReactNode;
  /** Breadcrumb trail; omitted on hubs. */
  trail?: { url: string; name: string }[];
  /** Company named in the NotAffiliated line, for teardown/compare/pricing. */
  notAffiliatedCompany?: string;
  fxNote?: string;
  /** Hub children for CollectionPage + ItemList. */
  items?: { url: string; name: string }[];
}

export function ReferenceLayout({
  meta, facts, children, trail, notAffiliatedCompany, fxNote, items,
}: ReferenceLayoutProps) {
  const e = entity();
  const graph = buildGraph(meta, {
    items,
    titleFor: (url) => trail?.find((t) => t.url === url)?.name,
  });
  const newestVerification = facts.map((f) => f.verified_on).sort().at(-1) ?? meta.verified_on;

  return (
    <>
      {/* Server-rendered JSON-LD; no client component involved. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main>
        {trail?.length ? <Breadcrumbs trail={trail} /> : null}
        <h1>{meta.h1}</h1>
        <LastVerified date={newestVerification} method="every fact carries its source below" />
        {children}
        {meta.faq?.length ? <FAQ items={meta.faq} /> : null}
        {notAffiliatedCompany ? (
          <NotAffiliated company={notAffiliatedCompany} verifiedOn={newestVerification} />
        ) : null}
        <Sources facts={facts} fxNote={fxNote} />
        <Changelog entries={meta.changelog} />
        <AuthorBox
          name={e.person.name}
          role={e.person.jobTitle}
          proof={[
            "Nine years in product across Indian fintech, mobility and consumer apps",
            "Writes up the interventions that failed alongside the ones that worked",
          ]}
        />
        <CTABand cta={meta.cta} />
      </main>
    </>
  );
}
