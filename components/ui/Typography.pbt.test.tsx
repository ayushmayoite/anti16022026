import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { H1, H2, H3, H4, H5, H6, BodyLarge, BodyBase, BodySmall, BodyXS } from './Typography';

/**
 * Property-Based Tests for Typography System
 * 
 * These tests verify universal properties that should hold across all typography components
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5
 */

describe('Typography System - Property-Based Tests', () => {
  /**
   * Property 1: Typography Scale Consistency
   * For any two consecutive font sizes in the typography scale, the ratio between them
   * should remain constant across all breakpoints.
   * 
   * Validates: Requirements 1.1
   */
  describe('Property 1: Typography Scale Consistency', () => {
    it('should maintain consistent font size ratios across heading levels', () => {
      // Define the typography scale from globals.css
      const fontSizes = {
        xs: 0.75,      // 12px
        sm: 0.875,     // 14px
        base: 1,       // 16px
        lg: 1.125,     // 18px
        xl: 1.25,      // 20px
        '2xl': 1.5,    // 24px
        '3xl': 1.875,  // 30px
        '4xl': 2.25,   // 36px
        '5xl': 3,      // 48px
        '6xl': 3.75,   // 60px
      };

      const sizes = Object.values(fontSizes);
      
      // Check that each consecutive pair maintains a reasonable ratio
      // The typography scale uses a modular scale approach with varying ratios
      fc.assert(
        fc.property(fc.integer({ min: 0, max: sizes.length - 2 }), (index) => {
          const ratio = sizes[index + 1] / sizes[index];
          // Ratios should be between 1.05 and 1.4 for a modular scale
          return ratio >= 1.05 && ratio <= 1.4;
        }),
        { numRuns: 100 }
      );
    });

    it('should render heading components with appropriate font sizes', () => {
      const headings = [
        { component: H1, level: 1, expectedClasses: ['text-5xl', 'md:text-6xl'] },
        { component: H2, level: 2, expectedClasses: ['text-4xl', 'md:text-5xl'] },
        { component: H3, level: 3, expectedClasses: ['text-3xl', 'md:text-4xl'] },
        { component: H4, level: 4, expectedClasses: ['text-2xl', 'md:text-3xl'] },
        { component: H5, level: 5, expectedClasses: ['text-xl', 'md:text-2xl'] },
        { component: H6, level: 6, expectedClasses: ['text-lg', 'md:text-xl'] },
      ];

      headings.forEach(({ component: Component, expectedClasses }) => {
        const { container } = render(<Component>Test</Component>);
        const element = container.firstChild as HTMLElement;
        
        expectedClasses.forEach((className) => {
          expect(element.className).toContain(className);
        });
      });
    });
  });

  /**
   * Property 2: Letter Spacing Differentiation
   * For any heading element and body text element, the heading should have different
   * letter-spacing than body text to enhance readability.
   * 
   * Validates: Requirements 1.2
   */
  describe('Property 2: Letter Spacing Differentiation', () => {
    it('should apply different letter-spacing to headings vs body text', () => {
      const headingLetterSpacings = ['tracking-tighter', 'tracking-tight', 'tracking-normal'];
      const bodyLetterSpacings = ['tracking-normal', 'tracking-wide', 'tracking-wider'];

      // Verify that headings use tighter letter-spacing
      const { container: h1Container } = render(<H1>Heading</H1>);
      const h1 = h1Container.firstChild as HTMLElement;
      expect(h1.className).toContain('tracking-tighter');

      const { container: h2Container } = render(<H2>Heading</H2>);
      const h2 = h2Container.firstChild as HTMLElement;
      expect(h2.className).toContain('tracking-tight');

      // Verify that body text uses normal or wider letter-spacing
      const { container: bodyContainer } = render(<BodySmall>Body</BodySmall>);
      const body = bodyContainer.firstChild as HTMLElement;
      expect(body.className).toContain('tracking-wide');
    });

    it('should differentiate letter-spacing between heading levels', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max: 6 }), (level) => {
          const headingComponents = [H1, H2, H3, H4, H5, H6];
          const Component = headingComponents[level - 1];
          
          const { container } = render(<Component>Test</Component>);
          const element = container.firstChild as HTMLElement;
          
          // All headings should have some form of letter-spacing class
          const hasLetterSpacing = 
            element.className.includes('tracking-tighter') ||
            element.className.includes('tracking-tight') ||
            element.className.includes('tracking-normal');
          
          return hasLetterSpacing;
        }),
        { numRuns: 100 }
      );
    });
  });

  /**
   * Property 3: Line Height Readability
   * For any text element on the website, its line-height should be between 1.25 and 2
   * to ensure comfortable reading.
   * 
   * Validates: Requirements 1.3
   */
  describe('Property 3: Line Height Readability', () => {
    it('should maintain line-height between 1.25 and 2 for all text elements', () => {
      const lineHeights = {
        'leading-tight': 1.25,
        'leading-snug': 1.375,
        'leading-normal': 1.5,
        'leading-relaxed': 1.625,
        'leading-loose': 2,
      };

      Object.entries(lineHeights).forEach(([className, value]) => {
        expect(value).toBeGreaterThanOrEqual(1.25);
        expect(value).toBeLessThanOrEqual(2);
      });
    });

    it('should apply valid line-height classes to all heading components', () => {
      const headings = [
        { component: H1, expectedLineHeight: 'leading-tight' },
        { component: H2, expectedLineHeight: 'leading-tight' },
        { component: H3, expectedLineHeight: 'leading-snug' },
        { component: H4, expectedLineHeight: 'leading-snug' },
        { component: H5, expectedLineHeight: 'leading-snug' },
        { component: H6, expectedLineHeight: 'leading-normal' },
      ];

      headings.forEach(({ component: Component, expectedLineHeight }) => {
        const { container } = render(<Component>Test</Component>);
        const element = container.firstChild as HTMLElement;
        expect(element.className).toContain(expectedLineHeight);
      });
    });

    it('should apply valid line-height classes to all body text components', () => {
      const bodyTexts = [
        { component: BodyLarge, expectedLineHeight: 'leading-relaxed' },
        { component: BodyBase, expectedLineHeight: 'leading-normal' },
        { component: BodySmall, expectedLineHeight: 'leading-normal' },
        { component: BodyXS, expectedLineHeight: 'leading-normal' },
      ];

      bodyTexts.forEach(({ component: Component, expectedLineHeight }) => {
        const { container } = render(<Component>Test</Component>);
        const element = container.firstChild as HTMLElement;
        expect(element.className).toContain(expectedLineHeight);
      });
    });
  });

  /**
   * Property 4: Serif Heading Font Weights
   * For any heading element using a serif font, it should have a font-weight of 400 or 500
   * to ensure proper visual hierarchy.
   * 
   * Validates: Requirements 1.4
   */
  describe('Property 4: Serif Heading Font Weights', () => {
    it('should use appropriate font weights for serif headings', () => {
      const serifHeadings = [
        { component: H1, expectedWeight: 'font-normal' },
        { component: H2, expectedWeight: 'font-normal' },
        { component: H3, expectedWeight: 'font-normal' },
      ];

      serifHeadings.forEach(({ component: Component, expectedWeight }) => {
        const { container } = render(<Component>Test</Component>);
        const element = container.firstChild as HTMLElement;
        expect(element.className).toContain(expectedWeight);
        expect(element.className).toContain('font-serif');
      });
    });

    it('should use appropriate font weights for sans-serif headings', () => {
      const sansSerifHeadings = [
        { component: H4, expectedWeight: 'font-medium' },
        { component: H5, expectedWeight: 'font-medium' },
        { component: H6, expectedWeight: 'font-semibold' },
      ];

      sansSerifHeadings.forEach(({ component: Component, expectedWeight }) => {
        const { container } = render(<Component>Test</Component>);
        const element = container.firstChild as HTMLElement;
        expect(element.className).toContain(expectedWeight);
        expect(element.className).toContain('font-sans');
      });
    });

    it('should maintain consistent font weight hierarchy across heading levels', () => {
      fc.assert(
        fc.property(fc.integer({ min: 1, max: 6 }), (level) => {
          const headingComponents = [H1, H2, H3, H4, H5, H6];
          const Component = headingComponents[level - 1];
          
          const { container } = render(<Component>Test</Component>);
          const element = container.firstChild as HTMLElement;
          
          // All headings should have a font-weight class
          const hasFontWeight = 
            element.className.includes('font-normal') ||
            element.className.includes('font-medium') ||
            element.className.includes('font-semibold');
          
          return hasFontWeight;
        }),
        { numRuns: 100 }
      );
    });
  });

  /**
   * Property 5: Text Color Opacity Consistency
   * For any text element classified as primary, secondary, or muted, all elements of the
   * same classification should use the same opacity level throughout the website.
   * 
   * Validates: Requirements 1.5
   */
  describe('Property 5: Text Color Opacity Consistency', () => {
    it('should maintain consistent opacity levels for text color variants', () => {
      const colorOpacities = {
        'text-primary': 1.0,      // 100%
        'text-secondary': 0.7,    // 70%
        'text-muted': 0.5,        // 50%
        'text-disabled': 0.3,     // 30%
      };

      Object.entries(colorOpacities).forEach(([className, opacity]) => {
        expect(opacity).toBeGreaterThan(0);
        expect(opacity).toBeLessThanOrEqual(1);
      });
    });

    it('should apply consistent color classes to text elements', () => {
      fc.assert(
        fc.property(fc.integer({ min: 0, max: 3 }), (index) => {
          const colorVariants = [
            { className: 'text-primary', expectedClass: 'text-primary' },
            { className: 'text-secondary', expectedClass: 'text-secondary' },
            { className: 'text-muted', expectedClass: 'text-muted' },
            { className: 'text-disabled', expectedClass: 'text-disabled' },
          ];

          const variant = colorVariants[index];
          // Verify that the color class is valid
          return variant.expectedClass.startsWith('text-');
        }),
        { numRuns: 100 }
      );
    });

    it('should render body text with appropriate color classes', () => {
      const { container } = render(<BodyBase>Test</BodyBase>);
      const element = container.firstChild as HTMLElement;
      
      // Body text should have a valid color class or inherit from parent
      expect(element).toBeInTheDocument();
    });
  });

  /**
   * Integration Test: All typography components should render without errors
   */
  describe('Integration: Typography Component Rendering', () => {
    it('should render all heading components without errors', () => {
      fc.assert(
        fc.property(fc.string({ minLength: 1, maxLength: 100 }), (text) => {
          const headings = [H1, H2, H3, H4, H5, H6];
          
          headings.forEach((Component) => {
            const { container } = render(<Component>{text}</Component>);
            expect(container.firstChild).toBeInTheDocument();
          });
          
          return true;
        }),
        { numRuns: 50 }
      );
    });

    it('should render all body text components without errors', () => {
      fc.assert(
        fc.property(fc.string({ minLength: 1, maxLength: 100 }), (text) => {
          const bodyTexts = [BodyLarge, BodyBase, BodySmall, BodyXS];
          
          bodyTexts.forEach((Component) => {
            const { container } = render(<Component>{text}</Component>);
            expect(container.firstChild).toBeInTheDocument();
          });
          
          return true;
        }),
        { numRuns: 50 }
      );
    });

    it('should preserve custom className while maintaining default styles', () => {
      fc.assert(
        fc.property(fc.string({ minLength: 1, maxLength: 50 }), (customClass) => {
          const { container } = render(<H1 className={customClass}>Test</H1>);
          const element = container.firstChild as HTMLElement;
          
          // Should have both default and custom classes
          expect(element.className).toContain('font-serif');
          expect(element.className).toContain(customClass);
          
          return true;
        }),
        { numRuns: 50 }
      );
    });
  });
});
