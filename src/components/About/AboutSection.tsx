import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-4">
              About Jayanthi Boutique
            </h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto"></div>
          </div>
          
          
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-200 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-serif font-semibold text-gold-500 mb-3">Craftsmanship</h3>
              <p className="text-dark-800">
                Expert pleating techniques that enhance the beauty of your saree.
              </p>
            </div>
            <div className="bg-dark-200 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-serif font-semibold text-gold-500 mb-3">Convenience</h3>
              <p className="text-dark-800">
                Ready-to-wear sarees that save time while maintaining traditional elegance.
              </p>
            </div>
            <div className="bg-dark-200 p-6 rounded-lg shadow-xl text-center">
              <h3 className="text-xl font-serif font-semibold text-gold-500 mb-3">Quality</h3>
              <p className="text-dark-800">
                Premium materials and attention to detail for long-lasting perfection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;