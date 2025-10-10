# Quick Start Guide

Get your website live in 5 minutes! ⚡

## Step 1: Replace Critical Placeholders (2 minutes)

### Domain URL
**Find & Replace in:** `index.html`, `robots.txt`, `sitemap.xml`
- Find: `patrickpassos.com`
- Replace: `yourdomain.com`

### Contact Form
**Edit:** `index.html` line 419
- Sign up at [formspree.io](https://formspree.io)
- Get your form ID
- Replace: `YOUR_FORM_ID` with your actual ID

OR use FormSubmit:
- Replace entire action with: `https://formsubmit.co/your@email.com`

### Email Address
**Edit:** `index.html` line 429
- Replace: `contact@patrickpassos.com`
- With: `your@email.com`

## Step 2: Update Projects (2 minutes)

**Edit:** `index.html` lines 326-409

For each of the 3 project cards, update:
1. **Image**: Replace `images/project-X.svg` with your image path
2. **Title**: Change project title
3. **Description**: Write your project description
4. **Link**: Replace `href="#"` with your project URL

**Quick tip:** Keep placeholder images until you have real ones ready.

## Step 3: Deploy (1 minute)

### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire project folder to the upload area
3. Done! Your site is live ✨

### Option B: GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
```
Then enable Pages in repository Settings.

### Option C: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import Git repository or upload files
3. Click Deploy

## Step 4: Verify (30 seconds)

Visit your live site and test:
- [ ] Pages load correctly
- [ ] Theme toggle works
- [ ] Mobile menu works (resize browser)
- [ ] Contact form submits successfully
- [ ] All links work

## Done! 🎉

Your website is now live! 

## What's Next?

### Optional Improvements
- Upload real project images (see `/images/README.md`)
- Generate proper favicon (use [RealFaviconGenerator](https://realfavicongenerator.net/))
- Create OG preview image (1200x630px)
- Enable analytics
- Customize colors and fonts

### Learn More
- **Full setup guide:** `README.md`
- **Detailed customization:** `CUSTOMIZATION_GUIDE.md`
- **All placeholders:** `PLACEHOLDERS.md`
- **Deployment options:** `DEPLOYMENT.md`
- **Image help:** `images/README.md`

---

## Common Issues

**Form not working?**
- Check you replaced `YOUR_FORM_ID`
- Verify Formspree/FormSubmit is configured
- Look for errors in browser console (F12)

**Images not showing?**
- Check file paths are relative (no leading `/`)
- Verify images exist in `/images/` folder
- Check file names match exactly (case-sensitive)

**Site looks broken?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check all files were uploaded
- Verify `styles.css` and `script.js` are loading

**Need help?**
- Read `README.md` for detailed instructions
- Check `CUSTOMIZATION_GUIDE.md` for how-tos
- Review code comments in HTML files

---

**Time to complete:** ~5 minutes  
**Difficulty:** Beginner-friendly  
**Cost:** $0 (completely free)

Ready to launch? Let's go! 🚀

