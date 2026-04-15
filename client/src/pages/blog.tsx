import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, BookOpen, Flame, TrendingUp } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, getFeaturedPost, getMostPopularPosts, formatDate, type BlogPost } from "@/lib/blog-data";
import { useState, useMemo, useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const CATEGORY_COLORS: Record<string, string> = {
  "PM Fundamentals":      "bg-blue-50 text-blue-700 border-blue-200",
  "PM Strategy":          "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Data-Driven PM":       "bg-cyan-50 text-cyan-700 border-cyan-200",
  "AI in Product":        "bg-violet-50 text-violet-700 border-violet-200",
  "Growth & Monetization":"bg-emerald-50 text-emerald-700 border-emerald-200",
  "Execution & Delivery": "bg-amber-50 text-amber-700 border-amber-200",
  "PM Career & Interviews":"bg-rose-50 text-rose-700 border-rose-200",
};

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[category] || "bg-muted text-muted-foreground border-border"}`}>
      {category}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`featured-post-${post.id}`}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-sm hover:shadow-md transition-shadow">
        <div className="grid md:grid-cols-[1fr_1.1fr] min-h-[320px]">
          {/* Image */}
          <div className="relative overflow-hidden bg-muted md:rounded-l-2xl min-h-[200px]">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/10 hidden md:block" />
          </div>
          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Featured
                </span>
                <CategoryBadge category={post.category} />
              </div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl leading-tight mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm md:text-base">
                {post.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-border">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>·</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
              </div>
              <span className="text-sm font-semibold text-primary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post, variant = "default" }: { post: BlogPost; variant?: "default" | "wide" }) {
  if (variant === "wide") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group flex gap-5 items-start py-5 border-b border-border/50 last:border-0 hover:bg-primary/[0.02] -mx-3 px-3 rounded-xl transition-all"
        data-testid={`blog-card-${post.id}`}
      >
        <div className="shrink-0 w-28 h-20 overflow-hidden rounded-xl bg-muted">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <CategoryBadge category={post.category} />
          <h3 className="font-serif font-bold text-base mt-2 mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-1 mb-1.5">{post.description}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-1 hidden sm:block" />
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`blog-card-${post.id}`}>
      <div className="overflow-hidden rounded-xl bg-muted mb-3.5 aspect-[16/10] border border-border/40">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
      </div>
      <CategoryBadge category={post.category} />
      <h3 className="font-serif font-bold text-base mt-2.5 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-3 leading-relaxed">{post.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
        <span className="text-xs font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          Read <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref: heroRef, inView: heroVisible } = useInView<HTMLDivElement>();

  const featuredPost = getFeaturedPost();
  const popularPosts = getMostPopularPosts(6);

  const allNonFeatured = useMemo(() => BLOG_POSTS.filter(p => !p.isFeatured), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allNonFeatured.length };
    BLOG_CATEGORIES.forEach(cat => {
      counts[cat] = allNonFeatured.filter(p => p.category === cat).length;
    });
    return counts;
  }, [allNonFeatured]);

  const filteredPosts = useMemo(() => {
    const posts = activeCategory === "All" ? allNonFeatured : allNonFeatured.filter(p => p.category === activeCategory);
    return showAll ? posts : posts.slice(0, 9);
  }, [activeCategory, showAll, allNonFeatured]);

  const totalCount = useMemo(() => {
    return activeCategory === "All" ? allNonFeatured.length : allNonFeatured.filter(p => p.category === activeCategory).length;
  }, [activeCategory, allNonFeatured]);

  const hasMore = !showAll && totalCount > 9;

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  const topPosts = filteredPosts.slice(0, 3);
  const remainingPosts = filteredPosts.slice(3);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">

        {/* Hero — matches Case Studies style */}
        <section className="relative pt-32 pb-16 overflow-hidden">
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
            <div className="inline-flex items-center rounded-full border border-primary/25 bg-white/80 shadow-sm px-4 py-1.5 text-sm font-semibold text-primary mb-6 backdrop-blur-sm">
              <BookOpen className="h-4 w-4 mr-2" />
              The Blog
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Product Thinking,<br />
              <span className="text-primary">Made Practical.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Deep-dive articles on product management, growth strategy, and AI — written from 9+ years of building and scaling real products.
            </p>

            <div className="inline-flex items-center gap-6 md:gap-10 bg-white/90 backdrop-blur-sm border border-border rounded-2xl px-6 md:px-10 py-4 shadow-sm mx-auto">
              {[
                { value: "50", label: "Articles" },
                { value: "7", label: "Topics" },
                { value: "9+", label: "Years Experience" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-serif font-bold text-primary leading-none">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="container px-4 md:px-6 mx-auto mb-12">
            <FeaturedCard post={featuredPost} />
          </section>
        )}

        {/* Category Filter — matches Case Studies style */}
        <div className="border-y border-border bg-background/95 sticky top-16 z-30 backdrop-blur-md">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange("All")}
                data-testid="filter-all"
                className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === "All"
                    ? "bg-primary text-white border-primary shadow-md"
                    : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                }`}
              >
                All Articles
                <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold leading-none ${activeCategory === "All" ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"}`}>
                  {categoryCounts["All"]}
                </span>
              </button>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {cat}
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold leading-none ${activeCategory === cat ? "bg-white/25 text-white" : "bg-muted text-muted-foreground"}`}>
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content + Sidebar */}
        <div className="container px-4 md:px-6 mx-auto py-14">
          <div className="grid lg:grid-cols-[1fr_300px] gap-14">

            {/* Articles */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground">
                  {activeCategory === "All" ? "All Articles" : activeCategory}
                </h2>
                <span className="text-sm text-muted-foreground">{totalCount} articles</span>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">No articles in this category yet.</div>
              ) : (
                <>
                  {topPosts.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                      {topPosts.map(post => <ArticleCard key={post.id} post={post} variant="default" />)}
                    </div>
                  )}

                  {remainingPosts.length > 0 && (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex-1 h-px bg-border" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium px-2">More Articles</span>
                        <span className="flex-1 h-px bg-border" />
                      </div>
                      <div>
                        {remainingPosts.map(post => <ArticleCard key={post.id} post={post} variant="wide" />)}
                      </div>
                    </>
                  )}

                  {hasMore && (
                    <div className="mt-10 text-center">
                      <button
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                        data-testid="load-more"
                      >
                        Load More Articles
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sticky top-32 space-y-10">

                {/* Trending */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <Flame className="h-4 w-4 text-primary" />
                    <h3 className="font-serif font-bold text-base">Trending Now</h3>
                  </div>
                  <div>
                    {popularPosts.map((post, i) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group flex items-start gap-3.5 py-3.5 border-b border-border/40 last:border-0 hover:bg-primary/[0.03] -mx-2 px-2 rounded-xl transition-all"
                        data-testid={`popular-${post.id}`}
                      >
                        <span className="text-2xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 leading-none w-7 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">{post.title}</h4>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Browse by Topic */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h3 className="font-serif font-bold text-base">Browse by Topic</h3>
                  </div>
                  <div className="space-y-1.5">
                    {BLOG_CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all text-left border ${
                          activeCategory === cat
                            ? "bg-primary text-white font-semibold border-primary"
                            : "hover:bg-primary/5 hover:border-primary/30 text-foreground border-border/50"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs font-medium ${activeCategory === cat ? "text-white/70" : "text-muted-foreground"}`}>
                          {categoryCounts[cat] ?? 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Card — matches site's light aesthetic */}
                <div className="bg-primary/5 border border-primary/15 p-6 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-serif font-bold text-base mb-2 text-foreground">Building something ambitious?</h4>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    I work with founders and product teams to turn insights into execution.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary text-white py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Work with me
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
