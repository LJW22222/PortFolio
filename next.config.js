const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
  output : 'export',
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
};

module.exports = withPlausibleProxy(nextConfig);
