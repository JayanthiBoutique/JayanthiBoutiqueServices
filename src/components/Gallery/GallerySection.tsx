import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../../utils/constants';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-16 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-4">
            Our Collection
          </h2>
          <p className="text-dark-900 max-w-2xl mx-auto">
            Explore our exquisite pre-pleated sarees, crafted with precision and elegance for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-dark-200"
              onClick={() => openLightbox(image)}
            >
              <div className="relative pb-[133%]">
                <img
                  src={image}
                  alt={`Jayanthi Boutique Pre-pleated Saree ${index + 1}`}
                  className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-gold-500 hover:text-gold-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Jayanthi Boutique Pre-pleated Saree"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;