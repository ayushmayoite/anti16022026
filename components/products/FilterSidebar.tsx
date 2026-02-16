"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FilterSidebarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  activeFilters: {
    headrest: "any" | "with" | "without";
    priceMin?: number;
    priceMax?: number;
    colors?: string[];
  };
  onFilterChange: (key: string, value: string | number | string[] | undefined) => void;
}

const colorOptions = [
  { name: 'Black', value: 'black', class: 'bg-neutral-900' },
  { name: 'Grey', value: 'gray', class: 'bg-neutral-400' },
  { name: 'White', value: 'white', class: 'bg-neutral-100 border border-neutral-300' },
  { name: 'Oak', value: 'oak', class: 'bg-[#D4A373]' },
];

const categories = [
  { id: "chairs", label: "Office Chairs" },
  { id: "soft-seating", label: "Soft Seating" },
  { id: "cafe", label: "Cafeteria" },
  { id: "workstations", label: "Workstations" },
  { id: "tables", label: "Meeting Tables" },
  { id: "storage", label: "Storage" },
  { id: "all", label: "All Products" },
];

export function FilterSidebar({
  activeCategory,
  onCategoryChange,
  activeFilters,
  onFilterChange,
}: FilterSidebarProps) {
  
  const hasActiveFilters = 
    activeFilters.headrest !== "any" || 
    activeFilters.priceMin !== undefined || 
    activeFilters.priceMax !== undefined || 
    (activeFilters.colors && activeFilters.colors.length > 0);

  const clearAll = () => {
    onFilterChange("headrest", "any");
    onFilterChange("priceMin", undefined);
    onFilterChange("priceMax", undefined);
    onFilterChange("colors", []);
  };

  const toggleColor = (color: string) => {
    const current = activeFilters.colors || [];
    const next = current.includes(color)
      ? current.filter(c => c !== color)
      : [...current, color];
    onFilterChange("colors", next);
  };

  return (
    <div className="space-y-10">
      {/* Categories Section */}
      <div>
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
          Category
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-neutral-900 text-white font-medium shadow-lg shadow-neutral-200 translate-x-1"
                  : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Headrest Section (Only for chairs) */}
      {(activeCategory === "chairs" || activeCategory === "all") && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
            Headrest
          </h3>
          <div className="flex bg-neutral-100 p-1 rounded-xl">
            {[
              { id: "any", label: "Any" },
              { id: "with", label: "With" },
              { id: "without", label: "Without" },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => onFilterChange("headrest", opt.id)}
                className={cn(
                  "flex-1 py-2 text-xs font-medium rounded-lg transition-all",
                  activeFilters.headrest === opt.id
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500 hover:text-neutral-700"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Price Range */}
      <div>
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
          Price Range
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={activeFilters.priceMin || ""}
            onChange={(e) => onFilterChange("priceMin", e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all"
          />
          <input
            type="number"
            placeholder="Max"
            value={activeFilters.priceMax || ""}
            onChange={(e) => onFilterChange("priceMax", e.target.value ? Number(e.target.value) : undefined)}
            className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all"
          />
        </div>
      </div>

      {/* Color Swatches */}
      <div>
        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6">
          Colors
        </h3>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => {
            const isSelected = activeFilters.colors?.includes(color.value);
            return (
              <button
                key={color.value}
                onClick={() => toggleColor(color.value)}
                className={cn(
                  "group relative w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all p-0.5",
                  isSelected ? "border-neutral-900 scale-110" : "border-transparent hover:border-neutral-200"
                )}
                title={color.name}
              >
                <div className={cn("w-full h-full rounded-full shadow-inner", color.class)} />
                {isSelected && (
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear All */}
      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="w-full py-3 rounded-xl border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          Clear All Filters
        </button>
      )}
    </div>
  );
}
