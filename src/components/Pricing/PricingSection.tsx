import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-dark-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-4">
            Our Services
          </h2>
          <p className="text-dark-900 max-w-2xl mx-auto">
            Quality craftsmanship for your convenience and elegance.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-dark-200 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-serif font-bold text-gold-500 mb-6 text-center">
              Pre-pleating Services
            </h3>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center border-b border-dark-300 pb-4">
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <h4 className="text-lg font-medium text-gold-400">Basic Pre-pleating</h4>
                  <p className="text-dark-700 text-sm">Perfect for regular occasions</p>
                </div>
                <div className="text-gold-500 font-serif text-xl font-bold">
                  Starting from ₹400
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center border-b border-dark-300 pb-4">
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <h4 className="text-lg font-medium text-gold-400">Premium Pre-pleating</h4>
                  <p className="text-dark-700 text-sm">For special events and celebrations</p>
                </div>
                <div className="text-gold-500 font-serif text-xl font-bold">
                  Starting from ₹500
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <h4 className="text-lg font-medium text-gold-400">Bridal Pre-pleating</h4>
                  <p className="text-dark-700 text-sm">Luxurious pleating for your special day</p>
                </div>
                <div className="text-gold-500 font-serif text-xl font-bold">
                  Starting from ₹700
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center text-dark-700 italic">
              * Prices may vary based on saree type, material, and specific requirements.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
