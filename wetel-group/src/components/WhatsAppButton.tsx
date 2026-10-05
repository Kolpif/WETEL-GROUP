'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const phoneNumber = '33189293421';
  const message = encodeURIComponent('Bonjour, je souhaite avoir des informations sur vos offres télécom professionnelles.');

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
          isTooltipVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
        }`}
      >
        <div className="bg-white text-wetel-ink rounded-xl px-4 py-3 shadow-2xl max-w-[220px] relative">
          <button
            onClick={() => setIsTooltipVisible(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-wetel-surface-soft rounded-full flex items-center justify-center text-wetel-ink hover:bg-wetel-line transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm font-medium mb-1">Besoin d&apos;aide ?</p>
          <p className="text-xs text-wetel-muted">Contactez-nous directement sur WhatsApp</p>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />

        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>
    </div>
  );
}
