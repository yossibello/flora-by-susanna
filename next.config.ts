import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Ignore old backup files during build
  typescript: {
    ignoreBuildErrors: false,
  },
  // Ensure Prisma client is included in serverless build
  outputFileTracingIncludes: {
    '/api/**': ['./node_modules/.prisma/client/**/*'],
  },
};

export default nextConfig;
