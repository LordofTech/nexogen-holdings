import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexogen Group Limited | We Build Futures",
  description:
    "Nigerian-born global technology group building world-class software across Fintech, Edutech, GovTech, and Hardware. Home of Trvrse.",
  keywords: [
    "Nexogen Group",
    "Trvrse",
    "Fintech",
    "Edutech",
    "GovTech",
    "Africa",
    "Lagos",
  ],
  openGraph: {
    title: "Nexogen Group Limited",
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
