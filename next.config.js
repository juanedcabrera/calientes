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
      {
        protocol: 'https',
        hostname: 'www.peppersofkeywest.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.foodservicedirect.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'hotsaucemall.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.hot-chili-sauce.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'louisianahotsauce.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'smallaxepeppers.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'adoboloco.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'i5.peapod.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.torchbearersauces.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.hot-chili-sauce.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'hotsaucefever.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.heatsupply.nl',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'fartleyfarms.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.olbrygging.no',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'goodiegonewild.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'leagueoffire.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.olbrygging.no',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.saucespiquantes.ca',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.chilisauser.no',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.saucempiquantes.ca',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'flowercityflavor.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'www.asskickin-giftshop.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'shop.tabasco.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: 'shortyawards.imgix.net',
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
