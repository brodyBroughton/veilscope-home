- 2026-02-19: Locked modal scrolling to the dialog (body scroll disabled) and treat featured cards as standard size when filters/sorting/search are active while keeping a highlighted Featured tag.
- 2026-02-19: Removed the modal “open in new page” action and added copy-to-clipboard feedback styling.
- 2026-02-19: Server-render updates list and fetch update details directly via Prisma with ISR to reduce initial load and modal latency.
- 2026-02-19: Added updates card animations with reduced-motion support, featured card sizing (half-width), and intercepting modal routing to keep the updates list behind the overlay.
- 2026-02-19: Expanded updates API payload (slug, tags, content) and wired updates page UI to search/filter/sort with modal/full-page rendering and share/open actions.
- 2026-02-17: Consolidated header/footer/feature-card styling into semantic classes; kept CTA variant system (`cta-*`) and removed unused `cta-button` styling to avoid duplication.
# Decision Log

Format:
- YYYY-MM-DD — Decision — Why — Alternatives — Link(s)

## Entries
- 2026-02-05 — Logo text color uses Text (#E5E7EB) with “O” in Accent (#2DD4BF) — matches brand palette and dark-first contrast — Alternatives: Primary blue for “O” — Related: /docs/brand.md
- 2026-02-05 — Shared components live in `src/components/` — keeps layout clean and reusable — Alternatives: co-locate in `src/app/_components` — Related: /docs/components.md
- 2026-02-05 — Centralized external links in `src/lib/links.ts` — avoids duplicating app/contact URLs — Alternatives: env vars or per‑page constants — Related: Header/Footer/CTA usage