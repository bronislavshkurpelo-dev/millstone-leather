import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Lock } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

export default function Navbar({ onOpenAdmin }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12100e]/95 backdrop-blur-md py-3.5 border-b border-[#382c23]/60 shadow-2xl'
          : 'bg-gradient-to-b from-[#0e0c0a]/95 via-[#0e0c0a]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="group flex flex-col shrink-0">
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[0.25em] text-[#f5eee8] group-hover:text-[#c28e5c] transition-colors">
              MILLSTONE
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#a09083]">
              Leather Workshop • СПб
            </span>
          </a>

          {/* Desktop Navigation (visible on lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium tracking-wider text-[#d6c7bc]">
            <a href="#catalog" className="hover:text-[#c28e5c] transition-colors py-1">
              Каталог
            </a>
            <a href="#customizer" className="hover:text-[#c28e5c] transition-colors flex items-center gap-1.5 py-1">
              <span>Калькулятор</span>
              <span className="px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-normal rounded bg-[#c28e5c]/15 text-[#c28e5c] border border-[#c28e5c]/30">
                Заказ
              </span>
            </a>
            <a href="#philosophy" className="hover:text-[#c28e5c] transition-colors py-1">
              Философия
            </a>
            <a href="#about" className="hover:text-[#c28e5c] transition-colors py-1">
              О мастере
            </a>
            <a href="#process" className="hover:text-[#c28e5c] transition-colors py-1">
              Как заказать
            </a>
            <a href="#contacts" className="hover:text-[#c28e5c] transition-colors py-1">
              Контакты
            </a>
          </nav>

          {/* Desktop VK Button with dedicated spacing & subtle vertical divider */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0 pl-4 border-l border-[#3a2d22]/70">
            <a
              href={MASTER_VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-[#12100e] bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] rounded-xl transition-all shadow-md shadow-[#c28e5c]/25 hover:shadow-lg hover:shadow-[#c28e5c]/30 hover:-translate-y-0.5"
            >
              <span>Профиль в VK</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile / Tablet menu button (visible on < 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={MASTER_VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-[#12100e] bg-[#c28e5c] rounded-lg inline-flex items-center gap-1 sm:hidden"
            >
              <span>VK</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d6c7bc] hover:text-[#c28e5c] rounded-lg bg-[#1a140f] border border-[#33251c]"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-[#382c23] bg-[#12100e]/98 rounded-2xl px-5 space-y-4 shadow-2xl">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#e8dfd8] hover:text-[#c28e5c]"
            >
              Каталог авторских работ
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#c28e5c] hover:text-[#d9a56f] flex items-center justify-between"
            >
              <span>Конструктор изделия на заказ</span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#c28e5c]/20 border border-[#c28e5c]/40">
                Калькулятор
              </span>
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#e8dfd8] hover:text-[#c28e5c]"
            >
              Философия ручного шва
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#e8dfd8] hover:text-[#c28e5c]"
            >
              О мастере Виталии
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#e8dfd8] hover:text-[#c28e5c]"
            >
              Как происходит заказ
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#e8dfd8] hover:text-[#c28e5c]"
            >
              Контакты мастера в Санкт-Петербурге
            </a>
            <div className="pt-2 space-y-2.5">
              <a
                href={MASTER_VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-center text-sm font-bold text-[#12100e] bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] rounded-xl shadow-lg"
              >
                <span>Перейти в профиль мастера vk.ru/millstone_v</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAdmin) onOpenAdmin();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-center text-xs font-semibold text-[#8c7b6f] hover:text-[#c28e5c] bg-[#16120e] rounded-xl border border-[#2b2017]"
              >
                <Lock className="w-3.5 h-3.5 text-[#c28e5c]" />
                <span>Панель мастера (управление каталогом)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
