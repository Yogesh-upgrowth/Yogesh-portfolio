import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";
import { Link } from "wouter";
import {
  Seo,
  breadcrumbSchema,
  professionalServiceSchema,
  faqSchema,
} from "@/lib/seo";
import { getPageSeo } from "@shared/seo-meta";
import { SERVICES as CONSULTING_AREAS } from "@shared/services";

const meta = getPageSeo("/contact")!;

/** What I help with — mirrors the four service lines on the homepage. */
const SERVICES = [
  {
    title: "Product strategy & roadmapping",
    body: "Market analysis, user research and prioritisation frameworks that settle what to build and why — and, just as importantly, what not to build.",
  },
  {
    title: "Growth & funnel optimisation",
    body: "Analytics deep-dives, A/B testing and UX audits to find where users drop off and fix it. The outcome is higher conversion, lower CAC and better retention.",
  },
  {
    title: "Monetisation & pricing strategy",
    body: "Pricing model analysis, willingness-to-pay research and upsell loop design that turn engagement into sustainable revenue and higher ARPU.",
  },
  {
    title: "Platform scaling & ops enablement",
    body: "Process automation, tool stack choices and team structures so a product organisation can scale 10x without breaking.",
  },
];

/** The four-step engagement shape, mirroring the process section. */
const PROCESS = [
  ["Frame", "Turn ambiguity into one shared problem statement, grounded in revenue, cost and user behaviour."],
  ["Prioritise", "Isolate the one or two levers that actually move outcomes and explicitly deprioritise the rest."],
  ["Design", "Shape product and monetisation decisions so they compound with usage and volume instead of adding operational load."],
  ["Ship", "Stay close through launch and iteration, tying execution back to adoption, revenue, retention or cost."],
];

const FAQ = [
  {
    question: "What does a product growth and monetisation consultant do?",
    answer:
      "I work with founders and product teams on the three things that decide whether a product makes money: what gets built, where users drop out of the funnel, and how engagement converts into revenue. In practice that means product strategy and roadmapping, funnel and conversion work, and pricing and monetisation design — usually in that order, because pricing a product nobody completes signup for solves the wrong problem.",
  },
  {
    question: "What kind of companies do you work with?",
    answer:
      "Mostly Fintech, Mobility, Marketplaces and consumer internet products — the categories I have spent 9+ years building in. The work travels well to any product with a measurable funnel and a monetisation question, whether that is a consumer app at scale or an early team trying to find its first repeatable revenue loop.",
  },
  {
    question: "How do engagements usually work?",
    answer:
      "Four steps: frame the problem, prioritise the one or two levers that matter, design solutions that scale with volume, then stay close through launch and iteration so the work is accountable to real numbers. Engagements run from short advisory blocks to hands-on involvement through a launch — the shape depends on whether you need a decision made or a thing built.",
  },
  {
    question: "Where are you based, and do you work with teams remotely?",
    answer:
      "I am based in India and work with teams remotely. Most engagements run asynchronously with a regular working session, which suits distributed product teams across time zones.",
  },
  {
    question: "How quickly will I hear back?",
    answer:
      "Within 24 hours. The most useful first message describes what you are building, the number you are trying to move, and what you have already tried — that is usually enough for me to say whether I can help before we spend a call finding out.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path="/contact"
        schema={[
          professionalServiceSchema(),
          faqSchema(FAQ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-24">
        <div className="container px-4 mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Hire a Product Growth &amp; Monetisation Consultant
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell me what you’re building. Let’s see if I can help you scale it.
          </p>
        </div>

        <ContactSection />

        <section
          aria-labelledby="services-heading"
          className="container px-4 mx-auto max-w-4xl py-16 border-t border-border"
        >
          <h2 id="services-heading" className="text-3xl font-serif font-bold mb-3">
            What I help with
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Nine years building Fintech, Mobility, Marketplace and consumer
            internet products, across four areas that tend to arrive together.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-10">
            Where that work is concentrated:{" "}
            {CONSULTING_AREAS.map((s, i) => (
              <span key={s.slug}>
                {i > 0 && (i === CONSULTING_AREAS.length - 1 ? " and " : ", ")}
                <Link href={`/${s.slug}`} className="text-primary underline underline-offset-2">
                  {s.heading.toLowerCase()}
                </Link>
              </span>
            ))}
            .
          </p>
          <p className="text-muted-foreground mt-4">
            The <Link href="/case-studies" className="text-primary underline underline-offset-2">case studies</Link>{" "}
            go through this work in detail, with the numbers attached — or see
            the longer <Link href="/work" className="text-primary underline underline-offset-2">company stories</Link>{" "}
            for how it played out over multi-year engagements.
          </p>
        </section>

        <section
          aria-labelledby="process-heading"
          className="container px-4 mx-auto max-w-4xl py-16 border-t border-border"
        >
          <h2 id="process-heading" className="text-3xl font-serif font-bold mb-10">
            How engagements work
          </h2>
          <ol className="space-y-6">
            {PROCESS.map(([name, body], i) => (
              <li key={name} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{name}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="container px-4 mx-auto max-w-4xl py-16 border-t border-border"
        >
          <h2 id="faq-heading" className="text-3xl font-serif font-bold mb-10">
            Frequently asked questions
          </h2>
          <dl className="space-y-8">
            {FAQ.map((f) => (
              <div key={f.question}>
                <dt className="text-lg font-bold mb-2">{f.question}</dt>
                <dd className="text-muted-foreground">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <Footer />
    </div>
  );
}
