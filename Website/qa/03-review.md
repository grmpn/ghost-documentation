# Iteration 03 validation — October 10, 2026

- Preserved iterations 01 and 02. Iteration 03 changes title weight and square-edge
  styling; case-study content and engineering assets are retained.
- GHOST uses a real Ubuntu Sans ExtraBold 800 file. Verified computed weight 800 and
  glass panel radius 0 px in the browser.
- Font study includes real Ubuntu Sans 800, Sora 800, Space Grotesk 700, and Rajdhani 700
  font data, with local sources/licenses and small GHOST-only subsets for the inline view.
- Four-font overview and hero variants rendered correctly. Verified carousel navigation
  from Ubuntu Sans to Sora, and reviewed the overview's distinct letterforms.
- Full website checked at 1440 and 320 px widths without horizontal overflow. The font
  comparison was reviewed at 900, 736, and 320 px. Corrected narrow-screen title clipping;
  the widest Sora variant then fit without overflowing its text containers at 320 px.
- JavaScript syntax and local resource checks passed: ten website sections, 29 unique
  IDs, one H1, alternative text, local anchors/fonts, and 29 served files.
- Fragment readback passed: literal HTML, no full-document wrapper, approximately
  501 KB, embedded assets, four named variants. The standalone wrapper was regenerated
  after the responsive correction.
- No browser warnings or errors observed. Temporary viewport overrides were reset.
- Screenshots: `03-desktop.png`, `03-mobile.png`, `03-font-directions.png` (ignored by Git).

The host's optional title tracking/size controls are guarded and wired, but were not
interacted with in the standalone preview. Final family selection, broader type-system
decisions, real video, and physical validation remain open.
