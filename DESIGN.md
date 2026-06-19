# AI x Blockchain Day - Design System

Canonical reference for the landing page's design system, **as implemented**. Every
value here is traceable to real code. The token source of truth is
`src/styles/global.css`; this file is its human-readable mirror plus the component
conventions built on top. When the two disagree, `global.css` wins and this file
is out of date: fix it.

No em-dashes anywhere in this project (code, copy, comments, docs). Use a hyphen.

---

## 0. Direction (locked)

Geometric-modernist, editorial-technical, blueprint. Lance Wyman lineage (Mexico
1968 identity + CDMX Metro pictograms). Dark-locked. A token-based single palette
with a disciplined cyan + rosa-mexicana dual accent. Dials: DESIGN_VARIANCE 8,
MOTION_INTENSITY 5, VISUAL_DENSITY 4. Full rationale in
`docs/design/taste-skill/brief.md` and `design-read.md`.

---

## 1. Color

### 1.1 Raw ramps (`@theme` in global.css)

One navy-tinted neutral ramp + two fixed-hue accent ramps. Defined once, shared by
both themes.

| Neutral | Hex | | Cyan (AI / system) | Hex | | Rosa mexicana (CTA) | Hex |
|---|---|---|---|---|---|---|---|
| `n-950` | `#0A0F16` | | `cyan-400` | `#5FE3DA` | | `rosa-400` | `#FF2E9A` |
| `n-900` | `#0E141D` | | `cyan-500` | `#34C9C0` | | `rosa-500` | `#E6007E` |
| `n-850` | `#141D28` | | `cyan-700` | `#0B6863` | | `rosa-600` | `#C7006B` |
| `n-800` | `#1C2836` | | | | | | |
| `n-700` | `#283747` | | | | | | |
| `n-500` | `#5C7080` | | | | | | |
| `n-400` | `#8198A4` | | | | | | |
| `n-300` | `#A9BBC4` | | | | | | |
| `n-200` | `#C9D6DC` | | | | | | |
| `n-100` | `#E9EFF1` | | | | | | |
| `n-50`  | `#F2F6F7` | | | | | | |
| `n-0`   | `#F8FBFB` | | | | | | |

Raw ramps are available as Tailwind classes (`bg-n-900`, `text-cyan-400`, etc.) but
components should prefer the semantic tokens below. `n-300` is defined but not
currently mapped to a semantic token.

### 1.2 Semantic tokens (the only thing that changes between themes)

Components reference these, never the raw ramp directly, via arbitrary-value
utilities: `bg-[var(--surface)]`, `text-[var(--fg-muted)]`, `border-[var(--border)]`,
`bg-[var(--cta)]`, `hover:bg-[var(--cta-press)]`. Opacity modifiers are allowed:
`bg-[var(--bg)]/85`, `border-[var(--accent-fill)]/30`.

| Token | Role | Dark (`:root`, default) | Light (`[data-theme="light"]`) |
|---|---|---|---|
| `--bg` | page background | `n-900` | `n-50` |
| `--surface` | cards / bands | `n-850` | `n-100` |
| `--surface-2` | raised / feature cells | `n-800` | `n-200` |
| `--border` | hairlines, rules | `n-700` | `n-200` |
| `--fg` | primary text | `n-50` | `n-900` |
| `--fg-muted` | secondary text | `n-300` | `n-500` |
| `--accent` | cyan text / links / icons / eyebrows | `cyan-400` | `cyan-700` |
| `--accent-fill` | cyan drawn lines / borders / fills | `cyan-500` | `cyan-500` |
| `--cta` | Register CTA fill + brand mark (`x` in name, `+` on eyebrows) | `rosa-500` | `rosa-500` |
| `--cta-label` | text on the rosa CTA | `n-0` | `n-0` |
| `--cta-press` | CTA hover / active | `rosa-600` | `rosa-600` |

