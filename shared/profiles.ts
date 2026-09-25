/**
 * Off-site profile registry — the site half of the backlink loop.
 *
 * A profile that links here is only worth something once Google has crawled it
 * and tied it to this entity. Linking back, and listing every public profile in
 * the Person node's sameAs, is what closes that loop. This file is the single
 * source for both.
 *
 * Rules enforced by script/check-profiles.ts:
 *  - only `status: "live"` profiles are published; nothing speculative ships
 *  - only `visibility: "public"` profiles enter sameAs, because a private
 *    lead-gen profile is not a citation
 *  - every entry needs a real URL on the platform's own domain
 *
 * Nothing here is filled in from assumption. A platform appears only once its
 * profile actually exists and the URL has been checked.
 */

export type ProfileStatus = "todo" | "submitted" | "kyc" | "approved" | "live" | "rejected";
export type ProfileVisibility = "public" | "private";

export interface OffsiteProfile {
  platform: string;
  /** The live profile URL. Required before status can be "live". */
  url?: string;
  status: ProfileStatus;
  /** public = indexable profile page; private = leads only, never in sameAs. */
  visibility: ProfileVisibility;
  /** Category from the brief: MKT, VET, CON, EXP, 1:1, DIR, JOB, ENT. */
  category: string;
  tier: 1 | 2 | 3;
  /** Which deep link this profile's second slot points at, where allowed. */
  deepLink?: string;
  /** Set once W3 has confirmed the outbound link and its rel. */
  linkVerified?: { present: boolean; rel: string; checkedAt: string };
}

/**
 * Empty until profiles actually exist. Populating this before submission would
 * put dead URLs into sameAs, which is worse than an absent one: it tells Google
 * the entity claims identities it cannot demonstrate.
 */
export const OFFSITE_PROFILES: OffsiteProfile[] = [];

export const LIVE_PUBLIC_PROFILES = OFFSITE_PROFILES.filter(
  (p) => p.status === "live" && p.visibility === "public" && p.url
);

/** sameAs entries for the Person node. */
export function profileSameAs(): string[] {
  return LIVE_PUBLIC_PROFILES.map((p) => p.url!).filter(Boolean);
}
