# Hiba Habiballah · Research Portfolio

A static, English-language portfolio covering Hiba Habiballah’s doctoral research, selected projects, engineering experience, education, skills, and achievements. It uses React, TypeScript, Vite, Tailwind CSS, Motion for React, Lucide icons, and locally hosted Garet Book and Heavy fonts.

## Run locally

Use Node.js 20.19+ or 22.12+ on supported release lines. The deployment workflow uses Node.js 24.

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The preview command serves the last production build.

## Update content and assets

Edit `src/data/portfolio.ts`. The types show the supported fields, and the existing entries provide examples.

- **Profile and portrait.** Put your portrait in `public/images/` and set `portrait: { path: 'images/portrait.webp', alt: 'Hiba Habiballah' }` within the profile object. A square or near-square optimized image works well. The portfolio currently uses the supplied portrait as a transparent cutout at `public/images/hiba-cutout-dark-hair.png`.
- **CV.** Put your public CV at `public/cv.pdf` and add `cv: 'cv.pdf'` to the profile object. The hero will show **Download CV**. It currently offers **Request CV** by email.
- **Social profiles.** Add the confirmed `github` and `scholar` URLs to the profile object to display their links.
- **Projects.** Add an entry to `projects` with its title, domain, description, and tags. Optionally include a status, verified results, repository or details URL, and a screenshot with alt text. Keep screenshots in `public/images/` and use a path relative to `public/`.
- **Metadata.** Edit the browser title, description, and Open Graph text in `index.html` if the site identity changes.

## Publish on GitHub Pages

1. On GitHub, create an empty public repository named `GITHUB_USERNAME.github.io`, using your actual GitHub username. Leave the initial README, license, and gitignore unchecked.
2. Open **Settings → Pages** for that repository. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Run the following from this project directory, replacing the example username.

```sh
GITHUB_USERNAME='replace-with-your-username'
git init -b main
git add .
git commit -m "Build research portfolio"
git remote add origin "https://github.com/${GITHUB_USERNAME}/${GITHUB_USERNAME}.github.io.git"
git push -u origin main
```

4. Open **Actions → Deploy portfolio to GitHub Pages** to watch the run. The deployment job links to the published site at `https://GITHUB_USERNAME.github.io/`. You can also run the workflow manually from the **Actions** tab.

The workflow builds and deploys on pushes to `main`. For a project repository, push to the project’s repository URL and enable Pages the same way. The workflow derives the base path from Pages configuration. If you need an override, set the repository Actions variable `VITE_BASE_PATH` to a value such as `/my-repo/`.

To test a project-repository build locally:

```sh
VITE_BASE_PATH=/my-repo/ npm run build
VITE_BASE_PATH=/my-repo/ npm run preview
```

Open the preview URL with `/my-repo/` appended. Section links use URL fragments such as `#research`, so bookmarks and reloads use the same static HTML document.

See the [Vite GitHub Pages guide](https://vite.dev/guide/static-deploy.html#github-pages) for the platform setup.

## Font attribution

Garet Book and Garet Heavy by Type Forward. Free webfont information is available at https://garet.typeforward.com/. The files were downloaded from the foundry’s listing at https://www.dafont.com/garet.font.

## Company logo sources

These company logo assets are retained for reference.

- TotalEnergies — https://totalenergies.co.za/themes/custom/butterfly_theme/logo.svg?v=1.2 (background rectangle removed).
- Enosis Group — https://www.enosis.ma/wp-content/uploads/2026/09/enosis-green.png (transparent PNG).
- Technocolabs — https://www.technocolabs.com/logo.svg (transparent monochrome SVG).

Enosis retains its source green in both themes. The Technocolabs monochrome SVG uses purple #7c3aed as requested.
