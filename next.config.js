/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: 'https://jajiga-backend.liara.run',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jajiga-backend.liara.run',
      },
      {
        protocol: 'https',
        hostname: 'www.jajiga.com',
      },
    ],
  },
};

module.exports = nextConfig;