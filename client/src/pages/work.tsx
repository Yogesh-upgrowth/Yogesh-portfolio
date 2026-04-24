import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, XCircle, Target, TrendingUp, Users, Zap, Brain, BarChart3 } from "lucide-react";

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "50+", label: "Team Members Led" },
  { value: "680×", label: "Insurance Growth" },
  { value: "90%", label: "Better Disbursement" },
];

const idealFit = [
  { num: "01", icon: Target,     title: "Scaling Founders",       desc: "Product is getting heavier instead of sharper as you grow." },
  { num: "02", icon: TrendingUp, title: "Growth-Stage Startups",  desc: "Traffic exists, but revenue and retention aren't scaling." },
  { num: "03", icon: Users,      title: "Consumer Products",      desc: "Intent exists, but conversion feels fragile and inconsistent." },
  { num: "04", icon: BarChart3,  title: "B2B SaaS Teams",         desc: "Moving upmarket but decisions feel reactive to sales pressure." },
  { num: "05", icon: Brain,      title: "Leadership Teams",       desc: "Need someone who bridges strategy and engineering reality." },
  { num: "06", icon: Zap,        title: "Product Teams",          desc: "Execution is fast but overall direction feels unclear." },
];

const understandList = [
  "How decisions are currently made",
  "Where data is trusted vs ignored",
  "Where teams compensate for system weaknesses",
  "Where temporary hacks became permanent",
];

const companies = [
  {
    category: "Fintech",
    name: "Loanwiser",
    role: "Associate Product Manager",
    metric: "+90%",
    metricLabel: "Disbursement Rate",
    insight: "Banks don't want more leads — they want fewer, better decisions.",
    desc: "Banks didn't lack leads — they lacked trust in lead quality. We built a decision layer that deeply analyzed bank statements, combined credit scores with behavioral signals, and routed users only where disbursement probability was high.",
  },
  {
    category: "Consumer",
    name: "CarInfo / AppFlix",
    role: "Senior Product Manager",
    metric: "680×",
    metricLabel: "Insurance Growth",
    insight: "Monetisation breaks when product teams chase revenue before understanding why users are ready to pay.",
    desc: "The real problem wasn't conversion — it was misaligned friction. We rebuilt journeys based on real intent signals, fixed sequencing issues, and introduced context-aware nudges instead of aggressive CTAs.",
  },
  {
    category: "Operations",
    name: "KNIPEX Tools",
    role: "Product Marketing",
    metric: "0",
    metricLabel: "Margin for Error",
    insight: "Physical systems force you to think about constraints before acting — that discipline shaped how I design software.",
    desc: "At KNIPEX, product thinking was physical, delayed, and unforgiving. Inventory from Germany, warehousing across India, real costs for wrong decisions. You can't 'ship and iterate' in physical systems.",
  },
  {
    category: "Leadership",
    name: "UpGrowth",
    role: "Product Head",
    metric: "50+",
    metricLabel: "Team Managed",
    insight: "At scale, product leadership is less about ideas and more about what you choose not to build.",
    desc: "The challenge isn't feature delivery — it's decision coherence at scale. I led multiple platforms, managed engineers, designers, and PMs, and owned outcomes across growth, monetisation, and operations.",
  },
];

const canHelp = [
  "Clarifying product direction when everything feels important",
  "Fixing growth funnels where intent exists but value leaks",
  "Designing monetisation that doesn't erode trust",
  "Scaling platforms without increasing human dependency",
  "Aligning product, business, and engineering decisions",
];

const cantHelp = [
  "Surface-level audits with no ownership",
  "Optimising vanity metrics that don't change outcomes",
  "Work where success is undefined",
  "Replacing teams — I help them think better",
];

