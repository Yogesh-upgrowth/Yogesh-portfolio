import { proofStats } from "@shared/proof";
import { useInView } from "@/hooks/useInView";

// Every headline number comes from the proof database, which records where it
// came from and fails the build if two pages disagree.
const metrics = proofStats([
  "years-experience",
  "daily-transactions",
  "dau-scaled",
  "team-led",
]);

const industryTags = ["Fintech", "Mobility", "SaaS", "Marketplaces", "E-commerce"];

export default function Trust() {
  const { ref: metricsRef, inView: metricsVisible } = useInView<HTMLDivElement>();
  const { ref: tagsRef, inView: tagsVisible } = useInView<HTMLDivElement>();

  return (
    <section className="bg-muted/30 border-y border-border/40 py-12" style={{ contentVisibility: "auto", containIntrinsicSize: "0 180px" }}>
      <div className="container px-4 mx-auto">
        <div
          ref={metricsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal-stagger ${metricsVisible ? "in-view" : ""}`}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center space-y-2">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">{metric.value}</p>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
            Industries I've Worked In
          </p>
          <div
            ref={tagsRef}
            className={`flex flex-wrap justify-center gap-4 reveal-stagger ${tagsVisible ? "in-view" : ""}`}
          >
            {industryTags.map((tag) => (
              <span key={tag} className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20 hover-lift">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
