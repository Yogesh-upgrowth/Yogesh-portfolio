import { TrendingUp, Zap, Target, Shield, Brain, BarChart3, Star, Lock } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FintechTrustContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Why Users Were Clicking "Get Started" and Immediately Closing the App</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We were solving a real financial problem. Our rates were competitive. Our onboarding was clear. But 71% of users who clicked "Get Started" abandoned the signup within the first 90 seconds — without error, without friction, without obvious reason.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Exit surveys told us the truth in three words from multiple users: <strong className="text-foreground">"Didn't feel safe."</strong></p>
        <ProblemBox>We had a trust design problem, not a product problem. Users' financial anxiety was triggered the moment they saw our interface — and nothing in our design was addressing it.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">In India's fintech landscape — shaped by years of scam apps, financial fraud, and data breaches — trust is not a nice-to-have. It's the prerequisite. Without trust, every other design decision is irrelevant.</p>
      </section>

      <SectionDivider label="Ground Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Trust Diagnostic</h2>
        <DataTable
          headers={["Trust Signal Audit", "Present?", "Prominent?", "User Awareness (survey)"]}
          rows={[
            ["RBI / regulatory license badge", "Yes (footer)", "No", "8% of users noticed it"],
            ["SSL / security encryption indicator", "Yes (standard lock icon)", "No", "12% associated it with safety"],
            ["Customer review count", "No", "—", "0%"],
            ["Media mentions / press logos", "No", "—", "0%"],
            ["Founder / team transparency", "No", "—", "0%"],
            ["Data privacy statement (readable)", "Yes (legal page link)", "No", "3%"],
          ]}
        />
        <InsightBox>Our RBI license badge — the single most important trust signal for Indian fintech users — was buried in the footer. Only 8% of users noticed it. We were hiding our biggest trust credential.</InsightBox>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Trust Anxiety Spectrum</h2>
        <DataTable
          headers={["User Segment", "% of Users", "Trust Threshold", "Primary Trust Signal Needed", "Exit Rate Without It"]}
          rows={[
            ["Trust-First (first-time fintech users)", "34%", "Very High", "Regulatory badge + data privacy", "89%"],
            ["Research-Validate (NRI / HNI)", "22%", "High", "Media mentions + company age", "71%"],
            ["Social-Proof (referral users)", "28%", "Medium", "User reviews + community proof", "41%"],
            ["Feature-First (tech-savvy)", "16%", "Low", "Performance data + security architecture", "18%"],
          ]}
        />
        <TakeawayBox>34% of our users were first-time fintech users with a very high trust threshold — and we had zero of their required trust signals above the fold. We were designing for the 16% who didn't need trust design and losing the 34% who needed it most.</TakeawayBox>
      </section>

      <SectionDivider label="Strategic Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Reframe</h2>
        <div className="grid sm:grid-cols-2 gap-5 my-6">
          <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
            <p className="font-bold text-destructive mb-2 text-sm uppercase tracking-wider">Old Thinking</p>
            <p className="font-medium text-foreground">Trust is compliance — put the legal badges in the footer</p>
          </div>
          <div className="p-5 rounded-xl border border-green-200 bg-green-50">
            <p className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider">New Thinking</p>
            <p className="font-medium text-foreground">Trust is a product feature — design it with as much intent as any other feature, place it where it intercepts anxiety at the moment it peaks</p>
          </div>
        </div>
        <BlockQuote>In fintech, trust is not a marketing claim. It's a design system. Every element that reduces anxiety is a product feature. Every anxiety you leave unaddressed is a conversion blocker.</BlockQuote>
      </section>

      <SectionDivider label="Core Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Trust Signal Architecture (TSA)</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">TSA places specific trust signals at specific anxiety peaks in the user journey — not uniformly across the page, but precisely where the relevant anxiety occurs.</p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension icon={<Shield className="h-5 w-5 text-primary" />} title="Regulatory Trust (First View)" body="RBI license number + IRDAI badge moved to hero section, styled as a credential badge. 'Licensed by RBI. Your money is protected.' Not fine print — headline-level proof." color="bg-primary/5 border-primary/20" />
          <FrameworkDimension icon={<Star className="h-5 w-5 text-green-600" />} title="Social Trust (Before CTA)" body="Real user reviews with full name, city, and outcome: 'Transferred ₹2L in 4 minutes. Arrived same day.' 12,000+ Trustpilot reviews count displayed." color="bg-green-50 border-green-200" />
          <FrameworkDimension icon={<Lock className="h-5 w-5 text-purple-600" />} title="Data Trust (At Form Entry)" body="At the moment users start entering personal data: 'Bank-grade 256-bit encryption. Your data is never sold.' Anxiety intercept at exactly the right moment." color="bg-purple-50 border-purple-200" />
          <FrameworkDimension icon={<TrendingUp className="h-5 w-5 text-orange-600" />} title="Social Validation (Institutional)" body="Media logos: Economic Times, MoneyControl, Business Insider — shown above fold. Third-party validation from recognizable institutions." color="bg-orange-50 border-orange-200" />
        </div>
        <DataTable
          headers={["Trust Signal", "Old Placement", "New Placement", "Anxiety Intercepted", "Conversion Lift"]}
          rows={[
            ["RBI License Badge", "Footer (8% visibility)", "Hero section", "Is this legitimate?", "+38%"],
            ["User Reviews (12K+)", "Not present", "Before CTA", "Do others trust this?", "+29%"],
            ["256-bit encryption", "Not present", "At form start", "Is my data safe?", "+44%"],
            ["Media Logos (ET, MC)", "Not present", "Above fold", "Is this credible?", "+22%"],
            ["14-day Refund Guarantee", "Terms page", "Alongside CTA", "What if I regret it?", "+31%"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">System Design</h2>
        <div className="space-y-4">
          {[
            { layer: "Layer 1", title: "Anxiety Peak Mapping", points: ["Journey mapped by anxiety level: first view, CTA hover, form entry, payment", "Exit surveys mapped anxiety type to exit point", "Trust signal requirement matched to each anxiety peak"] },
            { layer: "Layer 2", title: "Trust Signal Design", points: ["RBI badge: official mark + license number (not generic 'licensed' text)", "Reviews: real names, cities, outcomes — not star ratings (stars are easy to fake)", "Encryption badge: technical specificity ('256-bit AES') builds trust with NRI/HNI segment"] },
            { layer: "Layer 3", title: "Progressive Disclosure of Trust", points: ["First 5 seconds: regulatory legitimacy (RBI badge)", "Next 30 seconds: social proof (reviews) before CTA", "At form entry: data safety signal", "At payment: guarantee + encryption combined"] },
            { layer: "Layer 4", title: "Trust Signal Maintenance", points: ["Review count auto-updated from Trustpilot API daily", "RBI license badge linked to RBI registry (verifiable)", "Media logo usage legally cleared and refreshed quarterly"] },
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
          <Phase num="Phase 1" period="Week 1–2" title="Trust Audit" actions={["Exit survey analysis: 'Didn't feel safe' top exit reason (41%)", "Trust signal placement audit: RBI badge 8% visibility", "Anxiety peak mapping: 4 distinct peaks identified"]} result="Clear trust gap map with priority signals" color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Phase 2" period="Week 3–4" title="Signal Design" actions={["RBI badge redesigned — prominent, above fold, linked to RBI registry", "Review integration: Trustpilot API, real names, outcomes", "Encryption badge and media logos designed and cleared"]} result="Trust architecture live in staging" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Phase 3" period="Week 5–6" title="A/B Test" actions={["Trust architecture vs original: 50/50 split, 14 days", "90-second abandonment: 71% → 38% (immediate signal)", "First-time fintech users (Trust-First segment): conversion +68%"]} result="Abandonment halved; Trust-First conversion doubled" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Phase 4" period="Week 6+" title="Rollout + Refinement" actions={["Full rollout — 100% traffic", "Trust-First segment conversion: 11% → 18.5%", "14-day refund guarantee added — further +9% on Trust-First"]} result="Overall signup conversion: 29% → 41% (+41%)" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Results</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="41%" label="Signup Conversion" sub="from 29% (+41% improvement)" color="text-green-600" />
          <MetricCard value="38%" label="90s Abandonment" sub="from 71% (halved)" color="text-primary" />
          <MetricCard value="68%" label="Trust-First Segment" sub="conversion improvement" color="text-green-600" />
          <MetricCard value="Zero" label="New Features Built" sub="pure trust signal design" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before TSA", "After TSA"]}
          rows={[
            ["90-Second Abandonment Rate", "71%", "38%"],
            ["Overall Signup Conversion", "29%", "41%"],
            ["Trust-First Segment Conversion", "11%", "18.5%"],
            ["RBI Badge Visibility", "8%", "91%"],
            ["Exit Reason: 'Didn't feel safe'", "41%", "12%"],
          ]}
        />
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Deep Insights</h2>
        <div className="space-y-6">
          <Insight num="01" title="Trust signals must intercept anxiety at its peak — not before or after" body="Showing the encryption badge on the homepage is ineffective. Showing it at the exact moment users start entering personal data is precise. Timing trust signals to anxiety peaks is the design discipline." />
          <Insight num="02" title="Specific trust beats generic trust by a large margin" body="'Secure and safe' converts poorly. 'Licensed by RBI: License No. NBFC-XXX-2019, 256-bit AES encryption, 12,847 verified reviews' converts at a premium. Specificity creates verifiability, which creates trust." />
          <Insight num="03" title="In fintech, trust design is product design" body="We built no new features. We redesigned where we placed existing credentials. Signup conversion improved 41%. This is not a marketing optimization — it's product architecture." />
          <Insight num="04" title="The first-time user segment sets your brand's reputation" body="34% of users were first-time fintech users. They are the most anxiety-prone, the most trust-sensitive, and the most likely to share their experience (good or bad). Designing for them designs for everyone." />
          <Insight num="05" title="Refund guarantees reduce anxiety for products that don't need them" body="Our refund claim rate was 0.4%. But the 14-day refund guarantee increased Trust-First conversion by 9%. Users rarely use the guarantee — they just need it to exist. The cost is near-zero; the benefit is real." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Failure Points</h2>
        <div className="space-y-4">
          <FailurePoint title="Too many trust signals created doubt" why="V1 trust redesign had 9 trust signals on the homepage. User testing showed: too many signals looked desperate. 'Why do they need to prove themselves so much?'" fix="Reduced to 4 primary trust signals — each in a distinct zone. Less is more credible when each signal is strong." />
          <FailurePoint title="Stock photography in testimonials undermined trust" why="Legal team initially rejected using real user photos. We used stock photography. User testing: 'These testimonials look fake.'" fix="Replaced with real user first name + city + initial only (no photo). 'Ritu M., Pune' feels more real than a stock photo with a full name." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Future Evolution</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Segment-Specific Trust Paths" body="Detect user segment from entry behavior — Trust-First vs Feature-First — and serve the appropriate trust architecture before they experience anxiety." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Live Trust Indicators" body="'143 people compared today.' 'Last transaction: 2 minutes ago.' Real-time activity signals that normalize usage and reduce 'is this even working?' anxiety." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Trust Signal A/B Continuous" body="Continuous testing of trust signal variants — different review formats, different regulatory signal placements — maintained as an ongoing optimization program." />
        </div>
        <BlockQuote>In fintech, the most important design question is not 'What do users want?' It's 'What are users afraid of?' Answer that question first — then design the product.</BlockQuote>
      </section>
    </div>
  );
}
