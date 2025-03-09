'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="animate-fade-in">
      <section className="section">
        <div className="container">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent animate-gradient text-center">
            Contact Us
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-12 text-center">
              Have a question or want to work together? We'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="card group">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                  Your Address
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    <span className="font-semibold">Email:</span> contact@solutionbd.com
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Phone:</span> +88 (01)6012-03600
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold">Address:</span> Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="card group">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-[#7928ca] to-[#0061ff] bg-clip-text text-transparent mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card group">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full button-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}