# Motion System (Veilscope Marketing)

## Principle
Motion must clarify cause → effect and strengthen hierarchy.
No “decorative” motion that competes with content.

## Where motion is allowed
- Hover elevation on cards/buttons (subtle)
- Accordion expand/collapse
- Section reveal on scroll (light)
- MiniScreenerDemo list filtering (signature; cause→effect)

## Where motion is NOT allowed
- Large parallax backgrounds
- Constant looping animations that distract
- Aggressive scaling, shaking, or flashing effects

---

## Timings (guidelines)
Use a small set of consistent durations:

- Micro (hover/focus): 120–180ms
- UI transitions (accordion, chips, list updates): 180–260ms
- Section reveal: 260–420ms

## Easing (guidelines)
Prefer “ease-out” style curves that feel responsive.
- Standard ease-out for UI
- Avoid bouncy overshoot unless it serves meaning

---

## Reduced motion (required)
Respect user preference:
- If prefers-reduced-motion: reduce
  - remove non-essential animations
  - disable scroll reveal animations
  - disable row removal animations in MiniScreenerDemo (update instantly)
  - keep focus/hover states but without movement transforms

Implementation expectation:
- Provide CSS fallbacks using a prefers-reduced-motion media query.
- If using a JS animation library, it must also honor reduced motion.

---

## Demo-specific motion (MiniScreenerDemo)
When a control changes:
- Update the count smoothly (or instantly in reduced motion)
- Rows that no longer match:
  - fade out and collapse (height to 0) over ~200ms
- Remaining rows:
  - shift smoothly without “jumping”
- Optional: show a short-lived “−N removed by <rule>” hint (fade in/out)

---

## Accessibility reminders
- Motion must never be required to understand content
- Keyboard interactions must be fully supported
- Maintain readable contrast on all states (hover/active/disabled)
