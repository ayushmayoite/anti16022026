/**
 * Centralized Design System Constants
 * ====================================
 * Single source of truth for all design tokens.
 * Import from here instead of hardcoding values in components.
 *
 * Font: Plus Jakarta Sans (set in app/layout.tsx via --font-sans)
 * Aesthetic: KI.com-inspired — minimal, premium, high-contrast
 */

// ─── Colors ────────────────────────────────────────────────────
export const colors = {
  accent: "red-600",
  accentHover: "red-700",
  accentLight: "red-500",
  accentOnDark: "red-500",
  accentOnDarkHover: "red-400",

  textPrimary: "neutral-900",
  textSecondary: "neutral-700",
  textMuted: "neutral-500",
  textSubtle: "neutral-400",

  bgLight: "white",
  bgLightAlt: "neutral-50",
  bgDark: "neutral-900",
  bgDarker: "neutral-950",

  border: "neutral-100",
  borderDark: "neutral-800",
} as const;

// ─── Typography ────────────────────────────────────────────────
export const typography = {
  /** Section labels — tiny uppercase */
  label: "text-[11px] font-semibold uppercase tracking-[0.25em]",

  /** Large section headings */
  sectionHeading: "text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]",

  /** Medium section headings */
  sectionHeadingSm: "text-3xl md:text-4xl font-bold tracking-tight leading-[1.15]",

  /** Card/item titles */
  cardTitle: "text-lg font-semibold",

  /** Body/descriptions */
  body: "text-sm leading-relaxed",

  /** Nav links */
  nav: "text-[14px] font-normal",

  /** CTA buttons */
  cta: "text-[13px] font-semibold",
} as const;

// ─── Spacing ───────────────────────────────────────────────────
export const spacing = {
  /** Standard section padding */
  section: "py-20 md:py-32",
  /** Compact section padding */
  sectionCompact: "py-16 md:py-20",
  /** Container padding */
  container: "container mx-auto px-6 lg:px-12",
  /** Space between section header and content */
  headerGap: "mb-16",
} as const;

// ─── Section Label + Heading combo ─────────────────────────────
// Usage: <p className={sectionLabel}>Label</p>
//        <h2 className={sectionHeading}>Title</h2>
export const sectionLabel = `${typography.label} text-${colors.textSubtle} mb-3`;
export const sectionHeading = `${typography.sectionHeading} text-${colors.textPrimary}`;
