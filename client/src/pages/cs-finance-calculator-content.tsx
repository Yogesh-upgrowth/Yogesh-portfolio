import { TrendingUp, Zap, Target, Calculator, Brain, BarChart3, RefreshCw, Lightbulb } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FinanceCalculatorContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Finance App That Became a Daily Ritual</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Finance apps have terrible retention. Not because users don't care about money — they care deeply — but because most finance apps are <strong className="text-foreground">event-triggered utilities</strong>. Users open them when they need to do something financial: check a statement, transfer money, apply for a loan. Between events, there's nothing pulling them back.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We built a multi-calculator finance app — EMI calculator, SIP planner, salary calculator, tax saver, FD comparator — and solved the retention problem not by adding features, but by <strong className="text-foreground">making financial calculation a daily habit</strong>.</p>
        <InsightBox>Personal finance decisions are made daily. Not the big ones — the small ones. 'Should I buy this now or save?' 'What's my EMI if I take a 20L loan at 8.5%?' Answering those questions daily is the retention engine.</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Finance App Retention Normally Looks Like</h2>
        <DataTable
          headers={["Metric", "Industry Benchmark", "Our Target", "Our Month 3 Actual"]}
          rows={[
            ["D1 Retention", "32%", "48%", "51%"],
            ["D7 Retention", "12%", "28%", "31%"],
            ["D30 Retention", "6%", "18%", "22%"],
            ["DAU/MAU Ratio", "8%", "20%", "24%"],
            ["Sessions Per Active User", "1.2/week", "3.5/week", "4.1/week"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">Standard Finance App Trap</p>
            <p className="text-foreground/70 text-sm">Build comprehensive features → Market aggressively → Users download → Users open once → Never return. Repeat acquisition cycle forever.</p>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">Our Hypothesis</p>
            <p className="text-foreground/80 text-sm">Build calculators that answer daily financial micro-decisions → Make saving results frictionless → Create progress narrative → Daily return becomes natural.</p>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Calculator Behavior Taxonomy</h2>
        <DataTable
          headers={["Calculator Type", "Use Pattern", "Return Rate", "Monetization Potential", "Retention Impact"]}
          rows={[
            ["EMI Calculator", "One-time (loan decision)", "Low — used, not needed again soon", "High (loan leads)", "Low retention, high conversion"],
            ["SIP Planner", "Recurring (goal tracking)", "High — monthly check-ins", "Medium (investment leads)", "Highest retention driver"],
            ["Tax Saver", "Seasonal (Jan–Mar peak)", "Annual spike", "High (advisor leads)", "Low baseline, seasonal spike"],
            ["Salary Breakup", "Occasional (salary change)", "Medium", "Low", "Medium"],
            ["FD Rate Comparator", "Moderate — rate sensitive", "Weekly during rate changes", "High (FD leads)", "Medium-high"],
          ]}
        />
        <TakeawayBox>SIP Planner was the retention anchor. Users who set a SIP goal returned monthly to track progress toward it — a built-in return trigger that required no notification, no reminder, no push. Just a goal they'd set for themselves.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Build calculators as features; monetize through lead gen</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Build calculators as goal-setting tools that create personal financial progress narratives — retention comes from progress, not reminders</p>
          </div>
        </div>
        <BlockQuote>A calculator without memory is a tool. A calculator with memory and progress is a financial journal. Journals keep people coming back. Tools don't.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Daily Utility Retention Loop (DURL)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">DURL chains calculators together through a shared financial profile — so using one calculator enriches every other, and progress in one is visible across all.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Calculator className="h-5 w-5 text-primary" />} title="Anchor Calculator (SIP Planner)" body="Users set a goal: 'I want ₹50L in 10 years.' Monthly progress tracked automatically. Every month, a progress update pulls them back." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<RefreshCw className="h-5 w-5 text-green-600" />} title="Cross-Calculator Enrichment" body="EMI calculation updates their 'disposable income' for SIP planning. Tax savings feed into FD comparison. Every tool use enriches the financial profile." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-purple-600" />} title="Progress Narrative" body="Monthly: 'You're ₹2.4L closer to your goal. At this rate, you'll hit ₹50L in 9 years 3 months.' Progress visible = return motivation." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<Lightbulb className="h-5 w-5 text-orange-600" />} title="Daily Micro-Decisions" body="'Quick Calculate' widget: 3-tap access to most-used calculator from home screen widget. Reduces friction for daily financial micro-decisions to near-zero." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Retention Mechanism", "Type", "D30 Retention (users with this)", "Without"]}
          rows={[
            ["SIP goal set", "Self-created trigger", "41%", "9%"],
            ["Financial profile complete", "Investment in platform", "34%", "8%"],
            ["2+ calculators used on D1", "Depth signal", "29%", "7%"],
            ["Home screen widget added", "Friction removal", "38%", "11%"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Unified Financial Profile", points: ["Single profile: income, goals, active SIPs, loans, FD interest", "Every calculator reads from and writes to this profile", "Profile completeness score shown to users — progress to 'full picture'"] },
            { layer: "Layer 2", title: "Goal Engine", points: ["SIP Planner: goal set with amount, timeline, monthly contribution", "Progress recalculated monthly with actual market returns (mutual fund API)", "Goal completion projections updated dynamically"] },
            { layer: "Layer 3", title: "Engagement Hooks", points: ["Monthly progress notification: goal-specific, shows exact progress vs plan", "Home screen widget: quick-launch to last-used calculator", "Daily 'financial fact' card: one insight from user's own profile"] },
            { layer: "Layer 4", title: "Monetization Architecture", points: ["EMI calculation → loan offer (affiliate): 38% click-through on relevant offers", "SIP planner → mutual fund suggestion: 12% conversion to investment platform", "Tax saver → CA consultation lead: ₹800 lead revenue in Jan–Mar season"] },
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
          <Phase num="Phase 1" period="0–6 Weeks" title="Core Calculators" actions={["5 calculators built: EMI, SIP, Salary, Tax, FD", "Unified financial profile system designed", "D1 onboarding: set a goal first, then calculate"]} result="D7 retention 31% — 2.6× industry benchmark" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="6–12 Weeks" title="Goal Engine" actions={["SIP goal system built with monthly progress tracking", "Mutual fund API integrated for real return calculations", "Monthly progress notification system launched"]} result="D30 retention: 22% (vs 6% industry avg)" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="12–18 Weeks" title="Daily Hooks" actions={["Home screen widget built (Android first)", "Daily financial fact card launched", "Quick Calculate: 3-tap home screen access"]} result="DAU/MAU ratio: 24% (vs 8% industry)" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="18+ Weeks" title="Monetization" actions={["Loan offers integrated into EMI calculator post-calculation", "MF platform referrals from SIP planner", "CA lead gen during tax season"]} result="₹3.8L MRR — ₹0 acquisition, all organic monetization" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="3.7×" label="D30 Retention" sub="vs industry benchmark" color="text-green-600" />
          <MetricCard value="4.1×" label="Sessions/Week" sub="vs 1.2 industry avg" color="text-primary" />
          <MetricCard value="24%" label="DAU/MAU Ratio" sub="vs 8% industry" color="text-green-600" />
          <MetricCard value="₹3.8L" label="Monthly Revenue" sub="zero acquisition spend" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Industry Benchmark", "Month 3 Actual"]}
          rows={[
            ["D1 Retention", "32%", "51%"],
            ["D7 Retention", "12%", "31%"],
            ["D30 Retention", "6%", "22%"],
            ["DAU/MAU", "8%", "24%"],
            ["Sessions/Week (active users)", "1.2", "4.1"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Goals are the most durable retention mechanism" body="A goal the user sets for themselves creates intrinsic motivation to return. No notification, no reminder, no campaign can replicate the pull of tracking progress toward something you chose." />
          <Insight num="02" title="Calculator memory is a product differentiator" body="Every calculator on the internet computes the same formula. Memory is the differentiator. When your calculator remembers your last inputs, links to your financial profile, and shows your history — it becomes irreplaceable." />
          <Insight num="03" title="Cross-calculator enrichment compounds engagement" body="Each calculator use that enriches the financial profile makes every other calculator more useful. This cross-enrichment creates increasing returns to engagement — the more a user uses the app, the more valuable each session becomes." />
          <Insight num="04" title="Home screen real estate is retention infrastructure" body="The home screen widget moved a 3-minute task (open app, navigate, calculate) to a 3-second task. That friction reduction was enough to shift the habit formation threshold — daily use became default." />
          <Insight num="05" title="Monetize the decision moment, not the session" body="Showing a loan offer after an EMI calculation (when the user has already mentally modeled the EMI) converts at 38%. Showing the same offer on the home screen converts at 2.1%. Context is everything in fintech monetization." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Onboarding forced profile completion before first calculator use" why="First version required 8-field profile setup before accessing any calculator. 64% of users dropped on onboarding." fix="Flipped: calculator first, profile second. 'Save this result' → profiles built incrementally. Drop rate fell to 18%." />
          <FailurePoint title="Monthly progress email was too technical" why="'Your XIRR this month was 12.3%' — nobody knew what XIRR meant. Open rate 8%." fix="Rewrote as: 'You're ₹2,400 closer to your ₹50L goal. Good month.' Human, specific, motivating. Open rate jumped to 41%." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="AI Financial Coach" body="Weekly personalized insight: 'Based on your EMI and SIP commitments, you have ₹8,400 investable this month. Here's what to do with it.'" />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Bank Account Integration" body="Actual transaction data feeds into profile — real spending vs budgeted. Makes every calculation accurate to the user's actual financial life, not hypothetical inputs." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Social Goal Tracking" body="Opt-in: share your SIP goal progress with a friend or partner. Social accountability creates external motivation on top of internal goal ownership." />
        </div>
        <BlockQuote>The finance app that builds daily retention isn't the one with the most features. It's the one where users feel financially progress every time they open it.</BlockQuote>
      </section>
    </div>
  );
}
