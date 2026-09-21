import { useRoute, Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug, formatDate, BLOG_POSTS } from "@/lib/blog-data";
import { getPostContent } from "@/lib/blog-content";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { Seo, articleSchema, breadcrumbSchema, getModifiedDate } from "@/lib/seo";
import { getPageSeo } from "@shared/seo-meta";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { caseStudies } from "@/data/caseStudies";

// Two most relevant case studies per blog category, for contextual internal links.
const RELATED_CS_BY_CATEGORY: Record<string, string[]> = {
  "AI & Product": ["ai-recommendation-engine", "ml-ux-growth-3x-conversion"],
  "Growth & SEO": ["seo-0-to-100k", "programmatic-seo-calculators"],
  "Experiments": ["ux-redesign-conversion-28", "funnel-dropoff-ux-optimization"],
  "PM Career": ["carinfo-45m-mau", "insurance-funnel-1200-growth"],
  "Comparisons": ["comparison-platform-india", "cab-fare-comparison-engine"],
  "Founder Notes": ["mvp-in-7-days", "zero-cost-growth-engine"],
};

function RelatedCaseStudies({ category }: { category: string }) {
  const slugs = RELATED_CS_BY_CATEGORY[category] ?? ["carinfo-45m-mau", "insurance-funnel-1200-growth"];
  const studies = slugs
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  if (studies.length === 0) return null;
  return (
    <section aria-label="Related case studies" className="mt-12 pt-8 border-t border-border">
      <h2 className="text-xl font-serif font-bold mb-5">Related case studies</h2>
      <ul className="space-y-3">
        {studies.map((s) => (
          <li key={s.slug}>
            <Link href={`/case-study/${s.slug}`} className="text-primary font-medium hover:underline">
              {s.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Sibling posts in the same category. Without this, every post's only inbound
 * in-content link is from /blog, leaving the whole blog one link deep and
 * flattening how authority flows between related articles.
 */
function RelatedPosts({ slug, category }: { slug: string; category: string }) {
  const siblings = BLOG_POSTS.filter(
    (p) => p.category === category && p.slug !== slug
  );
  if (siblings.length === 0) return null;

  // Deterministic rotation: each post links to the next few in its category, so
  // inbound links spread evenly instead of piling onto the same two posts.
  const start = Math.max(0, siblings.findIndex((p) => p.slug > slug));
  const picks = Array.from({ length: Math.min(4, siblings.length) }, (_, i) =>
    siblings[(start + i) % siblings.length]
  );

  return (
    <section aria-label="Related articles" className="mt-12 pt-8 border-t border-border">
      <h2 className="text-xl font-serif font-bold mb-5">More on {category}</h2>
      <ul className="space-y-3">
        {picks.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-primary font-medium hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match) return <NotFound />;

  const post = getPostBySlug(params.slug);
  const content = post ? getPostContent(post.slug) : undefined;

  if (!post) return <NotFound />;

  const meta = getPageSeo(`/blog/${post.slug}`);
  const modifiedAt = getModifiedDate(`/blog/${post.slug}`);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta?.title ?? `${post.title} | Yogesh Yadav`}
        description={meta?.description ?? post.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.date}
        modifiedAt={modifiedAt}
        schema={[
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            publishedAt: post.date,
            modifiedAt,
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
      <main id="main-content" className="flex-grow pt-32 pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">

          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />

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
              <time dateTime={post.date} className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> Published {formatDate(post.date)}</time>
              {modifiedAt && (
                <time dateTime={modifiedAt} className="flex items-center">Updated {formatDate(modifiedAt)}</time>
              )}
              <span className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
              {post.title}
            </h1>

            <div className="aspect-[2/1] w-full rounded-2xl overflow-hidden mb-12 border border-border/50 bg-muted">
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
          <div className="article-content prose prose-lg prose-slate max-w-none prose-a:text-primary prose-img:rounded-xl">
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

          <RelatedPosts slug={post.slug} category={post.category} />
          <RelatedCaseStudies category={post.category} />

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
