import React from 'react';
import { MASTER_VK_LINK } from '../data/products';
import { ExternalLink, Lock } from 'lucide-react';

export default function Footer({ onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0a08] border-t border-[#241a12] py-12 text-[#8c7b6f] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-[0.2em] text-[#f5eee8] block">
              MILLSTONE
            </span>
            <p className="text-[11px] text-[#736357] mt-1">
              Авторские изделия из натуральной кожи ручной работы • Санкт-Петербург
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#catalog" className="hover:text-[#c28e5c] transition-colors">
              Каталог
            </a>
            <a href="#customizer" className="hover:text-[#c28e5c] transition-colors">
              Калькулятор
            </a>
            <a href="#philosophy" className="hover:text-[#c28e5c] transition-colors">
              О ремесле
            </a>
            <a
              href={MASTER_VK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c28e5c] transition-colors flex items-center gap-1"
            >
              <span>VK профиль</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onOpenAdmin}
              className="hover:text-[#c28e5c] text-[#78695d] transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-lg border border-[#2b2017] hover:border-[#c28e5c]/40 text-[11px]"
              title="Панель добавления и редактирования изделий"
            >
              <Lock className="w-3 h-3 text-[#c28e5c]" />
              <span>Вход для мастера</span>
            </button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-[11px] text-[#5e5046]">
            <div>© {currentYear} Millstone Leathercraft. Все права защищены.</div>
            <div className="mt-0.5">Сделано с уважением к ручному труду.</div>
          </div>

        </div>
      </div>
    </footer>
  );
}
