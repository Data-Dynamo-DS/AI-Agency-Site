/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/AI-Agency-Site',
  assetPrefix: '/AI-Agency-Site/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
