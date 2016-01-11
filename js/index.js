/**
 *  index.js launch the application.
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';

require.ensure(['jquery', 'bootstrap', 'home', 'less/main.less'], function(require) {
  require('less/main.less');
  require('jquery');
  require('bootstrap');
  require('home');
});
