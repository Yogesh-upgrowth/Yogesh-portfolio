/**
 * Keeps the profile registry honest: nothing ships without a real URL, and a
 * private profile never enters sameAs.
 */
import { pathToFileURL } from "url";
import { OFFSITE_PROFILES, AWAITING_VERIFICATION } from "../shared/profiles";

export function checkProfiles() {
  const errors: string[] = [];
  const seen = new Set<string>();

  for (const p of OFFSITE_PROFILES) {
    const id = `${p.platform}`;
    if (seen.has(id)) errors.push(`duplicate entry for "${id}"`);
    seen.add(id);

    if (p.status === "live") {
      if (!p.url) errors.push(`"${id}" is live but has no URL`);
      else if (!/^https:\/\//.test(p.url)) errors.push(`"${id}" URL is not https`);
    }
    if (p.visibility === "private" && p.status === "live" && p.url) {
      // Not an error, but it must never reach sameAs — that is handled by
      // profileSameAs(); flag it so the distinction stays deliberate.
      console.log(`[profiles] note: "${id}" is live but private — excluded from sameAs`);
    }
    if (p.url && p.linkVerified?.present === false) {
      console.log(`[profiles] WARNING: "${id}" profile is live but the link back was not found on last check`);
    }
  }

  if (errors.length) {
    throw new Error("[profiles] registry is invalid:\n  - " + errors.join("\n  - "));
  }
  if (AWAITING_VERIFICATION.length) {
    console.log(
      `[profiles] ${AWAITING_VERIFICATION.length} live public profile(s) awaiting verification \u2014 run tools/verify.py; excluded from sameAs until observed:`
    );
    for (const p of AWAITING_VERIFICATION) console.log(`          ${p.platform}`);
  }
  const live = OFFSITE_PROFILES.filter((p) => p.status === "live").length;
  const pub = OFFSITE_PROFILES.filter((p) => p.status === "live" && p.visibility === "public").length;
  console.log(`[profiles] ${OFFSITE_PROFILES.length} tracked, ${live} live, ${pub} public and in sameAs`);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  checkProfiles();
}
