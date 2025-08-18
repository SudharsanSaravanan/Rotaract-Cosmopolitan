import React from 'react';

const RecentEvents = () => {
  const events = [
    {
      id: 1,
      title: "TTNS ANNUAL FUNCTION",
      description: "An annual gathering by the Rotaract Club of Coimbatore Cosmopolitan and the family of Rotary Club of Coimbatore Cosmopolitan. A celebration of unity, service, and shared achievements — truly an event to remember.",
      image: "/events/ttns.jpg",
      date: "27/07/2025",
      venue: "BMN Subramaniyam Vignesh Mahal"
    },
    {
      id: 2,
      title: "CHIT CHAAT",
      description: "A mindful munch experience where good food meets great conversations. Members gathered over tasty bites, savoring the moment while sharing stories, laughter, and lighthearted reflections. More than just snacks — it was about slowing down, connecting, and enjoying the present.",
      image: "/events/chitchat.jpg",
      date: "19/07/2025",
      venue: "ANANDHAAS"
    },
    {
      id: 3,
      title: "LINKEDIN 101",
      description: "On 10th July 2025, the Rotaract Club of Coimbatore Cosmopolitan, in collaboration with the Rotaract Club of Karpagam Academy of Higher Education (KAHE), conducted an insightful professional development session titled “LinkedIn 101” at the KAHE campus. The session was led by Rtr. PP. Srinath, a Certified District Trainer, and aimed at empowering students with the knowledge and tools to build a strong and purposeful LinkedIn presence.",
      image: "/events/linkedin101.jpg",
      date: "10/07/2025",
      venue: "Karpagam Academy of Higher Education"
    },
  ];

  const handleViewAllEvents = () => {
    window.location.href = '/events';
  };

  return (
    <div className="py-12 md:py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p 
            className="text-sm md:text-md font-light tracking-[0.3em] uppercase mb-6"
            style={{ 
              fontFamily: "var(--font-cantata)",
              color: '#314B6E'
            }}
          >
            What's Happening
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide"
            style={{ 
              fontFamily: "var(--font-aldrich)",
              color: '#0E141C'
            }}
          >
            RECENT EVENTS
          </h2>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 justify-items-center">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-out w-full max-w-sm"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Event Content */}
              <div className="p-3 md:p-4 lg:p-6">
                <h3 
                  className="text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-3 tracking-wide leading-tight"
                  style={{ 
                    fontFamily: "var(--font-aldrich)",
                    color: '#0E141C'
                  }}
                >
                  {event.title}
                </h3>

                <p 
                  className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3"
                  style={{ 
                    fontFamily: "var(--font-cantata)",
                    color: '#607EA2'
                  }}
                >
                  {event.description}
                </p>

                <div className="mb-3 md:mb-4 space-y-1">
                  <p 
                    className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.1em]"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    <span className="font-medium">Date:</span> {event.date}
                  </p>
                  <p 
                    className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.1em]"
                    style={{ 
                      fontFamily: "var(--font-cantata)",
                      color: '#314B6E'
                    }}
                  >
                    <span className="font-medium">Venue:</span> {event.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center">
          <button 
            onClick={handleViewAllEvents}
            className="px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 text-white font-light tracking-[0.1em] md:tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 rounded text-sm md:text-base"
            style={{ 
              fontFamily: "var(--font-cantata)",
              backgroundColor: '#0E141C'
            }}
          >
            VIEW ALL ACTIVITIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
