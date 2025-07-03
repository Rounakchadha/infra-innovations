import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Your WhatsApp number
    const phoneNumber = '7706900889';
    
    // Create the message text
    const whatsappMessage = `Hello Infra Innovations!

New Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}

Looking forward to discussing my lighting project with you.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <section 
      id="contact" 
      className="bg-black relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      {/* Main Contact Content */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss your next lighting project and bring your vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div 
                  className="rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-blue-400/50 transform hover:-translate-y-1"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                  }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-4 shadow-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Phone</h4>
                  <div className="space-y-1">
                    <div>
                      <a 
                        href="tel:+915224002393" 
                        className="text-gray-200 hover:text-blue-400 transition-colors duration-200 cursor-pointer block"
                      >
                        +91 522 4002393
                      </a>
                    </div>
                    <div>
                      <a 
                        href="tel:+919415011227" 
                        className="text-gray-200 hover:text-blue-400 transition-colors duration-200 cursor-pointer block"
                      >
                        +91 9415011227
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-purple-400/50 transform hover:-translate-y-1"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                  }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 shadow-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email</h4>
                  <div className="space-y-1">
                    <div>
                      <a 
                        href="mailto:innovvations@gmail.com" 
                        className="text-gray-200 hover:text-purple-400 transition-colors duration-200 cursor-pointer block"
                      >
                        innovvations@gmail.com
                      </a>
                    </div>
                    <div>
                      <a 
                        href="mailto:innovations@infra.org.in" 
                        className="text-gray-200 hover:text-purple-400 transition-colors duration-200 cursor-pointer block"
                      >
                        innovations@infra.org.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div 
                  className="rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-teal-400/50 transform hover:-translate-y-1"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                  }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 text-white mb-4 shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Our Office</h4>
                  <div className="text-gray-200">
                    <p className="font-medium text-blue-300">Infra Innovations</p>
                    <p>401, II Floor</p>
                    <p>Sahara Trade Centre</p>
                    <p>Ayodhya Road</p>
                    <p>Lucknow - 226016</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className="rounded-2xl p-8 border border-white/20 shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-200 font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-gray-300 border border-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-200 font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-gray-300 border border-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-gray-300 border border-white/20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none text-white placeholder-gray-300 border border-white/20"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)'
                    }}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500/80 to-green-600/80 hover:from-green-600/90 hover:to-green-700/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105 border border-green-400/30"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <span>Send via WhatsApp</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Three-Column Footer */}
      <div className="py-4 bg-black border-t border-gray-800 relative z-10">
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
                    <Linkedin className="w-3 h-3 text-blue-500 group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
