# Portfolio documentation

How Joseph Benipayo's design portfolio is built, what is on each page, and how to update it.

- **Live site:** https://nicetrybeni30.github.io/
- **Repository:** https://github.com/nicetrybeni30/nicetrybeni30.github.io
- **Hosting:** GitHub Pages, published from the `main` branch, root folder. Every commit to `main` goes live in about 1 minute.
- **Tech:** plain HTML, one CSS file, one small JavaScript file. No framework, no build step, no cost.

---

## 1. Site map

| URL | File | What's on it |
|---|---|---|
| `/` | `index.html` | Home page: intro, client work, personal work, experience, contact |
| `/work/azzurro.html` | `work/azzurro.html` | Azzurro Hotels case study: website pages, alternative layouts, 12 palette tests, all 35 Meta ads grouped by style |
| `/work/statics.html` | `work/statics.html` | All 20 minimal statics (concept work, AI-assisted) |
| `/projects/ordre-website.html` | `projects/ordre-website.html` | ORDRE website (live design) |
| `/projects/ordre-email.html` | `projects/ordre-email.html` | ORDRE campaign email |
| `/projects/slipstream-website.html` | `projects/slipstream-website.html` | SLIPSTREAM website (black-and-white manga style) |
| `/projects/slipstream-email.html` | `projects/slipstream-email.html` | SLIPSTREAM "Join the crew" email |
| `/projects/0500-website.html` | `projects/0500-website.html` | 0500 website |
| `/projects/0500-email.html` | `projects/0500-email.html` | 0500 "Sunrise Report" email |
| any wrong URL | `404.html` | "Page not found" page |

## 2. Home page, section by section

| # | Section | What it does |
|---|---|---|
| 1 | **Nav** | JB monogram, name and title, links to Work / Personal / Experience / Contact, and an "Available for work" button. Stays at the top while scrolling. |
| 2 | **Hero** | Headline, one-line intro, skill pills, and five Azzurro Meta ads. Clicking the ads opens the Azzurro case study. |
| 3 | **Principles** | Three short design beliefs. The ← → arrows switch between them. |
| 4 | **Brand strip** | The brands you've designed for or created, each with a small label underneath. See section 3 below. Each one is clickable. |
| 5 | **Client work** (`#work`) | Azzurro website (pink homepage, coupon book, free dinner), the colour A/B test, and the Meta ads. |
| 6 | **Personal work** (`#personal`) | Cycling story, the three cycling brands (each links to its live website and email), the minimal statics, and two research PDFs. |
| 7 | **Experience** (`#experience`) | Work history matching the resume, then four skill columns (Design, Build, Media, Tools). |
| 8 | **Contact** (`#contact`) | Email, LinkedIn, GitHub and resume, written out in full and clickable. |
| 9 | **Footer** | Copyright plus the same four links. |

## 3. The brand strip, explained

The row under the principles reads "Brands I've designed & created for". It is a logo wall, not a menu.

| Logo | What it is | Label on the site | Clicking it opens |
|---|---|---|---|
| **Azzurro.** | Real client: Azzurro Hotels, Sydney. Website and Meta ads. | Client · Hotels | Client work section |
| **ORDRE** | Your own concept brand: luxury cycling atelier | Own brand · Cycling | ORDRE website |
| **SLIPSTREAM** | Your own concept brand: manga-style cycling crews | Own brand · Cycling | SLIPSTREAM website |
| **5○○0** (reads "0500") | Your own concept brand: dawn riding kit for hot cities. The two zeros are bike wheels with a rising sun between them. | Own brand · Cycling | 0500 website |
| **CYCLELOGIST** | Content work: shoots and photo/video editing with teammate Mags | Content · Cycling | Experience section |

If you copy the strip as text it reads "ORDRESLIPSTREAM50CYCLELOGIST", because the 0500 logo is a drawing (only the 5 and the last 0 are letters) and the logos sit side by side with no spaces. That is normal for a logo row and does not affect visitors or search engines.

## 4. Folder structure

