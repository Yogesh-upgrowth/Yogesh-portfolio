import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { caseStudies } from "@/data/caseStudies";
import { SERVICES, servicePath } from "@shared/services";
import { PROOF } from "@shared/proof";
import { SITE_URL, WORK_STORY_SLUGS } from "@shared/seo-data";
import { getPageSeo } from "@shared/seo-meta";
import {
  Seo,
  personSchema,
  breadcrumbSchema,
  getModifiedDate,
  LINKEDIN_URL,
  CONTACT_EMAIL,
  PERSON_ID,
} from "@/lib/seo";

export const ABOUT_PATH = "/about-yogesh-yadav";

/** The documented career arc. Roles and companies match the work stories. */
const ROLES = [
  {
    company: "Loanwiser",
    role: "Associate Product Manager",
    field: "Fintech · Lending",
    slug: "loanwiser",
    body: "Lending, where the product problem was lead quality rather than lead volume. Banks were drowning in applications that would never disburse, and the work was making the funnel select for the ones that would.",
  },
  {
    company: "CarInfo / AppFlix",
    role: "Senior Product Manager",
    field: "Consumer · Mobility",
    slug: "carinfo",
    body: "A consumer vehicle-information utility that grew from 3.8M to 45M+ monthly active users. Programmatic organic pages, engagement loops and referral did the work; the insurance revenue line grew on the back of the traffic rather than alongside it.",
  },
  {
    company: "KNIPEX Tools",
    role: "Product Marketing",
    field: "Operations · Distribution",
    slug: "knipex",
    body: "Selling German pliers in India, which is not a software problem and taught me more about distribution constraints than any software role has.",
  },
  {
    company: "UpGrowth",
    role: "Product Head",
    field: "Leadership · Multi-product",
    slug: "upgrowth",
    body: "Running four products across a team of 50+, where the job stopped being product decisions and became making sure fifty people made coherent ones without me in the room.",
  },
];

const PRINCIPLES = [
  {
    title: "The constraint is usually not where the chart points",
    body: "In nearly every engagement, the step losing the most is upstream of the one the data blames. Analytics show where users stopped; they rarely show where the decision to stop was actually made.",
  },
  {
    title: "Fix the funnel before buying traffic",
    body: "Acquisition spend multiplies whatever conversion rate it lands on. Buying more users into a leaking funnel is the most expensive way to discover it leaks.",
  },
  {
    title: "Instrument before optimising",
    body: "A change that ships alongside three others teaches nothing about which one worked. Most teams I meet are not short of ideas; they are short of the ability to tell which idea paid.",
  },
  {
    title: "Say what did not work",
    body: "Every case study on this site includes the interventions that failed. A write-up with no failures in it is marketing, and it is useless to anyone trying to repeat the result.",
  },
];

export default function About() {
  const meta = getPageSeo(ABOUT_PATH)!;
  const documented = PROOF.filter(
    (c) => c.source.kind === "case-study" || c.source.kind === "work-story"
  );

  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}${ABOUT_PATH}#profilepage`,
    url: `${SITE_URL}${ABOUT_PATH}`,
    name: meta.title,
    dateModified: getModifiedDate(ABOUT_PATH),
    mainEntity: { "@id": PERSON_ID },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path={ABOUT_PATH}
        type="profile"
        modifiedAt={getModifiedDate(ABOUT_PATH)}
        schema={[
          personSchema(),
          profilePage,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Yogesh Yadav", path: ABOUT_PATH },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "About", href: ABOUT_PATH }]} />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            About Yogesh Yadav
          </h1>
          <div className="space-y-4 mb-14">
            <p className="text-lg text-muted-foreground">
              I am a product growth and monetisation consultant. For the last
              nine years I have worked on consumer and fintech products in
              India — the kind with large user numbers, thin margins per user,
              and a revenue line that only works if the funnel underneath it
              does.
            </p>
            <p className="text-muted-foreground">
              This page exists partly so search engines can resolve who writes
              everything else here, and partly because anyone considering
              working with me should be able to check the claims. Every figure
              on this site is recorded against its source, and where a number
              has no evidence published behind it, the site says so rather than
              quietly using it anyway.
            </p>
          </div>

          <section aria-labelledby="work-heading" className="mb-16">
            <h2 id="work-heading" className="text-2xl font-serif font-bold mb-8">
              Where I have worked
            </h2>
            <ol className="space-y-8">
              {ROLES.map((r) => (
                <li key={r.company} className="border-l-2 border-primary/20 pl-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                    {r.field}
                  </p>
                  <h3 className="text-lg font-bold">
                    {r.role},{" "}
                    <Link
                      href={`/work/${r.slug}`}
                      className="text-primary hover:underline"
                    >
                      {r.company}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mt-2">{r.body}</p>
                </li>
              ))}
            </ol>
            <p className="text-muted-foreground mt-8">
              Each of those is written up at length in the{" "}
              <Link href="/work" className="text-primary underline underline-offset-2">
                company stories
              </Link>
              , which run considerably longer than a CV entry and include the
              parts that went badly.
            </p>
          </section>

          <section
            aria-labelledby="principles-heading"
            className="mb-16 pt-10 border-t border-border"
          >
            <h2 id="principles-heading" className="text-2xl font-serif font-bold mb-8">
              How I work
            </h2>
            <dl className="space-y-7">
              {PRINCIPLES.map((p) => (
                <div key={p.title}>
                  <dt className="text-lg font-bold mb-1">{p.title}</dt>
                  <dd className="text-muted-foreground">{p.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="evidence-heading"
            className="mb-16 pt-10 border-t border-border"
          >
            <h2 id="evidence-heading" className="text-2xl font-serif font-bold mb-3">
              What the numbers are attached to
            </h2>
            <p className="text-muted-foreground mb-6">
              These are the headline figures used across the site, each recorded
              against the work it came from.
            </p>
            <dl className="space-y-3 mb-6">
              {documented.map((c) => (
                <div key={c.id} className="flex flex-wrap items-baseline gap-x-3">
                  <dt className="font-bold text-primary tabular-nums">{c.value}</dt>
                  <dd className="text-muted-foreground">
                    {c.label}
                    {c.note ? ` — ${c.note}` : ""}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-muted-foreground">
              The{" "}
              <Link href="/case-studies" className="text-primary underline underline-offset-2">
                {caseStudies.length} case studies
              </Link>{" "}
              carry the rest, with the working shown.
            </p>
          </section>

          <section
            aria-labelledby="consulting-heading"
            className="mb-16 pt-10 border-t border-border"
          >
            <h2 id="consulting-heading" className="text-2xl font-serif font-bold mb-5">
              What I consult on
            </h2>
            <ul className="space-y-3 mb-6">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    className="text-primary font-medium hover:underline"
                  >
                    {s.heading}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              Not sure which applies? The{" "}
              <Link
                href="/product-growth-score"
                className="text-primary underline underline-offset-2"
              >
                Product Growth Score
              </Link>{" "}
              is thirteen questions and takes about five minutes.
            </p>
          </section>

          <section
            aria-labelledby="contact-heading"
            className="pt-10 border-t border-border"
          >
            <h2 id="contact-heading" className="text-2xl font-serif font-bold mb-5">
              Elsewhere and in touch
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-primary font-medium underline underline-offset-2"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary font-medium underline underline-offset-2"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-primary font-medium underline underline-offset-2">
                  Start a conversation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary font-medium underline underline-offset-2">
                  Everything I have written
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
