import { Service } from '@/types';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

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
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive telecommunications and IT solutions to drive your business forward in the digital era
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="text-4xl font-bold text-gray-200 opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, featureIndex: Key | null | undefined) => (
                  <div key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn">
                <span>Learn More</span>
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}