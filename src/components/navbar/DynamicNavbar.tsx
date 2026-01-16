"use client";

import styles from "./dynamicNavbar.module.css";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SlideIn from "@/components/animations/SlideIn";
import Link from "next/link";
import MenuIcon from "public/icons/MenuIcon";
import { menuArray } from "./menuArray";
import HorizontalLogo from "../ui/logos/HorizontalLogo";

const DynamicNavbar = ({
  toggleMenuMobile,
}: {
  toggleMenuMobile: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState<number>();
  const [homeNavbarHeight, setHomeNavbarHeight] = useState<number>();
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsXl(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    setHomeNavbarHeight(document?.getElementById("homeNavbar")?.offsetHeight);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > (homeNavbarHeight ?? 1)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <AnimatePresence>
      {visible && (
        <SlideIn
          direction="toDown"
          duration={0.75}
          className={styles.navbarContainer}
        >
          <div
            id="dynamicHomeNavbar"
            className="flex flex-row py-2 px-6 md:px-8 xl:px-32 gap-6 items-center w-full justify-between bg-white/60"
          >
            <Link href="/">
              <HorizontalLogo width={100} siimColor="black" />
            </Link>

            <button
              className="btn-menu flex md:hidden p-2"
              onClick={toggleMenuMobile}
            >
              <MenuIcon />
            </button>

            <div className="hidden md:flex flex-row gap-4 xl:gap-6">
              {menuArray.slice(0, 5).map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-0">
                  <Link href={item.url} scroll={false} replace>
                    <span
                      className={`nav-link text-sm xl:text-base transition-transform duration-500 ${
                        hover === i ? "-translate-y-1" : ""
                      }`}
                      onMouseEnter={() => setHover(i)}
                      onMouseLeave={() => setHover(undefined)}
                    >
                      {item.label}
                    </span>
                  </Link>
                  <div
                    className="h-px bg-gray-500 transition-all duration-500"
                    style={{
                      width: "110%",
                      maxWidth: hover === i ? "1000px" : "0px",
                    }}
                  />
                </div>
              ))}

              {isXl && (
                <Link href="https://distribuidora.siim.cl/">
                  <button className="btn-primary btn-sm text-sm xl:text-base">
                    Distribuidora
                  </button>
                </Link>
              )}
            </div>
          </div>
        </SlideIn>
      )}
    </AnimatePresence>
  );
};

export default DynamicNavbar;
