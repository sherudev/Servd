# Servd Backend

This backend powers Servd using Strapi as the content management system for recipes, pantry items, saved recipes, and user mappings.

## Backend responsibilities

- Store and manage recipe content
- Store pantry items and user pantry collections
- Manage saved recipe collections
- Provide Strapi-based API access for frontend actions
- Support user mapping from Clerk identities to Strapi users
- Provide backend logging and normalized response handling for better reliability

## Local development

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Run Strapi in development mode

```bash
npm run develop
```

This starts Strapi with auto-reload and opens the admin interface at `http://localhost:1337`.

### 3. Build the admin panel

```bash
npm run build
```

### 4. Start Strapi in production mode

```bash
npm run start
```

## Strapi setup notes

- Make sure your database is configured in `backend/config/database.js` or environment variables.
- The frontend expects the backend to expose the following content types:
  - `recipes`
  - `pantry-items`
  - `saved-recipes`
  - `users`
- Ensure the `STRAPI_API_TOKEN` value matches the token referenced by the frontend.
- Use the same base URL in the frontend `NEXT_PUBLIC_STRAPI_URL` setting.

## Useful scripts

```bash
npm run develop
npm run build
npm run start
npm run deploy
```

## Deployment

Strapi supports many deployment options, including Strapi Cloud. Refer to the official deployment guide to choose the right option for your environment.

## Changelog

### Latest backend updates

- Updated backend to support recipe generation and pantry item comparison flows
- Improved Strapi response normalization and error logging for frontend API calls
- Ensured Content Types support for `recipes`, `pantry-items`, `saved-recipes`, and `users`

## Helpful links

- [Strapi documentation](https://docs.strapi.io) - Official docs for Strapi setup, plugins, and deployment
- [Strapi deployment guide](https://docs.strapi.io/dev-docs/deployment) - Deployment recommendations and platform-specific instructions
- [Strapi community](https://discord.strapi.io) - Chat with the Strapi community

---

Happy backend building! 🔧
