import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Compass, TrendingUp, DollarSign, Layers } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Product Strategy & Roadmapping",
    description: "I help you define 'what' to build and 'why'.",
    approach: "Market analysis, user research, and prioritization frameworks to ensure we're solving the right problems.",
    outcome: "A clear, actionable roadmap aligned with business goals."
  },
  {
    icon: TrendingUp,
    title: "Growth & Funnel Optimization",
    description: "I identify where users drop off and fix it.",
    approach: "Deep-dive analytics, A/B testing, and UX audits to smooth out friction points.",
    outcome: "Higher conversion rates, lower CAC, and better retention."
  },
  {
    icon: DollarSign,
    title: "Monetisation & Pricing Strategy",
    description: "I turn engagement into revenue.",
    approach: "Pricing model analysis, willingness-to-pay research, and upsell loop design.",
    outcome: "Sustainable revenue streams and increased ARPU."
  },
  {
    icon: Layers,
    title: "Platform Scaling & Ops Enablement",
    description: "I prepare your product for scale.",
    approach: "Process automation, tool stack optimization, and team enablement structures.",
    outcome: "A product organization that can scale 10x without breaking."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3">What I Do</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Strategic impact across the entire product lifecycle
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-border/60 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm group rounded-2xl">
              <CardHeader className="p-5 md:p-6 pb-4">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-serif mb-1.5">{service.title}</CardTitle>
                <CardDescription className="text-sm md:text-base text-foreground/80 font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 md:p-6 pt-0 space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <div>
                  <strong className="block text-xs md:text-sm text-foreground mb-1 uppercase tracking-wider font-bold">Approach:</strong>
                  {service.approach}
                </div>
                <div>
                  <strong className="block text-xs md:text-sm text-foreground mb-1 uppercase tracking-wider font-bold">Outcome:</strong>
                  <span className="text-primary/90 font-medium">{service.outcome}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
