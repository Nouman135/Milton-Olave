/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Images are self-hosted in /public/images with pre-generated responsive variants, so serve them as plain files.
    unoptimized: true,
  },
};

export default nextConfig;
