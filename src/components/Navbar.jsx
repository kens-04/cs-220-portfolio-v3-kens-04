"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full">
      <nav
        className={`transition-all duration-300 flex items-center justify-between container rounded-b-2xl mt-0
          ${scrolled ? "bg-black/40 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}
        `}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-bold text-xl text-accent tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          MyPortfolio
        </Link>
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-xl text-base font-medium hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-black/10 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md shadow-lg rounded-b-2xl px-4 pt-2 pb-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-xl text-base font-medium hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      )}
    </header>
  );
}
