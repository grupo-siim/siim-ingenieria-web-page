/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ingenieria.siim.cl",
      },
    ],
  },
};

module.exports = nextConfig;
