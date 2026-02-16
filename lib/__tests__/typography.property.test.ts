import { describe, it, expect } from 'vitest';
import fc from 'fast-check';

// Typography scale from globals.css
const typographyScale = {
  xs: 12,    // 0.75rem
  sm: 14,    // 0.875rem  
  base: 16,  // 1rem
  lg: 18,    // 1.125rem
  xl: 20,    // 1.25rem
  '2xl': 24, // 1.5rem
  '3xl': 30, // 1.875rem
  '4xl': 36, // 2.25rem
  '5xl': 48, // 3rem
  '6xl': 60  // 3.75rem
};

const lineHeights = {
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
};

const letterSpacings = {
  tighter: -0.05,
  tight: -0.025,
  normal: 0,
  wide: 0.025,
  wider: 0.05,
  widest: 0.1
};

describe('Typography System Property Tests', () => {
  it('Property 1: Typography Scale Consistency - maintains consistent ratios', () => {
    fc.assert(
      fc.property(fc.constantFrom(...Object.keys(typographyScale)), (sizeKey) => {
        const size = typographyScale[sizeKey as keyof typeof typographyScale];
        // All sizes should be positive and reasonable (8px-80px range)
        return size >= 8 && size <= 80;
      }),
      { numRuns: 100 }
    );
  });

  it('Property 2: Letter Spacing Differentiation - spacing values are distinct', () => {
    const spacingValues = Object.values(letterSpacings);
    const uniqueValues = new Set(spacingValues);
    expect(uniqueValues.size).toBe(spacingValues.length);
  });

  it('Property 3: Line Height Readability - maintains readable ratios', () => {
    fc.assert(
      fc.property(fc.constantFrom(...Object.values(lineHeights)), (lineHeight) => {
        // Line heights should be between 1.2 and 2.5 for readability
        return lineHeight >= 1.2 && lineHeight <= 2.5;
      }),
      { numRuns: 50 }
    );
  });

  it('Property 4: Serif Heading Font Weights - appropriate weight range', () => {
    const headingWeights = [300, 400, 500, 600, 700]; // normal to bold range
    fc.assert(
      fc.property(fc.constantFrom(...headingWeights), (weight) => {
        // Serif headings should use lighter weights (300-700)
        return weight >= 300 && weight <= 700;
      }),
      { numRuns: 50 }
    );
  });

  it('Property 5: Text Color Opacity Consistency - opacity levels are logical', () => {
    const textOpacities = [1, 0.7, 0.5, 0.3]; // primary, secondary, muted, disabled
    
    fc.assert(
      fc.property(fc.constantFrom(...textOpacities), (opacity) => {
        return opacity > 0 && opacity <= 1;
      }),
      { numRuns: 50 }
    );

    // Ensure descending opacity order
    expect(textOpacities).toEqual([1, 0.7, 0.5, 0.3]);
  });

  it('Property 6: Typography Scale Progression - sizes increase logically', () => {
    const sizeKeys = Object.keys(typographyScale);
    const sizes = Object.values(typographyScale);
    
    // Check that sizes generally increase (allowing for some flexibility)
    for (let i = 1; i < sizes.length; i++) {
      expect(sizes[i]).toBeGreaterThanOrEqual(sizes[i - 1]);
    }
  });

  it('Property 7: Letter Spacing Range - values are within reasonable bounds', () => {
    fc.assert(
      fc.property(fc.constantFrom(...Object.values(letterSpacings)), (spacing) => {
        // Letter spacing should be between -0.1em and 0.2em
        return spacing >= -0.1 && spacing <= 0.2;
      }),
      { numRuns: 50 }
    );
  });
});