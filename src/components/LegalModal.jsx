import React, { useState } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { LEGAL_DOCS } from '../data/legalContent';

export default function LegalModal({ isOpen, onClose, initialTab = 'privacy' }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  const currentDoc = LEGAL_DOCS[activeTab] || LEGAL_DOCS.privacy;

  return (
    <div className="fixed inset-0 z-50 bg-[#0c0a08]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#18130e] border border-[#3d2c1f] rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-[#2d2117] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c28e5c]/15 border border-[#c28e5c]/30 flex items-center justify-center text-[#c28e5c]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#c28e5c] block">
                Юридическая информация • РФ
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#f5eee8]">
                Правовые документы Millstone
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#241a12] text-[#9c8c7f] hover:text-[#f5eee8] hover:bg-[#33251a] flex items-center justify-center transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#2d2117] bg-[#14100c] px-6 gap-2 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'border-[#c28e5c] text-[#f5eee8]'
                : 'border-transparent text-[#8c7b6f] hover:text-[#d6c7bc]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Политика конфиденциальности (152-ФЗ)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'border-[#c28e5c] text-[#f5eee8]'
                : 'border-transparent text-[#8c7b6f] hover:text-[#d6c7bc]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Пользовательское соглашение и оферта</span>
          </button>

          <button
            onClick={() => setActiveTab('consent')}
            className={`py-3.5 px-4 text-xs font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'consent'
                ? 'border-[#c28e5c] text-[#f5eee8]'
                : 'border-transparent text-[#8c7b6f] hover:text-[#d6c7bc]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Согласие на обработку данных</span>
          </button>
        </div>

        {/* Document Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#b8a79a] leading-relaxed flex-grow">
          
          <div className="pb-4 border-b border-[#2d2117]">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#f5eee8] mb-1">
              {currentDoc.title}
            </h2>
            <p className="text-xs text-[#c28e5c] font-medium">
              {currentDoc.subtitle}
            </p>
            <span className="text-[11px] text-[#78695d] block mt-1">
              {currentDoc.date}
            </span>
          </div>

          {currentDoc.sections.map((section, idx) => (
            <div key={idx} className="space-y-2">
              <h4 className="font-semibold text-sm text-[#f5eee8] text-base">
                {section.heading}
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-[#9c8c7f]">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Requisites Footer Box */}
          <div className="pt-6 border-t border-[#2d2117] bg-[#120f0c] p-4 rounded-xl text-xs text-[#8c7b6f]">
            <span className="font-bold text-[#d6c7bc] block mb-1">
              Реквизиты оператора и мастера:
            </span>
            <p>Жерновой Виталий (Мастерская Millstone)</p>
            <p>Статус: Плательщик налога на профессиональный доход (Самозанятый)</p>
            <p>Регион деятельности: г. Санкт-Петербург, доставка по всей территории РФ</p>
            <p>Канал связи: vk.ru/millstone_v</p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2d2117] bg-[#14100c] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-[#78695d]">
            Соответствует ФЗ-152 и ст. 437 ГК РФ
          </span>
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl bg-[#c28e5c] hover:bg-[#d9a56f] text-[#12100e] font-bold text-xs transition-colors"
          >
            Понятно, закрыть
          </button>
        </div>

      </div>
    </div>
  );
}
