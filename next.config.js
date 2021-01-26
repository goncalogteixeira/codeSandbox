const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withPlugins = require('next-compose-plugins');
  const optimizedImages = require('next-optimized-images');
  
//const assetPrefix = process.env.BUILDING_FOR_NOW ? '/root' : ''
/*
module.exports = {
  assetPrefix,
  env: {
    ASSET_PREFIX: assetPrefix,
  },
}*/
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  env: {
    lang: 'pt',
    assetPrefix: isProd ? 'C:\\CSantosOnline\\Source\\Frontend\\root\\out' : 'C:\\CSantosOnline\\Source\\Frontend\\root\\out',
  },// next.config.js
 
})
module.exports=  withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);