import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { products } from "@/lib/products";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductInfo } from "@/components/products/ProductInfo";
import { RelatedProducts } from "@/components/products/RelatedProducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | One & Only Furniture`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Clean minimal header strip */}
        <section className="border-b border-neutral-100">
          <div className="container mx-auto px-6 lg:px-12 py-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-neutral-400">
              Products
            </span>
          </div>
        </section>
        <div className="container mx-auto px-6 lg:px-12">
          {/* Breadcrumb */}
          <nav className="mb-8 lg:mb-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider font-medium"
            >
              <ArrowLeft size={14} />
              Back to Collection
            </Link>
          </nav>

          {/* Product Grid */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            {/* Gallery - spans 7 columns */}
            <div className="lg:col-span-7">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Info - spans 5 columns */}
            <div className="lg:col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentProduct={product} />
      </main>

      <Footer />
    </div>
  );
}
