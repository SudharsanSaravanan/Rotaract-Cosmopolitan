import React from 'react';

const RecentEvents = () => {
  const events = [
    {
      id: 1,
      title: "UDHAVAM - ORIENTATION",
      description: "We are happy to let everyone know that our Orientation \"உதயம்\" was successfully conducted with great enthusiasm and participation from all members.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "13th July, 2024",
      venue: "Texcity Hall"
    },
    {
      id: 2,
      title: "LUMOS - INSTALLATION CEREMONY",
      description: "Warm Texcity Greetings 💜 \"Every new beginning comes from some other beginning's end.\" We welcome you all to witness our installation ceremony.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "25th June, 2024",
      venue: "Grand Hall"
    },
    {
      id: 3,
      title: "TEX SEVAI!",
      description: "Warm Rotaract Greetings, \"Happiness doesn't result from what we get, but from what we give.\" Join us in our community service initiative.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      date: "19 May 2024",
      venue: "Rotary Texcity Hall"
    }
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

        {/* Events Grid - 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Event Image with 4:5 aspect ratio */}
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
                {/* Event Title */}
                <h3 
                  className="text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-3 tracking-wide leading-tight"
                  style={{ 
                    fontFamily: "var(--font-aldrich)",
                    color: '#0E141C'
                  }}
                >
                  {event.title}
                </h3>

                {/* Event Description */}
                <p 
                  className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3"
                  style={{ 
                    fontFamily: "var(--font-cantata)",
                    color: '#607EA2'
                  }}
                >
                  {event.description}
                </p>

                {/* Event Details */}
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