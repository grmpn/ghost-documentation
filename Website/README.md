# Ghost website workspace

All website iterations, preview tooling, and QA artifacts live here. The rest of the
Ghost project remains the source of truth for facts, engineering notes, and original media.

## Current iteration

`iterations/11-charcoal-grid/` is the latest local comparison. It builds on iteration 10, inspired by the composition
of [Lusion’s Synthetic Human case study](https://lusion.co/projects/synthetic_human/).
Preview: `http://127.0.0.1:4173/iterations/11-charcoal-grid/`.

- Opens with GHOST, personal-project context and ownership on the left, and the supplied
  light-only photograph in a sharp rectangular box on the right.
- The whole case study now travels horizontally. Ordinary wheel/touch scrolling drives
  one stationary viewport; chapters enter from the right and leave to the left. There is
  no vertical section movement. The sequence ends at the closing panel rather than looping.
- The opening retains the light-only → full-lit Ghost transition and specifications.
  After that reveal, the entire opening slides left and the demo enters from the right.
- Nine sections remain; control context is folded into In motion and the separate routine
  timeline is removed. Mechanics and reflection have additional horizontal panels.
  There are 12 panels including the opening and ending.
- In motion pairs the title and scripted/open-loop performance explanation on the left
  with the capture panel on the right. Phones stack these, with a compact short-phone
  treatment. The navigation links directly to In motion.
- Neutral iteration 02-style navigation, Rajdhani page text, sharp corners and normal
  cursor remain. Chapter links, hash targets and keyboard focus move to the relevant panel.
- `horizontal.css` owns the continuous layout; `app.js` constructs panels from the existing
  semantic sections. Native vertical input maps to the track’s horizontal translation.
  Horizontal trackpads and left/right arrow keys are supported. The first 0.58 viewport
  widths of scroll drive the hero reveal, with specs becoming complete at the handoff
  (no still hold). Horizontal travel then advances at 1.2 times the scroll distance.
- Phones also use the horizontal sequence, with compact layouts that fit one viewport.
  Reduced motion omits the opening choreography and uses instant chapter jumps. Print
  and no-JavaScript views retain readable document flow. No vertically scrolling inner panels.
- Source PNGs are unchanged. The 16:9 frame is larger (72vw, capped by viewport height)
  and extends 18% beyond the right edge initially and 18% beyond the left edge at the
  specifications pose. Opening text translates up to 18vw left while fading. Phones use
  a 112vw frame below the copy with the same edge-crop proportion. Full local
  Rajdhani 400/500/600 files, source metadata and SIL OFL remain bundled. Existing
  outlined engineering artwork is retained. All evidence qualifications remain.
- UI rectangles are borderless, including panels, navigation surfaces, tables, dialogs and
  view controls; selected controls use fill, while keyboard focus outlines remain.
- Electronics pairs the final main PCB (Front/Back) with the LED PCB, with shared
  explanation between them. Revision 1 and the separate LED panel are removed.
  Enlarged square display crops exclude the orientation gimbals while keeping the full
  boards; enlarged dialogs use the same crop. Original PNGs remain unchanged.
  Phones retain the readable 960px horizontal composition.
- Prior iterations are preserved. This is a local comparison, not final acceptance.

Iteration 11 uses opaque charcoal panels in dark sections and light neutral gray panels in white sections, with contrasting text and gray/charcoal controls. Architecture through Electronics sit on palette white (#EFEFF0), including the Mechanics continuation; the page is black (#070708) before Architecture and from Revisions onward. These bands meet at hard edges. Fixed navigation and the scroll indicator invert locally over the moving background; expanded phone navigation stays opaque for readability. Navigation now floats without a bar background, with responsive 16–24px Rajdhani 600 text and 32px desktop edge insets. Dialogs keep the charcoal fill; PCB headers, images and captions align. `surfaces.css` owns this treatment. Iteration 10 is preserved.

Section reading styles are centralized in `type-layout.css`: 48/20/13px title/body/note
on desktop, 32/16/12px for compact viewports and 28/14/12px on the smallest phones.
Long panels start at 18svh; Brief, Reflection, Future and the footer start at 28svh,
with header-clearance minimums. Phones use 12svh/20svh plus minimum clearance. The
specifications reveal shares these rules and omits the Compact by design label.

See `qa/11-review.md` for validation and limits.

## Earlier comparisons

Latest comparison: `iterations/09-monochrome-real-image/` copies iteration 02 with
the builder-selected `Assets/Hero/Front-Ghost/Full-Lit-Transparent.png` as its hero.
Preview at `http://127.0.0.1:4173/iterations/09-monochrome-real-image/`.
The image is copied byte-for-byte into `assets/ghost-assembly-full.png`; iteration
02's layout, typography, image filters and fade masks are retained. The photo is
scaled to 1.75 times its contained size to approximate the former square reference's
visual footprint; overlap with the text is accepted for this comparison. Hero preload,
fallback dimensions, alt text and caption match the real assembly image.
Iterations 02 and 08 remain preserved; this comparison does not select a final design.

`iterations/08-vector-reveal/` — preserved vector-reveal prototype.
The opening spells GHOST with the builder's white Ghost-pattern SVG replacing the O. Rajdhani
Semibold 600 is the current angular title, with crisp silver lettering (`#DFE1E8`) without chromatic aberration,
blur, or text glow. The supplied SVG profile is preserved, filled white and rotated 45° counterclockwise. Purple `#20183E`
and cyan remain on selected interactive surfaces. Controls and navigation
use rectangular silhouettes with square corners and restrained violet fills. Scrolling
fades the lettering and vector together as the real blue light appears. The full Ghost
starts appearing during that fade and is fully visible when the letters disappear.
The light-only photo is a passing transition layer with no solo hold. The full Ghost remains
before the pinned opening releases into the project details. Navigation appears near the
end of the reveal. There is no automatic playback or scroll interception.

The hero now uses the real assembly photos selected from `Assets/Hero/Front-Ghost/`.
The complete light-only capture fades in and out during the overlapping transition
to the complete full-lit transparent image. Both display exactly as supplied, including
their background glow and original transparency. No photo filters, masks, color grading,
blend modes or reduced final opacity are applied. The images cover the full viewport with
slight overscan to hide canvas edges; Ghost cropping is accepted by the builder.

The builder's latest sequence moves from a simple vector to the real light to the full
Ghost. Iteration 07 preserves the previous opening. Body copy remains
Ubuntu Sans. Chromatic aberration, the title halo, and color-split control text shadows
remain removed. See
`Knowledge/Design/Typography.md` for the current type direction.
Rectangular controls replace the first
hexagonal experiment. This is an experiment for review. Earlier iterations and the
four-font study in `iterations/03-bold-type/type-comparison.html` are preserved.
The ten-section engineering draft and validation qualifications remain in place.

## Preview

From the project root:

```powershell
node Website/preview.mjs
```

Open `http://127.0.0.1:4173/iterations/11-charcoal-grid/` for the current prototype, or
`http://127.0.0.1:4173/` for the iteration index. Stop the server with Ctrl+C. Pass a
different port as the last argument if needed. No package installation or build is required.

Use the local server in the Codex in-app browser, which blocks direct file navigation.
All fonts and media are local. Core content and links remain available without JavaScript;
view switches, media configuration, and the mobile menu use JavaScript.

## Organization

- `index.html` — visual iteration index.
- `iterations/11-charcoal-grid/` — current solid charcoal panels and final-board electronics.
- `iterations/10-sliding-reveal/` — preserved boxed photo and sliding specifications reveal.
- `iterations/08-vector-reveal/` — preserved vector-to-light-to-shell scroll reveal.
- `iterations/07-violet-prism/` — preserved Rajdhani Semibold title with the real light from the start.
- `iterations/08-vector-reveal/hero.css` — Rajdhani title, opening composition, and scroll reveal.
- `iterations/08-vector-reveal/prism.css` — clean silver title, violet/blue surface accents, and rectangular controls.
- `iterations/08-vector-reveal/assets/` — real assembly display copies, vector, technical figures, and local fonts/licenses.
- `iterations/08-vector-reveal/media.js` — hero, demo, packaging, and rear-shell media configuration.
- `../Assets/GhostPattern.svg` — builder-supplied profile; `assets/ghost-light-pattern.svg` is the white filled display copy.
- `qa/prepare-ghost-pattern.py` — joins the source's 36 existing line/arc segments into two filled contours without moving geometry.
- `iterations/06-symbol-reveal/` — preserved silver title and sequential text-out/shell-in reveal.
- `iterations/05-white-shell/` — preserved white shell and inverse title across the lower spike.
- `iterations/04-centered-hero/` — preserved O-to-eye overlay; rejected because the word looked off-center.
- `iterations/03-bold-type/` — preserved bold-title pass and font comparison.
- `iterations/02-monochrome-glass/` — preserved monochrome/glass direction before bold/sharp refinements.
- `iterations/01-foundation/` — the preserved first direction, including its illustrative SVG.
- `preview.mjs` — localhost-only static server, confined to this Website directory.
- `qa/` — local verification artifacts; not served by the preview server.

Make routine fixes within the current version. For a deliberate alternate direction or
major design revision, create a new numbered sibling such as `09-<description>/`, preserve
the reviewed previous iteration, and update this README and the index. Do not create
alternative website files in the project root or original Assets directory.

## Replacing placeholders

Keep original captures in the project-level `Assets/`. Copy the selected website-ready
file into the iteration's `assets/` folder, then update its entry in `media.js`:

- Set `src` to the local path, edit `alt` and `caption`, and set `placeholder: false`.
- Set `fit` (`contain` or `cover`) and `position` for image composition.
- For the demo, set `src`, optional `poster`, and an optional WebVTT `captions` path.
  A real video player appears only when a video source is supplied.
- The hero has fallback images, a screen-reader caption, and a visible caption below the
  opening. Update those too for an accurate no-JavaScript view. `hero.src` selects the
  full assembly, while `hero.lightSrc` selects the light-only image. The third image is
  the independent vector and is not replaced by media.js.
- The registered 3840 × 2160 photos use a 16:9 canvas, with the eye at 51.7578% / 45.7176%
  (approximately 1987.5 / 987.5 source pixels). Photo width is `max(104vw, 204svh)`;
  this covers all viewport edges while positioning the light at 50% / 52% of the stage.
  The SVG shares that center, with width 6.8628% of the photo canvas and a -45° rotation.
  Its rotated contour matches the photographed pattern's approximately 312 px span.
  Recheck alignment when replacing sources. Keep raw colors and background glow:
  only scroll-transition opacity changes. The light-only image fades to 0
  while the full image fades to 1; there is no persistent replacement eye layer.
- `prism.css` owns the new palette and geometric decoration. Main copy and engineering
  figure colors retain their established contrast; selected rectangular controls use a
  blue edge, and focus outlines remain visible.
- `app.js` maps scrolling through a 260-viewport-percent runway to the staged reveal:
  8–32% fades the vector and text together. The light-only entrance spans 8–20%, multiplied
  by the inverse of the full-lit fade at 14–32%, so it never reaches full opacity or holds alone.
  The full image is complete at 32%; navigation appears after 90%. The sequence reverses
  with scroll. Reduced-motion and disabled JavaScript show a static full Ghost and
  complete title, with the vector hidden. There is no scroll interception.

The cam viewer and PCB viewer use the three pose / three view entries in `app.js`.

## Evidence and provenance

Existing source masters are untouched:

| Website asset | Project source |
| --- | --- |
| `system-architecture.svg` | `Assets/Electrical-Renders/Electrical-Architecture-GreyPCBs.svg` |
| `main-pcb-v2-front.png` / `main-pcb-v2-back.png` | `Assets/Electrical-Renders/Ghost_MainPCB_V2_Front.png` / `Ghost_MainPCB_V2_Back.png` |
| `main-pcb-v1-front.png` | `Assets/Electrical-Renders/Ghost_MainPCB_V1_Front.png` |
| `led-pcb-front.png` | `Assets/Electrical-Renders/ghost_LEDPCB_Front.png` |
| `mechanism-closed.png` / `mechanism-mid.png` / `mechanism-open.png` | `Assets/Cam-Follower-Renders/0001.png` / `0045.png` / `0090.png` |
| `ghost-assembly-full.png` | Byte-for-byte copy of `Assets/Hero/Front-Ghost/Full-Lit-Transparent.png`, 3840 × 2160 RGBA; builder-selected assembly presentation cutout |
| `ghost-assembly-light.png` | Byte-for-byte copy of `Assets/Hero/Front-Ghost/IMG_7039_05.667s_light-only.png`, 3840 × 2160 RGB; registered light-only capture |
| `ghost-front.webp` | Retained unused reference copy of `Assets/temp/Ghost.webp`; earlier iterations still use it |
| `ghost-light-pattern.svg` | White filled version of `Assets/GhostPattern.svg`; all 36 original line/arc segments retained, with rotation applied in CSS |
| `ghost-diamond-outline.svg` | Retained unused earlier primitive from `Assets/Hero/ghost-diamond-outline.svg` |
| `ghost-study.svg` (iteration 01 only) | Illustrative layout placeholder; not physical or CAD evidence |
| `ubuntu-sans-*.ttf` | Ubuntu Sans weights 400/500/600 from Google Fonts; Canonical font license included |
| New title fonts in iteration 03 | Ubuntu Sans 800, Sora 800, Space Grotesk 700, Rajdhani 700 from Google Fonts; exact URLs in `assets/type-study-sources.json`, licenses bundled |
| `*-title.ttf` in iteration 03 | Small GHOST-only subsets for the inline comparison; exact URLs in `assets/type-study-title-sources.json` |
| `rajdhani-600-title.ttf` in iteration 08 | Official 5,488-byte GHOST subset served locally; source in `assets/rajdhani-title-source.json`, SIL OFL in `assets/rajdhani-OFL.txt` |

Font sources: [Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans) and
[Canonical license](https://github.com/canonical/Ubuntu-Sans-fonts/blob/main/LICENCE.txt).

All prose is draft copy based on `Knowledge/Sections/` and current validation status.
Iteration 08 displays the supplied PNGs without additional image processing, preserving
their colors, background glow and alpha. The accessible H1 is named GHOST while
the visual center slot first holds the vector and then the real light. The full-lit image
appears while the silver letters fade and is complete when they disappear. Both source images are unchanged;
final Hero acceptance and hardware evidence remain open under `HERO-01`. Glass surfaces have an opaque
fallback for unsupported blur and reduced-transparency preferences.
The CAD cam illustration is not evidence of an installed, validated revision. The routine
overview is a programmed sequence, not captured test data. Firmware and CAD download
links are intentionally absent while source-release decisions remain open.

This is a local prototype. Hosting/domain choices and public release remain open.
The page includes noindex metadata. Final media, factual review, performance polish,
and final hardware evidence are required before publication.
