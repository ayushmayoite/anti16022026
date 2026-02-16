# Design Document: Classy Website Redesign

## Overview

This design enhances the One and Only Furniture website to achieve a premium, sophisticated aesthetic through refined typography, color palette, spacing, micro-interactions, and component styling. The implementation focuses on CSS and styling improvements using Tailwind CSS v4, custom CSS variables, and Framer Motion animations.

The design maintains the existing Next.js architecture and component structure while elevating the visual polish through systematic improvements to the design system. All changes are CSS-focused and do not require architectural modifications.

## Architecture

### Technology Stack
- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables
- **Animations**: Framer Motion 12.29.2
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)

### Design System Approach

The design system will be implemented through:
1. **CSS Variables** in `globals.css` for colors, spacing, typography scales
2. **Tailwind Configuration** for custom utilities and design tokens
3. **Component-Level Styles** using Tailwind classes with consistent patterns
4. **Animation Utilities** using Framer Motion and CSS transitions

### File Structure
```
app/
  globals.css          # Enhanced design system variables
components/
  home/               # Homepage sections with refined styling
  layout/             # Navigation and footer with polished interactions
  products/           # Product showcase with premium styling
  ui/                 # Reusable UI components with consistent styling
```

## Components and Interfaces

### 1. Design System (globals.css)

**Enhanced Typography Scale**
```typescript
// CSS Variables for Typography
--font-size-xs: 0.75rem;      // 12px
--font-size-sm: 0.875rem;     // 14px
--font-size-base: 1rem;       // 16px
--font-size-lg: 1.125rem;     // 18px
--font-size-xl: 1.25rem;      // 20px
--font-size-2xl: 1.5rem;      // 24px
--font-size-3xl: 1.875rem;    // 30px
--font-size-4xl: 2.25rem;     // 36px
--font-size-5xl: 3rem;        // 48px
--font-size-6xl: 3.75rem;     // 60px

// Line Heights
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;

// Letter Spacing
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

**Refined Color Palette**
```typescript
// Neutral Palette with Subtle Variations
--neutral-50: #fafafa;
--neutral-100: #f4f4f5;
--neutral-200: #e4e4e7;
--neutral-300: #d4d4d8;
--neutral-400: #a1a1aa;
--neutral-500: #71717a;
--neutral-600: #52525b;
--neutral-700: #3f3f46;
--neutral-800: #27272a;
--neutral-900: #18181b;
--neutral-950: #09090b;

// Text Opacity Levels
--text-primary: rgba(10, 10, 10, 1);      // 100%
--text-secondary: rgba(10, 10, 10, 0.7);  // 70%
--text-muted: rgba(10, 10, 10, 0.5);      // 50%
--text-disabled: rgba(10, 10, 10, 0.3);   // 30%
```

**Spacing Scale (8px base)**
```typescript
--spacing-0: 0;
--spacing-1: 0.25rem;   // 4px
--spacing-2: 0.5rem;    // 8px
--spacing-3: 0.75rem;   // 12px
--spacing-4: 1rem;      // 16px
--spacing-5: 1.25rem;   // 20px
--spacing-6: 1.5rem;    // 24px
--spacing-8: 2rem;      // 32px
--spacing-10: 2.5rem;   // 40px
--spacing-12: 3rem;     // 48px
--spacing-16: 4rem;     // 64px
--spacing-20: 5rem;     // 80px
--spacing-24: 6rem;     // 96px
--spacing-32: 8rem;     // 128px
```

**Animation Timing**
```typescript
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;

--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 2. Typography Component Patterns

**Heading Styles**
```typescript
interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

// Base classes for each heading level
h1: "font-serif text-5xl md:text-6xl font-normal tracking-tighter leading-tight"
h2: "font-serif text-4xl md:text-5xl font-normal tracking-tight leading-tight"
h3: "font-serif text-3xl md:text-4xl font-normal tracking-tight leading-snug"
h4: "font-sans text-2xl md:text-3xl font-medium tracking-tight leading-snug"
h5: "font-sans text-xl md:text-2xl font-medium tracking-normal leading-snug"
h6: "font-sans text-lg md:text-xl font-semibold tracking-normal leading-normal"
```

**Body Text Styles**
```typescript
// Body text variants
body-large: "text-lg leading-relaxed tracking-normal"
body-base: "text-base leading-normal tracking-normal"
body-small: "text-sm leading-normal tracking-wide"
body-xs: "text-xs leading-normal tracking-wider"

// Text color variants
text-primary: "text-foreground"
text-secondary: "text-foreground/70"
text-muted: "text-muted-foreground"
```

### 3. Interactive Element Patterns

