import { Cpu, Users, Layers, Brain, BarChart3, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlUxGrowthContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Happens When You Give a Designer Access to the Model's Predictions</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The experiment started as a minor workflow change: we gave our lead product designer, Aditi, a daily dashboard showing the ML model's user intent predictions — which users were classified as High Intent, which as Research Mode, which as Likely to Churn — and asked her to redesign the comparison interface with that information in mind.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">What followed was the most productive design sprint we'd ever run. Not because Aditi built better UX alone, or because the ML model was better than expected, but because the combination produced something neither discipline would have arrived at independently.</p>
        <InsightBox>ML models know things that designers can't infer from session recordings. UX designers know things that ML models can't infer from behavioral logs. The intersection — using model predictions to inform design decisions in real-time — turned out to be a genuinely new capability that neither function had on its own.</InsightBox>
      </section>

      <SectionDivider label="What the ML Model Saw" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Gap Between Model Knowledge and Design Knowledge</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Before the collaboration, each discipline was working with incomplete information. The designer was making UI decisions based on session recordings and user interviews — rich qualitative data, but no predictive signal. The ML team was producing predictions that lived in a database but had no interface consequence.</p>
        <DataTable
          headers={["What the ML Model Knew", "What Design Knew", "What Neither Knew Without Collaboration"]}
          rows={[
            ["User's predicted intent (High/Research/Churn)", "User's expressed confusion (recordings)", "Which design element to show to which intent class"],
            ["Probability of conversion in this session", "Where users clicked and hesitated", "Whether a hesitation was confusion or deliberation"],
            ["Likely churn risk for specific users", "General churn pattern from cohort analysis", "Which users on the page right now are at risk"],
            ["Predicted LTV for this user", "Average LTV from analytics", "Whether to invest in high-touch experience for this user"],
          ]}
        />
        <TakeawayBox>The ML model was predicting things in real-time that design was inferring in aggregate, post-hoc. Making model predictions available to the design layer meant the interface could respond to individual user context — not average user behavior. That's the shift.</TakeawayBox>
      </section>

      <SectionDivider label="The Collaboration Design" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How We Set Up the ML-Design Partnership</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The setup was intentionally low-tech to start. We didn't build complex personalization infrastructure first. We did something simpler: gave Aditi read access to the model's live predictions for the current session of every active user, and asked her to sit with it for a week before designing anything.</p>
        <div className="space-y-4">
          {[
            { title: "Week 1: Observation Only", detail: "Aditi spent a week watching model predictions alongside session recordings simultaneously. For the same user, at the same moment: what was the model classifying their intent as, and what were they actually doing in the UI? The mismatches were instructive — cases where the model predicted High Intent but the user was clearly struggling, or Research Mode but the user had a shortlist ready." },
            { title: "Week 2: Hypothesis Formation", detail: "Based on observations, Aditi proposed 3 design hypotheses — not about average users, but about specific intent classes. 'High Intent users see too many options and need a decision accelerator. Research Mode users need more information but we're showing them the same CTA as High Intent users. Likely Churn users are showing frustration signals that the current design has no response to.'" },
            { title: "Week 3–6: Prototype and Test", detail: "Three interface variants built, each targeting a specific intent class. A/B tested against each other and against the standard interface. Intent class detected by model → relevant variant shown. Measured conversion by intent class × design variant." },
          ].map((p, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-muted/20">
              <div className="flex-shrink-0 font-bold text-primary text-sm">{p.title.split(":")[0]}</div>
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">{p.title.includes(":") ? p.title.split(": ")[1] : ""}</p>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="The Three Design Variants" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Aditi Designed for Each Intent Class</h2>
        <BlockQuote>The insight from the observation week: we'd been showing the same interface to three fundamentally different people — someone ready to buy, someone trying to understand, and someone about to leave. That's like speaking in one tone to a crowd of people who need entirely different things from you.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mb-5 mt-5">Three design responses to three intent states:</p>
        <div className="space-y-5">
          <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2">High Intent (P(convert) ≥ 0.65)</p>
            <p className="text-sm text-foreground/80 leading-relaxed">Decision Accelerator view: shortlisted plans featured prominently, comparison reduced to 3 key differentiators (not 14), CTA changed from 'Get Quote' to 'Start My Cover', trust signals (claim ratio, reviews) shown inline. Goal: reduce decision friction for someone who's essentially already decided.</p>
            <p className="text-xs text-foreground/60 mt-2 font-semibold">Result: +31% conversion vs standard interface for this intent class</p>
          </div>
          <div className="p-6 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2">Research Mode (P(convert) = 0.20–0.65)</p>
            <p className="text-sm text-foreground/80 leading-relaxed">Information-Rich view: full 14-point comparison, methodology disclosure shown, calculator embedded in comparison, additional provider details accessible, CTA changed to 'Save This Comparison'. Goal: serve the decision process rather than trying to rush past it.</p>
            <p className="text-xs text-foreground/60 mt-2 font-semibold">Result: +18% return rate (D3 return), +22% eventual conversion vs standard</p>
          </div>
          <div className="p-6 rounded-xl border border-orange-200 bg-orange-50">
            <p className="font-bold text-orange-700 mb-2">At-Risk / Likely Churn (Churn P ≥ 0.60)</p>
            <p className="text-sm text-foreground/80 leading-relaxed">Intervention view: chat prompt appears after 4 minutes ('Looks like you might have questions — I can help'), comparison simplified to most popular option for their profile, social proof (how many similar users bought this) shown prominently. Goal: break the friction loop before exit.</p>
            <p className="text-xs text-foreground/60 mt-2 font-semibold">Result: −34% exit rate for users in this class; +19% conversion of recovered users</p>
          </div>
        </div>
      </section>

      <SectionDivider label="Technical Implementation" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How Intent-Driven UI Actually Works</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Cpu className="h-5 w-5 text-primary" />}
            title="Real-Time Intent Classification"
            body="Gradient boosting model classifying users into 3 intent states, recalculated every 3 minutes during active sessions. Features: session depth, filter usage, time per plan, return visit history, comparison actions. Score streamed to frontend via WebSocket."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-green-600" />}
            title="UI Variant Switching"
            body="Frontend feature flag system: intent class received → variant selected → component swap without full page reload. Transition: 400ms cross-fade to prevent jarring switch if intent changes mid-session. Smooth, not disorienting."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-purple-600" />}
            title="Churn Intervention System"
            body="At-Risk classification triggers: chat prompt at 4 minutes of session (not on first detection — only after sustained at-risk signal). Chat connects to CS queue; response SLA 2 minutes during business hours. After hours: pre-written support options."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Attribution and Learning"
            body="Every conversion tagged with intent class at time of CTA click. Monthly model refresh uses conversion outcomes by intent class. High Intent model performance tracked separately from Research Mode — different precision/recall targets for each class."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Across All Three Variants vs Standard Interface</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+28%" label="Blended Conversion Rate" sub="all intent classes combined" color="text-green-600" />
          <MetricCard value="+31%" label="High Intent CVR" sub="Decision Accelerator vs standard" color="text-primary" />
          <MetricCard value="−34%" label="At-Risk Exit Rate" sub="Intervention view" color="text-green-600" />
          <MetricCard value="+22%" label="Research Mode CVR" sub="eventual conversion, D7 cohort" color="text-primary" />
        </div>
        <DataTable
          headers={["Intent Class", "Standard CVR", "Variant CVR", "Lift"]}
          rows={[
            ["High Intent", "18.4%", "24.1%", "+31%"],
            ["Research Mode", "6.2%", "7.6%", "+22%"],
            ["At-Risk", "3.1%", "3.7% (+ reduced exit)", "+19% of recovered users"],
            ["Blended (all classes)", "9.8%", "12.5%", "+28%"],
          ]}
        />
      </section>

      <SectionDivider label="Insights" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Collaboration Taught Both Teams</h2>
        <div className="space-y-6">
          <Insight num="01" title="ML predictions are most valuable when they're visible to the design layer" body="The model had been running for 4 months, producing intent predictions that went into a database and drove email sequences. Making those predictions visible to the designer — in real-time, with session recordings — unlocked a new category of design decision: designing for predicted behavior, not average behavior." />
          <Insight num="02" title="Observation before design is undervalued in both disciplines" body="The most valuable phase of the project was Aditi's week of observation-only. No design, no implementation — just watching model predictions alongside user behavior. The design hypotheses that emerged from that week were more specific and more testable than any brief we could have written for her." />
          <Insight num="03" title="One interface for all users is a category error" body="We'd been building one comparison interface for three fundamentally different psychological states. The design effort wasn't larger to address all three — it was targeted differently. The same engineering investment, directed at three focused variants, outperformed one generalized design significantly." />
          <Insight num="04" title="Churn intervention is most effective at 4 minutes, not immediately" body="First churn intervention attempt triggered chat at 2 minutes of at-risk session. Users found it intrusive — they'd only been on the page 2 minutes. 4 minutes was the threshold after which the chat offer felt like help rather than surveillance. Timing matters as much as the intervention content." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Got Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="UI variant switch was jarring at first" why="Early version: instant switch when intent class changed mid-session. Users in session recordings visibly startled by elements moving. Some thought the page had loaded incorrectly." fix="400ms cross-fade transition added. Components that don't change across variants (header, footer, navigation) anchored as stable. Only the dynamic comparison section fades. No more visible startling in session recordings post-fix." />
          <FailurePoint title="Research Mode CTA 'Save This Comparison' was too passive" why="Users in Research Mode were engaging deeply with the information but few were saving. Exit rate was still high. 'Save This Comparison' didn't communicate enough value — what does saving do for me?" fix="CTA changed to 'Save & Track Rate Changes.' Added instant sub-message: 'We'll alert you when rates change for your saved comparison.' Value explicit. Save rate improved 2.8×." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next Phase of ML-Driven UX</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Continuous Intent Classification" body="Moving from 3-minute recalculation to per-event recalculation. Intent classification updates every user action — a filter applied, a plan opened, a comparison made. UI adapts in near-real-time rather than in 3-minute intervals." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Embedded Design Principles in the Model" body="Currently: model classifies → design responds. Next: design principles encoded as model objectives. The model trained not just to predict intent but to predict which UI variant maximizes intent satisfaction. Design and model optimizing together." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Long-Term LTV Attribution" body="Current measurement: conversion rate. Next: track whether intent-class-matched design decisions predict higher LTV at 90 days. High Intent users may convert faster but have different LTV than Research Mode users who took longer. Design decisions should optimize for LTV, not just CVR." />
        </div>
        <BlockQuote>The best interfaces aren't designed for the average user. They're designed for the actual user — who is in a specific psychological state, at a specific point in their decision, with a specific thing they need. ML-driven UX is the infrastructure for that specificity.</BlockQuote>
      </section>
    </div>
  );
}
