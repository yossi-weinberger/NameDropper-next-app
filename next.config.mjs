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

export default config;

// export default nextConfig;
