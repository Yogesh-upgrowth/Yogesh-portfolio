import { Users, Brain, Layers, Target, BarChart3, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function MlClusteringInsuranceContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Insurance Industry's Comfortable Lie</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Insurance companies have historically sold one product to "the Indian customer" — a monolithic persona built from aggregated surveys and actuarial tables. Young, salaried, urban, safety-conscious. Send them the same email, the same features, the same pricing tiers.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">When we ran our first clustering analysis on 180,000 insurance platform users, we found not one customer but <strong className="text-foreground">seven distinct behavioral archetypes</strong> — each with different purchase triggers, different price sensitivities, and different preferred features. The industry's comfort with the "average customer" had been leaving significant money on the table.</p>
        <InsightBox>The most surprising finding: our highest-converting segment wasn't the young urban salaried buyer the industry optimizes for. It was a 35–50 age segment we hadn't built a single feature for. They were converting despite the product, not because of it.</InsightBox>
      </section>

      <SectionDivider label="What Triggered the Analysis" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Conversion Rate Anomaly</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We'd noticed an anomaly in our conversion data: a small group of users was converting at 4× the platform average, but their demographics looked ordinary. Same age range, similar cities, similar income proxies. What was different wasn't who they were — it was how they behaved.</p>
        <DataTable
          headers={["Metric", "Platform Average", "High-Converting Anomaly Group", "Difference"]}
          rows={[
            ["Conversion Rate", "6.8%", "28.4%", "+318%"],
            ["Session Count Before Purchase", "3.2", "6.8", "+113%"],
            ["Features Explored", "2.1", "7.4", "+252%"],
            ["Time to Purchase", "4.2 days", "11.3 days", "+169%"],
            ["Return Visit Rate", "31%", "74%", "+139%"],
          ]}
        />
        <p className="text-foreground/80 leading-[1.85] mt-5">The anomaly group took longer, visited more often, explored more features — and converted at 4× the rate. They weren't impulsive. They were <em>thorough</em>. And we were treating them identically to casual browsers.</p>
      </section>

      <SectionDivider label="The Seven Archetypes" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What K-Means Actually Found</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We ran K-means clustering with k=3 through k=12, measuring silhouette scores and business interpretability. k=7 gave us the best combination of statistical separation and explainable behavioral profiles. Here's what we found:</p>
        <DataTable
          headers={["Archetype", "% of Users", "Purchase Trigger", "Avg Premium", "Conversion Rate"]}
          rows={[
            ["The Researcher", "18%", "Feature completeness + comparison depth", "₹18,400", "28.4%"],
            ["The Price Hunter", "22%", "Lowest premium, highest deductible OK", "₹7,200", "19.1%"],
            ["The Loyalty Seeker", "14%", "Known brand, even at premium", "₹22,100", "21.3%"],
            ["The Life-Event Buyer", "11%", "Marriage, child, new vehicle trigger", "₹15,800", "31.2%"],
            ["The Lapsed Renewer", "16%", "Reminder-driven, low-friction renewal", "₹11,400", "44.8%"],
            ["The Feature Maximizer", "9%", "Specific add-ons (zero dep, NCB protect)", "₹24,600", "16.2%"],
            ["The Passive Browser", "10%", "No clear trigger; rarely converts", "—", "2.1%"],
          ]}
        />
        <TakeawayBox>The Lapsed Renewer converted at 44.8% — highest of any archetype — but had almost no product features built for them. Renewal reminders were generic. The renewal flow had 7 steps. They were converting through friction, not because of it.</TakeawayBox>
      </section>

      <SectionDivider label="What It Meant" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">One Product, Seven Different Purchase Journeys</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The insight wasn't just that these segments existed — it was that the product had been designed around one of them (the Researcher, roughly) and three others (Price Hunter, Life-Event Buyer, Lapsed Renewer) were converting significantly while being actively underserved.</p>
        <BlockQuote>We'd built one checkout flow. We'd written one set of email sequences. We'd designed one pricing page. And seven different types of buyers were trying to navigate all of it — some succeeding despite us, most giving up.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The highest-leverage play wasn't building new features. It was routing each archetype to an experience designed for their specific purchase trigger — using existing infrastructure, different sequencing.</p>
      </section>

      <SectionDivider label="The Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Archetype Routing System</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We built a real-time classifier that assigns users to archetypes within their first 3 sessions, then routes them to differentiated experiences. The classifier doesn't ask users to self-identify — it infers from behavior.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-primary" />}
            title="Behavioral Classifier"
            body="Random forest model: session depth, feature usage sequence, time on comparison pages, price filter behavior, brand filter usage. Classifies into one of 7 archetypes at session 3 or after 8+ pageviews — whichever comes first."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-green-600" />}
            title="Experience Routing"
            body="Each archetype gets different: landing page emphasis, email sequence, comparison UI defaults, pricing display order, and support trigger timing. Same underlying product; different journey emphasis based on purchase trigger."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Lapsed Renewer Fast-Track"
            body="Highest-value quick win: Renewal flow reduced from 7 to 3 steps. Pre-filled from previous policy. Single-click renewal for users whose policy expired within 30 days. Conversion rate went from 44.8% to 68.2%."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-orange-600" />}
            title="Life-Event Detection"
            body="Triggered by UTM (wedding searches, baby searches, car searches in preceding days via platform partner signals). Life-Event Buyers shown curated bundles rather than full comparison. Decision simplified."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Build" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Technical Implementation</h2>
        <div className="space-y-4">
          {[
            { title: "Clustering Pipeline", points: ["K-means run on 22-feature behavioral vectors (session-level)", "Cluster stability validated with silhouette scores over 3 months of data", "Archetype labels assigned by business interpretability + statistical separation criteria"] },
            { title: "Real-Time Classifier", points: ["Random forest classifier trained on labeled archetype data (ground truth: eventual cluster assignment)", "Classification triggered at session 3 or 8+ pageviews, stored in user profile", "Confidence threshold: > 70% probability to assign. Below threshold: default to Researcher journey"] },
            { title: "Experience Layer", points: ["Feature flags control which UI variant each archetype sees", "Email system: archetype tag drives sequence selection", "Pricing page: default sort changes by archetype (Price Hunter: price ascending; Loyalty Seeker: brand prominence)"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Started and How It Grew</h2>
        <div className="space-y-4">
          <Phase num="Month 1" period="Clustering Analysis" title="Finding the Seven" actions={["K-means clustering on 180K users across 22 behavioral features", "k=3 to k=12 tested; k=7 selected (silhouette + interpretability)", "Archetypes named, validated with business team"]} result="Seven archetypes confirmed. Lapsed Renewer and Life-Event Buyer identified as highest-leverage quick wins." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 2" period="Quick Wins" title="Lapsed Renewer + Life-Event Flows" actions={["Renewal flow simplified: 7 steps → 3", "Pre-fill from previous policy activated", "Life-Event bundle page built for wedding/baby/car contexts"]} result="Lapsed Renewer CVR: 44.8% → 68.2%. Life-Event CVR: 31.2% → 47.6%." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 3" period="Classifier + Routing" title="Full Archetype System Live" actions={["Real-time classifier built and validated", "All 7 archetype journeys differentiated", "A/B test: archetype routing vs standard journey for Researchers and Price Hunters"]} result="Blended platform CVR: 6.8% → 11.2%" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Across the Platform</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+65%" label="Blended CVR" sub="6.8% → 11.2%" color="text-green-600" />
          <MetricCard value="68.2%" label="Lapsed Renewer CVR" sub="from 44.8% baseline" color="text-primary" />
          <MetricCard value="7" label="Distinct Archetypes" sub="each with tailored journey" color="text-green-600" />
          <MetricCard value="3 steps" label="Renewal Flow" sub="reduced from 7" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Surprised Us</h2>
        <div className="space-y-6">
          <Insight num="01" title="The highest-converting segment was the most underserved" body="The Lapsed Renewer converted at 44.8% despite a 7-step renewal flow — the worst UX on the platform. They were succeeding through sheer intent. Optimizing for their specific need moved the needle faster than any other single change." />
          <Insight num="02" title="K-means found segments business intuition missed entirely" body="We'd never explicitly thought about a 'Life-Event Buyer' archetype. Business intuition categorized these users as 'first-time buyers.' The clustering revealed their distinct behavior pattern, and the tailored experience showed their purchase trigger was entirely different." />
          <Insight num="03" title="Confidence thresholds matter as much as model accuracy" body="A mis-classified user shown the wrong journey had lower conversion than an unclassified user shown the default journey. Setting a confidence threshold (we used 70%) for routing decisions improved outcomes — it's better to not classify than to classify wrongly." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Stumbled</h2>
        <div className="space-y-4">
          <FailurePoint title="Initial clusters were statistically clean but business-meaningless" why="First k=5 clustering produced clean statistical separation but the segments had no interpretable purchase trigger differences. 'Cluster 3' wasn't actionable." fix="Added business interpretability as a first-class criteria alongside silhouette score. Ran qualitative interviews with users from each candidate cluster to validate behavioral interpretation before acting." />
          <FailurePoint title="Feature Maximizer journey over-complicated the comparison UI" why="Assumed Feature Maximizers would convert better with more filter options. Added 12 new filter dimensions. Conversion dropped — too much choice, decision paralysis." fix="Narrowed to 5 most-purchased add-on combinations for that archetype. Showed 'most popular for similar buyers' as default. CVR recovered and exceeded baseline." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where This Goes</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Dynamic Archetype Migration" body="Users can move between archetypes over time — a Price Hunter who becomes a Loyalty Seeker. Tracking archetype migration and re-routing in real-time rather than static assignment." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Predictive Archetype at Acquisition" body="Use pre-acquisition signals (search query, referral source, landing page) to predict archetype before first session. Start the journey correctly from the first pageview." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Cross-Product Archetype Consistency" body="Extend archetypes across product categories. A Price Hunter in insurance is likely a Price Hunter in health or motor. Cross-category archetype consistency for unified personalization." />
        </div>
        <BlockQuote>There is no such thing as "the Indian insurance customer." There are at least seven — each with a different purchase trigger, a different journey, and a different definition of value. Build for all of them.</BlockQuote>
      </section>
    </div>
  );
}
