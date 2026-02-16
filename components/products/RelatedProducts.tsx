"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, products } from "@/lib/products";

interface RelatedProductsProps {
  currentProduct: Product;
}

export function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Simple logic: Find 4 products in same category, excluding current one
  // If not enough, fill with others
  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);
    
  // Fallback if less than 4
  if (related.length < 4) {
    const others = products
      .filter(p => p.category !== currentProduct.category && p.id !== currentProduct.id)
      .slice(0, 4 - related.length);
    related.push(...others);
  }

  if (related.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold mb-8 text-neutral-900">Compare Similar Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((idx) => (
            <Link 
              key={idx.id} 
              href={`/products/${idx.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-neutral-100 hover:border-neutral-200 transition-all hover:shadow-lg"
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={idx.images[0] || "/placeholder.jpg"}
                  alt={idx.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-orange-600 uppercase tracking-widest mb-1">
                  {idx.category}
                </p>
                <h3 className="font-semibold text-neutral-900 truncate">{idx.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">{idx.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
