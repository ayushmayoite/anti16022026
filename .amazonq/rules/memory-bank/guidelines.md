# Development Guidelines

## Code Quality Standards

### TypeScript Usage
- **100% TypeScript**: All source files use TypeScript (.ts, .tsx)
- **Strict Mode Enabled**: TypeScript strict mode enforced in tsconfig.json
- **Explicit Types**: All function parameters and return types explicitly typed
- **Interface Definitions**: Complex objects defined with interfaces, exported for reusability
- **Type Imports**: Use `import type` for type-only imports (e.g., `import type { NextConfig } from "next"`)
- **No Any Types**: Avoid `any` type; use specific types or generics

Example from next.config.ts:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // ...
};
```

### File Organization
- **Co-located Tests**: Test files in `__tests__/` directories adjacent to source files
- **Barrel Exports**: Use index.ts files for clean exports (e.g., `lib/hooks/index.ts`)
- **Feature-Based Structure**: Components organized by feature (ui, layout, navigation, home)
- **Separation of Concerns**: Utilities, hooks, and components in separate directories

### Naming Conventions
- **PascalCase**: React components and TypeScript interfaces (e.g., `Button`, `HeadingProps`)
- **camelCase**: Functions, variables, and file utilities (e.g., `getFluidTypography`, `hexToRgb`)
- **kebab-case**: CSS classes and file names for non-components (e.g., `design-tokens.ts`)
- **SCREAMING_SNAKE_CASE**: Constants and environment variables
- **Descriptive Names**: Clear, self-documenting names (e.g., `applyButtonHover` not `btnHvr`)

### Code Formatting
- **Consistent Indentation**: 2 spaces (enforced by TypeScript/ESLint)
- **Semicolons**: Always use semicolons at statement ends
- **Quotes**: Double quotes for strings in TypeScript, single quotes in JSX attributes
- **Line Length**: Keep lines under 100 characters when practical
- **Trailing Commas**: Use trailing commas in multi-line objects and arrays

### Documentation Standards
- **JSDoc Comments**: All exported functions have JSDoc comments
- **Inline Comments**: Explain complex logic, not obvious code
- **README Files**: Feature directories include README.md for documentation
- **Type Documentation**: Complex types documented with comments

Example from hover-animations.ts:
```typescript
/**
 * Hover Animation Utilities
 * 
 * This module provides reusable hover animation utilities for interactive elements.
 * All animations respect user preferences for reduced motion.
 * 
 * Requirements:
 * - 7.1: Animation durations between 150ms and 400ms
 * - 7.2: Natural easing functions (ease-out for entrances, ease-in for exits)
 */
```

## Semantic Patterns

### Component Patterns

#### Props Interface Pattern
Every component exports its props interface:
```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary", ... }) => {
  // Implementation
};
```

**Frequency**: 100% of components (Button, Heading, Card, Input, etc.)

#### Design Token Consumption Pattern
Components consume design tokens from centralized system:
```typescript
import { designTokens } from "@/lib/design-tokens";

const styles: React.CSSProperties = {
  fontFamily: designTokens.typography.fonts.heading,
  fontSize: designTokens.typography.scale.lg,
  color: designTokens.colors.semantic.text.primary,
  padding: designTokens.spacing[2],
};
```

**Frequency**: 100% of styled components
**Benefit**: Ensures design consistency and single source of truth

#### Variant-Based Styling Pattern
Components use variant prop for style variations:
```typescript
const variantStyles = {
  primary: {
    background: designTokens.colors.semantic.interactive.primary,
    color: designTokens.colors.semantic.text.inverse,
  },
  secondary: {
    background: "transparent",
    color: designTokens.colors.semantic.interactive.secondary,
  },
};

const baseStyles = {
  ...commonStyles,
  ...variantStyles[variant],
};
```

**Frequency**: 90% of UI components (Button, Card, Text)

#### Inline Styles with TypeScript
Use React.CSSProperties for type-safe inline styles:
```typescript
const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: designTokens.animation.transitions.all,
};
```

**Frequency**: 80% of components
**Rationale**: Enables dynamic styles with design tokens while maintaining type safety

### Animation Patterns

#### Reduced Motion Respect Pattern
All animations check user preference:
```typescript
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof window.matchMedia === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function applyButtonHover(element: HTMLElement, variant: string): void {
  if (prefersReducedMotion()) return;
  // Apply animation
}
```

**Frequency**: 100% of animation functions
**Requirement**: Accessibility compliance (WCAG)

#### Hover Handler Pattern
Components use separate apply/reset handlers:
```typescript
const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (disabled) return;
  applyButtonHover(e.currentTarget, variant);
};

