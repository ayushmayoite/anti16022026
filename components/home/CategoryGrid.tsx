"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Executive Seating",
    description: "Command respect with premium comfort.",
    image: "/products/imported/myel/image-1.jpg",
    link: "/products?category=chairs",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
  },
  {
    title: "Workstations",
    description: "Modular systems for agile teams.",
    image: "/products/deskpro-workstation-1.jpg",
    link: "/products?category=workstations",
    className: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
  },
  {
    title: "Conference",
    description: "Where great ideas happen.",
    image: "/products/meeting-table-10pax.jpg",
    link: "/products?category=tables",
    className: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
  },
  {
    title: "Storage & More",
    description: "Organize your success.",
    image: "/products/imported/nuvora/image-1.jpg",
    link: "/products?category=storage",
    className: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
  }
];

export function CategoryGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-4">
              Our Collections
            </h2>
            <h3 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
              Curated for the<br />Modern Office.
            </h3>
          </div>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-lg font-medium text-neutral-900 border-b border-neutral-200 pb-1 hover:border-amber-600 transition-colors"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className={`group relative overflow-hidden rounded-sm ${cat.className}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/80 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-2xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.title}
                </h4>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
