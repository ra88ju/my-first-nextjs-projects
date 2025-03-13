'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles/page.css';

interface FeatureDetails {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  services: string[];
  pricing?: string;
}

interface TourPoint {
  id: string;
  title: string;
  description: string;
  icon: string;
  location: string;
  rating: number;
  entry: string;
  images: string[];
  facilities: string[];
  bestTime: string;
  tips: string[];
}

export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(null);
  const [selectedTourPoint, setSelectedTourPoint] = useState<TourPoint | null>(null);

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
      id: 'payment',
      title: 'Bill Payment System',
      description: 'One-stop solution for all your bill payments with secure transactions, automated reminders, and comprehensive payment history tracking.',
      icon: '💳',
      benefits: [
        'Secure Payment Processing',
        'Automated Bill Reminders',
        'Multiple Payment Methods',
        'Payment History Tracking',
        'Instant Payment Confirmation'
      ],
      services: [
        'Utility Bills (Electricity, Water, Gas)',
        'Internet & Phone Bills',
        'Insurance Premiums',
        'Credit Card Payments',
        'Loan EMI Payments'
      ],
      pricing: 'Free for basic payments, Premium: $4.99/month'
    },
    {
      id: 'finance',
      title: 'Personal Finance Management',
      description: 'Comprehensive financial management system helping you track expenses, create budgets, manage investments, and achieve your financial goals with smart tools and insights.',
      icon: '💰',
      benefits: [
        'Expense Tracking & Analytics',
        'Smart Budget Planning',
        'Investment Portfolio Management',
        'Bill Payment Reminders',
        'Financial Goal Setting'
      ],
      services: [
        'Personal Budgeting',
        'Investment Tracking',
        'Bill Management',
        'Savings Goals',
        'Financial Reports'
      ],
      pricing: 'Free basic plan, Premium: $9.99/month'
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
    },
    {
      id: 'doctor',
      title: 'Online Doctor Service',
      description: '24/7 virtual healthcare platform connecting patients with licensed medical professionals for convenient and accessible healthcare services.',
      icon: '👨‍⚕️',
      benefits: [
        '24/7 Medical Consultation',
        'Video & Audio Calls',
        'Digital Prescriptions',
        'Medical History Access',
        'Follow-up Care'
      ],
      services: [
        'General Consultation',
        'Specialist Referrals',
        'Prescription Renewals',
        'Health Monitoring',
        'Mental Health Support'
      ],
      pricing: 'Starting from $20 per consultation'
    },
    {
      id: 'food',
      title: 'Food Service',
      description: 'Premium food delivery and catering services offering a wide variety of cuisines, fresh ingredients, and professional catering for events.',
      icon: '🍽️',
      benefits: [
        'Fresh ingredients daily',
        'Custom menu planning',
        'Event catering',
        'Special dietary options',
        'Fast delivery service'
      ],
      services: [
        'Food delivery',
        'Event catering',
        'Corporate lunches',
        'Special occasions',
        'Custom menus'
      ],
      pricing: 'Starting from $15 per meal'
    },
    {
      id: 'care',
      title: 'Care Service',
      description: 'Professional care services providing support for elderly, children, and special needs individuals with trained and compassionate caregivers.',
      icon: '👥',
      benefits: [
        'Trained caregivers',
        '24/7 availability',
        'Personalized care plans',
        'Regular health monitoring',
        'Family updates'
      ],
      services: [
        'Elderly care',
        'Child care',
        'Special needs care',
        'Post-surgery care',
        'Respite care'
      ],
      pricing: 'Starting from $25/hour'
    },
    {
      id: 'restaurant',
      title: 'Restaurant Service',
      description: 'Fine dining and casual restaurant services with diverse cuisines, online reservations, and special event hosting capabilities.',
      icon: '🍴',
      benefits: [
        'Online reservations',
        'Private event hosting',
        'Takeout service',
        'Loyalty program',
        'Special menu events'
      ],
      services: [
        'Dine-in service',
        'Takeout & delivery',
        'Private events',
        'Catering',
        'Special menus'
      ],
      pricing: 'Average meal: $20-50'
    }
  ];

  const tourPoints: TourPoint[] = [
    {
      id: 'lalbagh',
      title: 'Lalbagh Fort',
      description: 'A magnificent 17th-century Mughal fort with beautiful gardens and stunning architecture.',
      icon: '🏰',
      location: 'Old Dhaka',
      rating: 4.8,
      entry: '$5',
      images: [
        'Fort Front View',
        'Garden Area',
        'Museum Section',
        'Water Features'
      ],
      facilities: [
        'Guided Tours',
        'Museum',
        'Prayer Room',
        'Rest Areas',
        'Souvenir Shop'
      ],
      bestTime: '9:00 AM - 11:00 AM',
      tips: [
        'Visit early morning to avoid crowds',
        'Bring a camera for amazing photos',
        'Wear comfortable walking shoes',
        'Plan at least 2-3 hours for visit',
        'Book a guide for historical insights'
      ]
    },
    {
      id: 'ahsan-manzil',
      title: 'Ahsan Manzil',
      description: 'The Pink Palace of Dhaka, a stunning historical mansion showcasing Bengali architecture and royal heritage.',
      icon: '🏛️',
      location: 'Old Dhaka',
      rating: 4.7,
      entry: '$4',
      images: [
        'Palace Front',
        'Dome View',
        'Royal Hall',
        'River View'
      ],
      facilities: [
        'Museum Tours',
        'Photo Gallery',
        'Historical Exhibits',
        'Rest Areas',
        'Gift Shop'
      ],
      bestTime: '10:00 AM - 2:00 PM',
      tips: [
        'Visit during weekdays',
        'Take guided historical tour',
        'Photography allowed',
        'Explore nearby markets',
        'Check special exhibitions'
      ]
    },
    {
      id: 'hatirjheel',
      title: 'Hatirjheel',
      description: 'Modern urban development featuring beautiful lakeside views, bridges, and recreational areas.',
      icon: '🌉',
      location: 'Dhaka City',
      rating: 4.6,
      entry: 'Free',
      images: [
        'Lake View',
        'Bridge Lights',
        'Walking Trails',
        'Night Scene'
      ],
      facilities: [
        'Walking Paths',
        'Viewing Decks',
        'Food Stalls',
        'Boat Rides',
        'Children\'s Area'
      ],
      bestTime: '5:00 PM - 9:00 PM',
      tips: [
        'Best views at sunset',
        'Try evening boat ride',
        'Visit illuminated bridges',
        'Enjoy street food',
        'Perfect for photography'
      ]
    },
    {
      id: 'botanical',
      title: 'National Botanical Garden',
      description: 'A vast botanical garden featuring diverse plant species and peaceful natural surroundings.',
      icon: '🌳',
      location: 'Mirpur',
      rating: 4.7,
      entry: '$2',
      images: [
        'Garden Overview',
        'Rare Plants Section',
        'Lake View',
        'Butterfly Garden'
      ],
      facilities: [
        'Walking Trails',
        'Rest Areas',
        'Plant Nursery',
        'Information Center',
        'Picnic Spots'
      ],
      bestTime: '3:00 PM - 5:00 PM',
      tips: [
        'Best visited during spring',
        'Bring water and snacks',
        'Join guided botanical tours',
        'Visit butterfly garden',
        'Check special exhibitions'
      ]
    },
    {
      id: 'national-parliament',
      title: 'National Parliament House',
      description: 'Iconic architectural masterpiece designed by Louis Kahn, symbolizing Bangladesh\'s democracy.',
      icon: '🏛️',
      location: 'Sher-e-Bangla Nagar',
      rating: 4.9,
      entry: '$6',
      images: [
        'Building Exterior',
        'Lake View',
        'Assembly Hall',
        'Gardens'
      ],
      facilities: [
        'Guided Tours',
        'Photo Points',
        'Information Center',
        'Security Check',
        'Gardens'
      ],
      bestTime: '9:00 AM - 1:00 PM',
      tips: [
        'Book tour in advance',
        'Bring ID for entry',
        'Photography restrictions apply',
        'Visit during session breaks',
        'Check weather forecast'
      ]
    },
    {
      id: 'dhanmondi',
      title: 'Dhanmondi Lake',
      description: 'A popular recreational area with a large lake and various entertainment facilities.',
      icon: '🌊',
      location: 'Dhanmondi',
      rating: 4.5,
      entry: 'Free',
      images: [
        'Lake View',
        'Walking Track',
        'Amphitheater',
        'Sunset Point'
      ],
      facilities: [
        'Walking Track',
        'Exercise Zone',
        'Food Court',
        'Boat Rides',
        'Amphitheater'
      ],
      bestTime: '4:00 PM - 6:00 PM',
      tips: [
        'Perfect for evening walks',
        'Great sunset viewing spot',
        'Visit food courts',
        'Try boat riding',
        'Attend cultural events'
      ]
    },
    {
      id: 'liberation-museum',
      title: 'Liberation War Museum',
      description: 'Museum dedicated to Bangladesh\'s struggle for independence, featuring historical artifacts and exhibits.',
      icon: '🏛️',
      location: 'Agargaon',
      rating: 4.8,
      entry: '$3',
      images: [
        'Museum Front',
        'War Exhibits',
        'Memorial Wall',
        'Document Gallery'
      ],
      facilities: [
        'Guided Tours',
        'Audio Guide',
        'Library',
        'Memorial Hall',
        'Documentary Theater'
      ],
      bestTime: '11:00 AM - 3:00 PM',
      tips: [
        'Allow 2-3 hours for visit',
        'Join guided tour',
        'Photography permitted',
        'Visit memorial wall',
        'Check special exhibitions'
      ]
    },
    {
      id: 'ramna-park',
      title: 'Ramna Park',
      description: 'Historic urban park with century-old trees, walking paths, and cultural significance.',
      icon: '🌿',
      location: 'Ramna',
      rating: 4.4,
      entry: 'Free',
      images: [
        'Park Overview',
        'Ancient Trees',
        'Walking Paths',
        'Cultural Events'
      ],
      facilities: [
        'Walking Trails',
        'Exercise Areas',
        'Rest Spots',
        'Event Space',
        'Garden Areas'
      ],
      bestTime: '7:00 AM - 9:00 AM',
      tips: [
        'Best for morning walks',
        'Visit during festivals',
        'Enjoy morning exercise',
        'Bird watching spot',
        'Cultural performances'
      ]
    },
    {
      id: 'star-mosque',
      title: 'Star Mosque',
      description: 'Beautiful mosque known for its stunning star-patterned architecture and intricate tile work.',
      icon: '🕌',
      location: 'Old Dhaka',
      rating: 4.7,
      entry: 'Free',
      images: [
        'Mosque Front',
        'Star Patterns',
        'Interior Design',
        'Prayer Hall'
      ],
      facilities: [
        'Prayer Areas',
        'Ablution Space',
        'Rest Areas',
        'Information Desk',
        'Guided Tours'
      ],
      bestTime: '8:00 AM - 12:00 PM',
      tips: [
        'Respect prayer times',
        'Dress modestly',
        'Remove shoes before entry',
        'Photography with permission',
        'Visit during off-peak hours'
      ]
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
            Do you need any kind of digital solution?
            Please contact us for any kind of digital solution.
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

      {/* Tour Points Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Popular Tour Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPoints.map((point) => (
              <div
                key={point.id}
                className="card group cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedTourPoint(point)}
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {point.description}
                </p>
                <div className="flex items-center justify-between text-sm mt-auto">
                  <span className="text-purple-400">{point.location}</span>
                  <span className="text-yellow-400">★ {point.rating}</span>
                </div>
                <div className="mt-4 text-sm text-gray-300 border-t border-purple-500/20 pt-4">
                  Entry: {point.entry}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/toure point" 
              className="button-primary inline-flex items-center"
            >
              View All Places
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Point Details Modal */}
      {selectedTourPoint && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-b from-purple-900/90 to-black/90 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-purple-500/20">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedTourPoint.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                    {selectedTourPoint.title}
                  </h2>
                  <div className="flex items-center mt-2">
                    <span className="text-purple-400 mr-4">{selectedTourPoint.location}</span>
                    <span className="text-yellow-400">★ {selectedTourPoint.rating}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedTourPoint(null)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {selectedTourPoint.description}
              </p>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Available Facilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedTourPoint.facilities.map((facility, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">✓</span>
                      {facility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  Visitor Tips
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {selectedTourPoint.tips.map((tip, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-purple-400 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-purple-400 block">Best Time to Visit</span>
                    <span className="text-gray-300">{selectedTourPoint.bestTime}</span>
                  </div>
                  <Link
                    href={`/toure point/${selectedTourPoint.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Book Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* Global Service Section */}
      <section className="section py-20">
        <div className="container">
          <div className="card group text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
              Our Global Services
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Experience our comprehensive range of services available worldwide. We bring quality and innovation to every corner of the globe.
            </p>
            <Link 
              href="/global-service" 
              className="button-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Explore Global Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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