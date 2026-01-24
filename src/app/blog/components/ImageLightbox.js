'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageLightbox = ({ children }) => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Handle scroll to close lightbox
    const handleScroll = () => {
      if (isOpen) {
        closeLightbox();
      }
    };

    // Handle custom event to open lightbox
    const handleOpenLightbox = (e) => {
      const { src } = e.detail;
      if (src) {
        setLightboxImage(src);
        setIsOpen(true);
      }
    };

    window.addEventListener('open-lightbox', handleOpenLightbox);

    if (isOpen) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-lightbox', handleOpenLightbox);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setLightboxImage(null), 300); // Clear after animation
  };

  return (
    <>
      {children}

      {/* Lightbox Overlay */}
      {isOpen && lightboxImage && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeLightbox}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
              aria-label="Close lightbox"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative max-w-7xl max-h-[90vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Lightbox view"
                width={1920}
                height={1080}
                className="object-contain max-w-full max-h-[90vh] w-auto h-auto"
                quality={100}
                priority
              />
            </div>

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              Scroll or tap to close
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
