"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner"; // Import the new component
import AnnouncementsCarousel from "@/components/ui/Announcements";
import AboutSection from "@/components/ui/AboutUs";
import SponsorCarousel from "@/components/ui/Sponsor";
import TeamMembers from "@/components/ui/Team";
import StatsCounter from "@/components/ui/Stats";
import RecentEvents from "@/components/ui/RecentEvents";
import WhyJoinUs from "@/components/ui/WhyJoinUs";
import FAQ from "@/components/ui/Faq";

export default function Home() {

  return (
    <Layout>
      {/* Hero Banner Component */}
      <HeroBanner />

      <AnnouncementsCarousel/>

      <AboutSection/>

      {/* <SponsorCarousel/> */}

      <TeamMembers />

      {/* Innovation Banner Component */}
      <InnovationBanner />

      <StatsCounter/>
      {/* Stats Counter Component */}

      <WhyJoinUs />

      <RecentEvents />

      <FAQ/>

      {/* Additional sections can be added here */}
    </Layout>
  );
}