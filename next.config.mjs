/** @type {import('next').NextConfig} */
const nextConfig = {};

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // loader: "imgix",
    // path: "",
  },
};

import { i18n } from "./next-i18next.config.mjs";

export { i18n };

export default config;

// export default nextConfig;
