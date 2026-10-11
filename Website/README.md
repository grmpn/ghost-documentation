# Ghost website workspace

All website iterations, preview tooling, and QA artifacts live here. The rest of the
Ghost project remains the source of truth for facts, engineering notes, and original media.

## Current iteration

`iterations/06-symbol-reveal/` — the current responsive, buildless prototype.
The opening spells GHOST with the isolated blue symbol replacing the O. Silver Ubuntu
Sans Semibold 600 lettering frames the brighter symbol. As the visitor scrolls, the shell
emerges in front of the title and the lettering recedes. The full Ghost remains briefly
before the pinned opening releases into the project details. Navigation appears near the
end of the reveal. There is no automatic playback or scroll interception.

The builder invited font/color experiments for this composition. Semibold silver is the
first implementation choice, not a final font decision. Earlier iterations and the
four-font study in `iterations/03-bold-type/type-comparison.html` are preserved.
The ten-section engineering draft and validation qualifications remain in place.

## Preview

From the project root:

```powershell
node Website/preview.mjs
```

Open `http://127.0.0.1:4173/iterations/06-symbol-reveal/` for the current prototype, or
`http://127.0.0.1:4173/` for the iteration index. Stop the server with Ctrl+C. Pass a
different port as the last argument if needed. No package installation or build is required.

Use the local server in the Codex in-app browser, which blocks direct file navigation.
All fonts and media are local. Core content and links remain available without JavaScript;
view switches, media configuration, and the mobile menu use JavaScript.

## Organization

- `index.html` — visual iteration index.
- `iterations/06-symbol-reveal/` — the current symbol-to-shell scroll reveal.
- `iterations/06-symbol-reveal/hero.css` — opening composition, scroll-banner presentation, and contrast refinements.
- `iterations/06-symbol-reveal/assets/` — display copies, Ubuntu fonts/license, and the temporary front image.
- `iterations/06-symbol-reveal/media.js` — hero, demo, packaging, and rear-shell media configuration.
- `iterations/05-white-shell/` — preserved white shell and inverse title across the lower spike.
- `iterations/04-centered-hero/` — preserved O-to-eye overlay; rejected because the word looked off-center.
- `iterations/03-bold-type/` — preserved bold-title pass and font comparison.
- `iterations/02-monochrome-glass/` — preserved monochrome/glass direction before bold/sharp refinements.
- `iterations/01-foundation/` — the preserved first direction, including its illustrative SVG.
- `preview.mjs` — localhost-only static server, confined to this Website directory.
- `qa/` — local verification artifacts; not served by the preview server.

Make routine fixes within the current version. For a deliberate alternate direction or
major design revision, create a new numbered sibling such as `07-<description>/`, preserve
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
  opening. Update those too for an accurate no-JavaScript view. Iteration 06 uses two
  copies of the same image for the emerging neutral shell and isolated symbol; `app.js` updates both.
- Recheck the symbol mask, eye center, and shell color treatment in `hero.css` when replacing
  the image. The source eye at 49.6% / 49.5% is aligned with the central title slot.
- `app.js` maps scrolling through the 220-viewport-percent runway to shell opacity/brightness
  and title opacity. Reduced-motion preferences and disabled JavaScript use a static full
  Ghost with a complete GHOST title instead of the pinned reveal.

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
| `ghost-study.svg` (iteration 01 only) | Illustrative layout placeholder; not physical or CAD evidence |
| `ubuntu-sans-*.ttf` | Ubuntu Sans weights 400/500/600 from Google Fonts; Canonical font license included |
| New title fonts in iteration 03 | Ubuntu Sans 800, Sora 800, Space Grotesk 700, Rajdhani 700 from Google Fonts; exact URLs in `assets/type-study-sources.json`, licenses bundled |
| `*-title.ttf` in iteration 03 | Small GHOST-only subsets for the inline comparison; exact URLs in `assets/type-study-title-sources.json` |

Font sources: [Google Fonts](https://fonts.google.com/specimen/Ubuntu+Sans) and
[Canonical license](https://github.com/canonical/Ubuntu-Sans-fonts/blob/main/LICENCE.txt).

All prose is draft copy based on `Knowledge/Sections/` and current validation status.
All current versions preserve the front image's transparency. Iteration 06 uses CSS
brightness/desaturation and a masked symbol layer. The accessible H1 is named GHOST while
the visual center slot lets the blue symbol serve as the O. The shell is layered above
the silver letters and revealed by scroll progress. The source image is unchanged and
its use does not complete `HERO-01`. Glass surfaces have an opaque
fallback for unsupported blur and reduced-transparency preferences.
The CAD cam illustration is not evidence of an installed, validated revision. The routine
overview is a programmed sequence, not captured test data. Firmware and CAD download
links are intentionally absent while source-release decisions remain open.

This is a local prototype. Hosting/domain choices and public release remain open.
The page includes noindex metadata. Final media, factual review, performance polish,
and final hardware evidence are required before publication.
