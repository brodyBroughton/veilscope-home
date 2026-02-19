# Page: Updates (/updates)

## Goal
Show updates as a modern card grid (like the legacy site), with search + filters + sort.
Clicking a card opens a modal that displays the full update content.
The modal should support deep-linking (shareable URL) and be accessible.

## Primary CTA
Open the App (external) OR “Read Methodology” (internal)

## Key trust disclosures
- Footer disclaimer
- Optional: small inline disclosure beneath the page intro (keep it calm)

---

## IA + Layout
### Page header
- Title: “Updates”
- Subtitle: “Release notes, model improvements, and product changes from the Veilscope team.”
- Keep consistent with global layout (header + footer).

### Controls row (top of feed)
1) Search input
   - placeholder: “Search updates…”
2) Filter chips (multi-select optional, but at least single-select)
   - All
   - Weekly Reports (or “Reports”)
   - Author(s): Brody, Jacob (or dynamic authors)
   - Any additional tag categories later
3) Sort dropdown
   - Featured (default)
   - Newest
   - Oldest

> Controls should be responsive: wrap to multiple rows on small screens.

---

## Updates grid (cards)
### Card layout (matches legacy pattern)
Each update renders as a card with:
- Top media area (visual)
  - Default: a generated gradient/abstract “data” background (no stock photos)
  - Optional later: per-update image URL
- Tag chips (e.g., “Weekly Report”, author name)
- Date (small)
- Title (strong)
- Summary (1–2 lines)
- “Read more →” affordance (optional; clicking anywhere opens modal)

### Grid rules
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Cards should have hover elevation (surface → elevated) and subtle border emphasis.

---

## Modal behavior (click card → pop-up)
### Interaction
- Clicking a card opens a modal overlay with full update content.
- Close methods:
  - Close (X) button
  - Escape key
  - Clicking the backdrop (optional, but supported if implemented carefully)

### Accessibility requirements (must)
- Use an accessible dialog pattern:
  - Focus moves into the modal on open
  - Focus is trapped inside while open
  - Focus returns to the triggering card on close
  - Background content is not reachable by keyboard while modal is open
- Add proper ARIA attributes:
  - role="dialog"
  - aria-modal="true"
  - aria-labelledby / aria-describedby wired to the modal title/summary

### Content shown in modal
- Title
- Date
- Tags (chips)
- Author (if available)
- Full body content (supports paragraphs, lists, links)
- Optional: “Share” link (copies URL)
- Optional: “Open in new page” link (see deep linking)

### Scroll & sizing
- Modal body scrolls internally (don’t scroll the background)
- Max width: readable (e.g., 720–840px)
- Mobile: full-screen sheet style is acceptable (still a “modal”)

---

## Deep-linking / routing requirements (important)
The modal must be shareable and reload-safe:

### Desired UX
- If a user clicks a card from /updates:
  - open modal AND update the URL (e.g., /updates/<slug> or /updates?slug=...)
- If a user loads the URL directly or refreshes while open:
  - show the update content as a full page (or as an “open” modal state) — but never lose access to the content.

### Recommended Next.js approach
Use App Router modal routing (Parallel Routes + Intercepting Routes) so:
- URL changes are shareable
- Back button closes the modal instead of leaving the page
- Refresh preserves state

(Implementation details live in code; this doc only defines behavior.)

---

## Data / integrations (keep current behavior)
- Keep the existing API-driven updates feed for now.
- The marketing site fetches and renders:
  - loading state
  - empty state
  - error state with retry

### Minimum required fields
- id
- slug (required for deep-linking)
- title
- date (ISO)
- summary
- body (string or structured blocks)
- tags (array)
- author (string)
- featured (boolean)

---

## SEO
- /updates page:
  - Title: “Updates — Veilscope”
  - Description: “Product updates and release notes from the Veilscope team.”
- Optional later:
  - Individual update route page metadata (if you implement /updates/<slug>)

---

## Acceptance criteria
- Cards render in a responsive grid (3/2/1 columns)
- Search/filter/sort work (even if basic)
- Clicking a card opens a modal with full content
- Modal supports keyboard + Escape + focus handling
- URL deep-link works (shareable) and refresh does not lose the update content
- Styling matches dark-first layered surfaces; no neon/crypto vibes
