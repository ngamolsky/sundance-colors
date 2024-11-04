import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Sundance Colors
          </Link>

          <div className="flex gap-6">
            <Link
              href="/projects"
              className="hover:text-foreground/70 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-foreground/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-foreground/70 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