The page is hard-locked to dark: `:root` is the dark set, `[data-theme="light"]`
is defined but never set by any component. The accent fills (`--accent-fill`,
`--cta`) are identical in both themes; only the neutral roles invert and `--accent`
shifts one cyan step for legibility. Flipping the whole page is `data-theme="light"`,
not a recolor.

### 1.3 Dual-accent roles (hard rule, held strictly in the build)

Two accents, fixed jobs, never swapped. No third accent. Neutrals stay mono.

- **Cyan (`--accent` / `--accent-fill`) = AI / system / structure.** All line-work
  (Metro rail, node rings, hairlines, map frame, nav underline), the blueprint
  backdrops, every eyebrow / kicker / mono label, all Phosphor icons, all link hover
  states, the focus ring, and the Hero secondary outline CTA.
  - Sub-convention: `--accent` (cyan-400) for text/icons/eyebrows; `--accent-fill`
    (cyan-500) for actually drawn lines / borders / fills.
- **Rosa mexicana (`--cta` / `--cta-press`) = the action + the brand mark.** The
  primary Register CTA fill (everywhere), the "become a sponsor" tile, the
  `::selection` highlight, and the brand mark: the rosa `x` in the Nav / Footer
  wordmark and the rosa `+` on section eyebrows (Program). Rosa appears nowhere
  else. Format and Venue intentionally have no rosa moment.

Audited: zero off-role accent usage in the current build. Keep it that way.

---

## 2. Typography

### 2.1 Faces (global.css `@theme` + base layer)

- `--font-display`: `"Space Grotesk Variable"` (headings; base layer sets
  `h1-h4` to `font-weight: 500; letter-spacing: -0.01em`).
- `--font-sans`: `"Space Grotesk Variable"` (body; same face as display).
- `--font-mono`: `"JetBrains Mono Variable"` (the blueprint-annotation motif).

Self-hosted via `@fontsource-variable/*`, imported at the top of `Base.astro` before
`global.css`. Display and sans are the same family; only mono differs.

### 2.2 Scale (as used)

| Role | Classes |
|---|---|
| Hero headline (h1) | `text-4xl sm:text-5xl lg:text-6xl`, `leading-[1.04]`, `tracking-tight`; 2nd line `text-[var(--accent)]` |
| Section h2, large (rule: narrative moments only) | `text-4xl sm:text-5xl lg:text-6xl` (About, CtaBand) |
| Section h2, standard (default) | `text-3xl sm:text-4xl md:text-5xl` (Program, Format, Sponsors, Venue, Faq) |

**h2 rule:** the standard scale is the default. The large scale is reserved for the
two narrative-moment sections only: About (the opening thesis) and CtaBand (the
closing push). It matches the Hero h1 scale. Do not use the large scale elsewhere.
| h3 (zone/card/faq titles) | `text-lg sm:text-xl` to `text-xl md:text-2xl` |
| About lead paragraph | `text-xl sm:text-2xl leading-relaxed` |
| Body / sub | `text-base sm:text-lg leading-relaxed text-[var(--fg-muted)]` |
| Small body (desc, tagline) | `text-sm leading-relaxed` |
| Mono label / eyebrow / kicker | `font-mono text-xs (text-[0.7rem]) uppercase tracking-[0.18em]` |

**Headline weight (rule):** medium (`500`) by default. h2s inherit it from the base
layer (no per-element weight class); Hero h1 and About h2 set `font-medium`
explicitly. `font-semibold` (`600`) only when a specific headline explicitly opts
in; **never** `font-bold` or `font-extrabold`. The display face stays Space Grotesk.
Headlines carry tracking; body does not.

### 2.3 The mono annotation motif (the strongest cross-cutting signature)

`font-mono uppercase` wide-tracking labels are the blueprint voice: Hero kicker,
About eyebrow, Program station codes (`01`-`04`) + `cap` chips, Venue label rows,
Sponsors slot labels, Footer coords. Tracking runs `0.08em` (nav links) to `0.22em`
(About eyebrow); the dominant value is `tracking-[0.18em]`. The CDMX coordinate
string `N 19.4326 / W 99.1332` is the recurring annotation (in `ui.ts` as
`footer.coords`, also inline in About and Venue).

