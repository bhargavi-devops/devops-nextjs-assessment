/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // enables optimized Docker builds
  swcMinify: true,
};

module.exports = nextConfig;
