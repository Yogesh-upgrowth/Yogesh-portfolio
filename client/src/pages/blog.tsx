import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full flex flex-col" data-testid={`blog-card-${post.id}`}>
      <div className="aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-muted border border-border/50">
        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
          {post.description}
        </p>
        
        <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
          Read Article <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);

  const postsToShow = useMemo(() => {
    if (activeCategory === "All") {
      const featured = BLOG_POSTS.slice(0, showAll ? 12 : 6);
      return featured;
    }
    const categoryPosts = BLOG_POSTS.filter(post => post.category === activeCategory);
    return showAll ? categoryPosts : categoryPosts.slice(0, 6);
  }, [activeCategory, showAll]);

  const hasMore = useMemo(() => {
    if (activeCategory === "All") {
      return !showAll && BLOG_POSTS.length > 6;
    }
    const categoryPosts = BLOG_POSTS.filter(post => post.category === activeCategory);
    return !showAll && categoryPosts.length > 6;
  }, [activeCategory, showAll]);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        
        {/* Blog Hero */}
        <section className="container px-4 md:px-6 mx-auto mb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Product thinking, <br/>
              <span className="text-primary">unfiltered.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Practical insights on product strategy, growth, and leadership. No fluff, just lessons from the trenches.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setActiveCategory("All"); setShowAll(false); }}
                data-testid="filter-all"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                All
              </button>
              {BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                  data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted/50 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container px-4 md:px-6 mx-auto">
          {activeCategory !== "All" && (
            <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
              <h2 className="text-2xl font-serif font-bold">{activeCategory}</h2>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAll(true)}
                className="rounded-full"
              >
                Load More Articles
              </Button>
            </div>
          )}
        </section>

        {/* Global CTA */}
        <section className="container px-4 md:px-6 mx-auto mt-32">
          <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <h2 className="text-3xl font-serif font-bold mb-4">Need help implementing these strategies?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I work with founders and product teams to turn these insights into execution.
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
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