export default function Work() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <style>{`
        @keyframes wFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wSlideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .w-fade-1 { animation: wFadeUp 0.5s ease-out 0.1s both; }
        .w-fade-2 { animation: wFadeUp 0.5s ease-out 0.22s both; }
        .w-fade-3 { animation: wFadeUp 0.5s ease-out 0.34s both; }
        .w-fade-4 { animation: wFadeUp 0.5s ease-out 0.46s both; }
      `}</style>

      <Navbar />
      <main className="flex-grow">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="pt-28 pb-20 relative overflow-hidden bg-background">
          {/* Faint radial behind right column */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 70% at 90% 10%, rgba(37,99,235,0.06) 0%, transparent 65%)" }} />

          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-center">

              {/* Left */}
              <div>
                <div className="w-fade-1 inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/25 bg-primary/8 text-xs font-bold tracking-widest uppercase text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Available for new projects
                </div>

                <h1 className="w-fade-2 text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.1] text-foreground mb-6">
                  Let's Build Products<br />
                  That Don't Break<br />
                  <span className="text-primary">at Scale.</span>
                </h1>

                <p className="w-fade-3 text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                  I work with founders and leadership teams who are past the honeymoon phase — you have users and momentum, but cracks are showing in execution. You need fewer, better decisions.
                </p>

                <div className="w-fade-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button size="lg" className="h-13 px-8 text-base rounded-full" asChild>
                    <Link href="/contact">
                      Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                </div>
              </div>

              {/* Right — dark stats card */}
              <div className="hidden lg:block relative">
                <div className="rounded-3xl bg-foreground p-8 overflow-hidden">
                  {/* Subtle grid texture */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                  {/* Radial glow */}
                  <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none"
                    style={{ background: "radial-gradient(circle at bottom right, rgba(37,99,235,0.2) 0%, transparent 65%)" }} />

                  <p className="relative text-[11px] font-bold tracking-widest uppercase text-white/35 mb-6">Track Record</p>

                  <div className="relative grid grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
                    {stats.map(({ value, label }, i) => (
                      <div key={i} className="bg-foreground p-6 flex flex-col gap-1">
                        <span className="font-serif font-bold text-primary leading-none"
                          style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", textShadow: "0 0 40px rgba(37,99,235,0.4)" }}>
                          {value}
                        </span>
                        <span className="text-xs text-white/40 font-medium leading-snug">{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6 pt-6 border-t border-white/[0.07]">
                    <p className="text-white/40 text-xs leading-relaxed italic">
                      "I don't operate as an external consultant. I operate as a thinking partner who carries outcome accountability."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── WHO THIS IS FOR ───────────────────────────────────── */}
        <section className="py-24 bg-muted/25 border-y border-border/50">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Ideal Fit</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Who This Is For</h2>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">If you see yourself here, we're probably a match.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
              {idealFit.map(({ num, icon: Icon, title, desc }, i) => (
                <div key={i}
                  className="group relative flex gap-5 p-7 border-b border-r border-border/50 hover:bg-background transition-colors duration-200 last:border-r-0"
                  style={{ borderRight: (i + 1) % 3 === 0 ? "none" : undefined }}
                >
                  {/* Number watermark */}
                  <span className="absolute top-5 right-5 text-4xl font-serif font-bold text-border/60 select-none group-hover:text-primary/10 transition-colors">
                    {num}
                  </span>
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors mt-0.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1.5">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── MY APPROACH ───────────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start max-w-6xl mx-auto">

              {/* Left */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">My Approach</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Context Before Capability</h2>
                <p className="text-lg text-muted-foreground mb-5 leading-relaxed">
                  Most product problems are not feature problems. They are decision problems, incentive problems, sequencing problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  By the time teams feel "stuck," the root cause is usually months old. My job is to surface those hidden constraints early — before they become expensive or irreversible.
                </p>

                {/* Pull quote */}
                <blockquote className="border-l-4 border-primary pl-5">
                  <p className="text-xl font-serif font-bold italic text-foreground leading-relaxed">
                    "I don't operate as an external consultant. I operate as a thinking partner who carries outcome accountability."
                  </p>
                </blockquote>
              </div>

              {/* Right — dark card */}
              <div className="relative rounded-3xl bg-foreground p-8 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                <div className="absolute top-0 left-0 w-40 h-40 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top left, rgba(37,99,235,0.15) 0%, transparent 65%)" }} />

                <p className="relative text-[11px] font-bold tracking-widest uppercase text-primary mb-7">I Start By Understanding:</p>
                <div className="relative space-y-0">
                  {understandList.map((item, i) => (
                    <div key={i} className="flex gap-4 py-5 border-b border-white/[0.07] last:border-0 group">
                      <span className="text-2xl font-serif font-bold text-primary/25 shrink-0 w-7 leading-none mt-0.5 group-hover:text-primary/50 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/75 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRACK RECORD ──────────────────────────────────────── */}
        <section className="py-24 bg-foreground text-background relative overflow-hidden">
          {/* Background scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "100% 72px" }} />
          <div className="absolute top-0 right-0 w-[500px] h-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 70% at 100% 50%, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />

          <div className="relative container px-4 md:px-6 mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Proven Results</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-background leading-tight">
                  Work That Shaped<br className="hidden md:block" /> How I See Problems
                </h2>
              </div>
              <p className="text-white/35 text-sm max-w-xs">Four companies. Different domains. Same discipline.</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-0" />

            {/* Company rows */}
            {companies.map((c, i) => (
              <div key={i} className="group">
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr_140px] lg:grid-cols-[180px_1fr_220px] gap-6 md:gap-10 items-center py-8 px-2 -mx-2 rounded-lg hover:bg-white/[0.025] transition-colors duration-200">

                  {/* Company + role */}
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-primary/60 mb-1">{c.category}</p>
                    <p className="font-serif font-bold text-background text-lg leading-snug">{c.name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{c.role}</p>
                  </div>

                  {/* Description + insight */}
                  <div>
                    <p className="text-white/55 text-sm leading-relaxed mb-3">{c.desc}</p>
                    <div className="flex items-start gap-2">
                      <span className="text-primary shrink-0 text-xs font-bold uppercase tracking-widest mt-0.5">Insight →</span>
                      <p className="text-white/80 text-sm font-medium leading-snug italic">{c.insight}</p>
                    </div>
                  </div>

                  {/* Metric */}
                  <div className="hidden md:block text-right md:text-left lg:text-right">
                    <p className="font-serif font-bold text-primary leading-none mb-1"
                      style={{ fontSize: "clamp(2rem, 4vw, 3rem)", textShadow: "0 0 50px rgba(37,99,235,0.45)" }}>
                      {c.metric}
                    </p>
                    <p className="text-white/35 text-xs font-medium">{c.metricLabel}</p>
                  </div>
                </div>
                <div className="h-px bg-white/[0.07] group-hover:bg-white/[0.12] transition-colors" />
              </div>
            ))}

          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────────── */}
        <section className="py-24 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">

              {/* What I help with */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Services</p>
                <h2 className="text-3xl font-serif font-bold mb-8">What I Can Help With</h2>
                <div className="space-y-3">
                  {canHelp.map((item, i) => (
                    <div key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border/60 hover:border-primary/30 hover:bg-primary/[0.02] transition-all group">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-6 italic border-l-2 border-primary/30 pl-3">
                  If it doesn't move a real metric, we don't do it.
                </p>
              </div>

              {/* What I don't do */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Boundaries</p>
                <h2 className="text-3xl font-serif font-bold mb-8">What I Don't Do</h2>
                <div className="space-y-3">
                  {cantHelp.map((item, i) => (
                    <div key={i}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-muted/20">
                      <XCircle className="h-5 w-5 text-muted-foreground/60 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed line-through decoration-muted-foreground/30">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Engagement model note */}
                <div className="mt-8 p-5 rounded-xl bg-primary/5 border border-primary/15">
                  <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Engagement Model</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Sometimes the work is advisory. Sometimes it's hands-on execution. Sometimes it's an ongoing partnership through a growth phase. We always start by defining the real problem. The engagement model follows the solution.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="relative py-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />

          <div className="relative container px-4 md:px-6 mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Let's Talk</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-background leading-tight mb-6 max-w-2xl mx-auto">
              Ready to Move<br /> the Needle?
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              We always start by defining the real problem. The engagement model follows the solution.
            </p>
            <Button size="lg" className="h-14 px-10 text-base rounded-full" asChild>
              <Link href="/contact">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-white/25 text-sm mt-6">
              Or email directly:{" "}
              <a href="mailto:yogesh.productmanager@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors">
                yogesh.productmanager@gmail.com
              </a>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
