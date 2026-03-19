import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import NotFound from "@/pages/not-found";

// Lazy-load each full write-up — only fetched when that specific slug is visited
const MLInsuranceCaseStudy = lazy(() => import("@/pages/ml-insurance-content"));
const MoneyRateFinderCaseStudy = lazy(() => import("@/pages/moneyratefinder-content"));

// Slugs that have a full write-up
const FULL_WRITEUP_SLUGS = new Set(["ml-insurance-prediction", "scaling-moneyratefinder-growth"]);

// Per-slug ToC definitions
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

  if (slug === "ml-insurance-prediction") {
    return (
      <Suspense fallback={Skeleton}>
        <MLInsuranceCaseStudy />
      </Suspense>
    );
  }
  if (slug === "scaling-moneyratefinder-growth") {
    return (
      <Suspense fallback={Skeleton}>
        <MoneyRateFinderCaseStudy />
      </Suspense>
    );
  }
  return null;
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

/* ─── End CTA ─── */
function EndCTA() {
  return (
    <div className="mt-16 pt-10 border-t border-border">
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">What's next?</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <Link href="/case-studies">
          <div className="p-5 rounded-xl border border-border hover-lift hover-glow cursor-pointer text-center group">
            <p className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Explore More Case Studies</p>
            <p className="text-sm text-muted-foreground">See all 26 breakdowns</p>
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
              <EndCTA />
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
