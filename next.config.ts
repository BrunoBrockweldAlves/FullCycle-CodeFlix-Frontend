import type { NextConfig } from "next";

const nextConfig: NextConfig = {
        reactStrictMode: true,
        images: {
          domains: ['m.media-amazon.com'], // Add the domain here
        }
};

export default nextConfig;
