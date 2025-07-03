import React from 'react';
import { Link } from 'react-router-dom';
// Import the local logo images
import flosLogo from '../../assets/company_logo/flos-logo.png'; 
import begaLogo from '../../assets/company_logo/bega-logo.png';
import neriLogo from '../../assets/company_logo/neri-logo.png';

const Partners = () => {
  // Only show 3 main partners on the home page with local logos
  const mainPartners = [  
    {
      name: 'Flos',
      description: 'Innovative lighting solutions with a focus on design and technology. Known for bespoke and sustainable lighting projects.',
      logo: flosLogo,
      website: 'https://professional.flos.com/en/global/',
    },
    {
      name: 'Bega',
      description: 'Specialists in durable and timeless outdoor and indoor lighting solutions, combining functionality with aesthetics.',
      logo: begaLogo,
      website: 'https://www.bega.com/',
    },
    {
      name: 'Neri',
      description: 'Creators of elegant urban lighting and furniture, blending tradition with modernity to enhance public spaces.',
      logo: neriLogo,
      website: 'https://www.neri.biz/',
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

        {/* Partners Grid - Only 3 Partners */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mainPartners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Logo */}
              <div className="p-8 flex justify-center bg-white">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>See More Partners</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
