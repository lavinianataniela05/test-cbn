'use client';

import { useState } from 'react';

export default function AboutSection() {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 opacity-15">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="url(#aboutWaveGradient)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <defs>
            <linearGradient id="aboutWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-60 h-60 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="animate-fadeIn">
            <div className="mb-8">
              <span className="text-cyan-600 font-semibold text-lg tracking-wide bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ABOUT CBN
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-900">
                Leading <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">Digital Infrastructure</span> Provider in Indonesia
              </h2>
              
              <div className="flex items-center justify-start gap-2 py-4">
                <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                <div className="h-px w-8 bg-gradient-to-l from-cyan-500 to-transparent"></div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                PT Cyberindo Aditama (CBN) is one of Indonesia's leading telecommunication and internet service providers. 
                Since 1996, we have been committed to delivering reliable and innovative digital solutions for businesses across various industries.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Trusted Partner",
                  description: "Trusted by thousands of businesses for reliable connectivity and digital solutions.",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "High Performance",
                  description: "State-of-the-art infrastructure ensuring maximum uptime and performance.",
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: "Expert Team",
                  description: "Dedicated professionals with extensive experience in telecommunications and IT.",
                  gradient: "from-cyan-500 to-blue-500"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group hover:scale-105 transition-all duration-300 relative bg-white/50 rounded-xl p-4 border border-gray-200/50 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className={`relative bg-gradient-to-r ${feature.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 z-10 shadow-md`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Explore Our Services</span>
              </button>
              <button className="group relative overflow-hidden border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Download Company Profile</span>
              </button>
            </div>
          </div>

          <div className="animate-fadeIn animation-delay-400">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 sm:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                  Our <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">Achievements</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                  {[
                    { value: "25+", label: "Years Experience", gradient: "from-cyan-500 to-blue-600" },
                    { value: "5000+", label: "Business Clients", gradient: "from-blue-500 to-cyan-600" },
                    { value: "99.9%", label: "Service Uptime", gradient: "from-cyan-500 to-blue-500" },
                    { value: "24/7", label: "Customer Support", gradient: "from-blue-600 to-cyan-500" }
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className="group text-center p-4 sm:p-6 bg-white rounded-xl border border-gray-200/60 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                      onMouseEnter={() => setHoveredAchievement(index)}
                      onMouseLeave={() => setHoveredAchievement(null)}
                    >
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className={`relative text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {achievement.value}
                      </div>
                      <div className="relative text-gray-600 font-semibold text-sm sm:text-base">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="group relative overflow-hidden bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/40 rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Transform Your Business?</h4>
                    <p className="text-cyan-700 mb-4 text-sm sm:text-base">Contact us for a free consultation</p>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">Get Free Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
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
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}