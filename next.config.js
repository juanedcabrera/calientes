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
        hostname: 'adoboloco.com',
      },
      {
        protocol: 'https',
        hostname: 'asskickin-giftshop.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
      },
      {
        protocol: 'https',
        hostname: 'fartleyfarms.com',
      },
      {
        protocol: 'https',
        hostname: 'flowercityflavor.com',
      },
      {
        protocol: 'https',
        hostname: 'goodiesgonewild.com',
      },
      {
        protocol: 'https',
        hostname: 'heatonist.com',
      },
      {
        protocol: 'https',
        hostname: 'hotsaucefever.com',
      },
      {
        protocol: 'https',
        hostname: 'hotsaucefindr.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'hotsaucemall.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'i5.peapod.com',
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'leagueoffire.com',
      },
      {
        protocol: 'https',
        hostname: 'louisianahotsauce.com',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'shop.tabasco.com',
      },
      {
        protocol: 'https',
        hostname: 'shortyawards.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'smallaxepeppers.com',
      },
      {
        protocol: 'https',
        hostname: 'www.chilisauser.no',
      },
      {
        protocol: 'https',
        hostname: 'www.foodservicedirect.com',
      },
      {
        protocol: 'https',
        hostname: 'www.heatsupply.nl',
      },
      {
        protocol: 'https',
        hostname: 'www.hot-chili-sauce.com',
      },
      {
        protocol: 'https',
        hostname: 'www.meijer.com',
      },
      {
        protocol: 'https',
        hostname: 'www.olbrygging.no',
      },
      {
        protocol: 'https',
        hostname: 'www.peppersofkeywest.com',
      },
      {
        protocol: 'https',
        hostname: 'www.saucespiquantes.ca',
      },
      {
        protocol: 'https',
        hostname: 'www.torchbearersauces.com',
      },
    ],
  },
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
};

module.exports = nextConfig;
