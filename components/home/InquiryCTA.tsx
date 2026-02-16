"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function InquiryCTA() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/20 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
          Ready to elevate your workspace?
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
          Let’s collaborate to create an environment that inspires productivity and reflects your brand’s excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-amber-600 text-white text-lg font-medium rounded-sm hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-900/20 flex items-center justify-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 text-white text-lg font-medium rounded-sm hover:bg-white/5 transition-all flex items-center justify-center"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
