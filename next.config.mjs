/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
};

export default withPlaiceholder(nextConfig);
