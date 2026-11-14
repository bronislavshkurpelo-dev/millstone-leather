import React from 'react';
import { MASTER_VK_LINK } from '../data/products';
import { ExternalLink, Lock, ShieldCheck, Scale } from 'lucide-react';

export default function Footer({ onOpenAdmin, onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0a08] border-t border-[#241a12] py-12 text-[#8c7b6f] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#1c1510]">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-[0.2em] text-[#f5eee8] block">
              MILLSTONE
            </span>
            <p className="text-[11px] text-[#736357] mt-1">
              Авторские изделия из натуральной кожи ручной работы • Санкт-Петербург
            </p>
          </div>

          {/* Navigation Links */}
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

        </div>

        {/* Legal & Compliance Row (152-ФЗ, ст. 437 ГК РФ) */}
        <div className="space-y-4 text-[11px] text-[#6e5f54] leading-relaxed">
          
          {/* Legal Documents Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[#948477]">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-[#c28e5c] transition-colors flex items-center gap-1.5 underline decoration-[#3d2e23] hover:decoration-[#c28e5c]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#c28e5c]" />
              <span>Политика конфиденциальности (152-ФЗ)</span>
            </button>

            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-[#c28e5c] transition-colors flex items-center gap-1.5 underline decoration-[#3d2e23] hover:decoration-[#c28e5c]"
            >
              <Scale className="w-3.5 h-3.5 text-[#c28e5c]" />
              <span>Пользовательское соглашение и оферта</span>
            </button>

            <button
              onClick={() => onOpenLegal && onOpenLegal('consent')}
              className="hover:text-[#c28e5c] transition-colors underline decoration-[#3d2e23] hover:decoration-[#c28e5c]"
            >
              Согласие на обработку персональных данных
            </button>
          </div>

          {/* Legal Disclaimer (ст. 437 ГК РФ) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-[#1a130e]">
            <p className="md:col-span-8 text-[10px] text-[#615247]">
              Информация, представленная на сайте, носит исключительно ознакомительный характер и не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса РФ. Все изделия изготавливаются по индивидуальным параметрам заказчика. Окончательная стоимость и сроки согласовываются при оформлении заказа.
            </p>

            <div className="md:col-span-4 text-center md:text-right text-[10px] text-[#615247] space-y-0.5">
              <div>© {currentYear} Millstone Leathercraft. Все права защищены.</div>
              <div>Мастер: Виталий Жерновой (Самозанятый, г. Санкт-Петербург).</div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
