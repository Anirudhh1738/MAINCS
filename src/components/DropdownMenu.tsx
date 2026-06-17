/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Briefcase } from 'lucide-react';

interface DropdownMenuProps {
  label: string;
  items: string[];
  onSelect: (item: string) => void;
  className?: string;
}

export default function DropdownMenu({ label, items, onSelect, className = "" }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div 
      className={`relative inline-block text-left ${className}`} 
      ref={dropdownRef}
      id={`dropdown-menu-${label.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full items-center justify-between gap-1 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-100 transition-colors focus:ring-1 focus:ring-orange-400 cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-orange-500" />
          {label}
        </span>
        <ChevronDown className={`h-3 w-3 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1.5 w-56 origin-top-right rounded-xl bg-white p-1.5 shadow-xl border border-slate-100 divide-y divide-slate-100 ring-1 ring-black/5 animate-fade-in">
          <div className="max-h-64 overflow-y-auto custom-scrollbar space-y-0.5">
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleItemClick(item)}
                className="w-full text-left rounded-lg px-3 py-1.5 text-xs text-slate-700 hover:bg-orange-500 hover:text-white transition-colors block"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
