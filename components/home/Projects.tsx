"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    client: "TVS Motor Company",
    location: "Hosur, Tamil Nadu",
    image: "/photos/TVS/hero.jpg",
    category: "Manufacturing",
  },
  {
    id: 2,
    client: "Titan Company",
    location: "Bangalore, Karnataka",
    image: "/photos/Titan/hero.jpg",
    category: "Corporate",
  },
  {
    id: 3,
    client: "DMRC",
    location: "New Delhi",
    image: "/photos/DMRC/hero.jpg",
    category: "Government",
  },
  {
    id: 4,
    client: "Usha International",
    location: "Gurgaon, Haryana",
    image: "/photos/Usha/hero.jpg",
    category: "Corporate",
  },
  {
    id: 5,
    client: "State Bank of India",
    location: "Mumbai, Maharashtra",
    image: "/photos/SBI/hero.jpg",
    category: "Banking",
  },
  {
    id: 6,
    client: "Government of Bihar",
    location: "Patna, Bihar",
    image: "/photos/Govenment/government-hero.jpg",
    category: "Government",
  },
];

export function Projects() {
  return (
    <section className="py-24 md:py-32 bg-[#F7F6F5]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header row — Wini style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-400 mb-4">
              References
            </p>
            <h2 className="mb-0">
              Selected works
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-300 px-7 py-3 hover:border-[#BF0D17] hover:text-[#BF0D17] transition-colors shrink-0"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Wini-style grid: 3 columns, image-first cards with minimal text below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/gallery"
              className="group block bg-white"
            >
              {/* Image — fills card, slight zoom on hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category pill overlay */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/80 bg-black/40 px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card text — minimal, Wini style */}
              <div className="p-5 border-b border-neutral-200 group-hover:border-[#BF0D17] transition-colors">
                <h3 className="text-base font-medium text-neutral-900 group-hover:text-[#BF0D17] transition-colors mb-1 not-italic">
                  {project.client}
                </h3>
                <p className="text-sm text-neutral-500 mb-0">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
