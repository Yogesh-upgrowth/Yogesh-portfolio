import { TrendingDown, Eye, Layers, Target, Brain, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FunnelDropoffContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Session Recording #47 Made Me Want to Redesign Everything</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We'd been looking at funnel metrics for weeks. Conversion step 3 had a 58% drop-off. The analytics said "users leave at step 3." That was true and completely useless — it told us where but not why.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">I sat down with 200 session recordings across the funnel. By recording 47, I'd stopped taking notes and was just watching with a knot in my stomach. A user spent 4 minutes on step 3. They filled in a field. Then deleted it. Filled it in again. Scrolled up, scrolled down. Looked for something that wasn't there. Then left.</p>
        <ProblemBox>We weren't losing users because they didn't want to complete the flow. We were losing them because the flow was making them feel stupid. They couldn't find what they needed to answer the question we were asking.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">That was the moment the optimization playbook changed — from "reduce friction" to "remove confusion." They're different problems.</p>
      </section>

      <SectionDivider label="The Funnel Data" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where Everyone Was Leaving</h2>
        <DataTable
          headers={["Funnel Step", "Completion Rate", "Drop-off Rate", "Avg Time on Step"]}
          rows={[
            ["Step 1: Basic Info", "89%", "11%", "45 sec"],
            ["Step 2: Contact Details", "81%", "19%", "1 min 20 sec"],
            ["Step 3: Policy Details", "42%", "58%", "4 min 10 sec"],
            ["Step 4: Payment", "71%", "29%", "2 min 45 sec"],
            ["Step 5: Confirmation", "94%", "6%", "30 sec"],
          ]}
        />
        <InsightBox>Step 3 had a 4-minute average time — 5× longer than Step 1 — and a 58% drop rate. Users weren't abandoning quickly. They were struggling for 4 minutes and then giving up. That time difference was the tell.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">Standard analytics would have said "optimize step 3." Session recordings showed us what that optimization needed to be: users couldn't answer the question "Vehicle Registration Number" without knowing what it looked like on their documents. We'd provided no hint, example, or format guidance.</p>
      </section>

      <SectionDivider label="What the Recordings Showed" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">200 Recordings. 6 Failure Patterns.</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">I tagged every recording with the primary reason for exit or struggle. Six patterns appeared repeatedly. Together they explained over 85% of step 3 abandonment.</p>
        <DataTable
          headers={["Failure Pattern", "% of Abandoners", "Root Cause"]}
          rows={[
            ["Can't find required document", "31%", "Field asks for document number; no guidance on which document or where to find it"],
            ["Unsure what format is correct", "22%", "Validation error appears but doesn't explain correct format"],
            ["Confused by insurance jargon", "18%", "'IDV', 'NCB', 'Zero Depreciation' — no tooltips, no plain-language explanation"],
            ["Mobile keyboard covering form fields", "8%", "Last 2 fields of step 3 hidden behind keyboard; no scroll compensation"],
            ["Distrust of data being collected", "4%", "Asking for policy number before trust established"],
            ["Other / unclear", "17%", "Various individual issues"],
          ]}
        />
        <TakeawayBox>The #1 failure was a document lookup problem, not a form design problem. Users couldn't complete the form not because of friction but because they physically didn't have the information in front of them. The solution wasn't a better form — it was not asking for that information at that stage.</TakeawayBox>
      </section>

      <SectionDivider label="The Design Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">From "Reduce Friction" to "Remove Confusion"</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Traditional funnel optimization focuses on reducing friction: fewer fields, shorter forms, fewer steps. That wasn't the right frame here. The issue wasn't effort — users were clearly willing to put in effort (4 minutes average). The issue was comprehension and confidence.</p>
        <BlockQuote>When users spend 4 minutes on a step and then leave, they didn't find the step too hard. They found it impossible. The difference between "difficult" and "impossible" is whether the user has what they need to complete the task.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The redesign principle: every field in the form needed to be answerable by someone sitting on their couch with their phone — without needing to go find a document they may not know exists.</p>
      </section>

      <SectionDivider label="The Redesign" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Changed and Why</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-primary" />}
            title="Progressive Disclosure"
            body="Vehicle registration moved from step 3 to an optional enhancement step post-purchase. Quote can be generated with just make/model/year. Pre-fill from registration happens if user provides it — but it's no longer a gate."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Eye className="h-5 w-5 text-green-600" />}
            title="Field-Level Context"
            body="Every field with potential confusion now has: a plain-language label, a tooltip with 'where to find this,' and a format example. 'NCB' became 'No Claim Bonus (years without a claim).' Validation errors show correct format, not just 'invalid.'"
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Mobile Scroll Compensation"
            body="Form auto-scrolls to keep the active field above the keyboard on iOS and Android. Previously, fields 4 and 5 of step 3 were obscured by the keyboard — users typed blind."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Jargon Elimination"
            body="Every insurance term used in the form audited and replaced with plain language. Where jargon was unavoidable, inline explanation added. 'IDV' → 'Insured Declared Value (what your insurer pays if your vehicle is totalled).'"
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Implementation" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Was Built</h2>
        <div className="space-y-4">
          {[
            { title: "Form Architecture Redesign", points: ["Step 3 split into 3a (must-have) and 3b (nice-to-have / post-purchase)", "Vehicle registration moved to optional enhancement step", "Field order reorganized: easy fields first, document-required fields last (or deferred)"] },
            { title: "Contextual Help System", points: ["Tooltip component built: shows on field focus, not hover (mobile-first)", "Format examples: 'MH02 AB 1234' for registration, '2 years' for NCB", "Validation errors rewritten: 'Should look like MH02 AB 1234' instead of 'Invalid format'"] },
            { title: "Mobile Keyboard Handling", points: ["Active field scroll-into-view implemented across iOS and Android", "Form container height adjusted dynamically when keyboard visible", "Submit CTA always visible above keyboard on mobile (floating, not inline)"] },
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

      <SectionDivider label="Results" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Testing and Results</h2>
        <div className="space-y-4">
          <Phase num="Week 1–2" period="Session Recording Analysis" title="Diagnosis" actions={["200 recordings tagged with primary failure reason", "6 failure patterns identified and quantified", "Redesign brief written based on failure pattern data"]} result="Clear redesign hypothesis: progressive disclosure + field context + mobile fix." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Week 3–5" period="Build" title="Implementation" actions={["Form architecture redesign: registration deferral", "Tooltip system built", "Mobile keyboard handling implemented"]} result="Staged on test environment. Internal review completed." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Week 6–8" period="A/B Test" title="50/50 Split" actions={["Old flow vs new flow: equal traffic split for 3 weeks", "Statistical significance reached at Week 6", "Step 3 completion: 42% → 74%"]} result="Full funnel completion: 26% → 47%. Revenue per 1,000 visitors: +81%." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <MetricCard value="+76%" label="Step 3 Completion" sub="42% → 74%" color="text-green-600" />
          <MetricCard value="+81%" label="Revenue per 1K Visitors" sub="full funnel impact" color="text-primary" />
          <MetricCard value="−62%" label="Avg Step 3 Time" sub="4 min → 1.5 min" color="text-green-600" />
          <MetricCard value="+34%" label="Mobile Completion" sub="biggest gain channel" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What I Now Believe About Funnel Optimization</h2>
        <div className="space-y-6">
          <Insight num="01" title="Time on step is the most underused diagnostic metric" body="High time + high drop = confusion, not laziness. Low time + high drop = too hard (users give up immediately). High time + low drop = high engagement. Reading time alongside drop rate tells you what kind of problem you're solving." />
          <Insight num="02" title="Session recordings are worth 10× funnel analytics for diagnosis" body="Funnel analytics tells you where. Session recordings tell you why. The 4-minute struggle visible in Recording #47 was invisible in the drop-off percentage. You need both — analytics to prioritize, recordings to diagnose." />
          <Insight num="03" title="'Remove friction' and 'remove confusion' are different problems" body="Friction reduction = fewer steps, fewer fields. Confusion removal = better context, clearer labels, appropriate field timing. Applying friction-reduction solutions to confusion problems will improve metrics without solving the actual user experience issue." />
          <Insight num="04" title="Mobile keyboard handling is chronically underinvested" body="8% of step 3 failures were from fields hidden behind the mobile keyboard — entirely invisible in any desktop QA process. Separate mobile-first testing and keyboard-visible flow review should be standard for any form." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Didn't Work First</h2>
        <div className="space-y-4">
          <FailurePoint title="First redesign just added progress indicators" why="Initial hypothesis was that users didn't know how long the form was. Added a step progress bar. Drop rate moved from 58% to 54%. Improvement, but not where the real problem was." fix="Session recordings showed users who could see the progress bar still left at the same point in step 3 — when they couldn't find their vehicle registration. Progress visibility wasn't the issue; answerable questions were." />
          <FailurePoint title="Tooltip content was too technical" why="First version of tooltips used insurance industry standard language. 'Registration certificate (RC)' — but users called it 'RC book' or 'papers' and didn't recognize 'registration certificate.'" fix="Rewrote tooltip content using the language users used in session recordings and support chats. 'Your RC book — the green booklet from the RTO.' Recognition shot up." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What's Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Eye className="h-5 w-5 text-primary" />} title="Continuous Recording Analysis" body="Set up automated session recording tagging using heuristics (rage clicks, u-turns, long pauses) to surface struggling sessions automatically — rather than manual review." />
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Field Completion" body="Pre-populate fields from known user data (previous policies, partner integrations, device-based autofill). Reduce required manual input — the best field is the one the user never had to type." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Per-Field Analytics" body="Track time, error rate, and abandonment at the individual field level (not just step level). Identify which specific fields are causing struggle before they affect step completion rates." />
        </div>
        <BlockQuote>The funnel didn't need fewer steps. It needed to stop asking users questions they couldn't answer from their couch. Fix that, and the drop-off fixed itself.</BlockQuote>
      </section>
    </div>
  );
}
