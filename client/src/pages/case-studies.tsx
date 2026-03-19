import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import { useInView } from "@/hooks/useInView";

const allCategories = ["All", "Growth", "Product", "Machine Learning", "Design", "SEO"];

// Pre-computed once at module load — never recalculated on render
const categoryCounts = Object.fromEntries(
  allCategories.slice(1).map((cat) => [cat, caseStudies.filter((s) => s.category === cat).length])
);

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  return (
    <Link href={`/case-study/${study.slug}`}>
      <div
        className="group relative bg-background rounded-2xl border border-border overflow-hidden hover-lift hover-glow cursor-pointer h-full flex flex-col"
        data-testid={`case-study-card-${study.slug}`}
        style={{ animationDelay: `${(index % 3) * 0.09}s` }}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-48 bg-muted shrink-0">
          <img
            src={study.image}
            alt={study.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold flex items-center gap-2 text-sm">
              Read Case Study <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
          {/* Category pill */}
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[study.category] ?? "bg-muted text-muted-foreground"}`}>
              {study.category}
            </span>
            {(study.slug === "ml-insurance-prediction" || study.slug === "scaling-moneyratefinder-growth") && (
              <span className="text-xs font-bold px-3 py-1 rounded-full border bg-green-600 text-white border-green-700">
                ✦ Full Write-up
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-serif font-bold text-foreground text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {study.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-2">
            {study.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {study.tags.map((tag) => (
              <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                {tag}
              </span>
            ))}
          </div>

          {/* Meta + CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{study.date}</span>
              <span>·</span>
              <span>{study.readTime}</span>
            </div>
            <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: heroRef, inView: heroVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridVisible } = useInView<HTMLDivElement>();

  const filtered = activeCategory === "All"
    ? caseStudies
    : caseStudies.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-muted/20 border-b border-border">
        <div
          ref={heroRef}
          className={`container px-4 md:px-6 mx-auto text-center reveal ${heroVisible ? "in-view" : ""}`}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight">
            Deep dives into product,<br className="hidden md:block" /> growth, and monetisation
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real strategies. Real outcomes. Behind-the-scenes breakdowns of how products grow and monetise at scale.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 border-b border-border bg-background sticky top-16 z-30 backdrop-blur-md bg-background/90">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-muted/30"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({categoryCounts[cat] ?? 0})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <p className="text-sm text-muted-foreground mb-8 text-center">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> case {filtered.length === 1 ? "study" : "studies"}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>

          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger ${gridVisible ? "in-view" : ""}`}
          >
            {filtered.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
