"use client";

import SlideIn from "@/components/animations/SlideIn";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

// Lazy load the heavy map components
const Map = dynamic(() => import("react-map-gl").then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
      <span className="text-gray-500">Cargando mapa...</span>
    </div>
  ),
});
const Marker = dynamic(() => import("react-map-gl").then((mod) => mod.Marker), {
  ssr: false,
});
const NavigationControl = dynamic(
  () => import("react-map-gl").then((mod) => mod.NavigationControl),
  { ssr: false },
);
const Popup = dynamic(() => import("react-map-gl").then((mod) => mod.Popup), {
  ssr: false,
});

const Contacto = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const LATITUDE = -33.44797;
  const LONGITUDE = -70.64559;

  useEffect(() => {
    const checkWidth = () => setIsMd(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      className="flex flex-col-reverse md:flex-row w-screen h-screen overflow-hidden relative items-center justify-center"
      id="contacto"
    >
      <div className="w-full h-full">
        <Map
          initialViewState={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            zoom: 12,
            bearing: 0,
            pitch: 0,
          }}
          style={{ width: "100%", height: "100%" }}
          crossSourceCollisions
          mapStyle="mapbox://styles/mapbox/light-v9"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
          attributionControl={false}
          scrollZoom={false}
          dragPan={isMd}
        >
          <NavigationControl position="bottom-left" />

          <Marker
            key={1}
            longitude={LONGITUDE}
            latitude={LATITUDE}
            anchor="top"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setShowPopup(true);
            }}
          >
            <MapPin size={48} color="#d00" fill="#d00" />
          </Marker>

          {showPopup && (
            <Popup
              longitude={LONGITUDE}
              latitude={LATITUDE}
              anchor="top"
              closeButton={false}
              closeOnClick={false}
              offset={[0, 24] as [number, number]}
              onClose={() => setShowPopup(false)}
              style={{ minWidth: "350px" }}
            >
              <div className="flex flex-row leading-[0.9rem] p-4 gap-4">
                <div className="flex flex-col w-full gap-1">
                  <p className="font-bold text-left w-full">
                    Eleuterio Ramírez 731, Local A.
                  </p>
                  <p>8330253 Santiago, Región Metropolitana, Chile</p>
                </div>
                <Link
                  href="https://www.google.com/maps/place/Eleuterio+Ram%C3%ADrez+731,+8330253+Santiago,+Regi%C3%B3n+Metropolitana,+Chile/@-33.448038,-70.646019,18z/data=!4m5!3m4!1s0x9662c50b2c987881:0x7bb9883a07ee293!8m2!3d-33.4480591!4d-70.645584?hl=en-US"
                  target="_blank"
                >
                  <div className="flex flex-col">
                    <p className="min-w-max leading-none text-center">
                      ¿Cómo llegar?
                    </p>
                  </div>
                </Link>
              </div>

              <button
                className="btn-secondary btn-xs leading-none absolute top-2 right-2 text-[0.5rem]"
                onClick={() => setShowPopup(false)}
              >
                X
              </button>
            </Popup>
          )}
        </Map>
      </div>

      <SlideIn direction="toUp" style={{ position: "relative", zIndex: 2 }}>
        <div className="flex flex-col bg-white w-full h-full justify-between text-left md:text-right p-8 md:p-16 xl:p-32 pt-24 md:pt-32 gap-6">
          <div className="flex flex-col gap-6 md:gap-8 items-start md:items-end">
            <h1 className="text-4xl xl:text-6xl font-bold">¡CONTÁCTANOS!</h1>
            <p className="text-base md:text-xl xl:text-2xl">
              Conversar es la mejor manera de manifestar su necesidad y nosotros
              aportar la solución.
            </p>

            <Link
              href="https://web.whatsapp.com/send?phone=56983963903&text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20mas%20informaci%C3%B3n%20sobre%20proyectos%20y%2Fo%20instalaciones."
              target="_blank"
            >
              <button className="btn-primary btn-sm md:btn-md xl:btn-lg">
                Contáctanos
              </button>
            </Link>
          </div>

          <div className="flex flex-col xl:flex-row-reverse gap-8 pt-6 w-full justify-between items-start md:items-end">
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex items-center gap-2">
                <PhoneOutlined style={{ width: "24px" }} />
                <span>+56 2 3301 0928</span>
              </div>
              <div className="flex items-center gap-2">
                <MailOutlined style={{ width: "24px" }} />
                <span>contacto@siim.cl</span>
              </div>
              <div className="flex items-center gap-2">
                <PushpinOutlined style={{ width: "24px" }} />
                <span>Eleuterio Ramírez 731, Local A, Santiago.</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold">Síguenos</span>
              <div className="flex flex-row justify-center items-center text-gray-700 gap-4">
                <Link
                  href="https://www.facebook.com/SIIMSPAgroup"
                  target="_blank"
                >
                  <FacebookOutlined style={{ fontSize: "24px" }} />
                </Link>
                <Link
                  href="https://www.instagram.com/siim_spa/"
                  target="_blank"
                >
                  <InstagramOutlined style={{ fontSize: "24px" }} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/siim-group-43b2bb1b9/"
                  target="_blank"
                >
                  <LinkedinOutlined style={{ fontSize: "24px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SlideIn>

      <div
        className="absolute w-full md:w-[70%] xl:w-[80%] h-[80%] md:h-full right-0 top-0 z-[1]"
        style={{
          background: isMd
            ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%)"
            : "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%)",
        }}
      />
    </div>
  );
};

export default Contacto;
