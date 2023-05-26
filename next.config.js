/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
};

module.exports = nextConfig;
