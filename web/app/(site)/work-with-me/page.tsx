/**
 * /work-with-me — the conversion page (01 §B1 "special").
 *
 * Hand-authored, and excluded from gen-routes so a regenerate cannot overwrite
 * it. Everything here is Yogesh's own offer and pricing rather than sourced
 * third-party data, so it carries no fact table and no verification pill —
 * claiming one would be dishonest about what kind of page this is.
 *
 * Prices are stated in both currencies because they were set that way from the
 * 2026 rate research, not converted at today's rate. That distinction matters:
 * a converted price drifts with the exchange rate and a set price does not.
 */
import type { Metadata } from "next";
import { entity, organizationNode, personNode } from "@/lib/schema/entity";
import { AuthorBox, CTABand, FAQ } from "@/components/primitives";

export const dynamic = "force-static";

const e = entity();
const BOOKING = "https://cal.com/pmyogesh/30min";

export const metadata: Metadata = {
  title: "Work with me — product growth and monetization",
  description:
    "Three ways to work together: a two-week diagnostic, a 90-day growth sprint, or fractional growth leadership. Rates published, in INR and USD.",
  alternates: { canonical: `${e.site}/work-with-me` },
};

interface Engagement {
  name: string; timeframe: string; usd: string; inr: string;
  outcome: string; includes: string[];
}

/** Mirrors shared/services.ts, which sets these from the 2026 rate research. */
const ENGAGEMENTS: Engagement[] = [
  {
    name: "Product growth diagnostic", timeframe: "2 weeks",
    usd: "$2,500", inr: "₹2,40,000",
    outcome: "A ranked list of what is actually costing you revenue, with the evidence for each.",
    includes: ["Funnel and cohort review", "Pricing and packaging read",
               "Instrumentation audit", "Ranked findings with effort and expected impact"],
  },
  {
    name: "Funnel or monetisation audit", timeframe: "3–4 weeks",
    usd: "$4,500", inr: "₹4,30,000",
    outcome: "One of the two halves, in depth: where users leave, or why they do not pay.",
    includes: ["Step-level drop-off analysis", "Paywall and pricing teardown",
               "Benchmark comparison against your category", "A test plan you can run without me"],
  },
  {
    name: "90-day growth sprint", timeframe: "90 days",
    usd: "$18,000", inr: "₹17,25,000",
    outcome: "I stay through implementation. Diagnosis is cheap; shipping the fix is the work.",
    includes: ["Everything in the diagnostic", "Weekly working sessions with your team",
               "Specs written, not just recommended", "Measurement set up before launch, not after"],
  },
  {
    name: "Fractional growth leadership", timeframe: "monthly",
    usd: "$7,500", inr: "₹7,20,000",
    outcome: "I own the growth number alongside your team, part-time and ongoing.",
    includes: ["Roadmap ownership for growth and monetisation", "Hiring and interviewing support",
               "Weekly reviews", "Minimum three months"],
  },
];

const FAQ_ITEMS = [
  { q: "How long before we know whether it worked?",
    a: "The diagnostic gives you findings in two weeks. Whether a fix works takes as long as your traffic needs to reach significance — usually two to six weeks per test, which is why the sprint runs 90 days rather than 30." },
  { q: "Do you work remotely?",
    a: "Yes, from Jaipur, with teams across time zones. I travel for the parts of an engagement that genuinely need a room — a kickoff, a pricing decision, a roadmap reset." },
  { q: "Do you sign an NDA?",
    a: "Yes. I will not publish anything about your product without written approval, and anonymised case studies never carry a metric precise enough to identify the company." },
  { q: "Do you take equity instead of fees?",
    a: "No. Equity aligns incentives over years, and these engagements are measured in weeks. I would rather be judged on whether the number moved." },
  { q: "What do you need from us to start?",
    a: "Analytics access, a walkthrough of the product from someone who knows it, and whoever owns the growth number in the room for the first session." },
];

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    personNode(),
    organizationNode(),
    ...ENGAGEMENTS.map((x) => ({
      "@type": "Service",
      "@id": `${e.site}/work-with-me#${x.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: x.name,
      description: x.outcome,
      provider: { "@id": `${e.site}/about#yogesh` },
      areaServed: e.organization.areaServed,
      offers: {
        "@type": "Offer",
        priceSpecification: [
          { "@type": "PriceSpecification", price: x.usd.replace(/[^0-9]/g, ""), priceCurrency: "USD" },
          { "@type": "PriceSpecification", price: x.inr.replace(/[^0-9]/g, ""), priceCurrency: "INR" },
        ],
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${e.site}/work-with-me#faq`,
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function WorkWithMe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main>
        <h1>Work with me</h1>
        <div className="answer-box">{e.person.jobTitle}</div>

        <p>
          Rates are published below. Withholding them wastes a call for both of
          us, and the number is rarely the thing that decides it.
        </p>

        <h2>Three ways to work together</h2>
        {ENGAGEMENTS.map((x) => (
          <section key={x.name} className="engagement">
            <h3>{x.name}</h3>
            <p className="engagement-price">
              <span className="num">{x.usd}</span> / <span className="num">{x.inr}</span>
              <span className="source-pill"> · {x.timeframe}</span>
            </p>
            <p>{x.outcome}</p>
            <ul>{x.includes.map((i) => <li key={i}>{i}</li>)}</ul>
          </section>
        ))}
        <p className="source-pill">
          Both currencies are quoted at &#8377;95.89/$1, the RBI reference rate
          of 25 September 2026. Rates are derived from the benchmark bands in{" "}
          <code>seo/config/rate-benchmarks.json</code>, not chosen.
        </p>

        <h2>Who this is not for</h2>
        <p>
          Pre-launch products with no users, because there is no funnel to read.
          Teams who want a deck rather than a change. Anyone who needs the answer
          to be that the price is right — sometimes it is, and I will say so, but
          if that is the only acceptable finding then the diagnostic is a waste
          of money.
        </p>

        <h2>How it starts</h2>
        <p>
          A 30-minute call. Bring the number that will not move. If I am not the
          right person, I will say so on that call rather than after an invoice.
        </p>

        <FAQ items={FAQ_ITEMS} />

        <AuthorBox
          name={e.person.name}
          role={e.person.jobTitle}
          proof={[
            "Scaled a consumer product from 3.8M to 45M+ monthly active users",
            "Rebuilt an insurance funnel into a 680× revenue line",
          ]}
        />
        <CTABand
          cta={{
            primary: { label: "Book a 30-minute product growth call", href: BOOKING },
            secondary: { label: "Read the case studies first", href: "/case-studies" },
          }}
        />
      </main>
    </>
  );
}
