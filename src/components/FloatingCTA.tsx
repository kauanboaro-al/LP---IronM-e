'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './ui/WhatsAppIcon';

export function FloatingCTA() {

  const [isVisible, setIsVisible] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        setIsAtBottom(footerRect.top <= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed lg:hidden z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5500000000000?text=Olá%20Iron%20Mãe!%20Vim%20do%20site."
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed ${
          isAtBottom ? 'bottom-20' : 'bottom-4'
        } right-4 w-14 h-14 bg-whatsapp hover:bg-whatsapp-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform fill-white" />

      </a>

      {/* Tooltip */}
      <div className={`fixed ${
        isAtBottom ? 'bottom-20' : 'bottom-4'
      } right-20 bg-text text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}>
        Fale comigo!
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-l-4 border-l-text border-y-4 border-y-transparent" />
      </div>

      {/* Close Button (opcional) */}
      <button
        onClick={() => setIsVisible(false)}
        className={`fixed ${
          isAtBottom ? 'bottom-20' : 'bottom-4'
        } right-20 w-8 h-8 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg opacity-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center`}
        aria-label="Fechar"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}