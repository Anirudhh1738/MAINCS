/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import Hero from './components/Hero';
import Services from './components/Services';
import ProcessTimeline from './components/ProcessTimeline';
import Stats from './components/Stats';
import CEOSection from './components/CEOSection';
import Testimonials from './components/Testimonials';
import BrandPartners from './components/BrandPartners';
import AwardsSection from './components/AwardsSection';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import CallbackWidget from './components/CallbackWidget';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import DropdownMenu from './components/DropdownMenu';
import { CORE_SERVICES_LIST } from './types';

export default function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [targetService, setTargetService] = useState('');

  // Handle service pre-selection logic
  const handleSelectService = (serviceName: string) => {
    let cleanName = serviceName;
    // Map custom string to closest matching list option
    const found = CORE_SERVICES_LIST.find(
      (s) => s.toLowerCase().includes(serviceName.toLowerCase()) || 
             serviceName.toLowerCase().includes(s.toLowerCase())
    );
    if (found) {
      cleanName = found;
    }
    setTargetService(cleanName);
    setIsRegisterOpen(true);
  };

  const handleOpenRegisterDirect = () => {
    setTargetService('');
    setIsRegisterOpen(true);
  };

  const handleScrollToFAQ = () => {
    const faqEl = document.getElementById('faq-section-wrapper');
    if (faqEl) {
      faqEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="online-legal-india-root"
      className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col relative selection:bg-orange-500 selection:text-white"
    >
      {/* Top micro announcement bar */}
      <TopBar onOpenRegister={handleOpenRegisterDirect} />

      {/* Main Yellow/Cream navigation header */}
      <Header 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenRegister={handleOpenRegisterDirect}
        onScrollToFAQ={handleScrollToFAQ}
      />

      {/* Main Body Grid */}
      <main className="flex-1">
        
        {/* Desktop Mini Quick Access Dropdowns under Header */}
        <div className="bg-amber-100/40 border-b border-amber-200/30 py-3 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 tracking-wider uppercase">
              ⚡ FAST-TRACK ACCESS:
            </span>
            <div className="flex gap-3">
              <DropdownMenu 
                label="Trademark Protection" 
                items={["Trademark Registration", "Trademark Renewal", "Trademark Objection", "Copyright Registration"]}
                onSelect={handleSelectService}
              />
              <DropdownMenu 
                label="Company Setup" 
                items={["Private Limited Company", "LLP Registration", "One Person Company", "Nidhi Company Registration"]}
                onSelect={handleSelectService}
              />
              <DropdownMenu 
                label="GST &amp; Accounts" 
                items={["GST Registration", "GST Return Filing", "Annual Compliance", "Bookkeeping"]}
                onSelect={handleSelectService}
              />
              <DropdownMenu 
                label="Government Licenses" 
                items={["FSSAI Registration", "FSSAI Renewal", "Import Export Code", "BIS Certificate"]}
                onSelect={handleSelectService}
              />
            </div>
            <a 
              href="mailto:info@onlinelegalindia.com" 
              className="text-[11px] font-bold text-orange-600 hover:underline hover:text-orange-700"
            >
              Direct Advocate Channel &rarr;
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <Hero 
          onOpenRegister={handleOpenRegisterDirect} 
          onSelectService={handleSelectService} 
        />

        {/* Five core services section */}
        <Services onSelectService={handleSelectService} />

        {/* Trust level statistics block */}
        <Stats />

        {/* Visual 8 step filing roadmap */}
        <ProcessTimeline />

        {/* CEO Advocate credentials storytelling layout */}
        <CEOSection />

        {/* National Quality awards accreditation cards */}
        <AwardsSection />

        {/* Google reviewed client testimonials */}
        <Testimonials />

        {/* Partnership branding validation banner */}
        <BrandPartners />

        {/* Promo Green connection invitation box */}
        <ContactSection />

        {/* Regulatory FAQ Accordion */}
        <FAQ />

      </main>

      {/* Solid Bottom structured menu and disclaimer Footer */}
      <Footer onSelectService={handleSelectService} />

      {/* Floating supportive dial & Whatsapp links */}
      <FloatingButtons />

      {/* Fast Callback trigger widget tab */}
      <CallbackWidget onOpenRegister={handleSelectService} />

      {/* Main Interactive Registration Modal with Input Validation */}
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        defaultService={targetService}
      />

      {/* Sliding Hamburger navigation menu panel */}
      <MenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onSelectService={handleSelectService}
      />

    </div>
  );
}
