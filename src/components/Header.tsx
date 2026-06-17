/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, ShieldCheck, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenRegister: () => void;
  onScrollToFAQ: () => void;
}

export default function Header({ onOpenMenu, onOpenRegister, onScrollToFAQ }: HeaderProps) {
  return (
    <header 
      id="main-app-header"
      className="sticky top-0 z-40 bg-[#f3df9c] shadow-md border-b border-amber-200/50 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand Logo & Subtitle */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            {/* Logo Text with High design quality */}
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-display flex items-center gap-1.5 leading-none">
              <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-sm sm:text-base font-bold">ONLINE</span>
              <span className="text-slate-900">LEGAL INDIA™</span>
            </h1>
            
            {/* Subtitle */}
            <span className="text-[9px] sm:text-[11px] font-bold text-slate-800 uppercase tracking-widest mt-1 opacity-85 leading-none">
              ODR • TM • Registrations & Compliance
            </span>
          </div>
        </div>

        {/* Action Widgets & Menu Icon */}
        <div className="flex items-center gap-3">
          {/* Quick Consultation desk button for desktop */}
          <button
            onClick={onOpenRegister}
            id="header-apply-btn"
            className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 transition-all hover:scale-[1.03] shadow"
          >
            <span>Start Registration</span>
          </button>

          <button
            onClick={onScrollToFAQ}
            id="header-faq-btn"
            className="hidden sm:inline-flex items-center gap-1 text-slate-800 hover:text-slate-900 hover:bg-amber-300/50 bg-transparent rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all cursor-pointer"
          >
            <HelpCircle className="h-4 w-4 text-slate-700" /> FAQ Accordion
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={onOpenMenu}
            id="hamburger-menu-trigger"
            aria-label="Toggle Navigation Menu"
            className="flex items-center gap-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white hover:text-orange-300 px-3 py-2 text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Menu className="h-4.5 w-4.5 text-orange-400 stroke-[2.5]" />
            <span className="hidden sm:inline tracking-wider uppercase text-xs">Services Directory</span>
          </button>
        </div>
        
      </div>
    </header>
  );
}
