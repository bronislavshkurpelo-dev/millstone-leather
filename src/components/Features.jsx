import React from 'react';
import { Feather, Scissors, ShieldCheck, Sparkles, Check, X } from 'lucide-react';
import { CRAFT_PRINCIPLES } from '../data/products';

const iconMap = {
  Feather: Feather,
  Scissors: Scissors,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
};

export default function Features() {
  return (
    <section id="philosophy" className="py-20 bg-[#161310] relative border-y border-[#2a2018] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
            Философия мастерской
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mt-3 mb-5">
            Почему ручной пошив превосходит фабрику
          </h2>
          <p className="text-[#a09083] text-sm sm:text-base leading-relaxed">
            В массовом производстве используют прессованную стружку и швейные машины. 
            В мастерской Millstone каждое изделие рождается вручную от первого надреза до последнего стежка.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CRAFT_PRINCIPLES.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#1b1612] p-6 rounded-2xl border border-[#33251c] hover:border-[#c28e5c]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#2a1f17] flex items-center justify-center text-[#c28e5c] mb-5 group-hover:bg-[#c28e5c] group-hover:text-[#12100e] transition-colors shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#f2ebe5] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9c8e82] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Card: Mass Market vs Millstone */}
        <div className="bg-[#1b1612] border border-[#382b21] rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl font-bold text-[#f2ebe5] mb-2">
              Честное сравнение: магазин или изделие мастера
            </h3>
            <p className="text-sm text-[#9e8f82]">
              Что кроется за красивой биркой «Genuine Leather» в масс-маркете и что вы получаете в мастерской.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Mass Market */}
            <div className="bg-[#13100e]/80 rounded-2xl p-6 border border-red-950/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2d2219]">
                  <span className="font-display font-bold text-red-400">Масс-маркет / Брендовые ТЦ</span>
                  <span className="text-xs text-red-400/80 bg-red-950/50 px-2.5 py-1 rounded-md">Быстрый износ</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#9e8f82]">
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Швейный машинный шов: при разрыве одной нити распускается весь шов целиком.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Прессованная кожа (спилок/полиуретан), которая трескается и облезает через 6-12 месяцев.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Дешевый силумин и крашеный сплав вместо цельной латуни — пряжки ломаются.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Стандартные размеры без возможности подгонки и персонализации.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Millstone Handmade */}
            <div className="bg-[#241a13]/70 rounded-2xl p-6 border border-[#c28e5c]/40 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c28e5c]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#3d2b1f]">
                  <span className="font-display font-bold text-[#c28e5c]">Мастерская Millstone</span>
                  <span className="text-xs text-[#12100e] bg-[#c28e5c] font-semibold px-2.5 py-1 rounded-md">10+ лет службы</span>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-[#e0d3c7]">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#c28e5c] shrink-0 mt-0.5" />
                    <span><strong>Седельный шов двумя иглами:</strong> каждый узел затянут вручную и не может распуститься.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#c28e5c] shrink-0 mt-0.5" />
                    <span><strong>Цельный отборный чепрак:</strong> со временем благородно темнеет и покрывается патиной.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#c28e5c] shrink-0 mt-0.5" />
                    <span><strong>Литая латунь / сталь:</strong> тяжелая фурнитура, устойчивая к любым нагрузкам.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#c28e5c] shrink-0 mt-0.5" />
                    <span><strong>Индивидуальный пошив:</strong> точный обхват талии, персональные инициалы, ваш выбор нити.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
