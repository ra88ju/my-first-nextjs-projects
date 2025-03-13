'use client';

import { useState } from 'react';

export default function About() {
  const [showTeam, setShowTeam] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'MD. ROBIN KAKA',
      role: 'CEO & Founder',
      specialty: 'Backend Developer',
      image: '/team/robin.jpg',
      social: {
        facebook: 'https://facebook.com/robinkaka',
        linkedin: 'https://linkedin.com/in/robinkaka'
      }
    },
    {
      id: 2,
      name: 'MD. SHAJIB ISLAM',
      role: 'software developer',
      specialty: 'Full Stack Developer',
      image: '/team/shajib.jpg',
      social: {
        facebook: 'https://facebook.com/shajibislam',
        linkedin: 'https://linkedin.com/in/shajibislam'
      }
    },
    {
      id: 3,
      name: 'MD. SHAKIL ISLAM',
      role: 'Tech Lead',
      specialty: 'Software Engineer',
      image: '/team/shakil.jpg',
      social: {
        facebook: 'https://facebook.com/shakilislam',
        linkedin: 'https://linkedin.com/in/shakilislam'
      }
    },
    {
      id: 4,
      name: 'MD. SHAJOR  ISLAM',
      role: 'Marketing Officer ',
      specialty: 'Marketing',
      image: '/team/shajor.jpg',
      social: {
        facebook: 'https://facebook.com/shajorislam',
        linkedin: 'https://linkedin.com/in/shajorislam'
      }
    },
    {
      id: 5,
      name: 'MD. Mahabubur Rahman',
      role: 'Software Developer',
      specialty: 'Software Developer',
      image: '/team/mahabubur.jpg',
      social: {
        facebook: 'https://facebook.com/mahabuburrahman',
        linkedin: 'https://linkedin.com/in/mahabuburrahman'
      }
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent animate-gradient text-center">
            About SolutionBD
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              We are a team of passionate developers and designers dedicated to creating innovative digital solutions. Our mission is to help businesses transform their ideas into reality through cutting-edge technology and exceptional design.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card group">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                  Sell Your Idea
                </h3>
                <p className="text-gray-300">
                  To be the leading force in digital innovation, setting new standards in web development and design.
                </p>
              </div>
              
              <div className="card group">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#7928ca] to-[#0061ff] bg-clip-text text-transparent mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300">
                  To empower businesses with cutting-edge digital solutions that drive growth and success.
                </p>
              </div>
            </div>

            <div className="card group">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent mb-6 text-center">
                Our Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">Web Development</h4>
                  <p className="text-gray-300">Modern, responsive websites built with the latest technologies.</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">UI/UX Design</h4>
                  <p className="text-gray-300">Beautiful, intuitive interfaces that enhance user experience.</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-2">Digital Solutions</h4>
                  <p className="text-gray-300">Custom software solutions tailored to your business needs.</p>
                </div>
                
              </div>
            </div>

            {/* Meet Our Team Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => setShowTeam(!showTeam)}
                className="button-primary inline-flex items-center gap-2"
              >
                <span>{showTeam ? 'Hide Team' : 'Meet Our Team'}</span>
                <span className={`transform transition-transform duration-300 ${showTeam ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
            </div>

            {/* Team Section */}
            {showTeam && (
              <div className="mt-12 animate-fade-in">
                <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
                  Meet Our Amazing Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="card group text-center transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      <p className="text-white mb-1">{member.role}</p>
                      <p className="text-gray-300 text-sm mb-4">{member.specialty}</p>
                      <div className="flex justify-center space-x-4">
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="section mt-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Popular Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cox\'s Bazar',
                location: 'Bangladesh',
                price: '$299',
                image: '/tours/coxs-bazar.jpg',
                duration: '3 Days'
              },
              {
                name: 'Sundarbans',
                location: 'Bangladesh',
                price: '$399',
                image: '/tours/sundarbans.jpg',
                duration: '4 Days'
              },
              {
                name: 'Sajek Valley',
                location: 'Bangladesh',
                price: '$249',
                image: '/tours/sajek.jpg',
                duration: '2 Days'
              }
            ].map((tour, index) => (
              <div key={index} className="card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">
                    {tour.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{tour.location}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#ff0080] font-bold">{tour.price}</span>
                    <button className="button-primary px-4 py-2 text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 