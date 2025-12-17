# Idriss RS Studio – Static Site

This repository now contains a pure HTML, CSS, and JavaScript recreation of the Idriss RS Studio experience. No frameworks, build steps, or backend services are required—the project is ready to run in any modern browser.

## Structure

```
.
├── index.html          # Landing page
├── work.html           # Portfolio grid with filtering
├── youtube.html        # Channel highlights and video gallery
├── about.html          # Story, gallery, and contact info
├── 404.html            # Minimal not-found page
└── assets
    ├── css/style.css   # Global styles, variables, and animations
    ├── js/main.js      # Navigation, filters, and dynamic sections
    └── img/            # Brand imagery (add your own assets here)
```

## Getting Started

1. Clone or download the repo.
2. Open `index.html` (or any other page) directly in your browser.

Because everything is static, there is no build or install step. If you prefer a local server for live reload, use any lightweight option such as:

```sh
# Python
python -m http.server

# Node (http-server)
npx http-server .
```

## Customization

- **Colors, typography, spacing** – edit `assets/css/style.css`. All brand tokens are defined at the top via CSS custom properties.
- **Interactions & data** – edit `assets/js/main.js`. Work categories, project cards, and YouTube stats/videos are generated from simple arrays.
- **Images** – drop new assets into `assets/img/` and update the relevant HTML/CSS references.

## Deployment

The site works anywhere static hosting is available (GitHub Pages, Netlify Drop, Vercel static, AWS S3, etc.). Just upload the files as-is.

Enjoy telling your story with a fast, portable codebase!***
