import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import DarkHeader from './components/DarkHeader';
import Hero from './components/Hero';
import AboutSection from './components/About';
import CompanyValues from './components/CompanyValues';
import Stats from './components/Stats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import About from './pages/About';
import Products from './pages/Products';
import ContactPage from './pages/Contact';
import PrivateLabelling from './pages/PrivateLabelling';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <DarkHeader />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
              <CompanyValues />
              <Stats />
              <ContactSection />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/private-labelling" element={<PrivateLabelling />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;