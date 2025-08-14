# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Start production**: `pnpm start`
- **Lint**: `pnpm lint`
- **Typecheck**: `pnpm typecheck`

## Code Style

- **TypeScript**: Use strict typing, never use `any` and `unknown` as types.
- **Imports**: Group imports: React, third-party, then local (prefixed with @/)
- **Components**: Use functional components with named exports
- **State**: Use Zustand for state management with typed stores
- **Formatting**: Follow Prettier defaults, 4-space indentation
- **Naming**:
    - kebab-case for folders/filenames
    - camelCase for variables/functions
    - PascalCase for components/interfaces/types
    - Use descriptive names (e.g., `addTieback` not `add`)
- **Error handling**: Use nullish coalescing and optional chaining for safety
- **Types**: Create interfaces for all data structures, prefer interface over type
- **Constants**: Define defaults and constants in dedicated files/objects

## Architecture

### Next.js App Router Structure
- **app/** - App Router pages, layouts, and API routes
  - Page components in `app/[route]/page.tsx`
  - Layouts in `app/[route]/layout.tsx`
  - API routes in `app/api/[route]/route.ts`
  - Loading states in `app/[route]/loading.tsx`
  - Error boundaries in `app/[route]/error.tsx`
- **public/** - Static assets (images, fonts, etc.)
- **components/** - Reusable React components (create as needed)
- **hooks/** - Custom React hooks (create as needed)
- **lib/** - Utility functions and shared logic (create as needed)
  - Constants in `lib/constants.ts`
  - Type definitions in `lib/types.ts`
  - Models (classes) in `lib/models/`
- **stores/** - Zustand state stores (create as needed)
- **utils/** - Helper functions (create as needed)

### Next.js Specific Guidelines

#### Server vs Client Components
- **Default to Server Components** - Use Server Components by default for better performance
- **Use Client Components when**:
  - Using React hooks (useState, useEffect, etc.)
  - Handling browser events (onClick, onChange, etc.)
  - Using browser-only APIs
  - Using third-party libraries that require browser APIs
- **Mark Client Components** with `"use client"` directive at the top of the file

#### Route Organization
- Group related routes using route groups: `(auth)`, `(dashboard)`, etc.
- Use dynamic routes: `[id]`, `[...slug]`, `[[...slug]]`
- Implement parallel routes and intercepting routes when needed
- Keep route segments focused and RESTful

#### Metadata and SEO
- Define metadata in `layout.tsx` or `page.tsx` using `export const metadata`
- Use `generateMetadata` for dynamic metadata
- Implement Open Graph images in `opengraph-image.tsx`
- Add structured data using JSON-LD

### Tailwind CSS Guidelines

- **Utility-first**: Use Tailwind utilities before writing custom CSS
- **Dark Mode**: Use `dark:` prefix for dark mode styles
- **Responsive Design**: Mobile-first approach using `sm:`, `md:`, `lg:`, `xl:`, `2xl:` breakpoints
- **Component Classes**: Extract repeated utility patterns into component classes only when truly reusable
- **Arbitrary Values**: Use sparingly, prefer design system values
- **Class Organization**: Follow consistent ordering: layout, spacing, sizing, styling, effects

### Component Best Practices

- **Props Interface**: Always define typed interfaces for component props
- **Default Props**: Use default parameter values for optional props
- **Composition**: Prefer composition over prop drilling
- **Error Boundaries**: Implement error boundaries for critical UI sections
- **Suspense**: Use Suspense boundaries for async components
- **Loading States**: Always provide loading states for async operations

### Performance Guidelines

- **Images**: Always use `next/image` for automatic optimization
- **Fonts**: Use `next/font` for optimal font loading
- **Code Splitting**: Leverage automatic code splitting, use dynamic imports when needed
- **Prefetching**: Use `<Link>` for automatic prefetching
- **Static Generation**: Prefer SSG/ISR over SSR when possible
- **Client Bundle**: Keep client-side JavaScript minimal

### API Routes

- **File Naming**: Use `route.ts` for API routes in the App Router
- **HTTP Methods**: Export named functions: `GET`, `POST`, `PUT`, `DELETE`, etc.
- **Type Safety**: Type request/response objects
- **Error Handling**: Return appropriate status codes and error messages
- **Validation**: Validate request data before processing
- **Rate Limiting**: Implement rate limiting for public APIs

### Critical Rules - DO NOT VIOLATE

- **NEVER create mock data or simplified components** unless explicitly told to do so
- **NEVER replace existing complex components with simplified versions** - always fix the actual problem
- **ALWAYS work with the existing codebase** - do not create new simplified alternatives
- **ALWAYS find and fix the root cause** of issues instead of creating workarounds
- When debugging issues, focus on fixing the existing implementation, not replacing it
- When something doesn't work, debug and fix it - don't start over with a simple version

### TypeScript and Linting

- ALWAYS add explicit types to all function parameters, variables, and return types
- ALWAYS run `pnpm typecheck`, `pnpm lint`, `pnpm build` or appropriate linter command before considering any code changes complete
- Fix all linter and TypeScript errors immediately - don't leave them for the user to fix
- When making changes to multiple files, check each one for type errors

### Prisma Usage (if added to project)

- NEVER use raw SQL queries ($queryRaw, $queryRawUnsafe) - always use Prisma Client methods
- When relations don't exist in the schema, use separate queries with findMany() and create lookup maps
- Always check the Prisma schema before assuming relations exist

### Testing Guidelines

- Write tests for critical business logic
- Use React Testing Library for component tests
- Mock external dependencies appropriately
- Ensure tests are deterministic and fast
- Follow AAA pattern: Arrange, Act, Assert

### Committing

- git commit messages must follow conventional git format with icons, for example: "✨ feat: add awesome feature".

| Type     | Emoji   | Code                  | Description                                     |
| -------- | ------- | --------------------- | ----------------------------------------------- |
| init     | 🎉      | :tada:                | Initial commit                                  |
| feat     | ✨      | :sparkles:            | New feature                                     |
| fix      | 🐛      | :bug:                 | Bug fix                                         |
| docs     | 📚      | :books:               | Documentation only changes                      |
| style    | 💎      | :gem:                 | Code style changes (formatting, semicolons)     |
| refactor | 🔨      | :hammer:              | Code refactoring                                |
| perf     | 🚀      | :rocket:              | Performance improvements                        |
| test     | 🚨      | :rotating_light:      | Adding or updating tests                        |
| build    | 📦      | :package:             | Build system or external dependencies           |
| ci       | 👷      | :construction_worker: | CI configuration files and scripts              |
| chore    | 🔧      | :wrench:              | Other changes that don't modify src or test     |
| revert   | ⏪      | :rewind:              | Reverts a previous commit                       |

- check git history to see previous commit messages and make sure to follow the same format.

### Environment Variables

- **Naming**: Use `NEXT_PUBLIC_` prefix for client-side variables
- **Security**: Never expose sensitive keys to the client
- **Validation**: Validate environment variables at build/runtime
- **Documentation**: Document all required variables in `.env.example`