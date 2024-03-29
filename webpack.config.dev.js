'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
    publicPath: 'build/'
  },
  debug: true,
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style/useable!css!autoprefixer?browsers=last 5 version'
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer?browsers=last 5 version!less'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.(eot|gif|png|svg|ttf|woff|woff2|jpg)\w*/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  resolve: {
    root: [
      path.resolve(__dirname),
      path.resolve(__dirname, 'js/'),
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
