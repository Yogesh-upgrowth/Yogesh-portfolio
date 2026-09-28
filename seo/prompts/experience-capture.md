# prompts/experience-capture.md — 2-hour session to seed `content/experience.json`

Purpose: produce ≥30 permission-tagged, first-person entries before Wave 1 (target 80 by Wave 3). Run it as a conversation with Claude (chat or Claude Code): Claude asks, Yogesh answers by voice or text, Claude writes entries in the schema from 02 §5 and reads each back for approval. Nothing enters the library without Yogesh saying "yes, as written" and giving a permission tag.

## How to run it

1. Block 2 hours. Have your old decks, dashboards, and notes open (numbers come from there, not memory).
2. Claude asks the prompts below in order, one at a time, and follows up with: "What was the number before and after? Over what window? What else was happening that could explain it? Can this name the company? Public / client-approved / anonymised / founder-own?"
3. Every answer becomes one entry (sometimes two). Claude reads it back; you correct; then it's saved with `permission`, `can_name_company`, `timeframe`, `tags`, `source_session`.
4. Anything you're unsure you're allowed to share is saved as `anonymised` with the numbers coarsened (ranges, not points) — or not saved.

## Entry schema (reminder)

```json
{ "id": "exp-001", "tags": [], "context": "", "claim": "", "numbers": [{ "metric": "", "from": "", "to": "", "window": "" }], "permission": "public|client_approved|anonymised|founder_own", "can_name_company": false, "timeframe": "", "quote": "", "source_session": "YYYY-MM-DD" }
```

Tags to use (pick 2–5 per entry): `paywall` `pricing` `trial` `annual-plan` `freemium` `onboarding` `activation` `retention` `churn` `involuntary-churn` `push` `lifecycle` `ads` `hybrid` `upi` `autopay` `play-billing` `app-store` `india` `fintech` `insurance` `edtech` `travel` `automation` `ml` `plg` `analytics` `experimentation` `team` `fractional` `seo`.

## The prompts (~20)

**Monetization and pricing**
1. The pricing change you're proudest of: what was the price before/after (INR and USD if relevant), what moved, over what window, what didn't move.
2. A pricing change that failed or was rolled back. What did you learn about the users, not the price?
3. The first time you saw annual vs monthly plan mix shift. What caused it, by how much?
4. A paywall placement decision: where it was, where you moved it, what the conversion did in the first two weeks vs after a month.
5. Anything you know about UPI Autopay / e-mandates / card recurring failures from real data: success rates, drop-offs, what fixed them.
6. Ads + subscription together: a number on ARPU, fill rates, or the point where ads hurt retention.

**Onboarding and activation**
7. The activation metric you chose for a product and why. What did the number look like before/after the change you made?
8. One onboarding step you removed. What happened to completion and to downstream conversion?
9. A permission or login you delayed (or brought forward). Numbers.

**Retention and lifecycle**
10. The retention curve you improved most: D1/D7/D30 before and after, the intervention, the window.
11. A push or WhatsApp cadence you changed. Open/return rates before/after; any uninstall effect.
12. A cancel-flow or win-back change with numbers.

**Growth and scale (CarInfo, insurance, Appy Pie Connect, Loanwiser, TripMojo)**
13. CarInfo ~350K → 1.2M+ DAU: the two or three things that actually did it, with their individual contribution if you know it, and the timeframe. [VERIFY numbers and what you may disclose]
14. Motor insurance ~10 → 6,800+ policies/day: the funnel change that mattered most; the number before/after; the window.
15. Appy Pie Connect to ~$60K MRR: pricing/packaging decisions and what each did.
16. Loanwiser ML credit routing to 90%+ approvals: the metric, the model's role, what you'd do differently.
17. TripMojo: one monetization observation and one programmatic-SEO observation with numbers (pages, indexation rate, time to first impression).

**Working style (for service pages)**
18. What a first 6 weeks with you actually looks like: week by week, what you deliver, what you need from the team.
19. Two engagements you turned down or would turn down, and why (this becomes "who this is not for").
20. Your three named frameworks or checklists (give them names if they don't have any) — one paragraph each on what they are.

**Opinions (for "What I'd do" and decisions)**
21. Five opinions you'll defend with a number: e.g., "free trials beat freemium for X because Y", "annual plans should be default in India when ARPU < ₹Z", "never ask for login before the price".

## After the session

Claude outputs the full `content/experience.json`, a count by tag, and a list of `[VERIFY]` items (numbers you said "roughly" about). Wave 1 does not start until the count is ≥30 and every `[VERIFY]` is resolved or the entry is downgraded to `anonymised` with ranges.
