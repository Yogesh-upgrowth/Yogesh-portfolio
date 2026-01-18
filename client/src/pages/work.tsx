import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <article className="container px-4 md:px-6 mx-auto max-w-3xl">
          
          {/* Section 1: Intro */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Work With Me
            </h1>
            <div className="prose prose-lg prose-slate max-w-none text-muted-foreground leading-relaxed">
              <p className="text-xl text-foreground font-medium mb-6">
                I believe that great products aren't built in a vacuum. They are the result of rigorous execution, clear thinking, and the courage to make hard trade-offs.
              </p>
              <p>
                I work with teams that care about building real products, not just shipping features to hit a quarterly OKR. My goal isn't to be a consultant who leaves you with a slide deck and an invoice; it's to be a partner who helps you build an engine for sustainable, long-term growth.
              </p>
            </div>
          </header>

          <div className="space-y-20">
            
            {/* Section 2: Who This Is For */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                Who This Is For
              </h2>
              <div className="grid gap-6">
                {[
                  { title: "Founders building or scaling products", desc: "You have traction, but the 'messy middle' of scaling operations and product is slowing you down." },
                  { title: "Growth-stage startups", desc: "You're struggling to turn free users into revenue, or you need to fix a leaky bucket in your retention funnel." },
                  { title: "Consumer apps with scale", desc: "You have the traffic, but conversion is poor, and you need a fresh, data-backed perspective." },
                  { title: "B2B SaaS teams", desc: "You need clarity on your product direction to move upmarket or close larger enterprise deals." },
                  { title: "Leadership teams", desc: "You need a strong product operator who can bridge the gap between high-level strategy and day-to-day engineering execution." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: How I Work */}
            <section className="prose prose-lg prose-slate max-w-none text-muted-foreground">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">How I Work</h2>
              <p>
                I don't believe in one-size-fits-all frameworks or rigid playbooks. Every business has unique constraints, and copy-pasting a strategy from a blog post rarely works.
              </p>
              <p>
                I start by immersing myself in your reality—your data, your team culture, and your customer feedback. I ask the uncomfortable questions that uncover the root causes of stagnation. From there, we don't just plan; we execute.
              </p>
              <p>
                I work alongside your team, helping them see around corners, prioritizing leverage over busywork, and navigating the ambiguity of growth. Think of me not as an external advisor, but as a thinking partner who gets their hands dirty.
              </p>
            </section>

            {/* Section 4: What I Can Help With */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">What I Can Help With</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Product strategy & roadmap clarity",
                  "Growth funnel diagnosis and fixes",
                  "Monetisation & pricing decisions",
                  "Scaling workflows and platforms",
                  "Aligning product, business, & execution"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: What I Don't Do */}
            <section className="bg-muted/20 -mx-4 md:-mx-8 p-8 md:p-10 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">What I Don't Do</h2>
              <div className="space-y-4">
                {[
                  "I don't do surface-level 'audits' with no follow-through. If we identify a problem, we build a plan to fix it.",
                  "I don't optimize vanity metrics. If it doesn't help the P&L or the user experience, it's not real growth.",
                  "I don't take on work where outcomes don't matter. I am result-oriented.",
                  "I don't replace your team. I am here to empower them, mentor them, and help them move faster."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Engagement Style */}
            <section className="prose prose-lg prose-slate max-w-none text-muted-foreground">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Engagement Style</h2>
              <p>
                My engagement model is flexible because the problems I solve vary in shape and size. It might be a <strong>short-term advisory</strong> role to unblock a specific strategic challenge, <strong>hands-on execution</strong> to launch a critical initiative, or an <strong>ongoing product partnership</strong> to steer the ship through a growth phase.
              </p>
              <p>
                We define the problem first, then we structure the work around the solution.
              </p>
            </section>

            {/* Section 7: CTA */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Ready to move the needle?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                If this sounds like the kind of help you’re looking for, we can start with a conversation. No sales pitch, just a chat to see if we're a fit.
              </p>
              <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                <Link href="/contact">
                  Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </section>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
