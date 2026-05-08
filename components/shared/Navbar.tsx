import React from 'react';
import { Search } from 'lucide-react';

export const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="flex items-center gap-8">
      <span className="font-black text-xl tracking-tighter uppercase">PharmaCore</span>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
        <a href="#" className="text-black">Home</a>
        <a href="#" className="hover:text-black transition">Features</a>
        <a href="#" className="hover:text-black transition">Pricing</a>
        <a href="#" className="hover:text-black transition">Solutions</a>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <Search size={18} className="text-gray-400 cursor-pointer" />
      <button className="text-sm font-semibold px-4">Login</button>
      <button className="bg-black text-white text-[10px] font-bold px-5 py-2.5 rounded-sm uppercase tracking-widest">
        Get Started
      </button>
    </div>
  </nav>
);