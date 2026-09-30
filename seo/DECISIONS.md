
## Open for Yogesh: the case-study section band (30 September 2026)

All 30 migrated case studies pass every gate except G07, and the G07 failures are
narrow and consistent rather than scattered:

- sections measuring 87–119 words against a 120-word floor (the distribution
  clusters at 112–119, so these are near misses, not thin sections)
- 14 of 30 pages carry 11 H2s against a 4–10 limit

These are real measurements, not artefacts — four separate G07 measurement bugs were
found and fixed first (AUDIT.md §D8), and the numbers above are what remains. So the
question is a fit question: 01 §B5's 1,000–1,800 words with 120–400-word sections was
written before the published corpus was read, and the published pages tell their
story in more, shorter beats.

**Not decided unilaterally.** Widening the band would make 30 pages pass by changing
the ruler, and merging or padding the sections would damage pages that already work.
Both are content decisions. The three options:

1. Widen `case-study` to `section: [80, 400]` and `H2: 4–12`, on the grounds that the
   published corpus is the evidence for what a case study of this kind looks like.
2. Restructure the 30 pages to the existing band — merging adjacent beats. Real work,
   and it changes pages that are currently ranking.
3. Leave them as they are. They exist, they serve their redirects, and they stay
   `indexable: false` until one of the above happens.

Currently on option 3, which loses nothing: the redirects land on live pages and
nothing unready is published.
