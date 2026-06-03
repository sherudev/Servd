# Servd

Servd is an AI-powered cooking assistant that helps users scan pantry items, generate recipes, save favorites, and manage meal planning. It is built as a monorepo with:

- `frontend/` — Next.js app with Clerk auth, Gemini AI recipe generation, Arcjet protection, and Unsplash image search
- `backend/` — Strapi CMS backend for recipes, pantry items, users, and saved recipes

## Project structure

- `frontend/` — Next.js frontend application
- `backend/` — Strapi backend application

## Features

- User authentication with Clerk
- Pantry image scanning powered by Gemini Vision
- AI recipe generation using Gemini generative AI
- Unsplash-powered recipe images
- Save recipes and pantry items in Strapi
- PDF export for recipes
- Free / Pro usage tiers with Arcjet rate limiting

## Getting started

### 1. Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 2. Configure environment variables

Frontend environment variables are stored in `frontend/.env`.

Create or update this file with:

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

Backend configuration is managed by Strapi. If you run Strapi locally, make sure your database is configured correctly and use the same `NEXT_PUBLIC_STRAPI_URL` and `STRAPI_API_TOKEN` in the frontend.

### 3. Run the backend

```bash
cd backend
npm run develop
```

Strapi will start on `http://localhost:1337` by default.

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

Open `http://localhost:3000` to view the app.

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

- The frontend expects the Strapi backend to expose the content types used by the app: `recipes`, `pantry-items`, `saved-recipes`, and `users`.
- Clerk is used for authentication and user mapping.
- Arcjet is used for rate limiting free and pro usage tiers.
- Gemini requires the `GEMINI_API_KEY` environment variable.
- Unsplash image search requires `UNSPLASH_ACCESS_KEY`.

## Additional documentation

- See `frontend/README.md` for frontend-specific details and setup
- See `backend/README.md` for backend-specific Strapi commands and deployment notes

---

Happy cooking! 🍽️
