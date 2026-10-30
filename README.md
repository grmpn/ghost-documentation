# Ghost — animatronic engineering case study

A single-page case study of Quinn Winkler's compact animatronic Ghost: mechanical
design, custom PCBs, embedded control, assembly, and a recorded performance.

Website source: [`Website/iterations/12-version-1.0/`](Website/iterations/12-version-1.0/).
Earlier iterations remain available locally through the [website workspace](Website/README.md).

## Deploy to GitHub Pages

The included [workflow](.github/workflows/deploy-pages.yml) publishes Version 1.0
directly at **https://grmpn.github.io/ghost-documentation/**. It uploads only the
current site's HTML, styles, scripts and assets, including local fonts, licenses,
images, and the demo video. No extra packages, custom domain, or secrets are needed.

1. Open the repository's [Settings → Pages](https://github.com/grmpn/ghost-documentation/settings/pages).
2. Under **Build and deployment → Source**, select **GitHub Actions**. The workflow
   is already provided; you do not need to create a suggested workflow.
3. Commit and push the deployment files and the complete Version 1.0 directory to
   `main`. From the project root, these commands stage the release files without
   staging unrelated changes to earlier iterations or local QA artifacts:

   ```powershell
   git add .gitignore .github/workflows/deploy-pages.yml README.md Website/README.md Website/build-pages.py Website/iterations/12-version-1.0/ Website/qa/pages-review.md Website/qa/12-review.md
   git commit -m "Prepare Version 1.0 for GitHub Pages"
   git push origin main
   ```

4. Open [Actions](https://github.com/grmpn/ghost-documentation/actions), select
   **Deploy Ghost to GitHub Pages**, and wait for both `build` and `deploy` to pass.
   If the changes were pushed before Pages was enabled, select **Run workflow** on
   `main` to retry.
5. Open **https://grmpn.github.io/ghost-documentation/**, or use **Visit site** in
   Settings → Pages. Check the opening images, demo playback, chapter navigation,
   mechanism/PCB controls, and phone layout.

Future pushes that change the current iteration or deployment tooling automatically
update the site. Pull requests validate the site without publishing it. A manual
workflow run publishes only when the selected branch is `main`.

GitHub Free supports Pages from public repositories; private repositories require
a supported paid plan. See GitHub's [publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
and [Actions deployment guide](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically).

## Verify and preview the deployment locally

From the project root, with Python 3.10+ installed:

```powershell
python Website/build-pages.py
python -m http.server 4174 --bind 127.0.0.1 --directory .codex-build/github-pages
```

Open **http://127.0.0.1:4174/**. Stop the server with Ctrl+C. The build checks local
HTML, CSS and JavaScript asset references, filename case, anchors and package size.
The generated output is ignored by Git and can be rebuilt at any time.

Edit the website in its numbered iteration, then rebuild; do not edit generated
files. To publish a future iteration, update `CURRENT_ITERATION` in
`Website/build-pages.py`, both source path filters and the JavaScript check path in
the workflow, and the current-iteration links in this README and `Website/README.md`.
Also update the website-assets exception in `.gitignore` to include the new iteration.
