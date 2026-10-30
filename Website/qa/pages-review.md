# GitHub Pages deployment preparation — 2026-10-30

Publication source: `Website/iterations/12-version-1.0/`.
Generated artifact: `.codex-build/github-pages/` (ignored by Git).
Expected hosted URL: https://grmpn.github.io/ghost-documentation/.

## Changes

- Added a GitHub Actions workflow: validate on matching pull requests; build and
  deploy matching pushes to main; allow manual deployment from main. Deployment
  permissions are confined to the deployment job. Deployments are serialized.
- Added a dependency-free Python build script. Copy the current iteration's HTML,
  CSS, JS and complete assets folder to the artifact root; add `.nojekyll`.
  The iteration index, older iterations, QA, preview tools, original media and
  private project notes are absent from the published artifact.
- Removed prototype noindex metadata only from Version 1.0. Relative resource URLs
  already support project Pages; no page layout or interaction code changed.
- Anchored `/Assets/` in the root ignore file. The earlier `Assets/` pattern also
  excluded nested lowercase website `assets/` on this Windows checkout. Website
  display copies can now be committed normally; original project assets stay ignored.
  An explicit current-iteration exception keeps older prototypes' assets ignored as
  before, avoiding an accidental upload of every historical media copy.
- Added repository-level deployment/preview instructions and updated website docs.

## Verification

- Python build passed: 53 resource references, 42 output files, 53.75 MB total.
  Largest file is the 37,530,110-byte MP4, below the normal GitHub file limit.
- All 41 source files copied byte-for-byte; `.nojekyll` is the only extra file.
  Fonts, licenses and media provenance are included.
- Build checks HTML resource/anchor references, image alt presence, duplicate IDs,
  one H1, CSS URLs, quoted JavaScript assets, exact filename case, relative paths,
  missing assets, prototype noindex and package/file size.
- Negative checks rejected incorrect filename case, a root-relative stylesheet,
  a missing stylesheet, a broken anchor, prototype noindex and a missing video in
  `media.js`. Checks changed only generated files, followed by a clean rebuild.
- Temporary local HTTP servers served all 42 files with status 200 and correct
  Content-Length at both `/` and `/github-pages/`. MP4 MIME type was `video/mp4`.
  Both servers were shut down. An arbitrary subpath tests repository-style URLs.
- `node --check` passed for `app.js` and `media.js`.
- Git ignore checks confirmed all 41 current-iteration files are available to add;
  original project media and generated output remain ignored.
- Git diff whitespace check passed. Existing unrelated working-tree edits preserved.

## Limits and next step

No commit/push, GitHub repository setting change or hosted workflow run was performed.
Enable Settings → Pages → GitHub Actions, then commit/push the release files using
the root README and check both jobs and the hosted site. Workflow action versions
and settings follow GitHub's current
[deployment guide](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically).

No new visual browser review was needed for this packaging change; Version 1.0's
desktop/pane/phone and playback checks remain in `12-review.md`. Local serving does
not verify the first hosted deployment. Hardware/endurance validation and final
visual/factual acceptance remain separate, with existing qualifications retained.
