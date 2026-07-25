import React from "react";
import { AlertTriangle, Lightbulb, CheckCircle2, TrendingUp, Zap, Target, Layers } from "lucide-react";

export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:flex my-6 p-5 rounded-xl bg-primary/5 border border-primary/20 gap-4">
        <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p className="text-foreground font-medium leading-relaxed">{children}</p>
      </div>
      <div className="md:hidden my-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary shrink-0" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Insight</span>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-relaxed">{children}</p>
      </div>
    </>
  );
}

export function ProblemBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:flex my-6 p-5 rounded-xl bg-destructive/5 border border-destructive/20 gap-4">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <p className="text-foreground font-medium leading-relaxed">{children}</p>
      </div>
      <div className="md:hidden my-6 p-4 rounded-xl bg-destructive/5 border border-destructive/20 flex flex-col gap-3 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-destructive/40" />
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-destructive">Problem</span>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-relaxed">{children}</p>
      </div>
    </>
  );
}

export function TakeawayBox({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden md:flex my-8 p-6 rounded-xl bg-foreground text-background gap-4">
        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <p className="font-semibold leading-relaxed text-lg">{children}</p>
      </div>
      <div className="md:hidden my-6 p-5 rounded-xl bg-foreground text-background flex flex-col gap-3 shadow-xl shadow-foreground/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <CheckCircle2 className="w-16 h-16" />
        </div>
        <div className="flex items-center gap-2 relative z-10">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Key Takeaway</span>
        </div>
        <p className="font-semibold leading-relaxed text-base relative z-10">{children}</p>
      </div>
    </>
  );
}

