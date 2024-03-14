/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],

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

export default withPlaiceholder(nextConfig);

//https://fakestoreapi.com
