import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage1 from '../../assets/hero/hero1.avif';
import heroImage2 from '../../assets/hero/hero2.avif';
import heroImage3 from '../../assets/hero/hero3.avif';
import heroImage4 from '../../assets/hero/hero4.avif';

const backgroundImages = [heroImage1, heroImage2, heroImage3, heroImage4];
const TRANSITION_MS = 1500;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  // Preload remaining images after first one is visible
  useEffect(() => {
    const timers = backgroundImages.slice(1).map((src, i) =>
      setTimeout(() => { const img = new Image(); img.src = src; }, (i + 1) * 800)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Cycle images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        setPrevIndex(prev);
        return (prev + 1) % backgroundImages.length;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Clear prevIndex after transition completes
  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), TRANSITION_MS);
    return () => clearTimeout(t);
  }, [prevIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-24">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => {
          const isCurrent = index === currentIndex;
          const isLeaving = index === prevIndex;

          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`,
                // Current image: instantly visible below the leaving one
                // Leaving image: fades out on top
                // Others: hidden below
                opacity: isCurrent || isLeaving ? 1 : 0,
                zIndex: isLeaving ? 2 : isCurrent ? 1 : 0,
                transition: isLeaving ? `opacity ${TRANSITION_MS}ms ease-in-out` : 'none',
              }}
            />
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Illuminating
            <span className="block text-blue-400 mt-2">Architectural Excellence</span>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {[
              { value: '100+', label: 'Projects Completed' },
              { value: '10+', label: 'Partners' },
              { value: '10+', label: 'Cities Illuminated' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">{value}</div>
                <div className="text-gray-200 text-xs md:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
