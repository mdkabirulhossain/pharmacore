"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Contact = () => {
  return (
    <section className="py-24 bg-white px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black mb-6">
              Connect With Us
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
              Expert Support for <br className="hidden sm:block" /> Your Operations
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Whether you're scaling a national chain or optimizing a local practice, our team is ready to assist with technical implementation and strategic growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {/* Contact Method: Email */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                  <Mail size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Email Us</h3>
                  <p className="text-lg font-bold text-black">support@pharmacore.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </div>

              {/* Contact Method: Phone */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#f4f4f4] rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                  <Phone size={22} className="text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Call Center</h3>
                  <p className="text-lg font-bold text-black">+1 (888) PHARMA-01</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              {/* Contact Method: Location */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-[#f4f4f4] rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin size={22} className="text-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Headquarters</h3>
                  <p className="text-lg font-bold text-black">Silicon Valley, CA</p>
                  <p className="text-sm text-gray-500 mt-1">452 Innovation Way, Suite 200</p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-[#0a0f12] rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <MessageSquare size={120} strokeWidth={1} />
              </div>
              <h4 className="text-xl font-bold mb-4 relative z-10">24/7 Technical Support</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                Our Professional and Enterprise clients receive dedicated account managers and round-the-clock technical assistance.
              </p>
              <button className="text-[11px] font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-all relative z-10">
                Visit Help Center
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#fdfdfd] rounded-4xl border border-gray-100 p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <Input 
                    type="text" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Business Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@pharmacy.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <Input 
                  type="text" 
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <Textarea 
                  placeholder="How can we help your business?"
                />
              </div>

              <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                Send Message <Send size={14} />
              </button>
              
              <p className="text-[10px] text-gray-400 text-center sm:text-left">
                By submitting this form, you agree to our <span className="text-black font-bold cursor-pointer">Privacy Policy</span>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

