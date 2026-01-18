"use client";

import { useFocus } from "@/shared/hooks";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { LegacyRef, useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    src: "/images/Riordan.png",
    alt: "Riordan",
    name: "Riordan Martínez",
    position: "CFO - Chief Financial Officer",
  },
  {
    src: "/images/Felix.png",
    alt: "Felix",
    name: "Félix Torres",
    position: "COO - Chief Operating Officer",
  },
  {
    src: "/images/Miguel.png",
    alt: "Miguel",
    name: "Miguel A. Muñoz",
    position: "Administrative Analyst",
  },
  {
    src: "/images/Jose.png",
    alt: "Jose",
    name: "José Miguel Tovar",
    position: "CSO - Chief Sales Officer",
  },
];

const Team = () => {
  const [active, setActive] = useState<number | null>(null);
  const [ref, setFocus] = useFocus();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex w-screen h-screen overflow-hidden relative"
      id="equipo"
    >
      {/* TITLE */}
      <div
        className={`absolute top-20 xl:top-24 2xl:top-32 left-0 right-0 transition-all duration-700 ${
          active === null && isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-0">
          <span className="text-xl leading-none">Conoce nuestro</span>
          <span className="text-6xl leading-none font-bold">EQUIPO</span>
          <span className="flex xl:hidden pt-4 items-center gap-8 font-bold text-gray-300 text-xs">
            <ChevronRight style={{ transform: "rotate(180deg)" }} />
            Desliza
            <ChevronRight />
          </span>
        </div>
      </div>

      {/* BIG NAME */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          active !== null
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12 pointer-events-none"
        }`}
      >
        {active !== null && (
          <span
            className="font-extrabold leading-none absolute top-16 md:top-32 right-[-0.5rem] text-gray-200 uppercase"
            style={{
              fontSize:
                active === 1
                  ? `${160 / teamMembers[active].alt.length}vw`
                  : `${140 / teamMembers[active].alt.length}vw`,
            }}
          >
            {teamMembers[active].alt}
          </span>
        )}
      </div>

      {/* NAME + POSITION + BUTTON */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-700 delay-100 ${
          active !== null
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-12 pointer-events-none"
        }`}
      >
        {active !== null && (
          <div
            ref={ref as LegacyRef<HTMLDivElement>}
            className="flex flex-col items-center md:items-end justify-between md:justify-center xl:justify-end w-full h-full p-8 md:p-16 xl:p-32 pt-24 md:pt-16 xl:pt-32"
          >
            <div>
              <p className="text-4xl md:text-6xl leading-none font-bold max-w-[40rem] md:max-w-80 xl:max-w-[40rem] text-center md:text-right">
                {teamMembers[active].name}
              </p>
              <p className="leading-none pb-4 text-center md:text-right">
                {teamMembers[active].position}
              </p>
            </div>

            <button
              className="btn-secondary text-xs relative py-2 px-3 leading-none flex items-center gap-2"
              onClick={() => setActive(null)}
            >
              Ver todo el equipo
              <ChevronRight
                style={{ fontSize: "0.5rem", transform: "rotate(90deg)" }}
              />
            </button>
          </div>
        )}
      </div>

      {/* IMAGES */}
      <div
        className="flex h-screen w-screen max-w-[100vw] overflow-y-hidden"
        style={{ overflowX: active === null ? "auto" : "hidden" }}
      >
        <div
          className={`flex w-[200vw] xl:w-[100vw] relative ${
            active === null ? "team-parent" : ""
          }`}
        >
          {teamMembers.map((member, i) => {
            const shouldShow = active === null || active === i;
            return (
              <div
                key={i}
                className={`flex absolute bottom-0 transition-all duration-700 ${
                  isVisible && shouldShow
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12 pointer-events-none"
                }`}
                style={{
                  height: active === i ? "clamp(75vh, 75vh, 100vh)" : "75vh",
                  marginLeft: active === i ? 0 : undefined,
                  left: active === i ? "clamp(0px, 2rem, 2rem)" : `${25 * i}%`,
                  right: 0,
                  margin: active === null ? "" : "auto",
                  aspectRatio: "2/3",
                  transitionDelay: `${i * 0.15}s`,
                }}
                onClick={() => setActive(i)}
              >
                <div className="flex-grow transition-all duration-500 cursor-pointer relative">
                  <Image src={member.src} alt={member.alt} fill />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
