import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexogen Holdings Limited | Architecting the Future",
  description:
    "A multi-sector venture studio. Flagship innovation TRVRSE — optimized transactions, secured infrastructure, and global scalability.",
  keywords: [
    "Nexogen Holdings",
    "TRVRSE",
    "Venture Studio",
    "Fintech",
    "GovTech",
    "EdTech",
    "HealthTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
