import React from 'react';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background with real leather product photo from workshop */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 scale-105 filter brightness-75 contrast-125"
        style={{
          backgroundImage: `url('/images/catalog/img1.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12100e] via-[#12100e]/85 to-[#12100e]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,142,92,0.12)_0,transparent_70%)]" />

      {/* Decorative vertical lines */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#382c23]/40 to-transparent" />
      <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#382c23]/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* City & Craft Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241c16]/80 border border-[#c28e5c]/30 text-xs sm:text-sm text-[#d9a56f] mb-8 shadow-inner">
          <MapPin className="w-4 h-4 text-[#c28e5c] shrink-0" />
          <span>Мастерская Виталия Жернового • Санкт-Петербург</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c28e5c] animate-pulse"></span>
        </div>

        {/* Main Title with generous line height and spacing */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-[#f7f2ed] mb-6 leading-[1.15]">
          MILLSTONE
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#c28e5c] tracking-normal mt-3 italic font-serif">
            Авторские изделия из кожи ручной работы
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[#b8a89b] font-light leading-relaxed mb-10">
          Индивидуальный пошив под заказ: часовые ремешки анатомической посадки (TAG Heuer, Franck Muller, Diesel), 
          ремни из цельного чепрака 4 мм, саквояжи, сумки и кошельки с персональным тиснением.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#catalog"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#c28e5c] to-[#a67140] hover:from-[#d19b67] hover:to-[#b87d46] text-[#12100e] font-bold text-sm sm:text-base rounded-xl transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#c28e5c]/20 flex items-center justify-center gap-2"
          >
            <span>Смотреть работы мастера</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#customizer"
            className="w-full sm:w-auto px-8 py-4 bg-[#1f1914] hover:bg-[#2a221b] text-[#e8dfd8] border border-[#4a3a2d] hover:border-[#c28e5c]/60 font-semibold text-sm sm:text-base rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#c28e5c]" />
            <span>Рассчитать изделие на заказ</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#2d2219]">
          <div className="flex flex-col items-center text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#c28e5c]">от 3 000 ₽</span>
            <span className="text-xs text-[#a39487] mt-1 uppercase tracking-wider">Ремешки для часов</span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#c28e5c]">4.0 мм</span>
            <span className="text-xs text-[#a39487] mt-1 uppercase tracking-wider">Цельный чепрак</span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#c28e5c]">100% ручной</span>
            <span className="text-xs text-[#a39487] mt-1 uppercase tracking-wider">Седельный шов</span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="font-display text-2xl sm:text-3xl font-bold text-[#c28e5c]">По всей РФ</span>
            <span className="text-xs text-[#a39487] mt-1 uppercase tracking-wider">СДЭК и Почта из СПб</span>
          </div>
        </div>

      </div>
    </section>
  );
}
