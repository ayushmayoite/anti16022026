"use client";

import { Product } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { ArrowRight, Check, MessageCircle, Mail } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="sticky top-32">
      {/* Header */}
      <div className="mb-6">
        {/* Badge */}
        {product.badge && (
          <span className="inline-block bg-neutral-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            {product.badge}
          </span>
        )}

        <h1 className="mb-4">
          {product.name}
        </h1>
        <div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
            {product.category}
          </span>
          {product.price && (
            <span className="text-2xl font-light text-neutral-900">
              {product.price === "POA" ? "Price on Request" : product.price}
            </span>
          )}
        </div>

        {/* Tagline */}
        {product.tagline && (
          <p className="text-lg font-medium text-neutral-700 mb-3">
            {product.tagline}
          </p>
        )}

        <p className="text-neutral-500 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* CTA Section */}
      <div className="mb-12">
        <div className="flex flex-col gap-4">
          <Button
            className="w-full bg-[#BF0D17] hover:bg-[#9A0A12] text-white h-14 text-sm font-medium uppercase tracking-[0.2em] rounded-full transition-all duration-300"
            onClick={() => window.open(`https://wa.me/919031022875?text=I'm interested in ${product.name}`, '_blank')}
          >
            Inquire Now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest leading-relaxed">
            Personalized consultation, installation & global shipping available.
          </p>
        </div>
      </div>

      {/* Accordion Specs */}
      <Accordion type="single" collapsible defaultValue="features" className="w-full">
        <AccordionItem value="features">
          <AccordionTrigger className="text-sm uppercase tracking-wider font-medium">
            Key Features
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2 pt-2">
              {product.features?.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-600">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#BF0D17] shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="specifications">
          <AccordionTrigger className="text-sm uppercase tracking-wider font-medium">
            Specifications
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {product.specs?.map((spec, i) => (
                <div key={i} className="flex justify-between py-2 border-b border-neutral-100 last:border-0">
                  <span className="text-neutral-500">{spec.label}</span>
                  <span className="font-medium text-neutral-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="warranty">
          <AccordionTrigger className="text-sm uppercase tracking-wider font-medium">
            Warranty & Support
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-neutral-600">
                <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>{product.warranty || "5 Year"} manufacturing warranty</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>Free assembly guidance via WhatsApp</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>Pan-India delivery with installation support</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-600">
                <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>Dedicated customer support team</span>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Need Help Section */}
      <div className="mt-8 p-8 bg-neutral-50 border border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          Need help with this product?
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          Get alternatives, ask about availability, or discuss customization options.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            className="flex-1 border-neutral-300 hover:bg-neutral-100"
            onClick={() => window.open(`https://wa.me/919031022875?text=Hi, I need help with ${product.name}`, '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp Chat
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-neutral-300 hover:bg-neutral-100"
            onClick={() => window.open('mailto:info@afcind.com?subject=Product Inquiry: ' + product.name, '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email Us
          </Button>
        </div>
      </div>
    </div>
  );
}

