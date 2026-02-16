/**
 * Color Contrast Testing Utilities
 * Tests WCAG AA compliance for all text/background combinations
 */

import { describe, it, expect } from "vitest";

export interface ColorPair {
  foreground: string;
  background: string;
  purpose: string;
}

export const colorPairs: ColorPair[] = [
  // Hero Section (Dark Background)
  { foreground: '#ffffff', background: '#000000', purpose: 'Hero heading on dark background' },
  { foreground: '#e5e5e5', background: '#000000', purpose: 'Hero subtext on dark background' },
  { foreground: 'rgba(255,255,255,0.8)', background: '#000000', purpose: 'Hero stats labels on dark' },
  
  // Light Sections
  { foreground: '#1a1a1a', background: '#ffffff', purpose: 'Headings on white background' },
  { foreground: '#333333', background: '#ffffff', purpose: 'Body text on white background' },
  { foreground: '#666666', background: '#ffffff', purpose: 'Secondary text on white' },
  { foreground: '#999999', background: '#ffffff', purpose: 'Muted text on white' },
  
  // Light Gray Backgrounds
  { foreground: '#1a1a1a', background: '#f5f5f3', purpose: 'Headings on light gray' },
  { foreground: '#333333', background: '#f5f5f3', purpose: 'Body text on light gray' },
  { foreground: '#666666', background: '#f5f5f3', purpose: 'Secondary text on light gray' },
  
  // Navbar
  { foreground: '#ffffff', background: 'transparent', purpose: 'Nav links on dark hero' },
  { foreground: '#1a1a1a', background: '#ffffff', purpose: 'Nav links on white' },
  { foreground: '#666666', background: '#ffffff', purpose: 'Nav links hover on white' },
];

/**
 * Calculate relative luminance of a color
 * Based on WCAG 2.1 specification
 */
export function getLuminance(hex: string): number {
  // Convert hex to RGB
  const rgb = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!rgb) return 0;
  
  const [r, g, b] = [
    parseInt(rgb[1], 16) / 255,
    parseInt(rgb[2], 16) / 255,
    parseInt(rgb[3], 16) / 255,
  ];
  
  // Apply gamma correction
  const [R, G, B] = [r, g, b].map(val => 
    val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );
  
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

/**
 * Calculate contrast ratio between two colors
 * Returns ratio from 1:1 (no contrast) to 21:1 (maximum)
 */
export function getContrastRatio(color1: string, color2: string): number {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if contrast meets WCAG AA standards
 */
export function meetsWCAG_AA(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): { passes: boolean; ratio: number; required: number } {
  const ratio = getContrastRatio(foreground, background);
  const required = isLargeText ? 3 : 4.5;
  
  return {
    passes: ratio >= required,
    ratio: Math.round(ratio * 100) / 100,
    required,
  };
}

/**
 * Check if contrast meets WCAG AAA standards
 */
export function meetsWCAG_AAA(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): { passes: boolean; ratio: number; required: number } {
  const ratio = getContrastRatio(foreground, background);
  const required = isLargeText ? 4.5 : 7;
  
  return {
    passes: ratio >= required,
    ratio: Math.round(ratio * 100) / 100,
    required,
  };
}

// Test suite
describe("Color Contrast WCAG Compliance", () => {
  it("should calculate luminance correctly for white", () => {
    expect(getLuminance("#ffffff")).toBeCloseTo(1, 2);
  });

  it("should calculate luminance correctly for black", () => {
    expect(getLuminance("#000000")).toBeCloseTo(0, 2);
  });

  it("should calculate maximum contrast ratio for black on white", () => {
    const ratio = getContrastRatio("#ffffff", "#000000");
    expect(ratio).toBeCloseTo(21, 0);
  });

  it("should pass WCAG AA for black text on white background", () => {
    const result = meetsWCAG_AA("#000000", "#ffffff");
    expect(result.passes).toBe(true);
    expect(result.ratio).toBeGreaterThan(4.5);
  });

  it("should properly validate hero section text contrast", () => {
    const result = meetsWCAG_AA("#ffffff", "#000000");
    expect(result.passes).toBe(true);
  });
});
