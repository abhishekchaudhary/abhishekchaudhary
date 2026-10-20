# Publish Abhishek's portfolio with GitHub Pages

This project contains:
- `README.md` — the GitHub profile README.
- `docs/index.html`, `docs/style.css`, `docs/main.js` — the full responsive website.
- `docs/profile-banner.svg` and `docs/favicon.svg` — editable vector graphics.
- `docs/.nojekyll` — static publishing support.

## One-time publishing setup

The files are meant for the existing **abhishekchaudhary/abhishekchaudhary** repository. They can coexist with its profile README.

1. Push/copy `README.md` to the repository root and `docs/` to its `docs/` folder.
2. Open https://github.com/abhishekchaudhary/abhishekchaudhary/settings/pages
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose **main** and **/docs**, then click **Save**.
5. Wait for the Pages deployment to finish.
6. Visit https://abhishekchaudhary.github.io/abhishekchaudhary/

The GitHub Pages URL will return 404 until Pages has been enabled and successfully published.

The website is static, with no build step and no tracking scripts. Google Fonts are loaded when online; local fallbacks are included. The project artwork is made with CSS and HTML. The `og:image` in the HTML points at the intended published SVG; some social platforms may not render SVG previews.
