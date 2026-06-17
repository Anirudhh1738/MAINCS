/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, Shield, Briefcase } from 'lucide-react';

export default function BrandPartners() {
  const partners = [
    { name: "TATA", sub: "Enterprise clients", style: "bg-blue-900" },
    { name: "PAYTM", sub: "Payment ecosystem partner", style: "bg-sky-500" },
    { name: "ICICI BANK", sub: "Corporate Escrow desk", style: "bg-amber-700" },
    { name: "HDFC BANK", sub: "Compliance Gateway", style: "bg-indigo-900" },
    { name: "STATE BANK OF INDIA", sub: "Govt-Treasury channel", style: "bg-sky-600" }
  ];

  return (
    <section id="brand-partners-wrapper" className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Caption */}
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-6 block">
          Trusted Banking &amp; Enterprise Transaction Partners
        </span>

        {/* Logos Container */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center max-w-5xl mx-auto">
          {partners.map((p, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 transition-all text-center group"
            >
              <span className="text-sm font-black font-display text-white tracking-widest group-hover:text-orange-400 transition-colors block">
                {p.name}
              </span>
              <span className="text-[9px] text-slate-500 group-hover:text-slate-400 transition-colors block mt-0.5">
                {p.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
