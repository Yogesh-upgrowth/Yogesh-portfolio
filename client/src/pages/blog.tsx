import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, getFeaturedPost, getMostPopularPosts, formatDate, type BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useCallback } from "react";

function BlogCard({ post, showImage = false }: { post: BlogPost; showImage?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block p-5 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all" data-testid={`blog-card-${post.id}`}>
      {showImage && (
        <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4 bg-muted">
          <img src={post.image} alt={post.title} loading="lazy" decoding="async" width={400} height={225} className="w-full h-full object-cover" />
        </div>
      )}
      <span className="text-xs font-medium text-primary">{post.category}</span>
      <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{post.description}</p>
      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
    </Link>
  );
}

function PopularItem({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex items-start gap-4 py-3 border-b border-border/30 last:border-0 hover:bg-muted/30 -mx-2 px-2 rounded-lg transition-colors" data-testid={`popular-${post.id}`}>
      <span className="text-2xl font-serif font-bold text-primary/40 shrink-0 w-8">{index + 1}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const featuredPost = getFeaturedPost();
  const popularPosts = getMostPopularPosts(5);

  const filteredPosts = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") return showAll ? posts : posts.slice(0, 6);
    const categoryPosts = posts.filter(post => post.category === activeCategory);
    return showAll ? categoryPosts : categoryPosts.slice(0, 6);
  }, [activeCategory, showAll]);

  const hasMore = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") return !showAll && posts.length > 6;
    return !showAll && posts.filter(p => p.category === activeCategory).length > 6;
  }, [activeCategory, showAll]);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-24">
        
        {/* Featured Hero - Single image load */}
        {featuredPost && (
          <article className="container px-4 md:px-6 mx-auto mb-12">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border/50">
                  <img src={featuredPost.image} alt={featuredPost.title} width={600} height={375} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <header className="space-y-3">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                  <h1 className="text-2xl md:text-3xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h1>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{featuredPost.description}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {featuredPost.author}</span>
                    <time dateTime={featuredPost.date} className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(featuredPost.date)}</time>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-primary font-medium gap-1 group-hover:gap-2 transition-all pt-1">Read Article <ArrowRight className="h-4 w-4" /></span>
                </header>
              </div>
            </Link>
          </article>
        )}

        {/* Category Filter */}
        <section className="border-y border-border/50 bg-muted/30 sticky top-16 z-30 mb-10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              <button onClick={() => handleCategoryChange("All")} data-testid="filter-all" className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === "All" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted border border-border/50"}`}>All</button>
              {BLOG_CATEGORIES.map(cat => (
                <button key={cat} onClick={() => handleCategoryChange(cat)} data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted border border-border/50"}`}>{cat}</button>
              ))}
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* Main Content - Blog Grid (no images for speed) */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold">{activeCategory === "All" ? "All Articles" : activeCategory}</h2>
                <span className="text-sm text-muted-foreground">{filteredPosts.length} articles</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredPosts.map((post, i) => <BlogCard key={post.id} post={post} showImage={i < 2} />)}
              </div>
              {hasMore && (
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg" onClick={() => setShowAll(true)} className="rounded-full">Load More</Button>
                </div>
              )}
            </div>

            {/* Sidebar - Most Popular (text only, no images) */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32">
                <h3 className="text-lg font-serif font-bold mb-4 pb-3 border-b border-border">Most Popular</h3>
                <div className="space-y-1">
                  {popularPosts.map((post, i) => <PopularItem key={post.id} post={post} index={i} />)}
                </div>

                {/* CTA Card */}
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-serif font-bold mb-2">Need help?</h4>
                  <p className="text-sm text-muted-foreground mb-4">I work with founders to turn insights into execution.</p>
                  <Button size="sm" className="rounded-full w-full" asChild>
                    <Link href="/contact">Work with me</Link>
                  </Button>
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
