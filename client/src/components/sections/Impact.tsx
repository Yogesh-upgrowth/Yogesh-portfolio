import { useInView } from "@/hooks/useInView";

const impacts = [
  {
    company: "CarInfo",
    metric: "45M+ Users",
    label: "Monthly Active Users",
    desc: "Scaled platform usage to massive heights through aggressive product optimization and organic growth loops."
  },
  {
    company: "Insurance Funnel",
    metric: "1200% Growth",
    label: "In 1 Year",
    desc: "Scaled monetization by redesigning the entire purchase flow and optimizing conversion levers."
  },
  {
    company: "CRM Platform",
    metric: "180K+ Txns",
    label: "Monthly Transactions",
    desc: "Built a robust CRM handling massive challan transaction volume with high reliability."
  },
  {
    company: "User Acquisition",
    metric: "-30%",
    label: "CAC Reduction",
    desc: "Optimized marketing funnels and landing pages to drastically lower acquisition costs."
  }
];

export default function Impact() {
  const { ref: headRef, inView: headVisible } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsVisible } = useInView<HTMLDivElement>();

  return (
    <section id="impact" className="py-24 bg-foreground text-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal ${headVisible ? "in-view" : ""}`}
        >
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-primary-foreground/70 uppercase mb-3">Proof / Impact</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-background leading-tight">
              Numbers don't lie. <br/>
              <span className="text-primary-foreground/60">Real results, scalable growth.</span>
            </h3>
          </div>
        </div>

        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger ${cardsVisible ? "in-view" : ""}`}
        >
          {impacts.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover-lift hover-glow"
            >
              <div className="text-sm font-medium text-white/50 mb-4 tracking-wider uppercase">{item.company}</div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-serif text-primary">{item.metric}</div>
              <div className="text-lg font-semibold text-white/90 mb-3">{item.label}</div>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
