export default function Process() {
  const steps = [
    { title: "Understand", desc: "Deep dive into business metrics, user data, and current friction points." },
    { title: "Diagnose", desc: "Identify leverage points where small changes create big impact." },
    { title: "Design", desc: "Craft data-backed solutions for product, pricing, and GTM." },
    { title: "Execute", desc: "Ship fast, measure results, and iterate for continuous improvement." }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How I Work</h2>
          <h3 className="text-3xl font-serif font-bold">Simple, effective process</h3>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative pt-4 md:pt-0 group">
                <div className="flex flex-col items-center text-center">
                  <div className="h-24 w-24 rounded-full bg-background border-4 border-muted group-hover:border-primary transition-colors flex items-center justify-center mb-6 z-10 shadow-sm">
                    <span className="text-3xl font-serif font-bold text-muted-foreground group-hover:text-primary transition-colors">0{i + 1}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
