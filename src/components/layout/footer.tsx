"use client";

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'HOMEPAGE' },
  { href: '/about', label: 'ABOUT' },
  { href: '/team', label: 'TEAM' },
  { href: '/portfolio', label: 'PORTFOLIO' },
  { href: '/ideas', label: 'IDEAS' },
  { href: '/careers', label: 'CAREERS' },
  { href: '/contact', label: 'CONTACT' },
];

const socialLinks = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '→' },
  { href: 'https://twitter.com', label: 'Twitter', icon: '→' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '→' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="px-6 md:px-10 py-16 border-b border-border">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground mb-4">GET INSPIRED</p>
          <h3 className="text-2xl font-bold mb-8">JOIN INTERVALS IDEAS</h3>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 bg-transparent border-b border-border px-0 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="text-sm font-medium tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Navigation */}
          <div>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">SOCIAL</p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="text-sm font-medium hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-sm text-muted-foreground mb-4">LOCATION</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intervals is headquartered in San Francisco, building companies that shape the future of technology, health, and sustainability.
            </p>
            <Link 
              href="https://maps.google.com"
              target="_blank"
              className="inline-block mt-4 text-sm hover:opacity-70 transition-opacity"
            >
              123 Innovation Street<br />
              San Francisco, CA 94105
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-10 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Intervals. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
