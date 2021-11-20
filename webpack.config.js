const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svg/webpack'],
      },
    ],
  },
}