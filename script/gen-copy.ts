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
import { MARKETPLACE_SERVICES, RATE_CARD } from "../shared/marketplace-services";

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
  {
    platform: "toptal",
    angle: "Screener-first. A human reviewer decides in one pass, so the bio must read as senior operator, not freelancer marketing.",
    headline70: "Senior Product Manager — growth, monetisation, fintech and consumer",
    headline120: "Senior Product Manager | Growth & monetisation | Scaled 3.8M to 45M+ MAU | 9 years fintech, mobility, consumer",
    oneLiner150: "Senior product leader specialising in growth and monetisation for consumer-scale apps. Nine years, four industries, one repeatable method.",
    bio300:
      "I have spent nine years owning products where the hard question was not what to build but why the numbers stopped moving.\n\nAt CarInfo I owned a consumer mobility product through its scale phase, from 3.8M to over 45M monthly active users, with organic and referral carrying the majority of that growth rather than paid spend. At Loanwiser I rebuilt an insurance funnel that produced 1200% revenue growth across twelve months. Along the way I have led teams of 50+ and rebuilt a transaction platform that was failing at 22K monthly transactions into one handling 180K+ at 99.6% uptime.\n\nI work equally in discovery and in delivery: writing the spec, instrumenting the funnel, and staying with the release long enough to know whether it worked.\n\nJaipur, India. Documented work at " + SITE + ".",
    bio1200: "",
    skills: ["Product Management", "Growth Strategy", "Monetization", "Pricing", "Product Discovery", "Roadmapping", "Stakeholder Management", "Product Analytics", "A/B Testing", "Fintech", "Consumer Apps", "Marketplaces", "Team Leadership", "PRDs", "Go-to-Market"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
    notes: "Toptal screening is multi-stage (English, skills review, live test project). Budget 2-4 weeks. Nothing here can be submitted on your behalf.",
  },
  {
    platform: "braintrust",
    angle: "Talent network where clients search by skill tags. Tag coverage matters as much as prose.",
    headline70: "Product & growth lead — funnels, pricing, monetisation, SEO",
    headline120: "Product / growth lead for consumer and fintech apps | Funnel, pricing and SEO systems | 45M+ MAU scaled",
    oneLiner150: "Product and growth lead who ships the instrumentation as well as the strategy. Fintech, consumer apps, marketplaces.",
    bio300:
      "Two kinds of people get hired for growth roles: the ones who write the strategy and the ones who wire it up. I have had to be both, mostly because the handoff between them is where most growth work dies.\n\nRecent shape of the work: taking a consumer utility to 45M+ monthly actives; an insurance funnel rebuild delivering 1200% revenue growth in a year; a notification system for over a million users that raised revenue per user 34% while cutting unsubscribes 61%; a programmatic SEO engine that brought organic acquisition cost to ₹31 and eventually supplied 61% of new users.\n\nI am comfortable owning a number end to end and equally comfortable being the person who tells you the number you are tracking is the wrong one.\n\nWriting and case studies at " + SITE + ".",
    bio1200: "",
    skills: ["Product Management", "Growth", "Monetization", "Pricing Strategy", "SEO", "Programmatic SEO", "Retention", "Activation", "Funnel Optimization", "Product Analytics", "A/B Testing", "Fintech", "Marketplaces", "Automation", "Content Strategy"],
    deepLink: "https://" + SITE + "/case-study/notification-system-34-arpu",
  },
  {
    platform: "ateam",
    angle: "Teams-not-individuals model. Position as someone who can lead a pod, not just contribute to one.",
    headline70: "Product growth lead — can own a growth pod end to end",
    headline120: "Product growth lead | Owns the growth number across product, data and content | 50+ team led | 45M+ MAU",
    oneLiner150: "I lead growth pods: product, analytics and content pulling on one number instead of three separate roadmaps.",
    bio300:
      "Growth pods usually fail for an organisational reason rather than a technical one. Product optimises for shipping, analytics for accuracy, marketing for volume, and nobody owns the compound result.\n\nI have run that seam. Across nine years I have led teams of 50+ people spanning product, engineering partnership and growth, and my job was consistently to make one number move rather than to defend a function. The outputs I point to: 3.8M to 45M+ monthly active users; 1200% insurance revenue growth in twelve months; blended acquisition cost down 30% with volume held, achieved by killing the channel that looked cheapest on a last-click view.\n\nGive me a pod and a number and I will tell you within two weeks which of the two is wrong.\n\n" + SITE + ".",
    bio1200: "",
    skills: ["Product Leadership", "Growth Strategy", "Team Leadership", "Monetization", "Product Analytics", "Funnel Optimization", "Pricing", "Fintech", "Consumer Apps", "Roadmapping", "Stakeholder Management", "A/B Testing", "SEO", "Retention", "Go-to-Market"],
    deepLink: "https://" + SITE + "/case-study/user-acquisition-cac-30",
  },
  {
    platform: "marketerhire",
    angle: "Marketing-side marketplace. Translate product growth into the vocabulary a marketing buyer searches with.",
    headline70: "Growth marketing & monetisation — acquisition, retention, LTV",
    headline120: "Growth marketer with a product background | CAC down 30%, ARPU up 34%, organic CAC ₹31 | Fintech & consumer",
    oneLiner150: "Growth marketing from the product side: I fix the funnel the traffic lands on, not just the traffic.",
    bio300:
      "Most growth marketing engagements end at the click. Mine start there, because the expensive problem is almost always what happens after it.\n\nI come from product rather than agency, which changes what I can touch. Instead of reallocating budget across channels I can change the onboarding step that loses 40% of a cohort, or the price point that is quietly selecting for users who churn. Results that came from working that way: blended customer acquisition cost reduced 30% without giving up volume; revenue per user up 34% on a base of over a million; organic acquisition cost down to ₹31 through a programmatic SEO engine that went on to supply 61% of new users.\n\nNine years, fintech and consumer apps, all of it documented with numbers at " + SITE + ".",
    bio1200: "",
    skills: ["Growth Marketing", "Customer Acquisition", "Retention Marketing", "Lifecycle Marketing", "CRO", "SEO", "Programmatic SEO", "Marketing Analytics", "Attribution", "Pricing", "Monetization", "A/B Testing", "Fintech", "Mobile Growth", "Content Strategy"],
    deepLink: "https://" + SITE + "/consulting/growth-funnel-audit",
  },
  {
    platform: "growth-collective",
    angle: "Vetted growth marketing bench. Buyer wants a named specialism, so lead with the narrowest true one.",
    headline70: "Monetisation & funnel specialist for consumer and fintech apps",
    headline120: "Monetisation and funnel specialist | Pricing, activation, payback | 1200% revenue growth, ARPU +34%",
    oneLiner150: "My specialism is the money half of growth: activation, pricing, payback and the point where a user decides to pay.",
    bio300:
      "If you need someone to raise traffic, I am not the sharpest hire available. If you need someone to work out why traffic is not turning into revenue, that is the whole of what I do.\n\nThe specific questions I am good at: which step in activation is actually losing the cohort, whether your price is selecting for the wrong user, how long payback really takes once you account for churn, and when to ask for money in the first session versus the fifth.\n\nEvidence: an insurance funnel rebuilt into 1200% revenue growth over twelve months; revenue per user up 34% on a base above a million while unsubscribes fell 61%; intent scoring worth ₹4.2Cr in incremental revenue.\n\nNine years across fintech and consumer apps in India. Case studies at " + SITE + ".",
    bio1200: "",
    skills: ["Monetization", "Pricing Strategy", "Activation", "Retention", "LTV Modeling", "Payback Analysis", "Funnel Optimization", "CRO", "Product Analytics", "A/B Testing", "Lifecycle Marketing", "Fintech", "Subscription Growth", "Cohort Analysis", "Growth Strategy"],
    deepLink: "https://" + SITE + "/consulting/product-monetisation-consultant",
  },
  {
    platform: "flexing-it",
    angle: "India-based consulting marketplace. Buyers are Indian enterprises and funded startups; rupee pricing and local context are assets.",
    headline70: "Independent product & growth consultant — India, fintech & consumer",
    headline120: "Independent product growth consultant | Fintech, mobility, consumer | 45M+ MAU, ₹4.2Cr incremental revenue",
    oneLiner150: "Independent product and growth consultant working with Indian fintech, mobility and consumer companies.",
    bio300:
      "I consult on product growth and monetisation, working mainly with Indian fintech, mobility and consumer companies.\n\nMy background is operating rather than advisory: nine years in product roles at Loanwiser, CarInfo, KNIPEX Tools and UpGrowth, leading teams of 50+ and owning products through scale. That matters for the Indian market specifically, where unit economics are tight enough that growth advice written for Western SaaS usually does not survive contact with the P&L. The work I point to was all done here: a consumer product taken past 45M monthly actives, an insurance funnel rebuilt into 1200% revenue growth, organic acquisition cost brought to ₹31, and an intent scoring engine worth ₹4.2Cr in incremental revenue.\n\nBased in Jaipur. Engagements from two-week diagnostics to fractional leadership. Thirty case studies at " + SITE + ".",
    bio1200: "",
    skills: ["Product Consulting", "Growth Strategy", "Monetization", "Unit Economics", "Pricing", "Fintech", "Mobility", "Consumer Internet", "Product Analytics", "Team Leadership", "Go-to-Market", "SEO", "Marketplaces", "Digital Transformation", "Fractional Product Leadership"],
    deepLink: "https://" + SITE + "/consulting",
  },
  {
    platform: "glg",
    angle: "Expert network. Compliance reads this. Factual, sector-coverage oriented, zero selling language.",
    headline70: "Product & growth expert — Indian fintech, mobility, consumer apps",
    headline120: "Expert: product management, growth and monetisation in Indian fintech, mobility and consumer internet. 9 years.",
    oneLiner150: "Nine years of operating experience in Indian fintech, mobility and consumer internet products.",
    bio300:
      "Sector coverage: Indian fintech (lending, insurance distribution, remittance), consumer mobility, consumer utility apps, and B2B industrial tooling.\n\nFunctional coverage: product management, growth, monetisation and pricing, customer acquisition economics, product analytics, and organic acquisition channels.\n\nRoles held: product leadership at Loanwiser (lending and insurance distribution), CarInfo/AppFlix (consumer mobility, scale phase from 3.8M to 45M+ monthly active users), KNIPEX Tools, and UpGrowth. Founder of TripMojo.\n\nTopics I can speak to from direct operating experience include Indian insurance distribution funnels, the economics of organic versus paid acquisition in the Indian consumer market, transaction platform reliability at scale, and monetisation timing in freemium consumer apps.\n\nI do not hold or discuss confidential information from current or former employers.",
    bio1200: "",
    skills: ["Product Management", "Fintech", "Insurance Distribution", "Lending", "Consumer Mobility", "Growth", "Monetization", "Unit Economics", "Indian Consumer Internet", "Product Analytics"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
    notes: "Expert networks run compliance checks and may bar consultations touching a current employer's sector. Declare affiliations accurately at onboarding; the final paragraph above is deliberate and should not be removed.",
  },
  {
    platform: "alphasights",
    angle: "Expert network. Differentiate from GLG by framing around the questions a client would actually book a call to ask.",
    headline70: "Operator expert — Indian consumer app growth and monetisation",
    headline120: "Operating expert on Indian consumer app growth, insurance distribution funnels and organic acquisition economics",
    oneLiner150: "Operating experience in Indian consumer apps and fintech distribution, available for expert consultations.",
    bio300:
      "Questions I can answer from having done the work rather than read about it:\n\nHow does a consumer utility app in India actually get from single-digit millions to tens of millions of monthly users, and what share of that is realistically organic? What does insurance distribution through a digital funnel look like operationally, and where does it break? What is the true payback period on paid acquisition in the Indian consumer market once churn is accounted for? At what point does a transaction platform stop scaling, and what does the rebuild cost?\n\nMy experience comes from product roles at Loanwiser, CarInfo/AppFlix, KNIPEX Tools and UpGrowth over nine years, including a scale phase from 3.8M to 45M+ monthly active users and a twelve-month insurance funnel rebuild.\n\nI decline consultations that would require disclosing confidential employer information.",
    bio1200: "",
    skills: ["Consumer Internet", "Fintech", "Product Management", "Growth", "Insurance Distribution", "Customer Acquisition", "Unit Economics", "India Market", "Mobile Apps", "Monetization"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
    notes: "Same compliance posture as GLG. Keep the closing sentence.",
  },
  {
    platform: "guidepoint",
    angle: "Expert network. Differentiate again by leading with employment history and tenure, which is what their screeners index on.",
    headline70: "Product leader, Indian fintech & consumer internet — 9 years",
    headline120: "Nine years product leadership across Indian lending, insurance distribution, consumer mobility and industrial tooling",
    oneLiner150: "Product leader with nine years across Indian lending, insurance distribution, consumer mobility and industrial tooling.",
    bio300:
      "Employment history, most recent first: independent product growth and monetisation consultant; UpGrowth (product across four products); KNIPEX Tools; CarInfo / AppFlix (consumer mobility, product ownership through the scale phase); Loanwiser (lending and insurance distribution). Founder of TripMojo.\n\nAcross those roles I have led teams of 50+ and owned products in lending, insurance distribution, consumer mobility, consumer utility and B2B industrial tooling. Measurable outcomes include a consumer product scaled from 3.8M to over 45M monthly active users, 1200% insurance revenue growth across twelve months, and a transaction platform rebuilt from failure at 22K monthly transactions to 180K+ at 99.6% uptime.\n\nAvailable for consultations on product, growth, monetisation and acquisition economics in Indian consumer and financial services markets. I will not discuss confidential information from any current or former employer.",
    bio1200: "",
    skills: ["Product Management", "Lending", "Insurance", "Consumer Mobility", "Industrial B2B", "Growth", "Monetization", "Platform Scaling", "India Market", "Team Leadership"],
    deepLink: "https://" + SITE + "/about-yogesh-yadav",
    notes: "Same compliance posture as GLG and AlphaSights. Keep the closing sentence.",
  },
  {
    platform: "growthmentor",
    angle: "Mentorship marketplace. Buyer is often earlier-stage and nervous; warmth and specificity beat credentials.",
    headline70: "Growth mentor — funnels, monetisation, organic acquisition",
    headline120: "Growth mentor for founders and PMs | Funnels, pricing, organic acquisition | Happy to tell you what didn't work",
    oneLiner150: "Mentoring founders and product managers on growth, monetisation and organic acquisition. Bring a real problem.",
    bio300:
      "The most useful thing I can offer is not the wins, it is the things I got wrong first and how long it took me to notice.\n\nI mentor founders and product managers on the growth problems that are genuinely hard to think about alone: whether your activation problem is really a positioning problem, whether to raise price or lower it, why a channel that looks profitable is not, and how to build organic acquisition when you have no budget and no patience.\n\nMy own background is nine years of product work in Indian fintech and consumer apps, including scaling a product past 45M monthly actives and building a programmatic SEO engine that took organic acquisition cost to ₹31 per user. I also have a folder of interventions that did nothing at all, which tends to be the more instructive half of a session.\n\nWriting at " + SITE + ".",
    bio1200: "",
    skills: ["Growth Mentoring", "Product Management", "Monetization", "Pricing", "Activation", "Retention", "SEO", "Organic Acquisition", "Founder Coaching", "Product Analytics", "Career Guidance", "Fintech", "Consumer Apps", "Positioning", "Experimentation"],
    deepLink: "https://" + SITE + "/blog",
  },
  {
    platform: "goodfirms",
    angle: "B2B directory, sibling to Clutch. NAP must match Clutch and GBP exactly, but prose must not — write the same facts in a different order.",
    headline70: "Product Growth & Monetisation Consulting — Jaipur, India",
    headline120: "Product growth, monetisation and SEO consulting for fintech, consumer app and marketplace businesses | India",
    oneLiner150: "Consulting practice covering product growth, monetisation, funnel optimisation and programmatic SEO for digital businesses.",
    bio300:
      "A one-person consulting practice based in Jaipur, Rajasthan, serving fintech, consumer app and marketplace businesses remotely.\n\nEngagement types range from a two-week product growth diagnostic through funnel and monetisation audits to 90-day growth sprints and ongoing fractional product growth leadership. Programmatic SEO builds and content programmes are offered as separate engagements.\n\nThe practice is built on nine years of in-house product experience across lending, insurance distribution, consumer mobility and industrial tooling. Documented outcomes include organic sessions taken from zero to 100K per month with 380+ top-ten rankings, customer acquisition cost reduced 30% at constant volume, and revenue per user increased 34% across a base exceeding one million users.\n\nThirty case studies, each with its numbers and its failures, are published at " + SITE + ".",
    bio1200: "",
    skills: ["Product Consulting", "Growth Consulting", "Monetization Strategy", "SEO Services", "Conversion Optimization", "Product Analytics", "Content Strategy", "Fintech Consulting", "Mobile App Consulting", "Marketplace Strategy"],
    deepLink: "https://" + SITE + "/consulting",
    notes: "NAP (name, address, phone) must be byte-identical to the Clutch and Google Business Profile listings or the citation signal is wasted. Decide the canonical NAP string once, before creating any of the three.",
  },
  {
    platform: "google-business-profile",
    angle: "Local entity anchor. Short, category-driven, no marketing voice — this is a map listing, not a pitch.",
    headline70: "Product growth & monetisation consultant in Jaipur",
    headline120: "Yogesh Yadav — product growth and monetisation consulting for fintech and consumer app companies. Jaipur, India.",
    oneLiner150: "Product growth and monetisation consulting for fintech, consumer app and marketplace companies. Remote and Jaipur-based.",
    bio300:
      "Product growth and monetisation consulting for fintech, consumer app and marketplace companies.\n\nServices: product growth diagnostics, growth funnel audits, monetisation and pricing audits, 90-day growth sprints, fractional product growth leadership, and programmatic SEO builds.\n\nNine years of in-house product experience across lending, insurance distribution, consumer mobility and industrial tooling, including scaling a consumer product beyond 45M monthly active users.\n\nServing clients remotely worldwide from Jaipur, Rajasthan. Case studies and pricing at " + SITE + ".",
    bio1200: "",
    skills: ["Business consultant", "Marketing consultant", "Internet marketing service", "Software company"],
    deepLink: "https://" + SITE + "/consulting",
    notes: "GBP requires video verification for service-area businesses and will ask you to show the workspace and proof of trading. Primary category: 'Business consultant'. Set it as a service-area business with no displayed street address unless you are willing to publish one. The four 'skills' above are GBP categories, not free text.",
  },
  {
    platform: "linkedin-services",
    angle: "LinkedIn's services marketplace surfaces you in-network. Buyer already sees your profile, so the description must add what the profile does not: scope and price.",
    headline70: "Product growth, monetisation & SEO consulting — open to projects",
    headline120: "Available for product growth, monetisation, funnel and programmatic SEO engagements | Fintech & consumer apps",
    oneLiner150: "Taking on product growth, monetisation, funnel and programmatic SEO engagements. Fixed scope, fixed price, published rates.",
    bio300:
      "Available for project work in product growth, monetisation and programmatic SEO.\n\nWhat an engagement usually looks like: a two-week diagnostic at $1,500 that produces a ranked list of what is actually costing you revenue; a funnel or monetisation audit at $2,500; a 90-day sprint at $9,000 where I stay through implementation; or fractional growth leadership at $4,000 a month. Content and SEO work is priced separately and published on the site.\n\nI publish rates because withholding them wastes a call. I also publish the interventions that failed, for the same reason.\n\nNine years in product across Indian fintech, mobility and consumer apps. Thirty case studies with the numbers attached at " + SITE + ".",
    bio1200: "",
    skills: ["Product Management", "Growth Strategy", "Monetization", "Pricing Strategy", "Search Engine Optimization (SEO)", "Content Strategy", "Conversion Rate Optimization", "Product Analytics", "Fintech", "Management Consulting"],
    deepLink: "https://" + SITE + "/consulting",
  },
  {
    platform: "fiverr",
    angle: "Gig marketplace. Buyers search for a deliverable, not a person — so this file is structured around gig titles, and the widened writing services matter most here.",
    headline70: "Product growth, SEO strategy and long-form content — done properly",
    headline120: "Growth teardowns, programmatic SEO audits, PRDs and long-form content | 9 years product | 100K organic sessions built",
    oneLiner150: "Fixed-scope deliverables: growth teardowns, SEO audits, PRDs, and long-form content written by someone who has shipped the product.",
    bio300:
      "Everything here is a fixed deliverable with a fixed price, because open-ended briefs help neither of us.\n\nI spent nine years as a product manager in Indian fintech and consumer apps before going independent. That is the difference in the writing work especially: a PRD or a long-form product article from me comes from someone who has had to defend the spec in a room, not from someone summarising search results. The content engine I built on my own site now carries 100K monthly organic sessions and 380+ top-ten rankings, off 57 long-form articles and 30 case studies.\n\nOn the product side the same nine years produced a consumer app scaled past 45M monthly actives and an insurance funnel rebuilt into 1200% revenue growth.\n\nSamples of everything at " + SITE + ".",
    bio1200: "",
    skills: ["Article Writing", "Content Strategy", "SEO Writing", "Technical Writing", "Product Management", "Growth Strategy", "SEO Audit", "Keyword Research", "Business Consulting", "Market Research", "Copywriting", "Product Documentation", "Competitor Analysis", "Conversion Optimization", "Automation"],
    deepLink: "https://" + SITE + "/blog",
    notes:
      "SUGGESTED GIG TITLES (Fiverr indexes these, not the bio):\n" +
      "> 1. I will write a long-form SEO article on product, fintech or SaaS — $99\n" +
      "> 2. I will run a programmatic SEO opportunity audit on your site — $199\n" +
      "> 3. I will write a product requirements document (PRD) for your feature — $99\n" +
      "> 4. I will do a 48-hour growth teardown of your funnel — $149\n" +
      "> 5. I will build an n8n automation workflow — $99\n" +
      "Start every gig at the entry price for review velocity, then raise to the core rate after 10 reviews. Do not discount below the entry price.",
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
${OFFERS.map((o) => `- **${o.name}** (${o.timeframe}) — ${o.price ?? "on request"}\n  ${o.outcome}`).join("\n")}

## Rates
- Marketplace hourly: $${RATE_CARD.marketplace_hourly_usd}
- Direct hourly: $${RATE_CARD.direct_hourly_usd}
- Expert-network call: $${RATE_CARD.expert_network_call_usd}/hr

${RATE_CARD.note}

## Additional service categories (marketplaces only)
_Listed on marketplaces because their search is category-based — a profile only
appears in categories it has a listing in. Not mirrored onto pmyogesh.com,
where breadth would cost topical focus. Every line is evidenced._

${MARKETPLACE_SERVICES.map((m) => `- **${m.name}** — ${m.category}\n  - Entry: ${m.entryPrice} · Core: ${m.corePrice}\n  - Evidence: ${m.evidence} (${m.evidenceUrl})`).join("\n")}

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
