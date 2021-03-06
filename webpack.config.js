const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }h
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
  ],
};
