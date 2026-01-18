import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">
          <Link href="/">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center"><Calendar className="mr-2 h-4 w-4" /> March 2025</span>
              <span className="flex items-center"><Clock className="mr-2 h-4 w-4" /> 5 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
              The 2025 Product Strategy Playbook: Moving Beyond "Big Vision"
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Why 5-year roadmaps are dead, and how execution-focused product teams are winning by thinking in cycles, not straight lines.
            </p>
          </header>

          <div className="prose prose-lg prose-slate max-w-none">
            <p>
              In my 9+ years leading product at companies like CarInfo and various fintech startups, I’ve seen the same pattern repeat itself. Founders and PMs get locked into "Big S Strategy"—the 5-year vision, the massive pivot, the "Uber for X."
            </p>
            <p>
              But in 2025, that approach is a trap. The market moves too fast. The real winners aren't the ones with the best 100-page slide deck; they are the ones who master "little s strategy"—the tactical, data-informed pivots that happen every quarter, every sprint.
            </p>

            <h3>The Death of the Static Roadmap</h3>
            <p>
              I used to build strict 12-month roadmaps. They made stakeholders feel safe. But by month 3, they were obsolete. Today, I advocate for a <strong>Strategy of Continuous Iteration</strong>.
            </p>
            <p>
              Instead of asking "What are we building in Q4?", we should ask:
              <br/>
              <em>"What data signal did we get last week, and how does that change our focus for next week?"</em>
            </p>

            <h3>Data Over Gut, But Context Over Data</h3>
            <p>
              We drown in dashboards. At CarInfo, we scaled to 45M+ MAU not just by staring at Mixpanel, but by understanding the <em>context</em> behind the click. Data tells you <em>what</em> happened. User empathy tells you <em>why</em>.
            </p>
            <p>
              The 2025 playbook isn't about AI tools or fancy frameworks. It's about shorter feedback loops. Build. Measure. Learn. But do it faster than your competition.
            </p>

            <h3>Execution is the Strategy</h3>
            <p>
              You can have the best pricing strategy on paper (I've designed plenty). But if your checkout flow is broken, or your value prop isn't clear on the landing page, you lose.
            </p>
            <p>
              My approach with clients is simple: Stop over-planning. Start shipping. Test that pricing model. A/B test that funnel. The market will tell you if your strategy is right, not your slide deck.
            </p>

            <hr className="my-12 border-border" />

            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Resonate with this approach?</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I help founders and product teams implement this exact kind of execution-focused strategy. Let's turn your vision into revenue.
              </p>
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact">Let's work together</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
