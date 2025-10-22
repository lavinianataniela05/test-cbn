'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a1a3e] text-white min-h-screen flex items-center justify-center overflow-hidden">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-md group-hover:blur-lg transition-all duration-300 opacity-20 group-hover:opacity-30"></div>
                <img 
                  src="/assets/logocbn.png"
                  alt="CBN Logo" 
                  className="h-8 w-auto sm:h-10 relative opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                  width={32}
                  height={32}
                />
              </div>
              <span className="text-white font-semibold text-lg sm:text-xl tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
                CBN
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['about', 'services'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 capitalize"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-2xl sm:blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl sm:blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 mt-16">
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6 animate-fadeIn animation-delay-200">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-tight">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Digital Transformation
            </span>
            <br />
            <span className="inline-block text-gray-100 mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              for Your Business
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 py-3 sm:py-4">
            <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
            <div className="h-px w-6 sm:w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-2">
            Leading Provider of{' '}
            <span className="text-yellow-400 font-semibold">Internet</span>,{' '}
            <span className="text-yellow-400 font-semibold">Data Center</span> &{' '}
            <span className="text-yellow-400 font-semibold">Cloud</span> Services
          </p>
          
          <p className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-gray-400 leading-relaxed pt-1 sm:pt-2 px-2 sm:px-0">
            CBN is one of Indonesia's leading telecommunication and internet service providers, 
            delivering cutting-edge solutions for businesses and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto animate-fadeIn animation-delay-600 px-2 sm:px-0">
          {[
            { value: '20+', label: 'Years Experience', color: 'from-cyan-400 to-blue-500' },
            { value: '5000+', label: 'Business Clients', color: 'from-blue-400 to-purple-500' },
            { value: '99.9%', label: 'Network Uptime', color: 'from-purple-400 to-pink-500' },
            { value: '24/7', label: 'Support', color: 'from-pink-400 to-cyan-500' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-lg sm:rounded-xl transition-all duration-300"></div>
              <div className="relative space-y-1 sm:space-y-2">
                <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-xs sm:text-sm font-medium leading-tight sm:leading-normal">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-8 sm:mt-12 animate-fadeIn animation-delay-800 px-2 sm:px-0">
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 text-sm sm:text-base"
          >
            Get Started
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(10px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-10px, 10px) scale(0.9);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Extra small devices */
        @media (max-width: 475px) {
          .xs\\:text-3xl {
            font-size: 1.875rem;
            line-height: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
}