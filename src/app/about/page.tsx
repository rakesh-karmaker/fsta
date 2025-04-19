import AboutFSTA from "@/components/about/aboutFsta";
import AboutHero from "@/components/about/hero";
import Opportunities from "@/components/about/opportunities";
import WeDo from "@/components/about/weDo";
import Partners from "@/components/home/partners/partners";
import React from "react";

export default function About(): React.ReactNode {
  return (
    <main className="flex flex-col">
      <AboutHero />
      <WeDo />
      <Partners />
      <AboutFSTA />
      <Opportunities />
    </main>
  );
}
