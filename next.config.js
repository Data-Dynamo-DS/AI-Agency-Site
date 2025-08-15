/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/AI-Agency-Site', // match your GitHub repo name here exactly
  images: {
    domains: ['localhost'],
  },
};

module.exports = nextConfig;