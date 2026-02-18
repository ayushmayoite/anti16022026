"use client";

import Link from "next/link";
import Image from "next/image";
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
    <section className="bg-white">
      {/* Top: full-width image with overlapping text card — Wini "We have the answers" section */}
      <div className="relative">
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <Image
            src="/products/DESKPRO 120D RENDER 4.jpg"
            alt="Premium office furniture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Overlapping white card — Wini style */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white p-10 md:p-16 -mt-24 relative z-10 max-w-2xl shadow-none border-t-4 border-[#BF0D17]">
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
              Why choose us
            </p>
            <h2 className="mb-6">
              We have the answers.
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-0">
              As a leading name in the Indian office furniture industry, we offer
              innovative, functional and aesthetically pleasing products of
              outstanding quality — also as customized special solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Value pillars — 3 columns with top border like Wini */}
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-24">
        <div className="grid md:grid-cols-3 gap-0 divide-x divide-neutral-200">
          {valuePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="px-0 md:px-10 first:pl-0 last:pr-0 py-4"
            >
              <h3 className="text-base font-medium text-neutral-900 mb-3 not-italic">
                {pillar.title}
              </h3>
              <p className="text-neutral-500 leading-relaxed mb-6 text-sm">
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
