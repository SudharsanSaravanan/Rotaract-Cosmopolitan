import React from 'react';

const AboutSection = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#8197AC' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px, 150px 150px, 120px 120px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">


        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="space-y-8">
            {/* Header */}
            <div className="mb-8">
              <p 
                className="text-lg text-white/80 tracking-widest uppercase mb-4 ml-0.5"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                About Us
              </p>
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                ROTARACT CLUB OF<br />
                <span style={{ color: '#BDB3A3' }}>COIMBATORE</span><br />
                COSMOPOLITAN
              </h1>
            </div>

            <div className="space-y-6">
              <p 
                className="text-xl leading-relaxed text-white/95"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Our club stands as a beacon of service and fellowship, embodying the spirit of 
                <span className="font-semibold" style={{ color: '#BDB3A3' }}> "Service Above Self"</span> 
                that defines the Rotaract movement worldwide.
              </p>
              
              <p 
                className="text-xl leading-relaxed text-white/90"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Founded with the vision of creating meaningful change through collaborative action, 
                our club brings together diverse talents and perspectives. We focus on community service, 
                professional development, and international understanding while fostering lifelong friendships 
                and leadership skills.
              </p>

              <p 
                className="text-xl leading-relaxed text-white/90"
                style={{ fontFamily: 'var(--font-cantata)' }}
              >
                Through innovative projects and community initiatives, we strive to create lasting impact 
                while developing the next generation of leaders. Our commitment to excellence drives us 
                to continuously seek new ways to serve our community and make a difference in the world.
              </p>
            </div>

            {/* Read More Button */}
            <div className="pt-0">
              <a 
                href="/about"
                className="inline-flex items-center bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm px-8 py-4 rounded-lg border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <span 
                  className="font-semibold mr-3 text-xs md:text-sm"
                  style={{ 
                    fontFamily: 'var(--font-aldrich)',
                    color: '#0E141C'
                  }}
                >
                  READ MORE
                </span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="#0E141C" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="relative">
            {/* Main animated container */}
            <div className="relative animate-float">
              {/* Primary image container */}
              <div 
                className="aspect-[4/3] rounded-2xl border-2 border-white/30 overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <img 
                  src="/about-us/greedam_cosmo1.jpg"
                  alt="Rotaract Club Logo"
                  className="w-full h-full object-cover filter brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </div>
              
              {/* Decorative floating elements */}
              <div 
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full animate-bounce"
                style={{ 
                  backgroundColor: '#BDB3A3',
                  animationDelay: '0.5s',
                  animationDuration: '3s'
                }}
              ></div>
              
              <div 
                className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full animate-bounce"
                style={{ 
                  backgroundColor: '#0E141C',
                  animationDelay: '1s',
                  animationDuration: '2.5s'
                }}
              ></div>
              
              <div 
                className="absolute top-1/2 -left-8 w-6 h-6 rounded-full animate-ping"
                style={{ 
                  backgroundColor: '#BDB3A3',
                  animationDelay: '1.5s'
                }}
              ></div>
            </div>

            {/* Secondary floating card */}
            <div 
              className="absolute -bottom-8 -right-3 md:-bottom-8 md:-right-8 bg-white/20 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float-delayed border border-white/30"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 md:w-3 md:h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: '#BDB3A3' }}
                ></div>
                <p 
                  className="text-white/90 text-sm font-medium"
                  style={{ fontFamily: 'var(--font-cantata)' }}
                >
                  Service Above Self
                </p>
              </div>
            </div>

            {/* Animated background circles */}
            <div className="absolute inset-0 -z-10">
              <div 
                className="absolute top-10 right-10 w-20 h-20 rounded-full opacity-20 animate-spin-slow"
                style={{ backgroundColor: '#BDB3A3' }}
              ></div>
              <div 
                className="absolute bottom-20 left-5 w-16 h-16 rounded-full opacity-10 animate-spin-slow"
                style={{ 
                  backgroundColor: '#0E141C',
                  animationDirection: 'reverse',
                  animationDuration: '20s'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        @media (max-width: 1024px) {
          .animate-float,
          .animate-float-delayed {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutSection;