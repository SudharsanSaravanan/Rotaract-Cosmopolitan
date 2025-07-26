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

  useEffect(() => {
    const banner = bannerRef.current;
    const robotHand = robotHandRef.current;
    const humanHand = humanHandRef.current;

    // Animation for robot hand (moves from right to left)
    gsap.fromTo(
      robotHand,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Animation for human hand (moves from left to right)
    gsap.fromTo(
      humanHand,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: banner,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[40vh] sm:h-[70vh] flex items-center justify-center overflow-hidden px-4 mx-auto bg-[#000843] text-white"
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
      />

      {/* Static Quote */}
      <div className="text-center z-10 absolute bottom-38 md:bottom-45 md:static md:inset-0 md:flex md:items-center md:justify-center">
        <p className="text-xs sm:text-xl md:text-[22px] font-light" style={{ fontFamily: 'var(--font-cantata)' }}>
          “Where purpose meets passion to ignite change across every horizon.”
        </p>
      </div>
    </section>
  );
}