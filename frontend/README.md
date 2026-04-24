# Yogesh Portfolio Frontend

This is the frontend part of the Yogesh Portfolio application, built with React, TypeScript, and Vite.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your backend API URL:
   ```
   VITE_API_BASE_URL=https://your-backend-url.com
   ```

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push this code to a GitHub repository
2. Connect the repository to Vercel
3. Set the environment variable `VITE_API_BASE_URL` in Vercel's dashboard
4. Deploy

The built files in the `dist` directory can be deployed to any static hosting service.