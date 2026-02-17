"use client";

import { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/ideas', label: 'Ideas' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" className="flex items-center">
            <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="currentColor">
              <text x="0" y="24" className="font-bold text-xl tracking-tight">INTERVALS</text>
            </svg>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-sm font-medium tracking-wider hover:opacity-70 transition-opacity"
          >
            MENU
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-background transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <svg className="h-8 w-auto" viewBox="0 0 120 32" fill="currentColor">
              <text x="0" y="24" className="font-bold text-xl tracking-tight">INTERVALS</text>
            </svg>
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl md:text-6xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
