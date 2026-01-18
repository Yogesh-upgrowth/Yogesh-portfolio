import { Check } from "lucide-react";

const clientTypes = [
  "Startups (Seed to Series C) needing structure & scale",
  "Founders looking for a product partner",
  "Growth-stage consumer apps hitting a plateau",
  "B2B SaaS teams needing better conversion",
  "Marketplaces & Fintech platforms optimizing transactions"
];

export default function Clients() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">Who I work best with</h2>
        
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {clientTypes.map((type, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-lg text-foreground/80 font-medium">{type}</span>
            </div>
          ))}
          <div className="flex items-center justify-center p-4 rounded-lg border-2 border-dashed border-primary/20 bg-primary/5">
            <span className="text-primary font-bold">Your Company?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
