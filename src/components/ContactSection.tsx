/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Users, ShieldAlert, HeartHandshake } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact-promo-section" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Styled green box */}
        <div 
          id="contact-green-box"
          className="bg-emerald-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden text-center sm:text-left"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600 rounded-full blur-2xl opacity-50" />
          <div className="absolute -bottom-10 left-10 w-32 h-32 bg-emerald-800 rounded-full blur-xl opacity-45" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3 py-1 text-xs font-semibold text-emerald-200">
                <HeartHandshake className="h-3.5 w-3.5" /> Instant Desk Connection
              </div>
              
              {/* Title exact as requested */}
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                How We Can Help You?
              </h2>
              
              {/* Text exact as requested */}
              <p className="text-xs sm:text-sm text-emerald-100 font-light max-w-lg leading-relaxed">
                Connect with our experts for more information on trademark searches, company conversion laws, or state taxation codes.
              </p>
            </div>

            {/* Contact Now button triggers phone call */}
            <div className="shrink-0 pt-2 sm:pt-0">
              <a
                href="tel:08069029400"
                id="contact-box-tel"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black tracking-wide uppercase px-6 py-3.5 text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="h-4.5 w-4.5 text-slate-950 animate-pulse" />
                <span>Contact Now</span>
              </a>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
}
