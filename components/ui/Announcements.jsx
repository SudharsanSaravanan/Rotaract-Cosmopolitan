"use client";
const announcements = [
  "New bulletin release coming up this weekend — check the updates section for the latest club news.",
  "Community service project at local school this weekend — volunteers welcome to join us.",
  "The installation was a great hit — thank you to everyone who joined and supported the event.",
  "Announcing our new President: Rtr. Akhil S for the Rotaract Club of Coimbatore Cosmopolitan."
];

export default function AnnouncementsCarousel() {
  return (
    <div
      className="w-full py-10 px-4 relative overflow-hidden group"
      style={{
        backgroundColor: "#0E141C",
        minHeight: "160px",
      }}
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
          className="whitespace-nowrap inline-block animate-scroll"
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
