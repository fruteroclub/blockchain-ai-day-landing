I have loaded tasteskill v2 (experimental) as my only source of design rules.

Brief:

- Page kind: landing (single-day tech event), Spanish-first (es at `/`, en at `/en/`).
- Product: Blockchain + AI Day. A one-day event at the intersection of Blockchain and AI for builders, startups, companies, and communities. Thursday July 9, 2026, 11:00-19:00, Centro Historico, Mexico City. Registration on Luma (https://luma.com/3rzgnv6f). Independent, event-native identity (NOT co-branded with Frutero Club / Frutero LLC).
- Audience: technical and builder-minded. Crypto/AI engineers, founders, protocol and infra people, and serious community builders in CDMX and LATAM, plus international sponsors (Privy, Nebius). They are reference-literate, allergic to hype, and read a site by its structure and credibility, not its glow.
- Vibe words: geometric-modernist, editorial-technical, blueprint, restrained-cypherpunk.
- References:
  - Lance Wyman, Mexico 1968 Olympics identity (concentric radiating-line logotype, op-art repetition). Primary anchor.
  - Lance Wyman, Mexico City Metro (STC) pictogram system (bold single-weight geometric icons, one strong mark per idea). Primary anchor for iconography.
  - The event's own reference logo: `docs/design/references/logo_ai_x_blockchain_day_quantum.png` (a verifiable-inference "blueprint" of CDMX: AI transformer core, hexagonal blockchain validation ring, real CDMX coordinates and node IDs as technical annotation). This sets the palette and the blueprint-annotation motif.
  - Stripe Press (editorial structure, confident type, restraint) and Linear (dark discipline, hairline systems) for layout maturity, NOT for their exact look.
- Avoid:
  - The "overboard cypherpunk" version: neon glow soup, AI-purple/violet gradients, matrix rain, glitch text, glowing 3D blockchain cubes, hexagon-mesh decorative backgrounds, starfields, generic "AI brain" / circuit-board stock imagery.
  - LLM defaults: Inter + slate-900, centered hero over a dark mesh, three equal glassmorphism feature cards, an eyebrow above every section, multiple marquees, fake-precise metrics, emoji.
  - Serif-as-default (this is a geometric-sans brand, see below).
  - Hand-rolled decorative SVG "blockchain" illustrations. The one sanctioned custom-SVG exception is the Wyman-style pictogram set (see Design system notes).

---

Brand palette (suggested, derived from the reference logo)

ONE palette, theme-agnostic. There is NO separate "light palette" and "dark palette". A single navy-tinted neutral ramp plus two fixed-hue accent ramps (cyan + rosa mexicano). Light and dark are the SAME palette remapped through semantic tokens, so flipping the theme is a token remap, never a recolor. The page still LOCKS one theme (default DARK, faithful to the logo); the token architecture only makes the inverse trivial. Restrained on purpose: accents are rationed spot inks with fixed jobs, neutrals stay mono, type is crisp.

Raw ramps (defined ONCE, shared by both themes):

Neutral, cool navy-grey (the brand's through-line in both themes; one ramp, themes just read it from opposite ends):
- n-950 #0A0F16   n-900 #0E141D   n-850 #141D28   n-800 #1C2836
- n-700 #283747   n-500 #5C7080   n-400 #8198A4   n-300 #A9BBC4
- n-200 #C9D6DC   n-100 #E9EFF1   n-50 #F2F6F7   n-0 #F8FBFB

Accent A, cyan/teal (hue ~178, the logo's line-work) = the AI / system / structure layer:
- cyan-400 #5FE3DA   cyan-500 #34C9C0 (core fill/mark)   cyan-700 #0B6863 (deep, for text on light)

Accent B, rosa mexicano (hue ~327) = the CDMX / community / human-energy layer:
- rosa-400 #FF2E9A   rosa-500 #E6007E (core fill/CTA)   rosa-600 #C7006B (deep, for text on light / pressed)

Semantic tokens are the ONLY thing that changes between themes (same raw palette behind both):
- --bg          dark n-900 #0E141D   |  light n-50 #F2F6F7      (page background)
- --surface     dark n-850 #141D28   |  light n-100 #E9EFF1     (cards / bands)
- --border      dark n-700 #283747   |  light n-200 #C9D6DC     (hairlines, rules)
- --fg          dark n-50 #F2F6F7    |  light n-900 #0E141D     (primary text)
- --fg-muted    dark n-400 #8198A4   |  light n-500 #5C7080     (secondary text)
- --accent      dark cyan-400 #5FE3DA |  light cyan-700 #0B6863 (links / cyan text: flips STEP for legibility)
- --accent-fill cyan-500 #34C9C0     |  same both           (cyan borders, line-work, marks)
- --cta         rosa-500 #E6007E     |  same both           (primary "Register" CTA fill)
- --cta-label   n-0 #F8FBFB          |  same both           (near-white label on rosa, passes AA)
- --cta-press   rosa-600 #C7006B     |  same both           (pressed / active CTA)

Why this is interchangeable: the saturated accent FILLS (cyan-500, rosa-500, rosa CTA) read on either background, so they are identical in both themes; only the neutral roles invert across the one ramp, and the cyan TEXT token flips one step (bright on dark, deep on light) for contrast. Nothing else moves.

Dual-accent discipline (deliberate two-accent brand, OVERRIDES the default "max 1 accent" rule, so it must read as a system, not fluctuation):
- Each accent keeps its role in BOTH themes. Cyan never becomes a CTA fill; rosa never becomes link/structure color. One color per job.
- Rosa is the rarer of the two: the primary CTA, the "x" mark, and at most one rosa moment per section. Cyan carries the everyday structure and links. If a section has no clear job for rosa, it gets none.
- Two accents, hard stop. No third accent. Neutrals stay mono (no warm/cool drift in either theme).
- Conceptual hook: cyan = the AI/inference/system side, rosa = the CDMX/community/human side. The whole event thesis ("AI x Blockchain", "tech x CDMX") lives in that pairing.

Theme: ship the page LOCKED to one theme, default DARK (faithful to the logo). Because the palette is token-based, switching the whole page to light is flipping `data-theme` (or wiring `prefers-color-scheme`), not a recolor. Do not mix themes within one page.

---

Design system notes (anchors for the design read, not a substitute for it)

- Geometry (the spine): Wyman concentric/radiating line systems and station-diagram structure. Bold rules, thick connectors, an underlying grid you can feel. Echo the logo's radial "inference blueprint" as a structural motif (section dividers, a hero backdrop drawn in hairline + bold line, a program "line map"), not as a decorative gradient.
- Iconography (user priority: strong icons, bold lines): Phosphor at bold weight as the working family (already installed: `@iconify-json/ph` + astro-icon). PLUS a small custom Wyman-style pictogram set for the 4 program zones (main stage 80, workshop stage 20, cinema 20, cowork 40-60) and a few core themes (transformer/AI, blockchain validation, zkML, DePIN). Single-weight, geometric, one idea per mark. This is the one place hand-built SVG is justified.
- Typography: bold geometric/grotesk display (e.g. PP Neue Montreal, Geist, GT Walsheim, or a wide grotesk like Soehne Breit for the Olympic-poster feel) paired with a technical monospace for annotations, coordinates, timestamps, and labels (e.g. Geist Mono / IBM Plex Mono / JetBrains Mono). The mono echoes the logo's blueprint annotations (N 19.4326 / W 99.1332, node IDs). Self-host via @fontsource and import in `src/layouts/Base.astro`. No serif.
- Motion: restrained. Reveal-on-scroll for structure, a line-draw / radial-build on the hero geometry, tactile CTA press. No infinite neon loops. The repo already ships a reduced-motion-safe `[data-reveal]` primitive in `global.css` + Base.astro; build on it.
- Suggested starting dials (confirm in Step 1): VARIANCE 8 (strong art direction), MOTION 5 (restrained on purpose), DENSITY 4. Adjust per the design read.
- Section inventory to consider (pick what fits, 8+ sections, 4+ layout families): hero (wordmark + date/venue + Luma CTA over the line-blueprint), what/why this event, program by zone (the Wyman "line map"), speakers/format, sponsors logo wall (real SVG logos: Privy, Nebius; tiers from the deck), venue + how-to-arrive (real CDMX map/address), FAQ, final CTA band to Luma. Footer.
- Content facts already locked (single source: `src/i18n/ui.ts` `event` export): date/time 2026-07-09 11:00-19:00 America/Mexico_City; venue Jose Maria Izazaga 8, Primer Piso, Centro Historico, Alc. Cuauhtemoc, CP 06080, CDMX; registration https://luma.com/3rzgnv6f. Use these, do not invent.
- Constraints: bilingual es/en (keep both dictionaries in sync, no em-dashes per project convention). Sponsor/co-host logos on the page need Mel approval before they ship. Nothing publishes externally without Mel approval.
- Target stack: the EXISTING Astro 5 + Tailwind v4 project in this repo (NOT Next.js). Produce Astro components under `src/components/` and wire them through `src/components/Landing.astro`; Tailwind v4 is already configured CSS-first in `src/styles/global.css` (replace the neutral placeholder tokens with this palette). Icons via astro-icon/Phosphor.

---

Step 1. Declare your design read in one sentence and the three dial values with one-line reasoning each. Stop.

Step 2 (after my OK). Ship the landing in the existing Astro project with at least 8 sections. Pick the sections that actually fit the event. At least 4 different layout families across the page. Use real images (gen-tool first, then Picsum-seed) and real sponsor SVG logos. Lock the dark theme for the whole page.

Step 3. Run in writing:

- Em-dash audit (zero em-dashes U+2014 or en-dashes U+2013 anywhere)
- Pre-Flight Check (Section 14, every box marked Pass or Fail with one-line justification)
- Section-Layout-Repetition audit (list each section's layout family)
- Hero discipline audit (headline lines, subtext words, CTA visibility)

Any Fail blocks completion.
