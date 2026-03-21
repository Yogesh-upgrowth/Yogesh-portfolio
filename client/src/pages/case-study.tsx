import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import NotFound from "@/pages/not-found";

// ── Original 3 full write-ups ─────────────────────────────────────────────────
const MLInsuranceCaseStudy = lazy(() => import("@/pages/ml-insurance-content"));
const MoneyRateFinderCaseStudy = lazy(() => import("@/pages/moneyratefinder-content"));
const SeoMoatCaseStudy = lazy(() => import("@/pages/seo-moat-content"));

// ── 23 new full write-ups ─────────────────────────────────────────────────────
const PredictHighLtvContent = lazy(() => import("@/pages/cs-predict-high-ltv-content"));
const RealTimeIntentContent = lazy(() => import("@/pages/cs-real-time-intent-content"));
const MlReduceCacContent = lazy(() => import("@/pages/cs-ml-reduce-cac-content"));
const ChurnModelContent = lazy(() => import("@/pages/cs-churn-model-content"));
const MlClusteringInsuranceContent = lazy(() => import("@/pages/cs-ml-clustering-insurance-content"));
const InsuranceCtaContent = lazy(() => import("@/pages/cs-insurance-cta-content"));
const GrowthLoopContent = lazy(() => import("@/pages/cs-growth-loop-content"));
const FunnelDropoffContent = lazy(() => import("@/pages/cs-funnel-dropoff-content"));
const ZeroCostGrowthContent = lazy(() => import("@/pages/cs-zero-cost-growth-content"));
const CabFareContent = lazy(() => import("@/pages/cs-cab-fare-content"));
const ComparisonPlatformContent = lazy(() => import("@/pages/cs-comparison-platform-content"));
const NotificationSystemContent = lazy(() => import("@/pages/cs-notification-system-content"));
const FinanceCalculatorContent = lazy(() => import("@/pages/cs-finance-calculator-content"));
const Mvp7DaysContent = lazy(() => import("@/pages/cs-mvp-7-days-content"));
const UxRedesignContent = lazy(() => import("@/pages/cs-ux-redesign-content"));
const FintechTrustContent = lazy(() => import("@/pages/cs-fintech-trust-content"));
const MicrocopyContent = lazy(() => import("@/pages/cs-microcopy-content"));
const CognitiveLoadContent = lazy(() => import("@/pages/cs-cognitive-load-content"));
const Seo0To100kContent = lazy(() => import("@/pages/cs-seo-0-to-100k-content"));
const Rank1FintechContent = lazy(() => import("@/pages/cs-rank-1-fintech-content"));
const ProgrammaticSeoContent = lazy(() => import("@/pages/cs-programmatic-seo-content"));
const AiRecommendationContent = lazy(() => import("@/pages/cs-ai-recommendation-content"));
const MlUxGrowthContent = lazy(() => import("@/pages/cs-ml-ux-growth-content"));

// ── Slugs that have a full write-up ──────────────────────────────────────────
const FULL_WRITEUP_SLUGS = new Set([
  "ml-insurance-prediction",
  "scaling-moneyratefinder-growth",
  "seo-moat-remittance",
  "predict-high-ltv-users-ml",
  "real-time-intent-scoring-engine",
  "ml-reduce-cac-segmentation",
  "predict-user-dropoff-churn-model",
  "ml-user-clustering-insurance",
  "insurance-cta-2x-growth",
  "growth-loop-repeat-users",
  "funnel-dropoff-ux-optimization",
  "zero-cost-growth-engine",
  "cab-fare-comparison-engine",
  "comparison-platform-india",
  "scalable-notification-system",
  "finance-calculator-app-retention",
  "mvp-in-7-days",
  "ux-redesign-conversion-28",
  "fintech-trust-ui-patterns",
  "microcopy-ctr-increase",
  "reduce-cognitive-load",
  "seo-0-to-100k",
  "rank-1-fintech-keywords",
  "programmatic-seo-calculators",
  "ai-recommendation-engine",
  "ml-ux-growth-3x-conversion",
]);

