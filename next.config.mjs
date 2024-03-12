/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://fakestoreapi.com",
        pathname: "https://fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;

//https://fakestoreapi.com
