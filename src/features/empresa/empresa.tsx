import { SlideIn } from "@/components/common";
import Carousel from "./carousel";

const Empresa = () => {
  return (
    <div
      className="flex flex-col min-h-screen pt-8 md:pt-16 xl:pt-32"
      id="empresa"
    >
      <SlideIn direction="toUp">
        <h1 className="text-4xl xl:text-6xl font-bold leading-none ml-0 xl:ml-[17rem] self-start px-8 md:px-16 xl:px-32">
          EMPRESA.
        </h1>
      </SlideIn>
      <SlideIn direction="toUp" delay={0.5}>
        <div className="flex flex-col-reverse xl:flex-row gap-8 xl:gap-32 px-8 md:px-16 xl:px-32 pb-8 md:pb-16 xl:pb-32 pt-8 items-start xl:items-center text-sm xl:text-base leading-6">
          <p className="font-bold w-auto xl:w-48">
            Protegemos vidas y propiedades al mismo tiempo que brindamos un
            valor excepcional a nuestros clientes.
          </p>
          <p className="w-full">
            Somos{" "}
            <strong>
              SIIM SpA (Servicios integrales de Ingeniería y Montajes).
            </strong>{" "}
            Prestamos servicio en las áreas de seguridad electrónica,
            electricidad y sistemas de protección contra incendios.
            <br />
            <br />
            Además de ejecutar los trabajos antes mencionados, la empresa se
            encarga de realizar proyectos de ingeniería basándose en las normas
            nacionales e internaciones por las cuales se rijan las entidades del
            seguro y las municipalidades del país.
            <br />
            <br />
            Por ello, nuestra empresa de protección contra incendios tiene
            claros sus objetivos, entre los que se encuentra realizar el trabajo
            de forma correcta sin mirar el tiempo necesario para llevarlo a
            cabo. La principal finalidad es que los equipos que instalemos, y/o
            revisemos, estén en perfecto estado de funcionamiento cuando se
            necesiten.
          </p>
        </div>
      </SlideIn>

      <SlideIn direction="toLeft" delay={0.75}>
        <Carousel />
      </SlideIn>
    </div>
  );
};

export default Empresa;
