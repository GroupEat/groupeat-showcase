'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: './js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'build'),
    filename: '[hash].[name].bundle.js',
    chunkFilename: '[hash].[id].bundle.js',
    publicPath: 'build/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader?browsers=last 5 version'
        ),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader?browsers=last 5 version!less-loader'
        ),
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
      path.resolve(__dirname, 'js/')
    ]
  },
  plugins: [
    new ExtractTextPlugin('../[hash].index.bundle.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
