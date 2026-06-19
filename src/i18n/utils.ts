import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

/** Resolve the active locale from Astro.currentLocale, falling back to Spanish. */
export function getLang(astro: { currentLocale?: string }): Lang {
  const l = astro.currentLocale;
  return l && l in ui ? (l as Lang) : defaultLang;
}

/** The string dictionary for a locale. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/** Home path for a locale: Spanish at `/`, others prefixed (`/en/`). */
export function localeHome(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
