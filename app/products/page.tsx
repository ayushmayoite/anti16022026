import { Metadata } from "next";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { BuildOfficeCTA } from "@/components/products/BuildOfficeCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Products | One & Only Furniture",
  description: "Explore our premium range of modular office furniture, ergonomic chairs, and executive workstations.",
};

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ProductsPage(props: Props) {
  // Get category from URL params
  const categoryParam = props.searchParams?.category;
  const initialCategory = Array.isArray(categoryParam) ? categoryParam[0] : categoryParam;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* ProductCatalog now includes its own header */}
        <ProductCatalog initialCategory={initialCategory} />
        <BuildOfficeCTA />
      </main>

      <Footer />
    </div>
  );
}
