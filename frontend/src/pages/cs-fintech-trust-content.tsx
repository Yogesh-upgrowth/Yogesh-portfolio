import { Shield, AlertTriangle, Brain, Target, BarChart3, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function FintechTrustContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Trust Is Invisible — Until It Breaks</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We learned this the hard way in Q2 2022. A WhatsApp forward misidentified our platform as being associated with a crypto scam (it wasn't — wrong company, similar name). Within 72 hours, our daily active users dropped 31%. Signups fell 44%.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The users who left weren't irrationally suspicious. They were people making financial decisions — decisions where the cost of trusting the wrong platform could be catastrophic. When an uncertain signal appeared, they did the rational thing: they stopped.</p>
        <InsightBox>Trust in fintech is not built through features. It's built through consistent, specific, credible signals that accumulate over time — and it's destroyed almost instantly when contradicted. The rebuild took 4 months. The breakdown took 72 hours.</InsightBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">What came out of that crisis was a systematic audit of every trust signal across the product — and a redesign of the trust architecture that made us more resilient to future reputation shocks, while also lifting baseline conversion by 34%.</p>
      </section>

      <SectionDivider label="The Trust Audit" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Were Doing Right and Wrong</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We ran a systematic trust audit post-crisis: every page, every communication, every touchpoint. We rated each on trust signal strength and trust signal consistency. The results were mixed.</p>
        <DataTable
          headers={["Touchpoint", "Trust Signals Present", "Trust Signal Quality", "Gap"]}
          rows={[
            ["Homepage", "IRDAI logo, 'secure' badge", "Weak — logos only", "No credibility context, no user evidence"],
            ["Comparison Results Page", "None", "None", "Users making financial decisions with zero trust reinforcement"],
            ["Checkout/Application", "HTTPS indicator, secure payment badge", "Weak — generic", "No specific regulatory disclosure, no review evidence"],
            ["Email Communications", "Company name + logo", "Weak", "No clear sender identity, easily spoofed appearance"],
            ["Support (chat/phone)", "Response time mentioned", "Medium", "No agent identity or credentials shown"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">The most critical gap: the comparison results page — where users were actively making decisions — had zero trust reinforcement. We were asking users to trust data that would inform significant financial decisions without giving them a single reason to.</p>
      </section>

      <SectionDivider label="Types of Trust" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Four Types of Trust in Fintech</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Through the audit and user interviews during the rebuild, we identified four distinct trust dimensions — each requiring different signals, each contributing differently to user decision confidence.</p>
        <DataTable
          headers={["Trust Dimension", "User Question", "Signal Type", "Our Previous Score"]}
          rows={[
            ["Institutional Trust", "Is this a legitimate company?", "Regulatory credentials, media mentions", "Low"],
            ["Data Trust", "Can I trust this information?", "Methodology disclosure, data sourcing", "Very Low"],
            ["Security Trust", "Is my data safe?", "Encryption signals, privacy policy clarity", "Medium"],
            ["Social Trust", "Do people like me use this?", "Reviews, ratings, user testimonials", "Low"],
          ]}
        />
        <TakeawayBox>We had been treating trust as a single dimension — "are we trustworthy?" — and addressing it with generic security badges. The redesign needed to address all four dimensions, each at the specific point in the user journey where that dimension was most relevant to the user's decision.</TakeawayBox>
      </section>

      <SectionDivider label="The Rebuild" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Trust Architecture vs Trust Signals</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The distinction we kept coming back to: trust signals (logos, badges, certifications) are necessary but not sufficient. Trust architecture is about where signals appear relative to the decision they're supporting.</p>
        <BlockQuote>A security badge on the homepage doesn't help a user who's uncertain about data accuracy on the comparison results page. Trust signals need to be adjacent to the decisions they're meant to support — not collected on a dedicated "why trust us" page that nobody visits.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The redesign principle: map every user decision point → identify which trust dimension is most relevant at that point → place the appropriate trust signal there, not on the homepage.</p>
      </section>

      <SectionDivider label="The Trust Design System" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Built Into Every Key Touchpoint</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Shield className="h-5 w-5 text-primary" />}
            title="Comparison Results: Data Trust"
            body="Added methodology disclosure panel (collapsible): 'Where does this data come from? Updated every 4 hours from direct provider APIs. Last updated: [timestamp].' Transparency about data sourcing addresses the 'can I trust these numbers?' question directly."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<AlertTriangle className="h-5 w-5 text-green-600" />}
            title="Application Page: Institutional Trust"
            body="IRDAI registration number with direct link to verification on IRDAI website. SEBI-registered investment advisor credentials where applicable. 'Verify our registration' link — puts the credential verification in user's hands, which is more trustworthy than just displaying the badge."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Social Proof: Contextual Reviews"
            body="Reviews displayed at the comparison stage, not just homepage. Specifically: reviews from users who completed a similar comparison (same product category). 'Arun from Hyderabad used this comparison 3 months ago — here's his experience.' Specific > generic."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Email: Identity Architecture"
            body="Every transactional email: signed by a named team member, not 'The Team.' Email footer: regulatory registration number, physical office address, grievance officer contact. Makes spoofing harder; makes authenticity visible."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="The Crisis Response" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How We Responded to the Reputation Incident</h2>
        <div className="space-y-4">
          {[
            { title: "72-Hour Crisis Response", points: ["Published detailed clarification blog post: what we are, what we're not, IRDAI credentials", "WhatsApp community broadcast: named CEO statement with verification links", "Proactive outreach to users who'd deactivated accounts: personal email from founder", "Google and social search: ran branded ads to dominate search for our company name"] },
            { title: "Product Trust Overhaul (4 Months)", points: ["Complete trust audit across all 24 touchpoints in user journey", "Trust signal redesign by journey stage and trust dimension", "Methodology disclosure panel built and deployed on all comparison pages", "Reviews contextual display system built"] },
            { title: "Ongoing Reputation Monitoring", points: ["Social listening tool for brand mentions (especially negative/uncertain)", "Weekly sweep of WhatsApp forwards mentioning company name or similar names", "Designated response team: any trust-threatening mention gets response within 2 hours"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Recovery and Lift</h2>
        <div className="space-y-4">
          <Phase num="Week 1–2" period="Crisis" title="Immediate Response" actions={["Clarification content published", "Branded search ads running within 6 hours", "Personal founder outreach to deactivated users"]} result="DAU stabilized. Signup drop began reversing by Day 8." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2–3" period="Rebuild" title="Trust Architecture Redesign" actions={["Data methodology disclosure on all comparison pages", "Contextual social proof system built", "Email identity architecture overhauled"]} result="Baseline conversion beginning to exceed pre-crisis levels." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 4" period="Full Recovery + Lift" title="Trust Dividend" actions={["All trust redesign live", "A/B test confirmed trust signals driving +34% conversion", "Social listening system operational"]} result="DAU at 118% of pre-crisis levels. Conversion +34% vs pre-crisis baseline." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <MetricCard value="+34%" label="Conversion Rate" sub="vs pre-crisis baseline" color="text-green-600" />
          <MetricCard value="118%" label="DAU Recovery" sub="vs pre-crisis levels" color="text-primary" />
          <MetricCard value="72 hrs" label="Trust Incident Response" sub="from detection to containment" color="text-green-600" />
          <MetricCard value="4" label="Trust Dimensions" sub="systematically addressed" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Crisis Forced Us to Learn</h2>
        <div className="space-y-6">
          <Insight num="01" title="Trust signals need to be adjacent to decisions, not decorative" body="Putting IRDAI credentials on the homepage is credibility theater. Putting verification links on the application page is trust architecture. The user who's entering their personal data for a loan application needs trust signals at that moment — not on a page they visited 10 minutes ago." />
          <Insight num="02" title="Data trust is the most underinvested trust dimension in fintech" body="Financial product comparison platforms are entirely dependent on users believing the data is accurate and current. Our methodology was strong. We just never told anyone about it. Publishing the 'how we collect data' panel added no user burden and improved conversion measurably." />
          <Insight num="03" title="Specific social proof is significantly more effective than aggregated ratings" body="'4.7 stars from 12,400 reviews' is abstract. 'Priya from Mumbai compared bike insurance 2 months ago and saved ₹3,200 — she later checked back for health insurance' is concrete. Specificity is what makes social proof credible rather than decorative." />
          <Insight num="04" title="Reputation monitoring should be a product team function, not PR" body="By the time a reputation incident reaches the PR team, it's already compounding. We now have real-time monitoring for brand mentions including misspellings and similar names. Response time of 2 hours vs 18 hours changes the trajectory of an incident significantly." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Crisis Exposed</h2>
        <div className="space-y-4">
          <FailurePoint title="No reputation monitoring system existed before the incident" why="We had zero visibility into what was being said about us on WhatsApp, Telegram, or social media. The incident was 3 days old before we became aware of it — by which time it had been shared widely enough to drive measurable user behavior change." fix="Implemented social listening covering: our brand name, common misspellings, similar company names, and key competitor names. Weekly digest + real-time alert for negative mentions above threshold volume." />
          <FailurePoint title="Crisis response involved too many approvals" why="First clarification statement took 14 hours to publish because it required legal review, CEO approval, and two rounds of copy revision. Every hour of delay meant more users seeing the unchallenged false claim." fix="Pre-approved crisis communication templates for the 5 most likely reputation scenarios. Templates approved by legal in advance — fills in specifics in real-time, publishes within 2 hours of incident identification." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where Trust Architecture Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Shield className="h-5 w-5 text-primary" />} title="Real-Time Data Freshness Indicator" body="Show users exactly when comparison data was last updated, per provider — not just a general 'updated every 4 hours.' Per-provider freshness improves data trust at the individual comparison level." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="User Reputation Portfolio" body="Opted-in users can share their comparison and purchase history publicly — building a verified track record. 'User since 2021, 4 purchases, all verified' creates peer trust signals that company-generated content can't replicate." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Trust Score Dashboard" body="Internal dashboard tracking trust signal coverage across all touchpoints, conversion correlation by trust signal type, and reputation monitoring health. Trust becomes a measurable product dimension, not an abstract value." />
        </div>
        <BlockQuote>Trust in fintech isn't a design element. It's the foundation that every other feature sits on. When it holds, users don't notice it. When it cracks, nothing else matters until it's repaired.</BlockQuote>
      </section>
    </div>
  );
}
