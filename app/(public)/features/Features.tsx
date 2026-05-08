import React from 'react';
import {
  LayoutGrid,
  ShoppingCart,
  BarChart3,
  ShieldCheck,
  Lock,
  ChevronRight,
  Check
} from 'lucide-react';

export const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Partners Section - Matched to image_0db37e.png */}
        <div className="text-center mb-20 sm:mb-32">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black mb-10 sm:mb-12">
            Institutional Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 opacity-30 grayscale italic font-serif text-2xl sm:text-3xl tracking-tighter text-[#606060] font-bold">
            <span>MEDIGROUP</span>
            <span>PHARMANEX</span>
            <span>CLINICORE</span>
            <span>BIOLABS</span>
            <span>GENEFLOW</span>
          </div>
        </div>

        {/* Heading Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Precision-Engineered <br className="hidden sm:block" /> Modules
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              A modular architecture designed for the complexity of clinical retail. We handle the mechanics so you can focus on patient care.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1 mb-2 hover:gap-3 transition-all whitespace-nowrap text-black">
            View All Features <ChevronRight size={18} />
          </button>
        </div>

        {/* Grid Layout - Matched to screen.png */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Automated Inventory (Large) */}
          <div className="md:col-span-12 lg:col-span-8 bg-[#fdfdfd] rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[420px] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
                <LayoutGrid size={24} className="text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">Automated Inventory</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                Smart replenishment, expiration tracking, and multi-location syncing with real-time stock alerts.
              </p>
              <div className="space-y-3">
                {["AI Demand Prediction", "Batch Tracking & Serialization"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.15em]">
                    <div className="bg-black rounded-full p-0.5">
                      <Check size={10} className="text-white" strokeWidth={4} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-[#0a0f12] relative flex items-center justify-center overflow-hidden p-10 min-h-[320px] md:min-h-0">
              {/* Abstract Globe UI */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 border border-blue-500/10 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/[0.03] rounded-full blur-3xl"></div>
                <div className="w-36 h-36 sm:w-48 sm:h-48 border border-blue-400/20 rounded-full animate-pulse"></div>
                <div className="absolute w-full h-px bg-blue-500/10 rotate-45"></div>
                <div className="absolute w-full h-px bg-blue-500/10 -rotate-45"></div>
                <div className="absolute w-2 h-2 bg-blue-400 rounded-full blur-[2px] top-1/4 left-1/4 animate-ping"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Swift POS (Dark) */}
          <div className="md:col-span-6 lg:col-span-4 bg-black text-white rounded-3xl p-8 sm:p-10 flex flex-col min-h-[420px] shadow-2xl">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
              <ShoppingCart size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Swift POS</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-12">
              Reduced checkout times by 80% with integrated insurance claims.
            </p>
            <div className="mt-auto bg-white/[0.03] rounded-2xl p-6 border border-white/10">
              <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">
                <span>Active Session</span>
                <span className="text-white">$382.48</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-xs font-bold border-b border-white/5 pb-2">
                  <span className="text-gray-400">Insulin Lantus Solostar</span>
                  <span>$382.48</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>TOTAL</span>
                  <span>$382.48</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Clinical Analytics (Synchronized with Card 1) */}
          <div className="md:col-span-6 lg:col-span-4 bg-[#fdfdfd] rounded-3xl border border-gray-100 p-8 sm:p-10 min-h-[420px] flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)]">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
              <BarChart3 size={24} className="text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Clinical Analytics</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Deep insights into revenue cycles, patient adherence, and performance.
            </p>
            <div className="mt-auto bg-white rounded-2xl p-6 border border-gray-100 shadow-inner">
              <div className="flex items-end gap-2 h-20">
                {[30, 50, 40, 90, 60, 45, 75].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-all duration-700 ${i === 3 ? 'bg-black' : 'bg-gray-100'}`}
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-[8px] font-bold text-gray-300 uppercase tracking-widest">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
              </div>
            </div>
          </div>

          {/* Card 4: Security (Wide) */}
          <div className="md:col-span-12 lg:col-span-8 bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-10 min-h-[300px]">
            <div className="max-w-md text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-4">Clinical-Grade Security</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our system is audited for zero-error tolerance. Security is not a feature; it is our foundation. HIPAA, GDPR, and AES-256 compliant.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-100">
                  <ShieldCheck size={28} className="text-gray-400" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">HIPAA</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 border border-gray-100">
                  <Lock size={28} className="text-gray-400" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AES-256</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};