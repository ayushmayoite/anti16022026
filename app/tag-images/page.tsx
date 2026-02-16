"use client";

import { useState } from "react";
import Image from "next/image";
import { importedProducts } from "@/lib/products_imported";

// Only focus on the products we are splitting
const SPLIT_IDS = [
  "myel", "logica", "nuvic", "mozio", "breez", "omnia",
  "xmesh", "zino", "orbit", "sway", "revoq", "rock",
  "sullion", "phoenix", "fluid", "spino"
];

export default function ImageTaggerPage() {
  // Store selected "Headrest" images. Key: productId, Value: array of image paths
  const [headrestImages, setHeadrestImages] = useState<Record<string, string[]>>({});
  
  // Only show products involved in the split (base IDs)
  // Note: products_imported has both "myel" and "myel-headrest" now. 
  // We only need to tag specific image paths, so we can just look at the base ones 
  // or combine all unique images.
  
  // Let's filter for the base IDs only to avoid duplicate work
  const productsToTag = importedProducts.filter(p => SPLIT_IDS.includes(p.id));

  const toggleImage = (productId: string, imgPath: string) => {
    setHeadrestImages(prev => {
      const current = prev[productId] || [];
      const isSelected = current.includes(imgPath);
      
      let updated;
      if (isSelected) {
        updated = current.filter(i => i !== imgPath);
      } else {
        updated = [...current, imgPath];
      }
      
      return { ...prev, [productId]: updated };
    });
  };

  const generateJSON = () => {
    const json = JSON.stringify(headrestImages, null, 2);
    navigator.clipboard.writeText(json);
    alert("Configuration copied to clipboard! Please paste it in the chat.");
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12 sticky top-0 bg-neutral-50 z-10 py-4 border-b">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Product Image Tagger</h1>
            <p className="text-neutral-500">Select images that show a <span className="font-bold text-black">HEADREST</span>.</p>
          </div>
          <button 
            onClick={generateJSON}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Copy Configuration
          </button>
        </header>

        <div className="space-y-16">
          {productsToTag.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4 uppercase tracking-wide">{product.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {product.images.map((img) => {
                  const isSelected = headrestImages[product.id]?.includes(img);
                  return (
                    <button
                      key={img}
                      onClick={() => toggleImage(product.id, img)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        isSelected 
                          ? "border-blue-600 ring-2 ring-blue-600/20" 
                          : "border-neutral-100 hover:border-neutral-300"
                      }`}
                    >
                      <Image 
                        src={img} 
                        alt="Product variant" 
                        fill 
                        className={`object-contain p-4 ${isSelected ? "" : "opacity-80"}`}
                      />
                      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                        <span className="text-[10px] bg-black/70 text-white px-1 rounded truncate max-w-[80%]">
                            {img.split("/").pop()}
                        </span>
                        {isSelected && (
                           <div className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                             ✓
                           </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
