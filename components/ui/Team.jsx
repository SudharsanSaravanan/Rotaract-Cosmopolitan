import React from 'react';

const TeamMembers = () => {
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
      position: "Secretary",
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
    }
  ];

  const handleViewMore = () => {
    window.location.href = '/team';
  };

  return (
    <div className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #0E141C 0%, #314B6E 50%, #607EA2 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide"
            style={{ fontFamily: "var(--font-aldrich)" }}
          >
            TEAM MEMBERS
          </h1>
        </div>

        {/* Team Grid - 4 columns on desktop, 2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 rounded-lg"
            >
              {/* Image Container with maintained 2:3 ratio */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              {/* Member Info with reduced height */}
              <div className="p-2 text-center" style={{ backgroundColor: 'rgba(0, 0, 50, 0.7)' }}>
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

        {/* View More Button - Smaller size */}
        <div className="text-center">
          <button 
            onClick={handleViewMore}
            className="group relative px-4 md:px-6 lg:px-8 py-1 md:py-2 lg:py-3 bg-transparent border border-white/30 hover:border-white/60 text-white hover:bg-white/5 transition-all duration-300 tracking-[0.2em] uppercase rounded-lg"
            style={{ fontFamily: "var(--font-cantata)" }}
          >
            <span className="text-xs md:text-sm lg:text-base font-light">
              View More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;