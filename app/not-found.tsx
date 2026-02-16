import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 flex items-center justify-center px-6 pt-24">
                <div className="max-w-2xl text-center space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-8xl md:text-9xl font-light text-neutral-200">404</h1>
                        <h2 className="text-3xl md:text-4xl font-light">Page Not Found</h2>
                        <p className="text-lg text-neutral-600">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-primary text-white px-8 py-4 font-medium hover:bg-primary/90 transition-colors"
                        >
                            Go Home
                        </Link>
                        <Link
                            href="/products"
                            className="border border-neutral-300 text-neutral-900 px-8 py-4 font-medium hover:bg-neutral-50 transition-colors"
                        >
                            Browse Products
                        </Link>
                        <Link
                            href="/workstations/configurator"
                            className="border border-neutral-300 text-neutral-900 px-8 py-4 font-medium hover:bg-neutral-50 transition-colors"
                        >
                            Try Configurator
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
