# Typography System Guide

## Overview

The typography system provides a comprehensive set of reusable components for consistent text styling across the One and Only Furniture website. All components are built on the design system defined in `globals.css` and use Tailwind CSS classes for styling.

**Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5**

## Typography Scale

The typography system uses a modular scale with consistent ratios across all breakpoints:

| Size | Mobile | Desktop | Usage |
|------|--------|---------|-------|
| xs | 0.75rem (12px) | 0.75rem (12px) | Extra small text, captions |
| sm | 0.875rem (14px) | 0.875rem (14px) | Small text, labels |
| base | 1rem (16px) | 1rem (16px) | Body text, default |
| lg | 1.125rem (18px) | 1.125rem (18px) | Large body text |
| xl | 1.25rem (20px) | 1.25rem (20px) | Extra large text |
| 2xl | 1.5rem (24px) | 1.5rem (24px) | H6 heading |
| 3xl | 1.875rem (30px) | 1.875rem (30px) | H5 heading |
| 4xl | 2.25rem (36px) | 2.25rem (36px) | H4 heading |
| 5xl | 3rem (48px) | 3.75rem (60px) | H2 heading |
| 6xl | 3.75rem (60px) | 3.75rem (60px) | H1 heading |

## Heading Components

### H1 - Primary Heading

**Font:** Playfair Display (serif)  
**Size:** 3rem (48px) mobile, 3.75rem (60px) desktop  
**Weight:** 400 (normal)  
**Letter-spacing:** -0.05em (tighter)  
**Line-height:** 1.25 (tight)

```tsx
import { H1 } from '@/components/ui/Typography';

export default function Page() {
  return <H1>Welcome to Our Store</H1>;
}
```

### H2 - Secondary Heading

**Font:** Playfair Display (serif)  
**Size:** 2.25rem (36px) mobile, 3rem (48px) desktop  
**Weight:** 400 (normal)  
**Letter-spacing:** -0.025em (tight)  
**Line-height:** 1.25 (tight)

```tsx
import { H2 } from '@/components/ui/Typography';

export default function Section() {
  return <H2>Featured Products</H2>;
}
```

### H3 - Tertiary Heading

**Font:** Playfair Display (serif)  
**Size:** 1.875rem (30px) mobile, 2.25rem (36px) desktop  
**Weight:** 400 (normal)  
**Letter-spacing:** -0.025em (tight)  
**Line-height:** 1.375 (snug)

```tsx
import { H3 } from '@/components/ui/Typography';

export default function Subsection() {
  return <H3>Product Details</H3>;
}
```

### H4 - Quaternary Heading

**Font:** Inter (sans-serif)  
**Size:** 1.5rem (24px) mobile, 1.875rem (30px) desktop  
**Weight:** 500 (medium)  
**Letter-spacing:** -0.025em (tight)  
**Line-height:** 1.375 (snug)

```tsx
import { H4 } from '@/components/ui/Typography';

export default function Card() {
  return <H4>Card Title</H4>;
}
```

### H5 - Quinary Heading

**Font:** Inter (sans-serif)  
**Size:** 1.25rem (20px) mobile, 1.5rem (24px) desktop  
**Weight:** 500 (medium)  
**Letter-spacing:** 0 (normal)  
**Line-height:** 1.375 (snug)

```tsx
import { H5 } from '@/components/ui/Typography';

export default function Subheading() {
  return <H5>Subheading</H5>;
}
```

### H6 - Senary Heading

**Font:** Inter (sans-serif)  
**Size:** 1.125rem (18px) mobile, 1.25rem (20px) desktop  
**Weight:** 600 (semibold)  
**Letter-spacing:** 0 (normal)  
**Line-height:** 1.5 (normal)

```tsx
import { H6 } from '@/components/ui/Typography';

export default function Label() {
  return <H6>Label</H6>;
}
```

## Body Text Components

### BodyLarge - Large Body Text

**Font:** Inter (sans-serif)  
**Size:** 1.125rem (18px)  
**Weight:** 400 (normal)  
**Letter-spacing:** 0 (normal)  
**Line-height:** 1.625 (relaxed)

```tsx
import { BodyLarge } from '@/components/ui/Typography';

export default function Intro() {
  return <BodyLarge>This is an introductory paragraph with larger text.</BodyLarge>;
}
```

### BodyBase - Standard Body Text

**Font:** Inter (sans-serif)  
**Size:** 1rem (16px)  
**Weight:** 400 (normal)  
**Letter-spacing:** 0 (normal)  
**Line-height:** 1.5 (normal)

```tsx
import { BodyBase } from '@/components/ui/Typography';

export default function Paragraph() {
  return <BodyBase>This is standard body text for regular content.</BodyBase>;
}
```

### BodySmall - Small Body Text

**Font:** Inter (sans-serif)  
**Size:** 0.875rem (14px)  
**Weight:** 400 (normal)  
**Letter-spacing:** 0.025em (wide)  
**Line-height:** 1.5 (normal)

```tsx
import { BodySmall } from '@/components/ui/Typography';

export default function Caption() {
  return <BodySmall>This is small text with wider letter-spacing.</BodySmall>;
}
```

### BodyXS - Extra Small Body Text

