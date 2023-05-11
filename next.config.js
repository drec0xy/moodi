/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
};


module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://moodi-api.vercel.app/',
        },
      ]
    },
};

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
})


module.exports = nextConfig;