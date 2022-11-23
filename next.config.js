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

module.exports = nextConfig;