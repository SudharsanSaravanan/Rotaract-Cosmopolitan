import React from 'react';

const TeamMembers = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rtr. Akhil S",
      position: "President",
      image: "/team/akhil.png"
    },
    {
      id: 2,
      name: "Rtr. Amitesh A",
      position: "Secretary - Administration",
      image: "/team/amitesh.png"
    },
    {
      id: 3,
      name: "Rtr. Ajay B S",
      position: "Secretary - Communication",
      image: "/team/ajay.png"
    },
    {
      id: 4,
      name: "Rtr. Shivali G B",
      position: "Vice President",
      image: "/team/shivali.png"
    },
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

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
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

        {/* View More Button */}
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
