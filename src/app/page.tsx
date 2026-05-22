// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import UpcomingReleases from "@/components/sections/UpcomingReleases";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <UpcomingReleases />
      <Features />
      <CTA />
    </>
  );
}
