import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Home/HeroSection';
import GallerySection from './components/Gallery/GallerySection';
import PricingSection from './components/Pricing/PricingSection';
import AboutSection from './components/About/AboutSection';
import ContactSection from './components/Contact/ContactSection';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Jayanthi Boutique - Pre-pleated Sarees';
    
    // Set favicon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico';
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <GallerySection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export default App;