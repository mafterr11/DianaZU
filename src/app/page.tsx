"use client";

import NavBar from "@/components/common/NavBar";
import AboutMeSection from "@/components/sections/AboutMeSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import MyProjectsSection from "@/components/sections/MyProjectsSection";
import CTA from "@/components/sections/CTA";
import ServicesSection from "@/components/sections/ServicesSection";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <NavBar />

      <div className="mx-4 mb-32 mt-32 flex flex-col gap-32 md:mx-16">
        <HeroSection />
        <AboutMeSection />
        <ServicesSection />
        <MyProjectsSection />
        <CTA />
      </div>
      <FooterSection />
    </main>
  );
}
