/**
 * /about — the entity anchor (03 §9.7).
 *
 * Hand-written rather than generated: it is not an inventory row, it carries no
 * third-party facts, and it is what /about-yogesh-yadav now 301s to.
 *
 * Deliberately carries no scale figures. The CarInfo number is unresolved
 * (AUDIT.md D2: shared/proof.ts registers 1.2M+ DAU as unsourced while the rest
 * of the site says 3.8M to 45M+ MAU), and the entity page is the worst place to
 * assert a number that two of our own files disagree about. Roles, industries
 * and dates are biographical and need no external source.
 */
import type { Metadata } from "next";
import { entity, organizationNode, personNode, websiteNode } from "@/lib/schema/entity";
import { AuthorBox, CTABand } from "@/components/primitives";

export const dynamic = "force-static";

const e = entity();

export const metadata: Metadata = {
  title: "About Yogesh Yadav — product growth consultant",
  description:
    "Product growth and monetization consultant for consumer and subscription apps. Nine years in product across Indian fintech, mobility and consumer internet.",
  alternates: { canonical: `${e.site}/about` },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [personNode(), organizationNode(), websiteNode()],
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main>
        <h1>Yogesh Yadav</h1>

        <div className="answer-box">
          {e.person.jobTitle}
        </div>

        <h2>What I actually work on</h2>
        <p>
          The part of a product that decides whether it makes money: where users
          drop out before they ever pay, whether the ones you acquire earn back
          what they cost, and when to ask for money at all.
        </p>
        <p>
          Most engagements start with a diagnostic, because agreeing what is
          broken before committing to a fix saves both sides a quarter. I work
          equally in discovery and in delivery — writing the spec, instrumenting
          the funnel, and staying with the release long enough to know whether
          it worked.
        </p>

        <h2>Where I have done it</h2>
        <p>
          Nine years in product, across lending and insurance distribution at
          Loanwiser, consumer mobility at CarInfo, industrial tooling at KNIPEX,
          and four products at UpGrowth. I founded TripMojo.
        </p>
        <p>
          That range matters less than the pattern in it: every one of those was
          a product where usage and revenue had come apart, and the work was
          finding which of the two was lying.
        </p>

        <h2>How I write things up</h2>
        <p>
          Every page on this site carries its sources and the date each fact was
          checked. Case studies include the interventions that did nothing,
          because a list of only the wins is a sales document rather than a
          record. Where no public figure exists, the page says so instead of
          estimating quietly.
        </p>

        <h2>Where I am</h2>
        <p>
          Jaipur, Rajasthan. I work remotely with teams across time zones, and
          travel for the parts of an engagement that genuinely need a room.
        </p>

        <AuthorBox
          name={e.person.name}
          role={e.person.jobTitle}
          proof={[
            "Nine years in product across Indian fintech, mobility and consumer apps",
            "Publishes the interventions that failed alongside the ones that worked",
          ]}
        />
        <CTABand
          cta={{
            primary: { label: "Book a product growth call", href: "/work-with-me" },
            secondary: { label: "Read the case studies", href: "/case-studies" },
          }}
        />
      </main>
    </>
  );
}
