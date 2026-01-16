"use client";

import MobileMenu from "@/components/navbar/MobileMenu";
import Certificates from "@/modules/home/certificates/Certificates";
import Contacto from "@/modules/home/contacto/Contacto";
import Empresa from "@/modules/home/empresa/Empresa";
import HomeComponent from "@/modules/home/HomeComponent";
import SomosParte from "@/modules/home/SomosParte";
import DynamicNavbar from "@/components/navbar/DynamicNavbar";
import Servicios from "@/modules/home/servicios/Servicios";
import Team from "@/modules/home/team/Team";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <DynamicNavbar toggleMenuMobile={onToggle} />
      <MobileMenu isOpen={isOpen} toggleMenu={onToggle} />
      <div className="relative overflow-hidden flex flex-col">
        <HomeComponent toggleMenuMobile={onToggle} />
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
