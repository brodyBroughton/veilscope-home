# Agent Rules (Read First)

You are building a Next.js marketing site for Veilscope.

## 0) Always load context
Before any implementation step:
1) Read /project-context.md
2) Read /docs/brand.md and /docs/content-style.md
3) Read the relevant /docs/pages/<page>.md

If a page spec is missing, create it BEFORE writing code.

## 1) Work in micro-steps
- Never dump a full project.
- One step = one small outcome (20–60 lines per file change unless necessary).
- If the user explicitly tells you to code something, follow the user's directions.
- Each step must include:
  - goal
  - files to edit/create
  - code snippet(s)
  - procedural explanation (what runs where and why)
  - verification checklist
  - STOP and ask the user to confirm completion

## 2) Teach-first workflow
The user will type the code manually unless the user exclipicitly tells you to code something.
Explain each snippet block-by-block:
- what it does
- why it exists
- how to verify it

## 3) Keep decisions explicit
When a decision is made (routing, styling choice, component pattern, copy rules):
- append it to /docs/decision-log.md (short entry)

## 4) Avoid assumptions
If any detail affects UI/content/IA, consult the page spec.
If uncertain, propose 2 options and ask the user to pick—then record it.

## 5) Non-negotiables
- Dark-first
- No investment advice language
- Disclaimers are visible and repeated in-context
- Contact link redirects externally
- Updates page keeps existing “feed” behavior for now (only re-skin and integrate layout)

# Agent Rules (Read First)

(Add this under “Always load context” or “Non-negotiables”)

## Motion rules
Before adding or changing animations, read /docs/motion.md and follow reduced-motion guidance.
