import React, { useState, useEffect, useRef } from 'react';
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const autoPlayRef = useRef(null);

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
      description: 'International cricket stadium featuring BCCI-approved floodlights with record-breaking lighting poles - the highest floodlight installation in India, meeting world-class standards.',
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
      description: 'Sacred pathway illumination featuring elegant street poles and decorative lamps leading to the magnificent Ram Mandir, creating a divine journey of light.',
      client: 'Ayodhya Development Authority',
      anchor: 'ayodhya-ram-path'
    },
    {
      id: 4,
      title: 'Lohia Dwar',
      location: 'Lucknow, Uttar Pradesh',
      year: '2024',
      category: 'Cultural & Heritage',
      image: lohiahero,
      description: 'Majestic gateway structure lighting marking the grand entrance to Gomti Nagar, transforming Lohia Path into a luminous boulevard of architectural excellence.',
      client: 'Lucknow Development Authority',
      anchor: 'lohia-dwar'
    },
    {
      id: 5,
      title: 'Modern Rail-Coach Factory',
      location: 'Raebareli, Uttar Pradesh',
      year: '2023',
      category: 'Industrial Infrastructure',
      image: railhero,
      description: 'Comprehensive industrial lighting solution for large-scale manufacturing facility, featuring high-bay LED systems and smart controls for optimal productivity.',
      client: 'Rail Coach Factory',
      anchor: 'rail-coach-factory'
    },
    {
      id: 6,
      title: 'Dhyan Chand Stadium',
      location: 'Jhansi, Uttar Pradesh',
      year: '2024',
      category: 'Sports & Recreation',
      image: jhansihero,
      description: 'Premier hockey stadium lighting honoring the legendary Major Dhyan Chand, featuring professional-grade sports illumination for international tournaments.',
      client: 'Sports Authority of Uttar Pradesh',
      anchor: 'dhyan-chand-stadium'
    }
  ];

  // Create infinite loop array - duplicate projects for seamless transition
  const infiniteProjects = [...allProjects, ...allProjects, ...allProjects];

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Start autoplay
  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 8000);
  };

  // Stop autoplay
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Auto-slide with true infinite forward loop
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
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

  // Touch event handlers
  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    stopAutoPlay(); // Stop auto-play during swipe
  };

  const onTouchMove = (e) => {
    if (!isSwiping) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsSwiping(false);
      startAutoPlay(); // Resume auto-play
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (isRightSwipe && currentIndex > 0) {
      // Swipe right - go to previous
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    setIsSwiping(false);
    startAutoPlay(); // Resume auto-play after swipe
  };

  // Handle manual navigation via dots
  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(allProjects.length + index); // Jump to middle set + index
    stopAutoPlay();
    startAutoPlay(); // Restart auto-play
  };

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

        {/* Projects Container - Infinite Forward Loop with Touch Support */}
        <div 
          className="relative overflow-hidden mb-12"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className={`flex gap-6 ${isTransitioning && !isSwiping ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * 336}px)`, // 320px width + 16px gap
              cursor: isSwiping ? 'grabbing' : 'grab'
            }}
          >
            {infiniteProjects.map((project, index) => (
              <div
                key={`${project.id}-${Math.floor(index / allProjects.length)}-${index}`}
                className="flex-shrink-0 w-80 select-none"
              >
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      draggable="false"
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
        <div className="flex justify-center items-center space-x-2 mb-8">
          {allProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                getActualIndex(currentIndex) === index
                  ? 'bg-blue-400 scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center text-gray-400 text-sm mb-8 md:hidden">
          <p>Swipe left or right to navigate</p>
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
