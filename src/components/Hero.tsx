import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from './Link';

const images = [
  {
    url: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg',
    alt: 'Professional portrait photography',
    title: 'Capturing Moments',
    subtitle: 'Professional Portrait Photography'
  },
  {
    url: 'https://images.pexels.com/photos/3916345/pexels-photo-3916345.jpeg',
    alt: 'Wedding photography',
    title: 'Wedding Stories',
    subtitle: 'Timeless Wedding Photography'
  },
  {
    url: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg',
    alt: 'Fashion photography',
    title: 'Fashion Forward',
    subtitle: 'Editorial & Fashion Photography'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    // Preload all images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => setIsLoaded(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    });

    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index: number) => {
    setIsLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={image.url}
            alt={image.alt}
            className={`object-cover w-full h-full transition-transform duration-10000 ease-out ${
              current === index ? 'scale-105' : 'scale-100'
            }`}
            onLoad={() => handleImageLoad(index)}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-4 animate-fade-in">
              {image.title}
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide mb-8">
              {image.subtitle}
            </p>
            <Link 
              to="/portfolio"
              className="px-8 py-3 border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrent(index);
              setTimeout(() => setIsTransitioning(false), 1000);
            }}
            className={`w-3 h-3 rounded-full ${
              current === index ? 'bg-amber-300' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;