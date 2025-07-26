'use client';
import React from 'react';

const SponsorCarousel = () => {
  const sponsors = [
    { id: 1, name: 'Alternative Training', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 2, name: 'GNUC', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 3, name: 'SVW', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 4, name: 'ROOPAC', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 5, name: 'Sri Sakthi', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 6, name: 'TexCity', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 7, name: 'Alternative Training', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 8, name: 'GNUC', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 9, name: 'SVW', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 10, name: 'ROOPAC', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 11, name: 'Sri Sakthi', logo: '/logo/gold-rot-logo.png', url: '#' },
    { id: 12, name: 'TexCity', logo: '/logo/gold-rot-logo.png', url: '#' },
  ];

  return (
    <div className="w-full py-6 md:py-10 bg-white overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h2
          className="text-xl md:text-5xl font-bold text-gray-800"
          style={{
            fontFamily: 'Arial, sans-serif',
            letterSpacing: '1px',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          }}
        >
          OUR SPONSORS
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex items-center animate-scroll hover:pause-animation"
          style={{
            width: 'calc(200%)',
          }}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center min-w-[150px] md:min-w-[200px] h-[80px] md:h-[100px]"
            >
              <a href={sponsor.url} className="block">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-[60px] md:max-h-[80px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150x60/4B5563/FFFFFF?text=${encodeURIComponent(sponsor.name)}`;
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default SponsorCarousel;