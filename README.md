# Servd

Servd is an AI-powered cooking assistant built as a monorepo with a Next.js frontend and a Strapi backend. The app helps users generate recipes, compare pantry items, save favorites, and discover new dishes quickly.

## Screenshots 👈 ADD HERE

### Landing

![Landing](./public/screenshots/landing.png)

### Dashboard

![Dashbord](./public/screenshots/dashboard.png)

### Pantry

![Pantry](./public/screenshots/pantry.png)

### AI Scan

![AIScan](./public/screenshots/aiscan.png)

### Random Recipe

![Random](./public/screenshots/random.png)

- `frontend/` — Next.js application with Clerk auth, AI recipe generation, pantry comparison, recipe export, and a modern landing experience
- `backend/` — Strapi CMS backend for users, pantry items, recipe storage, and saved recipe collections

## What’s new

- **Surprise Me** landing page button with primary border styling that picks a random recipe and opens it instantly
- **Recipe pantry comparison** with a dedicated `Check Missing Ingredients` flow
- **Separate missing ingredient panel** so ingredients remain clean and easy to read
- **Improved Strapi response handling** and server error logging for better backend diagnostics
- **Recipe PDF export**, save/remove collection actions, and pro-only nutrition/tip gating

## Project structure

- `frontend/` — Next.js app with AI flows, auth, pantry comparison, and recipe details
- `backend/` — Strapi CMS backend and API for content storage

## Features

- Landing page with `Start Cooking Free` and `Surprise Me` actions
- AI-generated recipes based on selected dish name or user input
- Pantry item comparison and missing ingredient detection
- Save recipes to a personal collection
- Download recipes as PDF
- Free / Pro usage tiers with Arcjet request protection
- Clerk authentication and Strapi-backed user mapping
- Strapi CMS for recipes, pantry items, saved recipes, and users

## Getting started

### 1. Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 2. Configure environment variables

Create or update `frontend/.env` with:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
ARCJET_KEY=
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=
GEMINI_API_KEY=
UNSPLASH_ACCESS_KEY=
```

If you run Strapi locally, make sure the backend is reachable at `NEXT_PUBLIC_STRAPI_URL` and the frontend uses the same `STRAPI_API_TOKEN`.

### 3. Start Strapi backend

```bash
cd backend
npm run develop
```

Then open `http://localhost:1337` for the Strapi admin dashboard.

### 4. Start frontend

```bash
cd ../frontend
npm run dev
```

Open `http://localhost:3000` and use the landing page buttons to explore the app.

## Useful scripts

### Frontend

```bash
cd frontend
npm run dev
npm run build
npm run start
npm run lint
```

### Backend

```bash
cd backend
npm run develop
npm run start
npm run build
npm run deploy
```

## Notes

- The frontend currently expects Strapi content types for `recipes`, `pantry-items`, `saved-recipes`, and `users`.
- Use Clerk for authentication and user mapping via `clerkId`.
- The app uses Gemini for AI recipe generation and vision-based pantry handling.
- Unsplash is used to fetch recipe images when available.

## Changelog

### Latest updates

- Added `Surprise Me` landing page button with primary border styling for random recipe selection
- Added missing ingredient detection and a dedicated missing ingredients panel
- Improved recipe page UI and cleaned ingredient list layout
- Improved Strapi response handling and backend error logging

## More documentation

- See `frontend/README.md` for frontend-specific setup and feature details
- See `backend/README.md` for Strapi-specific commands and deployment notes

---

Happy cooking! 🍳
