import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#8197AC] via-[#a4b5c4] to-[#BFCBD9]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p
                className="text-lg text-white/90 uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                About Us
              </p>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-aldrich)",
                  color: "#0E141C",
                }}
              >
                ROTARACT CLUB OF <br />
                <span className="text-[#E6DCCF]">COIMBATORE</span> <br />
                COSMOPOLITAN
              </h1>
            </div>

            <div className="space-y-6">
              <p
                className="text-lg leading-relaxed text-[0E141C]/95"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                Rotaract Club is a vibrant community of passionate young
                individuals dedicated to service, leadership, and meaningful
                change. Partnering with Rotary's global vision, we empower
                students and professionals to create a positive impact through
                service, collaboration, and innovation.
              </p>
              <p
                className="text-lg leading-relaxed text-[0E141C]/90"
                style={{ fontFamily: "var(--font-cantata)" }}
              >
                As proud members of the Cosmopolitan family, we inherit a
                legacy of excellence, diversity, and visionary leadership. With
                this year’s theme <span className="italic">“Revival”</span>, we
                aim to breathe new life into our projects, values, and
                communities.
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-2xl shadow-lg border border-white/30 
                bg-white/10 hover:bg-white/20 backdrop-blur-md 
                transition-all duration-300"
              >
                <span
                  className="font-semibold mr-3 text-sm md:text-base"
                  style={{ fontFamily: "var(--font-aldrich)", color: "#0E141C" }}
                >
                  READ MORE
                </span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="#0E141C"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/40 hover:scale-105 transform transition-all duration-500">
              <img
                src="/about/greedam_cosmo1.jpg"
                alt="Rotaract Club"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;