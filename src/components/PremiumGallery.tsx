import { useState } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
  prevLabel: string;
  nextLabel: string;
}

export default function PremiumGallery({ images, prevLabel, nextLabel }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="w-full">
      {/* Main image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading={idx === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label={prevLabel}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#E64A2E]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={nextLabel}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#E64A2E]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`${img.alt}`}
            aria-current={idx === activeIndex}
            className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-200 focus:outline-none ${
              idx === activeIndex
                ? 'ring-2 ring-[#E64A2E] ring-offset-2 opacity-100'
                : 'opacity-60 hover:opacity-100 ring-1 ring-gray-200'
            }`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
