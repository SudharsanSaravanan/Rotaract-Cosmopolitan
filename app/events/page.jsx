'use client';
import Layout from '@/components/ui/Layout';
import React, { useState } from 'react';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "CONE-VERSATIONS",
      description: "CONE-VERSATIONS was an intelligently selected club service activity aimed at thawing the ice between new and old members at the beginning of the Rotaract year. Organized at Boomerang, VOC Park, the activity drew a casual, informal atmosphere for members to mingle, interact, and initiate quality conversations — all because of a love for fun, games, and most importantly, ice cream.",
      image: "/events/cone-versations.jpg",
      date: "05/07/2025",
      venue: 'BOOMERANG (VOC PARK)'
    },
    {
      id: 2,
      title: "LINKEDIN 101",
      description: "On 10th July 2025, the Rotaract Club of Coimbatore Cosmopolitan, in collaboration with the Rotaract Club of Karpagam Academy of Higher Education (KAHE), conducted an insightful professional development session titled “LinkedIn 101” at the KAHE campus. The session was led by Rtr. PP. Srinath, a Certified District Trainer, and aimed at empowering students with the knowledge and tools to build a strong and purposeful LinkedIn presence.",
      image: "/events/linkedin101.jpg",
      date: "10/07/2025",
      venue: "Karpagam Academy of Higher Education"
    },
    {
      id: 3,
      title: "BLOOD DONATION CAMP",
      description: "Warm Rotaract Greetings, \"Happiness doesn't result from what we get, but from what we give.\" Join us in our community service initiative.",
      image: "/events/blooddonationcamp.jpg",
      date: "01/07/2025",
      venue: "T21 GYM"
    },
    {
      id: 4,
      title: "CHIT CHAAT",
      description: "A mindful munch experience where good food meets great conversations. Members gathered over tasty bites, savoring the moment while sharing stories, laughter, and lighthearted reflections. More than just snacks — it was about slowing down, connecting, and enjoying the present.",
      image: "/events/chitchat.jpg",
      date: "19/07/2025",
      venue: "ANANDHAAS"
    },
    {
      id: 5,
      title: "LUMORA",
      description: "A collaborative event hosted by Rotaract Club of Coimbatore Cosmopolitan and Rotaract Club of Karpagam Academy of Higher Education. Designed as a space where light meets presence, the event emphasized alignment, teamwork, and meaningful connections among participants.",
      image: "/events/lumora.jpg",
      date: "10/07/2025",
      venue: "Bay Grill"
    },
    {
      id: 6,
      title: "TTNS ANNUAL FUNCTION",
      description: "An annual gathering by the Rotaract Club of Coimbatore Cosmopolitan and the family of Rotary Club of Coimbatore Cosmopolitan. A celebration of unity, service, and shared achievements — truly an event to remember.",
      image: "/events/ttns.jpg",
      date: "27/07/2025",
      venue: "BMN Subramaniyam Vignesh Mahal"
    }
  ];

  // ✅ Parse different date formats safely
  const parseDate = (dateStr) => {
    if (/\d{2}\/\d{2}\/\d{4}/.test(dateStr)) {
      const [day, month, year] = dateStr.split("/");
      return new Date(`${year}-${month}-${day}`);
    }
    return new Date(dateStr.replace(/(\d+)(st|nd|rd|th)/, "$1"));
  };

  // ✅ Sort events by latest date
  const sortedEvents = [...events].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  return (
    <Layout>
      <div className="py-12 md:py-16 px-4" style={{ backgroundColor: '#d8d4c8', paddingTop: '100px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <p 
              className="text-sm md:text-md font-light tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cantata)", color: '#314B6E' }}
            >
              What's Happening
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide"
              style={{ fontFamily: "var(--font-aldrich)", color: '#0E141C' }}
            >
              RECENT EVENTS
            </h2>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {sortedEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300 ease-out cursor-pointer"
                onClick={() => setSelectedEvent(event)}
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
                    style={{ fontFamily: "var(--font-aldrich)", color: '#0E141C' }}
                  >
                    {event.title}
                  </h3>

                  <p 
                    className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 md:mb-4 line-clamp-3"
                    style={{ fontFamily: "var(--font-cantata)", color: '#607EA2' }}
                  >
                    {event.description}
                  </p>

                  <div className="mb-3 md:mb-4 space-y-1">
                    <p 
                      className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-cantata)", color: '#314B6E' }}
                    >
                      <span className="font-medium">Date:</span> {event.date}
                    </p>
                    <p 
                      className="text-[10px] md:text-xs lg:text-sm font-light tracking-[0.1em]"
                      style={{ fontFamily: "var(--font-cantata)", color: '#314B6E' }}
                    >
                      <span className="font-medium">Venue:</span> {event.venue}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto"
            onClick={() => setSelectedEvent(null)}
          >
            <div 
              className="bg-white rounded-lg shadow-2xl w-full max-w-lg relative max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 w-8 h-8 text-2xl pb-1 flex items-center justify-center 
                          text-gray-700 hover:text-white bg-gray-300 hover:bg-gray-400 
                          rounded-full shadow-md transition-all duration-300 z-10"
                onClick={() => setSelectedEvent(null)}
              >
                &times;
              </button>

              {/* Event Image in Frame */}
              <div className="relative overflow-hidden aspect-[4/5] mb-4 border-2 border-gray-300 rounded-lg shadow-md">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="p-6 pt-0">
                <h3 
                  className="text-xl md:text-2xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-aldrich)", color: '#0E141C' }}
                >
                  {selectedEvent.title}
                </h3>
                <p 
                  className="text-sm md:text-base leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-cantata)", color: '#607EA2' }}
                >
                  {selectedEvent.description}
                </p>

                <div className="text-xs md:text-sm space-y-1">
                  <p><strong>Date:</strong> {selectedEvent.date}</p>
                  <p><strong>Venue:</strong> {selectedEvent.venue}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default EventsPage;