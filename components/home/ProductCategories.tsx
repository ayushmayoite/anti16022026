"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Workstations",
    description: "Modular desking systems",
    image: "/products/deskpro-workstation-1.jpg",
    href: "/products?category=workstations",
  },
  {
    name: "Office Chairs",
    description: "Ergonomic task & executive seating",
    image: "/products/chair-mesh-office.jpg",
    href: "/products?category=seating",
  },
  {
    name: "Soft Seating",
    description: "Lounge & collaborative seating",
    image: "/products/softseating-solace-1.jpg",
    href: "/products?category=seating",
  },
  {
    name: "Cafeteria",
    description: "Break room & dining furniture",
    image: "/products/chair-cafeteria.jpg",
    href: "/products?category=seating",
  },
  {
    name: "Meeting Tables",
    description: "Conference & collaboration tables",
    image: "/products/meeting-table-8pax.jpg",
    href: "/products?category=conference",
  },
  {
    name: "Storage",
    description: "Pedestals, cabinets & shelving",
    image: "/products/cabin drawer close up render.jpg",
    href: "/products?category=storage",
  },
];

export function ProductCategories() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2>
            Discover office furniture
          </h2>
          <p className="text-base text-neutral-600 max-w-xl">
            High-quality design, clear design language and technical innovation
            — find everything you need to build a productive workspace.
          </p>
        </div>

        {/* 3-column grid matching actual product categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Pill-shaped title like WINI */}
              <div className="flex flex-col items-start gap-1">
                <span className="inline-block text-base font-medium text-neutral-900 border border-neutral-200 rounded-full px-5 py-2 group-hover:border-[#BF0D17] group-hover:text-[#BF0D17] transition-colors">
                  {category.name}
                </span>
                <p className="text-sm text-neutral-500 pl-1 mb-0">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-300 rounded-full px-7 py-3 hover:border-[#BF0D17] hover:text-[#BF0D17] transition-colors"
          >
            Show all products
          </Link>
        </div>
      </div>
    </section>
  );
}
