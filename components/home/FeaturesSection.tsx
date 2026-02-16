"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, HeartHandshake, PenTool } from "lucide-react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Durability",
    description: "Built with premium materials and backed by a 5-year warranty.",
  },
  {
    icon: Zap,
    title: "Ergonomic Excellence",
    description: "Designs that prioritize comfort and productivity all day long.",
  },
  {
    icon: PenTool,
    title: "Custom Design",
    description: "Tailored solutions to fit your brand, space, and workflow.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Service",
    description: "From consultation to installation, we handle everything.",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 text-center reveal-on-scroll ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-600 tracking-tight mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Furniture that works as hard as you do. Trusted by India&apos;s leading organizations.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 hover-lift"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6 bg-amber-50 rounded-full text-amber-600">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-neutral-700 mb-3">{feature.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
