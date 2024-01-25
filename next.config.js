const { withPlausibleProxy } = require('next-plausible')

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
  // 정적 HTML 내보내기 설정 추가
  output: {
    export: true
  }
};

module.exports = withPlausibleProxy(nextConfig);
