// All visible copy, keyed by locale. Spanish is the default; English is /en/.
// Keep both shapes identical. No em-dashes anywhere (use commas / periods).
//
// Voice: technical, confident, hype-free, builder-to-builder. Spanish reads
// native for CDMX. Facts come from the `event` export below (single source).

export const defaultLang = 'es' as const;
export const locales = ['es', 'en'] as const;

export const localeNames = { es: 'ES', en: 'EN' } as const;

// Shared, locale-independent event facts (single source of truth).
export const event = {
  name: 'AI x Blockchain Day',
  dateISOStart: '2026-07-09T10:00:00-06:00',
  dateISOEnd: '2026-07-09T17:00:00-06:00',
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
      title: 'AI x Blockchain Day · 9 de julio, CDMX',
      description:
        'Un día completo en la intersección de IA y Blockchain para builders, startups, empresas y comunidades. Jueves 9 de julio de 2026, Centro Histórico, Ciudad de México.',
    },
    nav: {
      links: [
        { href: '#programa', label: 'Programa' },
        { href: '#sede', label: 'Sede' },
        { href: '#patrocinadores', label: 'Patrocinadores' },
        { href: '#faq', label: 'Preguntas' },
      ],
      register: 'Registrarme',
      language: 'Idioma',
      menu: 'Menú',
    },
    hero: {
      kicker: 'JUE 09 JUL 2026 · 10:00 a 17:00 · CDMX',
      head1: 'AI x Blockchain Day',
      head2: ['Donde la inferencia', 'se vuelve verificable.'],
      sub: 'Un día para builders en la intersección de IA y Blockchain. Centro Histórico, Ciudad de México.',
      ctaPrimary: 'Registrarme',
      ctaSecondary: 'Ver el programa',
    },
    about: {
      eyebrow: 'Qué es',
      head: 'Un día en la frontera de dos sistemas que ya convergen.',
      body: [
        'AI x Blockchain Day reúne a quienes construyen en serio: ingenieros de cripto e IA, fundadores, gente de protocolo e infraestructura, y comunidades técnicas de CDMX y LATAM.',
        'IA da capacidad. Blockchain da verificación. La pregunta no es si convergen, sino qué se puede construir cuando la inferencia, la procedencia y la coordinación viven en la misma capa.',
        'Sin hype y sin paneles de relleno. Charlas densas, talleres con código y tiempo real para construir y conocer gente.',
      ],
    },
    program: {
      eyebrow: 'Programa',
      head: 'La agenda del día.',
      sub: 'Abrimos con coworking a las 10:00. Desde las 12:00 corren charlas y talleres en paralelo. Después seguimos con paneles, presentaciones de comunidad, networking y cierre.',
      facts: [
        { label: 'Horario', value: '10:00 - 17:00' },
        { label: 'Tracks', value: 'Main Stage + Workshops' },
        { label: 'Formato', value: 'Charlas, talleres, paneles y networking' },
      ],
      tracks: {
        main: 'Main Stage',
        workshop: 'Workshops',
        cowork: 'Coworking',
      },
      timeline: [
        {
          time: '10:00',
          sessions: [
            { track: 'cowork', title: 'Coworking abierto' },
          ],
        },
        {
          time: '12:00',
          sessions: [
            {
              track: 'main',
              title: 'Cómo prepararse para el trabajo del futuro',
              desc: 'Qué están buscando las empresas en la intersección IA x Blockchain',
            },
            {
              track: 'workshop',
              title: 'Fundamentos IA x Blockchain',
              desc: 'Aprende cómo funcionan estas tecnologías de frontera sin conocimiento técnico',
            },
          ],
        },
        {
          time: '12:30',
          sessions: [
            {
              track: 'main',
              title: 'Infraestructura para el Comercio Agéntico',
              desc: 'Cómo se integran los sistemas de IA y Blockchain para habilitar pagos',
            },
            {
              track: 'workshop',
              title: 'Lanza tu propio Agente Mentor',
              desc: 'Empieza a construir con una IA que te explica mientras construye lo que le pides',
            },
          ],
        },
        {
          time: '13:00',
          sessions: [
            {
              track: 'main',
              title: 'IA para acelerar la educación Blockchain',
              desc: 'Desarrollando el ecosistema con herramientas y contenido',
            },
            {
              track: 'workshop',
              title: 'Dale un trabajo a tu Agente',
              desc: 'Aprende con tu Agente a construir servicios web',
            },
          ],
        },
        {
          time: '13:30',
          sessions: [
            {
              track: 'main',
              title: 'Más allá de la frontera IA x Blockchain',
              desc: 'Cómo se desarrollará el ecosistema en los próximos años',
            },
            {
              track: 'workshop',
              title: 'Un Agente que cobra por trabajo',
              desc: 'Habilita pagos para que tu Agente pueda vender sus servicios en un marketplace',
            },
          ],
        },
        {
          time: '14:00',
          sessions: [
            { track: 'main', title: 'Identidad después de la explosión de IA' },
          ],
        },
        {
          time: '14:40',
          sessions: [
            { track: 'main', title: 'Cuando los Agentes tienen dinero' },
          ],
        },
        {
          time: '15:20',
          sessions: [
            { track: 'main', title: 'Community presentations' },
          ],
        },
        {
          time: '16:00',
          sessions: [
            { track: 'main', title: 'Networking' },
          ],
        },
        {
          time: '16:30',
          sessions: [
            { track: 'main', title: 'Networking' },
          ],
        },
        {
          time: '17:00',
          sessions: [
            { track: 'main', title: 'Fin del evento' },
          ],
        },
      ],
    },
    format: {
      eyebrow: null,
      head: 'Qué esperar del día',
      items: [
        {
          title: 'Charlas',
          body: 'Sesiones técnicas de quienes ya envían a producción. Densas, concretas, sin pitch de venta.',
        },
        {
          title: 'Talleres',
          body: 'Construcción guiada con código en cupo reducido. Traes laptop, te llevas algo que corre.',
        },
        {
          title: 'Demos',
          body: 'Productos y protocolos en vivo. Lo que funciona, lo que todavía no, y por qué.',
        },
        {
          title: 'Cinema',
          body: 'Formato largo para deep dives y demos comentadas, sin la presión del reloj.',
        },
        {
          title: 'Cowork y networking',
          body: 'Tiempo real para hacer pair, abrir issues juntos y conocer a quien construye en tu mismo problema.',
        },
      ],
    },
    sponsors: {
      head: 'Patrocinadores',
      sub: 'Este día existe gracias a quienes construyen la infraestructura de IA y cripto y apuestan por la comunidad de CDMX.',
      cta: 'Quiero patrocinar',
      note: 'Los logos de patrocinadores confirmados aparecen aquí una vez confirmada su participación.',
    },
    venue: {
      head: 'Sede',
      addressLines: ['José María Izazaga 8, Primer Piso', 'Centro Histórico, Alcaldía Cuauhtémoc', 'CP 06080, Ciudad de México'],
      when: 'Jueves 9 de julio de 2026, de 10:00 a 17:00.',
      arrive: 'Centro Histórico. Metro más cercano: Isabel la Católica (Línea 1), a unas dos cuadras.',
      mapAlt: 'Mapa del Centro Histórico de la Ciudad de México con la ubicación de la sede.',
    },
    faq: {
      head: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Qué es AI x Blockchain Day?',
          a: 'Un evento de un día en la intersección de IA y Blockchain, hecho para builders. Charlas, talleres con código, demos, cinema y cowork en una sola sede.',
        },
        {
          q: '¿Para quién es?',
          a: 'Para ingenieros de cripto e IA, fundadores, gente de protocolo e infraestructura y comunidades técnicas de CDMX y LATAM. Si construyes, este día es para ti.',
        },
        {
          q: '¿Cuánto cuesta y cómo me registro?',
          a: 'El registro se hace en Luma. Reserva tu lugar ahí: el aforo por zona es limitado, en especial talleres y cinema.',
        },
        {
          q: '¿En qué idioma es?',
          a: 'Principalmente en español, con sesiones en inglés. La sede y el público son bilingües es/en.',
        },
        {
          q: '¿Cuál es el horario?',
          a: 'Jueves 9 de julio de 2026, de 10:00 a 17:00, hora de la Ciudad de México.',
        },
      ],
    },
    cta: {
      head: 'Reserva tu lugar.',
      sub: 'El aforo por zona es limitado. Regístrate en Luma y asegura tu acceso al día completo.',
      button: 'Registrarme',
    },
    footer: {
      tagline: 'Un evento de un día en la intersección de IA y Blockchain. Ciudad de México.',
      register: 'Registro',
      contact: 'Contacto',
      coords: 'N 19.4326  /  W 99.1332',
    },
  },

  en: {
    meta: {
      title: 'AI x Blockchain Day · July 9, Mexico City',
      description:
        'A full day at the intersection of AI and Blockchain for builders, startups, companies, and communities. Thursday, July 9, 2026, Centro Histórico, Mexico City.',
    },
    nav: {
      links: [
        { href: '#programa', label: 'Program' },
        { href: '#sede', label: 'Venue' },
        { href: '#patrocinadores', label: 'Sponsors' },
        { href: '#faq', label: 'FAQ' },
      ],
      register: 'Register',
      language: 'Language',
      menu: 'Menu',
    },
    hero: {
      kicker: 'THU 09 JUL 2026 · 10:00 to 17:00 · CDMX',
      head1: 'AI x Blockchain Day',
      head2: ['Where inference', 'becomes verifiable.'],
      sub: 'A day for builders at the intersection of AI and Blockchain. Centro Histórico, Mexico City.',
      ctaPrimary: 'Register',
      ctaSecondary: 'See the program',
    },
    about: {
      eyebrow: 'What it is',
      head: 'A day on the frontier of two systems already converging.',
      body: [
        'AI x Blockchain Day brings together people who build for real: crypto and AI engineers, founders, protocol and infra people, and technical communities from CDMX and LATAM.',
        'AI gives capability. Blockchain gives verification. The question is not whether they converge, but what you can build once inference, provenance, and coordination live in the same layer.',
        'No hype and no filler panels. Dense talks, hands-on workshops with code, and real time to build and meet people.',
      ],
    },
    program: {
      eyebrow: 'Program',
      head: "The day's agenda.",
      sub: 'We open with coworking at 10:00. From 12:00, talks and workshops run in parallel. Then panels, community presentations, networking, and close.',
      facts: [
        { label: 'Hours', value: '10:00 - 17:00' },
        { label: 'Tracks', value: 'Main Stage + Workshops' },
        { label: 'Format', value: 'Talks, workshops, panels, and networking' },
      ],
      tracks: {
        main: 'Main Stage',
        workshop: 'Workshops',
        cowork: 'Coworking',
      },
      timeline: [
        {
          time: '10:00',
          sessions: [
            { track: 'cowork', title: 'Coworking opens' },
          ],
        },
        {
          time: '12:00',
          sessions: [
            {
              track: 'main',
              title: 'How to prepare for the future of work',
              desc: 'What companies are looking for at the AI x Blockchain intersection',
            },
            {
              track: 'workshop',
              title: 'AI x Blockchain Fundamentals',
              desc: 'Learn how these frontier technologies work without technical knowledge',
            },
          ],
        },
        {
          time: '12:30',
          sessions: [
            {
              track: 'main',
              title: 'Infrastructure for Agentic Commerce',
              desc: 'How AI and Blockchain systems integrate to enable payments',
            },
            {
              track: 'workshop',
              title: 'Launch Your Own Mentor Agent',
              desc: 'Start building with an AI that explains while it builds what you ask for',
            },
          ],
        },
        {
          time: '13:00',
          sessions: [
            {
              track: 'main',
              title: 'AI to accelerate Blockchain education',
              desc: 'Developing the ecosystem with tools and content',
            },
            {
              track: 'workshop',
              title: 'Give Your Agent a Job',
              desc: 'Learn with your Agent to build web services',
            },
          ],
        },
        {
          time: '13:30',
          sessions: [
            {
              track: 'main',
              title: 'Beyond the AI x Blockchain frontier',
              desc: 'How the ecosystem will develop over the coming years',
            },
            {
              track: 'workshop',
              title: 'An Agent That Charges for Work',
              desc: 'Enable payments so your Agent can sell its services in a marketplace',
            },
          ],
        },
        {
          time: '14:00',
          sessions: [
            { track: 'main', title: 'Identity after the AI explosion' },
          ],
        },
        {
          time: '14:40',
          sessions: [
            { track: 'main', title: 'When Agents have money' },
          ],
        },
        {
          time: '15:20',
          sessions: [
            { track: 'main', title: 'Community presentations' },
          ],
        },
        {
          time: '16:00',
          sessions: [
            { track: 'main', title: 'Networking' },
          ],
        },
        {
          time: '16:30',
          sessions: [
            { track: 'main', title: 'Networking' },
          ],
        },
        {
          time: '17:00',
          sessions: [
            { track: 'main', title: 'Event closes' },
          ],
        },
      ],
    },
    format: {
      eyebrow: null,
      head: 'What to expect',
      items: [
        {
          title: 'Talks',
          body: 'Technical sessions from people who already ship to production. Dense, concrete, no sales pitch.',
        },
        {
          title: 'Workshops',
          body: 'Guided building with code in small groups. Bring a laptop, leave with something that runs.',
        },
        {
          title: 'Demos',
          body: 'Products and protocols live. What works, what does not yet, and why.',
        },
        {
          title: 'Cinema',
          body: 'Long-form deep dives and narrated demos, without the pressure of the clock.',
        },
        {
          title: 'Cowork and networking',
          body: 'Real time to pair, open issues together, and meet people building on your same problem.',
        },
      ],
    },
    sponsors: {
      head: 'Sponsors',
      sub: 'This day exists thanks to the people building AI and crypto infrastructure who bet on the CDMX community.',
      cta: 'Become a sponsor',
      note: 'Confirmed sponsor logos appear here once their participation is confirmed.',
    },
    venue: {
      head: 'Venue',
      addressLines: ['José María Izazaga 8, First Floor', 'Centro Histórico, Alcaldía Cuauhtémoc', 'CP 06080, Mexico City'],
      when: 'Thursday, July 9, 2026, from 10:00 to 17:00.',
      arrive: 'Centro Histórico. Nearest Metro: Isabel la Católica (Line 1), about two blocks away.',
      mapAlt: 'Map of the Centro Histórico in Mexico City with the venue location.',
    },
    faq: {
      head: 'Frequently asked questions',
      items: [
        {
          q: 'What is AI x Blockchain Day?',
          a: 'A one-day event at the intersection of AI and Blockchain, made for builders. Talks, hands-on workshops with code, demos, cinema, and cowork in one venue.',
        },
        {
          q: 'Who is it for?',
          a: 'For crypto and AI engineers, founders, protocol and infra people, and technical communities from CDMX and LATAM. If you build, this day is for you.',
        },
        {
          q: 'What does it cost and how do I register?',
          a: 'Registration is on Luma. Reserve your spot there: capacity per zone is limited, especially workshops and cinema.',
        },
        {
          q: 'What language is it in?',
          a: 'Mostly Spanish, with sessions in English. The venue and the audience are bilingual es/en.',
        },
        {
          q: 'What are the hours?',
          a: 'Thursday, July 9, 2026, from 10:00 to 17:00, Mexico City time.',
        },
      ],
    },
    cta: {
      head: 'Reserve your spot.',
      sub: 'Capacity per zone is limited. Register on Luma and secure your access to the full day.',
      button: 'Register',
    },
    footer: {
      tagline: 'A one-day event at the intersection of AI and Blockchain. Mexico City.',
      register: 'Register',
      contact: 'Contact',
      coords: 'N 19.4326  /  W 99.1332',
    },
  },
} as const;
