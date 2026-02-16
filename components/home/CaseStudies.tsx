"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    client: "Titan",
    location: "Patna, Bihar",
    category: "Corporate Office",
    image: "/photos/Titan/hero.jpg",
    slug: "titan-patna"
  },
  {
    client: "DMRC",
    location: "New Delhi",
    category: "Government Infrastructure",
    image: "/photos/DMRC/hero.jpg",
    slug: "dmrc-delhi"
  },
  {
    client: "Usha International",
    location: "Gurgaon",
    category: "Corporate Headquarters",
    image: "/photos/Usha/hero.jpg",
    slug: "usha-gurgaon"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-2 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 leading-tight">
              Spaces Transformed.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-amber-600 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Link
              key={idx}
              href={`/projects`}
              className="group block"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-sm mb-6">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  {project.category}
                </p>
                <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-amber-600 transition-colors">
                  {project.client}
                </h3>
                <p className="text-neutral-500">
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