**Button Styles**
```typescript
interface ButtonVariants {
  primary: string;
  secondary: string;
  ghost: string;
  link: string;
}

const buttonBase = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-250 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const buttonVariants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98]",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline"
};

const buttonSizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 py-2",
  lg: "h-11 px-8 text-lg",
  xl: "h-12 px-10 text-xl"
};
```

**Link Styles**
```typescript
const linkVariants = {
  default: "text-foreground hover:text-foreground/70 transition-colors duration-250",
  underline: "underline-offset-4 hover:underline transition-all duration-250",
  subtle: "text-muted-foreground hover:text-foreground transition-colors duration-250"
};
```

### 4. Card and Container Patterns

**Card Component**
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered';
  children: React.ReactNode;
  className?: string;
}

const cardVariants = {
  default: "bg-card text-card-foreground rounded-lg",
  elevated: "bg-card text-card-foreground rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300",
  bordered: "bg-card text-card-foreground rounded-lg border border-border"
};

const cardPadding = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10"
};
```

### 5. Navigation Component

**Enhanced Navbar**
```typescript
interface NavbarProps {
  transparent?: boolean;
}

// Navbar with backdrop blur and smooth transitions
const navbarStyles = {
  base: "fixed top-0 w-full z-50 transition-all duration-300",
  scrolled: "bg-background/80 backdrop-blur-md shadow-sm",
  transparent: "bg-transparent"
};

// Navigation link styles
const navLinkStyles = "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-250 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full";
```

### 6. Animation Patterns

**Scroll-Triggered Animations**
```typescript
import { motion } from 'framer-motion';

// Fade in from bottom
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

// Fade in with scale
const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
};

// Stagger children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

**Hover Animations**
```typescript
// Scale on hover
const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
};

// Lift on hover (for cards)
const liftOnHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } }
};
```

### 7. Product Showcase Component

**Enhanced Product Card**
```typescript
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
}

// Product card with refined styling
const productCardStyles = {
  container: "group relative overflow-hidden rounded-lg bg-card border border-border hover:border-border/50 transition-all duration-300",
  image: "aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105",
  content: "p-6 space-y-2",
  title: "font-serif text-2xl font-normal tracking-tight",
  description: "text-sm text-muted-foreground leading-relaxed"
};
```

**Horizontal Scroll Container**
```typescript
// Smooth horizontal scroll with momentum
const scrollContainerStyles = "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-4";
const scrollItemStyles = "flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] snap-start";
```

### 8. Form Input Patterns

