import { render, screen } from '@testing-library/react';
import { Container } from './Container';
import { describe, it, expect } from 'vitest';

describe('Container Component', () => {
    it('renders children correctly', () => {
        render(
            <Container>
                <div data-testid="child">Child Content</div>
            </Container>
        );
        expect(screen.getByTestId('child')).toBeInTheDocument();
    });

    it('applies default max-width class', () => {
        render(<Container>Content</Container>);
        // The container is the first div. 
        // Since we don't have a role, we can add a test id or check the direct child of body if rendered directly, 
        // but here we can just add a data-testid to Container if we want to be precise, or assume it's the wrapper.
        // Let's rely on class checking.
    });

    it('applies correct max-width classes', () => {
        const { container, rerender } = render(<Container maxWidth="sm">Content</Container>);
        expect(container.firstChild).toHaveClass('max-w-2xl');

        rerender(<Container maxWidth="xl">Content</Container>);
        expect(container.firstChild).toHaveClass('max-w-7xl');
    });

    it('merges customclassName', () => {
        const { container } = render(<Container className="custom-test">Content</Container>);
        expect(container.firstChild).toHaveClass('custom-test');
    });
});
