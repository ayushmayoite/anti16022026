"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { importedProducts } from "@/lib/products_imported";

// Select specific products to feature
const featuredIds = ["logica", "phoenix", "myel-headrest", "sullion"];
const featuredProducts = importedProducts.filter((p) => featuredIds.includes(p.id));

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32 bg-white animate-fade-in-up">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
              Our Collection
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 tracking-tight leading-[1.15]">
              Featured<br />Products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View all products
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <Link
              href={`/products?product=${product.slug}`}
              className="group block shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                {/* Image Container */}
                <div className="relative aspect-3/4 overflow-hidden bg-neutral-100 mb-5">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                {/* Text */}
                <h3 className="text-xl font-light text-neutral-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-base text-neutral-500 leading-relaxed font-light line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-base font-normal text-neutral-500 group-hover:text-neutral-900 transition-colors">
                  View Details <ArrowRight size={12} className="ml-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
