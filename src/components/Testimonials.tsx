/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, ShieldAlert, BadgeCheck, MessageSquare, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ebin Prabhu",
      text: "It was an amazing experience with Mrs. Priyanka Das. She responded quickly and clarified all my doubts. Thank you for your support.",
      stars: 5,
      role: "Founder, Prabhu Tech Services",
      date: "2 days ago",
      source: "Google Reviews Verified"
    },
    {
      name: "Rahul Verma",
      text: "Secured my trademark within 3 days under objection. Their division attorneys drafted absolute counter-filing explanations beautifully. Fully professional service.",
      stars: 5,
      role: "CEO, Verma Grocers Ltd",
      date: "1 week ago",
      source: "Google Reviews Verified"
    },
    {
      name: "Meenakshi Iyengar",
      text: "Applied for Pvt Ltd Company and FSSAI Food registration together. Best part is they handled ESIC eKYC automatically. Transparent pricing model.",
      stars: 5,
      role: "Managing Partner, Iyengar Cafe Group",
      date: "2 weeks ago",
      source: "Google Reviews Verified"
    }
  ];

  return (
    <section id="testimonials-section-wrapper" className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Client Feedbacks
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Loved By 5,00,000+ Founders
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Hear directly from the business owners, manufacturers, and trademark holders who scaled their startups using our integrated consulting.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" id="testimonials-grid">
          {reviews.map((r, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all relative flex flex-col justify-between"
            >
              {/* Star Rating display */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {Array.from({ length: r.stars }).map((_, sIdx) => (
                      <Star key={sIdx} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  
                  {/* google review brand badge */}
                  <span className="text-[10px] bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Google review
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic relative">
                  <Quote className="h-10 w-10 text-orange-200/20 absolute -top-5 -left-3 pointer-events-none" />
                  "{r.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold font-display text-sm">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 inline-flex items-center gap-1">
                    {r.name}
                    <BadgeCheck className="h-3.5 w-3.5 text-blue-500 fill-blue-50" />
                  </h4>
                  <p className="text-[10px] text-slate-400">{r.role}</p>
                </div>
                <span className="ml-auto text-[10px] text-slate-400">{r.date}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregated trust score indicator */}
        <div className="mt-12 bg-white rounded-2xl p-5 border border-slate-150/40 text-center shadow-sm max-w-lg mx-auto flex items-center justify-center gap-4">
          <div className="text-left">
            <span className="text-lg font-black font-display text-slate-800">4.9 / 5.0 Rating</span>
            <p className="text-[11px] text-slate-400 mt-0.5">Calculated across 6,490+ consolidated consumer ratings.</p>
          </div>
          <div className="h-10 w-px bg-slate-200" />
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-bold text-green-600 uppercase">99.7% Resolution Rate</span>
            <span className="text-[11px] text-slate-500">Fast-track response ticket cycles</span>
          </div>
        </div>

      </div>
    </section>
  );
}
