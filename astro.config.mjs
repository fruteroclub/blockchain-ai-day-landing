// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Production domain. Used for canonical URLs, sitemap, OG absolute URLs.
  site: 'https://bxai.frutero.club',
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
