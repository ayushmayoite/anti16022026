# Project Structure

## Directory Organization

### `/app` - Next.js App Router Pages
Main application pages using Next.js 16 App Router architecture:
- `page.tsx` - Homepage with hero, products, gallery, testimonials
- `layout.tsx` - Root layout with global styles and metadata
- `globals.css` - Global CSS variables and Tailwind directives
- `/about` - Company information page
- `/blog` - Blog listing and individual post pages
- `/careers` - Career opportunities page
- `/collection` - Product collection showcase
- `/contact` - Contact form and information
- `/design-system` - Design system documentation page
- `/gallery` - Image gallery page
- `/insights` - Insights and articles page
- `/privacy` - Privacy policy page
- `/products` - Product catalog with dynamic routes
- `/projects` - Project portfolio page
- `/terms` - Terms of service page

### `/components` - React Components
Organized by feature and responsibility:

#### `/components/ui` - Primitive UI Components
Core design system components:
- `Button.tsx` - Primary, secondary, accent button variants
- `Card.tsx` - Content card with elevation and borders
- `Heading.tsx` - Typography component for headings (h1-h6)
- `Text.tsx` - Typography component for body text
- `Input.tsx` - Form input with validation states
- `ResponsiveImage.tsx` - Optimized image component with responsive behavior
- `Logo.tsx` - Company logo component
- `AfcLogo.tsx` - AFC-specific logo variant
- `WhatsAppCTA.tsx` - WhatsApp call-to-action button
- `__tests__/` - Unit tests for UI components

#### `/components/layout` - Layout Components
Structural components for page composition:
- `Container.tsx` - Content width container with responsive padding
- `Section.tsx` - Page section wrapper with spacing
- `Navbar.tsx` - Main navigation bar
- `Footer.tsx` - Site footer with links and information
- `Logo.tsx` - Logo component for navigation
- `MegaMenu.tsx` - Dropdown mega menu for navigation
- `__tests__/` - Unit tests for layout components

#### `/components/navigation` - Navigation Components
Specialized navigation elements:
- `Header.tsx` - Page header with navigation
- `FooterElegant.tsx` - Elegant footer variant
- `__tests__/` - Unit tests for navigation components

#### `/components/home` - Homepage Sections
Homepage-specific components:
- `HeroElegant.tsx` - Elegant hero section
- `HeroModern.tsx` - Modern hero variant
- `PartnershipElegant.tsx` - Partnership/client showcase
- `PartnershipSection.tsx` - Partnership section variant
- `ProductGridElegant.tsx` - Elegant product grid
- `ProductGrid.tsx` - Standard product grid
- `ProductCarousel.tsx` - Product carousel component
- `ProductCategories.tsx` - Product category navigation
- `FeaturedProducts.tsx` - Featured products section
- `GalleryElegant.tsx` - Elegant gallery section
- `GallerySection.tsx` - Standard gallery section
- `TestimonialsElegant.tsx` - Elegant testimonials
- `TestimonialsSection.tsx` - Standard testimonials
- `ClientMarquee.tsx` - Scrolling client logo marquee
- `LocalTrust.tsx` - Local trust indicators

#### `/components/products` - Product Components
Product-specific components:
- `ProductCard.tsx` - Individual product card
- `ProductGallery.tsx` - Product image gallery

#### `/components/seo` - SEO Components
Search engine optimization components:
- `JsonLd.tsx` - JSON-LD structured data component

#### `/components/examples` - Example Components
Reference implementations:
- `ResponsiveExample.tsx` - Responsive behavior examples

### `/lib` - Utilities and Configuration
Core utilities, hooks, and configuration:

#### Design System
- `design-tokens.ts` - Complete design token system (colors, typography, spacing, animations)
- `color-utils.ts` - Color manipulation utilities
- `utils.ts` - General utility functions

#### Animation Systems
- `hover-animations.ts` - Hover animation configurations
- `scroll-animations.ts` - Scroll-triggered animation utilities
- `HOVER_ANIMATIONS.md` - Hover animation documentation
- `SCROLL_ANIMATIONS.md` - Scroll animation documentation

#### Data
- `products.ts` - Product data and catalog

#### Hooks
- `/hooks/useBreakpoint.ts` - Responsive breakpoint detection hook
- `/hooks/useScrollAnimation.ts` - Scroll animation hook
- `/hooks/index.ts` - Hook exports
- `/hooks/README.md` - Hook documentation
- `/hooks/__tests__/` - Hook unit tests

