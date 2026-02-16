"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images?.[0] || "/placeholder.jpg");

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square md:aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center text-neutral-400">
        No Image Available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Main Image */}
      <div className="relative aspect-square md:aspect-[4/3] bg-neutral-50 overflow-hidden border border-neutral-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={productName}
              fill
              className="object-contain p-6 lg:p-10"
              priority
              style={{ objectFit: "contain" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={cn(
                "relative shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden border-2 transition-all duration-300 ease-in-out bg-neutral-50 group",
                activeImage === img
                  ? "border-[#BF0D17]"
                  : "border-neutral-200 hover:border-neutral-400"
              )}
            >
              <div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <Image
                src={img}
                alt={`${productName} view ${index + 1}`}
                width={96}
                height={96}
                className="object-contain p-3"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
