"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const valuePillars = [
  {
    title: "Customising",
    description:
      "We build customized office furniture. In series. Talk to us about our customizing capabilities.",
    href: "/contact",
    linkText: "Learn more",
  },
  {
    title: "Design & quality",
    description:
      "We live quality you can touch. High-quality, well thought-out, safe and flexible — Made in India.",
    href: "/about",
    linkText: "Discover quality",
  },
  {
    title: "Sustainably produced",
    description:
      "We think and act sustainably. Responsible sourcing, durable materials, and eco-conscious manufacturing.",
    href: "/about",
    linkText: "More about sustainability",
  },
];

export function ClientLogos() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-4">
            Why choose us
          </p>
          <h2 className="leading-tight">
            We have the answers.
          </h2>
        </div>

        <p className="text-neutral-600 leading-relaxed max-w-3xl mb-14">
          As a leading name in the Indian office furniture industry, we offer
          innovative, functional and aesthetically pleasing products of
          outstanding quality — also as customized special solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border-t border-neutral-200 pt-8"
            >
              <h3 className="text-lg font-medium text-neutral-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className="inline-flex items-center gap-1.5 text-sm text-[#BF0D17] font-medium hover:underline"
              >
                {pillar.linkText}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
