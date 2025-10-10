# Deployment Guide

This guide will help you deploy your personal website to various hosting platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've completed:

- [ ] Replaced all placeholders (see `PLACEHOLDERS.md`)
- [ ] Configured contact form endpoint
- [ ] Uploaded all images (projects, favicon, OG preview)
- [ ] Tested locally in a browser
- [ ] Verified mobile responsiveness
- [ ] Tested contact form submission
- [ ] Checked all links work
- [ ] Optimized images for web

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Best for:** Quick deployment, version control, free hosting

**Steps:**

1. **Create GitHub repository**
   ```bash
   # If not already a git repo
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   ```

2. **Push to GitHub**
   ```bash
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/yourusername/yourrepo.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select branch: `main`
   - Select folder: `/ (root)`
   - Click Save

4. **Access your site**
   - Your site will be live at: `https://yourusername.github.io/yourrepo/`
   - Usually takes 1-2 minutes to deploy

5. **Custom domain (optional)**
   - In Pages settings, add your custom domain
   - Update DNS records at your domain registrar:
     ```
     Type: CNAME
     Name: www
     Value: yourusername.github.io
     ```

**Pros:**
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Version control
- ✅ Easy updates (just git push)

**Cons:**
- ❌ Public repository required (for free tier)
- ❌ No server-side functionality

---

### Option 2: Netlify (Recommended - Free)

**Best for:** Easy deployment, automatic builds, serverless functions

**Steps:**

1. **Sign up**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy methods:**

   **Method A: Drag & Drop**
   - Click "Add new site" → "Deploy manually"
   - Drag your project folder to the upload area
   - Site goes live in seconds!

   **Method B: Git Integration (Recommended)**
   - Push your code to GitHub/GitLab
   - Click "Add new site" → "Import an existing project"
   - Connect to your Git provider
   - Select your repository
   - Click "Deploy site"

3. **Configure site**
   - Site Settings → Domain management
   - Add custom domain (optional)
   - Site Settings → Build & deploy
   - Enable automatic deploys

4. **Access your site**
   - Initial URL: `https://random-name-12345.netlify.app`
   - Change in: Site Settings → Site details → Change site name

**Pros:**
- ✅ Free tier very generous
- ✅ Automatic HTTPS
- ✅ Instant deploys
- ✅ Forms work automatically (just add `netlify` attribute)
- ✅ Excellent performance
- ✅ Preview deployments for pull requests

**Cons:**
- ❌ Bandwidth limits on free tier (100GB/month)

**Netlify Forms Setup:**
```html
<!-- Update your form tag -->
<form netlify name="contact" method="POST">
```

---

### Option 3: Vercel (Free)

**Best for:** Similar to Netlify, great performance

**Steps:**

1. **Sign up**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy**
   - Click "Add New Project"
   - Import your Git repository
   - Click "Deploy"

3. **Configure**
   - Your site is live at: `https://yourproject.vercel.app`
   - Add custom domain in Settings → Domains

**Pros:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Excellent performance
- ✅ Git integration
- ✅ Preview deployments

**Cons:**
- ❌ Forms need external service (Formspree/FormSubmit)

---

### Option 4: Cloudflare Pages (Free)

**Best for:** Fast global CDN, unlimited bandwidth

**Steps:**

1. **Sign up**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Create Cloudflare account

2. **Deploy**
   - Click "Create a project"
   - Connect Git repository or upload files
   - Configure build settings (none needed for static site)
   - Click "Save and Deploy"

3. **Access**
   - Site live at: `https://yourproject.pages.dev`
   - Add custom domain in Settings

**Pros:**
- ✅ Unlimited bandwidth (free)
- ✅ Fast global CDN
- ✅ Automatic HTTPS
- ✅ Excellent performance

**Cons:**
- ❌ Forms need external service

---

### Option 5: Custom Server / Traditional Hosting

**Best for:** You already have hosting, need full control

**Requirements:**
- Web hosting with FTP/SFTP access
- Your own domain

**Steps:**

1. **Prepare files**
   - Ensure all placeholders are replaced
   - Test locally

2. **Upload via FTP/SFTP**
   - Use FileZilla, Cyberduck, or your host's file manager
   - Upload all files to public_html or www directory
   - Ensure index.html is in the root

3. **Set permissions**
   - Files: 644
   - Directories: 755

4. **Verify**
   - Visit your domain
   - Test all functionality

**File structure on server:**
```
public_html/
├── index.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
└── images/
    ├── favicon.svg
    ├── og-preview.png
    ├── project-1.jpg
    ├── project-2.jpg
    └── project-3.jpg
```

---

## 🔧 Post-Deployment Configuration

### 1. Update Analytics

