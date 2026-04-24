import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, BookOpen, Pen } from "lucide-react";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  getFeaturedPost,
  formatDate,
  type BlogPost,
} from "@/lib/blog-data";
import { useState, useMemo, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const CAT_DOT: Record<string, string> = {
  "PM Fundamentals":       "bg-blue-500",
  "PM Strategy":           "bg-indigo-500",
  "Data-Driven PM":        "bg-cyan-500",
  "AI in Product":         "bg-violet-500",
  "Growth & Monetization": "bg-emerald-500",
  "Execution & Delivery":  "bg-amber-500",
  "PM Career & Interviews":"bg-rose-500",
};

const CAT_BADGE: Record<string, string> = {
  "PM Fundamentals":       "bg-blue-50 text-blue-700 border-blue-200",
  "PM Strategy":           "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Data-Driven PM":        "bg-cyan-50 text-cyan-700 border-cyan-200",
  "AI in Product":         "bg-violet-50 text-violet-700 border-violet-200",
  "Growth & Monetization": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Execution & Delivery":  "bg-amber-50 text-amber-700 border-amber-200",
  "PM Career & Interviews":"bg-rose-50 text-rose-700 border-rose-200",
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${CAT_BADGE[category] || "bg-muted text-muted-foreground border-border"}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${CAT_DOT[category] || "bg-muted-foreground"}`} />
      {category}
    </span>
  );
}

/* ─── Featured card embedded in hero ─── */
function HeroFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full" data-testid={`featured-post-${post.id}`}>
      <div className="relative h-full min-h-[340px] rounded-2xl overflow-hidden border border-border shadow-sm bg-muted">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary text-white text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              Featured
            </span>
            <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm`}>
              {post.category}
            </span>
          </div>
          <h2 className="font-serif font-bold text-white text-xl md:text-2xl leading-tight mb-2 group-hover:text-primary/90 transition-colors line-clamp-3">
            {post.title}
          </h2>
          <p className="text-white/65 text-sm line-clamp-2 mb-4 leading-relaxed hidden sm:block">
            {post.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-white/15">
            <span className="text-white/55 text-xs flex items-center gap-1.5">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="text-primary text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Article <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Lead card — large, for the first slot ─── */
function LeadCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`blog-card-${post.id}`}>
      <div className="overflow-hidden rounded-2xl bg-muted mb-4 aspect-[16/10] border border-border/40">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <CategoryBadge category={post.category} />
      <h3 className="font-serif font-bold text-lg md:text-xl mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-3 mb-3 leading-relaxed">{post.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
          <Clock className="h-3 w-3" /> {post.readTime}
          <span className="mx-1">·</span>
          {formatDate(post.date)}
        </span>
        <span className="text-xs font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Read <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

/* ─── Standard grid card ─── */
function GridCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`blog-card-${post.id}`}>
      <div className="overflow-hidden rounded-xl bg-muted mb-3 aspect-[16/9] border border-border/30">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
      </div>
      <CategoryBadge category={post.category} />
      <h3 className="font-serif font-bold text-base mt-2.5 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
        {post.title}
      </h3>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3 w-3 shrink-0" /> {post.readTime}
      </div>
    </Link>
  );
}

