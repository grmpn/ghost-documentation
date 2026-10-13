# Iteration 08 validation — updated October 12, 2026

## Current correction — overlapping photo fades, October 12

- Title and SVG still fade together at 8–32% of the runway. Light-only entrance now
  spans 8–20%, multiplied by the inverse full-lit fade at 14–32%. The full assembly
  arrives during the light entrance and finishes when the title disappears.
- No solo light-only hold. Sampling the curve at 0.01% intervals gives a peak light-only
  opacity of .8097 at 18.18% progress, when the full-lit layer is already appearing.
- Browser at 222.93 px scroll: text/SVG both .5004, light-only .7412, full-lit .2588.
  At 357.33 px / 32.05% progress: text/SVG/light-only all 0, full-lit 1.
- Raw photo filters/masks remain none, blend normal. Geometry/assets unchanged;
  prior responsive cover/alignment checks remain applicable. Script syntax passes.
- Screenshots: `08-overlapping-reveal.jpg` and `08-overlap-complete.jpg`.
  Reduced-motion/no-script fallbacks remain unchanged; no hardware/publication validation.

## Previous correction — full-screen cover and supplied pattern, October 12

- Replaced the primitive with a white filled display copy of `Assets/GhostPattern.svg`.
  `prepare-ghost-pattern.py` joins all 36 source line/arc segments into exactly two
  closed contours. It retains every coordinate/radius; reversing traversal flips only
  the arc sweep flag. Source SVG remains untouched. The profile is not redrawn.
- Rotated the display -45° (counterclockwise), placing the split vertically as in the
  photograph. Shared center: 51.7578% / 45.7176% of the 3840 × 2160 source image,
  approximately (1987.5, 987.5). SVG width 6.8628% of the canvas matches the rotated
  pattern to an approximately 312 px photographed span. Uniform scale; no distortion.
- Verified the 50% crossfade visually: supplied contour aligned with the photographed
  luminous shape; text/SVG opacity both .5004 and incoming photo .4996.
- Photos now cover the entire stage at `max(104vw, 204svh)` canvas width, with enough
  overscan to put all source-image borders outside the viewport. No new image editing,
  color processing, masks or blend modes. Cropping Ghost is explicitly accepted.
- Desktop 719 × 697 CSS px: photo spans x=-382.40..1039.61, y=-3.22..796.66 while
  stage spans x=0..707.20, y=0..697.07. Both light-only/full-lit visual checks passed.
- Phone 312 × 675 CSS px: photo spans x=-563.05..814.35, y=-3.11..771.67 and covers
  every stage edge. Opening title reserves space for the photo-scaled logo and fits
  without overlap or horizontal overflow. Raw light-only photo and glow verified.
- Wide-screen 1280 × 560 CSS px: geometry check confirms all four edges covered,
  exercising the width-driven sizing branch; no horizontal overflow.
- Restored default viewport and opening. Script syntax and resource/serving checks pass:
  27 files, 30 IDs, ten sections, one H1, eight labeled/decorative images. Source SVG
  conversion completed its 36-segment/two-contour validation. Fallbacks source-reviewed.
- Current screenshots: `08-pattern-opening.jpg`, `08-pattern-alignment.jpg`,
  `08-cover-light.jpg`, `08-cover-full.jpg`, `08-pattern-phone.jpg`, `08-cover-phone.jpg`.

## Previous correction — contained raw photos, October 12

- Builder rejected the color treatment. Removed the SVG color filter, both photo
  masks, screen blending, reduced shell opacity and persistent replacement eye.
- Both source PNGs remain unchanged. Their entire 16:9 canvases fit the viewport,
  including the original blue background glow and alpha; only transition opacity changes.
- Preserved opening SVG size and synchronized title/vector fade. The title stays above
  the unmasked photo during its fade, preventing the incoming background from dimming it twice.
- Desktop 719 × 697 CSS px: at 501.87 px scroll, light image opacity 1 and full image 0;
  at 825.07 px, light .5001 and full .4999; at 1003.73 px, light 0 and full 1.
  Computed filter/mask are none and blend mode is normal for both images.
- Complete canvas is within the viewport on desktop and phone (312 × 675 CSS px),
  with no horizontal overflow. Restored normal viewport and opening afterward.
- Resource/serving checks pass: 26 files, 30 IDs, ten sections, one H1 and eight
  labeled/decorative images. JavaScript syntax passes. Fallbacks source-reviewed:
  reduced-motion, no-script and print use only the full-lit image at full opacity.
- Current screenshots: `08-raw-light.jpg`, `08-raw-full.jpg`, `08-raw-phone.jpg`.
  The graded screenshots and matching-light pixel test below are superseded.

## Superseded graded assembly replacement — October 12

- Replaced the placeholder with unchanged display copies of the builder-selected
  `Assets/Hero/Front-Ghost/Full-Lit-Transparent.png` and
  `IMG_7039_05.667s_light-only.png`; both are 3840 × 2160. SHA-256 comparison confirmed
  byte-for-byte copies. Full image has RGBA alpha; light-only is RGB.
- Registered both at 51.75% / 45.8% on their 16:9 canvas. A tight feathered light mask
  keeps the shell hidden in the middle phase; the full image uses a complementary
  center mask, so the same illuminated eye remains throughout the final reveal.
- Both photos use one SVG color grade and screen blending into the `#070708` page.
  Blue-only spill is reduced with B = .82G + .18B, followed by the same channel curve
  (1.08 × channel − .055). The final shell opacity is .82. An outer mask feathers
  remaining background glow. These are reversible browser effects, not raster edits.
- Desktop check at 719 × 697 CSS px: at 222.93 px scroll, title/outline opacity both
  .5004 and light .4996; at 501.87 px only the light is visible; at 1003.73 px the
  full shell is revealed and navigation appears. Top spike remains below the header.
- Light and full-stage JPEG screenshots have effectively identical central light
  pixels: mean absolute RGB difference 0.000354/255, maximum 2/255 in a 30 px radius
  center region (JPEG boundary rounding). There is no blue/brightness crossfade jump.
- Phone check at 312 × 675 CSS px (390 × 844 requested under browser zoom): opening
  and full reveal fit without horizontal overflow. Restored normal viewport/top.
- Script syntax and resource/structure checks passed: 26 served files, 31 unique IDs,
  ten sections, one H1, eight labeled/decorative images. The resource checker now
  validates CSS fragment references against the inline SVG IDs.
- Reduced-motion, no-script and print fallbacks were source-reviewed; not independently
  emulated. They retain a static full assembly with the matched light. No new hardware
  validation or publication claim. Full-resolution PNG performance is not yet optimized.
- Screenshots: `08-assembly-synchronized.jpg`, `08-assembly-light.jpg`,
  `08-assembly-full.jpg`, `08-assembly-phone.jpg` (ignored local QA artifacts).

## Previous placeholder validation — October 11

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
