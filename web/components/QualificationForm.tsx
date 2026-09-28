"use client";

/**
 * The /work-with-me qualification form — 01 §B1 "special", 04 §5.
 *
 * Three fields: stage, MAU/ARR band, problem. It exists to make the first call
 * useful, and to log which archetype the lead landed from so 04 §5's monthly
 * "top 3 problems get a refresh" loop has data to work from.
 *
 * No fourth field. Every extra one costs completions, and anything else can be
 * asked on the call.
 */
import { useState } from "react";
import { bookingUrl, track } from "./analytics/Analytics";

const STAGES = ["Pre-seed", "Seed", "Series A", "Series B+", "Bootstrapped"] as const;
const BANDS = [
  "Under 10K MAU", "10K–100K MAU", "100K–1M MAU", "Over 1M MAU",
  "Under $100K ARR", "$100K–$1M ARR", "Over $1M ARR",
] as const;
const PROBLEMS = [
  "Users sign up but never activate",
  "Revenue is flat while usage grows",
  "Acquisition costs more than it returns",
  "Pricing or packaging feels wrong",
  "Retention drops after the first weeks",
  "Something else",
] as const;

export function QualificationForm({ booking, pageId }: { booking: string; pageId: string }) {
  const [stage, setStage] = useState("");
  const [band, setBand] = useState("");
  const [problem, setProblem] = useState("");
  const ready = stage && band && problem;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!ready) return;
    track({ name: "lead_submitted", params: { stage, band, problem } });
    track({ name: "booking_open", params: { page_id: pageId } });
    const u = new URL(bookingUrl(booking, pageId));
    // Carried into the booking so the call starts from the answers rather than
    // asking them again.
    u.searchParams.set("stage", stage);
    u.searchParams.set("band", band);
    u.searchParams.set("problem", problem);
    window.open(u.toString(), "_blank", "noopener");
  }

  return (
    <form className="qualify" onSubmit={submit}>
      <h2>Start here</h2>
      <p>Three questions, then the booking page. It makes the first call useful.</p>

      <label htmlFor="q-stage">Stage</label>
      <select id="q-stage" value={stage} onChange={(e) => setStage(e.target.value)} required>
        <option value="">Select…</option>
        {STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <label htmlFor="q-band">Scale</label>
      <select id="q-band" value={band} onChange={(e) => setBand(e.target.value)} required>
        <option value="">Select…</option>
        {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>

      <label htmlFor="q-problem">The problem</label>
      <select id="q-problem" value={problem} onChange={(e) => setProblem(e.target.value)} required>
        <option value="">Select…</option>
        {PROBLEMS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <button type="submit" disabled={!ready}>Book a 30-minute call</button>
      <p className="source-pill">
        Opens the booking page in a new tab. Nothing is stored here beyond the
        analytics event, and only if you allowed analytics.
      </p>
    </form>
  );
}
