/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HelpCircle, FileText, CheckCircle2, CloudLightning, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function ProcessTimeline() {
  const steps = [
    {
      step: 1,
      title: "Consultation",
      desc: "Connect instantly with our designated legal counselor or Advocate over the phone to analyze requirements."
    },
    {
      step: 2,
      title: "Documentation",
      desc: "Submit your basic documents online through our protected workspace or email safely."
    },
    {
      step: 3,
      title: "Verification",
      desc: "Our senior auditors and corporate secretaries audit your credentials to prevent any filing errors."
    },
    {
      step: 4,
      title: "Application",
      desc: "We draft formal resolutions, prepare MOA/AOA, and submit draft applications with state registrars."
    },
    {
      step: 5,
      title: "Processing",
      desc: "Filing division pays the government stamp taxes and schedules follow-up queries immediately."
    },
    {
      step: 6,
      title: "Government Approval",
      desc: "State regulators, Ministry of Corporate Affairs, or FSSAI authority inspect and grant green marks."
    },
    {
      step: 7,
      title: "Certificate",
      desc: "We deliver your official government Certificate, TM Register key, and Corporate Identification via email."
    },
    {
      step: 8,
      title: "Compliance Support",
      desc: "Our division sets up free periodic alerts to track your board filings, tax cycles, and audits."
    }
  ];

  return (
    <section id="process-timeline-wrapper" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Execution Roadmap
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Our 8-Step Filing Process
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            How we translate your requirements into legally approved government registration certificates with expert oversight at every milestone.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" id="timeline-grid">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className="relative p-5 bg-slate-50/70 border border-slate-100/80 rounded-2xl hover:bg-slate-50 hover:shadow-md transition-all group"
            >
              {/* Floating connector arrow on desktop */}
              {idx < 7 && (
                <div className="hidden lg:block absolute top-[44px] -right-3.5 translate-x-1.5 z-10 text-slate-200 group-hover:text-amber-400 group-hover:translate-x-3 transition-all duration-300">
                  <ArrowRight className="h-4.5 w-4.5 stroke-[2.5]" />
                </div>
              )}

              {/* Step number badge with glowing color */}
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-bold font-display text-sm tracking-wide shadow shadow-orange-500/20">
                  0{item.step}
                </span>
                
                {/* Visual completion icon depending on stage */}
                {item.step <= 3 ? (
                  <span className="text-emerald-500 text-[10px] font-bold bg-emerald-50 px-2 py-0.5 rounded">Setup</span>
                ) : item.step <= 6 ? (
                  <span className="text-indigo-500 text-[10px] font-bold bg-indigo-50 px-2 py-0.5 rounded">Filing</span>
                ) : (
                  <span className="text-amber-500 text-[10px] font-bold bg-amber-50 px-2 py-0.5 rounded-full animate-pulse">Delivered</span>
                )}
              </div>

              {/* Text content */}
              <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner for timeline */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 to-[#2e4463] p-6 text-center text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest block">No-Hassle Gurantee</span>
            <p className="text-sm text-slate-200 mt-1">Average filing execution time is under 12 corporate working days from start to final green stamp approval.</p>
          </div>
          <a
            href="tel:08069029400"
            className="rounded-xl bg-amber-400 text-slate-950 font-bold px-5 py-2.5 text-xs hover:bg-amber-300 transition-colors shrink-0"
          >
            Ask Counsel Timelines
          </a>
        </div>

      </div>
    </section>
  );
}
