# Sanjit Suri Trading LLC — website

Single-page marketing site for a Dubai truck and van tyre supplier. Contact and lead generation only: no catalogue, cart, pricing or backend.

## Stack

Plain HTML, CSS and a few lines of JavaScript. No frameworks, build step, web fonts or third-party scripts.

| File | Purpose |
| --- | --- |
| `index.html` | All page content and copy |
| `styles.css` | Styling (colours are CSS variables at the top of the file) |
| `script.js` | Contact form handler (opens the visitor's email app with the message pre-filled) and footer year |
| `assets/logos/*.svg` | Brand logos, minified, 0.8–9 KB each |
| `assets/favicon.svg` | Favicon |

Total page weight is under 100 KB. Logos load lazily.

## Editing

- **Copy**: edit the text directly in `index.html`. Sections are marked with comments (Hero, About, Brands, Why us, Contact, Footer).
- **Phone / email**: search `index.html` for `+971506250917` and `wxy7@hotmail.com`. The phone appears in `tel:` links and the email in `mailto:` links and in `script.js`.
- **Accent colour**: change `--accent` (buttons and links) and `--accent-light` (accent text on dark backgrounds) in `styles.css`.

## Brand logos

Twenty brands use their real logo as an SVG in `assets/logos/`. Three brands are shown as styled text because a reliable official logo could not be sourced: **JK Tyre**, **Sailun** and **Double Coin**. To add one, drop an SVG into `assets/logos/` and replace the matching `<li class="wordmark">` in `index.html` with an `<img>` like the others.

Brand names and logos are trademarks of their respective owners and are used to identify the products supplied.

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

It is a static site: upload the files to any web host, or enable GitHub Pages on this repository (Settings → Pages → deploy from branch, root folder).
