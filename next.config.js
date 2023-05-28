/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**',
      },
    ],
  },
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
};



module.exports = nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'i.ytimg.com',
//         port: '',
//         pathname: '/vi/**',
//       },
//     ],
//   }, nextConfig
// };

