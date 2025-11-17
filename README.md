# Patrick Passos — Personal Website

This is my personal website deployed on [GitHub Pages](https://patrickpassosb.github.io/mywebsite/). It showcases who I am, what I've built, my journey, and my goals as an entrepreneur building science-driven technology.

## About This Website

My website includes:

- **About Me** — My background, interests, and focus areas in science, technology, and entrepreneurship
- **My Journey** — Key moments that shaped my path, from self-taught English to building impactful tech
- **Projects** — Things I've built, including:
  - **Solia** — AI-powered early skin cancer screening platform (SBOC Code4Cancer Hackathon)
  - **Biome** — AI fitness coach developed for Google Cloud Run Hackathon
- **Social Media** — Links to connect with me on Instagram, X (Twitter), YouTube, GitHub, and LinkedIn

## 🚀 Development

### Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:3000` with live reload enabled. Any changes to your files will automatically refresh the page.

## 📁 Project Structure

```
mywebsite/
├── index.html          # Main HTML file
├── styles.css          # All styles and theme variables
├── script.js           # Interactive functionality
├── package.json        # Development dependencies
├── robots.txt          # Search engine instructions
├── sitemap.xml         # Site structure for SEO
└── images/             # All images
    ├── favicon.svg
    ├── biome.jpg
    ├── solia-logo.png
    └── ...
```

## ✨ Features

- Responsive design (mobile-first)
- Dark/light theme toggle
- Smooth scrolling navigation
- Accessibility compliant (WCAG 2.1 AA)
- Fast loading (< 100KB)
- SEO optimized

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #0EA5E9;
    --color-primary-dark: #0284C7;
    --color-bg: #FFFFFF;
    --color-text: #0F172A;
}
```

### Content

Update the content directly in `index.html`:
- Personal information and bio
- Project cards in the projects section
- Social media links
- Navigation menu items

---

Built with vanilla HTML, CSS, and JavaScript.