```
index.html                  home page
404.html                    not-found page
work/
  azzurro.html              Azzurro case study
  statics.html              minimal statics gallery
projects/
  *-website.html            the 3 cycling websites
  *-email.html              the 3 cycling emails
  photos/                   photos used by those 6 pages
assets/
  css/styles.css            all styling for the portfolio pages
  js/main.js                nav border, principles slider, fade-in on scroll
  img/
    home/                   images used only on the home page
    azzurro/ads/            all 35 Meta ads
    azzurro/web/            Azzurro website screenshots (12 palettes + offers + dinner)
    statics/                the 20 minimal statics
    cycling/                previews of the 3 cycling brands
    favicon.svg             browser-tab icon (JB)
    og-cover.jpg            preview image when the link is shared
  docs/
    Joseph-Benipayo-Resume.pdf          resume (links inside are clickable)
    luxury-website-design-analysis.pdf  research PDF
    cycling-brand-research.pdf          research PDF
.nojekyll                   tells GitHub to serve files as-is
README.md                   short repo summary
DOCUMENTATION.md            this file
```

## 5. How to make common changes

All edits can be done in the browser on GitHub: open the file, click the pencil icon, edit, then **Commit changes**. The site updates about 1 minute later. Refresh with Ctrl+F5 if you still see the old version.

### Change text
Open `index.html`, press Ctrl+F to find the sentence, and edit it. Keep the tags around it (`<p>`, `<h3>` and so on) as they are.

### Update the resume
1. Delete `assets/docs/Joseph-Benipayo-Resume.pdf`.
2. Upload the new PDF with **exactly the same file name**. Every resume button keeps working.
3. Export from Word or Google Docs with links on, so the email, GitHub and LinkedIn in the PDF stay clickable.

### Change your links
Search `index.html`, `work/azzurro.html`, `work/statics.html` and `404.html` for `linkedin.com/in/nicetrybeni`, `github.com/nicetrybeni30` and `jbeni.tech@gmail.com`, and replace each one.

### Replace or add an image
1. Export it as JPG, about 800–1400 px wide and under 400 KB. Use 4:5 (1080 × 1350) for ads and statics.
2. Upload it into the right folder in `assets/img/`.
3. If it's a new image, copy an existing `<div class="frame r45"><img …></div>` line in the HTML and change the `src` and `alt`. Use `r11` instead of `r45` for square images.

### Add a new project to the home page
Copy one whole `<article class="proj reveal"> … </article>` block in `index.html`, paste it underneath, and change the images, number, title, industry line, description and tags.

### Change the colours
At the top of `assets/css/styles.css`:

| Variable | Used for | Current |
|---|---|---|
| `--bg` | Page background | `#050505` |
| `--fg` | Main text | `#f2f0ea` |
| `--mute` | Small grey labels | `#8d8a83` |
| `--accent` | Azzurro pink highlights | `#e8195a` |

### Turn off the animations
In `index.html`, delete the line `<script src="assets/js/main.js" defer></script>`. The site still works; only the slider arrows, nav border and fade-ins stop.

### Mark yourself as not available
Search for `Available for work` in the HTML files and change or remove that link.

## 6. Fonts

Loaded free from Google Fonts on every page:
- **Lora** for headlines and large text
- **Inter** for body text
- **JetBrains Mono** for small uppercase labels
- **Libre Baskerville** for the ORDRE logo
- **Noto Sans JP / KR** for the Japanese and Korean lines on SLIPSTREAM

## 7. Accessibility and performance

- Every image has alt text and loads lazily (only when scrolled near).
- Links and buttons show a pink outline when using the keyboard.
- A "Skip to content" link appears on the first Tab press.
- Animations switch off automatically for visitors who turn off motion in their device settings.
- Checked at 1440 px desktop and 390 px phone width with no sideways scrolling.

## 8. Content notes and credits

- **Azzurro Hotels:** client work from a remote contract (Mar–May 2026). Screens and ads are shown as portfolio samples. The live site is https://www.azzurrohotels.com/.
- **ORDRE, SLIPSTREAM, 0500:** your own concept brands. Their lifestyle photos are from Unsplash under the Unsplash License, with credits in `assets/docs/cycling-brand-research.pdf`.
- **Minimal statics:** concept work for fictional brands, made with the help of AI, and labelled as such on the site. One image (Kaia Tower Hotel) shows a real hotel's sign in the photo. Consider cropping it.
- **Research PDFs:** include screenshots of other brands' websites for analysis only.
- **Resume PDF:** is public and includes your phone number. Remove it from `assets/docs/` (and the four resume links) if you'd rather not share it.

## 9. Before sharing the link (checklist)

- [ ] Open the site on your phone and scroll the whole home page.
- [ ] Click every contact link (email, LinkedIn, GitHub, resume).
- [ ] Open each cycling website and email and use "Back to portfolio".
- [ ] Open the Azzurro case study and the statics page.
- [ ] Share the link once in a chat (Messenger, LinkedIn) to see the preview image.