const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (disabled) return;
  resetButtonHover(e.currentTarget, variant);
};
```

**Frequency**: 100% of interactive components

### Utility Function Patterns

#### Pure Functions
Utility functions are pure with no side effects:
```typescript
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  hex = hex.replace(/^#/, '');
  // Pure transformation logic
  return { r, g, b };
}
```

**Frequency**: 100% of utility functions

#### Null Safety Pattern
Functions return null for invalid inputs:
```typescript
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  // Validation
  if (hex.length !== 6) {
    return null;
  }
  // Process
}
```

**Frequency**: 90% of parsing/transformation functions

#### Error Handling Pattern
Throw descriptive errors for invalid states:
```typescript
export function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) {
    throw new Error(`Invalid color format: ${color1} or ${color2}`);
  }
  // Calculate ratio
}
```

**Frequency**: 80% of functions with validation

### Configuration Patterns

#### Typed Configuration Objects
All configuration uses TypeScript interfaces:
```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
};

export default nextConfig;
```

**Frequency**: 100% of configuration files

#### Path Alias Usage
Use `@/` path alias for imports:
```typescript
import { designTokens } from "@/lib/design-tokens";
import { Button } from "@/components/ui/Button";
```

**Frequency**: 100% of internal imports
**Configuration**: `tsconfig.json` paths: `{ "@/*": ["./*"] }`

## Internal API Usage

### Design Token API

#### Accessing Color Tokens
```typescript
// Semantic colors (preferred)
designTokens.colors.semantic.text.primary
designTokens.colors.semantic.interactive.primary
designTokens.colors.semantic.background.elevated

// Primitive colors (for custom combinations)
designTokens.colors.primitives.neutral[700]
designTokens.colors.primitives.accent[500]
```

#### Accessing Typography Tokens
```typescript
// Font families
designTokens.typography.fonts.heading  // Playfair Display
designTokens.typography.fonts.body     // Inter

// Type scale
designTokens.typography.scale.base     // 16px
designTokens.typography.scale["2xl"]   // 31px

// Fluid typography (responsive)
import { getFluidTypography } from "@/lib/design-tokens";
const fontSize = getFluidTypography("xl");  // Returns clamp() formula
```

#### Accessing Spacing Tokens
```typescript
// Spacing scale (8px base)
designTokens.spacing[1]   // 8px
designTokens.spacing[2]   // 16px
designTokens.spacing[4]   // 32px

// Container widths
designTokens.containerWidths.default  // 1024px
designTokens.containerWidths.wide     // 1280px
```

#### Accessing Animation Tokens
```typescript
// Durations
designTokens.animation.durations.fast    // 150ms
designTokens.animation.durations.normal  // 250ms

// Transitions
designTokens.animation.transitions.all       // all 250ms ease-out
designTokens.animation.transitions.transform // transform 250ms ease-out
```

### Hover Animation API

#### Button Hover Animations
```typescript
import { applyButtonHover, resetButtonHover } from "@/lib/hover-animations";

const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
  applyButtonHover(e.currentTarget, "primary");
};

const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  resetButtonHover(e.currentTarget, "primary");
};
```

**Variants**: `"primary" | "secondary" | "tertiary" | "ghost"`

#### Card Hover Animations
```typescript
import { applyCardHover, resetCardHover } from "@/lib/hover-animations";

applyCardHover(element, "elevated");  // Lift with shadow
resetCardHover(element, "elevated");
```

**Variants**: `"elevated" | "outlined" | "flat"`

#### Generic Hover Effects
```typescript
import { 
  applyHoverLift, 
  resetHoverLift,
  applyScaleHover,
  resetScaleHover 
} from "@/lib/hover-animations";

// Lift effect
applyHoverLift(element, 2);  // Lift 2px
resetHoverLift(element);

// Scale effect
applyScaleHover(element, 1.05);  // Scale to 105%
resetScaleHover(element);
```

### Color Utility API

#### Contrast Ratio Calculation
```typescript
import { getContrastRatio, meetsWCAGAA } from "@/lib/color-utils";

const ratio = getContrastRatio("#1C1917", "#FFFFFF");  // Returns 15.8
const isAccessible = meetsWCAGAA("#1C1917", "#FFFFFF");  // Returns true
```

#### WCAG Compliance Checking
```typescript
import { meetsWCAGAA, meetsWCAGAAA } from "@/lib/color-utils";

// AA compliance (4.5:1 for normal text, 3:1 for large text)
meetsWCAGAA(textColor, bgColor, false);  // Normal text
meetsWCAGAA(textColor, bgColor, true);   // Large text

// AAA compliance (7:1 for normal text, 4.5:1 for large text)
meetsWCAGAAA(textColor, bgColor, false);
```

## Code Idioms

### Component Export Pattern
```typescript
// Named export for component
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // Implementation
};

