# Iteration 08 validation — October 11, 2026

Current prototype: `Website/iterations/08-vector-reveal/`. Iteration 07 is preserved.

- Added a standalone SVG containing two angular paths and no circle. The master lives
  in `Assets/Hero/ghost-diamond-outline.svg`; the website uses a local display copy.
- At the opening, outline opacity is 1 and both photographic layers are 0; the silver
  Rajdhani Semibold title remains visible. The vector aligns with the real light.
- At 368 px desktop scroll, vector/title/shell are 0 and the real light is 1.
- At approximately 580 px, vector/title/shell are 0 and the real light is 1.
- At approximately 1,026 px, shell/light are 1, vector/title are 0, and navigation appears.
- At approximately 223 px, title and vector opacity both equal 0.5004; the real light
  is 0.4996 and the shell remains hidden. This verifies the requested synchronized fade.
  The vector/light transition was also checked in reverse. Returned to the opening.
- Reviewed desktop at a 719 × 697 CSS viewport and phone at 312 × 675 CSS px (current
  browser zoom). The phone vector opening and full reveal fit without horizontal
  overflow. Reset the temporary viewport afterward.
- Script syntax and resource/structure checks passed: 24 served files, ten sections,
  30 unique IDs, one accessible GHOST H1, eight images with alternatives/decorative labels.
- Reduced-motion/no-script/print behavior was source-reviewed, not independently emulated:
  the vector is hidden and the complete Ghost remains visible in those fallbacks.
- Existing body content, figure interactions, and media configuration are preserved.
  Full media replacement remains untested with final footage/images.

Captures: `08-vector-opening.jpg`, `08-synchronized-fade.jpg`, `08-light-only.jpg`,
`08-full-ghost.jpg`, `08-phone-opening.jpg`, and `08-phone-full.jpg` (ignored local QA).
`08-real-light-title.jpg` preserves the superseded exploratory timing before the builder
requested that text and SVG fade together.
This validates the prototype sequence, not hardware, final media, or publication readiness.
