/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mui.com',
        port: '',
        pathname: '/static/screenshots/**',
      },
    ],
  },
};

export default nextConfig;
