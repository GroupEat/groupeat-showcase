/**
 *  index.js launch the application.
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css').use();
    require('splash-screen').enable('circular');
});

require.ensure(['jquery', 'bootstrap', 'jquery.backstretch'], function(require) {
  require('jquery');
  require('bootstrap');
  require('jquery.backstretch');
})

require.ensure(['less/main.less', 'splash-screen', 'jquery', 'jquery.backstretch', './main'], function(require) {

    require('less/main.less');

    var App = require('./main').default;
    (new App()).run();
});
