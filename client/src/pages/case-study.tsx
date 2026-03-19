import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, User, TrendingUp, AlertTriangle, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import NotFound from "@/pages/not-found";

/* ─── Reading Progress Bar ─── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div
        className="h-full bg-primary transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ─── Table of Contents ─── */
const tocItems = [
  { id: "hook", label: "The Problem" },
  { id: "context", label: "Context" },
  { id: "problem-statement", label: "Problem Statement" },
  { id: "key-insight", label: "Key Insight" },
  { id: "data-strategy", label: "Data Strategy" },
  { id: "ml-model", label: "ML Model" },
  { id: "product-integration", label: "Product Integration" },
  { id: "results", label: "Results" },
  { id: "learnings", label: "Learnings" },
  { id: "future", label: "Future Scope" },
];

function TableOfContents() {
  const [active, setActive] = useState("hook");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="hidden xl:block sticky top-28 self-start w-56 shrink-0">
      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">On this page</p>
      <ul className="space-y-1">
        {tocItems.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`text-left w-full text-sm py-1.5 px-3 rounded-lg transition-all ${
                active === id
                  ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ─── Callout Components ─── */
function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-5 rounded-xl bg-primary/5 border border-primary/20 flex gap-4">
      <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

function ProblemBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex gap-4">
      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

function TakeawayBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 rounded-xl bg-foreground text-background flex gap-4">
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="font-semibold leading-relaxed text-lg">{children}</p>
    </div>
  );
}

function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-5 border-l-4 border-primary">
      <p className="text-xl font-serif font-bold text-foreground leading-relaxed italic">{children}</p>
    </blockquote>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-6 p-5 rounded-xl bg-foreground/5 border border-border overflow-x-auto text-sm font-mono text-foreground/80 leading-relaxed">
      {children}
    </pre>
  );
}

function MetricsGrid() {
  const metrics = [
    { icon: TrendingUp, label: "Click-Through Rate", value: "↑ 2–3×", sub: "vs baseline CTR", color: "text-green-600" },
    { icon: TrendingUp, label: "Insurance Conversions", value: "+32%", sub: "within 90 days", color: "text-green-600" },
    { icon: TrendingUp, label: "Drop-off Rate", value: "↓ Significantly", sub: "high-intent segment", color: "text-blue-600" },
    { icon: TrendingUp, label: "Data Points Analyzed", value: "50,000+", sub: "user sessions", color: "text-primary" },
  ];
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className="p-5 rounded-xl border border-border bg-background hover-lift">
          <p className={`text-2xl font-serif font-bold mb-1 ${m.color}`}>{m.value}</p>
          <p className="font-semibold text-foreground text-sm mb-0.5">{m.label}</p>
          <p className="text-xs text-muted-foreground">{m.sub}</p>
        </div>
      ))}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-foreground/80">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Full ML Insurance Case Study Content ─── */
function MLInsuranceCaseStudy() {
  return (
    <div className="prose-content space-y-2">

      {/* HOOK */}
      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Problem Hidden in Plain Sight
        </h2>
        <BlockQuote>
          We analyzed over 50,000+ user journeys to answer one simple but critical question: "Which users are actually going to buy insurance — and when?"
        </BlockQuote>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          At first glance, everything looked fine. Millions of users. High engagement. Strong traffic inflow. But one metric told a very different story.
        </p>
        <ProblemBox>
          Insurance conversions were disproportionately low — despite having users with relevant use cases, real-time triggers (expiry, RC checks), and clear monetisation opportunity.
        </ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">
          This wasn't just a funnel problem. It was a <strong className="text-foreground">system-level inefficiency</strong>.
        </p>
      </section>

      <SectionDivider label="Context" />

      {/* CONTEXT */}
      <section id="context" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          The Ecosystem We Were Operating In
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          The platform — a Vehicle Info ecosystem — served users who came with a clear, real-world intent: checking RC details, verifying ownership, reviewing insurance validity.
        </p>
        <InsightBox>
          These are high-intent, real-world users — not passive browsers. Which makes them extremely valuable from a monetisation standpoint.
        </InsightBox>
        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">The Disconnect</h3>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          Even with strong relevance — insurance modules were visible, timing seemed logical, traffic was high — conversion didn't scale proportionally.
        </p>
        <BulletList items={[
          "Insurance modules were visible to the right audience",
          "User intent (vehicle expiry, RC checks) was contextually relevant",
          "Traffic volumes were substantial",
          "Yet conversion rates remained stubbornly flat"
        ]} />
      </section>

      <SectionDivider label="Problem Statement" />

      {/* PROBLEM STATEMENT */}
      <section id="problem-statement" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Problem Statement: We Were Treating Every User the Same
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          Every user saw the same insurance CTA. Every user received similar nudges. Every user experienced identical flows — regardless of where they actually were in their buying journey.
        </p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Observations</h3>
        <BulletList items={[
          "Majority of users had zero purchase intent — they were information-seeking",
          "A small but valuable segment had high intent — ready to buy",
          "Most users dropped off early, never reaching the conversion point"
        ]} />

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Core Issues</h3>

        <div className="space-y-4 mt-4">
          <div className="p-5 rounded-xl border border-border bg-muted/30">
            <p className="font-bold text-foreground mb-1">1. No Intent Differentiation</p>
            <p className="text-foreground/70 text-sm leading-relaxed">We couldn't distinguish between casual users, curious users, and ready-to-buy users. All three received identical treatment.</p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-muted/30">
            <p className="font-bold text-foreground mb-1">2. Generic User Experience</p>
            <p className="text-foreground/70 text-sm leading-relaxed">A user with expiring insurance and a user casually browsing received the same experience. No personalisation. No urgency calibration.</p>
          </div>
          <div className="p-5 rounded-xl border border-border bg-muted/30">
            <p className="font-bold text-foreground mb-1">3. Lost High-Intent Users</p>
            <p className="text-foreground/70 text-sm leading-relaxed">Even ready-to-convert users faced unnecessary friction — they weren't being prioritised or fast-tracked to conversion.</p>
          </div>
        </div>

        <TakeawayBox>
          We didn't have a traffic problem. We had an intent understanding problem.
        </TakeawayBox>
      </section>

      <SectionDivider label="Key Insight" />

      {/* KEY INSIGHT */}
      <section id="key-insight" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Key Insight: Intent is Behavioral, Not Declared
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          We observed a critical pattern in the data: users don't randomly convert — they exhibit <strong className="text-foreground">predictable behavioural signals</strong> beforehand.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">High-Intent Signals</p>
            <BulletList items={[
              "Multiple searches in a session",
              "Longer session duration",
              "Insurance expiry within 30 days",
              "Repeated engagement across days"
            ]} />
          </div>
          <div className="p-5 rounded-xl border border-muted bg-muted/30">
            <p className="font-bold text-muted-foreground mb-3 text-sm uppercase tracking-wider">Low-Intent Signals</p>
            <BulletList items={[
              "Single interaction and exit",
              "Quick page bounce",
              "No CTA engagement",
              "No return visits"
            ]} />
          </div>
        </div>

        <InsightBox>
          Intent is not declared — it is inferred from behaviour. This was the breakthrough that changed everything.
        </InsightBox>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Hypothesis</h3>
        <BlockQuote>
          If we can predict user intent using behavioural data, we can personalise their journey and increase conversions at scale.
        </BlockQuote>
      </section>

      <SectionDivider label="Data Strategy" />

      {/* DATA STRATEGY */}
      <section id="data-strategy" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Data Strategy: 50,000+ User Sessions
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          We didn't guess. We built a data collection pipeline that captured granular behavioural signals across 50,000+ user sessions — structured, cleaned, and ready for modelling.
        </p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-4">Signals Collected</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          {[
            { title: "Behavioural Signals", items: ["Search count per session", "Session duration (seconds)", "Scroll depth (%)"] },
            { title: "Interaction Signals", items: ["CTA click events", "Time on insurance page", "Form abandonment rate"] },
            { title: "Contextual Signals", items: ["Days to insurance expiry", "Vehicle age", "RC verification frequency"] },
            { title: "Engagement Signals", items: ["Push notification interaction", "Return visit frequency", "Cross-session behaviour"] },
          ].map((group) => (
            <div key={group.title} className="p-4 rounded-xl border border-border bg-background">
              <p className="font-bold text-foreground text-sm mb-2">{group.title}</p>
              <BulletList items={group.items} />
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Feature Engineering</h3>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          Each user was transformed into a feature vector combining raw signals and derived scores:
        </p>
        <CodeBlock>
{`Feature Vector:
[Search_Count, Session_Time, Expiry_Days, CTA_Clicks, Return_Frequency]

Derived Features:
→ Recency Score     (how recently did the user engage?)
→ Urgency Score     (how close is the expiry date?)
→ Engagement Index  (breadth + depth of interaction)
→ Intent Velocity   (speed of behaviour change over time)`}
        </CodeBlock>
      </section>

      <SectionDivider label="ML Model" />

      {/* ML MODEL */}
      <section id="ml-model" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          ML Model & System Architecture
        </h2>

        <h3 className="text-xl font-serif font-bold text-foreground mt-6 mb-3">Model Selection</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-xl border border-border bg-muted/30">
            <p className="font-bold text-foreground mb-1">Logistic Regression</p>
            <p className="text-sm text-muted-foreground">Baseline model — fast to train, interpretable, good for initial validation</p>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-foreground mb-1">Gradient Boosting (XGBoost)</p>
            <p className="text-sm text-muted-foreground">Production model — best for structured data, interpretable feature importance, scalable</p>
          </div>
        </div>

        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          The model output was a single <strong className="text-foreground">Intent Score (0–100)</strong> per user, computed in near real-time and used to drive personalisation decisions downstream.
        </p>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Intent Segmentation</h3>
        <div className="space-y-3 my-4">
          {[
            { range: "0 – 30", label: "Low Intent", desc: "Information-seeking. Focus on education and soft engagement.", color: "border-muted bg-muted/30 text-muted-foreground" },
            { range: "30 – 70", label: "Medium Intent", desc: "Curious but undecided. Focus on nudges, benefits, and comparisons.", color: "border-orange-200 bg-orange-50 text-orange-700" },
            { range: "70 – 100", label: "High Intent", desc: "Ready to buy. Fast-track with minimal friction and strong CTA.", color: "border-green-200 bg-green-50 text-green-700" },
          ].map((seg) => (
            <div key={seg.range} className={`p-4 rounded-xl border flex items-center gap-4 ${seg.color}`}>
              <span className="text-xl font-serif font-bold w-20 shrink-0">{seg.range}</span>
              <div>
                <p className="font-bold">{seg.label}</p>
                <p className="text-sm opacity-80">{seg.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">System Architecture</h3>
        <CodeBlock>
{`User Action
    ↓
Data Capture (real-time event stream)
    ↓
Feature Processing (normalisation + derived features)
    ↓
ML Model (XGBoost intent scorer)
    ↓
Intent Score (0–100)
    ↓
Decision Engine (segment + route)
    ↓
Personalised Experience (CTA, flow, messaging)`}
        </CodeBlock>
      </section>

      <SectionDivider label="Product Integration" />

      {/* PRODUCT INTEGRATION */}
      <section id="product-integration" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Product Integration: Where Real Value Was Created
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          The ML model alone meant nothing. The value came from how the intent score was wired into the product experience — turning a data signal into a user journey decision.
        </p>

        <div className="space-y-4 my-6">
          <div className="p-6 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <span className="text-lg">🔥</span> High Intent (Score 70–100)
            </p>
            <BulletList items={[
              "Fast-track journey with pre-filled forms",
              "Minimal friction — no unnecessary steps",
              "Strong, urgent CTA (e.g. 'Renew Now – Expires in 3 days')",
              "Priority placement in navigation and homepage"
            ]} />
          </div>
          <div className="p-6 rounded-xl border border-orange-200 bg-orange-50">
            <p className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <span className="text-lg">⚖️</span> Medium Intent (Score 30–70)
            </p>
            <BulletList items={[
              "Nudge-based messaging (benefits, comparisons, social proof)",
              "Contextual reminders tied to their vehicle data",
              "Progressive disclosure — not overwhelming, not absent"
            ]} />
          </div>
          <div className="p-6 rounded-xl border border-border bg-muted/20">
            <p className="font-bold text-muted-foreground mb-2 flex items-center gap-2">
              <span className="text-lg">❄️</span> Low Intent (Score 0–30)
            </p>
            <BulletList items={[
              "Education-first content — build awareness, not urgency",
              "Soft engagement: 'Did you know your insurance covers X?'",
              "Retargeting via push notifications at better timing"
            ]} />
          </div>
        </div>

        <InsightBox>
          Don't push harder — push smarter. The same message delivered at the wrong moment is just noise.
        </InsightBox>

        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">A/B Testing & Experimentation</h3>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">
          Every decision was validated through structured experimentation — score thresholds, message variants, CTA placements, and timing were all tested against control groups.
        </p>
        <BulletList items={[
          "Tested 3 score threshold splits (50/50, 60/40, 70/30) to find the optimal segmentation boundary",
          "Ran message variants: urgency vs. benefit-led vs. neutral for each segment",
          "Validated CTA placement (above fold vs. inline vs. sticky bottom)",
          "Continuous retraining cycle: model updated every 2 weeks with new behavioural data"
        ]} />
      </section>

      <SectionDivider label="Results" />

      {/* RESULTS */}
      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Results: What Actually Moved
        </h2>
        <MetricsGrid />
        <p className="text-lg text-foreground/80 leading-[1.85] mt-6 mb-4">
          Beyond the headline numbers, the system created a structural shift in how the platform approached monetisation — moving from broadcast campaigns to precision-targeted journeys.
        </p>
        <BulletList items={[
          "High-intent users converted at 2–3× baseline CTR",
          "Revenue from insurance cross-sell grew significantly within 90 days of full rollout",
          "Drop-off rates in the high-intent segment decreased as friction was reduced",
          "Model confidence improved with each retraining cycle as more labelled data accumulated",
          "ROI on paid retargeting improved as budget was reallocated to high-intent audiences"
        ]} />

        <TakeawayBox>
          Not every user is equal. Growth comes from understanding intent — not just increasing traffic.
        </TakeawayBox>
      </section>

      <SectionDivider label="Learnings" />

      {/* LEARNINGS */}
      <section id="learnings" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Learnings & Trade-offs
        </h2>

        <div className="space-y-6 mt-6">
          {[
            {
              num: "01",
              title: "Intent > Demographics",
              body: "Traditional targeting by age, location, or device type was far less predictive than behavioural intent signals. A 45-year-old user who had checked insurance 3 times in a week was more valuable than a 25-year-old first-time visitor — regardless of demographic segment."
            },
            {
              num: "02",
              title: "Timing > Placement",
              body: "The right message at the wrong moment is just noise. A high-intent user who sees an insurance CTA at 11pm after their third session converts at dramatically higher rates than the same user seeing the same CTA on their first page view at noon."
            },
            {
              num: "03",
              title: "ML Needs Product Integration — Not Just a Score",
              body: "An intent score sitting in a database is worthless. The real work was designing how the score influenced the product journey — which required deep collaboration between data science and product design."
            },
            {
              num: "04",
              title: "Simplicity Wins in Production",
              body: "The XGBoost model outperformed deep learning experiments not because it was more powerful — but because it was interpretable, debuggable, and reliable in production. In applied ML, reliability beats theoretical accuracy."
            },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{item.num}</span>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-bold text-foreground mt-10 mb-4">Trade-offs & Challenges</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Cold Start Problem", body: "New users have no behavioural history. We handled this via heuristics — defaulting to medium-intent treatment until enough data accumulated." },
            { title: "False Positives", body: "Some users scored high but didn't convert. We tuned thresholds over multiple cycles and added contextual override rules." },
            { title: "Over-personalisation Risk", body: "Making UX too aggressive for high-intent users created pressure and reduced trust. We balanced urgency with reassurance." },
          ].map((t) => (
            <div key={t.title} className="p-5 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-2 text-sm">{t.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Future Scope" />

      {/* FUTURE */}
      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">
          Future Scope
        </h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">
          The intent engine we built is a foundation — not a ceiling. The roadmap includes several high-leverage extensions:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Real-Time Scoring", body: "Move from near-real-time to sub-second intent scoring at the moment of each user action." },
            { title: "Deep Learning Models", body: "Experiment with sequence models (LSTMs, Transformers) to capture longer behavioural patterns." },
            { title: "Cross-Platform Signals", body: "Incorporate signals from web, app, and notification interactions into a unified intent model." },
            { title: "Reinforcement Learning", body: "Let the system learn optimal messaging strategies directly from user response feedback loops." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-primary/20 bg-primary/5 hover-lift">
              <p className="font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── Placeholder for other case studies ─── */
function ComingSoonContent({ study }: { study: typeof caseStudies[0] }) {
  return (
    <div className="mt-8">
      <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">{study.description}</p>
      <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-10 md:p-16 text-center">
        <div className="text-5xl mb-4">🚧</div>
        <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Detailed case study coming soon</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          The full breakdown — strategy, execution, results, and learnings — is being written up. Reach out if you'd like to discuss this directly.
        </p>
        <Button asChild><Link href="/contact">Discuss this with Yogesh →</Link></Button>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return <NotFound />;

  const isFlagship = slug === "ml-insurance-prediction";

  return (
    <>
      {isFlagship && <ReadingProgress />}

      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />

        {/* Hero */}
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden mt-16 bg-muted">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-5xl">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border mb-4 inline-block ${categoryColors[study.category] ?? "bg-muted text-muted-foreground"}`}>
                {study.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight max-w-3xl mb-4">
                {study.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>Yogesh Yadav</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{study.readTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{study.date}</span>
                </div>
                <div className="flex gap-2">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container px-4 md:px-6 mx-auto max-w-5xl py-12">
          {/* Back link */}
          <Link href="/case-studies">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </button>
          </Link>

          {/* Two-column layout with TOC */}
          <div className="flex gap-12 items-start">
            {isFlagship && <TableOfContents />}

            {/* Main content */}
            <main
              className="flex-1 min-w-0"
              style={{ fontSize: "17px", lineHeight: "1.85" }}
            >
              {isFlagship ? <MLInsuranceCaseStudy /> : <ComingSoonContent study={study} />}

              {/* End CTA */}
              <div className="mt-16 pt-10 border-t border-border">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">What's next?</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link href="/case-studies">
                    <div className="p-5 rounded-xl border border-border hover-lift hover-glow cursor-pointer text-center group">
                      <p className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Explore More Case Studies</p>
                      <p className="text-sm text-muted-foreground">See all 20 breakdowns</p>
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 hover-lift cursor-pointer text-center group">
                      <p className="font-bold text-primary mb-1">Work With Me</p>
                      <p className="text-sm text-muted-foreground">Let's build something together</p>
                    </div>
                  </Link>
                  <a href="https://linkedin.com/in/yogeshyadav" target="_blank" rel="noopener noreferrer">
                    <div className="p-5 rounded-xl border border-border hover-lift cursor-pointer text-center group">
                      <p className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">Connect on LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Follow for more insights</p>
                    </div>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
