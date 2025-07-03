import React from 'react';
import Header from '../components/layout/Header';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import founderimg from '../assets/founderpic/founderimg.png';

const AboutPage = () => {
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
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-blue-400">Infra Innovations</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Black Background */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
            
            <div className="space-y-8 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                Founded in 2012, Infra Innovations began with a simple yet powerful vision: to transform spaces through 
                exceptional lighting design and create experiences that enhance the quality of life for everyone who 
                inhabits a space. What started as a small team of passionate designers has grown into a leading 
                collaborative lighting solutions company, recognized for our innovative approach and unwavering 
                commitment to excellence.
              </p>
              
              <p>
                Our journey has been marked by continuous growth and evolution. We believe that lighting is far more 
                than just illumination—it's about creating atmospheres, enhancing architectural beauty, and improving 
                human experiences. This philosophy drives every project we undertake, from intimate residential spaces 
                to grand commercial complexes and prestigious government buildings.
              </p>
              
              <p>
                Over the years, we have built strong partnerships with the world's most prestigious lighting brands, 
                including <span className="text-blue-400 font-semibold">Neri, Flos, and Bega</span>. These collaborations 
                allow us to offer our clients access to cutting-edge technology, innovative designs, and premium quality 
                products that set new standards in the industry.
              </p>
              
              <p>
                Our expert team brings together decades of experience in lighting design, project management, and 
                technical implementation. We maintain the highest quality standards in every project we deliver, 
                ensuring excellence and reliability that our clients can depend on. Our commitment to innovation 
                drives us to embrace cutting-edge lighting solutions and technology that push the boundaries of design.
              </p>
              
              <p>
                What sets us apart is our meticulous attention to detail in execution, from initial concept to final 
                installation. We understand that precision is paramount in creating lighting solutions that not only 
                meet but exceed our clients' expectations. Today, we continue to deliver projects that transform 
                spaces and create lasting impressions, solidifying our reputation as leaders in the lighting industry.
              </p>
            </div>

            {/* Quote Section Between Story and Founder */}
            <div className="my-20 text-center">
              <div className="relative">
                <span className="text-8xl text-blue-400/30 font-serif absolute -top-6 -left-4">"</span>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-4xl mx-auto px-8">
                  Light is not just about illumination; it's about creating emotions, defining spaces, and transforming the way we experience the world around us.
                </h3>
                <span className="text-8xl text-blue-400/30 font-serif absolute -bottom-6 -right-4">"</span>
              </div>
              <p className="text-blue-400 font-semibold text-lg mt-6">— Philosophy of Infra Innovations</p>
            </div>

            {/* Founder Section - Integrated */}
            <div className="mt-16 pt-16 border-t border-gray-700">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <img 
                    src={founderimg}
                    alt="Founder & CEO"
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">Rahul Chadha</h3>
                  <p className="text-blue-400 font-semibold text-xl mb-6">Founder & CEO</p>
                  
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                    <p>
                      With over 15 years of experience in architectural lighting design, Rahul Chadha founded 
                      Infra Innovations with a vision to revolutionize how lighting transforms spaces across India. 
                      His passion for combining technical excellence with artistic vision has been the driving 
                      force behind the company's success and growth into one of India's most respected lighting 
                      solution providers.
                    </p>
                    
                    <p>
                      Under his visionary leadership, Infra Innovations has completed over 200 prestigious projects, 
                      including major government buildings like the Lucknow High Court, cultural landmarks such as 
                      Ayodhya Ram Path, and modern commercial complexes across multiple cities. Rajesh's commitment 
                      to innovation and uncompromising quality standards has established the company as a trusted 
                      partner for India's most significant architectural lighting projects.
                    </p>
                    
                    <p>
                      His expertise in sustainable lighting solutions, smart lighting systems, and energy-efficient 
                      technologies has positioned Infra Innovations at the forefront of the industry. Rajesh continues 
                      to lead the company with a focus on delivering projects that not only exceed client expectations 
                      but also contribute to creating more beautiful, functional, and sustainable built environments 
                      across India.
                    </p>
                  </div>
                </div>
              </div>
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

export default AboutPage;
