'use client';

import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Internet & Connectivity",
    description: "High-speed broadband internet solutions for businesses with guaranteed SLA and 24/7 support",
    icon: "🌐",
    features: ["Dedicated Internet Access", "Broadband Business", "Wireless Connectivity", "SD-WAN Solutions"]
  },
  {
    id: 2,
    title: "Data Center Services",
    description: "Tier 3+ data center facilities with maximum security, reliability, and scalability",
    icon: "🏢",
    features: ["Colocation Services", "Cloud Hosting", "Disaster Recovery", "Managed Services"]
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Comprehensive cloud services including IaaS, PaaS, and SaaS for digital transformation",
    icon: "☁️",
    features: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Cloud Migration"]
  },
  {
    id: 4,
    title: "Network Security",
    description: "Advanced cybersecurity solutions to protect your digital assets and business data",
    icon: "🛡️",
    features: ["Firewall Services", "DDoS Protection", "Security Monitoring", "Compliance"]
  },
  {
    id: 5,
    title: "Managed Services",
    description: "End-to-end IT management services to optimize your technology infrastructure",
    icon: "⚙️",
    features: ["IT Infrastructure", "Network Management", "Security Operations", "24/7 Support"]
  },
  {
    id: 6,
    title: "Digital Solutions",
    description: "Custom digital transformation solutions tailored to your business needs",
    icon: "🚀",
    features: ["Digital Platform", "IoT Solutions", "AI Integration", "Business Analytics"]
  }
];

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-20 bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-800 overflow-hidden">
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
            fill="url(#servicesWaveGradient)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
          <defs>
            <linearGradient id="servicesWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <span className="text-cyan-600 font-semibold text-lg tracking-wide bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Comprehensive <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">Digital Solutions</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 py-4">
            <div className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
            <div className="h-px w-8 bg-gradient-to-l from-cyan-500 to-transparent"></div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end telecommunications and IT solutions designed to accelerate your business growth in the digital era
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 hover:border-cyan-300 transition-all duration-500 p-6 sm:p-8 hover:scale-105 hover:shadow-xl overflow-hidden"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-500"></div>
              
              <div className="absolute top-6 right-6 text-2xl sm:text-3xl font-bold text-gray-300 group-hover:text-cyan-400/70 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-cyan-700 transition-colors duration-300 relative">
                {service.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base relative z-10">
                {service.description}
              </p>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-all duration-300 group/feature hover:translate-x-1"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-0 group-hover/feature:opacity-20 blur transition-opacity duration-300"></div>
                      <svg className="w-4 h-4 text-cyan-500 flex-shrink-0 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('contact')}
                className="group/btn relative w-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 border border-cyan-400/30 hover:border-cyan-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover/btn:from-cyan-500 group-hover/btn:to-blue-500 transition-all duration-300"></div>
                <span className="relative">Learn More</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 animate-fadeIn animation-delay-400">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 sm:p-8 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">Transform</span> Your Business?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                Let us help you choose the right solutions for your business needs. Our experts are ready to assist you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get Free Consultation</span>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group relative overflow-hidden border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Contact Sales</span>
                </button>
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