/** @type {import('next').NextConfig} */

// import plugin next-intl
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.cms-sqmnutrition.somosforma.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// (default)
// export default nextConfig;

// with next-intl
export default withNextIntl(nextConfig);
