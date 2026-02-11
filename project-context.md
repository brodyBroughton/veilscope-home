# Veilscope Marketing Site — Project Context (Source of Truth)

This repository is the MARKETING + CONTENT site.
It promotes Veilscope and links to a separate web app (the screener product).
If a chat instruction conflicts with this file, this file wins.

## 1) Purpose of this repo
- Explain what Veilscope is (and is not)
- Build trust: transparency, sources, methodology, timestamps
- Publish updates (project updates now; public blog later)
- Describe pricing tiers (placeholders)
- Drive users to the separate app (primary CTA)
- Contact is external (redirect)

## 2) Product summary (accurate marketing description)
Veilscope is an AI-assisted stock screener for U.S. public operating companies that file 10-Q / 10-K.
Users:
1) configure screening thresholds
2) run a screen to get a list of companies
3) optionally use a “Screener Reducer” chat to transform the screened list using plain English
   - example: remove negative operating cash flow
   - example: remove companies with negative EPS

Core principle: unbiased filtering of public data; no opinions.

## 3) Guardrails (legal/compliance posture)
- Always include “Educational only. Not investment advice.”
- Do NOT imply: buy/sell/hold, “top picks,” predictions, targets, or persuasion.
- If we mention the assistant:
  - it only modifies filters / transforms the screened list
  - it does not provide advice, recommendations, or forecasts
- Our claims must emphasize transparency:
  - sources, “as-of” dates, methodology, and that the user controls filters.

## 4) Audience
- Retail / small investors
- Beginners who may not know what the SEC / EDGAR / 10-Q is
- Advanced users who want speed + traceability

## 5) Brand principles
- Transparency: show sources + timestamps + methodology links
- Trust: clean UI, consistent language, clear disclosures
- Information access: simplify complex terms and link to primary sources
- Cutting-edge but calm: minimal, data-first, easy scanning

## 6) Design direction
- Dark-first
- Clean typography, lots of whitespace (space, not clutter)
- “Source-of-truth” UI motifs:
  - “Source: SEC EDGAR” badges
  - “As-of date” chips
  - “Methodology” links near key claims

## 6.1) Mobile-first requirements
- All pages must be usable at 320px wide without horizontal scrolling.
- Layouts should stack vertically on small screens; avoid multi-column grids below 768px.
- Tap targets must be at least 44×44px.
- Font sizes should not drop below 14px on mobile; prefer 16px base.
- Primary CTAs must remain visible above the fold on mobile when possible.

## 7) Metrics (what we mention publicly)
Initial metrics:
- EPS
- Operating Cash Flow
- Revenue
- Relative Strength: 3-month return relative to QQQ

Important: do not frame as “our strategy.” Just “the current default metrics.”

## 8) Data sourcing (what we can say)
- Filings: SEC EDGAR (10-Q / 10-K)
- Fundamentals chart series: derived via edgartools
- Future: Massive 10-year historical market data for custom charts (roadmap)

Data freshness messaging:
- “Updated nightly when new filings are available.”

## 9) Site map (marketing)
Pages:
- Home
- How it works
- Pricing
- Updates (project updates now; blog later)
- About
- FAQ / Help
- Methodology
- Data Sources
- Glossary
- Disclaimer
- Privacy
- Terms
Contact:
- external redirect URL (no internal contact page)

## 10) Primary CTAs
- “Open the App” (links to web app)
- “Read Methodology”
- “View Updates”
