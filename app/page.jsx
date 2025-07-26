"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner"; // Import the new component
import AnnouncementsCarousel from "@/components/ui/Announcements";
import AboutSection from "@/components/ui/AboutUs";
import SponsorCarousel from "@/components/ui/Sponsor";
import TeamMembers from "@/components/ui/Team";

export default function Home() {

  return (
    <Layout>
      {/* Hero Banner Component */}
      <HeroBanner />

      <AnnouncementsCarousel/>

      <AboutSection/>

      <SponsorCarousel/>

      <TeamMembers />

      {/* Innovation Banner Component */}
      <InnovationBanner />
    </Layout>
  );
}