**Font:** Inter (sans-serif)  
**Size:** 0.75rem (12px)  
**Weight:** 400 (normal)  
**Letter-spacing:** 0.05em (wider)  
**Line-height:** 1.5 (normal)

```tsx
import { BodyXS } from '@/components/ui/Typography';

export default function Footnote() {
  return <BodyXS>This is extra small text for footnotes or captions.</BodyXS>;
}
```

## Text Color Variants

### TextPrimary - Full Opacity Text

**Color:** rgba(10, 10, 10, 1) - 100% opacity

```tsx
import { TextPrimary } from '@/components/ui/Typography';

export default function PrimaryText() {
  return <TextPrimary>This is primary text with full opacity.</TextPrimary>;
}
```

### TextSecondary - 70% Opacity Text

**Color:** rgba(10, 10, 10, 0.7) - 70% opacity

```tsx
import { TextSecondary } from '@/components/ui/Typography';

export default function SecondaryText() {
  return <TextSecondary>This is secondary text with reduced opacity.</TextSecondary>;
}
```

### TextMuted - 50% Opacity Text

**Color:** rgba(10, 10, 10, 0.5) - 50% opacity

```tsx
import { TextMuted } from '@/components/ui/Typography';

export default function MutedText() {
  return <TextMuted>This is muted text for less important information.</TextMuted>;
}
```

### TextDisabled - 30% Opacity Text

**Color:** rgba(10, 10, 10, 0.3) - 30% opacity

```tsx
import { TextDisabled } from '@/components/ui/Typography';

export default function DisabledText() {
  return <TextDisabled>This is disabled text.</TextDisabled>;
}
```

## Generic Heading Component

For dynamic heading levels, use the `Heading` component with the `level` prop:

```tsx
import { Heading } from '@/components/ui/Typography';

interface DynamicHeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
}

export default function DynamicHeading({ level, text }: DynamicHeadingProps) {
  return <Heading level={level}>{text}</Heading>;
}
```

## Custom Styling

All typography components accept a `className` prop for additional custom styling:

```tsx
import { H1 } from '@/components/ui/Typography';

export default function CustomHeading() {
  return (
    <H1 className="text-red-500 mb-4">
      Custom Styled Heading
    </H1>
  );
}
```

## Line Height Reference

| Class | Value | Usage |
|-------|-------|-------|
| leading-tight | 1.25 | Headings, compact text |
| leading-snug | 1.375 | Subheadings, medium density |
| leading-normal | 1.5 | Body text, standard |
| leading-relaxed | 1.625 | Large body text, comfortable reading |
| leading-loose | 2 | Special cases, maximum readability |

## Letter Spacing Reference

| Class | Value | Usage |
|-------|-------|-------|
| tracking-tighter | -0.05em | H1 headings, tight spacing |
| tracking-tight | -0.025em | H2-H3 headings, reduced spacing |
| tracking-normal | 0 | H4-H6 headings, body text |
| tracking-wide | 0.025em | Small body text, labels |
| tracking-wider | 0.05em | Extra small text, captions |
| tracking-widest | 0.1em | Special emphasis, all caps |

## Font Weight Reference

| Class | Value | Usage |
|-------|-------|-------|
| font-normal | 400 | Serif headings (H1-H3), body text |
| font-medium | 500 | Sans-serif headings (H4-H5) |
| font-semibold | 600 | H6 headings, emphasis |

## Best Practices

1. **Use semantic heading levels** - Always use H1 for main page title, H2 for sections, etc.
2. **Maintain hierarchy** - Don't skip heading levels (e.g., don't go from H1 to H3)
3. **Combine components** - Use body text components for paragraphs, not raw `<p>` tags
4. **Respect line height** - All components maintain optimal line-height for readability (1.25-2)
5. **Use color variants** - Use TextSecondary/TextMuted for less important information
6. **Responsive design** - Heading sizes automatically scale on mobile/desktop
7. **Custom styling** - Use the className prop for additional styling, don't override defaults

## Testing

The typography system includes comprehensive unit tests and property-based tests:

```bash
# Run unit tests
npm run test:run -- components/ui/Typography.test.tsx

# Run property-based tests
npm run test:run -- components/ui/Typography.pbt.test.tsx

# Run all tests
npm run test:run
```

## Accessibility

All typography components:
- Use semantic HTML elements (h1-h6, p, span)
- Maintain proper heading hierarchy
- Ensure sufficient contrast ratios (WCAG AA compliant)
- Support keyboard navigation
- Work with screen readers

## CSS Variables

The typography system uses CSS variables from `globals.css`:

```css
/* Font Sizes */
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.25rem;
--font-size-2xl: 1.5rem;
--font-size-3xl: 1.875rem;
--font-size-4xl: 2.25rem;
--font-size-5xl: 3rem;
--font-size-6xl: 3.75rem;

/* Line Heights */
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;

/* Letter Spacing */
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

## Fonts

The typography system uses two Google Fonts:

1. **Playfair Display** (serif) - For headings (H1-H3)
   - Elegant, sophisticated, premium feel
   - Used for main headings and visual hierarchy

2. **Inter** (sans-serif) - For body text and secondary headings (H4-H6)
   - Clean, modern, highly readable
   - Used for body text and supporting headings

Both fonts are loaded in `app/layout.tsx` with the `swap` display strategy for optimal performance.
