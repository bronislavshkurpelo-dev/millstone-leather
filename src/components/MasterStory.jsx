import React from 'react';
import { Hammer, Compass, HeartHandshake } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

export default function MasterStory() {
  return (
    <section id="about" className="py-24 bg-[#12100e] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos & Master Card Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Watch strap photo frame */}
            <div className="rounded-3xl overflow-hidden border border-[#382b20] shadow-2xl aspect-[4/5] bg-[#0c0a08] relative group flex items-center justify-center p-6">
              <img
                src="/images/catalog/img1.jpg"
                alt="Ремешок из кожи аллигатора на золотые часы Franck Muller"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#12100e]/90 backdrop-blur-md border border-[#c28e5c]/30 text-xs text-[#e8dfd8] shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c28e5c]" />
                <span className="font-medium">Кожа аллигатора • Franck Muller</span>
              </div>
            </div>

            {/* Master Identity Card - clean standalone block without any overlapping */}
            <div className="bg-[#1c1611] border border-[#c28e5c]/30 p-5 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#c28e5c]/15 border border-[#c28e5c]/30 flex items-center justify-center text-[#c28e5c] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#f5eee8]">
                    Виталий Жерновой
                  </div>
                  <div className="text-xs text-[#c28e5c] font-medium">
                    Норильск ➔ Санкт-Петербург
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#a09083] leading-relaxed">
                Основатель мастерской Millstone. Ручной пошив ремешков для часов, ремней, сумок и авторских кожаных аксессуаров.
              </p>
            </div>

          </div>

          {/* Story Content Column (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
              О мастере и бренде
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mt-2 mb-6 leading-tight">
              «Каждая вещь создается вручную — от первого надреза до последнего стежка»
            </h2>

            <div className="space-y-4 text-[#a8998d] text-sm sm:text-base leading-relaxed">
              <p>
                Меня зовут <strong className="text-[#f5eee8] font-semibold">Виталий Жерновой</strong>. Бренд <strong className="text-[#c28e5c] font-semibold">Millstone</strong> появился как ответ на засилье пластика и прессованной кожи: я создаю вещи, которые приятно держать в руках и которые служат десятилетиями.
              </p>
              <p>
                Начав путь кожевника на севере — в Норильске, я перевез мастерскую в <strong className="text-[#f5eee8] font-semibold">Санкт-Петербург</strong>. Строгая северная эстетика, четкие линии и уважение к честному труду стали основой каждого изделия.
              </p>
              <p>
                Я принципиально не использую машинный конвейер. Ручной седельный шов двумя иглами, отборная кожа растительного дубления, сафьяно, кожа крокодила и цельный чепрак 4 мм гарантируют, что вещь сохранит надежность и красоту даже через 10–15 лет активной носки.
              </p>
            </div>

            {/* Values micro-grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-[#2d2218]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#271d15] flex items-center justify-center text-[#c28e5c] shrink-0 mt-0.5">
                  <Hammer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f5eee8]">Анатомическая посадка</h4>
                  <p className="text-xs text-[#8c7b6f] mt-0.5">Точная ручная подгонка ремешков под корпус Tag Heuer, Hanowa, Diesel, Franck Muller.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#271d15] flex items-center justify-center text-[#c28e5c] shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#f5eee8]">Прямой диалог с мастером</h4>
                  <p className="text-xs text-[#8c7b6f] mt-0.5">Вы общаетесь напрямую со мной в VK — без посредников и менеджеров.</p>
                </div>
              </div>
            </div>

            {/* Direct message button */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={MASTER_VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c28e5c] hover:bg-[#d9a56f] text-[#12100e] font-bold text-sm transition-all shadow-lg shadow-[#c28e5c]/20"
              >
                <span>Личная страница Виталия в VK</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
