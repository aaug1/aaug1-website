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
  assetPath: "/aaug1-website/"
};

module.exports = {
  async rewrites() {
    return [{
        source: `/aaug1-website/images/:path*`,
        destination: '/images/:path*'
    }]
  },
  nextConfig};