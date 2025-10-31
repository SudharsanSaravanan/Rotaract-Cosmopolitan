'use client';
import Layout from '@/components/ui/Layout';
import React from 'react';

const AboutPage = () => {
  return (
    <Layout>
      <div 
        className="min-h-screen" 
        style={{ 
          background: 'linear-gradient(135deg, #a4b5c4 0%, #a4b5c4 50%, #a4b5c4 100%)', 
          paddingTop: '20px' 
        }}
      >
        <div className="relative z-10 container mx-auto px-6 py-20">
          
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p 
              className="text-sm tracking-widest uppercase mb-6 opacity-80"
              style={{ 
                fontFamily: 'var(--font-cantata)',
                color: '#314B6E'
              }}
            >
              About Us
            </p>
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ 
                fontFamily: 'var(--font-aldrich)',
                color: '#0E141C'
              }}
            >
              ROTARACT CLUB OF
              <span className="text-[#0E141C]"> COIMBATORE</span><br />
              COSMOPOLITAN
            </h1>

            <div 
              className="w-44 h-1 mx-auto mb-14"
              style={{ backgroundColor: '#7A6F5E' }}
            ></div>
          </div>

          {/* Image Frame Top */}
          <div className="max-w-4xl mx-auto mb-16">
            <div 
              className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border"
              style={{
                backgroundColor: 'rgba(122, 111, 94, 0.1)',
                borderColor: '#7A6F5E'
              }}
            >
              <img 
                src="/about/boomrang1.jpg"
                alt="Rotaract Club Community Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Mission */}
            <div className="space-y-4">
              <h2 
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
              >
                OUR MISSION
              </h2>
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C', opacity: 0.9 }}
              >
                Rotaract Club is a vibrant community of passionate young individuals dedicated to service, leadership, and finding purposeful change. Joining hands with Rotary's global vision, we empower students and young professionals to become a force for good in society through service, collaboration, and innovation.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h2 
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
              >
                OUR VISION
              </h2>
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C', opacity: 0.9 }}
              >
                We are proud members of the Cosmopolitan family, a diverse and energetic collection of individuals renowned for its history of powerful service and visionary leadership. This year, with the energizing theme Revival, we strive to breathe new life into our values, projects, and communities.
              </p>
            </div>

            {/* Impact */}
            <div className="space-y-4">
              <h2 
                className="text-2xl font-bold"
                style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
              >
                OUR IMPACT
              </h2>
              <p 
                className="text-lg leading-relaxed text-justify"
                style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C', opacity: 0.9 }}
              >
                We believe in creating strong personal growth and social impact. Our projects span across environmental awareness, education, inclusivity, and health. Every event is designed to inspire leadership, resilience, and collaboration.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 
                className="text-lg font-bold"
                style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
              >
                CORE VALUES
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Service','Leadership','Collaboration','Innovation','Inclusivity','Revival']
                  .map((value, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#7A6F5E' }}
                      ></div>
                      <span 
                        className="text-[15px] font-medium"
                        style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C' }}
                      >
                        {value}
                      </span>
                    </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a href="/contact">
                <button 
                  className="px-8 py-4 rounded-lg border-2 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'transparent', borderColor: '#7A6F5E', color: '#0E141C' }}
                >
                  <span 
                    className="font-semibold text-sm tracking-widest"
                    style={{ fontFamily: 'var(--font-aldrich)' }}
                  >
                    JOIN US
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-5xl mx-auto mt-20 pt-12 border-t" style={{ borderColor: '#7A6F5E' }}>
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <h4 
                  className="text-sm font-bold mb-2 tracking-widest"
                  style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
                >
                  LOCATION
                </h4>
                <p 
                  className="text-sm opacity-80"
                  style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C' }}
                >
                  Coimbatore, Tamil Nadu
                </p>
              </div>
              <div>
                <h4 
                  className="text-sm font-bold mb-2 tracking-widest"
                  style={{ fontFamily: 'var(--font-aldrich)', color: '#0E141C' }}
                >
                  MOTTO
                </h4>
                <p 
                  className="text-sm opacity-80"
                  style={{ fontFamily: 'var(--font-cantata)', color: '#0E141C' }}
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
