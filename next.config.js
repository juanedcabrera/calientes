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
      {
        protocol: 'https',
        hostname: 'www.meijer.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '',
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

