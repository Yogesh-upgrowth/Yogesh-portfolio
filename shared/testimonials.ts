/**
 * Client testimonials.
 *
 * Empty on purpose. The homepage previously carried three — "Rahul M., CEO,
 * FinTechStart", "Sarah K., VP of Growth, EcomScale", "Amit V., Founder,
 * SaaSFlow" — quoting a 300% subscription increase, a 40% CAC drop and 20% of
 * MRR. None of those companies is identifiable, and none of those figures
 * appears in any case study or in the proof database. They read as template
 * placeholder copy that was never replaced.
 *
 * Fabricated endorsements are a worse failure than a wrong metric: a metric can
 * be a transcription error, an invented quote cannot. A buyer evaluating a
 * five-figure engagement checks, and finding an unverifiable testimonial costs
 * more trust than the testimonial was ever worth.
 *
 * To publish one, every field below must be real, and `verification` must point
 * at something a stranger can check — a LinkedIn profile, a published quote, a
 * recorded call. If a client cannot be named, say so in `anonymisedReason`
 * rather than inventing a company: "a Series B lending platform (name withheld
 * at the client's request)" is credible; "FinTechStart" is not.
 */

export interface Testimonial {
  /** Full name as the person would want it published. */
  name: string;
  role: string;
  /** Real company, or omitted entirely when anonymised. */
  company?: string;
  /** Why the company is not named, if it is not. Shown to the reader. */
  anonymisedReason?: string;
  quote: string;
  /** Something a stranger can verify — a LinkedIn profile URL, ideally. */
  verification: string;
  /** Confirmation the person agreed to this being published. */
  permissionConfirmed: boolean;
  /** Short category label shown on the card, e.g. "Monetisation". */
  tag?: string;
  /** The fragment of the quote worth pulling out. Must appear in `quote`. */
  highlight?: string;
}

/** Display shape — initials are derived so they cannot drift from the name. */
export interface TestimonialCard extends Testimonial {
  attribution: string;
  initials: string;
  tag: string;
  highlight: string;
}

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/** "VP of Growth, Acme" — or the anonymisation note when the company is withheld. */
export function attribution(t: Testimonial): string {
  if (t.company) return `${t.role}, ${t.company}`;
  if (t.anonymisedReason) return `${t.role} \u2014 ${t.anonymisedReason}`;
  return t.role;
}

export function toCard(t: Testimonial): TestimonialCard {
  return {
    ...t,
    attribution: attribution(t),
    initials: initialsOf(t.name),
    tag: t.tag ?? "Client",
    highlight: t.highlight ?? "",
  };
}

export const TESTIMONIALS: Testimonial[] = [];

/** A testimonial is publishable only when it can be checked and was permitted. */
export function publishable(t: Testimonial): boolean {
  return Boolean(t.name && t.role && t.quote && t.verification && t.permissionConfirmed);
}

export const PUBLISHABLE_TESTIMONIALS: TestimonialCard[] =
  TESTIMONIALS.filter(publishable).map(toCard);
