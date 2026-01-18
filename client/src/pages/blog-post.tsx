import { useRoute, Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, formatDate } from "@/lib/blog-data";
import { getPostContent } from "@/lib/blog-content";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match) return <NotFound />;

  const post = getPostBySlug(params.slug);
  const content = post ? getPostContent(post.slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">
          
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12 animate-fade-in-up">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                {post.category}
              </span>
              <time dateTime={post.date} className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> {formatDate(post.date)}</time>
              <span className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
              {post.title}
            </h1>

            <div className="aspect-[2/1] w-full rounded-2xl overflow-hidden mb-12 border border-border/50 bg-muted">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <>
                <p className="lead text-xl text-foreground font-medium mb-8">
                  {post.description}
                </p>
                <div className="p-8 bg-muted/30 rounded-xl border border-border/50 text-center">
                  <p className="text-muted-foreground">Full article content coming soon.</p>
                </div>
              </>
            )}
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 py-8 border-t border-border mt-12">
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Share2 className="h-4 w-4" /> Share this article:
            </span>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 text-center mt-12">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Building something ambitious?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              If you're building or scaling a product and need hands-on help with strategy or execution, let's talk.
            </p>
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <Link href="/contact">Work with me</Link>
            </Button>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
