import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Product screenshots live in /public today; when a CMS/asset host is
    // added, whitelist it here.
    remotePatterns: [],
  },
};

export default nextConfig;
