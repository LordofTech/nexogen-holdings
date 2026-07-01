import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexogen Holdings Limited | We Build Futures",
  description:
    "Nigerian-born global technology holding company building world-class software across Fintech, Edutech, GovTech, and Hardware. Home of Traverse (TRVRSE).",
  keywords: [
    "Nexogen Holdings",
    "Traverse",
    "TRVRSE",
    "Fintech",
    "Edutech",
    "GovTech",
    "Africa",
    "Lagos",
  ],
  openGraph: {
    title: "Nexogen Holdings Limited",
    description: "We Don't Build Apps. We Build Futures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${GeistMono.variable} antialiased`}
        style={
          {
            "--font-cabinet": "'Cabinet Grotesk', sans-serif",
            "--font-general": "'General Sans', sans-serif",
            "--font-geist-mono": GeistMono.style.fontFamily,
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
