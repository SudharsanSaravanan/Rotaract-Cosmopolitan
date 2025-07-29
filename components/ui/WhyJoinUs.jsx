import React from 'react';

const WhyJoinUs = () => {
  const handleJoinUs = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="py-8 md:py-12 px-4" style={{ backgroundColor: '#314B6E' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Content with Flex Layout */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Why Join Us - Left Side */}
          <div className="text-center md:text-left w-full md:w-1/2 mb-6 md:mb-0">
            <p 
              className="text-white/70 text-sm md:text-md font-light tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
              Be Part of Something Greater
            </p>
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide"
              style={{ fontFamily: "var(--font-aldrich)" }}
            >
              WHY JOIN US?
            </h2>
            <p 
              className="text-white/80 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed"
              style={{ fontFamily: "var(--font-cantata)" }}
            >
                Join Rotaract Club of Coimbatore Cosmopolitan and become part of a dynamic community
                dedicated to service, leadership, and positive change.
                Engage in impactful projects, develop lifelong friendships,
                and grow as a leader while making a difference in society.
                Together, let's inspire action and create a better tomorrow.
            </p>
          </div>

          {/* Call to Action - Right Side */}
          <div className="text-center w-full md:w-1/2">
            <div className="bg-white/5 border border-white/20 rounded-lg p-4 md:p-6 max-w-md mx-auto">
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide"
                style={{ fontFamily: "var(--font-aldrich)" }}
              >
                Ready to Make a Difference?
              </h3>
              <p 
                className="text-white/80 text-base md:text-lg mb-4 max-w-xs mx-auto leading-relaxed"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                Take the first step towards personal growth, community service, and lifelong connections.
              </p>
              <a 
                href="/contact"
                className="inline-block px-4 md:px-6 py-1 md:py-2 text-base md:text-lg font-light tracking-[0.2em] uppercase text-white border border-white/30 hover:bg-white/10 transition-colors duration-300 rounded"
                style={{ fontFamily: "var(--font-cantata)" }}
                onClick={(e) => { e.preventDefault(); handleJoinUs(); }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-8 md:mt-12 w-full">
          <blockquote 
            className="text-white/70 text-lg md:text-xl italic max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            "Service to others is the rent you pay for your room here on earth."
            <footer className="text-white/50 text-sm md:text-base mt-1 not-italic">
              — Muhammad Ali
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;