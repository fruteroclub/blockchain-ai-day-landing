// All visible copy, keyed by locale. Spanish is the default; English is /en/.
// Keep both shapes identical. No em-dashes anywhere (use commas / periods).
//
// NOTE: This is scaffold/placeholder copy carrying the real, known event facts.
// Final voice + messaging is set during the design phase (design brief +
// design-taste-frontend skill). Treat strings here as structure, not final copy.

export const defaultLang = 'es' as const;
export const locales = ['es', 'en'] as const;

export const localeNames = { es: 'ES', en: 'EN' } as const;

// Shared, locale-independent event facts (single source of truth for the scaffold).
export const event = {
  name: 'Blockchain + AI Day',
  dateISOStart: '2026-07-09T11:00:00-06:00',
  dateISOEnd: '2026-07-09T19:00:00-06:00',
  registrationUrl: 'https://luma.com/3rzgnv6f',
  venue: {
    name: 'Centro Histórico (CDMX)',
    street: 'José María Izazaga 8, Primer Piso',
    locality: 'Centro Histórico, Alcaldía Cuauhtémoc',
    postalCode: '06080',
    region: 'Ciudad de México',
    country: 'MX',
  },
} as const;

export const ui = {
  es: {
    meta: {
      title: 'Blockchain + AI Day · 9 de julio, CDMX',
      description:
        'Un día completo en la intersección de Blockchain e IA para builders, startups, empresas y comunidades. Jueves 9 de julio de 2026, Centro Histórico, Ciudad de México.',
    },
    nav: {
      links: [
        { href: '#programa', label: 'Programa' },
        { href: '#sede', label: 'Sede' },
        { href: '#patrocinadores', label: 'Patrocinadores' },
        { href: '#faq', label: 'Preguntas' },
      ],
      register: 'Registrarme',
      menu: 'Menú',
      language: 'Idioma',
    },
    hero: {
      kicker: 'Jueves 9 de julio de 2026 · CDMX',
      head: 'Blockchain + AI Day',
      sub: 'Un día completo en la intersección de Blockchain e Inteligencia Artificial, para builders, startups, empresas y comunidades.',
      ctaPrimary: 'Registrarme',
      ctaSecondary: 'Ver el programa',
    },
    footer: {
      tagline: 'Un evento de un día en la intersección de Blockchain e IA. Ciudad de México.',
      register: 'Registro',
      contact: 'Contacto',
    },
  },

  en: {
    meta: {
      title: 'Blockchain + AI Day · July 9, Mexico City',
      description:
        'A full day at the intersection of Blockchain and AI for builders, startups, companies, and communities. Thursday, July 9, 2026, Centro Histórico, Mexico City.',
    },
    nav: {
      links: [
        { href: '#programa', label: 'Program' },
        { href: '#sede', label: 'Venue' },
        { href: '#patrocinadores', label: 'Sponsors' },
        { href: '#faq', label: 'FAQ' },
      ],
      register: 'Register',
      menu: 'Menu',
      language: 'Language',
    },
    hero: {
      kicker: 'Thursday, July 9, 2026 · Mexico City',
      head: 'Blockchain + AI Day',
      sub: 'A full day at the intersection of Blockchain and Artificial Intelligence, for builders, startups, companies, and communities.',
      ctaPrimary: 'Register',
      ctaSecondary: 'See the program',
    },
    footer: {
      tagline: 'A one-day event at the intersection of Blockchain and AI. Mexico City.',
      register: 'Register',
      contact: 'Contact',
    },
  },
} as const;
