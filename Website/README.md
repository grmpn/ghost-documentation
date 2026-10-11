# Ghost website workspace

All website iterations, preview tooling, and QA artifacts live here. The rest of the
Ghost project remains the source of truth for facts, engineering notes, and original media.

## Current iteration

`iterations/08-vector-reveal/` — the current responsive, buildless prototype.
The opening spells GHOST with a hollow silver vector diamond replacing the O. Rajdhani
Semibold 600 is the current angular title, with crisp silver lettering (`#DFE1E8`) without chromatic aberration,
blur, or text glow. The SVG contains two angular sides and no interior circle. Purple `#20183E`
and cyan remain on selected interactive surfaces. Controls and navigation
use rectangular silhouettes with square corners and restrained violet fills. Scrolling
fades the lettering and vector together as the real blue light appears. The real light
holds alone before the shell fades in. The full Ghost remains briefly
before the pinned opening releases into the project details. Navigation appears near the
end of the reveal. There is no automatic playback or scroll interception.

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

Open `http://127.0.0.1:4173/iterations/08-vector-reveal/` for the current prototype, or
`http://127.0.0.1:4173/` for the iteration index. Stop the server with Ctrl+C. Pass a
different port as the last argument if needed. No package installation or build is required.

Use the local server in the Codex in-app browser, which blocks direct file navigation.
All fonts and media are local. Core content and links remain available without JavaScript;
view switches, media configuration, and the mobile menu use JavaScript.

## Organization

- `index.html` — visual iteration index.
- `iterations/08-vector-reveal/` — the current vector-to-light-to-shell scroll reveal.
- `iterations/07-violet-prism/` — preserved Rajdhani Semibold title with the real light from the start.
- `iterations/08-vector-reveal/hero.css` — Rajdhani title, opening composition, and scroll reveal.
- `iterations/08-vector-reveal/prism.css` — clean silver title, violet/blue surface accents, and rectangular controls.
- `iterations/08-vector-reveal/assets/` — display copies, Ubuntu and Rajdhani fonts/licenses, and the temporary front image.
- `iterations/08-vector-reveal/media.js` — hero, demo, packaging, and rear-shell media configuration.
- `../Assets/Hero/ghost-diamond-outline.svg` — editable vector master; a display copy lives in iteration 08's assets.
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
  opening. Update those too for an accurate no-JavaScript view. Iteration 08 uses two
  copies of the same photo for the emerging neutral shell and isolated light; `app.js`
  updates both. The third image is the independent vector and is not replaced by media.js.
- Recheck the symbol mask, eye center, and shell color treatment in `hero.css` when replacing
  the image. The source eye at 49.6% / 49.5% aligns the vector and real light with the
  central title slot. Recheck the vector size/alignment after replacing the source photo.
- `prism.css` owns the new palette and geometric decoration. Main copy and engineering
  figure colors retain their established contrast; selected rectangular controls use a
  blue edge, and focus outlines remain visible.
- `app.js` maps scrolling through a 260-viewport-percent runway to the staged reveal:
  8–32% fades the vector and text together into the real light; 32–58% holds the light
  alone; 58–90% reveals the shell; navigation appears after 90%. The sequence reverses
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
| `ghost-front.webp` | Byte-for-byte copy of `Assets/temp/Ghost.webp`; temporary reference image, not a final build photograph |
| `ghost-diamond-outline.svg` | Display copy of `Assets/Hero/ghost-diamond-outline.svg`; simple vector abstraction, not physical/CAD evidence |
| `ghost-study.svg` (iteration 01 only) | Illustrative layout placeholder; not physical or CAD evidence |
| `ubuntu-sans-*.ttf` | Ubuntu Sans weights 400/500/600 from Google Fonts; Canonical font license included |
| New title fonts in iteration 03 | Ubuntu Sans 800, Sora 800, Space Grotesk 700, Rajdhani 700 from Google Fonts; exact URLs in `assets/type-study-sources.json`, licenses bundled |
| `*-title.ttf` in iteration 03 | Small GHOST-only subsets for the inline comparison; exact URLs in `assets/type-study-title-sources.json` |
| `rajdhani-600-title.ttf` in iteration 08 | Official 5,488-byte GHOST subset served locally; source in `assets/rajdhani-title-source.json`, SIL OFL in `assets/rajdhani-OFL.txt` |

Font sources: [Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans) and
[Canonical license](https://github.com/canonical/Ubuntu-Sans-fonts/blob/main/LICENCE.txt).

All prose is draft copy based on `Knowledge/Sections/` and current validation status.
All current versions preserve the front image's transparency. Iteration 08 uses CSS
brightness/desaturation and a masked symbol layer. The accessible H1 is named GHOST while
the visual center slot first holds the vector and then the real light. The shell is layered above
the silver letters but only revealed after they have fully faded. The source image is unchanged and
its use does not complete `HERO-01`. Glass surfaces have an opaque
fallback for unsupported blur and reduced-transparency preferences.
The CAD cam illustration is not evidence of an installed, validated revision. The routine
overview is a programmed sequence, not captured test data. Firmware and CAD download
links are intentionally absent while source-release decisions remain open.

This is a local prototype. Hosting/domain choices and public release remain open.
The page includes noindex metadata. Final media, factual review, performance polish,
and final hardware evidence are required before publication.
