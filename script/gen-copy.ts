/**
 * Generates copy/{platform}.md — every field a platform asks for, written to
 * the bucket lengths, ready to paste.
 *
 * Bios are written per platform rather than templated. The brief requires
 * under 40% sentence overlap between any two, and a template cannot clear that
 * — more importantly, a founder reading two of these back to back should not
 * feel they read the same paragraph twice. Each takes a different angle on the
 * same verifiable facts.
 *
 * Every field is labelled with the bucket it was written to. Observed platform
 * limits go into tracker.csv during signup, and this regenerates against them.
 */
import { writeFileSync, mkdirSync } from "fs";
import { pathToFileURL } from "url";
import { PROOF } from "../shared/proof";
import { OFFERS } from "../shared/services";

const SITE = "pmyogesh.com";

/** Facts. Nothing here may be asserted that the proof database cannot back. */
const N = Object.fromEntries(PROOF.map((c) => [c.id, `${c.value} ${c.label}`]));

interface PlatformCopy {
  platform: string;
  angle: string;
  headline70: string;
  headline120: string;
  oneLiner150: string;
  bio300: string;
  bio1200: string;
  skills: string[];
  deepLink: string;
  notes?: string;
}

const COPY: PlatformCopy[] = [
  {
    platform: "upwork",
    angle: "Diagnostic-first. Buyers here are comparing many profiles, so lead with the distinguishing number.",
    headline70: "Product Growth & Monetisation Consultant — scaled an app to 45M+ MAU",
    headline120: "Product Growth & Monetisation Consultant | 45M+ MAU scaled, 1200% revenue growth | Fintech & consumer apps",
    oneLiner150: "I find the one step in your funnel that is actually costing you revenue, then fix it. Nine years on fintech and consumer products.",
    bio300:
      "I work on the part of a product that decides whether it makes money: where users drop out, and whether the ones you acquire ever pay back.\n\nNine years across fintech, mobility and consumer apps in India. I scaled a consumer utility from 3.8M to 45M+ monthly active users, rebuilt a broken insurance funnel into 1200% revenue growth over twelve months, and cut blended acquisition cost 30% without losing volume — by changing who was targeted rather than what was spent.\n\nMost engagements start with a two-week diagnostic, because committing to a fix before agreeing what is broken wastes both our time. Written up with the numbers at " + SITE + ".\n\nBased in Jaipur, India. Working remotely with teams across time zones.",
    bio1200: "",
    skills: ["Product Management", "Growth Strategy", "Monetization", "Pricing Strategy", "Conversion Rate Optimization", "Product Analytics", "A/B Testing", "User Retention", "SEO", "Fintech", "Mobile App Development", "Product Strategy", "Funnel Optimization", "Product Roadmapping", "Marketplace"],
    deepLink: "https://" + SITE + "/case-study/carinfo-45m-mau",
    notes:
      "LINK POLICY (reported): Upwork permits external portfolio links but forbids linking to a page displaying contact information. " +
      SITE + "/contact shows an email, so link the case study above, not the root, and confirm that page carries no email before submitting.",
  },
  {
    platform: "contra",
    angle: "Independent-work platform; tone is peer-to-peer rather than vendor. Lead with the work, not the credential.",
    headline70: "Product growth and monetisation for fintech and consumer apps",
    headline120: "Growth & monetisation consultant — funnels, pricing, programmatic SEO | 45M+ MAU scaled | Jaipur, India",
    oneLiner150: "Nine years fixing the gap between a product people use and a product that earns. Fintech, consumer apps, marketplaces.",
    bio300:
      "Growth problems are rarely where the dashboard points. The step losing the most is almost always upstream of the one the data blames, and it is usually the least instrumented part of the product.\n\nThat is the work I do. Nine years across fintech, mobility and consumer apps: a utility product taken from 3.8M to 45M+ monthly active users on organic and referral rather than spend; an insurance funnel rebuilt through six parallel interventions into 1200% revenue growth; acquisition cost down 30% by cutting the channel that looked cheapest.\n\nThirty case studies at " + SITE + ", including the interventions that failed.\n\nJaipur, India. Remote.",
    bio1200: "",
    skills: ["Product Strategy", "Growth", "Monetization", "Pricing", "Programmatic SEO", "Retention", "Funnel Optimization", "Product Analytics", "Fintech", "Consumer Apps", "Marketplaces", "A/B Testing", "PRDs", "ML-driven Growth", "Automation"],
    deepLink: "https://" + SITE + "/case-study/insurance-funnel-1200-growth",
  },
  {
    platform: "topmate",
    angle: "1:1 sessions. Buyer wants a specific problem solved in 30 minutes, so the bio should name problems, not services.",
    headline70: "Product growth, monetisation & funnel diagnosis — 1:1 for founders",
    headline120: "Bring me a funnel that isn't converting | Product growth & monetisation | 45M+ MAU, 1200% revenue growth",
    oneLiner150: "Thirty minutes on one problem: why users don't activate, why they don't pay, or why acquisition costs more than it returns.",
    bio300:
      "Book me when you have a specific number that will not move.\n\nThe ones I am most useful on: users install and never reach the thing the product is for; revenue is flat while usage grows; acquisition cost keeps climbing and you cannot tell which channel is responsible; you are about to change pricing and are not sure the price is the problem.\n\nNine years across fintech and consumer apps. Scaled a consumer utility to 45M+ monthly active users, grew insurance revenue 1200% in twelve months by fixing the funnel rather than the ad spend, and took blended CAC down 30%.\n\nCome with your numbers. Thirty case studies at " + SITE + " if you want to see how I work first.",
    bio1200: "",
    skills: ["Product Growth", "Monetisation", "Pricing", "Activation", "Retention", "Funnel Analysis", "Product Strategy", "Fintech", "Consumer Apps", "SEO", "Product Analytics", "A/B Testing", "Roadmapping", "Marketplaces", "Career Advice"],
    deepLink: "https://" + SITE + "/product-growth-score",
  },
  {
    platform: "crunchbase",
    angle: "Entity anchor. Factual, third-person, no sales tone — this page exists to be a citation.",
    headline70: "Product Growth & Monetisation Consultant; Founder, TripMojo",
    headline120: "Yogesh Yadav — Product Growth & Monetisation Consultant, fintech and consumer apps. Founder, TripMojo. Jaipur, India.",
    oneLiner150: "Product growth and monetisation consultant working with fintech, consumer app and marketplace companies. Founder of TripMojo.",
    bio300:
      "Yogesh Yadav is a product growth and monetisation consultant based in Jaipur, India, working with fintech, consumer app and marketplace companies.\n\nOver nine years he has held product roles at Loanwiser (lending), CarInfo/AppFlix (consumer mobility), KNIPEX Tools and UpGrowth, where he led product across four products. His work at CarInfo took the product from 3.8M to 45M+ monthly active users, and an insurance funnel rebuild delivered 1200% revenue growth over twelve months.\n\nHe writes about product growth, monetisation and programmatic SEO at " + SITE + ", where thirty case studies document the work. He is the founder of TripMojo.",
    bio1200: "",
    skills: ["Product Management", "Growth", "Monetization", "Fintech", "Consumer Internet", "SEO", "Marketplaces"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
  },
  {
    platform: "peerlist",
    angle: "Builder network. Show the systems built, not the outcomes claimed.",
    headline70: "Product growth & monetisation — funnels, pricing, programmatic SEO",
    headline120: "Building growth systems for fintech and consumer apps | Programmatic SEO, funnels, pricing | 45M+ MAU",
    oneLiner150: "I build the systems that make products grow: programmatic SEO engines, activation funnels, pricing and retention loops.",
    bio300:
      "I build growth systems rather than run growth campaigns. The difference matters: a campaign stops the day the spend does, a system compounds.\n\nWhat that has looked like: a programmatic SEO engine that brought organic acquisition cost to ₹31 per user and eventually carried 61% of acquisition; a trigger-based notification system for 1M+ users that lifted revenue per user 34% while cutting unsubscribes 61%; a CRM rebuilt from collapsing at 22K transactions to handling 180K+ monthly at 99.6% uptime.\n\nNine years, fintech and consumer apps. Thirty case studies with the architecture and the failures at " + SITE + ".",
    bio1200: "",
    skills: ["Product Management", "Growth Engineering", "Programmatic SEO", "Monetisation", "Pricing", "Retention", "Product Analytics", "Fintech", "Consumer Apps", "A/B Testing", "Automation", "n8n", "PRDs", "Marketplaces", "ML"],
    deepLink: "https://" + SITE + "/case-study/seo-0-to-100k",
  },
  {
    platform: "clutch",
    angle: "B2B buyer directory. Formal, service-led, scannable — the reader is shortlisting.",
    headline70: "Product Growth & Monetisation Consulting — Fintech & Consumer Apps",
    headline120: "Product growth, monetisation and funnel consulting for fintech and consumer app companies | Jaipur, India",
    oneLiner150: "Independent product growth and monetisation consulting. Diagnostics, funnel and monetisation audits, and hands-on delivery.",
    bio300:
      "Independent product growth and monetisation consulting for fintech, consumer app and marketplace companies.\n\nServices: product growth diagnostics, growth funnel audits, monetisation and pricing audits, 90-day growth sprints, and fractional product growth leadership.\n\nTrack record includes scaling a consumer product from 3.8M to 45M+ monthly active users, 1200% insurance revenue growth in twelve months, a 30% reduction in blended customer acquisition cost with volume held, and a platform rebuild supporting 180K+ monthly transactions at 99.6% uptime.\n\nNine years across five industries. Thirty documented case studies at " + SITE + ". Based in Jaipur, Rajasthan, India, working with clients remotely.",
    bio1200: "",
    skills: ["Product Consulting", "Growth Strategy", "Monetization Strategy", "Pricing", "Conversion Optimization", "Product Analytics", "Fintech Consulting", "Mobile App Growth", "SEO Strategy", "Marketplace Strategy"],
    deepLink: "https://" + SITE + "/consulting/product-monetisation-consultant",
    notes: "rel (reported): Clutch's own help centre states the profile 'Visit Website' link is not a follow link. Do it for the entity signal and Leaders Matrix eligibility, not for PageRank. NAP must match GBP and GoodFirms exactly.",
  },
  {
    platform: "about-me",
    angle: "Pure entity page. Short, human, links outward.",
    headline70: "Product growth & monetisation consultant, Jaipur",
    headline120: "Yogesh Yadav — product growth and monetisation consultant for fintech and consumer apps. Jaipur, India.",
    oneLiner150: "I help fintech and consumer products grow revenue, not just users. Nine years, thirty case studies, all with the numbers attached.",
    bio300:
      "I am a product growth and monetisation consultant in Jaipur, India.\n\nMy work is with fintech and consumer apps, on the questions that decide whether a product earns: where the funnel leaks, whether acquisition pays back, and when to ask a user for money.\n\nNine years of it, across Loanwiser, CarInfo, KNIPEX and UpGrowth. The results I am most often asked about are 45M+ monthly active users at CarInfo and 1200% insurance revenue growth in a year.\n\nEverything is written up, including what did not work, at " + SITE + ".",
    bio1200: "",
    skills: ["Product Growth", "Monetisation", "Fintech", "Consumer Apps", "SEO", "Pricing", "Retention"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
  },
];

/** Sentence-level overlap between two bios, per the brief's ≤40% rule. */
function overlap(a: string, b: string): number {
  const norm = (t: string) =>
    t.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  const sents = (t: string) =>
    norm(t).split(/(?<=\.)\s+|\n+/).map((s) => s.trim()).filter((s) => s.split(" ").length > 4);
  const A = sents(a), B = sents(b);
  if (!A.length || !B.length) return 0;
  // Jaccard over 5-word shingles: catches reworded reuse, not just identical lines.
  const shingles = (ss: string[]) => {
    const out = new Set<string>();
    for (const s of ss) {
      const w = s.split(" ");
      for (let i = 0; i + 5 <= w.length; i++) out.add(w.slice(i, i + 5).join(" "));
    }
    return out;
  };
  const sa = shingles(A), sb = shingles(B);
  let shared = 0;
  sa.forEach((x) => { if (sb.has(x)) shared++; });
  return Math.round((shared / Math.min(sa.size, sb.size)) * 100);
}

export function genCopy() {
  mkdirSync("copy", { recursive: true });

  for (const c of COPY) {
    const md = `# ${c.platform}

**Angle:** ${c.angle}

${c.notes ? `> **${c.notes}**\n` : ""}
## Headline — bucket 70
\`\`\`
${c.headline70}
\`\`\`
_${c.headline70.length} chars_

## Headline — bucket 120
\`\`\`
${c.headline120}
\`\`\`
_${c.headline120.length} chars_

## One-liner — bucket 150
\`\`\`
${c.oneLiner150}
\`\`\`
_${c.oneLiner150.length} chars_

## Bio — bucket 300
\`\`\`
${c.bio300}
\`\`\`
_${c.bio300.length} chars_

## Skills (${c.skills.length})
${c.skills.map((s) => `- ${s}`).join("\n")}

## Link slots
- Primary: \`https://${SITE}\`
- Deep link (rotation): \`${c.deepLink}\`
- Unlinked citation: "${SITE}" appears as plain text in the bio above.

## Offers
${OFFERS.map((o) => `- **${o.name}** (${o.timeframe}) — ${o.outcome}\n  - Price: NEEDS_INPUT`).join("\n")}

---
_Written to the bucket set. Record the platform's observed limits in tracker.csv during signup, then regenerate._
`;
    writeFileSync(`copy/${c.platform}.md`, md, "utf8");
  }

  console.log(`[copy] wrote ${COPY.length} files to copy/`);
  console.log("[copy] bio uniqueness matrix (shared 5-word shingles, lower is better):");
  const names = COPY.map((c) => c.platform);
  let worst = 0, worstPair = "";
  console.log("        " + names.map((n) => n.slice(0, 6).padStart(7)).join(""));
  for (const a of COPY) {
    const row = COPY.map((b) => (a === b ? "     —" : String(overlap(a.bio300, b.bio300)).padStart(6) + "%"));
    console.log(a.platform.slice(0, 7).padEnd(8) + row.join(""));
    for (const b of COPY) {
      if (a === b) continue;
      const o = overlap(a.bio300, b.bio300);
      if (o > worst) { worst = o; worstPair = `${a.platform}/${b.platform}`; }
    }
  }
  console.log(`[copy] highest overlap: ${worst}% (${worstPair}) — limit is 40%`);
  if (worst > 40) throw new Error(`[copy] bio overlap ${worst}% exceeds the 40% limit`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  genCopy();
}
