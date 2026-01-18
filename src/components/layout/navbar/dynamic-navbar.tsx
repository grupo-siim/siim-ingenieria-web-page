"use client";

import { HorizontalLogo } from "@/shared/assets/logos";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./dynamic-navbar.module.css";
import { menuArray } from "./menu-array";

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
    <div
      className={`${styles.navbarContainer} transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
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
          <Menu size={24} />
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
        </div>
      </div>
    </div>
  );
};

export default DynamicNavbar;
