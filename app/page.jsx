"use client";

import Layout from "@/components/ui/Layout";
import HeroBanner from "@/components/ui/HeroBanner";
import InnovationBanner from "@/components/ui/InnovationBanner";
import AnnouncementsCarousel from "@/components/ui/Announcements";
import AboutSection from "@/components/ui/AboutUs";
import TeamMembers from "@/components/ui/Team";
import StatsCounter from "@/components/ui/Stats";
import RecentEvents from "@/components/ui/RecentEvents";
import WhyJoinUs from "@/components/ui/WhyJoinUs";
import FAQ from "@/components/ui/Faq";

// ✅ Structured Data (JSON-LD for SEO)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rotaract Club of Coimbatore Cosmopolitan",
  url: "https://www.rotaractcbecosmopolitan.in",
  logo: "https://www.rotaractcbecosmopolitan.in/favicon.ico",
  sameAs: [
    "https://www.instagram.com/rac_cbe_cosmopolitan/",
    "https://www.linkedin.com/company/rotaract-club-of-coimbatore-cosmopolitan/",
    "https://www.facebook.com/coimbatorecosmopolitan.coimbatorecosmopolitan.9/",
  ],
  description:
    "Official website of the Rotaract Club of Coimbatore Cosmopolitan — empowering youth through service, leadership, and community initiatives.",
};

export default function Home() {
  return (
    <Layout>
      {/* ✅ Add JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ✅ Main Page Content */}
      <HeroBanner />
      <AnnouncementsCarousel />
      <AboutSection />
      <TeamMembers />
      <InnovationBanner />
      <StatsCounter />
      <WhyJoinUs />
      <RecentEvents />
      <FAQ />
    </Layout>
  );
}
