'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  regions: string[];
  pricing: string;
}

export default function GlobalService() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js, showcasing projects and skills with beautiful animations.',
      icon: '🎨',
      features: [
        'Next.js 14',
        'Tailwind CSS',
        'Responsive Design',
        'Dark Mode',
        'Project Showcase'
      ],
      regions: ['Personal Portfolio', 'Project Display', 'Contact Form'],
      pricing: 'View Live Demo'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'Full-featured e-commerce platform with product management, cart system, and secure checkout.',
      icon: '🛍️',
      features: [
        'Product Catalog',
        'Shopping Cart',
        'User Authentication',
        'Order Management',
        'Admin Dashboard'
      ],
      regions: ['Online Store', 'Admin Panel', 'Customer Portal'],
      pricing: 'View Live Demo'
    },
    {
      id: 'blog-platform',
      title: 'Blog Platform',
      description: 'Modern blog platform with content management, comments, and social sharing features.',
      icon: '📝',
      features: [
        'Blog Posts',
        'Categories',
        'Comments System',
        'Rich Text Editor',
        'Social Sharing'
      ],
      regions: ['Content Management', 'User Engagement', 'SEO Friendly'],
      pricing: 'View Live Demo'
    },
    {
      id: 'dashboard-app',
      title: 'Admin Dashboard',
      description: 'Comprehensive admin dashboard for managing users, content, and analytics.',
      icon: '📊',
      features: [
        'User Management',
        'Analytics Dashboard',
        'Content Editor',
        'Settings Panel',
        'Activity Logs'
      ],
      regions: ['Admin Control', 'Data Analytics', 'System Management'],
      pricing: 'View Live Demo'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section py-20">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent text-center">
            Global Services
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Experience our comprehensive range of services available worldwide. We bring quality and innovation to every corner of the globe.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="card group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <span className="text-purple-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-purple-400 mb-2">Available Regions</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.regions.map((region, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                          {region}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-purple-500/20">
                    <div className="flex justify-between items-center">
                      <span className="text-purple-400">{service.pricing}</span>
                      <button className="button-primary px-4 py-2 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-b from-purple-900/90 to-black/90 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/20">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedService.icon}</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Available Regions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.regions.map((region, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-purple-400">{selectedService.pricing}</span>
                  <Link
                    href={`/contact?service=${selectedService.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 