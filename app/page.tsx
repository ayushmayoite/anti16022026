"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { AFCBanner } from "@/components/home/AFCBanner";
import { ClientLogos } from "@/components/home/ClientLogos";
import { AFCSection } from "@/components/home/AFCSection";
import { ProductCategories } from "@/components/home/ProductCategories";
import { Projects } from "@/components/home/Projects";
import { CTASection } from "@/components/home/CTASection";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />

      <div className="min-h-screen flex flex-col font-sans relative">
        <Navbar />
        <main className="flex-1">
          {/* 1. Hero - Full-bleed image + overlapping card */}
          <HeroSlider />
          {/* 1.5. AFC Banner */}
          <AFCBanner />
          {/* 2. Product categories - 6 real categories with nice renders */}
          <ProductCategories />
          {/* 3. AFC Partnership - Full-bleed editorial image + card */}
          <AFCSection />
          {/* 4. Value propositions - 3-column (Customising, Quality, Sustainability) */}
          <ClientLogos />
          {/* 5. Planning CTA - Full-bleed image + overlapping card */}
          <CTASection />
          {/* 6. Selected projects - Light grey bg, white cards */}
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}
