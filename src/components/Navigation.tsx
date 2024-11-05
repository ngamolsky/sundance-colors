"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 border-b border-secondary/20">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-6 text-2xl  text-accent"
          >
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Sundance Colors Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="pt-0.5">Sundance Colors</span>
          </Link>

          <div className="flex gap-8">
            <Link
              href="/about"
              className={`py-2 text-secondary-dark hover:text-accent transition-colors hover:underline ${pathname === "/about" ? "underline text-accent" : ""}`}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className={`py-2 text-secondary-dark hover:text-accent transition-colors hover:underline ${pathname === "/gallery" ? "underline text-accent" : ""}`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`py-2 text-secondary-dark hover:text-accent transition-colors hover:underline ${pathname === "/contact" ? "underline text-accent" : ""}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
