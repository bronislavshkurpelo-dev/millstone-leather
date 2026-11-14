import React, { useState } from 'react';
import { Sparkles, Check, Send, Copy, CheckCheck, Sliders, Info, ExternalLink } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

const ITEM_TYPES = [
  { id: 'strap', name: 'Ремешок для часов (Carrera, Hanowa, Diesel и др.)', basePrice: 3000, time: '3-4 дня' },
  { id: 'belt', name: 'Ремень классический / с именной пряжкой', basePrice: 4800, time: '3-5 дней' },
  { id: 'wallet', name: 'Кошелек (Бифолд / Трифолд Alran)', basePrice: 4800, time: '4-6 дней' },
  { id: 'bag', name: 'Сумка через плечо / Кожаный рюкзак / Саквояж', basePrice: 12500, time: '7-14 дней' },
  { id: 'cover', name: 'Чехол для вина / Ножны для ножа / Чехол для Vertu', basePrice: 3500, time: '3-5 дней' },
  { id: 'clip', name: 'Зажим для купюр / Обложка на паспорт', basePrice: 2900, time: '2-4 дня' },
];

const LEATHER_TYPES = [
  { id: 'alran', name: 'Французская кожа Alran Chèvre Sully', desc: 'Эталонная фактурная козья кожа (Франция)', hex: '#667a42' },
  { id: 'dakota', name: 'Итальянская кожа Nero Dakota', desc: 'Плотная шелковистая растишка премиум-класса', hex: '#262423' },
  { id: 'cheprak', name: 'Цельный чепрак 4.0 мм (Орех/Черный)', desc: 'Тяжелая ременная бычья кожа повышенной прочности', hex: '#4a301d' },
  { id: 'pullup', name: 'Винтажный коньячный Pull-Up', desc: 'Красиво светлеет на изгибах и покрывается патиной', hex: '#964d23' },
];

const THREAD_COLORS = [
  { id: 'white', name: 'Белая / Светлая нить', desc: 'Классический контрастный шов', hex: '#f0ece1' },
  { id: 'tone', name: 'В тон кожи', desc: 'Строгий минималистичный шов', hex: '#4a3a2e' },
  { id: 'graphite', name: 'Графит / Чёрный', desc: 'Сдержанный темный акцент', hex: '#1c1b1a' },
  { id: 'terracotta', name: 'Охра / Терракот', desc: 'Тёплый винтажный стежок', hex: '#b35d36' },
];

