// libs
const merge = require('webpack-merge');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// configs
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // // only uncomment to analyze bundle size
    // new BundleAnalyzerPlugin(),

    // new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]
});
