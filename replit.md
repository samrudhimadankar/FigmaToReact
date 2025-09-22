# Google Developer Groups RBU Chapter Website

## Overview

This is a React-based website for the Google Developer Groups (GDG) chapter at Ramdeobaba University. The application serves as the main digital presence for the student developer community, featuring information about the organization, upcoming events, team members, and ways for students to get involved with Google developer technologies.

The website follows Google's Material Design principles and provides a modern, responsive interface that works across desktop and mobile devices. It includes sections for mission statements, statistics, FAQs, contact information, and showcases the technologies the group focuses on (Android, Flutter, Cloud).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React architecture with TypeScript:
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with a custom design system following Google Material Design principles
- **Component Library**: Radix UI primitives with custom styling via shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state management
- **Theme System**: Custom theme provider supporting light/dark mode with system preference detection

### Backend Architecture
Express.js server with minimal API structure:
- **Server Framework**: Express.js with TypeScript
- **Development**: Hot reload via Vite integration in development mode
- **Storage Layer**: Pluggable storage interface with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API design with `/api` prefix for all endpoints

### Database Schema
Uses Drizzle ORM with PostgreSQL:
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Basic user management with username/password fields
- **Migrations**: Drizzle Kit for schema migrations
- **Validation**: Zod integration for runtime type validation

### Component Architecture
- **UI Components**: Reusable components following atomic design principles
- **Layout Components**: Header, Footer, and main content sections
- **Page Components**: Home page with multiple content sections
- **Theme Integration**: Comprehensive light/dark mode support across all components

### Build System
- **Bundler**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and error overlay for development experience
- **Production**: Optimized builds with code splitting and asset optimization
- **Deployment**: Single build command produces both client and server bundles

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Radix UI**: Accessible UI primitives for complex components
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter and Space Grotesk fonts loaded via CDN

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe ORM for database operations
- **Drizzle Kit**: Database schema management and migrations

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for server-side code
- **Replit Integration**: Development environment integration for cloud-based coding

### State Management
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration between React Hook Form and validation libraries

### Authentication Ready
The codebase includes session management setup:
- **Connect PG Simple**: PostgreSQL session store for Express sessions
- **User Schema**: Basic user model ready for authentication implementation