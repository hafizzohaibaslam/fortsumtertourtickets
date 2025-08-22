// next.config.ts
import type { NextConfig } from "next";

const ONE_YEAR = 31536000;

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_WP_BASE_URL?.split("//")[1] || "",
        pathname: "**",
      },
    ],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },

  async headers() {
    return [
      // ✅ Only for favicons: allow long caching
      {
        source:
          "/:icon(favicon\\.ico|favicon-48x48\\.png|favicon\\.svg|apple-touch-icon\\.png)",
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_YEAR}, immutable`,
          },
        ],
      },

      // (keep your existing global no-cache rule)
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
          { key: "Expires", value: "0" },
        ],
      },
    ];
  },
};

export default nextConfig;
