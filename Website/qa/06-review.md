# Iteration 06 validation — October 11, 2026

Current prototype: `Website/iterations/06-symbol-reveal/`.

- Node syntax checks passed for the interaction/media scripts and preview server.
- Structure/resources passed: ten sections, 30 unique IDs, one accessible GHOST H1,
  seven images with alternatives (one decorative layer), valid anchors, 19 served files.
- Visually reviewed desktop opening, emerging shell, completed reveal, and release into
  the introduction. At the top, shell opacity is 0 and title opacity is 1. During scroll,
  the stage stays pinned, the shell gains opacity/brightness above the text, and the
  lettering fades. Completed state has shell opacity 1 and title opacity 0.
- Returning to the top restores the opening and hides/inerts the navigation. Navigation
  appears near the reveal end; the visible header is not inert. Scrolling remains native.
- Visually reviewed the 390 × 844 phone opening and transition, and verified the completed
  phone state. Symbol center and center title slot align to within 0.01 px. No overflow.
- Checked 320 × 568 opening geometry: title fits, hidden shell, visible title, hidden/inert
  navigation, and no horizontal overflow. At 844 × 390 landscape the title also fits
  fully in view with the shell hidden and no horizontal overflow.
- Browser warning/error log was empty; whitespace check passed.
- Source/display image SHA-256 hashes match. The original asset is unchanged.
- Existing figure controls and demo replacement behavior are unchanged and were not
  broadly retested. Reduced-motion, no-script, and print fallbacks are implemented but
  were not independently emulated in this browser session.

Saved review images: `06-opening.png`, `06-emerging.png`, `06-revealed.png`,
`06-phone-opening.png`, `06-phone-emerging.png`, `06-phone-revealed.png` (ignored by Git).

This validates a local visual prototype, not final photography, hardware behavior,
physical filament color accuracy, or publication readiness. Scroll pacing and the silver
Ubuntu Sans 600 treatment remain design experiments for builder review.
