export default function Trust() {
  const metrics = [
    { label: "Years Experience", value: "9+" },
    { label: "Daily Transactions", value: "10s" },
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
        
        <div className="mt-12 pt-8 border-t border-border/40">
          <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">Industries I've Worked In</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">Fintech</span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">Mobility</span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">SaaS</span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">Marketplaces</span>
            <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm border border-primary/20">E-commerce</span>
          </div>
        </div>
      </div>
    </section>
  );
}
