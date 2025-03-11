'use client';

import './globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="en">
      <head>
        <title>SolutionBD</title>
        <meta name="description" content="Modern digital solutions for your business" />
      </head>
      <body className="bg-black text-white">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff0080]/20 via-[#7928ca]/20 to-black -z-10"></div>
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#ff0080]/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <Link href="/" className="text-3xl font-bold relative group">
                <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
                  SolutionBD
                </span>
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ff0080]/20 via-[#7928ca]/20 to-[#0061ff]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <Link href="/" className="nav-link">
                  Home
                </Link>
                <Link href="/about" className="nav-link">
                  About
                </Link>
                <Link href="/sell-buy" className="nav-link">
                  Sell & Buy
                </Link>
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
                <div className="flex items-center space-x-4">
                  <Link href="/login" className="button-secondary text-sm">
                    Login
                  </Link>
                  <Link href="/signup" className="button-primary text-sm">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`lg:hidden ${
                isMenuOpen
                  ? 'max-h-screen opacity-100 visible'
                  : 'max-h-0 opacity-0 invisible'
              } transition-all duration-300 ease-in-out overflow-hidden`}
            >
              <div className="flex flex-col space-y-4 py-4">
                <Link
                  href="/"
                  className="nav-link block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="nav-link block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/sell-buy"
                  className="nav-link block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sell & Buy
                </Link>
                <Link
                  href="/contact"
                  className="nav-link block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link
                    href="/login"
                    className="button-secondary text-sm w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="button-primary text-sm w-full text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-black/80 backdrop-blur-md border-t border-[#ff0080]/20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <p className="text-center">
              © 2025 <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent font-semibold">SolutionBD</span>. 
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
} 