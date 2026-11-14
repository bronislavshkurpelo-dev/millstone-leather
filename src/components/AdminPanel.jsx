import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Plus,
  Pencil,
  Trash2,
  Image as ImageIcon,
  Upload,
  RotateCcw,
  Save,
  X,
  Search,
  ExternalLink,
  CheckCircle,
  Eye,
  AlertCircle
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { useProducts } from '../hooks/useProducts';
import { checkAdminAuth, loginAdmin, logoutAdmin } from '../services/productStore';

const CATEGORY_MAP = {
  straps: 'Ремешки для часов',
  belts: 'Ремни',
  wallets: 'Кошельки и картхолдеры',
  bags: 'Сумки и саквояжи',
  accessories: 'Чехлы и аксессуары'
};

export default function AdminPanel({ onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAdminAuth());
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const { products, addProduct, updateProduct, deleteProduct, resetToDefaults } = useProducts();

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal State: null (closed), 'new' (add), or product object (editing)
  const [editingProduct, setEditingProduct] = useState(null);

  // Form Fields
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('straps');
  const [formPrice, setFormPrice] = useState('');
  const [formLeadTime, setFormLeadTime] = useState('');
  const [formTag, setFormTag] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const res = loginAdmin(passwordInput);
    if (res.success) {
      setIsAuthenticated(true);
      setLoginError('');
      setPasswordInput('');
    } else {
      setLoginError(res.error);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
  };

  // Open Form for Adding New Product
  const handleOpenAdd = () => {
    setFormTitle('');
    setFormCategory('straps');
    setFormPrice('от 4 000 ₽');
    setFormLeadTime('3–5 дней');
    setFormTag('Ручная работа');
    setFormImage('/images/catalog/img1.jpg');
    setFormDescription('');
    setFormDetails('Материал: натуральная кожа растительного дубления\nШов: ручной седельный французский шов\nИндивидуальная подгонка размеров');
    setEditingProduct('new');
    setFormSuccessMessage('');
  };

  // Open Form for Editing Existing Product
  const handleOpenEdit = (product) => {
    setFormTitle(product.title);
    setFormCategory(product.category || 'straps');
    setFormPrice(product.price);
    setFormLeadTime(product.leadTime || '3–5 дней');
    setFormTag(product.tag || '');
    setFormImage(product.image);
    setFormDescription(product.description || '');
    setFormDetails(Array.isArray(product.details) ? product.details.join('\n') : '');
    setEditingProduct(product);
    setFormSuccessMessage('');
  };

  // Handle Photo File Upload (Convert to Base64 Data URL)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 8 * 1024 * 1024) {
      alert('Размер файла превышает 8 МБ. Пожалуйста, выберите файл меньшего размера.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormImage(event.target?.result);
    };
    reader.readAsDataURL(file);
  };

  // Save Product (Create or Update)
  const handleSaveProduct = (e) => {
    e.preventDefault();

    if (!formTitle.trim()) {
      alert('Пожалуйста, введите название изделия');
      return;
    }
    if (!formImage.trim()) {
      alert('Пожалуйста, загрузите или укажите фото изделия');
      return;
    }

    const detailsArray = formDetails
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    const productData = {
      title: formTitle.trim(),
      category: formCategory,
      price: formPrice.trim() || 'По запросу',
      leadTime: formLeadTime.trim() || '3–5 дней',
      tag: formTag.trim(),
      image: formImage.trim(),
      description: formDescription.trim(),
      details: detailsArray
    };

    if (editingProduct === 'new') {
      addProduct(productData);
      setFormSuccessMessage('Изделие успешно добавлено в каталог!');
    } else if (editingProduct && editingProduct.id) {
      updateProduct(editingProduct.id, productData);
      setFormSuccessMessage('Изделие успешно обновлено!');
    }

    setTimeout(() => {
      setEditingProduct(null);
      setFormSuccessMessage('');
    }, 800);
  };

  // Handle Delete with Confirmation
  const handleDelete = (id, title) => {
    if (window.confirm(`Вы уверены, что хотите удалить «${title}» из каталога?`)) {
      deleteProduct(id);
    }
  };

  // Reset to Defaults
  const handleReset = () => {
    if (window.confirm('Сбросить весь каталог к исходным 9 эталонным работам мастера? Все добавленные тестовые работы будут удалены.')) {
      resetToDefaults();
    }
  };

  // Filter products by category and search query
  const filteredProducts = products.filter((item) => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // -------------------------------------------------------------
  // VIEW 1: Login Gate (If not authenticated)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0d0b09]/95 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-[#18130e] border border-[#3d2c1f] rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#241a12] text-[#9c8c7f] hover:text-[#f5eee8] flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#c28e5c]/15 border border-[#c28e5c]/30 text-[#c28e5c] flex items-center justify-center mx-auto mb-3">
              <Lock className="w-7 h-7" />
            </div>
            <span className="font-display text-xl font-bold tracking-[0.2em] text-[#f5eee8] block">
              MILLSTONE
            </span>
            <h3 className="text-base font-semibold text-[#e8dfd8] mt-1">
              Вход в панель мастера
            </h3>
            <p className="text-xs text-[#8c7b6f] mt-1">
              Управление изделиями каталога, ценами и фотографиями
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#b5a598] mb-1.5">
                Пароль администратора:
              </label>
              <input
                type="password"
                required
                placeholder="Введите пароль..."
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-3 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                autoFocus
              />
              <p className="text-[11px] text-[#78695d] mt-1">
                Подсказка для теста: <code className="text-[#c28e5c] font-mono">millstone2026</code>
              </p>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/50 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] text-[#12100e] font-bold text-sm transition-all shadow-lg shadow-[#c28e5c]/20"
            >
              Войти в панель мастера
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="text-xs text-[#a09083] hover:text-[#c28e5c] transition-colors"
            >
              ← Вернуться на витрину сайта
            </button>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Full Admin Dashboard
  // -------------------------------------------------------------
  return (
    <div className="fixed inset-0 z-50 bg-[#0d0b09] overflow-y-auto text-[#e8dfd8] flex flex-col">
      
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#16120e]/95 backdrop-blur-md border-b border-[#33251a] px-4 sm:px-8 py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold tracking-[0.2em] text-[#f5eee8]">
              MILLSTONE
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#c28e5c]/20 text-[#d9a56f] border border-[#c28e5c]/40">
              Панель мастера
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#241a12] hover:bg-[#33251a] text-xs font-semibold text-[#f5eee8] border border-[#3d2d20] transition-colors flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-[#c28e5c]" />
              <span>Перейти на сайт</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2 rounded-xl hover:bg-red-950/40 text-xs font-medium text-[#9c8c7f] hover:text-red-300 transition-colors"
            >
              Выйти
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 flex-grow">
        
        {/* Toolbar: Stats & Actions */}
        <div className="bg-[#18130e] border border-[#33251a] rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#f5eee8]">
                Управление витриной изделий
              </h1>
              <p className="text-xs sm:text-sm text-[#9c8c7f] mt-1">
                Все изменения мгновенно отражаются в каталоге на сайте. Изделий в каталоге: <strong className="text-[#c28e5c]">{products.length}</strong>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleOpenAdd}
                className="py-3 px-5 rounded-xl bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] text-[#12100e] font-bold text-sm transition-all shadow-lg shadow-[#c28e5c]/20 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>+ Добавить новое изделие</span>
              </button>

              <button
                onClick={handleReset}
                title="Сбросить каталог к оригинальным 9 изделиям"
                className="p-3 rounded-xl bg-[#241a12] hover:bg-[#33251a] text-[#b5a396] hover:text-[#f5eee8] border border-[#3d2d20] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                <RotateCcw className="w-4 h-4 text-[#c28e5c]" />
                <span className="hidden sm:inline">Сбросить к исходным</span>
              </button>
            </div>

          </div>

          {/* Search & Filter Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6 pt-6 border-t border-[#291e15]">
            
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#8c7b6f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Поиск по названию или описанию изделия..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#120f0c] border border-[#33251a] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
              />
            </div>

            <div className="md:col-span-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-[#c28e5c] text-[#12100e] font-bold'
                    : 'bg-[#120f0c] text-[#9c8c7f] hover:text-[#f5eee8] border border-[#33251a]'
                }`}
              >
                Все ({products.length})
              </button>
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => {
                const count = products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#c28e5c] text-[#12100e] font-bold'
                        : 'bg-[#120f0c] text-[#9c8c7f] hover:text-[#f5eee8] border border-[#33251a]'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#18130e] border border-[#33251a] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-[#c28e5c]/40 transition-colors group"
            >
              <div>
                {/* Product Thumbnail */}
                <div className="aspect-[4/3] bg-[#0d0b09] relative overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#120f0c]/90 text-[#d9a56f] border border-[#c28e5c]/30 rounded-md">
                      {product.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 text-[10px] font-medium bg-[#120f0c]/80 text-[#8c7b6f] rounded border border-[#2b2118]">
                    {CATEGORY_MAP[product.category] || product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="text-[11px] text-[#8c7b6f] mb-1">
                    Срок: {product.leadTime || '3–5 дней'}
                  </div>
                  <h3 className="font-display text-base font-bold text-[#f5eee8] line-clamp-1 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#9c8c7f] line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>
                  <div className="text-sm font-bold text-[#d9a56f]">
                    {product.price}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 pt-3 border-t border-[#2b1f16] flex items-center justify-end gap-2 bg-[#14100c]">
                <button
                  onClick={() => handleOpenEdit(product)}
                  className="px-3 py-1.5 rounded-lg bg-[#271d15] hover:bg-[#3d2d20] text-xs font-semibold text-[#f5eee8] transition-colors flex items-center gap-1.5"
                >
                  <Pencil className="w-3.5 h-3.5 text-[#c28e5c]" />
                  <span>Редактировать</span>
                </button>
                <button
                  onClick={() => handleDelete(product.id, product.title)}
                  className="px-3 py-1.5 rounded-lg hover:bg-red-950/40 text-xs font-semibold text-[#8c7b6f] hover:text-red-400 transition-colors flex items-center gap-1.5"
                  title="Удалить изделие"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Удалить</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-[#18130e] border border-[#33251a] rounded-3xl">
            <p className="text-sm text-[#9c8c7f]">
              Изделий по вашему запросу не найдено.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-3 text-xs text-[#c28e5c] hover:underline"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

      </main>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: Add / Edit Product Form                                */}
      {/* ------------------------------------------------------------- */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-[#0c0a08]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#18130e] border border-[#3d2c1f] rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#2d2117] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#c28e5c] font-semibold">
                  {editingProduct === 'new' ? 'Новое изделие' : 'Редактирование'}
                </span>
                <h3 className="font-display text-xl font-bold text-[#f5eee8]">
                  {editingProduct === 'new' ? 'Добавление работы в каталог' : formTitle || 'Изделие'}
                </h3>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="w-9 h-9 rounded-full bg-[#241a12] text-[#9c8c7f] hover:text-[#f5eee8] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Form */}
            <form onSubmit={handleSaveProduct} className="p-6 sm:p-8 space-y-5">
              
              {/* Row 1: Title */}
              <div>
                <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                  Название изделия <span className="text-[#c28e5c]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Например: Ремешок для часов TAG Heuer CARRERA"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                />
              </div>

              {/* Row 2: Category & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                    Категория <span className="text-[#c28e5c]">*</span>
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  >
                    <option value="straps">Ремешки для часов</option>
                    <option value="belts">Ремни</option>
                    <option value="wallets">Кошельки и картхолдеры</option>
                    <option value="bags">Сумки и саквояжи</option>
                    <option value="accessories">Чехлы и аксессуары</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                    Особенность / Бейдж
                  </label>
                  <input
                    type="text"
                    placeholder="Например: Анатомическая посадка, Хит"
                    value={formTag}
                    onChange={(e) => setFormTag(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Price & Lead Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                    Ориентир цены <span className="text-[#c28e5c]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Например: от 4 500 ₽"
                    value={formPrice}
                    onChange={(e) => setFormPrice(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                    Срок изготовления
                  </label>
                  <input
                    type="text"
                    placeholder="Например: 3–5 дней"
                    value={formLeadTime}
                    onChange={(e) => setFormLeadTime(e.target.value)}
                    className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors"
                  />
                </div>
              </div>

              {/* Row 4: Photo Uploader & Preview */}
              <div>
                <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                  Фотография изделия <span className="text-[#c28e5c]">*</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  
                  {/* Image Preview Box */}
                  <div className="sm:col-span-4 aspect-square bg-[#0c0a08] border border-[#382b20] rounded-2xl overflow-hidden flex items-center justify-center p-2 relative group">
                    {formImage ? (
                      <img
                        src={formImage}
                        alt="Предпросмотр"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="text-center text-[#78695d]">
                        <ImageIcon className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <span className="text-[10px]">Нет фото</span>
                      </div>
                    )}
                  </div>

                  {/* Upload Controls */}
                  <div className="sm:col-span-8 space-y-3">
                    <div>
                      <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#271d15] hover:bg-[#382a1e] text-xs font-semibold text-[#f5eee8] cursor-pointer border border-[#3d2c1f] transition-colors">
                        <Upload className="w-4 h-4 text-[#c28e5c]" />
                        <span>Выбрать фото с устройства</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[11px] text-[#78695d] block mt-1">
                        Поддерживаются JPG, PNG, WEBP с телефона или компьютера
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#8c7b6f] block mb-1">
                        или укажите путь / ссылку:
                      </span>
                      <input
                        type="text"
                        placeholder="/images/catalog/... или https://..."
                        value={formImage}
                        onChange={(e) => setFormImage(e.target.value)}
                        className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-3 py-2 text-xs text-[#f5eee8] focus:outline-none focus:border-[#c28e5c]"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* Row 5: Description */}
              <div>
                <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                  Подробное описание изделия
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишите особенности изделия, назначение, тактильные ощущения от кожи..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Row 6: Details / Specifications (one per line) */}
              <div>
                <label className="block text-xs font-semibold text-[#d6c7bc] mb-1.5">
                  Характеристики (по одной в каждой строке)
                </label>
                <textarea
                  rows={3}
                  placeholder="Материал: натуральная кожа растительного дубления&#10;Шов: ручной седельный двумя иглами&#10;Фурнитура: литая латунь"
                  value={formDetails}
                  onChange={(e) => setFormDetails(e.target.value)}
                  className="w-full bg-[#120f0c] border border-[#382b20] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#f5eee8] focus:outline-none focus:border-[#c28e5c] transition-colors resize-none font-mono text-[11px] leading-relaxed"
                />
              </div>

              {/* Success Notification */}
              {formSuccessMessage && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{formSuccessMessage}</span>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-[#2d2117] flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#241a12] hover:bg-[#33251a] text-xs font-semibold text-[#9c8c7f] transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#d9a56f] to-[#c28e5c] hover:from-[#e3b584] hover:to-[#ce9b6a] text-[#12100e] font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#c28e5c]/20 flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Сохранить изделие</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
