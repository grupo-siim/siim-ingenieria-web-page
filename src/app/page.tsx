"use client";

import { SlideIn } from "@/components/common";
import {
  DynamicNavbar,
  Footer,
  HomeNavbar,
  MobileMenu,
} from "@/components/layout";
import { Empresa, Hero, Servicios, SocialMedia, SomosParte } from "@/features";
import dynamic from "next/dynamic";
import { useState } from "react";

// Lazy load heavy components to improve initial page load
const Certificates = dynamic(
  () =>
    import("@/features/certificates/certificates").then((mod) => mod.default),
  { ssr: false },
);
const Team = dynamic(
  () => import("@/features/team/team").then((mod) => mod.default),
  { ssr: false },
);
const Contacto = dynamic(
  () => import("@/features/contacto/contacto").then((mod) => mod.default),
  { ssr: false },
);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <DynamicNavbar toggleMenuMobile={onToggle} />
      <MobileMenu isOpen={isOpen} toggleMenu={onToggle} />
      <div className="relative overflow-hidden flex flex-col">
        {/* Home Section */}
        <div className="flex flex-col min-h-screen" id="home">
          <HomeNavbar toggleMenuMobile={onToggle} />
          <Hero />
          <SlideIn direction="toDown" style={{ width: "auto", height: "auto" }}>
            <SocialMedia />
          </SlideIn>
        </div>

        <Empresa />
        <SomosParte />
        <Servicios />
        <Certificates />
        <Team />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}