// ── Shared ToC for the 23 new case studies (all use same section IDs) ─────────
const STANDARD_TOC = [
  { id: "hook", label: "The Hook" },
  { id: "early-data", label: "Early Data" },
  { id: "segmentation", label: "Segmentation" },
  { id: "reframe", label: "Strategic Reframe" },
  { id: "framework", label: "Framework" },
  { id: "system-design", label: "System Design" },
  { id: "execution", label: "Execution" },
  { id: "results", label: "Results" },
  { id: "insights", label: "Deep Insights" },
  { id: "failures", label: "Failure Points" },
  { id: "future", label: "Future Evolution" },
];

// ── Per-slug ToC definitions ──────────────────────────────────────────────────
const tocMap: Record<string, { id: string; label: string }[]> = {
  "ml-insurance-prediction": [
    { id: "hook", label: "The Problem" },
    { id: "context", label: "Context" },
    { id: "problem-statement", label: "Problem Statement" },
    { id: "key-insight", label: "Key Insight" },
    { id: "data-strategy", label: "Data Strategy" },
    { id: "ml-model", label: "ML Model" },
    { id: "product-integration", label: "Product Integration" },
    { id: "results", label: "Results" },
    { id: "learnings", label: "Learnings" },
    { id: "future", label: "Future Scope" },
  ],
  "scaling-moneyratefinder-growth": [
    { id: "hook", label: "The Vanity Metric" },
    { id: "reframe", label: "Strategic Shift" },
    { id: "intent-mapping", label: "Intent Mapping" },
    { id: "seo-engine", label: "SEO Engine" },
    { id: "scaling", label: "Scaling Phases" },
    { id: "results", label: "Results" },
    { id: "learnings", label: "What Worked" },
    { id: "challenges", label: "Challenges" },
    { id: "future", label: "Future Scope" },
  ],
  "seo-moat-remittance": [
    { id: "hook", label: "SEO Was Broken" },
    { id: "root-cause", label: "Root Cause" },
    { id: "reframe", label: "The Strategic Shift" },
    { id: "competitor-analysis", label: "Competitor Deconstruction" },
    { id: "seo-engine", label: "Our SEO Engine" },
    { id: "execution", label: "Execution" },
    { id: "failures", label: "What Didn't Work" },
    { id: "results", label: "Results" },
    { id: "takeaways", label: "Key Takeaways" },
    { id: "future", label: "What's Next" },
  ],
  "predict-high-ltv-users-ml": STANDARD_TOC,
  "real-time-intent-scoring-engine": STANDARD_TOC,
  "ml-reduce-cac-segmentation": STANDARD_TOC,
  "predict-user-dropoff-churn-model": STANDARD_TOC,
  "ml-user-clustering-insurance": STANDARD_TOC,
  "insurance-cta-2x-growth": STANDARD_TOC,
  "growth-loop-repeat-users": STANDARD_TOC,
  "funnel-dropoff-ux-optimization": STANDARD_TOC,
  "zero-cost-growth-engine": STANDARD_TOC,
  "cab-fare-comparison-engine": STANDARD_TOC,
  "comparison-platform-india": STANDARD_TOC,
  "scalable-notification-system": STANDARD_TOC,
  "finance-calculator-app-retention": STANDARD_TOC,
  "mvp-in-7-days": STANDARD_TOC,
  "ux-redesign-conversion-28": STANDARD_TOC,
  "fintech-trust-ui-patterns": STANDARD_TOC,
  "microcopy-ctr-increase": STANDARD_TOC,
  "reduce-cognitive-load": STANDARD_TOC,
  "seo-0-to-100k": STANDARD_TOC,
  "rank-1-fintech-keywords": STANDARD_TOC,
  "programmatic-seo-calculators": STANDARD_TOC,
  "ai-recommendation-engine": STANDARD_TOC,
  "ml-ux-growth-3x-conversion": STANDARD_TOC,
};

