/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldCheck, ThumbsUp, HeartHandshake, Smile, FileCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: "5 Lakh+",
      label: "Happy Paid Customers",
      desc: "Small business founders, retail operators, and global partnerships incorporated.",
      icon: <Smile className="h-6 w-6 text-white" />
    },
    {
      value: "6,000+",
      label: "Verified Google Reviews",
      desc: "With a direct certificate rating of 4.9 Stars on legal advisory and compliance.",
      icon: <FileCheck className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section id="stats-section-wrapper" className="py-12 bg-emerald-700 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-650 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-48 h-48 bg-emerald-800 rounded-full blur-2xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Block description */}
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-200">
              <ShieldCheck className="h-3.5 w-3.5" /> India's Trusted Legal Division
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display leading-tight">
              Scale Your Enterprise with Government Confirmed Compliance Support
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl mx-auto md:mx-0 font-light">
              We leverage modern technology frameworks to automate paperwork checks, allowing our legal advocates and certified accountants to focus on optimizing your tax brackets and trademark assets.
            </p>
          </div>

          {/* Right side stats blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-emerald-800/60 p-6 rounded-2xl border border-emerald-600/40 hover:bg-emerald-800/80 transition-colors shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-xl bg-emerald-600/60 inline-block">
                    {stat.icon}
                  </span>
                  
                  {/* Google Reviews special badges */}
                  {idx === 1 && (
                    <div className="flex items-center text-amber-350 bg-slate-900/40 px-1.5 py-0.5 rounded text-[10px]">
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    </div>
                  )}
                </div>

                <div className="text-3xl font-black font-display tracking-tight text-white">
                  {stat.value}
                </div>
                
                <h4 className="text-sm font-bold text-emerald-250 mt-1">
                  {stat.label}
                </h4>
                
                <p className="text-xs text-emerald-100/75 mt-1 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
