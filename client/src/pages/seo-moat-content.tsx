import { AlertTriangle, Lightbulb, TrendingUp, Link2, Layers, Target, Zap } from "lucide-react";
import {
  InsightBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard,
} from "@/components/case-study/shared";

export default function SeoMoatCaseStudy() {
  return (
    <div className="space-y-2">

      {/* ── HOOK ── */}
      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Moment We Realized SEO Was Broken
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          We weren't losing because we had a bad product. We were losing because <strong className="text-foreground">users never found us</strong>.
        </p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          When we launched MoneyRateFinder, we believed we had a strong value proposition: real-time comparison, better UX than legacy platforms, and a focused decision-making flow. But the reality was brutal.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-3 text-sm uppercase tracking-wider">Our Reality</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {["Traffic stagnant at ~1K/month", "High-intent keywords dominated by incumbents", "Even when we ranked, we weren't converting"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-destructive mt-1">✕</span>{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Who Was Winning</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              {["Monito", "CompareRemit", "MoneyTransfers"].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-primary mt-1">→</span>Quietly capturing every high-value search for <em>"{item}"</em></li>
              ))}
            </ul>
          </div>
        </div>

        <TakeawayBox>This wasn't just a content problem. This was a system-level SEO failure.</TakeawayBox>
      </section>

      <SectionDivider label="Root Cause" />

      {/* ── ROOT CAUSE ── */}
      <section id="root-cause" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Core Problem (Deeper Than "Low Traffic")
        </h2>

        <div className="space-y-5 mt-4">
          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">01</span> We Didn't Understand Search Intent Properly
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-xs">What we built</p>
                <ul className="space-y-1 text-foreground/70">
                  <li>→ "Send Money to UK"</li>
                  <li>→ "Best Transfer Apps"</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2 uppercase tracking-wider text-xs">What competitors had</p>
                <ul className="space-y-1 text-foreground/80">
                  <li>→ Multi-layered intent capture</li>
                  <li>→ Comparison-first pages</li>
                  <li>→ Decision-stage UX embedded in SEO</li>
                </ul>
              </div>
            </div>
            <InsightBox>We were writing content. They were capturing decisions.</InsightBox>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">02</span> SEO Was Treated as Content, Not a System
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-muted-foreground mb-2 uppercase tracking-wider text-xs">Our approach</p>
                <ul className="space-y-1 text-foreground/70">
                  <li>→ Write articles</li>
                  <li>→ Add keywords</li>
                  <li>→ Publish</li>
                </ul>
                <p className="text-xs mt-2 text-muted-foreground italic">We had a blog.</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2 uppercase tracking-wider text-xs">Their approach</p>
                <ul className="space-y-1 text-foreground/80">
                  <li>→ Structured landing ecosystems</li>
                  <li>→ Programmatic page generation</li>
                  <li>→ Internal linking graphs</li>
                  <li>→ Conversion-driven UX</li>
                </ul>
                <p className="text-xs mt-2 text-primary italic">They had an SEO engine.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">03</span> No Feedback Loop Between Product and SEO
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed">Users landed → bounced → disappeared. We had no understanding of user journeys, no connection between SEO pages and product actions, no way to optimize for comparison clicks — our North Star metric.</p>
          </div>
        </div>
      </section>

      <SectionDivider label="The Strategic Shift" />

      {/* ── REFRAME ── */}
      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Turning Point: We Stopped Competing on Content
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Frame</p>
            <p className="text-foreground font-medium text-lg">How do we rank higher?</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Frame</p>
            <p className="text-foreground font-medium text-lg">How do we systematically capture demand across the entire decision journey?</p>
          </div>
        </div>
        <BlockQuote>We won't "do SEO." We will reverse-engineer the SEO systems of our competitors.</BlockQuote>
      </section>

      <SectionDivider label="Competitor Deconstruction" />

      {/* ── COMPETITOR ANALYSIS ── */}
      <section id="competitor-analysis" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Step 1: Deconstructing Competitor SEO Systems
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          Instead of guessing, we broke competitors down like products — analyzing 3 distinct layers of their SEO architecture.
        </p>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Keyword Architecture</p>
                <p className="text-sm text-muted-foreground">They owned the entire funnel — not just the bottom</p>
              </div>
            </div>
            <DataTable
              headers={["Funnel Stage", "Example Keyword", "Intent"]}
              rows={[
                ["Top Funnel", '"How to send money abroad"', "Awareness"],
                ["Mid Funnel", '"Best money transfer services India to UK"', "Consideration"],
                ["Bottom Funnel", '"Send money to UK from India"', "Decision"],
              ]}
            />
            <InsightBox>Competitors structured their entire keyword portfolio as a funnel — capturing users at every stage of the decision journey, not just at the moment of purchase intent.</InsightBox>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <Layers className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Page Type System</p>
                <p className="text-sm text-muted-foreground">5 core page types, each designed to push toward comparison</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { type: "Country Corridors", ex: "India → UK, India → Canada" },
                { type: "Comparison Pages", ex: "Wise vs Remitly for India transfers" },
                { type: "Provider Pages", ex: "Wise review, Remitly fees" },
                { type: "Guides", ex: '"How to send money to Australia"' },
                { type: "Tools / Calculators", ex: "Exchange rate calculator" },
              ].map((item) => (
                <div key={item.type} className="p-3 rounded-lg border border-border bg-background">
                  <p className="font-semibold text-foreground text-sm mb-1">{item.type}</p>
                  <p className="text-xs text-muted-foreground">{item.ex}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
              The critical insight: <strong className="text-foreground">every page type was designed to push toward comparison</strong> — not just inform. Even guides ended with a comparison widget.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                <Link2 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Internal Linking Graph</p>
                <p className="text-sm text-muted-foreground">The hidden weapon — a tightly connected SEO mesh</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-muted/40 border border-border font-mono text-sm text-foreground/80 space-y-1">
              <p>Guides <span className="text-primary">→</span> Comparison pages</p>
              <p>Comparison pages <span className="text-primary">→</span> Providers</p>
              <p>Providers <span className="text-primary">→</span> Related corridors</p>
              <p className="mt-2 not-italic text-primary font-sans font-semibold text-xs">↳ A tightly connected SEO mesh</p>
            </div>
          </div>
        </div>

        <TakeawayBox>SEO is not pages. SEO is a demand capture system. Competitors had built entry points, decision engines, and conversion flows — working together.</TakeawayBox>
      </section>

      <SectionDivider label="Our SEO Engine" />

      {/* ── SEO ENGINE ── */}
      <section id="seo-engine" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Step 2: Designing Our SEO System (Not Strategy)
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          We didn't copy competitors. We built a <strong className="text-foreground">more structured system</strong> — the MoneyRateFinder SEO Engine, broken into 4 core components.
        </p>

        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">→</span> Demand Mapping Engine
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">Instead of keywords, we mapped complete user journeys — from the first question in someone's head to the final comparison click.</p>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Example Journey</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground shrink-0 w-24">User thinks:</span>
                  <em className="text-foreground">"I want to send money to Canada"</em>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground shrink-0 w-24">Searches:</span>
                  <div className="space-y-1 text-foreground/80">
                    <p>"send money to Canada from India"</p>
                    <p>"best transfer apps India to Canada"</p>
                    <p>"cheap remittance Canada"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-muted-foreground shrink-0 w-24">We mapped:</span>
                  <div className="space-y-1 text-foreground/80">
                    <p>Entry queries → Decision queries → Comparison queries</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">Output: Keyword Clusters — 1 cluster = 1 ecosystem, not 1 page per keyword.</p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">→</span> Programmatic SEO
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">Scale was the moat. We built a dynamic page generation system that made 200+ high-intent landing pages the work of one afternoon, not six months.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5">
                <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-2">Old approach</p>
                <p className="font-bold text-2xl text-foreground mb-1">20</p>
                <p className="text-sm text-foreground/70">manually written pages</p>
              </div>
              <div className="p-4 rounded-xl border border-green-200 bg-green-50">
                <p className="font-semibold text-green-700 text-xs uppercase tracking-wider mb-2">New approach</p>
                <p className="font-bold text-2xl text-green-700 mb-1">200+</p>
                <p className="text-sm text-foreground/70">high-intent landing pages, dynamically generated</p>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-muted/40 border border-border font-mono text-xs text-foreground/70 space-y-1">
              <p>/send-money/india-to-uk</p>
              <p>/send-money/india-to-canada</p>
              <p>/send-money/india-to-australia</p>
              <p className="text-muted-foreground">…each pulling live: exchange rates, providers, fees, rankings</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">→</span> Comparison-First UX
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">Our biggest differentiator. We flipped the standard page structure entirely.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-2">Old structure</p>
                <div className="space-y-2">
                  {["Text-heavy content block", "Explanation paragraphs", "CTA buried at bottom"].map((item, i) => (
                    <div key={i} className="p-2 rounded bg-muted/50 text-sm text-foreground/60 line-through decoration-destructive">{item}</div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-2">New structure</p>
                <div className="space-y-2">
                  {["Comparison widget — immediately visible", "Live rates from all providers", "Ranked recommendations", "CTA above the fold"].map((item, i) => (
                    <div key={i} className="p-2 rounded bg-primary/5 border border-primary/20 text-sm text-foreground/80">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <InsightBox>Users don't search to read. They search to decide. "What's the best option for me right now?" — that question needs an instant answer, not a blog post.</InsightBox>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">→</span> Internal Linking as a Growth Engine
            </p>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">We designed every internal link intentionally — building a graph that distributed authority, improved crawlability, and increased session depth simultaneously.</p>
            <div className="p-4 rounded-xl bg-muted/40 border border-border font-mono text-sm text-foreground/80 space-y-1">
              <p>Guides <span className="text-primary">→</span> Comparison pages</p>
              <p>Comparison pages <span className="text-primary">→</span> Providers</p>
              <p>Providers <span className="text-primary">→</span> Related corridors</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {[
                { label: "Crawlability", desc: "Better crawl depth distribution" },
                { label: "Authority", desc: "PageRank flows to key pages" },
                { label: "Session Depth", desc: "Users explore related content" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-lg border border-border bg-background text-center">
                  <p className="font-bold text-primary text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="Execution" />

      {/* ── EXECUTION ── */}
      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Step 3: Execution — Where Most Strategies Fail
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">This wasn't just planning. Execution ran in three distinct phases, each with a clear focus and measurable outcome.</p>

        <div className="space-y-4">
          {[
            {
              phase: "Phase 1",
              period: "0 → 30 Days",
              title: "Quick Wins",
              actions: ["Optimized existing pages", "Improved title tags + meta descriptions", "Added comparison widgets above the fold"],
              result: "+30% CTR improvement",
              color: "border-blue-200 bg-blue-50",
              resultColor: "text-blue-700",
            },
            {
              phase: "Phase 2",
              period: "30 → 90 Days",
              title: "Scale",
              actions: ["Launched programmatic corridor pages", "Built full corridor coverage", "Deployed internal linking system"],
              result: "Traffic started compounding",
              color: "border-green-200 bg-green-50",
              resultColor: "text-green-700",
            },
            {
              phase: "Phase 3",
              period: "90+ Days",
              title: "Optimization",
              actions: ["A/B tested page layouts", "Improved CTA placements", "Reduced bounce rates on corridor pages"],
              result: "Higher conversion per session",
              color: "border-purple-200 bg-purple-50",
              resultColor: "text-purple-700",
            },
          ].map((p) => (
            <div key={p.phase} className={`p-6 rounded-xl border ${p.color}`}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{p.phase} · {p.period}</span>
                  <p className="font-bold text-foreground text-lg">{p.title}</p>
                </div>
                <p className={`text-sm font-bold ${p.resultColor} hidden sm:block`}>→ {p.result}</p>
              </div>
              <ul className="space-y-1">
                {p.actions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                    <span className="text-primary mt-1">✓</span>{a}
                  </li>
                ))}
              </ul>
              <p className={`text-sm font-bold ${p.resultColor} mt-3 sm:hidden`}>→ {p.result}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="What Didn't Work" />

      {/* ── WHAT DIDN'T WORK ── */}
      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Step 4: What Didn't Work (Important)
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Not every move paid off. Being honest about failure is as important as celebrating success.</p>
        <div className="space-y-4">
          {[
            {
              title: "Writing Long-Form Content Without Intent",
              detail: "High word count does not equal ranking. We wasted weeks on pages that had no real search intent behind them. Word count is a byproduct of thorough coverage — not a ranking factor by itself.",
            },
            {
              title: "Copying Competitor Content Structure",
              detail: "When we mirrored competitor page layouts without understanding the underlying intent, we got neither differentiation nor conversion. It looked similar, performed worse.",
            },
            {
              title: "Ignoring Conversion Metrics Initially",
              detail: "Traffic increased. Comparison clicks didn't. We were optimizing for the wrong metric early on — tracking sessions but not the North Star action (provider click-through). This cost us a month of misaligned effort.",
            },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-destructive/20 bg-destructive/5 flex gap-4">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground mb-1">✕ {item.title}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Results" />

      {/* ── RESULTS ── */}
      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Step 5: The Results
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="10×" label="Traffic Growth" sub="1K → 10K in 90 days" color="text-green-600" />
          <MetricCard value="100+" label="Top-10 Keywords" sub="high-intent rankings" color="text-primary" />
          <MetricCard value="3×" label="Comparison Clicks" sub="North Star metric" color="text-green-600" />
          <MetricCard value="↓ 40%" label="Bounce Rate" sub="+ higher session duration" color="text-primary" />
        </div>

        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["Monthly Traffic", "~1,000", "~10,000 (90 days)"],
            ["Top-10 Keyword Rankings", "~5", "100+"],
            ["Comparison Clicks", "Baseline", "3× increase"],
            ["Bounce Rate", "High", "Significantly reduced"],
            ["Session Duration", "Short", "Increased (users comparing)"],
          ]}
        />

        <TakeawayBox>The most important outcome: we built a repeatable SEO system. Not a one-time spike. Not a lucky viral post. A system that compounds.</TakeawayBox>
      </section>

      <SectionDivider label="Key Takeaways" />

      {/* ── TAKEAWAYS ── */}
      <section id="takeaways" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Key Takeaways
        </h2>
        <div className="space-y-4">
          {[
            { num: "01", title: "SEO is not about content. It's about capturing decisions.", body: "Every page on your site should be optimized not just to rank, but to help a user make a decision. If it doesn't serve a decision, it shouldn't exist." },
            { num: "02", title: "Competitors don't win because of better writing. They win because of better systems.", body: "Monito and CompareRemit didn't outwrite us. They out-systemized us. The solution wasn't better content — it was better architecture." },
            { num: "03", title: "Programmatic SEO is the only scalable moat in comparison products.", body: "If you're building a comparison or marketplace product, your SEO advantage must be structural — not editorial. You cannot manually write your way to coverage at scale." },
            { num: "04", title: "UX is SEO.", body: "If your page doesn't help users decide instantly, you lose — to bounce rate, to competitors, to the attention economy. Page speed, comparison widgets above the fold, and instant answers are SEO levers." },
            { num: "05", title: "Internal linking is your hidden growth lever.", body: "Most teams treat internal links as an afterthought. We treated them as a primary distribution system for authority, crawlability, and user flow." },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{item.num}</span>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary shrink-0" /> {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="What's Next" />

      {/* ── FUTURE ── */}
      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We're Doing Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Zap className="h-5 w-5 text-primary" />, title: "Personalized SEO Pages", body: "Pages that adapt based on user location and past behavior — same URL, different content priority." },
            { icon: <TrendingUp className="h-5 w-5 text-primary" />, title: "Real-Time Ranking Systems", body: "Dynamic provider rankings updated in real-time based on live exchange rates — making every page's answer always accurate." },
            { icon: <Lightbulb className="h-5 w-5 text-primary" />, title: "AI-Driven Content Layer", body: "Auto-generated insights and context-aware recommendations that make each corridor page unique and genuinely useful." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-primary/20 bg-primary/5 hover-lift">
              <div className="mb-3">{item.icon}</div>
              <p className="font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <BlockQuote>
          Users don't search to read. Users search to decide. Once we aligned our entire SEO system around that truth — growth became inevitable.
        </BlockQuote>
      </section>

    </div>
  );
}
