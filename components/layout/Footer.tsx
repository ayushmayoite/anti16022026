"use client";

import Link from "next/link";
import { OneAndOnlyLogo } from "@/components/ui/Logo";

const footerLinks = {
  products: [
    { label: "Seating", href: "/products?category=seating" },
    { label: "Workstations", href: "/products?category=workstations" },
    { label: "Tables", href: "/products?category=tables" },
    { label: "Storage", href: "/products?category=storage" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Catalog", href: "/catalog" },
  ],
  resources: [
    { label: "Configurator", href: "/workstations/configurator" },
    { label: "Design Guides", href: "/resources/design-guides" },
    { label: "CAD Files", href: "/resources/cad" },
    { label: "Sustainability", href: "/resources/sustainability" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* WINI-style italic red heading */}
        <h3 className="font-serif italic text-2xl md:text-3xl text-[#BF0D17] mb-12">
          Follow us!
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <OneAndOnlyLogo variant="orange" className="h-8" />
            </Link>
            <div className="flex flex-col gap-1.5 text-sm text-neutral-600 mt-4">
              <p className="mb-0">Patna, Bihar, India</p>
              <a href="mailto:sales@oando.co.in" className="hover:text-[#BF0D17] transition-colors">
                sales@oando.co.in
              </a>
              <a href="tel:+919031022875" className="hover:text-[#BF0D17] transition-colors">
                +91 90310 22875
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 mb-4 not-italic">
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-[#BF0D17] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 mb-4 not-italic">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-[#BF0D17] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-900 mb-4 not-italic">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-[#BF0D17] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-neutral-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500 mb-0">
            © {new Date().getFullYear()} One and Only Furniture. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
