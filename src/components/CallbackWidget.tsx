/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhoneCall, X, CheckSquare, ShieldCheck, ArrowRightLeft } from 'lucide-react';
import { CORE_SERVICES_LIST } from '../types';

interface CallbackWidgetProps {
  onOpenRegister: (service?: string) => void;
}

export default function CallbackWidget({ onOpenRegister }: CallbackWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(CORE_SERVICES_LIST[0]);
  const [isSent, setIsSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg("Please enter your name");
      return;
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!phone.trim() || !mobileRegex.test(phone)) {
      setErrorMsg("Please enter a valid 10-digit phone number");
      return;
    }

    setErrorMsg('');
    setIsSent(true);

    // Save to localStorage
    const previous = JSON.parse(localStorage.getItem('oli_callbacks') || '[]');
    const newEntry = {
      id: 'CB-' + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      service,
      date: new Date().toLocaleDateString()
    };
    localStorage.setItem('oli_callbacks', JSON.stringify([newEntry, ...previous]));

    setTimeout(() => {
      setName('');
      setPhone('');
      setIsSent(false);
      setIsOpen(false);
    }, 4500);
  };

  return (
    <div id="callback-widget-root" className="fixed right-0 top-[40%] z-45 flex items-start">
      {/* Vertical trigger tab */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="callback-vertical-tab"
          className="bg-orange-500 hover:bg-orange-600 text-white text-[11px] font-black tracking-widest uppercase py-3.5 px-2.5 rounded-l-xl shadow-2xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 [writing-mode:vertical-lr] select-none hover:scale-105"
        >
          <PhoneCall className="h-3.5 w-3.5 -rotate-90 stroke-[2.5]" />
          <span>Request Callback</span>
        </button>
      )}

      {/* Slide out callback content frame */}
      {isOpen && (
        <div 
          id="callback-slideout-panel"
          className="w-72 bg-slate-900 text-white rounded-l-2xl shadow-2xl border-l border-y border-slate-800 p-5 transition-all duration-300 animate-slide-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
              <PhoneCall className="h-3 w-3 animate-ping" /> Express consultation
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {!isSent ? (
            <form onSubmit={handleQuickSubmit} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ebin Prabhu"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 focus:border-orange-500 rounded-lg p-2 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="bg-slate-800 border-l border-y border-slate-700 text-slate-400 text-xs px-2 rounded-l-lg flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full bg-slate-800 border-r border-y border-slate-700 focus:border-orange-500 rounded-r-lg p-2 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Filing Requirement
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-white outline-none bg-slate-900"
                >
                  {CORE_SERVICES_LIST.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>

              {errorMsg && <p className="text-[10px] text-red-400 font-semibold">{errorMsg}</p>}

              <button
                type="submit"
                id="callback-submit-btn"
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-2.5 text-xs font-black tracking-widest uppercase text-white hover:from-orange-600 hover:to-amber-600 transition-all shadow-md mt-2"
              >
                Request Consultation
              </button>
            </form>
          ) : (
            <div className="text-center py-6" id="callback-success-status">
              <span className="flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mb-3">
                <CheckSquare className="h-5 w-5 animate-bounce" />
              </span>
              <h4 className="text-sm font-bold text-slate-100">Advisor Confirmed</h4>
              <p className="text-[11px] text-slate-400 mt-2">
                Advocate ticket generated successfully. We will call you back on <strong className="text-slate-200">+91 {phone}</strong> under 15 minutes.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
