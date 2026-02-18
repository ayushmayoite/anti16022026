"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-neutral-900">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern open-plan office"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Content — Wini style: left-aligned text, no card */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-28 md:py-36">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/50 mb-5">
            Plan the future with us
          </p>
          <h2 className="text-white mb-6">
            Good planning is half the battle.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Talk to our planning experts about the benefits of contemporary
            office design. From the initial analysis through to downstream
            services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#BF0D17] text-white px-8 py-3.5 text-sm font-medium hover:bg-[#9A0A12] transition-colors"
            >
              Get advice now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-white px-8 py-3.5 text-sm font-medium border border-white/40 hover:border-white hover:bg-white/10 transition-colors"
            >
              View all products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
