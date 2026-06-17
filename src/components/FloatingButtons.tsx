/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageSquarePlus, Mail, ShieldAlert } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div id="floating-nodes-wrapper">
      
      {/* Bottom Left: Floating Phone Dial Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <a
          href="tel:08069029400"
          id="float-phone-anchor"
          aria-label="Call legal desk"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl transition-all duration-350 hover:scale-110 active:scale-90 animate-soft-pulse"
        >
          <Phone className="h-5.5 w-5.5 stroke-[2.5]" />
        </a>
      </div>

      {/* Bottom Right: Floating Action Nodes (WhatsApp and Email stacked/grouped beautifully) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Blue Email Button */}
        <a
          href="mailto:info@onlinelegalindia.com?subject=Filing Consultation Request"
          id="float-email-anchor"
          aria-label="Send email inquiry"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-xl transition-all duration-350 hover:scale-110 active:scale-90 hover:rotate-6"
        >
          <Mail className="h-5 w-5" />
        </a>

        {/* Green WhatsApp Call to Action */}
        <a
          href="https://wa.me/918069029400?text=I%20am%20interested%20in%20business%20registration%20compliance%20filing."
          target="_blank"
          rel="noopener noreferrer"
          id="float-whatsapp-anchor"
          aria-label="Chat via WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 hover:bg-green-400 text-white shadow-2xl transition-all duration-350 hover:scale-110 active:scale-90 animate-soft-pulse"
        >
          {/* Custom WhatsApp Icon or styled Speech Bubble with Plus */}
          <MessageSquarePlus className="h-6 w-6 stroke-[2.5]" />
        </a>
      </div>

    </div>
  );
}
