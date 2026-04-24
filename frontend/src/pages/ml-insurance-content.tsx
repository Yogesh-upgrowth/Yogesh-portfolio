import { TrendingUp, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";

export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-5 rounded-xl bg-primary/5 border border-primary/20 flex gap-4">
      <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

export function ProblemBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex gap-4">
      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

export function TakeawayBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 rounded-xl bg-foreground text-background flex gap-4">
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="font-semibold leading-relaxed text-lg">{children}</p>
    </div>
  );
}

export function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-5 border-l-4 border-primary">
      <p className="text-xl font-serif font-bold text-foreground leading-relaxed italic">{children}</p>
    </blockquote>
  );
}

export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-6 p-5 rounded-xl bg-foreground/5 border border-border overflow-x-auto text-sm font-mono text-foreground/80 leading-relaxed">
      {children}
    </pre>
  );
}

export function BulletList({ items }: { items: string[] }) {
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

export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

function MetricsGrid() {
  const metrics = [
    { label: "Click-Through Rate", value: "↑ 2–3×", sub: "vs baseline CTR", color: "text-green-600" },
    { label: "Insurance Conversions", value: "+32%", sub: "within 90 days", color: "text-green-600" },
    { label: "Drop-off Rate", value: "↓ Significantly", sub: "high-intent segment", color: "text-blue-600" },
    { label: "Data Points Analyzed", value: "50,000+", sub: "user sessions", color: "text-primary" },
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

export default function MLInsuranceCaseStudy() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Problem Hidden in Plain Sight</h2>
        <BlockQuote>We analyzed over 50,000+ user journeys to answer one simple but critical question: "Which users are actually going to buy insurance — and when?"</BlockQuote>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">At first glance, everything looked fine. Millions of users. High engagement. Strong traffic inflow. But one metric told a very different story.</p>
        <ProblemBox>Insurance conversions were disproportionately low — despite having users with relevant use cases, real-time triggers (expiry, RC checks), and clear monetisation opportunity.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">This wasn't just a funnel problem. It was a <strong className="text-foreground">system-level inefficiency</strong>.</p>
      </section>

      <SectionDivider label="Context" />

      <section id="context" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Ecosystem We Were Operating In</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The platform — a Vehicle Info ecosystem — served users who came with a clear, real-world intent: checking RC details, verifying ownership, reviewing insurance validity.</p>
        <InsightBox>These are high-intent, real-world users — not passive browsers. Which makes them extremely valuable from a monetisation standpoint.</InsightBox>
        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">The Disconnect</h3>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Even with strong relevance — insurance modules were visible, timing seemed logical, traffic was high — conversion didn't scale proportionally.</p>
        <BulletList items={[
          "Insurance modules were visible to the right audience",
          "User intent (vehicle expiry, RC checks) was contextually relevant",
          "Traffic volumes were substantial",
          "Yet conversion rates remained stubbornly flat"
        ]} />
      </section>

      <SectionDivider label="Problem Statement" />

      <section id="problem-statement" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Problem Statement: We Were Treating Every User the Same</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">Every user saw the same insurance CTA. Every user received similar nudges. Every user experienced identical flows — regardless of where they actually were in their buying journey.</p>
        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Core Issues</h3>
        <div className="space-y-4 mt-4">
          {[
            { title: "1. No Intent Differentiation", body: "We couldn't distinguish between casual users, curious users, and ready-to-buy users. All three received identical treatment." },
            { title: "2. Generic User Experience", body: "A user with expiring insurance and a user casually browsing received the same experience. No personalisation. No urgency calibration." },
            { title: "3. Lost High-Intent Users", body: "Even ready-to-convert users faced unnecessary friction — they weren't being prioritised or fast-tracked to conversion." },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-border bg-muted/30">
              <p className="font-bold text-foreground mb-1">{item.title}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <TakeawayBox>We didn't have a traffic problem. We had an intent understanding problem.</TakeawayBox>
      </section>

      <SectionDivider label="Key Insight" />

      <section id="key-insight" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Key Insight: Intent is Behavioral, Not Declared</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We observed a critical pattern: users don't randomly convert — they exhibit <strong className="text-foreground">predictable behavioural signals</strong> beforehand.</p>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-3 text-sm uppercase tracking-wider">High-Intent Signals</p>
            <BulletList items={["Multiple searches in a session", "Longer session duration", "Insurance expiry within 30 days", "Repeated engagement across days"]} />
          </div>
          <div className="p-5 rounded-xl border border-muted bg-muted/30">
            <p className="font-bold text-muted-foreground mb-3 text-sm uppercase tracking-wider">Low-Intent Signals</p>
            <BulletList items={["Single interaction and exit", "Quick page bounce", "No CTA engagement", "No return visits"]} />
          </div>
        </div>
        <InsightBox>Intent is not declared — it is inferred from behaviour. This was the breakthrough that changed everything.</InsightBox>
        <BlockQuote>If we can predict user intent using behavioural data, we can personalise their journey and increase conversions at scale.</BlockQuote>
      </section>

      <SectionDivider label="Data Strategy" />

      <section id="data-strategy" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Data Strategy: 50,000+ User Sessions</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">We didn't guess. We built a data collection pipeline that captured granular behavioural signals across 50,000+ user sessions — structured, cleaned, and ready for modelling.</p>
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
        <CodeBlock>{`Feature Vector:
[Search_Count, Session_Time, Expiry_Days, CTA_Clicks, Return_Frequency]

Derived Features:
→ Recency Score     (how recently did the user engage?)
→ Urgency Score     (how close is the expiry date?)
→ Engagement Index  (breadth + depth of interaction)
→ Intent Velocity   (speed of behaviour change over time)`}</CodeBlock>
      </section>

      <SectionDivider label="ML Model" />

      <section id="ml-model" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">ML Model & System Architecture</h2>
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
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The model output was a single <strong className="text-foreground">Intent Score (0–100)</strong> per user, computed in near real-time and used to drive personalisation decisions downstream.</p>
        <h3 className="text-xl font-serif font-bold text-foreground mt-8 mb-3">Intent Segmentation</h3>
        <div className="space-y-3 my-4">
          {[
            { range: "0–30", label: "Low Intent", desc: "Information-seeking. Focus on education and soft engagement.", cls: "border-muted bg-muted/30 text-muted-foreground" },
            { range: "30–70", label: "Medium Intent", desc: "Curious but undecided. Focus on nudges, benefits, and comparisons.", cls: "border-orange-200 bg-orange-50 text-orange-700" },
            { range: "70–100", label: "High Intent", desc: "Ready to buy. Fast-track with minimal friction and strong CTA.", cls: "border-green-200 bg-green-50 text-green-700" },
          ].map((seg) => (
            <div key={seg.range} className={`p-4 rounded-xl border flex items-center gap-4 ${seg.cls}`}>
              <span className="text-xl font-serif font-bold w-20 shrink-0">{seg.range}</span>
              <div><p className="font-bold">{seg.label}</p><p className="text-sm opacity-80">{seg.desc}</p></div>
            </div>
          ))}
        </div>
        <CodeBlock>{`User Action → Data Capture → Feature Processing → ML Model → Intent Score → Decision Engine → Personalised Experience`}</CodeBlock>
      </section>

      <SectionDivider label="Product Integration" />

      <section id="product-integration" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Product Integration: Where Real Value Was Created</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The ML model alone meant nothing. The value came from how the intent score was wired into the product experience.</p>
        <div className="space-y-4 my-6">
          {[
            { emoji: "🔥", title: "High Intent (70–100)", cls: "border-green-200 bg-green-50", titleCls: "text-green-800", items: ["Fast-track journey with pre-filled forms", "Minimal friction — no unnecessary steps", "Strong, urgent CTA ('Renew Now – Expires in 3 days')", "Priority placement in navigation and homepage"] },
            { emoji: "⚖️", title: "Medium Intent (30–70)", cls: "border-orange-200 bg-orange-50", titleCls: "text-orange-800", items: ["Nudge-based messaging (benefits, comparisons, social proof)", "Contextual reminders tied to their vehicle data", "Progressive disclosure — not overwhelming, not absent"] },
            { emoji: "❄️", title: "Low Intent (0–30)", cls: "border-border bg-muted/20", titleCls: "text-muted-foreground", items: ["Education-first content — build awareness, not urgency", "Soft engagement: 'Did you know your insurance covers X?'", "Retargeting via push notifications at better timing"] },
          ].map((seg) => (
            <div key={seg.title} className={`p-6 rounded-xl border ${seg.cls}`}>
              <p className={`font-bold mb-2 flex items-center gap-2 ${seg.titleCls}`}><span className="text-lg">{seg.emoji}</span>{seg.title}</p>
              <BulletList items={seg.items} />
            </div>
          ))}
        </div>
        <InsightBox>Don't push harder — push smarter. The same message delivered at the wrong moment is just noise.</InsightBox>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results: What Actually Moved</h2>
        <MetricsGrid />
        <BulletList items={[
          "High-intent users converted at 2–3× baseline CTR",
          "Revenue from insurance cross-sell grew significantly within 90 days of full rollout",
          "Drop-off rates in the high-intent segment decreased as friction was reduced",
          "Model confidence improved with each retraining cycle as more labelled data accumulated",
          "ROI on paid retargeting improved as budget was reallocated to high-intent audiences"
        ]} />
        <TakeawayBox>Not every user is equal. Growth comes from understanding intent — not just increasing traffic.</TakeawayBox>
      </section>

      <SectionDivider label="Learnings" />

      <section id="learnings" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Learnings & Trade-offs</h2>
        <div className="space-y-6 mt-6">
          {[
            { num: "01", title: "Intent > Demographics", body: "Traditional targeting by age, location, or device type was far less predictive than behavioural intent signals. A 45-year-old user who had checked insurance 3 times in a week was more valuable than a 25-year-old first-time visitor — regardless of demographic segment." },
            { num: "02", title: "Timing > Placement", body: "The right message at the wrong moment is just noise. A high-intent user who sees an insurance CTA at 11pm after their third session converts at dramatically higher rates than the same user seeing the same CTA on their first page view." },
            { num: "03", title: "ML Needs Product Integration — Not Just a Score", body: "An intent score sitting in a database is worthless. The real work was designing how the score influenced the product journey — which required deep collaboration between data science and product design." },
            { num: "04", title: "Simplicity Wins in Production", body: "The XGBoost model outperformed deep learning experiments not because it was more powerful — but because it was interpretable, debuggable, and reliable in production." },
          ].map((item) => (
            <div key={item.num} className="flex gap-5">
              <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{item.num}</span>
              <div><h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3><p className="text-foreground/70 leading-relaxed">{item.body}</p></div>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
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

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Scope</h2>
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
