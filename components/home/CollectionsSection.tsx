"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const collections = [
  {
    title: "Seating",
    description: "Task chairs, executive seating, and collaborative solutions",
    image: "/products/imported/myel/image-1.jpg",
    link: "/products?category=chairs"
  },
  {
    title: "Workstations",
    description: "Modular desk systems for modern workspaces",
    image: "/products/deskpro-workstation-1.jpg",
    link: "/products?category=workstations"
  },
  {
    title: "Tables",
    description: "Conference, meeting, and training tables",
    image: "/products/meeting-table-10pax.jpg",
    link: "/products?category=tables"
  },
  {
    title: "Storage",
    description: "Organizational solutions for every workspace",
    image: "/products/imported/nuvora/image-1.jpg",
    link: "/products?category=storage"
  }
];

export function CollectionsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={ref}
          className={`mb-16 reveal-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-600 tracking-tight mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Explore our comprehensive range of premium furniture solutions designed for modern workspaces.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={index}
              href={collection.link}
              className="group block bg-white rounded-xl p-4 shadow-sm border border-neutral-200 hover-lift"
            >
              <div className="relative aspect-3/4 overflow-hidden bg-neutral-100 mb-4 rounded-lg">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-normal text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {collection.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
