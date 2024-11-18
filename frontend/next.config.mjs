/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.pixabay.com"]
    },
    transpilePackages: ['@studio-freight/react-lenis']
};

export default nextConfig;
