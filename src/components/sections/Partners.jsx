import React from 'react';
import { Link } from 'react-router-dom';
// Import the local logo images
import flosLogo from '../../assets/company_logo/flos-logo.webp'; 
import begaLogo from '../../assets/company_logo/bega-logo.webp';
import neriLogo from '../../assets/company_logo/neri-logo.webp';
import vizionLogo from '../../assets/company_logo/vizion.webp';

const Partners = () => {
  // Show 4 main partners on the home page with local logos
  const mainPartners = [  
    {
      name: 'Neri',
      description: 'Creators of elegant urban lighting and furniture, blending tradition with modernity to enhance public spaces.',
      logo: neriLogo,
      website: 'https://www.neri.biz/',
    },
    {
      name: 'Vizion Lighting',
      description: 'Specialists in architectural LED solutions with cutting-edge technology and innovative design approaches.',
      logo: vizionLogo,
      website: 'https://www.vizionlighting.com/',
    },
    {
      name: 'Bega',
      description: 'Specialists in durable and timeless outdoor and indoor lighting solutions, combining functionality with aesthetics.',
      logo: begaLogo,
      website: 'https://www.bega.com/',
    },
    {
      name: 'Flos',
      description: 'Innovative lighting solutions with a focus on design and technology. Known for bespoke and sustainable lighting projects.',
      logo: flosLogo,
      website: 'https://professional.flos.com/en/global/',
    }
  ];

  return (
    <section id="partners" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-blue-400">Partners</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We collaborate with world-class lighting brands to deliver innovative and sustainable solutions.
          </p>
        </div>

        {/* Partners Grid - 2 columns on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {mainPartners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Logo - Smaller padding on mobile */}
              <div className="p-4 md:p-6 lg:p-8 flex justify-center bg-white">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-14 lg:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content - Adjusted padding and text sizes for mobile */}
              <div className="p-3 md:p-5 lg:p-6 text-center">
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 md:mb-3 lg:mb-4 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-3 md:mb-5 lg:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline text-xs md:text-sm lg:text-base"
                >
                  <span className="hidden md:inline">Visit Website</span>
                  <span className="md:hidden">Visit</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link
            to="/partners"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group text-sm md:text-base"
          >
            <span>See More Partners</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
