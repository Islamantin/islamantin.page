/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // SWC minification is now enabled by default in Next.js v15.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
