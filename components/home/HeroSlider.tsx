"use client";

import Link from "next/link";
import Image from "next/image";

export function HeroSlider() {
  return (
    <section className="relative h-screen bg-neutral-900 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/products/DESKPRO 120D RENDER 4.jpg"
          alt="Premium office workstation"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text directly on image — WINI style, bottom-left aligned */}
      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-6 lg:px-12 pb-20 md:pb-28">
          <h1 className="text-white mb-8 max-w-lg">
            An office becomes my office.
          </h1>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/60 rounded-full px-8 py-3.5 hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            Discover office furniture
          </Link>
        </div>
      </div>

      {/* Scroll indicator — bottom right like WINI */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-1 text-white/60">
        <div className="w-6 h-10 border border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
