"use client";
import { useState } from "react";

const announcements = [
  "We are proud and happy to announce that our team for the year 2025–26 has won the bid to host DEWS – District Editorial Workshop and Seminar!",
  "Registrations for our next major event open soon! Stay tuned for more details and registration links.",
  "New bulletin release coming up this weekend — check the updates section for the latest club news.",
  "Community service project at local school this weekend — volunteers welcome to join us.",
  "Blood donation camp scheduled for next Friday at district office — make a difference in someone's life.",
  "Professional development workshop on leadership skills next month — enhance your career prospects.",
  "Annual fundraising gala planning committee meeting scheduled for this Thursday evening.",
  "Environmental awareness campaign launch next week — join us in making our city greener.",
];

export default function AnnouncementsCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="w-full py-10 px-4 relative overflow-hidden group"
      style={{
        backgroundColor: "#0E141C",
        minHeight: "160px",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <p
          className="text-white/90 text-md md:text-xl font-semi-bold tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-cantata)" }}
        >
          Announcements / Updates
        </p>
      </div>

      {/* Scrolling Text */}
      <div className="relative overflow-hidden">
        <div
          className={`whitespace-nowrap inline-block ${
            isPaused ? "" : "animate-scroll"
          }`}
          style={{
            fontFamily: "var(--font-aldrich)",
            color: "#BDB3A3",
            fontSize: "1.1rem",
            fontWeight: "300",
            letterSpacing: "0.05em",
            lineHeight: "1.6",
          }}
        >
          {[...announcements, ...announcements].map((announcement, index) => (
            <span key={index} className="inline-block">
              {announcement}
              <span className="mx-8 text-white/60">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Fades */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0E141C] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0E141C] to-transparent pointer-events-none z-10"></div>

      {/* Slower animation speed */}
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
          animation: scroll 90s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 70s linear infinite;
          }
        }

        @media (max-width: 480px) {
          .animate-scroll {
            animation: scroll 80s linear infinite;
          }
        }
      `}</style>
    </div>
  );
}
