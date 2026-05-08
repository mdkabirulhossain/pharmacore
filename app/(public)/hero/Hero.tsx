"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 px-4 text-center bg-[#f4f4f4] overflow-hidden">
      <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200 mb-8">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">V.2.0 is now live</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-[1.1] tracking-tight text-gray-900 mb-6">
        The Clinical Operating System for <span className="italic font-serif font-light text-gray-500">Modern Pharmacies</span>
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
        PharmaCore bridges clinical precision and operational efficiency. Manage inventory, POS, and analytics through a sterile, high-performance interface.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-24">
        <button className="bg-black text-white px-8 py-4 rounded-md font-bold text-sm hover:bg-gray-800 transition-colors">Get Started Free</button>
        <button className="bg-white border border-gray-200 px-8 py-4 rounded-md font-bold text-sm hover:bg-gray-50 transition-colors text-black">Book a Demo</button>
      </div>

      {/* Dashboard Graphic */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        <div className="absolute -top-6 -left-2 md:-left-8 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 z-10">
          <div className="bg-gray-100 p-2 rounded-md"><ShieldCheck size={18} className="text-gray-400" /></div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase text-gray-400">HIPAA Compliant</p>
            <p className="text-[11px] font-bold">Level 1 Encryption</p>
          </div>
        </div>

        <div className="bg-[#0a0f12] rounded-2xl p-4 shadow-2xl border-10 border-[#1a1f22]">
          <div className="aspect-video bg-linear-to-br from-[#0d1418] to-[#121c22] rounded-lg border border-white/5 relative overflow-hidden">
            {/* Abstract Dashboard UI */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="p-8 grid grid-cols-2 gap-4 h-full">
              <div className="border border-white/10 rounded-lg p-4 bg-white/5">
                <div className="h-2 w-20 bg-white/20 rounded mb-4" />
                <div className="flex items-end gap-1 h-32">
                  {[40, 60, 45, 90, 65].map((h, i) => <div key={i} className="flex-1 bg-blue-500/30 rounded-t-sm" style={{ height: `${h}%` }} />)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-6 -right-2 md:-right-8 bg-black text-white p-6 rounded-xl shadow-2xl text-left border border-white/10 z-10">
          <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-1">Efficiency Gain</p>
          <p className="text-4xl font-bold">+42%</p>
          <div className="flex items-center gap-1 mt-2 text-green-400 text-[10px] font-bold uppercase">
            <CheckCircle2 size={12} /> Verified 2024 Audit
          </div>
        </div>
      </div>
    </section>
  );
};