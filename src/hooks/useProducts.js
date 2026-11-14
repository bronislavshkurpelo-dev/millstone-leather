import { useState, useEffect } from 'react';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  resetToDefaults,
  subscribeToProducts
} from '../services/productStore';

export function useProducts() {
  const [products, setProducts] = useState(getProducts());

  useEffect(() => {
    // Sync with store
    const unsubscribe = subscribeToProducts((updated) => {
      setProducts(updated);
    });

    // Also sync on window storage event if modified in another tab
    const handleStorage = (e) => {
      if (e.key === 'millstone_catalog_v1') {
        setProducts(getProducts());
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    resetToDefaults
  };
}
