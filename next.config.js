/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: "",
  },
};

module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: `/my-app-namespace/_next/data/:path*`,
          destination: '/_next/data/:path*'
         },
      ]
    }
  },
  nextConfig};