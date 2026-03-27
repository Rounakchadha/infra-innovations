import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import { ExternalLink, Award, Globe, Users, Calendar, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import the local logo images
import flosLogo from '../assets/company_logo/flos-logo.webp';
import begaLogo from '../assets/company_logo/bega-logo.webp';
import neriLogo from '../assets/company_logo/neri-logo.webp';
import traxonLogo from '../assets/company_logo/Traxone.webp';
import vizionLogo from '../assets/company_logo/vizion.webp';
import neriProject from '../assets/projectPhoto/neriProject.webp';
import flosProject from '../assets/projectPhoto/flosProject.webp';
import begaProject from '../assets/projectPhoto/begaproject.webp';
import vizionProject from '../assets/projectPhoto/vizionProject.webp';
import traxonProject from '../assets/projectPhoto/traxonProject.webp';

const PartnersPage = () => {
  // SEO and performance optimizations
  useEffect(() => {
    // Dynamic page title for better SEO
    document.title = "Our Partners | Infra Innovations - Flos, Bega, Neri, Vizion, Traxon Lighting Partners";
    
    // Update meta description for partners page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Infra Innovations\' prestigious lighting partners including Flos, Bega, Neri, Vizion, and Traxon. World-class lighting brands for premium architectural and commercial lighting solutions in India.');
    }

    // Add partners page structured data
    const partnersSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Our Partners - Infra Innovations",
      "description": "Infra Innovations partners with world-class lighting brands",
      "url": "https://www.infra.org.in/partners",
      "mainEntity": {
        "@type": "Organization",
        "name": "Infra Innovations",
        "hasPartner": [
          {
            "@type": "Organization",
            "name": "Neri",
            "url": "https://www.neri.biz/",
            "foundingDate": "1962",
            "description": "Urban & Public Space Lighting specialists"
          },
          {
            "@type": "Organization", 
            "name": "Vizion Lighting",
            "url": "https://www.vizionlighting.com/",
            "foundingDate": "2005",
            "description": "Architectural LED Solutions specialists"
          },
          {
            "@type": "Organization",
            "name": "Bega",
            "url": "https://www.bega.com/",
            "foundingDate": "1945", 
            "description": "Outdoor & Architectural Lighting specialists"
          },
          {
            "@type": "Organization",
            "name": "Flos",
            "url": "https://professional.flos.com/en/global/",
            "foundingDate": "1962",
            "description": "Contemporary Design Lighting specialists"
          },
          {
            "@type": "Organization",
            "name": "Traxon Ecue",
            "url": "https://www.traxon-ecue.com",
            "foundingDate": "1999",
            "description": "Dynamic LED Lighting & Control Systems specialists"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(partnersSchema);
    document.head.appendChild(script);

    // Preload partner images for better performance
    const imagesToPreload = [neriProject, vizionProject, begaProject, flosProject, traxonProject];
    imagesToPreload.forEach((imageSrc, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      if (index < 2) { // Only preload first 2 images immediately
        document.head.appendChild(link);
      }
    });

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const mainPartners = [
    {
      description: 'Creators of elegant urban lighting and furniture, blending tradition with modernity to enhance public spaces. Experts in creating lighting solutions that complement architectural environments while respecting cultural heritage and urban planning principles.',
      logo: neriLogo,
      website: 'https://www.neri.biz/',
      founded: '1962',
      specialty: 'Urban & Public Space Lighting',
      image: neriProject,
      projectName: 'India Gate, New Delhi by Neri',
      companyName: 'Neri'
    },
    {
      description: 'Specialists in architectural LED solutions with cutting-edge technology and innovative design approaches. Known for their precision engineering and commitment to creating lighting that enhances architectural beauty while maintaining energy efficiency and sustainability.',
      logo: vizionLogo,
      website: 'https://www.vizionlighting.com/',
      founded: '2005',
      specialty: 'Architectural LED Solutions',
      image: vizionProject,
      projectName: 'Vizion Corporate office, Noida',
      companyName: 'Vizion Lighting'
    },
    {
      description: 'Specialists in durable and timeless outdoor and indoor lighting solutions, combining functionality with aesthetics. Known for their precision engineering and sustainable practices, creating lighting that stands the test of time while maintaining environmental responsibility.',
      logo: begaLogo,
      website: 'https://www.bega.com/',
      founded: '1945',
      specialty: 'Outdoor & Architectural Lighting',
      image: begaProject,
      projectName: 'Athena Castle Germany by Bega',
      companyName: 'Bega'
    },
    {
      description: 'Innovative lighting solutions with a focus on design and technology. Known for bespoke and sustainable lighting projects that push the boundaries of contemporary design. Their commitment to excellence and innovation has made them a leader in the architectural lighting industry.',
      logo: flosLogo,
      website: 'https://professional.flos.com/en/global/',
      founded: '1962',
      specialty: 'Contemporary Design Lighting',
      image: flosProject,
      projectName: 'Apothem Lounge, Paris by Flos',
      companyName: 'Flos'
    },
    {
      description: 'Dynamic LED lighting and control systems specialists, providing innovative solutions for architectural and entertainment lighting. Leaders in creating intelligent lighting systems that respond to environmental conditions and user preferences with cutting-edge technology.',
      logo: traxonLogo,
      website: 'https://www.traxon-ecue.com',
      founded: '1999',
      specialty: 'Dynamic LED Lighting & Control Systems',
      image: traxonProject,
      projectName: 'Museum of the Future, Dubai by Traxon Ecue',
      companyName: 'Traxon Ecue'
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section with Your Beautiful Outdoor Lighting Image */}
      <section 
        className="pt-24 pb-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        role="banner"
        aria-label="Infra Innovations Partners Hero Section"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Partners</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Main Partners */}
      <main className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Long-standing partnerships with industry leaders who share our commitment to excellence and innovation
            </p>
          </div>

          <div className="space-y-20">
            {mainPartners.map((partner, index) => (
              <article 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                itemScope 
                itemType="https://schema.org/Organization"
              >
                {/* Text Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Logo Container - Starting point for alignment */}
                  <div className="mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm w-48 h-24 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.companyName} logo - Lighting partner of Infra Innovations`}
                        className="max-h-16 max-w-full object-contain"
                        width="auto"
                        height="64"
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        itemProp="logo"
                      />
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8" itemProp="description">
                    {partner.description}
                  </p>

                  {/* Info Grid - Only 2 boxes now */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 min-h-[80px] flex flex-col justify-center">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span className="font-semibold text-white">Founded</span>
                      </div>
                      <p className="text-gray-300" itemProp="foundingDate">{partner.founded}</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 min-h-[80px] flex flex-col justify-center">
                      <div className="flex items-center mb-2">
                        <Award className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span className="font-semibold text-white">Specialty</span>
                      </div>
                      <p className="text-gray-300 text-sm" itemProp="knowsAbout">{partner.specialty}</p>
                    </div>
                  </div>

                  {/* Website Button */}
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group w-fit min-h-[44px] touch-manipulation"
                    aria-label={`Visit ${partner.companyName} website - Opens in new tab`}
                    itemProp="url"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>

                {/* Image Container - Aligned to start from logo position */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group w-full">
                    <img 
                      src={partner.image} 
                      alt={`${partner.projectName} - Featured lighting project by ${partner.companyName} in partnership with Infra Innovations`}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      width="600"
                      height="384"
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                      itemProp="image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-medium opacity-90">Featured Project</p>
                      <p className="text-lg font-bold" itemProp="name">{partner.projectName}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-black border-t border-gray-800" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            
            {/* Left - Company Name */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white">Infra Innovations</h3>
            </div>

            {/* Center - Signature */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 All rights reserved. | 
                <span className="text-blue-400 ml-1">Designed with precision, illuminated with passion.</span>
              </p>
            </div>

            {/* Right - Social Media Icons */}
            <div className="flex justify-center md:justify-end items-center space-x-3">
              <p className="text-gray-300 text-sm mr-2">Follow Us:</p>
              <nav className="flex space-x-2" aria-label="Social Media Links">
                <a href="#" className="group min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Follow Infra Innovations on Twitter">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-3 h-3 text-sky-400 group-hover:text-white" aria-hidden="true" />
                  </div>
                </a>

                <a href="#" className="group min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Follow Infra Innovations on Instagram">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-3 h-3 text-pink-400 group-hover:text-white" aria-hidden="true" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/rahul-chadha-3a5532268/" target="_blank" rel="noopener noreferrer" className="group min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Connect with Rahul Chadha on LinkedIn">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-3 h-3 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnersPage;
