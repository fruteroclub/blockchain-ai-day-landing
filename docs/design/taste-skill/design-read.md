# Design read + dials (APPROVED)

Status: APPROVED by Mel 2026-06-18. Locked input for the design-taste-frontend
build (Step 2). Companion to `brief.md` in this directory.

## Design read

Reading this as: an event landing for hype-allergic, reference-literate crypto/AI
builders in CDMX, with a geometric-modernist / editorial-technical / blueprint
language (Lance Wyman's Mexico 1968 + CDMX Metro lineage), leaning toward native
Tailwind v4 plus a custom Wyman-inspired line system (bold rules, station-map
layouts, mono blueprint annotations), dark-locked, with a token-based single
palette and a disciplined cyan + rosa-mexicano dual accent. Not a packaged design
system.

## Dials (locked)

- DESIGN_VARIANCE: 8. The Wyman art direction (radial blueprint hero, asymmetric
  line-work, a program rendered as a Metro "line map") wants high compositional
  variance, kept architectural and gridded, not artsy-chaotic.
- MOTION_INTENSITY: 5. Audience is allergic to glow, so no infinite loops; but a
  blueprint brand earns a line-draw / radial-build hero reveal, scroll-reveal on
  structure, and a tactile CTA press. Enough that "motion claimed = motion shown".
- VISUAL_DENSITY: 4. Editorial breathing room as the baseline, with real technical
  detail (mono coordinates, node-ID annotations, a real program and venue). Not
  art-gallery sparse, not cockpit-dense.

## Section plan (8-9 sections, 4+ layout families, dark-locked)

1. Nav: single line, language toggle as a functional control, Register CTA in rosa.
2. Hero: wordmark + date/venue + Register, over a CSS/SVG line-blueprint (sanctioned
   custom geometry). Headline max 2 lines.
3. What / why this event: editorial stack.
4. Program by zone: the Wyman "line map" (main stage, workshop, cinema, cowork) with
   custom pictograms.
5. Format / what to expect: asymmetric split.
6. Sponsors: real SVG logo wall under its own heading (Privy, Nebius), gated on logo
   approval (see below).
7. Venue + how to arrive: real CDMX address, map slot.
8. FAQ: accordion.
9. Final CTA band to Luma + Footer.

All sections wired through `src/i18n/ui.ts` (es + en) so `/` and `/en/` render from
one component set. `pnpm build` must pass clean.

## Build-time decisions / flags

- Sponsor logo wall: ships with real Privy/Nebius SVG marks ONLY once Mel approves
  showing them pre-confirmation. Until then, render a neutral "sponsors" placeholder.
- Photography: no image-gen tool in this environment, so use Picsum-seed placeholders
  with descriptive seeds and leave clearly-labeled TODO slots for real event/venue
  photos. No div-based fake screenshots.
- Theme: ship locked to DARK; token system keeps a `data-theme` flip to light trivial.
- Facts: use only the locked values in `src/i18n/ui.ts` (date, hours, venue, Luma).
  Do not invent sponsors beyond Privy/Nebius, speakers, or quotes. Do not publish.
