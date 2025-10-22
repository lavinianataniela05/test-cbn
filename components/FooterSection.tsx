import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Music2,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#0a3a52] via-[#083044] to-[#051923] text-white overflow-hidden">
      {/* Decorative Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-32 -mt-1 opacity-90">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.7" />
              <stop offset="20%" stopColor="#00ffff" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#0080ff" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#4169e1" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#ff6b9d" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffa500" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffa500" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00ffff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
          <path
            fill="url(#waveGradient2)"
            d="M0,40L48,45.3C96,51,192,61,288,56C384,51,480,29,576,24C672,19,768,29,864,34.7C960,40,1056,40,1152,34.7C1248,29,1344,19,1392,13.3L1440,8L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-36 pb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* CBN Fiber */}
          <div className="space-y-1">
            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
              CBN Fiber
            </h4>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Fiber Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Fiber Safe
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Fiber Pro
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* CBN Business */}
          <div className="space-y-1">
            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
              CBN Business
            </h4>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Digital Connectivity
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Digital Platform
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Digital Service
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* General */}
          <div className="space-y-1">
            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
              General
            </h4>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Support/FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  CBN Location
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  News
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Speed Test
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div className="space-y-1">
            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
              Others
            </h4>
            <ul className="space-y-2.5 text-gray-300">
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Partnership
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-1 lg:col-span-2">
            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide">
              Download diCBN App
            </h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#"
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black/80 backdrop-blur-sm px-4 py-2.5 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <h4 className="text-base font-bold mb-5 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent tracking-wide pt-2">
              Social Media
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/pt-cyberindo-aditama-cbn-internet-/?originalSubdomain=id"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-blue-500/30 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/di_cbn/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-400/30 hover:to-purple-500/30 border border-white/10 hover:border-pink-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
              <a
                href="https://www.facebook.com/di.CBN/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-400/30 hover:to-blue-600/30 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
              </a>
              <a
                href="https://www.youtube.com/c/diCBN"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 border border-white/10 hover:border-red-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@di_cbn"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-md p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-400/30 hover:to-pink-500/30 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
                  <Music2 className="w-5 h-5 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider with animated gradient */}
        <div className="mt-20 mb-10 relative h-px overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group">
              Legal Disclaimer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 relative group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <p className="text-center md:text-right text-gray-400">
            Copyright © {currentYear} Cyberindo Aditama. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </button>
      </div>
    </footer>
  );
}