import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const metadata: Metadata = {
  title: "SIIM Ingeniería",
  description: "Servicios integrales de ingeniería y montajes",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
