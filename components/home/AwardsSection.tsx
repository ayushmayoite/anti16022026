"use client";

import Link from "next/link";
import Image from "next/image";

const items = [
    {
        name: "TVS Motor Company",
        description: "Manufacturing Excellence · Hosur, Tamil Nadu",
        image: "/photos/TVS/hero.jpg",
        href: "/projects",
        className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
        name: "DMRC",
        description: "Government · New Delhi",
        image: "/photos/DMRC/hero.jpg",
        href: "/projects",
        className: "md:col-span-1 md:row-span-1 aspect-[4/3]",
    },
    {
        name: "Titan Company",
        description: "Corporate · Bangalore, Karnataka",
        image: "/projects/titan-gallery.jpg",
        href: "/projects",
        className: "md:col-span-1 md:row-span-2 aspect-[3/4]",
    },
    {
        name: "State Bank of India",
        description: "Banking Sector · Mumbai",
        image: "/photos/SBI/hero.jpg",
        href: "/projects",
        className: "md:col-span-2 md:row-span-1 aspect-[2/1]",
    },
    {
        name: "Usha International",
        description: "Corporate · Gurgaon, Haryana",
        image: "/photos/Usha/hero.jpg",
        href: "/projects",
        className: "md:col-span-1 md:row-span-1 aspect-[4/3]",
    },
    {
        name: "Government of Bihar",
        description: "Government · Patna, Bihar",
        image: "/photos/Govenment/government-hero.jpg",
        href: "/projects",
        className: "md:col-span-2 md:row-span-1 aspect-[2/1] md:aspect-auto",
    },
];

export function AwardsSection() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-16 max-w-2xl">

                    <h2 className="mb-6 text-[#BF0D17]">
                        Selected works
                    </h2>
                    <p className="text-base text-neutral-600 max-w-lg">
                        We partner with India&apos;s leading organizations to create
                        workspaces that inspire and endure.
                    </p>
                </div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(240px,auto)]">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`group relative overflow-hidden bg-neutral-100 ${item.className}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />


                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full transition-all duration-300">
                                <span className="block text-xl md:text-2xl font-bold text-white mb-1">
                                    {item.name}
                                </span>
                                <p className="text-sm text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-300 px-7 py-3 hover:border-neutral-900 transition-colors"
                    >
                        View all projects
                        <span className="ml-1">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
