// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO(open decision): set the real production domain once chosen.
  // Used for canonical URLs, sitemap, OG image absolute URLs.
  site: 'https://blockchainaiday.xyz',
  i18n: {
    // Spanish-first (CDMX / LATAM audience); English available at /en/.
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // Spanish (default) lives at `/`; English at `/en/`.
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es', en: 'en' } } }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
