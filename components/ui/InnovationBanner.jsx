"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InnovationBanner() {
  const bannerRef = useRef(null);
  const robotHandRef = useRef(null);
  const humanHandRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if mobile view (below md breakpoint)
      const isMobile = window.innerWidth < 768;

      // Robot Hand Animation
      gsap.fromTo(
        robotHandRef.current,
        {
          x: isMobile ? 200 : 300,
          y: isMobile ? -50 : -100,
          rotation: isMobile ? -20 : -30,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: isMobile ? 6 : 8,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: isMobile ? "top 100%" : "top 100%",
            end: isMobile ? "top 20%" : "top 10%",
            scrub: isMobile ? 2 : 3,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Human Hand Animation
      gsap.fromTo(
        humanHandRef.current,
        {
          x: isMobile ? -200 : -300,
          y: isMobile ? 50 : 100,
          rotation: isMobile ? 20 : 30,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: isMobile ? 6 : 8,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: isMobile ? "top 100%" : "top 100%",
            end: isMobile ? "top 20%" : "top 10%",
            scrub: isMobile ? 2 : 3,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax Effect on Text content
      gsap.fromTo(
        textRef.current,
        {
          y: isMobile ? 30 : 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: isMobile ? 4 : 6,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: isMobile ? "top 90%" : "top 80%",
            end: isMobile ? "top 40%" : "top 30%",
            scrub: isMobile ? 1.5 : 2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[40vh] sm:h-[70vh] flex items-center justify-center overflow-hidden px-4 mx-auto bg-[#101924] text-white"
      style={{ minHeight: "40vh" }} // Ensures height doesn't collapse on scroll back
    >
      {/* Robot Hand (Top, Right) */}
      <Image
        ref={robotHandRef}
        src="/Images/robot_hand_alpha.png"
        alt="Robot Hand"
        width={200}
        height={150}
        className="absolute top-[0%] md:top-[10%] -right-[12%] scale-100 md:right-0 md:scale-150 md:w-[350px] md:h-[225px] z-20"
        priority
        style={{
          transform: window.innerWidth < 768 ? "translate(200px, -50px) rotate(-20deg)" : "translate(300px, -100px) rotate(-30deg)",
          opacity: 0,
          position: "absolute",
        }}
      />

      {/* Human Hand (Bottom, Left) */}
      <Image
        ref={humanHandRef}
        src="/Images/human_hand_alpha.png"
        alt="Human Hand"
        width={200}
        height={150}
        className="absolute bottom-[0%] md:bottom-[10%] -left-[12%] scale-100 md:left-0 md:scale-150 md:w-[300px] md:h-[225px] z-20"
        priority
        style={{
          transform: window.innerWidth < 768 ? "translate(-200px, 50px) rotate(20deg)" : "translate(-300px, 100px) rotate(30deg)",
          opacity: 0,
          position: "absolute",
        }}
      />

      {/* Static Quote */}
      <div
        ref={textRef}
        className="text-center z-10 absolute bottom-38 md:bottom-45 md:static md:inset-0 md:flex md:items-center md:justify-center"
        style={{ opacity: 0 }}
      >
        <p className="text-xs sm:text-xl md:text-[22px] font-light" style={{ fontFamily: 'var(--font-cantata)' }}>
          “Where purpose meets passion to ignite change across every horizon.”
        </p>
      </div>
    </section>
  );
}