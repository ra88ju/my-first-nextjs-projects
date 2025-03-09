'use client';

import Link from 'next/link';
export default function Home() {
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
            {/* Feature 1 */}
            <div className="card group">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent mb-4">
                Digital Market 
              </h3>
              <p className="text-gray-300">
                We are a digital market place that allows you to buy and sell products online.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#7928ca] to-[#0061ff] bg-clip-text text-transparent mb-4">
                Medical Store
              </h3>
              <p className="text-gray-300">
                We are a medical store that allows you to buy and sell products online. We get all product styles and brands.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-[#0061ff] to-[#ff0080] bg-clip-text text-transparent mb-4">
                Mobile Repair
              </h3>
              <p className="text-gray-300">
                We are a mobile repair store that allows you to buy and sell products online. We get all product styles and brands.
              </p>
            </div>
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