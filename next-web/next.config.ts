import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
