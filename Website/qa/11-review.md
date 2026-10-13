# Iteration 11 review — 2026-10-12

- Self-contained copy of iteration 10; presentation changes isolated in `surfaces.css`.
- Opaque charcoal fills verified on all media panels/dialogs; header fill uses its
  existing pseudo-element. Computed gradients, border widths, shadows and backdrop blur
  removed from these surfaces. Fixed dot field uses 32px spacing and 7% neutral dots.
- Matching PCB header, image, control and caption rows. At 1152 × 720, both figures
  end at y≈651 and content fits without internal overflow. At 390 × 844, the existing
  horizontal electronics panorama fits vertically (figure bottom≈711); both figures
  have matching 420px content/client heights. Default pane also inspected visually.
- Revision 2 Back switches to `main-pcb-v2-back.png`, selected state is true, while
  Revision 1 remains `main-pcb-v1-front.png`. Navigation checked through the header.
- Resource/HTTP/HTML check passes: 33 files, 10 sections, 32 unique IDs, 8 image alts.
  JavaScript syntax passes. Source media copied unchanged; previous iteration preserved.
- Screenshot: `11-electronics-desktop.png`.
- Limits: no hardware claims changed. Reduced-motion, print and no-script behavior
  inherited; new surface styling is screen-only. Preference modes not separately emulated.

## Floating header refinement

- Header background removed; wordmark, links and phone menu label now use 16px
  Rajdhani 600. Chapter navigation verified; 719px pane and 390px phone header fit.
- Expanded phone dropdown retains its separate surface; focus and active states remain.
- Evidence: `11-floating-header.png`. Viewport restored after phone check.

- Fullscreen follow-up: removed the desktop width cap, keeping 32px edge insets.
  Header text now scales with viewport width: clamp(16px, 1.2vw, 24px), weight 600;
  link gaps also scale. At 1920px measured 23.04px text and 32px on both edges.
  Updated `11-floating-header.png`; viewport restored. Phone minimum remains 16px.

## Final electronics and neutral accents — 2026-10-12

- Plain background; computed background-image none, accent #EFEFF0, selection
  rgb(48,48,51). Purple and light-blue decorative UI replaced with neutral tones.
- Revision 1 omitted; main and LED boards share one electronics composition. No
  lighting-details continuation; 13 total horizontal panels including the hero.
- All three final PCB renders use a centered square display crop of their unchanged
  2362 × 1377 canvas. Source edges with orientation gimbals are clipped, not retouched.
  Main-board Front/Back verified, and front enlargement visually retains the complete
  board without the gimbal. Expanded diagrams retain their original light background.
- 696 × 697 pane, 1152 × 720 desktop, and 390 × 844 phone checked. Phone board cards
  have equal client/scroll heights (430px) and fit vertically. Header wraps within phone
  width while the existing board panorama remains horizontal. Default viewport restored.
- Resource check passed: 33 files, 10 sections, 31 unique IDs, seven image alternatives;
  JavaScript syntax passed. Evidence: `11-final-electronics.png`.

## Hero copy refinement

- Removed the opening-description paragraph and bottom discipline label. Kept Explore.
- Title optical offset -0.045em aligns the visible G with the supporting text.
- Browser reload confirmed both deletions and alignment. Screenshot: `11-hero-simplified.png`.

## Supplied hero composition

- Desktop copy occupies 21–88svh; ownership sits at the bottom of the copy column.
- Copy/subtitle/ownership/scroll prompt share x≈71.43px at 1700px width (4.2vw).
  Title retains its optical G correction. Phone uses 6vw and 14–60svh copy placement.
- Evidence: `11-hero-reference-layout.png`; Explore link remains absent.

## White engineering chapters

- Verified Architecture and Electronics at 1700×886 CSS viewport; figure frames retain
  charcoal fills and source images. Computed colors confirm exactly four light sections;
  Mechanics includes its packaging continuation. Revisions returns to dark.
- Partial scroll verified a hard vertical divide, white logo over black and dark links
  over white in the same frame. Progress line responds on each side too.
- Phone 390×844: checked Architecture and expanded menu. Disabled blending while the
  menu is expanded to prevent chapter copy showing through link rows.
- All 33 resources served, 10 sections, 31 unique IDs and seven alt texts passed; JS
  syntax passed. No JS changes. Forced-color override added, not visually emulated.
- Evidence: 11-white-architecture.png and 11-white-boundary.png.

## Light gray boxes in white sections

- Architecture and Electronics visually checked at 1700×886 CSS viewport. Solid
  neutral light gray frames and dark labels/captions are legible; image colors retained.
- Activated PCB Back by keyboard; label changed to MAIN PCB / BACK. Selected state
  remains charcoal with light text. This is a CSS-only refinement.
- Evidence: 11-light-gray-architecture.png, 11-light-gray-electronics.png.

## Full-lit hero near-black backing

- At the full reveal, computed hero-shell background is rgb(7, 7, 8), opacity 1.
- Desktop visual check retained original blue glow and image framing.
- Evidence: 11-hero-near-black.png. CSS-only trial; source media unchanged.

## Hero image above revealing text

- Verified during partial reveal at 1152×720: image z-index 2, copy z-index 1.
- At overlapping coordinates, elementFromPoint returned hero-eye, while detail copy
  had begun fading in. Screenshot confirms text is occluded by the image frame.
- Evidence: 11-hero-image-over-copy.png. CSS-only stacking change.

## In motion composition and routine consolidation — 2026-10-12

- Matched the reference at 1700×886 CSS pixels: title/copy left, capture card right.
  Added scripted choreography, independent PWM, indexed home positions and open-loop
  limits; removed the standalone Control timeline and renumbered following sections.
- Checked 696×697 pane, 390×844 phone and 312×675 small phone. Fixed figure flex-shrink
  clipping on small phones; the capture caption and duration remain visible. At 312×675,
  figure client/scroll heights both equal 174px and its bottom is about 610px.
- Phone menu's In motion link navigates and closes the menu. Twelve total panels and no
  Control region verified. Resource check: 33 files, nine sections, 29 unique IDs and
  seven image alternatives passed; app.js syntax passed. Viewport restored afterward.
- Evidence: `11-in-motion-desktop.jpg`, `11-in-motion-phone.jpg`.
- Final video is unavailable, so playback with the actual footage remains unverified.
  This pass verifies website presentation only, not hardware behavior.

## Shared typography and text alignment — 2026-10-12

- Desktop computed title/body/note sizes: 48/20/13px, including the specifications
  reveal. All normal section paragraphs share body size; notes and labels share note size.
  Compact 32/16/12px and smallest-phone 28/14/12px are shared across sections.
- At 1700×886, upper panel content starts at 160px and lower content at 248px. At the
  696×697 pane the starts are 125px and 195px. All main content fits vertically.
- Reviewed specifications and Brief visually at desktop; removed Compact by design.
  Screenshots: `11-type-specifications.jpg`, `11-type-brief.jpg`.
- Checked 390×844 and 312×675 phones. Small-phone panel content ends at or above 628px,
  leaving the bottom scroll indicator clear. Dense Mechanics now uses a 720px horizontal
  panorama at ≤600px width / ≤760px height, keeping the same type and upper guide.
- Small-phone specification content ends at 442.7px before the image starts at 445.6px;
  validation note remains visible. Screenshot: `11-type-phone.jpg`. Viewport restored.
- All 34 resources, nine sections, 29 unique IDs, seven image alternatives and anchors
  passed the resource check. app.js syntax passed. Physical validation, actual demo
  playback, no-script and print appearance were not validated in this styling pass.
