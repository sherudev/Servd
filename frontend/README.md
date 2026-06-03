# Servd

Servd is an AI-powered cooking assistant and pantry manager built with a Next.js frontend and a Strapi backend.

## What this app does

- Authenticate users with Clerk
- Scan pantry/fridge images using Gemini Vision and Arcjet protection
- Generate personalized recipes using Gemini generative AI
- Fetch recipe images from Unsplash when available
- Store pantry items, recipes, and saved recipes in Strapi
- Save favorite recipes, browse by category or cuisine, and export recipe PDFs
- Provide free / pro usage limits with rate limiting via Arcjet

## Key features

- **Pantry scanning**: upload or capture an image and automatically recognize ingredients
- **AI recipe generation**: generate new recipes from ingredient names or search terms
- **Saved cookbook**: save recipes for later and manage favorites
- **Recipe details**: prep time, cook time, servings, ingredients, instructions, nutrition, tips, and substitutions
- **User auth**: Clerk-powered sign in / sign up flows
- **Backend CMS**: Strapi stores recipes, pantry items, and saved recipe data
- **PDF export**: export recipes as printable PDFs
- **Rate limiting**: Arcjet protects image scanning and recipe generation endpoints

## Tech stack

- Frontend: `Next.js`, `React`, `Tailwind CSS`, `Radix UI`
- Auth: `@clerk/nextjs`
- AI: `@google/generative-ai` (Gemini)
- Image search: `Unsplash API`
- API protection: `@arcjet/next`
- Backend: `Strapi`, `PostgreSQL` (via `pg`)

## Environment variables

Create or update `frontend/.env` with the following values:

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

### What each value does

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable API key for client-side auth
- `CLERK_SECRET_KEY`: Clerk secret API key for server-side auth
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Clerk sign-in route
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Clerk sign-up route
- `ARCJET_KEY`: Arcjet key for protecting requests and enforcing free/pro limits
- `NEXT_PUBLIC_STRAPI_URL`: URL of the Strapi backend
- `STRAPI_API_TOKEN`: Strapi API token used by server actions to read/write content
- `GEMINI_API_KEY`: Google Gemini API key for recipe generation and image recognition
- `UNSPLASH_ACCESS_KEY`: Unsplash API key for fetching recipe images

> Note: The current `.env` file contains keys for a deployed Strapi backend. For local development, replace `NEXT_PUBLIC_STRAPI_URL` and `STRAPI_API_TOKEN` with your own local Strapi values.

## Setup

### 1. Install dependencies

```bash
cd frontend
npm install
```

```bash
cd ../backend
npm install
```

### 2. Configure the backend

If you run Strapi locally, update the backend config and environment values as needed.

```bash
cd backend
npm run develop
```

By default, Strapi runs on `http://localhost:1337`.

### 3. Start the frontend

```bash
cd ../frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

## Useful scripts

### Frontend

```bash
npm run dev
npm run build
npm run start
npm run lint
```

### Backend

```bash
npm run develop
npm run start
npm run build
npm run deploy
```

## Notes

- The frontend expects the Strapi backend to expose content types for `recipes`, `pantry-items`, and `saved-recipes`.
- The app uses Clerk for authentication and stores a mapped Strapi user record via `clerkId`.
- If you want to use a local database, ensure PostgreSQL is configured for Strapi.

## Project structure

- `frontend/`: Next.js app with AI recipe, pantry, and auth flows
- `backend/`: Strapi CMS and API for storing recipes and pantry data

---

Happy cooking! 🍳
