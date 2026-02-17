"use client";

import Image from "next/image";
import Link from "next/link";

export function AFCBanner() {
    return (
        <section className="bg-neutral-50 border-b border-neutral-100 py-10">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14">
                    {/* Logo — fixed size, no global style interference */}
                    <Image
                        src="/afc-logo.svg"
                        alt="AFC India"
                        width={100}
                        height={40}
                        className="object-contain shrink-0 w-auto h-auto"
                    />

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-neutral-200" />

                    {/* Text — explicit font-sans and non-heading tags to avoid global H/p overrides */}
                    <div className="text-center md:text-left">
                        <span className="block font-sans text-base font-medium tracking-wide text-neutral-800 mb-1">
                            Official Strategic Partner
                        </span>
                        <span className="block font-sans text-sm text-neutral-400 mb-0">
                            Exclusive partnership for premium office solutions in India
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-neutral-200" />

                    {/* CTA */}
                    <Link
                        href="/about"
                        className="font-sans text-sm font-medium text-[#BF0D17] hover:text-[#9A0A12] transition-colors underline underline-offset-4 decoration-[#BF0D17]/30 hover:decoration-[#BF0D17]"
                    >
                        Read about our partnership →
                    </Link>
                </div>
            </div>
        </section>
    );
}
