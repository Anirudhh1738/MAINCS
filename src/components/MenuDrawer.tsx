/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, Search, ShieldAlert, BadgePercent, HelpCircle, Briefcase, BookmarkCheck } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

interface MenuItem {
  title: string;
  hasSubcategories?: boolean;
  subcategories?: {
    subtitle?: string;
    items: string[];
  }[];
  items?: string[];
}

export default function MenuDrawer({ isOpen, onClose, onSelectService }: MenuDrawerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>("Trademark");

  // Detailed categories per user request
  const menuData: { [key: string]: MenuItem } = {
    "Trademark": {
      title: "Trademark Protection",
      items: [
        "Trademark Registration",
        "Trademark Renewal",
        "Trademark Objection",
        "Trademark Opposition",
        "Trademark Assignment",
        "Logo Design",
        "Series Trademark",
        "Trademark Global",
        "Copyright Registration"
      ]
    },
    "Company Registration": {
      title: "Company Registration",
      hasSubcategories: true,
      subcategories: [
        {
          subtitle: "Incorporation Division",
          items: [
            "Private Limited Company",
            "LLP Registration",
            "One Person Company",
            "Public Limited Company",
            "Section 8 Company",
            "Business Registration License",
            "Nidhi Company Registration",
            "Indian Subsidiary Registration"
          ]
        },
        {
          subtitle: "Compliance & Corporate Changes",
          items: [
            "Director DIN e KYC Update",
            "Appointment of Director",
            "Removal of Director",
            "Pvt. Ltd. Winding Up",
            "LLP Winding Up",
            "Increase Authorized Capital",
            "Registered Office Change",
            "Change Company Name",
            "MOA Amendment of Pvt Ltd",
            "MOA Amendment of Public Ltd",
            "MOA Amendment of Section 8",
            "Share Transfer",
            "JanSamarth Registration",
            "Credit Management Analysis",
            "OPC to Pvt Conversion",
            "Pvt to Public Conversion",
            "LLP to Pvt Conversion",
            "Sec-8 Winding Up",
            "Nidhi Winding Up",
            "Indian Subsidiary Windup"
          ]
        }
      ]
    },
    "ISO": {
      title: "ISO Certification",
      items: [
        "ISO 9001:2015 (Quality)",
        "ISO 14001 (Environment)",
        "ISO 27501 (Information Security)",
        "ISO 22000 (Food Safety)",
        "CE Mark Certification"
      ]
    },
    "Licenses": {
      title: "Government Licenses",
      items: [
        "FSSAI Registration",
        "FSSAI Renewal",
        "FSSAI Modification",
        "Import Export Code",
        "IEC Modification",
        "FSSAI Food Labeling Compliance",
        "FSSAI Annual Return Filing",
        "BIS Certificate"
      ]
    },
    "Tax & Compliance": {
      title: "Taxation & Payroll Compliance",
      hasSubcategories: true,
      subcategories: [
        {
          subtitle: "GST Division Services",
          items: [
            "GST Registration",
            "GST Return Filing",
            "GST Nil Return Filing",
            "GST Modification",
            "GSTR-9 Filing",
            "GST LUT Filing",
            "GST E-Way Bill"
          ]
        },
        {
          subtitle: "Annual Accounting",
          items: [
            "Annual Compliance",
            "Bookkeeping",
            "Tax Planning",
            "Online Bookkeeping",
            "NGO DARPAN",
            "DPT-3 Filing",
            "CSR Filing"
          ]
        },
        {
          subtitle: "Payroll & Social Security",
          items: [
            "PF Registration",
            "ESIC Registration",
            "PF Return Filing",
            "ESIC Return Filing"
          ]
        }
      ]
    },
    "Legal Dispute": {
      title: "Legal Dispute (ODR)",
      items: [
        "Consumer Dispute",
        "Labour Dispute",
        "Insurance Dispute",
        "Property Dispute",
        "Business Dispute",
        "Other Legal Dispute"
      ]
    },
    "HR & Payroll": {
      title: "HR Consultancy",
      items: [
        "Professional Payroll Setup",
        "HR Policy Drafting",
        "Employment Agreements",
        "Stipend Structure & Appraisals"
      ]
    },
    "All Services": {
      title: "All Corporate Services",
      items: [
        "Digital Signature Certificate (DSC)",
        "Startup India Recognition",
        "MSME / Udyam Registration",
        "Trade License",
        "Professional Tax registration"
      ]
    },
    "Free Compliance": {
      title: "Free Compliance Calculators",
      items: [
        "Free Business Name Search",
        "Trademark Availability Radar",
        "GST Eligibility Checker",
        "PF & ESIC Threshold Tester"
      ]
    }
  };

  if (!isOpen) return null;

  const toggleSection = (sectionKey: string) => {
    if (expandedSection === sectionKey) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionKey);
    }
  };

  const onItemClick = (itemName: string) => {
    onSelectService(itemName);
    onClose();
  };

  // Safe flattening helper to support menu search filtering
  const getAllItems = () => {
    const list: { name: string; category: string }[] = [];
    Object.entries(menuData).forEach(([key, section]) => {
      if (section.items) {
        section.items.forEach(itm => list.push({ name: itm, category: section.title }));
      }
      if (section.subcategories) {
        section.subcategories.forEach(sub => {
          sub.items.forEach(itm => list.push({ name: itm, category: `${section.title} - ${sub.subtitle}` }));
        });
      }
    });
    return list;
  };

  const filteredItems = searchTerm 
    ? getAllItems().filter(itm => itm.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="menu-drawer-wrapper">
      {/* Drawer Overlay */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
        id="drawer-overlay"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10" id="drawer-container">
        {/* Slide-over panel */}
        <div className="w-screen max-w-md bg-[#2e4463] text-slate-100 flex flex-col shadow-2xl relative border-l border-slate-700/50">
          
          {/* Drawer Profile Header */}
          <div className="px-6 py-5 bg-[#1b2b41] flex items-center justify-between border-b border-slate-700/70">
            <div className="flex flex-col">
              <div className="text-orange-400 text-xs tracking-wider uppercase font-bold flex items-center gap-1">
                <BookmarkCheck className="h-3.5 w-3.5" /> Fast-Track Filing Panel
              </div>
              <h2 className="text-lg font-bold font-display text-white mt-0.5">Online Legal India™</h2>
            </div>
            <button
              onClick={onClose}
              id="close-drawer-btn"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-700 hover:text-white transition-all cursor-pointer"
            >
              <X className="h-5.5 w-5.5" />
            </button>
          </div>

          {/* Service Search Box */}
          <div className="p-4 bg-[#23354e] border-b border-slate-700/50">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                id="drawer-search-input"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search registration, license or ODR..."
                className="w-full bg-[#1b2b41] border border-slate-600 rounded-lg py-1.5 pl-9 pr-3 text-sm text-white placeholder-slate-400 outline-none focus:border-amber-400 transition-all font-sans"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Primary Navigation Tree Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1.5">
            {searchTerm ? (
              // Search view
              <div className="space-y-2 p-1" id="search-results-list">
                <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block px-2 mb-1">
                  Matching Registrar Services ({filteredItems.length})
                </span>
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => onItemClick(item.name)}
                      className="w-full text-left p-3 rounded-lg bg-[#23354e]/60 hover:bg-orange-500 hover:text-white transition-all duration-150 border border-slate-700/50 flex align-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-semibold">{item.name}</div>
                        <div className="text-[10px] opacity-75 mt-0.5">{item.category}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 self-center" />
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-slate-400 text-sm">
                    No services match "{searchTerm}". Try "Trademark" or "GST".
                  </div>
                )}
              </div>
            ) : (
              // Accordion view
              Object.entries(menuData).map(([key, value]) => {
                const isExpanded = expandedSection === key;
                return (
                  <div 
                    key={key} 
                    id={`drawer-section-${key.replace(/\s+/g, '-').toLowerCase()}`}
                    className={`rounded-lg border transition-all ${
                      isExpanded 
                        ? 'bg-[#1b2b41] border-slate-700 shadow-md' 
                        : 'bg-transparent border-transparent hover:bg-slate-800/30'
                    }`}
                  >
                    {/* Category Title Trigger */}
                    <button
                      onClick={() => toggleSection(key)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm transition-all text-slate-200 hover:text-white cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-orange-400' : 'bg-transparent'}`} />
                        {value.title}
                      </span>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-orange-400 font-bold" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-slate-500" />
                      )}
                    </button>

                    {/* Expandable items container */}
                    {isExpanded && (
                      <div className="px-4 pb-3 pt-1 border-t border-slate-700/40 space-y-3 animate-fade-in divide-y divide-slate-700/30">
                        {value.hasSubcategories && value.subcategories ? (
                          // Render nested subgroups, e.g. Incorporation, Compliance
                          value.subcategories.map((sub, idx) => (
                            <div key={idx} className={idx > 0 ? "pt-2" : ""}>
                              <span className="text-[10px] font-bold text-orange-300 tracking-wider uppercase block mb-1.5">
                                {sub.subtitle}
                              </span>
                              <div className="grid grid-cols-1 gap-1">
                                {sub.items.map((item, sidx) => (
                                  <button
                                    key={sidx}
                                    onClick={() => onItemClick(item)}
                                    className="w-full text-left py-1.5 px-2 rounded hover:bg-orange-500 hover:text-white text-xs text-slate-300 transition-colors"
                                  >
                                    {item}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          // Render flat item listing
                          <div className="grid grid-cols-1 gap-1 pt-1">
                            {value.items?.map((item, sidx) => (
                              <button
                                key={sidx}
                                onClick={() => onItemClick(item)}
                                className="w-full text-left py-1.5 px-2 rounded hover:bg-orange-500 hover:text-white text-xs text-slate-300 transition-colors"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* bottom footer helper widget */}
          <div className="p-4 bg-[#1b2b41] border-t border-slate-700 mt-auto text-xs text-center text-slate-400">
            <div className="flex justify-center gap-3 mb-2">
              <span className="flex items-center gap-1">
                <ShieldAlert className="h-3 w-3 text-orange-400" /> Secure SSL
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <BadgePercent className="h-3 w-3 text-orange-400" /> Startup-Affiliated
              </span>
            </div>
            <p>Govt. Recognized Legal Filing Network</p>
          </div>

        </div>
      </div>
    </div>
  );
}
