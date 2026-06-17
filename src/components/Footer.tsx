/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Landmark, ShieldCheck, Download, ExternalLink, Bookmark } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

export default function Footer({ onSelectService }: FooterProps) {
  // Ordered services dictionary as specified
  const bottomServices = {
    "Business Registration": [
      "Pvt Ltd Incorporation",
      "LLP Registration",
      "One Person Company (OPC)",
      "Public Limited Company",
      "Section 8 Company Incorporation"
    ],
    "Government Licenses": [
      "FSSAI Registration & License",
      "Import Export Code (IEC)",
      "BIS Certificate filing"
    ],
    "IP Registration": [
      "Trademark Registration",
      "Trademark Renewal",
      "Trademark Objection",
      "Copyright Registration"
    ],
    "GST Services": [
      "GST Registration",
      "GST Filing",
      "GST Modification",
      "GST Cancellation"
    ],
    "Accounting & Tax": [
      "Bookkeeping Services",
      "Tax Planning Advisory",
      "PF/ESIC Registrations"
    ],
    "IT & Digital Marketing": [
      "Website Development",
      "App Development",
      "Google My Business setup",
      "Search Engine Optimization (SEO)",
      "Social Media Marketing"
    ]
  };

  const handleLinkClick = (name: string) => {
    onSelectService(name);
    // Smooth scroll back to top to let the register modal catch attention
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section-wrapper" className="bg-[#1b2b41] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Bottom Services Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800"
          id="bottom-services-grid"
        >
          {Object.entries(bottomServices).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-white text-xs font-black uppercase tracking-wider font-display flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleLinkClick(item)}
                      className="text-left text-[11px] text-slate-400 hover:text-orange-400 hover:underline transition-colors block cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Corporate download apps, social connects */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800">
          
          {/* Brand profile */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-lg font-black text-white tracking-widest font-display">
              ONLINE LEGAL INDIA™
            </h3>
            <p className="text-xs text-slate-400 max-w-sm">
              ODR • TM • Registrations &amp; Compliance division. Fast-track automated legal and corporate support networks.
            </p>
          </div>

          {/* Simulated App store badges strictly matching specs */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 select-none">Filing Mobile App:</span>
            
            {/* Play store simulated badge */}
            <a 
              href="https://play.google.com/store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-white rounded-xl px-3.5 py-1.5 text-xs font-sans transition-all duration-150 shadow"
            >
              <Download className="h-3.5 w-3.5 text-green-400" />
              <div className="text-left">
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 text-left leading-none">Get it on</span>
                <span className="font-bold text-[11px] leading-tight text-left">Google Play</span>
              </div>
            </a>

            {/* App store simulated badge */}
            <a 
              href="https://www.apple.com/app-store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-950 text-white rounded-xl px-3.5 py-1.5 text-xs font-sans transition-all duration-150 shadow"
            >
              <Download className="h-3.5 w-3.5 text-sky-400" />
              <div className="text-left">
                <span className="block text-[8px] uppercase tracking-wider text-slate-400 text-left leading-none">Download on</span>
                <span className="font-bold text-[11px] leading-tight text-left">App Store</span>
              </div>
            </a>
          </div>

          {/* Social icons exact as requested */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-400 select-none">Our Connects:</span>
            <div className="flex gap-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter/X"
                className="h-9 w-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-[#354f73] hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Brand Contact details summary */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 border-b border-slate-800 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-white font-bold block">Headquarters Address</span>
            <p>Kariwala Towers, Salt Lake Sector V, Kolkata, India</p>
          </div>
          <div className="space-y-1">
            <span className="text-white font-bold block">Filing Support Hotline</span>
            <a href="tel:08069029400" className="hover:text-white hover:underline block font-semibold text-orange-400">08069029400</a>
          </div>
          <div className="space-y-1">
            <span className="text-white font-bold block">Legal Division Email</span>
            <a href="mailto:info@onlinelegalindia.com" className="hover:text-white hover:underline block">info@onlinelegalindia.com</a>
          </div>
        </div>

        {/* Disclaimer & Notice exact as requested */}
        <div className="pt-8 text-center space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-3xl mx-auto italic" id="legal-disclaimer">
            “This website is privately operated and not affiliated with any government entity.” Online Legal India is a custom fintech platform assisting with the collation, verification, and expert filing of trademark applications, company incorporations, and licensing structures.
          </p>
          
          <div className="text-[10px] text-slate-600 flex flex-col sm:flex-row items-center justify-center gap-3 select-none">
            <span>© 2026 Online Legal India™ Joint Division. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1 text-slate-500"><ShieldCheck className="h-3 w-3" /> ISO 9001:2015 Jointly Registered</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
