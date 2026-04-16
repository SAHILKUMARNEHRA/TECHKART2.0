## TechKart

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=fff)
![React](https://img.shields.io/badge/React-18.x-149ECA?logo=react&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=fff)
![Express](https://img.shields.io/badge/Express-4.x-111827?logo=express&logoColor=fff)
![Postgres](https://img.shields.io/badge/PostgreSQL-Neon-00E599?logo=postgresql&logoColor=fff)

TechKart is a lightweight tech e-commerce experience focused on comparing products, tracking pricing, and a smooth checkout flow. It ships with email/password auth, Google OAuth, saved addresses, and past orders powered by Postgres.

### Features
- Tech-only catalog (Smartphones, Laptops, Tablets, Smartwatches) with search, filters, sorting, and Load more
- Compare tray (comparison restricted to same category)
- Cart with quick “Added to cart” feedback
- Checkout with address + payment (UPI / Cash on Delivery, simulated)
- Profile section (Flipkart-style): saved addresses (max 3) + past orders
- Optional eBay listing lookup on Product Detail page

### Project Structure
- `frontend/` React web app (Vite + Tailwind)
- `backend/` Express API (auth, products, addresses, orders)

## Local Development

### 1) Install
```bash
npm install
```

### 2) Configure env
Copy `.env.example` into `.env` and fill values (do not commit `.env`).

### 3) Run web + api
```bash
npm run dev
```

Web: `http://localhost:5173`  
API: `http://localhost:5174/api/health`

## Google OAuth Setup

In Google Cloud Console → OAuth Client:
- Authorized JavaScript origins:
  - `http://localhost:5173`
- Authorized redirect URIs:
  - `http://localhost:5174/api/auth/google/callback`

For production, update the same fields to your Vercel/Render domains.

## Deployment

This project deploys cleanly as two services:
- Frontend → Vercel
- Backend → Render (Node Web Service)

### Render (API)
1. Create a new Web Service from this repo
2. Build command:
   - `npm install && npm -w backend run build`
3. Start command:
   - `npm -w backend run start`
4. Add environment variables from `deploy/render.env.example`
5. Set `WEB_ORIGIN` to your Vercel app domain

### Vercel (Web)
1. Import the repo in Vercel
2. Framework preset: Vite
3. Environment variables:
   - `VITE_API_BASE=https://YOUR_RENDER_API_DOMAIN/api` (see `deploy/vercel.env.example`)
   - Or import `deploy/techlar.env` into Vercel (then replace the domain)

## Notes
- Orders/addresses require Postgres. Use Neon Postgres and set `DATABASE_URL`.
- Cross-domain auth cookies require HTTPS in production. The API uses `SameSite=None; Secure` automatically when `NODE_ENV=production`.

export default tseslint.config({
  extends: [
    // other configs...
    // Enable lint rules for React
    reactX.configs['recommended-typescript'],
    // Enable lint rules for React DOM
    reactDom.configs.recommended,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
