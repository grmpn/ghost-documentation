# Iteration 01 validation — October 10, 2026

For the current pass, see [iteration 05 validation](05-review.md), with
[iteration 04 validation](04-review.md),
[iteration 03 validation](03-review.md) and
[iteration 02 validation](02-review.md) preserved. The record below
is preserved for comparison.

- Node syntax checks passed for the preview server, media configuration, and interaction script.
- `check-site.py` verified ten sections, unique IDs, one H1, alternative text, local
  anchors, CSS font resources, and complete HTTP responses for all 16 served files.
- In-app browser checked at the default 1077 × 815 viewport and responsive widths of
  768, 390, and 320 pixels. No horizontal overflow after the narrow-screen correction.
- Verified cam pose switching, PCB front/back switching, image-dialog opening/closing,
  and mobile menu opening/closing after section navigation.
- Browser logs reported no warnings/errors; loaded images had no missing resources.
- Fixed the smallest-phone overflow caused by a demo minimum height competing with
  its aspect ratio; the final placeholder keeps the planned 16:9 video ratio.
- Saved `01-desktop.png` and `01-mobile.png` for local design review (ignored by Git).
- Direct `file:` navigation is blocked by the in-app browser's protocol policy, so
  standalone-file behavior was not browser-verified. The localhost HTTP preview works.

This verifies the website prototype, not the physical Ghost, final footage, measured
performance, or publication readiness. The demo-player replacement path remains untested
with real video because final footage is not yet available. Firmware hardware validation
and final media tasks remain open.
