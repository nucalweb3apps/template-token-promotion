/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,  
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  }, 
  assetPrefix: './',
}
 



module.exports = nextConfig
