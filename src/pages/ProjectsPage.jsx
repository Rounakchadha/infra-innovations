import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import { Calendar, MapPin, Award, Users, Filter, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import heroBackground from '../assets/projectpage/website_2.jpg';
import highcourt1 from '../assets/projectpage/highcourt1.jpg';
import highcourt2 from '../assets/projectpage/highcourt2.jpg';
import highcourt3 from '../assets/projectpage/highcourt3.jpg';
import highcourt4 from '../assets/projectpage/highcourt4.jpg';
import highcourt5 from '../assets/projectpage/highcourt5.jpg';
import ekana1 from '../assets/projectpage/ekana_3.jpg';
import ekana2 from '../assets/projectpage/ekana_hero.jpg';
import ekana3 from '../assets/projectpage/ekana_2.jpg';
import ekana4 from '../assets/projectpage/ekana_4.jpg';
import ekana5 from '../assets/projectpage/ekana_1.jpg';
import jhansi1 from '../assets/projectpage/jhansi_1.jpg';
import jhansi2 from '../assets/projectpage/jhansi_2.jpg';
import jhansi3 from '../assets/projectpage/jhansi_3.jpg';
import jhansi4 from '../assets/projectpage/jhansi_4.jpg';
import jhansi5 from '../assets/projectpage/jhansi_5.jpg';
import rail1 from '../assets/projectpage/rail_hero.jpg';
import rail2 from '../assets/projectpage/rail1.jpg';
import rail3 from '../assets/projectpage/rail2.jpg'
import rail4 from '../assets/projectpage/rail3.jpg'
import rail5 from '../assets/projectpage/rail4.jpg'
import lohia1 from '../assets/projectpage/lohia1.jpg'
import lohia2 from '../assets/projectpage/lohia2.jpg'
import lohia3 from '../assets/projectpage/ambedgar1.jpg'
import lohia4 from '../assets/projectpage/ambedgar2.jpg'
import lohia5 from '../assets/projectpage/ambedgar3.jpg'
import ram1 from '../assets/projectpage/ayodhya_hero.jpg'
import ram2 from '../assets/projectpage/ayodhya1.jpg'
import ram3 from '../assets/projectpage/ayodhya2.jpg'
import ram4 from '../assets/projectpage/ayodhya3.jpg'
import ram5 from '../assets/projectpage/ayodhya4.jpg'
import mall1 from '../assets/projectpage/saharamall.jpg'
import hotel1 from '../assets/projectpage/saharastar.jpg'
import hazrat1 from '../assets/projectpage/hazratganj2.jpg'
import eco1 from '../assets/projectpage/eco.jpg'
import taj1 from '../assets/projectpage/taj1.jpg'


const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  // Enhanced scroll handling for anchors
  useEffect(() => {
    const scrollToAnchor = () => {
      const hash = location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        const element = document.getElementById(elementId);
        
        if (element) {
          setTimeout(() => {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 300);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToAnchor();
  }, [location]);

  const detailedProjects = [
    {
      title: 'Lucknow High Court Bench',
      location: 'Lucknow, Uttar Pradesh',
      year: '2023',
      category: 'Government & Judicial',
      client: 'Government of Uttar Pradesh',
      area: '50,000 sq ft',
      anchor: 'lucknow-high-court',
      heroImage: highcourt1,
      images: [
        highcourt2,
        highcourt3,
        highcourt4,
        highcourt5
      ],
      description: 'A prestigious judicial complex that represents the dignity and authority of the legal system. This project involved comprehensive lighting design for courtrooms, chambers, public areas, and administrative offices.',
      details: [
        'Designed specialized courtroom lighting that ensures optimal visibility for proceedings while maintaining the solemnity of the judicial environment.',
        'Implemented energy-efficient LED systems throughout the complex, reducing power consumption by 40% compared to traditional lighting.',
        'Created ambient lighting in public waiting areas to provide comfort for visitors while maintaining security visibility.',
        'Installed emergency lighting systems with backup power to ensure continuous operation during critical proceedings.'
      ],
      features: [
        'Smart lighting control systems',
        'Emergency backup lighting',
        'Energy-efficient LED technology',
        'Acoustic-friendly fixtures'
      ]
    },
    {
      title: 'Lucknow Ekana Stadium',
      location: 'Lucknow, Uttar Pradesh',
      year: '2024',
      category: 'Sports & Entertainment',
      client: 'Sports Authority of India',
      area: '75,000 sq ft',
      anchor: 'lucknow-ekana-stadium',
      heroImage: ekana1,
      images: [
        ekana2,
        ekana3,
        ekana4,
        ekana5
      ],
      description: 'A state-of-the-art cricket stadium designed to host international matches and entertainment events. The lighting system ensures optimal visibility for both players and spectators.',
      details: [
        'Installed high-performance sports lighting that meets international cricket standards for day-night matches.',
        'Designed dynamic lighting systems for entertainment events with color-changing capabilities and synchronized effects.',
        'Implemented smart controls that adjust lighting levels based on event type and time of day.',
        'Created energy-efficient solutions that reduce operational costs while maintaining superior light quality.'
      ],
      features: [
        'International cricket lighting standards',
        'Dynamic color-changing systems',
        'Weather-resistant fixtures',
        'Remote monitoring capabilities'
      ]
    },
    {
      title: 'Dhyan Chand Hockey Stadium',
      location: 'Jhansi, Uttar Pradesh',
      year: '2023',
      category: 'Sports & Entertainment',
      client: 'Sports Authority of India',
      area: '45,000 sq ft',
      anchor: 'dhyanchand-hockey-stadium',
      heroImage: jhansi1,
      images: [
        jhansi2,
        jhansi3,
        jhansi4,
        jhansi5
      ],
      description: 'Premier hockey stadium lighting designed to meet international FIH standards for professional hockey matches and training facilities.',
      details: [
        'Designed specialized hockey field lighting that meets FIH international standards for professional matches.',
        'Implemented uniform light distribution across the playing surface to eliminate shadows and glare.',
        'Created energy-efficient LED systems with instant on/off capabilities for training and match scenarios.',
        'Installed weather-resistant fixtures capable of withstanding extreme weather conditions.'
      ],
      features: [
        'FIH international standards',
        'Uniform light distribution',
        'Instant on/off LED systems',
        'Weather-resistant design'
      ]
    },
    {
      title: 'Rail Coach Factory',
      location: 'Raebareli, Uttar Pradesh',
      year: '2024',
      category: 'Industrial Infrastructure',
      client: 'Indian Railways',
      area: '150,000 sq ft',
      anchor: 'jhansi-rail-coach-factory',
      heroImage: rail1,
      images: [
        rail2,
        rail3,
        rail4,
        rail5
      ],
      description: 'Comprehensive industrial lighting solution for railway coach manufacturing facility, ensuring optimal working conditions and safety standards.',
      details: [
        'Designed high-bay lighting systems for manufacturing floors with uniform light distribution and minimal glare.',
        'Implemented specialized task lighting for precision assembly work and quality control areas.',
        'Created maintenance-friendly lighting solutions with long-life LED fixtures to minimize production downtime.',
        'Installed intelligent lighting controls that integrate with the facility management system for optimal operation.'
      ],
      features: [
        'High-bay LED systems',
        'Precision task lighting',
        'Maintenance-friendly design',
        'Integrated facility controls'
      ]
    },
    {
      title: 'Lohia Dwar & ambedkar park',
      location: 'lucknow, Uttar Pradesh',
      year: '2023',
      category: 'cultural and heritage',
      client: 'Government of Uttar Pradesh',
      area: '200,000 sq ft',
      anchor: 'raebareli-complex',
      heroImage: lohia3,
      images: [
        lohia2,
        lohia1,
        lohia4,
        lohia5
      ],
      description: 'Large-scale manufacturing complex lighting designed to enhance productivity and safety while meeting stringent industrial standards.',
      details: [
        'Implemented energy-efficient lighting systems across multiple manufacturing units and warehouses.',
        'Designed specialized lighting for different production zones including assembly, testing, and packaging areas.',
        'Created smart lighting controls that adjust brightness based on production schedules and natural daylight.',
        'Installed emergency lighting with battery backup systems ensuring safety during power outages.'
      ],
      features: [
        'Multi-zone lighting design',
        'Smart daylight integration',
        'Emergency backup systems',
        'Energy-efficient LED technology'
      ]
    },
    {
      title: 'Ayodhya Ram Path',
      location: 'Ayodhya, Uttar Pradesh',
      year: '2023',
      category: 'Cultural & Heritage',
      client: 'Ayodhya Development Authority',
      area: '2 km stretch',
      anchor: 'ayodhya-ram-path',
      heroImage: ram1,
      images: [
        ram2,
        ram3,
        ram4,
        ram5
      ],
      description: 'An iconic cultural pathway that celebrates the rich heritage of Ayodhya. This project combines traditional aesthetics with modern lighting technology.',
      details: [
        'Designed heritage-inspired lighting fixtures that complement the traditional architecture while providing modern functionality.',
        'Created a lighting narrative that guides visitors through the cultural journey with varying intensities and warm color temperatures.',
        'Implemented sustainable lighting solutions using solar-powered systems in select areas to reduce environmental impact.',
        'Installed decorative lighting for festivals and special occasions that can transform the pathway into a celebration of light.'
      ],
      features: [
        'Heritage-inspired design',
        'Solar-powered sections',
        'Festival lighting capabilities',
        'Pedestrian-friendly illumination'
      ]
    }
  ];

  const categories = ['All', 'Commercial', 'Hospitality', 'Parks & Recreation', 'Road & Pathways'];

  const cardProjects = [
    {
      title: 'Sahara Ganj Mall',
      category: 'Commercial',
      image: mall1,
      description: 'Premium shopping mall with dynamic retail lighting solutions and energy-efficient systems.',
      location: 'Lucknow, UP',
      year: '2024'
    },
    {
      title: 'Sahara Star Hotel',
      category: 'Hospitality',
      image: hotel1,
      description: 'Luxury hotel lighting with elegant chandeliers and sophisticated ambient systems.',
      location: 'Mumbai, Maharashtra',
      year: '2024'
    },
    {
      title: 'Hazratganj Lighting',
      category: 'Road & Pathways',
      image: hazrat1,
      description: 'Historic market street illumination preserving heritage while enhancing safety.',
      location: 'Lucknow, UP',
      year: '2023'
    },
    {
      title: 'Ambedkar Park',
      category: 'Parks & Recreation',
      image: lohia3,
      description: 'Memorial park lighting with artistic illumination and pathway safety systems.',
      location: 'Lucknow, UP',
      year: '2024'
    },
    {
      title: 'Lucknow Eco Park',
      category: 'Parks & Recreation',
      image: eco1,
      description: 'Eco-friendly park lighting with solar-powered systems and wildlife-safe illumination.',
      location: 'Lucknow, UP',
      year: '2023'
    },
    {
      title: 'Taj Hotel Lucknow',
      category: 'Hospitality',
      image: taj1,
      description: 'Luxury heritage hotel with sophisticated lighting design and premium ambiance.',
      location: 'Lucknow, UP',
      year: '2024'
    }
  ];

  const projectExpertise = [
    {
      title: 'Automobile Showrooms',
      description: 'Premium automotive lighting solutions for luxury car dealerships',
      projects: ['Nissan', 'Mercedes-Benz', 'Kia Motors', 'Hyundai'],
      features: ['Precision track lighting', 'Color-accurate illumination', 'Glare-free display lighting']
    },
    {
      title: 'Hotels, Hospitality & malls',
      description: 'Elegant lighting solutions creating memorable guest experiences',
      projects: ['Taj Hotel Lucknow', 'Sahara Star hotel, Mumbai','Sahara Mall Lucknow'],
      features: ['Ambient mood lighting', 'Smart room controls', 'Energy-efficient systems']
    },
    {
      title: 'Jewellery Showrooms & GYMs',
      description: 'Specialized lighting to showcase precious metals and gemstones',
      projects: ['Premium Jewellery Stores', 'Diamond Showrooms', 'gyms'],
      features: ['High CRI lighting', 'Sparkle enhancement', 'Security-integrated systems']
    },
    {
      title: 'Parks & Pathways',
      description: 'Safe and beautiful outdoor lighting for public spaces',
      projects: ['Ambedkar Park', 'Eco Park', 'Hazratganj street lighting','Ayodhya Ram Path'],
      features: ['Solar-powered options', 'Motion sensors', 'Wildlife-friendly lighting']
    },
    {
      title: 'Infrastructure',
      description: 'Comprehensive lighting solutions for urban infrastructure',
      projects: ['Ekana Stadium', 'Dhayanchand Hockey Stadium',],
      features: ['Smart integration', 'Energy monitoring', 'Weather-resistant design']
    },
    {
      title: 'Facade Lighting',
      description: 'Architectural lighting that transforms building exteriors',
      projects: ['Lucknow Highcourt','Lohia Dwar', 'Heritage Structures'],
      features: ['Dynamic color changing', 'Programmable sequences', 'Architectural integration']
    }
  ];

  const filteredCardProjects = selectedCategory === 'All' 
    ? cardProjects 
    : cardProjects.filter(project => project.category === selectedCategory);

  return (
    <div>
      <Header />
      
      {/* Hero Section with Beautiful Hanging Light Bulbs Background */}
      <section 
        className="pt-24 pb-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
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
              Our <span className="text-blue-400">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover our portfolio of transformative lighting projects that illuminate India's most prestigious spaces
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Projects Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most prestigious and impactful lighting installations
            </p>
          </div>

          {detailedProjects.map((project, index) => (
            <div key={index} className="mb-20 last:mb-0" id={project.anchor}>
              {/* Project Header with Hero Image */}
<div className="relative mb-8">
  <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 mb-6">
    <img 
      src={project.heroImage} 
      alt={project.title}
      className="w-full h-full object-cover"
      style={{ 
        objectPosition: project.title === 'Lucknow Ekana Stadium' ? 'center bottom' : 'center center' 
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    
    <div className="absolute bottom-8 left-8 text-white">
      <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
      <div className="flex items-center space-x-6 text-lg">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2" />
          {project.location}
        </div>
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          {project.year}
        </div>
        <div className="flex items-center">
          <Award className="w-5 h-5 mr-2" />
          {project.category}
        </div>
      </div>
    </div>
  </div>
</div>

{/* Additional Project Images Grid */}
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  {project.images.map((image, imgIndex) => (
    <div key={imgIndex} className="relative overflow-hidden rounded-lg shadow-lg group bg-gray-900">
      <img 
        src={image} 
        alt={`${project.title} - Image ${imgIndex + 1}`}
        className={`w-full h-48 transition-transform duration-500 ${
          project.title === 'Lohia Dwar & Ambedkar Park' && (imgIndex === 0 || imgIndex === 1 || imgIndex === 3)
            ? 'object-contain scale-75 hover:scale-90' 
            : 'object-cover group-hover:scale-105'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  ))}
</div>

              {/* Project Content */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-bold text-white mb-4">Project Overview</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <h5 className="text-xl font-bold text-white mb-4">Key Achievements</h5>
                  <ul className="space-y-3">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-white mb-4">Project Details</h5>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Client</span>
                        <p className="text-white">{project.client}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Area</span>
                        <p className="text-white">{project.area}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Category</span>
                        <p className="text-white">{project.category}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-400">Completion</span>
                        <p className="text-white">{project.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <h5 className="text-lg font-bold text-white mb-4">Key Features</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < detailedProjects.length - 1 && (
                <div className="mt-16 pt-8 border-t border-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Card Projects Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">More Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse portfolio across different sectors and industries
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2 mb-10">
            <Filter className="w-5 h-5 text-gray-300" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCardProjects.map((project, index) => (
              <div key={index} className="group bg-black border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-blue-400 text-sm font-semibold mb-2">{project.category}</div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Clean and Consistent */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized lighting solutions across diverse sectors and industries
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {projectExpertise.map((expertise, index) => (
                <div key={index} className="group">
                  {/* Main Title */}
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {expertise.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {expertise.description}
                  </p>

                  {/* Completed Projects */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Completed Projects</h4>
                    <div className="space-y-2">
                      {expertise.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {expertise.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consistent Divider - only between rows */}
                  {index < projectExpertise.length - 1 && index % 2 === 1 && (
                    <div className="col-span-2 mt-8 pt-8 border-t border-gray-700"></div>
                  )}
                </div>
              ))}
            </div>
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

export default ProjectsPage;

                
