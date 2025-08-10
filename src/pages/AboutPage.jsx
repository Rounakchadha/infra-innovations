import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import founderimg from '../assets/founderpic/founderimg.png';

const AboutPage = () => {
  // SEO and performance optimizations
  useEffect(() => {
    // Dynamic page title for better SEO
    document.title = "About Us - Infra Innovations";  // Secondary page
    
    // Update meta description for this specific page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Infra Innovations - Founded in 2012, we are Lucknow\'s premier lighting consultancy. Meet founder Rahul Chadha and discover our journey in transforming India\'s most prestigious spaces with innovative lighting solutions.');
    }

    // Add page-specific structured data with breadcrumb (SEO only - no visual change)
    const aboutSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Infra Innovations",
      "description": "About Infra Innovations - Leading lighting consultancy founded in 2012",
      "url": "https://www.infra.org.in/about",
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
            "name": "About",
            "item": "https://www.infra.org.in/about"
          }
        ]
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "Infra Innovations",
        "foundingDate": "2012",
        "founder": {
          "@type": "Person",
          "name": "Rahul Chadha",
          "jobTitle": "Founder & CEO",
          "description": "15+ years experience in architectural lighting design"
        },
        "description": "Leading lighting consultancy transforming spaces through exceptional lighting design",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(aboutSchema);
    document.head.appendChild(script);

    // Preload founder image for faster loading
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = founderimg;
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div>
      <Header />
      
      {/* Hero Section with Night City Background */}
      <section 
        className="pt-24 pb-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        role="banner"
        aria-label="About Infra Innovations Hero Section"
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-400">Infra Innovations</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Black Background */}
      <main className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
            
            <article className="space-y-8 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                Founded in 2012, <strong>Infra Innovations</strong> began with a simple yet powerful vision: to transform spaces through 
                exceptional lighting design and create experiences that enhance the quality of life for everyone who 
                inhabits a space. What started as a small team of passionate designers has grown into a leading 
                collaborative lighting solutions company, recognized for our innovative approach and unwavering 
                commitment to excellence.
              </p>
              
              <p>
                Our journey has been marked by continuous growth and evolution. We believe that lighting is far more 
                than just illumination, it's about creating atmospheres, enhancing architectural beauty, and improving 
                human experiences. This philosophy drives every project we undertake, from intimate residential spaces 
                to grand commercial complexes and prestigious government buildings.
              </p>
              
              <p>
                Over the years, we have built strong partnerships with the world's most prestigious lighting brands, 
                including <span className="text-blue-400 font-semibold">Neri, Flos, and Bega</span>. These collaborations 
                allow us to offer our clients access to cutting edge technology, innovative designs, and premium quality 
                products that set new standards in the industry.
              </p>
              
              <p>
                Our expert team brings together decades of experience in lighting design, project management, and 
                technical implementation. We maintain the highest quality standards in every project we deliver, 
                ensuring excellence and reliability that our clients can depend on. Our commitment to innovation 
                drives us to embrace cutting edge lighting solutions and technology that push the boundaries of design.
              </p>
              
              <p>
                What sets us apart is our meticulous attention to detail in execution, from initial concept to final 
                installation. We understand that precision is paramount in creating lighting solutions that not only 
                meet but exceed our clients' expectations. Today, we continue to deliver projects that transform 
                spaces and create lasting impressions, solidifying our reputation as leaders in the lighting industry.
              </p>
            </article>

            {/* Quote Section Between Story and Founder */}
            <blockquote className="my-20 text-center">
              <div className="relative">
                <span className="text-8xl text-blue-400/30 font-serif absolute -top-6 -left-4" aria-hidden="true">"</span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-4xl mx-auto px-8">
                  Light is not just about illumination; it's about creating emotions, defining spaces, and transforming the way we experience the world around us.
                </h3>
                <span className="text-8xl text-blue-400/30 font-serif absolute -bottom-6 -right-4" aria-hidden="true">"</span>
              </div>
              <cite className="text-blue-400 font-semibold text-lg mt-6 block">— Philosophy of Infra Innovations</cite>
            </blockquote>

            {/* Founder Section - Integrated */}
            <section className="mt-16 pt-16 border-t border-gray-700" itemScope itemType="https://schema.org/Person">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <img 
                    src={founderimg}
                    alt="Rahul Chadha - Founder and CEO of Infra Innovations, leading lighting consultancy expert with 15+ years experience"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
                    width="320"
                    height="320"
                    loading="lazy"
                    decoding="async"
                    itemProp="image"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2" itemProp="name">Rahul Chadha</h3>
                  <p className="text-blue-400 font-semibold text-xl mb-6" itemProp="jobTitle">Founder & CEO</p>
                  
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify" itemProp="description">
                    <p>
                      With over 15 years of experience in architectural lighting design, <strong>Rahul Chadha</strong> founded 
                      <strong> Infra Innovations</strong> with a vision to revolutionize how lighting transforms spaces across India. 
                      His passion for combining technical excellence with artistic vision has been the driving 
                      force behind the company's success and growth into one of India's most respected lighting 
                      solution providers.
                    </p>
                    
                    <p>
                      Under the visionary leadership, <strong>Infra Innovations</strong> has completed over 200 prestigious projects, 
                      including major government buildings like the <strong>Lucknow High Court</strong>, cultural landmarks such as  
                      <strong> Ayodhya Ram Path</strong>, and modern commercial complexes across multiple cities. Rahul's commitment 
                      to innovation and uncompromising quality standards has established the company as a trusted 
                      partner for India's most significant architectural lighting projects.
                    </p>
                    
                    <p>
                      His expertise in sustainable lighting solutions, smart lighting systems, and energy-efficient 
                      technologies has positioned <strong>Infra Innovations</strong> at the forefront of the industry. Rahul's continues 
                      to lead the company with a focus on delivering projects that not only exceed client expectations 
                      but also contribute to creating more beautiful, functional, and sustainable built environments 
                      across India.
                    </p>
                  </div>
                </div>
              </div>
            </section>
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
                <a href="#" className="group" aria-label="Follow Infra Innovations on Twitter">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition-all duration-300 transform hover:scale-110">
                    <Twitter className="w-3 h-3 text-sky-400 group-hover:text-white" aria-hidden="true" />
                  </div>
                </a>

                <a href="#" className="group" aria-label="Follow Infra Innovations on Instagram">
                  <div className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-all duration-300 transform hover:scale-110">
                    <Instagram className="w-3 h-3 text-pink-400 group-hover:text-white" aria-hidden="true" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/rahul-chadha-3a5532268/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Connect with Rahul Chadha on LinkedIn">
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

export default AboutPage;
