import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// Blog posts data (in production, this would come from a CMS)
const blogPosts: Record<
  string,
  {
    title: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: string;
  }
> = {
  "future-of-office-design-2026": {
    title: "The Future of Office Design in 2026",
    category: "Trends",
    date: "January 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    author: "Design Team",
    content: `
The way we work has fundamentally changed, and office design must evolve to meet these new demands. In 2026, we're seeing a dramatic shift towards hybrid-ready workspaces that can adapt to fluctuating occupancy levels.

## Key Trends Shaping Office Design

### 1. Flexibility First
Gone are the days of fixed desks for every employee. Modern offices are embracing hot-desking, activity-based working, and modular furniture that can be reconfigured in minutes. Our modular workstation systems allow companies to expand or contract their workspace without major renovations.

### 2. Wellness-Centered Design
Employee wellbeing is no longer a nice-to-have—it's essential. Offices are incorporating:
- Ergonomic seating with adjustable lumbar support
- Sit-stand desks that encourage movement
- Biophilic design elements
- Improved air quality and natural lighting

### 3. Technology Integration
Smart furniture is becoming standard. From desks with built-in wireless charging to chairs that track posture, technology is seamlessly woven into every piece of furniture.

### 4. Sustainability
With ESG goals becoming mandatory, companies are demanding LEVEL® certified furniture. Our entire range meets the highest sustainability standards, using recycled materials and designed for end-of-life recyclability.

## How to Future-Proof Your Office

1. **Invest in modular systems** - They grow with your company
2. **Prioritize ergonomics** - Healthy employees are productive employees
3. **Choose sustainable options** - Good for the planet and your brand
4. **Plan for hybrid** - Design spaces that work whether 20% or 80% occupied

The office of 2026 isn't about where you work—it's about how you work. Contact us to design your future-ready workspace.
        `,
  },
  "ergonomic-chairs-guide": {
    title: "The Complete Guide to Ergonomic Chairs",
    category: "Guide",
    date: "January 25, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200",
    author: "Product Team",
    content: `
Choosing the right ergonomic chair is one of the most important decisions you can make for your team's health and productivity. This comprehensive guide will help you understand what to look for.

## What Makes a Chair Ergonomic?

An ergonomic chair is designed to support the natural curvature of your spine while allowing for movement and adjustability. Key features include:

### Essential Features

1. **Adjustable Seat Height** - Should allow feet to rest flat on the floor with thighs parallel to the ground
2. **Lumbar Support** - Crucial for lower back health, ideally adjustable
3. **Seat Depth Adjustment** - 2-4 fingers width between seat edge and back of knees
4. **Armrest Adjustability** - Should allow shoulders to relax naturally
5. **Swivel Base** - Enables easy movement without straining

### Premium Features

- Headrest for neck support during recline
- Breathable mesh back for temperature regulation
- Synchronized tilt mechanism
- Seat slide for varying body types

## Our Top Recommendations

### The Myel Chair
Perfect for intensive desk work, featuring:
- 4D adjustable armrests
- Dynamic lumbar support
- Premium breathable mesh
- 12-year warranty

### The Solace Series
Ideal for executive offices:
- Premium leather upholstery
- High-back design with headrest
- Whisper-quiet mechanism
- Striking aesthetic appeal

## Investment vs. Cost

A quality ergonomic chair costs ₹15,000-50,000, but consider this: the average desk worker sits for 8+ hours daily. Poor seating leads to back pain, which is the #1 cause of workplace absenteeism. A good chair pays for itself in reduced sick days and increased productivity.

Contact our team for a workplace assessment and personalized recommendations.
        `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | One & Only Furniture Blog`,
    description: post.content.substring(0, 160),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
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
        <section className="container mx-auto px-6 max-w-4xl py-16 lg:py-24">
          <article>
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span className="text-primary font-medium">{post.category}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              {post.title}
            </h1>
            <p className="text-muted-foreground">By {post.author}</p>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-serif font-medium mt-8 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-medium mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <li key={i} className="ml-6 text-muted-foreground">
                    {paragraph.replace("- ", "")}
                  </li>
                );
              }
              if (
                paragraph.startsWith("1. ") ||
                paragraph.startsWith("2. ") ||
                paragraph.startsWith("3. ") ||
                paragraph.startsWith("4. ")
              ) {
                return (
                  <li
                    key={i}
                    className="ml-6 text-muted-foreground list-decimal"
                  >
                    {paragraph.substring(3)}
                  </li>
                );
              }
              if (paragraph.trim()) {
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-secondary/20 rounded-2xl text-center">
            <h3 className="text-2xl font-medium mb-4">
              Ready to Transform Your Workspace?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert advice from our design team.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>

          {/* Back Link */}
          <div className="mt-12">
            <Link href="/blog" className="text-primary hover:underline">
              ← Back to Blog
            </Link>
          </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
