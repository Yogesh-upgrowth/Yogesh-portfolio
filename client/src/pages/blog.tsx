import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, Suspense, lazy } from "react";

const BLOG_CATEGORIES = [
  "AI & Product",
  "PM Career",
  "Experiments",
  "Growth & SEO",
  "Comparisons",
  "Founder Notes"
];

const FEATURED_POST = {
  id: "featured-1",
  slug: "how-i-think-about-product",
  title: "How I Think About Product: My Framework After 9 Years",
  description: "A deep dive into my mental models, decision frameworks, and lessons learned building products at scale.",
  category: "Founder Notes",
  date: "2025-01-15",
  readTime: "12 min read",
  author: "Yogesh Yadav"
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function BlogCardSkeleton() {
  return (
    <div className="h-full flex flex-col">
      <div className="aspect-[16/9] rounded-xl mb-4 bg-muted animate-pulse" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-3 w-16 bg-muted rounded animate-pulse" />
        <div className="h-5 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
      </div>
    </div>
  );
}

function PopularSkeleton() {
  return (
    <div className="shrink-0 w-[280px] md:w-[320px]">
      <div className="aspect-[16/10] rounded-xl mb-3 bg-muted animate-pulse" />
      <div className="h-3 w-16 bg-muted rounded animate-pulse mb-2" />
      <div className="h-4 w-full bg-muted rounded animate-pulse" />
    </div>
  );
}

const BlogContent = lazy(() => import("@/components/blog/BlogContent"));

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setContentReady(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-24">
        
        {/* Featured Hero Blog - Critical: Render Immediately with inline data */}
        <article className="container px-4 md:px-6 mx-auto mb-16">
          <Link href={`/blog/${FEATURED_POST.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 flex items-center justify-center">
                <div className="text-6xl font-serif font-bold text-primary/30">Y</div>
              </div>
              <header className="space-y-4">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Featured
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                  {FEATURED_POST.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                  {FEATURED_POST.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" /> {FEATURED_POST.author}
                  </span>
                  <time dateTime={FEATURED_POST.date} className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {formatDate(FEATURED_POST.date)}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {FEATURED_POST.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-primary font-medium gap-1 group-hover:gap-2 transition-all pt-2">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </header>
            </div>
          </Link>
        </article>

        {/* Category Filter Strip - Critical: Render Immediately */}
        <section className="border-y border-border/50 bg-muted/30 sticky top-16 z-30 mb-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange("All")}
                data-testid="filter-all"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background text-muted-foreground hover:bg-muted border border-border/50"
                }`}
              >
                All
              </button>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-background text-muted-foreground hover:bg-muted border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Deferred Content - Lazy loaded after first paint */}
        {contentReady ? (
          <Suspense fallback={
            <>
              {/* Most Popular Skeleton */}
              <section className="mb-16">
                <div className="container px-4 md:px-6 mx-auto">
                  <h2 className="text-2xl font-serif font-bold mb-6">Most Popular</h2>
                </div>
                <div className="overflow-hidden">
                  <div className="flex gap-5 overflow-x-auto pb-4 px-4 md:px-6 snap-x snap-mandatory scrollbar-hide">
                    {Array.from({ length: 4 }).map((_, i) => <PopularSkeleton key={i} />)}
                  </div>
                </div>
              </section>
              {/* Blog Grid Skeleton */}
              <section className="container px-4 md:px-6 mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-8">All Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)}
                </div>
              </section>
            </>
          }>
            <BlogContent 
              activeCategory={activeCategory} 
              showAll={showAll} 
              onShowMore={() => setShowAll(true)} 
            />
          </Suspense>
        ) : (
          <>
            {/* Most Popular Skeleton */}
            <section className="mb-16">
              <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-6">Most Popular</h2>
              </div>
              <div className="overflow-hidden">
                <div className="flex gap-5 overflow-x-auto pb-4 px-4 md:px-6 snap-x snap-mandatory scrollbar-hide">
                  {Array.from({ length: 4 }).map((_, i) => <PopularSkeleton key={i} />)}
                </div>
              </div>
            </section>
            {/* Blog Grid Skeleton */}
            <section className="container px-4 md:px-6 mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-8">All Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)}
              </div>
            </section>
          </>
        )}

        {/* CTA Section */}
        <section className="container px-4 md:px-6 mx-auto mt-24">
          <div className="bg-primary/5 rounded-3xl p-10 md:p-12 text-center border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Need help implementing these strategies?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I work with founders and product teams to turn these insights into execution.
            </p>
            <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
              <Link href="/contact">
                Work with me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
