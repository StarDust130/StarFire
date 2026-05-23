/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allows all paths from this domain
      },
    ],
  },
};

module.exports = nextConfig; // Use 'export default nextConfig;' if using .mjs
