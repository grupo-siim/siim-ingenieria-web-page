"use client";

import DesignIcon from "public/icons/DesignIcon";
import ElectricIcon from "public/icons/ElectricIcon";
import FireIcon from "public/icons/FireIcon";
import WorldIcon from "public/icons/WorldIcon";
import { useEffect, useState } from "react";
import styles from "./serviceslist.module.css";

const services = [
  {
    key: 1,
    icon: <DesignIcon />,
    label: "Diseño, revisión y evaluación",
    bg: "url(images/diseño-revision.jpg)",
  },
  {
    key: 2,
    icon: <FireIcon />,
    label: "Sistemas de protección contra incendios",
    bg: "url(images/sistemas-contra-incendios.jpg)",
  },
  {
    key: 3,
    icon: <WorldIcon />,
    label: "Sistemas de seguridad electrónica",
    bg: "url(images/sistemas-de-seguridad-electronica.jpg)",
  },
  {
    key: 4,
    icon: <ElectricIcon />,
    label: "Sistemas eléctricos, protección y montajes",
    bg: "url(images/sistemas-electricos.jpg)",
  },
];

const ServicesList = () => {
  const [active, setActive] = useState(2);
  const [order, setOrder] = useState(["1", "2", "3", "4"]);
  const [isLargerThan768, setIsLargerThan768] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsLargerThan768(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (isLargerThan768) {
      switch (active) {
        case 1:
          setOrder(["2", "3", "4", "1"]);
          break;
        case 2:
          setOrder(["1", "2", "3", "4"]);
          break;
        case 3:
          setOrder(["4", "1", "2", "3"]);
          break;
        case 4:
          setOrder(["3", "4", "1", "2"]);
          break;

        default:
          break;
      }
    } else {
      switch (active) {
        case 1:
          setOrder(["1", "2", "3", "4"]);
          break;
        case 2:
          setOrder(["4", "1", "2", "3"]);
          break;
        case 3:
          setOrder(["3", "4", "1", "2"]);
          break;
        case 4:
          setOrder(["2", "3", "4", "1"]);
          break;

        default:
          break;
      }
    }
  }, [active, isLargerThan768]);

  return (
    <>
      <div className={styles["all-slides"]}>
        {services.map((service, i) => (
          <div
            key={service.key}
            className={`${styles["single-slide"]} flex flex-col bg-center bg-cover`}
            data-order={order[i]}
            onClick={() => setActive(service.key)}
            style={{ backgroundImage: service.bg }}
          >
            <div className="flex flex-col items-start justify-end p-4 w-full h-full text-white bg-gradient-to-t from-black to-transparent">
              {service.icon}
              <p className="font-bold leading-4 md:leading-5 text-sm md:text-base xl:text-xl text-left max-w-60">
                {service.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-8 pr-8 xl:pr-16 items-center">
        <div className="h-[3px] bg-gray-300 w-full">
          <div
            className="h-full bg-red-600 transition-all duration-[2s]"
            style={{ width: `${active * 25}%` }}
          />
        </div>
        {[1, 2, 3, 4].map((item) => (
          <p
            key={item}
            onClick={() => setActive(item)}
            className={`cursor-pointer transition-all duration-[2s] font-bold leading-none ${
              active === item
                ? "text-4xl xl:text-6xl text-red-600"
                : "text-2xl xl:text-4xl text-gray-300"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

export default ServicesList;
