"use client";

import SlideIn from "@/components/common/animations/slide-in";
import { HorizontalLogo } from "@/shared/assets/logos";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuArray } from "./menu-array";

const HomeNavbar = ({ toggleMenuMobile }: { toggleMenuMobile: () => void }) => {
  const [hover, setHover] = useState<number>();
  const [isXl, setIsXl] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsXl(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      id="homeNavbar"
      className="flex flex-row xl:flex-col p-8 gap-6 items-center w-full justify-between"
    >
      <SlideIn direction="toDown" style={{ width: "auto" }}>
        <HorizontalLogo width={160} />
      </SlideIn>

      <SlideIn direction="toDown" style={{ width: "auto" }}>
        <button
          className="btn-menu flex md:hidden p-2"
          onClick={toggleMenuMobile}
        >
          <Menu size={24} />
        </button>
      </SlideIn>

      <div className="hidden md:flex flex-row gap-4 xl:gap-6">
        {menuArray.slice(0, 5).map((item, i) => (
          <SlideIn
            key={i}
            direction="toDown"
            delay={i / 10}
            duration={0.5}
            style={{ width: "auto" }}
          >
            <div className="flex flex-col items-center gap-0">
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
          </SlideIn>
        ))}
      </div>
    </div>
  );
};

export default HomeNavbar;
