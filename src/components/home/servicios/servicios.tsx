import { SlideIn } from "@/components/common";
import ServicesList from "./services-list";

const Servicios = () => {
  return (
    <div className="flex flex-col py-32 justify-between" id="servicios">
      <div className="flex flex-col px-8 md:px-16 xl:px-32 pb-16 gap-4">
        <SlideIn>
          <h1 className="text-4xl xl:text-6xl font-bold leading-none self-start">
            NUESTROS <br /> SERVICIOS.
          </h1>
        </SlideIn>

        <SlideIn delay={0.5}>
          <p className="text-base leading-6">
            Nos enfocamos en satisfacer las necesidades en las áreas de
            seguridad electrónica, sistema de protección contra incendios y
            electricidad para el sector industrial, retail, edificios
            comerciales y habitacionales.
          </p>
        </SlideIn>
      </div>

      <SlideIn direction="toLeft" delay={0.75}>
        <ServicesList />
      </SlideIn>
    </div>
  );
};

export default Servicios;
