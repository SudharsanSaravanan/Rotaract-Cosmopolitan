'use client';
import Layout from '@/components/ui/Layout';
import React from 'react';

const TeamPage = () => {
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
    {
      id: 5,
      name: "Rtr. Balakirthikhasan R",
      position: "Immediate Past President",
      image: "/team/bala-k.png"
    },
    {
      id: 6,
      name: "Rtr. Soorya S",
      position: "Treasurer",
      image: "/team/soorya.png"
    },
    {
      id: 7,
      name: "Rtr. PP Farhan",
      position: "Mentor",
      image: "/team/farhan.png"
    },
    {
      id: 8,
      name: "Rtr. Faiz Ishak Jamal",
      position: "International Service",
      image: "/team/faiz.png"
    },
    {
      id: 9,
      name: "Rtr. Manjari M V",
      position: "Professional Service Director",
      image: "/team/manjari.png"
    },
    {
      id: 10,
      name: "Rtr. Sudharsana Saravanan S",
      position: "Tech Lead",
      image: "/team/sudharsan.png"
    },
    {
      id: 11,
      name: "Rtr. Keerthana R",
      position: "Public Image Chair",
      image: "/team/keerthana.png"
    },
    {
      id: 12,
      name: "Rtr. Akshaya B",
      position: "DPP Chair",
      image: "/team/akshaya-b.png"
    },
    {
      id: 13,
      name: "Rtr. Ajaykumar J",
      position: "Young Leaders Contact",
      image: "/team/ajaykumar.png"
    },
    {
      id: 14,
      name: "Rtr. Harine Priyaa",
      position: "Club Foundation Chair",
      image: "/team/harine.png"
    },
    {
      id: 15,
      name: "Rtr. Anush Adithyaa S",
      position: "Blood Donor Cell",
      image: "/team/anush.png"
    },
    {
      id: 16,
      name: "Rtr. Akelesh K B",
      position: "Club Membership Chair",
      image: "/team/akelesh.png"
    },
    {
      id: 17,
      name: "Rtr. Narmadha M",
      position: "Rotaract Learning Facilitator",
      image: "/team/narmadha.png"
    },
    {
      id: 18,
      name: "Rtr. Anushka R A",
      position: "Community Service Director",
      image: "/team/anushka.png"
    },
    {
      id: 19,
      name: "Rtr. Arjun Krishna R",
      position: "Sergeant at Arms & Chief Editor",
      image: "/team/arjun.png"
    },
    {
      id: 20,
      name: "Rtr. Bala Abinav S K",
      position: "All Avenue Chair",
      image: "/team/bala-abinav.png"
    },
    {
      id: 21,
      name: "Rtr. Aravind H",
      position: "Club Service Director",
      image: "/team/aravind.png"
    },
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