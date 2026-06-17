/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Sparkles, Compass, CheckCircle, Search, HelpCircle, Star } from 'lucide-react';
import { CORE_SERVICES_LIST } from '../types';

interface HeroProps {
  onOpenRegister: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function Hero({ onOpenRegister, onSelectService }: HeroProps) {
  const [quickSearch, setQuickSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = CORE_SERVICES_LIST.filter(item => 
    item.toLowerCase().includes(quickSearch.toLowerCase())
  ).slice(0, 5);

  const handleSelectService = (name: string) => {
    setQuickSearch(name);
    setShowSuggestions(false);
    onSelectService(name);
  };

  return (
    <section 
      id="hero-section"
      className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white overflow-hidden py-12 md:py-20 border-b border-indigo-950/40"
    >
      {/* Absolute Decorative Grid Backdrops */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35" />
      
      {/* Elegant Radial Light Circles */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Conversion Messaging */}
        <div className="col-span-1 lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-800/80 px-3.5 py-1.5 text-xs text-slate-300 border border-slate-700 mx-auto lg:mx-0">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
            <span className="font-semibold text-orange-400">Government Startup-India Recognized Provider</span>
          </div>

          {/* Big display title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Business Registration <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-amber-300 bg-clip-text text-transparent">
              &amp; Compliance Services
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            India’s fastest growing legal and compliance service platform. Trusted by half a million founders, corporate lawyers, and retail companies.
          </p>

          {/* Quick Registration bar / Input search */}
          <div className="max-w-md mx-auto lg:mx-0 relative pt-2">
            <label className="block text-left text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-1.5">
              Which service do you need?
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Search className="h-4.5 w-4.5" />
              </span>
              <input
                type="text"
                id="hero-quick-search"
                value={quickSearch}
                onChange={(e) => {
                  setQuickSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="e.g. Trademark, Pvt Ltd, GST..."
                className="w-full bg-slate-800/90 border border-slate-700 focus:border-orange-400 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-400 outline-none transition-all shadow-md focus:ring-1 focus:ring-orange-400 font-sans"
              />
              {quickSearch && (
                <button 
                  onClick={() => { setQuickSearch(''); setShowSuggestions(false); }} 
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Floating Suggestions */}
            {showSuggestions && quickSearch && (
              <div className="absolute left-0 right-0 z-20 mt-1 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl p-1 max-h-56 overflow-y-auto custom-scrollbar">
                {filteredSuggestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectService(item)}
                    className="w-full text-left rounded-lg px-3 py-2 text-xs hover:bg-orange-500 hover:text-white transition-colors block font-semibold text-slate-200"
                  >
                    {item}
                  </button>
                ))}
                {filteredSuggestions.length === 0 && (
                  <div className="p-3 text-center text-slate-500 text-xs">
                    No service matching "{quickSearch}". Try "GST".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Target call-to-action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
            <button
              onClick={onOpenRegister}
              id="hero-register-now-btn"
              className="w-full sm:w-auto rounded-xl bg-orange-500 hover:bg-orange-600 px-8 py-3.5 text-sm font-black tracking-wide uppercase shadow-lg shadow-orange-500/20 text-white transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4.5 w-4.5 animate-spin-slow text-amber-200" />
              <span>Register Now</span>
            </button>
            <a
              href="#services-section-wrapper"
              id="hero-explore-btn"
              className="w-full sm:w-auto text-center rounded-xl border border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors cursor-pointer"
            >
              Explore Services
            </a>
          </div>

          {/* Live Customer Checkboxes */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
            <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-green-400" /> Govt Certified Agents</span>
            <span className="flex items-center gap-1"><Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 4.9 Google Rating</span>
            <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-blue-400" /> Legal Privilege Guarantee</span>
          </div>
        </div>

        {/* Right Side: Professional Legal SVG Illustration */}
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
          <div 
            id="hero-illustration-container"
            className="relative w-full max-w-sm aspect-square bg-[#1b2b41]/65 border border-indigo-900/50 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top decoration vector graphic of scale / pillars */}
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-orange-400 tracking-widest bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-full uppercase">
                ODR PORTAL
              </span>
              <div className="flex gap-1.5 self-center">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Custom SVG Legal Scales */}
            <div className="my-3 flex justify-center">
              <svg 
                className="w-40 h-40 text-orange-400/90" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Scale Pillar */}
                <line x1="12" y1="2" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
                <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="2" />
                
                {/* Beam */}
                <line x1="5" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" />
                
                {/* Left Pan */}
                <line x1="5" y1="7" x2="2" y2="15" />
                <line x1="5" y1="7" x2="8" y2="15" />
                <path d="M 2 15 Q 5 18 8 15 Z" fill="rgba(249, 115, 22, 0.15)" stroke="currentColor" />
                
                {/* Right Pan */}
                <line x1="19" y1="7" x2="16" y2="15" />
                <line x1="19" y1="7" x2="22" y2="15" />
                <path d="M 16 15 Q 19 18 22 15 Z" fill="rgba(249, 115, 22, 0.15)" stroke="currentColor" />
                
                {/* Balance point indicator */}
                <polygon points="12,4 10,7 14,7" fill="currentColor" />
              </svg>
            </div>

            {/* Custom simulated real-time desk stats in widget form */}
            <div className="bg-slate-900/95 border border-slate-800 rounded-xl p-3.5 shadow-md">
              <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                <span>Active Trademark Filings</span>
                <span className="text-green-400 font-bold font-mono">LIVE • 4927</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-green-400 rounded-full" style={{ width: '85%' }} />
              </div>
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                Processing rate: 4 minutes per Company Incorporation
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
