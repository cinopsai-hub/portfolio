/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false,
  },
  // Disable SWC entirely for sandboxed environments
  transpilePackages: [],
  compiler: {
    // Remove SWC usage completely
    removeConsole: false,
  },
};

module.exports = nextConfig;
