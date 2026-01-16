"use client";

import { menuArray } from "@/components/navbar/menuArray";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import SlideIn from "../animations/SlideIn";

const MobileMenu = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  const router = useRouter();
  return (
    <AnimatePresence>
      {isOpen && (
        <SlideIn
          direction="toDown"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 99999,
            background:
              "linear-gradient(0deg, rgba(237,242,247,0.5) 0%, rgba(237,242,247,0.75) 50%, rgba(237,242,247,1) 100%)",
            backdropFilter: "blur(20px)",
          }}
          duration={0.5}
        >
          <div className="flex flex-col w-full h-full md:hidden">
            {menuArray.map((item, i) => (
              <div
                key={i}
                className={`flex flex-grow items-center justify-center w-full border-b border-white text-2xl transition-all duration-500 cursor-pointer ${
                  i === menuArray.length - 1
                    ? "bg-gray-700 text-white active:bg-gray-900"
                    : "active:bg-gray-300"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  router.push(item.url);
                  toggleMenu();
                }}
              >
                <span>{item.label}</span>
              </div>
            ))}
            <button
              onClick={toggleMenu}
              className="btn-secondary absolute top-2 right-2 px-3 py-1"
            >
              X
            </button>
          </div>
        </SlideIn>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
