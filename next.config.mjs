// next.config.mjs
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "raw.githubusercontent.com",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