#### Tests
- `__tests__/` - Property-based and unit tests for design system
  - `design-tokens.property.test.ts` - Design token validation
  - `color-contrast.property.test.ts` - Color contrast compliance
  - `typography-scaling.property.test.ts` - Typography scaling validation
  - `visual-hierarchy.property.test.ts` - Visual hierarchy testing
  - `animation-duration.property.test.ts` - Animation duration bounds
  - `interactive-states.property.test.ts` - Interactive element states
  - `touch-target-minimums.property.test.ts` - Touch target size validation
  - `component-design-tokens.property.test.ts` - Component token usage
  - `responsive-behavior.test.tsx` - Responsive behavior testing
  - `hover-animations.test.ts` - Hover animation testing
  - `scroll-animations.test.ts` - Scroll animation testing

### `/public` - Static Assets
Public assets served directly:
- `/products/` - Product images organized by category
  - `/enhanced/` - Enhanced product images
  - `/oando/` - Oando project images
  - `/seating/` - Seating product images
  - Individual product images (workstations, chairs, tables, pods)
- `/projects/` - Project portfolio images
  - `/abdul-hai/` - Abdul Hai project
  - `/collect/` - Collection project
  - `/government/` - Government project
  - `/onedrive/` - OneDrive project
  - `/usha/` - Usha project
  - Individual project images
- Logo files (PNG, SVG variants)
- Icon files (Next.js, Vercel icons)

### `/test-backup` - Test Backups
Backup of test files and components during refactoring:
- Component backups (UI, layout, navigation)
- Test file backups (unit tests, property tests)
- Configuration backups (Jest, Tailwind)

### Configuration Files (Root)
- `next.config.ts` - Next.js configuration (static export, image optimization)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Jest testing configuration
- `jest.setup.js` - Jest setup and matchers
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration
- `package.json` - Dependencies and scripts
- `.gitignore` - Git ignore patterns

### Build Artifacts
- `/.next` - Next.js build output and cache
- `/.swc` - SWC compiler cache
- `/coverage` - Test coverage reports
- `/.wrangler` - Cloudflare Wrangler artifacts

## Core Component Relationships

### Page Composition Pattern
```
Page (app/*/page.tsx)
  └─> Layout Components (Container, Section)
      └─> Feature Components (Hero, ProductGrid, Gallery)
          └─> UI Primitives (Button, Card, Heading, Text)
```

### Design Token Flow
```
design-tokens.ts (source of truth)
  └─> globals.css (CSS variables)
      └─> Components (consume via Tailwind or CSS vars)
          └─> Property Tests (validate usage)
```

### Navigation Hierarchy
```
Navbar/Header (top-level)
  └─> MegaMenu (dropdown navigation)
      └─> Links to all major pages
Footer (bottom-level)
  └─> Links, contact info, social media
```

## Architectural Patterns

### Component Architecture
- **Atomic Design**: UI components built from primitives to compositions
- **Composition over Inheritance**: Components compose smaller components
- **Single Responsibility**: Each component has one clear purpose
- **Props-based Configuration**: Components configured via props, not internal state

### State Management
- **Server Components by Default**: Most components are React Server Components
- **Client Components for Interactivity**: "use client" directive for interactive components
- **Minimal Client-Side State**: State kept close to where it's used

### Styling Strategy
- **Tailwind CSS v4**: Utility-first CSS framework
- **CSS Variables**: Design tokens exposed as CSS custom properties
- **Component-Scoped Styles**: Inline styles for dynamic values
- **Responsive Design**: Mobile-first with breakpoint-based scaling

### Testing Strategy
- **Property-Based Testing**: Universal correctness properties (fast-check)
- **Unit Testing**: Specific examples and edge cases (Jest + React Testing Library)
- **Test Co-location**: Tests live in `__tests__` directories near components
- **Coverage Tracking**: Jest coverage reports in `/coverage`

### Data Flow
- **Static Data**: Product and project data in `/lib` files
- **Type Safety**: TypeScript interfaces for all data structures
- **Props Drilling**: Data passed explicitly through component props
- **No Global State**: No Redux, Context, or other global state management

### Build and Deployment
- **Static Site Generation**: `output: "export"` in next.config.ts
- **Image Optimization**: Unoptimized for static export, multiple quality levels
- **Trailing Slashes**: Enabled for static hosting compatibility
- **Remote Image Patterns**: Configured for external image sources
