/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.purwadhika.com',
            port: '',
            pathname: '/static/brand/**',
          },
        ],
      },
}

module.exports = nextConfig
