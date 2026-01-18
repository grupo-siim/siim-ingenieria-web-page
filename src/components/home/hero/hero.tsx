import { SlideIn } from "@/components/common";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex w-full flex-grow px-0 md:px-8 xl:px-32 items-stretch transition-all duration-1000">
      <div className="flex flex-grow flex-col md:flex-row transition-all duration-1000">
        <SlideIn>
          <div
            className="flex w-full h-full relative items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url(images/building.jpg)" }}
          >
            <h2 className="relative z-10 text-white text-3xl leading-normal">
              Desarrollamos <br />
              <strong>soluciones</strong>
            </h2>
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          </div>
        </SlideIn>

        <div className="flex flex-col w-full h-full">
          <SlideIn direction="toLeft" delay={0.5}>
            <div
              className="flex h-full relative p-6 flex-col justify-between bg-cover bg-center"
              style={{ backgroundImage: "url(images/ingenieria.jpg)" }}
            >
              <h3 className="relative z-10 text-white text-xl leading-normal max-w-60">
                Servicios integrales de ingeniería y montajes
              </h3>
              <Link href="/#servicios" className="self-end">
                <button className="btn-home btn-lg relative z-10">
                  <ChevronRight />
                </button>
              </Link>
              <div className="absolute inset-0 bg-red-800 mix-blend-multiply" />
            </div>
          </SlideIn>
        </div>
      </div>
    </div>
  );
};

export default Hero;