---

## 3. Layout & spacing

- **Container (universal):** `mx-auto max-w-[1200px] px-6` (24px gutters). Every
  section uses it. Hero carries `px-6` on the section with an inner
  `mx-auto w-full max-w-[1200px]`.
- **Section vertical rhythm:** standard is `py-24 md:py-32` (Program, Format,
  Sponsors, Venue, Faq, CtaBand all bump at `md:`). Two deliberate outliers: About
  `py-28 md:py-40` (the air section) and Footer `py-16 md:py-20`. Hero is
  `min-h-[100dvh]` flex-centered with `pt-24 pb-16`.
- **Breakpoints:** `sm` 640, `md` 768 (primary column-collapse point), `lg` 1024
  (largest headlines only).
- **Section dividers:** most sections open with `border-t border-[var(--border)]`
  (Nav uses `border-b`).
- **Mobile collapse is declared per section** (Tailwind grid or scoped CSS): Venue
  `grid-cols-1 -> md:grid-cols-12` (5/7 split), Faq asymmetric 2-col, Program and
  Format and Footer via scoped `@media (min-width:768px)`.

---

## 4. Shape, borders, elevation

- **Radius: `rounded-sm` is the system.** All CTAs, the Format bento cells, the
  CtaBand inner band. Exceptions, all intentional: Sponsors wall `rounded-md`
  (outer only), Program node rings + capacity chips `rounded-full`, Sponsors empty
  slots `rounded-[4px]`, Program line cap `2px`. Do not introduce `rounded-lg/xl`.
- **Borders / hairlines:** 1px `border-[var(--border)]` is pervasive. Cyan hairlines
  (`var(--accent-fill)`, often `/40` or `/30`) are the structural accent (About rule,
  Venue map frame + corner ticks, Footer coords square). The Sponsors wall draws a
  shared grid via `gap-px` + `bg-[var(--border)]` showing through.
- **Elevation:** effectively none. Hierarchy comes from `--surface` / `--surface-2`
  tints, hairlines, and negative space, not shadows. Do not add drop shadows.

---

## 5. Motion

- **Primitive:** `[data-reveal]` fade-up. `opacity:0; translateY(16px)` ->
  `.is-visible` over `0.6s cubic-bezier(0.16,1,0.3,1)`, gated by
  `@media (prefers-reduced-motion: no-preference)` in `global.css`. Driven by the
  IntersectionObserver in `Base.astro` (`threshold:0.15`, `rootMargin:'0px 0px -10% 0px'`,
  reveal-once then unobserve). Reduced-motion / no-IO path reveals everything
  immediately.
- **Applied** element-level (Hero, About, Program, Venue) and group-level (Format
  `.bento`, Sponsors wall, Faq list, CtaBand band). Stagger via inline
  `style="transition-delay:..."` or a `--reveal-delay` custom property.
- **Component-scoped motion** (each with its own reduced-motion guard): Hero
  `blueprint-in` keyframe on the backdrop, Nav link underline `::after` scaleX, Faq
  `faq-open` keyframe on `[open]`, CtaBand tactile `:active { translateY(1px) }`.
- MOTION_INTENSITY is 5: reveal + the hero blueprint build + CTA press. No infinite
  loops, no parallax, no scroll-hijack.

---

## 6. Icons

- **Phosphor only, via `astro-icon`**: `import { Icon } from 'astro-icon/components'`,
  `<Icon name="ph:..." />`. Always the **`-bold`** weight.
- In use: `ph:arrow-up-right-bold` (Register CTAs), `ph:arrow-down-bold` (Hero
  secondary), `ph:list-bold` / `ph:x-bold` (Nav toggle), `ph:microphone-stage-bold`
  `ph:wrench-bold` `ph:monitor-play-bold` `ph:film-strip-bold` `ph:users-three-bold`
  (Format), `ph:map-pin-bold` `ph:calendar-blank-bold` `ph:train-bold` (Venue),
  `ph:plus-bold` / `ph:minus-bold` (Faq).
