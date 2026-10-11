# Iteration 07 validation — October 11, 2026

Current prototype: `Website/iterations/07-violet-prism/`.

## Follow-up: Rajdhani Semibold 600

- Loaded the official 600-weight GHOST subset (5,488 bytes), updated the font-face,
  preload, title weight, and source record. Existing size and spacing remain intact.
- Visually checked the lighter title; browser reports weight 600, a successfully
  loaded font, and no horizontal overflow. Capture: `07-rajdhani-semibold.jpg`.

## Follow-up: angular Rajdhani hero title

- Reused iteration 03's local Rajdhani Bold 700 GHOST subset (5,496 bytes), with its
  SIL OFL license and a source record. Preloaded the font and applied it only to the
  hero title; the subset also contains O for the static fallbacks.
- Adjusted the title to five `.72em` cells at `min(24vw, 24svh, 240px)` with `.8`
  line height, maintaining approximately the same overall width as the Ubuntu pass.
- Visually reviewed the default 719 × 697 CSS viewport and a narrow 312 × 675 CSS
  viewport at the current browser zoom. Font loading succeeded, the accessible heading
  remains GHOST, and no horizontal overflow occurred. Reset the viewport afterward.
- Resource/structure check passed for all 22 served files, ten sections, 30 unique
  IDs, one H1, and seven images with alternatives. Whitespace check passed.
- Captures: `07-angular-title-desktop.jpg` and `07-angular-title-phone.jpg`.
  Colors, body typography, controls, and reveal logic are unchanged. Preference/static
  fallbacks were source-reviewed, not independently emulated in this pass.

## Follow-up: remove chromatic aberration altogether

- Removed the title's generated color layers, blur, all text glow, and background halo.
  Removed the small chromatic text shadows from links/navigation and selected controls.
  Deleted unused letter attributes/classes and the lavender title token.
- Visually checked the clean silver opening. Computed styles confirm each letter has
  no filter, shadow, or generated layers; the title halo is absent and selected control
  text has no shadow. The original blue symbol remains illuminated.
- Saved `07-clean-silver-title.jpg`. Reveal logic, layout, fonts, media, surface accents,
  and static fallbacks are unchanged. Prior reveal/layout checks still apply.

## Follow-up: stronger diffuse glow matching the Ghost symbol

- Increased glyph softness and color offsets, then added layered cyan bloom and
  purple/lavender glow. The original cool palette and silver face remain.
- Visually reviewed the default opening (599 × 581 CSS viewport) and the narrow
  layout (260 CSS px wide at the current browser zoom). Letter shapes remain readable
  and there is no horizontal overflow. Captures: `07-ghost-glow-desktop.jpg` and
  `07-ghost-glow-phone.jpg`. Reset the temporary viewport override afterward.
- At 244 px scroll, title, background halo, and shell opacity are all 0: all new
  lettering glow disappears before the shell emerges. Returned to the opening.
- Forced-colors and print also remove the new core text shadow; these preferences
  were source-reviewed, not independently emulated. Existing script and resources
  are unchanged, so the previous resource checks remain applicable.

## Follow-up: restore cyan/purple with a lavender highlight

- Kept the `.006em` optical softness but replaced the primary RGB colors with normal
  layered cyan `#88E4EF`, deep purple `#20183E`, and a thin lavender `#9E8BC9` inner rim.
  The silver face masks their overlap; no screen-blending dependency remains.
- Visually checked desktop and 390 × 844 phone openings. Computed styles confirm the
  exact three colors and unchanged silver face. No horizontal overflow at either size.
- Saved `07-cool-prism-desktop.jpg` and `07-cool-prism-phone.jpg`; reset the viewport.
  Reveal script, accessible title, static fallbacks, and all controls are unchanged.
  Previous reveal/resource checks still apply to this CSS-only palette refinement.

## Follow-up: reference-matched optical color separation

