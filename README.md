# Anh Duy's profile

This repository contains a Vite + React personal profile site.

## Local development

```bash
npm ci
npm run dev
```

## Publish with GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys the site whenever `main` is updated.

1. Open the repository on GitHub.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` and wait for the **Deploy GitHub Pages** workflow to finish.

For the current `duyweb/web` repository, the expected address is `https://duyweb.github.io/web/`.

If you later rename the repository to `duyweb.github.io`, the same configuration automatically publishes at `https://duyweb.github.io/`.
