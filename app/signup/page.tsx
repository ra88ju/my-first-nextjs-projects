'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="animate-fade-in min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card group max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-center text-gray-300">
            Join us and start exploring amazing tech deals
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-center">
              <input
                id="accept-terms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 rounded border-[#ff0080]/20 bg-black/50 focus:ring-[#ff0080]"
              />
              <label htmlFor="accept-terms" className="ml-2 block text-sm text-gray-300">
                I agree to the{' '}
                <Link href="/terms" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full button-primary"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 