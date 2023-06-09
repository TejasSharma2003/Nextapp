/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: [
      '127.0.0.1',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'portfolio-strapi-backend.onrender.com'
    ],
  },
};

module.exports = nextConfig;
