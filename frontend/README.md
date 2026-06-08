# Servd Frontend

This is the Next.js frontend for Servd, the AI cooking assistant. It provides the landing experience, recipe generation, pantry comparison, and user-facing recipe pages.

## What’s included

- **Landing page** with `Start Cooking Free` and a new `Surprise Me` button
- **Recipe page** that loads a recipe from the query parameter `cook`
- **Pantry comparison** with `Check Missing Ingredients`
- **Dedicated missing ingredients panel** instead of inline row coloring
- **Save/remove recipe collection** actions
- **PDF export** for recipe details
- **Pro-only sections** for nutrition, tips, and substitutions
- **Clerk auth** for sign-in, sign-up, and protected routes

## New frontend features

- **Surprise Me** randomly chooses a dish and navigates to `/recipe?cook=<dish>`
- **Missing ingredient detection** compares recipe ingredients against pantry items
- **Recipe UI cleanup**: ingredient list rows remain consistent while missing items are shown separately
- **Better error handling** for Strapi responses and missing or failed data loads

## Tech stack

- Next.js App Router
- React 19
- Tailwind CSS
- Radix UI primitives
- Clerk auth
- Google Gemini API
- Unsplash image search
- Sonner toast notifications

## Environment variables

Create or update `frontend/.env`:

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

## Setup

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Open `http://localhost:3000`

## Key scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Feature notes

- The homepage uses the `SurpriseMeButton` component to choose a random recipe title.
- Recipe generation is driven by `frontend/actions/recipe.actions.js`.
- Pantry comparison is handled by `frontend/actions/pantry.actions.js` and displayed on the recipe page.
- The frontend expects Strapi to serve content types for recipes, pantry items, saved recipes, and users.

## Changelog

### Latest frontend updates

- Added `Surprise Me` button to the landing page for one-click random recipe discovery
- Added recipe pantry comparison with `Check Missing Ingredients`
- Moved missing ingredient results into a separate panel for a cleaner ingredient list
- Added save/remove collection and recipe PDF export support

## Recommended flow

1. Launch the frontend
2. Sign in via Clerk
3. Use `Start Cooking Free` or `Surprise Me`
4. On the recipe page, click `Check Missing Ingredients`
5. Save the recipe or download it as a PDF

---

Happy cooking! 🍳
