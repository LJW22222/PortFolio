/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      // Add additional paths if needed
    };
  },
};

module.exports = nextConfig;
