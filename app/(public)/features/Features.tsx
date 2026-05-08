import React from 'react';
import { LayoutGrid, ShoppingCart, Globe, ChevronRight } from 'lucide-react';

export const Features = () => (
  <section className="py-24 px-8 max-w-7xl mx-auto">
    <div className="text-center mb-24 grayscale opacity-40 italic font-serif text-2xl flex flex-wrap justify-center gap-12">
      {["MEDIGROUP", "PHARMANEX", "CLINICORE", "BIOLABS", "GENEFLOW"].map(b => <span key={b}>{b}</span>)}
    </div>

    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Precision-Engineered Modules</h2>
        <p className="text-gray-500">A modular architecture designed for the complexity of clinical retail.</p>
      </div>
      <button className="flex items-center gap-2 text-sm font-bold border-b-2 border-black pb-1">
        View All Features <ChevronRight size={16} />
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Large Inventory Card */}
      <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="p-8 flex-1">
          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6"><LayoutGrid size={20} className="text-gray-300" /></div>
          <h3 className="text-xl font-bold mb-3">Automated Inventory</h3>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">Smart replenishment and multi-location syncing.</p>
          <div className="space-y-2">
            {["AI Demand Prediction", "Batch Tracking"].map(t => (
              <div key={t} className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 bg-[#0a0f12] p-8 flex items-center justify-center relative">
          <Globe size={120} className="text-blue-500/20 animate-pulse" />
        </div>
      </div>

      {/* POS Card */}
      <div className="bg-black text-white rounded-2xl p-8">
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6"><ShoppingCart size={20} className="text-white/40" /></div>
        <h3 className="text-xl font-bold mb-3">Swift POS</h3>
        <p className="text-gray-400 text-sm mb-12">Integrated insurance claims and 80% faster checkout.</p>
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex justify-between text-[9px] font-bold text-gray-500 mb-2 uppercase"><span>Current Session</span> <span>$382.48</span></div>
          <div className="h-1 w-full bg-white/10 rounded-full"><div className="h-full w-2/3 bg-blue-500" /></div>
        </div>
      </div>
    </div>
  </section>
);