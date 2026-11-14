import React, { useState } from 'react';
import { MessageSquare, MapPin, Send, ExternalLink, ChevronDown } from 'lucide-react';
import { MASTER_VK_LINK } from '../data/products';

const FAQ_ITEMS = [
  {
    q: 'Как правильно определить размер ремня?',
    a: 'Самый простой способ — измерить свой старый удобный ремень от внутреннего края пряжки до того отверстия, на которое вы застегиваете чаще всего. Также можно измерить обхват талии поверх брюк в шлёвках. Виталий сделает центральное отверстие ровно под ваш размер, оставив комфортный запас в обе стороны.'
  },
  {
    q: 'Сколько служит изделие из натуральной кожи ручной работы?',
    a: 'При минимальном уходе (протирание восковым бальзамом раз в полгода) изделия из цельного чепрака и юфти служат десятилетиями. Они не трескаются и не осыпаются, а со временем приобретают глубокую благородную патину.'
  },
  {
    q: 'Можно ли нанести мои инициалы или памятную надпись?',
    a: 'Да! Доступно горячее тиснение латунным шрифтом или лазерная гравировка: инициалы, монограммы, даты, гербы или короткие фразы на внутренней или внешней стороне ремня, кошелька или обложки.'
  },
  {
    q: 'Как упаковывается заказ, если я беру его в подарок?',
    a: 'По умолчанию каждое изделие упаковывается в плотную крафтовую бумагу с бечёвкой. Также доступна опция премиального деревянного бокса со стружкой и сургучной печатью.'
  }
];

export default function Contacts() {
  const [openFaq, setOpenFaq] = useState(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');

  const handleQuickInquiry = (e) => {
    e.preventDefault();
    const query = encodeURIComponent(
      `Здравствуйте, Виталий! Заявка с сайта Millstone:\nИмя: ${name || 'Клиент'}\nКонтакт для связи: ${contact}\nПожелания: ${comment || 'Хочу проконсультироваться по заказу'}`
    );
    window.open(`${MASTER_VK_LINK}?msg=${query}`, '_blank');
  };

  return (
    <section id="contacts" className="py-24 bg-[#12100e] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header for Balanced Geometry */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
            Связь с мастером
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f5eee8] mt-3 mb-5 leading-tight">
            Обсудим ваш индивидуальный заказ
          </h2>
          <p className="text-[#a09083] text-sm sm:text-base leading-relaxed">
            Мастерская работает напрямую с каждым клиентом. Напишите Виталию в VK — он лично проконсультирует, покажет видео отрезов кожи и рассчитает точные сроки.
          </p>
        </div>

        {/* Balanced 2-Column Equal-Height Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-20">
          
          {/* Left Card: Direct VK Connection & Details */}
          <div className="bg-[#18130e] border border-[#33251a] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-1">
                    Основной канал связи
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#f5eee8]">
                    Личная страница мастера в VK
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-[#c28e5c]/15 border border-[#c28e5c]/40 flex items-center justify-center text-[#d9a56f] font-bold text-lg shrink-0">
                  VK
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#9c8c7f] leading-relaxed mb-6">
                Здесь регулярно публикуются свежие готовые изделия, видео из мастерской в Санкт-Петербурге, процесс раскроя и отзывы заказчиков со всей России.
              </p>

              <a
                href={MASTER_VK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] text-[#12100e] font-bold text-sm sm:text-base rounded-xl transition-all shadow-lg shadow-[#c28e5c]/20 flex items-center justify-center gap-2 mb-8"
              >
                <span>Перейти в профиль vk.ru/millstone_v</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Location & Response Time embedded cleanly at bottom of card */}
            <div className="pt-6 border-t border-[#2a1e15] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#120f0c] border border-[#261c13]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d9a56f] mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Локация</span>
                </div>
                <p className="text-sm font-semibold text-[#f5eee8]">
                  Санкт-Петербург
                </p>
                <p className="text-xs text-[#827265] mt-0.5">
                  Доставка СДЭК и Почтой по РФ
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#120f0c] border border-[#261c13]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#d9a56f] mb-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Ответ мастера</span>
                </div>
                <p className="text-sm font-semibold text-[#f5eee8]">
                  В течение 1–2 часов
                </p>
                <p className="text-xs text-[#827265] mt-0.5">
                  Каждый день с 10:00 до 22:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Card: Quick Consultation Form */}
          <div className="bg-[#18130e] border border-[#33251a] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold block mb-1">
                Быстрая консультация
              </span>
              <h3 className="font-display text-2xl font-bold text-[#f5eee8] mb-2">
                Напишите пожелания к изделию
              </h3>
              <p className="text-xs sm:text-sm text-[#9c8c7f] mb-6">
                Заполните поля ниже, и сообщение автоматически откроется в диалоге с Виталием в VK.
              </p>

              <form onSubmit={handleQuickInquiry} id="quick-inquiry-form" className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#b5a598] mb-1.5">
                    Ваше имя:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Как к вам обращаться"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#33251a] rounded-xl px-4 py-3 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b5a598] mb-1.5">
                    Ссылка на ваш VK или номер телефона:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="vk.com/... или +7 (999) ..."
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#33251a] rounded-xl px-4 py-3 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#b5a598] mb-1.5">
                    Что хотите заказать (размеры, цвет, часы):
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: ремешок для часов TAG Heuer Carrera из темно-коричневой фактурной кожи или ремень 40 мм с латунной пряжкой."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#33251a] rounded-xl px-4 py-3 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors resize-none leading-relaxed"
                  />
                </div>
              </form>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                form="quick-inquiry-form"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] text-[#12100e] font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#c28e5c]/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Написать мастеру в VK</span>
              </button>

              <p className="text-[11px] text-[#78695d] text-center pt-2">
                Прямой переход на личную страницу vk.ru/millstone_v
              </p>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="pt-16 border-t border-[#2d2117] max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c28e5c] font-semibold">
              Частые вопросы
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f5eee8] mt-2">
              Ответы на популярные вопросы заказчиков
            </h3>
          </div>

          <div className="space-y-3.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#17120e] border border-[#2e2117] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#f5eee8] hover:text-[#c28e5c] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c28e5c] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#9c8c7f] leading-relaxed border-t border-[#261b13]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
