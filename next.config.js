/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['localhost', '*'],
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'www.amc.seoul.kr',
  //       pathname: '/asan/images/hospitalinfo',
  //     },
  //   ],
  // },
  reactStrictMode: true,
  swcMinify: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