- Colored via `text-[var(--accent)]` or inherited CTA label color. Sizes `h-3 w-3`
  to `h-8 w-8`. One icon family only. Never hand-roll icon paths.
- The only sanctioned custom SVG is the two primitives below.

---

## 7. Primitives

### 7.1 `Blueprint.astro`

Decorative radial "inference blueprint" backdrop. The hero/CtaBand/Format motif.

- **Props:** `class?: string` only. No color/size props.
- **Renders:** inline `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor">`,
  `pointer-events-none`, `aria-hidden`. Geometry centered at (100,100): 5 concentric
  arcs (radii 28/46/64/82/96), 24 radiating spokes, a 12-hexagon ring at r70, a
  transformer "core" (ring + filled dot).
- **Coloring/sizing contract:** caller sets color with a text utility
  (`text-[var(--accent)]` or `text-[var(--accent-fill)]`) because the SVG uses
  `stroke="currentColor"`, and sizes with `h-*/w-*` + `opacity-*`.

### 7.2 `Pictogram.astro`

Bold single-weight geometric pictograms (Wyman / Metro spirit). Program station marks.

- **Props:** `name` (required), `class?`, `title?`. With `title` it sets
  `role="img"` + `aria-label`; without, `aria-hidden`.
- **SVG:** `viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="6"
  stroke-linecap="square" stroke-linejoin="miter"`.
- **`name` values (8 defined):** `main`, `workshop`, `cinema`, `cowork` (in use by
  Program), plus `transformer`, `blockchain`, `zkml`, `depin` (defined, not yet
  referenced; available for future sections).
- **Coloring/sizing contract:** same `currentColor` + text-utility pattern as Blueprint.

---

## 8. Components & patterns

### 8.1 CTAs

CTAs are hand-written per placement (no shared button class yet), but all share one
type + fill convention: `rounded-sm`, `bg-[var(--cta)]`, `text-[var(--cta-label)]`,
`hover/active:bg-[var(--cta-press)]`, and **`font-mono uppercase tracking-wide
font-medium`**. Only padding/icon-size scale with placement.

- **Primary Register** (the convention above, trailing `ph:arrow-up-right-bold`).
  Appears in Nav (`px-3.5 py-2 text-xs`), Hero (`px-6 py-3 text-sm`), CtaBand
  (`px-8 py-4 text-sm`), Footer (`px-4 py-2.5 text-xs`), all pointing at
  `event.registrationUrl`. One register intent, one label family, mono-uppercase
  everywhere.
- **Secondary** (Hero only): cyan outline, `border-[var(--accent-fill)]`,
  `text-[var(--accent)]`, `hover:bg-[var(--accent-fill)]/10`, mono uppercase, mirrors
  the primary's geometry.
- **Become a sponsor** (Sponsors): a full rosa grid tile (not a pill), corner-clipped
  by the wall, `mailto:` placeholder.
- **Nav links:** `font-mono text-[13px] uppercase tracking-[0.08em]
  text-[var(--fg-muted)] hover:text-[var(--accent)]` with a left-origin scaleX
  underline. Footer links are sans (not mono), `hover:text-[var(--accent)]`.

CTA intent is single: "register" everywhere (one label family, reused). Do not add a
second register-intent label.

### 8.2 Section header pattern

Recurring but intentionally not universal: `mono eyebrow (often with the cyan/rosa
"+" or a cyan word) + display headline + muted sub`. Used by About, Program,
Sponsors, CtaBand. Format and Faq deliberately run headline-only (`eyebrow: null` in
`ui.ts`). Eyebrow budget is capped: at most ceil(sections / 3) mono eyebrows sitting
above a headline (currently Hero kicker + About + Program = 3). Do not add an eyebrow
to every section.

### 8.3 Section inventory (layout families, all distinct)

