/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'visit-counter.vercel.app',
      },
    ],
  },
}

export default nextConfig
