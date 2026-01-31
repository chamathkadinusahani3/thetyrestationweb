import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { TyresPage } from './pages/TyresPage';
import { ServicesPage } from './pages/ServicesPage';
import { BrandsPage } from './pages/BrandsPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from "./pages/AboutPage";
import { DirectorPage } from "./pages/DirectorPage"; // NEW - Director Profile Page
import ScrollToTop from "./components/ScrollToTop";
import DealerForm from "./components/DealerForm";
import DealerMapPage from "./pages/DealerMapPage";

export function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tyres" element={<TyresPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/director" element={<DirectorPage />} /> {/* NEW - Director Page */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/brands" element={<BrandsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dealer" element={<DealerForm />} />
              <Route path="/dealer-map" element={<DealerMapPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </HashRouter>
    </HelmetProvider>
  );
}