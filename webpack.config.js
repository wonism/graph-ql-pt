const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('bundle.css');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    extractCSS,
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }],
          ]
        }
      }]
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader','sass-loader']),
    }]
  },
};

module.exports = config;

