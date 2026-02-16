"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Honda Corporate Office",
    category: "Automobile",
    location: "Gurgaon",
    image: "/products/honda-office-1.jpg",
  },
  {
    id: 2,
    title: "TCS Workspace",
    category: "IT & Banking",
    location: "Pune",
    image: "/products/tcs-workspace-1.jpg",
  },
  {
    id: 3,
    title: "EY India",
    category: "Corporate",
    location: "Bangalore",
    image: "/products/project-ey-1.jpg",
  },
  {
    id: 4,
    title: "PepsiCo HQ",
    category: "Corporate",
    location: "Gurgaon",
    image: "/products/project-pepsico-1.jpg",
  },
  {
    id: 5,
    title: "Nuvora Innovation Center",
    category: "IT & Banking",
    location: "Hyderabad",
    image: "/products/nuvora-pod-3.jpg",
  },
  {
    id: 6,
    title: "Fluid Design Studio",
    category: "Fashion",
    location: "Mumbai",
    image: "/products/fluid-chair-1.jpg",
  },
];

const categories = ["Corporate", "IT & Banking", "Automobile", "Fashion"];
const tileHeights = [7, 6, 5, 6, 7, 5];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Corporate");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Projects
            </span>
            <span className="text-sm text-neutral-600">
              Explore our portfolio of workspace transformations across industries.
            </span>
          </div>
        </section>
        <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-neutral-200">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm tracking-widest text-neutral-400 uppercase mb-6"
            >
              Good work begins in a good workplace
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            >
              Project stories
              <br />
              <em className="text-neutral-500">for contemporary working</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-600 max-w-2xl"
            >
              Explore our portfolio of workspace transformations across industries.
            </motion.p>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="sticky top-0 z-20 bg-white border-b border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12">
            <nav className="flex gap-8 overflow-x-auto py-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative text-sm font-medium tracking-wide whitespace-nowrap pb-4 transition-colors ${
                    activeCategory === category
                      ? "text-neutral-900"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <motion.div
                      layoutId="galleryUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="masonry">
            <div className="masonry__body">
              {filteredProjects.map((project, index) => {
                const tileSize = tileHeights[index % tileHeights.length];
                return (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="masonry-item group cursor-pointer"
                  >
                    <div
                      className={`relative bg-neutral-100 overflow-hidden mb-5 masonry-tile masonry-tile-${tileSize} masonry-tile-sm-${tileSize} masonry-tile-md-${tileSize} masonry-tile-lg-${tileSize}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="masonry-img transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                      {project.category}
                    </span>
                    <h2 className="text-xl font-medium text-neutral-900 mt-2 group-hover:text-neutral-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">{project.location}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <p className="text-neutral-400">No projects found in this category.</p>
            </div>
          )}

          {/* Count */}
          <div className="mt-16 pt-8 border-t border-neutral-100">
            <p className="text-sm text-neutral-400">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
