import { TrendingUp, Zap, Target, Clock, Brain, BarChart3, CheckCircle2, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function Mvp7DaysContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">7 Days. Real Users. Real Revenue. No Shortcuts.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The idea came from a user interview on a Thursday. By the following Thursday, we had a working product, 40 paying beta users, and the first ₹14,400 in revenue. No design sprints. No product roadmaps. No committee approvals.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">This wasn't reckless speed — it was the application of a framework we'd developed over 8 years of building fintech products. The 7-day MVP methodology isn't about shortcuts. It's about <strong className="text-foreground">brutal prioritization of what must be true before everything else is irrelevant</strong>.</p>
        <InsightBox>Most products fail not because they were built too fast — but because they spent 6 months building the wrong thing at the right quality. Speed forces the question: what is actually essential?</InsightBox>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Starting Conditions</h2>
        <DataTable
          headers={["Constraint", "Value", "Impact on Approach"]}
          rows={[
            ["Time Budget", "7 days", "Forces single core flow — no feature sprawl"],
            ["Engineering", "1 full-stack developer", "No complexity — ship the simplest version that works"],
            ["Design", "1 designer (part-time)", "Use UI kit — no custom design system"],
            ["Market Validation Signal", "3 user interviews showing clear pain", "Build for known pain, not hypothetical one"],
            ["Revenue Hypothesis", "₹299/month or ₹1,499/year", "Must test willingness to pay, not just usage"],
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm">What Most Teams Do</p>
            <ul className="space-y-1 text-sm text-foreground/70"><li>→ Build all features simultaneously</li><li>→ Perfect the UI before shipping</li><li>→ Wait for full QA before user testing</li><li>→ Ship at 80% quality, 20% of speed</li></ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
            <p className="font-bold text-primary mb-2 text-sm">The 7-Day Framework</p>
            <ul className="space-y-1 text-sm text-foreground/80"><li>→ One core flow only — nothing else exists</li><li>→ 'Good enough' UI: no custom components</li><li>→ Ship to 10 real users on Day 5</li><li>→ Revenue test before feature iteration</li></ul>
          </div>
        </div>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 3 Questions That Define a 7-Day MVP</h2>
        <div className="space-y-4">
          {[
            { num: "Q1", q: "What is the one action this product must enable?", a: "If you can't answer this in one sentence, you're not ready to build. The one action for this MVP: 'Allow a freelance accountant to auto-generate a GST-compliant invoice from a voice description in under 60 seconds.'" },
            { num: "Q2", q: "Who is the first user profile, and where are they?", a: "Not 'our target market' — a specific person with a specific pain, reachable in 24 hours. For this MVP: 'CA firms with 5–15 freelancers in Tier 2 cities, reachable via chartered accountant WhatsApp groups.'" },
            { num: "Q3", q: "What is the monetization test?", a: "Not 'we'll figure out pricing later.' The pricing must be tested in the MVP. We showed the ₹299/month pricing page before the product was built — 6 of 10 test users said yes. Product started with revenue commitment." },
          ].map((item) => (
            <div key={item.num} className="p-5 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-primary mb-1 text-sm font-mono">{item.num}</p>
              <p className="font-bold text-foreground mb-2">{item.q}</p>
              <p className="text-sm text-foreground/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <TakeawayBox>The 7 days begins only after all 3 questions are answered. If you start building without answers, you're not running a 7-day sprint — you're running a 7-day guess.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Build the right product → then get users → then get revenue</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Get revenue commitment → build the minimum that delivers it → expand from evidence, not assumption</p>
          </div>
        </div>
        <BlockQuote>Revenue is not the reward for a good product. Revenue is the validation signal. Ship fast enough to learn whether your hypothesis is true before you've invested everything in it being true.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Rapid Intent-Fit Validation Framework (RIFV)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">RIFV is a 7-phase, 7-day process — one phase per day — each with a clear deliverable and a binary go/no-go gate.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Target className="h-5 w-5 text-primary" />} title="Day 1: Problem Sharpening" body="Interview 5 users. Identify the exact sentence that describes their pain. Write the one-sentence product description. Get verbal commitment from 2 users to test it." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Clock className="h-5 w-5 text-green-600" />} title="Day 2: Flow Architecture" body="Map the single core flow. 5 screens maximum. No edge cases — main path only. Engineering lead signs off: 'I can build this in 3 days.'" color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Layers className="h-5 w-5 text-purple-600" />} title="Days 3–4: Build Core Flow" body="No extras. Auth, core action, output. Use existing UI kit. No custom illustrations. Ship to staging by end of Day 4." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<CheckCircle2 className="h-5 w-5 text-orange-600" />} title="Day 5: Real User Session" body="Put 10 real users on the product. Watch them use it (zoom or in-person). Write down every confusion. Fix top 3 issues on Day 6." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Day", "Phase", "Deliverable", "Go/No-Go Gate"]}
          rows={[
            ["1", "Problem Sharpening", "One-sentence problem statement + 2 user commitments", "2 users committed to test = go"],
            ["2", "Flow Architecture", "5-screen wireframe, engineering estimate", "Build feasibility confirmed = go"],
            ["3–4", "Core Build", "Working product in staging", "Core flow completes without bugs = go"],
            ["5", "User Testing", "10-user session recordings, top 3 issues list", "Users complete flow without assistance = go"],
            ["6", "Fixes + Pricing", "Fixed product + pricing page live", "1 user pays = go to Day 7"],
            ["7", "Launch", "40 beta users, first revenue", "Revenue > 0 = validated"],
          ]}
        />
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Actual 7-Day Execution Log</h2>
        <div className="space-y-4">
          <Phase num="Day 1" period="Thursday" title="Problem + Commitment" actions={["5 user interviews: 45 min each, remote", "Pain statement finalized: 'GST invoice generation takes 40 min manually — voice-to-invoice in 60 sec'", "2 accountants committed to be Day 5 testers"]} result="Clear scope; committed testers" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Days 2–4" period="Friday–Sunday" title="Build" actions={["UI kit: Shadcn + Tailwind — no custom design", "Flow: voice input → GPT parse → GST invoice template → download PDF", "Auth: phone OTP (Supabase), no email setup"]} result="Working product in staging by Sunday 9 PM" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Day 5" period="Monday" title="User Testing" actions={["10 users on Zoom — watched, no help given", "3 issues identified: voice clarity on mobile, template selection confusion, PDF download failure on iOS Safari", "All 3 fixed in 4 hours"]} result="All 10 users completed flow unaided" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Days 6–7" period="Tuesday–Wednesday" title="Launch" actions={["Pricing page live: ₹299/month, ₹1,499/year", "WhatsApp outreach to 4 CA groups (200 members total)", "40 signups, 28 paid within 24 hours"]} result="₹14,400 revenue in 48 hours of launch" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results at Day 7</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="7" label="Days to Revenue" sub="from idea to first payment" color="text-green-600" />
          <MetricCard value="₹14.4K" label="First Week Revenue" sub="40 beta users, 28 paid" color="text-primary" />
          <MetricCard value="70%" label="Trial-to-Paid Rate" sub="28 of 40 beta users paid" color="text-green-600" />
          <MetricCard value="5" label="Screens" title="Total" sub="entire MVP — nothing else" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Day 7 Value", "What It Validated"]}
          rows={[
            ["Beta Users", "40", "Reachability of target user"],
            ["Paid Users", "28 (70%)", "Willingness to pay — strong signal"],
            ["Week 1 Revenue", "₹14,400", "Real monetization, not just vanity usage"],
            ["Time to First User", "5 days", "Speed of hypothesis test"],
            ["Features Built", "5 screens, 1 flow", "Minimum scope discipline held"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Revenue is the only real validation signal" body="Users saying 'I love it' is noise. Users paying for it is signal. The 70% trial-to-paid rate on Day 7 told us more than 6 months of design research would have." />
          <Insight num="02" title="Scope discipline is the hardest engineering skill" body="Every engineer on this project had ideas for features they wanted to add. None were added until Day 14. Feature restraint is a technical skill, not a business skill — and it's the one that determines MVP success most often." />
          <Insight num="03" title="Real users break things design reviews miss" body="3 issues found in a 1-hour real-user session would have survived 3 rounds of design review. Real usage surfaces real friction. Ship earlier, test earlier." />
          <Insight num="04" title="Distribution before product" body="WhatsApp CA groups were identified on Day 1 — before a line of code was written. The distribution channel was known before the product existed. Build for where your users are." />
          <Insight num="05" title="7 days is a mindset, not just a method" body="The 7-day constraint forces every meeting to end with a decision, every design to be shipped, every 'let's think about it' to become 'let's build it and see.' The constraint is the strategy." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Voice input failed on Android devices with accents" why="GPT voice parsing worked well for English but broke for Hinglish (mixed Hindi-English) which 60% of our target CA users used naturally." fix="Added text input as fallback on Day 6. Voice became optional, not required. Adoption of text input: 44% of sessions. Both modes retained." />
          <FailurePoint title="Pricing page live before refund policy was written" why="First 3 users who paid asked for refunds when the product didn't work on their specific device. No refund policy existed. Manual handling was chaotic." fix="Day 6 addition: 14-day full refund, no questions asked. Wrote it in 20 minutes. Processed all 3 refunds immediately. Net trust improved." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Multi-Language Voice" body="Expand voice parsing to Hindi, Tamil, Telugu — covering 80% of India's CA population. Same 60-second flow in the user's native language." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="GST Filing Integration" body="From invoice generation to GST portal filing — one flow. 'Generate → File → Done.' Eliminates the second 40-minute manual step after the first is solved." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Repeat This Framework" body="Document RIFV as an internal playbook. Every new product hypothesis goes through a 7-day validation sprint before any scale investment. Fail fast, fail cheap, learn fast." />
        </div>
        <BlockQuote>7 days didn't give us the perfect product. It gave us the evidence that the product was worth perfecting — and that's worth infinitely more than 6 months of uncertainty.</BlockQuote>
      </section>
    </div>
  );
}
