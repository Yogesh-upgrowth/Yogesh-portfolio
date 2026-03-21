import { Zap, Target, Brain, BarChart3, Activity, Clock } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function RealTimeIntentContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">"This Is Over-Engineering." (It Wasn't.)</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our lead engineer said it plainly in the sprint planning session: "A real-time intent scoring engine is overkill. Batch scoring every 24 hours is enough." Half the room nodded. I wasn't sure he was wrong.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Six months later, the engine was processing 4 million events per day, scoring users every 12 minutes, and had generated ₹4.2 crore in incremental revenue by catching users at the exact moment they were ready to act — moments that a 24-hour batch system would have missed entirely.</p>
        <ProblemBox>Intent has a half-life. A user who searches "remittance to UAE" at 11am is a completely different proposition at 11pm. Batch scoring doesn't capture the moment. It captures the aftermath.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The business case we'd been missing wasn't about smarter segmentation — it was about <strong className="text-foreground">timing</strong>. Reach the right user with the right offer at the right moment, not 12 hours after the moment has passed.</p>
      </section>

      <SectionDivider label="What We Were Seeing" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Timing Problem in Numbers</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before building anything, we ran an analysis on our existing batch-scored user interventions. The results were uncomfortable.</p>
        <DataTable
          headers={["Intervention Timing", "Conversion Rate", "Revenue/Intervention"]}
          rows={[
            ["Triggered within 10 minutes of high-intent behavior", "14.2%", "₹1,840"],
            ["Triggered 1–3 hours after high-intent behavior", "6.8%", "₹880"],
            ["Triggered 3–12 hours after", "3.1%", "₹402"],
            ["Triggered 12–24 hours after (batch)", "1.4%", "₹181"],
            ["Triggered >24 hours after", "0.6%", "₹78"],
          ]}
        />
        <InsightBox>Conversion rate dropped 10× between a 10-minute trigger and a 24-hour batch trigger. We were consistently operating in the 12–24 hour window and calling it personalization.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The calculation was straightforward: if we could move even 30% of our interventions from the 24-hour window to the 10-minute window, the revenue impact was significant. The engineering investment wasn't overkill — it was underinvestment in the right problem.</p>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Five Intent States, Not One</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We mapped user intent into five states based on behavioral signals. The key insight: users don't stay in one state — they move between them, and the transition moments are where conversion happens.</p>
        <DataTable
          headers={["Intent State", "Behavioral Signal", "Conversion Probability", "Best Intervention"]}
          rows={[
            ["Browsing", "< 3 page views, no search", "2.1%", "Educational content nudge"],
            ["Researching", "Search, 3+ providers viewed", "8.4%", "Comparison feature highlight"],
            ["Comparing", "Active comparison, return visit", "18.7%", "Rate alert or urgency nudge"],
            ["Decision-Ready", "Quote started, return D2-3", "34.2%", "Direct offer, support chat"],
            ["Ready to Transact", "Form started, abandoned", "52.6%", "Immediate re-engagement"],
          ]}
        />
        <TakeawayBox>The "Ready to Transact" state — someone who started and abandoned a form — had a 52.6% conversion rate with a 10-minute intervention. We had been triggering that intervention 14 hours later on average. The math of that miss is painful.</TakeawayBox>
      </section>

      <SectionDivider label="The Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Reframing Personalization as a Timing Problem</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The conventional personalization playbook is about relevance: send the right message to the right person. That's necessary but not sufficient. Equally important — perhaps more important — is <em>when</em> that message arrives.</p>
        <BlockQuote>Relevant message, wrong timing = wasted relevance. The best offer in the world, sent 18 hours late, is noise.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">We stopped thinking about personalization as a segmentation challenge and started treating it as a state-machine problem: every user is in a state, states transition based on behavior, and the goal is to detect transitions and respond in the window where response still matters.</p>
      </section>

      <SectionDivider label="The Engine" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How the Intent Engine Works</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">Three components, each essential. None sufficient alone.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <FrameworkDimension
            icon={<Activity className="h-5 w-5 text-primary" />}
            title="Real-Time Event Stream"
            body="Every user action (page view, search, comparison, form field entry) published to Kafka within 200ms. Kafka fan-out to scoring service and session state store. No batching; every event processed immediately."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="Intent State Classifier"
            body="Gradient boosting model classifying users into one of 5 intent states on each event. Model re-scores every 12 minutes or immediately on state-change-triggering events. Output: current state + transition probability for next state."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-purple-600" />}
            title="Intervention Orchestrator"
            body="Rules engine consuming state classifications. Triggers: email (for non-active sessions), in-app nudge (for active sessions), chat prompt (for Decision-Ready+). Intervention fatigue management: max 2 per session, 24-hour cooldown per user."
            color="bg-purple-50 border-purple-200"
          />
        </div>
        <DataTable
          headers={["Behavioral Signal", "Intent State Transition", "Trigger Latency Target"]}
          rows={[
            ["3+ providers compared in session", "Browsing → Comparing", "< 90 seconds"],
            ["Quote form opened", "Comparing → Decision-Ready", "< 2 minutes"],
            ["Form field entered then abandoned", "Decision-Ready → Ready to Transact", "< 10 minutes"],
            ["Return visit within 48 hours", "Any → Comparing (re-engagement)", "Within session start"],
            ["Session duration > 12 minutes", "Researching → Comparing", "< 3 minutes"],
          ]}
        />
      </section>

      <SectionDivider label="Architecture" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Technical Architecture</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">This is the part where it got genuinely complex. The event volume at peak (Friday evenings, payday weekends) was 800K events/hour. The p99 latency target for state classification was 500ms. That constraint drove most of the architecture decisions.</p>
        <div className="space-y-4">
          {[
            { title: "Event Ingestion", points: ["Client-side SDK published events to Kafka within 200ms of user action", "Kafka partitioned by user_id — ensures ordering within user session", "Dead letter queue for any events failing processing — reprocessed within 5 minutes"] },
            { title: "State Classification Service", points: ["Stateless microservice consuming from Kafka, reading session state from Redis", "Feature vector computed from last 60 minutes of user events per session", "Gradient boosting inference: p99 latency 180ms — well within 500ms target"] },
            { title: "Intervention Orchestration", points: ["State transition events published to separate Kafka topic consumed by orchestrator", "Orchestrator checks fatigue rules, time-of-day, and channel preference before triggering", "Email: SES with sub-30-second delivery SLA; In-app: websocket push if session active"] },
            { title: "Observability", points: ["State distribution dashboard: real-time view of how many users in each intent state", "Intervention effectiveness: conversion rate by state × intervention type matrix", "Latency monitoring: p50, p95, p99 for classification pipeline — alerting at p99 > 400ms"] },
          ].map((l) => (
            <div key={l.title} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3 text-primary">{l.title}</p>
              <ul className="space-y-2">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How We Rolled It Out</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Proof of Concept" title="Manual Trigger Test" actions={["Identified 'form abandonment' as highest-leverage trigger manually", "Manually triggered SMS to 200 abandoners within 15 minutes", "Compared conversion vs next-day batch SMS to matched control"]} result="Manual real-time: 31% conversion vs batch: 8%. Proof of concept confirmed." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2" period="Infrastructure Build" title="Event Stream + Classifier" actions={["Kafka pipeline built and tested to 1M events/hour", "Intent classifier trained on 6 months of labeled session data", "A/B test framework set up: 50% real-time, 50% batch control group"]} result="Pipeline live, p99 latency 220ms. First automated triggers firing." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 3" period="Intervention Expansion" title="All 5 States Covered" actions={["All 5 intent state triggers live", "Fatigue management rules calibrated (started too aggressive — max 3 became max 2)", "Email, in-app, and chat interventions all active by intent state"]} result="Revenue per session up 34% vs batch control group" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 4–6" period="Optimization" title="Model Refinement + Scale" actions={["Model retrained with live conversion data — precision improved 18%", "Form abandonment intervention moved to 6-minute trigger (from 10) — further 9% lift", "Engine scaled to handle 4M events/day at peak"]} result="₹4.2Cr incremental revenue attributed to real-time vs batch improvement" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Six Months In</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="₹4.2Cr" label="Incremental Revenue" sub="vs batch baseline (6 months)" color="text-green-600" />
          <MetricCard value="10×" label="Conversion Lift" sub="real-time vs 24-hr batch" color="text-primary" />
          <MetricCard value="52.6%" label="Form Abandonment CVR" sub="with 10-min intervention" color="text-green-600" />
          <MetricCard value="180ms" label="p99 Classification Latency" sub="across 4M events/day" color="text-primary" />
        </div>
        <InsightBox>The engineer who called it "over-engineering" became the engine's loudest internal advocate six months later. That feels important to note.</InsightBox>
      </section>

      <SectionDivider label="Lessons" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What I'd Tell Someone Building This</h2>
        <div className="space-y-6">
          <Insight num="01" title="Intent has a half-life of minutes, not hours" body="The data is unambiguous: conversion probability decays exponentially from the moment of peak intent. Every hour of delay is margin you're leaving behind. If your personalization system operates in 24-hour batches, you're personalizing in a world that's already moved on." />
          <Insight num="02" title="Start with the highest-leverage single trigger" body="Don't build the full engine first. We started with form abandonment and manually triggered it for 2 weeks. That proof of concept got engineering buy-in faster than any architecture diagram. Find your highest-value trigger and prove it manually before automating." />
          <Insight num="03" title="Fatigue management is not optional" body="We set initial limits too high — 3 interventions per session. Complaints went up. Satisfaction scores dropped. The rule we landed on: max 2 per session, minimum 4 hours between same-channel messages, 24-hour cooldown per user. Adjust for your product." />
          <Insight num="04" title="State transitions matter more than states" body="Knowing a user is in 'Comparing' state is less actionable than knowing they just transitioned from 'Researching' to 'Comparing.' The transition is when momentum is highest. Build your triggers around transitions, not static states." />
        </div>
      </section>

      <SectionDivider label="What Went Wrong" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Things That Hurt</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial classifier was overfit to desktop behavior" why="Training data was 70% desktop sessions. Mobile users classified incorrectly — mobile sessions are shorter and look like low-intent on the desktop model. Mobile conversion interventions fired too late or not at all." fix="Separate mobile model trained on mobile-specific session patterns. Mobile users: shorter feature vectors, different state thresholds. Mobile intervention conversion improved 2.4× post-fix." />
          <FailurePoint title="Email intervention fired during active sessions" why="A user in an active browser session received an email at the same time as an in-app nudge. Double intervention. Several users complained about feeling 'watched.'" fix="Added session-active check before email trigger. If active session: in-app nudge only. If session ended: email within 15 minutes. Complaint rate dropped to baseline." />
        </div>
      </section>

      <SectionDivider label="What's Next" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next Layer</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Clock className="h-5 w-5 text-primary" />} title="Predictive Intent" body="Instead of detecting current intent, predict future intent. User behavior patterns on Monday predict conversion likelihood on Friday. Pre-warm those users before they reach peak intent." />
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Cross-Channel State Sync" body="Intent state is currently session-scoped. Next: cross-channel state persistence — if a user researches on mobile on Monday and opens the app on Wednesday, resume from their last state, not from scratch." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Offer Personalisation by State" body="Current system varies intervention channel and timing. Next: vary the offer itself by state. Decision-Ready users get rate match; Comparing users get feature highlights. Message personalisation, not just delivery personalisation." />
        </div>
        <BlockQuote>Intent decays. The window to act on it is smaller than most teams assume. Build for the moment — not for the batch run that captures the echo of it.</BlockQuote>
      </section>
    </div>
  );
}
