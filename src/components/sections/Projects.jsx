import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

// Import your local images
import highCourtHero from '../../assets/high_court/high_hero.jpg';
import ekanahero from '../../assets/ekana/ekana_hero.jpg';
import lohiahero from '../../assets/lohia/lohia_hero.jpg';
import railhero from '../../assets/rail/rail_hero.jpg';
import jhansihero from '../../assets/jhansi/jhansi_hero.jpg';
import ramhero from '../../assets/ram/ramMandir.jpg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  

  // Array of all projects
  const allProjects = [
    {
      id: 1,
      title: 'Lucknow High Court Bench',
      location: 'Lucknow, Uttar Pradesh',
      year: '2023',
      category: 'Government & Judicial',
      image: highCourtHero,
      description: 'Prestigious judicial complex lighting design featuring specialized courtroom illumination and energy-efficient LED systems.',
      client: 'Government of Uttar Pradesh',
      anchor: 'lucknow-high-court'
    },
    {
      id: 2,
      title: 'Lucknow EKANA Stadium',
      location: 'Lucknow, Uttar Pradesh',
      year: '2024',
      category: 'Sports & Entertainment',
      image: ekanahero,
      description: 'State-of-the-art stadium lighting meeting international standards with dynamic color-changing capabilities.',
      client: 'Sports Authority of India',
      anchor: 'lucknow-kana-stadium'
    },
    {
      id: 3,
      title: 'Ayodhya Ram Path',
      location: 'Ayodhya, Uttar Pradesh',
      year: '2023',
      category: 'Cultural & Heritage',
      image: ramhero,
      description: 'Heritage-inspired lighting pathway celebrating Ayodhya\'s cultural significance with sustainable solar-powered systems.',
      client: 'Ayodhya Development Authority',
      anchor: 'ayodhya-ram-path'
    },
    {
      id: 4,
      title: 'Lohia Dwar',
      location: 'lucknow, Uttar Pradesh',
      year: '2024',
      category: 'Cultural & Heritage',
      image: lohiahero,
      description: 'Sacred ghats lighting with underwater LED systems creating magical reflections while preserving spiritual ambiance.',
      client: 'Varanasi Smart City Mission',
      anchor: 'varanasi-ghats'
    },
    {
      id: 5,
      title: 'Modern Rail-Coach Factory',
      location: 'raibareili, Uttar Pradesh',
      year: '2023',
      category: 'Transportation Infrastructure',
      image: railhero,
      description: 'Comprehensive metro lighting solution with smart controls and wayfinding systems for modern transportation.',
      client: 'UP Metro Rail Corporation',
      anchor: 'agra-metro-network'
    },
    {
      id: 6,
      title: 'Dhyan Chand Stadium',
      location: 'Jhansi, Uttar Pradesh',
      year: '2024',
      category: 'Commercial Complex',
      image: jhansihero,
      description: 'Modern corporate complex with circadian lighting systems and daylight harvesting technology for employee wellbeing.',
      client: 'Noida Authority',
      anchor: 'noida-corporate-hub'
    }
  ];

  // Create infinite loop array - duplicate projects for seamless transition
  const infiniteProjects = [...allProjects, ...allProjects, ...allProjects];

  // Auto-slide with true infinite forward loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset for infinite loop
  useEffect(() => {
    if (currentIndex >= allProjects.length * 2) {
      // Reset to the middle set without animation
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(allProjects.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, allProjects.length]);

  // Get the actual project index for indicators
  const getActualIndex = (index) => index % allProjects.length;

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our portfolio of transformative lighting projects illuminating India's most prestigious landmarks and spaces.
          </p>
        </div>

        {/* Projects Container - Infinite Forward Loop */}
        <div className="relative overflow-hidden mb-12">
          <div 
            className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 336}px)`, // 320px width + 16px gap
            }}
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${Math.floor(index / allProjects.length)}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-2 text-blue-600" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-2 text-blue-600" />
                        {project.year}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Link 
                      to={`/projects#${project.anchor}`}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline text-sm"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators - Only show original 6 dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {allProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(allProjects.length + index); // Jump to middle set + index
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                getActualIndex(currentIndex) === index
                  ? 'bg-blue-400 scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
