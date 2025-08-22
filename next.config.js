/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  // Handle font loading issues during build
  env: {
    NEXT_FONT_GOOGLE_MOCKED_RESPONSES: process.env.NODE_ENV === 'production' ? undefined : '[]',
  },
};

module.exports = nextConfig;
