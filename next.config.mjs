/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'bookyapp3-backend.onrender.com',
      },
    ],
  },
};

export default nextConfig;
