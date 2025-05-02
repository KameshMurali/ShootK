import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonialData';

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section id="testimonials" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-amber-300/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-300/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what my clients have to say about their photography experiences.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div className="bg-zinc-900 p-8 md:p-12 rounded-lg relative">
                    <Quote className="absolute top-6 left-6 text-amber-300/20" size={48} />
                    
                    <div className="text-center">
                      <p className="text-white text-lg md:text-xl leading-relaxed mb-8 relative z-10">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="mt-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-amber-300 font-medium">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setCurrent(index);
                  setTimeout(() => setIsTransitioning(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-amber-300' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={goToPrev}
              className="p-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-2 text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;