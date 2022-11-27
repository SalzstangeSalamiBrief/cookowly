/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO CONFIGURE UNSPLASH => LATER CONFIGURE THE BACKEND
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
