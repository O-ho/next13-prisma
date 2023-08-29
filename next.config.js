/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
  env: {
    GITHUB_APP_CLIENT_ID: "0dbdb0a99e1306227384",
    GITHUB_APP_CLIENT_SECRET: "e6c9773888853a6097b9a980a4b629061e554b18",
    NEXTAUTH_SECRET: "mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=",
    NEXTAUTH_URL: "https://next13-prisma-ochre.vercel.app",
    // NEXTAUTH_URL: "http://localhost:3000",
    NEXT_PUBLIC_VERCEL_URL: "https://next13-prisma-ochre.vercel.app/api/trpc",
  },
};

module.exports = nextConfig;
