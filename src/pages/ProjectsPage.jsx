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
import eco1 from '../assets/projectpage/eco.jpeg'
import taj1 from '../assets/projectpage/taj1.jpg'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  // SEO and performance optimizations
  useEffect(() => {
    // Dynamic page title for better SEO - Secondary page
    document.title = "Projects - Infra Innovations | Lucknow High Court, Ekana Stadium, Ayodhya Ram Path";
    
    // Update meta description for projects page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Infra Innovations\' prestigious lighting projects including Lucknow High Court, Ekana Cricket Stadium, Dhyan Chand Hockey Stadium, Ayodhya Ram Path, and Rail Coach Factory. Leading lighting consultancy with 100+ completed projects across India.');
    }

    // Add projects page structured data with breadcrumb (SEO only - no visual change)
    const projectsSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Our Projects - Infra Innovations",
      "description": "Portfolio of lighting projects by Infra Innovations across India",
      "url": "https://www.infra.org.in/projects",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.infra.org.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://www.infra.org.in/projects"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Lighting Projects Portfolio",
        "itemListElement": [
          {
            "@type": "CreativeWork",
            "name": "Lucknow High Court Bench Lighting",
            "description": "Comprehensive lighting design for judicial complex",
            "dateCreated": "2016",
            "locationCreated": "Lucknow, Uttar Pradesh",
            "creator": {
              "@type": "Organization",
              "name": "Infra Innovations"
            }
          },
          {
            "@type": "CreativeWork", 
            "name": "Lucknow Ekana Stadium Lighting",
            "description": "BCCI-approved floodlights with record-breaking installation",
            "dateCreated": "2018",
            "locationCreated": "Lucknow, Uttar Pradesh",
            "creator": {
              "@type": "Organization",
              "name": "Infra Innovations"
            }
          },
          {
            "@type": "CreativeWork",
            "name": "Ayodhya Ram Path Lighting",
            "description": "Sacred pathway illumination with heritage-inspired fixtures",
            "dateCreated": "2024",
            "locationCreated": "Ayodhya, Uttar Pradesh",
            "creator": {
              "@type": "Organization",
              "name": "Infra Innovations"
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(projectsSchema);
    document.head.appendChild(script);

    // Preload critical project images
    const criticalImages = [heroBackground, highcourt1, ekana1, jhansi1];
    criticalImages.forEach((imageSrc, index) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageSrc;
      if (index < 2) { // Only preload first 2 images immediately
        document.head.appendChild(link);
      }
    });

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
      year: '2016',
      category: 'Government & Judicial',
      client: 'Government of Uttar Pradesh',
      area: '2,690,977 sq ft',
      anchor: 'lucknow-high-court',
      heroImage: highcourt1,
      images: [
        highcourt2,
        highcourt3,
        highcourt4,
        highcourt5
      ],
      description: 'A prestigious judicial complex that represents the dignity and authority of the legal system. This project involved comprehensive lighting design for courtrooms, chambers, public areas, and administrative offices and the prestigious building facade ensuring optimal visibility for proceedings while maintaining the solemnity of the judicial environment.',
      details: [
        'Designed specialized courtroom lighting that ensures optimal visibility for proceedings while maintaining the solemnity and dignity of the judicial environment.',
        'Implemented energy-efficient LED systems throughout the complex, reducing power consumption by 40% compared to traditional lighting solutions.',
        'Created ambient lighting in public waiting areas to provide comfort for visitors while maintaining security visibility and professional atmosphere.',
        'one of the finest dynamic facade lighting on a newly constructed judicial building.'
      ],
      features: [
        'Smart lighting control systems',
        'Emergency backup lighting',
        'Energy-efficient LED technology',
        'dynamic color changing building facade'
      ]
    },
    {
      title: 'Lucknow Ekana Stadium',
      location: 'Lucknow, Uttar Pradesh',
      year: '2018',
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
      description: 'International cricket stadium featuring BCCI-approved floodlights with record-breaking lighting poles - the highest floodlight installation in India. This state-of-the-art facility meets world-class standards for hosting international matches and entertainment events.',
      details: [
        'Installed high-performance sports lighting that meets international cricket standards and BCCI approval for day-night matches and tournaments.',
        'Achieved a world record for the highest floodlight installation in India, setting new benchmarks for stadium lighting infrastructure.',
        'Designed dynamic lighting systems for entertainment events with color-changing capabilities and synchronized effects for opening ceremonies.',
        'Implemented smart controls that adjust lighting levels based on event type, time of day, and broadcasting requirements for international coverage.'
      ],
      features: [
        'BCCI-approved floodlights',
        'Record-breaking pole heights',
        'International cricket standards',
        
      ]
    },
    {
      title: 'Dhyan Chand Hockey Stadium',
      location: 'Jhansi, Uttar Pradesh',
      year: '2023',
      category: 'Sports & Entertainment',
      client: 'Sports Authority of Uttar Pradesh',
      area: '45,000 sq ft',
      anchor: 'dhyanchand-hockey-stadium',
      heroImage: jhansi1,
      images: [
        jhansi2,
        jhansi3,
        jhansi4,
        jhansi5
      ],
      description: 'Premier hockey stadium lighting honoring the legendary Major Dhyan Chand, featuring professional-grade sports illumination for international tournaments. This facility meets FIH international standards and celebrates India\'s hockey heritage.',
      details: [
        'Designed specialized hockey field lighting that meets FIH international standards for professional matches and international tournaments.',
        'Created a tribute to the legendary Major Dhyan Chand through thoughtful lighting design that honors India\'s hockey heritage and sporting excellence.',
        'Implemented uniform light distribution across the playing surface to eliminate shadows and glare, ensuring optimal playing conditions for athletes.',
        'Installed weather-resistant fixtures capable of withstanding extreme weather conditions while maintaining consistent performance throughout the year.'
      ],
      features: [
        'FIH international standards',
        'Heritage tribute design',
        'Uniform light distribution',
        'Weather-resistant fixtures'
      ]
    },
    {
      title: 'Rail Coach Factory',
      location: 'Raebareli, Uttar Pradesh',
      year: '2014',
      category: 'Industrial Infrastructure',
      client: 'Indian Railways',
      area: '150,000 sq ft',
      anchor: 'rail-coach-factory',
      heroImage: rail1,
      images: [
        rail2,
        rail3,
        rail4,
        rail5
      ],
      description: 'Comprehensive industrial lighting solution for large-scale railway coach manufacturing facility. This project enhances productivity and safety while meeting stringent industrial standards for precision manufacturing operations.',
      details: [
        'Designed high-bay lighting systems for manufacturing floors with uniform light distribution and minimal glare for precision assembly work.',
        'Implemented specialized task lighting for quality control areas, welding stations, and detailed assembly work requiring high accuracy and visibility.',
        'Created maintenance-friendly lighting solutions with long-life LED fixtures to minimize production downtime and reduce operational costs.',
        'Installed intelligent lighting controls that integrate with the facility management system for optimal energy efficiency and automated operation.'
      ],
      features: [
        'High-bay LED systems',
        'Precision task lighting',
        'Maintenance-friendly design',
        'Integrated facility controls'
      ]
    },
    {
      title: 'Lohia Dwar & Ambedkar Park',
      location: 'Lucknow, Uttar Pradesh',
      year: '2010',
      category: 'Cultural & Heritage',
      client: 'Government of Uttar Pradesh',
      area: '200,000 sq ft',
      anchor: 'lohia-dwar-ambedkar-park',
      heroImage: lohia3,
      images: [
        lohia2,
        lohia1,
        lohia4,
        lohia5
      ],
      description: 'Majestic gateway structure lighting marking the grand entrance to Gomti Nagar, transforming Lohia Path into a luminous boulevard of architectural excellence. This heritage project combines cultural significance with modern lighting technology.',
      details: [
        'Designed heritage-sensitive lighting that highlights the architectural grandeur of the gateway while respecting the cultural importance of the memorial.',
        'Created dramatic illumination for the entrance to Gomti Nagar, establishing Lohia Path as a prestigious boulevard with sophisticated lighting design.',
        'Implemented energy-efficient LED systems with warm color temperatures to create a welcoming and dignified atmosphere for visitors and residents.',
        'Installed weather-resistant fixtures suitable for outdoor memorial environments with special lighting sequences for national holidays and commemorative events.'
      ],
      features: [
        'Heritage gateway lighting',
        'Architectural accent illumination',
        'Weather-resistant systems',
        'Commemorative lighting sequences'
      ]
    },
    {
      title: 'Ayodhya Ram Path',
      location: 'Ayodhya, Uttar Pradesh',
      year: '2024',
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
      description: 'Sacred pathway illumination featuring elegant street poles and decorative lamps leading to the magnificent Ram Mandir, creating a divine journey of light. This iconic cultural pathway celebrates the rich heritage of Ayodhya with traditional aesthetics and modern technology.',
      details: [
        'Designed heritage-inspired lighting fixtures with elegant street poles and decorative lamps that complement the traditional architecture while providing modern functionality.',
        'Created a spiritual lighting narrative that guides pilgrims and visitors through their journey to the Ram Mandir with varying intensities and warm, welcoming illumination.',
        'Implemented sustainable lighting solutions using solar-powered systems in select areas to reduce environmental impact while maintaining consistent illumination.',
        'Installed special festival lighting capabilities that can transform the pathway into a celebration of light during religious festivals and special occasions.'
      ],
      features: [
        'Heritage-inspired street poles',
        'Decorative lamp fixtures',
        'Solar-powered sections',
        'Festival lighting capabilities'
      ]
    }
  ];

  const categories = ['All', 'Commercial', 'Hospitality', 'Parks & Recreation', 'Road & Pathways'];

  // FIX: Add error handling for MKU image
  const fallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  const cardProjects = [
    {
      title: 'Sahara Ganj Mall',
      category: 'Commercial',
      image: mall1,
      description: 'Premium shopping mall with dynamic retail lighting solutions and energy-efficient systems.',
      location: 'Lucknow, UP',
      year: '2010'
    },
    {
      title: 'Sahara Star Hotel',
      category: 'Hospitality',
      image: hotel1,
      description: 'Luxury hotel lighting with elegant chandeliers and sophisticated ambient systems.',
      location: 'Mumbai, Maharashtra',
      year: '2010'
    },
    {
      title: 'Hazratganj Lighting',
      category: 'Road & Pathways',
      image: hazrat1,
      description: 'Historic market street illumination preserving heritage while enhancing safety.',
      location: 'Lucknow, UP',
      year: '2011'
    },
    {
      title: 'Ambedkar Park',
      category: 'Parks & Recreation',
      image: lohia3,
      description: 'Memorial park lighting with artistic illumination and pathway safety systems.',
      location: 'Lucknow, UP',
      year: '2010'
    },
    {
      title: 'MKU LIMITED',
      category: 'Commercial',  // Changed from 'Global defense & homeland security' to match your categories
      image: eco1 || fallbackImage,  // Use fallback if eco1 fails
      description: 'State of the art office lighting at their headquarters at Kanpur.',  // Fixed capitalization
      location: 'Kanpur, UP',
      year: '2023'
    },
    {
      title: 'Taj Hotel Lucknow',
      category: 'Hospitality',
      image: taj1,
      description: 'Luxury heritage hotel with sophisticated lighting design and premium ambiance.',
      location: 'Lucknow, UP',
      year: '2013'
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
      title: 'Hotels, Hospitality & Malls',
      description: 'Elegant lighting solutions creating memorable guest experiences',
      projects: ['Taj Hotel Lucknow', 'Sahara Star Hotel Mumbai', 'Sahara Mall Lucknow'],
      features: ['Ambient mood lighting', 'Smart room controls', 'Energy-efficient systems']
    },
    {
      title: 'Jewellery Showrooms & Gyms',
      description: 'Specialized lighting to showcase precious metals and enhance fitness environments',
      projects: ['Premium Jewellery Stores', 'Diamond Showrooms', 'Fitness Centers'],
      features: ['High CRI lighting', 'Sparkle enhancement', 'Security-integrated systems']
    },
    {
      title: 'Parks & Pathways',
      description: 'Safe and beautiful outdoor lighting for public spaces',
      projects: ['Ambedkar Park', 'Eco Park', 'Hazratganj Street Lighting', 'Ayodhya Ram Path'],
      features: ['Solar-powered options', 'Motion sensors', 'Wildlife-friendly lighting']
    },
    {
      title: 'Sports Infrastructure',
      description: 'Professional-grade lighting for sports facilities and stadiums',
      projects: ['Ekana Cricket Stadium', 'Dhyan Chand Hockey Stadium'],
      features: ['International standards', 'BCCI approval', 'Weather-resistant design']
    },
    {
      title: 'Government & Heritage',
      description: 'Architectural lighting that transforms institutional and heritage buildings',
      projects: ['Lucknow High Court', 'Lohia Dwar', 'Heritage Structures'],
      features: ['Heritage-sensitive design', 'Energy efficiency', 'Architectural integration']
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
        role="banner"
        aria-label="Infra Innovations Projects Portfolio Hero Section"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-justify">
              Discover our portfolio of transformative lighting projects that illuminate India's most prestigious spaces
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Projects Section */}
      <main className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
              Explore our most prestigious and impactful lighting installations
            </p>
          </div>

          {detailedProjects.map((project, index) => (
            <article 
              key={index} 
              className="mb-20 last:mb-0" 
              id={project.anchor}
              itemScope 
              itemType="https://schema.org/CreativeWork"
            >
              {/* Project Header with Hero Image */}
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 mb-6">
                  <img 
                    src={project.heroImage} 
                    alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: project.title === 'Lucknow Ekana Stadium' ? 'center bottom' : 'center center' 
                    }}
                    width="1200"
                    height="384"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    itemProp="image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" aria-hidden="true"></div>
                  
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-4xl font-bold mb-2" itemProp="name">{project.title}</h3>
                    <div className="flex items-center space-x-6 text-lg flex-wrap gap-2">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span itemProp="locationCreated">{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span itemProp="dateCreated">{project.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                        <span itemProp="genre">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Project Images Grid - FIXED */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative overflow-hidden rounded-lg shadow-lg group bg-gray-900">
                    <img 
                      src={image} 
                      alt={`${project.title} - Additional view ${imgIndex + 1}`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      width="300"
                      height="192"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  </div>
                ))}
              </div>

              {/* Project Content */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-bold text-white mb-4">Project Overview</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify" itemProp="description">
                    {project.description}
                  </p>

                  <h5 className="text-xl font-bold text-white mb-4">Key Achievements</h5>
                  <ul className="space-y-3" itemProp="about">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                        <span className="text-gray-300 leading-relaxed text-justify">{detail}</span>
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
                        <p className="text-white" itemProp="client">{project.client}</p>
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
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < detailedProjects.length - 1 && (
                <div className="mt-16 pt-8 border-t border-gray-700" aria-hidden="true"></div>
              )}
            </article>
          ))}
        </div>
      </main>

      {/* Card Projects Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">More Projects</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
              Explore our diverse portfolio across different sectors and industries
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-2 mb-10">
            <Filter className="w-5 h-5 text-gray-300" aria-hidden="true" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 min-h-[44px] touch-manipulation ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                aria-label={`Filter projects by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCardProjects.map((project, index) => (
              <article 
                key={index} 
                className="group bg-black border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                itemScope 
                itemType="https://schema.org/CreativeWork"
              >
                {/* Image with error handling */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - ${project.description.substring(0, 80)}...`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    width="400"
                    height="256"
                    loading="lazy"
                    decoding="async"
                    itemProp="image"
                    onError={(e) => {
                      // Fallback for MKU or any other image that fails to load
                      e.target.src = fallbackImage;
                      e.target.onerror = null; // Prevent infinite loop
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-blue-400 text-sm font-semibold mb-2" itemProp="genre">{project.category}</div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors" itemProp="name">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-justify" itemProp="description">
                    {project.description}
                  </p>
                  
                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400 text-sm">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span itemProp="locationCreated">{project.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
                      <span itemProp="dateCreated">{project.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section - Clean and Consistent */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-justify">
              Specialized lighting solutions across diverse sectors and industries
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {projectExpertise.map((expertise, index) => (
                <div key={index} className="group" itemScope itemType="https://schema.org/Service">
                  {/* Main Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300" itemProp="name">
                    {expertise.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg text-justify" itemProp="description">
                    {expertise.description}
                  </p>

                  {/* Completed Projects */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Completed Projects</h4>
                    <div className="space-y-2">
                      {expertise.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
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
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consistent Divider - only between rows */}
                  {index < projectExpertise.length - 1 && index % 2 === 1 && (
                    <div className="col-span-2 mt-8 pt-8 border-t border-gray-700" aria-hidden="true"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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

export default ProjectsPage;

