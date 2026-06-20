# AI x Blockchain Day — Landing Page

Marketing site for **AI x Blockchain Day**, a one-day event at the intersection
of AI and Blockchain. Thursday, July 9, 2026, Centro Histórico, Mexico City.

Part of the `blockchain-ai-day` internOS project, owned by the
`week-t-minus-3-marketing-and-design` workstream. This is an **independent,
event-native** property: it is not co-branded with Frutero Club / Frutero LLC.

## Status

Scaffold only. The **visual identity is not yet designed** — the project ships a
neutral placeholder so it builds and runs. The real design (palette, type,
motion, sections) is produced in the design phase via the project's design brief
and the `design-taste-frontend` skill (https://www.tasteskill.dev/guide).

## Stack

- **Astro 5** (static output)
- **Tailwind CSS v4** (CSS-first config in `src/styles/global.css`, via `@tailwindcss/vite`)
- **astro-icon** + Phosphor (`@iconify-json/ph`)
- **@astrojs/sitemap**, i18n (`es` default at `/`, `en` at `/en/`)
- Optional analytics: PostHog (env-gated, prod-only, proxied via `/ingest`)
- Package manager: **pnpm**, Node **22**

Fonts are intentionally NOT installed yet — the typeface is a design-identity
decision. Self-host the chosen face(s) via `@fontsource*` and import them in
`src/layouts/Base.astro` (never `<link>` Google Fonts in production).

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static build to dist/
pnpm preview    # serve the build
pnpm check      # astro check (types)
```

## Structure

```
src/
  layouts/Base.astro      SEO + OG + schema.org/Event JSON-LD + i18n + scroll-reveal
  components/
    Landing.astro         PLACEHOLDER holding page (replaced in design phase)
    Analytics.astro       PostHog, env-gated, prod-only
  pages/
    index.astro           es (/)
    en/index.astro        en (/en/)
  i18n/
    ui.ts                 copy dictionary + shared event facts (single source)
    utils.ts              getLang / useTranslations / localeHome
  content.config.ts       `blog` collection (announcements / recaps), empty for now
  styles/global.css       NEUTRAL placeholder tokens — replace with the identity
public/                   favicon.svg (placeholder), robots.txt, site.webmanifest
```

## Known facts baked in

- Registration (official): https://luma.com/3rzgnv6f
- Venue: José María Izazaga 8, Primer Piso, Centro Histórico, Alcaldía
  Cuauhtémoc, CP 06080, Ciudad de México
- Date/time: 2026-07-09, 11:00–19:00 (America/Mexico_City)

These live in `src/i18n/ui.ts` (`event` export) and feed the JSON-LD in `Base.astro`.

## Open decisions

- **Production domain** — `https://aixb.frutero.club` (set as `site` in `astro.config.mjs`
  and the `robots.txt` sitemap host). Attach the domain in the Vercel project + DNS.
- **Sponsor/co-host logos on the page** pre-confirmation — needs Mel approval.
- Whether to split this into its own git repo + Vercel project, or deploy the
  subdirectory from the `blockchain-ai-day` repo. Currently a subdirectory.

## Deploy

Vercel, static. If deploying the subdirectory from the monorepo, set the Vercel
**Root Directory** to `code/blockchain-ai-day-landing`. `vercel.json` proxies
PostHog through `/ingest`; set `PUBLIC_POSTHOG_KEY` in Vercel env to enable
analytics (leave unset to disable). Nothing ships publicly without Mel approval.
