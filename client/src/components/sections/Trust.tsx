export default function Trust() {
  const metrics = [
    { label: "Years Experience", value: "9+" },
    { label: "Daily Transactions", value: "1000s" },
    { label: "DAU Scaled To", value: "1.2M+" },
    { label: "Team Size Led", value: "50+" },
  ];

  return (
    <section className="bg-muted/30 border-y border-border/40 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary">
                {metric.value}
              </p>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Text-based Logos for minimal clean look */}
          <span className="text-xl font-bold font-serif text-foreground/80">Fintech</span>
          <span className="text-xl font-bold font-serif text-foreground/80">Mobility</span>
          <span className="text-xl font-bold font-serif text-foreground/80">SaaS</span>
          <span className="text-xl font-bold font-serif text-foreground/80">Marketplaces</span>
          <span className="text-xl font-bold font-serif text-foreground/80">E-commerce</span>
        </div>
      </div>
    </section>
  );
}
