import { TrendingUp, Zap, Target, Layers, Brain, BarChart3, Minus, CheckCircle2 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function CognitiveLoadContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Product Nobody Could Finish Using</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Our product had everything. 14 features. 9 filter options. 23 data points per result card. A sidebar, a top bar, a bottom navigation, and 3 modals that could open simultaneously. It was comprehensive, powerful, and deeply praised by the team who built it.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Users were completing the core flow at 18%. Industry average for a comparable product was 44%. We had built a product so full of capability that users couldn't find the one thing they came to do.</p>
        <ProblemBox>Cognitive overload is the silent conversion killer. Users don't complain about it — they just leave. They don't file support tickets about too many options — they disappear. The product that gives users everything often gives them nothing useful.</ProblemBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Measuring Cognitive Load</h2>
        <DataTable
          headers={["Indicator", "Value", "Benchmark", "Signal"]}
          rows={[
            ["Core flow completion rate", "18%", "44% industry", "Severe cognitive overload"],
            ["Avg time to first meaningful action", "4m 12s", "< 90s ideal", "Too much to process before acting"],
            ["Support tickets: 'confused'", "34% of all tickets", "< 8% normal", "UI causing confusion at scale"],
            ["Feature usage (active)", "3.2 of 14", "—", "Only 23% of features used regularly"],
            ["Session abandonment (no action)", "58%", "< 25% healthy", "Users leave without doing anything"],
          ]}
        />
        <InsightBox>Users were regularly using 3 of 14 features. We had built 11 features that nobody used — and those features were making the 3 essential ones harder to find.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Cognitive Load Profile by User Type</h2>
        <DataTable
          headers={["User Type", "Used Features", "Core Flow Completion", "Reported Experience", "Load Status"]}
          rows={[
            ["Power Users (5%)", "11 of 14", "84%", "'Love the depth'", "Capacity match"],
            ["Regular Users (35%)", "4 of 14", "29%", "'A bit complex'", "Moderate overload"],
            ["Casual Users (42%)", "2 of 14", "11%", "'Confusing, give up often'", "Severe overload"],
            ["Trial / First-time (18%)", "1 of 14", "4%", "'Overwhelming, don't know what to do'", "Catastrophic overload"],
          ]}
        />
        <TakeawayBox>We were designing for the 5% who were power users — with the full interface fully visible to the 60% who needed a dramatically simpler path. One interface serving wildly different needs was serving none of them well.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Comprehensive = valuable. More features = better product. Users will learn.</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Clarity = value. Show fewer options, make the right one obvious. Users don't learn — they leave.</p>
          </div>
        </div>
        <BlockQuote>Adding a feature is easy. Removing the need to see it is hard. The product with 3 visible options and 11 hidden ones will always outperform the product with 14 equally visible ones.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Cognitive Load Compression Framework (CLCF)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">CLCF has 4 compression techniques — applied in sequence — each reducing cognitive load while preserving the product's full capability.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Minus className="h-5 w-5 text-primary" />} title="Technique 1: Radical Default-Setting" body="Don't show all options — show the best default. Users can change it, but don't need to. Result: cognitive load = 1 decision, not 14." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Target className="h-5 w-5 text-green-600" />} title="Technique 2: Progressive Disclosure" body="Show the 3 essential elements immediately. Reveal the next 3 on natural progression. Everything else: available in 'Advanced' mode. Same features — different exposure timing." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Brain className="h-5 w-5 text-purple-600" />} title="Technique 3: Smart Recommendation" body="AI recommends one option based on user profile. Instead of 9 filter choices + 23 data points, user sees: 'Based on your inputs, this is your best option.' One clear answer." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<CheckCircle2 className="h-5 w-5 text-orange-600" />} title="Technique 4: Guided First Session" body="First session has a guided path — 3 steps, each with one decision. User builds confidence before complexity is revealed. Completion rate of guided path: 81%." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["User Type", "CLCF Mode", "Options Visible", "Core Flow Completion (After)"]}
          rows={[
            ["First-time / Trial", "Guided Mode", "3 decisions, 1 each", "81% (from 4%)"],
            ["Casual Users", "Standard Mode", "6 visible, advanced hidden", "38% (from 11%)"],
            ["Regular Users", "Standard Mode + Advanced toggle", "6 + 8 on demand", "54% (from 29%)"],
            ["Power Users", "Advanced Mode (auto-detected)", "All 14 visible", "84% maintained"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Cognitive Load Measurement", points: ["Session recording analysis: mouse hesitation = cognitive overload signal", "Task completion time tracking per user type", "Support ticket NLP: classify 'confused' ticket types by feature area"] },
            { layer: "Layer 2", title: "Guided Mode (First Session)", points: ["First-session detection: no prior completed actions = guided mode activated", "3-step guided flow: enter route → view default result → complete action", "Progress indicator: '2 of 3 steps complete' — reduces uncertainty"] },
            { layer: "Layer 3", title: "Progressive Disclosure Architecture", points: ["Feature visibility rules: primary (always visible), secondary (1 click), advanced (toggle)", "Recommendation model: top 3 signals → AI recommends 1 option", "User profile learns over time — advanced features auto-unlocked after 5 sessions"] },
            { layer: "Layer 4", title: "Power User Detection", points: ["Users who use 6+ features in first 3 sessions: auto-promoted to Advanced Mode", "Advanced Mode toggle: visible at all times for all users — never hide capability", "Mode history stored per user — consistent experience across sessions"] },
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
          <Phase num="Phase 1" period="Week 1–3" title="Cognitive Load Audit" actions={["Session recording analysis: 500 sessions, 4 user types", "Feature usage data: only 3 of 14 used by 70%+ of users", "CLCF framework applied: 4 modes defined"]} result="Load profile + compression strategy defined" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 3–6" title="Guided Mode Build" actions={["First-session guided flow designed and built", "3-step architecture: enforced single-decision per step", "Progress indicator added"]} result="First-time user completion: 4% → 81%" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Week 6–9" title="Progressive Disclosure" actions={["Feature visibility rules implemented", "AI recommendation model integrated", "Advanced Mode toggle added"]} result="Casual user completion: 11% → 38%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Week 9+" title="Full Rollout" actions={["All user types now see appropriate mode", "Support ticket 'confused' category: 34% → 8%", "Overall core flow completion: 18% → 41%"]} result="Near industry benchmark achieved" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="2.3×" label="Core Flow Completion" sub="18% → 41%" color="text-green-600" />
          <MetricCard value="81%" label="Guided Mode Completion" sub="first-time users" color="text-primary" />
          <MetricCard value="76%" label="Support 'Confused' Tickets" sub="reduction" color="text-green-600" />
          <MetricCard value="0" label="Features Removed" sub="capability fully preserved" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before CLCF", "After CLCF"]}
          rows={[
            ["Core Flow Completion", "18%", "41%"],
            ["First-Time User Completion", "4%", "81%"],
            ["Session Abandonment (no action)", "58%", "24%"],
            ["Support 'Confused' Tickets", "34% of all", "8% of all"],
            ["Average Time to First Action", "4m 12s", "1m 18s"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Feature count is inversely correlated with usability up to a threshold" body="Every feature added to a product adds cognitive cost to every user — including users who will never use that feature. Features that 5% use create overhead for 100% of users." />
          <Insight num="02" title="Progressive disclosure preserves capability while reducing load" body="We didn't remove a single feature. We just changed when they appeared. The product became simultaneously simpler for new users and equally powerful for advanced users." />
          <Insight num="03" title="Guided first sessions are the highest-ROI UX investment" body="Getting first-time completion from 4% to 81% is a 20× improvement. Users who complete a first session are 4× more likely to return. The guided mode ROI cascades into lifetime value." />
          <Insight num="04" title="AI recommendation reduces load better than filter optimization" body="Optimizing 9 filters into better-labeled 9 filters reduces load marginally. Replacing 9 filters with 1 recommendation reduces load dramatically. Simplify the decision, don't just improve the options." />
          <Insight num="05" title="Support tickets are the most honest usability research" body="34% of support tickets saying 'confused' was the signal we ignored for too long. Classify support tickets by UX category monthly — they're the cheapest usability testing you'll ever do." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Guided mode felt patronizing to returning users" why="Returning users who hadn't completed the guided path on first visit were re-shown the guided flow. They resented being treated like beginners." fix="Guided mode triggers: first session only. Any returning user (even without completed first session) gets Standard Mode. Option to manually enter Guided mode from settings." />
          <FailurePoint title="AI recommendation was wrong for 23% of users" why="Recommendation model was trained on majority user profile — miscalibrated for edge cases. 23% of users received recommendations that didn't match their needs." fix="Added recommendation feedback: 'Is this right for you?' One tap to see all options. Feedback trained model weekly. Misfit rate dropped to 8% in month 2." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Adaptive Interface" body="Interface complexity adjusts in real-time based on session behavior — if a user is showing overload signals (hesitation, back-navigation), simplify instantly." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Context-Aware Feature Surfacing" body="Features surfaced based on what the user is doing — not what's always visible. Only show the advanced filter when user has already used the basic one." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Cognitive Load Score Dashboard" body="Real-time cognitive load score per screen — built from session recording data, task completion times, and support ticket patterns. PM team sees it weekly." />
        </div>
        <BlockQuote>We didn't make our product simpler by removing capabilities. We made it simpler by revealing capabilities only when users were ready for them. Simplicity is a sequencing problem, not a subtraction problem.</BlockQuote>
      </section>
    </div>
  );
}