export default function CustomOrderCalculator() {
  const [selectedItem, setSelectedItem] = useState(ITEM_TYPES[0]);
  const [selectedLeather, setSelectedLeather] = useState(LEATHER_TYPES[0]);
  const [selectedThread, setSelectedThread] = useState(THREAD_COLORS[0]);
  const [hasInitials, setHasInitials] = useState(false);
  const [initialsText, setInitialsText] = useState('');
  const [hasGiftBox, setHasGiftBox] = useState(false);
  const [copied, setCopied] = useState(false);

  // Price Calculation
  let totalPrice = selectedItem.basePrice;
  if (hasInitials) totalPrice += 500;
  if (hasGiftBox) totalPrice += 1200;

  // Text message for VK
  const orderSummaryText = 
`Здравствуйте, Виталий! Собрал конфигурацию изделия на сайте Millstone:
• Изделие: ${selectedItem.name}
• Кожа: ${selectedLeather.name}
• Нить: ${selectedThread.name}
${hasInitials ? `• Тиснение / гравировка: "${initialsText || 'ДА'}" (+500 ₽)` : ''}
${hasGiftBox ? '• Фирменная подарочная упаковка: ДА (+1200 ₽)' : ''}
• Ориентировочная стоимость: ~${totalPrice.toLocaleString('ru-RU')} ₽
• Срок изготовления: ${selectedItem.time}

Хочу обсудить детали заказа!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="customizer" className="py-24 bg-[#14100d] relative border-b border-[#2d2117] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#271d15] border border-[#c28e5c]/30 text-xs text-[#d9a56f] mb-4">
            <Sliders className="w-3.5 h-3.5 text-[#c28e5c]" />
            <span>Индивидуальный конфигуратор</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mb-4">
            Соберите изделие под ваши размеры
          </h2>
          <p className="text-[#a09083] text-sm sm:text-base leading-relaxed">
            Ремешок для часов под геометрию корпуса, ремень по обхвату талии или сумка с именным тиснением.
            Калькулятор сформирует готовое техническое задание для Виталия.
          </p>
        </div>

        {/* Interactive Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Column (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Step 1: Item type */}
            <div className="bg-[#1a140f] border border-[#33251a] rounded-2xl p-6">
              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-3">
                Шаг 1: Тип изделия
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ITEM_TYPES.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-3.5 rounded-xl text-left transition-all border ${
                      selectedItem.id === item.id
                        ? 'bg-[#291e16] border-[#c28e5c] text-[#f5eee8] shadow-md'
                        : 'bg-[#14100d] border-[#291e16] text-[#b0a093] hover:border-[#423123]'
                    }`}
                  >
                    <div className="font-medium text-sm text-[#f5eee8] mb-1 leading-snug">{item.name}</div>
                    <div className="flex items-center justify-between text-xs text-[#8c7a6e] mt-2 pt-2 border-t border-[#261c14]">
                      <span>от {item.basePrice.toLocaleString('ru-RU')} ₽</span>
                      <span>{item.time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Leather */}
            <div className="bg-[#1a140f] border border-[#33251a] rounded-2xl p-6">
              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-3">
                Шаг 2: Сорт и оттенок кожи
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LEATHER_TYPES.map((leather) => (
                  <button
                    key={leather.id}
                    onClick={() => setSelectedLeather(leather)}
                    className={`p-3.5 rounded-xl text-left transition-all border flex items-start gap-3 ${
                      selectedLeather.id === leather.id
                        ? 'bg-[#291e16] border-[#c28e5c] text-[#f5eee8] shadow-md'
                        : 'bg-[#14100d] border-[#291e16] text-[#b0a093] hover:border-[#423123]'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-full border border-white/20 shrink-0 mt-0.5 shadow-inner"
                      style={{ backgroundColor: leather.hex }}
                    />
                    <div>
                      <div className="font-medium text-sm text-[#f5eee8] leading-snug">{leather.name}</div>
                      <div className="text-xs text-[#8c7a6e] mt-1 leading-snug">{leather.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Thread Color */}
            <div className="bg-[#1a140f] border border-[#33251a] rounded-2xl p-6">
              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-3">
                Шаг 3: Цвет вощеной нити (ручной седельный шов)
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {THREAD_COLORS.map((thread) => (
                  <button
                    key={thread.id}
                    onClick={() => setSelectedThread(thread)}
                    className={`p-3 rounded-xl text-center transition-all border flex flex-col items-center gap-2 ${
                      selectedThread.id === thread.id
                        ? 'bg-[#291e16] border-[#c28e5c] text-[#f5eee8]'
                        : 'bg-[#14100d] border-[#291e16] text-[#b0a093] hover:border-[#423123]'
                    }`}
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-white/20"
                      style={{ backgroundColor: thread.hex }}
                    />
                    <span className="text-xs font-medium text-[#f5eee8]">{thread.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Personalization & Packaging */}
            <div className="bg-[#1a140f] border border-[#33251a] rounded-2xl p-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block">
                Шаг 4: Персонализация и упаковка
              </span>

              {/* Initials toggle */}
              <div className="p-4 rounded-xl bg-[#14100d] border border-[#2b1f16] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-medium text-sm text-[#f5eee8]">
                    Горячее тиснение / гравировка (+500 ₽)
                  </div>
                  <div className="text-xs text-[#8c7a6e] mt-0.5">
                    Латунное клише Millstone, инициалы, монограмма или гравировка на пряжке
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {hasInitials && (
                    <input
                      type="text"
                      placeholder="Инициалы (напр. В.Ж.)"
                      maxLength={12}
                      value={initialsText}
                      onChange={(e) => setInitialsText(e.target.value)}
                      className="bg-[#241a12] border border-[#423123] rounded-lg px-3 py-1.5 text-xs text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] w-36 sm:w-40"
                    />
                  )}
                  <button
                    onClick={() => setHasInitials(!hasInitials)}
                    className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                      hasInitials
                        ? 'bg-[#c28e5c] border-[#c28e5c] text-[#12100e]'
                        : 'bg-[#1a140f] border-[#423123] text-transparent'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
              </div>

              {/* Wooden Box toggle */}
              <div className="p-4 rounded-xl bg-[#14100d] border border-[#2b1f16] flex items-center justify-between gap-3">
                <div>
                  <div className="font-medium text-sm text-[#f5eee8]">
                    Подарочная упаковка (+1 200 ₽)
                  </div>
                  <div className="text-xs text-[#8c7a6e] mt-0.5">
                    Деревянный бокс со стружкой и сургучной печатью
                  </div>
                </div>
                <button
                  onClick={() => setHasGiftBox(!hasGiftBox)}
                  className={`w-6 h-6 rounded-md flex items-center justify-center border transition-all shrink-0 ${
                    hasGiftBox
                      ? 'bg-[#c28e5c] border-[#c28e5c] text-[#12100e]'
                      : 'bg-[#1a140f] border-[#423123] text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </button>
              </div>

            </div>

          </div>

          {/* Result / Summary Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#1b1510] border-2 border-[#c28e5c]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c28e5c]/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-2">
                Ваша персональная конфигурация
              </span>
              <h3 className="font-display text-2xl font-bold text-[#f5eee8] mb-6">
                Итог расчета
              </h3>

              {/* Summary List */}
              <div className="space-y-3.5 pb-6 border-b border-[#30241b] text-sm">
                <div className="flex justify-between items-start gap-3">
                  <span className="text-[#9e8f82] shrink-0">Изделие:</span>
                  <span className="font-medium text-[#f5eee8] text-right text-xs leading-relaxed">{selectedItem.name}</span>
                </div>
                <div className="flex justify-between items-start gap-3">
                  <span className="text-[#9e8f82] shrink-0">Кожа:</span>
                  <span className="font-medium text-[#f5eee8] text-right text-xs leading-relaxed">{selectedLeather.name}</span>
                </div>
                <div className="flex justify-between items-center gap-3">
                  <span className="text-[#9e8f82] shrink-0">Нить:</span>
                  <span className="font-medium text-[#f5eee8] text-xs">{selectedThread.name}</span>
                </div>
                {hasInitials && (
                  <div className="flex justify-between items-center text-[#c28e5c] text-xs">
                    <span>Персонализация:</span>
                    <span>{initialsText ? `"${initialsText}"` : 'Да'} (+500 ₽)</span>
                  </div>
                )}
                {hasGiftBox && (
                  <div className="flex justify-between items-center text-[#c28e5c] text-xs">
                    <span>Подарочный бокс:</span>
                    <span>Да (+1 200 ₽)</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#9e8f82]">Срок изготовления:</span>
                  <span className="text-[#d9a56f] font-medium">{selectedItem.time}</span>
                </div>
              </div>

              {/* Price Row */}
              <div className="py-6 border-b border-[#30241b] flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-[#8a796e] block uppercase tracking-wider">
                    Ориентировочная цена
                  </span>
                  <span className="font-display text-3xl font-extrabold text-[#f5eee8]">
                    ~{totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                <span className="text-xs text-[#8a796e] italic">без учета доставки</span>
              </div>

              {/* Direct Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href={MASTER_VK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#c28e5c] to-[#ab7542] hover:from-[#d19b67] hover:to-[#bd824c] text-[#12100e] font-bold text-center text-sm sm:text-base rounded-xl transition-all shadow-xl shadow-[#c28e5c]/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Отправить Виталию в VK</span>
                  <ExternalLink className="w-4 h-4 opacity-75" />
                </a>

                <button
                  onClick={copyToClipboard}
                  className="w-full py-3 px-6 bg-[#241a12] hover:bg-[#302319] text-[#d6c7bc] text-xs sm:text-sm font-medium rounded-xl transition-colors border border-[#3d2c1e] flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Текст заказа скопирован!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#c28e5c]" />
                      <span>Скопировать текст заказа в буфер</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-[#7a6b5f]">
                <Info className="w-3.5 h-3.5 text-[#c28e5c] shrink-0" />
                <span>Мастер согласует точные размеры и фурнитуру перед стартом пошива.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
