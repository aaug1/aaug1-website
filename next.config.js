/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: "",
  },
  basePath: "/aaug1-website",
  assetPrefix: "/aaug1-website/",
};

module.exports = {
  async rewrites() {
    return [
      {
       source: `/aaug1-website/_next/data/:path*`,
       destination: '/_next/data/:path*'
      },
    ]
  },
  nextConfig};