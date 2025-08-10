import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage1 from '../../assets/hero/hero1.jpeg';
import heroImage2 from '../../assets/hero/hero2.jpeg';
import heroImage3 from '../../assets/hero/hero3.jpeg';
import heroImage4 from '../../assets/hero/hero4.jpeg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set([0])); // Track loaded images
  const [preloadedImages, setPreloadedImages] = useState(new Map()); // Cache preloaded images

  // Array of background images
  const backgroundImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4
  ];

  // Preload images progressively
  useEffect(() => {
    const preloadImage = (src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setPreloadedImages(prev => new Map(prev.set(index, img)));
          setLoadedImages(prev => new Set(prev.add(index)));
          resolve();
        };
        img.onerror = () => resolve(); // Continue even if image fails
        img.src = src;
      });
    };

    // Preload first image immediately (priority)
    preloadImage(backgroundImages[0], 0);

    // Preload other images with delay (progressive loading)
    const preloadTimer = setTimeout(() => {
      backgroundImages.slice(1).forEach((image, index) => {
        setTimeout(() => {
          preloadImage(image, index + 1);
        }, index * 500); // Stagger loading by 500ms each
      });
    }, 1000); // Start after 1 second

    return () => clearTimeout(preloadTimer);
  }, []);

  // Change images every 3 seconds (only if image is loaded)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length;
        // Only switch if next image is loaded, otherwise stay on current
        return loadedImages.has(nextIndex) ? nextIndex : prevIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, loadedImages]);

  // SEO and Performance optimizations
  useEffect(() => {
    // Set page title for SEO
    document.title = "Infra Innovations | Leading Lighting Company Lucknow - Architectural Excellence";
    
    // Add meta description for this page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Infra Innovations - Transforming India\'s most prestigious spaces with innovative lighting solutions. Leading lighting consultancy in Lucknow specializing in LED, commercial, and stadium lighting.');
    }

    // Add structured data for hero section
    const heroSchema = {
      "@context": "https://schema.org",
      "@type": "WebPageElement",
      "name": "Hero Section",
      "description": "Infra Innovations lighting company hero section showcasing architectural excellence",
      "url": "https://www.infra.org.in/#home"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(heroSchema);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-24"
      role="banner"
      aria-label="Infra Innovations Hero Section"
    >
      {/* Optimized Background Images - Only render loaded ones */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={`bg-${index}`}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: loadedImages.has(index) ? `url('${image}')` : 'none',
              opacity: index === currentImageIndex && loadedImages.has(index) ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
              willChange: 'opacity', // Optimize for animations
            }}
            aria-hidden="true"
          />
        ))}
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
      </div>

      {/* Content - Enhanced for SEO */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span itemProp="name">Illuminating</span>
            <span className="block text-blue-400 mt-2">
              Architectural Excellence
            </span>
          </h1>
          
          <p 
            className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            itemProp="description"
          >
            Transforming India's most prestigious spaces with innovative lighting solutions.
            From judicial complexes to cultural heritage sites, we illuminate excellence.
          </p>

          <div className="flex justify-center mb-10">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg"
              aria-label="View Our Lighting Projects - Infra Innovations Portfolio"
            >
              <span>View Our Projects</span>
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>

          {/* Stats - Enhanced for SEO */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4" role="region" aria-label="Company Statistics">
            <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2" itemProp="value">100+</div>
              <div className="text-gray-200 text-xs md:text-sm" itemProp="name">Projects Completed</div>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2" itemProp="value">10+</div>
              <div className="text-gray-200 text-xs md:text-sm" itemProp="name">Partners</div>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2" itemProp="value">10+</div>
              <div className="text-gray-200 text-xs md:text-sm" itemProp="name">Cities Illuminated</div>
            </div>
            <div className="text-center" itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2" itemProp="value">100%</div>
              <div className="text-gray-200 text-xs md:text-sm" itemProp="name">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20"
        role="button"
        aria-label="Scroll down to see more content"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Preload hints for remaining images (invisible) */}
      {backgroundImages.slice(1).map((image, index) => (
        <link
          key={`preload-${index}`}
          rel="preload"
          as="image"
          href={image}
          style={{ display: 'none' }}
        />
      ))}
    </section>
  );
};

export default Hero;
