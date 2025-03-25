const withPWA = require("@ducanh2912/next-pwa").default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development', 
  workboxOptions: {
    disableDevLogs: true,
  },
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "sw.js",
  runtimeCaching: [
    {
      urlPattern: /^https?.*\.html$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "html-cache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:js|css|ts|tsx)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /^https?.*\/images\/.*\.(?:png|jpg|jpeg|svg|gif|webp|pdf)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "image-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 60 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /\.(?:woff|woff2|ttf|eot)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "font-cache",
        expiration: {
          maxEntries: 30,
          maxAgeSeconds: 60 * 24 * 60 * 60,
        },
      },
    },
  ],
});

const nextConfig = {
  reactStrictMode: true,

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
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

module.exports = withPWA(nextConfig);

