# Patrick Passos - Builder OS 

The personal digital infrastructure for Patrick Passos. Designed as a serious, long-term platform for a technical builder focused on ambitious technology and deterministic systems.

## Purpose
This repository serves as a personal website and portfolio. It rejects the generic "startup landing page" aesthetic in favor of a credible, highly intentional "Laboratory Editorial" look.

## Technologies Used
- Next.js
- Tailwind CSS
- TypeScript

## Local Development
Since the preferred environment is **bun**:

1. Ensure Bun is installed on your system.
2. Install dependencies:
   ```bash
   bun install
   ```
3. Run the development server:
   ```bash
   bun run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000)

## Customization TODO List
The site has been populated with high-fidelity UI but uses generic placeholders so you can safely inject your exact data without fake achievements. Please update:

- [ ] `src/app/page.tsx`: Swap "Project Alpha" and "Project Beta" with real case studies.
- [ ] `src/app/page.tsx`: Update the "What I'm building now" bento grid. 
- [ ] `src/app/layout.tsx`: Enter correct links for GitHub, LinkedIn, X, and YouTube in the Navbar and Footer.
- [ ] `src/app/page.tsx`: Modify the `mailto:` email block at the bottom to use your actual email address.
- [ ] `src/app/journey/page.tsx`: Expand on your personal journey with specific metadata and dates.
- [ ] Implement Markdown/MDX parser of your choice for rendering `.mdx` files dynamically when your essays are ready.
