# Jonathan Cao — W26 Career Portfolio

A polished, responsive career portfolio built with **HTML**, **CSS**, and **vanilla JavaScript**. No build tools or server runtime required — open `index.html` in any web browser, or deploy the folder to any static host (GitHub Pages, Netlify, Vercel, etc.).

## Live Preview

> Hosted via **GitHub Pages** — [view the live site](https://jonker88.github.io/Jonathan_C_W26Portfolio/)

## Features

- **Responsive pill-style navigation** with smooth scroll-reveal animations
- **Hero section** with animated role typing effect (Front-end Developer, Software Developer, Computer Science student)
- **Seven dedicated pages**: Home, About, Professional, Credentials, Academic, Capstone, Work Samples
- **Capstone project hub** — organized grid of project plans, requirements, status reports, wireframes, and system implementation links
- **Academic work samples** — five GitHub repositories with direct links and category tags
- **Professional section** — IT internship summary, downloadable résumé and cover letter (PDF)
- **Credentials** — education details and IEEEXtreme competition results with proof documents
- **Work samples** — Gomoku game (Java), Smart Inventory Management (ASP.NET Core), and IT support experience
- **Custom cat favicon** across all pages
- **Accessible**: skip-to-content links, semantic HTML, ARIA attributes, reduced-motion media query support

## Project Structure

```
Jonathan_C_W26Portfolio/
├── index.html              # Home page (hero + quick-nav tiles)
├── about.html              # Bio, photo, philosophy
├── professional.html       # Professional summary, resume, cover letter
├── credentials.html        # Education & competition awards
├── academic.html           # Five course/lab GitHub repos
├── capstone.html           # Capstone project documentation hub
├── work.html               # Professional work samples & awards
├── css/
│   └── style.css           # All styles (variables, layout, animations)
├── js/
│   └── main.js             # Nav toggle, scroll reveals, typed effect
├── assets/
│   ├── favicon.png         # Site favicon
│   ├── hero-developer.png  # Hero illustration
│   ├── Jonathan_Cao_Resume.pdf
│   ├── Jonathan_Cao_CoverLetter.pdf
│   ├── capstone/           # Capstone .docx deliverables
│   ├── certificates/       # IEEE participation proof
│   └── course/             # COMP3078 portfolio assignment doc
└── README.md
```

## Run Locally

1. **Double-click** `index.html`, or
2. From PowerShell in this folder: `start index.html`
3. For full font fidelity, use a local server:
   ```bash
   python -m http.server 8080
   ```
   Then visit `http://localhost:8080`

## Deploy (GitHub Pages)

1. Create a GitHub repository and push this folder's contents
2. Go to **Settings → Pages** → set source to **main** branch, `/ (root)`
3. The site will be live at `https://<username>.github.io/<repo-name>/`

## Tech Stack

| Layer     | Technology                                      |
|-----------|--------------------------------------------------|
| Structure | Semantic HTML5                                   |
| Styling   | Vanilla CSS (custom properties, grid, flexbox)   |
| Motion    | CSS transitions + IntersectionObserver reveals   |
| Typeface  | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts |
| Icons     | Inline SVG symbols (Feather-style)               |

## Contact

- **Email**: jonathan.h.cao88@gmail.com
- **LinkedIn**: [jc-jonathan-cao](https://linkedin.com/in/jc-jonathan-cao)
- **GitHub**: [Jonker88](https://github.com/Jonker88)
- **Location**: Toronto, ON
