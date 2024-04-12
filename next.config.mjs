// get env variable
import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    loader: 'custom',
    loaderOptions: {
      outputPath: 'public/images', // Adjust the output path as needed
      publicPath: '/_next/images',
    },
  },
};

/** @type {import('next').NextConfig} */
const nextConfigDev = {};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
