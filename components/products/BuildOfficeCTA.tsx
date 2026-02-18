"use client";

import Link from "next/link";
import { MessageSquare, FileText } from "lucide-react";

export function BuildOfficeCTA() {
  return (
    <section className="py-16 bg-neutral-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mb-4">
          Let&apos;s Build Your Perfect Office
        </h2>
        <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
          Get a custom quote, free space planning, or expert advice on choosing the right furniture for your workspace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/workstations/configurator"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Advanced Configurator
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-3 rounded-lg hover:bg-neutral-100 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Request a Quote
          </Link>
          <a
            href="https://wa.me/919031022875?text=Hi,%20I%20need%20help%20choosing%20office%20furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
