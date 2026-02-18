"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const workplaceZones = [
  {
    title: "Arrive",
    description: "Reception, lounges and personal storage that set the tone for the day.",
  },
  {
    title: "Working",
    description: "Desks, cupboards and storage that support everyday tasks.",
  },
  {
    title: "Collaboration",
    description: "Agile zones and project areas for fast, focused teamwork.",
  },
  {
    title: "Communicate",
    description: "Spaces for meetings, workshops and training sessions.",
  },
  {
    title: "Stay",
    description: "Centre zones and quiet spots to recharge and focus.",
  },
  {
    title: "Organising",
    description: "Technology and infrastructure that keep everything running smoothly.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="border-b border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400">
              Contact
            </span>
          </div>
        </section>

        <section className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              Talk to our team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-600"
            >
              Share your plans for reception, workstations, collaboration spaces or focus
              areas and we will help you shape the right furniture solution.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="border-t border-neutral-100 bg-neutral-50">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form */}
              <div>
                {submitted ? (
                  <div className="bg-neutral-50 p-12 text-center">
                    <div className="text-3xl text-green-500 mb-4">✓</div>
                    <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                    <p className="text-neutral-600">
                      We’ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-[#BF0D17] transition-colors"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 border border-neutral-200 bg-white focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#BF0D17] text-white py-4 font-medium rounded-full hover:bg-[#9A0A12] transition-colors uppercase tracking-[0.15em] text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <span className="block text-lg font-semibold text-neutral-900 mb-8">Contact Information</span>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-neutral-400 mt-1" />
                    <div>
                      <span className="block text-base font-semibold text-neutral-800 mb-1">Address</span>
                      <p className="text-neutral-600">
                        Patna, Bihar, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-neutral-400 mt-1" />
                    <div>
                      <span className="block text-base font-semibold text-neutral-800 mb-1">Phone</span>
                      <p className="text-neutral-600">+91 90310 22875</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-neutral-400 mt-1" />
                    <div>
                      <span className="block text-base font-semibold text-neutral-800 mb-1">Email</span>
                      <p className="text-neutral-600">sales@oando.co.in</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-12 pt-8 border-t border-neutral-100">
                  <a
                    href="https://wa.me/919031022875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 font-medium hover:bg-[#20bd5a] transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <h2 className="mb-10">
              Where we support you
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {workplaceZones.map((zone) => (
                <div
                  key={zone.title}
                  className="bg-white border border-neutral-100 px-6 py-6"
                >
                  <p className="text-sm tracking-[0.25em] uppercase text-neutral-400 mb-2">
                    {zone.title}
                  </p>
                  <p className="text-base text-neutral-600 mb-0">
                    {zone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
