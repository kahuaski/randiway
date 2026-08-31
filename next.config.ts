/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Agrega la propiedad domains clásica:
    domains: ['images.unsplash.com'],
    // Mantén remotePatterns por compatibilidad futura:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;