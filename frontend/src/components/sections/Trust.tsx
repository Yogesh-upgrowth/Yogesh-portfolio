import { useInView } from "@/hooks/useInView";

// Static — never recreated on render
const metrics = [
  { label: "Years Experience", value: "9+" },
  { label: "Daily Transactions", value: "10K+" },
  { label: "DAU Scaled To", value: "1.2M+" },
  { label: "Team Size Led", value: "250+" },
];

const industryTags = ["Fintech", "Mobility", "SaaS", "Marketplaces", "E-commerce"];

export default function Trust() {
  const { ref: metricsRef, inView: metricsVisible } = useInView<HTMLDivElement>();
  const { ref: tagsRef, inView: tagsVisible } = useInView<HTMLDivElement>();

  return (
    <section className="bg-muted/30 border-y border-border/40 py-8 md:py-12" style={{ contentVisibility: "auto", containIntrinsicSize: "0 180px" }}>
      <div className="container px-4 mx-auto">
        <div
          ref={metricsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-12 reveal-stagger ${metricsVisible ? "in-view" : ""}`}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center space-y-1 md:space-y-2">
              <p className="text-[2.25rem] md:text-4xl font-serif font-bold text-primary leading-none">{metric.value}</p>
              <p className="text-[10px] md:text-sm lg:text-base font-medium text-muted-foreground uppercase tracking-wider px-1">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border/40">
          <p className="text-center text-[10px] md:text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 md:mb-6">
            Industries I've Worked In
          </p>
          <div
            ref={tagsRef}
            className={`flex flex-wrap justify-center gap-2 md:gap-4 reveal-stagger ${tagsVisible ? "in-view" : ""}`}
          >
            {industryTags.map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 md:px-5 md:py-2 bg-primary/10 text-primary font-semibold rounded-full text-xs md:text-sm border border-primary/20 hover-lift active:scale-95 transition-transform">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
