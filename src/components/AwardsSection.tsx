/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, ShieldAlert, CheckCircle, Star } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    {
      title: "ISO 9001:2015 Cert",
      org: "Joint Accreditation Council",
      desc: "Recognizing high standards of customer client support and data safety protocols."
    },
    {
      title: "TEDx Corporate Guest",
      org: "TEDx India Forum",
      desc: "Delivering talks on simplifying the legal landscape for small-scale micro enterprises."
    },
    {
      title: "Zee Business Elite",
      org: "Zee Media Network",
      desc: "Voted #1 fast-growing online ODR provider in standard consumer dispute mitigation."
    },
    {
      title: "Startup India Award",
      org: "DPIIT, Govt of India",
      desc: "Awarded premium fintech & legaltech affiliate registry access license."
    }
  ];

  return (
    <section id="awards-section-wrapper" className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Short title line */}
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
            Accreditation &amp; Media Coverage
          </span>
          <h2 className="mt-2 text-2xl font-bold font-display text-slate-800 tracking-tight">
            Recognized &amp; Decorated Nationally
          </h2>
        </div>

        {/* Awards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="awards-grid">
          {awards.map((aw, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-5 border border-slate-150/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* background logo decoration */}
              <div className="absolute -bottom-5 -right-5 text-slate-50 group-hover:text-amber-500/5 transition-colors">
                <Award className="h-20 w-20" />
              </div>

              <div>
                <span className="p-2 bg-amber-50 rounded-lg text-amber-600 inline-block mb-3">
                  <Award className="h-5 w-5" />
                </span>
                
                <h3 className="text-sm font-bold text-slate-900 font-display">
                  {aw.title}
                </h3>
                
                <span className="text-[10px] font-semibold text-orange-600 block mt-0.5 uppercase tracking-wide">
                  {aw.org}
                </span>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed relative z-10">
                  {aw.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 flex items-center gap-1 text-[10px] text-green-600 font-bold">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span>Verified Badge Status</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
