'use client';
import Layout from '@/components/ui/Layout';
import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rtr. Akhil",
      position: "President",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 2,
      name: "Rtr. Amitesh",
      position: "Secretary - Administration",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 3,
      name: "Rtr. Aravind",
      position: "Secretary",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 4,
      name: "Rtr. Bala Kirthikhasan",
      position: "Immediate Past President",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 5,
      name: "Rtr. Chandru",
      position: "Treasurer",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 6,
      name: "Rtr. Deepika",
      position: "Event Coordinator",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 7,
      name: "Rtr. Eshwar",
      position: "Public Relations",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    },
    {
      id: 8,
      name: "Rtr. Fathima",
      position: "Community Service Lead",
      image: "https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg"
    }
  ];

  return (
    <Layout>
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0E141C 0%, #314B6E 50%, #607EA2 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 py-26">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            OUR TEAM
          </h1>
          <p 
            className="text-base md:text-lg max-w-3xl mx-auto text-white/70 leading-relaxed"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            Meet the dedicated members of the Rotaract Club of Coimbatore Cosmopolitan who drive our mission of service and leadership.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Image with 4:5 Aspect Ratio */}
              <div className="w-full aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="p-3 text-center flex-grow" style={{ backgroundColor: 'rgba(0, 0, 50, 0.7)' }}>
                <h3 
                  className="text-sm md:text-lg lg:text-xl font-bold text-white mb-1 tracking-wide"
                  style={{ fontFamily: "var(--font-aldrich)" }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-white/70 text-[10px] md:text-sm lg:text-sm font-light tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-cantata)" }}
                >
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default TeamPage;