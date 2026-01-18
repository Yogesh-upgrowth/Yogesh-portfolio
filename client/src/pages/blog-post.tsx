import { useRoute, Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getPostBySlug } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";

// Import category images
import aiImage from "@assets/generated_images/minimalist_abstract_line_art_representing_ai_and_data_flow.png";
import resourcesImage from "@assets/generated_images/abstract_composition_of_geometric_shapes_representing_product_frameworks.png";
import researchImage from "@assets/generated_images/stylized_magnifying_glass_and_data_points_for_market_research.png";
import knowledgeImage from "@assets/generated_images/abstract_growth_chart_and_upward_trends_for_product_knowledge.png";
import leadershipImage from "@assets/generated_images/abstract_concept_of_leadership_and_connection.png";

const categoryImages: Record<string, string> = {
  "AI Update": aiImage,
  "Product Resources": resourcesImage,
  "Market Research": researchImage,
  "Product Knowledge": knowledgeImage,
  "Leadership": leadershipImage
};

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  
  if (!match) return <NotFound />;

  const post = getPostBySlug(params.slug);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">
          
          {/* Back Link */}
          <Link href="/blog">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </a>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-xs">
                {post.category}
              </span>
              <span className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> {post.date}</span>
              <span className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8">
              {post.title}
            </h1>

            <div className="aspect-[2/1] w-full rounded-2xl overflow-hidden mb-12 border border-border/50 bg-muted">
              <img 
                src={categoryImages[post.category]} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
            <p className="lead text-xl text-foreground font-medium mb-8">
              {post.description}
            </p>

            <p>
              In my 9+ years leading product at companies like CarInfo and various fintech startups, I’ve seen the same pattern repeat itself. Founders and PMs get locked into strategies that look good on paper but fail in execution.
            </p>

            <h2>The Core Problem</h2>
            <p>
              Most product teams are optimized for output, not outcomes. We measure velocity, tickets shipped, and features launched. But we rarely measure the actual impact on the user's life or the business's bottom line until it's too late.
            </p>

            <blockquote>
              "Real product strategy is about saying no to good ideas so you can focus on the great ones."
            </blockquote>

            <h3>The Shift We Need</h3>
            <p>
              To fix this, we need to move from a "build-first" mentality to a "learn-first" mentality. This doesn't mean analysis paralysis. It means:
            </p>
            <ul>
              <li>Validating assumptions before writing code.</li>
              <li>Talking to users weekly, not just quarterly.</li>
              <li>Defining success metrics before the kickoff meeting.</li>
            </ul>

            <h3>Practical Steps for {post.category}</h3>
            <p>
              When tackling challenges in <strong>{post.category}</strong>, start with the fundamentals. Don't overcomplicate the process with heavy frameworks. Instead, focus on the feedback loop.
            </p>
            <p>
              For example, if you're struggling with decision making, try the "One-Way vs. Two-Way Door" mental model. If a decision is reversible (Two-Way Door), make it fast. If it's irreversible (One-Way Door), slow down and gather more data.
            </p>

            <div className="bg-muted/30 p-6 rounded-xl border border-border/50 my-8">
              <h4 className="text-lg font-bold mb-2 mt-0">Key Takeaway</h4>
              <p className="mb-0 text-muted-foreground">
                Stop treating your roadmap as a promise. Treat it as a hypothesis log. Your job is to validate the highest-risk hypotheses first.
              </p>
            </div>

            <h2>Conclusion</h2>
            <p>
              Building great products is messy. There is no perfect playbook. But by focusing on rapid learning cycles and maintaining deep empathy for your users, you can navigate the chaos and build something that truly scales.
            </p>
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-8 md:p-12 rounded-2xl border border-primary/10 text-center mt-12"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">
              Building something ambitious?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              If you’re building or scaling a product and need hands-on help with strategy or execution, let’s talk.
            </p>
            <Button size="lg" className="h-12 px-8 rounded-full" asChild>
              <Link href="/contact">Work with me</Link>
            </Button>
          </motion.div>

        </article>
      </main>
      <Footer />
    </div>
  );
}
