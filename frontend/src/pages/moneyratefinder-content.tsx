import { TrendingUp, Zap, Link2, Database, Search } from "lucide-react";
import {
  InsightBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard,
} from "@/components/case-study/shared";

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-6 p-5 rounded-xl bg-foreground/5 border border-border overflow-x-auto text-sm font-mono text-foreground/80 leading-relaxed">
      {children}
    </pre>
  );
}

function PhaseCard({ phase, months, from, to, desc }: { phase: string; months: string; from: string; to: string; desc: string }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-background">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">{phase}</span>
        <span className="text-xs text-muted-foreground">{months}</span>
      </div>
      <p className="text-xl font-serif font-bold text-foreground mb-1">
        {from} <span className="text-primary">→</span> {to}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function MoneyRateFinderCaseStudy() {
  return (
    <div className="space-y-2">

      {/* ── HOOK ── */}
      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Day We Realized Traffic Was a Vanity Metric
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          When we launched MoneyRateFinder, we weren't naïve. We knew SEO takes time, fintech is competitive, and remittance is crowded. But what we didn't expect was how <strong className="text-foreground">misleading early signals would be</strong>.
        </p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Month 1–3 Snapshot</h3>
        <DataTable
          headers={["Metric", "Value"]}
          rows={[
            ["Monthly Traffic", "~1,120 users"],
            ["Organic Traffic", "18%"],
            ["Avg Session Time", "41 seconds"],
            ["Bounce Rate", "78%"],
            ["Conversion (Click to Provider)", "1.9%"],
          ]}
        />

        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">At first glance, the answer looked obvious: "We just need more traffic." But when we zoomed in on the behavioral data, the picture was completely different.</p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Behavioral Reality</h3>
        <DataTable
          headers={["User Type", "% of Traffic", "Conversion Rate"]}
          rows={[
            ['Generic Search ("send money abroad")', "62%", "0.4%"],
            ["Semi-Specific Queries", "28%", "1.2%"],
            ["High Intent (corridor-specific)", "10%", "9.8%"],
          ]}
        />

        <TakeawayBox>10% of users were generating ~70% of all conversions. This single insight changed everything.</TakeawayBox>
      </section>

      <SectionDivider label="The Strategic Shift" />

      {/* ── REFRAME ── */}
      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Reframing the Problem: Traffic → Intent Coverage
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-3 text-sm uppercase tracking-wider">Old Question</p>
            <p className="text-foreground font-medium text-lg">How do we increase traffic?</p>
            <p className="text-muted-foreground text-sm mt-2">Chasing volume. No targeting. 78% bounce rate.</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">New Question</p>
            <p className="text-foreground font-medium text-lg">How do we capture more high-intent searches at scale?</p>
            <p className="text-muted-foreground text-sm mt-2">Engineering intent. Precision at volume.</p>
          </div>
        </div>

        <InsightBox>We stopped asking "how do we get more traffic" and started asking "how do we own every combination of high-intent search that exists in our market."</InsightBox>
      </section>

      <SectionDivider label="Intent Mapping" />

      {/* ── INTENT MAPPING ── */}
      <section id="intent-mapping" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Mapping the Intent Universe
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We approached SEO like a <strong className="text-foreground">data modeling problem</strong>. Every search query had underlying dimensions, and those dimensions could be combined to map every possible buyer intent.</p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Core Dimensions</h3>
        <DataTable
          headers={["Dimension", "Examples"]}
          rows={[
            ["Source Country", "India, UAE, UK"],
            ["Destination Country", "Canada, Australia, Germany"],
            ["Currency Pair", "INR → CAD, AED → USD"],
            ["Provider", "Wise, Remitly, Western Union"],
            ["Intent Type", "Cheapest, Fastest, Best, Safest"],
          ]}
        />

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">The Combinatorial Explosion</h3>
        <DataTable
          headers={["Variable", "Count"]}
          rows={[
            ["Source Countries", "12"],
            ["Destination Countries", "25"],
            ["Providers", "15"],
            ["Intent Variants", "6"],
            ["Total Potential Pages", "27,000+"],
          ]}
        />

        <CodeBlock>{`Total combinations = 12 × 25 × 15 × 6 = 27,000+ unique intent pages

Each page answers a specific, real user question:
→ "Cheapest way to send money from India to Canada"
→ "Wise vs Remitly India to UK comparison"
→ "Best exchange rate INR to AED today"`}</CodeBlock>

        <BlockQuote>SEO is not about ranking pages. It's about owning combinations of intent.</BlockQuote>
      </section>

      <SectionDivider label="The SEO Engine" />

      {/* ── SEO ENGINE ── */}
      <section id="seo-engine" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Designing the SEO Engine (System Thinking)
        </h2>

        <CodeBlock>{`Intent Mapping → Keyword Clustering → Page Generation → Data Injection → Internal Linking → Indexing → Ranking`}</CodeBlock>

        <div className="space-y-6 mt-6">
          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">Keyword Intelligence System</p>
                <p className="text-sm text-muted-foreground">Intent scoring to filter 45,000+ keywords down to only the ones worth building for</p>
              </div>
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed mb-4">We scraped and aggregated from: Google Autosuggest, People Also Ask, competitor pages, and Search Console data.</p>

            <DataTable
              headers={["Keyword", "Monthly Volume", "Intent Score", "Difficulty"]}
              rows={[
                ["send money India to Canada", "18,000", "92", "High"],
                ["INR to CAD best rate", "9,500", "88", "Medium"],
                ["cheapest way India to UK", "6,200", "95", "Medium"],
                ["transfer money abroad", "45,000", "40", "Very High"],
              ]}
            />

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 mt-4">
              <p className="text-sm font-bold text-foreground mb-2">Internal Metric: Intent Score (0–100)</p>
              <CodeBlock>{`Intent Score = (Specificity × 0.4) + (Transaction Signal × 0.4) + (Urgency × 0.2)

Rule: Only prioritize keywords with Intent Score > 70`}</CodeBlock>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Page Template System</p>
                <p className="text-sm text-muted-foreground">Modular components that feel like tools, not articles</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Hero Section", desc: 'Dynamic title: "Send Money from India to Canada – Best Rates (Live Comparison)"' },
                { name: "Comparison Engine", desc: "Live provider table with rate, fee, speed, and recommendation — pulled fresh from data pipeline" },
                { name: "Insight Layer", desc: '"Best provider for speed", "Cheapest today", "Hidden fee warning" — contextual callouts' },
                { name: "FAQ Module", desc: "Dynamic FAQs generated per corridor to capture long-tail conversational queries" },
              ].map((item) => (
                <div key={item.name} className="flex gap-3 text-sm">
                  <span className="text-primary font-bold shrink-0">→</span>
                  <div><span className="font-semibold text-foreground">{item.name}:</span>{" "}<span className="text-muted-foreground">{item.desc}</span></div>
                </div>
              ))}
            </div>
            <InsightBox>Pages should feel like tools, not articles. Users don't want 1,500-word blogs — they want the best rate right now.</InsightBox>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                <Database className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Data Infrastructure</p>
                <p className="text-sm text-muted-foreground">Real-time data that makes every page genuinely different and valuable</p>
              </div>
            </div>

            <CodeBlock>{`Provider APIs / Scrapers → Data Normalization → Rate Engine → Cache Layer → Frontend Rendering`}</CodeBlock>

            <DataTable
              headers={["Cache Layer", "Duration", "Why"]}
              rows={[
                ["Exchange Rates", "5 minutes", "Freshness = trust = SEO signal"],
                ["Provider Fees", "24 hours", "Changes infrequently"],
                ["Page Cache", "1 hour", "Balance between load speed and freshness"],
              ]}
            />
            <p className="text-sm text-muted-foreground mt-2">Result: Fast load times, fresh data, and an SEO-friendly architecture that search engines could crawl efficiently.</p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                <Link2 className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="font-bold text-foreground">Internal Linking Graph</p>
                <p className="text-sm text-muted-foreground">Turning 5,000 pages into a network Google understands as authoritative</p>
              </div>
            </div>
            <p className="text-foreground/80 text-sm leading-relaxed mb-3">Each page linked to related corridors, currency pages, and provider reviews — creating a web of topical authority rather than isolated pages.</p>
            <div className="p-4 rounded-xl bg-muted/40 border border-border">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Example: India → Canada page links to:</p>
              <div className="flex flex-wrap gap-2">
                {["India → UK corridor", "INR → CAD currency page", "Wise review page", "Remitly India review", "Cheapest corridors index"].map((link) => (
                  <span key={link} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">{link}</span>
                ))}
              </div>
            </div>
            <InsightBox>Google started understanding our site as a network of topical authority, not a collection of pages. Crawl depth dropped. Indexing speed increased. Rankings followed.</InsightBox>
          </div>
        </div>
      </section>

      <SectionDivider label="Scaling Execution" />

      {/* ── SCALING ── */}
      <section id="scaling" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Scaling Execution: 3 Phases
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          <PhaseCard
            phase="Phase 1"
            months="Month 1–2"
            from="50 pages"
            to="300 pages"
            desc="Manual + semi-automated. Proved the model. Validated the intent scoring system with real ranking data."
          />
          <PhaseCard
            phase="Phase 2"
            months="Month 3–5"
            from="300 pages"
            to="2,000 pages"
            desc="Full automation. Scaled the template engine. Expanded to new corridors and currency pairs."
          />
          <PhaseCard
            phase="Phase 3"
            months="Month 6–8"
            from="2,000 pages"
            to="5,000+ pages"
            desc="Optimization + refinement. A/B tested templates. Improved internal linking density. Focused on top 100 corridors."
          />
        </div>
      </section>

      <SectionDivider label="Results" />

      {/* ── RESULTS ── */}
      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Growth Trajectory
        </h2>

        <div className="my-6">
          <h3 className="text-xl font-serif font-bold text-foreground mb-3">Traffic Growth</h3>
          <DataTable
            headers={["Month", "Monthly Traffic", "Growth"]}
            rows={[
              ["Month 1", "1,120", "Baseline"],
              ["Month 3", "4,800", "+4.3×"],
              ["Month 5", "18,500", "+16.5×"],
              ["Month 7", "52,000", "+46×"],
              ["Month 9", "103,000", "+92× from baseline"],
            ]}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 my-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">Keyword Rankings</h3>
            <DataTable
              headers={["Ranking Tier", "Count"]}
              rows={[
                ["Top 3 positions", "320 keywords"],
                ["Top 10 positions", "1,850 keywords"],
                ["Total indexed pages", "4,700"],
              ]}
            />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">Conversion Impact</h3>
            <DataTable
              headers={["Metric", "Before", "After"]}
              rows={[
                ["Click-Through Rate", "1.9%", "4.8%"],
                ["Provider Conversion", "1.9%", "6.2%"],
                ["Revenue / User", "Baseline", "↑ 2.3×"],
              ]}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="92×" label="Traffic Growth" sub="Month 1 to Month 9" color="text-green-600" />
          <MetricCard value="4,700" label="Indexed Pages" sub="from 5,000+ built" color="text-primary" />
          <MetricCard value="1,850" label="Top-10 Keywords" sub="in 9 months" color="text-green-600" />
          <MetricCard value="2.3×" label="Revenue per User" sub="via intent targeting" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Deep Insights" />

      {/* ── LEARNINGS ── */}
      <section id="learnings" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          What Actually Worked
        </h2>
        <div className="space-y-6">
          {[
            {
              num: "01",
              title: "We Built a System, Not Content",
              body: "Competitors wrote articles. We built an intent capture machine. Articles age and require maintenance. Systems compound. Our 5,000-page architecture kept ranking for new long-tail variations we didn't even target explicitly.",
              icon: <TrendingUp className="h-5 w-5 text-primary" />,
            },
            {
              num: "02",
              title: "Utility > Words",
              body: "Users searching for remittance rates want ONE thing: the best rate right now. Not a 1,500-word blog post about the history of remittance. Pages that acted like tools — with live comparison tables and instant answers — converted at 6× the rate of informational pages.",
              icon: <Zap className="h-5 w-5 text-primary" />,
            },
            {
              num: "03",
              title: "Speed Was SEO",
              body: "Every 100ms of page load improvement correlated with measurable ranking gains. Fast pages ranked better, bounced less, and converted better. Our CDN + caching strategy meant corridor pages loaded in under 800ms globally.",
              icon: <Zap className="h-5 w-5 text-primary" />,
            },
            {
              num: "04",
              title: "Internal Linking Was the Hidden Weapon",
              body: "The internal linking graph — connecting every corridor to related corridors, providers, and currency pages — did three things: boosted page indexing speed, improved rankings through PageRank distribution, and reduced crawl depth so Google could efficiently discover all 5,000+ pages.",
              icon: <Link2 className="h-5 w-5 text-primary" />,
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{item.num}</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Challenges" />

      {/* ── CHALLENGES ── */}
      <section id="challenges" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Challenges (Real Ones)
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 my-6">
          {[
            {
              title: "Indexing Delays",
              problem: "New pages weren't getting indexed quickly enough — thousands of pages sat uncrawled for weeks.",
              solution: "Sitemap batching with priority signals + dense internal links to new pages + Google Search Console re-submission pipeline.",
              color: "border-orange-200 bg-orange-50",
            },
            {
              title: "Thin Content Risk",
              problem: "Pages for similar corridors looked too similar — risking a thin content penalty from Google.",
              solution: "Dynamic insight layers (different trend callouts, fee comparisons, and provider recommendations per corridor) made each page genuinely different.",
              color: "border-red-200 bg-red-50",
            },
            {
              title: "Infrastructure Load",
              problem: "5,000 pages with live data = heavy server load, especially during peak transfer hours.",
              solution: "CDN + aggressive caching (rates cached 5 min, fees 24hr) + a static-dynamic hybrid: page shell cached, live data injected client-side.",
              color: "border-blue-200 bg-blue-50",
            },
          ].map((c) => (
            <div key={c.title} className={`p-5 rounded-xl border ${c.color}`}>
              <p className="font-bold text-foreground mb-3">{c.title}</p>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
              <p className="text-sm text-foreground/70 leading-relaxed mb-3">{c.problem}</p>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Solution</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{c.solution}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Future Scope" />

      {/* ── FUTURE ── */}
      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Expansion</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "AI-Based Recommendations", body: "Personalized provider suggestions based on user history, transfer amount, and urgency pattern." },
            { title: "Personalized Routes", body: "Dynamic corridor suggestions based on where the user is located and their most likely destination." },
            { title: "Predictive Rates", body: "ML model to predict rate movements and alert users when the optimal window to transfer opens." },
            { title: "Real-Time Alerts", body: "Push notifications when a user's target rate is hit — closing the loop between intent and action." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-primary/20 bg-primary/5 hover-lift">
              <p className="font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <TakeawayBox>
          We didn't grow traffic. We built a system where traffic had no option but to come to us.
        </TakeawayBox>
      </section>

    </div>
  );
}
