import React from 'react';
import { X, Check, Clock, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#181310] border border-[#3d2e23] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#120f0d]/90 text-[#b5a396] hover:text-[#f5eee8] hover:bg-[#2b1f16] flex items-center justify-center transition-all border border-[#3d2e23]"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Column: object-contain inside clean dark canvas */}
          <div className="relative bg-[#090807] min-h-[340px] md:min-h-[500px] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#261c14]">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[460px] w-full h-auto object-contain object-center drop-shadow-2xl"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#c28e5c] text-[#12100e] rounded-full shadow-lg">
                {product.tag}
              </span>
            )}
          </div>

          {/* Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#a39487] mb-2.5">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#c28e5c]" />
                  Срок изготовления: {product.leadTime}
                </span>
                <span>•</span>
                <span className="text-[#c28e5c] font-medium">100% ручная сборка</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f5eee8] mb-3 leading-snug">
                {product.title}
              </h3>

              <div className="text-2xl font-bold text-[#d9a56f] mb-4">
                {product.price}
              </div>

              <p className="text-xs sm:text-sm text-[#b0a093] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Spec bullets */}
              <div className="space-y-2 mb-6">
                <span className="text-xs uppercase tracking-wider text-[#8a7a6e] font-semibold block mb-2">
                  Материалы и особенности:
                </span>
                {product.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d6c9bd]">
                    <Check className="w-4 h-4 text-[#c28e5c] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#211913] border border-[#382b20] mb-6">
                <div className="flex items-center gap-2 text-xs text-[#d9a56f] font-semibold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Индивидуальный пошив</span>
                </div>
                <p className="text-xs text-[#a09083]">
                  Возможна замена цвета кожи, цвета вощеной нити, типа фурнитуры или нанесение персонального клейма/инициалов.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#2e231b] flex flex-col sm:flex-row gap-3">
              <a
                href={MASTER_VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#c28e5c] to-[#ab7542] hover:from-[#d19b67] hover:to-[#bd824c] text-[#12100e] font-bold text-center text-sm transition-all shadow-lg shadow-[#c28e5c]/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Заказать эту модель в VK</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              <button
                onClick={onClose}
                className="py-3.5 px-6 rounded-xl bg-[#231b15] hover:bg-[#2e231b] text-[#b8a79a] text-sm font-medium transition-colors border border-[#3d2e23]"
              >
                Вернуться
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
