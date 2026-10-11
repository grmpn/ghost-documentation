# Iteration 04 validation — October 11, 2026

- Preserved iterations 01–03. Created the centered hero in its own iteration directory.
- Visually reviewed the O/blue-eye alignment at the normal desktop size, 1440 × 1000,
  390 × 844, and 844 × 390 landscape. Also checked 320 × 740 layout geometry.
- The opening stage matches the viewport height; supporting details begin at or below
  its bottom. No horizontal document overflow at the checked sizes.
- Opening contains only the Ghost and title. The image qualification is available to
  screen readers and appears visibly below the opening with the project details.
- Confirmed header `aria-hidden=true` and `inert` at the top, both reversed after scroll.
  Returning to the top restores the hidden/nonfocusable state. Navigation slides down;
  reduced-motion CSS disables the transition.
- Mobile section menu opens, navigates to Results, and closes. Accessible H1 is GHOST;
  decorative SVG/layer content is not redundantly announced.
- JavaScript syntax and resource checks passed: ten sections, 30 unique IDs, one H1,
  six meaningful HTML images with alt text plus one explicitly decorative eye layer,
  local anchors and CSS references, and 19 complete HTTP resource responses.
- No browser warnings/errors observed. Below-fold images retain lazy loading; the empty
  dialog image receives a source when opened. Source and display-image SHA-256 hashes match.
- Saved `04-desktop.png`, `04-mobile.png`, and `04-after-scroll.png`. Viewport overrides reset.

Physical validation, final media, publication, and real-video replacement remain pending.
The eye mask and font placement are calibrated to the temporary Ghost image and Ubuntu
Sans 800; recheck them when changing that image or typeface. Reduced-motion and no-script
fallbacks are implemented but were not separately emulated in this review.
