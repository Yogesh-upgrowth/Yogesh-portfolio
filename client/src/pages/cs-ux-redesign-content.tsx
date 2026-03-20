import { TrendingUp, Zap, Target, Layers, Brain, BarChart3, Layout, MousePointer } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function UxRedesignContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Redesign Nobody Thought Would Move the Needle</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our conversion rate had been flat at 4.3% for 6 months. The product team had run 18 A/B tests — button colors, CTA copy, headline variants, form layout. Every test moved conversion by less than 0.3% in either direction.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The growth team argued for more traffic. The product team argued for better targeting. Nobody was arguing for a fundamental UX redesign — because everyone assumed the design was "good enough."</p>
        <ProblemBox>The design wasn't bad. It was optimized locally and broken globally. Every individual element was fine. The sequence, the narrative, and the cognitive load were all wrong — and no A/B test can fix a structural problem.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">We ran the redesign over 6 weeks. Conversion went from 4.3% to 5.5% — a 28% improvement. This is the story of how we found and fixed the structural problems that 18 A/B tests had missed.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Diagnostic: What Was Actually Broken</h2>
        <DataTable
          headers={["Design Element", "Current State", "User Behavior Signal", "Problem"]}
          rows={[
            ["Value proposition", "Below the fold on mobile", "62% of users never scrolled to it", "Users left without understanding why to care"],
            ["Information hierarchy", "6 competing visual elements 'at front'", "Eye-tracking: gaze scattered, no clear path", "No narrative — user decides randomly"],
            ["Form fields", "12 fields before first value delivery", "62% abandoned before completing", "Front-loaded work, back-loaded reward"],
            ["Social proof", "End of page, small text", "Scroll depth shows 23% reached it", "Trust signals invisible to 77% of users"],
            ["Primary CTA", "Same visual weight as 4 other links", "Click map: CTR 2.1% vs navigation 18%", "CTA was not the primary visual anchor"],
          ]}
        />
        <InsightBox>The value proposition was below the fold on mobile — meaning 62% of our largest traffic source never saw why they should care. This single finding explained half of our conversion gap.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where Users Were Making Their Exit Decision</h2>
        <DataTable
          headers={["Exit Point", "% of Non-Converters", "Average Time-on-Site", "What They Saw"]}
          rows={[
            ["< 5 seconds (first impression fail)", "34%", "< 5s", "Headline + hero image only — no value prop"],
            ["10–30 seconds (value clarity fail)", "28%", "~18s", "Value prop unclear or unseen"],
            ["30 seconds–2 min (trust fail)", "21%", "~55s", "Interest, but no social proof visible"],
            ["2–5 min (friction fail)", "17%", "~3.4 min", "Started form, abandoned at field 4–7"],
          ]}
        />
        <TakeawayBox>62% of exits happened before users had seen enough to make an informed decision. The conversion problem wasn't at the CTA — it was at the value communication stage, 30–90 seconds before any CTA was visible.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Optimize individual elements: button, headline, form</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Redesign the narrative arc: hook → value → trust → action — ensuring each stage is visible and complete before users decide</p>
          </div>
        </div>
        <BlockQuote>A page is a story. It has a beginning, middle, and end. When the structure is wrong, no optimization of individual words will save the narrative.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Conversion Surface Redesign System (CSRS)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">CSRS maps every page as a conversion surface with 4 required zones — each must be completed before the next zone's content appears, creating a structured narrative.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Layout className="h-5 w-5 text-primary" />} title="Zone 1: Hook (Above Fold)" body="One clear statement: what this is and who it's for. No hero image. No navigation prominence. The first 5 seconds must answer: 'Is this for me?'" color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Zone 2: Value (Visible on First Scroll)" body="Three concrete benefits with specifics. Not 'save time' — 'Generate a GST invoice in 60 seconds.' Evidence-backed, specific, believable." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-purple-600" />} title="Zone 3: Trust (Before CTA)" body="Social proof: specific, attributed, outcome-focused. 'Anitha, CA firm partner, Coimbatore: Reduced invoice time from 40 min to 58 seconds.' Not stars — names and outcomes." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<MousePointer className="h-5 w-5 text-orange-600" />} title="Zone 4: Action (Singular, Inevitable)" body="One CTA, visually dominant, with reduced-friction form (2 fields max before first value delivery). Risk reducer adjacent: 'Free 14-day trial. No card required.'" color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Zone", "Before (Problem)", "After (Fix)", "Conversion Impact"]}
          rows={[
            ["Zone 1: Hook", "Generic headline, image-heavy", "Specific outcome statement, mobile-first", "+31% 5-sec retention"],
            ["Zone 2: Value", "Below fold, feature list", "Above fold, specific benefit statements", "+28% scroll-to-CTA rate"],
            ["Zone 3: Trust", "End of page, anonymous", "Before CTA, named + outcome-specific", "+44% CTA hover-to-click"],
            ["Zone 4: Action", "12-field form, weak CTA", "2-field form, dominant CTA, risk reducer", "+61% form starts"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Diagnostic Research", points: ["Eye-tracking study: 12 users, 3 devices (desktop/tablet/mobile)", "Session recordings: 400 sessions analyzed for exit patterns", "Exit survey: 80 responses identifying top exit reasons"] },
            { layer: "Layer 2", title: "Redesign Approach", points: ["4-zone narrative structure defined and signed off before any visual design", "Mobile-first: all design decisions made for mobile viewport first", "Component library constraints: only existing components — no new ones built"] },
            { layer: "Layer 3", title: "A/B Testing Protocol", points: ["Old vs new tested simultaneously: 50/50 traffic split", "Primary metric: funnel completion rate (not just page conversion)", "Secondary metrics: zone-by-zone scroll depth, hover patterns"] },
            { layer: "Layer 4", title: "Iteration Cycle", points: ["Weekly design review: which zone is underperforming?", "Micro-tests within zones: headline A vs B, testimonial placement A vs B", "Full redesign A/B runs for minimum 14 days before decision"] },
          ].map((l) => (
            <div key={l.layer} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3"><span className="text-primary font-mono text-sm">{l.layer} · </span>{l.title}</p>
              <ul className="space-y-2">{l.points.map((p, i) => (<li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>))}</ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Execution Journey</h2>
        <div className="space-y-4">
          <Phase num="Phase 1" period="Week 1–2" title="Diagnostic" actions={["Eye-tracking study ran — findings shocking: value prop invisible on mobile", "Session recordings: 34% of exits < 5 seconds", "CSRS framework applied: 4-zone gap analysis"]} result="Structural problems identified and prioritized" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 3–4" title="Redesign" actions={["Mobile-first narrative redesign: Zone 1 and 2 restructured above fold", "Social proof moved from footer to Zone 3 (before CTA)", "Form reduced from 12 fields to 2 before first value delivery"]} result="Redesign in staging, ready for A/B" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Week 5–6" title="A/B Test" actions={["50/50 split, 14-day run", "Interim: conversion 4.3% → 5.1% (significant at 95% confidence)", "Zone 3 trust section: A/B within the A/B — named vs anonymous testimonials"]} result="Named testimonials 2.3× more effective" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Week 6+" title="Rollout" actions={["New design rolled to 100% traffic", "Final conversion: 4.3% → 5.5% (+28%)", "Sustained at 5.5% over 60 days — no regression"]} result="Sustained 28% conversion improvement" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="28%" label="Conversion Improvement" sub="4.3% → 5.5%" color="text-green-600" />
          <MetricCard value="31%" label="5-Second Retention" sub="after Zone 1 redesign" color="text-primary" />
          <MetricCard value="2.3×" label="Named vs Anonymous" sub="testimonial effectiveness" color="text-green-600" />
          <MetricCard value="18" label="A/B Tests Bypassed" sub="by fixing structural issues" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before Redesign", "After Redesign"]}
          rows={[
            ["Page Conversion Rate", "4.3%", "5.5% (+28%)"],
            ["5-Second Retention (mobile)", "41%", "72%"],
            ["Scroll-to-CTA Rate", "38%", "61%"],
            ["Form Start Rate", "19%", "31%"],
            ["Form Completion Rate", "23%", "34%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="A/B testing optimizes within a structure — it can't fix the structure" body="18 A/B tests moved conversion 0–0.3% each. One structural redesign moved it 28%. A/B tests are optimization tools. They cannot fix structural narrative problems." />
          <Insight num="02" title="Mobile-first means mobile-only in the first decision" body="62% of users were on mobile. Design reviews were done on desktop. The value proposition was below the fold on mobile but above fold on desktop. The device used for design review determined what got prioritized." />
          <Insight num="03" title="Named testimonials are worth 2.3× anonymous ones" body="'5 stars — great product' converts at 1×. 'Anitha, CA partner, Coimbatore: invoice time from 40 min to 58 seconds' converts at 2.3×. Specificity creates credibility. Generality creates doubt." />
          <Insight num="04" title="Front-loaded friction kills conversions before the CTA" body="Asking for 12 fields before delivering any value is a trust problem, not a form problem. Users don't refuse to fill forms — they refuse to invest effort before understanding the return." />
          <Insight num="05" title="Eye-tracking reveals what analytics can't" body="Analytics showed users were exiting. Eye-tracking showed WHY — their eyes never reached the value proposition. Different tools answer different questions. Both are necessary." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Redesign ran too many A/B tests simultaneously" why="2 simultaneous A/B tests interacted — some users saw combination A/B-1 + A/B-2-variant, creating unintended experience permutations. Data was polluted." fix="Established rule: one A/B test per page at a time. Sequential testing is slower but the data is clean and actionable." />
          <FailurePoint title="Social proof sourcing was delayed 2 weeks" why="We committed to named testimonials before sourcing them. Customer success team needed 2 weeks to get permission from 4 customers." fix="Built sourcing pipeline: every successful case study outcome → automatic permission request for testimonial. 6-week backlog of approved testimonials now maintained." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Dynamic Zone Personalization" body="Zone 2 and 3 content served dynamically based on entry source. Paid ad users see different benefits emphasis than organic users — tailored to why they came." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Continuous Eye-Tracking" body="Automated eye-tracking heatmaps via software tools (not session labs) — continuous zone performance monitoring without manual research cycles." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Narrative Health Score" body="Weekly diagnostic: is the narrative working? Scroll depth per zone, hover patterns, exit points — turned into a single 'narrative health' score with alerts." />
        </div>
        <BlockQuote>18 A/B tests gave us 18 data points about button variants. One structural audit gave us 28% more revenue. Measure the structure before optimizing the elements.</BlockQuote>
      </section>
    </div>
  );
}
