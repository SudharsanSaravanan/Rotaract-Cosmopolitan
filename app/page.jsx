"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner"; // Import the new component
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import AnnouncementsCarousel from "@/components/ui/Announcements";
import AboutSection from "@/components/ui/AboutUs";
import SponsorCarousel from "@/components/ui/Sponsor";

export default function Home() {
  const countUpRefs = {
    projects: useRef(null),
    satisfaction: useRef(null),
    experience: useRef(null),
  };

  useEffect(() => {
    const options = {
      duration: 2.5,
      separator: ",",
      enableScrollSpy: true,
      scrollSpyOnce: true,
    };

    const projectsCounter = new CountUp(countUpRefs.projects.current, 24, options);
    const satisfactionCounter = new CountUp(countUpRefs.satisfaction.current, 98, { ...options, suffix: "%" });
    const experienceCounter = new CountUp(countUpRefs.experience.current, 2, { ...options, suffix: "+" });

    if (!projectsCounter.error) projectsCounter.start();
    if (!satisfactionCounter.error) satisfactionCounter.start();
    if (!experienceCounter.error) experienceCounter.start();
  }, []);

  return (
    <Layout>
      {/* Hero Banner Component */}
      <HeroBanner />

      <AnnouncementsCarousel/>

      <AboutSection/>

      <SponsorCarousel/>

      {/* Innovation Banner Component */}
      <InnovationBanner />
    </Layout>
  );
}