/* ─── List row card ─── */
function ListCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5 border-b border-border/40 last:border-0 hover:bg-primary/[0.025] -mx-3 px-3 rounded-xl transition-all"
      data-testid={`blog-card-${post.id}`}
    >
      <span className="font-serif font-bold text-2xl text-primary/15 group-hover:text-primary/30 transition-colors leading-none w-9 text-right shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="font-serif font-bold text-base group-hover:text-primary transition-colors line-clamp-1 leading-snug mb-1">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-1 hidden sm:block">{post.description}</p>
      </div>
      <div className="shrink-0 text-right hidden sm:block">
        <span className="text-xs text-muted-foreground flex items-center gap-1 justify-end mb-1">
          <Clock className="h-3 w-3" /> {post.readTime}
        </span>
        <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref: heroRef, inView: heroVisible } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridVisible } = useInView<HTMLDivElement>();

  const featuredPost = getFeaturedPost();
  const allNonFeatured = useMemo(() => BLOG_POSTS.filter(p => !p.isFeatured), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allNonFeatured.length };
    BLOG_CATEGORIES.forEach(cat => {
      counts[cat] = allNonFeatured.filter(p => p.category === cat).length;
    });
    return counts;
  }, [allNonFeatured]);

  const filteredPosts = useMemo(() => {
    const posts = activeCategory === "All"
      ? allNonFeatured
      : allNonFeatured.filter(p => p.category === activeCategory);
    return showAll ? posts : posts.slice(0, 12);
  }, [activeCategory, showAll, allNonFeatured]);

  const totalCount = useMemo(() =>
    activeCategory === "All"
      ? allNonFeatured.length
      : allNonFeatured.filter(p => p.category === activeCategory).length,
    [activeCategory, allNonFeatured]
  );

  const hasMore = !showAll && totalCount > 12;

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  /* Layout split: lead card, grid cards, list cards */
  const leadPost   = filteredPosts[0];
  const gridPosts  = filteredPosts.slice(1, 7);   /* up to 6 in 3-col grid */
  const listPosts  = filteredPosts.slice(7);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">

        {/* ── Hero: asymmetric 2-col ─────────────────────────────── */}
        <section className="relative pt-28 pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-background pointer-events-none" />

          <div
            ref={heroRef}
            className={`relative container px-4 md:px-6 mx-auto reveal ${heroVisible ? "in-view" : ""}`}
          >
            <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-8 xl:gap-14 items-start">

              {/* Left: editorial text */}
              <div className="pt-6 pb-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/80 shadow-sm px-4 py-1.5 text-sm font-semibold text-primary mb-7 backdrop-blur-sm">
                  <Pen className="h-3.5 w-3.5" />
                  The Blog
                </div>

                <h1 className="font-serif font-bold text-4xl md:text-5xl xl:text-[3.5rem] leading-[1.08] tracking-tight text-foreground mb-5">
                  Product thinking,<br />
                  <span className="text-primary">made practical.</span>
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
                  50 deep-dive articles on product management, growth strategy, and AI — from 9+ years of building real products.
                </p>

                {/* Category quick-links */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Browse by topic</p>
                  <div className="flex flex-wrap gap-2">
                    {BLOG_CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" }); }}
                        className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all text-foreground"
                      >
                        <span className={`w-2 h-2 rounded-full shrink-0 ${CAT_DOT[cat]}`} />
                        {cat}
                        <span className="text-muted-foreground text-xs">{categoryCounts[cat] ?? 0}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: featured post card */}
              {featuredPost && (
                <div className="lg:pt-6 pb-0 lg:pb-0">
                  <HeroFeaturedCard post={featuredPost} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Category Filter (sticky) ───────────────────────────── */}
        <div id="articles" className="border-y border-border bg-background/95 sticky top-16 z-30 backdrop-blur-md">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center gap-1.5 overflow-x-auto py-3.5 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange("All")}
                data-testid="filter-all"
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === "All"
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                }`}
              >
                All
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold leading-none ${activeCategory === "All" ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"}`}>
                  {categoryCounts["All"]}
                </span>
              </button>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${activeCategory === cat ? "bg-white" : CAT_DOT[cat]}`} />
                  {cat}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold leading-none ${activeCategory === cat ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"}`}>
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Articles ──────────────────────────────────────────── */}
        <section className="container px-4 md:px-6 mx-auto py-14">

          {/* Section header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-serif text-2xl font-bold">
              {activeCategory === "All" ? "All Articles" : activeCategory}
            </h2>
            <span className="text-sm text-muted-foreground">{totalCount} articles</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">No articles in this category yet.</div>
          ) : (
            <div ref={gridRef} className={`reveal ${gridVisible ? "in-view" : ""}`}>

              {/* Row 1: 1 large lead + up to 2 side cards */}
              {leadPost && (
                <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-6 mb-12 pb-12 border-b border-border/50">
                  <LeadCard post={leadPost} />
                  {gridPosts.slice(0, 2).map(post => (
                    <GridCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              {/* Row 2+: uniform 3-col grid */}
              {gridPosts.slice(2).length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {gridPosts.slice(2).map(post => (
                    <GridCard key={post.id} post={post} />
                  ))}
                </div>
              )}

              {/* List rows */}
              {listPosts.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex-1 h-px bg-border/60" />
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium px-3">More Articles</span>
                    <span className="flex-1 h-px bg-border/60" />
                  </div>
                  <div>
                    {listPosts.map((post, i) => (
                      <ListCard key={post.id} post={post} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {/* Load more */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                    data-testid="load-more"
                  >
                    Load All Articles
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ── Full-width CTA strip ───────────────────────────────── */}
        <section className="border-t border-border/60 bg-primary/[0.03]">
          <div className="container px-4 md:px-6 mx-auto py-14">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif font-bold text-2xl md:text-3xl mb-3">Building something ambitious?</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-7">
                I work with founders and product teams to turn strategy into execution. Let's talk about your product.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors text-sm"
              >
                Work with me <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
