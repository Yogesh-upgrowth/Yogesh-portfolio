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
          
          {/* Hero */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
              Let's Build Products That Don't Break at Scale
            </h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I work with founders and leadership teams who are past the honeymoon phase of building.
              </p>
              <p>
                You have users.<br />
                You have momentum.<br />
                But the product is starting to show cracks — in decision-making, in execution, in monetisation, or in how teams prioritise what actually matters.
              </p>
              <p className="text-foreground font-medium">
                I don't help you ship more features.<br />
                I help you <strong>make fewer, better decisions</strong> — the kind that compound instead of creating invisible debt.
              </p>
              
              <div className="pt-4">
                <Button size="lg" className="h-12 px-8 rounded-full" asChild>
                  <Link href="/contact">
                    Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-3">Response guaranteed within 24 hours.</p>
              </div>
            </div>
          </header>

          <div className="space-y-20">
            
            {/* How I Think About Product */}
            <section className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-serif font-bold text-foreground">How I Think About Product</h2>
              <p className="text-sm uppercase tracking-widest text-primary font-medium">Context Before Capability</p>
              <p>
                Most product problems are not feature problems.
              </p>
              <p>
                They are:<br />
                — decision problems<br />
                — incentive problems<br />
                — sequencing problems<br />
                — and systems problems that only show up after some success
              </p>
              <p>
                By the time teams feel "stuck," the root cause is usually months old.
              </p>
              <p>
                My job, when I work with you, is to surface those hidden constraints early — before they become expensive, political, or irreversible.
              </p>
              <p className="text-foreground font-medium">
                I don't operate as an external consultant.<br />
                I operate as a <strong>thinking partner who carries outcome accountability</strong>.
              </p>
            </section>

            {/* Who This Is For */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">Who This Page Is Actually For</h2>
              <div className="space-y-5 text-muted-foreground">
                <p>This page is for you if:</p>
                {[
                  "You're a founder who feels the product is getting heavier instead of sharper as you scale.",
                  "You're a growth-stage startup where traffic exists, but revenue, retention, or trust isn't scaling proportionally.",
                  "You're running a consumer product where intent exists, but conversion feels fragile and overly sensitive to small changes.",
                  "You're a B2B SaaS team trying to move upmarket, but product decisions feel reactive to sales pressure instead of strategic.",
                  "You're a leadership team that needs someone who understands how strategy collapses when it hits engineering reality."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How I Work */}
            <section className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-serif font-bold text-foreground">How I Work</h2>
              <p className="text-sm uppercase tracking-widest text-primary font-medium">What This Actually Looks Like</p>
              <p>I don't arrive with a playbook.</p>
              <p>
                I start by understanding:<br />
                — how decisions are currently made<br />
                — where data is trusted vs ignored<br />
                — where teams compensate for system weaknesses manually<br />
                — where "temporary hacks" have quietly become permanent
              </p>
              <p>
                I ask uncomfortable questions early, because late questions are expensive.
              </p>
              <p>
                Once the real constraints are visible, we focus on leverage — not activity. That means fewer initiatives, clearer sequencing, and execution that actually moves business metrics.
              </p>
              <p className="text-foreground font-medium">
                I stay close to execution, because strategy that can't survive contact with reality is just theatre.
              </p>
            </section>

            {/* Deep Dives */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-2 text-foreground">Work That Shaped How I See Problems</h2>
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-8">Deep Dives</p>
              
              <div className="space-y-12">
                
                {/* Loanwiser */}
                <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Loanwiser — Fintech for Bharat</h3>
                    <p className="text-sm text-muted-foreground">Associate Product Manager</p>
                  </div>
                  <p className="text-muted-foreground">
                    Loanwiser wasn't a lending marketplace problem. It was a <strong className="text-foreground">decision confidence problem</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    Banks didn't lack leads. They lacked trust in lead quality, eligibility, and intent — which forced heavy manual verification and slowed disbursements.
                  </p>
                  <p className="text-muted-foreground">
                    We created a decision layer between borrower and lender by deeply analysing bank statements, combining credit score with behavioural signals, and routing users only to lenders where disbursement probability was genuinely high.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm font-medium text-foreground">The non-obvious insight:</p>
                    <p className="text-muted-foreground">Banks don't want more leads — they want <strong className="text-foreground">fewer, better decisions</strong>.</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Impact:</strong> Disbursement probability increased by ~90%. Manual intervention reduced significantly.
                  </p>
                </div>

                {/* CarInfo */}
                <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">CarInfo / AppFlix — Monetising Without Breaking Trust</h3>
                    <p className="text-sm text-muted-foreground">Senior Product Manager</p>
                  </div>
                  <p className="text-muted-foreground">
                    CarInfo already had scale. What it lacked was <strong className="text-foreground">structured intent capture</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    The real problem wasn't conversion. It was <strong className="text-foreground">misaligned friction</strong>. Browsing users, curious users, and high-intent users were forced through identical flows.
                  </p>
                  <p className="text-muted-foreground">
                    We rebuilt journeys based on real intent signals, fixed quote → redirect → purchase drop-offs by rethinking sequencing, and introduced context-aware nudges instead of aggressive CTAs.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm font-medium text-foreground">The non-obvious insight:</p>
                    <p className="text-muted-foreground">Monetisation breaks when product teams chase revenue before understanding <strong className="text-foreground">why users are ready to pay</strong>.</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Impact:</strong> Bike insurance scaled from ~10/day to 6,800+/day. Car insurance from ~5/day to 2,300+/day. CAC reduced 25–30%.
                  </p>
                </div>

                {/* KNIPEX */}
                <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">KNIPEX Tools — Learning Scale Outside Software</h3>
                    <p className="text-sm text-muted-foreground">Product Marketing</p>
                  </div>
                  <p className="text-muted-foreground">
                    At KNIPEX, product thinking wasn't abstract. It was physical, delayed, and unforgiving. We dealt with inventory from Germany, warehousing across India, and real costs for late or wrong decisions.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm font-medium text-foreground">The non-obvious insight:</p>
                    <p className="text-muted-foreground">In physical systems, you can't "ship and iterate." You are forced to think about constraints <strong className="text-foreground">before</strong> acting.</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    That discipline fundamentally shaped how I design software systems today.
                  </p>
                </div>

                {/* UpGrowth */}
                <div className="p-6 rounded-2xl border border-border/50 bg-muted/20 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">UpGrowth — Product Leadership When Output Stops Mattering</h3>
                    <p className="text-sm text-muted-foreground">Product Head</p>
                  </div>
                  <p className="text-muted-foreground">
                    At UpGrowth, the challenge isn't feature delivery. It's <strong className="text-foreground">decision coherence at scale</strong>.
                  </p>
                  <p className="text-muted-foreground">
                    I lead multiple platforms, manage 50+ engineers, designers, and PMs, and own outcomes across growth, monetisation, and operations.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-sm font-medium text-foreground">The non-obvious insight:</p>
                    <p className="text-muted-foreground">At scale, product leadership is less about ideas and more about <strong className="text-foreground">what you choose not to build</strong>.</p>
                  </div>
                </div>

              </div>
            </section>

            {/* What I Can Help With */}
            <section>
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">What I Can Actually Help You With</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Clarifying product direction when everything feels important",
                  "Fixing growth funnels where intent exists but value leaks",
                  "Designing monetisation that doesn't erode trust",
                  "Scaling platforms without increasing human dependency",
                  "Aligning product, business, and engineering decisions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-4 text-sm">If it doesn't move a real metric, we don't do it.</p>
            </section>

            {/* What I Don't Do */}
            <section className="bg-muted/20 -mx-4 md:-mx-8 p-8 md:p-10 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-serif font-bold mb-6 text-foreground">What I Explicitly Don't Do</h2>
              <div className="space-y-4">
                {[
                  "I don't deliver surface-level audits with no ownership.",
                  "I don't optimise vanity metrics that look good in reviews but don't change outcomes.",
                  "I don't take work where success is undefined.",
                  "I don't replace teams — I help them think and move better."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Engagement Style */}
            <section className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="text-2xl font-serif font-bold text-foreground">Engagement Style</h2>
              <p>
                Sometimes the work is advisory.<br />
                Sometimes it's hands-on execution.<br />
                Sometimes it's an ongoing partnership through a growth phase.
              </p>
              <p>
                We always start by defining the real problem. The engagement model follows the solution — not the other way around.
              </p>
            </section>

            {/* CTA */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">Ready to move the needle?</h2>
              <p className="text-lg text-muted-foreground mb-2">
                If this page resonated, let's talk.
              </p>
              <p className="text-muted-foreground mb-8">
                No pitch. No pressure. Just an honest conversation about whether I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                  <Link href="/contact">
                    Start a conversation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <p className="text-muted-foreground text-sm self-center">
                  Or email me directly at <a href="mailto:yogesh.productmanager@gmail.com" className="text-primary hover:underline">yogesh.productmanager@gmail.com</a>
                </p>
              </div>
            </section>

          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
