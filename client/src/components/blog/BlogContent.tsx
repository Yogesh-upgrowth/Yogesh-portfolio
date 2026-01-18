import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS, getMostPopularPosts, type BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

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
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-medium text-primary mb-2">{post.category}</span>
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3 flex-1">
          {post.description}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

function PopularCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group block shrink-0 w-[280px] md:w-[320px] snap-start" 
      data-testid={`popular-card-${post.id}`}
    >
      <div className="aspect-[16/10] overflow-hidden rounded-xl mb-3 bg-muted border border-border/50">
        <img 
          src={post.image} 
          alt={post.title}
          loading="lazy"
          decoding="async"
          width={320}
          height={200}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <span className="text-xs font-medium text-primary">{post.category}</span>
      <h4 className="text-base font-bold mt-1 group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </h4>
      <span className="text-xs text-muted-foreground mt-2 block">{post.readTime}</span>
    </Link>
  );
}

interface BlogContentProps {
  activeCategory: string;
  showAll: boolean;
  onShowMore: () => void;
}

export default function BlogContent({ activeCategory, showAll, onShowMore }: BlogContentProps) {
  const popularPosts = useMemo(() => getMostPopularPosts(6), []);

  const filteredPosts = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") {
      return showAll ? posts : posts.slice(0, 9);
    }
    const categoryPosts = posts.filter(post => post.category === activeCategory);
    return showAll ? categoryPosts : categoryPosts.slice(0, 9);
  }, [activeCategory, showAll]);

  const hasMore = useMemo(() => {
    const posts = BLOG_POSTS.filter(p => !p.isFeatured);
    if (activeCategory === "All") {
      return !showAll && posts.length > 9;
    }
    const categoryPosts = posts.filter(post => post.category === activeCategory);
    return !showAll && categoryPosts.length > 9;
  }, [activeCategory, showAll]);

  return (
    <>
      {/* Most Popular Section */}
      <section className="mb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-6">Most Popular</h2>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-5 overflow-x-auto pb-4 px-4 md:px-6 snap-x snap-mandatory scrollbar-hide">
            <div className="shrink-0 w-[calc((100vw-2rem)/2-10px)] md:w-0" />
            {popularPosts.map((post) => (
              <PopularCard key={post.id} post={post} />
            ))}
            <div className="shrink-0 w-4" />
          </div>
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif font-bold">
            {activeCategory === "All" ? "All Articles" : activeCategory}
          </h2>
          <span className="text-sm text-muted-foreground">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onShowMore}
              className="rounded-full"
            >
              Load More Articles
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
