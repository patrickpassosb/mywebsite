# Website Placeholders Reference

This document lists all placeholders that need to be customized before deploying the website.

## 🔴 Critical (Must Replace Before Launch)

### 1. Domain URLs
**Files:** `index.html`, `robots.txt`, `sitemap.xml`

| Location | Current Value | What to Replace |
|----------|---------------|-----------------|
| `index.html` line 13 | `https://patrickpassos.com/` | Your actual domain |
| `index.html` line 16 | `https://patrickpassos.com/` | Your actual domain |
| `index.html` line 20 | `https://patrickpassos.com/` | Your actual domain |
| `index.html` line 22 | `https://patrickpassos.com/` | Your actual domain |
| `index.html` line 26 | `https://patrickpassos.com/` | Your actual domain |
| `index.html` line 28 | `https://patrickpassos.com` | Your actual domain |
| `index.html` line 53 | `https://patrickpassos.com` | Your actual domain |
| `robots.txt` line 8 | `https://patrickpassos.com/sitemap.xml` | Your domain + /sitemap.xml |
| `sitemap.xml` all `<loc>` tags | `https://patrickpassos.com/` | Your actual domain |

**How to replace:** Use find & replace in your editor
- Find: `https://patrickpassos.com`
- Replace with: `https://yourdomain.com`

---

### 2. Contact Form Endpoint
**File:** `index.html` line 419

| Current Value | What to Replace |
|---------------|-----------------|
| `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree form ID or FormSubmit email |

**Options:**
- **Formspree:** Sign up at [formspree.io](https://formspree.io), get form ID, replace `YOUR_FORM_ID`
- **FormSubmit:** Use `https://formsubmit.co/your@email.com`
- **Netlify Forms:** Add `netlify` attribute to form tag

---

### 3. Email Address
**File:** `index.html` line 429

| Current Value | What to Replace |
|---------------|-----------------|
| `contact@patrickpassos.com` | Your actual email address |

---

## 🟡 Important (Should Replace Before Launch)

### 4. Project Cards
**File:** `index.html` lines 326-409

Each of the 3 project cards needs:

| Element | Current Value | What to Replace |
|---------|---------------|-----------------|
| **Image src** | `images/project-1.svg` | Path to your actual project image |
| **Alt text** | Generic description | Specific description of your project |
| **Status** | "In Progress", "Concept", "Planning" | Your project's actual status |
| **Title** | "Science Learning Platform", etc. | Your actual project title |
| **Description** | Placeholder text | Your actual project description |
| **Tags** | Placeholder tags | Your project's technology/category tags |
| **Link** | `href="#"` | URL to your live project or GitHub repo |

**Steps to replace:**
1. Create project images (800x600px recommended)
2. Save to `/images/` folder
3. Update each project card with actual information
4. Replace `#` links with actual URLs

---

### 5. Project Images
**Folder:** `/images/`

| Current File | Replace With | Recommended Size |
|--------------|--------------|------------------|
| `project-1.svg` | Your project 1 screenshot/graphic | 800x600px or 1200x675px |
| `project-2.svg` | Your project 2 screenshot/graphic | 800x600px or 1200x675px |
| `project-3.svg` | Your project 3 screenshot/graphic | 800x600px or 1200x675px |

**Formats:** JPG (photos), PNG (graphics with transparency), WebP (modern browsers)

---

### 6. Favicon Files
**Folder:** `/images/`

| Current File | Replace With | Size |
|--------------|--------------|------|
| `favicon.svg` | Your favicon | 32x32px (scalable SVG) |
| `favicon-32x32.png` | Your favicon | 32x32px PNG |
| *(create new)* `favicon-16x16.png` | Your favicon | 16x16px PNG |
| *(create new)* `apple-touch-icon.png` | Your favicon/logo | 180x180px PNG |

**Recommendation:** Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all sizes from one image.

---

### 7. Open Graph Preview Image
**File:** `images/og-preview.svg`

| Current File | Replace With | Size |
|--------------|--------------|------|
| `og-preview.svg` | Your social preview image | 1200x630px PNG or JPG |

**Requirements:**
- Size: Exactly 1200x630px (1.91:1 aspect ratio)
- Format: PNG or JPG
- File size: Under 1MB
- Content: Your name, tagline, branding

**Update in HTML:** `index.html` lines 15 and 22
- Current: `images/og-preview.svg`
- Update to: `images/og-preview.png` (after creating PNG version)

---

## 🟢 Optional (Can Replace Later)

### 8. Analytics ID
**File:** `index.html` lines 543-558

