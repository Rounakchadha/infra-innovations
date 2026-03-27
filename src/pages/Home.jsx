import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Partners from '../components/sections/Partners';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  // Critical SEO optimizations for homepage to rank #1
  useEffect(() => {
    // IMPROVED: Stronger, more authoritative title without generic "Home"
    document.title = "Infra Innovations | Lighting Excellence | Official Website";
    
    // Update meta description with comprehensive content
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Welcome to Infra Innovations official website. We are a lighting consultancy company based off in Lucknow specializing in LED lighting, commercial lighting, stadium lighting solutions. 100+ prestigious projects including Lucknow High Court, Ekana Stadium (BCCI Approved), Ayodhya Ram Path. Contact: +91 522 4002393');
    }

    // Add canonical tag to establish this as the main page
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://www.infra.org.in/';
    document.head.appendChild(canonicalLink);

    // IMPROVED: Add isPartOf to establish homepage as primary
    const homePageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Infra Innovations Official Homepage",
      "description": "Official homepage of Infra Innovations - Leading lighting consultancy in Lucknow",
      "url": "https://www.infra.org.in/",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Infra Innovations Home",
          "item": "https://www.infra.org.in/"
        }]
      },
      "mainEntity": {
        "@type": "Organization",
        "@id": "https://www.infra.org.in/#organization"
      }
    };

    // Add homepage-specific structured data
    const homeSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Infra Innovations",
      "alternateName": ["Infra Innovations Lighting", "Illuminate - A unit of Infra Innovations"],
      "url": "https://www.infra.org.in/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.infra.org.in/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "description": "Infra Innovations is the leading lighting consultancy in Lucknow specializing in LED, commercial, stadium, and architectural lighting solutions across Uttar Pradesh.",
      "publisher": {
        "@type": "Organization",
        "name": "Infra Innovations",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.infra.org.in/logo.webp"
        }
      }
    };

    // Add breadcrumb schema to establish hierarchy
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Infra Innovations",
        "item": "https://www.infra.org.in/"
      }]
    };

    // Add organization schema with full details
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Infra Innovations",
      "image": "https://www.infra.org.in/hero-image.webp",
      "description": "Leading lighting consultancy in Lucknow specializing in LED, commercial, stadium, and architectural lighting solutions",
      "@id": "https://www.infra.org.in/#organization",
      "url": "https://www.infra.org.in/",
      "telephone": ["+91 522 4002393", "+91 9415011227"],
      "email": ["innovvations@gmail.com", "innovations@infra.org.in"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "401, II Floor, Sahara Trade Centre, Ayodhya Road",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226016",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8732754",
        "longitude": "80.9899283"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 10:00-16:00"
      ],
      "sameAs": [
        "https://www.linkedin.com/in/rahul-chadha-3a5532268/",
        "https://www.facebook.com/infrainnovations",
        "https://www.instagram.com/infrainnovations"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Lighting Services",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "LED Lighting Solutions",
            "description": "Energy-efficient LED lighting for all applications"
          },
          {
            "@type": "Service",
            "name": "Commercial Lighting",
            "description": "Professional lighting for offices and commercial spaces"
          },
          {
            "@type": "Service",
            "name": "Stadium Lighting",
            "description": "BCCI-approved sports and stadium lighting"
          },
          {
            "@type": "Service",
            "name": "Architectural Lighting",
            "description": "Heritage and modern architectural illumination"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "50"
      }
    };

    // Create script elements for all schemas
    const scripts = [];
    [homePageSchema, homeSchema, breadcrumbSchema, organizationSchema].forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });

    // Add Open Graph meta tags for better social sharing
    const ogTags = [
      { property: 'og:title', content: 'Infra Innovations - Leading Lighting Company in Lucknow | Official Website' },
      { property: 'og:description', content: 'Expert LED lighting, commercial lighting, stadium lighting solutions. 100+ prestigious projects across Uttar Pradesh.' },
      { property: 'og:url', content: 'https://www.infra.org.in/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.infra.org.in/og-image.webp' },
      { property: 'og:site_name', content: 'Infra Innovations' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });

    // Add mobile-specific meta tags
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
    }

    // Cleanup function
    return () => {
      if (document.head.contains(canonicalLink)) {
        document.head.removeChild(canonicalLink);
      }
      scripts.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <Header />
      <main role="main" aria-label="Infra Innovations Homepage Content">
        {/* Hidden SEO content to establish homepage authority */}
        <div className="sr-only">
          <h1>Infra Innovations - Official Homepage</h1>
          <p>Welcome to the official website of Infra Innovations, Lucknow's premier lighting consultancy company.</p>
        </div>
        <Hero />
        <About />
        <Partners />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};  

export default Home;
