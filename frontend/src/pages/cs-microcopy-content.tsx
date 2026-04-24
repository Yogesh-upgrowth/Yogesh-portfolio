import { Type, Brain, Target, Zap, BarChart3, MessageSquare } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MicrocopyContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 4 Words That Moved Our Biggest Conversion Metric</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">There was a 6-month engineering project on the roadmap to redesign our loan application flow. Estimated impact: 15–20% conversion improvement. Timeline: Q3–Q4. Engineering cost: significant.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Before that project kicked off, a content designer on the team named Shreya asked a quiet question in a design review: "What if we just changed the helper text on the income field? Users seem confused there." The change took 45 minutes. The A/B test ran for 2 weeks. Conversion at that step improved 31%.</p>
        <InsightBox>The engineering project was eventually deprioritized. Not because the redesign wasn't valuable — but because a significant portion of the problem was microcopy, and microcopy was faster, cheaper, and more immediately impactful to fix.</InsightBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">This is the story of what happened when we took microcopy seriously as a discipline — not an afterthought — and applied it systematically across the product.</p>
      </section>

      <SectionDivider label="What Microcopy Actually Is" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Small Words in High-Stakes Moments</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Microcopy is the small UI text users encounter in moments when decisions are made: error messages, field labels, button copy, helper text, empty states, confirmation dialogs. These strings often get less than 5% of the writing investment of the main content — and they live in 100% of the high-stakes interaction moments.</p>
        <DataTable
          headers={["Microcopy Location", "User State When They See It", "Stakes"]}
          rows={[
            ["Error message", "Confused, frustrated, wants to continue", "High — wrong response causes abandonment"],
            ["Form field helper text", "Uncertain about what input is needed", "High — confusion causes drop-off"],
            ["Button copy", "Decision-ready or uncertain", "High — must match psychological state"],
            ["Empty state", "No data, wondering what to do", "Medium — next action unclear"],
            ["Confirmation dialog", "About to do something significant", "High — clarity prevents errors"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">The income field Shreya flagged? Original helper text: "Enter your monthly income (gross)." Revised version: "Your salary before taxes — check your pay slip under 'Gross Pay'." Same field. Four words of context. 31% better completion rate at that step.</p>
      </section>

      <SectionDivider label="The Audit" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Audited Every High-Stakes Micro Moment</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">After the income field win, we ran a systematic audit: every error message, every field label, every CTA, every empty state in the product. We rated each on ambiguity (how unclear?) and stakes (how much does clarity matter here?).</p>
        <DataTable
          headers={["Category", "Total Instances", "Flagged for Rewrite", "High-Stakes"]}
          rows={[
            ["Error messages", "84", "61 (73%)", "38"],
            ["Form field labels + helper text", "142", "89 (63%)", "54"],
            ["CTA copy", "67", "41 (61%)", "28"],
            ["Empty states", "31", "19 (61%)", "8"],
            ["Confirmation dialogs", "18", "11 (61%)", "14"],
          ]}
        />
        <InsightBox>73% of error messages needed rewrites. Most told users what went wrong without telling them how to fix it. "Invalid format" appeared 31 times across different fields — never once specifying what a valid format looked like.</InsightBox>
      </section>

      <SectionDivider label="Four Principles" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Principles Behind Every Rewrite</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We developed four principles during the audit. Each came from a specific pattern in session recordings and support tickets.</p>
        <div className="space-y-4">
          {[
            { num: "01", title: "Show the answer, not just the question", detail: "Instead of 'Enter annual income': 'What was your total income last year? (Check Form 16 or ITR)'. Don't just ask — show users where to find the answer." },
            { num: "02", title: "Error messages should repair, not accuse", detail: "Instead of 'Invalid mobile number': 'Mobile numbers should be 10 digits — looks like you have 9'. Do the cognitive work of identifying the specific problem." },
            { num: "03", title: "Buttons should describe the outcome, not the action", detail: "Instead of 'Submit': 'Check My Eligibility'. Instead of 'Continue': 'See My Results'. The button should answer: what happens when I press this?" },
            { num: "04", title: "Empty states should activate, not apologize", detail: "Instead of 'No data found': 'You haven't saved any comparisons yet. Start your first comparison →'. Empty states are onboarding opportunities, not dead ends." },
          ].map((p, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-primary/15 bg-primary/5">
              <span className="font-mono text-primary font-bold text-sm flex-shrink-0 mt-0.5">{p.num}</span>
              <div>
                <p className="font-bold text-foreground mb-1">{p.title}</p>
                <p className="text-sm text-foreground/75 leading-relaxed">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <BlockQuote>Microcopy is the product's voice in the moments when users most need guidance. In those moments, clarity is kindness — and vagueness is abandonment.</BlockQuote>
      </section>

      <SectionDivider label="The High-Impact Rewrites" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Changes That Moved Numbers the Most</h2>
        <DataTable
          headers={["Location", "Before", "After", "Impact"]}
          rows={[
            ["Income field helper text", "'Monthly income (gross)'", "'Salary before taxes — check pay slip under Gross Pay'", "+31% field completion"],
            ["PAN field error", "'Invalid PAN format'", "'PAN looks like ABCDE1234F — 5 letters, 4 numbers, 1 letter'", "+44% first-attempt success"],
            ["Primary CTA", "'Submit'", "'Check My Eligibility'", "+22% CTR"],
            ["Empty saved comparisons", "'No saved comparisons'", "'Start your first comparison — save to track rates over time'", "+38% action rate"],
            ["Consent checkbox", "'I agree to terms and conditions'", "'I agree to receive my results and rate alerts by email'", "+19% consent rate"],
          ]}
        />
        <TakeawayBox>The consent checkbox change: "I agree to terms and conditions" is meaningless — users click without reading. "I agree to receive my comparison results and rate alerts by email" explains what they're actually consenting to. Both are legally valid; one is honest. The honest version had 19% higher consent rate — because people are more likely to agree to things they understand.</TakeawayBox>
      </section>

      <SectionDivider label="The Process" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Making Microcopy a Product Discipline</h2>
        <div className="space-y-4">
          {[
            { title: "Microcopy Review in Design Process", points: ["Microcopy review added as mandatory gate before any feature goes to development", "Checklist: Is every error message actionable? Does every CTA describe its outcome? Is every field label specific enough to answer without external lookup?", "Content designer involved at wireframe stage, not post-design"] },
            { title: "String Library with Context", points: ["All UI strings centralized with: the string, location, user state when seen, and last test date", "Library reviewed quarterly — strings over 18 months old with no performance data flagged", "Common strings reused across components — no inconsistent variations of similar messages"] },
            { title: "Micro A/B Testing Program", points: ["Dedicated A/B test queue for microcopy variants — lower traffic threshold needed (string changes test faster)", "Priority: highest-stakes location × highest-traffic volume", "Monthly reporting: which strings changed, impact, learnings"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Six Months of Systematic Rewriting</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Audit" title="Mapping Every High-Stakes String" actions={["Full product audit: 342 strings reviewed across 5 categories", "Support ticket categorization: 3 months of 'form confusion' tickets mapped to specific strings", "Priority list: highest stakes × highest traffic"]} result="78 strings identified as Priority 1 rewrites. Rewrite program launched." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–3" period="High-Impact Rewrites" title="Priority 1 Strings" actions={["78 Priority 1 strings rewritten (error messages, form labels, CTAs)", "Each rewrite A/B tested for minimum 2 weeks", "Income field win (31%) validated approach"]} result="Overall application completion improving week-on-week" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 4–6" period="Full Rewrite" title="264 More Strings" actions={["Remaining strings rewritten in priority order", "Microcopy review gate added to design process", "String library built and populated"]} result="+23% overall application completion. −44% 'form confusion' support tickets." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <MetricCard value="+23%" label="Application Completion" sub="6-month program result" color="text-green-600" />
          <MetricCard value="+31%" label="Income Field Completion" sub="first and most impactful fix" color="text-primary" />
          <MetricCard value="−44%" label="Form Confusion Tickets" sub="support category eliminated" color="text-green-600" />
          <MetricCard value="342" label="Strings Rewritten" sub="across 6 months" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Six Months of Microcopy Work Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="Error messages are the most underinvested real estate in any product" body="73% of our error messages needed rewrites. Most told users what went wrong without telling them what to do next. An error message that doesn't enable recovery is just a dead end dressed up as communication." />
          <Insight num="02" title="The ROI on microcopy is absurdly high" body="The income field fix: 45 minutes of writing time, 2-week test, 31% conversion improvement. We have a design team of 8 and an engineering team of 12. The 45-minute writing investment produced results that months of engineering would have worked toward." />
          <Insight num="03" title="Specificity is the mechanism of clarity" body="'Enter your income' is ambiguous — gross or net? Annual or monthly? 'Your monthly take-home salary (what lands in your bank account)' is specific. Clear microcopy doesn't use more words; it uses more specific ones." />
          <Insight num="04" title="Support tickets are the best microcopy audit data source" body="Every 'confused by form' or 'what does this mean?' ticket points to a microcopy failure. Our 3-month ticket categorization mapped directly to the highest-impact rewrite opportunities in the audit." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Overcorrected</h2>
        <div className="space-y-4">
          <FailurePoint title="Some rewrites were too long" why="In the enthusiasm for specificity, some helper text grew to 3–4 sentences. On mobile, visual clutter increased and the text was less readable than the original." fix="Established length heuristics: error messages ≤2 lines, helper text ≤1 line (tooltip for more detail), CTA ≤4 words. Brevity restored; specificity maintained through word choice, not length." />
          <FailurePoint title="Conversational error messages felt condescending" why="We tried: 'Hmm, that doesn't look right — mobile numbers have 10 digits. Want to try again?' Session recordings showed users visibly freezing or re-reading. 'Hmm' felt patronizing in a high-stakes financial context." fix="Returned to neutral, helpful tone. Removed conversational filler. Kept specific guidance in a straightforward register. Trust context demands clarity over warmth." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where Microcopy Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<MessageSquare className="h-5 w-5 text-primary" />} title="Personalized Error Guidance" body="Error messages that adapt to user context — a first-time user gets more detailed guidance; a returning user who likely made a typo gets a shorter, quicker fix prompt." />
          <FutureCard icon={<Type className="h-5 w-5 text-primary" />} title="Multi-Language Microcopy QA" body="Hindi and regional language microcopy hasn't received the same audit treatment as English. Running the systematic review across all 5 languages with native speaker validation." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Automated Microcopy Alerts" body="Flag any string not tested or reviewed in 18 months. Track per-string conversion performance automatically. Surface below-average strings for review without a manual audit cycle." />
        </div>
        <BlockQuote>The biggest UX win of the year wasn't the navigation redesign or the new comparison UI. It was 342 small pieces of text rewritten by one content designer. Start with the words.</BlockQuote>
      </section>
    </div>
  );
}
