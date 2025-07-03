import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutimg1 from '../../assets/aboutSection/about1.jpg';
import aboutimg2 from '../../assets/aboutSection/about2.jpg'
import aboutimg3 from '../../assets/aboutSection/about3.jpg'
import aboutimg4 from '../../assets/aboutSection/about4.jpg'
import aboutimg5 from '../../assets/aboutSection/about5.jpg'
import aboutimg6 from '../../assets/aboutSection/about6.jpg'
import aboutimg7 from '../../assets/aboutSection/about7.jpg'

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of carousel images - replace with your project images
  const carouselImages = [
   aboutimg1,
   aboutimg2,
   aboutimg3,
   aboutimg4,
   aboutimg5,
   aboutimg6,
   aboutimg7,
  ];

  // Auto-change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Our Story */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Our Story</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
              <p>
                Founded with a vision to illuminate India's architectural marvels, Infra Innovations has emerged as a leading force in the lighting design industry. Our journey began with a simple belief: that exceptional lighting can transform ordinary spaces into extraordinary experiences.
              </p>
              <p>
                From the prestigious corridors of the Lucknow High Court to the cultural heritage sites of Ayodhya, we have consistently delivered lighting solutions that not only meet technical requirements but also enhance the aesthetic and functional value of each space.
              </p>
              <p>
                Our expertise spans across government buildings, cultural landmarks, commercial complexes, and heritage sites, making us the trusted partner for India's most significant architectural projects.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="mt-8">
              <Link 
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="relative">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* All carousel images */}
              {carouselImages.map((image, index) => (
                <div
                  key={`carousel-${index}`}
                  className="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out"
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: index === currentImageIndex ? 1 : 0,
                    transform: index === currentImageIndex ? 'scale(1)' : 'scale(1.05)',
                  }}
                />
              ))}
              
              {/* Gradient overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Subtle border glow effect */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
            </div>

            {/* Image counter/indicator */}
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1} / {carouselImages.length}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
