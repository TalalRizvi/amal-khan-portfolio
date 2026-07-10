"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/thesis", label: "Thesis" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-line">
      <div className="max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif italic text-lg tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          Amal Khan
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-accent transition-colors ${
                isActive(link.href) ? "text-accent" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-xs uppercase tracking-wider"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-1 text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="py-2"
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
