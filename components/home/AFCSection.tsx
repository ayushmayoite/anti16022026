"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AFCSection() {
  return (
    <section className="relative">
      {/* Full-bleed image with overlapping card — WINI editorial pattern */}
      <div className="relative min-h-[550px] md:min-h-[650px]">
        <Image
          src="/photos/TVS/hero.jpg"
          alt="Modern workspace by AFC India"
          fill
          className="object-cover"
        />

        {/* Overlapping white content card, positioned bottom-left like WINI */}
        <div className="absolute bottom-0 left-0 right-0 md:right-auto z-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="bg-white p-10 md:p-20 max-w-3xl mb-0 md:mb-16 shadow-2xl shadow-black/5">
              <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-4">
                Official Strategic Partnership
              </p>
              <h2 className="mb-4 leading-tight">
                Authorized Franchise Partner of AFC India
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Bringing world-class manufacturing excellence and sustainable
                furniture solutions to your workspace. From concept to
                installation, we handle everything.
              </p>
              <Link
                href="https://afcindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#BF0D17] font-medium hover:underline"
              >
                Visit afcindia.com
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
