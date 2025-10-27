import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Elbethel",
  description: "Elbethel Advertising",
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
        <main className="relative overflow-hidden px-6 md:x-12 lg:px-24 xl:px-32">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
