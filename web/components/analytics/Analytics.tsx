"use client";

/**
 * GA4 with consent — 03-TECHNICAL-SPEC §8.
 *
 * India's DPDP Act means no identifiers before consent, so this ships consent
 * mode denied by default and only upgrades on an explicit choice. The tag also
 * loads after first interaction or 3s idle rather than on paint, because §6
 * budgets the page at 120KB of JS and GA4 alone is a meaningful share of that.
 *
 * A refused or ignored banner leaves analytics denied forever, which is the
 * correct default even though it undercounts.
 */
import { useEffect, useState } from "react";

const STORAGE_KEY = "pmy-consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushConsent(granted: boolean): void {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGa(measurementId: string): void {
  if (document.getElementById("ga4")) return;
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = window.gtag ?? function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: true });
}

export function Analytics({ measurementId }: { measurementId?: string }) {
  const [choice, setChoice] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    if (!measurementId) return;
    // Denied by default, before anything loads.
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = window.gtag ?? function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("consent", "default", {
      analytics_storage: "denied", ad_storage: "denied",
      ad_user_data: "denied", ad_personalization: "denied",
      wait_for_update: 500,
    });

    let stored: string | null = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch { stored = null; }
    if (stored === "granted" || stored === "denied") {
      setChoice(stored);
      pushConsent(stored === "granted");
    }

    // Defer the tag itself: first interaction, or 3s idle (§6).
    let done = false;
    const start = () => {
      if (done) return;
      done = true;
      loadGa(measurementId);
    };
    const t = window.setTimeout(start, 3000);
    const events = ["pointerdown", "keydown", "scroll"] as const;
    for (const ev of events) window.addEventListener(ev, start, { once: true, passive: true });
    return () => {
      window.clearTimeout(t);
      for (const ev of events) window.removeEventListener(ev, start);
    };
  }, [measurementId]);

  function decide(granted: boolean) {
    const v = granted ? "granted" : "denied";
    setChoice(v);
    try { localStorage.setItem(STORAGE_KEY, v); } catch { /* private mode */ }
    pushConsent(granted);
  }

  if (!measurementId || choice !== null) return null;

  return (
    <div className="consent" role="dialog" aria-label="Analytics consent">
      <p>
        I use analytics to see which pages are worth keeping. Nothing is stored
        until you choose.
      </p>
      <div>
        <button type="button" onClick={() => decide(true)}>Allow</button>
        <button type="button" onClick={() => decide(false)}>No thanks</button>
      </div>
    </div>
  );
}

/** Typed event helper — the event set is 03 §8 and nothing else. */
export type GaEvent =
  | { name: "cta_click"; params: { archetype: string; page_id: string; position: string } }
  | { name: "booking_open"; params: { page_id: string } }
  | { name: "lead_submitted"; params: { stage: string; band: string; problem: string } }
  | { name: "tool_run"; params: { tool: string } }
  | { name: "tool_result_share"; params: { tool: string } }
  | { name: "template_download"; params: { slug: string; gated: boolean } }
  | { name: "newsletter_signup"; params: { page_id: string } }
  | { name: "source_click"; params: { domain: string } }
  | { name: "fx_toggle"; params: { to: "INR" | "USD" } };

export function track(ev: GaEvent): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", ev.name, ev.params);
}

/**
 * Booking URL with the page as the UTM campaign, so a booked call can be
 * attributed to the page that produced it (§8).
 */
export function bookingUrl(base: string, pageId: string): string {
  const u = new URL(base);
  u.searchParams.set("utm_source", "pmyogesh");
  u.searchParams.set("utm_medium", "site");
  u.searchParams.set("utm_campaign", pageId);
  return u.toString();
}
