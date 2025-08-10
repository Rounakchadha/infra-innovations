import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // SEO and performance optimizations
  useEffect(() => {
    // Dynamic page title for better SEO
   document.title = "Contact Us - Infra Innovations";  // Secondary page
    
    // Update meta description for contact page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Infra Innovations for professional lighting solutions in Lucknow. Get free consultation for LED, commercial, stadium lighting projects. Call +91 522 4002393 or visit our office at Sahara Trade Centre, Ayodhya Road.');
    }

    // Add contact page structured data
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Infra Innovations",
      "description": "Contact page for Infra Innovations lighting consultancy",
      "url": "https://www.infra.org.in/contact",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Infra Innovations",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "401, II Floor, Sahara Trade Centre, Ayodhya Road",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226016",
          "addressCountry": "IN"
        },
        "telephone": ["+91 522 4002393", "+91 9415011227"],
        "email": ["innovvations@gmail.com", "innovations@infra.org.in"],
        "openingHours": [
          "Mo-Fr 09:00-18:00",
          "Sa 10:00-16:00"
        ],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.8732754",
          "longitude": "80.9899283"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(contactSchema);
    document.head.appendChild(script);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Project Details:
${formData.message}

---
This message was sent from the Infra Innovations contact form.
    `;
    
    // Create mailto link
    const mailtoLink = `mailto:chadharounak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open user's email client
    window.location.href = mailtoLink;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
        role="banner"
        aria-label="Contact Infra Innovations Hero Section"
      >
        <div className="absolute inset-0 bg-black/70 z-0" aria-hidden="true"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="text-blue-400">Us</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to illuminate your space? Let's discuss your lighting project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <main className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <section className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12" role="alert" aria-live="polite">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">Your email client should have opened with your message. Please send the email to complete your inquiry.</p>
                  <p className="text-gray-400 text-sm mt-2">If your email client didn't open, please email us directly at: <a href="mailto:chadharounak@gmail.com" className="text-blue-400 hover:text-blue-300">chadharounak@gmail.com</a></p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 min-h-[44px] touch-manipulation"
                        placeholder="Your full name"
                        aria-describedby="name-error"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 min-h-[44px] touch-manipulation"
                        placeholder="your.email@example.com"
                        aria-describedby="email-error"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        autoComplete="tel"
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 min-h-[44px] touch-manipulation"
                        placeholder="+91"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        autoComplete="organization"
                        className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 min-h-[44px] touch-manipulation"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none touch-manipulation"
                      placeholder="Tell us about your project requirements, space details, timeline, and any specific lighting needs..."
                      aria-describedby="message-error"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group min-h-[44px] touch-manipulation"
                    aria-label="Send message to Infra Innovations"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    Send Message
                  </button>
                </form>
              )}
            </section>

            {/* Contact Information */}
            <section className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're planning a new project or need consultation on existing lighting systems, 
                  our team of experts is here to help. We specialize in creating innovative lighting solutions 
                  that transform spaces and enhance experiences.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Visit Our Office</h3>
                      <address className="text-gray-300 not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <strong itemProp="name">Infra Innovations</strong><br />
                        <span itemProp="streetAddress">401, II Floor<br />
                        Sahara Trade Centre<br />
                        Ayodhya Road</span><br />
                        <span itemProp="addressLocality">Lucknow</span> - <span itemProp="postalCode">226016</span>, <span itemProp="addressCountry">India</span>
                      </address>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                      <div className="text-gray-300">
                        <a href="tel:+915224002393" className="hover:text-blue-400 transition-colors block" itemProp="telephone">+91 522 4002393</a>
                        <a href="tel:+919415011227" className="hover:text-blue-400 transition-colors block" itemProp="telephone">+91 9415011227</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                      <div className="text-gray-300">
                        <a href="mailto:innovvations@gmail.com" className="hover:text-blue-400 transition-colors block" itemProp="email">innovvations@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                      <div className="text-gray-300" itemProp="openingHours" content="Mo-Fr 09:00-18:00">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Interactive Google Maps Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6" aria-hidden="true"></div>
            <p className="text-gray-300">Illuminate - A unit of Infra Innovations, Lucknow</p>
          </div>
          
          {/* Google Maps Embed - Your Exact Location */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.951707715344!2d80.9899282755755!3d26.873275361783982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be32d4c395691%3A0xa4b4fb4bd10ac916!2sIlluminate%20(A%20unit%20of%20infra%20innovvations)!5e0!3m2!1sen!2sin!4v1751427950953!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Illuminate - A unit of Infra Innovations Office Location - Sahara Trade Centre, Ayodhya Road, Lucknow"
            ></iframe>
          </div>
          
          {/* Map Info */}
          <div className="text-center mt-6">
            <p className="text-gray-300">
              <strong className="text-white">Address:</strong> Infra Innovations, 401, II Floor, Sahara Trade Centre, Ayodhya Road, Lucknow - 226016, India
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Click on the map to get directions or view in Google Maps
            </p>
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

export default ContactPage;
