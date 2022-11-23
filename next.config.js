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
    return {
      beforeFiles: [
        {
          source: `/_next/static/:path*`,
          destination: '/aaug1-website/_next/static/:path*'
         },
         {
          source: `/images/:path*`,
          destination: '/aaug1-website/images/:path*'
         },
      ]
    }
  },
}