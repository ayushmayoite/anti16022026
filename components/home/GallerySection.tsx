"use client";

import Image from "next/image";

const projects = [
  { name: "TVS Motor", image: "/photos/TVS/hero.jpg", category: "Corporate" },
  { name: "Titan Company", image: "/photos/Titan/hero.jpg", category: "Retail" },
  { name: "DMRC Project", image: "/photos/DMRC/hero.jpg", category: "Government" },
  { name: "Usha International", image: "/photos/Usha/hero.jpg", category: "Corporate" },
  { name: "State Bank of India", image: "/photos/SBI/hero.jpg", category: "Banking" },
  { name: "Franklin Templeton", image: "/photos/FranklinTempleton/hero.jpg", category: "Finance" },
];

export function GallerySection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-400 mb-4">
            Our Projects
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-neutral-900 tracking-tight leading-tight">
            Delivered Excellence
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                {project.category}
              </p>
              <h3 className="text-base font-medium text-neutral-900">
                {project.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
