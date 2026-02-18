"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 bg-neutral-50 overflow-hidden mb-6">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">
            {product.badge}
          </span>
        )}

        {/* Main Image */}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-contain p-8 transition-transform duration-700 ease-out",
            "group-hover:scale-105"
          )}
        />
      </div>

      {/* Product Info */}
      <div className="space-y-1.5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          {product.category}
        </span>
        <h3 className="group-hover:text-[#BF0D17] transition-colors duration-300">
          {product.name}
        </h3>

        {/* Tagline or short description */}
        {product.tagline && (
          <p className="text-sm text-neutral-500 line-clamp-1">
            {product.tagline}
          </p>
        )}


        {/* First feature as benefit */}
        {product.features && product.features[0] && (
          <p className="text-xs text-neutral-400 line-clamp-1 pt-1">
            ✓ {product.features[0].split(":")[0]}
          </p>
        )}
      </div>
    </Link>
  );
}

