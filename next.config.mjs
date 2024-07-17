/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'ooegbiekzxzcmmphylsv.supabase.co/storage/v1/object/public/thumbnails/imgs/about.jpg'
      }
    ]
  }
};

export default nextConfig;
