import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const STORAGE_KEY = 'millstone_cookie_consent_v1';

export default function CookieBanner({ onOpenLegal }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consented = localStorage.getItem(STORAGE_KEY);
      if (!consented) {
        // Small delay so it smoothly slides in after page load
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // localStorage may fail in private mode
      setVisible(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-md z-40 bg-[#19140f]/95 border border-[#3d2c1f] p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md text-xs text-[#d6c7bc] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#c28e5c]/15 border border-[#c28e5c]/30 text-[#c28e5c] flex items-center justify-center shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>

        <div className="flex-grow">
          <p className="leading-relaxed text-[#b8a79a]">
            Мы используем файлы cookie для корректной работы сайта. Оставаясь на сайте, вы соглашаетесь с{' '}
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-[#c28e5c] hover:underline font-semibold"
            >
              Политикой конфиденциальности
            </button>{' '}
            (152-ФЗ).
          </p>

          <div className="flex items-center gap-2.5 mt-3">
            <button
              onClick={handleAccept}
              className="py-1.5 px-4 rounded-lg bg-[#c28e5c] hover:bg-[#d9a56f] text-[#12100e] font-bold text-xs transition-colors"
            >
              Принять
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="py-1.5 px-3 rounded-lg text-xs text-[#8c7b6f] hover:text-[#f5eee8] transition-colors"
            >
              Подробнее
            </button>
          </div>
        </div>

        <button
          onClick={handleAccept}
          className="text-[#78695d] hover:text-[#f5eee8] p-1 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
