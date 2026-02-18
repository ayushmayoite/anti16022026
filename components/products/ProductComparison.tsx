"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

interface ProductComparisonProps {
  products: Product[];
  title?: string;
}

export function ProductComparison({ products, title = "Find Your Fit" }: ProductComparisonProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group block bg-neutral-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-4/3 relative overflow-hidden">
                <Image
                  src={product.images[0] || "/products/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3>
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                  {product.tagline || product.description}
                </p>
                <p className="font-medium">
                  {product.price}
                </p>

                {/* Key Feature */}
                {product.features && product.features[0] && (
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500">
                      {product.features[0]}
                    </p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
