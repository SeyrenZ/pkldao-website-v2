# PKL.CLUB Presale Landing Page

## Overview

PKL.CLUB is a modern React-based presale landing page for the world's first decentralized Pickleball community and $PKL token. The application serves as a high-converting marketing website designed to promote and facilitate the presale of PKL tokens. The site features a clean, modern design with countdown timers, progress tracking, and interactive elements to engage potential investors and community members.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Bundler**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with TanStack Query for server state management
- **Styling**: Tailwind CSS with custom theme variables for consistent design system
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Session Management**: express-session with PostgreSQL session store (connect-pg-simple)
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server-side bundle optimization

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Connection**: @neondatabase/serverless for optimized serverless database connections

### Authentication and Authorization
- **Session-based**: Using express-session with PostgreSQL backing store
- **User Management**: Basic user schema with username/password authentication
- **Security**: Type-safe user operations through Drizzle ORM with Zod validation

### External Dependencies
- **Database Hosting**: Neon (serverless PostgreSQL)
- **UI Framework**: Radix UI components for accessibility
- **Validation**: Zod for runtime type checking and form validation
- **Date Handling**: date-fns for date manipulation and formatting
- **Form Management**: React Hook Form with resolvers for form state and validation
- **Development Tools**: Replit-specific plugins for enhanced development experience

### Design System
- **Color Palette**: Custom CSS variables for theming with primary green (#00a86b), accent yellow (#c4f000), and alert orange (#ff533e)
- **Typography**: Modern sans-serif fonts (Space Grotesk, Inter, Geist)
- **Components**: Comprehensive UI component library built on Radix primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Animations**: CSS transitions and animations for interactive elements

The architecture follows a monorepo structure with shared TypeScript types between client and server, ensuring type safety across the full stack. The application is optimized for both development velocity and production performance, with hot module replacement in development and optimized builds for production deployment.