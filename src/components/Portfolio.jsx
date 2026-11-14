import React, { useState } from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useProducts } from '../hooks/useProducts';
import ProductModal from './ProductModal';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products } = useProducts();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter((item) => item.category === activeCategory);

  return (
    <section id="catalog" className="py-24 bg-[#12100e] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
              Витрина работ мастера
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mt-2">
              Каталог изделий на заказ
            </h2>
          </div>
          <p className="text-[#a09083] text-sm max-w-md mt-4 md:mt-0 leading-relaxed">
            Каждое изделие отшивается индивидуально: выбор кожи, точные размеры, цвет нити и персональная гравировка.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#c28e5c] text-[#12100e] font-semibold shadow-lg shadow-[#c28e5c]/20'
                  : 'bg-[#1e1813] text-[#b8a79a] hover:bg-[#2c221a] hover:text-[#f5eee8] border border-[#33251c]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid: 3 columns for balanced 3x3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-[#191410] border border-[#302319] hover:border-[#c28e5c]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container: Full view (общий план) with object-contain */}
                <div className="relative aspect-[4/5] bg-[#0b0908] overflow-hidden flex items-center justify-center p-4 border-b border-[#241a12]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                    loading="lazy"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#12100e]/90 backdrop-blur-md text-[#d9a56f] border border-[#c28e5c]/40 rounded-full shadow-md">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-[#8c7c70] mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#c28e5c]" />
                    <span>Срок изготовления: {product.leadTime}</span>
                  </div>

                  <h3 className="h-14 font-display text-lg font-bold text-[#f5eee8] group-hover:text-[#c28e5c] transition-colors line-clamp-2 mb-2 leading-snug">
                    {product.title}
                  </h3>

                  <p className="text-xs text-[#a09083] line-clamp-3 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="px-5 pb-5 pt-3 border-t border-[#261c14] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#807267] block uppercase tracking-wider">Ориентир цены</span>
                  <span className="text-lg font-bold text-[#d9a56f]">{product.price}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[#241a13] border border-[#382b20] group-hover:bg-[#c28e5c] group-hover:border-[#c28e5c] text-[#c28e5c] group-hover:text-[#12100e] flex items-center justify-center transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#211812] to-[#1a130e] border border-[#3d2c1f] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#c28e5c]/10 border border-[#c28e5c]/30 flex items-center justify-center text-[#c28e5c] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-[#f5eee8]">
                Не нашли нужную модель или есть свой эскиз?
              </h4>
              <p className="text-sm text-[#a09083] mt-1">
                Виталий изготавливает изделия по вашим фото, чертежам и меркам корпуса часов / обхвата талии.
              </p>
            </div>
          </div>

          <a
            href="#customizer"
            className="px-6 py-3.5 rounded-xl bg-[#c28e5c] hover:bg-[#d9a56f] text-[#12100e] font-bold text-sm whitespace-nowrap transition-all shadow-md"
          >
            Собрать свой проект
          </a>
        </div>

      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
