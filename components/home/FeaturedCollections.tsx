"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const featuredCollections = [
  {
    title: "Seating Solutions",
    description: "Ergonomic chairs designed for comfort and productivity",
    image: "/products/imported/myel/image-1.jpg",
    link: "/products?category=chairs"
  },
  {
    title: "Workstation Systems",
    description: "Modular desks and workstations for modern offices",
    image: "/products/deskpro-workstation-1.jpg",
    link: "/products?category=workstations"
  },
  {
    title: "Conference Tables",
    description: "Collaborative spaces designed for productive teams",
    image: "/products/meeting-table-10pax.jpg",
    link: "/products?category=tables"
  },
  {
    title: "Storage Solutions",
    description: "Keep your workspace organized and efficient",
    image: "/products/imported/nuvora/image-1.jpg",
    link: "/products?category=storage"
  }
];

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
            Explore Our Collections
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.15] mb-6">
            Furniture Solutions<br />For Every Space
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From ergonomic seating to collaborative workspaces, discover our comprehensive range of premium furniture solutions.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCollections.map((collection, index) => (
            <div key={index} className="group">
              <Link href={collection.link} className="block">
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 mb-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-normal">Explore Collection</p>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-light text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {collection.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {collection.description}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-full font-normal transition-all hover:bg-amber-700 hover:gap-5 group shadow-lg hover:shadow-xl"
          >
            View All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
