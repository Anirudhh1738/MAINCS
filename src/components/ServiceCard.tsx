/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, ShieldCheck, ArrowUpRight, Scale } from 'lucide-react';

interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  onSelect: () => void;
  accentColor?: "orange" | "green" | "blue" | "purple";
}

export default function ServiceCard({ title, description, icon, category, onSelect, accentColor = "orange" }: ServiceCardProps) {
  const borderHovMap: { [key: string]: string } = {
    orange: "hover:border-orange-400 focus:border-orange-400 group-hover:bg-orange-50",
    green: "hover:border-green-400 focus:border-green-400 group-hover:bg-green-50",
    blue: "hover:border-blue-400 focus:border-blue-400 group-hover:bg-blue-50",
    purple: "hover:border-purple-400 focus:border-purple-400 group-hover:bg-purple-50",
  };

  const textColMap: { [key: string]: string } = {
    orange: "text-orange-600",
    green: "text-green-600",
    blue: "text-blue-600",
    purple: "text-purple-600",
  };

  const btnBgMap: { [key: string]: string } = {
    orange: "bg-orange-600 text-white hover:bg-orange-700",
    green: "bg-green-600 text-white hover:bg-green-700",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    purple: "bg-purple-600 text-white hover:bg-purple-700",
  };

  return (
    <div
      onClick={onSelect}
      id={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className={`group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${borderHovMap[accentColor] || "hover:border-orange-400"}`}
    >
      <div>
        {/* Top bar indicators */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            {category}
          </span>
          <div className="rounded-full p-2 bg-slate-50 text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100 transition-all">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Custom Icon wrapper with dynamic colors */}
        <div className="mb-4 inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-50 group-hover:scale-110 group-hover:bg-white group-hover:shadow transition-all duration-300">
          {icon}
        </div>

        {/* Service title and description */}
        <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-slate-900 transition-colors">
          {title}
        </h3>
        
        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          {description}
        </p>

        {/* Feature Check list items to enrich content natively */}
        <div className="mt-4 pt-3 border-t border-slate-50 space-y-1.5 hidden sm:block">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
            <span>Govt. Filing Fees Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Scale className="h-3.5 w-3.5 text-orange-400" />
            <span>Advocate-led verification</span>
          </div>
        </div>
      </div>

      {/* Button footer click action */}
      <div className="mt-6 pt-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`w-full inline-flex items-center justify-center gap-1.5 rounded-xl py-2 px-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${btnBgMap[accentColor] || "bg-orange-600 text-white"}`}
        >
          <span>Click Here</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
