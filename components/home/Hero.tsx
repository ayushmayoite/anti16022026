"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-neutral-400 mb-6">
              Office Furniture Manufacturer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-[1.1] mb-6">
              Systems and tables for
              <br />
              modern work environments.
            </h1>
            <p className="text-base md:text-lg text-neutral-600 max-w-xl mb-10">
              Plan complete office landscapes with modular workstations, seating and storage.
              Ergonomic, durable and tailored to your project requirements.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 text-sm font-medium tracking-wide uppercase rounded-none hover:bg-emerald-700 transition-colors"
              >
                Explore programme
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/workstations/configurator"
                className="text-sm font-medium text-neutral-800 underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-800"
              >
                Open workstation configurator
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-neutral-50" />
            <div className="relative border border-neutral-200 bg-white overflow-hidden">
              <Image
                src="/products/deskpro-workstation-1.jpg"
                alt="Shared workstation layout"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
