# Images Folder

This folder contains all images for the Patrick Passos personal website.

## Current Files

### Placeholder Images (SVG)
- `project-1.svg` - Science Learning Platform placeholder
- `project-2.svg` - Tech Innovation Lab placeholder  
- `project-3.svg` - Community Knowledge Base placeholder
- `og-preview.svg` - Open Graph social preview image
- `favicon.svg` - Website favicon

## Converting SVG to PNG

For best compatibility, especially for Open Graph images and favicons, you should convert these SVG files to PNG:

### Online Tools (Easy)
1. **CloudConvert** - https://cloudconvert.com/svg-to-png
2. **Convertio** - https://convertio.co/svg-png/
3. **SVGOMG** - https://jakearchibald.github.io/svgomg/ (optimization)

### Using Design Software
1. **Figma** (Free)
   - Import SVG
   - Select all layers
   - Export as PNG at 2x or 3x resolution
   
2. **Adobe Illustrator**
   - File → Export → Export As
   - Choose PNG format
   - Set resolution (300 DPI for print, 72 DPI for web)

3. **Inkscape** (Free)
   - File → Export PNG Image
   - Set desired width/height
   - Export

### Command Line (Advanced)
```bash
# Using ImageMagick
convert -background none input.svg -resize 1200x630 output.png

# Using Inkscape CLI
inkscape input.svg --export-type=png --export-filename=output.png --export-width=1200
```

## Required Image Sizes

### Favicon
- `favicon.svg` - Modern browsers (already included)
- `favicon-32x32.png` - Standard favicon (32x32px)
- `favicon-16x16.png` - Legacy browsers (16x16px)
- `apple-touch-icon.png` - iOS devices (180x180px)

**Recommended tool:** Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all favicon sizes from your logo.

### Open Graph / Social Preview
- `og-preview.png` - Recommended size: 1200x630px
- Format: PNG or JPG
- Max file size: Under 1MB for best performance
- Aspect ratio: 1.91:1 (Facebook/LinkedIn/Twitter recommended)

### Project Images
- Recommended size: 800x600px (4:3 ratio) or 1200x675px (16:9 ratio)
- Format: JPG (photos), PNG (graphics), or WebP (modern browsers)
- Max file size: 200-500KB each (optimize for web)

## Image Optimization

After creating your PNG/JPG images, optimize them:

### Online Tools
- **TinyPNG** - https://tinypng.com/ (PNG compression)
- **Squoosh** - https://squoosh.app/ (Google's image optimizer)
- **ImageOptim** - https://imageoptim.com/ (Mac only, drag & drop)

### Command Line
```bash
# Using ImageMagick for JPG
convert input.jpg -quality 85 -strip output.jpg

# Using pngquant for PNG
pngquant --quality=85-95 input.png --output output.png

# Using cwebp for WebP
cwebp -q 85 input.jpg -o output.webp
```

## Replacing Placeholder Images

### For Projects
1. Create/obtain your project screenshot or graphic
2. Resize to 800x600px (or similar)
3. Optimize the file
4. Save as `project-1.jpg` (or .png, .webp)
5. Update the `src` attribute in `index.html`
6. Update the `alt` text to describe your actual project

### For Favicon
1. Design a square logo (minimum 512x512px)
2. Use RealFaviconGenerator to create all sizes
3. Download the package
4. Replace files in this folder
5. Update the `<head>` section in `index.html` if needed

### For OG Preview
1. Design a 1200x630px image with:
   - Your name/brand
   - Tagline
   - Colors matching your brand
   - High contrast for readability
2. Export as PNG or JPG
3. Optimize (keep under 1MB)
4. Save as `og-preview.png`
5. Update the meta tags in `index.html`

## Tips for Better Images

### Photography
- Use high-quality, well-lit photos
- Minimum resolution: 2x the display size
- Keep important content in the center (safe zone)

### Graphics
- Use consistent colors matching your brand
- Ensure text is readable at small sizes
- Test on both light and dark backgrounds

### Accessibility
- Always provide descriptive alt text
- Ensure sufficient color contrast
- Don't rely solely on color to convey information

## File Naming Conventions

- Use lowercase
- Use hyphens instead of spaces
- Be descriptive: `project-science-platform.jpg` instead of `img1.jpg`
- Include version if needed: `logo-v2.png`
- Avoid special characters

## License Considerations

When using images from external sources:
- Check the license (Creative Commons, etc.)
- Provide attribution if required
- Download and host locally (don't hotlink)
- Recommended free image sources:
  - Unsplash - https://unsplash.com
  - Pexels - https://pexels.com
  - Pixabay - https://pixabay.com

---

For questions or help with images, refer to the main README.md file in the project root.

