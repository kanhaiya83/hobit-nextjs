// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'user-images.githubusercontent.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'firebasestorage.googleapis.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'https',
//         hostname: 'uploads-ssl.webflow.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: "https",
//         hostname: "**",
//     }
//     ],
//   },
// }

// module.exports = nextConfig
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
})
module.exports = withBundleAnalyzer({})