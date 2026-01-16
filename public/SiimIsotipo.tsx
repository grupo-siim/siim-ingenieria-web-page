import { SVGProps } from "react";

export interface SiimIsotipoProps {
  width?: string | number;
  circleColor?: string;
  crossColor?: string;
  iconsColor?: string;
  style?: React.CSSProperties;
}

export const SiimIsotipo = ({
  width = "100%",
  circleColor = "#c10e18",
  crossColor = "black",
  iconsColor = "white",
  style,
}: SiimIsotipoProps) => {
  return (
    <svg
      viewBox="0 0 395.65 395.65"
      style={{ width, height: "100%", ...style }}
    >
      <circle fill={circleColor} cx="197.8" cy="197.8" r="197.8" />
      <path
        fill={iconsColor}
        d="m307 160-3 1-3-1 3-1 3 1ZM309 163l8-1c5 2 10 5 14 9l-8 7c-4-6-9-11-14-15ZM280 196h-14c0-8 3-16 8-22l10 7c-3 5-4 10-4 15ZM285 178l-8-7c4-4 9-7 14-9l8 1c-5 4-10 9-14 15ZM304 165c6 3 12 9 15 15a37 37 0 0 1-30 0c3-6 9-12 15-15Z"
      />
      <path
        fill={iconsColor}
        d="M324 196h-40c0-5 1-9 3-13a40 40 0 0 0 34 0c2 4 3 8 3 13ZM304 235l3 1a35 35 0 0 1-6 0l3-1ZM299 232l-7 2c-6-2-11-5-15-9l8-7c4 6 9 11 14 14ZM319 216c-3 6-9 11-15 14-6-3-12-8-15-14a36 36 0 0 1 30 0ZM280 200c0 5 1 10 3 14l-9 8c-5-6-8-14-8-22h14Z"
      />
      <path
        fill={iconsColor}
        d="M324 200c0 4-1 9-3 13a40 40 0 0 0-34 0c-2-4-3-9-3-13h40ZM331 225c-4 4-9 7-15 9l-7-2c5-3 10-8 14-14l8 7ZM342 200c0 8-3 16-8 22l-10-8c3-4 4-9 4-14h14ZM328 196c0-5-1-10-4-15l10-7c5 6 8 14 8 22h-14ZM112 190h-3v-7c0-13-11-23-24-23s-24 10-24 23v7h-3c-2 0-5 2-5 5v36c0 3 3 5 5 5h54c3 0 5-2 5-5v-36c0-3-2-5-5-5Zm-21 20-2 2-1 9-2 2h-1l-2-2-1-9h-1l-1-2v-1c0-3 2-5 5-5s6 2 6 5v1Zm9-20H70v-7c0-8 7-15 15-15s15 7 15 15v7ZM178 125l51-42c1-1 1-3-1-3h-18l11-29c1-2-2-3-3-2l-51 42c-2 2-1 3 1 3h17l-11 29c0 2 2 3 4 2ZM230 317a32 32 0 0 1-20 30c-4-4-12-8-15-18-3-8 0-15-1-16-2 0-7 9-8 18v15l-11-7c-13-13-10-32-4-44 12-26 50-28 53-23 1 2-4 4-6 11-3 13 11 20 12 34Z"
      />
      <path
        fill={crossColor}
        d="M312 96 207 198l102 105a6 6 0 1 1-9 9L198 207 93 309a6 6 0 0 1-9 0c-3-3-3-7 0-9l105-102L87 93c-3-3-3-7 0-9 2-3 6-3 9 0l102 105L303 87c2-3 6-3 9 0 2 2 2 6 0 9Z"
      />
    </svg>
  );
};
