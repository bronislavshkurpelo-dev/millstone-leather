import { PRODUCTS as DEFAULT_PRODUCTS } from '../data/products';

const STORAGE_KEY = 'millstone_catalog_v1';
const AUTH_KEY = 'millstone_admin_auth_v1';
const DEFAULT_PASSWORD = 'millstone2026';

// Subscribers for real-time reactivity in React components
const listeners = new Set();

function notifyListeners() {
  const current = getProducts();
  listeners.forEach((listener) => {
    try {
      listener(current);
    } catch (e) {
      console.error('Error in productStore listener:', e);
    }
  });
}

/**
 * Get all catalog products.
 * Reads from localStorage if available, otherwise seeds with DEFAULT_PRODUCTS.
 */
export function getProducts() {
  if (typeof window === 'undefined') return DEFAULT_PRODUCTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PRODUCTS));
      return DEFAULT_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PRODUCTS;
  } catch (e) {
    console.error('Failed to read products from localStorage:', e);
    return DEFAULT_PRODUCTS;
  }
}

/**
 * Add a new product to the catalog.
 */
export function addProduct(newProduct) {
  const products = getProducts();
  const id = Date.now();
  const productWithId = {
    ...newProduct,
    id,
    priceValue: parseInt(String(newProduct.price).replace(/\D/g, ''), 10) || 0,
    details: Array.isArray(newProduct.details)
      ? newProduct.details
      : typeof newProduct.details === 'string'
      ? newProduct.details.split('\n').filter(Boolean)
      : []
  };

  const updated = [productWithId, ...products];
  saveProducts(updated);
  return productWithId;
}

/**
 * Update an existing product.
 */
export function updateProduct(id, updatedFields) {
  const products = getProducts();
  const updated = products.map((item) => {
    if (item.id === id) {
      const details = Array.isArray(updatedFields.details)
        ? updatedFields.details
        : typeof updatedFields.details === 'string'
        ? updatedFields.details.split('\n').filter(Boolean)
        : item.details;

      const priceValue = updatedFields.price !== undefined
        ? parseInt(String(updatedFields.price).replace(/\D/g, ''), 10) || item.priceValue
        : item.priceValue;

      return {
        ...item,
        ...updatedFields,
        details,
        priceValue
      };
    }
    return item;
  });

  saveProducts(updated);
}

/**
 * Delete a product by ID.
 */
export function deleteProduct(id) {
  const products = getProducts();
  const updated = products.filter((item) => item.id !== id);
  saveProducts(updated);
}

/**
 * Reset catalog back to master defaults (original 9 authentic products).
 */
export function resetToDefaults() {
  saveProducts(DEFAULT_PRODUCTS);
}

function saveProducts(products) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    notifyListeners();
  } catch (e) {
    console.error('Failed to save products to localStorage:', e);
  }
}

/**
 * Subscribe to product changes. Returns unsubscribe function.
 */
export function subscribeToProducts(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Admin Authentication helper (Session-based)
 */
export function checkAdminAuth() {
  if (typeof window === 'undefined') return false;
  return sessionStorage.getItem(AUTH_KEY) === 'authenticated';
}

export function loginAdmin(password) {
  if (password === DEFAULT_PASSWORD) {
    sessionStorage.setItem(AUTH_KEY, 'authenticated');
    return { success: true };
  }
  return { success: false, error: 'Неверный пароль администратора' };
}

export function logoutAdmin() {
  sessionStorage.removeItem(AUTH_KEY);
}
