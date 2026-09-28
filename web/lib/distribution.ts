/**
 * Distribution kit — 04 §2.
 *
 * publish.ts writes one of these per batch. They are drafts for a human to
 * edit, not posts to schedule: 04 §3 is explicit that a link dropped into a
 * thread without answering the question is the behaviour the spam policies
 * treat as inauthentic, and the whole point of the gates is not to end up
 * there.
 *
 * Each draft leads with the page's own number, because a post that leads with
 * the number gets read and a post that leads with "I wrote about" does not.
 */
import type { PageMeta } from "./content/schemas";

export interface KitInput {
  meta: PageMeta;
  site: string;
  /** The single number the page is built around, if it has one. */
  headline?: string;
}

function url(i: KitInput): string {
  return `${i.site}${i.meta.url}`;
}

function subject(meta: PageMeta): string {
  return (meta.entity_a ?? meta.primary_keyword).replace(/-/g, " ");
}

export function linkedInPost(i: KitInput): string {
  const n = i.headline ?? "the number in the first line";
  return [
    `[Open with ${n}. 120-180 words. Attach the chart as an image, not a link preview.]`,
    "",
    `${i.meta.h1}`,
    "",
    `What I found: ${i.meta.unique_value_statement}`,
    "",
    "[One paragraph on the mechanism — why this is true, not that it is true.]",
    "",
    "[One line on what you would do about it. An opinion, owned.]",
    "",
    `Full teardown with sources: ${url(i)}`,
  ].join("\n");
}

export function xThread(i: KitInput): string[] {
  return [
    `1/ ${i.headline ?? "[the number]"} — ${i.meta.h1}`,
    "2/ [The mechanism in one post. No throat-clearing.]",
    "3/ [The counter-intuitive part, with the second number.]",
    "4/ [What most teams get wrong here, stated plainly.]",
    `5/ Sources and method: ${url(i)}`,
  ];
}

export function newsletterItem(i: KitInput): string {
  return [
    `**${i.meta.h1}**`,
    "",
    `[60 words. One teardown, one number, one decision. Lead with ${i.headline ?? "the number"}.]`,
    "",
    `→ ${url(i)}`,
  ].join("\n");
}

export function communityAnswers(i: KitInput): string[] {
  const s = subject(i.meta);
  return [
    [
      `Draft A — for an existing question about ${s}.`,
      "",
      "[Answer the question in full, in the comment. The comment has to stand",
      " alone and be useful to someone who never clicks.]",
      "",
      `[Only then:] I checked this across a few markets and wrote up the numbers here: ${url(i)}`,
      "",
      "Do not post this unless the question is genuinely about this. 04 §3.",
    ].join("\n"),
    [
      `Draft B — for a different question that this page also answers.`,
      "",
      "[Same rule. Answer first, reference second, and only where it helps.]",
    ].join("\n"),
  ];
}

/** Teardowns and compares: tell the subject before someone else does. */
export function notifySubject(i: KitInput): string | null {
  if (!["teardown", "compare", "pricing-examples"].includes(i.meta.archetype)) return null;
  const s = subject(i.meta);
  return [
    `Subject: I published a teardown of ${s}`,
    "",
    `Hi — I write about app monetization at ${i.site}, and I have just published`,
    `a teardown of ${s}: ${url(i)}`,
    "",
    "Everything in it is from public sources or checked on a device, and each",
    "figure carries its source and the date I checked it. If anything is wrong or",
    "out of date, tell me and I will correct it and note the change.",
    "",
    "No ask attached.",
    "",
    "Yogesh",
  ].join("\n");
}

export function buildKit(inputs: KitInput[], batchId: string): string {
  const out: string[] = [
    `# Distribution kit — ${batchId}`, "",
    `${inputs.length} page(s). These are drafts to edit, not posts to schedule.`,
    "",
    "## Weekly minimums (04 §2)",
    "- 3 LinkedIn posts", "- 2 community answers", "- 1 newsletter",
    "- Log every one in seo/data/distribution-log.csv",
    "",
  ];
  for (const i of inputs) {
    out.push(`---`, "", `## ${i.meta.url}`, "", "### LinkedIn", "", "```",
      linkedInPost(i), "```", "", "### X thread", "", "```",
      ...xThread(i), "```", "", "### Newsletter", "", "```",
      newsletterItem(i), "```", "", "### Community answers", "");
    for (const a of communityAnswers(i)) out.push("```", a, "```", "");
    const notify = notifySubject(i);
    if (notify) out.push("### Notify the subject", "", "```", notify, "```", "");
  }
  return out.join("\n");
}
