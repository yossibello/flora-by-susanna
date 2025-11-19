import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Ignore old backup files during build
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
