# Iteration 10 review — 2026-10-12

- Reference visually inspected: https://lusion.co/projects/synthetic_human/.
- Desktop checked at 1152 × 720 CSS px; normal pane at 719 × 697; phone at 390 × 844.
  Browser viewport overrides were reset after testing. No horizontal overflow observed.
- Verified opening title left/photo right, native-scroll translation, overlapping source
  image crossfade, settled full-lit photo left/specifications right, natural release and
  fade while demo enters, and reverse scroll. At sampled midpoint travel was 0.614 and
  full/light opacity 0.553/0.447; settled image opacity was 1/0.
- Mobile uses static stacked content; checked menu open/navigation/close, PCB back view
  selection and image dialog open/close. All ten sections and pending-evidence copy remain.
- JavaScript syntax and resource/structure/HTTP checks passed: 27 served files, 30 unique
  IDs, seven image elements with accessible or decorative alternatives, one H1, ten sections.
- Both display PNG SHA256 digests match their original Front-Ghost source files.
- Screenshots: `10-opening.png`, `10-specifications.png`.
- Reduced-motion, no-JavaScript, print and short-viewport fallback paths inspected in
  source; not separately browser-emulated. No performance benchmark, cross-browser
  testing, hardware validation or publication performed. Final visual acceptance open.

## Follow-up: all-page Rajdhani, 16:9 framing, section entrances

- All nine later sections receive reversible scroll-driven X translation and opacity.
  Sampled demo entrance at x=40.87 px / opacity=.74164; anchor arrival settled to x=0,
  opacity=1. Keyboard focus forces a section visible, and no-script/reduced-motion/print
  keep static content. These fallback code paths were inspected, not browser-emulated.
- Full local Rajdhani regular/medium/semibold fonts replace the title-only subset and
  Ubuntu references. Computed heading, body, metadata, button and navigation families
  are Rajdhani. Original diagram text converted to outlines is unchanged artwork.
- 16:9 frame and 100%-sized images preserve both complete 3840 × 2160 source canvases.
- Browser checked at 719 × 697 CSS px and 390 × 844, plus desktop 1152 × 720. No
  horizontal overflow. Mobile menu and electronics anchor work; entrance settles at
  the target. Temporary viewport reset. Syntax/resource checks passed (31 served files).
- Updated `10-opening.png`; new `10-section-entrance.png` records a partial entrance.
  Earlier specification screenshot records the original square-frame treatment.

## Corrected continuous horizontal sequence

- Supersedes previous vertical entrance checks. One pinned viewport holds a track with
  15 horizontal panels, including the hero and ending; all ten semantic sections remain.
- At 719 × 697 CSS px all 14 post-hero panel content bounds fit above the progress line;
  at 390 × 844 all content fits (control panel bottom ≈789 px, mechanism ≈779 px).
  No vertically scrolling inner panels. Panel tops remain 0 through sideways movement.
- Sample handoff: track X=-343.917 px, demo left=375.55 px, hero/demo top=0.
  Ending panel top was -0.05 px from subpixel rounding, with the footer filling the view.
- Checked phone chapter menu, Mechanics target alignment, Open pose selection, full
  sequence ending and return-to-start. Fixed stale geometry in navigation and prevented
  programmatic horizontal scrolling of the clipping viewport. Source hash handling uses
  manual browser scroll restoration.
- Reduced-motion, print and no-script paths inspected in source; no separate emulation.
  Native horizontal trackpad/arrow-key support implemented but not hardware-tested.
- Syntax/resource checks pass (32 served files). New `10-horizontal-transition.png`
  shows the actual sideways handoff; earlier screenshots record superseded layouts.

## Faster hero and edge-cropped frame

- Hero reveal distance reduced from 1.25 to 0.58 viewport widths (54% shorter).
  Motion spans 0–90%, photo crossfade 6–86%, copy fade 0–60%, and specifications 45–100%.
  Track travel starts at 100% without a hold and runs at 1.2× input distance. Navigation,
  runway length, progress indicator and arrow-key distance use the same gain.
- At 719 × 697, opening frame x=294.69, width=518.01, right=812.70: 18.1% offscreen.
  Settled frame x=-93.24: 18.0% left crop. Early scroll y=100.27 produced copy x=-40.05
  with opacity .64695, confirming simultaneous leftward movement and fading.
- After the settled specs (y≈415.47), another ≈66.67 px scroll gave track X=-78.14 and
  demo left=641.33, hero top=0: immediate horizontal travel with no long dead interval.
- At 390 × 844, frame width≈437.24 (112vw), opening right≈469.09 and settled left≈-78.71,
  again ≈18% cropped. Image top≈557.21 / bottom≈803.15; specs bottom≈546.05, so no overlap.
- Resource/structure checks and JavaScript syntax passed. Original PNGs are unchanged.
  `10-edge-crop-specs.png` records the updated settled composition. Reduced-motion and
  print retain their prior static framing; no separate preference emulation performed.

## Borderless surfaces and independent electronics comparison

- Electronics now holds Revision 1 left, three explanatory notes in the center and
  Revision 2 right. Only Revision 2 has Front/Back controls. The board-details
  continuation is merged into the main electronics panel; 14 panels now remain.
- At 719 × 697 CSS px the complete comparison fits vertically (bottom ≈642 px).
  Computed borders and shadows for glass surfaces, hero frame and segmented controls
  are zero/none. Selected controls keep violet fill; keyboard focus outlines remain.
- Verified Revision 2 Back changes only `pcb-image` to `main-pcb-v2-back.png` while
  `pcb-v1-image` stays `main-pcb-v1-front.png`. Revision 1 enlargement displays its
  representative-cable qualification. Source artwork remains unchanged.
- Resource/structure/HTTP checks: 32 files, ten sections, 32 unique IDs, eight image
  alternatives; JavaScript syntax passed. Phone comparison uses a 960px horizontal
  panorama to retain readable left/text/right columns, with focus targeting within it.

- Follow-up responsive verification: 1152 × 720 comparison bottom ≈658 px; phone
  390 × 844 panorama bottom ≈716 px. Panned right and switched Revision 2 back to Front
  without changing Revision 1 or snapping the panorama. Temporary viewport reset and
  electronics comparison left open. Screenshot: `10-electronics-comparison.png`.
