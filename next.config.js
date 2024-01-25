const { withPlausibleProxy } = require('next-plausible');

const nextConfig = {
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
  output: {
    export: true
  }
};

module.exports = withPlausibleProxy(nextConfig);
