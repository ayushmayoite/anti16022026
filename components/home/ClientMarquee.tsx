"use client";

const clients = [
  "TVS", "Titan", "DMRC", "Usha", "Government of Bihar",
  "State Bank of India", "BSNL", "IOCL"
];

export function ClientMarquee() {
  return (
    <section className="bg-white border-b border-neutral-100">
      {/* Client Marquee Strip */}
      <div className="py-12 border-b border-neutral-100">
        <div className="container mx-auto px-6 mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Trusted by Industry Leaders
          </span>
        </div>

        <div className="relative flex w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent z-10" />

          <div className="flex min-w-full items-center gap-16 md:gap-32 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-serif text-neutral-300 hover:text-neutral-800 transition-colors duration-500 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Preview - Kept minimal here, fuller section elsewhere if needed */}
    </section>
  );
}
