import React from 'react';
import { Camera, Image, Award, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Professional photographer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-amber-300 text-black p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-serif font-bold">10+</p>
              <p className="text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">About the Photographer</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm a professional photographer with over a decade of experience capturing life's most precious moments. 
              My passion for photography began in my early teens and has grown into a lifelong pursuit of visual storytelling.
              I specialize in portrait, wedding, and fashion photography, bringing a unique artistic vision to each shoot.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              My approach is to create a comfortable and collaborative environment where your personality can shine through.
              I believe that the best photographs capture authentic moments and genuine emotions, creating timeless images that you'll treasure forever.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-300 text-black p-4 rounded-full mb-3">
                  <Camera size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Professional Equipment</h3>
                <p className="text-gray-400 text-sm">High-end cameras and lenses</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-300 text-black p-4 rounded-full mb-3">
                  <Image size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Advanced Editing</h3>
                <p className="text-gray-400 text-sm">Meticulous color grading and retouching</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-300 text-black p-4 rounded-full mb-3">
                  <Award size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Award Winning</h3>
                <p className="text-gray-400 text-sm">Recognized for excellence in photography</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-300 text-black p-4 rounded-full mb-3">
                  <Users size={24} />
                </div>
                <h3 className="text-white text-lg font-medium mb-1">Client Focused</h3>
                <p className="text-gray-400 text-sm">Dedicated to exceeding expectations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;