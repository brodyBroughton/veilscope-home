# Data + Updates Feed (Marketing Site)

## Updates content
- For now, keep the existing “project updates” behavior:
  - fetch from an API endpoint
  - render client-side list
- Later:
  - source from DB in the marketing site stack OR from the web app backend
  - add categories: Project Update, Release Note, Blog

## Minimum fields
- id
- title
- date (ISO)
- summary
- body (optional)
- tags (optional)
- link (optional)

## Error handling
- Loading state
- Empty state
- Error state with retry
