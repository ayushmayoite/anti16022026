"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { products as ALL_PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { FilterSidebar } from "./FilterSidebar";
import { Search } from "lucide-react";

// Category configuration for dynamic hero
const categoryConfig: Record<string, { title: string; tagline: string; image: string }> = {
  chairs: {
    title: "Office Chairs",
    tagline: "Support your back and budget with ergonomic seating designed for all-day comfort.",
    image: "/products/imported/myel/image-1.jpg",
  },
  "soft-seating": {
    title: "Soft Seating",
    tagline: "Comfortable lounge furniture for collaborative spaces and relaxation zones.",
    image: "/products/solace-chair-1.jpg",
  },
  cafe: {
    title: "Cafeteria Seating",
    tagline: "Vibrant, durable seating for breakout zones and cafeterias.",
    image: "/products/chair-cafeteria.jpg",
  },
  workstations: {
    title: "Modular Workstations",
    tagline: "Adjustable desk systems for clear thinking and inspired doing.",
    image: "/products/deskpro-workstation-1.jpg",
  },
  tables: {
    title: "Meeting Tables",
    tagline: "Collaborative spaces designed for productive teams and impactful discussions.",
    image: "/products/meeting-table-10pax.jpg",
  },
  storage: {
    title: "Storage Solutions",
    tagline: "Keep your workspace organized, efficient, and clutter-free.",
    image: "/products/imported/nuvora/image-1.jpg",
  },
  all: {
    title: "Design meets function",
    tagline:
      "When furniture matches how your team works, the office truly becomes your space.",
    image: "/products/imported/nuvora/image-1.jpg",
  },
};

const officeAreas: {
  id: string;
  title: string;
  description: string;
  category: string;
}[] = [
    {
      id: "arrive",
      title: "Arrive",
      description: "Reception, lounges and lockers that welcome people into your space.",
      category: "storage",
    },
    {
      id: "working",
      title: "Working",
      description: "Desks, cupboards and storage where everyday work happens.",
      category: "workstations",
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description: "Agile areas and project zones for teams to move quickly together.",
      category: "tables",
    },
    {
      id: "communicate",
      title: "Communicate",
      description: "Meeting and training spaces for clear, focused conversations.",
      category: "tables",
    },
    {
      id: "stay",
      title: "Stay",
      description: "Central hubs and quiet corners for breaks and deep focus.",
      category: "soft-seating",
    },
    {
      id: "organising",
      title: "Organising",
      description: "Technology and storage that keep your office running smoothly.",
      category: "storage",
    },
  ];

interface ProductCatalogProps {
  initialCategory?: string;
}

