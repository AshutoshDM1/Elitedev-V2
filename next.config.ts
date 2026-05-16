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
        hostname: "insightai.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "codegen.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "kiro.elitedev.space",
      },
      {
        protocol: "https",
        hostname: "web3-wallet-v1-0-0.vercel.app",
      },
      {
        protocol: "https",
        hostname: "rps-web-sage.vercel.app",
      },
      {
        protocol: "https",
        hostname: "elite-cli.vercel.app",
      },
    ],
  },
};

export default nextConfig;
