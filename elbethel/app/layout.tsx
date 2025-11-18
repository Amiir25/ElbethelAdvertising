import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    default: "Elbethel Advertising | Printing & Signage in Addis Ababa",
    template: "%s | Elbethel Advertising",
  },
  description:
    `Elbethel Advertising is a creative printing company in Addis Ababa, Ethiopia. We specialize in
    LED signage, light boxes, indoor & outdoor large format printing, poster, signage & banner
    printing services and custom branding materials that make your brand shine.`,
  
  keywords: [
    "Elbethel Advertising",
    "signage company Addis Ababa",
    "printing company Addis Ababa",
    "advertising agency Ethiopia",
    "branding company Addis Ababa",

    "LED signage Addis Ababa",
    "light box printing Ethiopia",
    "LED sign makers Ethiopia",
    "custom LED signage Ethiopia",
    "LED light box installation Addis Ababa",
    "illuminated sign boards Addis Ababa",
    "LED channel letters Addis Ababa",
    "3D illuminated letters Ethiopia",

    "indoor signage Addis Ababa",
    "outdoor advertising Ethiopia",
    "storefront branding Ethiopia",
    "wall branding company Addis Ababa",
    "indoor advertising boards Ethiopia",

    "large format printing Addis Ababa",
    "banner printing Ethiopia",
    "poster printing Addis Ababa",
    "wall graphic printing Ethiopia",
    "high-resolution banner printing Addis Ababa",
    "vinyl banner printing Ethiopia",
    "wide format printing Addis Ababa",

    "vehicle branding Ethiopia",
    "car wrap printing Addis Ababa",
    "vehicle graphics Ethiopia",
    "fleet branding Addis Ababa",
    "commercial vehicle wraps Ethiopia",
    "custom vehicle wraps Addis Ababa",
    "mobile advertising car branding Ethiopia",

    "interior signs Ethiopia",
    "wall branding Addis Ababa",
    "office wall graphics Ethiopia",
    "interior signage installation Addis Ababa",
    "reception area branding Ethiopia",
    "3D interior signs Addis Ababa",
    "wall mural printing Ethiopia",

    "promotional printing Ethiopia",
    "custom T-shirt printing Addis Ababa",
    "branded gift items Ethiopia",
    "promotional items printing Addis Ababa",
    "logo printing on merchandise Addis Ababa",
    "corporate gift printing Ethiopia",
    "T-shirt printer Addis Ababa",

    "custom printing Ethiopia",
    "business signage Ethiopia",
    "advertising and printing services Addis Ababa"
  ],
  authors: [{ name: "Elbethel Advertising" }],
  openGraph: {
    title: "Elbethel Advertising | LED Signage & Printing in Addis Ababa",
    description:
      "Premium printing and advertising solutions in Addis Ababa. From LED signage to custom branding materials — we help your business stand out.",
    url: "https://elbetheladvert.vercel.app/",
    siteName: "Elbethel Advertising",
    locale: "en_ET",
    type: "website",
    images: [
      {
        url: "/public/logo-original.jpg",
        width: 1200,
        height: 630,
        alt: "Elbethel Advertising - LED signage and printing company in Addis Ababa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elbethel Advertising | LED Signage & Printing in Addis Ababa",
    description:
      "Creative advertising and printing company based in Addis Ababa, Ethiopia.",
    images: ["/public/logo-original.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/favicons/apple-touch-icon.png' },
  },
  alternates: {
    canonical: "https://elbetheladvert.vercel.app/",
  },
  metadataBase: new URL("https://elbetheladvert.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
