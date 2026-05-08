import React from 'react';
import { Globe, Share2, ShieldCheck, Lock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-350 mx-auto px-6 md:px-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-black tracking-tighter uppercase text-black mb-8">
              PHARMACORE
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-10">
              Setting the global standard for pharmaceutical management and clinical precision.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                <Globe size={18} />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-black mb-8">Product</h4>
            <ul className="space-y-5 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-black transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-black mb-8">Company</h4>
            <ul className="space-y-5 text-[13px] font-medium text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-black transition-colors">News</a></li>
            </ul>
          </div>

          {/* Compliance Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-black mb-8">Compliance</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 transition-hover hover:border-gray-300 group">
                <ShieldCheck size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                <span className="text-[12px] font-semibold text-gray-500 group-hover:text-black transition-colors uppercase tracking-wider">
                  SOC2 Type II Certified
                </span>
              </div>
              <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 transition-hover hover:border-gray-300 group">
                <Lock size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                <span className="text-[12px] font-semibold text-gray-500 group-hover:text-black transition-colors uppercase tracking-wider">
                  HIPAA Compliant Entity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.15em]">
            © 2024 PHARMACORE SYSTEMS INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};