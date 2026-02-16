"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Modern Working",
    description:
      "Furniture that supports hybrid, mobile and in-office work without sacrificing comfort.",
  },
  {
    title: "Healthy Environments",
    description:
      "Ergonomic workstations and thoughtful layouts that protect wellbeing and focus.",
  },
  {
    title: "Flexible Spaces",
    description:
      "Configurable systems that adapt to teams, tasks and changing ways of working.",
  },
];

const sectors = [
  "Government",
  "Manufacturing",
  "Automobile",
  "Information Tech",
  "Banking & Finance",
  "Oil & Gas",
  "Fashion",
  "Corporate Office",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="border-b border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400">
              Modern working
            </span>
          </div>
        </section>
        {/* Hero Section */}
        <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
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
              className="mb-8"
            >
              Modern furniture
              <br />
              <em className="text-neutral-500">for contemporary working</em>
            </motion.h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="border-t border-neutral-100 bg-neutral-50">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-4/5 bg-neutral-100 overflow-hidden">
                  <Image
                    src="/products/deskpro-workstation-1.jpg"
                    alt="Modern Workspace"
                    width={600}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:py-8"
              >
                <h2 className="mb-8">
                  Why the working environment matters
                </h2>
                <div className="space-y-6 text-neutral-600 leading-relaxed">
                  <p>
                    A positive working environment is more than a nice-to-have.
                    It lifts satisfaction and commitment, and it shows up
                    directly in productivity and results. When spaces feel
                    considered, teams bring their best work.
                  </p>
                  <p>
                    Today, work is mobile, remote, hybrid and everything in
                    between. Our job is to turn that complexity into clarity:
                    creating workplaces that balance focus and collaboration,
                    support different workstyles and make it easy to feel at
                    home in the office again.
                  </p>
                  <p>
                    As the <strong>Authorized Franchise Partner of AFC India</strong>,
                    we combine proven manufacturing quality with human-centred
                    design. The result is modular systems that can evolve with
                    your organisation instead of holding it back.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-neutral-50">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <h2 className="mb-6">
              Every job has its own rules
            </h2>
            <p className="text-neutral-600 max-w-3xl mb-10">
              Different teams work in different ways. Individualising the
              working environment makes it easier to attract and retain people,
              support diverse roles and give everyone the freedom to structure
              their day. Our furniture is designed to translate these needs into
              clear, functional spaces.
            </p>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="border-t border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <h2 className="mb-6">Industries We Serve</h2>
            <p className="text-neutral-600 max-w-2xl mb-12">
              We are a trusted partner for industry leaders across a wide
              spectrum of sectors, delivering tailored furniture solutions
              for every unique requirement.
            </p>
            <div className="flex flex-wrap gap-4">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="px-6 py-3 bg-neutral-100 text-neutral-700 text-base font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24 text-center">
            <h2 className="mx-auto mb-10">
              Ready to transform your workspace?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#BF0D17] text-white px-10 py-4 font-medium rounded-full hover:bg-[#9A0A12] transition-colors uppercase tracking-[0.15em] text-sm"
              >
                Start a Project
              </Link>
              <Link
                href="/products"
                className="border border-neutral-300 text-neutral-900 px-8 py-4 font-medium hover:bg-neutral-50 transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
