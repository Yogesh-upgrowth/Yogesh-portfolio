import { AlertTriangle, Lightbulb, CheckCircle2, TrendingUp, Zap, Target, Layers } from "lucide-react";

export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl bg-primary/5 border border-primary/20 flex gap-4">
      <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

export function ProblemBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 p-5 rounded-xl bg-destructive/5 border border-destructive/20 flex gap-4">
      <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
      <p className="text-foreground font-medium leading-relaxed">{children}</p>
    </div>
  );
}

export function TakeawayBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 rounded-xl bg-foreground text-background flex gap-4">
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <p className="font-semibold leading-relaxed text-lg">{children}</p>
    </div>
  );
}

export function BlockQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 pl-5 border-l-4 border-primary">
      <p className="text-xl font-serif font-bold text-foreground leading-relaxed italic">{children}</p>
    </blockquote>
  );
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function DataTable({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
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
  );
}

export function MetricCard({ value, label, sub, color }: { value: string; label: string; sub: string; color: string }) {
  return (
    <div className="p-5 rounded-xl border border-border bg-background">
      <p className={`text-2xl font-serif font-bold mb-1 ${color}`}>{value}</p>
      <p className="font-semibold text-foreground text-sm mb-0.5">{label}</p>
      <p className="text-xs text-muted-foreground">{sub}</p>
    </div>
  );
}

export function FrameworkDimension({ icon, title, body, color = "bg-primary/5 border-primary/20" }: {
  icon: React.ReactNode; title: string; body: string; color?: string
}) {
  return (
    <div className={`p-5 rounded-xl border ${color}`}>
      <div className="mb-3">{icon}</div>
      <p className="font-bold text-foreground mb-2">{title}</p>
      <p className="text-sm text-foreground/70 leading-relaxed">{body}</p>
    </div>
  );
}

export function Phase({ num, period, title, actions, result, color = "border-blue-200 bg-blue-50", resultColor = "text-blue-700" }: {
  num: string; period: string; title: string; actions: string[]; result: string;
  color?: string; resultColor?: string;
}) {
  return (
    <div className={`p-6 rounded-xl border ${color}`}>
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
  );
}

export function Insight({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="flex gap-5">
      <span className="text-3xl font-serif font-bold text-primary/30 shrink-0 w-10">{num}</span>
      <div>
        <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary shrink-0" /> {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed text-sm">{body}</p>
      </div>
    </div>
  );
}

export function FailurePoint({ title, why, fix }: { title: string; why: string; fix: string }) {
  return (
    <div className="p-5 rounded-xl border border-destructive/20 bg-destructive/5">
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
  );
}

export function FutureCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
      <div className="mb-3">{icon}</div>
      <p className="font-bold text-foreground mb-1">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

export const iconProps = { className: "h-5 w-5 text-primary" };
export const greenIconProps = { className: "h-5 w-5 text-green-600" };
export const purpleIconProps = { className: "h-5 w-5 text-purple-600" };

export { TrendingUp, Zap, Target, Layers, Lightbulb };
