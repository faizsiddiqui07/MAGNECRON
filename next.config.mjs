/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  // Agar trailing slashes chahiye toh ise true kar sakte ho
  trailingSlash: false,
};

export default nextConfig;