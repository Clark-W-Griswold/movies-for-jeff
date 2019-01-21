// libs
const path = require("path");

module.exports = {
  entry: {
    app: [
      '@babel/polyfill', 
      path.resolve(__dirname, '../src/app.index.js')
    ]
  },
  plugins: [],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/, /web-server/],
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      containers: path.resolve(__dirname, '../src/containers'),
      helpers: path.resolve(__dirname, '../src/helpers'),
      layouts: path.resolve(__dirname, '../src/layouts'),
      modules: path.resolve(__dirname, '../src/modules'),
      src: path.resolve(__dirname, '../src'),
    },
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'dist/[name].bundle.js',
    chunkFilename: 'dist/[name].bundle.js',
    path: path.resolve(__dirname, '../web-server'),
    publicPath: '/'
  }
};
