import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import CustomOrderCalculator from './components/CustomOrderCalculator';
import MasterStory from './components/MasterStory';
import OrderSteps from './components/OrderSteps';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(
    typeof window !== 'undefined' && window.location.hash === '#admin'
  );

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setIsAdminOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleCloseAdmin = () => {
    setIsAdminOpen(false);
    if (window.location.hash === '#admin') {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleOpenAdmin = () => {
    setIsAdminOpen(true);
    window.location.hash = '#admin';
  };

  return (
    <div className="min-h-screen bg-[#12100e] text-[#e8dfd8] flex flex-col font-sans selection:bg-[#c28e5c] selection:text-[#12100e]">
      <Navbar onOpenAdmin={handleOpenAdmin} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Portfolio />
        <CustomOrderCalculator />
        <MasterStory />
        <OrderSteps />
        <Contacts />
      </main>
      <Footer onOpenAdmin={handleOpenAdmin} />

      {/* Master Admin Modal */}
      {isAdminOpen && <AdminPanel onClose={handleCloseAdmin} />}
    </div>
  );
}
