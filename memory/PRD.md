# ARGELIA — Premium QR Landing (Spanish)

## Original Problem Statement
Premium modern cinematic showcase website about Algeria for an international school presentation in Spain. Spanish (default) + French + English. Luxury tourism / Netflix-documentary aesthetic. Dark mode with gold / white / emerald. Sections: Hero, History timeline, Famous People, Landscapes, Gastronomy, Why Visit, Interactive Map, Media, Footer.

## Stack
- React 19 (CRA + Craco)
- Tailwind CSS 3
- Framer Motion + react-intersection-observer
- Cormorant Garamond (serif headings) + Outfit (body)
- Static frontend only — no backend used by the UI

## User Personas
- **Houari** (presenter): showcases Algeria to a Spanish school audience by sharing a QR code.
- **Audience**: International students/teachers in Spain, scanning the QR on a phone.

## Implementation — Dec 2025 (v2 update)
- Fullscreen `Lightbox` gallery component (React portal) with prev/next arrows, keyboard nav (Esc/←/→), thumbnail strip, photo counter, fallback "Sin imagen disponible" for empty galleries.
- New section **Tradiciones y Vestimenta** (between Gastronomy and Why Visit) with 6 cards: Karakou, Haïk, Chedda de Tlemcen, Burnous, Robe Kabyle, Joyas Bereberes.
- Refactored `src/data/media.js` to expose extensible galleries:
  - `LANDSCAPE_GALLERIES[i].photos = [...]`
  - `TRADITION_GALLERIES[i].photos = [...]`
  - `PEOPLE_IMAGES[i].photos = [...]`
  → Users can simply add more URLs to any `photos` array and the lightbox automatically paginates them.
- Landscape cards now show a photo-count badge (image-plus icon + number).
- Tradition cards show "1 foto" or "Próximamente" depending on whether photos are available.
- Navigation header automatically receives extra "Tradiciones" link in all 3 languages.

## Implementation — Dec 2025 (v1)
- 11 React components with cinematic Framer Motion reveals, parallax hero, particles canvas, glassmorphism.
- Tri-lingual content in `src/data/translations.js` (ES default, FR, EN) consumed via `LanguageContext`.
- Curated imagery for verified Algeria locations (Tassili, Constantine, Casbah, Tipaza, Sahara hero, Algerian flag).
- Abstract initial-monogram cards for unknown portraits (Belkacem Haba, Albert Camus, Yves Saint Laurent) — clean editorial fallback.
- Custom SVG Algeria map with 11 hoverable pins and a synchronized info panel.
- Animated visit counters (km², UNESCO sites, coastline, martyrs) with cubic ease-out.
- Loading screen with animated Algerian flag crescent + star and gold shine strip.
- Mobile menu overlay, sticky glass header, language dropdown.
- SEO meta tags, smooth scroll, custom scrollbar with gold→emerald gradient.

## What's Live
- Hero with parallax Sahara, cinematic title and CTA
- 5-era animated vertical timeline with martyrs tribute
- 5 personality cards + modal biography
- 11-card responsive bento landscape grid with hidden fact reveals
- 5-dish gastronomy gallery
- 4 animated counters + 4 pillar cards
- Custom interactive Algeria SVG map with synchronized info panel
- 3 cinematic video placeholder cards
- Footer with Houari name and 5 social placeholders (#)

## Prioritized Backlog
### P1 — High value, quick win
- Replace placeholder social `#` URLs with Houari's real links
- Embed actual cinematic YouTube/Vimeo videos in Media section (currently thumbnails-only)
- Add real portraits for Belkacem Haba, Albert Camus, Yves Saint Laurent

### P2 — Nice to have
- Optional ambient music toggle (user opted out for v1)
- Lightweight backend visit counter (`/api/visits` POST/GET) for analytics
- Server-side OG image generation for richer link previews
- Service-worker caching for ultra-fast QR scans

### P3 — Future polish
- 3D Algerian flag fabric (Three.js) on hero corner
- Audio narration toggle per section (i18n)
- Map zoom into individual destination galleries
