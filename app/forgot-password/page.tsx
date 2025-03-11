'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Handle email verification
      setStep(2);
    } else if (step === 2) {
      // Handle phone verification
      setStep(3);
    } else if (step === 3) {
      // Handle password reset
      console.log('Password reset:', formData);
      // Add your password reset logic here
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendVerificationCode = () => {
    // Add your verification code sending logic here
    console.log('Sending verification code to:', formData.phone);
  };

  return (
    <div className="animate-fade-in min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card group max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff0080] via-[#7928ca] to-[#0061ff] bg-clip-text text-transparent">
            Reset Password
          </h2>
          <p className="text-center text-gray-300">
            {step === 1 && 'Enter your email to start the password reset process'}
            {step === 2 && 'Enter your phone number for verification'}
            {step === 3 && 'Create your new password'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                placeholder="Enter your email"
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-300 mb-2">
                  Verification Code
                </label>
                <div className="flex gap-2">
                  <input
                    id="verificationCode"
                    name="verificationCode"
                    type="text"
                    required
                    value={formData.verificationCode}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                    placeholder="Enter verification code"
                  />
                  <button
                    type="button"
                    onClick={sendVerificationCode}
                    className="px-4 py-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Send Code
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm New Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-[#ff0080]/20 rounded-lg focus:outline-none focus:border-[#ff0080] text-white"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="text-[#ff0080] hover:text-[#7928ca] transition-colors"
              >
                ← Back
              </button>
            )}
            <button
              type="submit"
              className="w-full button-primary"
            >
              {step === 1 ? 'Continue' : step === 2 ? 'Verify' : 'Reset Password'}
            </button>
          </div>

          <div className="text-center text-sm text-gray-300">
            Remember your password?{' '}
            <Link href="/login" className="text-[#ff0080] hover:text-[#7928ca] transition-colors">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
} 