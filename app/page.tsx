'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FeatureDetails {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  services: string[];
  pricing?: string;
}

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(null);

  const features: FeatureDetails[] = [
    {
      id: 'market',
      title: 'Digital Market',
      description: 'A comprehensive digital marketplace platform offering a wide range of products and services with secure transactions and user-friendly interface.',
      icon: '🏪',
      benefits: [
        'Wide range of digital products',
        'Secure payment system',
        'Easy product listing',
        'Customer reviews & ratings',
        '24/7 customer support'
      ],
      services: [
        'Digital downloads',
        'Software licenses',
        'Online courses',
        'Digital art',
        'E-books'
      ],
      pricing: 'Commission: 5% per sale'
    },
    {
      id: 'medical',
      title: 'Medical Store',
      description: 'Your one-stop solution for all medical supplies and equipment, featuring a comprehensive range of healthcare products from trusted brands.',
      icon: '💊',
      benefits: [
        'Genuine medical products',
        'Fast delivery',
        'Prescription management',
        'Healthcare expert support',
        'Regular health tips'
      ],
      services: [
        'Prescription medicines',
        'Medical equipment',
        'Health supplements',
        'Personal care',
        'First aid supplies'
      ],
      pricing: 'Free delivery on orders above $50'
    },
    {
      id: 'mobile',
      title: 'Mobile Repair',
      description: 'Professional mobile repair services with certified technicians and genuine parts, ensuring your devices get the best care possible.',
      icon: '📱',
      benefits: [
        'Expert technicians',
        'Genuine parts',
        'Quick repair service',
        'Warranty on repairs',
        'Free diagnostics'
      ],
      services: [
        'Screen replacement',
        'Battery replacement',
        'Water damage repair',
        'Software issues',
        'Component repair'
      ],
      pricing: 'Starting from $29.99'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent animate-gradient">
            Welcome to SolutionBD
          </h1>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff0080] to-[#7928ca] mb-8 max-w-2xl mx-auto">
            Innovative digital solutions built with cutting-edge technology.
            Transform your ideas into reality today!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="button-primary">
              Learn More
            </Link>
            <Link href="/contact" className="button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="card group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedFeature(feature)}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-b from-purple-900/90 to-black/90 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/20">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedFeature.icon}</span>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                  {selectedFeature.title}
                </h2>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFeature(null);
                }}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {selectedFeature.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFeature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Our Services
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedFeature.services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedFeature.pricing && (
                <div className="mt-6 pt-6 border-t border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400">{selectedFeature.pricing}</span>
                    <Link
                      href={`/${selectedFeature.id}`}
                      className="px-6 py-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff0080]/10 via-[#7928ca]/10 to-[#0061ff]/10 animate-gradient"></div>
        <div className="container text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-8 max-w-2xl mx-auto">
            Join us today and discover how we can transform your digital presence.
          </p>
          <Link href="/contact" className="button-primary">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}