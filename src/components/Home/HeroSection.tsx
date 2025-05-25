import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1595065666634-4725aa7e8379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold-500 mb-4">
          Jayanthi Boutique
        </h1>
        <p className="text-xl md:text-2xl text-gold-200 mb-8 font-serif italic">
          Effortless elegance with pre-pleated sarees
        </p>
        <button
          onClick={scrollToGallery}
          className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-dark-50 font-medium rounded transition-colors duration-300 uppercase tracking-wider"
        >
          View Our Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;