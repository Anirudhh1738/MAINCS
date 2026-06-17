/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Mail, Phone, User, MapPin, Briefcase } from 'lucide-react';
import { RegisterFormInput, INDIAN_STATES, CORE_SERVICES_LIST } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function RegisterModal({ isOpen, onClose, defaultService = "" }: RegisterModalProps) {
  const [formData, setFormData] = useState<RegisterFormInput>({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    service: defaultService || CORE_SERVICES_LIST[0],
    agreeTerms: true,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  // Update default service if it changes
  React.useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.state) {
      tempErrors.state = "Please select your state";
    }

    if (!formData.agreeTerms) {
      tempErrors.agreeTerms = "You must agree to the Terms & Conditions";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submission
      const randId = 'OLI-' + Math.floor(100000 + Math.random() * 900000);
      setApplicationId(randId);
      setIsSubmitted(true);

      // Save to localStorage for durable client-side tracking
      const previousApplications = JSON.parse(localStorage.getItem('oli_applications') || '[]');
      const newEntry = {
        id: randId,
        date: new Date().toLocaleDateString(),
        ...formData
      };
      localStorage.setItem('oli_applications', JSON.stringify([newEntry, ...previousApplications]));
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      state: '',
      service: CORE_SERVICES_LIST[0],
      agreeTerms: true,
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        id="modal-backdrop"
      />

      {/* Modal Box */}
      <div 
        id="register-modal-container"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 border border-slate-100"
      >
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-400 to-green-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-modal-btn"
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700">
                <ShieldCheck className="h-3.5 w-3.5" /> ISO 9001:2015 Certified Service
              </span>
              <h2 className="mt-2 text-2xl font-bold font-display text-slate-900">
                Register Your Service
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Submit details below to connect with our legal division immediately.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="register-form">
              {/* Name field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={`block w-full rounded-lg border py-2 pl-10 pr-3 text-sm placeholder-slate-400 outline-none transition-all ${
                      errors.fullName 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-500" id="fullName-error">{errors.fullName}</p>}
              </div>

              {/* Email field */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@yourdomain.com"
                    className={`block w-full rounded-lg border py-2 pl-10 pr-3 text-sm placeholder-slate-400 outline-none transition-all ${
                      errors.email 
                        ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
                    }`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500" id="email-error">{errors.email}</p>}
              </div>

              {/* Mobile and State fields in a grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mobile field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <span className="absolute inset-y-0 left-8 flex items-center text-sm text-slate-400 font-medium select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                      placeholder="9876543210"
                      className={`block w-full rounded-lg border py-2 pl-16 pr-3 text-sm placeholder-slate-400 outline-none transition-all ${
                        errors.mobile 
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
                      }`}
                    />
                  </div>
                  {errors.mobile && <p className="mt-1 text-xs text-red-500" id="mobile-error">{errors.mobile}</p>}
                </div>

                {/* State dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                    State / UT <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 z-10">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <select
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className={`block w-full rounded-lg border py-2 pl-10 pr-3 text-sm bg-white outline-none transition-all ${
                        errors.state 
                          ? 'border-red-300 bg-red-50 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-slate-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
                      }`}
                    >
                      <option value="">Select State</option>
                      {INDIAN_STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.state && <p className="mt-1 text-xs text-red-500" id="state-error">{errors.state}</p>}
                </div>
              </div>

              {/* Service Selection dropdown */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                  Requested Legal Service
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="block w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-3 text-sm outline-none transition-all focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    {CORE_SERVICES_LIST.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-500 leading-normal">
                    I agree to the <span className="font-semibold text-slate-700 hover:underline">Terms of Service</span> and authorize representatives of Online Legal India to contact me regarding my legal filing.
                  </span>
                </label>
                {errors.agreeTerms && <p className="mt-1 text-xs text-red-500" id="agreeTerms-error">{errors.agreeTerms}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-register-btn"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-md hover:from-orange-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all hover:scale-[1.01]"
              >
                Apply Now • Start Processing
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center" id="register-success-pane">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500">
              <CheckCircle className="h-10 w-10 animate-bounce" />
            </div>
            
            <h3 className="mt-4 text-2xl font-bold font-display text-slate-900" id="success-title">
              Registration Successful!
            </h3>
            
            <p className="mt-2 text-sm text-slate-500">
              Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your application request is registered in our portal.
            </p>

            <div className="my-6 rounded-xl bg-slate-50 p-4 border border-dashed border-slate-200">
              <span className="text-xs font-semibold text-slate-400 block tracking-widest uppercase">
                Application reference id
              </span>
              <span className="text-lg font-mono font-bold text-slate-800 mt-1 block tracking-wider" id="success-app-id">
                {applicationId}
              </span>
              <span className="text-xs text-green-600 font-semibold mt-1 block">
                ● Division Legal Experts Notified
              </span>
            </div>

            <p className="text-xs text-slate-400">
              One of our registered Advocates or Senior Legal Consultants will call you on <span className="font-semibold text-slate-700">+91 {formData.mobile}</span> within 15 minutes.
            </p>

            <button
              onClick={handleReset}
              id="success-close-btn"
              className="mt-6 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Back to Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
