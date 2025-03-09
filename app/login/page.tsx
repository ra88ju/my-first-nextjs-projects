'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
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
      <div className="card group max-w-md w-full space-y-8 rounded-2xl">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-center text-gray-300">
            Sign in to your account to continue
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-xl focus:outline-none focus:border-[#ff0080] text-white"
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
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-xl focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 rounded-lg border-[#ff0080]/20 bg-black/50 focus:ring-[#ff0080]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
                  Forgot your password?
                </Link>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full button-primary rounded-xl"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <Link href="/signup" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 