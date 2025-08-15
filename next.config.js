/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/AI-Agency-Site',
  assetPrefix: isProd ? '/AI-Agency-Site/' : '',
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;