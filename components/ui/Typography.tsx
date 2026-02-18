import React from 'react';

/**
 * Typography Component
 * 
 * Provides reusable typography components with consistent styling
 * based on the design system defined in globals.css
 * 
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5
 */

// ============================================
// HEADING COMPONENTS
// ============================================

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * H1 - Primary heading (serif, largest)
 * Font: Playfair Display (serif)
 * Size: 3rem (48px) mobile, 3.75rem (60px) desktop
 * Weight: 400 (normal)
 * Letter-spacing: -0.05em (tighter)
 * Line-height: 1.25 (tight)
 */
export const H1: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h1 className={`tracking-tighter leading-tight ${className}`} {...props}>
    {children}
  </h1>
);

/**
 * H2 - Secondary heading (serif)
 * Font: Playfair Display (serif)
 * Size: 2.25rem (36px) mobile, 3rem (48px) desktop
 * Weight: 400 (normal)
 * Letter-spacing: -0.025em (tight)
 * Line-height: 1.25 (tight)
 */
export const H2: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h2 className={`tracking-tight leading-tight ${className}`} {...props}>
    {children}
  </h2>
);

/**
 * H3 - Tertiary heading (serif)
 * Font: Playfair Display (serif)
 * Size: 1.875rem (30px) mobile, 2.25rem (36px) desktop
 * Weight: 400 (normal)
 * Letter-spacing: -0.025em (tight)
 * Line-height: 1.375 (snug)
 */
export const H3: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h3 className={`tracking-tight leading-snug ${className}`} {...props}>
    {children}
  </h3>
);

/**
 * H4 - Quaternary heading (sans-serif)
 * Font: Inter (sans-serif)
 * Size: 1.5rem (24px) mobile, 1.875rem (30px) desktop
 * Weight: 500 (medium)
 * Letter-spacing: -0.025em (tight)
 * Line-height: 1.375 (snug)
 */
export const H4: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h4 className={`tracking-tight leading-snug ${className}`} {...props}>
    {children}
  </h4>
);

/**
 * H5 - Quinary heading (sans-serif)
 * Font: Inter (sans-serif)
 * Size: 1.25rem (20px) mobile, 1.5rem (24px) desktop
 * Weight: 500 (medium)
 * Letter-spacing: 0 (normal)
 * Line-height: 1.375 (snug)
 */
export const H5: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h5 className={`tracking-normal leading-snug ${className}`} {...props}>
    {children}
  </h5>
);

/**
 * H6 - Senary heading (sans-serif)
 * Font: Inter (sans-serif)
 * Size: 1.125rem (18px) mobile, 1.25rem (20px) desktop
 * Weight: 600 (semibold)
 * Letter-spacing: 0 (normal)
 * Line-height: 1.5 (normal)
 */
export const H6: React.FC<HeadingProps> = ({ children, className = '', ...props }) => (
  <h6 className={`tracking-normal leading-normal ${className}`} {...props}>
    {children}
  </h6>
);

// ============================================
// BODY TEXT COMPONENTS
// ============================================

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Body Large - Large body text
 * Font: Inter (sans-serif)
 * Size: 1.125rem (18px)
 * Weight: 400 (normal)
 * Letter-spacing: 0 (normal)
 * Line-height: 1.625 (relaxed)
 */
export const BodyLarge: React.FC<TextProps> = ({ children, className = '', ...props }) => (
  <p className={`text-lg leading-relaxed tracking-normal ${className}`} {...props}>
    {children}
  </p>
);

/**
 * Body Base - Standard body text
 * Font: Inter (sans-serif)
 * Size: 1rem (16px)
 * Weight: 400 (normal)
 * Letter-spacing: 0 (normal)
 * Line-height: 1.5 (normal)
 */
export const BodyBase: React.FC<TextProps> = ({ children, className = '', ...props }) => (
  <p className={`text-base leading-normal tracking-normal ${className}`} {...props}>
    {children}
  </p>
);

/**
 * Body Small - Small body text
 * Font: Inter (sans-serif)
 * Size: 0.875rem (14px)
 * Weight: 400 (normal)
 * Letter-spacing: 0.025em (wide)
 * Line-height: 1.5 (normal)
 */
export const BodySmall: React.FC<TextProps> = ({ children, className = '', ...props }) => (
  <p className={`text-sm leading-normal tracking-wide ${className}`} {...props}>
    {children}
  </p>
);

/**
 * Body XS - Extra small body text
 * Font: Inter (sans-serif)
 * Size: 0.75rem (12px)
 * Weight: 400 (normal)
 * Letter-spacing: 0.05em (wider)
 * Line-height: 1.5 (normal)
 */
export const BodyXS: React.FC<TextProps> = ({ children, className = '', ...props }) => (
  <p className={`text-xs leading-normal tracking-wider ${className}`} {...props}>
    {children}
  </p>
);

// ============================================
// TEXT COLOR VARIANTS
// ============================================

interface ColoredTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Primary Text - Full opacity text (100%)
 * Color: rgba(10, 10, 10, 1)
 */
export const TextPrimary: React.FC<ColoredTextProps> = ({ children, className = '', ...props }) => (
  <span className={`text-primary ${className}`} {...props}>
    {children}
  </span>
);

/**
 * Secondary Text - 70% opacity text
 * Color: rgba(10, 10, 10, 0.7)
 */
export const TextSecondary: React.FC<ColoredTextProps> = ({ children, className = '', ...props }) => (
  <span className={`text-secondary ${className}`} {...props}>
    {children}
  </span>
);

/**
 * Muted Text - 50% opacity text
 * Color: rgba(10, 10, 10, 0.5)
 */
export const TextMuted: React.FC<ColoredTextProps> = ({ children, className = '', ...props }) => (
  <span className={`text-muted ${className}`} {...props}>
    {children}
  </span>
);

/**
 * Disabled Text - 30% opacity text
 * Color: rgba(10, 10, 10, 0.3)
 */
export const TextDisabled: React.FC<ColoredTextProps> = ({ children, className = '', ...props }) => (
  <span className={`text-disabled ${className}`} {...props}>
    {children}
  </span>
);

// ============================================
// GENERIC HEADING COMPONENT
// ============================================

interface GenericHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

/**
 * Generic Heading Component
 * Renders the appropriate heading level based on the 'level' prop
 * Useful for dynamic heading levels
 */
export const Heading: React.FC<GenericHeadingProps> = ({ level, children, className = '', ...props }) => {
  const headingMap = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
  };

  const HeadingComponent = headingMap[level];
  return <HeadingComponent className={className} {...props}>{children}</HeadingComponent>;
};
