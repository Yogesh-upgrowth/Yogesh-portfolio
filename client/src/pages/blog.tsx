import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, getFeaturedPost, getMostPopularPosts, formatDate, type BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useCallback } from "react";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full flex flex-col" data-testid={`blog-card-${post.id}`}>
      <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-muted border border-border/50">
        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          decoding="async"
          width={400}
          height={225}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-medium text-primary mb-2">{post.category}</span>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-1">{post.description}</p>
        <div className="text-xs text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" /> {post.readTime}
        </div>
      </div>
    </Link>
  );
}

function PopularCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block shrink-0 w-[280px] md:w-[320px] snap-start" data-testid={`popular-card-${post.id}`}>
      <div className="aspect-[16/10] overflow-hidden rounded-xl mb-3 bg-muted border border-border/50">
        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          decoding="async"
          width={320}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <span className="text-xs font-medium text-primary">{post.category}</span>
      <h4 className="text-base font-bold mt-1 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
      <span className="text-xs text-muted-foreground mt-2 block">{post.readTime}</span>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const featuredPost = getFeaturedPost();
  const popularPosts = getMostPopularPosts(6);

  const filteredPosts = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") return showAll ? posts : posts.slice(0, 9);
    const categoryPosts = posts.filter(post => post.category === activeCategory);
    return showAll ? categoryPosts : categoryPosts.slice(0, 9);
  }, [activeCategory, showAll]);

  const hasMore = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") return !showAll && posts.length > 9;
    return !showAll && posts.filter(p => p.category === activeCategory).length > 9;
  }, [activeCategory, showAll]);

  const handleCategoryChange = useCallback((cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  }, []);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-24">
        
        {/* Featured Hero */}
        {featuredPost && (
          <article className="container px-4 md:px-6 mx-auto mb-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-muted border border-border/50">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <header className="space-y-4">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Featured</span>
                  <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h1>
                  <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">{featuredPost.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {featuredPost.author || "Yogesh Yadav"}</span>
                    <time dateTime={featuredPost.date} className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {formatDate(featuredPost.date)}</time>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
                  </div>
                  <span className="inline-flex items-center text-primary font-medium gap-1 group-hover:gap-2 transition-all pt-2">Read Article <ArrowRight className="h-4 w-4" /></span>
                </header>
              </div>
            </Link>
          </article>
        )}

        {/* Category Filter */}
        <section className="border-y border-border/50 bg-muted/30 sticky top-16 z-30 mb-12">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
              <button onClick={() => handleCategoryChange("All")} data-testid="filter-all" className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === "All" ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted border border-border/50"}`}>All</button>
              {BLOG_CATEGORIES.map(cat => (
                <button key={cat} onClick={() => handleCategoryChange(cat)} data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-muted border border-border/50"}`}>{cat}</button>
              ))}
            </div>
          </div>
        </section>

        {/* Most Popular */}
        <section className="mb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-6">Most Popular</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-5 overflow-x-auto pb-4 px-4 md:px-6 snap-x snap-mandatory scrollbar-hide">
              <div className="shrink-0 w-[calc((100vw-2rem)/2-10px)] md:w-0" />
              {popularPosts.map(post => <PopularCard key={post.id} post={post} />)}
              <div className="shrink-0 w-4" />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-serif font-bold">{activeCategory === "All" ? "All Articles" : activeCategory}</h2>
            <span className="text-sm text-muted-foreground">{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => <BlogCard key={post.id} post={post} />)}
          </div>
          {hasMore && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={() => setShowAll(true)} className="rounded-full">Load More Articles</Button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="container px-4 md:px-6 mx-auto mt-24">
          <div className="bg-primary/5 rounded-3xl p-10 md:p-12 text-center border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Need help implementing these strategies?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">I work with founders and product teams to turn these insights into execution.</p>
            <Button size="lg" className="h-12 px-8 text-base rounded-full" asChild>
              <Link href="/contact">Work with me <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
