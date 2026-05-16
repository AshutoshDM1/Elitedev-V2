import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aset.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "xcontext.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "epicron.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "mangaheaven.app",
      },
      {
        protocol: "https",
        hostname: "insight-ai.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "codegen.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "kiro.elitedev.space",
      },
    ],
  },
};

export default nextConfig;
