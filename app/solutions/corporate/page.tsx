import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CorporatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-24">
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Solutions
            </span>
            <span className="text-sm text-neutral-600">
              Tailored environments for every industry and scale.
            </span>
          </div>
        </section>
        <section className="container mx-auto px-6 lg:px-12 max-w-4xl py-16 lg:py-24">
          <h1 className="text-neutral-900 mb-8">
            Corporate Solutions
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            We design and furnish complete corporate environments — from open-plan workstations
            to executive suites and collaborative spaces. Our solutions prioritize ergonomics,
            aesthetics, and productivity.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Contact us for a consultation tailored to your organization&apos;s needs.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
