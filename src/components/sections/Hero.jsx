import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage1 from '../../assets/hero/hero1.jpeg';
import heroImage2 from '../../assets/hero/hero2.jpeg';
import heroImage3 from '../../assets/hero/hero3.jpeg';
import heroImage4 from '../../assets/hero/hero4.jpeg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4
  ];

  // Change images every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-24">
      {/* All Background Images - Always Rendered */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={`bg-${index}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
      </div>

      {/* Content - Pushed Down Further */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Illuminating
            <span className="block text-blue-400 mt-2">
              Architectural Excellence
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming India's most prestigious spaces with innovative lighting solutions.
            From judicial complexes to cultural heritage sites, we illuminate excellence.
          </p>

          <div className="flex justify-center mb-10">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg"
            >
              <span>View Our Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats - Smaller Numbers, No White Line */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-200 text-xs md:text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-200 text-xs md:text-sm">partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-200 text-xs md:text-sm">Cities Illuminated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-200 text-xs md:text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
