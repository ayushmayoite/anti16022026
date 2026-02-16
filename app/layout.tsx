import type { Metadata } from "next";
import { Assistant, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "One and Only Furniture | Premium Office Solutions",
  description:
    "Simplicity & Functionality. Modular office furniture for modern workspaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${assistant.variable} ${crimsonPro.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
