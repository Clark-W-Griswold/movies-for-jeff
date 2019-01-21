// libs
const merge = require('webpack-merge');
const webpack = require('webpack');
const PrettierPlugin = require("prettier-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// configs
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // // only uncomment to analyze bundle size
    // new BundleAnalyzerPlugin(),
    new PrettierPlugin({
      endOfLine: 'lf',
      jsxSingleQuote: true,
      singleQuote: true,
      trailingComma: "es5",
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ]
});
