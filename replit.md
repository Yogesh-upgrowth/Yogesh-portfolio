# Yogesh Yadav Personal Website

## Overview

This is a personal freelancing website for Yogesh Yadav, a product growth and monetization consultant. The site is designed to attract high-quality consulting and freelance work by showcasing expertise across Fintech, Mobility, Marketplaces, SaaS, and E-commerce domains.

The website features a modern, conversion-focused design with a hero section, services breakdown, impact metrics, blog system, and contact functionality. It follows a mobile-first approach with clean, professional aesthetics inspired by marketing-style personal brands.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows swapping between in-memory and database storage

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend server
- `shared/` - Shared types and schemas between client and server
- `attached_assets/` - Static assets and images

### Key Design Patterns
- **Lazy Loading**: Below-the-fold sections and pages are lazy-loaded for performance
- **Component Composition**: UI built with Radix primitives wrapped by shadcn/ui
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### UI Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality

### Form Handling
- **React Hook Form**: Form state management
- **Zod**: Schema validation with `@hookform/resolvers`

### Development Tools
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)
- **ESBuild**: Production server bundling
- **Replit Plugins**: Dev banner, cartographer, and runtime error overlay for Replit environment