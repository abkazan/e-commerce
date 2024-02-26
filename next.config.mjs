/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['static.nike.com', 'cdn.flightclub.com'],
        deviceSizes: [640, 768, 1024, 1280], 
        imageSizes: [256, 512, 1024]
    },
};

export default nextConfig;
