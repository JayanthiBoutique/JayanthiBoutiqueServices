import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-50 text-dark-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-serif font-bold text-gold-500">Jayanthi Boutique</h3>
            <p className="mt-2 text-dark-700 text-sm">Effortless elegance with pre-pleated sarees</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/jayanthi_boutique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-dark-200 text-center text-dark-700 text-sm">
          <p>&copy; {currentYear} Jayanthi Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;