# Migration notes

## What was simplified

- Replaced the custom Vite plugin setup with a normal Vite config.
- Reduced dependencies to a small static-site stack.
- Removed routing, toast, tooltip, and query wrappers that were not used by the site.
- Replaced the FAQ accordion component with native `details` / `summary` markup.
- Removed unused helper and UI files.

## Files to edit next

- `src/components/Footer.tsx` — contact email and footer copy
- `src/components/SimulatorSection.tsx` — swap placeholder for your real simulator/embed
- `index.html` — canonical URL and metadata
- `public/CNAME` — add this only if you deploy on GitHub Pages with a custom domain

## Suggested deploy targets

- GitHub Pages for a simple repo-based static deployment
- Vercel, Netlify, or Cloudflare Pages for easier previews and domain setup
