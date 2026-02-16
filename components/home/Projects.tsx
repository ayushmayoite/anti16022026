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
    <section className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-400 mb-4">
              Inspiration
            </p>
            <h2 className="mb-6">
              Selected works
            </h2>
            <p className="text-base text-neutral-600 max-w-lg mb-0">
              We partner with India&apos;s leading organizations to create
              workspaces that inspire and endure.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-300 rounded-full px-7 py-3 hover:border-[#BF0D17] hover:text-[#BF0D17] transition-colors bg-white"
          >
            View all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3-column grid with larger first item */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group block bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-medium text-neutral-900 group-hover:text-[#BF0D17] transition-colors mb-1">
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
