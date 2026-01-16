import SlideIn from "@/components/animations/SlideIn";
import Link from "next/link";
import MenuIcon from "public/icons/MenuIcon";
import { useState, useEffect } from "react";
import { menuArray } from "./menuArray";
import HorizontalLogo from "../ui/logos/HorizontalLogo";

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
          <MenuIcon />
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

        {isXl && (
          <SlideIn
            direction="toDown"
            delay={0.5}
            duration={0.5}
            style={{ width: "auto" }}
          >
            <Link href="https://distribuidora.siim.cl/" target="_blank">
              <button className="btn-primary btn-sm text-sm xl:text-base">
                Distribuidora
              </button>
            </Link>
          </SlideIn>
        )}
      </div>
    </div>
  );
};

export default HomeNavbar;
