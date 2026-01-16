import SlideIn from "@/components/animations/SlideIn";
import { useEffect, useState } from "react";
import styles from "./certificates.module.css";

const images = [
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA13_EZ-ASSISTENCIA-Torres-Zacari%CC%81as-1-300x232.png",
    label: (
      <p>
        Curso virtual de NFPA° 13: <br />
        <strong>Instalacion de sistemas de rociadores [Edición 2019]</strong>
      </p>
    ),
    alt: "Certificate 1",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA25_Riordan-Alejandro-Marti%CC%81nez-Mata-1-300x232.png",
    label: (
      <p>
        Curso virtual de NFPA° 25: <br />
        <strong>
          Inspección, prueba y mantenimiento de sistemas de protección contra
          incendios a base de agua [Edición 2020]
        </strong>
      </p>
    ),
    alt: "Certificate 2",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/NFPA72_CL-Torres-Zacari%CC%81as-1-300x232.png",
    label: (
      <p>
        Curso virtual de NFPA° 72: <br />
        <strong>
          Código nacional de alarmas de incendio y señalización [Edición 2016]
        </strong>
      </p>
    ),
    alt: "Certificate 3",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/CERTIFICADO_NOTIFIER_OCT-2023_RIordan-Martinez-1-300x232.png",
    label: (
      <p>
        Certificate of Factory Training <br />
        <strong>Notifier Onyx University Latin America</strong>
      </p>
    ),
    alt: "Certificate 4",
  },
  {
    src: "https://ingenieria.siim.cl/wp-content/uploads/2022/02/Diploma-Curso-CA-Jesus-Isea-Enrique-Fernandez-1-232x300.png",
    label: (
      <p>
        BASH Distribución: <br />
        <strong>Control de acceso y ZKBIOSECURITY V5000</strong>
      </p>
    ),
    alt: "Certificate 5",
  },
];

const Certificates = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMd(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      id="certificaciones"
      className="flex min-w-[100vw] min-h-screen p-8 xl:p-32 items-center justify-center"
    >
      <SlideIn direction="toUp">
        <div className="flex flex-col md:flex-row overflow-hidden bg-gray-100 border border-gray-600 items-stretch shadow-[-25px_25px_75px_rgba(74,85,104,0.25)]">
          {/* TITLE FOR MOBILE */}
          {!isMd && (
            <div className="flex text-gray-900 border-b border-gray-600 text-2xl font-bold leading-none p-8 justify-center">
              <span className="self-center">CERTIFICACIONES</span>
            </div>
          )}
          <div className="flex flex-row overflow-x-auto items-stretch border-gray-600 p-2 pt-0 md:pt-2 pb-0">
            {images.map((image, key) => (
              <div
                key={key}
                className="flex bg-gray-300 gap-4 md:gap-8 p-8 md:p-16 xl:p-24 2xl:p-32 min-w-[80%] md:min-w-[40%] xl:min-w-[80%] 2xl:min-w-[60%] flex-col xl:flex-row text-xs md:text-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full object-contain"
                />
                {image.label}
              </div>
            ))}

            {/* TITLE FOR DESKTOP */}
            {isMd && (
              <div
                className={`flex text-gray-600 sticky right-[-0.5rem] top-[-0.5rem] bottom-0 text-4xl font-bold leading-none p-8 justify-center ${styles.title}`}
              >
                <span
                  className="self-center"
                  style={{ writingMode: "vertical-rl" }}
                >
                  CERTIFICACIONES
                </span>
              </div>
            )}
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Certificates;
