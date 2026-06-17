/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, Briefcase, Handshake, CheckSquare, Quote, Star } from 'lucide-react';

export default function CEOSection() {
  const points = [
    "Pioneered online ODR (Online Dispute Resolution) compliance framework for SMEs",
    "Advocate with over 18 years of corporate legal filings and regulatory liaison experience",
    "Recipient of prestigious National Legal-Tech Innovation awards for scaling corporate access",
    "Overvised 5,00,000+ customer portfolios with a 99.4% trademark approval coefficient"
  ];

  return (
    <section id="ceo-section-wrapper" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column Left: Beautiful CEO Portrait graphic illustration */}
          <div className="col-span-1 lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm w-full">
              {/* background design block */}
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transform rotate-3 scale-102 opacity-10" />
              <div className="absolute inset-0 bg-slate-900 rounded-3xl transform -rotate-2 scale-101 opacity-5" />

              <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-slate-100 p-8 border border-slate-800 shadow-xl self-center text-center">
                
                {/* Simulated professional CEO avatar illustration or profile image */}
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 p-1 flex items-center justify-center mb-4 shadow">
                  <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center text-3xl font-bold font-display text-white">
                    PD
                  </div>
                </div>

                <div className="flex justify-center text-amber-400 mb-1">
                  <Star className="h-3 w-3 fill-amber-400" />
                  <Star className="h-3 w-3 fill-amber-400" />
                  <Star className="h-3 w-3 fill-amber-400" />
                  <Star className="h-3 w-3 fill-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                </div>

                <h3 className="text-xl font-bold text-white font-display">Priyanka Das, advocate</h3>
                <p className="text-xs text-orange-400 font-semibold tracking-wider uppercase mt-1">Chief Legal Officer &amp; MD</p>
                <div className="my-4 h-px bg-slate-800" />

                <div className="text-left text-xs bg-slate-800/50 p-3 rounded-xl border border-slate-700/60 leading-relaxed text-slate-300 relative">
                  <Quote className="h-6 w-6 text-orange-400/20 absolute -top-1 -left-1" />
                  "Our sole mission is to democratize complex corporate filing workflows, reducing excessive legal expenditures to support building a prosperous, self-reliant India."
                </div>

                <p className="text-[10px] text-slate-500 mt-3 uppercase tracking-widest">Counsel License NO: WB-LF/492/2008</p>
              </div>
            </div>
          </div>

          {/* Column Right: Story and accomplishments */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              Leadership &amp; Story
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              Transforming Corporate Filings Into A Seamless Tech Experience
            </h2>
            
            <p className="text-sm text-slate-600 leading-relaxed">
              Founded over a decade ago, <strong>Online Legal India™</strong> emerged with a vision to eliminate bureaucratic friction for Indian entrepreneurs. We noticed that high retainer fees for traditional legal consultants left small-scale startups exposed or unincorporated. 
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              By combining legal expertise with custom process flows, we ensure every application goes through three stages of rigorous compliance checks before standard submittal, achieving one of the highest registration rates in the country.
            </p>

            {/* Achievements List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Core Accomplishments</span>
              <div className="grid grid-cols-1 gap-3">
                {points.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <CheckSquare className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs text-slate-600 leading-normal font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
