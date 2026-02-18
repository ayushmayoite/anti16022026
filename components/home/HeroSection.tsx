"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background Image using next/image for performance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/website/titan-hero.jpg"
          alt="Premium office workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-white leading-[1.1] mb-8 tracking-tight">
              Unwavering Elegance for Modern Offices
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
              Discover furniture that blends architectural precision with human-centric design.
              Elevate your workspace with our premium collection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors text-base font-medium min-w-[200px]"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors text-base font-medium min-w-[200px]"
              >
                Download Catalog
                <Download className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
