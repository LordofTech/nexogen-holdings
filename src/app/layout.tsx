import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexogen Limited | We Build Futures",
  description:
    "Nigerian-born global technology company building world-class software across Fintech, Edutech, GovTech, and Hardware. Home of Trvrse.",
  keywords: [
    "Nexogen Limited",
    "Trvrse",
    "Fintech",
    "Edutech",
    "GovTech",
    "Africa",
    "Lagos",
  ],
  openGraph: {
    title: "Nexogen Limited",
    description: "We Don't Build Apps. We Build Futures.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/branding/favicon.ico" },
      { url: "/branding/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/branding/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/branding/nexogen-favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/branding/nexogen-favicon-1024.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        url: "/branding/nexogen-favicon-4096.png",
        sizes: "4096x4096",
        type: "image/png",
      },
    ],
    shortcut: ["/branding/favicon.ico"],
    apple: [{ url: "/branding/apple-touch-icon.png", sizes: "180x180" }],
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
