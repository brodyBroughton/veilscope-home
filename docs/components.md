# Shared Components Spec

## Global layout
- Header: logo, primary nav, “Open the App” CTA
- Footer: secondary nav + disclaimer + copyright

## Required components
1) CTAButton
- variants: primary, secondary, ghost
- focus states visible
- primary uses --primary (blue)
- secondary/ghost can use --accent as outline only

2) DisclosureBanner
- one-line disclosure (educational only; not advice)
- variants: hero, inline
- subtle surface background, not loud

3) SourceBadge
- “Source: SEC EDGAR”
- optional external link icon
- small + calm; accent outline allowed

4) TimestampChip
- “As of YYYY-MM-DD”
- used on Data Sources and Methodology pages
- can also be used in hero trust row

5) FeatureCard
- icon + title + 2–3 lines
- hover elevation (surface → elevated)

6) FAQAccordion
- keyboard accessible
- smooth expand/collapse motion (with reduced-motion support)

7) PricingTable
- 3 tiers with placeholders
- highlight one tier subtly (outline + “Most popular” chip)
- no “salesy” language

8) UpdatesFeed
- list layout
- supports loading/error/empty
- for now keep existing behavior: fetch updates and render list

9) UpdatesTimeline (enhancement)
- same data as UpdatesFeed
- renders as timeline: dot + line + cards
- optional tags (Update / Release / Research)

---

## NEW signature component: MiniScreenerDemo
### Purpose
A safe, interactive hero module that demonstrates *filtering mechanics* (not recommendations).

### Placement
Home page hero (right side on desktop; below hero copy on mobile).

### Data
- Static **sample dataset** stored in the marketing repo (clearly labeled as sample).
- 10–20 sample rows max.
- Include:
  - ticker-like label (can be fictional)
  - EPS (number)
  - Operating Cash Flow (number)
  - Revenue (number)
  - RS (3M vs QQQ) (number)

### UI parts
A) Header row
- Title: “Mini screener (demo)”
- Label: “Sample dataset”
- Optional trust chip: “Rules you set → results you see”

B) Controls
- 4 compact sliders or number inputs:
  - EPS min
  - OCF min
  - Revenue min
  - RS min (3M vs QQQ)
- Each control has a tooltip link to Glossary (optional)

C) Results summary
- Animated count: “X companies remain”
- Diff hint: “−N removed by OCF rule” (short-lived)

D) Mini table/list
- 5–8 rows visible max
- shows ticker + 1–2 columns (e.g., EPS + RS) to keep it scannable
- rows animate out when filtered away

E) Applied-rule chip (always visible)
- “Applied: EPS ≥ 1.0”
- updates on each control change
- no advice wording

### Motion behaviors
- Changing a control:
  - updates count with a quick, smooth transition
  - removes rows with fade + collapse
  - shifts remaining rows smoothly (no jump)
- Respect prefers-reduced-motion: disable animated removal and just update instantly

### Accessibility
- Controls keyboard accessible
- Motion reduced when user prefers reduced motion
- Text contrast must remain readable on dark surfaces
