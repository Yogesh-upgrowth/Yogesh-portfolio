import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle, Target, TrendingUp, Users, Zap, Brain, BarChart3 } from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        
        {/* Hero Section - Light with subtle gradient */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
          </div>
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Work With Me
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                    Let's Build Products That Don't Break at Scale
                  </h1>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>I work with founders and leadership teams who are past the honeymoon phase.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>You have users and momentum</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>But cracks are showing in execution</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>You need fewer, better decisions</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                    <Link href="/contact">
                      Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground self-center">Response within 24 hours</p>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="hidden lg:block">
                <div className="bg-muted/30 border border-border rounded-3xl p-8 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">Track Record</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-background rounded-xl border border-border">
                      <p className="text-4xl font-bold text-primary">9+</p>
                      <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl border border-border">
                      <p className="text-4xl font-bold text-primary">50+</p>
                      <p className="text-sm text-muted-foreground mt-1">Team Members Led</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl border border-border">
                      <p className="text-4xl font-bold text-primary">680x</p>
                      <p className="text-sm text-muted-foreground mt-1">Insurance Growth</p>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl border border-border">
                      <p className="text-4xl font-bold text-primary">90%</p>
                      <p className="text-sm text-muted-foreground mt-1">Better Disbursement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For - Grid Cards */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Ideal Fit</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Who This Is For</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Target, title: "Scaling Founders", desc: "Product is getting heavier instead of sharper as you grow" },
                { icon: TrendingUp, title: "Growth-Stage Startups", desc: "Traffic exists, but revenue and retention aren't scaling" },
                { icon: Users, title: "Consumer Products", desc: "Intent exists, but conversion feels fragile" },
                { icon: BarChart3, title: "B2B SaaS Teams", desc: "Moving upmarket but decisions feel reactive to sales" },
                { icon: Brain, title: "Leadership Teams", desc: "Need someone who bridges strategy and engineering reality" },
                { icon: Zap, title: "Product Teams", desc: "Execution is fast but direction feels unclear" }
              ].map((item, i) => (
                <div key={i} className="bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How I Think - Split Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">My Approach</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Context Before Capability</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">Most product problems are not feature problems. They are decision problems, incentive problems, sequencing problems.</p>
                  <p>By the time teams feel "stuck," the root cause is usually months old. My job is to surface those hidden constraints early — before they become expensive or irreversible.</p>
                </div>
              </div>
              <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 space-y-6">
                <h3 className="font-semibold text-lg text-primary">I Start By Understanding:</h3>
                <ul className="space-y-4">
                  {[
                    "How decisions are currently made",
                    "Where data is trusted vs ignored",
                    "Where teams compensate for system weaknesses",
                    "Where temporary hacks became permanent"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground italic">"I don't operate as an external consultant. I operate as a thinking partner who carries outcome accountability."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Proven Results</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Work That Shaped How I See Problems</h2>
            </div>
            
            <div className="space-y-8 max-w-6xl mx-auto">
              
              {/* Loanwiser */}
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 border-r border-border p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Fintech</p>
                    <h3 className="text-2xl font-bold mb-1">Loanwiser</h3>
                    <p className="text-sm text-muted-foreground">Associate Product Manager</p>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">+90% Disbursement Rate</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">Decision Confidence Problem</span>
                    </div>
                    <p className="text-muted-foreground">Banks didn't lack leads — they lacked trust in lead quality. We built a decision layer that deeply analyzed bank statements, combined credit scores with behavioral signals, and routed users only where disbursement probability was high.</p>
                    <p className="text-sm font-medium text-foreground mt-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <strong>Key Insight:</strong> Banks don't want more leads — they want fewer, better decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* CarInfo */}
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 border-r border-border p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Consumer</p>
                    <h3 className="text-2xl font-bold mb-1">CarInfo / AppFlix</h3>
                    <p className="text-sm text-muted-foreground">Senior Product Manager</p>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">680x Insurance Growth</span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">-30% CAC</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">Misaligned Friction</span>
                    </div>
                    <p className="text-muted-foreground">The real problem wasn't conversion — it was misaligned friction. We rebuilt journeys based on real intent signals, fixed sequencing issues, and introduced context-aware nudges instead of aggressive CTAs.</p>
                    <p className="text-sm font-medium text-foreground mt-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <strong>Key Insight:</strong> Monetisation breaks when product teams chase revenue before understanding why users are ready to pay.
                    </p>
                  </div>
                </div>
              </div>

              {/* KNIPEX */}
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 border-r border-border p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Operations</p>
                    <h3 className="text-2xl font-bold mb-1">KNIPEX Tools</h3>
                    <p className="text-sm text-muted-foreground">Product Marketing</p>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">Physical Systems</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">Constraint-First Thinking</span>
                    </div>
                    <p className="text-muted-foreground">At KNIPEX, product thinking was physical, delayed, and unforgiving. Inventory from Germany, warehousing across India, real costs for wrong decisions. You can't "ship and iterate" in physical systems.</p>
                    <p className="text-sm font-medium text-foreground mt-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <strong>Key Insight:</strong> Physical systems force you to think about constraints before acting — that discipline shaped how I design software.
                    </p>
                  </div>
                </div>
              </div>

              {/* UpGrowth */}
              <div className="bg-background border border-border rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-3">
                  <div className="bg-primary/5 border-r border-border p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Leadership</p>
                    <h3 className="text-2xl font-bold mb-1">UpGrowth</h3>
                    <p className="text-sm text-muted-foreground">Product Head</p>
                  </div>
                  <div className="md:col-span-2 p-8 space-y-4">
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">50+ Team</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">Decision Coherence at Scale</span>
                    </div>
                    <p className="text-muted-foreground">The challenge isn't feature delivery — it's decision coherence at scale. I lead multiple platforms, manage engineers, designers, and PMs, and own outcomes across growth, monetisation, and operations.</p>
                    <p className="text-sm font-medium text-foreground mt-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <strong>Key Insight:</strong> At scale, product leadership is less about ideas and more about what you choose not to build.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* What I Help With */}
                <div>
                  <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
                  <h2 className="text-3xl font-serif font-bold mb-8">What I Can Help With</h2>
                  <div className="space-y-4">
                    {[
                      "Clarifying product direction when everything feels important",
                      "Fixing growth funnels where intent exists but value leaks",
                      "Designing monetisation that doesn't erode trust",
                      "Scaling platforms without increasing human dependency",
                      "Aligning product, business, and engineering decisions"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-6 italic">If it doesn't move a real metric, we don't do it.</p>
                </div>

                {/* What I Don't Do */}
                <div>
                  <p className="text-muted-foreground font-semibold uppercase tracking-widest text-sm mb-3">Boundaries</p>
                  <h2 className="text-3xl font-serif font-bold mb-8">What I Don't Do</h2>
                  <div className="space-y-4">
                    {[
                      "Surface-level audits with no ownership",
                      "Optimising vanity metrics that don't change outcomes",
                      "Work where success is undefined",
                      "Replacing teams — I help them think better"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
                        <XCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Engagement + CTA */}
        <section className="py-20 bg-primary/5 border-t border-primary/10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-3">Let's Talk</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Move the Needle?</h2>
              <div className="text-lg text-muted-foreground space-y-4 mb-8">
                <p>Sometimes the work is advisory. Sometimes it's hands-on execution. Sometimes it's an ongoing partnership through a growth phase.</p>
                <p>We always start by defining the real problem. The engagement model follows the solution.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full" asChild>
                  <Link href="/contact">
                    Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                Or email directly: <a href="mailto:yogesh.productmanager@gmail.com" className="text-primary hover:underline">yogesh.productmanager@gmail.com</a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
