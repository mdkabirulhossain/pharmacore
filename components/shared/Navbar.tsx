/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Solutions', href: '/solutions' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle window resize to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-360 mx-auto px-4 sm:px-6 md:px-10 h-20 flex items-center justify-between relative">

        {/* LEFT: Logo */}
        <div className="shrink-0 z-10">
          <Link href="/" className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-black">
            PHARMACORE
          </Link>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 gap-6 lg:gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] transition-colors py-7 ${isActive ? 'font-bold text-black' : 'font-medium text-gray-500 hover:text-black'
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-5 left-0 w-full h-0.5 bg-black"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 z-10">
          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            <button className="text-gray-400 hover:text-black transition-colors p-2">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button className="text-[13px] font-semibold text-gray-600 hover:text-black">
              Login
            </button>
          </div>

          <button className="bg-black text-white text-[10px] sm:text-[11px] font-bold px-4 sm:px-6 py-2.5 rounded-full uppercase tracking-wider hover:bg-gray-800 transition-all whitespace-nowrap">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Slide Down Animation) */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm transition-colors ${isActive ? 'font-bold text-black' : 'font-medium text-gray-500 hover:text-black'
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
          <hr className="border-gray-100" />
          <div className="flex items-center justify-between pt-2">
            <button className="text-sm font-semibold text-gray-600 hover:text-black">Login</button>
            <button className="text-gray-400 hover:text-black">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};