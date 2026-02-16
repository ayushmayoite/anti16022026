"use client";

import Link from "next/link";
import Image from "next/image";

const tools = [
  {
    id: 1,
    title: "Product Catalog",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800",
    link: "/products",
  },
  {
    id: 2,
    title: "Custom Solutions",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800",
    link: "/contact",
  },
  {
    id: 3,
    title: "Project Gallery",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800",
    link: "/gallery",
  },
];

export function HelpfulTools() {
  return (
    <section className="py-24 md:py-32 bg-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-20 text-center">
          Helpful Tools
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.link}
              className="group relative aspect-video overflow-hidden bg-neutral-200"
            >
              <Image
                src={tool.image}
                alt={tool.title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-light text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {tool.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
