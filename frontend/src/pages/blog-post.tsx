import { useRoute, Link } from "wouter";
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, formatDate } from "@/lib/blog-data";
import { getPostContent } from "@/lib/blog-content";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { Seo, articleSchema, breadcrumbSchema } from "@/lib/seo";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div className="h-full bg-primary transition-none" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const [showStickyShare, setShowStickyShare] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowStickyShare(window.scrollY > 400 && window.scrollY < document.documentElement.scrollHeight - 1000);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  if (!match) return <NotFound />;

  const post = getPostBySlug(params.slug);
  const content = post ? getPostContent(post.slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col pb-24 md:pb-0">
      <ReadingProgress />
      <Seo
        title={`${post.title} | Yogesh Yadav`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.date}
        keywords={`${post.category}, product management, ${post.title.toLowerCase()}`}
        schema={[
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            publishedAt: post.date,
            author: post.author || "Yogesh Yadav",
            section: post.category,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">
          
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10 md:mb-12 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-5 md:mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                {post.category}
              </span>
              <time dateTime={post.date} className="flex items-center"><Calendar className="mr-1.5 md:mr-2 h-3.5 md:h-4 w-3.5 md:w-4" /> {formatDate(post.date)}</time>
              <span className="flex items-center"><Clock className="mr-1.5 md:mr-2 h-3.5 md:h-4 w-3.5 md:w-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.15] md:leading-tight mb-6 md:mb-8">
              {post.title}
            </h1>

            <div className="aspect-[16/10] md:aspect-[2/1] w-full rounded-xl md:rounded-2xl overflow-hidden mb-8 md:mb-12 border border-border/50 bg-muted">
              <img 
                src={post.image} 
                alt={`${post.title} — ${post.category} article by Yogesh Yadav`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={1200}
                height={600}
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="article-content prose prose-base md:prose-lg prose-slate max-w-none prose-a:text-primary prose-img:rounded-xl">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <>
                <p className="lead text-lg md:text-xl text-foreground font-medium mb-6 md:mb-8 leading-relaxed">
                  {post.description}
                </p>
                <div className="p-6 md:p-8 bg-muted/30 rounded-xl border border-border/50 text-center">
                  <p className="text-sm md:text-base text-muted-foreground">Full article content coming soon.</p>
                </div>
              </>
            )}
          </div>

          {/* Social Share */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-8 border-t border-border mt-10 md:mt-12">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Share this article:
            </span>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-8 sm:w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10 sm:h-8 sm:w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 p-6 md:p-12 rounded-xl md:rounded-2xl border border-primary/10 text-center mt-10 md:mt-12">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 md:mb-4">
              Building something ambitious?
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto">
              If you're building or scaling a product and need hands-on help with strategy or execution, let's talk.
            </p>
            <Button size="lg" className="h-12 px-8 rounded-full w-full sm:w-auto" asChild>
              <Link href="/contact">Work with me</Link>
            </Button>
          </div>

        </article>
      </main>
      <Footer />

      {/* Mobile Sticky Share Bar */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 p-4 z-50 transition-transform duration-300 ${showStickyShare ? "translate-y-0" : "translate-y-full"}`}>
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl border-t border-border shadow-[0_-10px_30px_rgba(0,0,0,0.05)] -z-10" />
        <div className="flex items-center justify-between px-2">
          <span className="text-sm font-semibold text-foreground">Share this</span>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border bg-background shadow-sm">
              <Linkedin className="h-4 w-4 text-primary" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-10 w-10 border-border bg-background shadow-sm">
              <Twitter className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
