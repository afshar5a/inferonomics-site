# GitHub Pages + custom domain setup

This project is configured for **GitHub Pages via GitHub Actions**.

## 1) Push to GitHub

Create a repository and push this code to the `main` branch.

```bash
git init
git add .
git commit -m "Prepare site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

## 2) Turn on GitHub Pages

In your repository:

- Go to **Settings → Pages**
- Under **Build and deployment**
- Set **Source** to **GitHub Actions**

The workflow file at `.github/workflows/deploy.yml` will handle the build and deploy.

## 3) Add your custom domain in GitHub

Still in **Settings → Pages**:

- Find **Custom domain**
- Enter your domain, for example `www.yourdomain.com` or `yourdomain.com`
- Save it
- When it becomes available, enable **Enforce HTTPS**

## 4) Configure DNS with your domain provider

Use **one** of these patterns.

### Option A: you want `www.yourdomain.com`

Create a **CNAME** record:

- Host/Name: `www`
- Target/Value: `YOUR-USERNAME.github.io`

Do **not** include the repository name in the target.

### Option B: you want the apex domain `yourdomain.com`

Create **A** records for the root domain pointing to:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Optional but recommended: also add **AAAA** records:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

If you use the apex domain, also add a `www` **CNAME** pointing to:

- `YOUR-USERNAME.github.io`

## 5) Update metadata before launch

Edit these files before going live:

- `index.html` → title, description, canonical URL, Open Graph URL
- `src/components/Footer.tsx` → email/contact info
- `src/components/SimulatorSection.tsx` → embed or CTA destination

## 6) Push updates

Every push to `main` will redeploy the site.

## Notes

- This setup assumes a **custom domain or username Pages site** root path, so Vite `base` is `/`.
- The `public/.nojekyll` file is included to avoid Jekyll processing.
- The `public/404.html` file redirects missing routes to `/`.
- For GitHub Pages deployed via **Actions**, GitHub stores the custom domain in repository settings; you should still set it there even if you keep a local note.
