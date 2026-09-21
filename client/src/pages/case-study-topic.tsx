import { Link, useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NotFound from "@/pages/not-found";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import { CASE_STUDY_TOPICS } from "@shared/seo-data";
import { getPageSeo } from "@shared/seo-meta";
import { Seo, breadcrumbSchema, getModifiedDate } from "@/lib/seo";
import { SITE_URL } from "@shared/seo-data";

/**
 * Intro copy per hub. A hub that is only a filtered list is a doorway page —
 * each one needs to say something the individual studies do not.
 */
const INTROS: Record<
  string,
  { heading: string; body: string[]; themes: { title: string; body: string }[] }
> = {
  Growth: {
    heading: "Product Growth Case Studies",
    body: [
      "Growth work fails in a predictable way: teams add a channel when the problem is that the funnel leaks. Every study below started by finding where users were actually lost, then fixing that step before spending anything on acquisition.",
      "The numbers are the point. Where a result is quoted — 45M monthly active users, 1200% revenue growth, acquisition cost down 30% — the study explains the mechanism that produced it, including the interventions that did not work.",
    ],
    themes: [
      {
        title: "Fix the leak before buying traffic",
        body: "In every case the cheapest growth came from a step that was already losing users. Acquisition spend multiplies whatever conversion rate it lands on, so it goes last, not first.",
      },
      {
        title: "One lever at a time, measured",
        body: "Where several interventions ran in parallel, each was instrumented separately. Otherwise a 1200% result teaches nothing about which change produced it.",
      },
      {
        title: "Loops beat campaigns",
        body: "Referral and engagement loops compound; campaigns decay the moment spend stops. The durable results here all came from mechanisms that ran without ongoing budget.",
      },
    ],
  },
  "Machine Learning": {
    heading: "Machine Learning in Product: Case Studies",
    body: [
      "Most ML in product fails not because the model is bad but because it predicts something nobody can act on. Each study here starts from the decision the model was meant to change: who to target, what to show, when to intervene.",
      "They cover purchase prediction, lifetime-value modelling, churn, real-time intent scoring and user segmentation — with the accuracy trade-offs and the business outcome each one moved.",
    ],
    themes: [
      {
        title: "Start from the decision, not the dataset",
        body: "Each model exists to change a specific action — who gets targeted, what gets shown, when to intervene. A prediction nobody acts on has no value however accurate it is.",
      },
      {
        title: "Accuracy is a trade, not a goal",
        body: "Several of these models were deliberately shipped below their achievable accuracy, because the cost of a false positive was low and the cost of delay was high.",
      },
      {
        title: "Segmentation before sophistication",
        body: "The largest gains came from clustering and intent scoring, not from deeper architectures. Knowing which users to treat differently usually beats predicting any one user better.",
      },
    ],
  },
  Product: {
    heading: "Product Management Case Studies",
    body: [
      "Product decisions that held up under load. These studies deal with the unglamorous side of product work: a CRM that fell over at 22K transactions and had to handle ten times that, notification systems, comparison platforms, and what it takes to ship an MVP in a week without shipping something worthless.",
      "Each one documents the constraint, the options considered, and what the decision cost as well as what it returned.",
    ],
    themes: [
      {
        title: "Scale breaks at the seams",
        body: "The CRM did not fail because the code was slow — it failed at 22K transactions because of architectural decisions that were reasonable at 2K. Rebuilding for 10x load meant changing the shape, not tuning the parts.",
      },
      {
        title: "Aggregation is an operations problem",
        body: "Real-time fare comparison across ride-hailing platforms, and remittance comparison for the Indian market, both turned out to be less about the interface and more about keeping upstream data honest.",
      },
      {
        title: "Utility drives retention better than novelty",
        body: "The calculator app and the notification engine both earned daily use by being reliably useful at a specific moment, rather than by adding features to increase engagement.",
      },
      {
        title: "A 7-day MVP is a scoping discipline",
        body: "Shipping in a week works when the week is spent removing scope. The MVP study documents what was cut and why, which is the part that transfers.",
      },
    ],
  },
  SEO: {
    heading: "SEO Case Studies With Real Traffic Numbers",
    body: [
      "Programmatic SEO done as a product problem rather than a content problem. These studies cover scaling from zero to 100K monthly organic visits, ranking first for competitive fintech terms, and building a position that competitors could not copy quickly.",
      "They include the parts most SEO write-ups leave out: how pages were templated without becoming thin, what got deindexed, and how the traffic was converted once it arrived.",
    ],
    themes: [
      {
        title: "Programmatic pages need a reason to exist",
        body: "Both the 100K-traffic build and the calculator templates generated pages from real data with genuine per-page utility. Templated pages that only recombine keywords get deindexed, and these studies cover which ones did.",
      },
      {
        title: "Reverse-engineering beats guessing",
        body: "The MoneyRateFinder work started by mapping what competitors ranked for and why, then targeting the gaps they could not easily defend. That is a different exercise from keyword volume research.",
      },
      {
        title: "Rankings are worthless until they convert",
        body: "Ranking first for high-intent fintech terms only mattered because the landing experience was built for the intent behind the query. Traffic that bounces is a cost.",
      },
      {
        title: "Defensibility compounds",
        body: "The goal throughout was a position competitors could not copy in a quarter — data depth, internal linking and page templates that get stronger as the corpus grows.",
      },
    ],
  },
  Design: {
    heading: "UX & Design Case Studies, Measured in Conversion",
    body: [
      "Design work judged by what it moved, not how it looked. A redesign worth a 28% conversion lift, microcopy worth 35% more clicks, trust patterns for fintech interfaces, and reducing cognitive load in flows where users were dropping out.",
      "Each study shows the before state, the specific change, and the measured result — including where a visually better design performed worse.",
    ],
    themes: [
      {
        title: "Measure the change, not the mockup",
        body: "Every study here has a before and after number: 28% more conversions, 35% more clicks, higher funnel completion. Design decisions were kept or reverted on that basis.",
      },
      {
        title: "Words are interface",
        body: "The microcopy study moved click-through 35% without changing a single layout. Button labels, headlines and nudges are usually the cheapest available conversion lever.",
      },
      {
        title: "Trust is a design output in fintech",
        body: "Visual hierarchy, social proof and consistent design systems changed whether users believed a financial product enough to continue. That is measurable, not decorative.",
      },
      {
        title: "Less to process, more completed",
        body: "Reducing cognitive load in complex flows improved task completion more than any single visual improvement — the recurring finding being that users abandon effort, not ugliness.",
      },
    ],
  },
};

export default function CaseStudyTopic() {
  const [match, params] = useRoute("/case-studies/:category");
  const topic = match
    ? CASE_STUDY_TOPICS.find((t) => t.slug === params?.category)
    : undefined;

  if (!topic) return <NotFound />;

  const path = `/case-studies/${topic.slug}`;
  const meta = getPageSeo(path)!;
  const intro = INTROS[topic.category];
  const studies = caseStudies.filter((s) => s.category === topic.category);

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: meta.title,
    itemListElement: studies.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/case-study/${s.slug}`,
      name: s.title,
    })),
  };

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path={path}
        modifiedAt={getModifiedDate(path)}
        schema={[
          itemList,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: intro.heading, path },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { name: "Case Studies", href: "/case-studies" },
              { name: topic.category, href: path },
            ]}
          />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            {intro.heading}
          </h1>
          <div className="space-y-4 mb-12">
            {intro.body.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <section aria-labelledby="themes-heading" className="mb-14">
            <h2 id="themes-heading" className="text-2xl font-serif font-bold mb-6">
              What these studies have in common
            </h2>
            <dl className="space-y-6">
              {intro.themes.map((t) => (
                <div key={t.title}>
                  <dt className="text-lg font-bold mb-1">{t.title}</dt>
                  <dd className="text-muted-foreground">{t.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <h2 className="text-2xl font-serif font-bold mb-6">
            {studies.length} {topic.category} case{" "}
            {studies.length === 1 ? "study" : "studies"}
          </h2>
          <ul className="space-y-8">
            {studies.map((s) => (
              <li key={s.slug} className="border-b border-border pb-8">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    categoryColors[s.category] ?? "bg-muted text-muted-foreground"
                  }`}
                >
                  {s.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">
                  <Link
                    href={`/case-study/${s.slug}`}
                    className="text-primary hover:underline"
                  >
                    {s.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground mb-2">{s.description}</p>
                <p className="text-sm text-muted-foreground">
                  {s.readTime} · {s.date}
                </p>
              </li>
            ))}
          </ul>

          <nav aria-label="Other topics" className="mt-14 pt-8 border-t border-border">
            <h2 className="text-xl font-serif font-bold mb-4">Other topics</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {CASE_STUDY_TOPICS.filter((t) => t.slug !== topic.slug).map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/case-studies/${t.slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {t.category}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/case-studies" className="text-primary font-medium hover:underline">
                  All case studies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
