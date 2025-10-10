# Website Customization Guide

This guide will help you customize your personal website step-by-step.

## 📝 Table of Contents

1. [Quick Start Checklist](#quick-start-checklist)
2. [Content Customization](#content-customization)
3. [Visual Customization](#visual-customization)
4. [Technical Configuration](#technical-configuration)
5. [Advanced Customization](#advanced-customization)

---

## Quick Start Checklist

Follow this checklist to get your site ready for launch:

### Essential (Do First)
- [ ] Update all domain URLs from `patrickpassos.com` to your domain
- [ ] Configure contact form endpoint (Formspree or FormSubmit)
- [ ] Replace your email address
- [ ] Update project cards with your actual projects
- [ ] Create and upload your project images
- [ ] Generate and upload favicon files
- [ ] Create OG preview image
- [ ] Test contact form submission

### Important (Do Before Launch)
- [ ] Update meta descriptions and titles
- [ ] Verify all social media links
- [ ] Configure analytics (optional)
- [ ] Update sitemap.xml with your domain
- [ ] Update robots.txt with your domain
- [ ] Test responsive design on mobile devices
- [ ] Run accessibility checks
- [ ] Optimize images for web

### Optional (Nice to Have)
- [ ] Customize theme colors
- [ ] Change fonts
- [ ] Add more sections
- [ ] Create blog/notes page
- [ ] Add newsletter signup
- [ ] Add Portuguese language toggle

---

## Content Customization

### 1. Hero Section

**Location:** `index.html` lines 119-184

**What to update:**
```html
<!-- Main headline -->
<h1 class="hero-title">Building science-driven technology</h1>

<!-- Subheadline -->
<p class="hero-subtitle">I'm Patrick Passos, I'm on a path to become an entrepreneur who develops impactful tech.</p>
```

**Tips:**
- Keep the headline under 10 words for impact
- Make it action-oriented or aspirational
- The subtitle should explain who you are and what you do

### 2. About Section

**Location:** `index.html` lines 187-226

**What to update:**
- Main paragraph (line 197)
- Focus areas list (lines 203-238)

**Tips:**
- Write in first person
- Be authentic and specific
- Show personality
- Include 3-5 focus areas

### 3. Journey Section

**Location:** `index.html` lines 229-277

**What to update:**
- Three journey cards with your milestones
- Icons (optional - use different SVG icons)
- Titles and descriptions

**Tips:**
- Highlight transformative experiences
- Show progression
- Be specific about learnings

### 4. Projects Section

**Location:** `index.html` lines 280-409

**How to customize each project:**

```html
<article class="project-card">
    <div class="project-image">
        <!-- Update image and alt text -->
        <img src="images/your-project.jpg" alt="Descriptive alt text" loading="lazy">
        <div class="project-overlay">
            <!-- Update status: In Progress, Completed, Planning, Live -->
            <span class="project-status">Status</span>
        </div>
    </div>
    <div class="project-content">
        <!-- Update title -->
        <h3>Your Project Title</h3>
        <!-- Update description -->
        <p>Your project description explaining what it does and why it matters.</p>
        <!-- Update tags -->
        <div class="project-tags">
            <span class="tag">Tag1</span>
            <span class="tag">Tag2</span>
            <span class="tag">Tag3</span>
        </div>
        <!-- Update link -->
        <a href="https://your-project-url.com" class="project-link">
            View project
            <!-- Icon stays the same -->
        </a>
    </div>
</article>
```

**Adding more projects:**
1. Copy an entire `<article class="project-card">` block
2. Paste it within the `<div class="projects-grid">` container
3. Update all the content
4. Add the new project image to `/images/`

**Tips:**
- Use descriptive alt text for accessibility
- Keep descriptions to 2-3 sentences
- Use 2-4 tags per project
- Link to live demos or GitHub repos

### 5. Contact Section

**Location:** `index.html` lines 412-483

**Form configuration:**
```html
<!-- Update form action with your endpoint -->
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Email link:**
```html
<!-- Update email address -->
<a href="mailto:your@email.com">your@email.com</a>
```

**Location:**
```html
<!-- Update location if needed -->
<p>Brazil</p>
```

---

## Visual Customization

### 1. Colors

**Location:** `styles.css` lines 11-16

**Primary colors:**
```css
:root {
    --color-primary: #0EA5E9;        /* Main brand color */
    --color-primary-dark: #0284C7;   /* Hover states */
    --color-primary-light: #38BDF8;  /* Light accents */
    --color-accent: #22C55E;         /* Secondary accent */
}
```

**How to choose colors:**
1. Pick your main brand color
2. Use a tool like [Coolors.co](https://coolors.co) or [Adobe Color](https://color.adobe.com) to generate a palette
3. Ensure WCAG AA contrast (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
4. Update the hex values
5. Test in both light and dark modes

**Quick color schemes:**

**Blue Tech:**
```css
--color-primary: #0EA5E9;
--color-accent: #22C55E;
```

**Purple Innovation:**
```css
--color-primary: #8B5CF6;
--color-accent: #EC4899;
```

**Green Eco:**
```css
--color-primary: #22C55E;
--color-accent: #06B6D4;
```

**Orange Energy:**
```css
--color-primary: #F97316;
--color-accent: #FBBF24;
```

### 2. Fonts

**Location:** `index.html` line 39 and `styles.css` lines 25-26

**Current fonts:**
- **UI Text:** Inter
- **Headlines:** Space Grotesk

**How to change:**

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the `<link>` code
4. Replace line 39 in `index.html`
5. Update CSS variables in `styles.css`:

```css
--font-sans: 'YourFont', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'YourDisplay', 'YourFont', sans-serif;
```

**Recommended combinations:**

**Modern & Clean:**
- Inter + Space Grotesk (current)

**Professional:**
- Roboto + Montserrat

**Elegant:**
- Lora + Nunito Sans

**Playful:**
- Poppins + Quicksand

**Classic:**
- Merriweather + Open Sans

### 3. Spacing

**Location:** `styles.css` lines 18-24

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 6rem;     /* 96px */
```

**Tips:**
- Increase all values by 0.25rem for more spacious design
- Decrease for more compact layout
- Maintain proportional relationships

### 4. Border Radius

**Location:** `styles.css` lines 42-44

```css
--border-radius: 0.5rem;      /* Standard corners */
--border-radius-lg: 1rem;     /* Large corners */
--border-radius-full: 9999px; /* Fully rounded */
```

**Styles:**
- **Sharp:** `0`
- **Subtle:** `0.25rem`
- **Modern:** `0.5rem` (current)
- **Soft:** `1rem`
- **Very round:** `1.5rem`

---

## Technical Configuration

### 1. Domain Configuration

**Files to update:** `index.html`, `robots.txt`, `sitemap.xml`

**Find and replace:**
- Find: `patrickpassos.com`
- Replace: `yourdomain.com`

**In index.html:**
- Lines 13, 16, 20, 22, 26, 28, 53

**In robots.txt:**
- Line 8

**In sitemap.xml:**
- All `<loc>` tags

### 2. Contact Form Setup

#### Option A: Formspree (Recommended)

1. Go to [formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form
4. Copy your form ID (e.g., `xeojnxyz`)
5. Update `index.html` line 419:
   ```html
   <form action="https://formspree.io/f/xeojnxyz" method="POST">
   ```

#### Option B: FormSubmit

1. Update `index.html` line 419:
   ```html
   <form action="https://formsubmit.co/your@email.com" method="POST">
   ```
2. Add these hidden fields if desired:
   ```html
   <input type="hidden" name="_subject" value="New website contact!">
   <input type="hidden" name="_captcha" value="false">
   <input type="hidden" name="_template" value="table">
   ```

#### Option C: Netlify Forms

If deploying to Netlify:
1. Add `netlify` attribute to form tag:
   ```html
   <form netlify name="contact" method="POST">
   ```
2. Forms will appear in Netlify dashboard

### 3. Analytics Setup

**Location:** `index.html` lines 543-558

#### Option A: Plausible (Privacy-friendly)

1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain
3. Uncomment line 545 in `index.html`
4. Update domain:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

#### Option B: Google Analytics

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Uncomment lines 548-554 in `index.html`
4. Replace `G-XXXXXXXXXX` with your ID

### 4. Social Links

**Location:** `index.html` lines 132-177 (hero) and 510-525 (footer)

**Update usernames:**
```html
<!-- Instagram -->
<a href="https://instagram.com/yourusername" ...>

<!-- X/Twitter -->
<a href="https://x.com/yourusername" ...>

<!-- YouTube -->
<a href="https://youtube.com/@yourusername" ...>

<!-- GitHub -->
<a href="https://github.com/yourusername" ...>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/yourusername" ...>
```

**Adding new social links:**
1. Find the icon SVG at [Simple Icons](https://simpleicons.org)
2. Copy an existing social link block
3. Replace the icon SVG
4. Update the URL and label

---

## Advanced Customization

### 1. Adding New Sections

**Template:**
```html
<!-- New Section -->
<section class="your-section section" id="your-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <div class="section-line"></div>
        </div>
        
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

**Steps:**
1. Add the HTML in `index.html`
2. Add navigation link in header
3. Add styles in `styles.css`
4. Update `script.js` if interactivity needed

### 2. Custom Animations

**Add to styles.css:**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}
```

**Apply to elements:**
```html
<div class="animate-fade-in-up">Content</div>
```

### 3. Blog/Notes Section

**Create `blog.html`:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Copy head from index.html -->
    <title>Blog - Patrick Passos</title>
</head>
<body>
    <!-- Copy header from index.html -->
    
    <main id="main">
        <section class="blog section">
            <div class="container">
                <h1>Blog & Notes</h1>
                
                <article class="blog-post">
                    <h2>Post Title</h2>
                    <time datetime="2024-10-10">October 10, 2024</time>
                    <p>Post excerpt...</p>
                    <a href="post.html">Read more</a>
                </article>
            </div>
        </section>
    </main>
    
    <!-- Copy footer from index.html -->
</body>
</html>
```

**Add navigation link:**
```html
<li><a href="blog.html" class="nav-link">Blog</a></li>
```

### 4. Newsletter Signup

**Using Buttondown:**

```html
<div class="newsletter">
    <h3>Subscribe to my newsletter</h3>
    <form action="https://buttondown.email/api/emails/embed-subscribe/yourusername" method="post">
        <input type="email" name="email" placeholder="Enter your email" required>
        <button type="submit">Subscribe</button>
    </form>
</div>
```

**Add styles:**
```css
.newsletter {
    padding: 2rem;
    background: var(--color-bg-secondary);
    border-radius: var(--border-radius-lg);
    text-align: center;
}

.newsletter form {
    display: flex;
    gap: 1rem;
    max-width: 500px;
    margin: 1rem auto 0;
}

.newsletter input {
    flex: 1;
    padding: 0.875rem;
    border: 2px solid var(--color-border);
    border-radius: var(--border-radius);
}

.newsletter button {
    padding: 0.875rem 1.75rem;
    background: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
}
```

### 5. Portuguese Language Toggle

**Add to header:**
```html
<select id="languageToggle" aria-label="Select language">
    <option value="en">English</option>
    <option value="pt">Português</option>
</select>
```

**Add to script.js:**
```javascript
const translations = {
    en: {
        hero_title: 'Building science-driven technology',
        hero_subtitle: "I'm Patrick Passos, I'm on a path to become an entrepreneur who develops impactful tech.",
        // Add all text
    },
    pt: {
        hero_title: 'Construindo tecnologia orientada pela ciência',
        hero_subtitle: 'Sou Patrick Passos, estou no caminho para me tornar um empreendedor que desenvolve tecnologia impactante.',
        // Add all text
    }
};

document.getElementById('languageToggle').addEventListener('change', (e) => {
    const lang = e.target.value;
    // Update all text content
    document.querySelector('.hero-title').textContent = translations[lang].hero_title;
    // Continue for all elements
    localStorage.setItem('language', lang);
});
```

---

## Testing Checklist

Before going live, test:

### Functionality
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Theme toggle works
- [ ] Mobile menu opens/closes
- [ ] Contact form submits successfully
- [ ] All external links open in new tabs

### Responsive Design
- [ ] Test on mobile (iPhone, Android)
- [ ] Test on tablet (iPad, etc.)
- [ ] Test on desktop (various sizes)
- [ ] Test on large screens (1920px+)

### Accessibility
- [ ] Run [WAVE](https://wave.webaim.org/) accessibility checker
- [ ] Test keyboard navigation (Tab key)
- [ ] Test with screen reader
- [ ] Check color contrast
- [ ] Verify all images have alt text

### Performance
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check image file sizes
- [ ] Verify all images load
- [ ] Test loading speed

### SEO
- [ ] Verify meta descriptions
- [ ] Check Open Graph preview (use [OpenGraph.xyz](https://opengraph.xyz/))
- [ ] Test Twitter Card (use [Twitter Card Validator](https://cards-dev.twitter.com/validator))
- [ ] Submit sitemap to Google Search Console

### Cross-Browser
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

---

## Getting Help

### Resources
- **HTML/CSS Reference:** [MDN Web Docs](https://developer.mozilla.org/)
- **Accessibility:** [WebAIM](https://webaim.org/)
- **Color Contrast:** [Coolors](https://coolors.co/contrast-checker)
- **Free Images:** [Unsplash](https://unsplash.com)
- **Icons:** [Heroicons](https://heroicons.com)

### Common Issues

**Theme toggle not working:**
- Clear browser cache
- Check browser console for errors
- Verify script.js is loading

**Contact form not submitting:**
- Check form action URL
- Verify Formspree/FormSubmit configuration
- Check browser console for errors

**Images not loading:**
- Check file paths (case-sensitive)
- Verify images exist in `/images/` folder
- Check file extensions match HTML

**Mobile menu broken:**
- Clear browser cache
- Check for JavaScript errors
- Verify script.js is loading

---

Need more help? Check the main README.md or review the code comments!

