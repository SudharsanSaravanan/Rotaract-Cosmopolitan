'use client';
import Layout from '@/components/ui/Layout';
import React from 'react';

const AboutPage = () => {
  return (
    <Layout>
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #607EA2 0%, #3B5A7E 50%, #2A4060 100%)', 
      paddingTop: '15px' 
    }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0E141C 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #BDB3A3 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 120px 120px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-22">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p 
            className="text-sm tracking-widest uppercase mb-6 opacity-80"
            style={{ 
              fontFamily: 'var(--font-cantata)',
              color: '#BDB3A3'
            }}
          >
            About Us
          </p>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 leading-tight"
            style={{ 
              fontFamily: 'var(--font-aldrich)',
              color: '#0E141C'
            }}
          >
            ROTARACT CLUB OF
            <span style={{ color: '#0E141C' }}> COIMBATORE</span><br />
            COSMOPOLITAN
          </h1>

          <div 
            className="w-44 h-1 mx-auto mb-22"
            style={{ backgroundColor: '#BDB3A3' }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Text Content - Left Side */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="space-y-6">
              <h2 
                className="text-2xl font-bold"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                OUR MISSION
              </h2>
              
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#0E141C',
                  opacity: 0.9
                }}
              >
                Our club stands as a beacon of service and fellowship, embodying the spirit of 
                <span className="font-semibold" style={{ color: '#BDB3A3' }}> "Service Above Self" </span> 
                that defines the Rotaract movement worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <h2 
                className="text-2xl font-bold"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                OUR VISION
              </h2>
              
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#0E141C',
                  opacity: 0.9
                }}
              >
                Founded with the vision of creating meaningful change through collaborative action, 
                our club brings together diverse talents and perspectives. We focus on community service, 
                professional development, and international understanding while fostering lifelong friendships 
                and leadership skills.
              </p>
            </div>

            {/* Impact */}
            <div className="space-y-6">
              <h2 
                className="text-2xl font-bold"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                OUR IMPACT
              </h2>
              
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#0E141C',
                  opacity: 0.9
                }}
              >
                Through innovative projects and community initiatives, we strive to create lasting impact 
                while developing the next generation of leaders. Our commitment to excellence drives us 
                to continuously seek new ways to serve our community and make a difference in the world.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 
                className="text-lg font-bold"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                CORE VALUES
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Service Above Self',
                  'Leadership Development',
                  'Community Impact',
                  'International Understanding',
                  'Professional Growth',
                  'Fellowship & Friendship'
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#BDB3A3' }}
                    ></div>
                    <span 
                      className="text-[15px] font-medium"
                      style={{ 
                        fontFamily: 'var(--font-cantata)',
                        color: '#0E141C'
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Us CTA */}
            <div className="pt-4 pb-10 md:pb-0">
              <button 
                className="px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#BDB3A3',
                  color: '#0E141C'
                }}
              >
                <span 
                  className="font-semibold text-sm tracking-widest"
                  style={{ fontFamily: 'var(--font-aldrich)' }}
                >
                  JOIN OUR MISSION
                </span>
              </button>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative">
              {/* Primary image container */}
              <div 
                className="aspect-[4/3] rounded-2xl border-2 overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(189, 179, 163, 0.1)',
                  borderColor: '#BDB3A3'
                }}
              >
                <img 
                  src="/about/boomrang1.jpg"
                  alt="Rotaract Club Community Service"
                  className="w-full h-full object-cover filter brightness-110 hover:brightness-125 transition-all duration-300"
                />
              </div>
              
              {/* Decorative floating elements */}
              <div 
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
                style={{ 
                  backgroundColor: '#BDB3A3',
                  opacity: 0.8
                }}
              ></div>
              
              <div 
                className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full"
                style={{ 
                  backgroundColor: '#0E141C',
                  opacity: 0.6
                }}
              ></div>
            </div>

            {/* Service Above Self floating card */}
            <div 
              className="absolute -bottom-9 -right-3 md:-bottom-8 md:-right-8 p-4 rounded-xl shadow-lg border"
              style={{
                backgroundColor: 'rgba(189, 179, 163, 0.9)',
                borderColor: '#0E141C'
              }}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#0E141C' }}
                ></div>
                <p 
                  className="text-sm font-medium"
                  style={{ 
                    fontFamily: 'var(--font-cantata)',
                    color: '#0E141C'
                  }}
                >
                  Service Above Self
                </p>
              </div>
            </div>

            {/* Quote card */}
            <div 
              className="absolute -top-8 -left-3 md:-top-8 md:-left-8 p-4 rounded-xl shadow-lg border max-w-48"
              style={{
                backgroundColor: 'rgba(14, 20, 28, 0.9)',
                borderColor: '#BDB3A3'
              }}
            >
              <p 
                className="text-xs italic text-center"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#BDB3A3'
                }}
              >
                "Building communities, inspiring change"
              </p>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div 
                className="absolute top-8 right-8 w-16 h-16 rounded-full opacity-10"
                style={{ backgroundColor: '#BDB3A3' }}
              ></div>
              <div 
                className="absolute bottom-12 left-4 w-12 h-12 rounded-full opacity-10"
                style={{ backgroundColor: '#0E141C' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Info */}
        <div className="max-w-6xl mx-auto mt-20 pt-12 border-t" style={{ borderColor: '#BDB3A3' }}>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <h4 
                className="text-sm font-bold mb-2 tracking-widest"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                LOCATION
              </h4>
              <p 
                className="text-sm opacity-80 text-center"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#0E141C'
                }}
              >
                Coimbatore, Tamil Nadu
              </p>
            </div>

            <div>
              <h4 
                className="text-sm font-bold mb-2 tracking-widest"
                style={{ 
                  fontFamily: 'var(--font-aldrich)',
                  color: '#0E141C'
                }}
              >
                MOTTO
              </h4>
              <p 
                className="text-sm opacity-80 text-center"
                style={{ 
                  fontFamily: 'var(--font-cantata)',
                  color: '#0E141C'
                }}
              >
                Service Above Self
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default AboutPage;