export function ProductCatalog({ initialCategory }: ProductCatalogProps) {
  const initial =
    initialCategory && categoryConfig[initialCategory]
      ? initialCategory
      : "all";

  const [activeCategory, setActiveCategory] = useState(initial);

  const [searchQuery, setSearchQuery] = useState("");

  const [activeFilters, setActiveFilters] = useState<{
    headrest: "any" | "with" | "without";
    priceMin?: number;
    priceMax?: number;
    colors?: string[];
  }>({
    headrest: "any",
    priceMin: undefined,
    priceMax: undefined,
    colors: [],
  });

  // Get current category config or fallback
  const currentCategory = categoryConfig[activeCategory] || categoryConfig.all;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    // Reset filters and search on category change
    setActiveFilters({ headrest: "any", priceMin: undefined, priceMax: undefined, colors: [] });
    setSearchQuery("");
    const url = new URL(window.location.href);
    url.searchParams.set("category", catId);
    window.history.replaceState({}, "", url.toString());
  };

  const handleFilterChange = (key: string, value: unknown) => {
    setActiveFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    // 1. Category Filter
    let matchesCategory = false;
    if (activeCategory === "all") matchesCategory = true;
    else if (activeCategory === "chairs") {
      matchesCategory = p.category === "Chairs" || p.category === "Task Chair";
    } else if (activeCategory === "soft-seating") {
      matchesCategory = p.category === "Soft Seating";
    } else if (activeCategory === "cafe") {
      matchesCategory = p.category === "Cafe";
    } else if (activeCategory === "workstations") {
      matchesCategory = p.category === "Workstations";
    } else if (activeCategory === "tables") {
      matchesCategory = p.category === "Meeting Tables";
    } else if (activeCategory === "storage") {
      matchesCategory = p.category === "Storage";
    } else {
      matchesCategory = p.category === activeCategory;
    }

    if (!matchesCategory) return false;

    // 2. Feature Filters (only for chairs currently)
    if ((activeCategory === "chairs" || activeCategory === "all") && activeFilters.headrest !== "any") {
      const lowerFeatures = p.features?.map(f => f.toLowerCase()) || [];
      const lowerName = p.name.toLowerCase();
      const hasHeadrest = lowerFeatures.some(f => f.includes("headrest")) || lowerName.includes("headrest");

      if (activeFilters.headrest === "with" && !hasHeadrest) return false;
      if (activeFilters.headrest === "without" && hasHeadrest) return false;
    }

    // 3. Price Filter
    if (activeFilters.priceMin !== undefined || activeFilters.priceMax !== undefined) {
      // Parse numeric price from string (e.g., "₹4,500" -> 4500)
      const numericPrice = p.price === "POA" ? 15000 : parseInt(p.price.replace(/[^\d]/g, "")) || 0;

      if (activeFilters.priceMin !== undefined && numericPrice < activeFilters.priceMin) return false;
      if (activeFilters.priceMax !== undefined && numericPrice > activeFilters.priceMax) return false;
    }

    // 4. Color Filter
    if (activeFilters.colors && activeFilters.colors.length > 0) {
      const lowerDescription = p.description.toLowerCase();
      const lowerFeatures = p.features?.map(f => f.toLowerCase()) || [];
      const hasColor = activeFilters.colors.some(color =>
        lowerDescription.includes(color) || lowerFeatures.some(f => f.includes(color))
      );
      if (!hasColor) return false;
    }

    // 5. Search Filter
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      const lowerName = p.name.toLowerCase();
      const lowerDescription = p.description.toLowerCase();
      const lowerFeatures = p.features?.map(f => f.toLowerCase()) || [];
      const matchesSearch = lowerName.includes(lowerQuery) ||
        lowerDescription.includes(lowerQuery) ||
        lowerFeatures.some(f => f.includes(lowerQuery));
      if (!matchesSearch) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative h-[55vh] min-h-[500px] overflow-hidden bg-neutral-900">
        <Image
          src={currentCategory.image}
          alt={currentCategory.title}
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Editorial bottom-left positioning — WINI pattern */}
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-6 lg:px-12 pb-16 md:pb-24">
            <h1 className="text-white mb-6 max-w-2xl">
              {currentCategory.title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-0">
              {currentCategory.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-neutral-50 py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-300"
            />
          </div>
        </div>
      </section>

      {/* Office Areas Strip */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <h2 className="mb-10">
            Which office area would you like to design?
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {officeAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => handleCategoryChange(area.category)}
                className={cn(
                  "text-left bg-white border border-neutral-100 px-4 py-4 hover:border-neutral-300 hover:shadow-sm transition-all",
                  activeCategory === area.category && "border-neutral-900"
                )}
              >
                <p className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 mb-2">
                  {area.title}
                </p>
                <p className="text-sm text-neutral-600 mb-0">
                  {area.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-32 self-start">
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
          </aside>

          {/* Mobile Filter (Top Bar) */}
          <div className="lg:hidden mb-8 overflow-x-auto pb-4 border-b border-neutral-100">
            <div className="flex gap-4">
              {[
                "all",
                "chairs",
                "soft-seating",
                "cafe",
                "workstations",
                "tables",
                "storage",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    "whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === cat
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  )}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm text-neutral-500">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </span>
              {/* Future: Sort Dropdown */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-24 bg-neutral-50 rounded-lg">
                <p className="text-neutral-400">
                  No products found in this category.
                </p>
                <button
                  onClick={() => handleCategoryChange("chairs")}
                  className="mt-4 text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600"
                >
                  View all products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
