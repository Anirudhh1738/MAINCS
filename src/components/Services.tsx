/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Star, ShieldAlert, Award, Landmark, Percent, Globe2, Coffee, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'popular' | 'tax' | 'license'>('all');

  const servicesData = [
    {
      title: "Trademark Registration",
      description: "Protect your brand name, logo and slogan with India's #1 trademark attorney network.",
      category: "Intellectual Property",
      icon: <Award className="h-6 w-6 text-orange-500" />,
      accentColor: "orange" as const,
      tag: "popular"
    },
    {
      title: "Company Registration",
      description: "Fast-track Private Ltd, LLP, One Person Company (OPC) incorporation & initial corporate compliance.",
      category: "Incorporation Division",
      icon: <Landmark className="h-6 w-6 text-blue-500" />,
      accentColor: "blue" as const,
      tag: "popular"
    },
    {
      title: "GST Services",
      description: "Outsource your GST compliance, registrations, monthly filing, amendments, and GSTR-9 returns safely.",
      category: "Taxation Division",
      icon: <Percent className="h-6 w-6 text-green-500" />,
      accentColor: "green" as const,
      tag: "tax"
    },
    {
      title: "Import Export License",
      description: "Quick DGFT Import-Export Code (IEC) registrations, online applications, and regulatory compliance.",
      category: "Global Trade",
      icon: <Globe2 className="h-6 w-6 text-purple-500" />,
      accentColor: "purple" as const,
      tag: "license"
    },
    {
      title: "FSSAI Registration",
      description: "Official Food license registrations, renewals, and annual returns for food operators and manufacturers.",
      category: "Licensing Division",
      icon: <Coffee className="h-6 w-6 text-orange-500" />,
      accentColor: "orange" as const,
      tag: "license"
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesData
    : servicesData.filter(s => s.tag === activeTab || (activeTab === 'popular' && s.tag === 'popular'));

  return (
    <section 
      id="services-section-wrapper" 
      className="py-16 md:py-24 bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700 uppercase tracking-widest">
            <Sparkles className="h-3 w-3" /> Registrar Solutions
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Select an expert division to get started on your business registration, government licensing, trademark verification, or tax compliance setup.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-all focus:outline-none ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            All Core Services
          </button>
          <button
            onClick={() => setActiveTab('popular')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-all focus:outline-none ${
              activeTab === 'popular'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            🔥 Most Popular
          </button>
          <button
            onClick={() => setActiveTab('tax')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-all focus:outline-none ${
              activeTab === 'tax'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            GST &amp; Accounting
          </button>
          <button
            onClick={() => setActiveTab('license')}
            className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-all focus:outline-none ${
              activeTab === 'license'
                ? 'bg-slate-900 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            Licensing (Food/IEC)
          </button>
        </div>

        {/* Grid Display */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          id="services-grid"
        >
          {filteredServices.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              category={service.category}
              accentColor={service.accentColor}
              onSelect={() => onSelectService(service.title)}
            />
          ))}
        </div>

        {/* Trust badge info bar */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center gap-1.5">
            <ShieldAlert className="h-4 w-4 text-orange-500" />
            Not sure which compliance license fits your business? <button onClick={() => onSelectService("Free Compliance Consultation")} className="font-bold text-orange-600 underline hover:text-orange-700">Chat with a corporate lawyer now</button>.
          </p>
        </div>

      </div>
    </section>
  );
}
