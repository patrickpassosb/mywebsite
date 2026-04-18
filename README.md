# Patrick Passos — Builder OS

Personal website & portfolio. A long-term editorial-style platform for a technical
builder focused on agentic systems and deterministic infrastructure.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS ("Laboratory Editorial" tokens in `src/app/globals.css`)
- **i18n:** `next-intl` (English + Portuguese)
- **Theming:** `next-themes` (light / dark / system)
- **Package manager:** Bun

## Local development

```bash
bun install
bun run dev
```

Open http://localhost:3000 — the middleware redirects `/` to the preferred locale.

## Scripts

| Command | Purpose |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run start` | Run the production server |
| `bun run test:unit` | Vitest unit tests |
| `bun run test:e2e` | Playwright end-to-end tests |

## Project layout

```
src/
  app/
    [locale]/        # Localized routes: /, /projects, /journey, /writing
    globals.css      # Design tokens + Tailwind layers
    robots.ts        # Dynamic robots.txt
    sitemap.ts       # Locale-aware sitemap
  components/        # SettingsMenu, ThemeProvider
  i18n/              # next-intl request config
  proxy.ts           # Next 16 proxy (locale routing)
messages/            # en.json, pt.json
public/              # Static assets served at /
```

## Deployment

Deployed to Vercel. On first deploy, set:

```
NEXT_PUBLIC_SITE_URL=https://<your-domain>
```

in the Vercel project settings so `metadataBase`, `sitemap.xml`, and `robots.txt`
use the canonical URL.
