# Iteration 02 validation — October 10, 2026

Current version: `Website/iterations/02-monochrome-glass/`.

- Source front image and website copy have matching SHA-256 hashes. The original
  `Assets/temp/Ghost.webp` remains unchanged; its grayscale and fade are CSS effects.
- JavaScript syntax checks passed for the interaction script, media configuration,
  and preview server.
- Resource checks passed: ten sections, 29 unique IDs, one H1, all six HTML images with
  alternative text, local anchors/fonts, and complete HTTP responses for 17 files.
- Browser reviewed at 1440 × 1000, default desktop, 768 × 1024, 390 × 844, and 320 × 740.
  No horizontal document overflow; the oversized hero is intentionally clipped.
- Mechanism pose switching, PCB view switching, figure dialog opening/closing, and
  mobile menu opening/navigation/closing worked.
- Browser logs reported no warnings or errors; all page images loaded.
- Saved `02-desktop.png` and `02-mobile.png` for review. Temporary viewport overrides
  were reset after testing.
- Main-page text is about 814 words versus 1,585 in iteration 01, measured from HTML
  text inside `main`, including headings, captions, labels, and controls.
- Iteration 01 was preserved. No new external design references were gathered.

Glass fallback and reduced-transparency styles are present but were not separately
visually emulated. Real video replacement, final photography, hardware validation,
final measurements, and publication readiness remain outside this prototype check.

Run the resource check from the project root while the local server is running:

```powershell
python Website/qa/check-site.py 02-monochrome-glass
```
