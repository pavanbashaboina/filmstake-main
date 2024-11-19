/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
      },
    transpilePackages: ['@studio-freight/react-lenis']
};

export default nextConfig;
