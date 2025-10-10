# Patrick Passos Personal Website

A fast, accessible, single-page personal website built with vanilla HTML, CSS, and JavaScript. Features a modern design with dark/light theme toggle, smooth scrolling, and full accessibility support.

## 🚀 Quick Start

1. **Clone or download this repository**
2. **Customize the placeholders** (see list below)
3. **Deploy to your hosting platform**

That's it! No build process, no dependencies, no frameworks.

## 📋 Placeholders to Customize

Before deploying, replace these placeholders with your actual information:

### 1. Domain & URLs
- **Line 13, 16, 20, 22, 26, 28, 53**: Replace `https://patrickpassos.com/` with your actual domain

### 2. Open Graph & Social Preview Image
- **Line 18, 24**: Replace `/images/og-preview.png` with your actual OG image path
- Create an image (1200x630px recommended) and save it to `/images/og-preview.png`

### 3. Favicon
- **Line 32-34**: Update favicon paths if you change the file names
- Generate favicons using [RealFaviconGenerator](https://realfavicongenerator.net/)
- Place generated files in `/images/` folder

### 4. Contact Form Endpoint
- **Line 362**: Replace `https://formspree.io/f/YOUR_FORM_ID` with your actual form endpoint

**Options:**
- **Formspree**: Sign up at [formspree.io](https://formspree.io), get your form ID, and replace `YOUR_FORM_ID`
- **FormSubmit**: Change action to `https://formsubmit.co/your@email.com`
- **Netlify Forms**: Add `netlify` attribute to `<form>` tag and deploy to Netlify

### 5. Email Address
- **Line 326**: Replace `contact@patrickpassos.com` with your actual email

### 6. Analytics
- **Lines 391-401 in index.html**: Uncomment and configure analytics

**Options:**
- **Plausible**: Uncomment line 393, replace `patrickpassos.com` with your domain
- **Google Analytics**: Uncomment lines 396-401, replace `G-XXXXXXXXXX` with your GA4 ID

### 7. Project Cards
Replace the three placeholder project cards (lines 263-349 in index.html):

- **Images**: Replace `/images/project-1.jpg`, `/images/project-2.jpg`, `/images/project-3.jpg`
  - Recommended size: 800x600px or 16:9 aspect ratio
  - Add descriptive alt text
- **Titles**: Update project titles
- **Descriptions**: Add your project descriptions
- **Tags**: Customize the technology/category tags
- **Links**: Replace `href="#"` with actual project URLs

### 8. Social Links (Already Set)
The following are already configured, but verify they're correct:
- Instagram: `https://instagram.com/patrickpassosb`
- X (Twitter): `https://x.com/patrickpassosb`
- YouTube: `https://youtube.com/@patrickpassosb`
- GitHub: `https://github.com/patrickpassosb`
- LinkedIn: `https://www.linkedin.com/in/patrickpassosb`

### 9. Optional Customizations
- **Colors**: Edit CSS variables in `styles.css` (lines 11-16)
- **Fonts**: Change Google Fonts imports in `index.html` (line 39) and CSS variables (line 25-26)
- **Content**: Update any text in `index.html` to match your personal story

## 🎨 Assets Needed

Create and add these files to the `/images/` folder:

1. **favicon-32x32.png** (32x32px)
2. **favicon-16x16.png** (16x16px)
3. **apple-touch-icon.png** (180x180px)
4. **og-preview.png** (1200x630px) - For social media sharing
5. **project-1.jpg** (800x600px or similar)
6. **project-2.jpg** (800x600px or similar)
7. **project-3.jpg** (800x600px or similar)

### Generating Favicons
1. Create a square image (at least 512x512px) with "PP" or your logo
2. Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all sizes
3. Download and extract to `/images/` folder

### Creating Placeholder Images
If you need temporary project images:
- Use [Unsplash](https://unsplash.com) for free high-quality photos
- Use [Placeholder.com](https://placeholder.com) for simple placeholders
- Example: `https://via.placeholder.com/800x600/0EA5E9/FFFFFF?text=Project+1`

## 🚀 Deployment

### GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings → Pages
4. Select your branch (usually `main`) and `/root` folder
5. Click Save
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live! (Custom domain can be added in settings)

### Vercel
1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click

### Custom Server
Upload all files to your web server via FTP/SFTP. Ensure:
- All files are in the root directory (or subdirectory)
- File permissions are set correctly (644 for files, 755 for directories)

## 📁 File Structure

```
mywebsite/
├── index.html          # Main HTML file
├── styles.css          # All styles and theme variables
├── script.js           # Interactive functionality
├── README.md           # This file
├── robots.txt          # Search engine instructions
├── sitemap.xml         # Site structure for SEO
└── images/             # All images
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    ├── apple-touch-icon.png
    ├── og-preview.png
    ├── project-1.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

## 🎨 Customizing Colors

Edit CSS variables in `styles.css` (lines 11-16):

```css
:root {
    --color-primary: #0EA5E9;        /* Main brand color */
    --color-primary-dark: #0284C7;   /* Hover states */
    --color-primary-light: #38BDF8;  /* Accents */
    --color-accent: #22C55E;         /* Secondary accent */
}
```

## ✨ Features

### Accessibility
- ✅ WCAG 2.1 AA compliant
- ✅ Semantic HTML5 landmarks
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus visible states
- ✅ Skip to main content link
- ✅ Proper heading hierarchy

### Performance
- ✅ Under 100KB total page weight
- ✅ Lazy loading for images
- ✅ Optimized CSS and JS
- ✅ No external dependencies
- ✅ Preconnect to font CDN
- ✅ Deferred script loading

### SEO
- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Canonical URLs
- ✅ Sitemap and robots.txt

### User Experience
- ✅ Smooth scrolling
- ✅ Dark/light theme with system preference detection
- ✅ Responsive design (mobile-first)
- ✅ Touch-friendly targets (minimum 44x44px)
- ✅ Reduced motion support
- ✅ Fast page load

## 🛠️ Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## 📝 Updating Content

### Adding a New Project
1. Copy one of the existing project card blocks in `index.html`
2. Update the image, title, description, tags, and link
3. Add the project image to `/images/`

### Changing Theme Colors
1. Open `styles.css`
2. Modify the CSS variables in the `:root` section
3. Colors will automatically update throughout the site

### Adding New Sections
1. Add your section in `index.html` with an `id` attribute
2. Add a navigation link in the header menu
3. Style your section in `styles.css`

## 🐛 Troubleshooting

### Theme toggle not working
- Check browser console for JavaScript errors
- Ensure `script.js` is loading correctly
- Clear browser cache and localStorage

### Images not loading
- Verify file paths are correct
- Check file names match (case-sensitive on some servers)
- Ensure images are in the `/images/` folder

### Contact form not submitting
- Verify you've replaced `YOUR_FORM_ID` with your actual Formspree ID
- Check browser console for errors
- Ensure JavaScript is enabled

### Layout broken on mobile
- Clear browser cache
- Check for any custom CSS modifications
- Test in browser developer tools' device mode

## 📄 License

This website template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Credits

- **Fonts**: [Google Fonts](https://fonts.google.com) (Inter, Space Grotesk)
- **Icons**: Custom SVG icons
- **Form Backend**: [Formspree](https://formspree.io) or [FormSubmit](https://formsubmit.co)

## 📧 Support

If you need help customizing this website, check the comments in the code or create an issue on GitHub.

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript. No frameworks, no build process, just clean code.