// No default export for components
```

**Frequency**: 100% of components

### Destructuring Props Pattern
```typescript
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  style: customStyle,  // Rename to avoid conflict
  children,
  ...props  // Spread remaining HTML attributes
}) => {
  // Implementation
};
```

**Frequency**: 100% of components

### Style Composition Pattern
```typescript
const baseStyles: React.CSSProperties = {
  ...commonStyles,
  ...variantStyles[variant],
  ...sizeStyles[size],
  ...customStyle,  // User overrides last
};
```

**Frequency**: 90% of styled components

### Conditional Rendering Pattern
```typescript
// Early return for guards
if (disabled) return;

// Ternary for inline conditions
cursor: disabled ? "not-allowed" : "pointer"

// Logical AND for optional rendering
{showIcon && <Icon />}
```

### Server/Client Component Pattern
```typescript
// Server component (default)
export default function Page() {
  return <div>Server rendered</div>;
}

// Client component (explicit directive)
"use client";

export default function InteractivePage() {
  const [state, setState] = useState();
  return <div>Client rendered</div>;
}
```

**Rule**: Use "use client" only when needed (state, effects, browser APIs)

## Testing Patterns

### Property-Based Testing
```typescript
import fc from "fast-check";

describe("Design Token Property Tests", () => {
  it("should maintain spacing consistency", () => {
    fc.assert(
      fc.property(fc.constantFrom(...spacingKeys), (key) => {
        const value = parseFloat(spacing[key]);
        return value >= 0 && value % 4 === 0;  // 4px base unit
      }),
      { numRuns: 100 }
    );
  });
});
```

**Frequency**: All design system validation tests
**Library**: fast-check 4.5.3

### Component Unit Testing
```typescript
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
  it("renders with correct variant styles", () => {
    render(<Button variant="primary">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
```

**Frequency**: All UI components
**Library**: React Testing Library 16.3.2

### Test File Naming
- Property tests: `*.property.test.ts`
- Unit tests: `*.test.tsx` or `*.test.ts`
- Location: `__tests__/` directory adjacent to source

## Popular Annotations

### JSDoc Annotations
```typescript
/**
 * Calculate contrast ratio between two colors
 * Based on WCAG 2.0 formula
 * 
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns Contrast ratio (1-21)
 * @throws {Error} If color format is invalid
 */
export function getContrastRatio(color1: string, color2: string): number {
  // Implementation
}
```

### TypeScript Annotations
```typescript
// Type assertion
const element = e.currentTarget as HTMLButtonElement;

// Non-null assertion (use sparingly)
const value = maybeValue!;

// Const assertion for literal types
const config = {
  mode: "production"
} as const;
```

### React Annotations
```typescript
// Props with children
children: React.ReactNode;

// Event handlers
onClick?: React.MouseEventHandler<HTMLButtonElement>;

// Refs
ref?: React.Ref<HTMLDivElement>;

// Component type
const Button: React.FC<ButtonProps> = ({ ... }) => { ... };
```

## Best Practices Summary

### Design System
1. **Always use design tokens** - Never hardcode colors, spacing, or typography
2. **Semantic over primitive** - Use semantic color tokens (text.primary) over primitives (neutral[800])
3. **Fluid typography** - Use getFluidTypography() for responsive text scaling
4. **Consistent spacing** - Use 8px base unit (spacing scale)

### Components
1. **Export props interfaces** - Every component exports its props type
2. **Composition over complexity** - Build complex components from simple primitives
3. **Inline styles for dynamic values** - Use inline styles when consuming design tokens
4. **Spread HTML attributes** - Use `...props` to pass through native HTML attributes

### Accessibility
1. **Respect reduced motion** - Check prefersReducedMotion() before animations
2. **WCAG AA minimum** - Ensure 4.5:1 contrast for normal text, 3:1 for large text
3. **Touch targets** - Minimum 44px height for interactive elements
4. **Semantic HTML** - Use proper heading hierarchy, button elements, etc.

### Testing
1. **Property tests for invariants** - Use fast-check for universal properties
2. **Unit tests for specifics** - Use Jest/RTL for specific behaviors
3. **Co-locate tests** - Keep tests near source in `__tests__/` directories
4. **Test user behavior** - Test what users see and do, not implementation details

### Performance
1. **Server components by default** - Only use "use client" when necessary
2. **Static generation** - Project uses static export for optimal performance
3. **Image optimization** - Use ResponsiveImage component for optimized images
4. **Code splitting** - Leverage Next.js automatic code splitting

### Code Organization
1. **Feature-based structure** - Group by feature (ui, layout, home) not type
2. **Path aliases** - Use `@/` for all internal imports
3. **Barrel exports** - Use index.ts for clean public APIs
4. **Separation of concerns** - Keep utilities, hooks, and components separate
