import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { TyresPage } from './pages/TyresPage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandsPage } from './pages/BrandsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import ScrollToTop from "./components/ScrollToTop";

export function App() {
  return <HashRouter>
    <ScrollToTop />
      <div className="min-h-screen bg-black flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tyres" element={<TyresPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>;
}