# Iteration 05 validation — October 11, 2026

Current prototype: `Website/iterations/05-white-shell/`.

## Latest follow-up: centered O and balanced letter spacing

- Five `.72em` letter cells place the O at the full title's midpoint. The single H1
  retains the accessible name GHOST, with decorative letter spans hidden from assistive technology.
- Desktop: image center 530.995 px, title and O center 531 px. Phone: all centers
  187.333 px. Visually reviewed both; no horizontal overflow and the title stays in view.
- Lower-spike title height, image size, and inverse colors are unchanged.
- Resource/structure check passed: ten sections, 30 IDs, one H1, seven image alternatives,
  and 19 complete resources. Refreshed desktop and phone screenshots.

## Previous follow-up: image beyond the viewport and higher title

- Image size is now `min(112svh, 116vw)`, centered within the opening and cropped at
  the viewport edges. At the desktop preview it increased from 784 px to 976 px.
- The title begins 72% down the image box. At the same desktop preview its top moved
  from about 710 px to 650 px, crossing the wider lower spike with visible color inversion.
- Visually reviewed desktop and 390 × 844 phone; checked 844 × 390 landscape geometry.
  The word and image stay centered, the title stays in view, and no horizontal overflow
  occurs. Intentional image cropping is part of the larger composition.
- Refreshed desktop/phone screenshots. Only hero CSS changed; source media, resource
  paths, and interaction code remain unchanged.

## Previous follow-up: larger Ghost and bottom-spike overlap

- Raised the image box from 64% to 90% of viewport height, constrained by screen width,
  and removed the old 720 px cap. At the current desktop size it grows about 41%.
- Raised the centered title with a negative margin of 10% of image size. The lettering
  slightly crosses the visible bottom spike and retains its difference blend.
- Visually reviewed desktop, 390 × 844 phone, and 844 × 390 landscape. The title and
  image remain centered, fit the opening viewport, and cause no horizontal overflow.
- Refreshed `05-desktop.png` and `05-phone.png`. No source asset or interaction code changed.
- The checks below describe the initial pass; the follow-up supersedes its no-overlap layout.

## Initial pass

- Resource/structure check passed: ten sections, 30 unique IDs, one H1, seven images
  with alt attributes (one decorative layer), valid local anchors, and 19 served resources.
- Visually reviewed desktop, 390 × 844 phone, and 844 × 390 landscape. Also checked
  320 × 568 geometry. No horizontal overflow; the complete word and image share a
  centerline, with the title entirely beneath the image and inside the opening viewport.
- Supporting details start at the next viewport. The banner reveals on scroll and hides
  on return to top, restoring `inert` and `aria-hidden` while hidden.
- Confirmed the title's computed difference blend and shell brightness/grayscale filter.
  Over the plain dark background, the inverse title appears white. No image overlap is
  used to demonstrate inversion, because the requested title placement is below the image.
- Source and display image SHA-256 hashes match; source artwork is untouched.
- Browser warning/error log was empty. `git diff --check` found no whitespace errors.
- Saved `05-desktop.png` and `05-phone.png` for local review (ignored by Git).
- Existing figure interactions are unchanged from iteration 04 and were not broadly
  retested. Reduced-motion, no-script, and print fallbacks were not independently emulated.

This checks the prototype layout, not final photography, color accuracy of the real
filament, hardware performance, or publication readiness. The shell treatment is a
reversible presentation experiment using the temporary supplied reference.
