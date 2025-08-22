/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
    esmExternals: false,
    legacyBrowsers: false,
  },
  // Force Babel usage, disable SWC completely
  future: {
    webpack5: true,
  },
  env: {
    NEXT_DISABLE_SWC: 'true',
  },
  // Override webpack to force Babel
  webpack: (config, context) => {
    // Disable SWC minification
    config.optimization.minimize = false;
    
    return config;
  },
  compiler: {
    // Explicitly disable all SWC features
    removeConsole: false,
  },
};

module.exports = nextConfig;
