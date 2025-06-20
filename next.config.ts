import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Only needed if using next/image
  },
};

export default nextConfig;
