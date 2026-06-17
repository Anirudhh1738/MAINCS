/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MailCheck, ShieldQuestion } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is company registration?",
      answer: "Company registration is the official legal process of incorporating a business entity in India, transforming it into a distinct legal person under the Ministry of Corporate Affairs (MCA). Popular choices include Private Limited Company (Pvt Ltd), Limited Liability Partnership (LLP), and One Person Company (OPC). It grants limited liability status to protect owners' personal assets and builds corporate credibility."
    },
    {
      question: "How long does it take?",
      answer: "Normally, name approval gets issued in 1-2 days. The complete company incorporation, including PAN, TAN, Digital Signature (DSC), and DIN setup, takes around 7 to 10 business working days, subject to state regulatory queues. Trademark application filings are initiated within 2 business hours of docu-verification, granting you immediate right to use first-character TM marks."
    },
    {
      question: "What documents are required?",
      answer: "For basic incorporation or trademark services, you only require digital copies of: (1) PAN card copies of the applicant founders/partners, (2) Aadhaar card or passports for KYC identification, (3) Recent passport-size photographs, and (4) Utility bills (e.g. electricity bill) along with an NOC (No Objection Certificate) for the registered business corporate office address. Rent agreements are handled by our attorneys."
    },
    {
      question: "What is GST registration?",
      answer: "GST (Goods and Services Tax) registration is a mandatory tax registration required for any enterprise in India whose annual turnover exceeds Rs 40 Lakhs (Rs 20 Lakhs for service providers, Rs 10 Lakhs for North-Eastern states), or any business involved in inter-state e-commerce trade. Registered GST dealers get assigned a unique 15-digit GSTIN identifier to collect and claim Input Tax Credits."
    },
    {
      question: "Do you provide annual compliance?",
      answer: "Yes, Online Legal India provides complete, end-to-end annual business bookkeeping, tax audits, GSTR filing, corporate DPT-3 schedules, and professional PF/ESIC payroll management. Once you register, we assign dedicated legal corporate advisors to remind and file your returns on time, preventing costly statutory late fees."
    }
  ];

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq-section-wrapper" className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <ShieldQuestion className="h-4 w-4 text-orange-400" /> FAQ Desk
          </span>
          <h2 className="mt-3 text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Have questions regarding regulatory guidelines, MCA approvals, or filing fees? Read our corporate guide.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all ${
                  isOpen 
                    ? 'border-orange-200 bg-orange-50/20 shadow-sm' 
                    : 'border-slate-150 bg-slate-50/30 hover:bg-slate-50'
                }`}
              >
                {/* Accordion trigger line */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left p-5 font-bold text-sm sm:text-base text-slate-900 focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="flex h-7 w-7 items-center justify-center shrink-0 rounded-full border border-slate-200 bg-white shadow-xs text-slate-700 transition-transform">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-orange-500 font-bold" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                {/* Answer pane with smooth state height */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/60 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-105">
          <p className="text-xs text-slate-500 inline-flex items-center gap-1">
            <MailCheck className="h-4 w-4 text-emerald-500" />
            Still have unanswered compliance doubts? Contact our customer support desk on <a href="mailto:info@onlinelegalindia.com" className="font-bold text-orange-600 hover:underline">info@onlinelegalindia.com</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
