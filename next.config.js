/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-p3-scontent.fceb1-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "z-p3-scontent.fceb1-3.fna.fbcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
