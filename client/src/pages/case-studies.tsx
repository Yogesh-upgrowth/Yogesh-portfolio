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
            {(study.slug === "ml-insurance-prediction" || study.slug === "scaling-moneyratefinder-growth" || study.slug === "seo-moat-remittance") && (
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient + grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-muted/30 to-background pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div
          ref={heroRef}
          className={`relative container px-4 md:px-6 mx-auto text-center reveal ${heroVisible ? "in-view" : ""}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-primary/25 bg-white/80 shadow-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            Case Studies
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Deep dives into<br />
            <span className="text-primary">product, growth,</span><br />
            and monetisation
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Real strategies. Real outcomes. Behind-the-scenes breakdowns of how products grow and monetise at scale.
          </p>

          {/* Stats strip */}
          <div className="inline-flex items-center gap-6 md:gap-10 bg-white/90 backdrop-blur-sm border border-border rounded-2xl px-6 md:px-10 py-4 shadow-sm mx-auto">
            {[
              { value: "26", label: "Case Studies" },
              { value: "9+", label: "Years Experience" },
              { value: "5", label: "Industries" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-serif font-bold text-primary leading-none">{value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="border-y border-border bg-background/95 sticky top-16 z-30 backdrop-blur-md">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {allCategories.map((cat) => {
              const count = cat !== "All" ? (categoryCounts[cat] ?? 0) : caseStudies.length;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  data-testid={`filter-${cat}`}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {cat}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold leading-none ${
                    isActive ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
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
