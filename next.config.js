/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/AI-Agency-Site',
  assetPrefix: '/AI-Agency-Site/',
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;