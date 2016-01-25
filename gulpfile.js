'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

gulp.task('build', callback => {
  const path = require('path');
  const replace = require('gulp-replace');
  const config = require('./webpack.config.prod');

  require('rimraf').sync('dist/');

  gulp.src(['img/**/*', 'fonts/**/*', 'robots.txt', '404.html'], {'base': '.'})
    .pipe(gulp.dest('dist/'));

  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString());
    gulp.src(['index.html'], {'base': '.'})
      .pipe(replace(
        '</head>',
        `<link rel="stylesheet" href="${stats.hash}.index.bundle.css">\n</head>`
      ))
      .pipe(replace('index.bundle.js', `${stats.hash}.index.bundle.js`))
      .pipe(gulp.dest('dist/'))
      .on('end', callback);
  });
});

gulp.task('watch', callback => {
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('./webpack.config.dev');

  new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    publicPath: '/build/'
  }).listen(8080, 'localhost', err => {
    if (err) {
        throw new gutil.PluginError('webpack-dev-server', err);
    }
    // Server listening
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

  // keep the server alive or continue?
  // callback();
  });
});
