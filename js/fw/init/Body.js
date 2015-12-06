/**
 *  BodyInit set ng-view to the index.html.
 *
 *
 *  @author  groupeat
 *  @date    Dec 5, 2015
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import angular from 'angular';

class Initializer extends InitBase {
    run() {
        angular.element(document.body).append('<div ng-view autoscroll="true" class="main"></div>');
    }
}

export default Initializer;
