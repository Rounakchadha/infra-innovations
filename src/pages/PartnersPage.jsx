import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import { ExternalLink, Award, Globe, Users, Calendar, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import the local logo images
import flosLogo from '../assets/company_logo/flos-logo.png';
import begaLogo from '../assets/company_logo/bega-logo.png';
import neriLogo from '../assets/company_logo/neri-logo.png';
import traxonLogo from '../assets/company_logo/Traxone.jpg';
import vizionLogo from '../assets/company_logo/vizion.jpg';
import zumtobelLogo from '../assets/company_logo/zumtobel.jpg';
import osramLogo from '../assets/company_logo/osram.jpg';
import geLogo from '../assets/company_logo/ge.jpg';
import jaquarLogo from '../assets/company_logo/jaquar.jpg';
import neriProject from '../assets/projectPhoto/neriProject.jpg';
import flosProject from '../assets/projectPhoto/flosProject.jpg';
import begaProject from '../assets/projectPhoto/begaproject.jpg';

const PartnersPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainPartners = [
    {
      description: 'Innovative lighting solutions with a focus on design and technology. Known for bespoke and sustainable lighting projects that push the boundaries of contemporary design. Their commitment to excellence and innovation has made them a leader in the architectural lighting industry.',
      logo: flosLogo,
      website: 'https://professional.flos.com/en/global/',
      founded: '1962',
      specialty: 'Contemporary Design Lighting',
      projects: '50+ Projects',
      image: flosProject, // Fixed: Using imported variable instead of string
      partnership: 'Since 2015'
    },
    {
      description: 'Specialists in durable and timeless outdoor and indoor lighting solutions, combining functionality with aesthetics. Known for their precision engineering and sustainable practices, creating lighting that stands the test of time while maintaining environmental responsibility.',
      logo: begaLogo,
      website: 'https://www.bega.com/',
      founded: '1945',
      specialty: 'Outdoor & Architectural Lighting',
      projects: '35+ Projects',
      image: begaProject, // Fixed: Using imported variable
      partnership: 'Since 2016'
    },
    {
      description: 'Creators of elegant urban lighting and furniture, blending tradition with modernity to enhance public spaces. Experts in creating lighting solutions that complement architectural environments while respecting cultural heritage and urban planning principles.',
      logo: neriLogo,
      website: 'https://www.neri.biz/',
      founded: '1962',
      specialty: 'Urban & Public Space Lighting',
      projects: '40+ Projects',
      image: neriProject, // Fixed: Using imported variable
      partnership: 'Since 2017'
    }
  ];

  const additionalPartners = [
    { 
      name: 'Traxon e:cue', 
      specialty: 'Dynamic LED Lighting & Control Systems', 
      logo: traxonLogo,
      website: 'https://www.traxon-ecue.com'
    },
    { 
      name: 'Vizion Lighting', 
      specialty: 'Architectural LED Solutions', 
      logo: vizionLogo,
      website: 'https://www.vizionlighting.com/'
    },
    { 
      name: 'Zumtobel', 
      specialty: 'Professional Lighting Solutions', 
      logo: zumtobelLogo,
      website: 'https://www.zumtobel.com/'
    },
    { 
      name: 'Osram', 
      specialty: 'LED Technology & Smart Lighting', 
      logo: osramLogo,
      website: 'https://www.osram.com/'
    },
    { 
      name: 'GE Lighting', 
      specialty: 'Industrial & Commercial Lighting', 
      logo: geLogo,
      website: 'https://www.gelighting.com/'
    },
    { 
      name: 'Jaquar', 
      specialty: 'Luxury Lighting & Electrical Solutions', 
      logo: jaquarLogo,
      website: 'https://www.jaquar.com/en/cls-house-lights'
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section with Your Beautiful Outdoor Lighting Image */}
      <section 
        className="pt-24 pb-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Partners</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Partners */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Long-standing partnerships with industry leaders who share our commitment to excellence and innovation
            </p>
          </div>

          <div className="space-y-20">
            {mainPartners.map((partner, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 inline-block">
                      <img 
                        src={partner.logo} 
                        alt={`Partner ${index + 1}`}
                        className="h-16 object-contain"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {partner.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="font-semibold text-white">Founded</span>
                      </div>
                      <p className="text-gray-300">{partner.founded}</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Award className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="font-semibold text-white">Specialty</span>
                      </div>
                      <p className="text-gray-300">{partner.specialty}</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="font-semibold text-white">Projects</span>
                      </div>
                      <p className="text-gray-300">{partner.projects}</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Globe className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="font-semibold text-white">Partnership</span>
                      </div>
                      <p className="text-gray-300">{partner.partnership}</p>
                    </div>
                  </div>

                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img 
                      src={partner.image} 
                      alt={`Partner ${index + 1} project`}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm font-medium opacity-90">Featured Project</p>
                      <p className="text-lg font-bold">Lighting Installation</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Partners with Clickable Websites */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Additional Partners</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our extended network of trusted partners and suppliers who help us deliver comprehensive lighting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalPartners.map((partner, index) => (
              <a 
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2 cursor-pointer"
              >
                <div className="mb-4 bg-white p-4 rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/120x60/6366F1/FFFFFF?text=${partner.name.substring(0, 3).toUpperCase()}`;
                    }}
                  />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{partner.name}</h4>
                <p className="text-blue-400 text-sm font-semibold">{partner.specialty}</p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-blue-400 mx-auto" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-black border-t border-gray-800">
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
              <div className="flex space-x-2">
                <a href="#" className="group">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                    <Facebook className="w-3 h-3 text-blue-400 group-hover:text-white" />
                  </div>
                </a>

                <a href="#" className="group">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-3 h-3 text-sky-400 group-hover:text-white" />
                  </div>
                </a>

                <a href="#" className="group">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-3 h-3 text-pink-400 group-hover:text-white" />
                  </div>
                </a>

                <a href="#" className="group">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="w-3 h-3 text-blue-500 group-hover:text-blue-400" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PartnersPage;