export function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <>
      <blockquote className="hidden md:block my-8 pl-5 border-l-4 border-primary">
        <p className="text-xl font-serif font-bold text-foreground leading-relaxed italic">{children}</p>
      </blockquote>
      <blockquote className="md:hidden my-8 pl-4 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent py-3 pr-4 rounded-r-xl">
        <p className="text-lg font-serif font-bold text-foreground leading-relaxed italic">"{children}"</p>
      </blockquote>
    </>
  );
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <>
      <div className="hidden md:flex items-center gap-4 my-10">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="md:hidden flex items-center gap-4 my-8">
        <div className="flex-1 h-px bg-border" />
        <span className="text-[10px] font-extrabold tracking-widest uppercase text-muted-foreground">{label}</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    </>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <>
      <div className="hidden md:block my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/60 border-b border-border">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-bold text-foreground text-xs uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-foreground/80">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden my-6 space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="rounded-xl border border-border bg-background shadow-sm overflow-hidden">
            <div className="bg-muted/40 px-4 py-3 border-b border-border">
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground mb-1">{headers[0]}</span>
              <span className="block font-bold text-foreground">{row[0]}</span>
            </div>
            <div className="p-4 space-y-3">
              {row.slice(1).map((cell, j) => (
                <div key={j} className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{headers[j + 1]}</span>
                  <span className="text-sm text-foreground/90 font-medium">{cell}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function MetricCard({ value, label, sub, color }: { value: string; label: string; sub: string; color: string }) {
  return (
    <>
      <div className="hidden md:block p-5 rounded-xl border border-border bg-background">
        <p className={`text-2xl font-serif font-bold mb-1 ${color}`}>{value}</p>
        <p className="font-semibold text-foreground text-sm mb-0.5">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
      <div className="md:hidden p-5 rounded-xl border border-border bg-background min-w-[240px] shrink-0 snap-center shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
        <p className={`text-3xl font-serif font-bold mb-2 ${color}`}>{value}</p>
        <p className="font-bold text-foreground text-sm mb-1">{label}</p>
        <p className="text-xs text-muted-foreground font-medium">{sub}</p>
      </div>
    </>
  );
}

export function FrameworkDimension({ icon, title, body, color = "bg-primary/5 border-primary/20" }: {
  icon: React.ReactNode; title: string; body: string; color?: string
}) {
  return (
    <>
      <div className={`hidden md:block p-5 rounded-xl border ${color}`}>
        <div className="mb-3">{icon}</div>
        <p className="font-bold text-foreground mb-2">{title}</p>
        <p className="text-sm text-foreground/70 leading-relaxed">{body}</p>
      </div>
      <div className={`md:hidden p-5 rounded-xl border ${color} min-w-[260px] shrink-0 snap-center`}>
        <div className="mb-4 bg-background/50 w-10 h-10 rounded-lg flex items-center justify-center border border-border/50">{icon}</div>
        <p className="font-bold text-foreground mb-2 text-base">{title}</p>
        <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
      </div>
    </>
  );
}

export function Phase({ num, period, title, actions, result, color = "border-blue-200 bg-blue-50", resultColor = "text-blue-700" }: {
  num: string; period: string; title: string; actions: string[]; result: string;
  color?: string; resultColor?: string;
}) {
  return (
    <>
      <div className={`hidden md:block p-6 rounded-xl border ${color}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{num} · {period}</span>
            <p className="font-bold text-foreground text-lg">{title}</p>
          </div>
          <p className={`text-sm font-bold ${resultColor} hidden sm:block`}>→ {result}</p>
        </div>
        <ul className="space-y-1">
          {actions.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
              <span className="text-primary mt-1">✓</span>{a}
            </li>
          ))}
        </ul>
        <p className={`text-sm font-bold ${resultColor} mt-3 sm:hidden`}>→ {result}</p>
      </div>
      <div className={`md:hidden p-5 rounded-xl border ${color} min-w-[280px] shrink-0 snap-center flex flex-col`}>
        <div className="flex flex-col justify-between mb-4 gap-2">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-background/50 border border-border/50 text-foreground/70 mb-2">{num} · {period}</span>
            <p className="font-bold text-foreground text-lg">{title}</p>
          </div>
        </div>
        <ul className="space-y-2 flex-1 mb-4">
          {actions.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
              <span className="text-primary mt-0.5">✓</span>{a}
            </li>
          ))}
        </ul>
        <div className={`mt-auto pt-3 border-t border-border/30`}>
          <p className={`text-sm font-bold ${resultColor}`}>Result: {result}</p>
        </div>
      </div>
    </>
  );
}

export function Insight({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <>
      <div className="hidden md:flex gap-5">
        <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{num}</span>
        <div>
          <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary shrink-0" /> {title}
          </h3>
          <p className="text-foreground/70 leading-relaxed text-sm">{body}</p>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-3 p-4 rounded-xl border border-border bg-muted/20 min-w-[260px] shrink-0 snap-center">
        <div className="flex items-center gap-3 border-b border-border/50 pb-3">
          <span className="text-3xl font-serif font-bold text-primary/30 shrink-0">{num}</span>
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-foreground/80 leading-relaxed text-sm mt-2">{body}</p>
        </div>
      </div>
    </>
  );
}

export function FailurePoint({ title, why, fix }: { title: string; why: string; fix: string }) {
  return (
    <>
      <div className="hidden md:block p-5 rounded-xl border border-destructive/20 bg-destructive/5">
        <p className="font-bold text-foreground mb-1 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-destructive" /> ✕ {title}
        </p>
        <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Why it broke</p>
            <p className="text-foreground/70 leading-relaxed">{why}</p>
          </div>
          <div>
            <p className="font-semibold text-primary text-xs uppercase tracking-wider mb-1">What fixed it</p>
            <p className="text-foreground/70 leading-relaxed">{fix}</p>
          </div>
        </div>
      </div>
      <div className="md:hidden p-5 rounded-xl border border-destructive/20 bg-destructive/5 min-w-[280px] shrink-0 snap-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-destructive/10 rounded-bl-full" />
        <p className="font-bold text-foreground mb-4 flex items-center gap-2 text-base">
          <AlertTriangle className="h-5 w-5 text-destructive" /> {title}
        </p>
        <div className="mt-3 flex flex-col gap-4 text-sm">
          <div className="bg-background/50 p-3 rounded-lg border border-border/50">
            <p className="font-extrabold text-muted-foreground text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1.5"><span className="text-destructive">✕</span> Why it broke</p>
            <p className="text-foreground/80 leading-relaxed font-medium">{why}</p>
          </div>
          <div className="bg-background/50 p-3 rounded-lg border border-border/50">
            <p className="font-extrabold text-primary text-[10px] uppercase tracking-wider mb-2 flex items-center gap-1.5"><span>✓</span> What fixed it</p>
            <p className="text-foreground/80 leading-relaxed font-medium">{fix}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function FutureCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <>
      <div className="hidden md:block p-5 rounded-xl border border-primary/20 bg-primary/5">
        <div className="mb-3">{icon}</div>
        <p className="font-bold text-foreground mb-1">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
      </div>
      <div className="md:hidden p-5 rounded-xl border border-primary/20 bg-primary/5 min-w-[240px] shrink-0 snap-center">
        <div className="mb-3 bg-background/50 w-10 h-10 rounded-lg flex items-center justify-center border border-primary/10">{icon}</div>
        <p className="font-bold text-foreground mb-2">{title}</p>
        <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
      </div>
    </>
  );
}

export const iconProps = { className: "h-5 w-5 text-primary" };
export const greenIconProps = { className: "h-5 w-5 text-green-600" };
export const purpleIconProps = { className: "h-5 w-5 text-purple-600" };

export { TrendingUp, Zap, Target, Layers, Lightbulb };
