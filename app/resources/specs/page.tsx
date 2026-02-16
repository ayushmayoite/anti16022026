import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SpecsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Resources
            </span>
            <span className="text-sm text-neutral-600">
              Tools and downloads to support your project planning.
            </span>
          </div>
        </section>
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl py-16 lg:py-24">
          <h1 className="text-5xl font-serif text-neutral-900 mb-8">
            Product Specifications
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Download detailed specification sheets for all our product lines.
            Includes dimensions, materials, finishes, and certifications.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