| Section | id | Layout family |
|---|---|---|
| Nav | (header) | fixed bar, blur, mobile disclosure |
| Hero | `inicio` | full-bleed blueprint hero, left-anchored |
| About | `acerca` | single-column editorial manifesto |
| Program | `programa` | CDMX-Metro line map (the signature) |
| Format | `formato` | asymmetric bento grid (`"c1 c1 c2 c3" / "c4 c5 c5 c5"`) |
| Sponsors | `patrocinadores` | placeholder logo wall (`gap-px` grid) |
| Venue | `sede` | image + text split (5/7) |
| Faq | `faq` | native `<details>/<summary>` accordion, zero JS |
| CtaBand | (none) | full-width rosa band |
| Footer | (footer) | multi-column + mono annotation row |

`Landing.astro` composes them in this order and is locale-agnostic.

---

## 9. Conventions

- **Dark-locked.** Every section re-asserts `bg-[var(--bg)]`. `[data-theme="light"]`
  exists but is unused; do not introduce per-section theme flips.
- **Bilingual via `ui.ts`.** Each component does
  `const lang = getLang(Astro); const t = useTranslations(lang)` and reads its slice
  (`t.hero`, `t.program`, ...). ES at `/`, EN at `/en/`, both from the same component
  set. Keep `es` and `en` structurally identical. Caveat: a few structural
  micro-labels are inline `lang === 'es' ? ... : ...` ternaries (Venue, Sponsors)
  rather than dictionary keys; prefer adding a `ui.ts` key for new copy.
- **Single source of truth for facts:** the `event` export in `ui.ts` (`name`,
  `dateISOStart/End`, `registrationUrl`, `venue`). The Register buttons and the
  schema.org `Event` JSON-LD in `Base.astro` both read it. Do not hard-code the date,
  venue, or Luma URL.
- **The brand mark** is the only non-CTA rosa, rendered `text-[var(--cta)]`: the `x`
  in the Nav / Footer wordmark and the `+` on section eyebrows (Program).
- **Image strategy:** the page is geometry-first. One real image (Venue map) as a
  `picsum.photos` placeholder with a `TODO` for a real embed. OG image and favicons
  are still neutral placeholders. No div-based fake screenshots, no decorative
  hand-rolled SVG beyond the two primitives.
- **No em-dashes / en-dashes** anywhere, including comments and alt text.

---

## 10. Resolved conventions

Three spots that were once internally inconsistent are now unified rules (resolved
2026-06-19). They are stated in their home sections above; collected here for history.

| Area | Rule (now enforced in the build) |
|---|---|
| Register CTA type | Always `font-mono uppercase tracking-wide font-medium` + rosa fill; only padding / icon size scale with placement. Unified across Nav, Hero, CtaBand, Footer. (See section 8.1.) |
| Section rhythm | Standard `py-24 md:py-32` everywhere; only About (`py-28 md:py-40`) and Footer (`py-16 md:py-20`) are deliberate outliers. (See section 3.) |
| h2 scale | Standard `text-3xl sm:text-4xl md:text-5xl` by default; large `text-4xl sm:text-5xl lg:text-6xl` for the two narrative moments only (About, CtaBand). (See section 2.2.) |

---

## 11. Extending the system

- **Add a token:** add the raw color to `@theme` and map a semantic token in both
  `:root` and `[data-theme="light"]`. Reference it as `*-[var(--token)]`. Update
  section 1 here.
- **Add a section:** new `src/components/X.astro`, consume `t.x` from `ui.ts` (add the
  copy in both `es` and `en`), pick a layout family not already used, reuse the
  container (`mx-auto max-w-[1200px] px-6`) and rhythm (`py-24 md:py-32`), wire it into
  `Landing.astro`. Honor the accent roles and the eyebrow cap.
- **Add an icon:** Phosphor `-bold` only. Need a custom mark? Extend `Pictogram.astro`
  (it already has 4 unused names) rather than hand-rolling SVG in a component.
- **Theme flip (future):** set `data-theme="light"` on `<html>`; the token system
  inverts with no component changes. Verify contrast before shipping a light variant.

---

Source of truth: `src/styles/global.css` (tokens) + the components under
`src/components/`. This file documents them; keep it in step when either changes.
