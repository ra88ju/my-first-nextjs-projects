'use client';

import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <div className="flex flex-col md:flex-row justify-between items-center h-20">
              <Link href="/" className="text-3xl font-bold relative group">
                <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
                  SolutionBD
                </span>
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#ff0080]/20 via-[#7928ca]/20 to-[#0061ff]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></span>
              </Link>
              <div className="flex items-center space-x-8">
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
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-black/80 backdrop-blur-md border-t border-[#ff0080]/20">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <p className="text-center">
              © 2024 <span className="bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent font-semibold">SolutionBD</span>. 
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
} 