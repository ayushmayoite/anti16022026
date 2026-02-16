"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width image background */}
      <div className="relative min-h-[500px] md:min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern open-plan office with natural light"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlapping content card */}
        <div className="relative z-10 min-h-[500px] md:min-h-[600px] flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white/95 backdrop-blur-md p-10 md:p-20 max-w-3xl shadow-2xl shadow-black/5">
              <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-4">
                Get in touch
              </p>
              <h2 className="mb-8 leading-none">
                Good planning is half the battle.
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed mb-8 max-w-md">
                Talk to our planning experts about the benefits of contemporary
                office design. From the initial analysis through to downstream
                services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#BF0D17] text-white px-8 py-3.5 text-sm font-medium rounded-full hover:bg-[#c5000d] transition-colors"
                >
                  Get advice now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-3.5 text-sm font-medium rounded-full border border-neutral-300 hover:border-neutral-500 transition-colors"
                >
                  Download catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
