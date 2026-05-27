import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usman Musa Usman | Frontend Developer Portfolio",
  description:
    "Portfolio of Usman Musa Usman (Synn), a frontend developer delivering polished websites, motion-driven interfaces, and product-focused dashboards.",
  keywords: [
    "frontend developer",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "portfolio",
    "Sentratech Labs",
  ],
  openGraph: {
    title: "Usman Musa Usman | Frontend Developer Portfolio",
    description:
      "Frontend developer and founder of Sentratech Labs. Explore selected work in web products, dashboards, and motion-led brand sites.",
    url: "https://usmanmusausman.vercel.app",
    siteName: "Synn Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Musa Usman | Frontend Developer Portfolio",
    description:
      "Frontend developer and founder of Sentratech Labs. Explore selected work in web products, dashboards, and motion-led brand sites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
