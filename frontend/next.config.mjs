// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Enables static export
  images: {
    unoptimized: true, // required for static export if using next/image
  },
};

export default nextConfig;