- Replaced the broad violet/cyan text shadows with overlapping RGB glyph layers.
  Small diagonal offsets and a `.006em` blur produce a silver interior, red/cyan
  sides, and blue/yellow rims matching the supplied letter reference. Reduced the
  localized violet halo so the effect stays close to the type.
- Visually checked the desktop opening and 390 × 844 phone opening. No horizontal
  overflow at either size or at 320 × 760. The accessible heading remains GHOST;
  decorative layers sit within the existing aria-hidden letter spans.
- Verified the symbol-only interval at 366 px scroll: title, halo, and shell opacity
  all equal 0. Later in the reveal, shell opacity is 1, title opacity is 0, and the
  navigation is visible. Returned the viewport and scroll to the default opening.
- Resource/structure check passed for all 20 served files, ten sections, 30 unique
  IDs, one H1, and image alternatives. Browser warning/error logs were empty.
- Source-reviewed the silver fallback for unsupported screen blending and the plain
  no-script/reduced-motion type. Forced-colors and print remove decorative layers.
  These fallback modes were not independently emulated in this pass.
- Saved `07-optical-title-desktop.jpg` and `07-optical-title-phone.jpg` (ignored QA
  artifacts). Existing controls, media behavior, and reveal script were not changed.

## Follow-up: blurred fringes and rectangular controls

- Replaced crisp title offsets with blurred violet/cyan shadows while keeping the
  silver letter face clear. Small interactive text accents also use blur.
- Restored rectangular selectors, dialog-close decoration, and navigation. Removed
  diamond selection markers and the diamond backgrounds from links/menu controls.
- Visually checked the desktop title and rectangular navigation/selectors. Mid travel
  still selects the correct CAD image; computed control/header clip paths are `none`.
- At 390 × 844, the menu opens/closes without clipping or horizontal overflow; figure
  controls remain 44 px tall. Restored the default viewport and hero opening afterward.
- Saved `07-blurred-title.png` and `07-rectangular-controls.png` for the revised design.
  Existing original-pass screenshots below preserve the superseded hard-edge experiment.
- Whitespace checks passed. This is a CSS-only refinement; reveal timing and media
  behavior are unchanged. The original pass's broader resource checks remain applicable.

## Initial pass (control shapes and crisp fringes superseded)

- Structure/resource check passed: ten sections, 30 unique IDs, one accessible GHOST
  heading, seven images with alternatives (one decorative), valid local anchors,
  and complete responses for all 20 served files, including the new `prism.css`.
- Visually reviewed the desktop opening: silver lettering has violet/cyan fringes and
  a localized violet halo. The blue symbol remains the visual center.
- Verified the symbol-only scroll interval: title, halo, and shell opacity are all 0.
  The existing sequential text-out/shell-in reveal and late navigation remain intact.
- Reviewed angled glass navigation and hexagonal selectors. Switching to Mid travel
  displays `mechanism-mid.png`; Revision 2 Back displays `main-pcb-v2-back.png`.
  Enlarge opens the selected PCB in the image dialog; Close dismisses it.
- At 390 × 844, visually reviewed the opening, revealed Ghost, mobile menu, and PCB
  selectors. The dropdown extends below the shaped navigation without clipping.
  Selecting Electronics closes the menu; Rev 1 switches to the correct image.
- At 390 and 320 px widths, there is no horizontal overflow. All six figure selectors
  retain 44 px minimum heights; the PCB selectors fit within the 320 px viewport.
- Browser warning/error log was empty. Git whitespace check passed. Temporary viewport
  overrides were reset and the preview returned to the opening.
- Reduced-motion, no-script, reduced-transparency, forced-colors, and print paths were
  reviewed in source but not independently emulated this pass. Existing base behavior
  is preserved from iteration 06. No final video is available to test its replacement.

Review captures: `07-opening.png`, `07-controls.png`, `07-phone-opening.png`, and
`07-phone-menu.png`. Screenshots and the resource report are local ignored QA artifacts.

This is a visual experiment for builder review of fringe strength, violet intensity,
and geometric accents. It does not validate hardware, final media, or publication readiness.
