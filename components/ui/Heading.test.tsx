import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';
import { describe, it, expect } from 'vitest';

describe('Heading Component', () => {
    it('renders correct heading level', () => {
        render(<Heading level={1}>Heading 1</Heading>);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

        render(<Heading level={3}>Heading 3</Heading>);
        expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    });

    it('applies custom className', () => {
        render(<Heading level={1} className="custom-class">Heading</Heading>);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('custom-class');
    });

    it('applies correct weight classes', () => {
        const { rerender } = render(<Heading level={1} weight="bold">Bold</Heading>);
        expect(screen.getByText('Bold')).toHaveClass('font-bold');

        rerender(<Heading level={1} weight="normal">Normal</Heading>);
        expect(screen.getByText('Normal')).toHaveClass('font-normal');
    });
});
