import React from 'react';
import { WORK_STEPS } from '../data/products';
import { Truck, ShieldCheck, RefreshCw } from 'lucide-react';

export default function OrderSteps() {
  return (
    <section id="process" className="py-24 bg-[#16120f] relative border-y border-[#2b2016] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
            Простой и понятный процесс
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mt-2 mb-4">
            Как происходит заказ и изготовление
          </h2>
          <p className="text-[#9e8f82] text-sm sm:text-base leading-relaxed">
            От вашей задумки до посылки с запахом натуральной кожи в ваших руках — всего 4 простых шага.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WORK_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1510] border border-[#332419] rounded-2xl p-6 relative flex flex-col justify-between hover:border-[#c28e5c]/40 transition-colors"
            >
              <div>
                <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#c28e5c]/40 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-display text-lg font-bold text-[#f5eee8] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#948477] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {idx < WORK_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#241a12] border border-[#423123] text-center text-xs leading-5 text-[#c28e5c]">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Delivery & Guarantees bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          
          <div className="bg-[#1e1712] border border-[#38281d] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#291f16] flex items-center justify-center text-[#c28e5c] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#f5eee8] mb-1">
                Доставка по всей РФ
              </h4>
              <p className="text-xs text-[#99897d] leading-relaxed">
                СДЭК до двери или пункта выдачи, Почта России. По Санкт-Петербургу возможен самовывоз или курьер.
              </p>
            </div>
          </div>

          <div className="bg-[#1e1712] border border-[#38281d] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#291f16] flex items-center justify-center text-[#c28e5c] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#f5eee8] mb-1">
                Пожизненная гарантия на шов
              </h4>
              <p className="text-xs text-[#99897d] leading-relaxed">
                Ручной седельный шов вощеной нитью не распустится никогда. Если что-то случится со стежком — мастер исправит бесплатно.
              </p>
            </div>
          </div>

          <div className="bg-[#1e1712] border border-[#38281d] rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#291f16] flex items-center justify-center text-[#c28e5c] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-[#f5eee8] mb-1">
                Фотоотчет перед отправкой
              </h4>
              <p className="text-xs text-[#99897d] leading-relaxed">
                Виталий высылает подробные фото и видео готового изделия при дневном свете перед передачей в доставку.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
