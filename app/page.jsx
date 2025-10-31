"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner"; // Import the new component
import AnnouncementsCarousel from "@/components/ui/Announcements";
import AboutSection from "@/components/ui/AboutUs";
import TeamMembers from "@/components/ui/Team";
import StatsCounter from "@/components/ui/Stats";
import RecentEvents from "@/components/ui/RecentEvents";
import WhyJoinUs from "@/components/ui/WhyJoinUs";
import FAQ from "@/components/ui/Faq";

export default function Home() {

  return (
    <Layout>
      <HeroBanner />
      <AnnouncementsCarousel/>
      <AboutSection/>
      <TeamMembers />
      <InnovationBanner />
      <StatsCounter/>
      <WhyJoinUs />
      <RecentEvents />
      <FAQ/>
    </Layout>
  );
}