"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "future-of-office-design-2026",
    title: "The Future of Office Design in 2026",
    excerpt:
      "Explore how hybrid work is reshaping office spaces with flexible furniture solutions and technology integration.",
    category: "Trends",
    date: "January 28, 2026",
    readTime: "5 min read",
    image: "/products/honda-office-1.jpg",
    featured: true,
  },
  {
    slug: "ergonomic-chairs-guide",
    title: "The Complete Guide to Ergonomic Chairs",
    excerpt:
      "How to choose the right ergonomic chair for your team and reduce workplace injuries.",
    category: "Guide",
    date: "January 25, 2026",
    readTime: "8 min read",
    image: "/products/fluid-chair-1.jpg",
    featured: false,
  },
  {
    slug: "modular-workstation-benefits",
    title: "Why Modular Workstations Are the Smart Choice",
    excerpt:
      "Cost savings, flexibility, and sustainability - the benefits of going modular.",
    category: "Products",
    date: "January 22, 2026",
    readTime: "4 min read",
    image: "/products/tcs-workspace-1.jpg",
    featured: false,
  },
  {
    slug: "sustainable-office-furniture",
    title: "Building a Sustainable Office with Eco-Friendly Furniture",
    excerpt:
      "How to meet your ESG goals with LEVEL® certified furniture solutions.",
    category: "Sustainability",
    date: "January 18, 2026",
    readTime: "6 min read",
    image: "/products/project-ey-1.jpg",
    featured: false,
  },
  {
    slug: "office-acoustics-productivity",
    title: "How Office Acoustics Affect Productivity",
    excerpt: "Sound management strategies using furniture and space planning.",
    category: "Productivity",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "/products/nuvora-pod-3.jpg",
    featured: false,
  },
  {
    slug: "executive-cabin-design-tips",
    title: "Designing the Perfect Executive Cabin",
    excerpt:
      "Create a leadership space that inspires confidence and productivity.",
    category: "Design",
    date: "January 10, 2026",
    readTime: "7 min read",
    image: "/products/project-pepsico-1.jpg",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24">
        <section className="bg-neutral-50 border-y border-neutral-200">
          <div className="container mx-auto px-6 lg:px-12 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
              Insights
            </span>
            <span className="text-sm text-neutral-600">
              Workspace ideas, research, and product thinking.
            </span>
          </div>
        </section>
        <section className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 border-b border-neutral-100">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Insights
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl leading-relaxed">
              Expert perspectives on workspace design, furniture trends, and
              building better offices.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block mb-24 group"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-4/3 bg-neutral-100 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-6 uppercase tracking-widest font-medium">
                    <span className="text-neutral-900">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight group-hover:text-neutral-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-neutral-500 leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <span className="text-sm font-medium border-b border-neutral-900 pb-1">Read Article</span>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full"
              >
                <article className="flex flex-col h-full">
                  <div className="relative aspect-3/2 bg-neutral-100 overflow-hidden mb-6">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4 uppercase tracking-widest font-medium">
                    <span className="text-neutral-900">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3 leading-tight group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div>
                    <span className="text-xs font-medium border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors">Read Article</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
