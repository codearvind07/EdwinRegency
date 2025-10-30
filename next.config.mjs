/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Increase image optimization limits
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Configure remote patterns for Unsplash and other image sources
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
        // Set minimum cache TTL to improve performance
        minimumCacheTTL: 60,
        // Enable remote image optimization
        formats: ['image/webp'],
    },
};

export default nextConfig;