If using Google Analytics or Plausible:
- Uncomment analytics code in `index.html`
- Verify tracking is working
- Check Analytics dashboard after 24 hours

### 2. Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (website)
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 3. Test Your Deployment

**Functionality:**
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] Contact form submits
- [ ] All links work
- [ ] Images load

**Performance:**
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Target: 90+ score on mobile and desktop
- [ ] Optimize images if score is low

**SEO:**
- [ ] Test [Open Graph preview](https://www.opengraph.xyz/)
- [ ] Test [Twitter Card](https://cards-dev.twitter.com/validator)
- [ ] Verify meta descriptions
- [ ] Check mobile-friendliness

**Accessibility:**
- [ ] Run [WAVE](https://wave.webaim.org/) checker
- [ ] Test keyboard navigation
- [ ] Check color contrast

### 4. Set Up HTTPS

Most modern hosting (Netlify, Vercel, GitHub Pages) includes automatic HTTPS.

**If using custom server:**
- Use [Let's Encrypt](https://letsencrypt.org/) for free SSL
- Most hosts offer one-click SSL installation
- Redirect HTTP to HTTPS

---

## 🔄 Updating Your Site

### GitHub Pages / Netlify / Vercel (Git-based)

```bash
# Make your changes locally
# Test in browser

# Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main

# Site automatically redeploys (usually 30-60 seconds)
```

### Manual Deployment (FTP)

1. Make changes locally
2. Test in browser
3. Upload changed files via FTP
4. Clear browser cache to see changes

---

## 🌐 Custom Domain Setup

### DNS Configuration

**If using Netlify:**
```
Type: CNAME
Name: www
Value: yoursite.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

**If using Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**If using GitHub Pages:**
```
Type: CNAME
Name: www
Value: yourusername.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**If using Cloudflare Pages:**
- Cloudflare handles DNS automatically if domain is with them
- Otherwise, update nameservers to Cloudflare's

### DNS Propagation

- Changes can take 24-48 hours to propagate globally
- Use [DNS Checker](https://dnschecker.org/) to verify
- Site will work at temporary URL during propagation

---

## 🐛 Troubleshooting

### Site Not Loading

**Check:**
- Domain DNS settings are correct
- SSL certificate is active
- Files are in correct directory
- index.html is named correctly (lowercase)

### Images Not Showing

**Check:**
- File paths are correct (relative, not absolute)
- Images are actually uploaded
- File names match exactly (case-sensitive)
- Image files aren't too large

### Form Not Working

**Check:**
- Form action URL is correct
- Formspree/FormSubmit is configured
- JavaScript is enabled
- Browser console for errors

### 404 Errors

**Check:**
- File paths use relative URLs (no leading `/`)
- Files are uploaded to correct directory
- File names match exactly

---

## 📊 Monitoring

### Track Performance

**Free tools:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)

**What to monitor:**
- Page load time (target: under 2 seconds)
- First Contentful Paint (target: under 1 second)
- Lighthouse score (target: 90+)

### Track Visitors

**If using analytics:**
- Google Analytics dashboard
- Plausible Analytics dashboard
- Netlify/Vercel built-in analytics

---

## 🔐 Security

### Best Practices

- ✅ Always use HTTPS
- ✅ Keep dependencies updated (fonts CDN)
- ✅ Use strong passwords for hosting accounts
- ✅ Enable 2FA on GitHub/hosting accounts
- ✅ Don't commit sensitive data to Git
- ✅ Regular backups (Git handles this)

### Content Security

Create `.htaccess` if using Apache server:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
```

---

## 💰 Costs

### Free Tier Limits

| Platform | Storage | Bandwidth | Build Minutes | Custom Domain |
|----------|---------|-----------|---------------|---------------|
| GitHub Pages | 1GB | 100GB/mo | N/A | ✅ Free |
| Netlify | Unlimited | 100GB/mo | 300min/mo | ✅ Free |
| Vercel | Unlimited | 100GB/mo | 6000min/mo | ✅ Free |
| Cloudflare | Unlimited | Unlimited | 500/mo builds | ✅ Free |

**Your site usage (estimated):**
- Size: ~100KB per page load
- 100GB bandwidth = ~1 million page views/month
- **Verdict:** Free tier is more than enough!

---

## 📞 Support

**Platform-specific help:**
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/pages)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Cloudflare: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

**General web help:**
- MDN Web Docs: [developer.mozilla.org](https://developer.mozilla.org)
- Stack Overflow: [stackoverflow.com](https://stackoverflow.com)

---

**Good luck with your deployment! 🚀**

Once deployed, don't forget to:
1. Share your new site on social media
2. Add the URL to your social media bios
3. Submit to search engines
4. Monitor performance and analytics

