import React from 'react';

export const QuickCTA = () => {
  return (
    <section className="py-32 bg-[#f4f4f4] text-center border-t border-gray-200">
      <h2 className="text-3xl font-bold text-black mb-8">Ready to modernize your pharmacy?</h2>
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-black text-white px-8 py-4 rounded-md font-bold text-sm hover:bg-gray-800 transition-colors">
          Get Started Free
        </button>
        <button className="bg-white border border-gray-200 px-8 py-4 rounded-md font-bold text-black text-sm hover:bg-gray-50 transition-colors">
          Schedule a Demo
        </button>
      </div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        Free 14-day Pro trial. No credit card required.
      </p>
    </section>
  );
};
