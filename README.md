# Inferonomics site

This repository is a standard **Vite + React + Tailwind** static site configured for **GitHub Pages deployment with a custom domain**.

## What is included

- Standard Vite/React/Tailwind codebase
- GitHub Pages workflow at `.github/workflows/deploy.yml`
- `.nojekyll` marker for static hosting
- Simple `404.html` redirect to `/`
- `GITHUB_PAGES_SETUP.md` with exact GitHub and DNS steps

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Push this repo to GitHub
2. In **Settings → Pages**, set **Source** to **GitHub Actions**
3. Add your domain in **Settings → Pages → Custom domain**
4. Update DNS with your registrar
5. Wait for the workflow to deploy
6. Enable **Enforce HTTPS** when GitHub makes it available

See `GITHUB_PAGES_SETUP.md` for the exact values.

## Before launch

- Update metadata in `index.html`
- Update contact details in `src/components/Footer.tsx`
- Update your simulator/embed section in `src/components/SimulatorSection.tsx`
- Replace any placeholder domain values with your real domain
