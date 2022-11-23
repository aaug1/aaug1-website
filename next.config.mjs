/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: "./out",
  assetPrefix: './out',
};

export default nextConfig;