**Input Component**
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const inputStyles = {
  base: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm transition-all duration-250",
  focus: "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  error: "border-destructive focus-visible:ring-destructive",
  disabled: "cursor-not-allowed opacity-50"
};
```

## Data Models

This redesign focuses on styling and does not introduce new data models. Existing data structures remain unchanged.

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Typography Properties

Property 1: Typography Scale Consistency
*For any* two consecutive font sizes in the typography scale, the ratio between them should remain constant across all breakpoints.
**Validates: Requirements 1.1**

Property 2: Letter Spacing Differentiation
*For any* heading element and body text element, the heading should have different letter-spacing than body text to enhance readability.
**Validates: Requirements 1.2**

Property 3: Line Height Readability
*For any* text element on the website, its line-height should be between 1.25 and 2 to ensure comfortable reading.
**Validates: Requirements 1.3**

Property 4: Serif Heading Font Weights
*For any* heading element using a serif font, it should have a font-weight of 400 or 500 to ensure proper visual hierarchy.
**Validates: Requirements 1.4**

Property 5: Text Color Opacity Consistency
*For any* text element classified as primary, secondary, or muted, all elements of the same classification should use the same opacity level throughout the website.
**Validates: Requirements 1.5**

### Color and Contrast Properties

Property 6: Neutral Color Palette Adherence
*For any* color used as a background or text color on the website, it should be from the defined neutral color palette (neutral-50 through neutral-950).
**Validates: Requirements 2.1**

Property 7: WCAG AA Contrast Compliance
*For any* text element with a background color, the contrast ratio between text and background should meet or exceed WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
**Validates: Requirements 2.2**

Property 8: Accent Color Sparsity
*For any* page on the website, the number of elements using accent colors should be less than 10% of the total interactive elements.
**Validates: Requirements 2.3**

Property 9: Hover State Transitions
*For any* interactive element with a hover state, the color transition should have a duration between 150ms and 350ms with a smooth easing function.
**Validates: Requirements 2.4**

Property 10: Consistent Color Usage
*For any* semantic color (e.g., primary, secondary, success, error), all instances of that semantic color should render the same actual color value across all components.
**Validates: Requirements 2.5**

### Spacing and Layout Properties

Property 11: Spacing Scale Consistency
*For any* spacing value used in padding, margin, or gap, it should be a multiple of the 8px base unit (4px, 8px, 12px, 16px, etc.).
**Validates: Requirements 3.1**

Property 12: Section Vertical Padding
*For any* section element on the page, its vertical padding should be at least 48px (6 spacing units) to create generous breathing room.
**Validates: Requirements 3.2**

Property 13: Horizontal Spacing Consistency
*For any* breakpoint, the horizontal margins and padding of content containers should scale proportionally while maintaining the same visual rhythm.
**Validates: Requirements 3.3**

Property 14: Container Max Width Readability
*For any* content container, its max-width should be between 640px and 1280px to ensure optimal readability.
**Validates: Requirements 3.4**

Property 15: Element Alignment and Spacing
*For any* group of related elements, the spacing between them should be consistent and equal to one of the defined spacing scale values.
**Validates: Requirements 3.5**

### Micro-Interaction Properties

Property 16: Hover Transition Smoothness
*For any* interactive element with a hover state, it should have a CSS transition property with a duration between 150ms and 350ms.
**Validates: Requirements 4.1**

Property 17: Hover Transform Subtlety
*For any* hover transform applied to an interactive element, the scale should be between 1.0 and 1.05, and opacity changes should be between 0.8 and 1.0.
**Validates: Requirements 4.2**

Property 18: Scroll Animation Application
*For any* element that enters the viewport during scroll, it should have an animation property (fade-in, slide-in, or similar) defined.
**Validates: Requirements 4.3**

Property 19: Prefers Reduced Motion Respect
*For any* animation on the website, when the user's prefers-reduced-motion preference is set, the animation duration should be reduced to 0ms or the animation should be disabled.
**Validates: Requirements 4.4**

Property 20: Premium Easing Functions
*For any* transition or animation on the website, the easing function should be one of: ease-out, cubic-bezier(0.16, 1, 0.3, 1), or cubic-bezier(0.34, 1.56, 0.64, 1).
**Validates: Requirements 4.5**

### Component Styling Properties

Property 21: Border Radius Consistency
*For any* component with rounded corners, its border-radius should be one of the defined values: 4px, 6px, 8px, or 12px.
**Validates: Requirements 5.1**

Property 22: Card Depth Styling
*For any* card or container component, it should have either a box-shadow property or a border property (or both) to create visual depth.
**Validates: Requirements 5.2**

Property 23: Button Padding and Sizing
*For any* button element, its padding should be one of the defined sizes (sm: 0.75rem, md: 1rem, lg: 2rem, xl: 2.5rem) and height should be proportional to its size variant.
**Validates: Requirements 5.3**

Property 24: Form Input Styling
*For any* form input element, it should have a border property and a focus-visible state with a ring property for keyboard navigation.
**Validates: Requirements 5.4**

Property 25: Component Styling Consistency
*For any* component type (e.g., all buttons, all cards), all instances of that component should use the same base styling classes.
**Validates: Requirements 5.5**

### Visual Hierarchy Properties

Property 26: Hierarchy Through Multiple Dimensions
*For any* heading element compared to body text, the heading should differ in at least two of: size, weight, or color.
**Validates: Requirements 6.1**

Property 27: Heading Visual Distinction
*For any* heading element, its font-size should be larger than the body text font-size, and its font-weight should be different from body text.
**Validates: Requirements 6.2**

Property 28: Heading Level Size Progression
*For any* two consecutive heading levels (h1 vs h2, h2 vs h3, etc.), the higher-level heading should have a larger font-size.
**Validates: Requirements 6.3**

Property 29: CTA Visual Prominence
*For any* call-to-action element, it should have distinct styling through size, color, or position that makes it visually prominent compared to surrounding content.
**Validates: Requirements 6.4**

Property 30: Secondary Content De-emphasis
*For any* secondary content element, it should have reduced visual weight through smaller font-size or reduced opacity compared to primary content.
**Validates: Requirements 6.5**

### Navigation Properties

Property 31: Navbar Depth Styling
*For any* navigation bar element, it should have either a backdrop-blur property or a box-shadow property to create visual depth.
**Validates: Requirements 7.1**

Property 32: Navigation Link Hover States
*For any* navigation link, it should have a hover state with a smooth transition (150ms-350ms) that changes color or applies an underline.
**Validates: Requirements 7.2**

Property 33: Smooth Scroll Behavior
*For any* anchor link on the website, the scroll-behavior CSS property should be set to smooth.
**Validates: Requirements 7.3**

Property 34: Navigation Consistency Across Pages
*For any* page on the website, the navigation bar styling should be identical to the navigation bar on all other pages.
**Validates: Requirements 7.4**

Property 35: Mobile Menu Transitions
*For any* mobile menu element, opening and closing should have a smooth transition with a duration between 200ms and 400ms.
**Validates: Requirements 7.5**

### Product Showcase Properties

Property 36: Product Image Aspect Ratios
*For any* product image element, it should have an aspect-ratio property defined and an object-fit property set to cover or contain.
**Validates: Requirements 8.1**

Property 37: Product Card Hover Effects
*For any* product card element, hovering over it should trigger a subtle visual change (scale, shadow, or opacity) with a smooth transition.
**Validates: Requirements 8.2**

Property 38: Horizontal Scroll Smoothness
*For any* horizontal scroll container, it should have scroll-behavior set to smooth and snap-scroll properties for momentum scrolling.
**Validates: Requirements 8.3**

Property 39: Product Card Spacing Consistency
*For any* product card in a grid or scroll container, the gap between it and adjacent cards should be consistent and equal to one of the defined spacing values.
**Validates: Requirements 8.4**

Property 40: Product Information Typography
*For any* product information section, it should use refined typography (serif for titles, sans-serif for descriptions) and consistent spacing from the design system.
**Validates: Requirements 8.5**

### Section Transition Properties

Property 41: Section Background Transition Consistency
*For any* transition between sections with different background colors, the transition should use the same timing and easing function.
**Validates: Requirements 9.1**

Property 42: Smooth Background Transitions
*For any* section with a different background color than the previous section, the transition should have a CSS transition property with smooth easing.
**Validates: Requirements 9.2**

Property 43: Section Separation Padding
*For any* section element, the padding between it and the next section should be at least 32px (4 spacing units) for visual separation.
**Validates: Requirements 9.3**

Property 44: Scroll Animation Smoothness
*For any* scroll-triggered animation, it should use an easing function that feels natural (ease-out or cubic-bezier) with a duration between 300ms and 600ms.
**Validates: Requirements 9.4**

Property 45: Section Styling Pattern Consistency
*For any* section on the page, its styling pattern (padding, background, typography) should match the styling pattern of other sections of the same type.
**Validates: Requirements 9.5**

### Interactive Element Properties

Property 46: Button Click Feedback
*For any* button element, clicking it should trigger an immediate visual change (scale, opacity, or color) with a duration of 100ms or less.
**Validates: Requirements 10.1**

Property 47: Clickable Element Cursor Styles
*For any* clickable element (button, link, interactive component), the cursor CSS property should be set to pointer.
**Validates: Requirements 10.2**

Property 48: Link Hover Effects
*For any* link element, hovering over it should trigger a subtle visual change (underline, color transition, or opacity change) with a smooth transition.
**Validates: Requirements 10.3**

Property 49: Keyboard Navigation Focus States
*For any* interactive element, it should have a focus-visible state with a visible ring or outline for keyboard navigation accessibility.
**Validates: Requirements 10.4**

Property 50: Disabled Element Visual States
*For any* disabled interactive element, it should have reduced opacity (0.5 or less) or a distinct color to indicate its disabled state.
**Validates: Requirements 10.5**

## Error Handling

This redesign is purely CSS and styling-focused. Error handling is not applicable as there are no new functional components or data processing. Existing error handling in the Next.js application remains unchanged.

## Testing Strategy

### Unit Testing Approach

Unit tests will verify specific styling examples and edge cases:
- Typography scale values and ratios
- Color palette values and contrast ratios
- Spacing scale consistency
- Component styling variants
- Animation timing and easing values
- Responsive behavior at different breakpoints

### Property-Based Testing Approach

Property-based tests will verify universal styling properties across all components:
- Each correctness property (1-50) will have a corresponding property-based test
- Tests will use a CSS parsing library to extract computed styles from rendered components
- Tests will generate random component configurations and verify properties hold
- Minimum 100 iterations per property test to ensure comprehensive coverage

### Testing Library and Configuration

- **Unit Testing**: Vitest with React Testing Library for component rendering
- **Property-Based Testing**: fast-check for generating test data and property verification
- **CSS Parsing**: PostCSS or similar for extracting and validating CSS properties
- **Accessibility Testing**: axe-core for WCAG compliance verification

### Test Organization

- Property tests will be co-located with component implementations
- Each property test will be tagged with: `Feature: classy-website-redesign, Property {number}: {property_text}`
- Tests will run with `--run` flag for CI/CD integration
- Minimum 100 iterations configured for each property test

### Coverage Goals

- All 50 correctness properties covered by property-based tests
- All component variants covered by unit tests
- All responsive breakpoints tested
- WCAG AA accessibility compliance verified

