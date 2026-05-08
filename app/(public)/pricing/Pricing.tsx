/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Plan = ({ name, price, features, popular = false }: any) => (
  <div className={`relative p-8 rounded-2xl border transition-all ${popular ? 'bg-black text-white border-black scale-105 z-10 shadow-2xl' : 'bg-white text-black border-gray-100'}`}>
    {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-gray-200">Next Popular</span>}
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">{name}</p>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-4xl font-bold">{price !== "Custom" ? `$${price}` : price}</span>
      {price !== "Custom" && <span className="text-xs text-gray-500">/mo</span>}
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-3 text-[11px] font-semibold leading-tight">
          <CheckCircle2 size={14} className={popular ? "text-blue-400" : "text-green-500"} /> {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-md text-[10px] font-bold uppercase tracking-widest border ${popular ? 'bg-white text-black' : 'bg-white border-gray-200'}`}>
      {name === "Starter" ? "Start for Free" : "Select Plan"}
    </button>
  </div>
);

export const Pricing = () => (
  <section className="py-24 bg-[#f4f4f4] px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Scalable Plans</h2>
      <p className="text-gray-500">Flexible options for every stage of your practice.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
      <Plan name="Starter" price="0" features={["1 Registered User", "100 Product SKU Limit"]} />
      <Plan name="Professional" price="449" popular={true} features={["Up to 5 Branches", "AI Inventory Forecasting", "Advanced Analytics", "Priority 24/7 Support"]} />
      <Plan name="Growth" price="199" features={["Single Branch | Unlimited Users", "Full Inventory Engine"]} />
      <Plan name="Enterprise" price="Custom" features={["Unlimited Global Scale", "Dedicated Account Manager"]} />
    </div>
  </section>
);