import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/20 border-y border-border/50">
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-12">What People Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder 1 */}
          <div className="p-8 bg-background rounded-2xl border border-border/60 shadow-sm relative">
            <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
            <div className="mt-4 space-y-4">
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded mx-auto" />
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded mx-auto" />
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded mx-auto" />
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
              <div className="text-left space-y-2">
                <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                <div className="h-3 w-16 bg-muted animate-pulse rounded" />
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              "Space reserved for a future client testimonial. This layout is ready to showcase social proof once available."
            </p>
          </div>

          {/* Placeholder 2 */}
          <div className="p-8 bg-background rounded-2xl border border-border/60 shadow-sm relative">
            <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
            <div className="mt-4 space-y-4">
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded mx-auto" />
              <div className="h-4 w-5/6 bg-muted animate-pulse rounded mx-auto" />
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded mx-auto" />
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
              <div className="text-left space-y-2">
                <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                <div className="h-3 w-16 bg-muted animate-pulse rounded" />
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground italic">
              "Space reserved for a future client testimonial. This layout is ready to showcase social proof once available."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
