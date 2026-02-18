"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function PartnershipSection() {
  return (
    <section className="relative w-full py-32 md:py-40 overflow-hidden bg-neutral-900 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/website/usha-hero.jpg"
          alt="AFC India Manufacturing"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-amber-500/50 rounded-full bg-amber-500/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
              Strategic Partnership
            </span>
          </div>

          <h2 className="text-white mb-8 leading-tight">
            Authorized Franchise Partner <br className="hidden md:block" />
            of <span className="text-amber-500">AFC India</span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Delivering industrial-scale modular furniture solutions with world-class manufacturing infrastructure and localized expertise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 font-medium rounded-sm transition-all"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-white font-medium hover:text-amber-500 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
