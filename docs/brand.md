# Brand & Visual System (Dark-first)

## Brand promise
Transparent, trustworthy access to unbiased public-company fundamentals — without hype.

## Tone keywords
Transparent • Calm • Modern • Data-first • Beginner-friendly • Precise

## Visual direction
- Dark-first “research terminal” aesthetic
- Subtle gradients/noise for depth (sparingly)
- High-contrast typography and clear spacing
- Trust motifs everywhere:
  - Source badges (“Source: SEC EDGAR”)
  - As-of timestamps
  - Methodology links near claims

---

## Color system (tokens)

### Core surfaces (layering model)
Use 3 layers consistently to create depth:
- Base background: page backdrop
- Surface: cards/sections
- Elevated: hover/active/overlay surfaces

**Tokens**
- --bg:        #070B16   (base background)
- --surface:   #0B1220   (primary surface)
- --elevated:  #0F1A2C   (hover/active/elevated surface)
- --border:    #1F2937   (subtle separators)

### Text
- --text:      #E5E7EB
- --muted:     #94A3B8
- --faint:     #64748B  (use sparingly; must remain readable)

### Brand colors (avoid crypto neon)
- --primary:   #1E3A8A  (trust blue; main CTAs)
- --accent:    #2DD4BF  (teal; MICRO-accent only)
- --info:      #38BDF8  (links/tooltips)

State colors (UI states only)
- --success:   #22C55E
- --warning:   #F59E0B
- --danger:    #EF4444

### Accent usage rule (important)
Teal (accent) must NOT be used as large filled backgrounds.
Allowed uses:
- 1–2px outlines
- small chips/badges
- tiny highlights (icons, dots, underlines)
- subtle focus rings (optional)
Primary blue should carry “main CTA” weight.

### Gradients (subtle)
Use only for hero / signature moments. Keep saturation low.
Example intent (not a literal requirement):
- background radial glow behind hero title
- faint top-to-bottom gradient in header

---

## Typography
- Headings: modern sans with strong x-height
- Body: readable sans, comfortable line-height
- Use a consistent scale; avoid tiny text on dark backgrounds
- Prefer fewer words + more whitespace

---

## UI motifs (trust + transparency)
- SourceBadge: “Source: SEC EDGAR”
- TimestampChip: “As of YYYY-MM-DD”
- “See methodology” link near claims
- “Educational only. Not investment advice.” shown above the fold on key pages

---

## Glass / blur guidance (optional)
If you use translucent surfaces (glassmorphism):
- Keep blur subtle
- Ensure text contrast stays readable over all backgrounds
- Avoid busy imagery behind glass
- Provide a fallback for reduced-transparency users if you implement it
