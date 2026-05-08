/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Check } from 'lucide-react';

const Plan = ({ name, price, features, popular = false, buttonText }: any) => (
  <div 
    className={`relative flex flex-col p-10 rounded-4xl border transition-all duration-300 min-h-145 w-full
      ${popular 
        ? 'bg-black text-white border-black scale-[1.02] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] z-10' 
        : 'bg-white text-black border-gray-200'
      }`}
  >
    {/* Top Badge for Popular Plan */}
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] border border-gray-100 shadow-sm whitespace-nowrap">
        Most Popular
      </div>
    )}

    {/* Plan Name */}
    <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-8 ${popular ? 'text-gray-500' : 'text-gray-400'}`}>
      {name}
    </p>

    {/* Price */}
    <div className="flex items-baseline gap-1 mb-12">
      <span className="text-6xl font-bold tracking-tight">
        {price !== "Custom" ? `$${price}` : price}
      </span>
      {price !== "Custom" && (
        <span className={`text-sm font-medium ${popular ? 'text-gray-500' : 'text-gray-400'}`}>
          /mo
        </span>
      )}
    </div>

    {/* Features List */}
    <ul className="space-y-6 mb-12 grow">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex items-start gap-4 text-[13px] font-medium leading-tight">
          <div className={`mt-0.5 shrink-0 ${popular ? 'text-white' : 'text-green-500'}`}>
            <Check size={16} strokeWidth={3} />
          </div>
          <span className={popular ? 'text-gray-200' : 'text-gray-700'}>{f}</span>
        </li>
      ))}
    </ul>

    {/* Action Button */}
    <button 
      className={`w-full py-4 rounded-xl text-[13px] font-bold transition-all
        ${popular 
          ? 'bg-white text-black hover:bg-gray-100' 
          : 'bg-white text-black border-2 border-black hover:bg-black hover:text-white'
        }`}
    >
      {buttonText}
    </button>
  </div>
);

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "0",
      buttonText: "Start for Free",
      features: ["1 Registered User", "100 Product SKU Limit", "Basic POS Features"]
    },
    {
      name: "Professional",
      price: "449",
      buttonText: "Get Pro Now",
      popular: true,
      features: ["Up to 5 Branches", "AI Inventory Forecasting", "Advanced Analytics", "Priority 24/7 Support"]
    },
    {
      name: "Growth",
      price: "199",
      buttonText: "Select Plan",
      features: ["Single Branch / Unlimited Users", "Full Inventory Engine", "Standard POS"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      buttonText: "Contact Sales",
      features: ["Unlimited Global Scale", "Full API & Webhook Access", "Dedicated Account Manager"]
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-350 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-black mb-8 tracking-tight">Scalable Plans</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Flexible options for every stage of your practice, from solo practitioners to large networks.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};