**Plausible Analytics (line 545):**
| Current Value | What to Replace |
|---------------|-----------------|
| `patrickpassos.com` | Your actual domain |
| *(commented out)* | Uncomment to enable |

**Google Analytics (lines 548-554):**
| Current Value | What to Replace |
|---------------|-----------------|
| `G-XXXXXXXXXX` | Your Google Analytics 4 Measurement ID |
| *(commented out)* | Uncomment to enable |

---

### 9. Sitemap Last Modified Dates
**File:** `sitemap.xml`

| Current Value | What to Replace |
|---------------|-----------------|
| `2024-10-10` | Current date when you deploy |

**Format:** YYYY-MM-DD

---

### 10. Robots.txt Domain
**File:** `robots.txt` line 8

| Current Value | What to Replace |
|---------------|-----------------|
| `https://patrickpassos.com/sitemap.xml` | Your domain + /sitemap.xml |

---

## ✅ Already Configured (Verify Only)

These are already set to Patrick Passos's actual information. Verify they're correct or update if needed:

### 11. Social Media Links
**Files:** `index.html` lines 132-177 (hero section) and 510-525 (footer)

| Platform | Current Value | Status |
|----------|---------------|---------|
| Instagram | `https://instagram.com/patrickpassosb` | ✅ Configured |
| X/Twitter | `https://x.com/patrickpassosb` | ✅ Configured |
| YouTube | `https://youtube.com/@patrickpassosb` | ✅ Configured |
| GitHub | `https://github.com/patrickpassosb` | ✅ Configured |
| LinkedIn | `https://www.linkedin.com/in/patrickpassosb` | ✅ Configured |

**Also in:** `index.html` lines 41-47 (JSON-LD structured data)

---

### 12. Content (All Pre-filled)
**File:** `index.html`

| Section | Status |
|---------|--------|
| Site Title | ✅ Set |
| Meta Description | ✅ Set |
| Hero Headline | ✅ Set |
| Hero Subheadline | ✅ Set |
| About Section | ✅ Set |
| Journey Cards | ✅ Set |
| Contact Info | ⚠️ Update location if needed (line 432) |
| Footer Text | ✅ Set |

---

## 📝 Quick Replacement Checklist

Use this checklist to track your progress:

### Before Launch
- [ ] Replace all `patrickpassos.com` with your domain (9 locations)
- [ ] Configure contact form endpoint (`YOUR_FORM_ID`)
- [ ] Update email address
- [ ] Replace all 3 project cards with your projects
- [ ] Upload 3 project images
- [ ] Create and upload favicon files
- [ ] Create and upload OG preview image
- [ ] Test contact form submission

### Optional
- [ ] Enable analytics (Plausible or Google Analytics)
- [ ] Update sitemap dates
- [ ] Verify/update social media links
- [ ] Customize colors (optional)
- [ ] Customize fonts (optional)

---

## 🔍 How to Find Placeholders

### Using Find & Replace
Most code editors support find & replace across multiple files:

**VS Code / Cursor:**
1. Press `Ctrl+Shift+F` (Windows) or `Cmd+Shift+F` (Mac)
2. Search for: `patrickpassos.com` or `YOUR_FORM_ID`
3. Replace all at once

**Search for these terms:**
- `patrickpassos.com` - Domain URLs
- `YOUR_FORM_ID` - Form endpoint
- `contact@patrickpassos.com` - Email
- `href="#"` - Empty project links
- `G-XXXXXXXXXX` - Analytics ID
- `2024-10-10` - Dates in sitemap

---

## 📧 Need Help?

If you're stuck on any placeholder:
1. Check the main `README.md` for detailed instructions
2. Review `CUSTOMIZATION_GUIDE.md` for step-by-step guides
3. Look for comments in the code (marked with `<!-- -->` in HTML)
4. Check `/images/README.md` for image-specific help

---

## ⚡ Quick Start Commands

### Find all placeholders in files:
```bash
# On Mac/Linux
grep -r "patrickpassos.com" .
grep -r "YOUR_FORM_ID" .

# On Windows PowerShell
Select-String -Path .\* -Pattern "patrickpassos.com" -Recurse
Select-String -Path .\* -Pattern "YOUR_FORM_ID" -Recurse
```

### Check what needs updating:
```bash
# Count instances of placeholder domain
grep -o "patrickpassos.com" index.html robots.txt sitemap.xml | wc -l
```

---

**Last Updated:** October 10, 2024  
**Total Critical Placeholders:** 12  
**Total Optional Placeholders:** 4

