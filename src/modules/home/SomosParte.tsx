import SlideIn from "@/components/animations/SlideIn";
import { SiimIsotipo } from "public/SiimIsotipo";

const SomosParte = () => {
  return (
    <div className="flex w-full min-h-screen relative p-8 items-center justify-center">
      <SlideIn direction="toUp" delay={0.5} style={{ width: "auto" }}>
        <p className="text-2xl xl:text-4xl leading-8 xl:leading-10 max-w-full md:max-w-96 xl:max-w-[50rem] text-left md:text-center">
          Somos parte de su equipo de operaciones de construcción y{" "}
          <strong>
            trabajamos para garantizar que sus sistemas estén listos para operar
            en cualquier momento.
          </strong>
        </p>
      </SlideIn>
      <SlideIn
        direction="toDown"
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiimIsotipo
          width="40rem"
          circleColor="transparent"
          crossColor="#00000010"
          iconsColor="#00000010"
        />
      </SlideIn>
    </div>
  );
};

export default SomosParte;
