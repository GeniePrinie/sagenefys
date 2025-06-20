/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // enables static export
  basePath: '/sagenefys',     // matches your GitHub repo name
  assetPrefix: '/sagenefys',  // needed for static assets
};

module.exports = nextConfig;
