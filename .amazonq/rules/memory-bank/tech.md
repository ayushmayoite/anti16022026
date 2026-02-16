# Technology Stack

## Core Technologies

### Framework and Runtime
- **Next.js 16.1.6** - React framework with App Router architecture
  - Static site generation (`output: "export"`)
  - File-based routing with dynamic routes
  - Server and Client Components
  - Built-in image optimization
  - Trailing slash support for static hosting

- **React 19.2.3** - UI library
  - React Server Components by default
  - Client Components for interactivity
  - Hooks for state and effects

- **TypeScript 5.x** - Type-safe JavaScript
  - Strict mode enabled
  - Path aliases (`@/*` maps to root)
  - ES2017 target
  - JSX support with react-jsx transform

### Styling and Design

- **Tailwind CSS v4** - Utility-first CSS framework
  - PostCSS integration via `@tailwindcss/postcss`
  - Custom design token configuration
  - Responsive breakpoints (mobile: 768px, tablet: 1024px, desktop: 1280px)

- **CSS Variables** - Design tokens exposed as custom properties
  - Colors, spacing, typography defined in `globals.css`
  - Consumed by components and Tailwind

- **Framer Motion 12.29.2** - Animation library
  - Scroll-triggered animations
  - Hover and interaction animations
  - Page transitions

### UI and Utilities

- **lucide-react 0.563.0** - Icon library
  - Consistent icon system
  - Tree-shakeable imports

- **clsx 2.1.1** - Conditional className utility
  - Clean conditional class composition

- **tailwind-merge 3.4.0** - Tailwind class merging
  - Resolves conflicting Tailwind classes

### Testing

- **Jest 30.2.0** - Testing framework
  - Unit tests for components and utilities
  - Integration tests for pages
  - Coverage reporting

- **React Testing Library 16.3.2** - Component testing
  - User-centric testing approach
  - Accessibility-focused queries

- **@testing-library/jest-dom 6.9.1** - Custom Jest matchers
  - DOM-specific assertions

- **fast-check 4.5.3** - Property-based testing
  - Generative testing for design tokens
  - Validates universal correctness properties
  - 100+ iterations per property test

- **ts-jest 29.4.6** - TypeScript support for Jest
  - Direct TypeScript test execution

- **jest-environment-jsdom 30.2.0** - DOM environment for tests
  - Browser-like environment for component tests

### Development Tools

- **ESLint 9.x** - Code linting
  - Next.js ESLint configuration
  - Code quality enforcement

- **PostCSS** - CSS processing
  - Tailwind CSS integration
  - CSS transformation pipeline

### AI and External Services

- **@perplexity-ai/perplexity_ai 0.23.0** - AI integration
  - Potential AI-powered features

## Programming Languages

### Primary Languages
- **TypeScript** - 100% TypeScript codebase
  - `.ts` files for utilities and configuration
  - `.tsx` files for React components
  - `.mts` files for ES modules

### Configuration Languages
- **JavaScript** - Configuration files
  - `jest.config.js`, `jest.setup.js`
  - Legacy configuration format

- **JSON** - Data and configuration
  - `package.json`, `tsconfig.json`
  - `projects.json` for project data

- **CSS** - Styling
  - `globals.css` for global styles and CSS variables

- **Python** - Utility scripts
  - `crop_logo.py` for image processing

- **PowerShell** - Automation scripts
  - `import_seating.ps1` for data import

## Build System

### Package Manager
- **npm** - Node package manager
  - `package-lock.json` for dependency locking
  - Scripts defined in `package.json`

### Build Configuration
- **next.config.ts** - Next.js configuration
  ```typescript
  {
    output: "export",           // Static site generation
    trailingSlash: true,        // Add trailing slashes to URLs
    images: {
      unoptimized: true,        // Disable image optimization for static export
      qualities: [75, 90],      // Image quality levels
      remotePatterns: [...]     // Allowed external image sources
    }
  }
  ```

- **tsconfig.json** - TypeScript configuration
  ```json
  {
    target: "ES2017",
    lib: ["dom", "dom.iterable", "esnext"],
    strict: true,
    jsx: "react-jsx",
    moduleResolution: "bundler",
    paths: { "@/*": ["./*"] }
  }
  ```

- **tailwind.config.ts** - Tailwind CSS configuration
  - Custom theme extensions
  - Design token integration

## Development Commands

### Development Server
```bash
npm run dev
# Starts Next.js development server on http://localhost:3000
# Hot module replacement enabled
# Fast refresh for instant updates
```

### Production Build
```bash
npm run build
# Creates optimized production build
# Generates static HTML/CSS/JS in /out directory
# Runs type checking and linting
```

### Production Server
```bash
npm start
# Serves production build locally
# Used for testing production build before deployment
```

### Testing
```bash
npm test
# Runs all Jest tests once
# Includes unit tests, integration tests, and property tests

npm run test:watch
# Runs Jest in watch mode
# Re-runs tests on file changes
# Interactive test filtering
```

### Linting
```bash
npm run lint
# Runs ESLint on codebase
# Checks for code quality issues
# Enforces coding standards
```

## Dependencies Overview

### Production Dependencies (8)
- React ecosystem: `react`, `react-dom`, `next`
- Styling: `clsx`, `tailwind-merge`
- Animation: `framer-motion`
- Icons: `lucide-react`
- AI: `@perplexity-ai/perplexity_ai`

### Development Dependencies (14)
- TypeScript: `typescript`, `@types/*` packages
- Testing: `jest`, `@testing-library/*`, `fast-check`, `ts-jest`
- Build tools: `@tailwindcss/postcss`, `tailwindcss`, `postcss`
- Linting: `eslint`, `eslint-config-next`

## Version Requirements

### Node.js
- Minimum: Node.js 18.x (implied by Next.js 16)
- Recommended: Node.js 20.x or later

### Browser Support
- Modern browsers with ES2017 support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Extensions

### Source Files
- `.tsx` - React components with TypeScript
- `.ts` - TypeScript utilities and configuration
- `.mts` - TypeScript ES modules
- `.css` - Stylesheets
- `.json` - Data and configuration
- `.md` - Documentation

### Build Artifacts
- `.js` - Compiled JavaScript
- `.d.ts` - TypeScript declaration files
- `.map` - Source maps
- `.html` - Generated HTML pages

## Environment Configuration

### Build Environment
- Static site generation (no server runtime required)
- Build-time environment variables supported
- No runtime environment variables (static export)

### Image Optimization
- Unoptimized images for static export
- Multiple quality levels (75%, 90%)
- Remote image patterns configured for:
  - `images.unsplash.com`
  - `afcindia.in`
  - `static.wixstatic.com`

## Performance Optimizations

### Code Splitting
- Automatic code splitting by Next.js
- Route-based splitting
- Component-level lazy loading

### Font Optimization
- `next/font` for automatic font optimization
- Geist font family preloaded
- Font subsetting and preloading

### CSS Optimization
- Tailwind CSS purging of unused styles
- Critical CSS inlining
- PostCSS minification

### Image Optimization
- Multiple quality levels for different use cases
- Responsive image sizing
- Lazy loading by default
