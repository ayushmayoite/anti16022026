import { render, screen } from '@testing-library/react';
import Home from './page';
import { describe, it, expect, vi } from 'vitest';

// Mock child components - matching actual imports in page.tsx
vi.mock('@/components/layout/Navbar', () => ({
    Navbar: () => <div data-testid="navbar">Navbar</div>
}));
vi.mock('@/components/layout/Footer', () => ({
    Footer: () => <div data-testid="footer">Footer</div>
}));
vi.mock('@/components/home/HeroSlider', () => ({
    HeroSlider: () => <div data-testid="hero-slider">HeroSlider</div>
}));
vi.mock('@/components/home/ClientLogos', () => ({
    ClientLogos: () => <div data-testid="client-logos">ClientLogos</div>
}));
vi.mock('@/components/home/AFCSection', () => ({
    AFCSection: () => <div data-testid="afc-section">AFCSection</div>
}));
vi.mock('@/components/home/ProductCategories', () => ({
    ProductCategories: () => <div data-testid="product-categories">ProductCategories</div>
}));
vi.mock('@/components/home/Projects', () => ({
    Projects: () => <div data-testid="projects">Projects</div>
}));
vi.mock('@/components/home/CTASection', () => ({
    CTASection: () => <div data-testid="cta-section">CTASection</div>
}));
vi.mock('@/components/seo/JsonLd', () => ({
    JsonLd: () => null,
    organizationSchema: {},
    websiteSchema: {}
}));

describe('Home Page', () => {
    it('renders main layout components', () => {
        render(<Home />);

        expect(screen.getByTestId('navbar')).toBeInTheDocument();
        expect(screen.getByTestId('hero-slider')).toBeInTheDocument();
        expect(screen.getByTestId('client-logos')).toBeInTheDocument();
        expect(screen.getByTestId('afc-section')).toBeInTheDocument();
        expect(screen.getByTestId('product-categories')).toBeInTheDocument();
        expect(screen.getByTestId('projects')).toBeInTheDocument();
        expect(screen.getByTestId('cta-section')).toBeInTheDocument();
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
});
