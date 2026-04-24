# Yogesh Portfolio Backend

This is the backend part of the Yogesh Portfolio application, built with Node.js, Express, and TypeScript.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables (create a `.env` file):
   ```
   PORT=5000
   NODE_ENV=production
   # Add your database and other configuration variables
   ```

## Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deployment to Railway

1. Push this code to a GitHub repository
2. Connect the repository to Railway
3. Set environment variables in Railway's dashboard
4. Deploy

The backend will run on the port specified by the `PORT` environment variable (default: 5000).

## API Endpoints

The backend serves API endpoints under `/api/*` and handles all the business logic, database operations, and authentication.