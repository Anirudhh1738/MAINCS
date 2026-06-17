/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Phone, LogIn, CheckCircle2, User, Key, ArrowRight, X } from 'lucide-react';

interface TopBarProps {
  onOpenRegister: () => void;
}

export default function TopBar({ onOpenRegister }: TopBarProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginRef, setLoginRef] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginRef) {
      setErrorMsg("Please fill in both fields");
      return;
    }
    setErrorMsg("");
    
    // Check local storage for matches, or mock standard success
    const apps = JSON.parse(localStorage.getItem('oli_applications') || '[]');
    const match = apps.find((a: any) => 
      a.email.toLowerCase().trim() === loginEmail.toLowerCase().trim() || 
      a.id.toLowerCase().trim() === loginRef.toLowerCase().trim()
    );

    setIsLoggedIn(true);
    if (match) {
      setSuccessMsg(`Welcome Back! Found active Application ID ${match.id} (${match.service})`);
    } else {
      setSuccessMsg(`Welcome Back! Checked credentials. Ready for submission.`);
    }
  };

  return (
    <>
      <div 
        id="top-strip-wrapper"
        className="bg-slate-900 text-slate-100 py-2 px-4 border-b border-slate-800 text-xs font-sans transition-colors duration-150"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: ISO Badge */}
          <div className="flex items-center gap-1.5 text-center sm:text-left font-medium select-none text-slate-300">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            <span>
              India's Premier ODR & Trademark Division • <strong className="text-orange-400">ISO 9001:2015</strong> Joint Certified
            </span>
          </div>

          {/* Middle: Phone Call link */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:08069029400" 
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 font-bold tracking-wider text-orange-400 transition-all hover:scale-105"
              id="top-phone-link"
            >
              <Phone className="h-3 w-3 animate-pulse" />
              <span>08069029400</span>
            </a>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">Toll-Free Legal Desk</span>
          </div>

          {/* Right: Login trigger */}
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-green-400 font-semibold">Logged In</span>
                <button 
                  onClick={() => { setIsLoggedIn(false); setSuccessMsg(''); }}
                  className="text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-slate-300">
                <span>Already registered?</span>
                <button
                  onClick={() => setShowLoginModal(true)}
                  id="top-login-btn"
                  className="font-bold text-orange-400 hover:text-orange-300 hover:underline inline-flex items-center gap-0.5 focus:outline-none cursor-pointer"
                >
                  <LogIn className="h-3 w-3" /> Login now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs" onClick={() => setShowLoginModal(false)} />
          <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl border border-slate-100">
            <button 
              onClick={() => setShowLoginModal(false)} 
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>

            {!successMsg ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <User className="h-5 w-5" />
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">Application Login</h3>
                  <p className="text-xs text-slate-500">
                    Enter email or application reference code to track filing status.
                  </p>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <LogIn className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="block w-full rounded-lg border border-slate-200 py-1.5 pl-9 pr-3 text-sm focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                    Application ID / Password
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="e.g. OLI-490333"
                      value={loginRef}
                      onChange={(e) => setLoginRef(e.target.value)}
                      className="block w-full rounded-lg border border-slate-200 py-1.5 pl-9 pr-3 text-sm focus:border-orange-500 outline-none"
                    />
                  </div>
                </div>

                {errorMsg && <p className="text-xs text-red-500">{errorMsg}</p>}

                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-500 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Track Status
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <CheckCircle2 className="mx-auto h-8 w-8 text-green-500" />
                <h4 className="mt-2 font-bold text-slate-900">Access Authenticated</h4>
                <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  {successMsg}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setShowLoginModal(false)}
                    className="flex-1 rounded-lg bg-slate-900 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                  >
                    Close Tracker
                  </button>
                  <button
                    onClick={() => { setShowLoginModal(false); onOpenRegister(); }}
                    className="flex-1 rounded-lg border border-slate-200 py-2 text-xs font-semibold hover:bg-slate-50 text-slate-700"
                  >
                    File New Service
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
