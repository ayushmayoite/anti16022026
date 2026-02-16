import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  H1, H2, H3, H4, H5, H6,
  BodyLarge, BodyBase, BodySmall, BodyXS,
  TextPrimary, TextSecondary, TextMuted, TextDisabled,
  Heading,
} from './Typography';

/**
 * Unit Tests for Typography Component
 * 
 * Tests verify specific styling examples and edge cases for typography
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5
 */

describe('Typography Components', () => {
  describe('Heading Components', () => {
    describe('H1', () => {
      it('should render h1 element with correct text', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Main Heading');
      });

      it('should have serif font class', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('font-serif');
      });

      it('should have correct size classes', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('text-5xl', 'md:text-6xl');
      });

      it('should have normal font weight', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('font-normal');
      });

      it('should have tight letter spacing', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('tracking-tighter');
      });

      it('should have tight line height', () => {
        render(<H1>Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('leading-tight');
      });

      it('should accept custom className', () => {
        render(<H1 className="custom-class">Main Heading</H1>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('custom-class');
      });
    });

    describe('H2', () => {
      it('should render h2 element with correct text', () => {
        render(<H2>Secondary Heading</H2>);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Secondary Heading');
      });

      it('should have serif font class', () => {
        render(<H2>Secondary Heading</H2>);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('font-serif');
      });

      it('should have correct size classes', () => {
        render(<H2>Secondary Heading</H2>);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-4xl', 'md:text-5xl');
      });

      it('should have normal font weight', () => {
        render(<H2>Secondary Heading</H2>);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('font-normal');
      });

      it('should have tight letter spacing', () => {
        render(<H2>Secondary Heading</H2>);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('tracking-tight');
      });
    });

    describe('H3', () => {
      it('should render h3 element with correct text', () => {
        render(<H3>Tertiary Heading</H3>);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Tertiary Heading');
      });

      it('should have serif font class', () => {
        render(<H3>Tertiary Heading</H3>);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toHaveClass('font-serif');
      });

      it('should have correct size classes', () => {
        render(<H3>Tertiary Heading</H3>);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toHaveClass('text-3xl', 'md:text-4xl');
      });

      it('should have snug line height', () => {
        render(<H3>Tertiary Heading</H3>);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toHaveClass('leading-snug');
      });
    });

    describe('H4', () => {
      it('should render h4 element with correct text', () => {
        render(<H4>Quaternary Heading</H4>);
        const heading = screen.getByRole('heading', { level: 4 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Quaternary Heading');
      });

      it('should have sans-serif font class', () => {
        render(<H4>Quaternary Heading</H4>);
        const heading = screen.getByRole('heading', { level: 4 });
        expect(heading).toHaveClass('font-sans');
      });

      it('should have medium font weight', () => {
        render(<H4>Quaternary Heading</H4>);
        const heading = screen.getByRole('heading', { level: 4 });
        expect(heading).toHaveClass('font-medium');
      });

      it('should have correct size classes', () => {
        render(<H4>Quaternary Heading</H4>);
        const heading = screen.getByRole('heading', { level: 4 });
        expect(heading).toHaveClass('text-2xl', 'md:text-3xl');
      });
    });

    describe('H5', () => {
      it('should render h5 element with correct text', () => {
        render(<H5>Quinary Heading</H5>);
        const heading = screen.getByRole('heading', { level: 5 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Quinary Heading');
      });

      it('should have sans-serif font class', () => {
        render(<H5>Quinary Heading</H5>);
        const heading = screen.getByRole('heading', { level: 5 });
        expect(heading).toHaveClass('font-sans');
      });

      it('should have medium font weight', () => {
        render(<H5>Quinary Heading</H5>);
        const heading = screen.getByRole('heading', { level: 5 });
        expect(heading).toHaveClass('font-medium');
      });

      it('should have normal letter spacing', () => {
        render(<H5>Quinary Heading</H5>);
        const heading = screen.getByRole('heading', { level: 5 });
        expect(heading).toHaveClass('tracking-normal');
      });
    });

    describe('H6', () => {
      it('should render h6 element with correct text', () => {
        render(<H6>Senary Heading</H6>);
        const heading = screen.getByRole('heading', { level: 6 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Senary Heading');
      });

      it('should have sans-serif font class', () => {
        render(<H6>Senary Heading</H6>);
        const heading = screen.getByRole('heading', { level: 6 });
        expect(heading).toHaveClass('font-sans');
      });

      it('should have semibold font weight', () => {
        render(<H6>Senary Heading</H6>);
        const heading = screen.getByRole('heading', { level: 6 });
        expect(heading).toHaveClass('font-semibold');
      });

      it('should have normal line height', () => {
        render(<H6>Senary Heading</H6>);
        const heading = screen.getByRole('heading', { level: 6 });
        expect(heading).toHaveClass('leading-normal');
      });
    });
  });

  describe('Body Text Components', () => {
    describe('BodyLarge', () => {
      it('should render paragraph with correct text', () => {
        render(<BodyLarge>Large body text</BodyLarge>);
        const paragraph = screen.getByText('Large body text');
        expect(paragraph).toBeInTheDocument();
      });

      it('should have large text size', () => {
        render(<BodyLarge>Large body text</BodyLarge>);
        const paragraph = screen.getByText('Large body text');
        expect(paragraph).toHaveClass('text-lg');
      });

      it('should have relaxed line height', () => {
        render(<BodyLarge>Large body text</BodyLarge>);
        const paragraph = screen.getByText('Large body text');
        expect(paragraph).toHaveClass('leading-relaxed');
      });

      it('should have normal letter spacing', () => {
        render(<BodyLarge>Large body text</BodyLarge>);
        const paragraph = screen.getByText('Large body text');
        expect(paragraph).toHaveClass('tracking-normal');
      });
    });

    describe('BodyBase', () => {
      it('should render paragraph with correct text', () => {
        render(<BodyBase>Base body text</BodyBase>);
        const paragraph = screen.getByText('Base body text');
        expect(paragraph).toBeInTheDocument();
      });

      it('should have base text size', () => {
        render(<BodyBase>Base body text</BodyBase>);
        const paragraph = screen.getByText('Base body text');
        expect(paragraph).toHaveClass('text-base');
      });

      it('should have normal line height', () => {
        render(<BodyBase>Base body text</BodyBase>);
        const paragraph = screen.getByText('Base body text');
        expect(paragraph).toHaveClass('leading-normal');
      });

      it('should have normal letter spacing', () => {
        render(<BodyBase>Base body text</BodyBase>);
        const paragraph = screen.getByText('Base body text');
        expect(paragraph).toHaveClass('tracking-normal');
      });
    });

    describe('BodySmall', () => {
      it('should render paragraph with correct text', () => {
        render(<BodySmall>Small body text</BodySmall>);
        const paragraph = screen.getByText('Small body text');
        expect(paragraph).toBeInTheDocument();
      });

      it('should have small text size', () => {
        render(<BodySmall>Small body text</BodySmall>);
        const paragraph = screen.getByText('Small body text');
        expect(paragraph).toHaveClass('text-sm');
      });

      it('should have wide letter spacing', () => {
        render(<BodySmall>Small body text</BodySmall>);
        const paragraph = screen.getByText('Small body text');
        expect(paragraph).toHaveClass('tracking-wide');
      });
    });

    describe('BodyXS', () => {
      it('should render paragraph with correct text', () => {
        render(<BodyXS>Extra small body text</BodyXS>);
        const paragraph = screen.getByText('Extra small body text');
        expect(paragraph).toBeInTheDocument();
      });

      it('should have extra small text size', () => {
        render(<BodyXS>Extra small body text</BodyXS>);
        const paragraph = screen.getByText('Extra small body text');
        expect(paragraph).toHaveClass('text-xs');
      });

      it('should have wider letter spacing', () => {
        render(<BodyXS>Extra small body text</BodyXS>);
        const paragraph = screen.getByText('Extra small body text');
        expect(paragraph).toHaveClass('tracking-wider');
      });
    });
  });

  describe('Text Color Variants', () => {
    describe('TextPrimary', () => {
      it('should render span with correct text', () => {
        render(<TextPrimary>Primary text</TextPrimary>);
        const span = screen.getByText('Primary text');
        expect(span).toBeInTheDocument();
      });

      it('should have primary text color class', () => {
        render(<TextPrimary>Primary text</TextPrimary>);
        const span = screen.getByText('Primary text');
        expect(span).toHaveClass('text-primary');
      });
    });

    describe('TextSecondary', () => {
      it('should render span with correct text', () => {
        render(<TextSecondary>Secondary text</TextSecondary>);
        const span = screen.getByText('Secondary text');
        expect(span).toBeInTheDocument();
      });

      it('should have secondary text color class', () => {
        render(<TextSecondary>Secondary text</TextSecondary>);
        const span = screen.getByText('Secondary text');
        expect(span).toHaveClass('text-secondary');
      });
    });

    describe('TextMuted', () => {
      it('should render span with correct text', () => {
        render(<TextMuted>Muted text</TextMuted>);
        const span = screen.getByText('Muted text');
        expect(span).toBeInTheDocument();
      });

      it('should have muted text color class', () => {
        render(<TextMuted>Muted text</TextMuted>);
        const span = screen.getByText('Muted text');
        expect(span).toHaveClass('text-muted');
      });
    });

    describe('TextDisabled', () => {
      it('should render span with correct text', () => {
        render(<TextDisabled>Disabled text</TextDisabled>);
        const span = screen.getByText('Disabled text');
        expect(span).toBeInTheDocument();
      });

      it('should have disabled text color class', () => {
        render(<TextDisabled>Disabled text</TextDisabled>);
        const span = screen.getByText('Disabled text');
        expect(span).toHaveClass('text-disabled');
      });
    });
  });

  describe('Generic Heading Component', () => {
    it('should render h1 when level is h1', () => {
      render(<Heading level="h1">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should render h2 when level is h2', () => {
      render(<Heading level="h2">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should render h3 when level is h3', () => {
      render(<Heading level="h3">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should render h4 when level is h4', () => {
      render(<Heading level="h4">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 4 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should render h5 when level is h5', () => {
      render(<Heading level="h5">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 5 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should render h6 when level is h6', () => {
      render(<Heading level="h6">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 6 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Dynamic Heading');
    });

    it('should accept custom className', () => {
      render(<Heading level="h1" className="custom-class">Dynamic Heading</Heading>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty children gracefully', () => {
      render(<H1>{null}</H1>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    it('should handle complex children content', () => {
      render(
        <H1>
          Main <span>Heading</span> with <strong>formatting</strong>
        </H1>
      );
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Main Heading with formatting');
    });

    it('should preserve HTML attributes', () => {
      render(<H1 id="main-heading" data-testid="heading">Main Heading</H1>);
      const heading = screen.getByTestId('heading');
      expect(heading).toHaveAttribute('id', 'main-heading');
    });

    it('should merge custom className with default classes', () => {
      render(<H1 className="text-red-500">Main Heading</H1>);
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('font-serif', 'text-5xl', 'text-red-500');
    });
  });
});
