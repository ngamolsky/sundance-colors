import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Sundance Colors | Interior & Color Design",
  description: "Professional color consultation and interior design services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased pt-16`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
