import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCategories = activeCategory === "All" 
    ? BLOG_CATEGORIES 
    : [activeCategory];

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        
        {/* Blog Hero */}
        <section className="container px-4 md:px-6 mx-auto mb-20">
          <div className="max-w-3xl animate-fade-in-up">
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
                onClick={() => setActiveCategory("All")}
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
                  onClick={() => setActiveCategory(cat)}
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

        {/* Categories Sections */}
        <div className="space-y-24 container px-4 md:px-6 mx-auto">
          {filteredCategories.map((category) => {
            const categoryPosts = BLOG_POSTS.filter(post => post.category === category);
            
            return (
              <section key={category}>
                <div className="flex items-center justify-between mb-8 border-b border-border/50 pb-4">
                  <h2 className="text-2xl font-serif font-bold">{category}</h2>
                  <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryPosts.slice(0, 6).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full flex flex-col" data-testid={`blog-card-${post.id}`}>
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
                  ))}
                </div>
              </section>
            );
          })}
        </div>

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
