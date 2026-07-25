---
name: Mobile responsiveness convention
description: How to make responsive changes on this site without regressing the approved desktop UI
---
The desktop UI is user-approved and must not visually change during mobile work.

**Why:** A site-wide mobile overhaul (July 2026) was reviewed and failed initially because base Tailwind classes were changed without restoring the original desktop values behind breakpoints.

**How to apply:** For any responsive tweak, set the mobile value as the base class and put the *exact pre-existing* desktop value behind `md:`/`lg:` prefixes. Verify with a build + desktop screenshot after. Tables in long-form case-study/story pages are wrapped in `overflow-x-auto` shells — keep that pattern for new tables.
