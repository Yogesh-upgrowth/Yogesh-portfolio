import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, TrendingUp, BookOpen, Flame } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, getFeaturedPost, getMostPopularPosts, formatDate, type BlogPost } from "@/lib/blog-data";
import { useState, useMemo, useCallback } from "react";

function CategoryBadge({ category }: { category: string }) {
  const colors: Record<string, string> = {
    "AI & Product": "bg-violet-100 text-violet-700",
    "PM Career": "bg-blue-100 text-blue-700",
    "Experiments": "bg-amber-100 text-amber-700",
    "Growth & SEO": "bg-emerald-100 text-emerald-700",
    "Comparisons": "bg-rose-100 text-rose-700",
    "Founder Notes": "bg-indigo-100 text-indigo-700",
  };
  return (
    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${colors[category] || "bg-muted text-muted-foreground"}`}>
      {category}
    </span>
  );
}

function HeroCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`featured-post-${post.id}`}>
      <div className="relative overflow-hidden rounded-3xl bg-foreground aspect-[21/9] md:aspect-[21/8]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
          loading="eager"
          width={1400}
          height={533}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              Featured
            </span>
            <CategoryBadge category={post.category} />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4 max-w-3xl group-hover:text-primary/90 transition-colors">
            {post.title}
          </h1>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mb-6 line-clamp-2 hidden md:block">
            {post.description}
          </p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            <span className="flex items-center gap-1.5 text-primary font-medium ml-auto">
              Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ post, variant = "default" }: { post: BlogPost; variant?: "default" | "wide" | "compact" }) {
  if (variant === "wide") {
    return (
      <Link href={`/blog/${post.slug}`} className="group flex gap-6 items-start py-6 border-b border-border/40 last:border-0 hover:bg-muted/20 -mx-2 px-2 rounded-xl transition-all" data-testid={`blog-card-${post.id}`}>
        <div className="shrink-0 w-32 h-24 overflow-hidden rounded-xl bg-muted">
          <img src={post.image} alt={post.title} width={128} height={96} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0">
          <CategoryBadge category={post.category} />
          <h3 className="font-serif font-bold text-base mt-2 mb-1.5 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{post.description}</p>
          <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/blog/${post.slug}`} className="group flex gap-3 items-start py-3 border-b border-border/30 last:border-0 hover:bg-muted/20 -mx-2 px-2 rounded-lg transition-all" data-testid={`blog-card-${post.id}`}>
        <span className="shrink-0 w-1 h-12 rounded-full bg-primary/20 group-hover:bg-primary transition-colors mt-0.5" />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h4>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block" data-testid={`blog-card-${post.id}`}>
      <div className="overflow-hidden rounded-2xl bg-muted mb-4 aspect-[16/10]">
        <img src={post.image} alt={post.title} width={420} height={262} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" loading="lazy" />
      </div>
      <CategoryBadge category={post.category} />
      <h3 className="font-serif font-bold text-lg mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-3 mb-3 leading-relaxed">{post.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
        <span className="text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Read <ArrowRight className="h-3 w-3" /></span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

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

        {/* Editorial Banner */}
        <div className="bg-foreground text-background pt-28 pb-10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-primary text-sm font-bold uppercase tracking-widest">The Blog</span>
                </div>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-background leading-none">
                  Product Thinking,<br />
                  <span className="text-primary">Made Practical.</span>
                </h1>
              </div>
              <p className="text-background/60 max-w-sm text-sm md:text-base leading-relaxed">
                Deep-dive articles on product management, growth strategy, and AI — written from 9+ years of building and scaling real products.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Hero */}
        {featuredPost && (
          <div className="container px-4 md:px-6 mx-auto -mt-2 mb-12">
            <div className="relative -top-8">
              <HeroCard post={featuredPost} />
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="border-y border-border/50 bg-background sticky top-16 z-30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange("All")}
                data-testid="filter-all"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === "All" ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
              >
                All Articles
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === "All" ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>{categoryCounts["All"]}</span>
              </button>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
                >
                  {cat}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>{categoryCounts[cat] ?? 0}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container px-4 md:px-6 mx-auto py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14">

            {/* Main Content */}
            <div>
              {/* Section Label */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary rounded-full" />
                  <h2 className="font-serif text-xl font-bold">{activeCategory === "All" ? "All Articles" : activeCategory}</h2>
                </div>
                <span className="text-sm text-muted-foreground">{totalCount} articles</span>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">No articles in this category yet.</div>
              ) : (
                <>
                  {/* Top 3 — Card Grid */}
                  {topPosts.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                      {topPosts.map(post => <ArticleCard key={post.id} post={post} variant="default" />)}
                    </div>
                  )}

                  {/* Divider + Label */}
                  {remainingPosts.length > 0 && (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="flex-1 h-px bg-border/50" />
                        <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">More Articles</span>
                        <span className="flex-1 h-px bg-border/50" />
                      </div>

                      {/* Remaining — Wide List Style */}
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
                        className="group flex items-start gap-4 py-4 border-b border-border/30 last:border-0 hover:bg-muted/20 -mx-2 px-2 rounded-xl transition-all"
                        data-testid={`popular-${post.id}`}
                      >
                        <span className="text-3xl font-serif font-bold text-primary/20 group-hover:text-primary/40 transition-colors shrink-0 leading-none w-8 mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1">{post.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Browse by Category */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <h3 className="font-serif font-bold text-base">Browse by Topic</h3>
                  </div>
                  <div className="space-y-2">
                    {BLOG_CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-all text-left ${activeCategory === cat ? "bg-primary text-white font-semibold" : "hover:bg-muted text-foreground"}`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs ${activeCategory === cat ? "text-white/70" : "text-muted-foreground"}`}>{categoryCounts[cat] ?? 0}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-foreground text-background p-6 rounded-2xl">
                  <BookOpen className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-serif font-bold text-lg mb-2 text-background">Building something ambitious?</h4>
                  <p className="text-background/60 text-sm mb-5 leading-relaxed">I work with founders and product teams to turn insights into execution. Let's talk.</p>
                  <Link href="/contact" className="block w-full text-center bg-primary text-white py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
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
