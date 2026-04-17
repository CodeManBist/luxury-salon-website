# Luxury Salon Frontend

React + Vite frontend for the Luxury Salon website.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

## Production build

```bash
npm run build
```

The static output is generated in `dist/`.

## Vercel deployment

This project is deployment-ready for Vercel with SPA routing support.

### Vercel settings

- Framework Preset: `Vite`
- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

### SPA routing

Routes like `/about`, `/services`, and `/contact` are handled by React Router.
`vercel.json` includes a rewrite so direct refreshes on nested routes return `index.html`.
