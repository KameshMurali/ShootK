import React, { useState } from 'react';
import { ChevronsRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { portfolioData } from '../data/portfolioData';

const categories = [
  'All', 
  'Portrait', 
  'Wedding', 
  'Fashion', 
  'Travel'
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeCategory === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my diverse collection of photographic work spanning multiple genres and styles.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-300 text-black'
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredImages.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end opacity-0 group-hover:opacity-100 p-6">
                <h3 className="text-white text-xl font-serif">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                <div className="mt-4 flex items-center text-amber-300 text-sm">
                  <span>View Gallery</span>
                  <ChevronsRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm">
            Load More
          </button>
        </div>

        {/* Carousel Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button 
              className="absolute top-6 right-6 text-white text-2xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="w-full max-w-6xl">
              <ImageCarousel 
                images={filteredImages[selectedImage].gallery} 
                initialIndex={0} 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;