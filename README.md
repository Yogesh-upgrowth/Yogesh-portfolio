# Yogesh Portfolio

This is a full-stack portfolio application that has been separated into frontend and backend for independent deployment.

## Project Structure

- `frontend/` - React frontend application (deploy to Vercel)
- `backend/` - Node.js/Express backend API (deploy to Railway)
- `shared/` - Shared TypeScript types and utilities
- `attached_assets/` - Static assets

## Deployment

### Frontend (Vercel)
1. Navigate to `frontend/` directory
2. Follow the README.md in that directory
3. Set `VITE_API_BASE_URL` environment variable to your backend URL

### Backend (Railway)
1. Navigate to `backend/` directory
2. Follow the README.md in that directory
3. Set up your database and other environment variables

## Development

For local development with both parts:
1. Start backend: `cd backend && npm run dev`
2. Start frontend: `cd frontend && npm run dev`
3. Set `VITE_API_BASE_URL=http://localhost:5000` in frontend/.env

## Original Monorepo

The original code is still available in the `client/` and `server/` directories for reference.