/* ─── Reading Progress Bar ─── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div className="h-full bg-primary transition-none" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ─── Sticky Table of Contents (per-slug) ─── */
function TableOfContents({ slug }: { slug: string }) {
  const items = tocMap[slug] ?? [];
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [slug]);

  if (!items.length) return null;

  return (
    <nav className="hidden xl:block sticky top-28 self-start w-56 shrink-0">
      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">On this page</p>
      <ul className="space-y-1">
        {items.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`text-left w-full text-sm py-1.5 px-3 rounded-lg transition-all ${
                active === id
                  ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ─── Lazy content resolver ─── */
function FullWriteup({ slug }: { slug: string }) {
  const Skeleton = (
    <div className="animate-pulse space-y-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-5 bg-muted rounded" style={{ width: `${75 + (i % 3) * 10}%` }} />
      ))}
    </div>
  );

  const componentMap: Record<string, React.LazyExoticComponent<() => JSX.Element>> = {
    "ml-insurance-prediction": MLInsuranceCaseStudy,
    "scaling-moneyratefinder-growth": MoneyRateFinderCaseStudy,
    "seo-moat-remittance": SeoMoatCaseStudy,
    "predict-high-ltv-users-ml": PredictHighLtvContent,
    "real-time-intent-scoring-engine": RealTimeIntentContent,
    "ml-reduce-cac-segmentation": MlReduceCacContent,
    "predict-user-dropoff-churn-model": ChurnModelContent,
    "ml-user-clustering-insurance": MlClusteringInsuranceContent,
    "insurance-cta-2x-growth": InsuranceCtaContent,
    "growth-loop-repeat-users": GrowthLoopContent,
    "funnel-dropoff-ux-optimization": FunnelDropoffContent,
    "zero-cost-growth-engine": ZeroCostGrowthContent,
    "cab-fare-comparison-engine": CabFareContent,
    "comparison-platform-india": ComparisonPlatformContent,
    "scalable-notification-system": NotificationSystemContent,
    "finance-calculator-app-retention": FinanceCalculatorContent,
    "mvp-in-7-days": Mvp7DaysContent,
    "ux-redesign-conversion-28": UxRedesignContent,
    "fintech-trust-ui-patterns": FintechTrustContent,
    "microcopy-ctr-increase": MicrocopyContent,
    "reduce-cognitive-load": CognitiveLoadContent,
    "seo-0-to-100k": Seo0To100kContent,
    "rank-1-fintech-keywords": Rank1FintechContent,
    "programmatic-seo-calculators": ProgrammaticSeoContent,
    "ai-recommendation-engine": AiRecommendationContent,
    "ml-ux-growth-3x-conversion": MlUxGrowthContent,
  };

  const Component = componentMap[slug];
  if (!Component) return null;

  return (
    <Suspense fallback={Skeleton}>
      <Component />
    </Suspense>
  );
}

/* ─── Coming Soon placeholder ─── */
function ComingSoonContent({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="mt-8">
      <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">{study.description}</p>
      <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-10 md:p-16 text-center">
        <div className="text-5xl mb-4">🚧</div>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Detailed case study coming soon</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          The full breakdown — strategy, execution, results, and learnings — is being written up. Reach out if you'd like to discuss this directly.
        </p>
        <Button asChild><Link href="/contact">Discuss this with Yogesh →</Link></Button>
      </div>
    </div>
  );
}

/* ─── Related + Prev/Next Case Studies ─── */
function RelatedCaseStudies({ currentSlug }: { currentSlug: string }) {
  const current = caseStudies.find((s) => s.slug === currentSlug);
  if (!current) return null;

  const currentIndex = caseStudies.findIndex((s) => s.slug === currentSlug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const related = caseStudies
    .filter((s) => s.slug !== currentSlug)
    .map((s) => {
      let score = 0;
      if (s.category === current.category) score += 3;
      current.tags.forEach((t) => { if (s.tags.includes(t)) score += 1; });
      return { study: s, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ study }) => study);

  return (
    <div className="mt-16 space-y-10">
      {/* Prev / Next navigation */}
      {(prevStudy || nextStudy) && (
        <div className="grid grid-cols-2 gap-4 pt-10 border-t border-border">
          {prevStudy ? (
            <Link href={`/case-study/${prevStudy.slug}`}>
              <div className="group p-5 rounded-xl border border-border hover:border-primary/40 hover-lift cursor-pointer transition-all">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  <ArrowLeft className="h-3.5 w-3.5" /> Previous
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {prevStudy.title}
                </p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border mt-2 inline-block ${categoryColors[prevStudy.category] ?? "bg-muted text-muted-foreground"}`}>
                  {prevStudy.category}
                </span>
              </div>
            </Link>
          ) : <div />}

          {nextStudy ? (
            <Link href={`/case-study/${nextStudy.slug}`}>
              <div className="group p-5 rounded-xl border border-border hover:border-primary/40 hover-lift cursor-pointer transition-all text-right">
                <p className="flex items-center justify-end gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Next <ArrowRight className="h-3.5 w-3.5" />
                </p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                  {nextStudy.title}
                </p>
                <div className="flex justify-end mt-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border inline-block ${categoryColors[nextStudy.category] ?? "bg-muted text-muted-foreground"}`}>
                    {nextStudy.category}
                  </span>
                </div>
              </div>
            </Link>
          ) : <div />}
        </div>
      )}

      {/* Related studies */}
      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-serif font-bold text-foreground mb-5">You might also like</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((s) => (
              <Link key={s.slug} href={`/case-study/${s.slug}`}>
                <div className="group rounded-xl border border-border overflow-hidden hover:border-primary/40 hover-lift cursor-pointer transition-all h-full flex flex-col">
                  <div className="relative h-36 overflow-hidden bg-muted">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className={`absolute bottom-3 left-3 text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[s.category] ?? "bg-muted text-muted-foreground"}`}>
                      {s.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-3 flex-1">
                      {s.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {s.readTime}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="pt-8 border-t border-border">
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/case-studies">
            <div className="p-5 rounded-xl border border-border hover-lift hover-glow cursor-pointer text-center group">
              <p className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">All Case Studies</p>
              <p className="text-sm text-muted-foreground">Browse all 26 breakdowns</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 hover-lift cursor-pointer text-center">
              <p className="font-bold text-primary mb-1">Work With Me</p>
              <p className="text-sm text-muted-foreground">Let's build something together</p>
            </div>
          </Link>
          <a href="https://linkedin.com/in/yogeshyadav" target="_blank" rel="noopener noreferrer">
            <div className="p-5 rounded-xl border border-border hover-lift cursor-pointer text-center group">
              <p className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Connect on LinkedIn</p>
              <p className="text-sm text-muted-foreground">Follow for more insights</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return <NotFound />;

  const isFullWriteup = FULL_WRITEUP_SLUGS.has(slug);

  return (
    <>
      {isFullWriteup && <ReadingProgress />}
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />

        {/* Hero */}
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden mt-16 bg-muted">
          <img
            src={study.image.replace("w=400&q=65", "w=900&q=75")}
            alt={study.title}
            width="1200"
            height="420"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-5xl">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border mb-4 inline-block ${categoryColors[study.category] ?? "bg-muted text-muted-foreground"}`}>
                {study.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight max-w-3xl mb-4">
                {study.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <span className="flex items-center gap-1.5"><User className="h-4 w-4" />Yogesh Yadav</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{study.readTime}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{study.date}</span>
                {study.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container px-4 md:px-6 mx-auto max-w-5xl py-12">
          <Link href="/case-studies">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </button>
          </Link>

          <div className="flex gap-12 items-start">
            {isFullWriteup && <TableOfContents slug={slug} />}
            <main className="flex-1 min-w-0" style={{ fontSize: "17px", lineHeight: "1.85" }}>
              {isFullWriteup ? (
                <FullWriteup slug={slug} />
              ) : (
                <ComingSoonContent study={study} />
              )}
              <RelatedCaseStudies currentSlug={slug} />
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
