// craco.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        zlib: require.resolve('browserify-zlib'),
        https: require.resolve('https-browserify'),

      };
      return webpackConfig;
    },
  },
};
