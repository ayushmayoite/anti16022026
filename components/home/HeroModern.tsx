"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export function HeroModern() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-neutral-900 text-white">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full bg-[url('/photos/website/titan-hero.jpg')] bg-cover bg-center"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900/80 via-neutral-900/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8"
          >
            Design that <br />
            <span className="text-amber-500">defines</span> your culture.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-12"
          >
            Premium workspace solutions engineered for performance and crafted for elegance. 
            Elevate your office environment with our signature collections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white font-medium text-lg rounded-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 group"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/catalog"
              className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-medium text-lg rounded-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Catalog
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll to Explore</span>
        <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
